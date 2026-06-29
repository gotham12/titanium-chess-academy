"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  fullBleed?: boolean;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  fullBleed = false,
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        fullBleed ? "min-h-[92vh]" : "min-h-[55vh] pt-28 md:pt-32",
      )}
    >
      {image ? (
        <>
          <motion.div style={{ y, scale }} className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          <div className="checker-bg absolute inset-0 opacity-30" />
        </>
      ) : (
        <div className="absolute inset-0 grid-bg opacity-70" />
      )}

      <motion.div
        style={{ opacity }}
        className={cn(
          "relative mx-auto flex max-w-7xl flex-col justify-end px-4 md:px-8",
          fullBleed ? "min-h-[92vh] pb-20 pt-36" : "pb-16 pt-8",
        )}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-accent"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-gradient-titanium md:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-titanium md:text-xl"
          >
            {description}
          </motion.p>
        ) : null}
        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
}
