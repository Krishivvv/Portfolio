import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";

// Functional pages: native scrolling, content immediately, no presentation.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
