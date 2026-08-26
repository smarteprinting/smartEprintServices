import { Redis } from "@upstash/redis/cloudflare";
import { NextResponse } from "next/server";

const RATE_LIMIT_MAX = 15;
const RATE_LIMIT_WINDOW_SECONDS = 6 * 60 * 60; // 6 hours

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
      })
    : null;

function getClientIp(request) {
  return (
    request.headers.get("x-real-ip") ||
    request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      ?.trim() ||
    "unknown"
  );
}

async function isRateLimited(ip) {
  if (!redis) {
    throw new Error(
      "Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN."
    );
  }

  const key = `site-rate-limit:${ip}`;

  const count = await redis.eval(
    `local count = redis.call('INCR', KEYS[1])
     if count == 1 then
       redis.call('EXPIRE', KEYS[1], ARGV[1])
     end
     return count`,
    [key],
    [RATE_LIMIT_WINDOW_SECONDS]
  );

  return Number(count) > RATE_LIMIT_MAX;
}

export async function middleware(request) {
  const ip = getClientIp(request);

  console.info(
    "[traffic]",
    JSON.stringify({
      ip,
      method: request.method,
      path: request.nextUrl.pathname,
      country:
        request.headers.get("x-vercel-ip-country") || "unknown",
    })
  );

  // -----------------------------
  // RATE LIMIT
  // -----------------------------

  try {
    if (await isRateLimited(ip)) {
      return new NextResponse(
        `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Access Blocked</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: #f8fafc;
      font-family: Arial, sans-serif;
      color: #0f172a;
    }

    .card {
      width: 100%;
      max-width: 420px;
      text-align: center;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 40px 28px;
    }

    .icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fef2f2;
      color: #dc2626;
      font-size: 30px;
      font-weight: bold;
    }

    h1 {
      margin: 0 0 10px;
      font-size: 26px;
    }

    p {
      margin: 0;
      color: #64748b;
      font-size: 15px;
      line-height: 1.6;
    }

    .reason {
      margin-top: 22px;
      padding: 14px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      font-size: 14px;
      color: #475569;
    }

    .footer {
      margin-top: 22px;
      font-size: 12px;
      color: #94a3b8;
    }
  </style>
</head>

<body>

  <div class="card">

    <div class="icon">!</div>

    <h1>Access Blocked</h1>

    <p>
      Too many requests were detected from your connection.
      Please try again later.
    </p>

    <div class="reason">
      <strong>Rate Limit Reached</strong>
      <br>
      Your access has been temporarily restricted for 6 hours.
    </div>

    <div class="footer">
      Error 429 • Security Protection
    </div>

  </div>

</body>
</html>`,
        {
          status: 429,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Retry-After": String(RATE_LIMIT_WINDOW_SECONDS),
          },
        }
      );
    }
  } catch (error) {
    console.error(
      "Rate limiter failed:",
      error instanceof Error ? error.message : error
    );

    return new NextResponse(
      "Service temporarily unavailable.",
      {
        status: 503,
      }
    );
  }

  // -----------------------------
  // USER AGENT CHECK
  // -----------------------------

  const userAgent =
    request.headers.get("user-agent") || "";

  if (
    !userAgent ||
    /HeadlessChrome|PhantomJS|selenium|playwright|puppeteer/i.test(
      userAgent
    )
  ) {
    return new NextResponse(
      `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Access Denied</title>

  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8fafc;
      font-family: Arial, sans-serif;
    }

    .card {
      width: 90%;
      max-width: 420px;
      text-align: center;
      padding: 40px 25px;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
    }

    .icon {
      font-size: 42px;
      margin-bottom: 15px;
    }

    h1 {
      margin: 0 0 10px;
      color: #0f172a;
    }

    p {
      color: #64748b;
      line-height: 1.6;
    }
  </style>
</head>

<body>

  <div class="card">

    <div class="icon">🛡️</div>

    <h1>Access Denied</h1>

    <p>
      Security verification failed.
      Automated or anonymous browser activity was detected.
    </p>

  </div>

</body>
</html>`,
      {
        status: 403,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }
    );
  }

  // -----------------------------
  // SECURITY HEADERS
  // -----------------------------

  const response = NextResponse.next();

  response.headers.set(
    "X-Content-Type-Options",
    "nosniff"
  );

  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  response.headers.set(
    "X-Frame-Options",
    "DENY"
  );

  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.well-known|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};