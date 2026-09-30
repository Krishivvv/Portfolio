import type { Metadata } from "next";

// Absolute origin for canonical URLs, the sitemap, JSON-LD and link previews.
// On Vercel the production hostname is used automatically; anywhere else set
// SITE_URL. A production build without either fails instead of shipping
// localhost URLs.
const origin =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

if (!origin && process.env.NODE_ENV === "production") {
  throw new Error("Set SITE_URL (for example https://example.com) before building for production.");
}

export const siteUrl = (origin ?? "http://localhost:3000").replace(/\/$/, "");

export const siteName = "Krishiv Sharma";

export const siteDescription =
  "Krishiv Sharma builds AI products and websites: an agentic voice-support system, an LLM video-generation pipeline, a deepfake classifier, and eight live websites.";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Krishiv Sharma — I build AI products and websites. VoiceDesk, Shiksha, Veridex and eight live websites. Bhopal, India.",
};

// Every page builds its Open Graph data here: a page-level `openGraph` object
// replaces the parent's wholesale, so the shared fields must be repeated.
export function openGraph(
  path: string,
  extra: { title?: string; description?: string; type?: "website" | "article" } = {},
): Metadata["openGraph"] {
  return {
    type: "website",
    siteName,
    locale: "en_IN",
    url: path,
    title: `${siteName} — AI products and websites`,
    description: siteDescription,
    images: [ogImage],
    ...extra,
  };
}

export const twitter: Metadata["twitter"] = { card: "summary_large_image", images: [ogImage.url] };
