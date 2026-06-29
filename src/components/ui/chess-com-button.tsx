"use client";

import { ExternalLink } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ChessComButton({
  href,
  username,
  className,
}: {
  href: string;
  username: string;
  className?: string;
}) {
  return (
    <MagneticButton href={href} variant="secondary" external className={className}>
      <span className="inline-flex items-center gap-2">
        Chess.com / {username}
        <ExternalLink className="h-4 w-4" />
      </span>
    </MagneticButton>
  );
}
