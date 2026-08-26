import { NextResponse } from 'next/server';

export function middleware(request) {
  console.info('[traffic]', JSON.stringify({
    ip: request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown',
    method: request.method,
    path: request.nextUrl.pathname,
    country: request.headers.get('x-vercel-ip-country') || 'unknown',
  }));

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