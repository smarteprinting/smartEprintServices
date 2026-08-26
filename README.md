# SmartEprint Services

A responsive Next.js landing page for SmartEprint Services, built with JavaScript and JSX.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Vercel will detect the Next.js app automatically.
4. Deploy.

## Form security

The appointment and contact APIs require Cloudflare Turnstile verification, reject honeypot submissions, validate and length-limit all fields, escape email content, and rate-limit each client IP before sending email.

1. Copy `.env.example` to `.env.local` for local development and replace the SMTP values.
2. Create an Upstash Redis database and add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` to Vercel Environment Variables.
3. Create a Cloudflare Turnstile widget for your production domain and add its site key and secret key to Vercel Environment Variables as `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
4. Add the same variables to the Preview environment if preview deployments need working forms. Redeploy after changing environment variables.

Middleware uses the shared Redis database to allow 15 requests per IP in a rolling 5-minute window. The 16th request receives HTTP 429 and no page or API response is served. This applies across the whole site, not separately per form.
