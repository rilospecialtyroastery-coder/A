import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-[#e5e5e5]",
        "h-[60px] flex items-center justify-between px-6"
      )}
    >
      <a href="/">
        <Image
          src="/images/logo.png"
          alt="RSTR Coffee"
          width={120}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </a>
      <nav className="flex items-center gap-4">
        <a
          href="/account/login"
          className="text-sm text-black hover:underline cursor-pointer"
        >
          Log in
        </a>
        <button aria-label="Search" className="cursor-pointer hover:opacity-70">
          <Search size={18} />
        </button>
        <a
          href="/cart"
          className="relative flex items-center gap-1 text-sm hover:opacity-70"
        >
          <ShoppingCart size={18} />
          <span className="text-xs">(0)</span>
        </a>
      </nav>
    </header>
  );
}
