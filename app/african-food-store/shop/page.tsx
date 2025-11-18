"use client";

import {
  AfricanFoodHeaderNav,
  AfricanFoodNewsletter,
  AfricanFoodFooter,
  AfricanFoodProductShowcase,
  AfricanFoodTrendingProducts,
} from "@/components/african-food-store";

export default function AfricanFoodStorePage() {
  return (
    <div className="min-h-screen bg-white">
      <AfricanFoodHeaderNav />

      <main>
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,680px)] items-center gap-8">
              <div className="flex items-baseline gap-4">
                <h2 className="text-[#111111] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">Discover Now</h2>
                <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase">Products</span>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  <div className="px-8 py-6">
                    <div className="text-[#111111] text-lg font-semibold">Exclusive Offers</div>
                    <div className="mt-2 text-gray-600 text-sm">30% off on select items</div>
                  </div>
                  <div className="px-8 py-6">
                    <div className="text-[#111111] text-lg font-semibold">New Arrivals</div>
                    <div className="mt-2 text-gray-600 text-sm">50+ new arrivals Daily</div>
                  </div>
                  <div className="px-8 py-6">
                    <div className="text-[#111111] text-lg font-semibold">Over 1,500 +</div>
                    <div className="mt-2 text-gray-600 text-sm">curated&nbsp;products.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Products Section */}
        <AfricanFoodTrendingProducts enableShopFilter />

        {/* Product Showcase Section */}
        <AfricanFoodProductShowcase />

        <AfricanFoodNewsletter />
      </main>

      <AfricanFoodFooter />
    </div>
  );
}
