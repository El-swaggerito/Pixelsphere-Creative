export const brandingImages = {
  "drip-and-grind": [
    "/images/drip&grind/branding/branding_1.png",
    "/images/drip&grind/branding/branding_2.png",
    "/images/drip&grind/branding/branding_3.png",
    "/images/drip&grind/branding/branding_4.png",
    "/images/drip&grind/branding/branding_5.png",
    "/images/drip&grind/branding/branding_6.png",
  ],
  "edtech-learning-platform": [
    "/images/edtech/branding/branding_1.png",
    "/images/edtech/branding/branding_2.png",
    "/images/edtech/branding/branding_3.png",
    "/images/edtech/branding/branding_4.png",
    "/images/edtech/branding/branding_5.png",
  ],
  "hope-foundation": [
    "/images/hopefoundation/branding/branding_1.png",
    "/images/hopefoundation/branding/branding_2.png",
    "/images/hopefoundation/branding/branding_3.png",
    "/images/hopefoundation/branding/branding_4.png",
  ],
  "chopify": [
    "/images/chopify/branding/branding_1.png",
    "/images/chopify/branding/branding_2.png",
    "/images/chopify/branding/branding_3.png",
    "/images/chopify/branding/branding_4.png",
    "/images/chopify/branding/branding_5.png",
  ],
  "african-food-store": [
    "/images/africanfoodstore/revamp_1.png",
    "/images/africanfoodstore/revamp_2.png",
    "/images/africanfoodstore/revamp_3.png",
    "/images/africanfoodstore/revamp_4.png",
    "/images/africanfoodstore/revamp_5.png",
    "/images/africanfoodstore/revamp_6.png",
    "/images/africanfoodstore/revamp_7.png",
    "/images/africanfoodstore/revamp_8.png",
    "/images/africanfoodstore/revamp_9.png",
    "/images/africanfoodstore/revamp_10.png",
    "/images/africanfoodstore/revamp_11.png",
    "/images/africanfoodstore/revamp_12.png",
  ],
  "beauty-hub": [
    "/images/beautyhub/dang studio-01.png",
    "/images/beautyhub/dang studio-02.png",
    "/images/beautyhub/dang studio-03.png",
    "/images/beautyhub/dang studio-04.png",
    "/images/beautyhub/dang studio-05.png",
    "/images/beautyhub/dang studio-06.png",
    "/images/beautyhub/dang studio-07.png",
    "/images/beautyhub/dang studio-08.png",
    "/images/beautyhub/dang studio-09.png",
    "/images/beautyhub/dang studio-10.png",
    "/images/beautyhub/dang studio-12.png",
    "/images/beautyhub/dang studio-13.png",
    "/images/beautyhub/dang studio_shop.png",
  ],
}

export function getBrandingImages(slug: string): string[] {
  return brandingImages[slug as keyof typeof brandingImages] || []
}

export function getProjectBrandingCount(slug: string): number {
  const images = getBrandingImages(slug)
  return images.length
}