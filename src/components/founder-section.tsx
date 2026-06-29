"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { ASSETS } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const credentials = [
  {
    icon: Trophy,
    label: "World Open 2021",
    value: "Tied 7th in U1100 · 117 players",
  },
  {
    icon: Award,
    label: "USCF Rating",
    value: "1769 · 92nd percentile",
  },
  {
    icon: GraduationCap,
    label: "Background",
    value: "Shrewsbury HS · UMass Amherst",
  },
];

export function FounderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="founder" className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="About the Founder"
          title="Ansh Nandurbarkar"
          description="Tournament-level insight meets classroom-tested instruction for grades K–12."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/15 to-blue/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <div className="relative aspect-[4/5]">
                <Image
                  src={ASSETS.founder}
                  alt="Ansh Nandurbarkar, founder of Titanium Chess Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <SpotlightCard className="p-8">
              <p className="text-base leading-relaxed text-muted md:text-lg">
                My name is Ansh Nandurbarkar, owner of Titanium Chess Academy. I am a
                recent graduate of Shrewsbury High School and currently study Finance at
                UMass Amherst. With seven years of competitive chess experience and an
                extensive background teaching students in grades K–12, I bring both
                tournament-level insight and classroom-tested instruction to every lesson.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                My greatest accomplishment is a tie for 7th place in the Under-1100
                section at the 2021 World Open, competing against 117 players. More
                importantly, I am passionate about helping students grow not only as
                chess players, but as thinkers and individuals — with an emphasis on
                critical thinking, confidence, and genuine enjoyment of learning.
              </p>
            </SpotlightCard>

            <div className="grid gap-4 sm:grid-cols-3">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  className="rounded-2xl border border-border bg-surface/60 p-5"
                >
                  <item.icon className="h-5 w-5 text-gold" />
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
