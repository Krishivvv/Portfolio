import Link from "next/link";

import { Section } from "@/components/section";
import { skills } from "@/content/skills";
import { sites } from "@/content/sites";

import { Reveal } from "./reveal";

function Tile({ title, accent = false, children }: { title: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-tile border border-seam bg-carbon p-6 sm:p-7">
      <h3 className={`mb-4 text-lg font-medium tracking-[-0.01em] ${accent ? "text-lake" : ""}`}>{title}</h3>
      {children}
    </div>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[0.8125rem] leading-relaxed text-pencil">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

function Evidence({ children }: { children: React.ReactNode }) {
  return <p className="mt-auto pt-6 text-sm text-pencil">{children}</p>;
}

const evidenceLink = "press link text-paper";

export function Capabilities() {
  return (
    <Section id="capabilities" title="Capabilities" lede="Grouped as on my resume, with the project each one shows up in.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
        <Reveal className="sm:col-span-2 lg:col-span-7">
          <Tile title="GenAI & agents" accent>
            <List items={skills.genai} />
            <Evidence>
              In{" "}
              <Link href="/work/voicedesk" className={evidenceLink}>
                VoiceDesk
              </Link>{" "}
              and{" "}
              <Link href="/work/shiksha" className={evidenceLink}>
                Shiksha
              </Link>
              .
            </Evidence>
          </Tile>
        </Reveal>

        <Reveal index={1} className="sm:col-span-2 lg:col-span-5 lg:row-span-2">
          <Tile title="Websites">
            <p className="text-pencil">Eight live websites and frontend projects.</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 border-t border-seam pt-4 text-sm">
              {sites.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="press link inline-flex min-h-9 items-center">
                    {s.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <Evidence>
              <a href="#websites" className={evidenceLink}>
                Screenshots below
              </a>
              .
            </Evidence>
          </Tile>
        </Reveal>

        <Reveal index={2} className="lg:col-span-4">
          <Tile title="ML & data">
            <List items={skills.ml} />
            <Evidence>
              In{" "}
              <Link href="/work/veridex" className={evidenceLink}>
                Veridex
              </Link>
              , and at FoCDoT Technologies.
            </Evidence>
          </Tile>
        </Reveal>

        <Reveal index={3} className="lg:col-span-3">
          <Tile title="Backend & APIs">
            <List items={skills.backend} />
            <Evidence>FastAPI in VoiceDesk; Flask and React in Shiksha.</Evidence>
          </Tile>
        </Reveal>

        <Reveal index={4} className="lg:col-span-6">
          <Tile title="Languages & core">
            <List items={skills.languages} />
          </Tile>
        </Reveal>

        <Reveal index={5} className="lg:col-span-6">
          <Tile title="Tools">
            <List items={skills.tools} />
          </Tile>
        </Reveal>
      </div>
    </Section>
  );
}
