"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export function ScheduleGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const registrationId = searchParams.get("registrationId");

  const allowed = Boolean(email || registrationId);

  useEffect(() => {
    if (!allowed) {
      router.replace("/register?step=schedule-info");
    }
  }, [allowed, router]);

  if (!allowed) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  return <>{children}</>;
}
