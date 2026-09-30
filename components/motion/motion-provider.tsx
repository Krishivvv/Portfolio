"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

import { duration, ease } from "@/lib/motion";

// Every page gets Motion's animation features (animate, exit, in-view, hover,
// focus). Layout animations need the larger set, which only the sections that
// use them load (see <LayoutFeatures>).
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: duration.reveal, ease }}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
