import Link from "next/link";

import { Portrait } from "@/components/portrait";
import { LifeTiles } from "@/components/life-tiles";
import { activities } from "@/content/life";
import { lifeMedia } from "@/lib/life-media";
import { profile } from "@/content/profile";

// R:7, in first person. Serif words mark the two halves of the work.
const statement: { text: string; serif?: boolean }[] = [
  { text: "I’m a Computer Science undergraduate in Bhopal. I ship" },
  { text: "AI products, not just notebooks", serif: true },
  { text: "— an agentic voice-support system, an LLM video pipeline and a deepfake classifier — and I build" },
  { text: "websites", serif: true },
  { text: "for businesses: seven live, two in progress." },
];

const words = statement.flatMap((part) => part.text.split(" ").map((w) => ({ w, serif: !!part.serif })));

// The statement reads itself in as it scrolls through: each word brightens in
// turn (a CSS scroll-driven animation in landing.css, on the compositor, no
// JavaScript). Where that isn't supported, or with reduced motion, the words
// are simply there.
const [basketball, modelling] = activities;

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="chapter relative z-10 -mt-8 rounded-t-[2rem] bg-paper-3 pt-24 pb-28 sm:pt-32 sm:pb-36">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <h2 id="about-title" className="eyebrow">
          About
        </h2>
        <div className="mt-8 grid items-end gap-12 lg:grid-cols-12">
          <p
            className="read-in text-[clamp(2rem,4.3vw,4.1rem)] leading-[1.04] font-medium tracking-[-0.035em] lg:col-span-8"
            style={{ "--n": words.length } as React.CSSProperties}
          >
            {words.map((item, i) => (
              <span key={i} className={item.serif ? "serif text-accent" : undefined} style={{ "--i": i } as React.CSSProperties}>
                {item.w}{" "}
              </span>
            ))}
          </p>
          <Portrait sizes="(min-width: 1024px) 360px, 80vw" className="sd-unveil w-full max-w-[230px] sm:max-w-[300px] lg:col-span-4 lg:max-w-[340px] lg:justify-self-end" />
        </div>

        {/* Outside work: there as you scroll, without competing with the work. */}
        <div className="mt-16 grid items-center gap-6 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h3 className="eyebrow">Outside work</h3>
            <p className="mt-3 max-w-[22ch] text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] font-medium tracking-[-0.03em]">
              {basketball.headline.replace(/\.$/, "")} and <span className="serif text-accent">{modelling.headline.toLowerCase()}</span>
            </p>
            <Link href="/about#life" className="group press link mt-3 inline-flex min-h-11 items-center gap-2 text-ink-2">
              Life outside work <span aria-hidden className="nudge">→</span>
            </Link>
          </div>
          <LifeTiles
            tone="paper"
            compact
            photos={lifeMedia("basketball").photos.slice(0, 1)}
            clip={lifeMedia("modelling").clip}
            sizes="(min-width: 1024px) 440px, 50vw"
            className="lg:col-span-8"
          />
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
          <div>
            <h3 className="eyebrow">Studying</h3>
            <p className="mt-2">
              {profile.education[0].degree}, {profile.education[0].school} · {profile.education[0].period.toLowerCase()}
            </p>
          </div>
          <div>
            <h3 className="eyebrow">Next</h3>
            <p className="mt-2">Building agentic and LLM-backed features on a real product team.</p>
          </div>
          <div className="sm:text-right">
            <Link href="/about" className="group btn btn-ghost press">
              More about me <span aria-hidden className="nudge">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
