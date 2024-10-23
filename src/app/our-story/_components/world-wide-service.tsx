"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

import { BlurFade } from "@/components/blur-fade";
import { Heading } from "@/components/ui/heading";

export function WorldWideService() {
  const [countries] = useState([
    "Bangladesh",
    "Germany",
    "USA",
    "Netherlands",
    "Thailand",
    "Singapore",
    "Indonesia",
    "Norway",
    "Vietnam",
    "Kosovo",
    "Lebanon",
    "Uzbekistan",
    "Malaysia",
  ]);

  return (
    <div className="mt-32 lg:mt-60 container mx-auto px-4">
      <BlurFade delay={0.25} yOffset={10}>
        <Heading className="text-center text-4xl md:text-6xl">Our Global Reach</Heading>
        <p className="text-center text-lg mt-4 tracking-wide max-w-4xl mx-auto">
          From Asia to Europe, our services span the globe. We're proud to deliver cutting-edge solutions to clients
          across continents, bridging distances with technology.
        </p>
      </BlurFade>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-semibold mb-4 text-foreground-normal">Countries We Serve</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {countries.map((country, index) => (
              <li key={index} className="text-md">
                {country}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="w-full max-w-[400px] aspect-square">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe>;
    let width = 0;
    let height = 0;

    const updateSize = () => {
      const container = canvasRef.current?.parentElement;

      if (container) {
        width = container.clientWidth;
        height = container.clientHeight;
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
        glowColor: [0.1, 0.1, 0.1],
        markers: [
          { location: [23.685, 90.3563], size: 0.1 }, // Bangladesh
          { location: [51.1657, 10.4515], size: 0.06 }, // Germany
          { location: [37.7595, -122.4367], size: 0.06 }, // USA
          { location: [52.1326, 5.2913], size: 0.06 }, // Netherlands
          { location: [15.87, 100.9925], size: 0.06 }, // Thailand
          { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
          { location: [0.7893, 113.9213], size: 0.06 }, // Indonesia
          { location: [64.9631, 9.0208], size: 0.06 }, // Norway
          { location: [14.0583, 108.2772], size: 0.06 }, // Vietnam
          { location: [41.6086, 21.7453], size: 0.06 }, // Kosovo
          { location: [33.8547, 35.8623], size: 0.06 }, // Lebanon
          { location: [41.3775, 64.5853], size: 0.06 }, // Uzbekistan
          { location: [4.2105, 101.9758], size: 0.06 }, // Malaysia
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.005;
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

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", maxWidth: "100%", display: "block" }} />;
};
