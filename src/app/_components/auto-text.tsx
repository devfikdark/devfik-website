import { TextGenerateEffect } from "@/components/text-generate-effect";
import React from "react";

export function AutoText() {
  return (
    <section className="container mt-40 lg:mt-60">
      <TextGenerateEffect
        duration={2}
        filter={false}
        words="At Devfik, we believe the devil is in the details. Every solution is custom-built to meet your exact needs, ensuring your business thrives. Your success is our priority, which is why we focus on the small things that make a big difference. Choose Devfik for precision, innovation, and results that last."
      />
    </section>
  );
}
