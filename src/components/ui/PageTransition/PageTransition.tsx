import "./PageTransition.css";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      className="page-transition"
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -40,
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
