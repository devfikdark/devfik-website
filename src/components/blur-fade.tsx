"use client";

import { motion, Variants } from "framer-motion";

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
  xOffset?: number;
  yOffset?: number;
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
  blur = "6px",
}: BlurFadeProps) {
  const defaultVariants: Variants = {
    hidden: { x: xOffset, y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { x: 0, y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      variants={combinedVariants}>
      {children}
    </motion.div>
  );
}
