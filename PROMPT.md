# KRISHIV PORTFOLIO — MASTER DIRECTIVE V2

## READ THIS FIRST — THIS OVERRIDES ANY CONFLICTING WORDING BELOW

The previous portfolio implementation missed the brief: it was too plain, too static, and too close to a generic AI-generated developer template.

This file is now a **high-visual-ambition build specification**.

If any later section of this file conflicts with this directive, **THIS DIRECTIVE WINS**.

The target is NOT a minimal developer portfolio.
The target is NOT a generic Tailwind portfolio.
The target is NOT “dark background + cards + buttons + fade-up animations.”
USE JSAP AND THREEUI.COM FOR MORE REFENCES FOR TEMPELATES
The target is a **premium, motion-rich, multi-page creative developer / software designer portfolio** that visibly belongs in the same quality conversation as the reference sites researched in `PORTFOLIO_RESEARCH.md`.

The website must look like a carefully art-directed product experience while remaining fast, accessible, responsive, and easy to navigate.

---

# 1. PRIMARY BRIEF

Build a portfolio for **Krishiv** using the real material inside `/Krishiv`.

Position the site from the evidence in `/Krishiv`, broadly bridging:

- Frontend Development
- Software Design
- Creative Development
- AI/ML Engineering
- Product Engineering

Do not invent facts.

The visual goal is:

> **High-end creative frontend craft + serious engineering credibility.**

The landing page should make a visitor think:

> “This is a deliberately designed portfolio, not an AI-generated starter.”

---

# 2. MANDATORY RESEARCH INPUTS

Before designing or coding, read completely:

```text
PORTFOLIO_RESEARCH.md
/Krishiv/**
```

The research file is the design benchmark.

Reference the principles observed in sites including:

- We Are Stockt
- Abhijit Rout
- Thibaut Foussard
- By Saurabh
- Claudio Guglieri
- Midlife Engineering
- Baj Kamal Singh
- Rauno Freiberg
- Dennis Snellenberg
- Brittany Chiang
- Paco Coursey
- Bruno Simon

Do not clone any of them.

Instead, combine the strongest principles into an original visual language for Krishiv.

---

# 3. THE MOST IMPORTANT CORRECTION: VISUAL AMBITION

Do NOT “play it safe.”

Do NOT reduce everything to minimal cards merely because the site should be performant.

A premium site can be highly animated and visually rich while still being fast when the effects are implemented intelligently.

The desired hierarchy is:

**Visual ambition:** HIGH

**Motion quality:** HIGH

**Interaction quality:** HIGH

**Information clarity:** HIGH

**Performance:** HIGH

**Accessibility:** HIGH

**Gimmick factor:** LOW

Those are not contradictory goals.

---

# 4. MULTI-PAGE IS NON-NEGOTIABLE

This MUST be a real multi-page experience.

Use actual routes such as:

```text
/
/work
/work/[slug]
/about
/experience
/contact
/resume
```

Adapt the exact route list to the actual material in `/Krishiv`.

The homepage can preview projects, but clicking a project must lead to a real dedicated project/case-study route.

Do not make the entire portfolio one giant scroll page.

---

# 5. HOMEPAGE VS FUNCTIONAL PAGES

Use this exact UX principle:

> **The landing page is the cinematic presentation layer. Functional/content pages are normal excellent software.**

## Homepage

This is where most of the premium motion belongs.

Use:

- smooth scrolling where it genuinely improves the landing experience
- hero choreography
- large typographic reveals
- scroll-triggered animations
- selected scroll-linked effects
- project image reveals
- parallax used sparingly but visibly
- sophisticated section transitions
- elegant hover interactions
- animated technical storytelling
- premium navigation/menu behavior
- one memorable signature interaction

## Functional/content pages

For:

- work index
- project pages
- case studies
- experience
- about
- contact
- resume
- future dashboard/tool pages

use **native scrolling and immediate content**.

Keep transitions short and local.

Do not use cinematic scroll systems across every route.

No scrolljacking.

No forced waiting.

---

# 6. FRAMER MOTION / MOTION — USE IT, DON'T JUST MENTION IT

Motion / Framer Motion should be a **real core part of the implementation**.

Use it for meaningful interactions such as:

- hero entrance choreography
- staggered text reveals
- image reveals
- project card interactions
- scroll-linked motion
- `useScroll`
- `useTransform`
- `whileInView`
- `AnimatePresence`
- layout animation
- `layoutId`
- shared-element transitions
- menu transitions
- accordions
- project route transitions

Use CSS when CSS is simpler.

Do not replace all motion with basic CSS fade-ins.

The landing page should demonstrate deliberate motion craft.

---

# 7. 21ST.DEV — ACTIVELY USE IT AS A COMPONENT RESEARCH SOURCE

You MUST inspect **21st.dev** while designing/implementing the site.

Use it to discover high-quality patterns for:

- animated heroes
- text effects
- animated navigation
- buttons
- project cards
- section treatments
- motion primitives
- animated backgrounds
- interactive UI
- reveal effects
- transitions

Current 21st.dev presents itself as a registry of React components, templates, themes, shaders, gradients, and other UI patterns, with motion-focused libraries available. The registry includes free/open-source animated component libraries as well as premium material, so verify each individual component before using it.

### FREE ONLY

Use only legitimately free/openly usable resources.

Do NOT use:

- premium-only templates
- paid components
- paid animation packs
- locked resources
- subscription-dependent code
- uncertain-license assets

When a 21st.dev idea is excellent but its licensing/access is uncertain, **reimplement the underlying concept yourself with React + Motion + CSS/SVG**.

Do not blindly paste entire template sections.

Use 21st.dev as an ingredient library and research source, not as the site's identity.

---

# 8. FIGMA / VISUAL DESIGN RESEARCH

Use Figma or Figma Community resources where accessible to research:

- color systems
- typography pairings
- layout grids
- spacing systems
- responsive patterns
- design systems
- polished portfolio/web references

Figma Community contains website templates, UI kits, layout resources, and design-system resources.

Again: **research and adapt, never clone.**

If direct Figma tooling is unavailable, continue with available web references and implement the system yourself.

---

# 9. COLOR CANNOT BE GENERIC

Do NOT default to:

```text
#000 / #111
white text
blue-purple gradient
```

without exploration.

Before finalizing the palette, explore at least three visual directions internally.

For example:

### Technical Luxury
Deep charcoal / ink + warm off-white + one sophisticated accent.

### Editorial Engineering
Warm light background + near-black type + restrained saturated accent.

### Creative Systems
Deep neutral + cool luminous accent + secondary technical tone.

Select the direction that best matches the real Krishiv material.

Build a complete color system:

- background
- surface
- elevated surface
- text
- secondary text
- muted text
- border
- accent
- accent-hover
- focus
- success/error when needed

Avoid rainbow gradients and “AI blue/purple” as a lazy default.

---

# 10. TYPOGRAPHY MUST DO REAL DESIGN WORK

Do not use typography as generic decoration.

Create a strong typographic system.

Potential families include:

- Geist
- Inter
- Manrope
- Space Grotesk
- DM Sans
- another high-quality available font

A monospace family may be used for technical metadata, architecture labels, code, or metrics.

The hero should have a genuinely designed typographic composition.

Explore:

- oversized type
- intentional line breaks
- variable scale
- split text reveals
- masked text
- staggered entry
- editorial alignment
- asymmetric composition

Do not make every headline identical.

---

# 11. LAYOUT MUST NOT LOOK LIKE A TEMPLATE

The page must include compositional variety.

Use, where justified:

- asymmetric grids
- large visual moments
- full-bleed project media
- bento modules
- split compositions
- edge-aligned type
- overlapping elements
- sticky visual storytelling
- large whitespace
- offset layouts
- editorial sections
- layered media

Do not turn the entire site into a grid of rounded rectangles.

Do not stack identical cards down the page.

---

# 12. LANDING-PAGE MOTION REQUIREMENT

A single fade-up animation is NOT sufficient.

The homepage must have a coherent motion language with visibly different motion types.

At minimum, implement appropriate versions of:

1. **Cinematic hero entrance**
2. **Staggered typographic reveal**
3. **Scroll-triggered section reveals**
4. **Scroll-linked visual movement**
5. **Project image reveal / transformation**
6. **Project hover interaction**
7. **Navigation/menu motion**
8. **At least one section-to-section transition**
9. **A polished project-to-case-study transition**
10. **Subtle microinteractions throughout**
11. **A deliberate closing/footer interaction**

These must not all be the same animation.

The landing page should feel alive throughout the journey.

---

# 13. ANIMATION MUST FEEL LIKE THE REFERENCES

Study the motion qualities from the research:

- Stockt / Dennis: cinematic typography and pacing
- Rauno: spatial/layout polish and native-feeling transitions
- Thibaut: visual experimentation and image behavior
- Saurabh: editorial/parallax feel
- Midlife: technical personality

The result should have the same **level of interaction ambition**, not a copy of the exact effects.

---

# 14. NORMAL CURSOR — ABSOLUTE RULE

The browser cursor stays normal.

DO NOT build:

- custom cursor
- cursor follower
- follower dot
- cursor ring
- cursor trail
- magnetic cursor
- pointer distortion
- cursor labels

Use the actual browser pointer.

Create richness through the elements themselves.

---

# 15. HOVER INTERACTIONS

Desktop interactions should still be strong.

Examples:

### Buttons
- subtle press scale
- arrow motion
- underline growth
- surface transition

### Project cards
- image movement
- controlled zoom
- media reveal
- title shift
- metadata change

### Links
- underline animation
- arrow translation
- subtle color/opacity change

### Images
- masked reveal
- subtle parallax
- controlled scale

Hover is enhancement, never a dependency for functionality.

---

# 16. SKIP ANIMATION — REQUIRED

If there is an intro/cinematic landing animation, there MUST be a visible:

> **Skip animation**

button.

Implement it as a real accessible `<button>`.

It must:

- appear during the intro
- work with keyboard
- work on mobile
- immediately finish the intro when pressed
- stop waiting animations
- not block content
- disappear after the intro finishes
- support reduced motion

Optional repeat-visit behavior:

```text
portfolio-intro-skipped = true
```

Use local/session storage if helpful so repeat visitors can bypass the full intro.

Never force someone to repeatedly watch the same sequence.

---

# 17. REDUCED MOTION

Respect:

```text
prefers-reduced-motion: reduce
```

When active:

- disable smooth scrolling
- remove heavy parallax
- remove large choreography
- simplify page transitions
- stop decorative loops
- make content immediately available

Reduced motion should still look designed, not broken.

---

# 18. SMOOTH SCROLLING

Smooth scrolling is allowed and encouraged **on the landing page** when it improves the experience.

Use Motion scroll APIs and/or Lenis where appropriate.

Do not hijack scrolling.

Do not force horizontal scrolling.

Do not create “scroll traps.”

Do not use the same smooth-scroll system on every functional page.

Functional pages should use normal browser scrolling.

---

# 19. PROJECT PRESENTATION MUST BE A MAJOR VISUAL FOCUS

Do not make projects secondary cards.

Feature the strongest real projects prominently.

The homepage can present projects as large editorial moments.

Each project may have:

- huge project title
- role
- stack
- short description
- large visual
- video preview where available
- hover/focus interaction
- technical signal
- case-study CTA

Then the user can click into:

```text
/work/[project]
```

for the full story.

---

# 20. CASE STUDIES = DEEPER, FUNCTIONAL, FAST

Project pages should feel premium but should not repeat the full cinematic homepage behavior.

Use:

- clear hero
- project snapshot
- problem
- solution
- architecture
- implementation
- decisions
- trade-offs
- outcome
- screenshots
- demo
- GitHub
- next/previous project

Use small local Motion interactions.

Keep scrolling native.

Make the technical story easy to read.

---

# 21. ENGINEERING STORYTELLING

Whenever actual project material supports it, turn architecture into visual storytelling.

Examples:

```text
Input
  ↓
Processing
  ↓
Model / Agent
  ↓
Tools / Retrieval
  ↓
Output
```

Animate the diagram subtly with:

- nodes appearing
- paths revealing
- active-state highlights
- scroll-linked progress

Use SVG / DOM / CSS / Motion instead of automatically reaching for WebGL.

---

# 22. SIGNATURE INTERACTION

The site should have ONE signature interaction that feels specific to Krishiv.

Possible directions:

- AI pipeline visualization
- engineering system map
- project media transition
- frontend/AI relationship visualization
- interactive project exploration

Do not create a gimmick only because it is technically difficult.

Pick the idea with the strongest combination of:

- originality
- relevance
- visual quality
- technical credibility
- performance
- mobile support

---

# 23. WEBGL / 3D

WebGL is optional.

Do not build a massive 3D world just to look impressive.

If used, it must have:

- real purpose
- lazy loading
- mobile fallback
- reduced-motion fallback
- non-WebGL version
- reasonable GPU usage

Default:

**DOM + CSS + SVG + Motion first.**

---

# 24. PERFORMANCE DOES NOT MEAN “NO ANIMATION”

Performance means implementing animation intelligently.

Prefer:

- transform
- opacity
- compositor-friendly effects
- native browser capabilities where possible
- Motion APIs
- CSS transitions
- lazy media
- dynamic imports
- responsive images
- optimized video

Avoid:

- giant JavaScript loops
- expensive layout recalculation on scroll
- massive media loaded at startup
- unnecessary React rerenders
- permanent expensive animation loops

If an effect is beautiful but laggy, **optimize, simplify, defer, or replace it**.

Do not simply strip all visual character from the site.

---

# 25. MOBILE-FIRST

The website must be excellent on mobile.

Do not merely scale desktop down.

Intentionally redesign motion and composition for:

- 320px
- 360px
- 375px
- 390px
- 430px
- tablet
- desktop

Remove hover dependence.

Simplify heavy effects.

Keep strong typography and composition.

No horizontal overflow.

No clipped text.

No unusable menus.

---

# 26. UI/UX PRO MAX SKILL

The UI/UX Pro Max skill is already installed in this Cloud Code environment.

**Use it actively.**

Use it for:

- hierarchy
- design-system decisions
- spacing
- responsive behavior
- component patterns
- usability review
- accessibility
- visual polish
- interaction design

Do not let the skill's recommendations push the site back into generic minimalism.

Combine UI/UX Pro Max with the specific visual references and motion direction in `PORTFOLIO_RESEARCH.md`.

---

# 27. FREE RESOURCE POLICY

All external resources must be free/openly usable.

This includes:

- 21st.dev components
- Figma Community resources
- open-source icons
- fonts
- animation libraries
- code examples

No premium UI kits.

No paid animation packs.

No uncertain licenses.

If there is any doubt, implement the concept yourself.

---

# 28. PERSONALIZATION

The source material in `/Krishiv` determines:

- projects
- skills
- work history
- education
- achievements
- contact links
- social profiles
- resume
- photos
- media

Do not invent anything.

The visual system should be built around the actual work rather than placeholder content.

---

# 29. IF ASSETS ARE MISSING

You may ask me for:

- screenshots
- project recordings
- profile photos
- better media
- resume
- GitHub links
- live links
- project metrics
- architecture diagrams
- other essential information

Only ask when the missing information materially affects the result.

If it is optional, continue.

---

# 30. CONTENT TONE

Avoid generic AI copy such as:

- passionate developer
- turning ideas into reality
- crafting digital experiences
- innovative solutions
- results-driven
- cutting-edge

Use specific facts from `/Krishiv`.

Show evidence rather than adjectives.

---

# 31. RECRUITER EXPERIENCE

The site can be experimental, but a recruiter must quickly understand:

- who Krishiv is
- what he does
- what he has built
- what technologies he uses
- where the projects are
- where the resume is
- how to contact him

Do not hide important information behind clever interaction.

---

# 32. TECHNICAL LEAD EXPERIENCE

A technical lead should be able to discover:

- repositories
- deployments
- architecture
- implementation details
- technical decisions
- trade-offs
- measurable results where verified

The site should demonstrate software-design thinking as well as frontend skill.

---

# 33. NO CLICHÉ COMPONENT STACK

Do not assemble a generic stack like:

```text
Navbar
Hero
3 gradient cards
Skills
Projects grid
About
Contact
Footer
```

without designing a unique composition.

Every major section should have at least one deliberate visual idea.

---

# 34. SECTION VISUAL REQUIREMENT

Every major homepage section must contain meaningful visual design beyond “text inside a container.”

Examples:

- animated typography
- project media
- compositional asymmetry
- visual transition
- interactive diagram
- motion-driven layout
- editorial alignment
- layered imagery
- dynamic section boundary

---

# 35. SECTION-TO-SECTION FLOW

The landing page must feel like one experience rather than independent UI blocks.

Create visual continuity with:

- color transitions
- shared media
- typography movement
- dividers
- overlaps
- clipping
- sticky relationships
- controlled spacing

Do not let every section look like a standalone card component.

---

# 36. VISUAL DIFFERENTIATION TEST

Before approving the home page, compare it mentally against a generic AI-generated portfolio.

Ask:

> Could this exact layout have been generated by adding “modern portfolio” to a generic prompt?

If yes, redesign the relevant sections.

The final answer must have a distinctive art direction.

---

# 37. MOTION DIFFERENTIATION TEST

Do not make every section use:

```text
opacity: 0 → 1
translateY: 20px → 0
```

Use multiple motion languages.

Possible families:

- clip reveals
- staggered typography
- scale
- spring movement
- image displacement
- scroll-linked position
- mask transitions
- layout morphing
- controlled blur
- width/height interpolation
- shared-element transitions

Use them selectively and coherently.

---

# 38. PAGE TRANSITIONS

Use polished transitions from featured projects into project pages where technically appropriate.

Good candidate:

```text
project card image
        ↓
shared element transition
        ↓
project page hero image
```

Use Motion `layoutId` or the browser View Transitions API where appropriate.

Keep it short.

Never create blank waiting screens.

---

# 39. NAVIGATION

Use clear navigation.

Potentially:

```text
Work
About
Experience
Contact
Resume
```

A command palette (`Cmd/Ctrl + K`) is optional.

If included, it must supplement normal navigation, not replace it.

---

# 40. NO FAKE LOADER

Do not use artificial:

```text
Loading 00%
Loading 43%
Loading 100%
```

unless real assets genuinely require preloading.

Do not make the visitor wait to experience a portfolio.

---

# 41. PHOTO USAGE

If a photo is supplied, use it only if it improves the design.

Possible roles:

- editorial About section
- selected hero image
- personal visual moment
- profile module

Do not use a portrait merely because portfolios normally have one.

---

# 42. ICONS / ILLUSTRATIONS

Use icons sparingly.

Avoid turning the page into an icon wall.

Use visual assets where they carry meaning.

---

# 43. ACCESSIBILITY

Required:

- semantic HTML
- keyboard navigation
- visible focus
- proper buttons/links
- accessible navigation
- reduced motion
- accessible dialogs
- contrast
- meaningful image alt text

Animation must never be required to understand content.

---

# 44. SEO

Implement:

- titles
- descriptions
- Open Graph
- semantic headings
- canonical URLs where appropriate
- crawlable project pages
- sitemap/robots where appropriate

Use real information.

---

# 45. TESTING

Test actual behavior.

## Functional
- every route
- every project link
- external links
- resume
- social links
- navigation
- mobile menu
- skip animation
- command palette if present
- back/forward
- direct URL access

## Visual
- desktop
- mobile
- tablet
- large screens

## Motion
- landing page
- project transitions
- hover/focus
- reduced motion

## Performance
- image loading
- video loading
- animation smoothness
- unnecessary rerenders
- layout shifts

---

# 46. ITERATION IS REQUIRED

Do NOT stop after the first visually acceptable implementation.

After the first pass:

1. inspect the actual rendered website
2. compare it with the research
3. identify generic sections
4. identify boring sections
5. identify weak motion
6. identify weak composition
7. identify inconsistent spacing
8. refine
9. test again

If the page still feels basic, continue.

---

# 47. FINAL QUALITY GATE

The final site must satisfy ALL of these:

### VISUAL
- premium art direction
- strong typography
- intentional palette
- non-generic composition
- visually strong project showcase
- meaningful section transitions

### MOTION
- real landing-page choreography
- multiple motion types
- scroll-linked interaction
- project interactions
- polished microinteractions
- one memorable signature interaction

### UX
- obvious navigation
- multi-page structure
- skip animation
- normal cursor
- immediate content
- no scrolljacking

### ENGINEERING
- reusable architecture
- real routing
- optimized media
- strong accessibility
- robust responsive behavior
- verified links

### PERFORMANCE
- no noticeable lag
- no giant unnecessary payloads
- no fake loader
- motion optimized

### CONTENT
- all facts sourced from `/Krishiv`
- no fabricated metrics
- no fake experience
- no invented projects

---

# 48. THE FINAL BAR

Imagine the site is being viewed next to an elite creative developer portfolio and an elite frontend engineer portfolio.

It should look like it belongs there.

It must NOT look like a default AI-generated portfolio.

It must NOT look like a generic shadcn dashboard.

It must NOT look like “Tailwind + dark mode + cards.”

It must feel authored, art-directed, animated, and technically deliberate.

---

# 49. CENTRAL PRINCIPLE

> **Make the landing page visually unforgettable, make the project pages technically convincing, and make every functional interaction effortless.**

Use motion to attract attention.

Use design to create identity.

Use engineering to create trust.

Use restraint only where restraint improves the experience.

And most importantly:

> **Do not make another plain portfolio.**



--- ORIGINAL DETAILED BUILD SPEC BELOW ---

# PROMPT.md — Krishiv Premium Portfolio Build Specification

## 0. YOUR ROLE

You are the senior frontend engineer, interaction designer, UI/UX designer, motion designer, accessibility engineer, performance engineer, and product-minded developer responsible for building my personal portfolio website.

You are not building a generic developer template.

You are building a **premium, highly intentional personal portfolio for Krishiv** whose positioning should emerge from the actual material inside the `/Krishiv` folder.

My intended positioning is broadly:

> **Frontend / Software Design + AI/ML / Software Engineering**

However, the exact title, skills, projects, experience, claims, metrics, links, and wording MUST come from the source material I provide in `/Krishiv`.

Do not invent credentials, employers, awards, metrics, technologies, clients, project outcomes, or experience.

The attached research file is the design/interaction research foundation for this project:

`PORTFOLIO_RESEARCH.md`

It was created from a forensic review of reference portfolios including Stockt, Abhijit Rout, Thibaut Foussard, Saurabh, Claudio Guglieri, Midlife Engineering, Baj Kamal Singh, Rauno Freiberg, Dennis Snellenberg, Brittany Chiang, Paco Coursey, and Bruno Simon. Use it as research and inspiration, not as content or a cloning specification. The research emphasizes the balance between design excellence, experience excellence, engineering excellence, and career/recruiter value. It also identifies technical elegance, purposeful motion, strong case studies, accessibility, performance, and clear recruiter communication as the strongest direction for this portfolio. 

---

# 1. NON-NEGOTIABLE GOAL

Build a portfolio that feels:

- exceptionally polished
- original
- premium
- modern
- technically sophisticated
- visually memorable
- recruiter-friendly
- fast
- responsive
- accessible
- stable
- deliberate rather than gimmicky

The target feeling is:

> **“This person clearly understands frontend engineering, software design, interaction design, and how to build real products.”**

The website should feel closer to a **high-end product experience / creative developer site** than a conventional resume website.

At the same time, it must never sacrifice:

- readability
- routing
- discoverability
- accessibility
- mobile usability
- performance
- clear project information
- contactability

The design should communicate sophistication through **craft**, not through the maximum possible number of effects.

---

# 2. READ THE PROJECT CONTEXT BEFORE TOUCHING THE CODE

Before implementing anything:

1. Inspect the complete current repository/codebase.
2. Inspect the complete `/Krishiv` folder.
3. Read every relevant `.md`, `.txt`, `.json`, resume, project description, link list, and other source file.
4. Inspect every provided image/photo/video/screenshot asset.
5. Read `PORTFOLIO_RESEARCH.md` completely.
6. Determine the existing application/framework before changing it.
7. Inspect existing dependencies before adding new ones.
8. Identify whether a project already exists or whether this is a new portfolio implementation.
9. Determine what information is verified versus missing.
10. Build an internal content map before writing the UI.

### IMPORTANT SOURCE PRIORITY

Use these priorities:

1. **Actual facts in `/Krishiv`**
2. Existing verified project/code information
3. Existing repository implementation, when applicable
4. `PORTFOLIO_RESEARCH.md` for design/interaction principles
5. Your own implementation judgment

The research document may contain assumptions about my background or projects. **Never use those assumptions as personal facts unless the `/Krishiv` source files independently confirm them.**

---

# 3. INSPECTION-FIRST WORKFLOW

Do not immediately start writing UI.

First perform a thorough audit.

Create an internal understanding of:

### Content
- name
- title/positioning
- bio
- projects
- project descriptions
- experience
- education
- skills
- achievements
- certifications
- contact information
- social links
- GitHub
- LinkedIn
- Instagram
- WhatsApp
- resume
- live deployments
- source repositories
- photos
- screenshots
- videos
- other relevant assets

### Technical requirements
- framework
- routing
- deployment target
- existing design system
- CSS approach
- TypeScript
- animation stack
- available packages
- existing environment variables
- existing components

### Missing information

Make a list of anything genuinely necessary but missing.

You MAY ask me for missing assets/details when they materially affect the quality of the final result.

Examples:

- project screenshots
- better-quality project media
- portrait/photo
- missing resume
- missing project URL
- missing GitHub repository
- missing project metrics
- preferred email
- missing company logo

But do not constantly interrupt implementation for optional details.

If the information is not essential, make a sensible design decision and continue.

**Do not use fake placeholders in the final polished version.**

---

# 4. RESEARCH-DRIVEN DESIGN DIRECTION

Use the research findings as principles.

The strongest direction from the research is:

## TECHNICAL ELEGANCE

Combine:

- premium UI craft
- restrained typography
- sophisticated spacing
- high-quality transitions
- recruiter clarity
- meaningful engineering detail
- interactive storytelling

The site should bridge two worlds:

### FRONTEND / SOFTWARE DESIGN

Show:

- UI quality
- interaction craft
- responsive engineering
- component thinking
- attention to detail
- product sense

### AI / ML / SOFTWARE ENGINEERING

Show:

- real project depth
- architecture
- pipelines
- technical decisions
- engineering trade-offs
- deployed work
- measurable outcomes when actually documented

Do not make these two identities feel like two unrelated websites.

They should feel like one person's skill set.

---

# 5. CORE EXPERIENCE PRINCIPLE — EXTREMELY IMPORTANT

Use this exact philosophy:

> **Animations and smooth scrolling are primarily presentation tools for the landing experience. Once the visitor is inside a functional/content task, the interface should behave normally and immediately.**

Think of the portfolio like a premium café:

> The exterior and first impression can be exceptional and expressive because they attract people. Once the visitor is inside, the environment should be easy, predictable, and functional.

Translate that into the website architecture.

## HOME / LANDING PAGE

This is where the majority of the visual storytelling, smooth scrolling, transitions, and premium motion should exist.

It can have:

- smooth scrolling
- scroll-linked reveals
- typography choreography
- subtle parallax
- elegant project reveals
- carefully controlled section transitions
- tasteful visual atmosphere
- sophisticated hero animation
- a few standout interactions
- high-quality hover states

BUT:

**None of these should delay access to the content.**

## FUNCTIONAL / CONTENT PAGES

For pages such as:

- project details
- case studies
- resume
- contact
- forms
- any dashboard/tool-like page
- any future utility page

DO NOT carry the full cinematic landing-page motion system into them.

Prefer:

- native scrolling
- immediate interaction
- simple layout
- clear hierarchy
- zero scroll hijacking
- minimal transition overhead

A tiny, non-blocking route transition may be used only where it meaningfully improves continuity, but functional content must always appear immediately.

No elaborate smooth-scroll system on functional pages.

No scrolljacking.

No interaction that makes the user wait.

---

# 6. ANIMATION PHILOSOPHY

Motion should feel:

- fast
- physical
- intentional
- smooth
- lightweight
- premium

Not:

- slow
- decorative for its own sake
- repetitive
- attention-seeking
- laggy
- blocking
- difficult to understand

Use the research's **WHAT → HOW → WHY → EFFECT** approach when deciding whether to introduce a major interaction.

Every major animation must have a reason.

### Preferred motion characteristics

Favor:

- transform
- opacity
- scale
- clip-path where appropriate
- subtle blur only when cheap
- layout animation where appropriate
- spring-like motion
- carefully controlled stagger
- viewport-triggered animation
- CSS for simple effects
- Framer Motion for orchestration

Avoid:

- animating expensive layout properties unnecessarily
- continuous CPU-heavy loops
- huge canvas effects
- unnecessary WebGL
- giant particle systems
- dozens of simultaneous animations
- heavy DOM mutation on scroll
- effects that produce frame drops on mobile

---

# 7. SKIP ANIMATION CONTROL — REQUIRED

The landing page MUST include a clearly understandable **“Skip animation”** control during the initial cinematic/intro sequence.

The purpose is simple:

> Nobody should be forced to watch the same animation every time they revisit the website.

## Requirements

The skip control must:

- be visible during the intro animation
- be keyboard accessible
- have a real `<button>` element
- have readable text such as `Skip animation`
- immediately finish/skip the current intro sequence
- never require the user to understand a hidden gesture
- disappear once the intro is complete
- not block the main content
- work on mobile
- work with keyboard navigation
- respect `prefers-reduced-motion`

Recommended behavior:

- First visit: show the premium intro.
- User presses `Skip animation`: instantly complete the intro and reveal the page.
- Consider storing a lightweight browser preference such as `portfolio-intro-skipped` so repeat visitors can bypass the full intro on subsequent visits.
- Do not permanently lock the user out; provide a small way to replay the intro only if that is genuinely useful.
- Reduced-motion users should receive the non-cinematic version automatically.

Do not create an oversized “Skip” overlay that itself becomes visually annoying.

---

# 8. REDUCED MOTION — REQUIRED

Implement a real reduced-motion strategy.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and/or the appropriate Framer Motion reduced-motion mechanisms.

When reduced motion is active:

- remove smooth scrolling
- remove large parallax
- remove elaborate entrance choreography
- remove looping decorative motion
- shorten or eliminate transitions
- keep content immediately readable
- preserve usability
- preserve hierarchy

Do not treat reduced motion as an afterthought.

---

# 9. CURSOR — KEEP IT NORMAL

This is non-negotiable:

## DO NOT CREATE A CUSTOM CURSOR.

No:

- oversized cursor circles
- follower dots
- cursor trails
- cursor distortion
- magnetic cursor
- cursor text labels
- weird cursor replacements
- “developer portfolio cursor” gimmicks

Use the **normal browser cursor**.

You can still create excellent hover interactions, but the pointer itself must remain normal.

Buttons and cards can respond through:

- scale
- color/opacity
- underline
- image movement
- subtle shadows
- border changes
- icon motion

Do not make cursor tracking a central interaction system.

---

# 10. UI/UX PRO MAX SKILL

I have already added a **UI/UX Pro Max skill** to this Cloud Code environment.

Use that skill heavily.

Before implementing the visual system:

- inspect the available UI/UX Pro Max guidance
- use it to improve hierarchy, spacing, composition, responsive behavior, component quality, and interaction design
- combine it with the research in `PORTFOLIO_RESEARCH.md`

For motion, use **Framer Motion / Motion** where appropriate.

If using components, patterns, templates, or examples inspired by **21motion.dev** or Framer Motion ecosystem resources:

## FREE ONLY

Use only components/resources that are genuinely free to use.

Do NOT introduce:

- paid templates
- premium-only sections
- paid animation packs
- paid assets
- premium dependencies
- components that require a paid license/subscription

Before using anything sourced from 21motion.dev or another external design resource, verify that it is free/openly usable for this project.

When in doubt, implement the concept yourself with open-source technologies rather than introducing an uncertain dependency.

---

# 11. RECOMMENDED TECHNICAL DIRECTION

Unless the existing project requires another architecture, prefer a modern stack such as:

- Next.js
- React
- TypeScript
- Tailwind CSS or the existing maintainable styling system
- Framer Motion / Motion
- Lenis only where smooth scrolling is explicitly appropriate
- semantic HTML
- lightweight open-source icons if required

Do not introduce a large dependency merely because a website in the research used it.

Every dependency should earn its place.

### Principle

**Prefer a small number of excellent tools over a large stack of animation libraries.**

For example:

- Framer Motion for UI/motion orchestration
- CSS for simple transitions
- Lenis only for the landing-page scroll experience if it remains performant
- native browser APIs where they are better

Do not combine GSAP + Framer Motion + several scroll libraries unless there is a genuine engineering reason.

---

# 12. PERFORMANCE IS A FIRST-CLASS REQUIREMENT

The website MUST feel fast.

“Looks smooth on my machine” is not enough.

Design and implement for:

- modern desktop
- mid-range laptop
- mid-range Android phone
- iPhone/mobile Safari
- slower networks

## Performance rules

Prefer:

- lazy loading
- responsive images
- modern image formats
- correct image dimensions
- code splitting
- dynamic imports for expensive optional features
- preloading only genuinely critical assets
- transform/opacity-based animation
- GPU-friendly animation
- avoiding layout thrashing
- minimized JavaScript on non-interactive pages
- deferred media
- video loading on interaction when practical

Avoid:

- unnecessarily huge hero videos
- giant background videos that autoplay everywhere
- full-screen WebGL scenes
- unnecessary 3D
- huge unoptimized PNG/JPG assets
- loading every project video immediately
- forced 0–100% loading screens
- fake preloader percentages

### IMPORTANT

Do not add a loading screen unless there is a real technical need for it.

The research specifically identifies fake loading screens as an anti-pattern for ordinary DOM-based websites.

---

# 13. 60 FPS / NO-LAG STANDARD

Target a fluid feel rather than simply adding more effects.

Before finalizing any major animation:

Ask:

- Does this create unnecessary React renders?
- Is it triggering layout repeatedly?
- Is it causing paint/composite problems?
- Does it behave poorly on touch devices?
- Does it create a long main-thread task?
- Does it still feel smooth when scrolling?
- Is the effect actually worth its cost?

If an effect looks amazing but causes noticeable lag:

**remove, simplify, or progressively enhance it.**

A slightly simpler effect at a stable frame rate is better than a spectacular effect that stutters.

---

# 14. WEBGL / 3D POLICY

Do NOT build a Bruno Simon-style 3D experience merely because it is technically impressive.

The research explicitly shows that extreme WebGL can harm:

- performance
- accessibility
- mobile usability
- recruiter clarity

Use WebGL/3D only when it contributes meaningfully to my identity or a specific project.

Default preference:

**DOM + CSS + SVG + Framer Motion**

Use WebGL only as a focused enhancement.

Any WebGL feature must have:

- mobile consideration
- reduced-motion fallback
- non-WebGL fallback
- lazy loading
- clear purpose
- performance testing

---

# 15. VISUAL SYSTEM

Start from a coherent design system rather than styling section-by-section independently.

The research suggests a direction around **Technical Elegance**.

Use this as the baseline, then adapt it to the actual personal brand discovered in `/Krishiv`.

## Typography

Prefer a highly legible contemporary sans-serif such as:

- Geist
- Inter
- another similarly high-quality open/available typeface

Use monospace sparingly for:

- technical labels
- code/architecture snippets
- metrics
- metadata
- project technology information

Do not overuse monospace until the whole site looks like a terminal.

## Color

A dark-first design is acceptable and likely appropriate, but create hierarchy rather than simply using black backgrounds everywhere.

Prefer:

- deep neutral background
- strong readable primary text
- muted secondary text
- one carefully controlled accent
- subtle borders
- restrained gradients

Avoid:

- rainbow gradients everywhere
- neon overload
- glowing everything
- excessive glassmorphism
- weak contrast

## Layout

Combine:

- strong grid discipline
- editorial composition
- asymmetry where useful
- occasional bento modules
- full-bleed project visuals
- large typography where appropriate
- generous spacing

Do NOT turn the entire website into a generic bento-grid template.

Bento should be used when the content genuinely benefits from it.

---

# 16. THE WEBSITE SHOULD FEEL ORIGINAL

Do not clone:

- Rauno
- Dennis Snellenberg
- Brittany Chiang
- Thibaut
- Bruno Simon
- Stockt
- or any other researched portfolio.

Use their underlying principles.

Do not copy:

- exact layouts
- exact copy
- logos
- proprietary visuals
- proprietary code
- exact animations
- exact project-card structures

The result should feel like:

> **Krishiv's site informed by excellent websites**

not:

> **a mashup of other people's sites**

---

# 17. INFORMATION ARCHITECTURE

Use the research as a base, but adapt it to the actual content.

A strong baseline architecture is:

## Home

### Hero
Immediate identity and positioning.

### Selected Work
Strongest projects first.

### Capability / Skills Layer
Quickly communicate frontend + engineering + AI/ML capabilities.

### Experience
Professional history from source documents.

### Engineering / Systems Storytelling
Show how interesting projects actually work.

### About
Human personality and background, without turning into a generic autobiography.

### Contact
Extremely easy to reach.

---

# 18. MULTI-PAGE STRUCTURE

Prefer a clean multi-page or route-based structure when it improves project storytelling.

Potential routes:

```text
/
 /work
 /work/[slug]
 /about
 /experience
 /contact
 /resume
```

Do not create unnecessary pages.

### Project pages

These pages should prioritize:

- immediate readability
- clear technical information
- architecture
- role
- problem
- solution
- implementation
- results/metrics where verified
- screenshots
- demo
- GitHub
- technologies
- lessons/trade-offs

No cinematic scroll takeover.

Native scrolling.

Clear navigation.

---

# 19. PROJECT STORYTELLING

Treat strong projects as actual work, not a grid of tiny cards.

For each important project, determine what information actually exists in `/Krishiv`.

When available, structure around:

```text
Problem
↓
Context
↓
My role
↓
Architecture
↓
Implementation
↓
Key decisions
↓
Challenges / trade-offs
↓
Outcome / metrics
↓
Live demo / repository
```

Do not fabricate metrics.

If a useful metric is missing, do not invent one. Use the information that is actually available.

---

# 20. PROJECT VISUALS

Where screenshots/videos are available:

- use them prominently
- optimize them
- keep correct aspect ratios
- avoid layout shifts
- avoid giant initial payloads
- use hover video previews only when performance allows

A project card MAY use:

- static thumbnail first
- video on hover/focus for desktop
- static image on mobile
- reduced-motion fallback

This is inspired by the research, but the effect should remain restrained.

Do not make every card a media-heavy interaction.

---

# 21. NAVIGATION

Navigation must be obvious.

Do not hide important routes behind gimmicks.

Possible navigation:

- Work
- About
- Experience
- Contact
- Resume

A command palette using `Cmd/Ctrl + K` MAY be added if it genuinely improves the experience.

If added:

- it is functional
- fast
- keyboard accessible
- not animated excessively
- not required for normal navigation

Normal navigation must remain visible and understandable.

---

# 22. ROUTING REQUIREMENTS

Every button/link that claims to navigate somewhere must actually work.

Before finishing, test:

- logo/home
- work/project links
- project detail routes
- About
- Experience
- Contact
- Resume
- GitHub
- LinkedIn
- Instagram
- WhatsApp
- email
- live project demos
- source repositories

Do not ship placeholder links.

Do not use `href="#"` for real navigation.

Do not allow dead buttons.

---

# 23. CONTACT EXPERIENCE

Contact should be frictionless.

The primary contact action should be obvious.

Where real information is available, support:

- email
- LinkedIn
- GitHub
- Instagram
- WhatsApp
- resume

Do not hide contact information behind an elaborate animation.

The visitor should be able to reach me quickly.

---

# 24. MOBILE-FIRST QUALITY

Do not build desktop first and shrink it down.

Design the responsive system intentionally.

Check:

- 320px
- 375px
- 390px
- 430px
- tablet
- laptop
- large desktop

Mobile should not feel like a damaged desktop version.

On mobile:

- no hover dependence
- no cursor-specific functionality
- no giant visual effects
- no excessive motion
- no awkward sticky elements
- no horizontal overflow
- no text clipping
- no broken menus
- no huge media payloads

Keep the experience polished.

---

# 25. ACCESSIBILITY

Treat accessibility as part of the design.

Required:

- semantic HTML
- proper heading hierarchy
- accessible buttons
- visible focus states
- keyboard navigation
- meaningful link text
- alt text for meaningful images
- sufficient contrast
- reduced motion support
- accessible mobile menu
- accessible dialogs
- accessible command palette if added
- form labels where forms exist

Do not make accessibility invisible only at the end of development.

---

# 26. SEO / METADATA

Implement strong fundamentals:

- page titles
- metadata descriptions
- Open Graph
- social preview data
- canonical URLs where appropriate
- semantic content
- proper headings
- sitemap where applicable
- robots configuration where applicable
- structured data when genuinely useful

Use the real information supplied by me.

---

# 27. MEDIA / PHOTO HANDLING

I may upload:

- profile photos
- project screenshots
- project videos
- logos
- certificates
- design images
- architecture diagrams

Inspect them first.

Do not automatically use my portrait simply because I uploaded one.

Use it only if it improves the composition.

Do not stretch/crop important images badly.

---

# 28. USE THE RESEARCH SELECTIVELY

The research identified several useful patterns.

Use principles such as:

### From Brittany Chiang
- recruiter-friendly information architecture
- clarity
- semantic hierarchy
- obvious experience/project information

### From Rauno Freiberg
- micro-level UI polish
- spatial/layout fluidity
- precise borders, spacing, shadows
- native-feeling interaction

### From Dennis Snellenberg / Stockt
- cinematic typography
- controlled entrance choreography
- strong landing-page storytelling

### From Thibaut / WebGL examples
- understand the technical possibilities
- use only selected principles
- do not reproduce their high-cost approach everywhere

### From Paco Coursey
- speed
- directness
- keyboard-friendly engineering culture

### From Midlife Engineering
- personality
- visual metaphor
- technical identity without needing massive visuals

### From the research overall
- purposeful motion
- technical storytelling
- recruiter clarity
- accessibility
- performance

These references are inspiration, not a checklist that says every feature must be included.

---

# 29. DO NOT FORCE EVERY RESEARCHED FEATURE INTO THE SITE

This is critical.

Do NOT add all of the following just because the research mentioned them:

- command palette
- dual-mode toggle
- WebGL
- shaders
- magnetic buttons
- custom cursor
- parallax
- smooth scrolling
- bento
- giant typography
- video cards
- grain
- terminal
- 3D

Choose only what creates a coherent product.

**A portfolio with six excellent interactions is better than a portfolio with twenty mediocre gimmicks.**

---

# 30. HERO REQUIREMENTS

The hero is the most important part of the entire website.

Within the first few seconds, the visitor should understand:

- my name
- what I do
- what kind of work I build
- where to explore
- how to contact me

Do not write a giant generic paragraph above the fold.

Use typography and composition to create authority.

The hero can be highly animated, but:

- content appears quickly
- skip control is always available
- reduced-motion users get the instant version
- no fake loading screen
- no forced waiting

---

# 31. THE SIGNATURE INTERACTION

The portfolio should ideally have **one recognizable signature interaction**.

Do not use the most technically complex idea automatically.

The signature interaction should connect to the actual identity/content in `/Krishiv`.

Possible directions to explore during design:

- an interactive engineering/AI architecture visualization
- a sophisticated project transition
- an elegant system/flow visual
- a subtle interaction that reveals the relationship between frontend and AI engineering
- an interactive project showcase

Explore options internally.

Pick the one that:

1. feels original
2. supports the story
3. is performant
4. works on mobile
5. can be understood quickly
6. doesn't become the entire website

---

# 32. OPTIONAL AI / ENGINEERING STORYTELLING

Where the source material supports it, visually explain complex systems.

For example:

```text
User Input
   ↓
Retrieval / Processing
   ↓
Model / Agent
   ↓
Tools / Pipeline
   ↓
Response
```

This can be represented using:

- SVG
- CSS
- Framer Motion
- lightweight DOM
- diagrams

Avoid a giant 3D architecture.

The goal is:

> **show the engineering, don't just claim it.**

---

# 33. INTERACTION QUALITY

Every interactive component should answer:

- What can I do?
- What happened?
- What will happen next?

Good examples:

- button press visibly responds
- copied link says copied
- menu opens clearly
- current section is understandable
- project links visibly work
- external links behave predictably

Do not rely on ambiguous icon-only controls.

---

# 34. VISUAL HIERARCHY

Use a restrained hierarchy such as:

```text
Display / Hero
↓
Section headline
↓
Project/title
↓
Supporting copy
↓
Metadata
↓
Technical detail
```

Not everything should be huge.

Not everything should glow.

Not everything should animate.

Contrast should come from:

- size
- weight
- spacing
- rhythm
- composition
- motion used selectively

---

# 35. CONTENT TONE

The copy should feel:

- confident
- intelligent
- human
- concise
- specific
- technically literate

Avoid generic AI-generated phrases such as:

- “passionate developer”
- “turning ideas into reality”
- “crafting digital experiences”
- “innovative solutions”
- “problem solver”
- “results-driven professional”

unless the actual source material makes them meaningful.

Prefer evidence.

For example:

- what I built
- what technologies I used
- what problem I solved
- what decisions I made
- what changed because of my work

---

# 36. NO FAKE CREDENTIALS

Never invent:

- numbers
- user counts
- performance percentages
- clients
- awards
- years of experience
- job titles
- companies
- education
- technical skills
- project metrics

If information is missing:

- omit it, or
- mark it internally for me to provide

Do not make the portfolio look impressive by making facts up.

---

# 37. DESIGN DETAILS THAT MATTER

Pay obsessive attention to:

- 1px borders
- radius consistency
- spacing scale
- optical alignment
- text wrapping
- image crops
- line length
- baseline alignment
- button height
- icon alignment
- hover state timing
- focus states
- section rhythm
- mobile spacing
- empty states
- loading states
- error states if any
- route transitions

The premium quality should come from these details.

---

# 38. IMPLEMENTATION RULES FOR MOTION

Use Framer Motion intentionally.

Recommended patterns may include:

- variants
- staggered children
- AnimatePresence
- layout/layoutId where appropriate
- viewport-triggered animation
- spring transitions
- transform/opacity
- controlled shared transitions

For landing-page motion, prefer:

```text
fast entrance
+
subtle scroll choreography
+
strong typography
+
small tactile interactions
```

not:

```text
constant movement everywhere
```

Keep animation durations generally short and purposeful.

Avoid making the website feel slow merely because the animation is beautiful.

---

# 39. SMOOTH SCROLLING RULES

Smooth scrolling MAY be used on the **home landing page**.

If using Lenis or a similar tool:

- scope it to the home/landing experience
- respect reduced motion
- avoid fighting browser input
- avoid scrolljacking
- preserve standard anchor behavior
- maintain accessibility
- verify touch/mobile behavior
- disable it on content-heavy/functional pages

Do not hijack the scrollbar.

The user must always feel in control.

---

# 40. PAGE TRANSITIONS

Page transitions should never hide content.

If using Framer Motion or View Transitions:

- keep them very short
- avoid artificial loading
- avoid blank intermediary states
- preserve route accessibility
- ensure direct URL loading works
- ensure back/forward navigation works

A page transition is polish, not a reason to delay the next page.

---

# 41. FAILURE-SAFE ENGINEERING

Every advanced visual feature must degrade gracefully.

Examples:

### Video unavailable
Use static image.

### WebGL unavailable
Use DOM/SVG/CSS version.

### Reduced motion
Instant/simple version.

### Slow network
Show content without waiting for decorative media.

### JavaScript delayed
Important information remains understandable.

### Mobile
Simplify rather than shrink everything.

---

# 42. TESTING REQUIREMENTS

Before declaring the site finished, test:

## Functional
- every route
- every button
- every link
- every form
- resume download
- external links
- mobile menu
- skip animation
- any command palette
- any theme control
- browser back/forward
- direct route loads

## Responsive
- mobile
- tablet
- desktop
- very wide viewport

## Accessibility
- keyboard
- focus states
- reduced motion
- semantic structure
- contrast

## Performance
- image loading
- video loading
- animation smoothness
- unnecessary re-renders
- layout shift
- main-thread work
- mobile responsiveness

## Visual
Inspect every important section at actual browser sizes.

Do not rely only on code inspection.

---

# 43. QUALITY BAR

The final result should make these statements believable:

> “The developer cares about interface quality.”

> “The developer can ship polished frontend systems.”

> “The developer understands performance.”

> “The developer understands UX.”

> “The developer can communicate complex engineering clearly.”

> “The developer knows when NOT to use an effect.”

That last one is particularly important.

Restraint is part of the design.

---

# 44. DEVELOPMENT PROCESS

Follow this sequence:

## PHASE 1 — AUDIT
Inspect the repository, `/Krishiv`, assets, existing architecture, and `PORTFOLIO_RESEARCH.md`.

## PHASE 2 — CONTENT MODEL
Determine exactly what content exists and map it to the site.

## PHASE 3 — DESIGN SYSTEM
Define typography, spacing, colors, borders, radii, layout rules, component behavior, and motion principles.

## PHASE 4 — INFORMATION ARCHITECTURE
Define the routes and content structure before building individual sections.

## PHASE 5 — LANDING EXPERIENCE
Build the home page first.

## PHASE 6 — FUNCTIONAL PAGES
Build project/case-study/about/contact/resume pages with normal scrolling and restrained behavior.

## PHASE 7 — POLISH
Refine spacing, typography, visual rhythm, responsive behavior, motion, accessibility, and performance.

## PHASE 8 — TEST
Test the full website.

## PHASE 9 — FINAL CLEANUP
Remove unused dependencies/components/assets/code and ensure the repository is clean.

---

# 45. BEFORE FINAL IMPLEMENTATION, DO THIS

Create a private or temporary implementation checklist containing:

### Content
- verified
- missing
- needs user input

### Design
- visual direction
- hero concept
- project presentation
- page architecture

### Motion
- intro animation
- skip behavior
- landing-page scroll system
- project interaction
- reduced-motion behavior

### Engineering
- dependencies
- performance approach
- routing
- accessibility
- SEO

Do not ask me for approval for every tiny design decision.

Use professional judgment.

Only ask when a missing piece would materially change the final result.

---

# 46. IF YOU NEED ASSETS FROM ME

You are explicitly allowed to ask me for:

- screenshots of websites/projects I built
- project demo recordings
- profile photos
- resume
- GitHub repository links
- live links
- brand assets
- architecture diagrams
- project metrics
- specific content
- contact information

When asking, be specific about:

1. what you need
2. where it will be used
3. what quality/format is preferred

But if a strong result can be achieved using the material already supplied, do not stop unnecessarily.

---

# 47. IMPORTANT RESEARCH-TO-CODE TRANSLATION

Do not merely copy the research document into CSS.

Translate principles.

### Example:

Research says:
“Rauno has spatial UI polish.”

Do NOT interpret that as:
“Copy Rauno's interface.”

Interpret it as:
“Create fluid relationships between elements, precise spacing, consistent borders, and seamless transitions.”

### Example:

Research says:
“Dennis uses smooth scrolling.”

Do NOT interpret that as:
“Make every page use aggressive smooth scroll.”

Interpret it as:
“Use smooth scrolling only where it improves the landing-page presentation.”

### Example:

Research says:
“Thibaut uses WebGL.”

Do NOT interpret that as:
“Add WebGL.”

Interpret it as:
“Understand that advanced graphics can create memorable interaction, but use a lower-cost technique when it communicates the idea better.”

---

# 48. AVOID THESE PORTFOLIO CLICHÉS

Do not automatically use:

- giant “HELLO WORLD”
- endless `I am a passionate developer`
- random 3D spheres
- floating neon blobs
- fake terminal screens
- infinite scrolling skill marquees
- generic typing effects
- spinning skill logos
- fake loading percentages
- unnecessary custom cursors
- excessive glass cards
- rainbow gradients
- huge grain overlays
- scrolljacking
- meaningless parallax
- 20 identical bento cards
- “currently listening to” gimmicks unless personally relevant
- fake statistics
- decorative dashboards with no meaning

The website should feel **personal and authored**, not generated from a trend list.

---

# 49. DO NOT OVERANIMATE THE CONTENT

The landing page should have a strong rhythm:

```text
Hero
→ breathe
→ content
→ interaction
→ breathe
→ project
→ breathe
→ engineering story
→ breathe
→ contact
```

Whitespace is part of the animation.

A section does not need an effect simply because there is empty space.

---

# 50. RESPONSIBLE USE OF 21MOTION / FRAMER MOTION RESOURCES

When browsing available motion components:

1. Prefer free/open resources.
2. Verify the resource can be used without paid access.
3. Avoid dragging an entire template into the project.
4. Extract the useful interaction pattern.
5. Adapt it to my design system.
6. Remove unnecessary dependencies.
7. Maintain accessibility and mobile behavior.
8. Keep performance under control.

A resource is only useful if it improves the actual site.

---

# 51. FINAL REVIEW QUESTIONS

Before considering the build complete, ask yourself:

### Identity
Can someone understand who Krishiv is within seconds?

### Work
Can a recruiter quickly find real projects?

### Engineering
Can a technical lead see actual engineering depth?

### Design
Does the site demonstrate frontend/UI craft without becoming a gimmick?

### Motion
Does the landing page feel premium and alive?

### Control
Can a visitor skip the intro instantly?

### Cursor
Is the cursor completely normal?

### Functional pages
Do they behave normally and immediately?

### Mobile
Does the portfolio remain excellent on a phone?

### Performance
Does it feel fast and stable?

### Accessibility
Can keyboard/reduced-motion users use it properly?

### Originality
Would this be recognizable as Krishiv's portfolio rather than an imitation?

### Credibility
Are all claims and details backed by actual source material?

---

# 52. FINAL DELIVERABLE

Do not stop after creating the initial visual shell.

Build the complete usable portfolio.

At the end, provide:

1. what you built
2. the architecture/stack
3. major interaction systems
4. which external/free resources were used
5. performance/accessibility considerations
6. anything I still need to provide
7. any known limitations

Do not claim perfect Lighthouse scores or flawless behavior unless you actually tested them.

Do not claim a dependency is free unless verified.

Do not claim a technology is used by a referenced site unless the evidence supports it.

---

# 53. THE CENTRAL PRINCIPLE

Remember this throughout the entire implementation:

> **The portfolio should impress people in the first few seconds, but never make them work to understand me.**

The landing page can be expressive.

The content must remain clear.

The interactions must remain optional.

The cursor stays normal.

The intro can be skipped.

The functional pages behave like normal excellent software.

The animations should make the interface feel better, not slower.

The engineering should be visible, not hidden behind gimmicks.

The final site should feel like:

> **Krishiv — a highly polished frontend/software designer who also builds serious AI/ML systems.**

Use the research deeply.

Use the UI/UX Pro Max skill aggressively.

Use Framer Motion thoughtfully.

Use only free/openly usable motion resources.

Build with restraint.

Make it beautiful.

Make it fast.

Make it feel authored.

Make it unmistakably mine.
