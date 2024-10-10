import { AboutUsSection } from "./_components/about-us-section";
import { HeroSection } from "./_components/hero-section";
import { Stats } from "./_components/stats";
import { TechnologiesSection } from "./_components/technologies-section";
import { ServiceSection } from "./_components/service-section";
import { AutoText } from "./_components/auto-text";
import { HowWeWork } from "./_components/how-we-work";
import { OurClients } from "./_components/our-clients";
import { Testimonial } from "./_components/testimonial";
import { ContactUsCard } from "@/components/contact-us-card";

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
      <OurClients />
      <Testimonial />
      <ContactUsCard />
    </>
  );
}
