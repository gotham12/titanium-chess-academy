"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ASSETS, NAV_LINKS } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (latest > previous && latest > 120) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 md:px-6",
            scrolled
              ? "border-border bg-background/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-border/40 bg-background/40 backdrop-blur-md",
          )}
        >
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 transition group-hover:scale-105">
              <Image
                src={ASSETS.logo}
                alt="Titanium Chess Academy"
                fill
                className="object-contain drop-shadow-[0_0_18px_rgba(74,159,212,0.35)]"
                sizes="48px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-sm font-bold tracking-wide">
                Titanium Chess Academy
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-chrome">
                Strategy · Focus · Growth
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-accent"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <MagneticButton href="/register" variant="primary">
              Enroll Now
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl xl:hidden"
      >
        <div className="flex h-full flex-col justify-center gap-5 px-8 pt-24">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-display text-3xl font-bold",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-accent"
                    : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <MagneticButton href="/register" variant="primary" className="mt-4 w-fit">
            Enroll Now
          </MagneticButton>
        </div>
      </motion.div>
    </>
  );
}
