import type { MetadataRoute } from "next";

import { navItems } from "@/components/nav-items";
import { work } from "@/content/work";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, priority: 1 },
    ...navItems.map((item) => ({ url: `${siteUrl}${item.href}`, lastModified, priority: 0.8 })),
    ...work.map((w) => ({ url: `${siteUrl}/work/${w.slug}`, lastModified, priority: 0.7 })),
  ];
}
