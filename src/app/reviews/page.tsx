import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import { ASSETS, REVIEWS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Student reviews — Titanium Chess Academy.",
};

export default function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Students"
        title="Reviews"
        description="Grades K–12 · Real progress."
        fullBleed
        image={ASSETS.backgrounds.reviews}
      >
        <MagneticButton href="/register">Enroll</MagneticButton>
        <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.08}>
                <SpotlightCard className="flex h-full flex-col p-8">
                  <p className="font-display text-3xl font-bold leading-snug md:text-4xl">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-4 pt-10">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-accent/30">
                      <Image src={review.image} alt={review.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">{review.name}</p>
                      <p className="text-chrome">Age {review.age}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/register">Join the Academy</MagneticButton>
            <MagneticButton href="/founder" variant="secondary">Founder</MagneticButton>
            <MagneticButton href="/coaches/advaith" variant="secondary">Coach</MagneticButton>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
