import type { Metadata } from "next";

import { EmailLink } from "@/components/email-link";
import { internships, otherWork } from "@/content/experience";
import { linkedin, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { sites } from "@/content/sites";
import { resumeSkills } from "@/content/skills";
import { openGraph } from "@/lib/site";

import { PrintButton } from "./print-button";

const description = `Resume of ${profile.name}: B.Tech CSE (expected 2027), AI projects, ML and data internships.`;

export const metadata: Metadata = {
  title: "Resume",
  description,
  alternates: { canonical: "/resume" },
  openGraph: openGraph("/resume", { title: `Resume — ${profile.name}`, description }),
};

// Krishiv_Resume.md / Krishiv_Resume (2).pdf, in the resume's own order. "Other work"
// comes from content/sites.ts (roles confirmed by Krishiv, 2026-10-01).
const summary =
  "Computer Science undergraduate (B.Tech, 2027) who ships AI products, not just notebooks — three deployed apps spanning an agentic voice-support system (RAG + LangChain), an end-to-end LLM video-generation pipeline, and a deepfake CNN classifier. Two ML/data internships. Comfortable across Python, PyTorch, LangChain and FastAPI, and keen to build agentic and LLM-backed features on a real product team.";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-8 print:grid-cols-[8rem_1fr] print:gap-6 print:py-4">
      <h2 className="eyebrow lg:col-span-3">{title}</h2>
      <div className="lg:col-span-9">{children}</div>
    </section>
  );
}

const bullet = "relative pl-5 text-ink-2";
const dash = (
  <span aria-hidden className="absolute top-[0.75em] left-0 h-px w-2.5 bg-line-strong" />
);

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[1040px] px-4 py-12 sm:px-8 sm:py-16 print:max-w-none print:p-0">
      <header className="flex flex-wrap items-end justify-between gap-6 pb-10 print:pb-4">
        <div>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl print:text-4xl">{profile.name}</h1>
          <p className="mt-3 text-ink-2">
            {profile.location} ·{" "}
            <EmailLink className="press link inline-flex min-h-6 items-center">{profile.email}</EmailLink>{" "}
            ·{" "}
            <a href={profile.github.url} className="press link inline-flex min-h-6 items-center">
              github.com/{profile.github.handle}
            </a>
            {linkedin && (
              <>
                {" "}
                ·{" "}
                <a href={linkedin.url} className="press link inline-flex min-h-6 items-center">
                  {linkedin.display}
                </a>
              </>
            )}
          </p>
        </div>
        <PrintButton />
      </header>

      <Block title="Summary">
        <p className="max-w-[68ch] text-lg leading-relaxed">{summary}</p>
      </Block>

      <Block title="Skills">
        <dl className="space-y-3">
          {resumeSkills.map((s) => (
            <div key={s.label} className="grid gap-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium">{s.label}</dt>
              <dd className="text-ink-2">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Projects">
        <div className="space-y-8">
          {projects.map((p) => (
            <article key={p.slug} className="break-inside-avoid">
              <h3 className="text-xl font-medium tracking-[-0.01em]">
                {p.name} — {p.kind}
              </h3>
              <ul className="mt-3 space-y-2">
                {p.points.map((point) => (
                  <li key={point} className={bullet}>
                    {dash}
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-[0.8125rem] text-ink-2">
                Tech: {p.stack.join(", ")} ·{" "}
                <a href={p.demo} className="press link inline-flex min-h-6 items-center">
                  Live demo
                </a>{" "}
                ·{" "}
                <a href={p.repo} className="press link inline-flex min-h-6 items-center">
                  Code
                </a>
              </p>
            </article>
          ))}
        </div>
      </Block>

      <Block title="Experience">
        <div className="space-y-8">
          {internships.map((job) => (
            <article key={job.org} className="break-inside-avoid">
              <h3 className="text-xl font-medium tracking-[-0.01em]">
                {job.role}, {job.org} · {job.place}
              </h3>
              {job.period && <p className="font-mono text-[0.8125rem] text-ink-2">{job.period}</p>}
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className={bullet}>
                    {dash}
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Block>

      <Block title="Education">
        <ul className="space-y-4">
          {profile.education.map((e) => (
            <li key={e.school} className="flex flex-wrap justify-between gap-x-6">
              <span>
                <span className="font-medium">{e.degree}</span>
                <span className="text-ink-2"> · {e.school}</span>
              </span>
              <span className="font-mono text-[0.8125rem] text-ink-2">{e.period}</span>
            </li>
          ))}
        </ul>
      </Block>

      {/* Not experience (Krishiv, 2026-10-01): the websites he builds, with his role on each. */}
      <Block title="Other work">
        <ul className="space-y-2">
          {otherWork.map((site) => (
            <li key={site.slug}>
              <span className="font-medium">{site.roles.join(" and ")}</span>, {site.name} ·{" "}
              <a href={site.url} className="press link inline-flex min-h-6 items-center font-mono text-[0.8125rem] text-ink-2">
                {site.status === "live" ? site.domain : "preview"}
              </a>
              {site.status === "in-progress" && <span className="text-ink-2"> (in progress)</span>}
              {site.note && <span className="text-ink-2"> — {site.note.replace(/\.$/, "").toLowerCase()}</span>}
            </li>
          ))}
        </ul>
        {sites.some((site) => site.roles.length === 0) && (
          <p className="mt-4 text-ink-2">
            Also in progress:{" "}
            {sites
              .filter((site) => site.roles.length === 0)
              .map((site) => site.name)
              .join(", ")}
            .
          </p>
        )}
      </Block>
    </div>
  );
}
