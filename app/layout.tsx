import type { Metadata, Viewport } from "next";
import { Fragment_Mono, Instrument_Serif, Schibsted_Grotesk } from "next/font/google";

import { MotionProvider } from "@/components/motion/motion-provider";
import { profile } from "@/content/profile";
import { motionCssVars } from "@/lib/motion";
import { openGraph, siteDescription, siteUrl, twitter } from "@/lib/site";

import "./globals.css";

const sans = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

// Editorial accent words only (italic).
const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

// Metadata-only face. "optional" means it never swaps in late, so it can never
// shift layout; it is preloaded, so it usually wins. If it misses the first
// paint, the system monospace stands in (next/font would otherwise fall back to
// a resized Arial, which loses the monospace look).
const mono = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
  display: "optional",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI products and websites`,
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  authors: [{ name: profile.name, url: profile.github.url }],
  openGraph: openGraph("/"),
  twitter,
};

export const viewport: Viewport = {
  themeColor: "#efebe3",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-intro is set by the landing page's inline script before first paint.
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      style={motionCssVars}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-paper text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
