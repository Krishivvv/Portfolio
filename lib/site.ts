import type { Metadata } from "next";

// Absolute origin for canonical URLs, the sitemap, JSON-LD and link previews.
// Production builds default to the site's public address on Cloudflare Pages;
// set SITE_URL to override it, for example once a custom domain is attached.
// Development uses localhost.
const PRODUCTION_URL = "https://krishiv-sharma.pages.dev";

const origin =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ??
  (process.env.NODE_ENV === "production" ? PRODUCTION_URL : "http://localhost:3000");

export const siteUrl = origin.replace(/\/$/, "");

export const siteName = "Krishiv Sharma";

export const siteDescription =
  "Krishiv Sharma builds AI products and websites: an agentic voice-support system, an LLM video-generation pipeline, a deepfake classifier, and nine websites, seven of them live.";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Krishiv Sharma — I build AI products and websites. VoiceDesk, Shiksha, Veridex and nine websites. Bhopal, India.",
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
