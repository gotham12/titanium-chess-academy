import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/ui/page-hero";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CtaSection } from "@/components/cta-section";
import { CoachProfileSection } from "@/components/coach-profile";
import { anshProfile, advaithProfile } from "@/data/coaches-page";
import { ASSETS } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Meet the Coaches",
  description: "Ansh Nandurbarkar and Advaith Vijayasankaran — Titanium Chess Academy coaches.",
};

export default function CoachesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Coaching"
        title="Meet the Coaches"
        description="Founder-led instruction. Tournament-tested. Student-first."
        fullBleed
        image={ASSETS.backgrounds.coach}
      >
        <MagneticButton href="/register">Enroll</MagneticButton>
        <MagneticButton href="#ansh" variant="secondary">Ansh</MagneticButton>
        <MagneticButton href="#advaith" variant="secondary">Advaith</MagneticButton>
      </PageHero>

      <CoachProfileSection profile={anshProfile} />
      <CoachProfileSection profile={advaithProfile} reversed className="border-t border-border bg-surface/20" />

      <CtaSection />
    </SiteShell>
  );
}
