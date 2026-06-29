import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT, NAV_LINKS } from "@/data/site-content";
import { gmailComposeUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.3fr_0.85fr_0.85fr] md:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0">
              <Image src={ASSETS.logo} alt="" fill className="object-contain" sizes="64px" />
            </div>
            <div>
              <p className="font-display text-lg font-bold">Titanium Chess Academy</p>
              <p className="text-sm text-chrome">Where Strategy Leads To Success</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            High-quality chess instruction in a supportive, structured environment for
            students in grades K–12 across Shrewsbury and Worcester County.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Navigate</p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/" className="text-sm text-muted transition hover:text-foreground">
                Home
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/register" className="text-sm font-semibold text-accent transition hover:text-accent-glow">
                Enroll
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <a
                href={gmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-foreground"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Titanium Chess Academy. All rights reserved.</p>
          <p>Built for focused, student-first chess education.</p>
        </div>
      </div>
    </footer>
  );
}
