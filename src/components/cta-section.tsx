"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { CONTACT, PROMO } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="shimmer-border relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-surface-elevated to-navy/40 p-12 md:p-20"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-5xl font-extrabold leading-tight md:text-7xl">
              Start today.
            </h2>
            <p className="mt-4 text-2xl text-chrome">
              Code {PROMO.code} — {PROMO.discount} off by {PROMO.deadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="/register">Enroll</MagneticButton>
              <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
              <MagneticButton href="/summer-camp" variant="secondary">Summer Camp</MagneticButton>
              <MagneticButton href="/founder" variant="secondary">Founder</MagneticButton>
              <MagneticButton href="/coaches/advaith" variant="secondary">Coach</MagneticButton>
              <MagneticButton href={`mailto:${CONTACT.email}`} variant="secondary" external>
                Email
              </MagneticButton>
            </div>

            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-8 inline-flex items-center gap-2 text-lg text-muted transition hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              {CONTACT.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
