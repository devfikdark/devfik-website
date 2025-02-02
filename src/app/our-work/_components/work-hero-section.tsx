import { AnimatedGridPattern } from "@/components/animated-grid-pattern";
import { BlurFade } from "@/components/blur-fade";
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
      <AnimatedGridPattern
        className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 ")}
        duration={3}
        maxOpacity={0.1}
        numSquares={30}
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
