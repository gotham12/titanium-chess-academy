"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function SplitText({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={cn("flex flex-wrap gap-x-[0.28em]", className)}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-flex overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ y: "110%", opacity: 0, rotateX: -80 }}
              animate={
                isInView
                  ? { y: "0%", opacity: 1, rotateX: 0 }
                  : { y: "110%", opacity: 0, rotateX: -80 }
              }
              transition={{
                duration: 0.65,
                delay: delay + wordIndex * 0.04 + charIndex * 0.018,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
