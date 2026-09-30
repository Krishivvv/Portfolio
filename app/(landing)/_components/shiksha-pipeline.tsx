"use client";

import { useInView } from "motion/react";
import { memo, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

import { arrowPath, GroupShape, NodeShape, type PartState } from "@/components/diagram";
import { type DiagramLayout, shiksha, shikshaStages } from "@/content/diagrams";

import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

// The signature interaction: Shiksha's real pipeline, one stage at a time.
// On first view it walks through the stages once (under 5 s, no loop); any
// interaction hands control to the visitor. Reduced motion: no autoplay, and
// every stage stays drawn.

const STEP_MS = 1150;

// Only changed parts re-render on each stage change.
const Node = memo(NodeShape);
const Group = memo(GroupShape);

// Which layout is on screen. Both SVGs stay mounted (CSS picks one, so the
// server HTML works without JS); after hydration the hidden one gets frozen
// props and, being memoized, never re-renders.
const WIDE = "(min-width: 75rem)";
const subscribeWide = (onChange: () => void) => {
  const mq = window.matchMedia(WIDE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const useWideLayout = () =>
  useSyncExternalStore<boolean | null>(subscribeWide, () => window.matchMedia(WIDE).matches, () => null);
const LAST = shikshaStages.length - 1;

const stageOfNode = new Map<string, number>();
const stageOfEdge = new Map<string, number>();
const stageOfGroup = new Map<string, number>();
shikshaStages.forEach((s, i) => {
  s.nodes.forEach((n) => stageOfNode.set(n, i));
  s.edges.forEach((e) => stageOfEdge.set(e, i));
  s.groups.forEach((g) => stageOfGroup.set(g, i));
});

function stateFor(owner: number | undefined, current: number, showAll: boolean): PartState {
  if (owner === undefined) return "done";
  if (owner === current) return "active";
  if (owner < current || showAll) return "done";
  return "idle";
}

const PipelineSvg = memo(function PipelineSvg({
  layout,
  stage,
  showAll,
  animate,
  className,
}: {
  layout: DiagramLayout;
  stage: number;
  showAll: boolean;
  animate: boolean;
  className: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className={`dg h-auto w-full ${className}`}
      style={{ maxWidth: layout.width }}
      aria-hidden
    >
      {layout.groups?.map((g) => (
        <Group key={g.id} group={g} state={stateFor(stageOfGroup.get(g.id), stage, showAll)} />
      ))}
      {layout.edges.map((e) => {
        const state = stateFor(stageOfEdge.get(e.id), stage, showAll);
        // Active edges draw in the accent over a dim track.
        return (
          <g key={e.id}>
            <g className="dg-edge" data-state={state === "active" ? "idle" : state}>
              <path d={e.d} />
              <path d={arrowPath(e.end, e.dir)} />
            </g>
            {/* Keyed by stage so the draw replays each time the stage changes. */}
            {state === "active" && (
              <g key={stage} className="dg-edge" data-state="active" data-draw={animate || undefined}>
                <path d={e.d} pathLength={1} className="dg-line" />
                <path d={arrowPath(e.end, e.dir)} className="dg-head" />
              </g>
            )}
          </g>
        );
      })}
      {layout.nodes.map((n) => (
        <Node key={n.id} node={n} state={stateFor(stageOfNode.get(n.id), stage, showAll)} />
      ))}
    </svg>
  );
});

export function ShikshaPipeline() {
  const [stage, setStage] = useState(0);
  const [touched, setTouched] = useState(false);
  const diagram = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  // Autoplay waits until the diagram itself is on screen, not just the tabs.
  const inView = useInView(diagram, { once: true, amount: 0.3 });
  const reduce = usePrefersReducedMotion();
  const wide = useWideLayout();
  const id = useId();

  const autoplay = inView && !reduce && !touched && stage < LAST;

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setStage((s) => Math.min(s + 1, LAST)), stage === 0 ? 700 : STEP_MS);
    return () => clearTimeout(t);
  }, [autoplay, stage]);

  const select = (i: number, focus = false) => {
    setTouched(true);
    setStage(i);
    if (focus) tabs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: stage + 1,
      ArrowDown: stage + 1,
      ArrowLeft: stage - 1,
      ArrowUp: stage - 1,
      Home: 0,
      End: LAST,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    select((keys[e.key] + shikshaStages.length) % shikshaStages.length, true);
  };

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)] md:gap-12 min-[75rem]:grid-cols-1">
      {/* Below 1200px the diagram is tall, so the controls stay pinned beside
          or above it: choosing a stage never highlights something off screen. */}
      <div className="sticky top-16 z-10 -mx-4 border-b border-seam bg-graphite px-4 pt-2 pb-4 sm:-mx-8 sm:px-8 md:top-24 md:mx-0 md:self-start md:border-b-0 md:bg-transparent md:px-0 md:pt-0 md:pb-0 min-[75rem]:static">
        <div
          role="tablist"
          aria-label="Pipeline stages"
          className="grid grid-cols-5 gap-x-1 border-b border-seam md:grid-cols-1 md:gap-0 md:border-b-0 md:border-l lg:grid-cols-5 lg:gap-x-1 lg:border-b lg:border-l-0"
          onKeyDown={onKeyDown}
        >
          {shikshaStages.map((s, i) => (
            <button
              key={s.label}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`${id}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={stage === i}
              aria-controls={`${id}-panel`}
              tabIndex={stage === i ? 0 : -1}
              onClick={() => select(i)}
              className={`press relative -mb-px flex min-h-14 flex-col items-start justify-center gap-0.5 border-b text-left md:mb-0 md:-ml-px md:min-h-12 md:flex-row md:items-center md:justify-start md:gap-3 md:border-b-0 md:border-l-2 md:pl-4 lg:-mb-px lg:ml-0 lg:min-h-14 lg:flex-col lg:items-start lg:justify-center lg:gap-0.5 lg:border-b lg:border-l-0 lg:pl-0 ${
                stage === i ? "border-lake text-paper" : "border-transparent text-pencil hover:text-paper"
              }`}
            >
              <span className="font-mono text-[0.75rem] text-pencil">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[0.75rem] font-medium min-[360px]:text-[0.8125rem] sm:text-base">{s.label}</span>
            </button>
          ))}
        </div>

        {/* All captions share one cell, so switching stages never shifts layout. */}
        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${stage}`}
          className="mt-4 grid md:mt-6"
        >
          {shikshaStages.map((s, i) => (
            <p
              key={s.label}
              aria-hidden={i !== stage}
              className={`col-start-1 row-start-1 max-w-[60ch] leading-relaxed transition-opacity duration-300 sm:text-xl ${
                i === stage ? "opacity-100" : "invisible opacity-0"
              }`}
            >
              {s.text}
            </p>
          ))}
        </div>
        <p className="mt-3 text-sm text-pencil md:mt-6">
          {reduce || touched || stage === LAST
            ? "Choose a stage to see what happens there."
            : "Walking through the stages once — choose any stage to take over."}
        </p>
      </div>

      <div ref={diagram} role="img" aria-label={shiksha.title} className="flex justify-center">
        <PipelineSvg
          layout={shiksha.wide}
          stage={wide === false ? 0 : stage}
          showAll={reduce}
          animate={!reduce}
          className="hidden min-[75rem]:block"
        />
        <PipelineSvg
          layout={shiksha.narrow}
          stage={wide === true ? 0 : stage}
          showAll={reduce}
          animate={!reduce}
          className="max-w-[380px]! min-[75rem]:hidden"
        />
      </div>
    </div>
  );
}
