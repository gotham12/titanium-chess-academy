"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, ImageReveal, CountUp } from "@/components/ui/motion-primitives";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ChessComButton } from "@/components/ui/chess-com-button";
import { HIGHLIGHT_ICONS, PILLAR_ICONS, type CoachProfileData } from "@/data/coaches-page";
import { cn } from "@/lib/utils";

export type { CoachProfileData };

export function CoachProfileSection({
  profile,
  reversed = false,
  className,
}: {
  profile: CoachProfileData;
  reversed?: boolean;
  className?: string;
}) {
  const bioLines = Array.isArray(profile.bio) ? profile.bio : [profile.bio];

  return (
    <section id={profile.id} className={cn("scroll-mt-28 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow={profile.title}
          title={`${profile.titleLines[0]} ${profile.titleLines[1]}`}
          description={profile.tagline}
          align="center"
        />

        <div
          className={cn(
            "mt-14 grid items-center gap-10 lg:grid-cols-2",
            reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          <FadeIn>
            <ImageReveal className="rounded-3xl border border-border">
              <div className="relative aspect-[4/5]">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </ImageReveal>
          </FadeIn>

          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {profile.statCards.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.06 + i * 0.05}>
                  <SpotlightCard className="flex min-h-[6.5rem] flex-col items-center justify-center overflow-hidden px-3 py-4 text-center sm:min-h-[7rem] sm:px-4 sm:py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs sm:tracking-[0.18em]">
                      {stat.label}
                    </p>
                    {stat.animate ? (
                      <p className="mt-2 font-display text-3xl font-extrabold tabular-nums text-accent sm:text-4xl">
                        <CountUp value={Number(stat.value)} />
                      </p>
                    ) : (
                      <p className="mt-2 font-display text-lg font-bold leading-tight text-foreground sm:text-xl">
                        {stat.value}
                      </p>
                    )}
                    {stat.subValue ? (
                      <p className="mt-1 max-w-[9rem] text-xs leading-snug text-chrome sm:max-w-none sm:text-sm">
                        {stat.subValue}
                      </p>
                    ) : null}
                  </SpotlightCard>
                </FadeIn>
              ))}
            </div>

            {bioLines.map((line, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.06}>
                <SpotlightCard className="p-6">
                  <p className="text-xl leading-relaxed text-chrome">{line}</p>
                </SpotlightCard>
              </FadeIn>
            ))}

            {profile.highlights ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.highlights.map((item, i) => {
                  const Icon = HIGHLIGHT_ICONS[item.icon];
                  return (
                    <FadeIn key={item.title} delay={0.16 + i * 0.06}>
                      <SpotlightCard className="flex items-center gap-4 p-6">
                        <Icon className="h-8 w-8 shrink-0 text-accent" />
                        <div>
                          <p className="font-display text-2xl font-bold">{item.title}</p>
                          <p className="text-chrome">{item.text}</p>
                        </div>
                      </SpotlightCard>
                    </FadeIn>
                  );
                })}
              </div>
            ) : null}

            <FadeIn delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <ChessComButton href={profile.chessCom} username={profile.username} />
                <MagneticButton href="/register">Enroll</MagneticButton>
                <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>

        {profile.pillars && profile.goalHeading ? (
          <>
            <SectionHeading
              className="mt-20"
              eyebrow="Goal"
              title={profile.goalHeading}
              align="center"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {profile.pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[pillar.icon];
                return (
                  <FadeIn key={pillar.title} delay={i * 0.06}>
                    <SpotlightCard className="p-8 text-center">
                      <Icon className="mx-auto h-8 w-8 text-accent" />
                      <h3 className="mt-5 font-display text-3xl font-extrabold">{pillar.title}</h3>
                      <p className="mt-2 text-lg text-chrome">{pillar.text}</p>
                    </SpotlightCard>
                  </FadeIn>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
