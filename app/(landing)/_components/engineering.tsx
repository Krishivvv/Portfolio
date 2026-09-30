import Link from "next/link";

import { Section } from "@/components/section";

import { ShikshaPipeline } from "./shiksha-pipeline";

export function Engineering() {
  return (
    <Section
      id="engineering"
      title="Inside Shiksha"
      lede="From a text prompt to a narrated video. The part worth looking at is the hand-off: the models write animation code, and a headless browser renders it."
    >
      <ShikshaPipeline />
      <p className="mt-12">
        <Link href="/work/shiksha" className="press link inline-flex min-h-11 items-center text-paper">
          Read the Shiksha case study →
        </Link>
      </p>
    </Section>
  );
}
