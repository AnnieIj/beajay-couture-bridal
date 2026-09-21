# BEAJAY COUTURE BRIDAL

> *Crafted in Nigeria. Made for Brides Everywhere.*

This repository contains the digital bridal experience for **BEAJAY COUTURE BRIDAL**, a bridal fashion brand based in Enugu, Nigeria with a global-facing presence.

---

## Project Overview

The website is crafted as a luxury digital bridal experience rather than a conventional e-commerce storefront. Designed to evoke the atmosphere of an haute couture bridal house, the platform invites brides, bridal vendors, and international clients to explore signature collections, discover rental availability, schedule consultations, and connect directly with the studio.

Key experiences include:
- **Bridal Collections**: Silhouette-driven exploration of signature bridal couture.
- **Gown Discovery**: Detailed gown views presenting official imagery, collection information, gown details, and enquiry actions.
- **Rental Availability Enquiries**: Tailored enquiry pathways for brides and bridal vendors.
- **Bridal Consultation Booking**: A structured preference and policy workflow for studio visits and online styling.
- **Bridal Gallery & Stories**: Curated editorial imagery and real bride spotlights.
- **Brand & Founder Storytelling**: In-depth narrative chronicling the brand's Enugu heritage and creative trajectory.
- **Responsive Light and Dark Themes**: Tailored palettes with persistent user preference storage.
- **Direct WhatsApp Integration**: Context-aware enquiry links carrying gown details, dates, and client preferences directly to the BEAJAY team.

*Note: The platform focuses on editorial presentation, gown discovery, and structured enquiry workflows. Online checkout and automated payment processing are not currently part of the active frontend experience.*

---

## Design Direction

- **Luxury Bridal Editorial Aesthetic**: Inspired by high-fashion print monographs and bridal lookbooks.
- **Warm Noir & Champagne Palette**: A refined harmony of warm ivory, deep noir/charcoal, and champagne-gold accents.
- **Typographic Balance**: High-contrast serif display typography paired with clean, legible supporting sans-serif text.
- **Generous Photography Presentation**: Edge-to-edge full-bleed imagery, balanced negative space, and editorial layouts.
- **Magazine-Inspired Layouts**: Asymmetrical grids, pull quotes, and deliberate hierarchy.
- **Mobile-First Responsiveness**: Designed for fluid, thumb-friendly browsing on mobile screens while scaling gracefully to wide desktop displays.

---

## Current Features

### Collections
- **Active Silhouette Browsing**: Curated exploration across active categories:
  - **Ball Gown**: Classic full-skirted bridal silhouettes.
  - **Mermaid Gowns**: Form-fitting bridal gowns with contoured flares.
  - **Veils & Accessories**: Bridal veils and finishing accessories.
- **Collection Filtering**: Instant category-based switching and silhouette filtering.
- **Gown Detail Experience**: Dedicated detail views presenting silhouette notes, train lengths, neckline profiles, and styling recommendations.
- **Responsive Official Imagery**: High-resolution photography with aspect ratio preservation.
- **Image Lightbox & Gallery Interactions**: Full-screen modal zoom and high-fidelity image inspection.

### Rentals
- **Rental Gown Discovery**: Curated catalog of couture gowns available for rental hire.
- **Rental Availability Enquiry Flow**: Structured enquiry workflow capturing event dates, preferred gowns, and fitting notes.
- **Renter Type Selection**: Dedicated pathways for **Individual / Bride** and **Bridal Vendor / Business** rentals.
- **Date Preferences**: Event date and pickup/fitting timeframe preference collection.
- **Same-Gown Hover Imagery**: Contextual secondary angle previews on gown cards where verified official secondary media exists.
- **WhatsApp Continuation**: Pre-filled messages compiling gown names, rental types, and dates for rapid communication.

*(All rental dates and gown availability require direct confirmation from BEAJAY COUTURE BRIDAL.)*

### Bridal Consultation
- **Consultation Formats**:
  - **Physical Consultation (Enugu)**: In-person bridal consultation arranged in Enugu, Nigeria.
  - **Virtual Consultation**: Remote bridal consultation arranged with the BEAJAY team.
- **Preference Collection**: Capture of client details, wedding dates, silhouette interests, preferred dates, and time slots.
- **Consultation Policy Presentation**: Transparent presentation of the ₦15,000 fixed consultation fee ($20 USDC for international brides, non-refundable), with ₦10,000 deducted from the total payment upon proceeding with a gown booking.
- **WhatsApp Continuation**: Pre-formatted enquiry routing carrying all submitted preferences to the BEAJAY team to arrange payment and finalize calendar booking.

*(The frontend flow collects consultation preferences and policy acknowledgments; direct online payment processing is not connected.)*

### Gallery
- **Official BEAJAY Photography**: Editorial lookbook captures and real bride moments.
- **Progressive Image Loading**: Smooth asset loading with low-overhead layout stability.
- **Responsive Masonry & Editorial Grid**: Dynamic layouts designed for balanced vertical rhythm across viewports.
- **Full-Screen Lightbox**: Immersive image viewer with smooth modal transitions.
- **Keyboard & Touch Navigation**: Full keyboard navigation (Arrow keys, Escape) and touch-friendly controls.

### About
- **Founder Story**: The background, design philosophy, and artistic journey of Founder & Creative Director Okiemute Beauty.
- **Brand Journey**: Milestones tracing the evolution of BEAJAY COUTURE BRIDAL.
- **Team Presentation**: Official imagery introducing the people behind BEAJAY COUTURE BRIDAL.
- **Enugu Roots & Global Vision**: Celebration of Nigerian couture craftsmanship created for brides worldwide.

### Theme & Accessibility
- **Light and Dark Mode**: Tailored dark noir theme and warm ivory light theme.
- **Persistent Theme Preference**: Synchronized via local storage to preserve user selections across visits.
- **Accessible Controls**: Strict color contrast compliance, clear button focus states, and accessible touch targets (minimum 44px on mobile).
- **Keyboard-Friendly Interactions**: Structured tab navigation, focus trapping in dialogs, and escape-key dismissal.
- **Reduced-Motion Considerations**: Animation styles that respect operating system motion preferences.

---

## Official Media System

The application uses official BEAJAY photographic and video assets, supported by a structured media delivery pipeline:

- **Responsive Image Delivery**: Multiple width variants tailored for mobile, tablet, and desktop viewports.
- **Generated WebP Derivatives**: High-efficiency WebP files generated alongside source images for optimal compression.
- **Responsive `srcSet` & `sizes`**: Browser-directed asset selection matching exact rendering dimensions.
- **Lazy Loading**: Deferred loading for off-screen media to minimize initial network payload.
- **Optimized Media Manifest**: Precomputed asset manifest (`src/config/optimizedMediaManifest.json`) paired with runtime helper (`src/utils/optimizedMedia.ts`) managing responsive WebP derivatives, intrinsic dimensions, and srcset strings.
- **Image Fallbacks**: Graceful fallback handling ensuring visual continuity during asset loading.
- **Controlled Priority Loading**: Critical above-the-fold media (hero imagery, brand marks) prioritized for fast initial paint.
- **Gallery Progression & Lightbox Preloading**: Pre-fetching of adjacent images during lightbox navigation for seamless transitions.

---

## Tech Stack

The application is built with modern frontend web standards:

- **UI Framework**: [React](https://react.dev/) 19 (`^19.0.1`)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (`~5.8.2`)
- **Build Tool**: [Vite](https://vitejs.dev/) 6 (`^6.2.3`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4 (`^4.1.14`) via `@tailwindcss/vite`
- **Iconography**: [Lucide React](https://lucide.dev/) (`^0.546.0`)
- **Animations**: [Motion](https://motion.dev/) (`^12.23.24`)

---

## Project Structure

```
beajay-couture-bridal/
├── public/
│   ├── favicon.png
│   ├── favicon.svg
│   └── media/
│       ├── about/          # Founder, studio, and brand storytelling imagery
│       ├── brand/          # Official logos and identity marks
│       ├── collections/    # Collection silhouettes (Ball Gown, Mermaid, Veils)
│       ├── gallery/        # Editorial bridal captures and real brides
│       ├── hero/           # Hero visual assets and background media
│       ├── optimized/      # Generated responsive WebP derivatives
│       └── rentals/        # Rental collection photography
├── scripts/
│   └── optimize-media.cjs  # Media optimization and derivative generation script
├── src/
│   ├── components/         # Modular UI components (Navigation, Modals, Sections)
│   ├── config/             # Brand details, contact links, media registry & optimized manifest
│   ├── context/            # React context providers (ThemeContext)
│   ├── data/               # Structured bridal data (Collections, Gowns, Gallery)
│   ├── utils/              # Media resolution and responsive helpers
│   ├── App.tsx             # Root layout and view orchestration
│   ├── index.css           # Global CSS and Tailwind directives
│   ├── main.tsx            # Application entry point
│   └── types.ts            # TypeScript interfaces and domain types
├── index.html              # HTML entry point with metadata
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## Getting Started

### Prerequisites
- A current Node.js LTS release
- **npm** (or yarn / pnpm / bun)

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnnieIj/beajay-couture-bridal.git
   cd beajay-couture-bridal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Production Build

To compile a production-ready bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

To run TypeScript type checking:
```bash
npm run lint
```

---

## Current Project Status

The public-facing frontend experience is actively maintained as an interactive digital bridal experience. 

Transactional functionality (such as gown rental reservations and bridal consultation scheduling) is intentionally structured through guided enquiry workflows and direct WhatsApp coordination with the BEAJAY team rather than an automated production backend.

Future infrastructure under evaluation includes:
- Persistent cloud database for enquiry management
- Secure consultation fee payment integration
- Administrative authentication and studio booking dashboard
- Automated calendar availability synchronization

---

## Future Direction

- **Backend-Powered Enquiry Management**: Centralized studio dashboard to track, respond to, and manage client enquiries.
- **Secure Consultation Payment Integration**: Automated payment processing for domestic (NGN) and international (USDC) consultation fees.
- **Testimonial Moderation Workflow**: Client portal for submitting wedding photos and reviews with studio approval controls.
- **Expanded Official Media**: Ongoing integration of seasonal releases and new couture gown photography.
- **BEAJAY Academy Experience**: Dedicated future learning portal exploring bridal couture craftsmanship and dressmaking technique (planned future initiative).

---

## Brand Links

- **Instagram**: [instagram.com/beajaycouture_bridal](https://instagram.com/beajaycouture_bridal)
- **TikTok**: [tiktok.com/@beajaycouture_bridal](https://www.tiktok.com/@beajaycouture_bridal)
- **Facebook**: [Beajaycouture Bridal](https://www.facebook.com/share/1GqdFF9iQE/)
- **WhatsApp**: [+234 911 702 8264](https://wa.me/2349117028264)

---

## Credits

Designed & Developed by [Ijeoma Annie](https://github.com/AnnieIj)

---

*© 2026 BEAJAY COUTURE BRIDAL. Crafted in Nigeria. Made for Brides Everywhere.*
