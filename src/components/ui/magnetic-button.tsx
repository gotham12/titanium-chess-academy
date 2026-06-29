"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "promo";
  className?: string;
  external?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-glow shadow-[0_0_40px_rgba(74,159,212,0.35)]",
    secondary:
      "border border-border bg-surface/60 text-foreground backdrop-blur-md hover:border-accent/40 hover:bg-surface-elevated",
    promo:
      "bg-promo text-background hover:brightness-110 shadow-[0_0_40px_rgba(245,197,24,0.2)]",
  };

  const inner = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={href}>{inner}</Link>;
}
