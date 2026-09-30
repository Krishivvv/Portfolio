export const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
] as const;

export const isCurrent = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);
