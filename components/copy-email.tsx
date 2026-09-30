"use client";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useEffect, useState } from "react";

import { ease } from "@/lib/motion";

import { copyText } from "./copy-text";

type State = "idle" | "copied" | "error";

const labels: Record<State, string> = { idle: "Copy email", copied: "Copied", error: "Copy failed" };

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), state === "copied" ? 2000 : 4000);
    return () => clearTimeout(t);
  }, [state]);

  return (
    <>
      <button
        type="button"
        onClick={async () => setState((await copyText(email)) ? "copied" : "error")}
        data-copied={state === "copied" || undefined}
        className="btn btn-ghost press overflow-hidden"
      >
        {state === "copied" ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
        {/* The label rolls between states inside a fixed-width cell. */}
        <span className="relative grid overflow-clip">
          {(["idle", "error"] as const).map((k) => (
            <span key={k} aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap">
              {labels[k]}
            </span>
          ))}
          <AnimatePresence mode="popLayout" initial={false}>
            <m.span
              key={state}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="col-start-1 row-start-1 whitespace-nowrap"
            >
              {labels[state]}
            </m.span>
          </AnimatePresence>
        </span>
      </button>
      <span aria-live="polite" className="sr-only">
        {state === "copied" ? `Email address ${email} copied to clipboard` : state === "error" ? `Couldn't copy. The address is ${email}` : ""}
      </span>
    </>
  );
}
