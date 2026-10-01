# BUILD_NOTES — working memory

Brief: `PROMPT.md` (Master Directive V2 + the original build spec below it; the V2 directive wins on conflicts).
Research: `gemini-code-1790761340705.md` — this is the file the brief calls `PORTFOLIO_RESEARCH.md` (principles only).
UI/UX Pro Max + Taste Skill: `claude_code_skills.md` (supplied by the user as the skill; no `ui-ux-pro-max` SKILL.md exists on this machine).

History: V1 (2026-09-30) was a restrained single-page landing. The V2 directive judged it "too plain, too static, too close to a generic template" and asked for a motion-rich, art-directed, multi-page build. V1's verified content, diagrams, accessibility and performance work carry over; the design, routes and motion system are rebuilt.

Status: see "Progress" at the bottom. Krishiv's review of 2026-10-01 is in §8.

---

## 1. Content ledger

Every factual string on the site traces to `R` = `Krishiv/Krishiv_Resume.md` or `D` = `Krishiv/data.md`. Code: `content/*.ts`.

| Fact | Source | Used |
| --- | --- | --- |
| Krishiv Sharma | R:1 | everywhere |
| Bhopal, India | R:3 | hero, about, contact, resume |
| sharmakrishiv1205@gmail.com | R:3 | contact, footer, menu, palette, resume |
| github.com/Krishivvv | R:3 | contact, footer, case studies ("Code"), resume, JSON-LD |
| +91 6261308722 | R:3 | **withheld** (privacy: not clearly given for public use; Q6) |
| B.Tech, Computer Science & Engineering · Jagran Lakecity University, Bhopal · Expected 2027 | R:77, R:81 | hero meta, about, experience, resume |
| High School · Sagar Public School, Saket Nagar, Bhopal · April 2023 | R:79, R:83 | experience, resume |
| "ships AI products, not just notebooks — three deployed apps …" | R:7 | hero, about |
| "Two ML/data internships"; "keen to build agentic and LLM-backed features on a real product team" | R:7 | about |
| Skills (resume groups) | R:11–21 | capabilities, about, resume |
| VoiceDesk / Shiksha / Veridex: titles, bullets, tech, "(solo)" | R:25–51 | home work, /work, case studies, diagrams, capabilities mapping |
| "Live demo · Code" | R:33, 43, 51 | links **missing** (Q4); case studies link the GitHub profile as "Code" |
| Machine Learning Intern, FoCDoT Technologies · Bhopal (+3 bullets, "up to 15%") | R:55–61 | experience, resume |
| Data Analyst Intern, AI Bricks Realtors Pvt Ltd · Pune (+3 bullets) | R:63–69 | experience, resume |
| Internship dates | R:71, R:73 | **withheld** — mapping ambiguous (Q9) |
| Partner, K2Aqua · Technical Head, Samarth Rao Studio · Technical Head, Uniqform | D:1, D:2, D:9 | experience, about, K2Aqua/Samarth Rao site pages, resume |
| 8 websites and frontend projects | D:11–19 | home, /work, site pages, palette, resume |
| Site names + one-line descriptors | each site's own `<title>`/meta (URLs from D), fetched 2026-09-30 | site cards and pages |
| Website media: desktop (1440×900), phone (390×844 @2×), long desktop (1440×2700) | captured from the live URLs, 2026-09-30 / 2026-10-01 | site cards and pages |
| Cricket Republic address | D:7 | linked; the `…spranjal18.workers.dev` address is not displayed (Q10) |

Not used although the research asserts them: "Senior", "Software Engineer & AI Product Builder", "Final Year", "available for roles", timezone widget, any metric not in R.

### Open questions for Krishiv
Resolved 2026-10-01 (see §8): 4 (live demos and repos, from the repos' READMEs), 7 (resume PDF supplied; same content as the .md), 9 (dates from the PDF), 10 (roles), 8 (krishiv-sharma.pages.dev). 1: the portrait slot is built and waits for `assets/photo.jpg`.

1. Portrait (About / hero moment) — portrait orientation, ≥1600 px. 2. VoiceDesk/Shiksha/Veridex screenshots or 10–20 s recordings (case-study heroes, hover previews). 3. Better website media (optional).
4. Demo + repo links for the three AI projects (public repos appear at github.com/Krishivvv/VoiceDesk, /Shiksha, /Veridex; unused until confirmed). 5. LinkedIn / Instagram / WhatsApp. 6. OK to publish the phone number?
7. Resume PDF. 8. Production domain (`SITE_URL`). 9. Internship date mapping (extraction order suggests FoCDoT = May–Nov 2025, AI Bricks = Jan–Mar 2026).
10. For each website: did you build it, what did you do, with what stack? Does "Technical Head" cover every site under that `data.md` line? Are roles current? Cricket Republic's own domain?
11. Veridex metric ("…on a held-out set." looks truncated). 12. Shiksha: which model made which output; what made the voiceover; GPT-4o/Gemini "served via Groq". 13. Preferred title.

---

## 2. Research inputs (V2 §2, §7, §8)

- **Reference sites** (from the research file): cinematic type and pacing (Stockt, Dennis) → masked, staggered display type and a paced landing; spatial polish (Rauno) → 1px lines, sliding hover highlight, shared-element project transition; editorial parallax (Saurabh) → layered screenshot columns at different speeds; recruiter clarity (Brittany) → visible nav, real routes, stack/links on every project; keyboard culture (Paco) → Ctrl/⌘K; technical personality (Midlife) → architecture diagrams as the AI projects' "imagery".
- **21st.dev** (browsed 2026-09-30 with a real browser). Useful motion libraries: Motion Primitives (MIT, github.com/ibelick/motion-primitives), Fancy Components (MIT, github.com/danielpetho/fancy), Magic UI (MIT, github.com/magicuidesign/magicui). Aceternity UI: no public repo/licence found → not used. Concepts studied and **reimplemented** (no code copied): stacking/sticky scroll cards, masked vertical-cut text reveal, sliding hover background via `layoutId` ("Animated Background"), text roll, media-between-text. Category pages (heroes, nav, cards, footers) are mostly generic SaaS blocks — used only as a list of what to avoid.
- **Figma Community** (portfolio website templates, browsed 2026-09-30): the most-used free templates split into editorial light layouts with oversized grotesk type, and dark neon "developer portfolio" designs. The second is exactly the look the directive rules out; the first informed the direction.

## 3. Design system (V2 §9–11)

### Palette exploration (three directions, rendered as the same hero)
- **A. Technical Luxury** — graphite / paper / lake (V1). Reads as "dark mode + cards"; rejected.
- **B. Editorial Engineering** — warm paper / near-black ink / vermilion, with dark "ink chapters". Chosen: authored, editorial, and it lets the colour shift between sections carry meaning (interface → intelligence).
- **C. Creative Systems** — deep neutral / mint / amber. Generic AI-tool look; rejected.
- (B2: same as B with Bricolage Grotesque condensed — striking, less legible; rejected.)

### Colour tokens (contrast on its own surface)
| Token | Hex | Role | Contrast |
| --- | --- | --- | --- |
| paper | `#EFEBE3` | background | — |
| paper-2 | `#E6E1D6` | surface | — |
| paper-3 | `#F7F4EE` | elevated | — |
| ink | `#161513` | text | 15.35 |
| ink-2 | `#44413B` | secondary text | 8.55 |
| muted | `#66625A` | muted text | 5.11 (4.66 on paper-2) |
| line / line-strong | `#D3CDC0` / `#BDB6A8` | 1px borders | — |
| accent (ultramarine) | `#2B3BD1` | links, primary button, focus, closing chapter | 6.67 on paper; white on it 7.93 |
| accent-hover | `#1F2BA6` | hover | — |
| accent-bright | `#4A5CFF` | large graphics only | non-text |
| night | `#121210` | ink-chapter background | — |
| night-2 | `#1B1A17` | ink-chapter surface | — |
| night-line | `#2E2C28` | ink-chapter borders | — |
| night-text / night-muted | `#EEEBE4` / `#A5A095` | ink-chapter text | 15.75 / 7.20 |
| night-accent | `#8E9BFF` | accent on ink | 7.40 |
| error | `#B3261E` | copy failure | — |

The first accent was vermilion `#B8361A`; Krishiv rejected the orange on 2026-10-01 ("not matching"; keep the light background). Ultramarine keeps the one-accent system and raises contrast everywhere.

### Type
Schibsted Grotesk (OFL) for display and text; Instrument Serif italic (OFL) for editorial accent words, used sparingly; Fragment Mono (OFL) for metadata, stacks, diagram labels. Display: oversized, tight tracking, intentional line breaks, asymmetric alignment ("Krishiv" left, "Sharma" right).

### Layout
12-column grid, 1320 px max, 16/32 px gutters; one radius family (8 px media, 999 px pills); 4/8 px spacing. Compositional variety per section: overlapping screenshot deck on the name, sticky layering (work rises over the hero), anchored preview list, offset parallax columns, pinned scrollytelling, full-bleed ink chapters, curtain footer.

## 4. Routes (V2 §4)
`/` (landing, cinematic) · `/work` (index + filter) · `/work/[slug]` (3 AI case studies + 9 website pages) · `/about` · `/experience` · `/contact` · `/resume` · 404. Functional routes: native scroll, immediate content, small local motion only.

## 5. Motion inventory (V2 §12 — each a different motion type)
1. Cinematic hero entrance — per-character masked rise, screenshot deck landing with overshoot, copy fade (CSS keyframes decided before first paint; skippable).
2. Staggered typographic reveal — hero name; section headlines (word masks via Motion when in view).
3. Scroll-triggered reveals — Motion variants with stagger, armed after hydration (server HTML stays visible).
4. Scroll-linked movement — hero lines drift apart and the deck fans out (`useScroll`/`useTransform`); website columns at different speeds.
5. Project image reveal — clip-path reveals on the website cards; anchored preview swaps with a clip wipe (`AnimatePresence`).
6. Project hover — title shift, arrow motion, image scale, preview swap (focus works the same).
7. Navigation/menu — sliding hover highlight (`layoutId`), hide-on-scroll header, full-screen menu with staggered links (`AnimatePresence`, native `<dialog>`).
8. Section-to-section — work panel rises over the sticky hero; paper → ink chapter wipes.
9. Project → case study — React `<ViewTransition>` shared element (title/media morph).
10. Microinteractions — press scale, arrow nudge, underline draw, copy-email label swap, filter pill.
11. Closing — scaling contact line and a curtain-reveal footer.
12. Chapters dealt like cards — each chapter rises at 90 % scale and reaches full size as its top meets the screen's (CSS scroll-driven, `view()` timeline).
13. Velocity marquee — giant site names (websites chapter) and resume themes (closing) drift sideways, speed up with scroll velocity and reverse with scroll direction (`useVelocity` + `useAnimationFrame`, paused off-screen).
14. Sweeps and tilts — AI system titles sweep in from alternating sides; website cards tip upright while their screenshots settle in the frame (CSS scroll-driven).
15. Portrait unveil — the photo frame opens out of a narrow window (CSS scroll-driven clip-path).
16. Footer wordmark — the giant name rises out of a mask line as the footer is uncovered (`scroll(root)` timeline).
17. Read-in statement — About words brighten in turn as it scrolls (CSS scroll-driven; replaced ~60 Motion components).
Signature: **Inside Shiksha** — pinned scrollytelling; scroll progress drives the pipeline stage, stages are also clickable.
Skip: real button, `portfolio-intro-skipped` in localStorage, Esc/scroll skip, replay in footer. Reduced motion: no intro, no Lenis, no scroll-linked motion, no view-transition animation.

## 6. Resources & licences (verified)
| Resource | Licence | Evidence | Where |
| --- | --- | --- | --- |
| Next.js 16.3.7, React 19.2.8 | MIT | npm registry | framework |
| motion 13.4.6 | MIT | npm + LICENSE.md; Motion+ not used | motion system |
| lenis 1.3.26 | MIT | npm registry | landing smooth scroll |
| cmdk 1.1.1 | MIT | npm registry | command palette |
| lucide-react 1.49.0 | ISC | npm registry | UI icons |
| Tailwind CSS 4 | MIT | npm registry | styling |
| sharp 0.35.5 | Apache-2.0 | package.json | build-time image sizes |
| Schibsted Grotesk, Instrument Serif, Fragment Mono | OFL-1.1 | OFL.txt in google/fonts | type (self-hosted via next/font) |
| Motion Primitives / Fancy Components / Magic UI | MIT | GitHub licence field | concepts studied, reimplemented |

Verification tools only (not in the project): Playwright, axe-core, Lighthouse.

## 7. Decisions
- Static export (`output: "export"`) for static hosting; screenshots pre-sized to WebP by `scripts/optimize-images.mjs` with a custom `next/image` loader.
- Content-first motion: server HTML is always fully visible; reveals arm after hydration only for content below the fold (JavaScript delayed → content still readable).
- Intro is CSS decided by a tiny inline script before first paint; LCP text is never hidden by it.
- Deployment: the public site is the Cloudflare Pages project `krishiv-sharma` (https://krishiv-sharma.pages.dev, Krishiv's choice, 2026-10-01). It is a direct-upload project, so new versions go up with `wrangler pages deploy out --project-name krishiv-sharma --branch main`. Pushes to GitHub `main` also deploy the "portfolio" Worker through Workers Builds (`wrangler.jsonc`: assets-only Worker serving `out/` after `npm run build`), a mirror at portfolio.sharmakrishiv1205.workers.dev. `lib/site.ts` defaults production URLs to the Pages address (override with `SITE_URL`). The first Workers builds failed because the build required `SITE_URL` and there was no Wrangler config.
- Windows: `next build` writes nested segment-prefetch files as folders there; `scripts/fix-segment-files.mjs` (postbuild) flattens them (no-op on Linux).
- Landing chapters use `content-visibility: auto` with measured height estimates (first layout on phones covers only the hero).

## 8. Krishiv's review (2026-10-01)
- Roles are not experience: Experience = the two internships (dates from the resume PDF) + education. "Technical Head" moves to the websites — every site he built except Samarth Rao Studio; K2Aqua also "Partner". Shown on cards, website pages, `/experience` → "Other work", `/about`, and the resume's "Other work". Uniqform first.
- Uniqform (uniqform.in) added as a live site: Technical Head, built in collaboration. Media captured 2026-10-01 after closing its sign-in dialog.
- Samarth Rao Studio and Cricket Republic are in progress on preview addresses, not live: status "In progress" everywhere; copy now says nine websites, seven live.
- Orange removed; ultramarine accent (see tokens). Light background kept.
- Photo space: `components/portrait.tsx` on `/about` and the landing About; shows a monogram until `assets/photo.jpg` exists (then sized by `scripts/optimize-images.mjs`).
- "Bolder motion": items 12–17 in §5. All respect reduced motion; scroll-driven ones fall back to the finished state where unsupported.
- `Krishiv_Resume (2).pdf` is not committed (it includes the phone number; the site never shows it).
- Krishiv, 2026-10-01 (later): no basketball/modelling line in the hero — it now sits further down the home page, in the About chapter ("Outside work": one line, the first team photo and the runway clip, link to /about#life). Photos supplied: two team photos (JLU black-and-red kit, scoreboard "GGTU | JLU"; a blue-kit team at a tournament) and a runway clip that was recorded on its side — re-encoded upright (see assets/life/README.md). Header "Contact" (desktop nav and phone menu) now opens a new email (mailto with subject "Hello Krishiv"); every email link carries the subject; /contact stays in the footer and palette. LinkedIn: wired everywhere GitHub appears behind `linkedinUrl` in content/profile.ts — waiting for the URL.
- "Email me does nothing" (Krishiv, 2026-10-01): the links were valid mailto: links, but this PC (like many Windows desktops) hands mailto: to Chrome, which has no mail site registered, so nothing opens. `components/email-link.tsx`: on desktops (fine pointer) a plain click opens Gmail's compose window (to: Krishiv, subject "Hello Krishiv") in a new tab; phones and tablets keep mailto: (their mail app). The href stays mailto: for copy-link, modified clicks and no-JS. Applied to every email action (hero, closing, header Contact, phone menu, footer, /contact, resume, command palette).
- Project links (Krishiv, 2026-10-01: "already deployed — find the live links on GitHub"): each repo's README names its deployment — VoiceDesk https://huggingface.co/spaces/krishivvv/voicedesk, Shiksha https://krishivvv-shikshaai.hf.space, Veridex https://frontend-ten-mu-27.vercel.app (its README calls this "the full Next.js UI"; the HF Space forwards there); repos github.com/Krishivvv/{VoiceDesk,Shiksha,Veridex}. All returned 200 on 2026-10-01. Shown as "Live demo"/"Code" on the landing list, /work cards (stretched-link cards so links don't nest), case-study headers ("Open the live demo") and the resume. Resolves open question 4.
- Mobile pass (Krishiv: "on mobile it looks like it was only made for laptops"; laptop design must not change). Below lg only: hero recomposed (name fills the width, deck fanned inside the screen, primary action full width over two equal ones, work index hidden, Skip animation floats at the bottom on phones so the top needs no reserved band); websites become one swipeable snap row (the same list is the three drifting columns at lg; chapter on phones went from ~3,800 px to ~780 px); AI titles rise instead of sweeping in from off-screen; filter pills (Capabilities, /work) are one swipeable row; smaller portrait frames; contact actions in a 2×2 grid; /experience "Other work" two per row. Verified at 1440×900 and 1280×800 that the hero name size, call-to-action position and websites chapter height are unchanged.
- Hero meta row: "Beyond code: national-level basketball · ramp model" (phones: "Also: …"), linking to /about#life — present but quiet. Location hides at 1024–1279 px so the row stays one line and the hero still fits one screen.
- Icons: italic serif "K" (Instrument Serif, outlined to paths, emboldened slightly for 16 px) in paper on an ultramarine tile with the periwinkle dot: `app/icon.svg`, `app/favicon.ico` (16/32/48), `app/apple-icon.png` (180, full bleed), `public/icon-192.png`/`icon-512.png` for `app/manifest.ts`.
- Life outside work (Krishiv, 2026-10-01, in conversation): national-level basketball player who has represented Jagran Lakecity University at West Zone three times; ramp model who has collaborated with companies on modelling work and represented the university at modelling events; district-level badminton and swimming (kept as a one-line "Also", which reads well under the two main items). `content/life.ts`; shown as a night section on `/about` (#life) and an "Outside work" line on the landing About. Media slots wait for `assets/life/` files (basketball photos; a modelling photo and clip) — without them each activity shows its name as an outlined word.

## Progress
- [x] Audit, research (21st.dev, Figma Community, references), content model
- [x] Design system (three directions explored; B chosen)
- [x] Foundations (tokens, fonts, motion provider, header/menu/footer)
- [x] Landing
- [x] Functional pages
- [x] Polish & iterate (V2 §46)
- [x] Test (V2 §45) & cleanup
- [x] Krishiv's review (§8) applied and re-tested; deployment configured
