"use client";

import { lazy, Suspense, useEffect, useState, useSyncExternalStore } from "react";

const loadPalette = () => import("./command-palette");
const CommandPalette = lazy(loadPalette);

const subscribe = () => () => {};
const isApple = () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

export function PaletteTrigger() {
  const [open, setOpen] = useState(false);
  const [requested, setRequested] = useState(false);
  const apple = useSyncExternalStore(subscribe, isApple, () => false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setRequested(true);
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setRequested(true);
          setOpen(true);
        }}
        onPointerEnter={loadPalette}
        onFocus={loadPalette}
        aria-haspopup="dialog"
        aria-keyshortcuts={apple ? "Meta+K" : "Control+K"}
        className="btn btn-ghost press hidden text-pencil hover:text-paper sm:inline-flex"
      >
        Jump to…
        <kbd className="rounded border border-seam-strong px-1.5 py-0.5 font-mono text-[0.75rem] leading-none text-pencil">
          {apple ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>
      {requested && (
        <Suspense fallback={null}>
          <CommandPalette open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </>
  );
}
