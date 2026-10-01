import { type Activity, activities, alsoPlays } from "@/content/life";
import { lifeMedia } from "@/lib/life-media";

import { LifeTiles } from "./life-tiles";

// "Life outside work" on /about. Media comes from assets/life/ (lib/life-media.ts).
// An activity without media shows its name as a large outlined word instead,
// so the section never has empty frames.
function Media({ activity }: { activity: Activity }) {
  const { photos, clip } = lifeMedia(activity.key);

  if (photos.length === 0 && !clip) {
    return (
      <p
        aria-hidden
        className="hidden text-[clamp(4rem,8.6vw,8.5rem)] leading-[0.85] font-semibold tracking-[-0.06em] text-transparent select-none [-webkit-text-stroke:1.5px_rgb(165_160_149/0.32)] lg:block lg:text-right"
      >
        {activity.label}
      </p>
    );
  }

  return <LifeTiles photos={photos.slice(0, 3)} clip={clip} sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 92vw" className={clip && photos.length === 0 ? "max-w-[640px] lg:ml-auto" : ""} />;
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
              <div className="lg:col-span-4">
                <p className="font-mono text-[0.75rem] text-night-muted">
                  {String(i + 1).padStart(2, "0")} · {activity.label}
                </p>
                <h3 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1] font-semibold tracking-[-0.04em]">{activity.headline}</h3>
                <p className="mt-4 max-w-[44ch] text-lg leading-relaxed text-night-muted">{activity.detail}</p>
              </div>
              <div className="lg:col-span-8">
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
