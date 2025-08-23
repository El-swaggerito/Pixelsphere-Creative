export const brandingImages = {
  "drip-and-grind": [
    "/images/drip&grind/DRIP & GRIND_main page.png",
    "/images/drip&grind/DRIP & GRIND_logo.png",
    "/images/drip&grind/DRIP & GRIND_logo colors.png",
    "/images/drip&grind/DRIP & GRIND_logo grid.png",
    "/images/drip&grind/DRIP & GRIND_colors.png",
    "/images/drip&grind/DRIP & GRIND_type.png",
    "/images/drip&grind/DRIP & GRIND_icons.png",
    "/images/drip&grind/DRIP & GRIND_pattern .png",
    "/images/drip&grind/DRIP & GRIND_tagline.png",
    "/images/drip&grind/DRIP & GRIND_business card.png",
    "/images/drip&grind/DRIP & GRIND_bc mockup.png",
    "/images/drip&grind/DRIP & GRIND_menu list.png",
    "/images/drip&grind/DRIP & GRIND_menu mockup.png",
    "/images/drip&grind/DRIP & GRIND_coffee cups.png",
    "/images/drip&grind/DRIP & GRIND_coffe holder.png",
    "/images/drip&grind/DRIP & GRIND_coaster.png",
    "/images/drip&grind/DRIP & GRIND_plate.png",
    "/images/drip&grind/DRIP & GRIND_folding paper.png",
    "/images/drip&grind/DRIP & GRIND_logo mockup.png",
    "/images/drip&grind/DRIP & GRIND_social media.png",
    "/images/drip&grind/DRIP & GRIND_chefs.png",
    "/images/drip&grind/DRIP & GRIND_resturant.png",
    "/images/drip&grind/DRIP & GRIND_visualss.png",
    "/images/drip&grind/DRIP & GRIND_overview.png",
    "/images/drip&grind/DRIP & GRIND_last page.png"
  ],
  "edtech-learning-platform": [
    "/images/edtech/edtech-01.png",
    "/images/edtech/edtech-02.png",
    "/images/edtech/edtech-03.png",
    "/images/edtech/edtech-04.png",
    "/images/edtech/edtech-05.png",
    "/images/edtech/edtech-06.png",
    "/images/edtech/edtech-07.png",
    "/images/edtech/edtech-08.png",
    "/images/edtech/edtech-09.png",
    "/images/edtech/edtech-10.png",
    "/images/edtech/edtech-11.png",
    "/images/edtech/edtech-12.png",
    "/images/edtech/edtech-13.png",
    "/images/edtech/edtech-14.png",
    "/images/edtech/edtech-15.png",
    "/images/edtech/edtech-16.png",
    "/images/edtech/edtech-17.png",
    "/images/edtech/edtech-18.png",
    "/images/edtech/edtech-19.png",
    "/images/edtech/edtech-20.png",
    "/images/edtech/edtech-21.png",
    "/images/edtech/edtech-22.png",
    "/images/edtech/edtech-23.png",
    "/images/edtech/edtech-24.png"
  ],
  "hope-foundation": [
    "/images/hopefoundation/Hope Foundation-01.png",
    "/images/hopefoundation/Hope Foundation-02.png",
    "/images/hopefoundation/Hope Foundation-03.png",
    "/images/hopefoundation/Hope Foundation-04.png",
    "/images/hopefoundation/Hope Foundation-05.png",
    "/images/hopefoundation/Hope Foundation-06.png",
    "/images/hopefoundation/Hope Foundation-07.png",
    "/images/hopefoundation/Hope Foundation-08.png",
    "/images/hopefoundation/Hope Foundation-09.png",
    "/images/hopefoundation/Hope Foundation-10.png",
    "/images/hopefoundation/Hope Foundation-11.png",
    "/images/hopefoundation/Hope Foundation-12.png",
    "/images/hopefoundation/Hope Foundation-13.png",
    "/images/hopefoundation/Hope Foundation-14.png",
    "/images/hopefoundation/Hope Foundation-15.png"
  ]
}

export function getBrandingImages(slug: string): string[] {
  return brandingImages[slug as keyof typeof brandingImages] || []
}

export function getProjectBrandingCount(slug: string): number {
  const images = getBrandingImages(slug)
  return images.length
}