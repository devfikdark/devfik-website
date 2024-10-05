import { Dot } from "lucide-react";
import { Fragment } from "react";

import Marquee from "@/components/marquee";

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

export default function TechnologiesSection() {
  return (
    <div className="mt-24 py-2 bg-card">
      <Marquee pauseOnHover className="[--duration:35s]">
        {Technologies.map((el, index) => (
          <Fragment key={index}>
            <span className="text-lg">{el}</span>
            <Dot className="text-primary" />
          </Fragment>
        ))}
      </Marquee>
    </div>
  );
}
