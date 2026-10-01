import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { openGraph } from "@/lib/site";

import { WorkIndex } from "./work-index";

const description = "Three AI systems with case studies, and nine websites and frontend projects: seven live, two in progress.";

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
        lede="Three AI systems I built and deployed, each with a case study, and nine websites and frontend projects: seven live on their own domains, two still in progress."
      />
      <WorkIndex />
    </>
  );
}
