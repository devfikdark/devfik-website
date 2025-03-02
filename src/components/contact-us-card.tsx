import Link from "next/link";

import { BlurFade } from "./blur-fade";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";

export function ContactUsCard() {
  return (
    <BlurFade delay={0.25} yOffset={10}>
      <section className="container max-w-6xl mx-auto mt-32 lg:mt-60">
        <div className="p-4 sm:p-8 md:p-20 rounded-2xl bg-card relative overflow-hidden">
          <div className="relative z-10">
            <Heading className="text-4xl md:text-6xl text-center break-words">
              Let&apos;s Build Something Extraordinary Together
            </Heading>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild>
                <Link href="/contact-us">Schedule a meeting</Link>
              </Button>
              <Button asChild variant="secondary">
                <a href="mailto:support@devfik.com">Send email</a>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0">
            <StarsBackground />
            <ShootingStars />
          </div>
        </div>
      </section>
    </BlurFade>
  );
}
