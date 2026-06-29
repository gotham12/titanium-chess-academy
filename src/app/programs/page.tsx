import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import { ASSETS, PROGRAMS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Programs",
  description: "Year-round chess lessons at $20/hr. All levels.",
};

export default function ProgramsPage() {
  const lessons = PROGRAMS[0];

  return (
    <SiteShell>
      <PageHero
        eyebrow="Year-Round"
        title="Lessons"
        description="$20/hr · 1 hr weekly · All levels."
        fullBleed
        image={ASSETS.backgrounds.programs}
      >
        <MagneticButton href="/register">Book Now</MagneticButton>
        <MagneticButton href="/coaches/advaith" variant="secondary">Meet Coach</MagneticButton>
        <MagneticButton href="/summer-camp" variant="secondary">Summer Camp</MagneticButton>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn>
            <SpotlightCard className="p-10 md:p-14">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{lessons.cadence}</p>
              <h2 className="mt-4 font-display text-6xl font-extrabold md:text-7xl">
                {lessons.price}
              </h2>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {lessons.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <Check className="h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-wrap gap-4">
                <MagneticButton href="/register">Enroll</MagneticButton>
                <MagneticButton href="/founder" variant="secondary">Founder</MagneticButton>
                <MagneticButton href="/reviews" variant="secondary">Reviews</MagneticButton>
              </div>
            </SpotlightCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SpotlightCard className="relative mt-8 min-h-[240px] overflow-hidden p-0">
              <Image src={ASSETS.backgrounds.summerCamp} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-background/75" />
              <div className="relative flex flex-col items-start justify-center p-10 md:p-14">
                <h3 className="font-display text-5xl font-extrabold">Summer Camp</h3>
                <p className="mt-2 text-2xl text-chrome">$200 · In-person · Shrewsbury</p>
                <MagneticButton href="/summer-camp" variant="promo" className="mt-8">
                  Explore Camp
                </MagneticButton>
              </div>
            </SpotlightCard>
          </FadeIn>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
