import type { Metadata } from "next";

import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { openGraph, siteUrl } from "@/lib/site";

import { About } from "./_components/about";
import { Capabilities } from "./_components/capabilities";
import { Closing } from "./_components/closing";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { InsideShiksha } from "./_components/inside-shiksha";
import { WorkSystems } from "./_components/work-systems";
import { WorkWebsites } from "./_components/work-websites";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: openGraph("/"),
};

// Only details that appear in ./Krishiv/.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github.url],
  address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressCountry: "IN" },
  knowsAbout: [...skills.genai.slice(0, 4), "PyTorch", "FastAPI", "React"],
};

// Each chapter is a sheet that slides over the previous one.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      {/* The hero stays pinned only while the first chapter rises over it, then
          leaves with it, so later chapters rise over plain paper. */}
      <div className="relative">
        <Hero />
        <WorkSystems />
      </div>
      <WorkWebsites />
      <Capabilities />
      <Experience />
      <InsideShiksha />
      <About />
      <Closing />
    </>
  );
}
