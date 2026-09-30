import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

import { StaticDiagram } from "@/components/diagram";
import { WorkNeighbours } from "@/components/work-neighbours";
import { diagrams } from "@/content/diagrams";
import { profile } from "@/content/profile";
import { getProject, type Project } from "@/content/projects";
import { getSite, type Site } from "@/content/sites";
import { work } from "@/content/work";
import { openGraph } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const site = getSite(slug);
  if (!project && !site) return {};
  const title = project ? `${project.name}: ${project.kind}` : `${site!.name}: ${site!.kind}`;
  const description = project ? project.line : `${site!.name} (${site!.kind}), one of eight live websites and frontend projects.`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: openGraph(`/work/${slug}`, { title, description, type: "article" }),
  };
}

function Back() {
  return (
    <Link href="/work" className="group press link inline-flex min-h-11 items-center gap-2 text-ink-2">
      <ArrowLeft aria-hidden className="size-4 transition-transform duration-200 group-hover:-translate-x-1" /> All work
    </Link>
  );
}

function Snapshot({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="eyebrow">{item.label}</dt>
          <dd className="mt-2">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <header className="mx-auto max-w-[1320px] px-4 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-24">
        <Back />
        <p className="eyebrow mt-10">AI system · case study</p>
        <ViewTransition name={`work-title-${project.slug}`} share="morph" default="none">
          <h1 className="mt-4 text-[clamp(3.5rem,13vw,11rem)] leading-[0.86] font-semibold tracking-[-0.055em]">{project.name}</h1>
        </ViewTransition>
        <p className="mt-6 text-2xl tracking-[-0.02em] text-ink-2 sm:text-3xl">{project.kind}</p>
        <p className="mt-8 max-w-[44ch] text-xl leading-snug sm:text-2xl">{project.overview}</p>
        <Snapshot
          items={[
            ...(project.role ? [{ label: "Role", value: project.role }] : []),
            { label: "Status", value: "Deployed" },
            {
              label: "Stack",
              value: <span className="font-mono text-[0.875rem] leading-relaxed">{project.stack.join(" · ")}</span>,
            },
            {
              label: project.links.length ? "Links" : "Code",
              value: (
                <span className="flex flex-wrap gap-x-4">
                  {(project.links.length ? project.links : [{ label: "GitHub profile", url: profile.github.url }]).map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="press link inline-flex min-h-8 items-center gap-1">
                      {l.label} <ArrowUpRight aria-hidden className="size-4" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ))}
                </span>
              ),
            },
          ]}
        />
      </header>

      <section aria-labelledby="architecture" className="night">
        <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <h2 id="architecture" className="text-[clamp(2.25rem,5vw,4rem)] leading-none font-semibold tracking-[-0.045em] lg:col-span-6">
              Architecture
            </h2>
            <p className="max-w-[46ch] text-night-muted lg:col-span-5 lg:col-start-8">
              How the pieces connect, drawn from the implementation notes below.
            </p>
          </div>
          <div className="mt-14">
            <StaticDiagram diagram={diagrams[project.slug]} />
          </div>
        </div>
      </section>

      <section aria-labelledby="implementation" className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2
            id="implementation"
            className="text-[clamp(2.25rem,5vw,4rem)] leading-none font-semibold tracking-[-0.045em] lg:col-span-4"
          >
            How it <span className="serif text-accent">works</span>
          </h2>
          <ol className="grid gap-8 lg:col-span-8">
            {project.details.map((point, i) => (
              <li key={point} className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[4rem_1fr]">
                <span aria-hidden className="font-mono text-[0.8125rem] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[60ch] text-lg leading-relaxed sm:text-xl">{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </article>
  );
}

function SitePage({ site }: { site: Site }) {
  return (
    <article>
      <header className="mx-auto max-w-[1320px] px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16">
        <Back />
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Website</p>
            <h1 className="mt-4 text-[clamp(3.25rem,11vw,9.5rem)] leading-[0.88] font-semibold tracking-[-0.055em]">{site.name}</h1>
            <p className="mt-5 text-2xl tracking-[-0.02em] text-ink-2 sm:text-3xl">{site.kind}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="group btn btn-primary press">
              Visit the live site <span aria-hidden className="nudge nudge-up">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
        <Snapshot
          items={[
            ...(site.role ? [{ label: "My role", value: site.role }] : []),
            { label: "Address", value: <span className="font-mono text-[0.875rem] break-all">{site.domain ?? "Hosted preview"}</span> },
            { label: "Status", value: "Live" },
          ]}
        />
      </header>

      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        <ViewTransition name={`work-media-${site.slug}`} share="morph" default="none">
          <figure className="browser shadow-[0_40px_80px_-40px_rgb(22_21_19/0.5)]">
            <span className="browser-bar">{site.domain ?? site.name}</span>
            <span className="relative block aspect-[16/10]">
              <Image src={site.image} alt={site.alt} fill loading="eager" fetchPriority="high" sizes="(min-width: 1320px) 1256px, 94vw" className="object-cover object-top" />
            </span>
          </figure>
        </ViewTransition>
      </div>

      <section aria-labelledby="views" className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <h2 id="views" className="text-[clamp(2.25rem,5vw,4rem)] leading-none font-semibold tracking-[-0.045em] lg:col-span-6">
            Phone and <span className="serif text-accent">further down</span>
          </h2>
          <p className="max-w-[46ch] text-ink-2 lg:col-span-5 lg:col-start-8">
            The homepage on a phone, and the first three screens on a desktop. Captured from the live site.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
          <figure className="mx-auto w-full max-w-[340px] lg:col-span-4 lg:mx-0">
            <span className="block rounded-[2.2rem] border border-line-strong bg-ink p-2.5 shadow-[0_30px_60px_-30px_rgb(22_21_19/0.5)]">
              <span className="relative block aspect-[390/844] overflow-hidden rounded-[1.7rem]">
                <Image src={site.mobile} alt={`${site.name} homepage on a phone.`} fill sizes="340px" className="object-cover object-top" />
              </span>
            </span>
            <figcaption className="eyebrow mt-4 text-center">Phone · 390 px</figcaption>
          </figure>
          <figure className="lg:col-span-8">
            <span className="browser block">
              <span className="browser-bar">{site.domain ?? site.name}</span>
              <span className="relative block aspect-[1440/2700]">
                <Image
                  src={site.long}
                  alt={`${site.name} homepage, first three screens on a desktop.`}
                  fill
                  sizes="(min-width: 1024px) 830px, 94vw"
                  className="object-cover object-top"
                />
              </span>
            </span>
            <figcaption className="eyebrow mt-4">Desktop · 1440 px · first three screens</figcaption>
          </figure>
        </div>
      </section>
    </article>
  );
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  const site = getSite(slug);
  if (!project && !site) notFound();

  return (
    <>
      {project ? <CaseStudy project={project} /> : <SitePage site={site!} />}
      <WorkNeighbours slug={slug} />
    </>
  );
}
