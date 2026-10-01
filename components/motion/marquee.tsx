"use client";

import { m, useAnimationFrame, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { useRef } from "react";

import { useMedia } from "./use-media";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// A band of giant type that drifts sideways on its own, runs faster the faster
// the page scrolls, and turns round when scrolling turns round. Decorative: the
// same words are on the page as real content, so it is hidden from assistive
// tech. It only animates while on screen; with reduced motion it stands still.
export function Marquee({
  items,
  speed = 2.4,
  className = "",
  separatorClassName = "",
}: {
  items: string[];
  /** Percent of one copy's width per second, at rest. */
  speed?: number;
  className?: string;
  separatorClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "200px 0px" });
  const still = useMedia("(prefers-reduced-motion: reduce)");

  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-2000, 0, 2000], [-6, 0, 6], { clamp: false });

  const base = useMotionValue(0);
  const direction = useRef(-1);
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (still || !inView) return;
    const b = boost.get();
    if (b < 0) direction.current = 1;
    else if (b > 0) direction.current = -1;
    const step = direction.current * speed * (delta / 1000);
    base.set(base.get() + step + step * Math.abs(b));
  });

  const run = (copy: number) => (
    <span key={copy} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-[0.28em]">{item}</span>
          <span className={`text-[0.5em] ${separatorClassName}`}>✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div ref={ref} aria-hidden className={`overflow-clip select-none ${className}`}>
      <m.div style={{ x }} className="flex w-max whitespace-nowrap will-change-transform">
        {run(0)}
        {run(1)}
      </m.div>
    </div>
  );
}
