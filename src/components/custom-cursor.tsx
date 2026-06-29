"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function PawnIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c-2.2 0-4 1.5-4 3.5 0 1.1.5 2.1 1.3 2.8-.9.6-1.8 1.5-2.3 2.7-.6 1.4-.5 3 .2 4.3.4.8 1 1.4 1.6 1.9-.3.4-.5.9-.5 1.4 0 1.3 1.5 2.4 3.7 2.4s3.7-1.1 3.7-2.4c0-.5-.2-1-.5-1.4.6-.5 1.2-1.1 1.6-1.9.7-1.3.8-2.9.2-4.3-.5-1.2-1.4-2.1-2.3-2.7.8-.7 1.3-1.7 1.3-2.8C16 3.5 14.2 2 12 2z" />
      <rect x="5" y="26" width="14" height="3" rx="1" />
      <rect x="3" y="29" width="18" height="3" rx="1.5" />
    </svg>
  );
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const pawnX = useSpring(cursorX, { stiffness: 320, damping: 26, mass: 0.35 });
  const pawnY = useSpring(cursorY, { stiffness: 320, damping: 26, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setVisible(true);
    document.documentElement.classList.add("custom-cursor-active");

    function onMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    }

    function onDown() {
      setClicking(true);
    }

    function onUp() {
      setClicking(false);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button'], input, select, textarea, label");
      setHovering(Boolean(interactive));
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.55)]"
      style={{ x: pawnX, y: pawnY, translateX: "-50%", translateY: "-100%" }}
    >
      <motion.div
        animate={{
          scale: clicking ? 0.82 : hovering ? 1.18 : 1,
          rotate: clicking ? -8 : hovering ? 6 : 0,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      >
        <PawnIcon className="h-5 w-5" />
      </motion.div>
    </motion.div>
  );
}
