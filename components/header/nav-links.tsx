"use client";

import { m } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { spring } from "@/lib/motion";

import { isCurrent, navItems } from "../nav-items";

// `glide` is false when the pill appears from nothing: it shows in place, then glides.
type Pill = { x: number; width: number; glide: boolean };

// Desktop navigation: one highlight glides between links under the pointer or
// keyboard focus (it animates x and width, so no layout projection is needed);
// the current page carries an ultramarine dot.
export function NavLinks() {
  const pathname = usePathname();
  const [pill, setPill] = useState<Pill | null>(null);

  const show = (el: HTMLElement) => setPill((prev) => ({ x: el.offsetLeft, width: el.offsetWidth, glide: prev !== null }));
  const hide = () => setPill(null);

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <div className="relative" onMouseLeave={hide}>
        <m.span
          aria-hidden
          initial={false}
          animate={pill ? { x: pill.x, width: pill.width, opacity: 1 } : { opacity: 0 }}
          transition={pill?.glide ? spring : { x: { duration: 0 }, width: { duration: 0 }, opacity: { duration: 0.15 } }}
          className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-paper-2"
        />
        <ul className="relative flex items-center">
          {navItems.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onMouseEnter={(e) => show(e.currentTarget)}
                  onFocus={(e) => show(e.currentTarget)}
                  onBlur={hide}
                  className="press relative inline-flex min-h-11 items-center rounded-full px-4 text-[0.9375rem] text-ink-2 hover:text-ink aria-[current=page]:text-ink"
                >
                  {item.label}
                  {current && (
                    <span aria-hidden className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
