export interface MobileAppProject {
  slug: string
  title: string
  category: string
  description: string
  storeUrl: string
  logo: string
  screenshots: string[]
}

export const mobileAppProjects: Record<string, MobileAppProject> = {
  "apt-learn": {
    slug: "apt-learn",
    title: "aptLearn",
    category: "Mobile Application",
    description:
      "Online learning solution created for engineers by engineers. With a mission to improve lives through learning, aptLearn is an online learning platform that helps learners gain on-demand tech skills they need to compete in today's economy and acquire professional certificates at a fraction of the cost and time.",
    storeUrl: "https://play.google.com/store/apps/details?id=com.aptlearn.mobile",
    logo: "/images/aptlearn/aptlearn.webp",
    screenshots: [
      "/images/aptlearn/aptlearn-1.jpeg",
      "/images/aptlearn/aptlearn-2.jpeg",
      "/images/aptlearn/aptlearn-3.jpeg",
      "/images/aptlearn/aptlearn-4.jpeg",
      "/images/aptlearn/aptlearn-5.jpeg",
    ],
  },
  revva: {
    slug: "revva",
    title: "Revva",
    category: "Mobile Application",
    description:
      "Revva helps creators can manage exclusive content with their subscribers. Subscribe can gain access to their favorite creators discover new creators and enjoy their exclusive content. Content creators can showcase their content using audio, text and/or visual formats.",
    storeUrl: "https://play.google.com/store/apps/details?id=com.xpliserv.myrevva.myrevva_app",
    logo: "/images/revva/revva.webp",
    screenshots: [
      "/images/revva/revva-1.jpeg",
      "/images/revva/revva-2.jpeg",
      "/images/revva/revva-3.jpeg",
      "/images/revva/revva-4.jpeg",
      "/images/revva/revva-5.jpeg",
    ],
  },
  "echo-vaults": {
    slug: "echo-vaults",
    title: "Echo Vaults",
    category: "Mobile Application",
    description:
      "What happens if something happens to you?\n\nEchoVaults is a secure, offline-first mobile app that helps you prepare for unexpected loss, disappearance, death, or emergency.\n\nIt ensures the people you trust most can access the guidance, words, or information they need to continue fostering your interests and legacy — at the right time, not sooner.",
    storeUrl: "https://play.google.com/store/apps/details?id=echovaults.app.android",
    logo: "/images/echovaults/echo vaults.webp",
    screenshots: [
      "/images/echovaults/echo vaults-1.jpeg",
      "/images/echovaults/echo vaults-2.jpeg",
      "/images/echovaults/echo vaults-3.jpeg",
      "/images/echovaults/echo vaults-4.jpeg",
      "/images/echovaults/echo vaults-5.jpeg",
    ],
  },
}

export const getMobileAppProjectBySlug = (slug: string): MobileAppProject | null => {
  return mobileAppProjects[slug] ?? null
}
