"use client";

import { domMax, LazyMotion } from "motion/react";

// `layout` and `layoutId` need Motion's full feature set (layout projection).
// Wrapping only the sections that use them keeps it off every other page.
export function LayoutFeatures({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
