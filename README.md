# High Country Audubon Society website

A simple, fast website for the High Country Audubon Society (Boone, NC). It has no plugins and no database, so there's nothing to patch and nothing to hack. Built pro bono by [Mountain Dev](https://mountaindev.com).

## Deploy your own copy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHigh-Country-Dev%2Fhigh-country-audubon&project-name=high-country-audubon&repository-name=high-country-audubon)

The button copies this repository into your own GitHub account and deploys it to your Vercel account. Both accounts are free. After that, every change you commit to your copy redeploys the site automatically.

## Editing the site

Almost all the text is in one file: [`src/content.ts`](src/content.ts). Walk times, board members, history, and page copy all live there. Edit it on GitHub (pencil icon), commit, and the site updates in about a minute.

- **Walk dates** calculate themselves (every Wednesday at Valle Crucis, first Saturday at Brookshire), so there's no calendar to maintain. The walk descriptions and times are in `src/content.ts`; the date rules are in `src/components/NextWalks.tsx`.
- **Photos** are in `public/`. Credits and licenses for each photo are in `src/credits.json` and show on the /credits page.
- **Online dues:** the "Pay dues online (link coming)" button is in `src/app/join/page.tsx`. Point it at a PayPal (or Stripe) payment link so card details never touch the site.

## Going live

The site is currently hidden from search engines. When it's ready to replace highcountryaudubon.org:

1. In `src/app/robots.ts`, change `disallow: "/"` to `allow: "/"` and commit.
2. In Vercel, open the project, then Settings → Domains, and add `highcountryaudubon.org`. Vercel shows the DNS records to set at your domain registrar.

## Running it on your computer (optional)

Needs Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

Built with Next.js and Tailwind CSS. Keep Next.js up to date (`pnpm update next`): Vercel refuses to deploy versions with known security issues.
