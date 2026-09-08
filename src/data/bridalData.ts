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

export const GOWNS_CATALOG: GownItem[] = [
  {
    id: 'bj-01',
    name: 'The Amara Sovereign Gown',
    category: 'ball-gown',
    categoryLabel: 'Ball Gown',
    description: 'A regal royal bridal masterpiece featuring an illusion corseted bodice, hand-sewn Austrian Swarovski pearls, and a cascading 3-meter cathedral train.',
    silhouette: 'Grand Ball Gown with Structured Corsetry',
    fabric: 'Heavy Dutchess Satin & French Embroidered Tulle',
    embellishments: 'Hand-encrusted seed pearls, crystal beadwork, 3D floral appliqués',
    trainLength: '3.2 Meters Cathedral Train',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Cathedral Train', 'Corset Bodice', 'Royal Bride', 'Featured Rental']
  },
  {
    id: 'bj-02',
    name: 'The Chiamaka Mermaid Silhouette',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    description: 'Sensual sculpted elegance designed to contour every curve, featuring sweetheart neckline, sheer back illusion button detailing, and godet lace skirt.',
    silhouette: 'Fit-and-Flare Sculpted Mermaid',
    fabric: 'Mikado Silk & Corded Alençon Lace',
    embellishments: 'Glass bugle beads, delicate crystal trim along neckline',
    trainLength: '1.8 Meters Chapel Train',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop'
    ],
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Hourglass Contour', 'Illusion Back', 'Popular']
  },
  {
    id: 'bj-03',
    name: 'The Ngozi Ethereal A-Line',
    category: 'a-line',
    categoryLabel: 'A-Line',
    description: 'An ode to romantic purity. Gentle sweetheart bustier with off-the-shoulder draped sleeves, flowing seamlessly into soft organza layers that float when walking.',
    silhouette: 'Romantic Classic A-Line',
    fabric: 'Italian Silk Organza & Chantilly Lace',
    embellishments: 'Scattered micro-sequins with subtle shimmer under studio lighting',
    trainLength: '2.0 Meters Sweep Train',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Romantic', 'Off-Shoulder', 'Lightweight Movement']
  },
  {
    id: 'bj-04',
    name: 'The Kamsi Modern Column Sheath',
    category: 'sheath',
    categoryLabel: 'Sheath',
    description: 'For the contemporary minimalist bride. A sleek architectural column with square neckline, thigh-high modest slit option, and detachable watteau train.',
    silhouette: 'Clean Architectural Sheath',
    fabric: 'Heavy Crepe de Chine & Silk Charmeuse',
    embellishments: 'Covered satin buttons down spine, minimalist pearl cuff detail',
    trainLength: 'Detachable 2.5m Watteau Cape Train',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Minimalist Luxury', 'Civil Wedding', 'Intimate Ceremony']
  },
  {
    id: 'bj-05',
    name: 'The Somto Luminary Reception Gown',
    category: 'reception',
    categoryLabel: 'Reception Dress',
    description: 'Designed for high-energy dancing and red carpet grandeur. Drenched in champagne crystal fringe, boned corset, and an optional feather-hemmed shoulder cape.',
    silhouette: 'Glamour Contour with Illusion Slit',
    fabric: 'Champagne Metallic Mesh & Stiffened Tulle',
    embellishments: 'Thousands of crystal fringe beads that bounce with music',
    trainLength: 'Floor Length / Dance-Friendly',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Reception Glam', 'Party Ready', 'Sparkle & Movement']
  },
  {
    id: 'bj-06',
    name: 'The Crown Heirloom Cathedral Veil',
    category: 'veils-accessories',
    categoryLabel: 'Veils & Accessories',
    description: 'Hand-cut 4-meter English tulle veil trimmed with beaded scallop French lace and accompanied by a gold crystal tiara.',
    silhouette: 'Royal Cathedral Veil',
    fabric: 'Imported English Soft Illusion Tulle',
    embellishments: 'Hand-sewn scalloped lace border with pearl micro-clusters',
    trainLength: '4.0 Meters',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Heirloom Piece', 'Cathedral Length', 'Accessories']
  },
  {
    id: 'bj-07',
    name: 'The Adanna Royal Empress Gown',
    category: 'ball-gown',
    categoryLabel: 'Ball Gown',
    description: 'Opulent long-sleeved bridal royalty with baroque beaded bodice, high neckline collar, and voluminous skirt for church cathedral ceremonies.',
    silhouette: 'Modest Royal Ball Gown',
    fabric: 'Brocade Damask & Metallic Threaded Lace',
    embellishments: 'Seed pearls, teardrop crystals, gold bullion metallic embroidery',
    trainLength: '3.5 Meters Royal Train',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: false,
    tags: ['Modest Royal', 'Long Sleeve', 'Cathedral Wedding']
  },
  {
    id: 'bj-08',
    name: 'The Ifeoma Draped Pearl Mermaid',
    category: 'mermaid',
    categoryLabel: 'Mermaid',
    description: 'Dramatic low back with cascading pearl strands draping across the shoulder blades and an hourglass flounce of Spanish lace.',
    silhouette: 'Low-Back Dramatic Mermaid',
    fabric: 'Stretch Crepe & Embroidered Spanish Lace',
    embellishments: 'Multi-strand South Sea pearl back draping',
    trainLength: '2.2 Meters',
    image: 'https://images.unsplash.com/photo-1549416869-3738b556f8f5?q=80&w=1200&auto=format&fit=crop',
    isAvailableForRent: true,
    isBespokeInspiration: true,
    isFeatured: false,
    tags: ['Pearl Back', 'Hourglass', 'Couture Favorite']
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

