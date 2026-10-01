import Link from "next/link";

import { mailto, profile } from "@/content/profile";

import { navItems } from "./nav-items";

const linkClass = "press link inline-flex min-h-11 items-center";

// On the landing page the footer sits under the last section (sticky to the
// bottom), so the page lifts away to reveal it: the closing interaction costs
// no JavaScript and never takes over the scroll. Only on screens tall enough
// to show all of it, since a pinned footer taller than the screen would hide
// its top. The giant name rises as it is uncovered (.footer-mark, CSS).
export function SiteFooter({ extra, curtain = false }: { extra?: React.ReactNode; curtain?: boolean }) {
  return (
    <footer
      data-site-footer
      className={`night overflow-clip border-t border-night-line ${
        curtain ? "z-0 [@media(min-width:1024px)_and_(min-height:760px)]:sticky [@media(min-width:1024px)_and_(min-height:760px)]:bottom-0" : ""
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-4 pt-16 pb-6 sm:px-8 sm:pt-20">
        <p className="max-w-[24ch] text-[clamp(2rem,4.4vw,3.75rem)] leading-[0.98] font-semibold tracking-[-0.045em]">
          AI products, <span className="serif text-night-accent">not just notebooks</span>.
        </p>

        <div className="mt-12 grid gap-10 border-t border-night-line pt-8 sm:grid-cols-[1.6fr_1.2fr_1fr]">
          <div>
            <h2 className="eyebrow mb-3">Pages</h2>
            <ul className="grid grid-cols-2 gap-x-6 text-night-muted">
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
                <a href={mailto} className={`${linkClass} break-all hover:text-night-text`}>
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

        {/* The name rises out of a mask line as the footer is uncovered. */}
        <div aria-hidden className="mt-14 overflow-clip pt-[0.06em] text-[clamp(2.5rem,12.3vw,11.25rem)]">
          <p className="footer-mark leading-[0.82] font-semibold tracking-[-0.065em] whitespace-nowrap text-night-text select-none">
            Krishiv Sharma<span className="text-night-accent">.</span>
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-night-line pt-4 text-sm text-night-muted">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          {extra}
        </div>
      </div>
    </footer>
  );
}
