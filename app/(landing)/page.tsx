import type { Metadata } from "next";

import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { openGraph, siteUrl } from "@/lib/site";

import { About } from "./_components/about";
import { Capabilities } from "./_components/capabilities";
import { Contact } from "./_components/contact";
import { Engineering } from "./_components/engineering";
import { Experience } from "./_components/experience";
import { Hero } from "./_components/hero";
import { SelectedWork } from "./_components/selected-work";

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Capabilities />
      <SelectedWork />
      <Experience />
      <Engineering />
      <About />
      <Contact />
    </>
  );
}
