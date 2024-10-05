import Image from "next/image";

import wavy from "@/assets/images/wavy.svg";
import { BlurFade } from "@/components/blur-fade";
import { FlipWords } from "@/components/flip-word";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const words = ["Shape The Future", "Drive Innovation", "Empower Your Business", "Simplify Complexity"];

export function HeroSection() {
  return (
    <div className="container pt-20 lg:pt-0 min-h-screen lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-3 items-center lg:justify-between">
      <div className="lg:col-span-2">
        <BlurFade inView delay={0.25} yOffset={10}>
          <Heading className="text-6xl font-bold">
            Creating Digital Solutions <br /> That
            <FlipWords words={words} />
          </Heading>
        </BlurFade>

        <BlurFade inView delay={0.5} yOffset={10}>
          <p className="text-xl font-normal mt-4">Innovative solutions, tailored for your success</p>
        </BlurFade>

        <BlurFade inView delay={0.75} yOffset={10}>
          <Button className="mt-8" size="lg">
            Get In Touch
          </Button>
        </BlurFade>
      </div>

      <div className="flex justify-center lg:justify-start">
        <BlurFade inView delay={1} yOffset={10}>
          <Image alt="wavy" className="max-w-full h-auto" height={500} src={wavy} width={500} />
        </BlurFade>
      </div>
    </div>
  );
}
