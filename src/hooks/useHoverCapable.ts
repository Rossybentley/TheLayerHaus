import { useEffect, useState } from "react";

const getInitialHoverCapable = () => {
  if (typeof window === "undefined") return true; // SSR-safe fallback
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

const useHoverCapable = () => {
  const [canHover, setCanHover] = useState(getInitialHoverCapable);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return canHover;
};

export default useHoverCapable;
