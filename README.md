# Krishiv Sharma — portfolio

Personal site: AI products (VoiceDesk, Shiksha, Veridex) and nine websites (seven live, two in progress).
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · motion · Lenis · cmdk.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/ (see Deploy for SITE_URL)
npx serve out      # preview the export
npm run typecheck && npm run lint
```

Requires Node 20.9+.

## Where things live

- `content/` — every fact on the site (profile, projects, experience, skills, websites, diagrams). Sources are in `Krishiv/`; the ledger in `BUILD_NOTES.md` maps each fact to its line.
- `app/(landing)/` — the home page and the only place with presentation: the intro, Lenis smooth scrolling, reveals, parallax and the "Inside Shiksha" diagram.
- `app/(site)/` — functional pages (`/work/[slug]`, `/resume`): native scrolling, no presentation motion.
- `components/` — shared UI (header, footer, command palette, copy-email, static diagrams).
- `assets/sites/` — screenshots of the websites.
- `assets/photo.jpg` — add your portrait here (portrait orientation, at least 1200 px tall) and rebuild; the photo frames on `/about` and the home page pick it up automatically.

To add a demo or repo link to a project, fill `links` in `content/projects.ts`. To show internship dates, set `period` in `content/experience.ts`.

## Deploy

The site lives at **https://krishiv-sharma.pages.dev** (Cloudflare Pages project `krishiv-sharma`, a direct-upload project). To publish a new version:

```bash
npm run build
npx wrangler pages deploy out --project-name krishiv-sharma --branch main
```

Pushing to `main` also deploys a mirror through Cloudflare Workers Builds (the `portfolio` Worker, configured by `wrangler.jsonc`) at https://portfolio.sharmakrishiv1205.workers.dev.

Canonical URLs, the sitemap and link previews use the Pages address by default. After attaching a custom domain, set `SITE_URL` (for example `https://example.com`) when building.
