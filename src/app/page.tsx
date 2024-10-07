import { AboutUsSection } from "./_components/about-us-section";
import { HeroSection } from "./_components/hero-section";
import { Stats } from "./_components/stats";
import { TechnologiesSection } from "./_components/technologies-section";
import { ServiceSection } from "./_components/service-section";
import { AutoText } from "./_components/auto-text";
import { HowWeWork } from "./_components/how-we-work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologiesSection />
      <AboutUsSection />
      <Stats />
      <ServiceSection />
      <AutoText />
      <HowWeWork />
    </>
  );
}
