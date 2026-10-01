"use client";

import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, ViewTransition } from "react";

import { DiagramSvg } from "@/components/diagram";
import { LayoutFeatures } from "@/components/motion/layout-features";
import { diagrams } from "@/content/diagrams";
import { projects } from "@/content/projects";
import { sites } from "@/content/sites";
import { spring } from "@/lib/motion";

type Filter = "all" | "ai" | "web";
const filters: { key: Filter; label: string; count: number }[] = [
  { key: "all", label: "Everything", count: projects.length + sites.length },
  { key: "ai", label: "AI systems", count: projects.length },
  { key: "web", label: "Websites", count: sites.length },
];

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("all");
  const showAi = filter !== "web";
  const showWeb = filter !== "ai";

  return (
    <LayoutFeatures>
      <div className="mx-auto max-w-[1320px] px-4 pb-24 sm:px-8 sm:pb-32">
        {/* One swipeable row on phones (layoutScroll keeps the pill's slide right while scrolled). */}
        <m.div
          layoutScroll
          role="group"
          aria-label="Filter work"
          className="-mx-4 flex gap-2 overflow-x-auto border-b border-line px-4 pb-6 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className="press relative inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-line-strong px-5 text-[0.9375rem] aria-pressed:border-ink aria-pressed:text-paper"
            >
              {filter === f.key && <m.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-ink" transition={spring} />}
              <span className="relative">{f.label}</span>
              <span className="relative font-mono text-[0.75rem] opacity-70">{f.count}</span>
            </button>
          ))}
        </m.div>

        <m.ul layout className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {showAi &&
              projects.map((p) => (
                <m.li
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={spring}
                  className="sm:col-span-2 lg:col-span-3"
                >
                  {/* The title is the card's link, stretched over the whole card; the demo
                      and code links sit above it (links cannot nest). */}
                  <div className="group night relative grid overflow-hidden rounded-media has-[[data-card-link]:focus-visible]:outline-2 has-[[data-card-link]:focus-visible]:outline-offset-4 has-[[data-card-link]:focus-visible]:outline-night-accent lg:grid-cols-12">
                    <span className="flex flex-col justify-between gap-8 p-6 sm:p-10 lg:col-span-7">
                      <span>
                        <span className="eyebrow">AI system</span>
                        <ViewTransition name={`work-title-${p.slug}`} share="morph" default="none">
                          <Link
                            href={`/work/${p.slug}`}
                            data-card-link
                            className="mt-3 block text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] font-semibold tracking-[-0.05em] outline-none after:absolute after:inset-0 after:content-['']"
                          >
                            {p.name}
                          </Link>
                        </ViewTransition>
                        <span className="mt-2 block text-lg text-night-muted">{p.kind}</span>
                      </span>
                      <span className="max-w-[50ch] text-night-muted">{p.line}</span>
                      <span className="font-mono text-[0.75rem] text-night-muted">{p.stack.join(" · ")}</span>
                      <span className="pointer-events-none relative z-10 flex flex-wrap items-center gap-x-6 gap-y-1">
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto press link inline-flex min-h-11 items-center gap-1.5 font-medium text-night-accent"
                        >
                          Live demo ↗<span className="sr-only">: {p.name} (opens in a new tab)</span>
                        </a>
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto press link inline-flex min-h-11 items-center gap-1.5 text-night-muted hover:text-night-text"
                        >
                          Code ↗<span className="sr-only">: {p.name} on GitHub (opens in a new tab)</span>
                        </a>
                        <span aria-hidden className="ml-auto inline-flex items-center gap-2 font-medium text-night-text">
                          Case study <span className="nudge">→</span>
                        </span>
                      </span>
                    </span>
                    <span aria-hidden className="hidden items-center justify-center border-l border-night-line bg-night-2 p-8 lg:col-span-5 lg:flex">
                      <DiagramSvg
                        layout={diagrams[p.slug].narrow}
                        className="max-h-[340px] w-auto! transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                        style={{ height: 340 }}
                      />
                    </span>
                  </div>
                </m.li>
              ))}
            {showWeb &&
              sites.map((s) => (
                <m.li
                  key={s.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={spring}
                >
                  <Link href={`/work/${s.slug}`} className="group block">
                    <ViewTransition name={`work-media-${s.slug}`} share="morph" default="none">
                      <span className="browser block">
                        <span className="browser-bar">{s.domain ?? s.name}</span>
                        <span className="relative block aspect-[16/10] overflow-hidden">
                          <Image
                            src={s.image}
                            alt={s.alt}
                            fill
                            sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 92vw"
                            className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.045]"
                          />
                        </span>
                      </span>
                    </ViewTransition>
                    <span className="mt-4 flex items-start justify-between gap-4">
                      <span>
                        <span className="eyebrow block">{s.status === "live" ? "Website · live" : "Website · in progress"}</span>
                        <span className="mt-1 block text-xl font-medium tracking-[-0.02em]">{s.name}</span>
                        <span className="block text-sm text-muted">{s.kind}</span>
                        {s.roles.length > 0 && <span className="mt-1 block font-mono text-[0.75rem] text-ink-2">{s.roles.join(" · ")}</span>}
                      </span>
                      <span aria-hidden className="nudge mt-5 text-accent">
                        →
                      </span>
                    </span>
                  </Link>
                </m.li>
              ))}
          </AnimatePresence>
        </m.ul>
      </div>
    </LayoutFeatures>
  );
}
