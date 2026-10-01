import Image from "next/image";

import type { LifeClip, LifePhoto } from "@/lib/life-media";

import { LifeVideo } from "./life-video";

type Tile = ({ kind: "photo" } & LifePhoto) | ({ kind: "clip" } & LifeClip);

// Photos and clips at their own shapes. From sm they sit in one row at equal
// heights (each column's width follows its aspect ratio); on phones they stack,
// unless `compact` keeps them in a row there too.
export function LifeTiles({
  photos = [],
  clip = null,
  sizes,
  tone = "night",
  compact = false,
  className = "",
}: {
  photos?: LifePhoto[];
  clip?: LifeClip | null;
  sizes: string;
  tone?: "night" | "paper";
  compact?: boolean;
  className?: string;
}) {
  const tiles: Tile[] = [...photos.map((p) => ({ kind: "photo" as const, ...p })), ...(clip ? [{ kind: "clip" as const, ...clip }] : [])];
  if (tiles.length === 0) return null;
  const columns = tiles.map((t) => `${(t.width / t.height).toFixed(3)}fr`).join(" ");
  const frame = tone === "night" ? "border-night-line bg-night-2" : "border-line bg-paper-2";

  return (
    <div
      className={`grid gap-3 ${compact ? "[grid-template-columns:var(--cols)]" : "sm:[grid-template-columns:var(--cols)]"} ${className}`}
      style={{ "--cols": columns } as React.CSSProperties}
    >
      {tiles.map((t) => (
        <div key={t.src} className={`relative overflow-hidden rounded-media border ${frame}`} style={{ aspectRatio: `${t.width} / ${t.height}` }}>
          {t.kind === "clip" ? (
            <LifeVideo src={t.src} poster={t.poster} label={t.alt} />
          ) : (
            <Image src={t.src} alt={t.alt} fill sizes={sizes} className="object-cover" />
          )}
        </div>
      ))}
    </div>
  );
}
