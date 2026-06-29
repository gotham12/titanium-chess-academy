import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { CtaSection } from "@/components/cta-section";
import { ASSETS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Titanium Chess Academy — small-scale, student-focused chess instruction in Shrewsbury, MA.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About the Academy"
        title="Small-scale by design"
        description="Over five years of high-quality chess instruction in a supportive, structured environment for grades K–12."
        image={ASSETS.founder}
        imageAlt="Titanium Chess Academy instruction"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Personal attention at every level"
            description="Instruction is intentionally small-scale and student-focused."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <SpotlightCard className="p-8 md:p-10">
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  Titanium Chess Academy has proudly served over 20 students within the
                  past 5 years. Each student receives personalized attention, clear
                  feedback, and instruction tailored to their individual skill level
                  and goals.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                  Year-round sessions are $20/hr, once a week for an hour. As the
                  academy continues to grow, this same standard of quality and
                  individualized development remains at the core of everything we do.
                </p>
              </SpotlightCard>
            </FadeIn>

            <FadeIn delay={0.1}>
              <SpotlightCard className="p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold">What we offer</h3>
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="border-t border-border pt-4">
                    Weekly private and group tutoring sessions, available year-round online
                  </li>
                  <li className="border-t border-border pt-4">
                    In-person Summer Chess Camp in the Worcester County area
                  </li>
                  <li className="border-t border-border pt-4">
                    Beginner through advanced tracks with tournament preparation
                  </li>
                  <li className="border-t border-border pt-4">
                    Coaches who compete at a high level and teach with clarity
                  </li>
                </ul>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
