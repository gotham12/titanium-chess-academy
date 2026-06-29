"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { PROGRAMS } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ProgramsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="programs" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Instruction built around each student"
          description="Two focused paths — year-round private and group lessons, plus an immersive in-person summer camp — designed to meet students where they are and push them forward."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PROGRAMS.map((program, index) => (
            <SpotlightCard
              key={program.title}
              className="group p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">
                    {program.cadence}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl">
                    {program.title}
                  </h3>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-right"
                >
                  <p className="font-display text-3xl text-gold">{program.price}</p>
                </motion.div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted">
                {program.description}
              </p>

              <ul className="mt-8 space-y-3">
                {program.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton
                  href={index === 1 ? "/summer-camp" : "/register"}
                  variant={index === 1 ? "promo" : "secondary"}
                >
                  {index === 1 ? "Explore Summer Camp" : "Book Lessons"}
                </MagneticButton>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
