import Link from "next/link";

import { mailto, profile } from "@/content/profile";

const linkClass = "press link inline-flex min-h-11 items-center text-pencil";

export function SiteFooter({ extra }: { extra?: React.ReactNode }) {
  return (
    <footer className="border-t border-seam print:hidden">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-pencil">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 text-sm">
          <li>
            <a href={mailto} className={linkClass}>
              Email
            </a>
          </li>
          <li>
            <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <Link href="/resume" className={linkClass}>
              Resume
            </Link>
          </li>
          {extra && <li>{extra}</li>}
        </ul>
      </div>
    </footer>
  );
}
