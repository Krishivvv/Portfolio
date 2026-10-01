import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LifeOutsideWork } from "@/components/life-outside-work";
import { PageHeader } from "@/components/page-header";
import { Portrait } from "@/components/portrait";
import { otherWork } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skillGroups, skills } from "@/content/skills";
import { sites } from "@/content/sites";
import { openGraph } from "@/lib/site";

const description =
  "Computer Science undergraduate in Bhopal who ships AI products and builds websites: three deployed AI apps and nine websites, seven of them live.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: openGraph("/about", { title: "About — Krishiv Sharma", description }),
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="I ship AI products," accent="not just notebooks." />

      <section aria-labelledby="bio" className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-8 sm:pb-28">
        <h2 id="bio" className="sr-only">
          Background
        </h2>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-xl leading-relaxed sm:text-2xl lg:col-span-7">
            <p>
              I’m a Computer Science undergraduate at Jagran Lakecity University in Bhopal, finishing my B.Tech in 2027.
              I’ve shipped three AI products: an agentic voice-support system built on RAG and LangChain, an end-to-end
              LLM video-generation pipeline, and a deepfake CNN classifier.
            </p>
            <p className="text-ink-2">
              I also build websites and frontend projects — nine so far, seven of them live — as their Technical Head.
              I’ve done two ML and data internships, at FoCDoT Technologies and AI Bricks Realtors, and I’m comfortable
              across Python, PyTorch, LangChain and FastAPI.
            </p>
            <p className="text-ink-2">Next, I want to build agentic and LLM-backed features on a real product team.</p>
          </div>

          <div className="grid content-start gap-8 lg:col-span-4 lg:col-start-9">
            <Portrait sizes="(min-width: 1024px) 400px, (min-width: 640px) 60vw, 92vw" className="max-w-[420px]" />
            <dl className="grid content-start gap-6 border-t border-line pt-6">
              <div>
                <dt className="eyebrow">Based in</dt>
                <dd className="mt-1 text-lg">{profile.location}</dd>
              </div>
              <div>
                <dt className="eyebrow">Studying</dt>
                <dd className="mt-1 text-lg">
                  {profile.education[0].degree} · {profile.education[0].school} · {profile.education[0].period.toLowerCase()}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Other work</dt>
                <dd className="mt-1">
                  <ul className="text-lg">
                    {otherWork.map((site) => (
                      <li key={site.slug}>
                        {site.roles.join(" and ")},{" "}
                        <Link href={`/work/${site.slug}`} className="press link inline-flex min-h-6 items-center">
                          {site.name}
                        </Link>
                        {site.note && <span className="text-muted"> — {site.note.replace(/\.$/, "").toLowerCase()}</span>}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The two halves of the work, side by side. */}
      <section aria-labelledby="halves" className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 sm:py-28">
          <h2 id="halves" className="text-[clamp(2.25rem,5vw,4rem)] leading-none font-semibold tracking-[-0.045em]">
            Two halves, <span className="serif text-accent">one practice.</span>
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Link href="/work" className="group night flex flex-col justify-between gap-10 rounded-media p-8 sm:p-10">
              <span>
                <span className="eyebrow">The intelligence</span>
                <span className="mt-4 block text-4xl font-semibold tracking-[-0.04em]">AI systems</span>
              </span>
              <ul className="grid gap-2 text-night-muted">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <span className="text-night-text">{p.name}</span> — {p.kind}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 font-medium text-night-accent">
                See the systems <span aria-hidden className="nudge">→</span>
              </span>
            </Link>
            <Link href="/work" className="group flex flex-col justify-between gap-10 overflow-hidden rounded-media border border-line bg-paper-3 p-8 sm:p-10">
              <span>
                <span className="eyebrow">The interface</span>
                <span className="mt-4 block text-4xl font-semibold tracking-[-0.04em]">Websites</span>
              </span>
              <span aria-hidden className="grid grid-cols-3 gap-2">
                {sites.map((s) => (
                  <span key={s.slug} className="relative block aspect-[16/10] overflow-hidden rounded-[4px] border border-line">
                    <Image src={s.image} alt="" fill sizes="140px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </span>
                ))}
              </span>
              <span className="inline-flex items-center gap-2 font-medium text-accent">
                See all nine <span aria-hidden className="nudge">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <LifeOutsideWork />

      <section aria-labelledby="skills" className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 sm:py-28">
        <h2 id="skills" className="text-[clamp(2.25rem,5vw,4rem)] leading-none font-semibold tracking-[-0.045em]">
          Skills
        </h2>
        <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.key} className="border-t border-line pt-4">
              <dt className="font-medium">{g.label}</dt>
              <dd className="mt-2 text-ink-2">{skills[g.key].join(", ")}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14 flex flex-wrap gap-3">
          <Link href="/contact" className="group btn btn-primary press">
            Get in touch <span aria-hidden className="nudge">→</span>
          </Link>
          <Link href="/resume" className="btn btn-ghost press">
            Resume
          </Link>
        </div>
      </section>
    </>
  );
}
