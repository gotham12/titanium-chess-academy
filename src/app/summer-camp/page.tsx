import type { Metadata } from "next";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import {
  CAMP_LEVELS,
  CAMP_SESSIONS,
  CONTACT,
  PROMO,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Summer Camp 2026",
  description:
    "Titanium Chess Academy Summer Camp 2026 in Shrewsbury, MA. Four 2-week sessions from June 27 to August 21.",
};

export default function SummerCampPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Summer Camp 2026"
        title="Four sessions. One unforgettable summer."
        description="In-person group instruction in the Worcester County area — beginners and intermediates welcome. $200 per 2-week session."
        fullBleed
        image="/advaith-vijayasankaran.png"
        imageAlt="Summer chess camp"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-promo/30 bg-promo/10 px-4 py-2 text-sm text-promo backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          {PROMO.note}
        </div>
      </PageHero>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Camp Structure"
            title="Built for focus and momentum"
            description="Each session lasts 2 weeks with 3 days per week and 2 hours per class."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CAMP_SESSIONS.map((session, index) => (
              <FadeIn key={session.dates} delay={index * 0.06}>
                <SpotlightCard className="p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    {session.status}
                  </p>
                  <p className="mt-4 font-display text-3xl font-bold">{session.dates}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Camp Levels"
            title="Beginner and advanced tracks"
            description="Students are placed in the track that matches their experience and goals."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {CAMP_LEVELS.map((level, index) => (
              <FadeIn key={level.title} delay={index * 0.08}>
                <SpotlightCard className="p-8 md:p-10">
                  <h3 className="font-display text-4xl font-bold">{level.title}</h3>
                  <p className="mt-2 text-muted">{level.subtitle}</p>
                  <ul className="mt-8 space-y-3">
                    {level.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-t border-border pt-3 text-sm"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <FadeIn>
              <SpotlightCard className="p-8 md:p-10">
                <SectionHeading
                  eyebrow="Tuition"
                  title="$200 per 2-week session"
                  description="Pricing is stated per session. Online private lessons remain available year-round at $20/hr."
                />
                <div className="mt-8 space-y-4 text-sm text-muted">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    In-person instruction in the Worcester County area, including Shrewsbury, MA.
                  </p>
                  <p className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    After registration, please fill out the Google Form so we can coordinate
                    dates and times.
                  </p>
                </div>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SpotlightCard className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">
                    Additional Notes
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                    <li>Online private lessons are available year-round.</li>
                    <li>
                      Parents may observe sessions if desired, though observation is not
                      recommended to help students remain focused.
                    </li>
                    <li>Beginners & intermediates welcome.</li>
                  </ul>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton href="/register" variant="promo">
                    Enroll Now
                  </MagneticButton>
                  <MagneticButton href={CONTACT.googleForm} variant="secondary" external>
                    Schedule Form
                  </MagneticButton>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
