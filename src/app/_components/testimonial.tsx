import { Heading } from "@/components/ui/heading";
import { Testimonials } from "@/lib/data";

export function Testimonial() {
  return (
    <section className="container max-w-6xl mx-auto mt-40 lg:mt-72">
      <Heading className="text-center text-4xl md:text-6xl">How is our service?</Heading>
      <p className="text-center text-lg mt-4 tracking-wide">
        Don't take our words for it. Let's hear from our partners
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-4 lg:gap-x-6 space-y-4 lg:space-y-6 mt-20">
        {Testimonials.map((testimonial, index) => (
          <div className="p-4 break-inside-avoid rounded-xl bg-card" key={index}>
            <p className="text-foreground-normal">{testimonial.description}</p>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                {testimonial.image && (
                  <picture>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
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
        ))}
      </div>
    </section>
  );
}
