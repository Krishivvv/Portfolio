"use client";

import { gmailCompose, mailto } from "@/content/profile";

// "Email me" that actually opens a new email everywhere. Phones and tablets
// hand mailto: to their mail app. Desktops often have nothing behind mailto:
// (on Windows it usually goes to the browser, which does nothing unless a mail
// site is registered), so a plain click there opens Gmail's compose window in
// a new tab instead. The href stays mailto:, so copy-link, modified clicks and
// no-JavaScript all still work.
export function openEmail(event: React.MouseEvent<HTMLAnchorElement>) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  event.preventDefault();
  window.open(gmailCompose, "_blank", "noopener,noreferrer");
}

export function EmailLink({ children, ...props }: Omit<React.ComponentProps<"a">, "href">) {
  return (
    <a
      href={mailto}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        openEmail(event);
      }}
    >
      {children}
    </a>
  );
}
