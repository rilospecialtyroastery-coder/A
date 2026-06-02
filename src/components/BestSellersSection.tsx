'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BestSellerProduct {
  name: string;
  tagline: string;
  price: string;
  image: string;
  slug: string;
}

const bestSellers: BestSellerProduct[] = [
  {
    name: 'Sleepyhead',
    tagline: 'Rich enough to wake you up. Sweet enough to make you stay in bed...',
    price: 'Dhs. 105.00',
    image: '/images/sleepyhead.png',
    slug: 'sleepyhead',
  },
  {
    name: 'TIRAMISU CRISIS',
    tagline: 'Dessert in a cup. Amaretto sweetness, toffee warmth and black cherry...',
    price: 'Dhs. 110.00',
    image: '/images/tiramisu-crisis-2.png',
    slug: 'tiramisu-crisis',
  },
  {
    name: 'MR. RUM RAISIN',
    tagline: 'Seductively rich and indulgently smooth, because some cups deserve...',
    price: 'Dhs. 129.00',
    image: '/images/mr-rum-raisin.png',
    slug: 'mr-rum-raisin',
  },
  {
    name: 'CAFEINA (TOBACO)',
    tagline: 'Some cups play it safe. This one never did.',
    price: 'Dhs. 105.00',
    image: '/images/cafeina.png',
    slug: 'cafeina-tobaco',
  },
  {
    name: 'Honduras Whiskey Aged',
    tagline: "Some coffees are made. This one was aged. There's a difference.",
    price: 'Dhs. 169.00',
    image: '/images/honduras-whiskey.png',
    slug: 'honduras-whiskey-aged',
  },
  {
    name: 'MILK MAN',
    tagline: 'Rich, creamy and dangerously comforting. The coffee equivalent...',
    price: 'Dhs. 89.00',
    image: '/images/milkman.png',
    slug: 'milk-man',
  },
];

function BestSellerCard({ product }: { product: BestSellerProduct }) {
  return (
    <div className="flex-none w-72 md:w-80 snap-start">
      <div className="flex flex-col h-full">
        {/* Image container */}
        <div
          className="relative w-full rounded-sm overflow-hidden"
          style={{ aspectRatio: '3/4', backgroundColor: '#F0EAD6' }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 288px, 320px"
            className="object-contain"
          />
        </div>

        {/* Card content */}
        <div className="pt-4 flex flex-col gap-1 flex-1">
          <h3
            className="font-bold uppercase tracking-wide leading-tight"
            style={{ fontSize: '18px', color: '#4B010F' }}
          >
            {product.name}
          </h3>
          <p
            className="italic leading-snug"
            style={{ fontSize: '14px', color: '#7A4040' }}
          >
            {product.tagline}
          </p>
          <p
            className="font-bold mt-1"
            style={{ fontSize: '16px', color: '#4B010F' }}
          >
            {product.price}
          </p>
          <button
            className="mt-3 w-full py-2.5 px-4 font-semibold text-sm uppercase tracking-wider transition-opacity hover:opacity-80 active:opacity-70"
            style={{ backgroundColor: '#4B010F', color: '#FFFCEE' }}
            onClick={() => {
              // Cart integration hook
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function BestSellersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 320 + 24; // card width + gap
    container.scrollBy({
      left: direction === 'right' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full bg-[#FFFCEE]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <h2
            className="font-bold uppercase"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#4B010F', letterSpacing: '0.02em' }}
          >
            OUR BEST SELLERS
          </h2>
          <p
            className="mt-2 italic"
            style={{ fontSize: '18px', color: '#7A4040' }}
          >
            We&apos;re not here to eat spiders!
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFCEE] border border-[#D9D0B0] shadow-sm hover:bg-[#F0EAD6] transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-[#4B010F]" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {bestSellers.map((product) => (
              <BestSellerCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
