"use client";

import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function WorldWideService() {
  return (
    <div className="mt-32 lg:mt-60 max-w-6xl mx-auto">
      <BlurFade delay={0.25} yOffset={10}>
        <Heading className="text-center text-4xl md:text-6xl">Our Global Reach</Heading>
        <p className="text-center text-lg mt-4 tracking-wide max-w-4xl mx-auto">
          From Bangladesh to Germany, our services span the globe. We're proud to deliver cutting-edge solutions to
          clients across continents, bridging distances with technology.
        </p>
      </BlurFade>

      <div className="relative ">
        <div className="w-full h-full">
          <div className="h-60 md:h-[400px] lg:h-[600px] flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute inset-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 600;
    let height = 600;
    let globe: ReturnType<typeof createGlobe>;

    const updateSize = () => {
      if (containerRef.current) {
        width = containerRef.current.clientWidth;
        height = containerRef.current.clientHeight;
      }
    };

    const renderGlobe = () => {
      if (!canvasRef.current) return;

      updateSize();

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: height * 2,
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
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    };

    renderGlobe();

    const handleResize = () => {
      if (globe) {
        globe.destroy();
      }
      renderGlobe();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (globe) {
        globe.destroy();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("w-full h-full", className)}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
