"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 280, damping: 28, mass: 0.4 });
  const ringY = useSpring(cursorY, { stiffness: 280, damping: 28, mass: 0.4 });

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
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            scale: clicking ? 0.75 : hovering ? 1.35 : 1,
            rotate: hovering ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative h-3 w-3 rounded-sm bg-accent shadow-[0_0_12px_rgba(74,159,212,0.8)]"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{
            width: hovering ? 52 : clicking ? 36 : 44,
            height: hovering ? 52 : clicking ? 36 : 44,
            opacity: hovering ? 0.9 : 0.55,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="rounded-full border-2 border-accent/70"
        />
      </motion.div>
    </>
  );
}
