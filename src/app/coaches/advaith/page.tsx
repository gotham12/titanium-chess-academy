import type { Metadata } from "next";
import Image from "next/image";
import { Target, TrendingUp, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, ImageReveal, CountUp } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import { COACH } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Meet the Coach",
  description:
    "Meet Advaith Vijayasankaran — Lead Coach at Titanium Chess Academy. 1805 USCF, 93rd percentile worldwide.",
};

const pillars = [
  {
    icon: TrendingUp,
    title: "Competitive drive",
    text: "A decade of tournament experience fuels every lesson — with eyes on the National Master title.",
  },
  {
    icon: Users,
    title: "Student-first teaching",
    text: "Clear explanations, honest feedback, and practical tips students can apply immediately.",
  },
  {
    icon: Target,
    title: "Long-term growth",
    text: "Building thinkers who enjoy the process — not just memorizing moves.",
  },
];

export default function CoachPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Meet the Coach"
        title={COACH.name}
        description={`${COACH.title} · ${COACH.rating} USCF ${COACH.ratingType} · ${COACH.experience} of competitive chess`}
        fullBleed
        image={COACH.image}
        imageAlt={`${COACH.name}, lead coach at Titanium Chess Academy`}
      >
        <MagneticButton href="/register">Train with Advaith</MagneticButton>
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <FadeIn>
              <SpotlightCard className="p-8 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-accent">USCF Rating</p>
                <p className="mt-4 font-display text-6xl font-bold text-accent">
                  <CountUp value={COACH.rating} />
                </p>
                <p className="mt-2 text-muted">{COACH.ratingType}</p>
              </SpotlightCard>
            </FadeIn>
            {COACH.percentiles.map((item, index) => (
              <FadeIn key={item.label} delay={0.08 + index * 0.06}>
                <SpotlightCard className="p-8 text-center">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    {item.label}
                  </p>
                  <p className="mt-4 font-display text-6xl font-bold">{item.value}</p>
                  <p className="mt-2 text-muted">percentile</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <FadeIn>
              <ImageReveal className="rounded-[2rem] border border-border">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={COACH.image}
                    alt={COACH.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </ImageReveal>
            </FadeIn>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Coach Bio"
                title="Discipline on the board. Clarity in the classroom."
              />
              {COACH.bio.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.08}>
                  <SpotlightCard className="p-6 md:p-8">
                    <p className="text-base leading-relaxed text-muted md:text-lg">
                      {paragraph}
                    </p>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Road to National Master"
            title={`Goal: ${COACH.goal}`}
            description="Teaching with the same ambition I bring to my own improvement — helping students build the habits that create lasting results."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 0.08}>
                <SpotlightCard className="h-full p-8">
                  <pillar.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-5 font-display text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <MagneticButton href="/register">Start Training</MagneticButton>
              <MagneticButton href="/programs" variant="secondary">
                View Programs
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
