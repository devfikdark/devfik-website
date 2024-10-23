import { ContactForm } from "./_components/contact-form";
import { CalSchedule } from "./_components/cal-schedule";

import { AnimatedGridPattern } from "@/components/animated-grid-pattern";
import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContactUs() {
  return (
    <>
      <div className="min-h-[70vh] flex justify-center items-center container max-w-6xl mx-auto relative">
        <BlurFade delay={0.25} yOffset={10}>
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-5xl md:text-8xl text-center">Contact Us</Heading>
            <p className="text-center text-lg mt-4 tracking-wide">
              We're here to help and answer any question you might have. <br />
              We look forward to hearing from you and helping with your inquiries.
            </p>
          </div>
        </BlurFade>
        <AnimatedGridPattern
          className={cn("[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 ")}
          duration={3}
          maxOpacity={0.1}
          numSquares={30}
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <Tabs className="w-full" defaultValue="schedule">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="schedule">Schedule a meeting</TabsTrigger>
              <TabsTrigger value="form">I prefer email</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="schedule">
            <CalSchedule />
          </TabsContent>
          <TabsContent value="form">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
