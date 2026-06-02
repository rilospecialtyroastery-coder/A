"use client"

import Image from "next/image"
import Link from "next/link"
import { Music2, MessageCircle } from "lucide-react"
import { useState } from "react"

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/collections/luxury-coffee-beans" },
  { label: "Boxes", href: "/collections/rilo-box" },
  { label: "Contact", href: "/contact" },
]

const legalLinks = [
  { label: "Terms of Service", href: "/policies/terms-of-service" },
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
  { label: "Shipping Policy", href: "/policies/shipping-policy" },
]

const paymentMethods = ["Visa", "Mastercard", "Apple Pay", "Google Pay"]

export function Footer() {
  const [email, setEmail] = useState("")

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEmail("")
  }

  return (
    <>
      <footer className="bg-[#F5F0DC] border-t border-[#D9D0B0]">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Col 1: Logo + tagline */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="inline-block">
                <Image src="/images/logo.png" alt="RILO Coffee" width={120} height={36} className="object-contain h-9 w-auto" />
              </Link>
              <p className="text-sm text-[#7A4040] leading-relaxed">
                Coffee worth coming back for. Roasted with obsession.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#4B010F] mb-4">Quick Links</h3>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-[#7A4040] hover:text-[#4B010F] transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Newsletter */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#4B010F] mb-4">Subscribe</h3>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 border border-[#D9D0B0] px-[14px] py-[10px] text-[14px] text-[#4B010F] placeholder-[#B08080] outline-none focus:border-[#4B010F] transition-colors min-w-0 bg-[#FFFCEE]"
                />
                <button type="submit" className="bg-[#4B010F] text-[#FFFCEE] px-5 py-[10px] text-[13px] font-semibold whitespace-nowrap hover:bg-[#3A000B] transition-colors duration-150">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Col 4: Social */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#4B010F] mb-4">Follow Us</h3>
              <div className="flex flex-col gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] text-[#7A4040] hover:text-[#4B010F] transition-colors duration-150">
                  <InstagramIcon size={18} /><span>Instagram</span>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] text-[#7A4040] hover:text-[#4B010F] transition-colors duration-150">
                  <Music2 size={18} /><span>TikTok</span>
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] text-[#7A4040] hover:text-[#4B010F] transition-colors duration-150">
                  <MessageCircle size={18} /><span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal links row */}
          <div className="border-t border-[#D9D0B0] pt-6 pb-2">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[12px] text-[#7A4040] hover:text-[#4B010F] underline underline-offset-2 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#7A4040] pt-4">
            <span>© {new Date().getFullYear()} RILO Coffee. All rights reserved.</span>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {paymentMethods.map((method) => (
                <span key={method} className="border border-[#D9D0B0] rounded px-2 py-0.5 text-[11px] text-[#7A4040] bg-[#FFFCEE]">
                  {method}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <span>🇦🇪</span>
              <select className="text-[13px] text-[#7A4040] bg-transparent border-none outline-none cursor-pointer" defaultValue="UAE">
                <option value="UAE">UAE · AED</option>
                <option value="KSA">KSA · SAR</option>
                <option value="KWT">Kuwait · KWD</option>
                <option value="QAT">Qatar · QAR</option>
                <option value="OMN">Oman · OMR</option>
                <option value="BHR">Bahrain · BHD</option>
              </select>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom burgundy bar */}
      <div className="w-full bg-[#4B010F] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-6 gap-y-1">
          {legalLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              <Link href={link.href} className="text-[11px] font-medium tracking-widest uppercase text-[#FFFCEE] opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </Link>
              {i < legalLinks.length - 1 && (
                <span className="text-[#FFFCEE] opacity-30 text-[10px]">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
