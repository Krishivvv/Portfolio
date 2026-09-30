"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

import { stagger } from "@/lib/motion";

// Server HTML is always fully visible. After hydration, only blocks that are
// still below the fold are hidden, then revealed once as they scroll in.
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top > window.innerHeight) el.dataset.reveal = "pending";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (inView && el?.dataset.reveal === "pending") el.dataset.reveal = "shown";
  }, [inView]);

  return (
    <div
      ref={ref}
      className={className}
      style={index ? ({ "--reveal-delay": `${index * stagger * 1000}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
