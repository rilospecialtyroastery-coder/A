import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[64px] flex items-center justify-between px-6 bg-[#FFFCEE] border-b border-[#D9D0B0]">
      {/* Logo */}
      <a href="/" className="flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="RILO Coffee"
          width={120}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="/collections/luxury-coffee-beans" className="text-[13px] font-semibold uppercase tracking-[0.07em] text-[#4B010F] opacity-80 hover:opacity-100 transition-opacity border-b-2 border-transparent hover:border-[#4B010F] pb-0.5">
          Shop
        </a>
        <a href="/collections/rilo-box" className="text-[13px] font-semibold uppercase tracking-[0.07em] text-[#4B010F] opacity-80 hover:opacity-100 transition-opacity border-b-2 border-transparent hover:border-[#4B010F] pb-0.5">
          Boxes
        </a>
        <a href="/pages/about" className="text-[13px] font-semibold uppercase tracking-[0.07em] text-[#4B010F] opacity-80 hover:opacity-100 transition-opacity border-b-2 border-transparent hover:border-[#4B010F] pb-0.5">
          About
        </a>
        <a href="/contact" className="text-[13px] font-semibold uppercase tracking-[0.07em] text-[#4B010F] opacity-80 hover:opacity-100 transition-opacity border-b-2 border-transparent hover:border-[#4B010F] pb-0.5">
          Contact
        </a>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4 text-[#4B010F]">
        <a href="/account/login" className="text-[13px] font-medium text-[#4B010F] opacity-80 hover:opacity-100 transition-opacity hidden md:block">
          Log in
        </a>
        <button aria-label="Search" className="hover:opacity-70 transition-opacity text-[#4B010F]">
          <Search size={18} />
        </button>
        <a href="/cart" className="relative flex items-center gap-1 hover:opacity-70 transition-opacity text-[#4B010F]">
          <ShoppingCart size={18} />
          <span className="text-xs">(0)</span>
        </a>
      </div>
    </header>
  );
}
