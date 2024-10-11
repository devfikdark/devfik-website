import React from "react";

import { cn } from "@/lib/utils";
import { gambetta } from "@/lib/fonts";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <div
      className={cn(
        "text-3xl font-bold tracking-wide bg-gradient-to-b from-white/90 to-card-foreground/50 text-transparent bg-clip-text leading-normal pb-2",
        gambetta.className,
        className,
      )}>
      {children}
    </div>
  );
}
