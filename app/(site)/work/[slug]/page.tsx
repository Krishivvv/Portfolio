import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { StaticDiagram } from "@/components/diagram";
import { diagrams } from "@/content/diagrams";
import { profile } from "@/content/profile";
import { getProject, projects } from "@/content/projects";
import { openGraph } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name}: ${project.kind}`;
  return {
    title,
    description: project.line,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: openGraph(`/work/${project.slug}`, { title, description: project.line, type: "article" }),
  };
}

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
      {children}
    </h2>
  );
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const diagram = diagrams[project.slug];

  return (
    <article>
      <header className="mx-auto max-w-[1240px] px-4 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-20">
        <Link href="/#work" className="press link inline-flex min-h-11 items-center gap-2 text-pencil">
          <ArrowLeft aria-hidden className="size-4" /> All work
        </Link>
        <h1 className="mt-8 text-[clamp(3rem,10vw,7rem)] leading-[0.92] font-semibold tracking-[-0.045em]">
          {project.name}
        </h1>
        <p className="mt-4 text-xl text-pencil sm:text-2xl">{project.kind}</p>
        <p className="mt-8 max-w-[52ch] text-lg leading-relaxed sm:text-xl">{project.overview}</p>

        <dl className="mt-10 grid gap-6 border-t border-seam pt-6 sm:grid-cols-3">
          {project.role && (
            <div>
              <dt className="eyebrow">Role</dt>
              <dd className="mt-1">{project.role}</dd>
            </div>
          )}
          <div className={project.role ? "sm:col-span-2" : "sm:col-span-3"}>
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-1">
              <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.875rem]">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="sm:col-span-3">
            <dt className="eyebrow">{project.links.length > 0 ? "Links" : "Code"}</dt>
            <dd className="mt-2 flex flex-wrap gap-3">
              {(project.links.length > 0 ? project.links : [{ label: "GitHub profile", url: profile.github.url }]).map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost press">
                  {l.label} <ArrowUpRight aria-hidden className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      <section aria-labelledby="architecture" className="border-y border-seam bg-carbon/50">
        <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-24">
          <Heading id="architecture">Architecture</Heading>
          <div className="mt-12">
            <StaticDiagram diagram={diagram} />
          </div>
        </div>
      </section>

      <section aria-labelledby="implementation" className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Heading id="implementation">Implementation</Heading>
          </div>
          <ul className="space-y-5 lg:col-span-8">
            {project.details.map((point) => (
              <li key={point} className="relative max-w-[62ch] pl-6 text-lg leading-relaxed">
                <span aria-hidden className="absolute top-[0.8em] left-0 h-px w-3 bg-lake" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav aria-label="More work" className="border-t border-seam">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
          <Link href={`/work/${next.slug}`} className="group press flex items-center justify-between gap-6 rounded-tile py-4">
            <span>
              <span className="eyebrow block">Next case study</span>
              <span className="mt-1 block text-3xl font-semibold tracking-[-0.03em] group-hover:text-lake sm:text-4xl">
                {next.name}
              </span>
              <span className="block text-pencil">{next.kind}</span>
            </span>
            <ArrowRight
              aria-hidden
              className="size-6 shrink-0 text-pencil transition-transform duration-200 group-hover:translate-x-1 group-hover:text-lake"
            />
          </Link>
        </div>
      </nav>
    </article>
  );
}
