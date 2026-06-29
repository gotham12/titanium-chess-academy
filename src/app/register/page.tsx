import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { RegistrationForm } from "@/components/registration-form";
import { CONTACT } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register for Titanium Chess Academy chess lessons or Summer Camp 2026.",
};

export default function RegisterPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Enrollment"
        title="Register today"
        description="Join year-round lessons, summer camp, or both. We'll follow up at titaniumchessacademy@gmail.com."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-8">
          <FadeIn>
            <SpotlightCard className="h-fit p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                What happens next
              </p>
              <ol className="mt-6 space-y-5 text-sm leading-relaxed text-muted">
                <li>
                  <span className="font-semibold text-foreground">1. Submit registration</span>
                  <br />
                  Complete the form and send your details through email.
                </li>
                <li>
                  <span className="font-semibold text-foreground">2. Schedule preferences</span>
                  <br />
                  Fill out the Google Form so we can coordinate dates and times.
                </li>
                <li>
                  <span className="font-semibold text-foreground">3. Confirmation</span>
                  <br />
                  We&apos;ll follow up at {CONTACT.email} with next steps.
                </li>
              </ol>
            </SpotlightCard>
          </FadeIn>

          <FadeIn delay={0.1}>
            <RegistrationForm />
          </FadeIn>
        </div>
      </section>
    </SiteShell>
  );
}
