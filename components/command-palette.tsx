"use client";

import { Command } from "cmdk";
import { ArrowUpRight, CornerDownLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { sites } from "@/content/sites";

import { copyText } from "./copy-text";
import { navItems } from "./nav-items";

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

const itemClass =
  "flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-md px-3 text-[0.9375rem] text-pencil data-[selected=true]:bg-carbon data-[selected=true]:text-paper";
const groupClass =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[0.75rem] [&_[cmdk-group-heading]]:text-pencil";

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
  const visit = (url: string) => {
    onOpenChange(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => onOpenChange(false)}
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
      className="m-auto mt-[12vh] w-[min(640px,calc(100vw-2rem))] rounded-tile border border-seam-strong bg-graphite p-0 text-paper shadow-2xl backdrop:bg-graphite/70"
    >
      <h2 id={titleId} className="sr-only">
        Jump to
      </h2>
      <Command label="Jump to" loop>
        <Command.Input
          ref={inputRef}
          placeholder="Search sections, projects, websites…"
          className="h-14 w-full border-b border-seam bg-transparent px-4 text-base text-paper outline-none placeholder:text-pencil"
        />
        <Command.List data-lenis-prevent className="max-h-[min(60vh,420px)] overflow-y-auto overscroll-contain p-2">
          <Command.Empty className="px-3 py-6 text-pencil">Nothing matches that.</Command.Empty>

          <Command.Group heading="Go to" className={groupClass}>
            <Command.Item value="Home" onSelect={() => go("/")} className={itemClass}>
              Home <CornerDownLeft aria-hidden className="size-4 opacity-60" />
            </Command.Item>
            {navItems.map((item) => (
              <Command.Item key={item.href} value={item.label} onSelect={() => go(item.href)} className={itemClass}>
                {item.label} <CornerDownLeft aria-hidden className="size-4 opacity-60" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Case studies" className={groupClass}>
            {projects.map((p) => (
              <Command.Item
                key={p.slug}
                value={`${p.name} ${p.kind}`}
                onSelect={() => go(`/work/${p.slug}`)}
                className={itemClass}
              >
                <span>
                  {p.name} <span className="text-pencil">— {p.kind}</span>
                </span>
                <CornerDownLeft aria-hidden className="size-4 shrink-0 opacity-60" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Websites" className={groupClass}>
            {sites.map((s) => (
              <Command.Item key={s.url} value={`${s.name} ${s.domain ?? ""}`} onSelect={() => visit(s.url)} className={itemClass}>
                <span>
                  {s.name} {s.domain && <span className="font-mono text-[0.8125rem] text-pencil">{s.domain}</span>}
                </span>
                <ArrowUpRight aria-hidden className="size-4 shrink-0 opacity-60" />
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Contact" className={groupClass}>
            <Command.Item
              value="Copy email address"
              onSelect={async () => {
                const ok = await copyText(profile.email);
                setStatus(ok ? "Email address copied" : "Couldn't copy; the address is " + profile.email);
                if (ok) onOpenChange(false);
              }}
              className={itemClass}
            >
              Copy email address <span className="font-mono text-[0.8125rem]">{profile.email}</span>
            </Command.Item>
            <Command.Item
              value="Write an email to Krishiv"
              onSelect={() => {
                onOpenChange(false);
                window.location.href = `mailto:${profile.email}`;
              }}
              className={itemClass}
            >
              Write an email <CornerDownLeft aria-hidden className="size-4 opacity-60" />
            </Command.Item>
            <Command.Item value="GitHub" onSelect={() => visit(profile.github.url)} className={itemClass}>
              GitHub <ArrowUpRight aria-hidden className="size-4 opacity-60" />
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
      <p aria-hidden className="flex gap-4 border-t border-seam px-4 py-2.5 font-mono text-[0.75rem] text-pencil">
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
