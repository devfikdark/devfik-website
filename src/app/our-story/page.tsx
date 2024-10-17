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
      <section className="container max-w-4xl mx-auto flex flex-col w-full gap-12">
        <BlurFade delay={0.25} yOffset={20}>
          <h2 className="text-3xl font-bold text-foreground-normal">Our Journey & Vision</h2>
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

        <BlurFade delay={0.25} yOffset={20}>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="mb-4">At devfik, our strength lies in our diverse and talented team. We bring together - </p>
          <ul className="list-none list-inside mt-2 space-y-2">
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" /> Visionary developers who push the boundaries of what's possible in
              code
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" /> Creative designers who craft stunning, user-centric interfaces
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" /> Strategic thinkers who align technology with business goals
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" /> Project managers who ensure smooth execution and delivery
            </li>
          </ul>
        </BlurFade>

        <BlurFade delay={0.25} yOffset={20}>
          <h2 className="text-3xl font-bold mb-4 text-foreground-normal">Our Expertise</h2>
          <p className="mb-4">With deep expertise across multiple domains, we specialize in -</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" />
              Cutting-edge web development
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" />
              Intuitive mobile app creation
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" />
              Engaging UI/UX design
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" />
              Efficient business process automation
            </li>
            <li className="flex items-center">
              <CheckIcon className="size-4 mr-2" />
              Scalable cloud solutions
            </li>
          </ul>
        </BlurFade>
      </section>
      <ContactUsCard />
    </>
  );
}
