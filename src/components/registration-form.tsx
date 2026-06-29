"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { LESSON_OPTIONS, PROMO } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";

type FormState = "idle" | "submitting" | "success" | "error";

export function RegistrationForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  const scheduleUrl = `/schedule?email=${encodeURIComponent(savedEmail)}&registrationId=${registrationId}`;

  useEffect(() => {
    if (state !== "success" || !savedEmail) return;
    const timer = setTimeout(() => {
      router.push(scheduleUrl);
    }, 2200);
    return () => clearTimeout(timer);
  }, [state, savedEmail, registrationId, router, scheduleUrl]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      studentName: String(data.get("studentName") ?? ""),
      parentName: String(data.get("parentName") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      program: String(data.get("program") ?? ""),
      promoCode: String(data.get("promoCode") ?? "") || undefined,
      message: String(data.get("message") ?? "") || undefined,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        const details = json.details?.fieldErrors as Record<string, string[]> | undefined;
        const firstFieldError = details ? Object.values(details).flat()[0] : undefined;
        setErrorMsg(firstFieldError ?? json.error ?? "Something went wrong");
        setState("error");
        return;
      }

      setRegistrationId(json.id);
      setSavedEmail(payload.email);
      setState("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-[2rem] border border-accent/30 bg-surface/80 p-10 text-center backdrop-blur-md">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h2 className="mt-6 font-display text-4xl font-extrabold">Step 1 complete</h2>
        <p className="mt-4 text-xl text-chrome">
          Taking you to step 2 — pick your schedule…
        </p>
        <div className="mt-6 flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-accent" />
        </div>
        <div className="mt-8">
          <MagneticButton href={scheduleUrl} variant="promo">
            Continue now
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-border bg-surface/80 p-8 backdrop-blur-md md:p-10"
    >
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.28em] text-accent">Step 1 · Register</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Your details</h2>
        <p className="mt-4 text-lg text-chrome">
          Code <span className="font-bold text-promo">{PROMO.code}</span> — {PROMO.discount} off
        </p>
      </div>

      {state === "error" && (
        <p role="alert" className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Student Name" name="studentName" required />
        <Field label="Parent / Guardian Name" name="parentName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <div className="md:col-span-2">
          <label htmlFor="program" className="mb-2 block text-sm text-muted">
            Program
          </label>
          <select
            id="program"
            name="program"
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 text-lg outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/30"
          >
            <option value="" disabled>
              Select program
            </option>
            {LESSON_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Field label="Promo Code" name="promoCode" placeholder="CHESS" />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Notes (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-lg outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/30"
          placeholder="Experience level, questions..."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-background transition hover:bg-accent-glow disabled:opacity-70 md:w-auto"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Continue to Schedule →"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/70 px-4 py-3.5 text-lg outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
