import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";

export function HeroSection() {
  return (
    <div className="min-h-[50vh] flex justify-center items-center container max-w-6xl mx-auto ">
      <BlurFade delay={0.25} yOffset={10}>
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-5xl md:text-8xl text-center">Our Work</Heading>
          <p className="text-center text-lg mt-4 tracking-wide">
            We have provided our services to different types of people with different type of ideas. <br /> Below are
            some of the best works we have done
          </p>
        </div>
      </BlurFade>
    </div>
  );
}
