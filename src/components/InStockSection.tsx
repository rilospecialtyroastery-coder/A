"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  slug: string;
  badge?: string;
}

const inStockProducts: Product[] = [
  { id: "1", name: "Drip Bag Set of 12", price: "Dhs. 195.00", image: "/images/drip-bag-set.png", slug: "drip-bag-set" },
  { id: "2", name: "Sample Coffee Box", price: "Dhs. 185.00", originalPrice: "Dhs. 200.00", image: "/images/sample-box.png", slug: "sample-box", badge: "Sale" },
  { id: "3", name: "ROCKY ROAD", price: "Dhs. 88.00", image: "/images/rocky-road.jpg", slug: "rocky-road" },
  { id: "4", name: "TIRAMISU CRISIS", price: "Dhs. 110.00", image: "/images/tiramisu-crisis.png", slug: "tiramisu-crisis" },
  { id: "5", name: "Honduras Moke Whiskey Aged", price: "Dhs. 169.00", image: "/images/honduras.jpg", slug: "honduras-whiskey" },
  { id: "6", name: "Chapata (Orange Wine)", price: "Dhs. 105.00", image: "/images/chapata.jpg", slug: "chapata" },
  { id: "7", name: "DECAF Sleepy Dreams", price: "Dhs. 115.00", image: "/images/decaf-sleepy-dreams.png", slug: "decaf-sleepy-dreams" },
  { id: "8", name: "RICH UNCLE", price: "Dhs. 109.00", image: "/images/rich-uncle.png", slug: "rich-uncle" },
  { id: "9", name: "THE DEALER", price: "Dhs. 99.00", image: "/images/the-dealer.png", slug: "the-dealer" },
  { id: "10", name: "MAIN CHARACTER", price: "Dhs. 119.00", image: "/images/main-character.png", slug: "main-character" },
  { id: "11", name: "ZERO REGRETS (Fruit & Tea Infusion)", price: "Dhs. 69.00", image: "/images/zero-regrets.png", slug: "zero-regrets" },
  { id: "12", name: "RSTR GIFT CARD", price: "Dhs. 100.00+", image: "/images/gift-card.png", slug: "gift-card" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={cn(
        "group flex flex-col bg-white border border-[#e5e5e5] transition-shadow duration-200",
        "hover:shadow-md"
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-square bg-[#f5f5f5] overflow-hidden">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 bg-black text-white text-[11px] font-semibold px-2 py-0.5 uppercase tracking-wide">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-3 gap-1">
        <p className="text-[14px] font-semibold text-black leading-snug line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[14px] text-black">{product.price}</span>
          {product.originalPrice && (
            <span className="text-[14px] text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          type="button"
          className={cn(
            "mt-auto w-full bg-black text-white text-[13px] font-medium py-[10px] px-3 mt-3",
            "transition-opacity duration-150 hover:opacity-80 cursor-pointer"
          )}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export function InStockSection() {
  return (
    <section className="bg-white py-12">
      {/* Promo banner */}
      <div className="bg-[#f5f5f5] text-center text-[12px] font-medium text-black py-2 px-6 mb-8 tracking-wide">
        MORE IS COMING ON THE WAYYY. INCLUDING THE SAMPLE BOX!
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-black mb-8 lowercase">in stock!</h2>

        {/* Grid — scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:overflow-x-visible sm:mx-0 sm:px-0">
          <div
            className={cn(
              "grid gap-4",
              "grid-cols-[repeat(6,minmax(160px,1fr))]",
              "sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            )}
            style={{ minWidth: "640px" }}
          >
            {inStockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
