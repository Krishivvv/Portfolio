"use client";

import { stagger as staggerFrom, useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

import { duration, ease, stagger } from "@/lib/motion";

// Content-first reveals: the server HTML is always fully visible. After
// hydration, only elements still below the fold are set to their start state,
// then animated once as they enter. With JavaScript delayed or reduced motion,
// nothing is ever hidden.

type Variant = "rise" | "slide" | "clip" | "scale" | "words";

type Keyframes = Record<string, string | number>;

const states: Record<Variant, { from: Keyframes; to: Keyframes; target?: string }> = {
  rise: { from: { opacity: 0, y: 32 }, to: { opacity: 1, y: 0 } },
  // Arrives from the right, for entries that read as a sequence.
  slide: { from: { opacity: 0, x: 72 }, to: { opacity: 1, x: 0 } },
  scale: { from: { opacity: 0, scale: 0.94 }, to: { opacity: 1, scale: 1 } },
  // Media wipes up from the bottom edge. The clip goes on the children: Chrome's
  // IntersectionObserver measures the clipped box, and a fully clipped wrapper
  // (zero height) can be skipped past without ever reporting "in view".
  clip: { from: { clipPath: "inset(100% 0% 0% 0%)" }, to: { clipPath: "inset(0% 0% 0% 0%)" }, target: ":scope > *" },
  // Words rise out of per-word masks (see <SplitWords>).
  words: { from: { y: "110%" }, to: { y: "0%" }, target: "[data-word]" },
};

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  group = false,
  className,
  id,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  /** Stagger direct `[data-item]` descendants instead of moving the wrapper. */
  group?: boolean;
  className?: string;
  id?: string;
  as?: "div" | "section" | "ul" | "ol" | "li" | "figure" | "h2" | "h3" | "p";
}) {
  const [scope, animate] = useAnimate<HTMLElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -10% 0px" });
  const armed = useRef(false);
  const { from, to, target } = states[variant];
  const Element = Tag as React.ElementType;
  const selector = group ? "[data-item]" : target;

  useEffect(() => {
    const el = scope.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // A chapter that is still off-screen is below the fold as a whole; asking it
    // rather than the element avoids forcing layout of content the browser is
    // skipping (content-visibility on landing chapters).
    const chapter = el.closest(".chapter");
    const below = (chapter && chapter.getBoundingClientRect().top > window.innerHeight) || el.getBoundingClientRect().top > window.innerHeight;
    if (!below) return;
    armed.current = true;
    animate(selector ? el.querySelectorAll(selector) : el, from, { duration: 0 });
  }, [animate, from, scope, selector]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;
    const el = scope.current;
    animate(selector ? el.querySelectorAll(selector) : el, to, {
      duration: variant === "clip" ? 1.05 : duration.reveal,
      ease,
      delay: selector ? staggerFrom(variant === "words" ? 0.045 : stagger, { startDelay: delay }) : delay,
    });
  }, [inView, animate, scope, selector, to, variant, delay]);

  return (
    <Element ref={scope} id={id} className={className}>
      {children}
    </Element>
  );
}

// Splits a line of text into per-word masks for the "words" reveal. The real
// text stays in the DOM, so it reads normally and works without JavaScript.
export function SplitWords({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((word, i, all) => (
        <span key={i} className={`inline-block overflow-clip pb-[0.08em] -mb-[0.08em] align-top ${className ?? ""}`}>
          <span data-word className="inline-block">
            {word}
          </span>
          {i < all.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
