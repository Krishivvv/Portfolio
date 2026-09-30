# PROMPT.md — Krishiv's Portfolio: Build Brief for Claude Code

I'm Krishiv. This is the brief for my personal portfolio website. Read all of it before you act. Section 5 is the phase plan for the initial build; everything else stays true for every later change to the site.

---

## 1. Mission

Build a portfolio that leaves a recruiter, a hiring manager, and a senior engineer with the same conclusion: *this person cares about interface quality, ships polished frontend systems, understands performance, explains complex engineering clearly, and knows when not to use an effect.*

My positioning is broadly **Frontend / Software Design + AI/ML / Software Engineering**. The exact title, skills, projects, experience, metrics, links, and wording come only from `./Krishiv/` (Section 6). The two sides should read as one person's skill set, not two sites stitched together.

The target is a high-end product site: polished, original, fast, and calm. It is not a template and not a tech demo. The research judged every reference site through four lenses (design, experience, engineering, recruiter value); judge this one the same way. Restraint is part of the design: six excellent interactions beat twenty mediocre ones.

---

## 2. The café principle (this decides the architecture)

> Animations and smooth scrolling are really only useful on landing pages. Nobody uses them on login, signup, or dashboard screens, or on any other functional page. Think of it like a premium café: the better the presentation, the more people walk in. But once they're inside, that same café works like any other — it's the exterior and first impression that draw people in. That's exactly why landing pages should look impressive: to attract visitors. The only thing that really needs to be functional on a landing page is the routing — making sure each button takes users where they need to go. Everything else is polish.

In practice:

- **The landing page (`/`) is the front door.** All presentation lives here: the intro, typographic choreography, scroll reveals, subtle parallax, smooth scrolling, and the one signature interaction.
- **Every other page** (case studies, resume, 404, any future utility page) behaves like ordinary excellent software: native scrolling, content visible immediately, no scroll-linked choreography, no route-transition theatre. Small interaction feedback (hover, press, focus, "Copied", menu open/close) is still welcome. Presentation is not.
- **Enforce it with structure, not discipline.** Use one root layout, and give only the landing route group (for example `app/(landing)/`) the providers for smooth scrolling, the intro, and the full Motion feature set. Functional routes live in a separate group (for example `app/(site)/`) that never imports them. Don't give the two groups separate *root* layouts: navigating between root layouts forces a full page reload.
- **Polish never delays content or navigation.** On the landing page, routing is the one thing that must work; everything else is optional.

---

## 3. Hard rules

Each rule has a reason. If one ever seems to conflict with something else in this brief, the hard rule wins, and you tell me.

1. **Facts come only from `./Krishiv/`.** Never invent or embellish credentials, employers, titles (including seniority words), dates, metrics, user counts, awards, clients, or skills. If something is missing, leave it out and put it on your question list. A portfolio caught exaggerating is worse than a plain one.
2. **Normal cursor.** No custom cursor, follower dot, trail, magnetic effect, cursor label, `cursor: none`, or any other pointer-tracking effect. Hover feedback lives in the element itself: scale, colour, underline, image shift, border, icon motion. Custom cursors distract me and don't exist on touch devices.
3. **The intro can always be skipped.** A real `Skip animation` button (Section 9), plus automatic skipping for repeat visitors and reduced-motion visitors. Nobody should have to watch the same animation ten times.
4. **Presentation motion and smooth scrolling live on the landing page only** (Section 2). No scrolljacking anywhere; the visitor always feels in control of their scroll.
5. **Free and open resources only.** Anything taken from motion.dev, 21st.dev, Framer, or any other source must be verifiably free to use here (Section 11). When unsure, build the idea yourself.
6. **Effects never gate content.** No loading screen or fake progress percentage. Hero text is real HTML, readable immediately. Nothing waits for an animation before it's usable.
7. **Every link and button works.** No `href="#"` for real navigation, no dead buttons, no placeholder URLs in the finished site.
8. **Smooth beats spectacular.** If an effect drops frames on a mid-range phone, simplify or remove it. The site must feel fast on desktop, mid-range Android, and iPhone Safari.
9. **Accessibility is part of the build, not a final pass:** reduced-motion support, keyboard access, visible focus, sufficient contrast, semantic HTML.

---

## 4. Sources of truth and precedence

When sources conflict, use this order:

1. The hard rules in Section 3.
2. Facts in `./Krishiv/`.
3. `PORTFOLIO_RESEARCH.md`: design and interaction *principles* only.
4. The UI/UX Pro Max skill: execution quality.
5. Your own judgement.

**The research file.** It's an AI-generated report on twelve reference portfolios (Section 12). It lives in the project root; if it has a different name (for example `gemini-code-*.md`), use that file. It also makes assumptions about me (a full name, a seniority level, study status, location, employers, projects, stack), mostly in its §1, §13, §16, and §20. Treat all of that as leads for where to look in `./Krishiv/`, never as facts. Anything `./Krishiv/` doesn't confirm stays off the site and goes on your question list. The research also lists patterns my rules exclude (custom cursors, magnetic buttons, site-wide smooth scrolling); my rules override it.

**UI/UX Pro Max.** I installed this skill so the build follows strong UI/UX and Framer Motion practice. Read its SKILL.md first, follow its own workflow, and use it heavily: for the design system in Phase 2, and for its UX, accessibility, and interaction checklists in Phase 6. Treat its output as recommendations. Where it suggests something my hard rules forbid (custom cursors, animated backgrounds, heavy glassmorphism, paid components), take the parts that pass and record what you rejected in `BUILD_NOTES.md`.

---

## 5. How to work

You're running at high effort. Spend it on judgement (the design plan, the motion architecture, performance verification), not on ceremony.

**Operating notes**

- Make the changes rather than proposing them. Decide small things yourself and record the decision. Ask me only when a missing piece would materially change the result.
- Run independent reads in parallel (repo, `./Krishiv/`, research file, reference sites), using subagents where they help.
- Keep `BUILD_NOTES.md` in the repo root as your working memory: content ledger, design plan, route map, motion budget, resource and licence log, decisions, open questions. Re-read it after long stretches and after context compaction. It's the only documentation file to add, besides a short README update.
- Verify by running the thing: dev server, a **production build**, real browser screenshots, throttled performance checks. Reading code is not verification.
- Stay lean: no speculative abstractions, and no pages, features, CMS, blog, auth, analytics, or backend that the material and this brief don't call for. Every dependency earns its place; delete what ends up unused.
- Don't commit or push unless I ask.
- Keep updates short: what's done, what's next, what you need from me.

**Phases**

0. **Load context.** Read this brief, the UI/UX Pro Max SKILL.md, the whole research file, every file in `./Krishiv/`, and look at every image there. Inspect the repo: framework, dependencies, package manager (follow the lockfile), styling, routing, and deploy target (assume Vercel-style hosting if nothing says otherwise, and stay host-agnostic). If `./Krishiv/` is missing or empty, search for a folder called Krishiv; if it's still not there, stop and tell me rather than falling back on the research's assumptions.
1. **Audit, ledger, questions.** Build the content ledger (Section 6) and list what's missing. Post one batch of questions, then keep working on everything that doesn't depend on my answers.
2. **Design plan** (Section 7): tokens, layout concept, signature interaction, motion budget. Critique it, revise it, save it in `BUILD_NOTES.md`, give me a short summary, and continue unless something needs my decision.
3. **Foundations.** Unless the repo dictates otherwise: Next.js (App Router) + React + TypeScript + Tailwind + `motion` + `lenis` (landing group only) + semantic HTML + a small open icon set. Set up the route groups, tokens, fonts, and shared motion primitives (easing, durations, `MotionConfig`, reduced-motion handling).
4. **Landing page.** Intro and skip control first (the riskiest piece), then the hero, then the sections in order.
5. **Functional pages.** Case studies, resume, 404, and anything else: native scrolling, immediate content.
6. **Verify and polish** (Section 10), looping until the checklist in Section 13 passes.
7. **Clean up and report.** Remove unused dependencies, components, assets, and code, then write the final report (Section 13).

Don't stop at a visual shell. Build the complete, usable portfolio.

---

## 6. Content

**`./Krishiv/` is the only source of personal facts.** I'll put everything there, mostly as `.md` files: resume, project descriptions, links (GitHub, LinkedIn, Instagram, WhatsApp, email, live sites, repositories), photos, screenshots. Read every file and look at every image before designing. If files disagree (titles, dates), prefer the resume and add the conflict to your question list.

**Ledger rule.** Every factual string on the site (names, dates, titles, technologies, metrics, claims) traces to a file in `./Krishiv/`. Keep the ledger in `BUILD_NOTES.md` and re-check it before you finish.

**Ask me for what would materially improve the result:** project screenshots or screen recordings, better media, a portrait, the resume PDF, missing project or repo links, verified metrics, preferred contact details, architecture diagrams, logos. Batch the questions, and for each one say what you need, where it will be used, and the preferred format or quality. Don't interrupt for optional details; if a strong result is possible without something, carry on.

**Privacy on a public site.** Leave out home address, date of birth, ID numbers, and anything else in the resume that isn't clearly meant to be public. Publish a phone or WhatsApp number only in the form I've given for public use; if that's unclear, ask.

**Media.** Inspect it first. Use my portrait only if it improves the composition. Never stretch or badly crop important images. Meaningful images get real alt text.

**Copy.** Confident, specific, concise, technically literate, human. Prefer evidence (what I built, with what, which problem, which decisions, what changed) over adjectives. Avoid empty phrases like "passionate developer", "turning ideas into reality", "crafting digital experiences", "innovative solutions", "problem solver", and "results-driven" unless the material makes them meaningful. Contact details are never hidden behind an animation.

---

## 7. Design direction

The research's strongest direction is **Technical Elegance**: premium UI craft, restrained typography, sophisticated spacing, meaningful engineering detail, and recruiter clarity.

- **Type.** One legible, modern sans (Geist, Inter, or similar with an open licence) and, sparingly, one monospace for technical labels, stacks, metrics, and metadata. The site must not become a terminal. Self-host through `next/font`.
- **Colour.** Dark-first: a deep neutral (not necessarily pure black), strong primary text, muted secondary text, subtle borders, and one carefully controlled accent, which the research suggests reserving for interaction and AI/ML highlights. No rainbow gradients, neon overload, glow on everything, heavy glassmorphism, or weak contrast. One theme; no theme toggle.
- **Layout.** Strict grid discipline with editorial asymmetry where it helps. Bento only for the "capabilities at a glance" section, with tiles that differ in role and size. Full-bleed visuals for case studies. Generous whitespace: it's part of the rhythm and doesn't need an effect.
- **Hierarchy.** Display → section headline → project title → supporting copy → metadata → technical detail. Contrast comes from size, weight, spacing, rhythm, and composition, not from making everything huge, glowing, or animated.
- **Details that make it feel premium.** 1px borders, one radius system, a spacing scale, optical alignment, line length under about 75 characters, text wrapping, image crops, button heights, icon alignment, hover timing, focus states, empty and error states. Every control answers three questions: what can I do, what happened, what happens next. No ambiguous icon-only controls.

**Make it specific to me.** The research's example values (a near-black `#0A0A0A`, an electric-blue or neon-orange accent, Geist/Inter with JetBrains Mono, bento) are what most developer portfolios converge on. Treat them as a baseline to beat, not the answer. Derive the palette, type character, and signature moment from the real material in `./Krishiv/`.

**Two-pass design plan (Phase 2).** First write a compact plan: 4–6 named hex colours; typefaces and their roles; a layout concept (a sentence each, plus rough ASCII wireframes of the landing page and one case study); the motion budget; guiding principles. Then critique it: *would this plan be the same for any developer with a dark theme and an accent colour? Which parts are defaults rather than choices?* Revise those parts and note what changed. Spend boldness in one place: one memorable element, with everything around it quiet and disciplined.

**Signature interaction (exactly one).** Choose one that's tied to the real content, original, quick to understand, performant, works on mobile, and doesn't take over the site. Candidates from the research: (1) an animated SVG diagram of a flagship AI project's real architecture, which is my lean if `./Krishiv/` has enough true detail to draw ("show the engineering, don't just claim it"); (2) a card → case-study shared-element transition; (3) a Frontend ↔ AI/Engineering mode switch, which risks feeling like two sites and needs a strong reason. Record the choice and why in `BUILD_NOTES.md`.

**Avoid template tells:** a giant "HELLO WORLD"; "passionate developer" copy; typing effects; spinning skill logos; skill marquees; fake terminals; 3D spheres and floating neon blobs; fake stats or loading percentages; decorative dashboards; walls of identical rounded cards; an all-caps eyebrow over every heading; `01 / 02 / 03` numbering on things that aren't a sequence; an accent on one word of every headline; "currently listening to" widgets. It should feel authored, not generated from a trend list.

---

## 8. Information architecture

**Landing page**, in this order unless the material argues otherwise: Hero → Capabilities (bento) → Selected Work → Experience → Engineering deep-dive → About → Contact. A recruiter scans for about six seconds, so role, stack, real projects, and links must be findable in one pass. Give it rhythm (hero, space, content, space, project, space, engineering story, space, contact). A section doesn't need an effect just because there's empty space.

**Hero.** The most important part of the site. Within seconds a visitor knows my name, what I do, what kind of work I build, where to explore, and how to reach me. Typography and composition create the authority; no paragraph of generic text above the fold.

**Routes.** Create only what the material justifies. The defaults are `/work/[slug]` (case studies) and `/resume` (an HTML resume, plus a PDF download if I provide one). Add `/work`, `/about`, `/experience`, or `/contact` only when there's enough real content to deserve a page; otherwise they're landing sections with anchors that also work from other pages. Add a real 404 that routes home. Direct URL loads and back/forward must work everywhere.

**Case studies** use whichever of these has real material behind it: Problem → Context → My role → Architecture → Implementation → Key decisions → Challenges and trade-offs → Outcome and metrics → Live demo and repo. Drop a heading with nothing real under it instead of padding. Never invent a metric. Screenshots are prominent, with correct aspect ratios and no layout shift. Native scroll, clear navigation, no cinematic anything.

**Navigation** is obvious and labelled (Work, About, Experience, Contact, Resume, whichever exist), with an accessible mobile menu. A `Cmd/Ctrl+K` palette is welcome (Section 12) but never replaces visible navigation.

**Contact** makes the primary action obvious: a mailto link and a copy-email button whose state visibly changes ("Copied", announced through `aria-live`), then LinkedIn, GitHub, Instagram, WhatsApp, and the resume wherever I've supplied them. No form or backend unless I ask for one.

**SEO.** Titles and descriptions per page, Open Graph and social-preview data, canonical URLs, sitemap and robots through the framework's conventions, and structured data (`Person`) only with real details.

---

## 9. Motion system (landing page only)

Motion should feel fast, physical, intentional, and light. Every major animation needs a reason: what it is, how it works, why it's there, and what effect it has on the visitor.

**Tools.** The `motion` package (formerly Framer Motion; import from `motion/react`), which is free and open source. `lenis` for smooth scrolling on the landing route only (check its current docs). CSS for simple transitions. Don't add GSAP or other scroll libraries without a concrete engineering reason; a few excellent tools beat a large stack.

**Tokens** (define once in a shared module and reuse):
- Easing `cubic-bezier(0.16, 1, 0.3, 1)` for reveals; springs for press and layout motion.
- Press feedback `scale ≈ 0.97–0.98`, 100–150 ms. Hover 150–200 ms. Reveals 400–600 ms with 60–100 ms staggers.
- Hero choreography: fast staggered reveal, about 20 px of rise, roughly 0.8 s after first paint. The whole intro has a hard cap of 2.5 s.

**Patterns to use:** a staggered typographic reveal (lines in `overflow: hidden` masks moving from 100% to 0; keep the real `<h1>` accessible so screen readers don't spell it out letter by letter); `whileInView` reveals with `once: true`; subtle parallax on one or two images (`useScroll` + `useTransform`); tactile press and hover states; layout animation only where it clarifies a change.

**Intro and skip control (required)**

- The intro is the hero animating in. It is not a curtain in front of a loader, and the real content is in the HTML from first paint.
- A real `<button>` labelled `Skip animation`, visible from the first frame (no delay), small but clear, AA contrast, at least 44 px tall, the first tab stop while the intro plays, and never covering content or navigation. It works with mouse, touch, and keyboard (Enter and Space; `Esc` also skips).
- Activating it settles every intro-driven element into its final state at once: no half-states, no layout shift. Scrolling during the intro does the same. Scroll is never locked. The button is removed (not just faded) when the intro ends, and after a skip, focus moves to `main` so keyboard users don't lose their place.
- Repeat visits: once the intro has finished or been skipped, store a flag in `localStorage` (wrapped in try/catch, since storage can fail) so return visitors get the settled page straight away. Put a small "Replay intro" link in the footer.
- Avoid a flash of the intro for return visitors: decide before first paint with a tiny inline script that sets a data attribute on `<html>` (with `suppressHydrationWarning` as needed), and let CSS handle the initial state.
- Visitors with `prefers-reduced-motion: reduce` never see the intro or the skip button; they get the settled page.

**Smooth scrolling (landing only).** Mount Lenis inside the landing group and destroy it on unmount. Disable it for reduced motion and leave touch devices on native scrolling. Keep anchor links working (Lenis on the landing page, native elsewhere). Nested scroll areas such as the command palette and dialogs must not be hijacked (Lenis has an opt-out attribute), and CSS `scroll-behavior: smooth` must not fight it. Tune by feel: it should read as native scrolling with better inertia, and if a visitor can perceive lag between input and movement, reduce the smoothing.

**Reduced motion.** Use `<MotionConfig reducedMotion="user">` plus `@media (prefers-reduced-motion: reduce)`: no smooth scroll, no parallax, no entrance choreography, no looping decoration; transitions shortened or removed; content readable immediately with hierarchy intact.

**Keeping it non-laggy**

- Animate `transform` and `opacity` (small `clip-path` reveals are fine). Don't animate `width`, `height`, `top`, or `left`, and avoid `filter: blur` and `backdrop-filter` on large or scrolling elements.
- Drive scroll-linked effects with motion values (`useScroll`, `useTransform`, `useSpring`), never with React state updated on scroll. Use `whileInView` or `useInView` for reveals.
- Cut the JavaScript: `LazyMotion` with `m` components and `domAnimation` (see motion.dev/docs/react-reduce-bundle-size), loading heavier features only where they're used. Keep pages as Server Components and isolate motion in small client components.
- Don't put CSS transitions (including Tailwind `transition-*` classes) on properties Motion animates on the same element; they conflict.
- Use `will-change` only while an element is actually animating. Keep simultaneous animations to a handful. No continuous CPU-heavy loops, full-screen canvas or WebGL, particle systems, or grain overlays.
- No page-exit animations and no general page-transition wrapper. The one optional exception is the card → case-study transition: under about 300 ms, no blank state, using the simplest technique that's reliable on the installed Next.js version (check the current docs). Drop it if it's flaky.

---

## 10. Performance, accessibility, and verification

**Targets.** Measure, then report the actual numbers; never claim a score you didn't measure. On Lighthouse mobile defaults: LCP under about 2.5 s, CLS near 0, low Total Blocking Time (the lab proxy for INP), accessibility 100, and the other categories as high as is reasonable. Keep first-load JavaScript for `/` to roughly 170 KB gzipped or less (a common budget) and explain any overage, with `cmdk`, video, and other optional features lazy-loaded. Functional routes should be lighter than `/`. If the intro pushes LCP past the target, shorten it, or make the LCP element render immediately and animate secondary elements instead.

**Assets.** `next/image` with real dimensions and modern formats; `priority` only on the LCP image; everything else lazy. Video is `muted loop playsInline preload="none"` with a poster, plays on hover or focus only where `(hover: hover)` matches, and stays a static image on mobile and under reduced motion. Fonts through `next/font`. No third-party scripts, trackers, or font CDNs.

**Graceful degradation.** Video fails → static image. JavaScript delayed → key content is still readable. Slow network → nothing decorative blocks content. Mobile → simplify instead of shrinking. If WebGL or 3D ever earns a place (Section 12), it comes with lazy loading, a non-WebGL fallback, and a reduced-motion fallback.

**Responsive.** Design mobile deliberately rather than shrinking the desktop. Check 320, 375, 390, 430, tablet, laptop, large desktop, and very wide. No hover dependence, horizontal overflow, clipped text, broken menus, awkward sticky elements, or heavy media on mobile.

**Accessibility floor.** Semantic HTML and a correct heading hierarchy; real buttons and links with meaningful text; visible `:focus-visible` states; full keyboard operation; a skip-to-content link (separate from `Skip animation`); an accessible mobile menu, dialogs, and command palette; alt text on meaningful images; AA contrast or better; labels on any form fields.

**Verification loop.** Test the *production* build (`build`, then `start`); dev mode is slower and runs effects twice.

1. Run type-check, lint, and build. Read the warnings and route sizes.
2. Take real browser screenshots at the widths above and inspect every landing section and at least one case study, on desktop and mobile. Use whatever browser tooling is available (a Playwright or Chrome MCP, or a throwaway Playwright script run through `npx`). If none is available, say so and hand me a short manual test list instead of skipping the check.
3. Motion: watch the intro; test skip by mouse, touch, keyboard, and scrolling; test with storage cleared and set; emulate `prefers-reduced-motion`; scroll the landing page under 4× CPU throttling and look for long tasks (over 50 ms). Fix or simplify anything that shows up.
4. Function: click every route, link, and button; back and forward; hard refresh on deep routes; resume download; mobile menu; command palette; copy-email.
5. Accessibility: a keyboard-only pass, focus visibility, heading order, contrast, alt text, and an axe scan (run through `npx`, not added to the project).
6. Lighthouse, mobile and desktop, for `/` and one case study. Record the numbers.
7. Search for rule violations: `cursor: none` or cursor-following code; Lenis, intro code, or feature bundles imported outside the landing group; `href="#"`; components of unverified licence.
8. Optional but worthwhile: start a fresh-eyes reviewer subagent with Section 13's checklist and act on what it finds.

---

## 11. Free resources only

"Free" means usable in this project at no cost, under a licence that allows it, without a purchase, account, or key. Where I've written "21motion.dev" I mean the free-component ecosystem around motion.dev, in practice motion.dev itself and 21st.dev. The same rules apply to any similar site.

- **`motion` (core package):** free and open source; use it. **Motion+ is paid and off-limits**, including its premium components (for example Cursor, Ticker, Carousel, AnimateNumber, splitText, Typewriter), its locked examples, and its private packages. Anything that needs a purchase, licence key, private registry URL, or access token is paid. Build the equivalent yourself with the free API, for instance a small text splitter for the hero reveal.
- **motion.dev examples:** use only those whose code is public without Motion+, and adapt the pattern.
- **21st.dev:** components there can show "License: unknown" and install through an API-keyed CLI with a metered free tier. Don't create accounts or keys, and don't install through that CLI. Use a component only if its page or repository states a clearly permissive licence (MIT, Apache-2.0, ISC, CC0); otherwise treat it as inspiration and reimplement it.
- **Framer templates, and any other template or theme (free or paid):** inspiration only. Don't lift a whole template. Extract the interaction pattern, adapt it to my design system, drop unneeded dependencies, and keep accessibility and mobile behaviour intact.
- **Fonts, icons, images:** open licences only (for example OFL fonts and MIT or ISC icon sets). No paid stock.
- Log every external resource in `BUILD_NOTES.md`: name, URL, licence, evidence, and where it's used. Licences and pricing change, so check the live page at build time, and don't call something free unless you verified it.

---

## 12. Using the research

Use the research for principles, not as a checklist, and translate rather than copy. "Rauno has spatial polish" means fluid relationships, precise spacing, consistent borders, and seamless transitions, not Rauno's interface. "Dennis uses smooth scroll" means smooth scroll on the front door, not on every page. "Thibaut uses WebGL" means knowing what's possible, then choosing the cheaper technique that says the same thing.

The reference sites are for looking at, not cloning: no copied layouts, copy, logos, visuals, code, or exact animations. If you have a browser tool, look at a few. The report already summarises them, so don't burn effort re-researching.

| Site | Borrow the principle | Don't borrow |
| --- | --- | --- |
| [Brittany Chiang](https://brittanychiang.com/) | Recruiter-first structure, strict type hierarchy, semantic HTML, roles, stack, and links that scan in seconds | Her exact layout |
| [Rauno Freiberg](https://rauno.me/) | 1px borders, radius and shadow discipline, fluid layout changes, native-app feel | His interface |
| [Dennis Snellenberg](https://dennissnellenberg.com/) | Large confident type, staggered mask reveals, smooth scroll on the front door | Custom cursor; smooth scroll everywhere |
| [Stockt](https://wearestockt.com/) | Paced, cinematic scroll rhythm | A layout that depends on JavaScript |
| [Paco Coursey](https://paco.me/) | Speed, zero layout shift, keyboard-first navigation, `Cmd+K` | Brutalism wholesale |
| [Abhijit Rout](https://abhijitrout.in/) | Bento as a five-second scan of capabilities | Magnetic buttons |
| [Baj Kamal Singh](https://bajkamalsingh.me/) | Clear hero → experience → projects → contact flow; stack and live link on every project | The generic glowing-grid look |
| [By Saurabh](https://bysaurabh.com/) | Editorial narrative; case studies about the why and how; gentle image parallax | Site-wide smooth scrolling |
| [Midlife Engineering](https://midlife.engineering/) | Personality through a single visual metaphor for engineering | Terminal aesthetics everywhere |
| [Thibaut Foussard](https://thibaut.cool/), [Claudio Guglieri](https://guglieri.com/), [Bruno Simon](https://bruno-simon.com/) | Knowing what WebGL and physics can do | Building it: costly for performance, accessibility, mobile, and recruiter clarity |

**Do:** dark-first Technical Elegance; detailed case studies; a staggered typographic hero reveal; one or two subtle parallax images; tactile press feedback; copy-email with a visible state change; bento for capabilities only; animated SVG architecture visuals of real systems; video-on-hover project previews if I supply recordings (desktop only); a `Cmd/Ctrl+K` palette through `cmdk`, lazy-loaded, licence checked, with visible navigation kept.

**Only if it stays cheap and clean:** the card → case-study transition (limits in Section 9); WebGL or 3D only when a specific project genuinely calls for it.

**Skip:** custom cursor, magnetic buttons, and any pointer-tracking effect; scrolljacking or horizontal-scroll takeover; scroll-velocity distortion; particle or canvas hero backgrounds; full-screen grain; infinite marquees; typing effects; fake terminal or REPL; loading screens; theme or "mode" toggles; a live AI demo that needs API keys, websockets, or cost control (link to the deployed demo or a recording instead).

---

## 13. Definition of done and final report

Done means every line is true:

- [ ] **Identity.** Someone can tell who I am and what I build within seconds; a recruiter finds real projects quickly; a technical lead finds real engineering depth.
- [ ] **Credibility.** Every fact traces to `./Krishiv/`. No placeholders, invented metrics, or inflated titles.
- [ ] **Landing page.** Feels premium and alive. Motion and smooth scrolling exist only there, and only the landing group imports them.
- [ ] **Control.** `Skip animation` works by mouse, touch, keyboard, and scrolling; repeat and reduced-motion visitors skip automatically; no flash of intro.
- [ ] **Cursor.** Completely normal.
- [ ] **Functional pages.** Native scrolling, content immediately.
- [ ] **Routing.** Every route, link, and button works, including direct loads, back/forward, and the resume download.
- [ ] **Mobile.** Excellent at every width checked.
- [ ] **Performance and accessibility.** Measured against Section 10's targets, with any gap reported; the throttled long-task check is clean.
- [ ] **Resources.** Everything external is verified free and logged.
- [ ] **Originality.** Recognisably my site rather than an imitation; every effect has a reason; restraint is visible.
- [ ] **Repository.** No unused dependencies, components, assets, or code; the production build passes cleanly.

**Final report** (short and plain):

1. What you built, and the stack and architecture.
2. The interaction systems, including the signature interaction and why you chose it.
3. External free resources used, with the licence evidence.
4. Measured performance and accessibility results, and anything you couldn't measure.
5. What I still need to provide.
6. Known limitations, and research ideas you deliberately didn't implement, with reasons.
7. How to run, build, and deploy.

Don't claim perfect scores or flawless behaviour unless you tested them, and don't claim a dependency is free unless you verified it.

---

## The central principle

The portfolio should impress people in the first few seconds and never make them work to understand me. The landing page can be expressive; the content stays clear. Interactions are optional, the intro can be skipped, the cursor stays normal, and the functional pages behave like excellent ordinary software. Animation should make the interface feel better, not slower, and the engineering should be visible rather than hidden behind gimmicks.

Build with restraint. Make it beautiful, make it fast, make it feel authored, and make it unmistakably mine.

Start with Phase 0.
