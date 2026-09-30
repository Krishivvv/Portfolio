import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { internships, roles } from "@/content/experience";
import { profile } from "@/content/profile";
import { openGraph } from "@/lib/site";

import { Accordion } from "./accordion";

const description =
  "Machine Learning Intern at FoCDoT Technologies, Data Analyst Intern at AI Bricks Realtors, a partner role and two technical-head roles.";

export const metadata: Metadata = {
  title: "Experience",
  description,
  alternates: { canonical: "/experience" },
  openGraph: openGraph("/experience", { title: "Experience — Krishiv Sharma", description }),
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader eyebrow="Experience" title="Two internships," accent="three roles." />

      <section aria-labelledby="internships" className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 id="internships" className="eyebrow lg:col-span-3 lg:pt-10">
            Internships
          </h2>
          <div className="border-b border-line lg:col-span-9">
            {internships.map((job) => (
              <Accordion key={job.org} title={job.role} meta={`${job.org} · ${job.place}${job.period ? ` · ${job.period}` : ""}`}>
                <ul className="grid gap-4">
                  {job.points.map((point) => (
                    <li key={point} className="relative max-w-[64ch] pl-6 text-lg leading-relaxed text-ink-2">
                      <span aria-hidden className="absolute top-[0.8em] left-0 h-px w-3 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="roles" className="border-y border-line bg-paper-2">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 sm:px-8 sm:py-24 lg:grid-cols-12">
          <h2 id="roles" className="eyebrow lg:col-span-3">
            Roles
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-9">
            {roles.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group press flex h-full flex-col gap-2 rounded-media border border-line bg-paper-3 p-6 transition-colors hover:border-ink"
                >
                  <span className="eyebrow">{r.role}</span>
                  <span className="text-2xl font-semibold tracking-[-0.03em]">{r.org}</span>
                  <span className="mt-auto flex items-center justify-between pt-6 font-mono text-[0.75rem] text-muted">
                    <span className="break-all">{r.domain}</span>
                    <span aria-hidden className="nudge nudge-up text-accent">
                      ↗
                    </span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="education" className="mx-auto grid max-w-[1320px] gap-8 px-4 py-20 sm:px-8 sm:py-24 lg:grid-cols-12">
        <h2 id="education" className="eyebrow lg:col-span-3">
          Education
        </h2>
        <ul className="lg:col-span-9">
          {profile.education.map((e) => (
            <li key={e.school} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
              <span>
                <span className="block text-xl font-medium tracking-[-0.02em]">{e.degree}</span>
                <span className="block text-ink-2">{e.school}</span>
              </span>
              <span className="font-mono text-[0.8125rem] text-muted">{e.period}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 lg:col-span-9 lg:col-start-4">
          <Link href="/resume" className="group btn btn-primary press">
            Full resume <span aria-hidden className="nudge">→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost press">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
