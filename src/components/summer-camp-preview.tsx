"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { CAMP_SESSIONS, PROMO } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";

const highlights = [
  { icon: Calendar, label: "2-week sessions", detail: "June 27 – August 21" },
  { icon: Clock, label: "3 days per week", detail: "2 hours per class" },
  { icon: Users, label: "In-person groups", detail: "Beginner & advanced tracks" },
];

export function SummerCampPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue/10 via-transparent to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Summer Camp 2026"
          title="Four sessions. One unforgettable summer."
          description="In-person group instruction in the Worcester County area with beginner and advanced tracks. $200 per 2-week session."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-surface/70 p-6"
            >
              <item.icon className="h-5 w-5 text-gold" />
              <p className="mt-4 font-medium">{item.label}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {CAMP_SESSIONS.map((session, index) => (
            <motion.div
              key={session.dates}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.06 }}
              className="group rounded-2xl border border-border bg-background/50 p-5 transition hover:border-gold/30 hover:bg-surface"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-gold">
                {session.status}
              </p>
              <p className="mt-3 font-display text-2xl">{session.dates}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/summer-camp" variant="promo">
            View Full Camp Details
          </MagneticButton>
          <p className="text-sm text-muted">
            Promo code <span className="font-semibold text-promo">{PROMO.code}</span>{" "}
            for {PROMO.discount} off by {PROMO.deadline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
