"use client";

import {
  AfricanFoodHeaderNav,
  AfricanFoodNewsletter,
  AfricanFoodFooter,
  AfricanFoodSupportSection,
} from "@/components/african-food-store";
import { ArrowRight, Plus, X } from "lucide-react";
import { useState } from "react";

export default function AfricanFoodStorePage() {
  return (
    <div className="min-h-screen bg-white">
      <AfricanFoodHeaderNav />

      <AfricanFoodSupportSection />

      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Return Policy</h2>
              <p className="mt-3 text-sm sm:text-base text-black/70 max-w-3xl">Explore our hassle-free return policy designed to ensure your satisfaction with every purchase.</p>
            </div>
            <div className="flex items-start lg:items-center">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors text-sm font-medium">Read Return Policy <ArrowRight className="h-4 w-4" /> </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/20 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/20">
              <div className="px-0 sm:px-6 py-4">
                <div className="text-base font-semibold">Eligibility</div>
                <p className="mt-2 text-sm text-black/70">Items must be unused, with tags attached, and returned within 30 days of delivery.</p>
              </div>
              <div className="px-0 sm:px-6 py-4">
                <div className="text-base font-semibold">Process</div>
                <p className="mt-2 text-sm text-black/70">Initiate returns through our <a href="#" className="underline">Return Center</a> for a smooth and efficient process.</p>
              </div>
              <div className="px-0 sm:px-6 py-4">
                <div className="text-base font-semibold">Refund</div>
                <p className="mt-2 text-sm text-black/70">Expect a refund to your original payment method within 7–10 business days.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-start gap-6 sm:gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Cancellation Policy</h2>
              <p className="mt-3 text-sm sm:text-base text-black/70 max-w-3xl">Familiarize yourself with our cancellation policy to make changes to your order with ease.</p>
            </div>
            <div className="flex items-start lg:items-center">
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors text-sm font-medium">Read Cancellation Policy <ArrowRight className="h-4 w-4" /> </a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/20 p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/20">
              <div className="px-0 sm:px-6 py-4">
                <div className="text-base font-semibold">Cancellation Window</div>
                <p className="mt-2 text-sm text-black/70">Orders can be canceled within 24 hours of placement for a full refund.</p>
              </div>
              <div className="px-0 sm:px-6 py-4">
                <div className="text-base font-semibold">Cancellation Process</div>
                <p className="mt-2 text-sm text-black/70">Visit our Order Management section to cancel your order effortlessly.</p>
              </div>
              <div className="px-0 sm:px-6 py-4">
                <div className="text-base font-semibold">Refund Timeline</div>
                <p className="mt-2 text-sm text-black/70">Refunds for canceled orders are processed within 5–7 business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <header className="mb-8 sm:mb-10">
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Questions? We have answers.</h2>
              <span className="text-xs sm:text-sm font-semibold text-black/50 uppercase">FAQ</span>
            </div>
            <p className="mt-3 text-sm sm:text-base text-black/70 max-w-3xl">Our FAQs cover a spectrum of topics to ensure you have the information you need for a seamless shopping experience.</p>
          </header>

          <FAQGridFour />
        </div>
      </section>

      <AfricanFoodNewsletter />

      <AfricanFoodFooter />
    </div>
  );
}

function FAQGrid(): JSX.Element {
  const items: { q: string; a: string }[] = [
    { q: "Can I modify my order after placing it?", a: "Orders can be updated within a short window after placement. Visit Order Management to adjust items or shipping details." },
    { q: "How do I initiate a return?", a: "Start a return through the Return Center. Follow the steps to select items, choose a reason, and print your label." },
    { q: "How can I unsubscribe from the newsletter?", a: "Open any newsletter email and click Unsubscribe at the bottom, or manage preferences in your account settings." },
    { q: "Do you offer exchanges for products?", a: "Yes. If stock is available, you can exchange instead of refunding during the return flow." },
    { q: "Are there any additional fees for returns?", a: "Most returns are free. Some oversized items may carry a small handling fee, shown during the return flow." },
    { q: "How do I create an account on Revamp?", a: "Click Sign Up at the top-right and follow the prompts to verify your email and set a password." },
    { q: "Can I change my account information?", a: "Yes. Go to Account > Profile to update your name, email, password, and saved addresses." },
    { q: "Are my personal details secure on Revamp?", a: "We use industry-standard encryption and never share your details with third parties without consent." },
    { q: "What payment methods do you accept?", a: "We accept major cards, Apple Pay, Google Pay, and selected local methods depending on your region." },
    { q: "How can I track my order?", a: "Open Orders in your account to see live tracking. You’ll also receive email updates." },
    { q: "What is your shipping policy?", a: "Standard shipping arrives within 3–7 business days. Expedited options are available at checkout." },
  ]

  const expanded = 1

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        {items.slice(0, 4).map((it) => (
          <Collapsed key={it.q} title={it.q} />
        ))}
      </div>

      <div className="order-first lg:order-none">
        <div className="rounded-xl border border-black/20 bg-white shadow-sm">
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg sm:text-xl font-semibold">{items[expanded].q}</h3>
              <button className="p-2 rounded hover:bg-black/5" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-sm text-black/70">{items[expanded].a}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {items.slice(4, 8).map((it) => (
          <Collapsed key={it.q} title={it.q} />
        ))}
      </div>

      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {items.slice(8).map((it) => (
          <Collapsed key={it.q} title={it.q} />
        ))}
      </div>
    </div>
  )
}

function Collapsed({ title }: { title: string }): JSX.Element {
  return (
    <button className="w-full rounded-xl border border-black/20 bg-white text-left px-4 py-4 flex items-center justify-between hover:bg-black/5 transition-colors">
      <span className="text-sm sm:text-base font-medium text-black/80">{title}</span>
      <Plus className="h-4 w-4 text-black/70" />
    </button>
  )
}

function FAQGridFour(): JSX.Element {
  const items: { q: string; a: string }[] = [
    { q: "Can I modify my order after placing it?", a: "Orders can be updated within a short window after placement. Visit Order Management to adjust items or shipping details." },
    { q: "How do I initiate a return?", a: "Start a return through the Return Center. Follow the steps to select items, choose a reason, and print your label." },
    { q: "How can I unsubscribe from the newsletter?", a: "Open any newsletter email and click Unsubscribe at the bottom, or manage preferences in your account settings." },
    { q: "Do you offer exchanges for products?", a: "Yes. If stock is available, you can exchange instead of refunding during the return flow." },
    { q: "Are there any additional fees for returns?", a: "Most returns are free. Some oversized items may carry a small handling fee, shown during the return flow." },
    { q: "How do I create an account on Revamp?", a: "Click Sign Up at the top-right and follow the prompts to verify your email and set a password." },
    { q: "Can I change my account information?", a: "Yes. Go to Account > Profile to update your name, email, password, and saved addresses." },
    { q: "Are my personal details secure on Revamp?", a: "We use industry-standard encryption and never share your details with third parties without consent." },
    { q: "What payment methods do you accept?", a: "We accept major cards, Apple Pay, Google Pay, and selected local methods depending on your region." },
    { q: "How can I track my order?", a: "Open Orders in your account to see live tracking. You’ll also receive email updates." },
    { q: "What is your shipping policy?", a: "Standard shipping arrives within 3–7 business days. Expedited options are available at checkout." },
  ]

  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <div key={it.q} className="w-full">
          {open === i ? (
            <div className="rounded-xl border border-black/20 bg-white shadow-sm">
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold">{it.q}</h3>
                  <button className="p-2 rounded hover:bg-black/5" aria-label="Close" onClick={() => setOpen(null)}>
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 text-sm text-black/70">{it.a}</p>
              </div>
            </div>
          ) : (
            <button
              className="w-full rounded-xl border border-black/20 bg-white text-left px-4 py-4 flex items-center justify-between hover:bg-black/5 transition-colors"
              onClick={() => setOpen(i)}
              aria-expanded={open === i}
            >
              <span className="text-sm sm:text-base font-medium text-black/80">{it.q}</span>
              <Plus className="h-4 w-4 text-black/70" />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
