import Link from "next/link";

import { DotPattern } from "@/components/dot-patterns";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <DotPattern className="absolute top-0 left-0 w-full h-full opacity-10" />
      <div className="text-center z-10">
        <h2 className="text-3xl font-semibold mb-6">404 : Page Not Found</h2>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link passHref href="/">
          <Button size="lg" variant="secondary">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
