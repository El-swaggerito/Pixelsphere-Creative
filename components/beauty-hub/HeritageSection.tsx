import Image from 'next/image'

/*
  HeritageSection
  Purpose: Presents Dang Beauty's brand heritage, values, and principles with supporting imagery.
  Relationship: Designed to follow BenefitsWellnessSection on the BeautyHub About page, inheriting spacing,
  typography, and color system for visual continuity in the page flow.
*/

const HERITAGE_SRC = '/images/beautyhub-project/heritage.jpg'

export function HeritageSection() {
  return (
    <section
      aria-labelledby="about-heritage-title"
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 id="about-heritage-title" className="text-[#2D2D2D] text-3xl lg:text-4xl font-bold tracking-tight">Heritage</h2>

            <div className="mt-4 space-y-5">
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                Founded on the belief that skincare should be clean, conscious, and effective, Dang Beauty is your go-to destination for products that bring out the best in your skin.
              </p>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                From gentle cleansers to vibrant lipsticks, we formulate every product with skin-loving ingredients and cruelty-free principles. Our mission? To help you love the skin you’re in. Why choose <span className="text-[#722F37] font-semibold">Dang Beauty</span>?
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-[#2D2D2D]"><span className="text-[#4ADE80]">🥗</span><span>Clean, natural ingredients</span></li>
              <li className="flex items-start gap-3 text-[#2D2D2D]"><span className="text-[#722F37]">🧴</span><span>100% cruelty-free</span></li>
              <li className="flex items-start gap-3 text-[#2D2D2D]"><span className="text-[#60A5FA]">💧</span><span>Dermatologist-tested</span></li>
              <li className="flex items-start gap-3 text-[#2D2D2D]"><span className="text-[#2563EB]">♻️</span><span>Eco-friendly packaging</span></li>
              <li className="flex items-start gap-3 text-[#2D2D2D]"><span className="text-[#EF4444]">🎨</span><span>Inclusive shades for every tone</span></li>
            </ul>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-[#2D2D2D] text-xl font-semibold">Ethical and Sustainable Beauty:</h3>
                <p className="mt-2 text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  At <span className="text-[#722F37] font-semibold">Dang Beauty</span> Cosmetic Company, we believe that beauty should never come at the expense of animals, the environment, or our customers’ health. That’s why we’ve made sure that our products are vegan, curl-free, gluten-free, and packaged in recycled materials.
                </p>
              </div>
              <div>
                <h3 className="text-[#2D2D2D] text-xl font-semibold">Vegan, Curl-Free</h3>
                <p className="mt-2 text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  When we say our products are vegan, we mean that we never use any animal-derived ingredients or byproducts in our formulations. We believe that cruelty-free beauty is the way of the future, and we’re proud to be a part of that movement.
                </p>
              </div>
              <div>
                <h3 className="text-[#2D2D2D] text-xl font-semibold">Gluten-Free Products</h3>
                <p className="mt-2 text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  For those with sensitivities or allergies to gluten, we’ve made sure that our products are 100% gluten-free. You can use our products with confidence, knowing that they are safe and gentle on your skin.
                </p>
              </div>
              <div>
                <h3 className="text-[#2D2D2D] text-xl font-semibold">Recycled Packaging</h3>
                <p className="mt-2 text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  Finally, we’re committed to doing our part for the environment, which is why we’ve packaged our products in recycled materials. By choosing our products, you’re making a positive impact on the planet and reducing your environmental footprint.
                </p>
                <p className="mt-2 text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  We’re dedicated to providing you with high-quality, ethically-sourced beauty solutions that you can feel good about using.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-lg overflow-hidden">
              <Image
                src={HERITAGE_SRC}
                alt="Dang Beauty Heritage"
                fill
                className="object-cover object-center"
                loading="lazy"
                sizes="(min-width: 1024px) 35vw, (min-width: 640px) 70vw, 90vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

