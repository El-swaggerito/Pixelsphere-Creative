'use client'

import Image from 'next/image'

export default function PopularMeals() {
  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-roboto text-4xl md:text-5xl font-bold mb-4" style={{ color: '#C9C9C9' }}>
            Popular Meals
          </h2>
          <p className="font-roboto text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with passion and served with excellence
          </p>
        </div>

        {/* Complete Meals Grid - Optimized Image Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Row 1 */}
          {/* Delicious Burger */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-1.png"
                alt="Delicious Burger"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -25%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">60.00$</span>
                <span className="text-gray-900 font-bold text-lg">45.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Delicious Burger</h3>
            </div>
          </div>

          {/* Grilled Chicken */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-2.png"
                alt="Grilled Chicken"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -7%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">42.00$</span>
                <span className="text-gray-900 font-bold text-lg">39.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Grilled Chicken</h3>
            </div>
          </div>

          {/* Ruti With Chicken */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-3.png"
                alt="Ruti With Chicken"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -10%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">29.00$</span>
                <span className="text-gray-900 font-bold text-lg">26.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Ruti With Chicken</h3>
            </div>
          </div>

          {/* Fast Food Combo */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-4.png"
                alt="Fast Food Combo"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -18%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">34.00$</span>
                <span className="text-gray-900 font-bold text-lg">28.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Fast Food Combo</h3>
            </div>
          </div>

          {/* Row 2 */}
          {/* Chicago Deep Pizza */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-5.png"
                alt="Chicago Deep Pizza"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -21%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">28.00$</span>
                <span className="text-gray-900 font-bold text-lg">22.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Chicago Deep Pizza</h3>
            </div>
          </div>

          {/* Chinese Pasta */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-6.png"
                alt="Chinese Pasta"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -15%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">40.00$</span>
                <span className="text-gray-900 font-bold text-lg">34.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Chinese Pasta</h3>
            </div>
          </div>

          {/* Whopper Burger King */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-7.png"
                alt="Whopper Burger King"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -13%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">30.00$</span>
                <span className="text-gray-900 font-bold text-lg">26.00$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Whopper Burger King</h3>
            </div>
          </div>

          {/* Ruti With Beef Slice */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src="/images/drip&grind-project/popularmeal-8.png"
                alt="Ruti With Beef Slice"
                width={300}
                height={200}
                className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                -7%
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="mb-3">
                <span className="text-gray-400 line-through text-sm mr-2">30.52$</span>
                <span className="text-gray-900 font-bold text-lg">28.52$</span>
              </div>
              <h3 className="font-medium text-lg text-gray-600">Ruti With Beef Slice</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}