"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

import { copyText } from "./copy-text";

type State = "idle" | "copied" | "error";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), state === "copied" ? 2000 : 4000);
    return () => clearTimeout(t);
  }, [state]);

  const labels: Record<State, string> = {
    idle: "Copy email",
    copied: "Copied",
    error: "Couldn't copy",
  };

  return (
    <>
      <button
        type="button"
        onClick={async () => setState((await copyText(email)) ? "copied" : "error")}
        className={`btn btn-ghost press ${state === "copied" ? "border-lake text-lake" : ""}`}
      >
        {state === "copied" ? (
          <Check aria-hidden className="size-4" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
        {/* Idle and copied share one grid cell so the button keeps its width; the
            rare failure label may widen it. */}
        <span className="grid">
          {(["idle", "copied", "error"] as const).filter((key) => key !== "error" || state === "error").map((key) => (
            <span
              key={key}
              aria-hidden={key !== state}
              className={`col-start-1 row-start-1 ${key === state ? "" : "invisible"}`}
            >
              {labels[key]}
            </span>
          ))}
        </span>
      </button>
      <span aria-live="polite" className="sr-only">
        {state === "copied" ? `Email address ${email} copied to clipboard` : state === "error" ? `Couldn't copy. The address is ${email}` : ""}
      </span>
    </>
  );
}
