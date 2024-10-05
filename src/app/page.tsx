import { AboutUsSection } from "./_components/about-us-section";
import { HeroSection } from "./_components/hero-section";
import { Stats } from "./_components/stats";
import { TechnologiesSection } from "./_components/technologies-section";
import { ServiceSection } from "./_components/service-section";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnologiesSection />
      <AboutUsSection />
      <Stats />
      <ServiceSection />
    </>
  );
}
