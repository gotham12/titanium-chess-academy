import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MarqueeStats } from "@/components/marquee-stats";
import { ProgramsSection } from "@/components/programs-section";
import { SummerCampPreview } from "@/components/summer-camp-preview";
import { FounderSection } from "@/components/founder-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStats />
        <ProgramsSection />
        <SummerCampPreview />
        <FounderSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
