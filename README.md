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
3. In Vercel, open **Firewall > Rules > Add Rule**, choose a rate-limit rule, match `/*`, identify visitors by **IP address**, set the limit to **15 requests per 5 minutes**, and configure the action as **Deny**. This covers page routes, API routes, and form submissions.
4. Add the same variables to the Preview environment if preview deployments need working forms. Redeploy after changing environment variables.

Vercel Firewall is required for a reliable site-wide IP limit because Vercel runs multiple instances. An in-memory JavaScript counter would reset between instances and cannot enforce one shared limit.
