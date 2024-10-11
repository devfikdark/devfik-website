"use client";

import { motion, Variants } from "framer-motion";

/* eslint-disable id-length */
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
      transition={{
        delay: 0.02 + delay,
        duration,
        ease: "easeInOut",
      }}
      variants={combinedVariants}
      viewport={{ once: true, amount: 0.3 }}
      whileInView="visible">
      {children}
    </motion.div>
  );
}
