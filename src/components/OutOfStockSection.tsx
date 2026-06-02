"use client"

import Image from "next/image"

const outOfStockProducts = [
  { name: 'African Beauty', price: 'Dhs. 119.00', image: '/images/african-beauty.png' },
  { name: 'Awesome Berry', price: 'Dhs. 95.00', image: '/images/awesome-berry.png' },
  { name: 'Cafeina (Tobaco)', price: 'Dhs. 105.00', image: '/images/cafeina.png' },
  { name: 'Chocolate For Days', price: 'Dhs. 85.00', image: '/images/chocolate-for-days.png' },
  { name: 'Colombia Supremo', price: 'Dhs. 119.00', image: '/images/colombia-supremo.png' },
  { name: 'Huay Krai Village (Single Origin)', price: 'Dhs. 129.00', image: '/images/huay-krai.png' },
  { name: 'LALESA (Natural)', price: 'Dhs. 120.00', image: '/images/african-beauty.png' },
  { name: 'Milkman', price: 'Dhs. 89.00', image: '/images/milkman.png' },
  { name: 'Mothership Blend', price: 'Dhs. 105.00', image: '/images/sleepyhead.png' },
  { name: 'MR. Rum Raisin', price: 'Dhs. 129.00', image: '/images/mr-rum-raisin.png' },
]

interface OutOfStockProduct {
  name: string
  price: string
  image: string
}

function ProductCard({ product }: { product: OutOfStockProduct }) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-square bg-[#F0EAD6] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <span className="absolute top-2 left-2 bg-[#cc0000] text-white text-xs font-semibold px-2 py-0.5 uppercase tracking-wide">
          Sold Out
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-sm font-medium text-[#4B010F] leading-snug">{product.name}</p>
        <p className="text-sm text-[#7A4040]">{product.price}</p>
        <button
          type="button"
          className="mt-2 w-full border border-[#4B010F] bg-[#FFFCEE] text-[#4B010F] text-xs font-semibold uppercase tracking-wider py-2 px-4 hover:bg-[#4B010F] hover:text-[#FFFCEE] transition-colors duration-200"
        >
          Notify Me
        </button>
      </div>
    </div>
  )
}

export function OutOfStockSection() {
  return (
    <section className="bg-[#F5F0DC] px-6 pt-16 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold uppercase text-[#4B010F] tracking-tight">
            OUT OF STOCK
          </h2>
          <p className="mt-2 text-sm italic text-[#7A4040]">
            SOLD OUT. IT&apos;S OKAY, MAYBE THEY WILL BE RESTOCKED. MAYBEEEE
          </p>
          <p className="mt-1 text-sm text-[#7A4040]">
            They loved it a little too much. Restocking soon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {outOfStockProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
