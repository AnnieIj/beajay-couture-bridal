/**
 * BEAJAY COUTURE BRIDAL — CENTRAL MEDIA ASSET REGISTRY
 *
 * This central registry maps all visual and video media assets across the website.
 * Each asset specifies:
 * - `current`: Active, verified working high-resolution placeholder URL.
 * - `officialPath`: The canonical local Vite path inside `/public/media/...`
 *   where official BEAJAY brand files will reside once uploaded.
 *
 * Architecture:
 * - Local files are served from `/public/media/...` directly by Vite.
 * - Set `USE_OFFICIAL_MEDIA = true` to switch all media to the local official files
 *   without editing components.
 * - Individual media items can also be resolved dynamically using `resolveMedia(asset)`.
 */

export interface MediaAsset {
  /** The currently active working URL (placeholder) */
  current: string;
  /** The designated canonical local path in /public/media/... */
  officialPath: string;
  /** Whether this asset has a verified official file currently uploaded */
  hasOfficial?: boolean;
  /** Accessible description / label */
  alt?: string;
  /** Optional caption */
  caption?: string;
}

/**
 * Master toggle: when true, official BEAJAY media takes priority whenever an official asset is available.
 */
export const USE_OFFICIAL_MEDIA = true;

/**
 * Registry of verified official media files physically present in /public/media/.
 */
export const VERIFIED_OFFICIAL_MEDIA_PATHS: ReadonlySet<string> = new Set([
  '/media/hero/bridal-hero-v2.mp4',
  // Ball Gown Collection (24 verified official images)
  '/media/collections/ball-gown/ball-gown 001.jpeg',
  '/media/collections/ball-gown/ball-gown 002.jpeg',
  '/media/collections/ball-gown/ball-gown 003.jpeg',
  '/media/collections/ball-gown/ball-gown 004.jpg',
  '/media/collections/ball-gown/ball-gown 005.jpg',
  '/media/collections/ball-gown/ball-gown 006.jpg',
  '/media/collections/ball-gown/ball-gown 007.jpg',
  '/media/collections/ball-gown/ball-gown 008.jpg',
  '/media/collections/ball-gown/ball-gown 009.jpg',
  '/media/collections/ball-gown/ball-gown 010.jpg',
  '/media/collections/ball-gown/ball-gown 011.jpg',
  '/media/collections/ball-gown/ball-gown 012.jpg',
  '/media/collections/ball-gown/ball-gown 013.jpg',
  '/media/collections/ball-gown/ball-gown 014.jpg',
  '/media/collections/ball-gown/ball-gown 015.jpg',
  '/media/collections/ball-gown/ball-gown 016.jpg',
  '/media/collections/ball-gown/ball-gown 017.jpg',
  '/media/collections/ball-gown/ball-gown 018.jpg',
  '/media/collections/ball-gown/ball-gown 019.jpg',
  '/media/collections/ball-gown/ball-gown 020.jpg',
  '/media/collections/ball-gown/ball-gown 021.jpg',
  '/media/collections/ball-gown/ball-gown 022.jpg',
  '/media/collections/ball-gown/ball-gown 023.jpg',
  '/media/collections/ball-gown/ball-gown 024.jpg',
  // Mermaid Gowns Collection (18 verified official images)
  '/media/collections/mermaid/mermaid 001.jpeg',
  '/media/collections/mermaid/mermaid 002.jpeg',
  '/media/collections/mermaid/mermaid 003.jpeg',
  '/media/collections/mermaid/mermaid 004.jpeg',
  '/media/collections/mermaid/mermaid 005.jpeg',
  '/media/collections/mermaid/mermaid 006.jpeg',
  '/media/collections/mermaid/mermaid 007.jpeg',
  '/media/collections/mermaid/mermaid 008.jpg',
  '/media/collections/mermaid/mermaid 009.jpg',
  '/media/collections/mermaid/mermaid 010.jpg',
  '/media/collections/mermaid/mermaid 011.jpg',
  '/media/collections/mermaid/mermaid 012.jpg',
  '/media/collections/mermaid/mermaid 013.jpg',
  '/media/collections/mermaid/mermaid 014.jpg',
  '/media/collections/mermaid/mermaid 015.jpg',
  '/media/collections/mermaid/mermaid 016.jpg',
  '/media/collections/mermaid/mermaid 017.jpg',
  '/media/collections/mermaid/mermaid 020.jpg',
  // Veils & Accessories Collection (9 verified official images)
  '/media/collections/accessories/veil 001.jpg',
  '/media/collections/accessories/veil 002.jpg',
  '/media/collections/accessories/veil 003.jpg',
  '/media/collections/accessories/veil 004.jpg',
  '/media/collections/accessories/veil 005.jpg',
  '/media/collections/accessories/veil 006.jpg',
  '/media/collections/accessories/veil 008.jpg',
  '/media/collections/accessories/veil 009.jpg',
  '/media/collections/accessories/veil 010.jpg',
  // Founder & Creative Director Photography (3 verified official images)
  '/media/about/founder/beauty-okiemute-01.jpg',
  '/media/about/founder/beauty-okiemute-02.jpg',
  '/media/about/founder/beauty-okiemute-03.jpg',
  // Official Team Photography (3 verified official images)
  '/media/about/team/beajay-team-01.jpeg',
  '/media/about/team/beajay-team-02.jpeg',
  '/media/about/team/beajay-team-03.jpeg'
]);

/**
 * Official BEAJAY brand media assets organized strictly by silhouette category.
 * Contains all 51 physically verified collection photographs.
 */
export const OFFICIAL_COLLECTION_ASSETS = {
  ballGown: [
    { officialPath: '/media/collections/ball-gown/ball-gown 001.jpeg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 002.jpeg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 003.jpeg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 004.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 005.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 006.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 007.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 008.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 009.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 010.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 011.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 012.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 013.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 014.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 015.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 016.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 017.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 018.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 019.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 020.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 021.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 022.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 023.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' },
    { officialPath: '/media/collections/ball-gown/ball-gown 024.jpg', alt: 'BEAJAY COUTURE BRIDAL Ball Gown Editorial Photography' }
  ],
  mermaid: [
    { officialPath: '/media/collections/mermaid/mermaid 001.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 002.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 003.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 004.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 005.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 006.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 007.jpeg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 008.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 009.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 010.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 011.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 012.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 013.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 014.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 015.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 016.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 017.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' },
    { officialPath: '/media/collections/mermaid/mermaid 020.jpg', alt: 'BEAJAY COUTURE BRIDAL Mermaid Gown Editorial Photography' }
  ],
  accessories: [
    { officialPath: '/media/collections/accessories/veil 001.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 002.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 003.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 004.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 005.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 006.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 008.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 009.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' },
    { officialPath: '/media/collections/accessories/veil 010.jpg', alt: 'BEAJAY COUTURE BRIDAL Veil & Accessory Editorial Photography' }
  ]
} as const;

/**
 * Resolves an asset to its active URL based on current environment settings.
 * If USE_OFFICIAL_MEDIA is enabled and the asset has a verified official file uploaded,
 * it returns the canonical local path (with spaces safely percent-encoded);
 * otherwise seamlessly falls back to the placeholder.
 */
export const resolveMedia = (asset: MediaAsset): string => {
  if (USE_OFFICIAL_MEDIA) {
    if (asset.hasOfficial && asset.officialPath) {
      return encodeURI(decodeURI(asset.officialPath));
    }
    if (asset.officialPath && VERIFIED_OFFICIAL_MEDIA_PATHS.has(asset.officialPath)) {
      return encodeURI(decodeURI(asset.officialPath));
    }
  }
  return asset.current;
};

// =========================================================================
// 1. HERO MEDIA
// =========================================================================
export const HERO_MEDIA_ASSETS = {
  video: {
    current: 'https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4',
    officialPath: '/media/hero/bridal-hero-v2.mp4',
    hasOfficial: true,
    alt: 'BEAJAY Couture Bridal cinematic hero video'
  },
  poster: {
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1920&auto=format&fit=crop',
    officialPath: '/media/hero/bridal-hero-poster.jpg',
    hasOfficial: false,
    alt: 'BEAJAY bride wearing a royal veil'
  }
} as const;

// =========================================================================
// 2. COLLECTIONS MEDIA
// =========================================================================
export const COLLECTION_MEDIA_ASSETS = {
  categories: {
    ballGown: {
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/ball-gown/ball-gown 002.jpeg',
      hasOfficial: true,
      alt: 'BEAJAY COUTURE BRIDAL ball gown collection'
    },
    mermaid: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/mermaid/mermaid 001.jpeg',
      hasOfficial: true,
      alt: 'BEAJAY COUTURE BRIDAL mermaid silhouette collection'
    },
    aLine: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/a-line/a-line-cover.jpg',
      hasOfficial: false,
      alt: 'Classic A-Line Collection'
    },
    sheath: {
      current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/sheath/sheath-cover.jpg',
      hasOfficial: false,
      alt: 'Sheath Column Gown Collection'
    },
    reception: {
      current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/reception/reception-cover.jpg',
      hasOfficial: false,
      alt: 'Evening & Reception Glamour'
    },
    accessories: {
      current: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/accessories/veil 001.jpg',
      hasOfficial: true,
      alt: 'BEAJAY COUTURE BRIDAL Veils & Accessories Collection'
    }
  },
  gowns: {
    bj01: {
      primary: {
        current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/ball-gown/ball-gown 001.jpeg',
        hasOfficial: true,
        alt: 'BEAJAY COUTURE BRIDAL ball gown - The Sovereign Gown'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown 002.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL ball gown'
        },
        {
          current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown 003.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL ball gown'
        }
      ]
    },
    bj02: {
      primary: {
        current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/mermaid/mermaid 002.jpeg',
        hasOfficial: true,
        alt: 'BEAJAY COUTURE BRIDAL mermaid gown - The Sculpted Mermaid'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid 001.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL mermaid gown'
        },
        {
          current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid 003.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL mermaid gown'
        }
      ]
    },
    bj03: {
      primary: {
        current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/a-line/a-line-01.jpg',
        hasOfficial: false,
        alt: 'The Ethereal A-Line'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/a-line/a-line-01-a.jpg',
          hasOfficial: false
        },
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/a-line/a-line-01-b.jpg',
          hasOfficial: false
        }
      ]
    },
    bj04: {
      primary: {
        current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/mermaid/mermaid 005.jpeg',
        hasOfficial: true,
        alt: 'BEAJAY COUTURE BRIDAL mermaid gown - The Mermaid Gown 01'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid 006.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL mermaid gown'
        }
      ]
    },
    bj05: {
      primary: {
        current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/reception/reception-01.jpg',
        hasOfficial: false,
        alt: 'The Luminary Reception Gown'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-01-a.jpg',
          hasOfficial: false
        },
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-01-b.jpg',
          hasOfficial: false
        }
      ]
    },
    bj06: {
      primary: {
        current: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/accessories/veil 001.jpg',
        hasOfficial: true,
        alt: 'The Crown Heirloom Cathedral Veil'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/accessories/veil 002.jpg',
          hasOfficial: true
        },
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/accessories/veil 003.jpg',
          hasOfficial: true
        }
      ]
    },
    bj07: {
      primary: {
        current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/ball-gown/ball-gown 003.jpeg',
        hasOfficial: true,
        alt: 'BEAJAY COUTURE BRIDAL ball gown - The Royal Empress Gown'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown 001.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL ball gown'
        },
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown 002.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL ball gown'
        }
      ]
    },
    bj08: {
      primary: {
        current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/mermaid/mermaid 004.jpeg',
        hasOfficial: true,
        alt: 'BEAJAY COUTURE BRIDAL mermaid gown - The Draped Pearl Mermaid'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid 007.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL mermaid gown'
        }
      ]
    },
    bj09: {
      primary: {
        current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/a-line/a-line-02.jpg',
        hasOfficial: false,
        alt: 'The Grace A-Line'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/a-line/a-line-02-a.jpg',
          hasOfficial: false
        }
      ]
    },
    bj10: {
      primary: {
        current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/mermaid/mermaid 006.jpeg',
        hasOfficial: true,
        alt: 'BEAJAY COUTURE BRIDAL mermaid gown - The Mermaid Gown 02'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid 005.jpeg',
          hasOfficial: true,
          alt: 'BEAJAY COUTURE BRIDAL mermaid gown'
        }
      ]
    },
    bj11: {
      primary: {
        current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/reception/reception-02.jpg',
        hasOfficial: false,
        alt: 'The Shimmer Reception Dress'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-02-a.jpg',
          hasOfficial: false
        },
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-02-b.jpg',
          hasOfficial: false
        }
      ]
    },
    bj12: {
      primary: {
        current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/accessories/veil 004.jpg',
        hasOfficial: true,
        alt: 'The Royale Embellished Cape & Tiara'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/accessories/veil 005.jpg',
          hasOfficial: true
        }
      ]
    }
  }
} as const;

// =========================================================================
// 3. RENTALS MEDIA
// =========================================================================
export const RENTALS_MEDIA_ASSETS = {
  hero: {
    current: '/media/collections/ball-gown/ball-gown 004.jpg',
    officialPath: '/media/collections/ball-gown/ball-gown 004.jpg',
    hasOfficial: true,
    alt: 'BEAJAY Gown Rental Collection'
  },
  featured: {
    current: '/media/collections/mermaid/mermaid 003.jpeg',
    officialPath: '/media/collections/mermaid/mermaid 003.jpeg',
    hasOfficial: true,
    alt: 'Featured Rental Gown'
  }
} as const;

// =========================================================================
// 4. GALLERY MEDIA
// =========================================================================

/** Curated gallery items for homepage preview */
export const HOMEPAGE_GALLERY_MEDIA_ASSETS = [
  {
    id: 'gal-1',
    title: 'Cathedral Majesty Ball Gown',
    category: 'bridal-looks' as const,
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/collections/ball-gown/ball-gown 003.jpeg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL ball gown',
    caption: 'Full-skirted ivory ball gown with sculpted basque waist.'
  },
  {
    id: 'gal-2',
    title: 'Back Detailing & Button Spine',
    category: 'couture-details' as const,
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-02.jpg',
    hasOfficial: false,
    alt: 'Intricate bridal gown back with fabric-covered buttons along spine',
    caption: 'Meticulously spaced satin-covered buttons on sheer illusion tulle.'
  },
  {
    id: 'gal-3',
    title: 'Contoured Mermaid Silhouette',
    category: 'bridal-looks' as const,
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/collections/mermaid/mermaid 003.jpeg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL mermaid gown',
    caption: 'Precision-tailored mermaid silhouette celebrating natural bridal contours.'
  },
  {
    id: 'gal-4',
    title: 'Sculpted Mermaid Silhouette',
    category: 'bridal-looks' as const,
    current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/collections/mermaid/mermaid 006.jpeg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL mermaid gown',
    caption: 'Sculpted elegance and fluid drape for the modern BEAJAY bride.'
  },
  {
    id: 'gal-5',
    title: 'Watch Our Story Reel',
    category: 'behind-the-craft' as const,
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-05.jpg',
    hasOfficial: false,
    videoCurrent: 'https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4',
    videoOfficialPath: '/media/gallery/gallery-story-reel.mp4',
    alt: 'Bridal silhouette and veil motion in the atelier',
    caption: 'Couture movements, fabric flow, and bridal artistry in motion.',
    isVideo: true
  }
] as const;

/** Alias for backwards compatibility */
export const GALLERY_MEDIA_ASSETS = HOMEPAGE_GALLERY_MEDIA_ASSETS;

/** Full editorial archive assets for /gallery */
export const EDITORIAL_GALLERY_MEDIA_ASSETS = [
  // BRIDAL LOOKS
  {
    id: 'eg-01',
    title: 'Cathedral Majesty Ball Gown',
    category: 'bridal-looks' as const,
    categoryLabel: 'Bridal Looks',
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/collections/ball-gown/ball-gown 003.jpeg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL ball gown',
    caption: 'Full-skirted ivory ball gown with sculpted bodice and basque waist.',
    orientation: 'portrait' as const,
    featured: true,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-02',
    title: 'Contoured Mermaid Silhouette',
    category: 'bridal-looks' as const,
    categoryLabel: 'Bridal Looks',
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/collections/mermaid/mermaid 003.jpeg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL mermaid gown',
    caption: 'Precision-tailored mermaid silhouette celebrating natural bridal contours.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[4/5]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-03',
    title: 'Fluid Classical A-Line',
    category: 'bridal-looks' as const,
    categoryLabel: 'Bridal Looks',
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-03.jpg',
    hasOfficial: false,
    alt: 'Graceful A-line wedding gown with floral lace bodice and flowing skirt',
    caption: 'Balanced A-line proportions cascading gracefully in soft bridal tulle.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-04',
    title: 'Sculpted Mermaid Silhouette',
    category: 'bridal-looks' as const,
    categoryLabel: 'Bridal Looks',
    current: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/collections/mermaid/mermaid 006.jpeg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL mermaid gown',
    caption: 'Sculpted lines and fluid drape for the modern BEAJAY bride.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-top'
  },

  // COUTURE DETAILS
  {
    id: 'eg-05',
    title: 'Spine of Satin Buttons on Mesh',
    category: 'couture-details' as const,
    categoryLabel: 'Couture Details',
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-05.jpg',
    alt: 'Close-up of fabric covered buttons running down sheer illusion bodice back',
    caption: 'Hand-covered satin buttons hand-fastened along a sheer illusion spine.',
    orientation: 'square' as const,
    featured: true,
    aspectRatio: 'aspect-[1/1]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-06',
    title: 'Hand-Appliquéd French Lace',
    category: 'couture-details' as const,
    categoryLabel: 'Couture Details',
    current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-06.jpg',
    alt: 'Intricate French lace motif with light-catching crystal beadwork',
    caption: 'Botanical lace motifs hand-stitched with translucent seed beads and micro-sequins.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[4/5]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-07',
    title: 'Structured Corset Architecture',
    category: 'couture-details' as const,
    categoryLabel: 'Couture Details',
    current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-07.jpg',
    alt: 'Close-up of structured internal boning and corset foundation on dressmaker form',
    caption: 'Internal boning channels engineered for effortless posture and all-day comfort.',
    orientation: 'landscape' as const,
    featured: false,
    aspectRatio: 'aspect-[16/10]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-08',
    title: 'Textured Hem & Scalloped Lace',
    category: 'couture-details' as const,
    categoryLabel: 'Couture Details',
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-08.jpg',
    alt: 'Scalloped lace train hem resting gently across stone flooring',
    caption: 'Delicate scalloped embroidery framing the border of a ceremonial hem.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-bottom'
  },

  // DESIGN & CRAFT MOMENTS
  {
    id: 'eg-09',
    title: 'Design Concept & Sketching',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-09.jpg',
    alt: 'Couture fashion sketches and textile swatches during bridal design consultation',
    caption: 'Original design sketches translating a bride’s singular aesthetic vision.',
    orientation: 'landscape' as const,
    featured: true,
    aspectRatio: 'aspect-[16/10]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-10',
    title: 'Drape Exploration on Form',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-10.jpg',
    alt: 'Tailor arranging silk fabric folds on dressmaker mannequin',
    caption: 'Sculpting fabric in real time to establish natural drape and silhouette tension.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-11',
    title: 'Silhouette Fit & Proportions',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-11.jpg',
    alt: 'Bride undergoing personalized couture fitting session',
    caption: 'Evaluating posture, ease of movement, and seam precision in the studio.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[4/5]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-12',
    title: 'Cathedral Train Balancing',
    category: 'couture-details' as const,
    categoryLabel: 'Couture Details',
    current: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-12.jpg',
    alt: 'Bridal gown train billowing out across polished ceremony floor',
    caption: 'Dramatic train length tailored precisely to ceremonial venue proportions.',
    orientation: 'landscape' as const,
    featured: false,
    aspectRatio: 'aspect-[16/10]',
    objectPosition: 'object-center'
  },

  // VEILS & ACCESSORIES
  {
    id: 'eg-13',
    title: 'Cathedral Veil Flow in Sunlight',
    category: 'veils-accessories' as const,
    categoryLabel: 'Veils & Accessories',
    current: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-13.jpg',
    alt: 'Sheer translucent bridal veil gently floating in warm ambient sunlight',
    caption: 'Illusion tulle cathedral veil diffusing ambient light with ethereal lightness.',
    orientation: 'portrait' as const,
    featured: true,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-top'
  },
  {
    id: 'eg-14',
    title: 'Hand-Cut Lace Veil Border',
    category: 'veils-accessories' as const,
    categoryLabel: 'Veils & Accessories',
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-14.jpg',
    alt: 'Intricate lace edging of fingertip bridal veil resting on satin gown',
    caption: 'Scalloped lace appliqués meticulously aligned along the veil circumference.',
    orientation: 'square' as const,
    featured: false,
    aspectRatio: 'aspect-[1/1]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-15',
    title: 'Bridal Headpiece & Pearl Accents',
    category: 'veils-accessories' as const,
    categoryLabel: 'Veils & Accessories',
    current: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-15.jpg',
    alt: 'Bridal hair styling featuring freshwater pearl pins and delicate comb',
    caption: 'Freshwater pearl pins and artisan hair ornaments complementing the bridal veil.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[4/5]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-16',
    title: 'Chapel Length Veil Silhouette',
    category: 'veils-accessories' as const,
    categoryLabel: 'Veils & Accessories',
    current: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-16.jpg',
    alt: 'Bride framed by translucent chapel veil with soft bouquet',
    caption: 'Understated chapel veil framing the bridal portrait with soft focus.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center'
  },

  // BEHIND THE CRAFT
  {
    id: 'eg-17',
    title: 'Textile Selection & Silk Rolls',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-17.jpg',
    alt: 'Rolls of premium bridal silk, satin, and lace in the atelier workspace',
    caption: 'Curating silk mikado, French lace, and gossamer tulle for upcoming creations.',
    orientation: 'landscape' as const,
    featured: true,
    aspectRatio: 'aspect-[16/10]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-18',
    title: 'Hand-Finishing Seam Work',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-18.jpg',
    alt: 'Artisan needlework securing delicate lace trim onto bridal bodice',
    caption: 'Hand-stitched invisible hems and reinforced closures guaranteeing heirloom quality.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[4/5]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-19',
    title: 'Pattern Drafting & Measuring',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-19.jpg',
    alt: 'Measuring tape and chalk pattern markings on bridal cutting table',
    caption: 'Precise measurements translated onto custom foundation patterns.',
    orientation: 'square' as const,
    featured: false,
    aspectRatio: 'aspect-[1/1]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-20',
    title: 'Studio Motion & Veil Flight',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-20.jpg',
    videoCurrent: 'https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4',
    videoOfficialPath: '/media/gallery/gallery-story-reel.mp4',
    alt: 'Bridal veil gently drifting in studio motion capture',
    caption: 'Capturing dynamic veil flow, drape weight, and fabric balance in movement.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center',
    isVideo: true
  }
] as const;

// =========================================================================
// 5. EDITORIAL & SECTION MEDIA
// =========================================================================
export const EDITORIAL_MEDIA_ASSETS = {
  aboutModal: {
    current: '/media/about/founder/beauty-okiemute-01.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-01.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute, Founder & Creative Director of BEAJAY COUTURE BRIDAL'
  },
  appointmentCta: {
    current: '/media/collections/ball-gown/ball-gown 016.jpg',
    officialPath: '/media/collections/ball-gown/ball-gown 016.jpg',
    hasOfficial: true,
    alt: 'BEAJAY COUTURE BRIDAL atelier bridal gown creation'
  },
  perfectDress: {
    collection: {
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/ball-gown/ball-gown 002.jpeg',
      hasOfficial: true,
      alt: 'BEAJAY COUTURE BRIDAL ball gown collection'
    },
    rent: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/mermaid/mermaid 001.jpeg',
      hasOfficial: true,
      alt: 'BEAJAY COUTURE BRIDAL mermaid gown rental collection'
    },
    gallery: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/mermaid/mermaid 005.jpeg',
      hasOfficial: true,
      alt: 'BEAJAY COUTURE BRIDAL bridal gallery'
    }
  }
} as const;

// =========================================================================
// 6. ABOUT PAGE MEDIA ASSETS — OFFICIAL FOUNDER & TEAM PHOTOGRAPHY
// =========================================================================
export const ABOUT_MEDIA_ASSETS = {
  // Verified Official Founder Photography
  founderPrimary: {
    current: '/media/about/founder/beauty-okiemute-01.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-01.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute, Founder & Creative Director of BEAJAY COUTURE BRIDAL'
  },
  founderJourney: {
    current: '/media/about/founder/beauty-okiemute-02.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-02.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute, Founder & Creative Director in atelier design reflection'
  },
  founderVision: {
    current: '/media/about/founder/beauty-okiemute-03.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-03.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute presenting BEAJAY bridal creation'
  },
  // Verified Official Team Photography (Presented collectively)
  team: [
    {
      current: '/media/about/team/beajay-team-01.jpeg',
      officialPath: '/media/about/team/beajay-team-01.jpeg',
      hasOfficial: true,
      alt: 'The artisans and bridal craft team at BEAJAY COUTURE BRIDAL'
    },
    {
      current: '/media/about/team/beajay-team-02.jpeg',
      officialPath: '/media/about/team/beajay-team-02.jpeg',
      hasOfficial: true,
      alt: 'BEAJAY bridal team member preparing gown detailing'
    },
    {
      current: '/media/about/team/beajay-team-03.jpeg',
      officialPath: '/media/about/team/beajay-team-03.jpeg',
      hasOfficial: true,
      alt: 'The dedicated team behind BEAJAY COUTURE BRIDAL'
    }
  ],
  // Retained references for existing component imports
  hero: {
    current: '/media/about/founder/beauty-okiemute-01.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-01.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute, Founder & Creative Director of BEAJAY COUTURE BRIDAL'
  },
  story: {
    current: '/media/about/founder/beauty-okiemute-02.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-02.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute, Founder & Creative Director in atelier design reflection'
  },
  craft: {
    current: '/media/about/team/beajay-team-01.jpeg',
    officialPath: '/media/about/team/beajay-team-01.jpeg',
    hasOfficial: true,
    alt: 'The artisans and craft team at BEAJAY COUTURE BRIDAL'
  },
  global: {
    current: '/media/about/founder/beauty-okiemute-03.jpg',
    officialPath: '/media/about/founder/beauty-okiemute-03.jpg',
    hasOfficial: true,
    alt: 'Beauty Okiemute with BEAJAY bridal gown'
  }
} as const;

// =========================================================================
// CONSOLIDATED MEDIA REGISTRY
// =========================================================================
export const MEDIA_REGISTRY = {
  hero: HERO_MEDIA_ASSETS,
  collections: COLLECTION_MEDIA_ASSETS,
  rentals: RENTALS_MEDIA_ASSETS,
  gallery: GALLERY_MEDIA_ASSETS,
  editorial: EDITORIAL_MEDIA_ASSETS,
  about: ABOUT_MEDIA_ASSETS
} as const;

export default MEDIA_REGISTRY;
