import { Redis } from '@upstash/redis/cloudflare';
import { NextResponse } from 'next/server';

const RATE_LIMIT_MAX = 15;
const RATE_LIMIT_WINDOW_SECONDS = 5 * 60;
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? Redis.fromEnv()
  : null;

function getClientIp(request) {
  return request.headers.get('x-real-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
}

async function isRateLimited(ip) {
  if (!redis) {
    throw new Error('Rate limiter is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.');
  }

  const key = `site-rate-limit:${ip}`;
  const count = await redis.eval(
    `local count = redis.call('INCR', KEYS[1])
     if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
     return count`,
    [key],
    [RATE_LIMIT_WINDOW_SECONDS]
  );

  return Number(count) > RATE_LIMIT_MAX;
}

export async function middleware(request) {
  const ip = getClientIp(request);
  console.info('[traffic]', JSON.stringify({
    ip,
    method: request.method,
    path: request.nextUrl.pathname,
    country: request.headers.get('x-vercel-ip-country') || 'unknown',
  }));

  try {
    if (await isRateLimited(ip)) {
      return new NextResponse('Too many requests. Please try again in a few minutes.', {
        status: 429,
        headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_SECONDS) },
      });
    }
  } catch (error) {
    console.error('Rate limiter failed:', error.message);
    return new NextResponse('Service temporarily unavailable.', { status: 503 });
  }

  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  const userAgent = request.headers.get('user-agent') || '';
  if (!userAgent || /HeadlessChrome|PhantomJS|selenium|playwright|puppeteer/i.test(userAgent)) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.well-known|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)'],
};