"use client";

import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import React, { useEffect, useRef } from "react";

export function WorldWideService() {
  const features = [
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <BlurFade delay={0.25} yOffset={10}>
        <Heading className="text-center text-4xl md:text-6xl">Our Global Reach</Heading>
        <p className="text-center text-lg mt-4 tracking-wide">
          From Bangladesh to Germany, our services span the globe. We're proud to deliver cutting-edge solutions to
          clients across continents, bridging distances with technology.
        </p>
      </BlurFade>

      <div className="relative ">
        <div className="grid grid-cols-1 ">
          <div className="w-full h-full">
            <SkeletonFour />
          </div>
        </div>
      </div>
    </div>
  );
}

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
