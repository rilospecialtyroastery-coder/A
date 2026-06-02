'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Box {
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const boxes: Box[] = [
  {
    name: 'V60 Box',
    tagline: 'كل اللي تحتاجه تبدأ رحلتك مع القهوة المفلترة — مختار بعناية.',
    price: 'Dhs. 190.00',
    originalPrice: 'Dhs. 205.00',
    image: '/images/sample-box.png',
    slug: 'v60-box',
    featured: true,
  },
  {
    name: 'RILO BOX',
    tagline: 'كولكشن كامل من أفضل حبوب RILO في صندوق واحد.',
    price: 'Dhs. 165.00',
    originalPrice: 'Dhs. 210.00',
    image: '/images/drip-bag-set.png',
    slug: 'rilo-box',
  },
  {
    name: 'RILO Signature Box',
    tagline: 'اختيار مميز يعكس هوية RILO — للي يعرف قيمة الكوب الصح.',
    price: 'Dhs. 180.00',
    originalPrice: 'Dhs. 200.00',
    image: '/images/gift-card.png',
    slug: 'coming-soon',
  },
  {
    name: 'Fruity Bomb Box',
    tagline: 'للي يحب القهوة الفاكهية — انفجار نكهات في كل شربة.',
    price: 'Dhs. 170.00',
    originalPrice: 'Dhs. 190.00',
    image: '/images/zero-regrets.png',
    slug: 'fruity-flavor-box',
  },
  {
    name: 'Espresso Box',
    tagline: 'قوة الإسبريسو بأرقى الحبوب المختارة — مضغوط وغني.',
    price: 'Dhs. 185.00',
    originalPrice: 'Dhs. 200.00',
    image: '/images/rocky-road.jpg',
    slug: 'espresso-box',
  },
  {
    name: 'RILO Experience Box',
    tagline: 'رحلة كاملة في عالم القهوة — أفضل تجربة نقدّمها.',
    price: 'Dhs. 220.00',
    originalPrice: 'Dhs. 270.00',
    image: '/images/tiramisu-crisis.png',
    slug: 'best-seller-box',
  },
];

function BoxCard({ box }: { box: Box }) {
  return (
    <div className={`flex-none snap-start ${box.featured ? 'w-80 md:w-96' : 'w-72 md:w-80'}`}>
      <a href={`/products/${box.slug}`} className="flex flex-col h-full group">
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: box.featured ? '3/4' : '4/5',
            backgroundColor: '#F0EAD6',
            border: box.featured ? '2px solid #4B010F' : '1px solid #D9D0B0',
          }}
        >
          {box.featured && (
            <span
              className="absolute top-3 left-3 z-10 text-[11px] font-bold uppercase tracking-widest px-2 py-1"
              style={{ backgroundColor: '#4B010F', color: '#FFFCEE' }}
            >
              ⭐ مميز
            </span>
          )}
          {box.originalPrice && (
            <span
              className="absolute top-3 right-3 z-10 text-[11px] font-bold uppercase tracking-wider px-2 py-1"
              style={{ backgroundColor: '#FFFCEE', color: '#4B010F', border: '1px solid #4B010F' }}
            >
              Sale
            </span>
          )}
          <Image
            src={box.image}
            alt={box.name}
            fill
            sizes="(max-width: 768px) 288px, 384px"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03] p-4"
          />
        </div>

        <div className="pt-4 flex flex-col gap-1 flex-1">
          <h3
            className="font-bold uppercase tracking-wide leading-tight"
            style={{ fontSize: box.featured ? '20px' : '16px', color: '#4B010F' }}
          >
            {box.name}
          </h3>
          <p className="leading-snug" style={{ fontSize: '13px', color: '#7A4040' }}>
            {box.tagline}
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-bold" style={{ fontSize: '16px', color: '#4B010F' }}>
              {box.price}
            </span>
            {box.originalPrice && (
              <span className="line-through" style={{ fontSize: '13px', color: '#B08080' }}>
                {box.originalPrice}
              </span>
            )}
          </div>
          <button
            className="mt-3 w-full py-2.5 px-4 font-semibold text-sm uppercase tracking-wider transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#4B010F', color: '#FFFCEE' }}
          >
            {box.featured ? 'اطلب الآن' : 'Add to Cart'}
          </button>
        </div>
      </a>
    </div>
  );
}

export function BestSellersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: direction === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#F5F0DC]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2
              className="font-black uppercase"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#4B010F', letterSpacing: '-0.02em' }}
            >
              البوكسات
            </h2>
            <p className="mt-2" style={{ fontSize: '16px', color: '#7A4040' }}>
              ابدأ رحلتك — كل بوكس مختار بعناية لتجربة لا تُنسى.
            </p>
          </div>
          <a
            href="/collections/rilo-box"
            className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wider transition-colors hover:opacity-70"
            style={{ color: '#4B010F' }}
          >
            شوف كل البوكسات
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFCEE] border border-[#D9D0B0] shadow-sm hover:bg-[#F0EAD6] transition-colors hidden md:flex"
            aria-label="السابق"
          >
            <ChevronLeft className="w-5 h-5 text-[#4B010F]" />
          </button>

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
            {boxes.map((box) => (
              <BoxCard key={box.slug} box={box} />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFCEE] border border-[#D9D0B0] shadow-sm hover:bg-[#F0EAD6] transition-colors hidden md:flex"
            aria-label="التالي"
          >
            <ChevronRight className="w-5 h-5 text-[#4B010F]" />
          </button>
        </div>

        {/* CTA button bottom */}
        <div className="mt-10 text-center">
          <a
            href="/collections/rilo-box"
            className="inline-flex items-center gap-2 px-8 py-3 font-bold text-sm uppercase tracking-wider transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#4B010F', color: '#FFFCEE' }}
          >
            شوف جميع البوكسات
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
