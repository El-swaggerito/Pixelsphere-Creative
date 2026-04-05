# Portfolio Layout Architecture Review

## Scope

This document analyzes the complete layout structure for the portfolio-related routes in the repository:

- `/portfolio` → portfolio listing page
- `/portfolio/[slug]` → dynamic project detail pages
- `/portfolio/chopify` → dedicated static project detail page
- `/portfolio/[slug]/branding` → fullscreen branding showcase subpage

It focuses on:

- layout hierarchy
- reusable layout components
- grid and flexbox usage
- responsive design behavior
- content organization strategies
- layout-related state and interaction behavior

---

## Route Map

```text
app/portfolio/
├── page.tsx                     → Portfolio listing page
├── chopify/
│   └── page.tsx                 → Custom static project page
└── [slug]/
    ├── page.tsx                 → Generic project detail page
    └── branding/
        └── page.tsx             → Fullscreen branding carousel
```

## Route Behavior Notes

- The main portfolio experience is split between a **listing page** and multiple **detail experiences**.
- Most project detail pages use the dynamic route in [page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/[slug]/page.tsx#L17-L322).
- Chopify is an exception: it has a dedicated static route in [page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/chopify/page.tsx#L9-L365), which overrides the dynamic route for `/portfolio/chopify`.
- Branding galleries use a separate fullscreen route in [page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/[slug]/branding/page.tsx#L31-L47).

---

## Shared Layout Stack

The portfolio routes are composed from a small set of shared layout-oriented components:

| Component | Role | File |
|---|---|---|
| `Header` | Global navigation bar | [header.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/header.tsx#L11-L654) |
| `HeroBackground` | Decorative hero wrapper with animated gradient and particles | [hero-background.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/hero-background.tsx#L5-L85) |
| `SectionHeader` | Shared section title block | [section-header.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/section-header.tsx#L4-L52) |
| `AnimatedSection` | Scroll-triggered reveal wrapper | [AnimatedSection.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/AnimatedSection.tsx#L8-L84) |
| `PageTransition` | Route-level enter/exit wrapper | [PageTransition.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/PageTransition.tsx#L13-L40) |
| `ProjectCard` | Portfolio item layout unit | [ProjectCard.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ProjectCard.tsx#L12-L185) |
| `WorkCTA` | Contact/pitch CTA band | [work-cta.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/work-cta.tsx#L6-L165) |
| `FinalCTA` | Final conversion strip | [final-cta.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/final-cta.tsx#L5-L52) |
| `Footer` | Sitewide footer and newsletter block | [footer.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/footer.tsx#L10-L335) |
| `ImageCarousel` | Fullscreen branding image presentation | [ImageCarousel.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ImageCarousel.tsx#L7-L186) |

---

## Reusable Layout Component Interfaces

### `Header`

Defined in [header.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/header.tsx#L11-L17).

```ts
interface HeaderProps {
  currentPage?: string
  textColor?: "white" | "black"
  background?: "white" | "gradient"
}
```

Layout impact:

- switches between gradient and white navbar treatments
- controls active navigation emphasis
- changes logo treatment depending on page context
- provides desktop mega menu and mobile drawer

### `HeroBackground`

Defined in [hero-background.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/hero-background.tsx#L5-L10).

```ts
interface HeroBackgroundProps {
  children: ReactNode
  className?: string
}
```

Layout impact:

- acts as a hero shell, not just decoration
- holds absolute-positioned motion layers behind content
- allows page-specific height overrides through `className`

### `SectionHeader`

Defined in [section-header.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/section-header.tsx#L4-L11).

```ts
interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}
```

Layout impact:

- standardizes section spacing
- provides centered vs left-aligned title blocks

### `AnimatedSection`

Defined in [AnimatedSection.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/AnimatedSection.tsx#L8-L24).

```ts
interface AnimatedSectionProps {
  children: React.ReactNode
  y?: number
  duration?: number
  delay?: number
  triggerOnce?: boolean
  className?: string
}
```

Layout impact:

- wraps entire sections
- adds scroll-based reveal
- respects reduced-motion preference
- does not change semantic layout structure, but does affect render timing and movement

### `PageTransition`

Defined in [PageTransition.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/PageTransition.tsx#L13-L17).

```ts
interface PageTransitionProps {
  children: React.ReactNode
  customVariants?: typeof variants
  className?: string
}
```

Layout impact:

- creates route-level motion envelope
- sets `minHeight: 100vh`
- wraps the entire page tree

### `ProjectCard`

Defined in [ProjectCard.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ProjectCard.tsx#L12-L27).

```ts
export interface ProjectProps {
  title: string
  slug: string
  category: string
  timeTaken: string
  description: string
  designDirection: string
  additionalInfo?: string
  technologies: string[]
  isStarred?: boolean
  isReversed?: boolean
  visualType: string
  visualColor: string
  image: string
  onContactClick: () => void
}
```

Layout impact:

- renders as a two-column project summary block
- supports left/right reversal with `isReversed`
- contains its own CTA and image panel

### `WorkCTA`

Defined in [work-cta.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/work-cta.tsx#L6-L12).

```ts
interface WorkCTAProps {
  title?: string
  subtitle?: string
  email?: string
  phone?: string
  buttonText?: string
}
```

### `ImageCarousel`

Defined in [ImageCarousel.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ImageCarousel.tsx#L7-L10).

```ts
interface ImageCarouselProps {
  images: string[]
  projectName: string
}
```

---

## CSS Framework and Styling Approach

The portfolio area is styled almost entirely with **Tailwind CSS utility classes**.

### Styling Layers Used

- utility-first Tailwind classes in JSX
- motion styling via `framer-motion`
- shared theme tokens from [globals.css](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/globals.css#L17-L113)
- custom breakpoints from [tailwind.config.ts](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/tailwind.config.ts#L21-L27)

### Breakpoints Used in Portfolio Layouts

Standard breakpoints:

- `sm`
- `md`
- `lg`
- `xl`
- `2xl`

Custom breakpoints available globally:

- `xxxxs`
- `xxxs`
- `xxs`
- `xs`
- `4xl`

The portfolio listing page makes especially heavy use of the ultra-small custom breakpoints for hero sizing and spacing.

### Important Styling Note

The dynamic project page uses `prose` classes in [page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/[slug]/page.tsx#L120-L127), but the Tailwind config only includes `tailwindcss-animate` and does not include the typography plugin. That means the `prose` utility set is likely not active unless injected externally.

---

## Portfolio Listing Page Layout

Source: [app/portfolio/page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/page.tsx#L19-L310)

## High-Level Page Tree

```text
PageTransition
└── div.min-h-screen.bg-white
    ├── Hero section
    │   └── HeroBackground
    │       ├── Decorative motion SVG
    │       ├── Header
    │       ├── Hero content block
    │       └── Bottom showcase image strip
    ├── Portfolio section
    │   └── AnimatedSection
    │       └── section#portfolio-section
    │           ├── max-width container
    │           ├── SectionHeader
    │           ├── filter tabs
    │           └── filtered ProjectCard stack
    ├── AnimatedSection → WorkCTA
    ├── AnimatedSection → FinalCTA
    └── AnimatedSection → Footer
```

## Layout Regions

### 1. Hero Region

The hero region is composed of:

- outer `section` with responsive `min-h-*`
- `HeroBackground` wrapper
- absolute decorative SVG in top-left
- fixed `Header`
- vertically centered hero text block
- bottom-aligned design collection image strip

Key classes:

- outer section: `relative`, `flex`, `flex-col`, `overflow-hidden`
- hero content wrapper: `flex-1 flex items-center justify-center`
- text alignment: `flex flex-col items-center justify-center text-center`

### 2. Portfolio Filter Region

The filter region sits inside a centered max-width container:

- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

Tabs use:

- `flex justify-center`
- inner `flex flex-wrap justify-center gap-4`

This makes the filter controls:

- centered on desktop
- wrapped into multiple rows on smaller widths

### 3. Project Card Stack

Project cards are rendered inside:

- `AnimatePresence mode="wait"`
- a motion wrapper with `className="space-y-20"`

Each `ProjectCard` is separated by an animated horizontal rule except the last card.

This creates a **single-column vertical feed** of two-column project rows.

## Grid and Flexbox Map

| Region | Layout Primitive | Classes |
|---|---|---|
| hero section | flex column | `flex flex-col` |
| hero content centering | flex | `flex-1 flex items-center justify-center` |
| filter group | flex wrap | `flex flex-wrap justify-center gap-4` |
| project list | vertical stack | `space-y-20` |
| CTA/footer composition | section stacking | block flow with repeated `AnimatedSection` wrappers |

## Listing Page Responsive Strategy

### Hero Scaling

The hero uses multiple custom breakpoints:

- `min-h-[45vh]` to `lg:min-h-screen`
- custom sizes for `xxxxs`, `xxxs`, `xxs`, `xs`

This page is tuned very aggressively for tiny mobile screens.

### Action Button Responsiveness

The hero CTA uses:

- `w-full` on smaller breakpoints
- `xxs:w-auto` on larger small screens

This means the CTA begins as full-width and progressively collapses to intrinsic width.

### Filter Tab Responsiveness

The filter controls rely on `flex-wrap`, avoiding the need for a dedicated mobile menu.

### Project Card Responsiveness

The listing page delegates per-project responsiveness to [ProjectCard](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ProjectCard.tsx#L67-L184), which uses:

- `grid lg:grid-cols-2 gap-12 items-center`

On small screens:

- image and text stack vertically

On large screens:

- image and content sit side by side
- optional reversal flips ordering with `lg:order-*`

## Content Organization Strategy

The portfolio listing page organizes content in this order:

1. big visual positioning statement
2. filtered discovery controls
3. long-scroll storytelling via project cards
4. agency contact CTA
5. final conversion prompt
6. global footer

This is a **sales-first portfolio layout**, not a compact gallery layout.

## State Management

The listing page has one primary layout-related state:

```ts
const [activeFilter, setActiveFilter] =
  React.useState<"all" | "web-dev-branding" | "web-development" | "branding">("all")
```

Layout effects of this state:

- changes which `ProjectCard` blocks render
- changes which filter button is visually active
- drives `AnimatePresence` transitions for the project list

Supporting derived state:

- `webDevBrandingSlugs`
- `webDevelopmentSlugs`
- `brandingSlugs`
- `filteredProjects`

Interaction helpers:

- `scrollToPortfolio()`
- `scrollToContactForm()`

---

## `ProjectCard` Layout Architecture

Source: [ProjectCard.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ProjectCard.tsx#L29-L184)

## Component Tree

```text
motion.div.grid.lg:grid-cols-2
├── Text/content column
│   ├── title row
│   │   ├── star or dot marker
│   │   ├── project title
│   │   └── "View Project" button
│   ├── category row
│   ├── description
│   ├── design direction
│   ├── optional additional info
│   ├── technology badges
│   └── contact CTA button
└── Image column
    └── linked media shell
        └── hover-swapping project image
```

## Layout Behavior

- main layout uses `grid lg:grid-cols-2`
- `isReversed` flips the visual order with `lg:order-1` and `lg:order-2`
- badges and buttons remain inside the text column
- image panel keeps an `aspect-[4/3]` frame

## State Used

```ts
const [isHovered, setIsHovered] = useState(false)
const [hoverImageLoaded, setHoverImageLoaded] = useState(false)
const [hoverImageLoading, setHoverImageLoading] = useState(true)
```

These states affect layout presentation by:

- swapping the primary image on hover
- showing a loading overlay while hover preview loads

---

## Dynamic Project Detail Page Layout

Source: [app/portfolio/[slug]/page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/[slug]/page.tsx#L17-L322)

## High-Level Page Tree

```text
div.min-h-screen.bg-white
├── Header (white background, black text)
├── AnimatedSection → Breadcrumb section
├── AnimatedSection → Project hero / intro section
├── AnimatedSection → Showcase image 2
├── AnimatedSection → Project Goal
├── AnimatedSection → Product Branding
├── AnimatedSection → Showcase image 3
├── AnimatedSection → User Statement + Problem List
├── AnimatedSection → Solution grid
├── Conditional AnimatedSection → Showcase image 4
├── AnimatedSection → WorkCTA
├── AnimatedSection → FinalCTA
└── AnimatedSection → Footer
```

## Core Layout Pattern

The detail page uses **stacked narrative sections** with alternating backgrounds:

- white
- gray
- white
- gray

This creates visual segmentation without introducing complex nested layouts.

## Section-by-Section Layout Analysis

### 1. Header + Breadcrumb

- fixed header at top
- breadcrumb region uses `pt-32` to compensate for fixed nav overlap
- breadcrumb flow is inline flex:
  - `flex items-center text-sm text-gray-600`

### 2. Hero / Project Intro

The intro section contains two main blocks:

1. centered title block
2. two-part details/content grid

Title block:

- `text-center mb-16`

Details grid:

- `grid lg:grid-cols-4 gap-12`

Column split:

- left sidebar: `lg:col-span-1`
- right content: `lg:col-span-3`

This is the main sidebar layout on the page.

### 3. Left Sidebar

The sidebar contains metadata:

- services provided
- project title/client
- client designation

Structure:

- vertical stack with `space-y-6`

On mobile:

- sidebar stacks above the main description

On desktop:

- sidebar becomes a distinct left metadata rail

### 4. Narrative Text Sections

`Project Goal` and `Product Branding` use a simpler narrow-content layout:

- `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`

This creates an editorial reading width rather than full-width text.

### 5. Media Showcase Sections

Showcase sections use:

- `max-w-7xl` outer container
- `max-w-6xl mx-auto` image wrapper

This slightly narrows media relative to the page width and centers it visually.

### 6. User Statement + Problem List

This is the page's largest multi-column narrative split:

- `grid lg:grid-cols-2 gap-16`

Left column:

- user narrative paragraphs

Right column:

- problem bullets with custom dot markers

### 7. Solutions Grid

Solutions are laid out with:

- `grid md:grid-cols-2 gap-8`

This means:

- one column on small screens
- two columns starting at medium

### 8. Conditional Final Showcase

The final image section is conditional:

```ts
{project.images.showcase4 && (...)}
```

This is a content-driven layout branch that changes total page length and media rhythm depending on project data.

## Grid and Flexbox Map

| Region | Layout Primitive | Classes |
|---|---|---|
| breadcrumb | inline flex | `flex items-center` |
| hero metadata split | CSS grid | `grid lg:grid-cols-4 gap-12` |
| user/problem section | CSS grid | `grid lg:grid-cols-2 gap-16` |
| solutions | CSS grid | `grid md:grid-cols-2 gap-8` |
| lists and bullets | flex rows | `flex items-start` |
| CTA and footer stack | vertical document flow | section stacking |

## Responsive Behavior

### Mobile

- metadata sidebar collapses above main copy
- two-column sections collapse to one column
- CTA buttons become vertical stack in hero button row via `flex-col sm:flex-row`

### Tablet

- solution grid becomes two columns at `md`
- intro content remains stacked until `lg`

### Desktop

- intro becomes 1:3 sidebar/content split
- user/problem becomes balanced two-column layout

## Content Organization Strategy

The dynamic page follows a project-case-study sequence:

1. identity and context
2. major hero visual
3. metadata and brief
4. showcase
5. goal
6. branding rationale
7. more showcase
8. user framing and pain points
9. solutions
10. closing media
11. conversion CTA

This is a **case-study narrative layout**, designed more like a presentation deck than a product page.

## Layout-Related Logic

The page includes layout-affecting helper logic:

- `getProjectPreviewRoute(slug)` maps projects to live preview targets
- `hasLivePreview(slug)` toggles live preview CTA availability
- conditional `showcase4`
- conditional hero subtitle based on slug

These are not visual-state hooks, but they do alter which layout elements are present.

---

## Dedicated Chopify Page Layout

Source: [app/portfolio/chopify/page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/chopify/page.tsx#L9-L365)

## Why It Matters

Chopify is not using the generic project detail layout. It has a custom handcrafted layout architecture with a stronger editorial/art-direction style.

## High-Level Page Tree

```text
PageTransition
└── main.bg-white.min-h-screen
    ├── Header
    ├── AnimatedSection → Hero
    ├── AnimatedSection → Project Overview
    ├── AnimatedSection → Role / Challenge / Approach
    ├── AnimatedSection → Visual Identity
    ├── AnimatedSection → Featured Branding
    ├── AnimatedSection → Result
    ├── AnimatedSection → Before / After
    ├── AnimatedSection → Experience
    ├── AnimatedSection → WorkCTA
    ├── AnimatedSection → FinalCTA
    └── AnimatedSection → Footer
```

## Layout Characteristics

- stronger visual art direction
- asymmetrical decorative assets
- colored card treatment blocks
- more custom typography sizing
- less dependence on generic data-driven rendering

## Main Layout Patterns

### Hero

- centered title
- large image collage
- absolutely positioned decorative doodles
- grouping around a single primary hero image

Key container:

- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Project Overview

- two-column grid:
  - text left
  - image right

Classes:

- `grid lg:grid-cols-2 gap-10`

### Role / Challenge / Approach

- three-column card layout:
  - `grid lg:grid-cols-3 gap-6 lg:gap-8`

This section is the most visually distinctive and uses rotated cards for a playful layout rhythm.

### Featured Branding

- two-column responsive gallery:
  - `grid sm:grid-cols-2 gap-8`

### Result

- two-column media row:
  - `grid lg:grid-cols-2 gap-8`
- followed by a text outcomes row:
  - `grid md:grid-cols-2 gap-10`

### Before / After

- split comparison layout:
  - `grid md:grid-cols-2 gap-10`

## Responsive Strategy

- stacked narrative on mobile
- two columns at `sm`, `md`, or `lg` depending on section intent
- hero typography scales from `text-[2.5rem]` to `xl:text-[4.5rem]`
- decorative doodles are partially hidden or repositioned by breakpoint

## Content Strategy

Unlike the generic project page, Chopify is:

- handcrafted
- section-curated
- more visual-brand-case-study oriented
- less normalized

This route demonstrates a **bespoke portfolio storytelling pattern**, while the dynamic route demonstrates a **structured reusable case-study template**.

---

## Branding Showcase Subpage Layout

Sources:

- [app/portfolio/[slug]/branding/page.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/app/portfolio/[slug]/branding/page.tsx#L31-L47)
- [ImageCarousel.tsx](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/components/ImageCarousel.tsx#L12-L186)

## Page Structure

```text
main.w-full.h-screen.overflow-hidden.bg-black
└── ImageCarousel
    ├── fullscreen image stage
    ├── left/right nav buttons
    ├── dot navigation strip
    ├── image counter
    └── project title label
```

## Layout Characteristics

- fullscreen viewport lock
- black immersive background
- no site header
- no footer
- no sidebar
- interaction-first presentation

This subpage intentionally breaks away from the normal page shell to create a gallery mode.

## Layout State

```ts
const [currentIndex, setCurrentIndex] = useState(0)
const [isAutoPlaying, setIsAutoPlaying] = useState(true)
```

These states control:

- which image fills the stage
- autoplay behavior
- dot indicator sizing and active styling

## Navigation Layout

- arrow controls are absolutely positioned at vertical center
- title is pinned top-left
- counter is pinned top-right
- dot navigation is pinned bottom-center inside a glassy pill container

---

## Navigation, Header, and Footer Configuration

## Header Usage Across Portfolio Routes

### Portfolio Listing

Uses:

```tsx
<Header currentPage="portfolio" />
```

Result:

- gradient/glassy navbar treatment
- white text
- portfolio highlighted in nav

### Dynamic Project Detail

Uses:

```tsx
<Header currentPage="portfolio" textColor="black" background="white" />
```

Result:

- white navbar
- dark text
- better contrast against white breadcrumb/content area

### Chopify Page

Uses the same white portfolio header as the generic detail pattern.

### Branding Carousel

- no header
- no footer
- isolated fullscreen experience

## Footer Usage

`Footer` is reused on:

- listing page
- dynamic project detail page
- Chopify page

It remains the same global agency footer and is always placed after:

- `WorkCTA`
- `FinalCTA`

This creates a consistent lower-page conversion structure.

---

## CSS Class Hierarchy Patterns

## Container Pattern

The dominant container hierarchy is:

```text
section
└── div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8
    └── grid / flex / prose / image blocks
```

This pattern appears on:

- listing hero content
- listing filter section
- dynamic project sections
- Chopify sections
- CTA and footer sections

## Section Rhythm Pattern

Common vertical rhythm classes:

- `py-12`
- `py-16`
- `py-20`
- `pt-28`
- `pt-32`
- `pb-12`

The dynamic project page uses mostly `py-16` for long-form case-study rhythm.
The listing page uses `py-20` for the portfolio feed.

## Typical Grid Hierarchies

```text
grid lg:grid-cols-2
grid lg:grid-cols-3
grid lg:grid-cols-4
grid md:grid-cols-2
grid sm:grid-cols-2
```

These are combined with:

- `gap-8`
- `gap-10`
- `gap-12`
- `gap-16`

The spacing scale is intentionally generous and supports a premium editorial feel.

---

## Data-to-Layout Interaction

Portfolio layout is partly content-driven.

### Listing Page

`projects` comes from [data/projects.ts](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/data/projects.ts#L14-L36), which transforms registry data into `ProjectCard` props.

That mapping controls:

- title
- description
- technologies
- image
- reversal behavior
- starring/highlight behavior

### Dynamic Detail Page

`getProjectBySlug()` from [data/projects/index.ts](file:///Users/boufdaddy/Documents/Work/Pixelsphere-Creative/data/projects/index.ts#L52-L58) controls:

- hero title/subtitle
- service list
- brief paragraphs
- goal
- branding explanation
- problem list
- solution list
- showcase images

This means the generic detail layout is structurally reusable even though its content is static-file driven.

---

## Layout Inconsistencies and Observations

### 1. Mixed Detail Strategies

- `/portfolio/[slug]` is template-driven
- `/portfolio/chopify` is handcrafted

This produces a richer one-off page, but also creates inconsistency in maintainability and routing architecture.

### 2. PageTransition Inconsistency

- listing page uses `PageTransition`
- Chopify page uses `PageTransition`
- generic `[slug]` detail page does not

This means route transition behavior differs between portfolio entry points.

### 3. Scroll Navigation Strategy

CTA buttons use DOM lookup plus `window.location.href` fallback rather than a single navigation abstraction.

### 4. Shared Global Header Inside Specialized Layouts

The listing and detail routes both inherit the full agency navigation rather than a portfolio-specific shell.

This is consistent, but it limits the ability to build a more focused portfolio navigation experience.

### 5. Branding Subpage Isolation

The fullscreen branding carousel is highly immersive, but it abandons the normal navigation shell completely. That is intentional, though it may reduce discoverability for users who land directly there.

---

## Recommended Refactoring Opportunities

### Unify Portfolio Shell

- create a dedicated portfolio layout shell for:
  - white header variant
  - common breadcrumb/header spacing
  - CTA/footer stack

### Normalize Detail Pages

- decide whether all projects should use:
  - a reusable template
  - or a reusable template with themed slots

### Extract Section Primitives

- case-study hero
- metadata sidebar
- showcase image section
- narrative text section
- dual-column analysis section

### Standardize Transition Behavior

- apply `PageTransition` consistently to all portfolio routes or remove it from portfolio-specific pages

### Centralize Layout Metadata

- live preview URL mapping
- branding route availability
- custom hero subtitle overrides

These are currently embedded inside the dynamic page component.

---

## Final Assessment

The portfolio layout architecture is built around **two distinct patterns**:

1. **Reusable structured case-study layout** for most project pages
2. **Bespoke art-directed storytelling layout** for Chopify

The overall system is visually strong and flexible, with good use of:

- Tailwind containers
- responsive grid transitions
- animated section wrappers
- reusable CTA/footer blocks

Its main structural weakness is not visual quality, but **layout standardization**:

- route-specific exceptions
- inconsistent transition wrappers
- mixed data-driven and handcrafted approaches

From a layout-engineering perspective, the portfolio system is already well organized enough to document and extend, but it would benefit from one more layer of abstraction around reusable case-study sections and portfolio-specific page shells.
