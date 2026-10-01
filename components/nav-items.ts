export type NavItem = {
  label: string;
  href: string;
  /** In the header, this item opens a new email instead of the page (Krishiv, 2026-10-01). */
  opensMail?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact", opensMail: true },
  { label: "Resume", href: "/resume" },
];

export const isCurrent = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);
