import { BlurFade } from "@/components/blur-fade";
import { OurStoryHeroSection } from "./_components/our-story-hero-section";
import { ContactUsCard } from "@/components/contact-us-card";
import { CheckIcon } from "lucide-react";
import { WorldWideService } from "./_components/world-wide-service";
import { Heading } from "@/components/ui/heading";

export default function OurStory() {
  return (
    <>
      <OurStoryHeroSection />
      <section className="container max-w-6xl mx-auto flex flex-col w-full gap-8">
        <BlurFade delay={0.25} yOffset={20}>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground-normal">Our Journey & Vision</h2>
        </BlurFade>

        <BlurFade delay={0.25} yOffset={20}>
          <p className="text-lg">
            Founded in 2020, devfik emerged from a shared vision to revolutionize the digital landscape. What began as a
            small team of passionate developers has grown into a dynamic force in the tech industry, driven by our
            commitment to innovation and excellence.
          </p>
          <p className="mt-4 text-lg">
            At devfik, we're not just building software; we're shaping the future of digital experiences. We envision a
            world where technology seamlessly enhances human potential, and we're committed to making that vision a
            reality, one project at a time.
          </p>
        </BlurFade>

        <WorldWideService />
      </section>
      <ContactUsCard />
    </>
  );
}
