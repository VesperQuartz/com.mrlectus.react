import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { usePointerEffects } from "./usePointerEffects";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Pull distance as a fraction of the pointer offset from centre. */
  strength?: number;
  /** How far (px) beyond the element's own bounds it still attracts. */
  radius?: number;
}

/**
 * Pulls its child toward the pointer while it is nearby, then springs back.
 * Always renders the same element (even when inactive) so nothing remounts.
 */
export function Magnetic({
  children,
  className,
  strength = 0.28,
  radius = 60,
}: MagneticProps) {
  const active = usePointerEffects();
  const ref = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (!active) return;

    const element = ref.current;
    if (!element) return;

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = event.clientX - centerX;
      const offsetY = event.clientY - centerY;
      const distance = Math.hypot(offsetX, offsetY);
      const range = Math.max(rect.width, rect.height) / 2 + radius;

      if (distance < range) {
        x.set(offsetX * strength);
        y.set(offsetY * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [active, radius, strength, x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.span>
  );
}
