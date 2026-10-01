import "./landing.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";

import { ReplayIntro } from "./_components/replay-intro";
import { SmoothScroll } from "./_components/smooth-scroll";
import { introScript } from "./_intro/intro-script";

// The landing group is the cinematic layer: the intro, Lenis smooth scrolling,
// scroll-linked motion and the signature. Functional routes live in (site).
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introScript }} />
      {/* First tab stop while the intro plays; handled by the inline script, so it
          works before hydration. From sm it sits in a band the hero keeps clear; on
          phones it floats at the bottom of the screen, within thumb reach. */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 sm:absolute sm:top-[4.75rem] sm:bottom-auto">
        <div className="mx-auto flex max-w-[1320px] justify-center px-4 sm:justify-end sm:px-8">
          <button
            id="skip-intro"
            type="button"
            className="skip-intro btn btn-ghost press pointer-events-auto bg-paper text-sm shadow-[0_12px_30px_-12px_rgb(22_21_19/0.4)] sm:shadow-none"
          >
            Skip animation
          </button>
        </div>
      </div>
      <SkipLink />
      <SiteHeader />
      {/* Above the footer, which the page lifts away from at the end. Opaque, so the
          footer never shows through gaps such as the hero's scaled edges. */}
      <main id="main" tabIndex={-1} className="relative z-10 bg-paper">
        {children}
      </main>
      <SiteFooter curtain extra={<ReplayIntro />} />
      <SmoothScroll />
    </>
  );
}
