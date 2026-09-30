import "./landing.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";

import { LandingProviders } from "./_components/landing-providers";
import { ReplayIntro } from "./_components/replay-intro";
import { introScript } from "./_intro/intro-script";

// The landing group is the only place with presentation: the intro, Lenis,
// reveals, parallax and the signature diagram. Functional routes live in (site).
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
      {/* First tab stop while the intro plays; handled by the inline script, so it
          works before hydration. Sits in the hero's empty top band, on the grid. */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-40">
        <div className="mx-auto flex max-w-[1240px] justify-end px-4 sm:px-8">
          <button id="skip-intro" type="button" className="skip-intro btn btn-ghost press pointer-events-auto bg-graphite text-sm">
            Skip animation
          </button>
        </div>
      </div>
      <SkipLink />
      <SiteHeader />
      <LandingProviders>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </LandingProviders>
      <SiteFooter extra={<ReplayIntro />} />
    </>
  );
}
