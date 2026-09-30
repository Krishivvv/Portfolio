"use client";

import { AnimatePresence, m } from "motion/react";
import { useId, useState } from "react";

import { ease } from "@/lib/motion";

// Disclosure with an animated height. Open by default: the details are there
// immediately, and collapsing is a convenience.
export function Accordion({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const id = useId();

  return (
    <div className="border-t border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
          className="group press flex w-full items-start justify-between gap-6 py-8 text-left"
        >
          <span>
            <span className="block text-[clamp(1.75rem,3.6vw,2.75rem)] leading-tight font-semibold tracking-[-0.035em]">{title}</span>
            <span className="mt-1 block text-lg text-ink-2">{meta}</span>
          </span>
          <span
            aria-hidden
            className={`mt-3 grid size-9 shrink-0 place-items-center rounded-full border border-line-strong transition-transform duration-300 group-hover:border-ink ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={id}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className="pb-10">{children}</div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
