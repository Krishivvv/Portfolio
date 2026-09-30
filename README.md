# Krishiv Sharma — portfolio

Personal site: AI products (VoiceDesk, Shiksha, Veridex) and eight live websites.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · motion · Lenis · cmdk.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
SITE_URL=http://localhost:3000 npm run build   # production build (needs SITE_URL, see Deploy)
SITE_URL=http://localhost:3000 npm run start   # serve the production build
npm run typecheck && npm run lint
```

Requires Node 20.9+.

## Where things live

- `content/` — every fact on the site (profile, projects, experience, skills, websites, diagrams). Sources are in `Krishiv/`; the ledger in `BUILD_NOTES.md` maps each fact to its line.
- `app/(landing)/` — the home page and the only place with presentation: the intro, Lenis smooth scrolling, reveals, parallax and the "Inside Shiksha" diagram.
- `app/(site)/` — functional pages (`/work/[slug]`, `/resume`): native scrolling, no presentation motion.
- `components/` — shared UI (header, footer, command palette, copy-email, static diagrams).
- `assets/sites/` — screenshots of the live websites.

To add a demo or repo link to a project, fill `links` in `content/projects.ts`. To show internship dates, set `period` in `content/experience.ts`.

## Deploy

Any Node host works; on Vercel, import the repo and deploy (no configuration needed).
Set `SITE_URL` (for example `https://example.com`) so canonical URLs, the sitemap and link previews use the real domain. On Vercel the production hostname is used automatically if `SITE_URL` is not set; anywhere else a production build without it fails on purpose, so no `localhost` URLs ship.
