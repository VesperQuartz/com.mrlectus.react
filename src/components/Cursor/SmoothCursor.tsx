import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePointerEffects } from "./usePointerEffects";

const INTERACTIVE_SELECTOR =
  'a[href], button:not([disabled]), [role="button"], input, textarea, select, [data-cursor="hover"]';

/**
 * Replaces the system cursor with a dot that tracks the pointer exactly and a
 * ring that trails behind it on a spring (the "gravity" feel). The ring grows
 * over interactive elements and the native cursor is hidden only while this is
 * mounted and running.
 */
export function SmoothCursor() {
  const active = usePointerEffects();

  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  // Latch visibility through a ref so mousemove does not trigger a re-render.
  const visibleRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring lags behind; the dot reads x/y directly so it stays glued to the pointer.
  const ringX = useSpring(x, { stiffness: 200, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 200, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!active) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      setHovering(
        target instanceof Element &&
          target.closest(INTERACTIVE_SELECTOR) !== null,
      );
    };

    const onLeaveWindow = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      root.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      visibleRef.current = false;
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 180ms ease" }}
    >
      {/* Trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute top-0 left-0"
      >
        <motion.div
          animate={{
            scale: pressed ? 0.75 : hovering ? 1.75 : 1,
            opacity: hovering ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 340, damping: 26 }}
          className="-mt-4 -ml-4 h-8 w-8 rounded-full border border-foreground"
        />
      </motion.div>

      {/* Dot */}
      <motion.div style={{ x, y }} className="absolute top-0 left-0">
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="-mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-foreground"
        />
      </motion.div>
    </div>
  );
}
