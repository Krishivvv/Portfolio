import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-20 sm:px-8 sm:py-32 lg:grid-cols-12 lg:items-end">
          <p aria-hidden className="serif text-[clamp(8rem,30vw,22rem)] leading-[0.8] text-accent lg:col-span-6">
            404
          </p>
          <div className="lg:col-span-6">
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">This page doesn’t exist.</h1>
            <p className="mt-5 max-w-[44ch] text-lg text-ink-2">The link may be old or mistyped. Everything on the site starts from the homepage.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/" className="group btn btn-primary press">
                Go to the homepage <span aria-hidden className="nudge">→</span>
              </Link>
              <Link href="/work" className="btn btn-ghost press">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
