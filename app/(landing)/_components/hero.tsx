import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { mailto, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { sites } from "@/content/sites";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-[1240px] px-4 pt-20 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <h1 id="hero-title" className="text-display font-semibold">
            <span className="intro-line">
              <span style={i(0)}>Krishiv</span>
            </span>{" "}
            <span className="intro-line">
              <span style={i(1)}>Sharma</span>
            </span>
          </h1>

          {/* The statement and supporting line are the LCP candidates: they render
              immediately and never wait for the intro. */}
          <p className="mt-8 max-w-[22ch] text-[1.75rem] leading-[1.15] tracking-[-0.02em] sm:text-4xl">
            I build AI products and websites.
          </p>
          <p className="mt-5 max-w-[54ch] text-pencil sm:text-lg">
            Three deployed AI apps (an agentic voice-support system, an LLM video-generation pipeline and a deepfake
            classifier) and eight live websites.
          </p>

          <p className="intro-item mt-7 font-mono text-[0.8125rem] leading-relaxed text-pencil" style={i(0)}>
            B.Tech CSE, Jagran Lakecity University (expected 2027) <span aria-hidden>·</span> {profile.location}
          </p>

          <div className="intro-item mt-10 flex flex-wrap gap-3" style={i(1)}>
            <a href="#work" className="btn btn-primary press">
              See the work <ArrowDown aria-hidden className="size-4" />
            </a>
            <a href={mailto} className="btn btn-ghost press">
              Email me
            </a>
            <Link href="/resume" className="btn btn-ghost press">
              Resume
            </Link>
            <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost press">
              GitHub <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <nav aria-label="Work index" className="intro-item lg:col-span-4 lg:pt-9" style={i(2)}>
          <ul className="border-t border-seam">
            {projects.map((p) => (
              <li key={p.slug} className="border-b border-seam">
                <Link href={`/work/${p.slug}`} className="group press flex min-h-14 items-center justify-between gap-4 py-3">
                  <span>
                    <span className="block font-medium group-hover:text-lake">{p.name}</span>
                    <span className="block text-sm text-pencil">{p.kind}</span>
                  </span>
                  <span aria-hidden className="text-pencil transition-transform duration-200 group-hover:translate-x-1 group-hover:text-lake">
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-b border-seam">
              <a href="#websites" className="group press flex min-h-14 items-center justify-between gap-4 py-3">
                <span>
                  <span className="block font-medium group-hover:text-lake">Websites</span>
                  <span className="block text-sm text-pencil">{sites.length} live sites</span>
                </span>
                <span aria-hidden className="text-pencil transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-lake">
                  ↓
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
