import Image from "next/image";

import { BlurFade } from "@/components/blur-fade";
import { DotPattern } from "@/components/dot-patterns";
import { FlipWords } from "@/components/flip-word";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import InteractiveOrangeParticleDevfik from "@/components/interactive-logo";

const words = ["Shape The Future", "Drive Innovation", "Empower Business", "Simplify Complexity"];

export function HeroSection() {
  return (
    <div className="container pt-20 lg:pt-0 min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-between relative">
      <div className="w-full lg:w-1/2 z-10 mb-8 lg:mb-0">
        <BlurFade delay={0.25} yOffset={10}>
          <Heading className="text-3xl md:text-5xl font-bold">
            Creating Digital Solutions <br /> That
            <FlipWords words={words} />
          </Heading>
        </BlurFade>

        <BlurFade delay={0.5} yOffset={10}>
          <p className="text-md md:text-xl font-normal mt-4">Innovative solutions, tailored for your success</p>
        </BlurFade>

        <BlurFade delay={0.75} yOffset={10}>
          <Button className="mt-8" size="lg">
            Get In Touch
          </Button>
        </BlurFade>
      </div>

      <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[60vh] flex items-center justify-center">
        <div className="w-full h-full max-w-[500px] max-h-[500px]">
          <InteractiveOrangeParticleDevfik />
        </div>
      </div>

      <DotPattern
        className={cn("absolute inset-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]")}
      />
    </div>
  );
}
