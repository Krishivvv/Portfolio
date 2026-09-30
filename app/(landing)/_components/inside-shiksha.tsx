"use client";

import { m, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { memo, useRef, useState } from "react";

import { arrowPath, GroupShape, NodeShape, type PartState } from "@/components/diagram";
import { Reveal, SplitWords } from "@/components/motion/reveal";
import { useMedia } from "@/components/motion/use-media";
import { type DiagramLayout, shiksha, shikshaStages } from "@/content/diagrams";

import { scrollToY } from "./smooth-scroll";

// The signature interaction: Shiksha's real pipeline, told by scroll. On large
// screens the diagram is pinned while scrolling walks it through the five
// stages; on small screens the stage strip is pinned and the diagram scrolls
// beneath it. Stages are also buttons. Scroll stays native throughout.

const LAST = shikshaStages.length - 1;
const Node = memo(NodeShape);
const Group = memo(GroupShape);

const owner = { node: new Map<string, number>(), edge: new Map<string, number>(), group: new Map<string, number>() };
shikshaStages.forEach((s, i) => {
  s.nodes.forEach((n) => owner.node.set(n, i));
  s.edges.forEach((e) => owner.edge.set(e, i));
  s.groups.forEach((g) => owner.group.set(g, i));
});

function stateFor(o: number | undefined, stage: number): PartState {
  if (o === undefined || o < stage) return "done";
  return o === stage ? "active" : "idle";
}

const Pipeline = memo(function Pipeline({ layout, stage, className }: { layout: DiagramLayout; stage: number; className: string }) {
  return (
    <svg viewBox={`0 0 ${layout.width} ${layout.height}`} className={`dg h-auto w-full ${className}`} aria-hidden>
      {layout.groups?.map((g) => (
        <Group key={g.id} group={g} state={stateFor(owner.group.get(g.id), stage)} />
      ))}
      {layout.edges.map((e) => {
        const state = stateFor(owner.edge.get(e.id), stage);
        return (
          <g key={e.id}>
            <g className="dg-edge" data-state={state === "active" ? "idle" : state}>
              <path d={e.d} />
              <path d={arrowPath(e.end, e.dir)} />
            </g>
            {/* Keyed by stage so the trace replays whenever the stage changes. */}
            {state === "active" && (
              <g key={stage} className="dg-edge" data-state="active" data-draw>
                <path d={e.d} pathLength={1} className="dg-line" />
                <path d={arrowPath(e.end, e.dir)} className="dg-head" />
              </g>
            )}
          </g>
        );
      })}
      {layout.nodes.map((n) => (
        <Node key={n.id} node={n} state={stateFor(owner.node.get(n.id), stage)} />
      ))}
    </svg>
  );
});

export function InsideShiksha() {
  const large = useMedia("(min-width: 1024px)");
  const pinned = useRef<HTMLDivElement>(null);
  const flowing = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: large ? pinned : flowing,
    offset: large ? ["start start", "end end"] : ["start 0.7", "end 0.7"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(LAST, Math.max(0, Math.floor(p * shikshaStages.length)));
    if (next !== stage) setStage(next);
  });

  // Jump by scrolling to the middle of that stage's share of the track.
  const goTo = (i: number) => {
    const el = (large ? pinned : flowing).current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const share = (i + 0.5) / shikshaStages.length;
    const y = large ? top + (rect.height - window.innerHeight) * share : top + rect.height * share - window.innerHeight * 0.7;
    setStage(i);
    scrollToY(Math.max(0, y));
  };

  const header = (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <p className="eyebrow lg:col-span-12">Engineering · inside one system</p>
      <Reveal variant="words" as="h2" id="engineering-title" className="text-mega font-semibold lg:col-span-8">
        <SplitWords text="Inside" />{" "}
        <span className="serif text-night-accent">
          <SplitWords text="Shiksha." />
        </span>
      </Reveal>
      <p className="max-w-[42ch] text-night-muted sm:text-lg lg:col-span-4">
        A text prompt becomes a narrated video. The models write animation code, and a headless browser renders it.
      </p>
    </div>
  );

  const stages = (
    <ol className="relative grid grid-cols-5 gap-1 lg:grid-cols-1 lg:gap-0">
      {/* Progress rule (large screens). */}
      <span aria-hidden className="absolute top-0 bottom-0 left-0 hidden w-px bg-night-line lg:block" />
      <m.span aria-hidden className="absolute top-0 bottom-0 left-0 hidden w-px origin-top bg-night-accent lg:block" style={{ scaleY: scrollYProgress }} />
      {shikshaStages.map((s, i) => (
        <li key={s.label} className="lg:pl-8">
          <button
            type="button"
            aria-current={stage === i ? "step" : undefined}
            onClick={() => goTo(i)}
            className={`press flex min-h-12 w-full flex-col items-start justify-center border-b-2 text-left transition-colors lg:flex-row lg:items-baseline lg:justify-start lg:gap-4 lg:border-b-0 lg:py-3 ${
              stage === i ? "border-night-accent text-night-text" : "border-transparent text-night-muted hover:text-night-text"
            }`}
          >
            <span className="font-mono text-[0.75rem]">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[0.8125rem] font-medium sm:text-base lg:text-2xl lg:tracking-[-0.02em]">{s.label}</span>
          </button>
          <p
            className={`hidden max-w-[44ch] pb-4 leading-relaxed transition-opacity duration-500 lg:block ${
              stage === i ? "text-night-text opacity-100" : "text-night-muted opacity-80"
            }`}
          >
            {s.text}
          </p>
        </li>
      ))}
    </ol>
  );

  return (
    <section id="engineering" aria-labelledby="engineering-title" className="chapter night relative z-10 -mt-8 rounded-t-[2rem]">
      <div className="mx-auto max-w-[1320px] px-4 pt-24 sm:px-8 sm:pt-32">{header}</div>

      {/* Large screens: a pinned stage — ~2.5 screens of native scroll walk the pipeline. */}
      <div ref={pinned} className="relative hidden h-[250vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-[1320px] grid-cols-12 gap-8 px-8">
            <div className="col-span-5 self-center">{stages}</div>
            <div role="img" aria-label={shiksha.title} className="col-span-6 col-start-7 flex h-[82vh] items-center justify-center">
              {/* Both layouts are in the server HTML; the hidden one gets frozen props. */}
              <Pipeline layout={shiksha.narrow} stage={large ? stage : 0} className="h-full w-auto!" />
            </div>
          </div>
        </div>
      </div>

      {/* Small screens: the stage strip pins above the diagram. */}
      <div className="mx-auto max-w-[1320px] px-4 pt-12 pb-24 sm:px-8 lg:hidden">
        <div className="sticky top-0 z-10 -mx-4 border-b border-night-line bg-night px-4 pt-3 pb-4 sm:-mx-8 sm:px-8">
          {stages}
          <p className="mt-3 min-h-[5.5em] leading-relaxed text-night-text">{shikshaStages[stage].text}</p>
        </div>
        <div ref={flowing} role="img" aria-label={shiksha.title} className="mx-auto mt-8 max-w-[400px]">
          <Pipeline layout={shiksha.narrow} stage={large ? 0 : stage} className="" />
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-4 pb-28 sm:px-8 lg:pt-8 lg:pb-36">
        <Link href="/work/shiksha" className="group btn btn-ghost press">
          Read the Shiksha case study <span aria-hidden className="nudge">→</span>
        </Link>
      </div>
    </section>
  );
}
