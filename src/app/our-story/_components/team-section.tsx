import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Zubayer Himel",
      role: "Co-Founder",
      image: "/images/zubayer.jpg",
      bio: "Passionate about creating innovative solutions that make a difference.",
    },
    {
      name: "Zinnatul Islam",
      role: "Co-Founder",
      image: "/images/zinnatul.jpeg",
      bio: "Bringing years of expertise in building scalable applications.",
    },
  ];

  return (
    <section className="container max-w-6xl mx-auto mt-32 lg:mt-60">
      <BlurFade delay={0.25} yOffset={20}>
        <Heading className="text-center text-4xl md:text-6xl mb-8">The Minds Behind Devfik</Heading>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Meet the passionate minds behind our success. We're a dedicated team committed to revolutionizing digital
          experiences through innovative solutions and cutting-edge technology.
        </p>
      </BlurFade>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <BlurFade key={member.name} delay={0.25 + index * 0.1} yOffset={20}>
              <div className="group relative overflow-hidden rounded-2xl bg-gray-900/5 p-8 transition-all duration-500 hover:bg-gray-900/10">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <picture>
                    <img
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0 group-hover:duration-[1500ms]"
                      src={member.image}
                    />
                  </picture>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-foreground-normal">{member.name}</h3>
                  <p>{member.role}</p>
                  <p className="mt-2 text-sm">{member.bio}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
