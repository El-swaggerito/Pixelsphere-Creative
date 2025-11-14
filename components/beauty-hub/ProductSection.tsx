import Image from 'next/image'

export function ProductSection() {
  return (
    <section aria-labelledby="products-heading" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 id="products-heading" className="text-[#2D2D2D] text-2xl sm:text-3xl font-bold">Our products</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside aria-label="Filters" className="lg:w-64 xl:w-72 flex-shrink-0">
            <div className="rounded-lg border border-[#E5E1DC] bg-white p-4 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#2D2D2D]">Applied Filters</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-[#E5E1DC] px-3 py-1 text-xs text-[#6B7280]">Cleansers</span>
                  <span className="inline-flex items-center rounded-full border border-[#E5E1DC] px-3 py-1 text-xs text-[#6B7280]">Peels And Masques</span>
                </div>
                <button className="mt-3 text-xs font-medium text-[#722F37]">Clear All Filters</button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#2D2D2D]">Out of Stock items</span>
                <button aria-pressed="false" className="relative inline-flex h-5 w-9 items-center rounded-full bg-[#E5E1DC]">
                  <span className="inline-block h-4 w-4 translate-x-0 rounded-full bg-white shadow transition"></span>
                </button>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#2D2D2D]">Category</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Cleansers</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Exfoliators</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Toners</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Retinols</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Peels And Masques</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Moisturizer</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#2D2D2D]">Skin Condition</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Brightening</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Hydration</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Uneven Tone</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Anti-Aging</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Sensitive Skin</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Sun Protection</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#2D2D2D]">Featured</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>New</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Best Sellers</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Travel Size</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Professional Treatments</span></li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#722F37]"/><span>Daily Defense</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#2D2D2D]">Price</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#6B7280]">
                  <li>$50.00 - $150.00</li>
                  <li>$150.00 - $250.00</li>
                  <li>$250.00 - $350.00</li>
                  <li>$350.00 - $450.00</li>
                  <li>$450.00 - $550.00</li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button className="px-4 py-2 rounded-full bg-[#2D2D2D]/5 text-[#2D2D2D] text-sm font-medium">Featured</button>
              <button className="px-4 py-2 rounded-full bg-[#F5F3F0] text-[#8B4513] text-sm font-medium">Best Seller</button>
              <button className="px-4 py-2 rounded-full bg-[#F5F3F0] text-[#8B4513] text-sm font-medium">New Arrival</button>
              <div className="ml-auto flex items-center gap-3">
                <button className="px-4 py-2 rounded-full border border-[#E5E1DC] text-sm text-[#6B7280]">Select Categories</button>
                <div className="h-10 w-10 rounded-full border border-[#E5E1DC] bg-white"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <ProductCard img="/images/beautyhub-project/product1.png" />
              <ProductCard img="/images/beautyhub-project/product2.png" />
              <PromoCard />
              <ProductCard img="/images/beautyhub-project/product1.png" />
              <ProductCard img="/images/beautyhub-project/product2.png" />
              <ProductCard img="/images/beautyhub-project/product1.png" />
              <WidePromoCard />
              <ProductCard img="/images/beautyhub-project/product2.png" />
              <ProductCard img="/images/beautyhub-project/product1.png" />
              <ProductCard img="/images/beautyhub-project/product2.png" />
              <ProductCard img="/images/beautyhub-project/product1.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ img }: { img: string }) {
  return (
    <div className="rounded-2xl border border-[#E5E1DC] bg-white overflow-hidden">
      <div className="p-4">
        <div className="relative rounded-2xl bg-[#F5F5F5] overflow-hidden">
          <button aria-label="Save" className="absolute top-3 left-3 z-10 h-8 w-8 rounded-full bg-white/90 shadow flex items-center justify-center">
            <svg className="h-4 w-4 text-[#722F37]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.438-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.562-7 10-7 10Z"/></svg>
          </button>
          <span className="absolute top-3 right-3 z-10 inline-flex rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-[#6B7280]">Featured</span>
          <div className="aspect-square">
            <Image src={img} alt="Product" fill className="object-contain p-6" sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 90vw" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-[#2D2D2D] text-sm sm:text-base font-semibold">Super Serum Skin Mist SPF 40</h3>
        <div className="mt-2 flex items-center gap-1 text-[#F59E0B]">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.82 11.09 1 7.18l6.06-.88L10 1l2.94 5.3 6.06.88-4.82 3.91 1.7 7L10 15z"/></svg>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.82 11.09 1 7.18l6.06-.88L10 1l2.94 5.3 6.06.88-4.82 3.91 1.7 7L10 15z"/></svg>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.82 11.09 1 7.18l6.06-.88L10 1l2.94 5.3 6.06.88-4.82 3.91 1.7 7L10 15z"/></svg>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.82 11.09 1 7.18l6.06-.88L10 1l2.94 5.3 6.06.88-4.82 3.91 1.7 7L10 15z"/></svg>
          <svg className="h-4 w-4 text-[#E5E1DC]" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15l-5.878 3.09L5.82 11.09 1 7.18l6.06-.88L10 1l2.94 5.3 6.06.88-4.82 3.91 1.7 7L10 15z"/></svg>
          <span className="ml-2 text-xs text-[#6B7280]">(320 reviews)</span>
        </div>
        <div className="mt-3 text-[#2D2D2D] text-lg font-bold">$40</div>
      </div>
    </div>
  )
}

function PromoCard() {
  return (
    <div className="rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[#4B0D20]"></div>
      <div className="relative">
        <div className="aspect-square">
          <Image src="/images/beautyhub-project/beauty-1.jpg" alt="Promotion" fill className="object-cover" sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 90vw" loading="lazy" />
        </div>
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <h3 className="text-white text-lg font-bold">NEW Virtual Skincare Analysis</h3>
          <p className="mt-2 text-white/90 text-sm">Get the most personalized recommendations. Available exclusively for mobile.</p>
        </div>
      </div>
    </div>
  )
}

function WidePromoCard() {
  return (
    <div className="rounded-2xl overflow-hidden relative xl:col-span-2">
      <div className="absolute inset-0 bg-[#4B0D20]"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[320px] sm:min-h-[360px]">
        <div className="p-6 sm:p-8 flex flex-col justify-center items-start">
          <h3 className="text-white text-lg sm:text-xl font-bold">1-2-1 expert advice</h3>
          <p className="mt-2 text-white/90 text-sm">take some time to feel uplifted with a complimentary, bespoke beauty service. our team of experts are here to help in person.</p>
        </div>
        <div className="relative h-full">
          <Image src="/images/beautyhub-project/beauty-2.jpg" alt="Expert advice" fill className="object-cover object-right" sizes="(min-width: 1280px) 45vw, (min-width: 640px) 90vw, 90vw" loading="lazy" />
        </div>
      </div>
    </div>
  )
}
