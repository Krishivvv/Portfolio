"use client";

import { useEffect, useRef, useState } from "react";

// A muted, looping clip that plays only while it is on screen. It never starts
// by itself for reduced motion, and the button pauses or plays it at any time
// (moving content that lasts more than five seconds needs a pause control).
export function LifeVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || userPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [userPaused]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      >
        <source src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
      </video>
      <button
        type="button"
        onClick={() => {
          const video = ref.current;
          if (!video) return;
          if (video.paused) {
            setUserPaused(false);
            video.play().catch(() => {});
          } else {
            setUserPaused(true);
            video.pause();
          }
        }}
        className="press absolute right-3 bottom-3 inline-flex min-h-11 items-center rounded-full bg-night/80 px-4 font-mono text-[0.75rem] text-night-text backdrop-blur-sm"
      >
        {playing ? "Pause" : "Play"}
        <span className="sr-only"> video: {label}</span>
      </button>
    </div>
  );
}
