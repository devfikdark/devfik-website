import { Dot } from "lucide-react";
import { Fragment } from "react";

import Marquee from "@/components/marquee";
import { BlurFade } from "@/components/blur-fade";

const Technologies = [
  "NextJS",
  "Vite",
  "VueJS",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "NodeJS",
  "AWS",
  "TailwindCSS",
  "Javascript",
  "Typescript",
  "NestJS",
  "Python",
  "Figma",
  "ExpressJS",
  "Socket.IO",
  "NuxtJS",
  "Ant Design",
  "Material UI",
  "Github CI/CD",
  "Ngnix",
  "Vercel",
  "Jotai",
  "Zustand",
  "ContextAPI",
];

export function TechnologiesSection() {
  return (
    <BlurFade inView delay={1} yOffset={10}>
      <div className="mt-24 py-2 bg-card">
        <Marquee pauseOnHover className="[--duration:35s]">
          {Technologies.map((el, index) => (
            <Fragment key={index}>
              <span className="text-lg text-foreground-normal">{el}</span>
              <Dot className="text-primary" />
            </Fragment>
          ))}
        </Marquee>
      </div>
    </BlurFade>
  );
}
