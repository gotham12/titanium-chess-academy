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
    <section className="py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface via-surface-elevated to-blue/20 p-10 md:p-16"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Ready to begin?</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Small classes. Real progress. Lasting confidence.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Titanium Chess Academy has proudly served over 20 students within the past
              5 years. Register for year-round lessons, summer camp, or both — and use
              promo code {PROMO.code} for {PROMO.discount} off by {PROMO.deadline}.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="/register">Enroll Now</MagneticButton>
              <MagneticButton
                href={`mailto:${CONTACT.email}`}
                variant="secondary"
                external
              >
                Email Us
              </MagneticButton>
            </div>

            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
