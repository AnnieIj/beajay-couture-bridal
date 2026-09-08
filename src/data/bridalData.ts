import { GownItem, CollectionCategory, Testimonial, GalleryItem } from '../types';

export const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4";
export const HERO_POSTER_URL = "https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1920&auto=format&fit=crop";

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
    rentalStartingPrice: '₦180,000 / 3-Day Rental',
    purchaseStartingPrice: '₦750,000',
    isBespokeInspiration: true,
    isFeatured: true,
    tags: ['Cathedral Train', 'Corset Bodice', 'Royal Bride', 'Top Rental']
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
    rentalStartingPrice: '₦160,000 / 3-Day Rental',
    purchaseStartingPrice: '₦680,000',
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
    rentalStartingPrice: '₦150,000 / 3-Day Rental',
    purchaseStartingPrice: '₦620,000',
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
    rentalStartingPrice: '₦140,000 / 3-Day Rental',
    purchaseStartingPrice: '₦550,000',
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
    rentalStartingPrice: '₦175,000 / 3-Day Rental',
    purchaseStartingPrice: '₦720,000',
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
    rentalStartingPrice: '₦45,000 / 3-Day Rental',
    purchaseStartingPrice: '₦180,000',
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
    rentalStartingPrice: '₦220,000 / 3-Day Rental',
    purchaseStartingPrice: '₦920,000',
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
    rentalStartingPrice: '₦165,000 / 3-Day Rental',
    purchaseStartingPrice: '₦690,000',
    isBespokeInspiration: true,
    isFeatured: false,
    tags: ['Pearl Back', 'Hourglass', 'Vendor Favorite']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    brideName: 'Chiamaka U.',
    weddingDate: 'December 2025',
    location: 'Enugu, Nigeria',
    quote: 'Beajay Couture Bridal made me feel so special. My gown was everything I dreamed of and more. The fitting process in New Haven was seamless, private, and utterly professional.',
    gownType: 'Bespoke Cathedral Ball Gown',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't-2',
    brideName: 'Adaobi N.',
    weddingDate: 'November 2025',
    location: 'Enugu & Lagos',
    quote: 'I rented the Amara Sovereign gown for my wedding in Enugu. The condition was immaculate — it looked freshly crafted from the runway. My guests could not believe it was a rental!',
    gownType: 'Bride Rental Program',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't-3',
    brideName: 'Somtochukwu E.',
    weddingDate: 'January 2026',
    location: 'Enugu, Nigeria',
    quote: 'As a bride with specific sizing needs, finding someone who understood corsetry was everything. Beajay delivered perfection on my first fitting. I felt like an African queen.',
    gownType: 'Custom Bespoke Couture',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't-4',
    brideName: 'Kelechi O. (Stylist & Vendor Partner)',
    weddingDate: 'Vendor Partner since 2024',
    location: 'Enugu / Asaba',
    quote: 'The Vendor Rental Program is a gamechanger. I regularly style brides across the South East, and BEAJAY’s gowns and streamlined vendor reservation process are unmatched.',
    gownType: 'Vendor Rental Partner',
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
    caption: 'Individual pin fittings at the BEAJAY New Haven studio in Enugu.'
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
    title: 'Standard Rental Duration',
    detail: 'Standard gown rentals run for 3 to 5 calendar days (pickup 1-2 days before ceremony, return 1-2 days after). Extended rental periods are available on request.'
  },
  {
    title: 'Refundable Caution Deposit',
    detail: 'A refundable security deposit is held during the rental period and reimbursed immediately upon safe return of the gown after inspection.'
  },
  {
    title: 'Complimentary Professional Cleaning',
    detail: 'Never wash or dry clean the gown yourself! All BEAJAY gowns undergo specialized couture steam cleaning and sanitization prior to pickup and after return.'
  },
  {
    title: 'Minor Fitting Adjustments',
    detail: 'Temporary basting stitches and minor bustier/hem adjustments are executed in-house by our master tailors to ensure your gown fits you seamlessly without altering the core structure.'
  },
  {
    title: 'Vendor Rental Program Guidelines',
    detail: 'Registered fashion stylists, bridal planners, and boutiques receive privileged commercial rates, flexible pickup windows, and priority reservations for client photo sessions and wedding dates.'
  }
];
