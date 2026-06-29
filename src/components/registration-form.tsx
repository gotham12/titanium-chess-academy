"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { CONTACT, LESSON_OPTIONS, PROMO } from "@/data/site-content";
import { MagneticButton } from "@/components/ui/magnetic-button";

type FormState = "idle" | "submitting" | "success";

export function RegistrationForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const inquiry = String(data.get("inquiry") ?? "");
    const promo = String(data.get("promo") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Titanium Chess Academy Registration - ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Lesson Option: ${inquiry}`,
        `Promo Code: ${promo || "None"}`,
        "",
        "Message:",
        message || "N/A",
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => setState("success"), 600);
  }

  if (state === "success") {
    return (
      <div className="rounded-[2rem] border border-gold/30 bg-surface/80 p-10 text-center backdrop-blur-md">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mt-6 font-display text-3xl">Registration started</h2>
        <p className="mt-4 text-muted">
          Your email client should open with your details pre-filled. After submitting,
          please complete the schedule preference Google Form so we can find dates and
          times that work best.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <MagneticButton href={CONTACT.googleForm} variant="promo" external>
            Open Google Form
          </MagneticButton>
          <MagneticButton href="/" variant="secondary">
            Back to Home
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
        <p className="text-xs uppercase tracking-[0.28em] text-gold">Registration</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Enroll with Titanium</h1>
        <p className="mt-4 text-muted">
          Use promo code <span className="font-semibold text-promo">{PROMO.code}</span> for{" "}
          {PROMO.discount} off by {PROMO.deadline}.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <div>
          <label htmlFor="inquiry" className="mb-2 block text-sm text-muted">
            Lesson Options
          </label>
          <select
            id="inquiry"
            name="inquiry"
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-gold/50"
          >
            <option value="" disabled>
              Select an option
            </option>
            {LESSON_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <Field label="Promo Code" name="promo" placeholder="CHESS" />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-gold/50"
          placeholder="Tell us about the student's experience level, preferred schedule, or any questions."
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-background transition hover:bg-gold-bright disabled:opacity-70 md:w-auto"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Opening email...
          </>
        ) : (
          "Submit Registration"
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
        className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-gold/50"
      />
    </div>
  );
}
