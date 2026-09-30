"use client";

import { m, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { ease } from "@/lib/motion";

// Slides away while reading downwards, returns on any upward scroll and
// whenever something inside it has keyboard focus.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    const next = y > previous && y > 160;
    if (next !== hidden) setHidden(next);
  });

  return (
    <m.header
      data-site-header
      initial={false}
      animate={{ y: hidden && !focusWithin ? "-100%" : "0%" }}
      transition={{ duration: 0.4, ease }}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocusWithin(false);
      }}
      className="sticky top-0 z-50 border-b border-line bg-paper [view-transition-name:site-header]"
    >
      {children}
    </m.header>
  );
}
