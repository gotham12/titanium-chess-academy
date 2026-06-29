import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { ScheduleForm } from "@/components/schedule-form";
import { ASSETS } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Pick your preferred days and times for Titanium Chess Academy.",
};

export default function SchedulePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Schedule"
        title="Pick your times"
        description="3 quick steps. No clutter."
        fullBleed
        image={ASSETS.backgrounds.schedule}
      >
        <MagneticButton href="/register" variant="secondary">Register first</MagneticButton>
      </PageHero>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <Suspense fallback={<div className="py-20 text-center text-muted">Loading...</div>}>
            <ScheduleForm />
          </Suspense>
        </div>
      </section>
    </SiteShell>
  );
}
