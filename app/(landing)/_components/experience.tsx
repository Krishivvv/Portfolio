import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/section";
import { internships, roles } from "@/content/experience";

import { Reveal } from "./reveal";

export function Experience() {
  return (
    <Section id="experience" title="Experience" lede="Two ML and data internships, plus a partner role and two technical-head roles.">
      <h3 className="subhead mb-4">Internships</h3>
      <ol className="border-t border-seam">
        {internships.map((job, n) => (
          <li key={job.org} className="border-b border-seam">
            <Reveal index={n} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-10">
              <div className="lg:col-span-4">
                <h4 className="text-xl font-medium tracking-[-0.01em]">{job.role}</h4>
                <p className="mt-1 text-pencil">
                  {job.org} · {job.place}
                </p>
                {job.period && <p className="mt-2 font-mono text-[0.8125rem] text-pencil">{job.period}</p>}
              </div>
              <ul className="space-y-3 lg:col-span-8">
                {job.points.map((point) => (
                  <li key={point} className="relative max-w-[68ch] pl-5 text-pencil">
                    <span aria-hidden className="absolute top-[0.7em] left-0 h-px w-2.5 bg-seam-strong" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <h3 className="subhead mt-16 mb-4">Roles</h3>
      <ul className="grid gap-3 sm:grid-cols-3">
        {roles.map((r, n) => (
          <li key={r.url}>
            <Reveal index={n}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group press flex h-full flex-col gap-1 rounded-tile border border-seam p-5 hover:border-lake"
              >
                <span className="text-sm text-pencil">{r.role}</span>
                <span className="flex items-center justify-between gap-2 text-lg font-medium tracking-[-0.01em] group-hover:text-lake">
                  {r.org}
                  <ArrowUpRight aria-hidden className="size-4 shrink-0 text-pencil group-hover:text-lake" />
                </span>
                <span className="font-mono text-[0.75rem] break-all text-pencil">{r.domain}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
