import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto space-y-8 text-center">
          <h1 className="font-extrabold tracking-tight text-7xl lg:text-9xl">
            404
          </h1>
          <p className="text-3xl font-bold tracking-tight md:text-4xl">
            Something's missing.
          </p>
          <p className="text-lg font-light ">Sorry, we can't find that page.</p>
          <Link href="/" className={cn(buttonVariants())}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
