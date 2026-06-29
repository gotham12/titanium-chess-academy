"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Target, Users } from "lucide-react";
import { ASSETS, COACH, PROGRAMS, REVIEWS } from "@/data/site-content";
import { FadeIn } from "@/components/ui/motion-primitives";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { EnrollmentStepper } from "@/components/ui/enrollment-stepper";

const pillars = [
  { icon: Target, title: "Structured growth", text: "Clear goals every session." },
  { icon: Users, title: "Small groups", text: "Personal attention, real feedback." },
  { icon: Crown, title: "Competitive edge", text: "Tournament-tested coaching." },
];

export function HomeExtendedSections() {
  return (
    <>
      <section className="border-t border-border bg-navy-deep/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Why us"
            title="Built for serious growth"
            description="Small classes. Tournament-tested coaches. A clear path from beginner to competitive."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.06}>
                <SpotlightCard className="p-8 text-center">
                  <pillar.icon className="mx-auto h-8 w-8 text-accent" />
                  <h3 className="mt-5 font-display text-2xl font-extrabold">{pillar.title}</h3>
                  <p className="mt-2 text-lg text-chrome">{pillar.text}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Programs" title="Two ways to train" align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PROGRAMS.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.08}>
                <SpotlightCard className="flex h-full flex-col p-8 md:p-10">
                  <p className="text-sm uppercase tracking-[0.28em] text-accent">{program.cadence}</p>
                  <h3 className="mt-3 font-display text-4xl font-extrabold">{program.title}</h3>
                  <p className="mt-2 text-2xl font-bold text-accent">{program.price}</p>
                  <p className="mt-4 text-lg text-chrome">{program.description}</p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-chrome">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton href={program.href} variant="secondary" className="mt-8 w-fit">
                    Learn more
                  </MagneticButton>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={COACH.image}
                  alt={COACH.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-sm uppercase tracking-[0.28em] text-accent">Lead Coach</p>
              <h2 className="mt-4 font-display text-5xl font-extrabold md:text-6xl">{COACH.name}</h2>
              <p className="mt-4 text-xl text-chrome">
                {COACH.rating} USCF · {COACH.experience} · {COACH.goal}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-chrome">{COACH.bio[0]}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton href="/coaches/advaith">Meet Advaith</MagneticButton>
                <MagneticButton href="/register" variant="secondary">Start enrollment</MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow="Students" title="What families say" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.06}>
                <SpotlightCard className="flex h-full flex-col p-8">
                  <p className="flex-1 text-lg leading-relaxed text-chrome">&ldquo;{review.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                      <Image src={review.image} alt="" fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted">Age {review.age}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-accent transition hover:text-accent-glow"
            >
              All reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-navy-deep/40 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Enrollment"
            title="One straight path"
            description="Register first, pick your schedule, then we confirm by email. No shortcuts — just three clear steps."
            align="center"
          />
          <FadeIn className="mt-12">
            <EnrollmentStepper currentStep={1} />
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12 text-center">
            <MagneticButton href="/register" variant="promo">
              Start Step 1 — Register
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
