import { BlurFade } from "@/components/blur-fade";

export function AutoText() {
  return (
    <BlurFade delay={0.25} yOffset={10}>
      <section className="container max-w-6xl mx-auto mt-40 lg:mt-60">
        <h2 className="text-3xl text-foreground-normal">
          At Devfik, we believe the devil is in the details. Every solution is custom-built to meet your exact needs,
          ensuring your business thrives. Your success is our priority, which is why we focus on the small things that
          make a big difference. Choose Devfik for precision, innovation, and results that last.
        </h2>
      </section>
    </BlurFade>
  );
}
