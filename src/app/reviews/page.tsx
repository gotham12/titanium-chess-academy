import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { CtaSection } from "@/components/cta-section";
import { REVIEWS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Student and family reviews of Titanium Chess Academy.",
};

export default function ReviewsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Student Reviews"
        title="Confidence on and off the board"
        description="Families across grades K–12 have trusted Titanium Chess Academy for structured, personalized instruction."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {REVIEWS.map((review, index) => (
              <FadeIn key={review.name} delay={index * 0.08}>
                <SpotlightCard className="flex h-full flex-col p-8">
                  <p className="font-display text-xl leading-relaxed md:text-2xl">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-4 pt-10">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted">{review.age}</p>
                    </div>
                  </div>
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
