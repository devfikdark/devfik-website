import Image from "next/image";

import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";
import aboutUs from "@/assets/images/about-us.png";

export function AboutUsSection() {
  return (
    <section className="container mt-40 lg:mt-72">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:justify-between">
        <div className="flex flex-col justify-center">
          <BlurFade delay={0.25} yOffset={10}>
            <Heading className="text-6xl">About us</Heading>
          </BlurFade>
          <BlurFade delay={0.5} yOffset={10}>
            <p className="text-xl mt-6 tracking-wide">
              At Devfik, we build <span className="text-foreground-normal">bespoke digital solutions</span> that elevate
              your business. From <span className="text-foreground-normal">sleek websites</span> to powerful custom
              software and <span className="text-foreground-normal">seamless mobile experiences</span>, we deliver
              innovation that drives results. Our expert team ensures every solution is tailored to your vision,{" "}
              <span className="text-foreground-normal">empowering you to lead in a competitive world</span>.
            </p>
          </BlurFade>
        </div>
        <div className="flex justify-center lg:justify-end">
          <BlurFade delay={1} yOffset={10}>
            <Image alt="about-us" className="max-w-full" height={400} src={aboutUs} width={400} />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
