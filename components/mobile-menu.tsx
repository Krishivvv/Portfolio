"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { navItems } from "./nav-items";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close when the route changes underneath the open menu.
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    // Pointer or keyboard focus leaving the menu closes it.
    const onOutside = (e: Event) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          setOpenedAt(pathname);
          setOpen((o) => !o);
        }}
        className="btn btn-ghost press"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-seam bg-graphite"
      >
        <nav aria-label="Mobile">
          <ul className="mx-auto max-w-[1240px] px-4 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-seam last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="press flex min-h-14 items-center text-xl tracking-[-0.01em] hover:text-lake"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
