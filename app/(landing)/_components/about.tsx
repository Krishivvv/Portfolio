import Link from "next/link";

import { profile } from "@/content/profile";

// R:7, in first person. Serif words mark the two halves of the work.
const statement: { text: string; serif?: boolean }[] = [
  { text: "I’m a Computer Science undergraduate in Bhopal. I ship" },
  { text: "AI products, not just notebooks", serif: true },
  { text: "— an agentic voice-support system, an LLM video pipeline and a deepfake classifier — and I build" },
  { text: "websites", serif: true },
  { text: "for businesses: eight, all live." },
];

const words = statement.flatMap((part) => part.text.split(" ").map((w) => ({ w, serif: !!part.serif })));

// The statement reads itself in as it scrolls through: each word brightens in
// turn (a CSS scroll-driven animation in landing.css, on the compositor, no
// JavaScript). Where that isn't supported, or with reduced motion, the words
// are simply there.
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="chapter relative z-10 -mt-8 rounded-t-[2rem] bg-paper-3 pt-24 pb-28 sm:pt-32 sm:pb-36">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <h2 id="about-title" className="eyebrow">
          About
        </h2>
        <p
          className="read-in mt-8 max-w-[24ch] text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.04] font-medium tracking-[-0.035em] lg:max-w-[26ch]"
          style={{ "--n": words.length } as React.CSSProperties}
        >
          {words.map((item, i) => (
            <span key={i} className={item.serif ? "serif text-accent" : undefined} style={{ "--i": i } as React.CSSProperties}>
              {item.w}{" "}
            </span>
          ))}
        </p>

        <div className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
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
