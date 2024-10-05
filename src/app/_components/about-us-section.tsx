import { BlurFade } from "@/components/blur-fade";
import Heading from "@/components/ui/heading";

export function AboutUsSection() {
  return (
    <BlurFade inView delay={0.25} yOffset={10}>
      <section className="container mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <Heading className="text-6xl">About Us</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
      </section>
    </BlurFade>
  );
}
