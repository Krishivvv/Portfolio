"use client";

import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { linkedin, mailto, profile } from "@/content/profile";
import { ease } from "@/lib/motion";

import { isCurrent, navItems } from "../nav-items";

const links = [{ label: "Home", href: "/" }, ...navItems];

// Full-screen menu for small and medium screens. A native modal <dialog> gives
// focus containment, Esc and focus return; Motion plays the panel wipe and the
// staggered link rise, and the dialog closes only after the exit finishes.
export function Menu() {
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const titleId = useId();

  // Navigating closes it.
  if (open && openedAt !== pathname) setOpen(false);

  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setOpenedAt(pathname);
          setOpen(true);
        }}
        className="btn btn-ghost press"
      >
        Menu
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        onCancel={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-ink backdrop:bg-transparent"
      >
        <AnimatePresence onExitComplete={() => dialog.current?.close()}>
          {open && (
            <m.div
              key="menu"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 0.55, ease }}
              className="flex h-full flex-col bg-paper"
            >
              <div className="flex h-16 items-center justify-between border-b border-line px-4 sm:px-8">
                <h2 id={titleId} className="font-medium tracking-[-0.01em]">
                  {profile.name}
                </h2>
                <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost press">
                  Close
                </button>
              </div>

              <nav aria-label="Menu" className="flex-1 overflow-y-auto px-4 pt-6 sm:px-8">
                <ul>
                  {links.map((item, i) => (
                    <li key={item.href} className="overflow-clip border-b border-line">
                      <m.div
                        initial={{ y: "105%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "105%", transition: { duration: 0.25, ease } }}
                        transition={{ duration: 0.7, ease, delay: 0.12 + i * 0.05 }}
                      >
                        {"opensMail" in item && item.opensMail ? (
                          // Straight to a new email; the /contact page stays in the footer.
                          <a
                            href={mailto}
                            onClick={() => setOpen(false)}
                            className="group press flex min-h-16 items-center justify-between py-3 text-[clamp(2.25rem,11vw,4.5rem)] leading-none font-semibold tracking-[-0.045em]"
                          >
                            {item.label}
                            <span className="sr-only"> (opens your email app)</span>
                            <span aria-hidden className="nudge nudge-up text-2xl text-muted">
                              ↗
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            aria-current={(item.href === "/" ? pathname === "/" : isCurrent(pathname, item.href)) ? "page" : undefined}
                            onClick={() => setOpen(false)}
                            className="group press flex min-h-16 items-center justify-between py-3 text-[clamp(2.25rem,11vw,4.5rem)] leading-none font-semibold tracking-[-0.045em] aria-[current=page]:text-accent"
                          >
                            {item.label}
                            <span aria-hidden className="nudge text-2xl text-muted">
                              →
                            </span>
                          </Link>
                        )}
                      </m.div>
                    </li>
                  ))}
                </ul>
              </nav>

              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.45, duration: 0.4 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-4 py-5 text-sm sm:px-8"
              >
                <a href={mailto} className="press link inline-flex min-h-11 items-center">
                  {profile.email}
                </a>
                <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className="press link inline-flex min-h-11 items-center">
                  GitHub<span className="sr-only"> (opens in a new tab)</span> ↗
                </a>
                {linkedin && (
                  <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="press link inline-flex min-h-11 items-center">
                    LinkedIn<span className="sr-only"> (opens in a new tab)</span> ↗
                  </a>
                )}
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </dialog>
    </div>
  );
}
