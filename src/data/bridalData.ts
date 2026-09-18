import { GownItem, CollectionCategory, Testimonial, GalleryItem, GalleryCategory, CollectionMediaItem } from '../types';
import { 
  HERO_MEDIA_ASSETS, 
  COLLECTION_MEDIA_ASSETS,
  OFFICIAL_COLLECTION_ASSETS,
  GALLERY_MEDIA_ASSETS,
  HOMEPAGE_GALLERY_MEDIA_ASSETS,
  EDITORIAL_GALLERY_MEDIA_ASSETS,
  resolveMedia 
} from '../config/mediaAssets';
import { BRAND_CONTACT } from '../config/brandConfig';

export const HERO_VIDEO_URL = resolveMedia(HERO_MEDIA_ASSETS.video);
export const HERO_POSTER_URL = resolveMedia(HERO_MEDIA_ASSETS.poster);

export const BUSINESS_INFO = {
  name: BRAND_CONTACT.brandName,
  tagline: BRAND_CONTACT.tagline,
  location: BRAND_CONTACT.location,
  founder: BRAND_CONTACT.founder,
  whatsapp: BRAND_CONTACT.whatsapp,
  socials: BRAND_CONTACT.socials,
  instagramHandle: BRAND_CONTACT.socials.instagram.handle,
  instagramUrl: BRAND_CONTACT.socials.instagram.url,
  facebookHandle: BRAND_CONTACT.socials.facebook.handle,
  facebookUrl: BRAND_CONTACT.socials.facebook.url
};

export const CATEGORIES: CollectionCategory[] = [
  {
    id: 'ball-gown',
    name: 'Ball Gown',
    slug: 'ball-gown',
    description: 'Classic silhouettes with dramatic full skirts and structured bodices.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.ballGown),
    active: true
  },
  {
    id: 'mermaid',
    name: 'Mermaid Gowns',
    slug: 'mermaid',
    description: 'Form-fitting allure celebrating feminine curves, tapering down into dramatic lace flares.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.mermaid),
    active: true
  },
  {
    id: 'veils-accessories',
    name: 'Veils & Accessories',
    slug: 'veils-accessories',
    description: 'Cathedral veils, hair accessories, bridal tiaras, and handcrafted finishing pieces.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.accessories),
    active: true
  },
  {
    id: 'a-line',
    name: 'A-Line',
    slug: 'a-line',
    description: 'Timeless grace and flattering proportions tailored with delicate lace and refined fabrics.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.aLine),
    active: false
  },
  {
    id: 'sheath',
    name: 'Sheath',
    slug: 'sheath',
    description: 'Effortless modern luxury featuring clean column silhouettes, subtle accents, and flowing fabrics.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.sheath),
    active: false
  },
  {
    id: 'reception',
    name: 'Reception Dresses',
    slug: 'reception',
    description: 'Glamorous show-stoppers made with hand-finished beading, metallic accents, and detachable capes.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.reception),
    active: false
  }
];

export const ACTIVE_CATEGORIES: CollectionCategory[] = CATEGORIES.filter((cat) => cat.active);
export const ACTIVE_CATEGORY_SLUGS: ReadonlySet<string> = new Set(ACTIVE_CATEGORIES.map((cat) => cat.slug));

export interface CollectionCategoryNav {
  id: string;
  name: string;
  slug: 'all' | 'ball-gown' | 'mermaid' | 'veils-accessories';
}

export const COLLECTION_NAV_CATEGORIES: CollectionCategoryNav[] = [
  { id: 'all', name: 'ALL', slug: 'all' },
  { id: 'ball-gown', name: 'BALL GOWN', slug: 'ball-gown' },
  { id: 'mermaid', name: 'MERMAID GOWNS', slug: 'mermaid' },
  { id: 'veils-accessories', name: 'VEILS & ACCESSORIES', slug: 'veils-accessories' }
];

/**
 * COLLECTION MEDIA LAYER
 * Official BEAJAY Couture Bridal collection photography registered independently from product records.
 * Holds all 51 physically verified images across Ball Gown (24), Mermaid (18), and Veils & Accessories (9).
 */
export const COLLECTION_MEDIA_ITEMS: CollectionMediaItem[] = [
  ...OFFICIAL_COLLECTION_ASSETS.ballGown.map((item, idx) => ({
    id: `bg-media-${String(idx + 1).padStart(3, '0')}`,
    src: encodeURI(decodeURI(item.officialPath)),
    category: 'ball-gown' as const,
    categoryLabel: 'Ball Gown',
    alt: item.alt || 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography',
    featured: idx < 4
  })),
  ...OFFICIAL_COLLECTION_ASSETS.mermaid.map((item, idx) => ({
    id: `mermaid-media-${String(idx + 1).padStart(3, '0')}`,
    src: encodeURI(decodeURI(item.officialPath)),
    category: 'mermaid' as const,
    categoryLabel: 'Mermaid Gowns',
    alt: item.alt || 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography',
    featured: idx < 3
  })),
  ...OFFICIAL_COLLECTION_ASSETS.accessories.map((item, idx) => ({
    id: `accessories-media-${String(idx + 1).padStart(3, '0')}`,
    src: encodeURI(decodeURI(item.officialPath)),
    category: 'accessories' as const,
    categoryLabel: 'Veils & Accessories',
    alt: item.alt || 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography',
    featured: idx < 2
  }))
];

export const GOWNS_CATALOG: GownItem[] = [
  {
    id: 'bj-01',
    slug: 'the-sovereign-gown',
    code: 'BJ-01',
    name: 'The Sovereign Gown',
    category: 'ball-gown',
    categoryLabel: 'Ball Gown',
    silhouette: 'Grand Ball Gown with Structured Bodice',
    description: 'A regal royal bridal gown featuring an illusion detailed bodice, hand-placed embellishments, and a cascading 3-meter cathedral train.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj01.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj01.gallery[0]),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj01.gallery[1])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj01.primary),
    gallery: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj01.gallery[0]),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj01.gallery[1])
    ],
    sizes: ['UK 8', 'UK 10', 'Tailored Sizing'],
    fabric: 'Dutchess Satin & Embroidered Tulle',
    details: 'Hand-placed beadwork and dimensional floral appliqués',
    embellishments: 'Hand-placed beadwork and dimensional floral appliqués',
    trainStyle: '3.2 Meters Cathedral Train',
    trainLength: '3.2 Meters Cathedral Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    tags: ['Cathedral Train', 'Detailed Bodice', 'Royal Bride', 'Featured Rental']
  },
  {
    id: 'bj-02',
    slug: 'the-sculpted-mermaid',
    code: 'BJ-02',
    name: 'The Sculpted Mermaid',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    silhouette: 'Fit-and-Flare Sculpted Mermaid',
    description: 'Sculpted elegance designed to contour the silhouette, featuring a sweetheart neckline, sheer back button detailing, and godet lace skirt.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj02.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj02.gallery[0]),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj02.gallery[1])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj02.primary),
    gallery: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj02.gallery[0]),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj02.gallery[1])
    ],
    sizes: ['UK 8', 'UK 10', 'Tailored Sizing'],
    fabric: 'Structured Satin & Corded Lace',
    details: 'Delicate beading and fine trim along the neckline',
    embellishments: 'Delicate beading and fine trim along the neckline',
    trainStyle: '1.8 Meters Chapel Train',
    trainLength: '1.8 Meters Chapel Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    tags: ['Hourglass Contour', 'Illusion Back', 'Popular']
  },
  {
    id: 'bj-03',
    slug: 'the-ethereal-a-line',
    code: 'BJ-03',
    name: 'The Ethereal A-Line',
    category: 'a-line',
    categoryLabel: 'A-Line',
    silhouette: 'Romantic Classic A-Line',
    description: 'An ode to romantic purity. Gentle sweetheart bustier with off-the-shoulder draped sleeves, flowing seamlessly into soft layered fabrics that float when walking.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj03.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj03.gallery[0])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj03.primary),
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    fabric: 'Bridal Organza & Delicate Lace',
    details: 'Scattered micro-sequins with subtle shimmer under lighting',
    embellishments: 'Scattered micro-sequins with subtle shimmer under lighting',
    trainStyle: '2.0 Meters Sweep Train',
    trainLength: '2.0 Meters Sweep Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    tags: ['Romantic', 'Off-Shoulder', 'Lightweight Movement']
  },
  {
    id: 'bj-04',
    slug: 'the-mermaid-gown-01',
    code: 'BJ-04',
    name: 'The Mermaid Gown 01',
    category: 'mermaid',
    categoryLabel: 'Mermaid Gowns',
    silhouette: 'Sculpted Mermaid',
    description: 'A striking mermaid silhouette celebrating feminine contours with tailored elegance and fluid drape.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj04.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj04.gallery[0])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj04.primary),
    gallery: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj04.gallery[0])
    ],
    sizes: ['UK 6', 'UK 8'],
    fabric: 'Tailored Crepe & Fine Lining',
    details: 'Covered buttons down spine, minimalist cuff detail',
    embellishments: 'Covered buttons down spine, minimalist cuff detail',
    trainStyle: 'Detachable 2.5m Watteau Cape Train',
    trainLength: 'Detachable 2.5m Watteau Cape Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'reserved',
    featured: true,
    isFeatured: true,
    tags: ['Mermaid Gowns', 'Bridal Elegance', 'Hourglass']
  },
  {
    id: 'bj-05',
    slug: 'the-luminary-reception-gown',
    code: 'BJ-05',
    name: 'The Luminary Reception Gown',
    category: 'reception',
    categoryLabel: 'Reception Dress',
    silhouette: 'Glamour Contour with Illusion Slit',
    description: 'Designed for celebration and evening presence. Finished with shimmering fringe beading, structured bodice, and an optional shoulder cape.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj05.primary)
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj05.primary),
    sizes: ['UK 8', 'UK 10'],
    fabric: 'Champagne Metallic Mesh & Tulle',
    details: 'Fringe beading that catches motion with celebration',
    embellishments: 'Fringe beading that catches motion with celebration',
    trainStyle: 'Floor Length / Dance-Friendly',
    trainLength: 'Floor Length / Dance-Friendly',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    tags: ['Reception Glam', 'Party Ready', 'Sparkle & Movement']
  },
  {
    id: 'bj-06',
    slug: 'the-crown-heirloom-cathedral-veil',
    code: 'BJ-06',
    name: 'The Crown Heirloom Cathedral Veil',
    category: 'veils-accessories',
    categoryLabel: 'Veils & Accessories',
    silhouette: 'Royal Cathedral Veil',
    description: 'Hand-cut 4-meter bridal tulle veil trimmed with beaded scallop lace and accompanied by a gold-tone bridal tiara.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj06.primary)
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj06.primary),
    sizes: ['One Size (4.0 Meters)'],
    fabric: 'Soft Illusion Bridal Tulle',
    details: 'Hand-placed scalloped lace border with subtle beadwork',
    embellishments: 'Hand-placed scalloped lace border with subtle beadwork',
    trainStyle: '4.0 Meters Length',
    trainLength: '4.0 Meters',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    tags: ['Heirloom Piece', 'Cathedral Length', 'Accessories']
  },
  {
    id: 'bj-07',
    slug: 'the-royal-empress-gown',
    code: 'BJ-07',
    name: 'The Royal Empress Gown',
    category: 'ball-gown',
    categoryLabel: 'Ball Gown',
    silhouette: 'Modest Royal Ball Gown',
    description: 'Long-sleeved bridal elegance with an intricately detailed bodice, high neckline collar, and voluminous skirt for church and cathedral ceremonies.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj07.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj07.gallery[0]),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj07.gallery[1])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj07.primary),
    gallery: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj07.gallery[0]),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj07.gallery[1])
    ],
    sizes: ['UK 10', 'Custom Sizing Available'],
    fabric: 'Damask & Metallic Threaded Lace',
    details: 'Fine beading, metallic accents, and detailed embroidery',
    embellishments: 'Fine beading, metallic accents, and detailed embroidery',
    trainStyle: '3.5 Meters Royal Train',
    trainLength: '3.5 Meters Royal Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Modest Royal', 'Long Sleeve', 'Cathedral Wedding']
  },
  {
    id: 'bj-08',
    slug: 'the-draped-pearl-mermaid',
    code: 'BJ-08',
    name: 'The Draped Pearl Mermaid',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    silhouette: 'Low-Back Dramatic Mermaid',
    description: 'Dramatic low back with cascading bead strands draping across the back and an elegant flounce of embroidered lace.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj08.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj08.gallery[0])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj08.primary),
    gallery: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj08.gallery[0])
    ],
    sizes: ['UK 8', 'UK 10'],
    fabric: 'Stretch Crepe & Embroidered Lace',
    details: 'Beaded back draping and scalloped hemline',
    embellishments: 'Beaded back draping',
    trainStyle: '2.2 Meters Court Train',
    trainLength: '2.2 Meters',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Beaded Back', 'Hourglass', 'Bridal Favorite']
  },
  {
    id: 'bj-09',
    slug: 'the-grace-a-line',
    code: 'BJ-09',
    name: 'The Grace A-Line',
    category: 'a-line',
    categoryLabel: 'A-Line',
    silhouette: 'V-Neckline Pleated A-Line',
    description: 'Understated poise featuring crisp pleating, deep plunging illusion V-neckline, and side pockets in tailored bridal fabric.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj09.primary)
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj09.primary),
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    fabric: 'Structured Bridal Satin',
    details: 'Hand-pressed box pleats, concealed in-seam pockets, covered buttons',
    embellishments: 'Hand-pressed box pleats, covered buttons',
    trainStyle: '2.2 Meters Cathedral Train',
    trainLength: '2.2 Meters Cathedral Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Structured Satin', 'Pockets', 'Classic Elegance']
  },
  {
    id: 'bj-10',
    slug: 'the-mermaid-gown-02',
    code: 'BJ-10',
    name: 'The Mermaid Gown 02',
    category: 'mermaid',
    categoryLabel: 'Mermaid Gowns',
    silhouette: 'Contoured Mermaid',
    description: 'Clean modern elegance featuring an asymmetrical high halter collar, draped cowl back, and fluid contour.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj10.primary),
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj10.gallery[0])
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj10.primary),
    gallery: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj10.gallery[0])
    ],
    sizes: ['UK 6', 'UK 8', 'UK 10'],
    fabric: 'Fluid Bridal Crepe',
    details: 'Halter tie finish, low draped cowl back line',
    embellishments: 'Minimalist clean finish without external beadwork',
    trainStyle: 'Sweep Train',
    trainLength: '1.2 Meters Sweep Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Mermaid Gowns', 'Halter Neck', 'Civil Chic']
  },
  {
    id: 'bj-11',
    slug: 'the-shimmer-reception-dress',
    code: 'BJ-11',
    name: 'The Shimmer Reception Dress',
    category: 'reception',
    categoryLabel: 'Reception Dress',
    silhouette: 'Sculpted Midi with Detachable Train',
    description: 'Evening reception elegance featuring a structured detailed bodice with fine shimmer, a fitted skirt, and a detachable dramatic satin overskirt.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj11.primary)
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj11.primary),
    sizes: ['UK 8', 'UK 10'],
    fabric: 'Shimmer Netting & Duchesse Satin',
    details: 'Structured bodice with subtle beading, convertible silhouette',
    embellishments: 'Subtle beading, metallic silver accents',
    trainStyle: 'Detachable 2-Meter Dramatic Overskirt',
    trainLength: '2.0 Meters Detachable Overskirt',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Convertible', 'Reception Glam', 'After-Party']
  },
  {
    id: 'bj-12',
    slug: 'the-royale-pearl-cape-and-tiara',
    code: 'BJ-12',
    name: 'The Royale Embellished Cape & Tiara',
    category: 'veils-accessories',
    categoryLabel: 'Veils & Accessories',
    silhouette: 'Shoulder-Draped Cathedral Bridal Cape',
    description: 'An ethereal alternative to the classic veil. Lightweight bridal tulle adorned with delicate accents, cascading from tailored shoulder clasps.',
    images: [
      resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj12.primary)
    ],
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.gowns.bj12.primary),
    sizes: ['One Size Fits All'],
    fabric: 'Soft Bridal Illusion Tulle',
    details: 'Delicate bead accents, tailored shoulder closures',
    embellishments: 'Hand-fastened delicate bead accents',
    trainStyle: '3.0 Meters Cape Length',
    trainLength: '3.0 Meters',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Bridal Cape', 'Accents', 'Statement Piece']
  }
];

// Active Gowns Catalog (Active collections only: Ball Gown, Mermaid Gowns, Veils & Accessories)
export const ACTIVE_GOWNS_CATALOG: GownItem[] = GOWNS_CATALOG.filter((gown) => ACTIVE_CATEGORY_SLUGS.has(gown.category));

// All active BEAJAY dresses and gowns are available for rental requests upon date confirmation
export const ACTIVE_RENTAL_GOWNS: GownItem[] = ACTIVE_GOWNS_CATALOG.filter(
  (gown) => gown.rentalEligible && gown.category !== 'veils-accessories'
);

// =========================================================================
// APPROVED BRIDAL TESTIMONIALS
// Currently empty. Populated solely by verified real submissions once approved.
// =========================================================================
export const APPROVED_TESTIMONIALS: Testimonial[] = [];
export const TESTIMONIALS: Testimonial[] = APPROVED_TESTIMONIALS;

// =========================================================================
// GALLERY MEDIA ITEMS
// Dedicated Gallery media registry independent from Gown records,
// CollectionMediaItem records (51 Collection assets), and rental inventory.
// Populated from physically verified assets in /public/media/gallery/
// =========================================================================
import {
  EDITORIAL_GALLERY_REGISTRY,
  HOMEPAGE_GALLERY_PREVIEW_ITEMS,
  GALLERY_FILTERS
} from '../config/galleryRegistry';

export const HOMEPAGE_GALLERY_ITEMS: GalleryItem[] = HOMEPAGE_GALLERY_PREVIEW_ITEMS;
export const GALLERY_ITEMS: GalleryItem[] = HOMEPAGE_GALLERY_ITEMS;
export const EDITORIAL_GALLERY_ITEMS: GalleryItem[] = EDITORIAL_GALLERY_REGISTRY;
export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string; count?: number }[] = GALLERY_FILTERS;



