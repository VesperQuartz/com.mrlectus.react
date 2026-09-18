import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * True only when it is safe and useful to run pointer-driven effects:
 * a device with a precise pointer (mouse/trackpad) and no reduced-motion
 * preference. Touch devices and reduced-motion users get the plain site.
 */
export function usePointerEffects() {
  const reduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const sync = () => setFinePointer(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return finePointer && !reduceMotion;
}
