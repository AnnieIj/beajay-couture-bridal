import { GownItem, CollectionCategory, Testimonial, GalleryItem } from '../types';

export const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4";
export const HERO_POSTER_URL = "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1920&auto=format&fit=crop";

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
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=900&auto=format&fit=crop',
    itemCount: 14
  },
  {
    id: 'mermaid',
    name: 'Mermaid',
    slug: 'mermaid',
    description: 'Form-fitting allure celebrating feminine curves, tapering down into dramatic lace flares.',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=900&auto=format&fit=crop',
    itemCount: 18
  },
  {
    id: 'a-line',
    name: 'A-Line',
    slug: 'a-line',
    description: 'Timeless grace and flattering proportions tailored with French Chantilly lace and mikado silk.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    itemCount: 12
  },
  {
    id: 'sheath',
    name: 'Sheath',
    slug: 'sheath',
    description: 'Effortless modern luxury featuring clean column silhouettes, pearl accents, and flowing crepes.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop',
    itemCount: 9
  },
  {
    id: 'reception',
    name: 'Reception Dresses',
    slug: 'reception',
    description: 'Glamorous show-stoppers made with crystal beading, metallic accents, and detachable capes.',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=900&auto=format&fit=crop',
    itemCount: 16
  },
  {
    id: 'veils-accessories',
    name: 'Veils & Accessories',
    slug: 'veils-accessories',
    description: 'Cathedral veils, pearl hair vines, crystal tiaras, and handcrafted bridal gloves.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=900&auto=format&fit=crop',
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
    silhouette: 'Grand Ball Gown with Structured Corsetry',
    description: 'A regal royal bridal masterpiece featuring an illusion corseted bodice, hand-sewn Austrian Swarovski pearls, and a cascading 3-meter cathedral train.',
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
    sizes: ['UK 8', 'UK 10', 'Atelier Tailored'],
    fabric: 'Heavy Dutchess Satin & French Embroidered Tulle',
    details: 'Hand-encrusted seed pearls, crystal beadwork, 3D floral appliqués',
    embellishments: 'Hand-encrusted seed pearls, crystal beadwork, 3D floral appliqués',
    trainStyle: '3.2 Meters Cathedral Train',
    trainLength: '3.2 Meters Cathedral Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    isBespokeInspiration: true,
    tags: ['Cathedral Train', 'Corset Bodice', 'Royal Bride', 'Featured Rental']
  },
  {
    id: 'bj-02',
    slug: 'the-chiamaka-sculpted-mermaid',
    code: 'BJ-02',
    name: 'The Chiamaka Sculpted Mermaid',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    silhouette: 'Fit-and-Flare Sculpted Mermaid',
    description: 'Sensual sculpted elegance designed to contour every curve, featuring sweetheart neckline, sheer back illusion button detailing, and godet lace skirt.',
    images: [
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
    ],
    sizes: ['UK 8', 'UK 10', 'Bespoke Adjustments'],
    fabric: 'Mikado Silk & Corded Alençon Lace',
    details: 'Glass bugle beads, delicate crystal trim along neckline',
    embellishments: 'Glass bugle beads, delicate crystal trim along neckline',
    trainStyle: '1.8 Meters Chapel Train',
    trainLength: '1.8 Meters Chapel Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    isBespokeInspiration: true,
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
    description: 'An ode to romantic purity. Gentle sweetheart bustier with off-the-shoulder draped sleeves, flowing seamlessly into soft organza layers that float when walking.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    fabric: 'Italian Silk Organza & Chantilly Lace',
    details: 'Scattered micro-sequins with subtle shimmer under studio lighting',
    embellishments: 'Scattered micro-sequins with subtle shimmer under studio lighting',
    trainStyle: '2.0 Meters Sweep Train',
    trainLength: '2.0 Meters Sweep Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    isBespokeInspiration: true,
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
    description: 'For the contemporary minimalist bride. A sleek architectural column with square neckline, thigh-high modest slit option, and detachable watteau train.',
    images: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 6', 'UK 8'],
    fabric: 'Heavy Crepe de Chine & Silk Charmeuse',
    details: 'Covered satin buttons down spine, minimalist pearl cuff detail',
    embellishments: 'Covered satin buttons down spine, minimalist pearl cuff detail',
    trainStyle: 'Detachable 2.5m Watteau Cape Train',
    trainLength: 'Detachable 2.5m Watteau Cape Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'reserved',
    featured: true,
    isFeatured: true,
    isBespokeInspiration: true,
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
    description: 'Designed for high-energy dancing and red carpet grandeur. Drenched in champagne crystal fringe, boned corset, and an optional feather-hemmed shoulder cape.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 8', 'UK 10'],
    fabric: 'Champagne Metallic Mesh & Stiffened Tulle',
    details: 'Thousands of crystal fringe beads that bounce with movement',
    embellishments: 'Thousands of crystal fringe beads that bounce with music',
    trainStyle: 'Floor Length / Dance-Friendly',
    trainLength: 'Floor Length / Dance-Friendly',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    isBespokeInspiration: true,
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
    description: 'Hand-cut 4-meter English tulle veil trimmed with beaded scallop French lace and accompanied by a gold crystal tiara.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    sizes: ['One Size (4.0 Meters)'],
    fabric: 'Imported English Soft Illusion Tulle',
    details: 'Hand-sewn scalloped lace border with pearl micro-clusters',
    embellishments: 'Hand-sewn scalloped lace border with pearl micro-clusters',
    trainStyle: '4.0 Meters Length',
    trainLength: '4.0 Meters',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: true,
    isFeatured: true,
    isBespokeInspiration: true,
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
    description: 'Opulent long-sleeved bridal royalty with baroque beaded bodice, high neckline collar, and voluminous skirt for church cathedral ceremonies.',
    images: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 10', 'Bespoke Order Only'],
    fabric: 'Brocade Damask & Metallic Threaded Lace',
    details: 'Seed pearls, teardrop crystals, gold bullion metallic embroidery',
    embellishments: 'Seed pearls, teardrop crystals, gold bullion metallic embroidery',
    trainStyle: '3.5 Meters Royal Train',
    trainLength: '3.5 Meters Royal Train',
    rentalEligible: false,
    isAvailableForRent: false,
    availability: 'coming-soon',
    featured: false,
    isFeatured: false,
    isBespokeInspiration: true,
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
    description: 'Dramatic low back with cascading pearl strands draping across the shoulder blades and an hourglass flounce of Spanish lace.',
    images: [
      'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 8', 'UK 10'],
    fabric: 'Stretch Crepe & Embroidered Spanish Lace',
    details: 'Multi-strand South Sea pearl back draping and scalloped hemline',
    embellishments: 'Multi-strand South Sea pearl back draping',
    trainStyle: '2.2 Meters Court Train',
    trainLength: '2.2 Meters',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    isBespokeInspiration: true,
    tags: ['Pearl Back', 'Hourglass', 'Couture Favorite']
  },
  {
    id: 'bj-09',
    slug: 'the-uchechi-grace-a-line',
    code: 'BJ-09',
    name: 'The Uchechi Grace A-Line',
    category: 'a-line',
    categoryLabel: 'A-Line',
    silhouette: 'V-Neckline Pleated A-Line',
    description: 'Understated aristocratic poise featuring crisp micro-pleating, deep plunging illusion V-neckline, and side pockets in heavy silk mikado.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 8', 'UK 10', 'UK 12'],
    fabric: 'Pure Silk Mikado',
    details: 'Hand-pressed box pleats, concealed in-seam pockets, covered buttons',
    embellishments: 'Hand-pressed box pleats, covered silk buttons',
    trainStyle: '2.2 Meters Cathedral Train',
    trainLength: '2.2 Meters Cathedral Train',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    isBespokeInspiration: true,
    tags: ['Mikado Silk', 'Pockets', 'Classic Elegance']
  },
  {
    id: 'bj-10',
    slug: 'the-nneka-silk-crepe-sheath',
    code: 'BJ-10',
    name: 'The Nneka Silk Crepe Sheath',
    category: 'sheath',
    categoryLabel: 'Sheath',
    silhouette: 'High-Neck Halter Column Sheath',
    description: 'Chic sculpted minimalism with an asymmetrical high halter collar, draped cowl back, and fluid liquid-silk drape.',
    images: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 6', 'UK 8', 'UK 10'],
    fabric: 'Double-Faced Silk Moroccan Crepe',
    details: 'Hand-rolled silk halter tie, low draped cowl back line',
    embellishments: 'Minimalist clean finish without external beadwork',
    trainStyle: 'Sweep Train',
    trainLength: '1.2 Meters Sweep Train',
    rentalEligible: false,
    isAvailableForRent: false,
    availability: 'available',
    featured: false,
    isFeatured: false,
    isBespokeInspiration: true,
    tags: ['Halter Neck', 'Minimalist', 'Civil Chic']
  },
  {
    id: 'bj-11',
    slug: 'the-chioma-crystal-corset-reception-dress',
    code: 'BJ-11',
    name: 'The Chioma Crystal Corset Reception Dress',
    category: 'reception',
    categoryLabel: 'Reception Dress',
    silhouette: 'Sculpted Midi with Detachable Train',
    description: 'High-octane after-party luxury featuring an exposed boned corset encrusted in glass crystals, a fitted sheath skirt, and a detachable dramatic satin overskirt.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
    sizes: ['UK 8', 'UK 10'],
    fabric: 'Crystal Netting & Duchesse Satin',
    details: 'Exposed boning with Swarovski crystals, convertible silhouette',
    embellishments: 'Swarovski crystals, metallic silver bugle beading',
    trainStyle: 'Detachable 2-Meter Dramatic Overskirt',
    trainLength: '2.0 Meters Detachable Overskirt',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    isBespokeInspiration: true,
    tags: ['Convertible', 'Reception Glam', 'After-Party']
  },
  {
    id: 'bj-12',
    slug: 'the-royale-pearl-cape-and-tiara',
    code: 'BJ-12',
    name: 'The Royale Pearl Cape & Tiara',
    category: 'veils-accessories',
    categoryLabel: 'Veils & Accessories',
    silhouette: 'Shoulder-Draped Cathedral Bridal Cape',
    description: 'An ethereal alternative to the classic veil. Featherweight illusion tulle adorned with thousands of graduated ivory pearls, cascading from tailored shoulder clasps.',
    images: [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop'
    ],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    sizes: ['One Size Fits All'],
    fabric: 'Silk Illusion Tulle',
    details: 'Graduated ivory pearls, antique gold shoulder closures',
    embellishments: 'Hand-fastened graduated pearls',
    trainStyle: '3.0 Meters Cape Length',
    trainLength: '3.0 Meters',
    rentalEligible: true,
    isAvailableForRent: true,
    availability: 'available',
    featured: false,
    isFeatured: false,
    isBespokeInspiration: true,
    tags: ['Bridal Cape', 'Pearl Detail', 'Statement Piece']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    brideName: 'Chiamaka U.',
    weddingDate: 'Wedding Reflection',
    location: 'Enugu, Nigeria',
    quote: 'Beajay Couture Bridal made me feel truly regal. The gown was everything I imagined. The private fitting session in Enugu was seamless, calm, and exquisitely professional.',
    gownType: 'Bespoke Cathedral Silhouette',
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
    quote: 'Finding an atelier with genuine mastery of corsetry and structure was essential for me. The team delivered exceptional contouring, and I felt completely confident stepping into my celebration.',
    gownType: 'Custom Atelier Fitting',
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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Cathedral Veil Drama',
    category: 'veil',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop',
    caption: 'Handcrafted cathedral veil walking into the sanctuary.'
  },
  {
    id: 'gal-2',
    title: 'Back Detailing & Pearl Spine',
    category: 'gown-details',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=800&auto=format&fit=crop',
    caption: 'Silk covered buttons and pearl encrusting on sheer illusion mesh.'
  },
  {
    id: 'gal-3',
    title: 'The Radiant Bride with Bouquet',
    category: 'bride',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    caption: 'Soft smiles moments before taking the sacred vows.'
  },
  {
    id: 'gal-4',
    title: 'Studio Fitting Precision',
    category: 'fitting',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    caption: 'Individual pin fittings at the BEAJAY bridal atelier in Enugu, Nigeria.'
  },
  {
    id: 'gal-5',
    title: 'Watch Our Story Reel',
    category: 'studio',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    caption: 'Behind the scenes at BEAJAY Couture Bridal.',
    isVideo: true
  }
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
    title: 'Atelier Cleaning & Sanitization',
    detail: 'All gowns undergo specialized couture steam pressing and sanitization before pickup and after return. Clients and vendors must not attempt external washing or dry cleaning.'
  },
  {
    title: 'Fitting & Silhouette Adjustments',
    detail: 'Professional fitting consultations ensure an optimal silhouette. All allowable temporary adjustments are executed strictly in-house by atelier tailors.'
  }
];

