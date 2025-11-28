'use client'

import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Navbar } from '@/components/beauty-hub/Navbar'
import { Footer } from '@/components/beauty-hub/Footer'
import '@/app/beauty-hub/beauty-hub.css'

export default function BeautyHubAboutPage() {
  return (
    <div className="min-h-screen bg-[#4B0D20] beauty-hub-page" data-page="beauty-hub-about">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">We’re Here for Your Skin & Your Questions.</h1>
          <div className="mt-6 rounded-md overflow-hidden">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px]">
              <Image
                src="/images/beautyhub-project/contact.jpg"
                alt="Dang Beauty About Hero"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
          <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">Whether it’s product help, order support, or collaboration inquiries — don’t hesitate to reach out.</p>
        </div>
      </main>

      <section className="bg-[#F8F3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
            <div>
              <div className="text-[#6B7280] text-sm">Get Started</div>
              <h2 className="mt-2 text-[#2D2D2D] text-3xl sm:text-4xl font-bold tracking-tight">Get in touch with us. We&apos;re here to assist you.</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-[#6B7280] text-sm">Your Name</label>
                  <input className="mt-3 w-full rounded-md bg-white/90 border border-[#E5E1DC] px-3 py-2 text-[#2D2D2D] placeholder-[#9CA3AF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[#6B7280] text-sm">Email Address</label>
                  <input type="email" className="mt-3 w-full rounded-md bg-white/90 border border-[#E5E1DC] px-3 py-2 text-[#2D2D2D] placeholder-[#9CA3AF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-[#6B7280] text-sm">Phone Number (optional)</label>
                  <input className="mt-3 w-full rounded-md bg-white/90 border border-[#E5E1DC] px-3 py-2 text-[#2D2D2D] placeholder-[#9CA3AF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="mt-10">
                <label className="block text-[#6B7280] text-sm">Message</label>
                <textarea rows={4} className="mt-3 w-full rounded-md bg-white/90 border border-[#E5E1DC] px-3 py-2 text-[#2D2D2D] placeholder-[#9CA3AF] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#722F37]/20 focus:border-[#722F37]" placeholder="Write your message here..." />
              </div>
              <div className="mt-10 border-t border-[#E5E1DC]"></div>
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#722F37] text-white text-sm sm:text-base font-medium">
                  Leave us a Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4"><path d="M5 12h14" strokeWidth="2" strokeLinecap="round"/><path d="M13 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white shadow-sm border border-[#E5E1DC] flex items-center justify-center text-[#2D2D2D]">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white shadow-sm border border-[#E5E1DC] flex items-center justify-center text-[#2D2D2D]">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="h-10 w-10 rounded-full bg-white shadow-sm border border-[#E5E1DC] flex items-center justify-center text-[#2D2D2D]">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden">
            <div className="bg-[#F5F1E8]">
              <div className="px-6 sm:px-8 py-10 sm:py-12" style={{backgroundImage:'radial-gradient(120px 120px at 10% 20%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.0) 60%), radial-gradient(120px 120px at 80% 70%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.0) 60%)'}}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-[#6B7280] text-sm">Contact Info</div>
                    <div className="mt-3 text-[#2D2D2D] text-xl sm:text-2xl font-bold">We are always happy to assist you</div>
                  </div>
                  <div>
                    <div className="text-[#2D2D2D] text-sm font-semibold">Email Address</div>
                    <div className="mt-2 h-0.5 w-6 bg-[#2D2D2D]"></div>
                    <div className="mt-2 text-[#2D2D2D] font-semibold">help@info.com</div>
                    <div className="mt-3 text-[#6B7280] text-sm">Assistance hours: Monday - Friday 6 am to 8 pm EST</div>
                  </div>
                  <div>
                    <div className="text-[#2D2D2D] text-sm font-semibold">Number</div>
                    <div className="mt-2 h-0.5 w-6 bg-[#2D2D2D]"></div>
                    <div className="mt-2 text-[#2D2D2D] font-semibold">(808) 998-34256</div>
                    <div className="mt-3 text-[#6B7280] text-sm">Assistance hours: Monday - Friday 6 am to 8 pm EST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
