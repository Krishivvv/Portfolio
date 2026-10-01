import type { MetadataRoute } from "next";

import { siteDescription, siteName } from "@/lib/site";

// Lets phones add the site to the home screen with the "K" icon.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Krishiv",
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: "#efebe3",
    theme_color: "#efebe3",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
