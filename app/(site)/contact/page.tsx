import type { Metadata } from "next";
import Link from "next/link";

import { CopyEmail } from "@/components/copy-email";
import { PageHeader } from "@/components/page-header";
import { linkedin, mailto, profile } from "@/content/profile";
import { openGraph } from "@/lib/site";

const description = `Email ${profile.email}, or find Krishiv Sharma on GitHub.`;

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: openGraph("/contact", { title: "Contact — Krishiv Sharma", description }),
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Email is the fastest" accent="way to reach me." />

      <section aria-label="Contact details" className="mx-auto max-w-[1320px] px-4 pb-24 sm:px-8 sm:pb-32">
        <a
          href={mailto}
          className="press block text-[clamp(1.6rem,6vw,5.5rem)] leading-none font-semibold tracking-[-0.045em] break-all decoration-accent decoration-2 underline-offset-[0.14em] hover:text-accent hover:underline sm:break-normal"
        >
          {profile.email}
        </a>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={mailto} className="group btn btn-primary press">
            Email me <span aria-hidden className="nudge">→</span>
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <ul className={`mt-20 grid gap-4 ${linkedin ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
          <li>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group press flex h-full flex-col gap-2 rounded-media border border-line bg-paper-3 p-6 transition-colors hover:border-ink"
            >
              <span className="eyebrow">Code</span>
              <span className="text-2xl font-semibold tracking-[-0.03em]">GitHub</span>
              <span className="mt-auto flex items-center justify-between pt-6 font-mono text-[0.75rem] text-muted">
                github.com/{profile.github.handle}
                <span aria-hidden className="nudge nudge-up text-accent">
                  ↗
                </span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          {linkedin && (
            <li>
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group press flex h-full flex-col gap-2 rounded-media border border-line bg-paper-3 p-6 transition-colors hover:border-ink"
              >
                <span className="eyebrow">Network</span>
                <span className="text-2xl font-semibold tracking-[-0.03em]">LinkedIn</span>
                <span className="mt-auto flex items-center justify-between gap-4 pt-6 font-mono text-[0.75rem] break-all text-muted">
                  {linkedin.display}
                  <span aria-hidden className="nudge nudge-up text-accent">
                    ↗
                  </span>
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          )}
          <li>
            <Link
              href="/resume"
              className="group press flex h-full flex-col gap-2 rounded-media border border-line bg-paper-3 p-6 transition-colors hover:border-ink"
            >
              <span className="eyebrow">Background</span>
              <span className="text-2xl font-semibold tracking-[-0.03em]">Resume</span>
              <span className="mt-auto flex items-center justify-between pt-6 font-mono text-[0.75rem] text-muted">
                HTML, printable
                <span aria-hidden className="nudge text-accent">
                  →
                </span>
              </span>
            </Link>
          </li>
          <li className="flex h-full flex-col gap-2 rounded-media border border-line p-6">
            <span className="eyebrow">Based in</span>
            <span className="text-2xl font-semibold tracking-[-0.03em]">{profile.location}</span>
            <span className="mt-auto pt-6 font-mono text-[0.75rem] text-muted">IST · UTC+5:30</span>
          </li>
        </ul>
      </section>
    </>
  );
}
