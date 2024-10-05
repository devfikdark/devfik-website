import { gambetta } from "@/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="container">
      <h1 className={cn("text-8xl font-bold", gambetta.className)}>Creating Motherfucking Website Since 2017</h1>
    </div>
  );
}
