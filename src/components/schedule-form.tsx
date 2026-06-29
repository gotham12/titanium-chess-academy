"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { CAMP_SESSIONS } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const DAYS = [
  { id: "monday", label: "Mon" },
  { id: "tuesday", label: "Tue" },
  { id: "wednesday", label: "Wed" },
  { id: "thursday", label: "Thu" },
  { id: "friday", label: "Fri" },
  { id: "saturday", label: "Sat" },
  { id: "sunday", label: "Sun" },
] as const;

const TIMES = [
  { id: "morning", label: "Morning", sub: "8am – 12pm" },
  { id: "afternoon", label: "Afternoon", sub: "12pm – 5pm" },
  { id: "evening", label: "Evening", sub: "5pm – 8pm" },
  { id: "flexible", label: "Flexible", sub: "Any time" },
] as const;

const PROGRAMS = [
  { id: "lessons", label: "Lessons", sub: "$20/hr · weekly" },
  { id: "summer-camp-beginner", label: "Camp · Beginner", sub: "$200 / session" },
  { id: "summer-camp-advanced", label: "Camp · Advanced", sub: "$200 / session" },
  { id: "both-lessons-camp", label: "Lessons + Camp", sub: "Both programs" },
] as const;

const LEVELS = [
  { id: "brand-new", label: "Brand new" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
] as const;

type Step = 1 | 2 | 3;

export function ScheduleForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [registrationId] = useState(searchParams.get("registrationId") ?? "");
  const [program, setProgram] = useState<string>("");
  const [campSession, setCampSession] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");

  const showCampSessions = useMemo(
    () => program.includes("camp") || program === "both-lessons-camp",
    [program],
  );

  function toggleDay(day: string) {
    setPreferredDays((current) =>
      current.includes(day) ? current.filter((d) => d !== day) : [...current, day],
    );
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (step !== 3) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registrationId: registrationId || undefined,
          email,
          studentName,
          program,
          campSession: showCampSessions ? campSession : undefined,
          experienceLevel,
          preferredDays,
          preferredTime,
          notes: notes || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Could not save schedule");
        return;
      }
      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-[2rem] border border-accent/30 bg-surface/80 p-12 text-center backdrop-blur-md">
        <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
        <h2 className="mt-6 font-display text-5xl font-extrabold">Schedule saved</h2>
        <p className="mt-4 text-xl text-chrome">We&apos;ll email you to confirm.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton href="/">Home</MagneticButton>
          <MagneticButton href="/programs" variant="secondary">Programs</MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-[2rem] border border-border bg-surface/80 p-8 backdrop-blur-md md:p-10">
      <div
        className="mb-10 flex gap-3"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={3}
        aria-label={`Step ${step} of 3`}
      >
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={cn(
              "h-2 flex-1 rounded-full transition",
              step >= n ? "bg-accent" : "bg-border",
            )}
          />
        ))}
      </div>

      {error && (
        <p role="alert" className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
          {error}
        </p>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Who&apos;s playing?</h2>
          <label htmlFor="schedule-student-name" className="sr-only">Student name</label>
          <input
            id="schedule-student-name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student name"
            className="w-full rounded-xl border border-border bg-background/70 px-5 py-4 text-xl outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30"
          />
          <label htmlFor="schedule-email" className="sr-only">Email</label>
          <input
            id="schedule-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border border-border bg-background/70 px-5 py-4 text-xl outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30"
          />
          <div>
            <p className="mb-4 text-lg text-chrome">Experience level</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {LEVELS.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setExperienceLevel(level.id)}
                  aria-pressed={experienceLevel === level.id}
                  className={cn(
                    "rounded-xl border px-4 py-4 text-lg font-semibold transition",
                    experienceLevel === level.id
                      ? "border-accent bg-accent/15 text-accent"
                      : "border-border hover:border-accent/40",
                  )}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            disabled={!studentName || !emailValid || !experienceLevel}
            onClick={() => setStep(2)}
            className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-background disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Pick a program</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {PROGRAMS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setProgram(p.id)}
                className={cn(
                  "rounded-2xl border p-6 text-left transition",
                  program === p.id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/40",
                )}
              >
                <p className="font-display text-2xl font-bold">{p.label}</p>
                <p className="mt-1 text-chrome">{p.sub}</p>
              </button>
            ))}
          </div>
          {showCampSessions && (
            <div>
              <p className="mb-4 text-lg text-chrome">Camp session</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {CAMP_SESSIONS.map((s) => (
                  <button
                    key={s.dates}
                    type="button"
                    onClick={() => setCampSession(s.dates)}
                    className={cn(
                      "rounded-xl border px-4 py-4 text-left transition",
                      campSession === s.dates
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/40",
                    )}
                  >
                    <p className="text-sm text-accent">Session {s.status}</p>
                    <p className="font-display text-xl font-bold">{s.dates}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-4">
            <button type="button" onClick={() => setStep(1)} className="rounded-full border border-border px-6 py-3">
              ← Back
            </button>
            <button
              type="button"
              disabled={!program || (showCampSessions && !campSession)}
              onClick={() => setStep(3)}
              className="rounded-full bg-accent px-8 py-3 font-semibold text-background disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">When works best?</h2>
          <div>
            <p className="mb-4 text-lg text-chrome">Days available</p>
            <div className="flex flex-wrap gap-3">
              {DAYS.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => toggleDay(day.id)}
                  className={cn(
                    "h-14 w-14 rounded-full border text-lg font-bold transition",
                    preferredDays.includes(day.id)
                      ? "border-accent bg-accent text-background"
                      : "border-border hover:border-accent/40",
                  )}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg text-chrome">Preferred time</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {TIMES.map((time) => (
                <button
                  key={time.id}
                  type="button"
                  onClick={() => setPreferredTime(time.id)}
                  className={cn(
                    "rounded-xl border p-5 text-left transition",
                    preferredTime === time.id
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/40",
                  )}
                >
                  <p className="font-display text-xl font-bold">{time.label}</p>
                  <p className="text-chrome">{time.sub}</p>
                </button>
              ))}
            </div>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anything else? (optional)"
            rows={2}
            className="w-full rounded-xl border border-border bg-background/70 px-5 py-4 text-lg outline-none focus:border-accent/50"
          />
          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={() => setStep(2)} className="rounded-full border border-border px-6 py-3">
              ← Back
            </button>
            <button
              type="submit"
              disabled={submitting || preferredDays.length === 0 || !preferredTime}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-background disabled:opacity-40"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Submit Schedule
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
