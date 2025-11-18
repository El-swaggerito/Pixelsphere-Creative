'use client'

import Image from 'next/image'

/**
 * AfricanFoodProductShowcase
 * Renders the three-column product showcase: Discount, Featured, Selling.
 * Usage: place within the page content where the showcase should appear.
 */
export function AfricanFoodProductShowcase(): JSX.Element {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Discount Products Column */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Discount Products</h2>
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
            </div>

            {/* Product Cards */}
            <div className="space-y-6">
              {/* Product 1 - Groundnut */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/discount1.png"
                    alt="Groundnut"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Snacks</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Groundnut</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$103.20</p>
                </div>
              </div>

              {/* Product 2 - Palm kernel oil */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/discount2.png"
                    alt="Palm kernel oil"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Natural Body & Hair care</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Palm kernel oil</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$123.50</p>
                </div>
              </div>

              {/* Product 3 - Thyme */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/discount3.png"
                    alt="Thyme"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Thyme</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-
                        .755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$288.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products Column */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
            </div>

            {/* Product Cards */}
            <div className="space-y-6">
              {/* Product 1 - Yam tubers */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/featured1.png"
                    alt="Yam tubers"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Fresh & Dry food</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Yam tubers</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$110.00</p>
                </div>
              </div>

              {/* Product 2 - Peppershoup spices */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/featured3.png"
                    alt="Peppershoup spices"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Peppershoup spices</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-
                          .755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-
                        .755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$1019.15</p>
                </div>
              </div>

              {/* Product 3 - Plantain */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/featured2.png"
                    alt="Plantain"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Fresh & Dry Foods</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Plantain</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-
                          .755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-
                        .755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$949.05</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selling Products Column */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Selling Products</h2>
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
            </div>

            {/* Product Cards */}
            <div className="space-y-6">
              {/* Product 1 - Mortar & Pestle */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/selling1.png"
                    alt="Mortar & Pestle"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Kitchen staples</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mortar & Pestle</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-
                          .755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539 -1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$123.50</p>
                </div>
              </div>

              {/* Product 2 - Body Lotion */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/selling2.png"
                    alt="Body Lotion"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Body care</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Body Lotion</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$103.20</p>
                </div>
              </div>

              {/* Product 3 - Cabbage */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <Image
                    src="/images/africanfoodstore-project/selling3.png"
                    alt="Cabbage"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-500 mb-1">Vegetables</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cabbage</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921 -.755 1.688 -1.54 1.118l-2.8 -2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57 -1.838 -.197 -1.539 -1.118l1.07 -3.292a1 1 0 00-.364 -1.118L2.98 8.72c-.783 -.57 -.38 -1.81 .588 -1.81h3.461a1 1 0 00.951 -.69l1.07 -3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                  </div>
                  <p className="text-xl font-bold text-blue-600">$110.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}