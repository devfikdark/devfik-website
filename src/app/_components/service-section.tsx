import { BlurFade } from "@/components/blur-fade";
import { MagicCard } from "@/components/magic-card";
import { Heading } from "@/components/ui/heading";
import { Services } from "@/lib/data";

export function ServiceSection() {
  return (
    <section className="container max-w-6xl mx-auto mt-32 lg:mt-60">
      <BlurFade delay={0.25} yOffset={10}>
        <Heading className="text-center text-4xl md:text-6xl">Services we provide</Heading>
        <p className="text-center text-lg mt-4 tracking-wide">
          We provide the best solution for your next business needs. You name it we have it
        </p>
      </BlurFade>

      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Services.map((service, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.02} yOffset={10}>
              <MagicCard
                className="p-4 transition-shadow duration-300 flex flex-col h-full group"
                gradientColor="#522E14">
                <div className="relative h-48 mb-4 overflow-hidden">
                  <picture>
                    <img
                      alt={service.title}
                      className="rounded-lg w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:filter-none"
                      src={service.image}
                    />
                  </picture>
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground-normal">{service.title}</h3>
                <p className="text-md flex-grow">{service.description}</p>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
