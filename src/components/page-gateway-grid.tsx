"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PAGE_GATEWAYS } from "@/data/site-content";
import { FadeIn } from "@/components/ui/motion-primitives";
import { cn } from "@/lib/utils";

export function PageGatewayGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <FadeIn>
          <h2 className="font-display text-5xl font-extrabold md:text-7xl">
            Explore
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PAGE_GATEWAYS.map((page, index) => (
            <FadeIn key={page.href} delay={index * 0.05}>
              <Link href={page.href} className="group block h-full">
                <motion.article
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "spotlight-card shimmer-border relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl border border-border",
                    index === 0 && "md:col-span-2 xl:col-span-2 md:min-h-[320px]",
                  )}
                >
                  <Image
                    src={page.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

                  <div className="relative p-7 md:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                      {page.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
                      {page.title}
                    </h3>
                    <p className="mt-2 text-lg text-chrome">{page.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-accent">
                      Open
                      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
