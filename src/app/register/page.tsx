import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChessBackground } from "@/components/chess-background";
import { RegistrationForm } from "@/components/registration-form";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CONTACT } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register for Titanium Chess Academy chess lessons or Summer Camp 2026.",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 md:pt-32">
        <ChessBackground />
        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-24 md:grid-cols-[0.95fr_1.05fr] md:px-8">
          <SpotlightCard className="h-fit p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">What happens next</p>
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

          <RegistrationForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
