import wavy from "@/assets/images/wavy.svg";
import { FlipWords } from "@/components/flip-word";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Image from "next/image";

const words = ["Shape The Future", "Drive Innovation", "Empower Your Business", "Simplify Complexity"];

const HeroSection = () => {
  return (
    <div className="container pt-20 lg:pt-0 min-h-screen lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-3 items-center lg:justify-between">
      <div className="lg:col-span-2">
        <Heading className="text-6xl font-bold">
          Creating Digital Solutions <br /> That
          <FlipWords words={words} />
        </Heading>

        <p className="text-xl font-normal mt-4">Innovative solutions, tailored for your success</p>

        <Button size="lg" className="mt-8">
          Get In Touch
        </Button>
      </div>

      <div className="flex justify-center lg:justify-start">
        <Image src={wavy} alt="wavy" width={500} height={500} className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
