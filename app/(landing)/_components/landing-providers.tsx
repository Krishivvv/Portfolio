"use client";

import { MotionConfig } from "motion/react";

import { duration, ease } from "@/lib/motion";

import { SmoothScroll } from "./smooth-scroll";

// The landing page uses Motion hooks (useScroll, useTransform, useInView) and no
// Motion-driven animations, so no feature bundle (domAnimation) is shipped.
// MotionConfig keeps reduced-motion handling in place for any Motion animation
// added here later; CSS handles reduced motion for everything that exists now.
export function LandingProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: duration.reveal, ease }}>
      {children}
      <SmoothScroll />
    </MotionConfig>
  );
}
