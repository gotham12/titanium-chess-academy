"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function CountUp({
  value,
  suffix = "",
  className,
  duration = 1.6,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(start + (value - start) * eased);
      setDisplay(next);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });

  const offsets = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function ImageReveal({ children, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ scale: 1.12, filter: "blur(8px)" }}
        animate={
          isInView
            ? { scale: 1, filter: "blur(0px)" }
            : { scale: 1.12, filter: "blur(8px)" }
        }
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="absolute inset-0 origin-left bg-accent"
      />
    </div>
  );
}
