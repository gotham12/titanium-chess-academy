"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { MapPin, Sparkles } from "lucide-react";
import { ASSETS, PROMO } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SplitText } from "@/components/ui/split-text";

export function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src={ASSETS.coach.advaith}
          alt="Titanium Chess Academy coach at tournament"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/75 to-background" />
      <div className="checker-bg absolute inset-0 opacity-20" />

      <motion.div
        style={{ y: logoY }}
        className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 opacity-[0.12] md:top-[8%]"
      >
        <div className="relative h-48 w-48 md:h-72 md:w-72 animate-pulse-glow">
          <Image src={ASSETS.logo} alt="" fill className="object-contain" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-8 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-promo/30 bg-promo/10 px-4 py-2 text-sm text-promo backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          Promo {PROMO.code}: {PROMO.discount} off by {PROMO.deadline}
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SplitText
              text="Where Strategy Leads To Success"
              className="font-display text-5xl font-bold leading-[0.92] tracking-tight text-gradient-titanium md:text-7xl lg:text-[5.25rem]"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-titanium md:text-xl"
            >
              Premium chess instruction for grades K–12 — small classes, real
              progress, and coaches who compete at a high level.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href="/register">Enroll Now</MagneticButton>
              <MagneticButton href="/coaches/advaith" variant="secondary">
                Meet the Coach
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="shimmer-border relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-6 backdrop-blur-xl">
              <div className="relative mx-auto h-40 w-40 md:h-48 md:w-48">
                <Image
                  src={ASSETS.logo}
                  alt="Titanium Chess Academy logo"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(74,159,212,0.45)]"
                  sizes="192px"
                />
              </div>
              <p className="mt-6 text-center font-display text-2xl font-bold">
                Titanium Chess Academy
              </p>
              <p className="mt-2 text-center text-sm text-muted">
                Shrewsbury, MA · Worcester County
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-chrome">
                <MapPin className="h-4 w-4 text-accent" />
                In-person camp · Online lessons
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
