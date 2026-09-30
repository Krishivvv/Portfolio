import { projects } from "./projects";
import { sites } from "./sites";

// Every item has its own page at /work/<slug>: AI systems get case studies,
// websites get a page with their live-site media.
export type WorkItem = {
  slug: string;
  name: string;
  kind: string;
  group: "ai" | "web";
};

export const work: WorkItem[] = [
  ...projects.map((p) => ({ slug: p.slug, name: p.name, kind: p.kind, group: "ai" as const })),
  ...sites.map((s) => ({ slug: s.slug, name: s.name, kind: s.kind, group: "web" as const })),
];

export function neighbours(slug: string) {
  const i = work.findIndex((w) => w.slug === slug);
  return {
    prev: work[(i - 1 + work.length) % work.length],
    next: work[(i + 1) % work.length],
  };
}
