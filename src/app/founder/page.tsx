import type { Metadata } from "next";
import Image from "next/image";
import { Award, Trophy } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, ImageReveal, CountUp } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChessComButton } from "@/components/ui/chess-com-button";
import { CtaSection } from "@/components/cta-section";
import { ASSETS, FOUNDER } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Founder",
  description: "Ansh Nandurbarkar — founder, 1769 USCF.",
};

export default function FounderPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Meet the Founder"
        title="Ansh Nandurbarkar"
        description={FOUNDER.tagline}
        fullBleed
        image={ASSETS.backgrounds.founder}
      >
        <ChessComButton href={FOUNDER.chessCom} username={FOUNDER.username} />
        <MagneticButton href="/register">Enroll</MagneticButton>
        <MagneticButton href="/coaches/advaith" variant="secondary">Meet Coach</MagneticButton>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Founder" title="Ansh Nandurbarkar" align="center" />

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <ImageReveal className="rounded-3xl border border-border">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={FOUNDER.image}
                    alt={FOUNDER.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </ImageReveal>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.08}>
                <SpotlightCard className="p-10 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">USCF</p>
                  <p className="mt-4 font-display text-7xl font-extrabold text-accent">
                    <CountUp value={FOUNDER.rating} />
                  </p>
                </SpotlightCard>
              </FadeIn>

              <div className="grid grid-cols-3 gap-4">
                {FOUNDER.credentials.map((item, i) => (
                  <FadeIn key={item.label} delay={0.12 + i * 0.05}>
                    <div className="rounded-2xl border border-border bg-surface/60 p-5 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.label}</p>
                      <p className="mt-2 font-display text-2xl font-bold">{item.value}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.2}>
                <SpotlightCard className="p-8">
                  <p className="text-xl leading-relaxed text-chrome">{FOUNDER.bio}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ChessComButton href={FOUNDER.chessCom} username={FOUNDER.username} />
                    <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
                    <MagneticButton href="/reviews" variant="secondary">Reviews</MagneticButton>
                  </div>
                </SpotlightCard>
              </FadeIn>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <FadeIn>
              <SpotlightCard className="flex items-center gap-4 p-6">
                <Trophy className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-display text-2xl font-bold">World Open &apos;21</p>
                  <p className="text-chrome">7th of 117 · U1100</p>
                </div>
              </SpotlightCard>
            </FadeIn>
            <FadeIn delay={0.06}>
              <SpotlightCard className="flex items-center gap-4 p-6">
                <Award className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-display text-2xl font-bold">92nd Percentile</p>
                  <p className="text-chrome">Nationally</p>
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
