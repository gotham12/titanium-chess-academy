import { SiteShell } from "@/components/site-shell";
import { CinematicHero } from "@/components/cinematic-hero";
import { MarqueeStats } from "@/components/marquee-stats";
import { PageGatewayGrid } from "@/components/page-gateway-grid";
import { HomeExtendedSections } from "@/components/home-extended-sections";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <SiteShell>
      <CinematicHero />
      <MarqueeStats />
      <PageGatewayGrid />
      <HomeExtendedSections />
      <CtaSection />
    </SiteShell>
  );
}
