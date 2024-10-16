"use client";

import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";

export function AboutUsSection() {
  return (
    <section className="container max-w-6xl mx-auto mt-32 lg:mt-60 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-card/10 rounded-3xl -z-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:items-center p-8 lg:p-12">
        <div>
          <BlurFade delay={0.25} yOffset={10}>
            <Heading className="text-center lg:text-left text-4xl md:text-6xl mb-6">About us</Heading>
          </BlurFade>
          <BlurFade delay={0.5} yOffset={10}>
            <p className="text-xl tracking-wide mb-8">
              At devfik, we build <span className="text-foreground-normal">bespoke digital solutions</span> that elevate
              your business. From <span className="text-foreground-normal">sleek websites</span> to powerful custom
              software and <span className="text-foreground-normal">seamless mobile experiences</span>, we deliver
              innovation that drives results. Our expert team ensures every solution is tailored to your vision,{" "}
              <span className="text-foreground-normal">empowering you to lead in a competitive world</span>.
            </p>
          </BlurFade>
        </div>
        <div className="flex justify-center lg:justify-end">
          <BlurFade delay={0.5} yOffset={10}>
            <div className="relative">
              <picture>
                <img
                  alt="about-us"
                  className="rounded-2xl shadow-2xl object-cover"
                  height={500}
                  src="/images/about-us.png"
                  width={500}
                />
              </picture>
              <div className="absolute -bottom-6 -left-6 bg-primary text-foreground-normal p-4 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">98%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
