import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { EnrollmentStepper } from "@/components/ui/enrollment-stepper";
import { ASSETS, PROMO } from "@/data/site-content";
import { RegistrationForm } from "@/components/registration-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Enroll at Titanium Chess Academy — step 1 of 3.",
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  const { step } = await searchParams;

  return (
    <SiteShell>
      <PageHero
        eyebrow="Step 1 of 3"
        title="Register"
        description={`Code ${PROMO.code} — ${PROMO.discount} off by ${PROMO.deadline}.`}
        fullBleed
        image={ASSETS.backgrounds.register}
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          {step === "schedule-info" ? (
            <FadeIn>
              <div className="mb-8 rounded-xl border border-accent/30 bg-accent/10 px-5 py-4 text-lg text-chrome">
                Schedule is step 2 — complete registration below first, then you&apos;ll pick your times.
              </div>
            </FadeIn>
          ) : null}
          <FadeIn>
            <EnrollmentStepper currentStep={1} className="mb-12" />
          </FadeIn>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <FadeIn>
            <SpotlightCard className="h-fit p-8">
              <p className="font-display text-3xl font-extrabold">Enrollment path</p>
              <p className="mt-4 text-lg text-chrome">
                One straight line — register here, then you&apos;ll pick your schedule, then we confirm by email.
              </p>
              <ol className="mt-8 space-y-5 text-lg text-chrome">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">1.</span>
                  <span><strong className="text-foreground">Register</strong> — you are here</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-muted">2.</span>
                  <span>Pick your schedule — unlocked after step 1</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-muted">3.</span>
                  <span>We confirm by email</span>
                </li>
              </ol>
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
