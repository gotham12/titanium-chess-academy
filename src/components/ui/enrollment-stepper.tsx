import { cn } from "@/lib/utils";

const STEPS = [
  { id: 1, label: "Register", description: "Student & program info" },
  { id: 2, label: "Schedule", description: "Days & times" },
  { id: 3, label: "Confirm", description: "We email you" },
] as const;

type EnrollmentStepperProps = {
  currentStep: 1 | 2 | 3;
  className?: string;
};

export function EnrollmentStepper({ currentStep, className }: EnrollmentStepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-start gap-2 md:gap-4">
        {STEPS.map((step, index) => (
          <div key={step.id} className="flex flex-1 flex-col items-center text-center">
            <div className="flex w-full items-center">
              {index > 0 ? (
                <div
                  className={cn(
                    "h-0.5 flex-1 transition-colors",
                    currentStep > index ? "bg-accent" : "bg-border",
                  )}
                />
              ) : (
                <div className="flex-1" />
              )}
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-sm font-bold transition-colors",
                  currentStep >= step.id
                    ? "border-accent bg-accent text-background"
                    : "border-border bg-surface text-muted",
                )}
              >
                {step.id}
              </div>
              {index < STEPS.length - 1 ? (
                <div
                  className={cn(
                    "h-0.5 flex-1 transition-colors",
                    currentStep > step.id ? "bg-accent" : "bg-border",
                  )}
                />
              ) : (
                <div className="flex-1" />
              )}
            </div>
            <p
              className={cn(
                "mt-3 font-display text-sm font-bold md:text-base",
                currentStep >= step.id ? "text-foreground" : "text-muted",
              )}
            >
              {step.label}
            </p>
            <p className="mt-1 hidden text-xs text-chrome sm:block">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
