import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      className={cn(
        "bg-[#F5F0DC] min-h-[500px]",
        "flex flex-col-reverse md:flex-row items-center",
        "px-6 py-10 md:px-6 md:py-[60px] gap-8 md:gap-0"
      )}
    >
      <div className="flex-1 md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left md:pr-12">
        <h1
          className="font-extrabold leading-[1.1] tracking-[-0.02em] text-[#4B010F]"
          style={{ fontSize: "clamp(32px, 4.5vw, 68px)" }}
        >
          You don&apos;t need to get your life together. Just your coffee order.
        </h1>
        <p className="mt-4 text-lg text-[#7A4040]">
          A coffee that you will keep coming for
        </p>
        <a
          href="/collections/all"
          className={cn(
            "mt-8 inline-block bg-[#4B010F] text-[#FFFCEE]",
            "px-8 py-3 text-sm font-semibold rounded-[4px]",
            "hover:opacity-80 transition-opacity cursor-pointer"
          )}
        >
          Shop Now
        </a>
      </div>
      <div className="relative w-full md:w-[40%] h-[280px] md:h-[500px]">
        <Image
          src="/images/hero-banner.png"
          alt="RSTR Coffee hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
