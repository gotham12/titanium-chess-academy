import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { ScheduleForm } from "@/components/schedule-form";
import { ScheduleGate } from "@/components/schedule-gate";
import { EnrollmentStepper } from "@/components/ui/enrollment-stepper";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ASSETS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Step 2 — pick your preferred days and times for Titanium Chess Academy.",
};

export default function SchedulePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Step 2 of 3"
        title="Pick your times"
        description="Complete this after registering."
        fullBleed
        image={ASSETS.backgrounds.schedule}
      />

      <section className="pb-24 md:pb-32">
        <Suspense fallback={<div className="py-20 text-center text-muted">Loading...</div>}>
          <ScheduleGate>
            <div className="mx-auto max-w-3xl px-4 md:px-8">
              <FadeIn>
                <EnrollmentStepper currentStep={2} className="mb-12" />
              </FadeIn>
            </div>
            <div className="mx-auto max-w-3xl px-4 md:px-8">
              <ScheduleForm />
            </div>
          </ScheduleGate>
        </Suspense>
      </section>
    </SiteShell>
  );
}
