import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACT } from "@/data/site-content";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/summer-camp", label: "Summer Camp" },
  { href: "/register", label: "Register" },
  { href: "/#founder", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 rounded-xl border border-border bg-background p-1.5">
              <Image src={ASSETS.logo} alt="" fill className="object-contain" sizes="44px" />
            </div>
            <div>
              <p className="font-semibold">Titanium Chess Academy</p>
              <p className="text-sm text-muted">Where Strategy Leads To Success</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            High-quality chess instruction in a supportive, structured environment for
            students in grades K–12 across Shrewsbury and Worcester County.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Navigate</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition hover:text-foreground">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.location}</li>
            <li>
              <a
                href={CONTACT.googleForm}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-foreground"
              >
                Schedule preference form
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Titanium Chess Academy. All rights reserved.</p>
          <p>Designed for focused, student-first chess education.</p>
        </div>
      </div>
    </footer>
  );
}
