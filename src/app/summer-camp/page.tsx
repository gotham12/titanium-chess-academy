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
  CAMP_ADVANCED_CURRICULUM,
  CAMP_BEGINNER_CURRICULUM,
  CAMP_LEVELS,
  CAMP_OVERVIEW,
  CAMP_SESSIONS,
  PROMO,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Summer Camp 2026",
  description: "Four 2-week sessions · Shrewsbury, MA · $200 · Jun 29 – Aug 21.",
};

function CurriculumGrid({
  track,
  items,
}: {
  track: string;
  items: readonly { class: number; title: string; topics: readonly string[] }[];
}) {
  return (
    <div>
      <h3 className="font-display text-3xl font-extrabold md:text-4xl">{track}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((session, i) => (
          <FadeIn key={session.class} delay={i * 0.04}>
            <SpotlightCard className="flex h-full flex-col p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Class {session.class}
              </p>
              <h4 className="mt-2 font-display text-xl font-bold">{session.title}</h4>
              <ul className="mt-4 flex-1 space-y-2">
                {session.topics.map((topic) => (
                  <li key={topic} className="flex gap-2 text-sm leading-relaxed text-chrome">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {topic}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default function SummerCampPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Summer 2026"
        title="Chess Camp"
        description={`${CAMP_OVERVIEW.price} · ${CAMP_OVERVIEW.format} · Shrewsbury.`}
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
          <SectionHeading
            eyebrow="Overview"
            title="2026 Master Plan"
            description={CAMP_OVERVIEW.dates}
            align="center"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Format", value: CAMP_OVERVIEW.format },
              { label: "Price", value: CAMP_OVERVIEW.price },
              { label: "Location", value: CAMP_OVERVIEW.location },
              { label: "Finale", value: CAMP_OVERVIEW.finale },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.05}>
                <SpotlightCard className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.label}</p>
                  <p className="mt-3 text-base leading-relaxed text-chrome">{item.value}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <SectionHeading className="mt-20" eyebrow="Sessions" title="4 dates" align="center" />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {CAMP_SESSIONS.map((session, i) => (
              <FadeIn key={session.dates} delay={i * 0.05}>
                <SpotlightCard className="p-8 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">
                    Session {session.status}
                  </p>
                  <p className="mt-4 font-display text-2xl font-extrabold md:text-3xl">
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
                  <h3 className="font-display text-4xl font-extrabold md:text-5xl">{level.title}</h3>
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

          <SectionHeading
            className="mt-20"
            eyebrow="Curriculum"
            title="6 classes per session"
            description="Puzzle time, candy incentives, board demonstrations, and a tournament finale with certificates."
            align="center"
          />

          <div className="mt-14 space-y-16">
            <CurriculumGrid track="Beginner Track" items={CAMP_BEGINNER_CURRICULUM} />
            <CurriculumGrid track="Intermediate / Advanced Track" items={CAMP_ADVANCED_CURRICULUM} />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/register" variant="promo">Enroll in Camp</MagneticButton>
            <MagneticButton href="/coaches" variant="secondary">Meet the Coaches</MagneticButton>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
