"use client";

import { m, useScroll, useSpring } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

import { Reveal, SplitWords } from "@/components/motion/reveal";
import { internships, otherWork } from "@/content/experience";
import { profile } from "@/content/profile";

type Entry = { title: string; org: string; period: string; detail?: string };

const entries: Entry[] = [
  ...internships.map((job) => ({
    title: job.role,
    org: `${job.org} · ${job.place}`,
    period: job.period ?? "",
    detail: job.points[1] ?? job.points[0],
  })),
  { title: profile.education[0].degree, org: profile.education[0].school, period: profile.education[0].period },
];

// The timeline's rule draws itself down the list as it scrolls through view.
// The roles on the websites follow as "Other work", apart from the internships.
export function Experience() {
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 0.85", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="chapter relative z-10 -mt-8 rounded-t-[2rem] bg-paper pt-24 pb-28 sm:pt-32 sm:pb-36">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Experience</p>
            <Reveal variant="words" as="h2" id="experience-title" className="mt-6 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] font-semibold tracking-[-0.05em]">
              <SplitWords text="Two internships," />{" "}
              <span className="serif text-accent">
                <SplitWords text="in ML and data." />
              </span>
            </Reveal>
            <p className="mt-6 max-w-[38ch] text-ink-2 sm:text-lg">
              Machine learning at FoCDoT Technologies and data analysis at AI Bricks Realtors. Alongside them, I’m Technical Head on
              the websites I build.
            </p>
            <Link href="/experience" className="group btn btn-ghost press mt-8">
              Full experience <span aria-hidden className="nudge">→</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative">
            <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
            <m.span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-accent" style={{ scaleY }} />
            <ol ref={list} className="grid gap-12">
              {entries.map((e) => (
                <li key={`${e.title}-${e.org}`} className="relative pl-10">
                  <span aria-hidden className="absolute top-2.5 left-0 size-[11px] rounded-full border-2 border-accent bg-paper" />
                  <Reveal variant="slide">
                    <p className="font-mono text-[0.75rem] text-muted">{e.period}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">{e.title}</h3>
                    <p className="mt-1 text-ink-2">{e.org}</p>
                    {e.detail && <p className="mt-3 max-w-[58ch] text-muted">{e.detail}</p>}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20">
            <h3 className="eyebrow">Other work · on the websites I build</h3>
            <Reveal as="ul" group className="mt-5 border-t border-line">
              {otherWork.map((site) => (
                <li key={site.slug} data-item className="border-b border-line">
                  <Link href={`/work/${site.slug}`} className="group press flex min-h-14 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                    <span className="text-lg font-medium tracking-[-0.015em] transition-transform duration-300 group-hover:translate-x-1.5">
                      {site.name}
                      {site.status === "in-progress" && <span className="ml-2 font-mono text-[0.75rem] text-muted">in progress</span>}
                    </span>
                    <span className="text-ink-2">
                      {site.roles.join(" · ")}
                      {site.note && <span className="text-muted"> · {site.note.replace(/\.$/, "").toLowerCase()}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
