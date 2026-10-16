# High Country Audubon Society website — notes for Claude

The website for the High Country Audubon Society (HCAS), a volunteer bird club in Boone, NC. The site's owner is not a web developer and makes changes by asking Claude, so keep things simple and explain changes in plain words.

## How it works

- Next.js (App Router) + Tailwind CSS. Every page is static. There's no database, no CMS, no plugins, and no environment variables.
- Pushing to `main` redeploys the site on Vercel in about a minute. Run `pnpm build` before pushing; if the build fails, the site doesn't update.
- Keep Next.js patched (`pnpm update next`). Vercel refuses to deploy Next.js versions with known security issues.

## Where things are

- `src/content.ts` holds **all the text**. Change words here, not in the page files. Exports:
  - `org`: name, emails, Google Group, mailing address
  - `nav`: the menu
  - `walks`: the two weekly bird walks (place, times, details)
  - `pillars`: the home-page feature cards
  - `hawkWatch`: Mahogany Rock Hawk Watch stats and seasons
  - `motus`: the Motus tower page
  - `membership`: dues levels and how to join
  - `board`: board of directors
  - `history`: the history timeline
  - `projects`: habitat/park projects
  - `christmasCounts`: Christmas Bird Count circles
- `src/app/<page>/page.tsx` holds the page layouts: home, about, bird-walks, hawk-watch, join, motus, credits.
- `src/components/NextWalks.tsx` works out upcoming walk dates automatically (every Wednesday at Valle Crucis, first Saturday at Brookshire Park). Change the rules here if the schedule changes.
- `src/components/Birds.tsx`, `Reveal.tsx` and `Counter.tsx` are the animations (birds flying, fade-ins, count-up numbers). They respect reduced-motion settings.
- `public/img/` holds photos. Most are Wikimedia Commons images with open licenses. **Every photo needs an entry in `src/credits.json`** (photographer + license); the /credits page lists them. Don't add photos you don't have the rights to use.
- `src/app/robots.ts` hides the site from search engines **on purpose** while it's a preview. Switch it to allow when the site goes live.
- `docs/old-site/` is the archive of the old WordPress site (highcountryaudubon.org, as saved by the Internet Archive in 2025): `content.json` has the extracted text of every page, `pages/` has the raw HTML, and `theirs/` has the club's original logo and photo files. Use it as the source when adding content from the old site.

## Known issues and open items

- **Board list is from 2025.** Update `board` in `src/content.ts` with the current board.
- **History "2010" is unverified.** The old site only says "the third year" put the chapter on solid footing. Confirm the real year or change it to "Year three".
- **"Pay dues online" is a placeholder.** The button in `src/app/join/page.tsx` says "link coming". Point it at a hosted PayPal or Stripe payment link so card details never touch the site.
- **Logo is low resolution.** The owl is cropped from an 89-pixel-tall image. Replace it with the original logo file when available.
- **Missing PDFs from the old site:** Sue Wells Research Grant application, Valle Crucis bird list, High Country Hoots newsletter archive, birding hotspot info sheets. Put them in `public/docs/` and link them.
- **Motus links** go to the motus.org homepage. The old site linked to the club's own tower data and each bird's track (see `docs/old-site/pages/motus-tower.html`).
- **Not built yet (content is in `docs/old-site/`):** field trips list, Christmas Bird Count detail, plants for birds, local birding hotspots, be a considerate birder, volunteer opportunities, resources, High Country Hoots, meetings.
- **Ideas:** a "skip these dates" list for cancelled walks (weather, holidays); a dated special-events list (field trips, Christmas Bird Count, Hawk Watch); a printable mail-in membership form; a link-preview image for sharing on email and Facebook.

## Style

- Plain, friendly copy. Short sentences. No jargon.
- Check every change at phone width.
- Keep it static and dependency-light. Don't add a database, CMS, or analytics without asking.
