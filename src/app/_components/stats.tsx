import { gambetta } from "@/assets/fonts";
import { BlurFade } from "@/components/blur-fade";
import NumberTicker from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section className="container mt-40 lg:mt-60">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <BlurFade inView delay={0.25} yOffset={10}>
          <div className="flex flex-row md:flex-col gap-4 justify-start md:justify-center items-center">
            <p
              className={cn(
                "whitespace-pre-wrap text-7xl md:text-8xl font-bold tracking-tighter text-foreground-normal",
                gambetta.className,
              )}>
              <NumberTicker value={80} />+
            </p>
            <p className="text-lg md:text-xl font-medium text-foreground">Successful Projects</p>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.5} yOffset={10}>
          <div className="flex flex-row md:flex-col gap-4 justify-start md:justify-center items-center">
            <p
              className={cn(
                "whitespace-pre-wrap text-7xl md:text-8xl font-bold tracking-tighter text-foreground-normal",
                gambetta.className,
              )}>
              <NumberTicker value={40} />+
            </p>
            <p className="text-lg md:text-xl font-medium text-foreground">Happy Clients</p>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.75} yOffset={10}>
          <div className="flex flex-row md:flex-col gap-4 justify-start md:justify-center items-center">
            <p
              className={cn(
                "whitespace-pre-wrap text-7xl md:text-8xl font-bold tracking-tighter text-foreground-normal",
                gambetta.className,
              )}>
              <NumberTicker value={4} />+
            </p>
            <p className="text-lg md:text-xl font-medium text-foreground">Years of Professionalism</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
