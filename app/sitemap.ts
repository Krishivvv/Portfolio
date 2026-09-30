import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, priority: 1 },
    ...projects.map((p) => ({ url: `${siteUrl}/work/${p.slug}`, lastModified, priority: 0.8 })),
    { url: `${siteUrl}/resume`, lastModified, priority: 0.7 },
  ];
}
