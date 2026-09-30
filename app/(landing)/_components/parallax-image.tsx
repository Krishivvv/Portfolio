"use client";

import { useScroll, useTransform } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

// Fine pointers with motion allowed only: phones keep a still image and never
// set up scroll tracking.
const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

// Scroll-linked motion value, reported without React state or re-renders.
function Drift({
  target,
  onChange,
}: {
  target: React.RefObject<HTMLDivElement | null>;
  onChange: (y: number | null) => void;
}) {
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-3.5, 3.5]);

  useEffect(() => {
    onChange(y.get());
    const unsubscribe = y.on("change", onChange);
    return () => {
      unsubscribe();
      onChange(null);
    };
  }, [y, onChange]);

  return null;
}

export function ParallaxImage({ image, alt, sizes }: { image: StaticImageData; alt: string; sizes: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);

  const drift = useCallback((y: number | null) => {
    if (layer.current) {
      layer.current.style.transform = y === null ? "" : `translate3d(0, ${y.toFixed(2)}%, 0) scale(1.08)`;
    }
  }, []);

  return (
    <div ref={frame} className="relative aspect-[16/10] overflow-hidden rounded-tile border border-seam bg-carbon">
      <div ref={layer} className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          className="object-cover object-top transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.025]"
        />
      </div>
      {enabled && <Drift target={frame} onChange={drift} />}
    </div>
  );
}
