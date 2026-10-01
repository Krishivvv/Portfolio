"use client";

import { m, useScroll, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { RICH_MOTION, useMedia } from "@/components/motion/use-media";
import { mailto, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { getSite } from "@/content/sites";

const deck = ["sapien", "uniqform", "arthbrands"].map((slug) => getSite(slug)!);
// Resting pose of each card (front card last).
const pose = [
  { x: "-34%", y: "10%", r: -9 },
  { x: "22%", y: "-6%", r: 6 },
  { x: "0%", y: "0%", r: -2 },
];

function Chars({ text, line }: { text: string; line: number }) {
  return (
    <span aria-hidden className="hero-line">
      {[...text].map((ch, i) => (
        <span key={i} className="hero-char" style={{ "--c": i, "--line": line } as React.CSSProperties}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function DeckCard({ index, progress, rich }: { index: number; progress: MotionValue<number>; rich: boolean }) {
  const site = deck[index];
  const p = pose[index];
  const spread = index - 1;
  // Scrolling fans the deck out and lifts it away.
  const x = useTransform(progress, [0, 1], [0, spread * 90]);
  const y = useTransform(progress, [0, 1], [0, -140 - index * 30]);
  const rotate = useTransform(progress, [0, 1], [p.r, p.r + spread * 8]);

  return (
    <m.div
      className="absolute inset-0"
      style={rich ? { x, y, rotate, translateX: p.x, translateY: p.y } : { transform: `translate(${p.x}, ${p.y}) rotate(${p.r}deg)` }}
    >
      <div className="deck-card h-full" style={{ "--i": index } as React.CSSProperties}>
        <Link
          href={`/work/${site.slug}`}
          className="group browser press block h-full shadow-[0_28px_60px_-24px_rgb(22_21_19/0.45)] transition-shadow duration-300 hover:shadow-[0_36px_70px_-24px_rgb(22_21_19/0.55)]"
        >
          <span className="browser-bar">{site.domain ?? site.name}</span>
          <span className="relative block aspect-[16/10] overflow-hidden">
            <Image
              src={site.image}
              alt=""
              fill
              // All three cards sit above the fold; any of them can be the LCP.
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 440px, 78vw"
              className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
            />
          </span>
          <span className="sr-only">
            {site.name}, {site.kind}
          </span>
        </Link>
      </div>
    </m.div>
  );
}

export function Hero() {
  const rich = useMedia(RICH_MOTION);
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 760], [0, 1], { clamp: true });
  const leftX = useTransform(progress, [0, 1], ["0vw", "-13vw"]);
  const rightX = useTransform(progress, [0, 1], ["0vw", "13vw"]);
  const scale = useTransform(progress, [0, 1], [1, 0.94]);
  const dim = useTransform(progress, [0, 1], [0, 0.4]);

  const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

  return (
    // On screens tall enough to hold it, the hero stays put while the work
    // chapter rises over it. Elsewhere it scrolls normally, so nothing is hidden.
    <section
      aria-labelledby="hero-title"
      className="relative z-0 overflow-clip [@media(min-width:1024px)_and_(min-height:640px)]:sticky [@media(min-width:1024px)_and_(min-height:640px)]:top-0"
    >
      {/* One screen below the header, so the calls to action sit above the fold. */}
      <m.div style={rich ? { scale } : undefined} className="relative flex min-h-[calc(100svh-4rem-1px)] flex-col overflow-clip bg-paper pt-[4.5rem] pb-8 sm:pt-24">
        <div className="mx-auto flex w-full max-w-[1320px] flex-1 flex-col px-4 sm:px-8">
          {/* Leaves room at the right for the Skip animation button while the intro plays. */}
          <p className="hero-fade flex flex-wrap justify-between gap-x-6 gap-y-1 font-mono text-[0.75rem] text-muted sm:pr-48" style={i(0)}>
            <span>B.Tech CSE · Jagran Lakecity University · expected 2027</span>
            <span>{profile.location}</span>
          </p>

          <div className="relative mt-6 flex flex-1 flex-col justify-center lg:mt-0">
            <h1 id="hero-title" aria-label={profile.name} className="text-display font-semibold">
              <m.span className="block" style={rich ? { x: leftX } : undefined}>
                <Chars text="Krishiv" line={0} />
              </m.span>
              <m.span className="block text-right" style={rich ? { x: rightX } : undefined}>
                <Chars text="Sharma" line={1} />
              </m.span>
            </h1>

            {/* Three of the live websites, layered over the name. */}
            <div className="relative mx-auto mt-10 aspect-[16/12] w-[74vw] max-w-[440px] lg:absolute lg:top-[16%] lg:right-[9%] lg:mt-0 lg:w-[30vw]">
              {deck.map((site, n) => (
                <DeckCard key={site.slug} index={n} progress={progress} rich={rich} />
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:mt-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              {/* The statement and its supporting line are the LCP text: they never wait for the intro.
                  Its line breaks are fixed (two lines, one from lg), so the web font arriving never
                  re-wraps it and shifts the name above. */}
              <p className="text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.05] font-medium tracking-[-0.03em] lg:whitespace-nowrap">
                I build <span className="serif text-accent">AI products</span>
                <br className="lg:hidden" /> and <span className="serif text-accent">websites</span>.
              </p>
              <p className="mt-4 max-w-[28em] text-ink-2">
                Three deployed AI apps — an agentic voice-support system, an LLM video-generation pipeline and a deepfake
                classifier — and nine websites, seven of them live.
              </p>
              <div className="hero-fade mt-7 flex flex-wrap gap-3" style={i(2)}>
                <Link href="#work" className="group btn btn-primary press">
                  See the work <span aria-hidden className="nudge">→</span>
                </Link>
                <a href={mailto} className="btn btn-ghost press">
                  Email me
                </a>
                <Link href="/resume" className="btn btn-ghost press">
                  Resume
                </Link>
              </div>
            </div>

            <nav aria-label="Work index" className="hero-fade lg:col-span-4 lg:col-start-9" style={i(3)}>
              <ul className="border-t border-line font-mono text-[0.8125rem]">
                {projects.map((p) => (
                  <li key={p.slug} className="border-b border-line">
                    <Link href={`/work/${p.slug}`} className="group press flex min-h-11 items-center justify-between gap-4">
                      <span>
                        {p.name} <span className="text-muted">· {p.kind.toLowerCase()}</span>
                      </span>
                      <span aria-hidden className="nudge text-accent">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="border-b border-line">
                  <Link href="/work" className="group press flex min-h-11 items-center justify-between gap-4">
                    <span>
                      Websites <span className="text-muted">· 7 live, 2 in progress</span>
                    </span>
                    <span aria-hidden className="nudge text-accent">
                      →
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Dims as the next chapter slides over. */}
        {rich && <m.div aria-hidden className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: dim }} />}
      </m.div>
    </section>
  );
}
