import { BlurFade } from "@/components/blur-fade";
import { DotPattern } from "@/components/dot-patterns";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

export function WorkHeroSection() {
  return (
    <div className="min-h-[70vh] flex justify-center items-center container max-w-6xl mx-auto relative">
      <BlurFade delay={0.25} yOffset={10}>
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-5xl md:text-8xl text-center">Our Work</Heading>
          <p className="text-center text-lg mt-4 tracking-wide">
            We have provided our services to different types of people with different type of ideas. <br /> Below are
            some of the best works we have done
          </p>
        </div>
      </BlurFade>
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-50 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
