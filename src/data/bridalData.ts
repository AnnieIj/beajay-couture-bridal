import { GownItem, CollectionCategory, Testimonial, GalleryItem, GalleryCategory } from '../types';
import { 
  HERO_MEDIA_ASSETS, 
  COLLECTION_MEDIA_ASSETS,
  GALLERY_MEDIA_ASSETS,
  HOMEPAGE_GALLERY_MEDIA_ASSETS,
  EDITORIAL_GALLERY_MEDIA_ASSETS,
  resolveMedia 
} from '../config/mediaAssets';

export const HERO_VIDEO_URL = resolveMedia(HERO_MEDIA_ASSETS.video);
export const HERO_POSTER_URL = resolveMedia(HERO_MEDIA_ASSETS.poster);

export const BUSINESS_INFO = {
  name: 'BEAJAY COUTURE BRIDAL',
  location: 'Enugu, Nigeria',
  instagramHandle: '@beajaycouture_bridal',
  instagramUrl: 'https://instagram.com/beajaycouture_bridal',
  schedule: 'By Appointment Only'
};

export const CATEGORIES: CollectionCategory[] = [
  {
    id: 'ball-gown',
    name: 'Ball Gowns',
    slug: 'ball-gown',
    description: 'Grand royal silhouettes with dramatic full skirts and hand-embroidered bodices.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.ballGown),
    itemCount: 14
  },
  {
    id: 'mermaid',
    name: 'Mermaid',
    slug: 'mermaid',
    description: 'Form-fitting allure celebrating feminine curves, tapering down into dramatic lace flares.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.mermaid),
    itemCount: 18
  },
  {
    id: 'a-line',
    name: 'A-Line',
    slug: 'a-line',
    description: 'Timeless grace and flattering proportions tailored with delicate lace and refined fabrics.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.aLine),
    itemCount: 12
  },
  {
    id: 'sheath',
    name: 'Sheath',
    slug: 'sheath',
    description: 'Effortless modern luxury featuring clean column silhouettes, subtle accents, and flowing fabrics.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.sheath),
    itemCount: 9
  },
  {
    id: 'reception',
    name: 'Reception Dresses',
    slug: 'reception',
    description: 'Glamorous show-stoppers made with hand-finished beading, metallic accents, and detachable capes.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.reception),
    itemCount: 16
  },
  {
    id: 'veils-accessories',
    name: 'Veils & Accessories',
    slug: 'veils-accessories',
    description: 'Cathedral veils, hair accessories, bridal tiaras, and handcrafted finishing pieces.',
    image: resolveMedia(COLLECTION_MEDIA_ASSETS.categories.accessories),
    itemCount: 22
  }
];

export interface CollectionCategoryNav {
  id: string;
  name: string;
  slug: 'all' | 'ball-gown' | 'mermaid' | 'a-line' | 'sheath' | 'reception' | 'veils-accessories';
}

export const COLLECTION_NAV_CATEGORIES: CollectionCategoryNav[] = [
  { id: 'all', name: 'All Gowns', slug: 'all' },
  { id: 'ball-gown', name: 'Ball Gown', slug: 'ball-gown' },
  { id: 'mermaid', name: 'Mermaid', slug: 'mermaid' },
  { id: 'a-line', name: 'A-Line', slug: 'a-line' },
  { id: 'sheath', name: 'Sheath', slug: 'sheath' },
  { id: 'reception', name: 'Reception Dresses', slug: 'reception' },
  { id: 'veils-accessories', name: 'Veils & Accessories', slug: 'veils-accessories' }
];

export const GOWNS_CATALOG: GownItem[] = [
  {
    id: 'bj-01',
    slug: 'the-amara-sovereign-gown',
    code: 'BJ-01',
    name: 'The Amara Sovereign Gown',
    category: 'ball-gown',
    categoryLabel: 'Ball Gown',
    silhouette: 'Grand Ball Gown with Structured Bodice',
    description: 'A regal royal bridal gown featuring an illusion detailed bodice, hand-placed embellishments, and a cascading 3-meter cathedral train.',
    images: [
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
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
    slug: 'the-chiamaka-sculpted-mermaid',
    code: 'BJ-02',
    name: 'The Chiamaka Sculpted Mermaid',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    silhouette: 'Fit-and-Flare Sculpted Mermaid',
    description: 'Sculpted elegance designed to contour the silhouette, featuring a sweetheart neckline, sheer back button detailing, and godet lace skirt.',
    images: [
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
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
    slug: 'the-ngozi-ethereal-a-line',
    code: 'BJ-03',
    name: 'The Ngozi Ethereal A-Line',
    category: 'a-line',
    categoryLabel: 'A-Line',
    silhouette: 'Romantic Classic A-Line',
    description: 'An ode to romantic purity. Gentle sweetheart bustier with off-the-shoulder draped sleeves, flowing seamlessly into soft layered fabrics that float when walking.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
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
    slug: 'the-kamsi-modern-column-sheath',
    code: 'BJ-04',
    name: 'The Kamsi Modern Column Sheath',
    category: 'sheath',
    categoryLabel: 'Sheath',
    silhouette: 'Clean Architectural Sheath',
    description: 'For the contemporary minimalist bride. A sleek architectural column with square neckline, modest slit option, and detachable watteau train.',
    images: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
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
    tags: ['Minimalist Luxury', 'Civil Wedding', 'Intimate Ceremony']
  },
  {
    id: 'bj-05',
    slug: 'the-somto-luminary-reception-gown',
    code: 'BJ-05',
    name: 'The Somto Luminary Reception Gown',
    category: 'reception',
    categoryLabel: 'Reception Dress',
    silhouette: 'Glamour Contour with Illusion Slit',
    description: 'Designed for celebration and evening presence. Finished with shimmering fringe beading, structured bodice, and an optional shoulder cape.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
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
    slug: 'the-adanna-royal-empress-gown',
    code: 'BJ-07',
    name: 'The Adanna Royal Empress Gown',
    category: 'ball-gown',
    categoryLabel: 'Ball Gown',
    silhouette: 'Modest Royal Ball Gown',
    description: 'Long-sleeved bridal elegance with an intricately detailed bodice, high neckline collar, and voluminous skirt for church and cathedral ceremonies.',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 10', 'Custom Sizing Available'],
    fabric: 'Damask & Metallic Threaded Lace',
    details: 'Fine beading, metallic accents, and detailed embroidery',
    embellishments: 'Fine beading, metallic accents, and detailed embroidery',
    trainStyle: '3.5 Meters Royal Train',
    trainLength: '3.5 Meters Royal Train',
    rentalEligible: false,
    isAvailableForRent: false,
    availability: 'coming-soon',
    featured: false,
    isFeatured: false,
    tags: ['Modest Royal', 'Long Sleeve', 'Cathedral Wedding']
  },
  {
    id: 'bj-08',
    slug: 'the-ifeoma-draped-pearl-mermaid',
    code: 'BJ-08',
    name: 'The Ifeoma Draped Pearl Mermaid',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    silhouette: 'Low-Back Dramatic Mermaid',
    description: 'Dramatic low back with cascading bead strands draping across the back and an elegant flounce of embroidered lace.',
    images: [
      'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop',
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
    slug: 'the-uchechi-grace-a-line',
    code: 'BJ-09',
    name: 'The Uchechi Grace A-Line',
    category: 'a-line',
    categoryLabel: 'A-Line',
    silhouette: 'V-Neckline Pleated A-Line',
    description: 'Understated poise featuring crisp pleating, deep plunging illusion V-neckline, and side pockets in tailored bridal fabric.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
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
    slug: 'the-nneka-silk-crepe-sheath',
    code: 'BJ-10',
    name: 'The Nneka Minimalist Crepe Sheath',
    category: 'sheath',
    categoryLabel: 'Sheath',
    silhouette: 'High-Neck Halter Column Sheath',
    description: 'Clean modern minimalism with an asymmetrical high halter collar, draped cowl back, and fluid drape.',
    images: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 6', 'UK 8', 'UK 10'],
    fabric: 'Fluid Bridal Crepe',
    details: 'Halter tie finish, low draped cowl back line',
    embellishments: 'Minimalist clean finish without external beadwork',
    trainStyle: 'Sweep Train',
    trainLength: '1.2 Meters Sweep Train',
    rentalEligible: false,
    isAvailableForRent: false,
    availability: 'available',
    featured: false,
    isFeatured: false,
    tags: ['Halter Neck', 'Minimalist', 'Civil Chic']
  },
  {
    id: 'bj-11',
    slug: 'the-chioma-shimmer-reception-dress',
    code: 'BJ-11',
    name: 'The Chioma Shimmer Reception Dress',
    category: 'reception',
    categoryLabel: 'Reception Dress',
    silhouette: 'Sculpted Midi with Detachable Train',
    description: 'Evening reception elegance featuring a structured detailed bodice with fine shimmer, a fitted skirt, and a detachable dramatic satin overskirt.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
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
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    brideName: 'Chiamaka U.',
    weddingDate: 'Wedding Reflection',
    location: 'Enugu, Nigeria',
    quote: 'Beajay Couture Bridal made me feel truly regal. The gown was everything I imagined. The private fitting session in Enugu was seamless, calm, and exquisitely professional.',
    gownType: 'Cathedral Silhouette',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't-2',
    brideName: 'Adaobi N.',
    weddingDate: 'Gown Rental Experience',
    location: 'Enugu, Nigeria',
    quote: 'Renting a bridal gown from BEAJAY was an outstanding experience. The gown condition was immaculate, the fitting adjustments were tailored with care, and the process was stress-free.',
    gownType: 'Gown Rental',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't-3',
    brideName: 'Somtochukwu E.',
    weddingDate: 'Bridal Styling Experience',
    location: 'Enugu, Nigeria',
    quote: 'Finding bridal craftsmanship with genuine attention to fit and silhouette was essential for me. The team delivered thoughtful tailoring, and I felt completely confident stepping into my celebration.',
    gownType: 'Custom Fitting Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't-4',
    brideName: 'Kelechi O.',
    weddingDate: 'Bridal Stylist Experience',
    location: 'Enugu, Nigeria',
    quote: 'Renting from BEAJAY Couture Bridal is a wonderful resource. The selection of silhouettes and the care given to gown maintenance make wedding consultations smooth and dependable.',
    gownType: 'Gown Rental Service',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
  }
];

export const HOMEPAGE_GALLERY_ITEMS: GalleryItem[] = HOMEPAGE_GALLERY_MEDIA_ASSETS.map((item) => ({
  id: item.id,
  title: item.title,
  alt: item.alt,
  category: item.category,
  image: resolveMedia(item),
  caption: item.caption,
  isVideo: 'isVideo' in item ? item.isVideo : false,
  videoUrl: 'videoCurrent' in item ? resolveMedia({ current: item.videoCurrent, officialPath: item.videoOfficialPath }) : undefined
}));

export const GALLERY_ITEMS: GalleryItem[] = HOMEPAGE_GALLERY_ITEMS;

export const EDITORIAL_GALLERY_ITEMS: GalleryItem[] = EDITORIAL_GALLERY_MEDIA_ASSETS.map((item) => ({
  id: item.id,
  title: item.title,
  alt: item.alt,
  category: item.category,
  categoryLabel: item.categoryLabel,
  image: resolveMedia(item),
  caption: item.caption,
  orientation: item.orientation,
  featured: item.featured,
  aspectRatio: item.aspectRatio,
  objectPosition: item.objectPosition,
  isVideo: 'isVideo' in item ? item.isVideo : false,
  videoUrl: 'videoCurrent' in item ? resolveMedia({ current: item.videoCurrent, officialPath: item.videoOfficialPath }) : undefined
}));

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string; count?: number }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'bridal-looks', label: 'BRIDAL LOOKS' },
  { id: 'couture-details', label: 'COUTURE DETAILS' },
  { id: 'veils-accessories', label: 'VEILS & ACCESSORIES' },
  { id: 'behind-the-craft', label: 'BEHIND THE CRAFT' }
];

export const RENTAL_POLICIES = [
  {
    title: 'Rental Booking & Duration',
    detail: 'Rental periods are coordinated around your ceremony dates, fitting schedule, and return timeline. Specific pickup and return windows are confirmed upon reservation.'
  },
  {
    title: 'Refundable Caution Deposit',
    detail: 'A refundable security deposit is held for the duration of the gown rental and returned upon inspection following the safe return of the dress.'
  },
  {
    title: 'Professional Cleaning & Sanitization',
    detail: 'All gowns undergo specialized couture steam pressing and sanitization before pickup and after return. Clients and vendors must not attempt external washing or dry cleaning.'
  },
  {
    title: 'Fitting & Silhouette Adjustments',
    detail: 'Professional fitting consultations ensure an optimal silhouette. All allowable temporary adjustments are executed strictly in-house by our bridal tailors.'
  }
];


