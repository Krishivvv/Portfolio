"use client";

import { Command } from "cmdk";
import { CornerDownLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { profile } from "@/content/profile";
import { work } from "@/content/work";

import { copyText } from "./copy-text";
import { navItems } from "./nav-items";

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

const itemClass =
  "flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-md px-3 text-[0.9375rem] text-ink-2 data-[selected=true]:bg-paper-2 data-[selected=true]:text-ink";
const groupClass =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[0.75rem] [&_[cmdk-group-heading]]:text-muted";
const enter = <CornerDownLeft aria-hidden className="size-4 shrink-0 opacity-50" />;

export default function CommandPalette({ open, onOpenChange }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const titleId = useId();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      // showModal focuses cmdk's root (tabindex=-1); typing belongs in the input.
      inputRef.current?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const go = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => onOpenChange(false)}
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
      className="m-auto mt-[12vh] w-[min(640px,calc(100vw-2rem))] rounded-media border border-line-strong bg-paper-3 p-0 text-ink shadow-[0_30px_80px_-20px_rgb(22_21_19/0.35)] backdrop:bg-ink/35"
    >
      <h2 id={titleId} className="sr-only">
        Jump to
      </h2>
      <Command label="Jump to" loop>
        <Command.Input
          ref={inputRef}
          placeholder="Search pages, projects, websites…"
          className="h-14 w-full border-b border-line bg-transparent px-4 text-base text-ink outline-none placeholder:text-muted"
        />
        <Command.List data-lenis-prevent className="max-h-[min(60vh,420px)] overflow-y-auto overscroll-contain p-2">
          <Command.Empty className="px-3 py-6 text-muted">Nothing matches that.</Command.Empty>

          <Command.Group heading="Pages" className={groupClass}>
            <Command.Item value="Home" onSelect={() => go("/")} className={itemClass}>
              Home {enter}
            </Command.Item>
            {navItems.map((item) => (
              <Command.Item key={item.href} value={item.label} onSelect={() => go(item.href)} className={itemClass}>
                {item.label} {enter}
              </Command.Item>
            ))}
          </Command.Group>

          {(["ai", "web"] as const).map((group) => (
            <Command.Group key={group} heading={group === "ai" ? "AI systems" : "Websites"} className={groupClass}>
              {work
                .filter((w) => w.group === group)
                .map((w) => (
                  <Command.Item key={w.slug} value={`${w.name} ${w.kind}`} onSelect={() => go(`/work/${w.slug}`)} className={itemClass}>
                    <span>
                      {w.name} <span className="text-muted">— {w.kind}</span>
                    </span>
                    {enter}
                  </Command.Item>
                ))}
            </Command.Group>
          ))}

          <Command.Group heading="Contact" className={groupClass}>
            <Command.Item
              value="Copy email address"
              onSelect={async () => {
                const ok = await copyText(profile.email);
                setStatus(ok ? "Email address copied" : `Couldn't copy; the address is ${profile.email}`);
                if (ok) onOpenChange(false);
              }}
              className={itemClass}
            >
              Copy email address <span className="font-mono text-[0.8125rem] text-muted">{profile.email}</span>
            </Command.Item>
            <Command.Item
              value="Write an email to Krishiv"
              onSelect={() => {
                onOpenChange(false);
                window.location.href = `mailto:${profile.email}`;
              }}
              className={itemClass}
            >
              Write an email {enter}
            </Command.Item>
            <Command.Item
              value="GitHub"
              onSelect={() => {
                onOpenChange(false);
                window.open(profile.github.url, "_blank", "noopener,noreferrer");
              }}
              className={itemClass}
            >
              GitHub <span className="text-muted">↗</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
      <p aria-hidden className="flex gap-4 border-t border-line px-4 py-2.5 font-mono text-[0.75rem] text-muted">
        <span>↑↓ move</span>
        <span>Enter open</span>
        <span>Esc close</span>
      </p>
      <p aria-live="polite" className="sr-only">
        {status}
      </p>
    </dialog>
  );
}
