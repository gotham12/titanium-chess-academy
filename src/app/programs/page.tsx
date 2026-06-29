import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import { PROGRAMS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Year-round private and group chess lessons at $20/hr. Online availability with personalized instruction for all levels.",
};

export default function ProgramsPage() {
  const lessons = PROGRAMS[0];

  return (
    <SiteShell>
      <PageHero
        eyebrow="Year-Round Programs"
        title="Lessons built around you"
        description="Private or small-group tutoring tailored to each student's level, goals, and learning pace."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <FadeIn>
              <SpotlightCard className="p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.28em] text-accent">
                  {lessons.cadence}
                </p>
                <h2 className="mt-4 font-display text-5xl font-bold">{lessons.title}</h2>
                <p className="mt-2 font-display text-4xl font-bold text-accent">
                  {lessons.price}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  {lessons.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {lessons.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <MagneticButton href="/register">Book Lessons</MagneticButton>
                </div>
              </SpotlightCard>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.08}>
                <SpotlightCard className="p-8">
                  <SectionHeading
                    eyebrow="Also available"
                    title="Summer Chess Camp"
                    description="Prefer in-person group instruction? Explore our four 2-week sessions in Shrewsbury, MA."
                  />
                  <div className="mt-8">
                    <MagneticButton href="/summer-camp" variant="secondary">
                      View Summer Camp
                    </MagneticButton>
                  </div>
                </SpotlightCard>
              </FadeIn>
              <FadeIn delay={0.16}>
                <SpotlightCard className="p-8">
                  <SectionHeading
                    eyebrow="Your coach"
                    title="Learn with Advaith"
                    description="Meet our lead coach — 1805 USCF, 93rd percentile worldwide, and passionate about helping students grow."
                  />
                  <div className="mt-8">
                    <MagneticButton href="/coaches/advaith" variant="secondary">
                      Meet the Coach
                    </MagneticButton>
                  </div>
                </SpotlightCard>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
