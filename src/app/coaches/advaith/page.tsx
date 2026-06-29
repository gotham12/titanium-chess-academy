import type { Metadata } from "next";
import Image from "next/image";
import { Target, TrendingUp, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, ImageReveal, CountUp } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChessComButton } from "@/components/ui/chess-com-button";
import { CtaSection } from "@/components/cta-section";
import { ASSETS, COACH } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Meet the Coach",
  description: "Advaith Vijayasankaran — 1805 USCF, Lead Coach.",
};

const pillars = [
  { icon: TrendingUp, title: "10+ years", text: "Road to National Master." },
  { icon: Users, title: "Clear coaching", text: "Honest feedback every session." },
  { icon: Target, title: "Your growth", text: "Thinkers, not memorizers." },
];

export default function CoachPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Meet the Coach"
        title={COACH.name}
        titleLines={["Advaith", "Vijayasankaran"]}
        description={`${COACH.rating} USCF · ${COACH.tagline}`}
        fullBleed
        image={ASSETS.backgrounds.coach}
      >
        <ChessComButton href={COACH.chessCom} username={COACH.username} />
        <MagneticButton href="/register">Train with Advaith</MagneticButton>
        <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Coach" title="Advaith Vijayasankaran" align="center" />

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <ImageReveal className="rounded-3xl border border-border">
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

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <FadeIn>
                  <SpotlightCard className="overflow-hidden p-5 text-center sm:p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">USCF</p>
                    <p className="mt-2 font-display text-3xl font-extrabold tabular-nums text-accent sm:text-4xl">
                      <CountUp value={COACH.rating} />
                    </p>
                  </SpotlightCard>
                </FadeIn>
                {COACH.percentiles.map((item, i) => (
                  <FadeIn key={item.label} delay={0.06 + i * 0.05}>
                    <SpotlightCard className="overflow-hidden p-5 text-center sm:p-6">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-accent sm:text-xs sm:tracking-[0.2em]">
                        {item.label}
                      </p>
                      <p className="mt-2 font-display text-3xl font-extrabold tabular-nums sm:text-4xl">
                        {item.value}
                      </p>
                    </SpotlightCard>
                  </FadeIn>
                ))}
              </div>

              {COACH.bio.map((line, i) => (
                <FadeIn key={i} delay={0.1 + i * 0.06}>
                  <SpotlightCard className="p-6">
                    <p className="text-xl text-chrome">{line}</p>
                  </SpotlightCard>
                </FadeIn>
              ))}

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <ChessComButton href={COACH.chessCom} username={COACH.username} />
                  <MagneticButton href="/register">Enroll</MagneticButton>
                  <MagneticButton href="/founder" variant="secondary">Founder</MagneticButton>
                </div>
              </FadeIn>
            </div>
          </div>

          <SectionHeading
            className="mt-20"
            eyebrow="Goal"
            title={COACH.goal}
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.06}>
                <SpotlightCard className="p-8 text-center">
                  <pillar.icon className="mx-auto h-8 w-8 text-accent" />
                  <h3 className="mt-5 font-display text-3xl font-extrabold">{pillar.title}</h3>
                  <p className="mt-2 text-lg text-chrome">{pillar.text}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
