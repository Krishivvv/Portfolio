import Link from "next/link";

import { profile } from "@/content/profile";

import { HeaderShell } from "./header/header-shell";
import { Menu } from "./header/menu";
import { NavLinks } from "./header/nav-links";
import { PaletteTrigger } from "./palette-trigger";

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-6 px-4 sm:px-8">
        <Link
          href="/"
          className="press group -mx-2 inline-flex min-h-11 items-center gap-2 rounded-md px-2 font-medium tracking-[-0.01em] whitespace-nowrap"
        >
          <span aria-hidden className="size-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
          {profile.name}
        </Link>
        <NavLinks />
        <div className="flex items-center gap-2">
          <PaletteTrigger />
          <Menu />
        </div>
      </div>
    </HeaderShell>
  );
}
