// "Life outside work": Krishiv, 2026-10-01 (in conversation). Media for each
// activity goes in assets/life/ — see components/life-outside-work.tsx.

export type Activity = {
  /** Also the media file prefix: assets/life/<key>-1.jpg, <key>.mp4 … */
  key: string;
  label: string;
  headline: string;
  detail: string;
};

export const activities: Activity[] = [
  {
    key: "basketball",
    label: "Basketball",
    headline: "National-level basketball player.",
    detail: "I’ve represented Jagran Lakecity University at West Zone three times.",
  },
  {
    key: "modelling",
    label: "Modelling",
    headline: "Ramp model.",
    detail: "I’ve collaborated with companies on modelling work and represented my university at modelling events in several places.",
  },
];

export const alsoPlays = "District-level badminton player and swimmer.";

// One line for places that only have room for a summary.
export const lifeSummary = "National-level basketball and ramp modelling.";
