"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ASSETS, PAGE_GATEWAYS } from "@/data/site-content";
import { FadeIn } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

export function PageGatewayGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Explore
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold md:text-5xl">
            Every part of the academy, its own experience
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PAGE_GATEWAYS.map((page, index) => (
            <FadeIn key={page.href} delay={index * 0.06}>
              <Link href={page.href} className="group block h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "spotlight-card shimmer-border relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/70 p-7 backdrop-blur-sm",
                    index === 0 && "md:col-span-2 xl:col-span-2",
                  )}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-accent">
                      {page.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-bold">
                      {page.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {page.description}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-titanium transition group-hover:text-accent">
                    View page
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  {index === 3 ? (
                    <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 opacity-20">
                      <Image src={ASSETS.logo} alt="" fill className="object-contain" />
                    </div>
                  ) : null}
                </motion.article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
