import { gambetta } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div className={cn("text-3xl font-bold tracking-wide bg-gradient-to-b from-white to-card-foreground text-transparent bg-clip-text leading-normal pb-2", gambetta.className, className)}>
      {children}
    </div>
  );
};

export default Heading;
