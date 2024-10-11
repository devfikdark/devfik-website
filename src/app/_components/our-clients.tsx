import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";

export function OurClients() {
  return (
    <section className="container max-w-6xl mx-auto mt-40 lg:mt-72">
      <BlurFade delay={0.25} yOffset={10}>
        <Heading className="text-center text-4xl md:text-6xl">Partners we worked with</Heading>
        <p className="text-center text-lg mt-4 tracking-wide">
          We have worked with a wide range of clients, from startups to large corporations.
        </p>
      </BlurFade>
      <BlurFade delay={0.5} yOffset={10}>
        <div className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                <picture>
                  <img
                    alt={`client-${index}`}
                    className="w-full h-auto filter grayscale transition-all duration-300 group-hover:grayscale-0"
                    height={100}
                    src={`/images/clients-logo/${index}.png`}
                    width={100}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
