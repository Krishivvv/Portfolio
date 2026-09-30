"use client";

import "lenis/dist/lenis.css";

import type Lenis from "lenis";
import { useEffect } from "react";

let active: Lenis | undefined;

/** Scroll the landing page to a position: smooth through Lenis when it runs. */
export function scrollToY(y: number) {
  if (active) active.scrollTo(y);
  else window.scrollTo({ top: y, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

// Wheel smoothing for the landing page only. Touch stays native and reduced
// motion gets no Lenis at all; on those devices the library is never even
// downloaded. Nested scroll areas opt out with data-lenis-prevent.
export function SmoothScroll() {
  useEffect(() => {
    const matches = (q: string) => window.matchMedia(q).matches;
    if (matches("(prefers-reduced-motion: reduce)") || matches("(hover: none)") || matches("(pointer: coarse)")) {
      return;
    }

    let lenis: Lenis | undefined;
    let cancelled = false;
    // Same-page anchors: smooth-scroll with Lenis instead of the native jump.
    // preventDefault (not stopPropagation) so Next's <Link> stands down but other
    // handlers, like closing the mobile menu, still run.
    const onClick = (e: MouseEvent) => {
      if (!lenis || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      e.preventDefault();
      // Lenis honours the target's scroll-margin-top, same as native anchors.
      lenis.scrollTo(target);
      if (location.hash !== url.hash) history.pushState(null, "", url.hash);
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return;
      lenis = new LenisCtor({
        lerp: 0.14,
        autoRaf: true,
        prevent: (node) => node.hasAttribute("data-lenis-prevent") || node.tagName === "DIALOG",
      });
      active = lenis;
    });
    document.addEventListener("click", onClick, true);

    return () => {
      cancelled = true;
      document.removeEventListener("click", onClick, true);
      lenis?.destroy();
      active = undefined;
    };
  }, []);

  return null;
}
