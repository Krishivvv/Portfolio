import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/section";
import { projects } from "@/content/projects";
import { type Site, sites } from "@/content/sites";

import { ParallaxImage } from "./parallax-image";
import { Reveal } from "./reveal";

function SiteCard({ site, large = false }: { site: Site; large?: boolean }) {
  return (
    <a href={site.url} target="_blank" rel="noopener noreferrer" className="group press block rounded-tile">
      {large ? (
        <ParallaxImage image={site.image} alt={site.alt} sizes="(min-width: 1024px) 700px, 100vw" />
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden rounded-tile border border-seam bg-carbon">
          <Image
            src={site.image}
            alt={site.alt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover object-top transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.025]"
          />
        </div>
      )}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h4 className={`font-medium tracking-[-0.01em] group-hover:text-lake ${large ? "text-xl" : ""}`}>{site.name}</h4>
          <p className="text-sm text-pencil">{site.kind}</p>
          {site.domain && <p className="mt-1 font-mono text-[0.75rem] break-all text-pencil">{site.domain}</p>}
        </div>
        <ArrowUpRight
          aria-hidden
          className="mt-1 size-4 shrink-0 text-pencil transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lake"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </div>
    </a>
  );
}

export function SelectedWork() {
  const [first, second, ...rest] = sites;
  return (
    <Section
      id="work"
      title="Selected work"
      lede="Three AI systems, each with a case study, and eight live websites."
    >
      <h3 className="subhead mb-4">AI systems</h3>
      <ul className="border-t border-seam">
        {projects.map((p, n) => (
          <li key={p.slug}>
            <Reveal index={n}>
              <article className="group relative grid gap-3 border-b border-seam py-8 transition-colors duration-200 hover:bg-carbon/60 sm:px-4 lg:grid-cols-12 lg:gap-8 lg:py-10">
                <div className="lg:col-span-4">
                  <h4 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-lake">
                      {p.name}
                    </Link>
                  </h4>
                  <p className="mt-1 text-pencil">{p.kind}</p>
                </div>
                <p className="max-w-[52ch] lg:col-span-5">{p.line}</p>
                <div className="flex flex-col justify-between gap-4 lg:col-span-3">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.8125rem] text-pencil" aria-label="Stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <span aria-hidden className="text-sm text-pencil group-hover:text-lake">
                    Read case study{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div id="websites" className="mt-24 sm:mt-32">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h3 className="subhead">Websites and frontend projects</h3>
          <p className="text-sm text-pencil">Each opens the live site in a new tab.</p>
        </div>
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SiteCard site={first} large />
          </Reveal>
          <Reveal index={1} className="lg:col-span-5 lg:pt-24">
            <SiteCard site={second} large />
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((site, n) => (
            <li key={site.url}>
              <Reveal index={n % 3}>
                <SiteCard site={site} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
