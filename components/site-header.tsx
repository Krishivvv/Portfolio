import Link from "next/link";

import { profile } from "@/content/profile";

import { MobileMenu } from "./mobile-menu";
import { navItems } from "./nav-items";
import { PaletteTrigger } from "./palette-trigger";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-seam bg-graphite">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-4 sm:px-8">
        <Link
          href="/"
          className="press -mx-2 inline-flex min-h-11 items-center rounded-md px-2 font-medium tracking-[-0.01em] whitespace-nowrap hover:text-lake"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="press inline-flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] text-pencil hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <PaletteTrigger />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
