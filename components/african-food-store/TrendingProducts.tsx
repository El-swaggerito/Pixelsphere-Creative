"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"

/**
 * AfricanFoodTrendingProducts
 * Renders the Trending Products section; optionally shows a route-gated tab filter when enabled.
 */
export function AfricanFoodTrendingProducts({ enableShopFilter = false }: { enableShopFilter?: boolean }): JSX.Element {
  const pathname = usePathname()
  const isShopRoute = useMemo(() => (pathname ?? "").startsWith("/african-food-store/shop"), [pathname])
  const showFilter = enableShopFilter === true && isShopRoute

  type FilterKey = "ALL" | "FRESH" | "SNACKS" | "BEVERAGE"
  const [filter, setFilter] = useState<FilterKey>("ALL")

  const items = useMemo(
    () => [
      { id: "tr1", img: "/images/africanfoodstore-project/trending1.png", category: "Fresh & Dry Food", map: "FRESH", title: "Yam tubers", priceOld: 120, priceNew: 103.2, rating: 4 },
      { id: "tr2", img: "/images/africanfoodstore-project/trending2.png", category: "Spices & Seasonings", map: "SNACKS", title: "Pepper soup spice mix", priceOld: 130, priceNew: 123.5, rating: 4 },
      { id: "tr3", img: "/images/africanfoodstore-project/trending3.png", category: "Snacks & Beverages", map: "SNACKS", title: "Plantain", priceNew: 110, rating: 4 },
      { id: "tr4", img: "/images/africanfoodstore-project/trending4.png", category: "Natural Body & Hair Care", map: "SNACKS", title: "Palm kernel oil", priceOld: 320, priceNew: 288, rating: 4, badge: "Out-Of-Stock" },
      { id: "tr5", img: "/images/africanfoodstore-project/trending5.png", category: "Kitchen Staples", map: "SNACKS", title: "Mortar and pestle (small)", priceOld: 1199, priceNew: 1019.15, rating: 5 },
      { id: "tr6", img: "/images/africanfoodstore-project/trending6.png", category: "Fresh & Dry Food", map: "SNACKS", title: "Plantain chips", priceOld: 999, priceNew: 949.05, rating: 4 },
      { id: "tr7", img: "/images/africanfoodstore-project/trending7.png", category: "Spices & Seasonings", map: "SNACKS", title: "Thyme", priceNew: 80, rating: 4 },
      { id: "tr8", img: "/images/africanfoodstore-project/trending8.png", category: "Snacks & Beverages", map: "SNACKS", title: "Groundnut", priceNew: 80, rating: 4 },
    ],
    []
  )

  const filtered = useMemo(() => {
    if (filter === "ALL") return items
    return items.filter((it) => it.map === filter)
  }, [items, filter])

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="trending-products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div className="relative mb-6 sm:mb-0">
            <h2 id="trending-products-heading" className="text-3xl font-bold text-gray-900 relative z-10">
              Trending Products
            </h2>
            <svg className="absolute -bottom-2 left-0 w-32 h-6 text-red-500 opacity-70" viewBox="0 0 128 24" fill="none" aria-hidden="true">
              <path d="M2 20C20 8, 40 4, 60 8C80 12, 100 16, 126 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          {showFilter && (
            <div className="rounded-full border border-gray-200 bg-white shadow-sm px-2 py-2 flex items-center gap-2">
              {(
                [
                  { key: "ALL", label: "ALL" },
                  { key: "FRESH", label: "FRESH & DRY FOOD" },
                  { key: "SNACKS", label: "SNACKS" },
                  { key: "BEVERAGE", label: "BEVERAGE" },
                ] as { key: FilterKey; label: string }[]
              ).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={
                    (filter === key
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700") +
                    " px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors"
                  }
                  aria-pressed={filter === key}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 - Yam tubers */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "FRESH" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending1.png"
                alt="Fresh yam tubers"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Fresh & Dry Food</p>
              <h3 className="font-semibold text-gray-900 mb-2">Yam tubers</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400 line-through">$120</span>
                <span className="text-lg font-bold text-blue-600">$103.20</span>
              </div>
            </div>
          </div>

          {/* Product 2 - Pepper soup spice mix */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending2.png"
                alt="Pepper soup spice mix"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
              <h3 className="font-semibold text-gray-900 mb-2">Pepper soup spice mix</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400 line-through">$130</span>
                <span className="text-lg font-bold text-blue-600">$123.50</span>
              </div>
            </div>
          </div>

          {/* Product 3 - Plantain */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending3.png"
                alt="Fresh plantain"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Snacks & Beverages</p>
              <h3 className="font-semibold text-gray-900 mb-2">Plantain</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-600">$110.00</span>
              </div>
            </div>
          </div>

          {/* Product 4 - Palm kernel oil (Out of Stock) */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group relative" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="absolute top-2 right-2 z-10">
              <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Out-Of-Stock
              </span>
            </div>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending4.png"
                alt="Palm kernel oil"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Natural Body & Hair Care</p>
              <h3 className="font-semibold text-gray-900 mb-2">Palm kernel oil</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400 line-through">$320</span>
                <span className="text-lg font-bold text-blue-600">$288.00</span>
              </div>
            </div>
          </div>

          {/* Product 5 - Mortar and pestle (small) */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending5.png"
                alt="Mortar and pestle small"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Kitchen Staples</p>
              <h3 className="font-semibold text-gray-900 mb-2">Mortar and pestle (small)</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400 line-through">$1199</span>
                <span className="text-lg font-bold text-blue-600">$1019.15</span>
              </div>
            </div>
          </div>

          {/* Product 6 - Plantain chips */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending6.png"
                alt="Plantain chips"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Fresh & Dry Food</p>
              <h3 className="font-semibold text-gray-900 mb-2">Plantain chips</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400 line-through">$999</span>
                <span className="text-lg font-bold text-blue-600">$949.05</span>
              </div>
            </div>
          </div>

          {/* Product 7 - Thyme */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending7.png"
                alt="Fresh thyme"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
              <h3 className="font-semibold text-gray-900 mb-2">Thyme</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-600">$80.00</span>
              </div>
            </div>
          </div>

          {/* Product 8 - Groundnut */}
          <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" + (showFilter && filter !== "ALL" && filter !== "SNACKS" ? " hidden" : "")}>
            <div className="relative aspect-square p-4">
              <Image
                src="/images/africanfoodstore-project/trending8.png"
                alt="Groundnut"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Snacks & Beverages</p>
              <h3 className="font-semibold text-gray-900 mb-2">Groundnut</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95 .69h3.462c.969 0 1.371 1.24 .588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-600">$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}