import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CopyEmail } from "@/components/copy-email";
import { mailto, profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-seam">
      <div className="mx-auto max-w-[1240px] px-4 py-24 sm:px-8 sm:py-32">
        <h2 id="contact-title" className="text-[2rem] leading-[1.05] font-semibold tracking-[-0.03em] sm:text-5xl">
          Contact
        </h2>
        <p className="mt-4 max-w-[48ch] text-pencil sm:text-lg">Email is the fastest way to reach me.</p>

        <a
          href={mailto}
          className="press mt-10 inline-block text-[clamp(1.35rem,5.4vw,4.25rem)] leading-tight font-semibold tracking-[-0.035em] break-all decoration-lake decoration-2 underline-offset-[0.18em] hover:text-lake hover:underline sm:break-normal"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={mailto} className="btn btn-primary press">
            Email me
          </a>
          <CopyEmail email={profile.email} />
          <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost press">
            GitHub <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <Link href="/resume" className="btn btn-ghost press">
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
