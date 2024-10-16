import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";
import { Testimonials } from "@/lib/data";

export function Testimonial() {
  return (
    <section className="container max-w-6xl mx-auto mt-32 lg:mt-60">
      <BlurFade delay={0.25} yOffset={10}>
        <Heading className="text-center text-4xl md:text-6xl">How is our service?</Heading>
        <p className="text-center text-lg mt-4 tracking-wide">
          Don't take our words for it. Let's hear from our partners
        </p>
      </BlurFade>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-4 lg:gap-x-6 space-y-4 lg:space-y-6 mt-20">
        {Testimonials.map((testimonial, index) => (
          <BlurFade key={index} delay={0.5 + index * 0.02} yOffset={10}>
            <div className="p-4 break-inside-avoid rounded-xl bg-card">
              <p className="text-foreground-normal">{testimonial.description}</p>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  {testimonial.image && (
                    <picture>
                      <img
                        alt={testimonial.name}
                        className="rounded-full object-center"
                        height={40}
                        src={testimonial.image}
                        width={40}
                      />
                    </picture>
                  )}
                  <div className="">
                    <p className="text-sm text-primary font-medium">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
