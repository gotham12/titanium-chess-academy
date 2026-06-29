"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import { ASSETS, PROMO, QUICK_LINKS } from "@/data/site-content";
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
          src={ASSETS.backgrounds.home}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      <div className="checker-bg absolute inset-0 opacity-20" />

      <motion.div
        style={{ y: logoY }}
        className="pointer-events-none absolute right-[8%] top-[15%] hidden opacity-20 lg:block"
      >
        <div className="relative h-64 w-64 animate-float">
          <Image src={ASSETS.logo} alt="" fill className="object-contain" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-8 md:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-promo/30 bg-promo/10 px-5 py-2.5 text-base font-medium text-promo backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4" />
          {PROMO.note}
        </motion.div>

        <SplitText
          text="Where Strategy Leads To Success"
          className="max-w-5xl font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-gradient-titanium md:text-8xl lg:text-[6.5rem]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <MagneticButton href="/register">Enroll Now</MagneticButton>
          <MagneticButton href="/programs" variant="secondary">
            Programs
          </MagneticButton>
          <MagneticButton href="/summer-camp" variant="secondary">
            Summer Camp
          </MagneticButton>
          <MagneticButton href="/founder" variant="secondary">
            Founder
          </MagneticButton>
          <MagneticButton href="/coaches/advaith" variant="secondary">
            Meet the Coach
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {QUICK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-chrome backdrop-blur-sm transition hover:border-accent/40 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex items-center gap-5"
        >
          <div className="relative h-20 w-20 shrink-0 md:h-24 md:w-24">
            <Image
              src={ASSETS.logo}
              alt="Titanium Chess Academy"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(74,159,212,0.5)]"
              sizes="96px"
            />
          </div>
          <p className="font-display text-2xl font-bold md:text-3xl">
            Titanium Chess Academy
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
