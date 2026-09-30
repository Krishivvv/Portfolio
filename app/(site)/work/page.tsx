import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { openGraph } from "@/lib/site";

import { WorkIndex } from "./work-index";

const description = "Three AI systems with case studies, and eight live websites and frontend projects.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: openGraph("/work", { title: "Work — Krishiv Sharma", description }),
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Systems and"
        accent="sites."
        lede="Three AI systems I built and deployed, each with a case study, and eight websites and frontend projects that are live today."
      />
      <WorkIndex />
    </>
  );
}
