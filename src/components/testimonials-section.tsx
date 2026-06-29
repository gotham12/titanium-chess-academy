"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % REVIEWS.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const review = REVIEWS[index];

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Student Reviews"
          title="Confidence on and off the board"
          description="Families across grades K–12 have trusted Titanium Chess Academy for structured, personalized instruction."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-b from-gold/10 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/80 p-8 backdrop-blur-md md:p-12">
            <Quote className="h-10 w-10 text-gold/50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="mt-8"
              >
                <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted">{review.age}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {REVIEWS.map((item, dotIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show review from ${item.name}`}
                    onClick={() => setIndex(dotIndex)}
                    className={`h-2 rounded-full transition-all ${
                      dotIndex === index ? "w-8 bg-gold" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() =>
                    setIndex((current) =>
                      current === 0 ? REVIEWS.length - 1 : current - 1,
                    )
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => setIndex((current) => (current + 1) % REVIEWS.length)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
