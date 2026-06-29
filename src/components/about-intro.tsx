"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function AboutIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-24 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="The Academy"
          title="Small-scale by design"
          description="Titanium Chess Academy has proudly served over 20 students within the past 5 years, offering high-quality chess instruction in a supportive and structured environment."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12"
        >
          <SpotlightCard className="p-8 md:p-10">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Instruction is intentionally small-scale and student-focused. Each student
              receives personalized attention, clear feedback, and lessons tailored to
              their individual skill level and goals. Year-round sessions are $20/hr,
              once a week for an hour. As the academy continues to grow, this same
              standard of quality and individualized development remains at the core of
              everything we do.
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
