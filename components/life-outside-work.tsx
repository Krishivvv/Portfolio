import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { type Activity, activities, alsoPlays } from "@/content/life";

import { LifeVideo } from "./life-video";

// "Life outside work". Media is picked up at build time from assets/life/:
//   <key>.jpg or <key>-1.jpg, <key>-2.jpg …  photos (sized by scripts/optimize-images.mjs)
//   <key>.mp4 (or .webm)                       a short clip, under 25 MiB
// for key = basketball | modelling. An activity without media shows its name
// as a large outlined word instead, so the section never has empty frames.
const files = fs.existsSync(path.join(process.cwd(), "assets/life")) ? fs.readdirSync(path.join(process.cwd(), "assets/life")) : [];

function mediaFor(key: string) {
  const photos = files
    .filter((f) => new RegExp(`^${key}(-\\d+)?\\.(jpe?g|png)$`, "i").test(f))
    .sort()
    .map((f) => `/sites/life-${path.parse(f).name}.webp`);
  const clip = files.find((f) => new RegExp(`^${key}\\.(mp4|webm)$`, "i").test(f));
  return { photos, video: clip ? `/life/${clip}` : null };
}

function Media({ activity }: { activity: Activity }) {
  const { photos, video } = mediaFor(activity.key);
  const tiles = (video ? 1 : 0) + photos.length;

  if (tiles === 0) {
    return (
      <p
        aria-hidden
        className="hidden text-[clamp(4rem,8.6vw,8.5rem)] leading-[0.85] font-semibold tracking-[-0.06em] text-transparent select-none [-webkit-text-stroke:1.5px_rgb(165_160_149/0.32)] lg:block lg:text-right"
      >
        {activity.label}
      </p>
    );
  }

  return (
    <div className={`grid gap-3 ${tiles === 1 ? "max-w-[420px] lg:ml-auto" : tiles === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
      {video && (
        <div className="relative aspect-[4/5] overflow-hidden rounded-media border border-night-line bg-night-2">
          <LifeVideo src={video} poster={photos[0]?.replace(/\.webp$/, "-800.webp")} label={`${activity.label}: a short clip of Krishiv.`} />
        </div>
      )}
      {photos.slice(0, video ? 2 : 3).map((src, i) => (
        <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-media border border-night-line bg-night-2">
          <Image src={src} alt={`Krishiv, ${activity.label.toLowerCase()} (photo ${i + 1}).`} fill sizes="(min-width: 1024px) 280px, 45vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function LifeOutsideWork() {
  return (
    <section id="life" aria-labelledby="life-title" className="night">
      <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Life outside work</p>
        <h2 id="life-title" className="mt-6 max-w-[16ch] text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.05em]">
          Off the clock: <span className="serif text-night-accent">on court and on the ramp.</span>
        </h2>

        <ol className="mt-14 border-b border-night-line sm:mt-20">
          {activities.map((activity, i) => (
            <li key={activity.key} className="grid gap-8 border-t border-night-line py-10 sm:py-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="font-mono text-[0.75rem] text-night-muted">
                  {String(i + 1).padStart(2, "0")} · {activity.label}
                </p>
                <h3 className="mt-4 text-[clamp(2rem,4.4vw,3.75rem)] leading-[1] font-semibold tracking-[-0.04em]">{activity.headline}</h3>
                <p className="mt-4 max-w-[44ch] text-lg leading-relaxed text-night-muted">{activity.detail}</p>
              </div>
              <div className="lg:col-span-6">
                <Media activity={activity} />
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-night-muted">Also: {alsoPlays.charAt(0).toLowerCase() + alsoPlays.slice(1)}</p>
      </div>
    </section>
  );
}
