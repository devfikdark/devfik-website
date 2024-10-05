"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";

/* eslint-disable */
interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { x?: number; y?: number };
    visible: { x?: number; y?: number };
  };
  duration?: number;
  delay?: number;
  xOffset?: number; // Added for horizontal movement
  yOffset?: number;
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  xOffset = 0,
  yOffset = 0,
  inView = false,
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { x: xOffset, y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { x: 0, y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        className={className}
        exit="hidden"
        initial="hidden"
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        variants={combinedVariants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
