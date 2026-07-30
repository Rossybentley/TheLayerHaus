import type { Variants } from "framer-motion";

export const menuContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const menuItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
    },
  },
};

export const goldLine: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
  },

  visible: {
    width: "180px",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
