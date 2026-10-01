"use client";

import { m } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { LayoutFeatures } from "@/components/motion/layout-features";
import { Reveal, SplitWords } from "@/components/motion/reveal";
import { projects } from "@/content/projects";
import { skillGroups, skills, skillsUsedIn } from "@/content/skills";
import { spring } from "@/lib/motion";

type Filter = "all" | keyof typeof skillsUsedIn;

const total = skillGroups.reduce((n, g) => n + skills[g.key].length, 0);
const spans: Record<(typeof skillGroups)[number]["key"], string> = {
  genai: "lg:col-span-5",
  ml: "lg:col-span-4",
  backend: "lg:col-span-3",
  languages: "lg:col-span-5 lg:col-start-3",
  tools: "lg:col-span-5",
};

// Choose a project and the tools it actually used light up; the rest recede.
export function Capabilities() {
  const [filter, setFilter] = useState<Filter>("all");
  const used = filter === "all" ? null : new Set(skillsUsedIn[filter].uses);
  const project = filter === "all" ? null : projects.find((p) => p.slug === filter)!;

  return (
    <LayoutFeatures>
      <section
        id="capabilities"
        aria-labelledby="capabilities-title"
        className="chapter relative z-10 -mt-8 rounded-t-[2rem] bg-paper-2 pt-24 pb-28 sm:pt-32 sm:pb-36"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <p className="eyebrow lg:col-span-12">Capabilities</p>
            <Reveal variant="words" as="h2" id="capabilities-title" className="text-mega font-semibold lg:col-span-8">
              <SplitWords text="What I use," />{" "}
              <span className="serif text-accent">
                <SplitWords text="and where." />
              </span>
            </Reveal>
            <p className="max-w-[40ch] text-ink-2 sm:text-lg lg:col-span-4">
              Grouped as on my resume. Pick a project to see which of these it was built with.
            </p>
          </div>

            {/* One swipeable row on phones (layoutScroll keeps the pill's slide right
              while scrolled); wraps from sm. */}
          <m.div
            layoutScroll
            role="group"
            aria-label="Show the tools used in"
            className="-mx-4 mt-12 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {(["all", ...projects.map((p) => p.slug)] as Filter[]).map((key) => {
              const label = key === "all" ? "Everything" : projects.find((p) => p.slug === key)!.name;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={filter === key}
                  onClick={() => setFilter(key)}
                  className="press relative inline-flex min-h-11 shrink-0 items-center rounded-full border border-line-strong px-5 text-[0.9375rem] aria-pressed:border-ink aria-pressed:text-paper"
                >
                  {filter === key && (
                    <m.span layoutId="capability-filter" className="absolute inset-0 rounded-full bg-ink" transition={spring} />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </m.div>
          <p aria-live="polite" className="mt-4 min-h-6 font-mono text-[0.75rem] text-muted">
            {project
              ? `${used!.size} of ${total} resume skills in ${project.name}` +
                (skillsUsedIn[filter as keyof typeof skillsUsedIn].extra.length
                  ? ` · also ${skillsUsedIn[filter as keyof typeof skillsUsedIn].extra.join(", ")}`
                  : "")
              : `${total} skills across five groups`}
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
            {skillGroups.map((group) => (
              <div key={group.key} className={spans[group.key]}>
                <h3 className="border-b border-line-strong pb-3 text-sm font-medium tracking-[-0.01em]">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {skills[group.key].map((skill, k) => {
                    const on = used ? used.has(skill) : true;
                    // Unused skills fall back to the muted colour (still 4.6:1); used
                    // ones go to full ink with an ultramarine underline and dot.
                    return (
                      <li
                        key={skill}
                        data-state={used ? (on ? "used" : "unused") : undefined}
                        // A filter change runs through each group as a quick cascade.
                        style={{ transitionDelay: `${k * 28}ms` }}
                        className="group/skill relative text-[clamp(1.05rem,1.6vw,1.35rem)] tracking-[-0.015em] text-ink-2 transition-colors duration-300 data-[state=unused]:text-muted data-[state=used]:text-ink data-[state=used]:underline data-[state=used]:decoration-accent data-[state=used]:decoration-2 data-[state=used]:underline-offset-[0.3em]"
                      >
                        {skill}
                        <span
                          aria-hidden
                          style={{ transitionDelay: `${k * 28 + 120}ms` }}
                          className="absolute -top-0.5 -right-2 size-1.5 scale-0 rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-data-[state=used]/skill:scale-150"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {project && (
            <p className="mt-12">
              <Link href={`/work/${project.slug}`} className="group press link inline-flex min-h-11 items-center gap-2 font-medium">
                Read the {project.name} case study <span aria-hidden className="nudge">→</span>
              </Link>
            </p>
          )}
        </div>
      </section>
    </LayoutFeatures>
  );
}
