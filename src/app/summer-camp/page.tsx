import type { Metadata } from "next";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChessBackground } from "@/components/chess-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  CAMP_LEVELS,
  CAMP_SESSIONS,
  CONTACT,
  PROMO,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Summer Camp 2026",
  description:
    "Titanium Chess Academy Summer Camp 2026 in Shrewsbury, MA. Four 2-week sessions from June 27 to August 21. Beginner and advanced tracks.",
};

export default function SummerCampPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 md:pt-32">
        <ChessBackground />

        <section className="relative mx-auto max-w-7xl px-4 pb-10 md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-promo/30 bg-promo/10 px-4 py-2 text-sm text-promo">
            <Sparkles className="h-4 w-4" />
            {PROMO.note}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-gradient-gold md:text-7xl">
            Summer Chess Camp 2026
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            The Titanium Chess Academy Summer Camp runs from June 27th to August 21st,
            with multiple 2-week sessions available. In-person group instruction in the
            Worcester County area — beginners and intermediates welcome.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <SectionHeading
            eyebrow="Camp Structure"
            title="Built for focus and momentum"
            description="Each session lasts 2 weeks with 3 days per week and 2 hours per class."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CAMP_SESSIONS.map((session) => (
              <SpotlightCard key={session.dates} className="p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-gold">
                  {session.status}
                </p>
                <p className="mt-4 font-display text-3xl">{session.dates}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <SectionHeading
            eyebrow="Camp Levels"
            title="Beginner and advanced tracks"
            description="Students are placed in the track that matches their experience and goals."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {CAMP_LEVELS.map((level) => (
              <SpotlightCard key={level.title} className="p-8 md:p-10">
                <h3 className="font-display text-4xl">{level.title}</h3>
                <p className="mt-2 text-muted">{level.subtitle}</p>
                <ul className="mt-8 space-y-3">
                  {level.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t border-border pt-3 text-sm text-foreground/90"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <SpotlightCard className="p-8 md:p-10">
              <SectionHeading
                eyebrow="Tuition"
                title="$200 per 2-week session"
                description="Pricing is stated per session. Online private lessons remain available year-round at $20/hr."
              />
              <div className="mt-8 space-y-4 text-sm text-muted">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  In-person private lessons and Summer Camp are offered in the Worcester
                  County area during the summer, including Shrewsbury, MA.
                </p>
                <p className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  After completing registration, please fill out the Google Form so we
                  can find dates and times that work best for everyone.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold">
                  Additional Notes
                </p>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                  <li>Online private lessons are available year-round.</li>
                  <li>
                    Parents may observe sessions if desired, though observation is not
                    recommended to help students remain focused and independent.
                  </li>
                  <li>
                    Beginners & intermediates welcome — no prior experience required for
                    the beginner track.
                  </li>
                </ul>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="/register" variant="promo">
                  Enroll Now
                </MagneticButton>
                <MagneticButton href={CONTACT.googleForm} variant="secondary" external>
                  Schedule Form
                </MagneticButton>
              </div>
            </SpotlightCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
