"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { ASSETS, PROMO } from "@/data/site-content";
import { ChessBackground } from "@/components/chess-background";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SplitText } from "@/components/ui/split-text";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <ChessBackground />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-promo/30 bg-promo/10 px-4 py-2 text-sm text-promo"
          >
            <Sparkles className="h-4 w-4" />
            Promo {PROMO.code}: {PROMO.discount} off by {PROMO.deadline}
          </motion.div>

          <SplitText
            text="Where Strategy Leads To Success"
            className="font-display text-5xl leading-[0.95] tracking-tight text-gradient-gold md:text-7xl lg:text-[5.5rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Small-scale, student-focused chess instruction for grades K–12.
            Personalized lessons year-round and an in-person summer camp in
            Shrewsbury, Massachusetts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/register">Start Enrollment</MagneticButton>
            <MagneticButton href="/summer-camp" variant="secondary">
              Summer Camp 2026
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-12 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-gold" />
            Shrewsbury, MA · Worcester County area
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-blue/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={ASSETS.founder}
                alt="Students learning chess at Titanium Chess Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="rounded-2xl border border-border/80 bg-background/80 p-5 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-gold">
                      Coach Rating
                    </p>
                    <p className="mt-2 font-display text-4xl">1769 USCF</p>
                    <p className="mt-1 text-sm text-muted">92nd percentile nationally</p>
                  </div>
                  <div className="rounded-full border border-border p-3">
                    <Image
                      src={ASSETS.logo}
                      alt=""
                      width={36}
                      height={36}
                      className="opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.a
            href="/summer-camp"
            whileHover={{ y: -4 }}
            className="absolute -right-2 top-8 hidden rounded-2xl border border-border bg-surface-elevated px-5 py-4 shadow-2xl md:block lg:-right-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Summer Camp</p>
            <p className="mt-1 font-display text-2xl">June 27 – Aug 21</p>
            <div className="mt-3 inline-flex items-center gap-1 text-sm text-gold">
              View sessions <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
