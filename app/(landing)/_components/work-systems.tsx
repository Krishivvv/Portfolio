"use client";

import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { useState, ViewTransition } from "react";

import { DiagramSvg } from "@/components/diagram";
import { Reveal, SplitWords } from "@/components/motion/reveal";
import { diagrams } from "@/content/diagrams";
import { projects } from "@/content/projects";
import { ease } from "@/lib/motion";

// The AI systems have no screenshots but real architecture, so their
// "imagery" is the architecture itself: hovering or focusing a title swaps its
// diagram into the pinned panel with a clip wipe while the edges trace in.
export function WorkSystems() {
  const [active, setActive] = useState<(typeof projects)[number]["slug"]>(projects[0].slug);
  const project = projects.find((p) => p.slug === active)!;

  return (
    <section id="work" aria-labelledby="work-title" className="chapter night relative z-10 -mt-8 rounded-t-[2rem] pt-24 pb-28 sm:pt-32 sm:pb-36">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <p className="eyebrow lg:col-span-12">Selected work · AI systems</p>
          <Reveal variant="words" as="h2" id="work-title" className="text-mega font-semibold lg:col-span-8">
            <SplitWords text="Three AI systems," />{" "}
            <span className="serif text-night-accent">
              <SplitWords text="built and deployed." />
            </span>
          </Reveal>
          <p className="max-w-[40ch] text-night-muted sm:text-lg lg:col-span-4">
            Each one has a case study with its architecture drawn from how it actually works.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12">
          <ul className="group/list lg:col-span-7">
            {projects.map((p) => (
              <li
                key={p.slug}
                className="border-t border-night-line transition-opacity duration-300 last:border-b group-hover/list:opacity-40 hover:opacity-100! has-[:focus-visible]:opacity-100!"
              >
                <Link
                  href={`/work/${p.slug}`}
                  onMouseEnter={() => setActive(p.slug)}
                  onFocus={() => setActive(p.slug)}
                  className="group grid gap-3 py-8 sm:py-10"
                >
                  <span className="flex items-baseline justify-between gap-6">
                    <ViewTransition name={`work-title-${p.slug}`} share="morph" default="none">
                      <span className="text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.9] font-semibold tracking-[-0.05em] transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-4 group-focus-visible:translate-x-4">
                        {p.name}
                      </span>
                    </ViewTransition>
                    <span
                      aria-hidden
                      className="text-3xl text-night-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100 sm:-translate-x-3"
                    >
                      →
                    </span>
                  </span>
                  <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="text-lg text-night-text">{p.kind}</span>
                    <span className="font-mono text-[0.75rem] text-night-muted">{p.stack.join(" · ")}</span>
                  </span>
                  <span className="max-w-[56ch] text-night-muted lg:hidden">{p.line}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Pinned architecture preview (large screens). */}
          <div aria-hidden className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-24 rounded-media border border-night-line bg-night-2 p-6">
              <div className="flex items-center justify-between font-mono text-[0.75rem] text-night-muted">
                <span>architecture</span>
                <span className="text-night-accent">{project.name}</span>
              </div>
              <div className="relative mt-6 grid h-[min(58vh,560px)] place-items-center overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <m.div
                    key={active}
                    initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.7, ease }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <DiagramSvg layout={diagrams[active].narrow} draw className="max-h-full w-auto!" style={{ height: "100%" }} />
                  </m.div>
                </AnimatePresence>
              </div>
              <p className="mt-6 max-w-[48ch] text-sm leading-relaxed text-night-muted">{project.line}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
