import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ASSETS, CONTACT, PROMO } from "@/data/site-content";
import { RegistrationForm } from "@/components/registration-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Enroll at Titanium Chess Academy.",
};

export default function RegisterPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Enroll"
        title="Register"
        description={`Code ${PROMO.code} — ${PROMO.discount} off by ${PROMO.deadline}.`}
        fullBleed
        image={ASSETS.backgrounds.register}
      >
        <MagneticButton href={`mailto:${CONTACT.email}`} variant="secondary" external>
          Email Us
        </MagneticButton>
        <MagneticButton href={CONTACT.googleForm} variant="secondary" external>
          Schedule Form
        </MagneticButton>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <FadeIn>
            <SpotlightCard className="h-fit p-8">
              <p className="font-display text-4xl font-extrabold">3 steps</p>
              <ol className="mt-8 space-y-6 text-xl text-chrome">
                <li><span className="font-bold text-foreground">1.</span> Submit form</li>
                <li><span className="font-bold text-foreground">2.</span> Google schedule</li>
                <li><span className="font-bold text-foreground">3.</span> We confirm</li>
              </ol>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
                <MagneticButton href="/summer-camp" variant="secondary">Camp</MagneticButton>
              </div>
            </SpotlightCard>
          </FadeIn>
          <FadeIn delay={0.08}>
            <RegistrationForm />
          </FadeIn>
        </div>
      </section>
    </SiteShell>
  );
}
