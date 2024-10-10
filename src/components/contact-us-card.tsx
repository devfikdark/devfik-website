import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";

export function ContactUsCard() {
  return (
    <section className="container max-w-6xl mx-auto mt-40 lg:mt-72">
      <div className="p-16 rounded-2xl bg-card relative overflow-hidden">
        <div className="relative z-10">
          <Heading className="text-6xl text-center">Let&apos;s Build Something Extraordinary Together</Heading>
          <div className="mt-8 flex justify-center gap-4">
            <Button>Contact Us</Button>
            <Button variant="secondary">Schedule a meeting</Button>
          </div>
        </div>
        <div className="absolute inset-0">
          <StarsBackground />
          <ShootingStars />
        </div>
      </div>
    </section>
  );
}
