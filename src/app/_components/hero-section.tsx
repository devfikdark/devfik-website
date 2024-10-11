import { BlurFade } from "@/components/blur-fade";
import { DotPattern } from "@/components/dot-patterns";
import { FlipWords } from "@/components/flip-word";
import InteractiveOrangeParticleDevfik from "@/components/interactive-logo";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

const words = ["Shape The Future", "Drive Innovation", "Empower Business", "Simplify Complexity"];

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="container pt-20 lg:pt-0 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        <div className="w-full lg:w-1/2 z-10 mb-8 lg:mb-0">
          <BlurFade delay={0.25} yOffset={10}>
            <Heading className="text-4xl md:text-5xl font-bold">
              Creating Digital Solutions <br /> That
              <FlipWords words={words} className="text-foreground" />
            </Heading>
          </BlurFade>

          <BlurFade delay={0.5} yOffset={10}>
            <p className="text-lg md:text-xl font-normal mt-6 text-muted-foreground">
              Innovative solutions, tailored for your success
            </p>
          </BlurFade>

          <BlurFade delay={0.75} yOffset={10}>
            <Button className="mt-8 text-sm" size="lg">
              Get In Touch
            </Button>
          </BlurFade>
        </div>

        <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[60vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
          <div className="w-full h-full max-w-[500px] max-h-[500px] relative z-10">
            <InteractiveOrangeParticleDevfik />
          </div>
        </div>
      </div>

      <DotPattern
        className={cn(
          "absolute inset-0 opacity-50 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}
