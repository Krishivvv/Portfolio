"use client";

import { m, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

import { CopyEmail } from "@/components/copy-email";
import { Marquee } from "@/components/motion/marquee";
import { Reveal, SplitWords } from "@/components/motion/reveal";
import { RICH_MOTION, useMedia } from "@/components/motion/use-media";
import { mailto, profile } from "@/content/profile";

// The closing chapter: the address grows into place as it arrives, then the
// page lifts away to reveal the footer underneath (see SiteFooter "curtain").
export function Closing() {
  const ref = useRef<HTMLAnchorElement>(null);
  const rich = useMedia(RICH_MOTION);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 0.6"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "0%"]);

  return (
    <section id="contact" aria-labelledby="contact-title" className="chapter ultra relative z-10 -mt-8 overflow-clip rounded-t-[2rem] pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <p className="eyebrow">Contact</p>
        <Reveal variant="words" as="h2" id="contact-title" className="mt-6 max-w-[14ch] text-mega font-semibold">
          <SplitWords text="Email is the fastest" />{" "}
          <span className="serif">
            <SplitWords text="way to reach me." />
          </span>
        </Reveal>

        <m.a
          ref={ref}
          href={mailto}
          style={rich ? { scale, x } : undefined}
          className="mt-14 block origin-left text-[clamp(1.5rem,6.2vw,5.75rem)] leading-none font-semibold tracking-[-0.045em] break-all decoration-2 underline-offset-[0.14em] hover:underline sm:break-normal"
        >
          {profile.email}
        </m.a>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href={mailto} className="group btn btn-primary press">
            Email me <span aria-hidden className="nudge">→</span>
          </a>
          <CopyEmail email={profile.email} />
          <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost press">
            GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link href="/resume" className="btn btn-ghost press">
            Resume
          </Link>
        </div>
      </div>

      <Marquee
        items={["AI products", "Agentic workflows", "RAG", "LLM pipelines", "Deepfake detection", "Websites"]}
        speed={3}
        className="mt-20 text-[clamp(3rem,8.5vw,8rem)] leading-[1.08] font-semibold tracking-[-0.05em] text-white sm:mt-28"
        separatorClassName="text-white/45"
      />
    </section>
  );
}
