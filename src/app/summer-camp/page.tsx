import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import {
  ASSETS,
  CAMP_LEVELS,
  CAMP_SESSIONS,
  CONTACT,
  PROMO,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Summer Camp 2026",
  description: "Four 2-week sessions · Shrewsbury, MA · $200.",
};

export default function SummerCampPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Summer 2026"
        title="Chess Camp"
        description="$200 · 3 days/week · 2 hrs · Shrewsbury."
        fullBleed
        image={ASSETS.backgrounds.summerCamp}
      >
        <MagneticButton href="/register" variant="promo">Enroll</MagneticButton>
        <MagneticButton href="/programs" variant="secondary">Lessons</MagneticButton>
        <span className="inline-flex items-center gap-2 rounded-full border border-promo/30 bg-promo/10 px-5 py-3 text-base font-medium text-promo">
          <Sparkles className="h-4 w-4" />
          {PROMO.note}
        </span>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Sessions" title="4 dates" align="center" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {CAMP_SESSIONS.map((session, i) => (
              <FadeIn key={session.dates} delay={i * 0.05}>
                <SpotlightCard className="p-8 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">
                    Session {session.status}
                  </p>
                  <p className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                    {session.dates}
                  </p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CAMP_LEVELS.map((level, i) => (
              <FadeIn key={level.title} delay={i * 0.08}>
                <SpotlightCard className="p-10">
                  <h3 className="font-display text-5xl font-extrabold">{level.title}</h3>
                  <p className="mt-2 text-xl text-chrome">{level.subtitle}</p>
                  <ul className="mt-8 space-y-3">
                    {level.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-lg">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/register" variant="promo">Register</MagneticButton>
            <MagneticButton href={CONTACT.googleForm} variant="secondary" external>
              Schedule Form
            </MagneticButton>
            <MagneticButton href="/coaches/advaith" variant="secondary">Meet Coach</MagneticButton>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
