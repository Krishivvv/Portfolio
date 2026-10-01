import fs from "node:fs";
import path from "node:path";

import { mediaAlt } from "@/content/life";

// Build-time lookup of "Life outside work" media in assets/life/ (photos are
// sized into public/sites/life-*.webp and measured into life-media.json by
// scripts/optimize-images.mjs; clips are copied to public/life/).
//   <key>.jpg | <key>-1.jpg …   photos
//   <key>.mp4 | <key>.webm       a clip
//   <key>-poster.jpg             the clip's first look (else its first photo)
// "modeling" is accepted for "modelling".

export type LifePhoto = { src: string; width: number; height: number; alt: string };
export type LifeClip = { src: string; poster?: string; width: number; height: number; alt: string };

const dir = path.join(process.cwd(), "assets/life");
const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
const dimsFile = path.join(process.cwd(), "public/sites/life-media.json");
const dims: Record<string, [number, number]> = fs.existsSync(dimsFile) ? JSON.parse(fs.readFileSync(dimsFile, "utf8")) : {};

const spellings = (key: string) => (key === "modelling" ? "(?:modelling|modeling)" : key);

export function lifeMedia(key: string) {
  const k = spellings(key);
  const photos: LifePhoto[] = files
    .filter((f) => new RegExp(String.raw`^${k}(-\d+)?\.(jpe?g|png)$`, "i").test(f))
    .sort()
    .map((f) => {
      const name = path.parse(f).name;
      const [width, height] = dims[name] ?? [4, 3];
      return { src: `/sites/life-${name}.webp`, width, height, alt: mediaAlt[name] ?? `Krishiv: ${key}.` };
    });

  const clipFile = files.find((f) => new RegExp(String.raw`^${k}\.(mp4|webm)$`, "i").test(f));
  const posterFile = files.find((f) => new RegExp(String.raw`^${k}-poster\.(jpe?g|png)$`, "i").test(f));
  const posterName = posterFile ? path.parse(posterFile).name : null;
  const look = posterName ? dims[posterName] : photos[0] ? [photos[0].width, photos[0].height] : undefined;
  const clip: LifeClip | null = clipFile
    ? {
        src: `/life/${clipFile}`,
        poster: posterName ? `/sites/life-${posterName}-800.webp` : photos[0]?.src.replace(/\.webp$/, "-800.webp"),
        width: look?.[0] ?? 16,
        height: look?.[1] ?? 9,
        alt: mediaAlt[key] ?? `Krishiv: ${key}.`,
      }
    : null;

  return { photos, clip };
}
