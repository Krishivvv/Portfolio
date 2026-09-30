"use client";

import { m, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, ViewTransition } from "react";

import { Reveal, SplitWords } from "@/components/motion/reveal";
import { RICH_MOTION, useMedia } from "@/components/motion/use-media";
import { type Site, sites } from "@/content/sites";

// Three columns that move at different speeds while the section scrolls by:
// layered, editorial depth without touching scroll itself.
const columns = [0, 1, 2].map((c) => sites.filter((_, i) => i % 3 === c));
const travel = [
  [40, -40],
  [140, -140],
  [70, -70],
];

function SiteCard({ site }: { site: Site }) {
  return (
    <Link href={`/work/${site.slug}`} className="group block">
      <ViewTransition name={`work-media-${site.slug}`} share="morph" default="none">
        <div className="browser shadow-[0_24px_50px_-30px_rgb(22_21_19/0.45)]">
          <span className="browser-bar">{site.domain ?? site.name}</span>
          <Reveal variant="clip" className="relative aspect-[16/10] overflow-hidden">
            {/* The wipe clips this span, not the image, so lazy loading still sees the image coming. */}
            <span className="absolute inset-0 block">
              <Image
                src={site.image}
                alt={site.alt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 92vw"
                className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
              />
            </span>
          </Reveal>
        </div>
      </ViewTransition>
      <span className="mt-4 flex items-start justify-between gap-4">
        <span>
          <span className="block text-xl font-medium tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1.5">
            {site.name}
          </span>
          <span className="block text-sm text-muted">{site.kind}</span>
        </span>
        <span aria-hidden className="nudge nudge-up mt-1 text-accent">
          ↗
        </span>
      </span>
    </Link>
  );
}

function Column({ items, index, progress, rich }: { items: Site[]; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"]; rich: boolean }) {
  const y = useTransform(progress, [0, 1], travel[index]);
  return (
    <m.ul style={rich ? { y } : undefined} className={`grid content-start gap-12 sm:grid-cols-2 lg:grid-cols-1 lg:gap-14 ${index === 1 ? "lg:pt-40" : index === 2 ? "lg:pt-16" : ""}`}>
      {items.map((site) => (
        <li key={site.slug}>
          <SiteCard site={site} />
        </li>
      ))}
    </m.ul>
  );
}

export function WorkWebsites() {
  const ref = useRef<HTMLElement>(null);
  const rich = useMedia(RICH_MOTION);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section
      ref={ref}
      id="websites"
      aria-labelledby="websites-title"
      className="chapter relative z-10 -mt-8 overflow-clip rounded-t-[2rem] bg-paper pt-24 pb-32 sm:pt-32 sm:pb-44"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <p className="eyebrow lg:col-span-12">Selected work · websites and frontend projects</p>
          <Reveal variant="words" as="h2" id="websites-title" className="text-mega font-semibold lg:col-span-8">
            <SplitWords text="Eight websites," />{" "}
            <span className="serif text-accent">
              <SplitWords text="all live." />
            </span>
          </Reveal>
          <p className="max-w-[40ch] text-ink-2 sm:text-lg lg:col-span-4">
            Open one to see it on desktop and phone, or visit it live.
          </p>
        </div>

        {/* Three drifting columns on large screens; they stack on smaller ones. */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {columns.map((items, i) => (
            <Column key={i} items={items} index={i} progress={scrollYProgress} rich={rich} />
          ))}
        </div>
      </div>
    </section>
  );
}
