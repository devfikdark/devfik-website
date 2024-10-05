import React from "react";

import { gambetta } from "@/assets/fonts";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className }: HeadingProps) {
  return (
    <div
      className={cn(
        "text-3xl font-bold tracking-wide bg-gradient-to-b from-white to-card-foreground text-transparent bg-clip-text leading-normal pb-2",
        gambetta.className,
        className,
      )}>
      {children}
    </div>
  );
}
