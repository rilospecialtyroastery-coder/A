"use client"

import Image from "next/image"

const partners = [
  { name: 'Partner 1', logo: '/images/partner-1.png' },
  { name: 'Partner 2', logo: '/images/partner-2.png' },
  { name: 'Partner 3', logo: '/images/partner-3.png' },
  { name: 'Nana Coffee Roasters', logo: '/images/partner-nana.png' },
  { name: 'SCC', logo: '/images/partner-scc.png' },
  { name: "Father's Coffee", logo: '/images/partner-fathers.png' },
  { name: 'Sarnies', logo: '/images/partner-sarnies.png' },
]

export function BrandPartnersSection() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-black tracking-tight">
            WE GOT THEM
          </h2>
          <p className="mt-2 text-sm text-[#888]">Our roasting partners</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-full"
            >
              <div className="relative h-[60px] w-full max-w-[120px] grayscale hover:grayscale-0 transition-all duration-200">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
