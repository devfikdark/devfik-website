import { Metadata } from "next";
import { ProjectSection } from "./_components/project-section";
import { WorkHeroSection } from "./_components/work-hero-section";
import { ContactUsCard } from "@/components/contact-us-card";

export const metadata: Metadata = {
  title: "Our Work",
};

export default function OurWork() {
  return (
    <>
      <WorkHeroSection />
      <ProjectSection />
      <ContactUsCard />
    </>
  );
}
