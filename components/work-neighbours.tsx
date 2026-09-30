import Link from "next/link";

import { neighbours } from "@/content/work";

// Previous / next across all eleven work pages.
export function WorkNeighbours({ slug }: { slug: string }) {
  const { prev, next } = neighbours(slug);
  return (
    <nav aria-label="More work" className="border-t border-line">
      <div className="mx-auto grid max-w-[1320px] sm:grid-cols-2">
        {[
          { item: prev, label: "Previous", arrow: "←" },
          { item: next, label: "Next", arrow: "→" },
        ].map(({ item, label, arrow }, i) => (
          <Link
            key={label}
            href={`/work/${item.slug}`}
            className={`group press flex flex-col gap-2 px-4 py-10 transition-colors hover:bg-paper-2 sm:px-8 sm:py-14 ${
              i === 1 ? "border-t border-line sm:items-end sm:border-t-0 sm:border-l sm:text-right" : ""
            }`}
          >
            <span className="eyebrow">
              {label} · {item.group === "ai" ? "AI system" : "Website"}
            </span>
            <span className="text-[clamp(2rem,4.5vw,3.75rem)] leading-none font-semibold tracking-[-0.045em]">
              {i === 0 && (
                <span aria-hidden className="mr-3 inline-block text-accent transition-transform duration-200 group-hover:-translate-x-1">
                  {arrow}
                </span>
              )}
              {item.name}
              {i === 1 && (
                <span aria-hidden className="nudge ml-3 inline-block text-accent">
                  {arrow}
                </span>
              )}
            </span>
            <span className="text-muted">{item.kind}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
