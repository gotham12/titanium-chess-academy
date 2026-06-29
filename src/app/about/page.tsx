import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import { ASSETS, STATS } from "@/data/site-content";
import { CountUp } from "@/components/ui/motion-primitives";

export const metadata: Metadata = {
  title: "About",
  description: "Titanium Chess Academy — small-scale chess instruction in Shrewsbury, MA.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="The Academy"
        title="Small classes. Big results."
        description="20+ students · 5 years · Grades K–12."
        fullBleed
        image={ASSETS.backgrounds.about}
      >
        <MagneticButton href="/register">Enroll</MagneticButton>
        <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
        <MagneticButton href="/summer-camp" variant="secondary">Summer Camp</MagneticButton>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.06}>
                <SpotlightCard className="p-8 text-center">
                  <p className="font-display text-5xl font-extrabold text-accent md:text-6xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <FadeIn>
              <SpotlightCard className="relative min-h-[280px] overflow-hidden p-0">
                <Image src={ASSETS.backgrounds.programs} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8">
                  <h3 className="font-display text-4xl font-extrabold">Year-Round</h3>
                  <p className="mt-2 text-xl text-chrome">$20/hr · Online</p>
                  <div className="mt-6">
                    <MagneticButton href="/programs">View Programs</MagneticButton>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
            <FadeIn delay={0.08}>
              <SpotlightCard className="relative min-h-[280px] overflow-hidden p-0">
                <Image src={ASSETS.backgrounds.summerCamp} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-8">
                  <h3 className="font-display text-4xl font-extrabold">Summer Camp</h3>
                  <p className="mt-2 text-xl text-chrome">$200 · Shrewsbury</p>
                  <div className="mt-6">
                    <MagneticButton href="/summer-camp" variant="promo">View Camp</MagneticButton>
                  </div>
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
