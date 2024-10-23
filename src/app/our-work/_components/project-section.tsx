import { MoveRight } from "lucide-react";
import { Fragment } from "react";

import { BlurFade } from "@/components/blur-fade";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Projects } from "@/lib/data";

export function ProjectSection() {
  return (
    <section className="container max-w-6xl mx-auto px-4 py-8 flex flex-col w-full gap-14 md:gap-32">
      {Projects.map((project, index) => (
        <Fragment key={index}>
          <BlurFade delay={0.25 + index * 0.01} yOffset={20}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
              <div className="w-full max-w-[180px] lg:max-w-[200px]">
                <div className="relative aspect-square bg-card p-4 flex items-center justify-center">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <div className="absolute right-0 top-0 h-4 w-4 bg-black" />
                    <div className="absolute right-[32px] top-0 h-4 w-8 bg-black" />
                    <div className="absolute right-4 top-3  h-4 w-4 bg-black" />
                  </div>
                  <Heading className="text-5xl lg:text-7xl transition-all duration-200 font-medium z-10 group-hover:text-primary">
                    {project.id}
                  </Heading>
                </div>
              </div>
              <div className="w-full md:flex-1">
                <h1 className="text-2xl md:text-3xl font-medium text-foreground-normal mb-4">{project.title}</h1>
                <p className="text-lg">{project.description}</p>
                <Button className="mt-12 group/button" variant="secondary">
                  Learn More
                  <MoveRight className="size-4 ml-2 transition-transform duration-300 ease-in-out group-hover/button:translate-x-1" />
                </Button>
              </div>
            </div>
          </BlurFade>
          {index !== Projects.length - 1 && (
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-2/3 mx-auto" />
          )}
        </Fragment>
      ))}
    </section>
  );
}
