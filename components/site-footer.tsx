import Link from "next/link";

import { mailto, profile } from "@/content/profile";

import { navItems } from "./nav-items";

const linkClass = "press link inline-flex min-h-11 items-center";

// On the landing page the footer sits under the last section (sticky to the
// bottom), so the page lifts away to reveal it: the closing interaction costs
// no JavaScript and never takes over the scroll.
export function SiteFooter({ extra, curtain = false }: { extra?: React.ReactNode; curtain?: boolean }) {
  return (
    <footer
      data-site-footer
      className={`night ${curtain ? "z-0 lg:sticky lg:bottom-0" : ""} border-t border-night-line`}
    >
      <div className="mx-auto max-w-[1320px] px-4 pt-16 pb-8 sm:px-8 sm:pt-24">
        <p className="max-w-[16ch] text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
          AI products, <span className="serif text-night-accent">not just notebooks</span>.
        </p>

        <div className="mt-14 grid gap-10 border-t border-night-line pt-8 sm:grid-cols-3">
          <div>
            <h2 className="eyebrow mb-3">Pages</h2>
            <ul className="text-night-muted">
              <li>
                <Link href="/" className={`${linkClass} hover:text-night-text`}>
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`${linkClass} hover:text-night-text`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-3">Elsewhere</h2>
            <ul className="text-night-muted">
              <li>
                <a href={mailto} className={`${linkClass} hover:text-night-text`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} hover:text-night-text`}>
                  GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:text-right">
            <h2 className="eyebrow mb-3">Colophon</h2>
            <p className="text-sm text-night-muted">
              Next.js, React, Motion and Lenis. Set in Schibsted Grotesk, Instrument Serif and Fragment Mono.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-sm text-night-muted">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          {extra}
        </div>
      </div>
    </footer>
  );
}
