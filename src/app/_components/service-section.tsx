import { Heading } from "@/components/ui/heading";
import React from "react";

export function ServiceSection() {
  return (
    <section className="container  mt-40 lg:mt-72">
      <Heading className="text-center text-6xl">Services we provide</Heading>
      <p className="text-center text-lg mt-4 tracking-wide">
        We provide the best solution for your next business needs. You name it we have it
      </p>
    </section>
  );
}
