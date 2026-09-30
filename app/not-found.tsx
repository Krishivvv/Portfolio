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
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-36">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">This page doesn’t exist.</h1>
          <p className="mt-5 max-w-[48ch] text-lg text-pencil">The link may be old or mistyped. Everything on the site starts from the homepage.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary press">
              Go to the homepage
            </Link>
            <Link href="/#work" className="btn btn-ghost press">
              See the work
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
