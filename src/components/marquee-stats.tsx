"use client";

import { STATS } from "@/data/site-content";
import { CountUp } from "@/components/ui/motion-primitives";

export function MarqueeStats() {
  const items = [...STATS, ...STATS];

  return (
    <section className="border-y border-border bg-navy-deep/50 py-5">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-12 px-6">
          {items.map((stat, index) => (
            <div
              key={`${stat.label}-${index}`}
              className="flex min-w-[240px] items-center gap-5"
            >
              <span className="font-display text-4xl font-bold text-accent">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="max-w-[140px] text-sm uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </span>
              <span className="h-1 w-1 rounded-full bg-accent/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
