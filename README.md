# No Face Patriot — Fan Site + Merch Shop

Official fan hub and merch storefront for **No Face Patriot** — defiant patriotic American AI character.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- Stripe Checkout (`/api/checkout`) — graceful stub when `STRIPE_SECRET_KEY` is missing
- Join / contact notify via Gmail SMTP + nodemailer when credentials are set

## Routes

| Path | Description |
|------|-------------|
| `/` | Hero + CTAs |
| `/about` | Character story |
| `/shop` | Merch catalog (3 placeholders) |
| `/shop/[slug]` | Product detail + Buy |
| `/shop/success` | Stripe success |
| `/shop/cancel` | Stripe cancel |
| `/join` | Email capture |
| `/contact` | Contact form |
| `/api/checkout` | Create Stripe Checkout Session |
| `/api/join` | Validate email + notify via Gmail |

## Local setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Environment

See `.env.example`. Do not commit secrets.

- `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — enable live checkout
- `GMAIL_USER` + `GMAIL_APP_PASSWORD` — enable join/contact email notify
- `JOIN_NOTIFY_EMAIL` — defaults to `GMAIL_USER`
- `NEXT_PUBLIC_SITE_URL` — Stripe redirect base URL

## Deploy

Linked to Vercel from GitHub `rdebar3/nofacepatriot-web`. Domain TBD — ship on `*.vercel.app` first.
