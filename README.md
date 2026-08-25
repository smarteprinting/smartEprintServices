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
2. Create a Cloudflare Turnstile widget for your production domain and add its site key and secret key to Vercel Environment Variables as `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.
3. Add the same variables to the Preview environment if preview deployments need working forms. Redeploy after changing environment variables.
4. In Vercel Firewall, enable the managed protection rules and add a rate-limit rule for `/api/contact` and `/api/book-appointment`. A practical starting point is 5 requests per 10 minutes per IP; tune it using legitimate campaign traffic.

The rate limiter in the application is an additional per-instance safeguard. Vercel Firewall should remain the primary distributed protection for campaign traffic because serverless instances do not share in-memory state.
