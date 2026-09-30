"use client";

import { useSyncExternalStore } from "react";

// Hydration-safe media query: the server snapshot is used for the first client
// render, then the real value — reading matchMedia during render would
// mismatch the server HTML.
export function useMedia(query: string, serverValue = false) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

export const REDUCED = "(prefers-reduced-motion: reduce)";
// Scroll-linked effects run only where they are cheap and meaningful.
export const RICH_MOTION = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
