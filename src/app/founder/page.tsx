import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, ImageReveal } from "@/components/ui/motion-primitives";
import { CtaSection } from "@/components/cta-section";
import { ASSETS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Meet Ansh Nandurbarkar — founder of Titanium Chess Academy, 1769 USCF, Shrewsbury HS and UMass Amherst.",
};

const credentials = [
  {
    icon: Trophy,
    label: "World Open 2021",
    value: "Tied 7th in U1100 · 117 players",
  },
  {
    icon: Award,
    label: "USCF Rating",
    value: "1769 · 92nd percentile nationally",
  },
  {
    icon: GraduationCap,
    label: "Background",
    value: "Shrewsbury HS · UMass Amherst",
  },
];

export default function FounderPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About the Founder"
        title="Ansh Nandurbarkar"
        description="Tournament-level insight meets classroom-tested instruction for grades K–12."
        fullBleed
        image={ASSETS.founder}
        imageAlt="Ansh Nandurbarkar, founder of Titanium Chess Academy"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn>
              <ImageReveal className="rounded-[2rem] border border-border">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={ASSETS.founder}
                    alt="Ansh Nandurbarkar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </ImageReveal>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.08}>
                <SpotlightCard className="p-8 md:p-10">
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    My name is Ansh Nandurbarkar, owner of Titanium Chess Academy. I am a
                    recent graduate of Shrewsbury High School and currently study Finance at
                    UMass Amherst. With seven years of competitive chess experience and an
                    extensive background teaching students in grades K–12, I bring both
                    tournament-level insight and classroom-tested instruction to every lesson.
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                    My greatest accomplishment is a tie for 7th place in the Under-1100
                    section at the 2021 World Open, competing against 117 players. More
                    importantly, I am passionate about helping students grow not only as
                    chess players, but as thinkers and individuals — with an emphasis on
                    critical thinking, confidence, and genuine enjoyment of learning.
                  </p>
                </SpotlightCard>
              </FadeIn>

              <div className="grid gap-4 sm:grid-cols-3">
                {credentials.map((item, index) => (
                  <FadeIn key={item.label} delay={0.12 + index * 0.06}>
                    <div className="rounded-2xl border border-border bg-surface/60 p-5">
                      <item.icon className="h-5 w-5 text-accent" />
                      <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
