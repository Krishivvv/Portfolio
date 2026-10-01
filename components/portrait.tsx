import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { profile } from "@/content/profile";

// Space for Krishiv's photo. Add it as assets/photo.jpg (portrait orientation,
// at least 1200 px tall) and rebuild: scripts/optimize-images.mjs sizes it into
// public/sites/photo-<width>.webp and this frame shows it. Until then the frame
// holds a monogram, so the layout never changes when the photo arrives.
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public/sites/photo-800.webp"));

export function Portrait({ sizes, className = "" }: { sizes: string; className?: string }) {
  return (
    <figure className={`relative aspect-[4/5] overflow-hidden rounded-media border border-line bg-paper-2 ${className}`}>
      {hasPhoto ? (
        <Image src="/sites/photo.webp" alt={`${profile.name}.`} fill sizes={sizes} className="object-cover" />
      ) : (
        <div aria-hidden className="absolute inset-0 grid place-items-center">
          <span className="serif text-[clamp(5rem,14vw,11rem)] leading-none text-accent">KS</span>
          <span className="absolute inset-x-5 bottom-5 flex justify-between font-mono text-[0.6875rem] text-muted">
            <span>{profile.name}</span>
            <span>{profile.location}</span>
          </span>
        </div>
      )}
    </figure>
  );
}
