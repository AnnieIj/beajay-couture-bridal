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
  /** Accessible description / label */
  alt?: string;
  /** Optional caption */
  caption?: string;
}

/**
 * Toggle for serving official local media files versus current working placeholders.
 * Defaults to `false` until official BEAJAY assets are uploaded to /public/media/.
 */
export const USE_OFFICIAL_MEDIA = false;

/**
 * Resolves an asset to its active URL based on current environment settings.
 */
export const resolveMedia = (asset: MediaAsset): string => {
  return USE_OFFICIAL_MEDIA ? asset.officialPath : asset.current;
};

// =========================================================================
// 1. HERO MEDIA
// =========================================================================
export const HERO_MEDIA_ASSETS = {
  video: {
    current: 'https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4',
    officialPath: '/media/hero/bridal-hero.mp4',
    alt: 'BEAJAY Couture Bridal cinematic hero video'
  },
  poster: {
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1920&auto=format&fit=crop',
    officialPath: '/media/hero/bridal-hero-poster.jpg',
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
      officialPath: '/media/collections/ball-gown/ball-gown-cover.jpg',
      alt: 'Royal Ball Gown Collection'
    },
    mermaid: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/mermaid/mermaid-cover.jpg',
      alt: 'Mermaid & Fit-and-Flare Silhouette Collection'
    },
    aLine: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/a-line/a-line-cover.jpg',
      alt: 'Classic A-Line Collection'
    },
    sheath: {
      current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/sheath/sheath-cover.jpg',
      alt: 'Modern Sheath Collection'
    },
    reception: {
      current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/reception/reception-cover.jpg',
      alt: 'Evening & Reception Glamour'
    },
    accessories: {
      current: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/accessories/veil-cover.jpg',
      alt: 'Veils & Bridal Accessories'
    }
  },
  gowns: {
    bj01: {
      primary: {
        current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/ball-gown/ball-gown-01.jpg',
        alt: 'The Amara Sovereign Gown'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown-01-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown-01-b.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown-01-c.jpg'
        }
      ]
    },
    bj02: {
      primary: {
        current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/mermaid/mermaid-01.jpg',
        alt: 'The Kamsi Sculpted Mermaid'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid-01-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid-01-b.jpg'
        }
      ]
    },
    bj03: {
      primary: {
        current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/a-line/a-line-01.jpg',
        alt: 'The Nkechi Grace A-Line'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/a-line/a-line-01-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/a-line/a-line-01-b.jpg'
        }
      ]
    },
    bj04: {
      primary: {
        current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/reception/reception-01.jpg',
        alt: 'The Adaeze Luminary Gown'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-01-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-01-b.jpg'
        }
      ]
    },
    bj05: {
      primary: {
        current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/sheath/sheath-01.jpg',
        alt: 'The Somto Minimalist Column'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/sheath/sheath-01-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/sheath/sheath-01-b.jpg'
        }
      ]
    },
    bj06: {
      primary: {
        current: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/accessories/veil-01.jpg',
        alt: 'The Ogechi Cathedral Veil'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/accessories/veil-01-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/accessories/veil-01-b.jpg'
        }
      ]
    },
    bj07: {
      primary: {
        current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/ball-gown/ball-gown-02.jpg',
        alt: 'The Chidinma Pearl Ball Gown'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/ball-gown/ball-gown-02-a.jpg'
        }
      ]
    },
    bj08: {
      primary: {
        current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/mermaid/mermaid-02.jpg',
        alt: 'The Ifeoma Illusion Trumpet'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/mermaid/mermaid-02-a.jpg'
        }
      ]
    },
    bj09: {
      primary: {
        current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/a-line/a-line-02.jpg',
        alt: 'The Uchechi Botanical A-Line'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/a-line/a-line-02-a.jpg'
        }
      ]
    },
    bj10: {
      primary: {
        current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/sheath/sheath-02.jpg',
        alt: 'The Ngozi High-Neck Halter'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/sheath/sheath-02-a.jpg'
        }
      ]
    },
    bj11: {
      primary: {
        current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/reception/reception-02.jpg',
        alt: 'The Chioma Shimmer Reception Dress'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-02-a.jpg'
        },
        {
          current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/reception/reception-02-b.jpg'
        }
      ]
    },
    bj12: {
      primary: {
        current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
        officialPath: '/media/collections/accessories/veil-02.jpg',
        alt: 'The Royal Pearl & Crystal Tiara'
      },
      gallery: [
        {
          current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
          officialPath: '/media/collections/accessories/veil-02-a.jpg'
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
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/rentals/rentals-hero.jpg',
    alt: 'BEAJAY Gown Rental Collection'
  },
  featured: {
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/rentals/rental-featured.jpg',
    alt: 'Featured Rental Gown'
  }
} as const;

// =========================================================================
// 4. BESPOKE MEDIA
// =========================================================================
export const BESPOKE_MEDIA_ASSETS = {
  hero: {
    current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/bespoke/bespoke-hero.jpg',
    alt: 'Bridal gown construction and fabric draping on dressmaker form'
  },
  atelier: {
    sketching: {
      current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/atelier-sketching.jpg',
      alt: 'Concept sketching and design ideation'
    },
    draping: {
      current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/atelier-draping.jpg',
      alt: 'Artisan draping on mannequin'
    },
    structure: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/atelier-structure.jpg',
      alt: 'Thoughtful gown structure and inner support'
    },
    fitting: {
      current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/atelier-fitting.jpg',
      alt: 'Precision fitting and silhouette alignment'
    }
  },
  details: {
    beading: {
      current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/details-beading.jpg',
      alt: 'Delicate hand-sewn beadwork'
    },
    lace: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/details-lace.jpg',
      alt: 'Careful lace appliqué placement'
    },
    veils: {
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/details-veils.jpg',
      alt: 'Veil and train tailoring'
    },
    finishing: {
      current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/details-finishing.jpg',
      alt: 'Fine bridal finishing and closures'
    }
  },
  journey: [
    {
      step: '01',
      title: 'CONSULTATION',
      subtitle: "Understanding the Bride's Vision",
      description: "Understanding the bride's vision, wedding aesthetic and preferred direction.",
      current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/journey-01.jpg'
    },
    {
      step: '02',
      title: 'DESIGN',
      subtitle: 'Developing the Gown Concept',
      description: 'Developing the creative direction and gown concept.',
      current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/journey-02.jpg'
    },
    {
      step: '03',
      title: 'FABRIC & DETAILS',
      subtitle: 'Materials & Embellishment',
      description: 'Exploring materials, embellishment and finishing details.',
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/journey-03.jpg'
    },
    {
      step: '04',
      title: 'FITTINGS',
      subtitle: 'Refining Fit & Silhouette',
      description: "Refining the gown's fit and silhouette during the creation process.",
      current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/journey-04.jpg'
    },
    {
      step: '05',
      title: 'FINAL CREATION',
      subtitle: 'The Finished Bridal Piece',
      description: 'Completing the finished BEAJAY bridal piece.',
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/journey-05.jpg'
    }
  ],
  silhouettes: {
    ballGown: {
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/bespoke/silhouette-ball-gown.jpg'
    },
    mermaid: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/bespoke/silhouette-mermaid.jpg'
    },
    aLine: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/bespoke/silhouette-a-line.jpg'
    },
    sheath: {
      current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/bespoke/silhouette-sheath.jpg'
    }
  },
  craftsmanship: {
    lace: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/craft-lace.jpg'
    },
    beading: {
      current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/craft-beading.jpg'
    },
    structure: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/craft-structure.jpg'
    },
    draping: {
      current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/craft-draping.jpg'
    },
    veils: {
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/craft-veils.jpg'
    },
    finishing: {
      current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
      officialPath: '/media/bespoke/craft-finishing.jpg'
    }
  },
  inspirationGallery: [
    {
      id: 'bg-1',
      title: 'Concept & Silhouette Exploration',
      category: 'Craftsmanship' as const,
      current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-01.jpg',
      caption: 'Exploring silhouette proportions, line work, and drape during design development.'
    },
    {
      id: 'bg-2',
      title: 'Draped Bodice on Form',
      category: 'Atelier' as const,
      current: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-02.jpg',
      caption: 'Arranging fabric folds and exploring structure on the dress form.'
    },
    {
      id: 'bg-3',
      title: 'Lace Appliqué Placement',
      category: 'Details' as const,
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-03.jpg',
      caption: 'Exploring delicate lace motifs and textured floral accents.'
    },
    {
      id: 'bg-4',
      title: 'Illusion Back & Covered Buttons',
      category: 'Details' as const,
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-04.jpg',
      caption: 'Meticulously spaced fabric-covered buttons along an illusion back line.'
    },
    {
      id: 'bg-5',
      title: 'Hand-Finished Detailing',
      category: 'Craftsmanship' as const,
      current: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-05.jpg',
      caption: 'Subtle beadwork and textural detailing catching the light.'
    },
    {
      id: 'bg-6',
      title: 'Silhouette Fitting & Proportions',
      category: 'Atelier' as const,
      current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-06.jpg',
      caption: 'Evaluating comfort, balance, and hemline alignment during fitting.'
    },
    {
      id: 'bg-7',
      title: 'Veil & Train Detailing',
      category: 'Silhouettes' as const,
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-07.jpg',
      caption: 'Soft bridal veil bordered with delicate coordinating lace.'
    },
    {
      id: 'bg-8',
      title: 'Bridal Silhouette Inspiration',
      category: 'Bridal Inspiration' as const,
      current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop',
      officialPath: '/media/bespoke/inspiration-08.jpg',
      caption: 'A graceful bridal silhouette crafted with care and presence.'
    }
  ]
} as const;

// =========================================================================
// 5. GALLERY MEDIA
// =========================================================================
export const GALLERY_MEDIA_ASSETS = [
  {
    id: 'gal-1',
    title: 'Cathedral Veil Drama',
    category: 'veil' as const,
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-01.jpg',
    caption: 'Handcrafted cathedral veil walking into the sanctuary.'
  },
  {
    id: 'gal-2',
    title: 'Back Detailing & Button Spine',
    category: 'gown-details' as const,
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=800&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-02.jpg',
    caption: 'Fabric-covered buttons and delicate detailing on sheer illusion mesh.'
  },
  {
    id: 'gal-3',
    title: 'The Radiant Bride with Bouquet',
    category: 'bride' as const,
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-03.jpg',
    caption: 'Soft smiles moments before taking the sacred vows.'
  },
  {
    id: 'gal-4',
    title: 'Fitting Precision',
    category: 'fitting' as const,
    current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-04.jpg',
    caption: 'Individual fittings and tailored adjustments in Enugu, Nigeria.'
  },
  {
    id: 'gal-5',
    title: 'Watch Our Story Reel',
    category: 'studio' as const,
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-05.jpg',
    videoCurrent: 'https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4',
    videoOfficialPath: '/media/gallery/gallery-story-reel.mp4',
    caption: 'Behind the scenes at BEAJAY Couture Bridal.',
    isVideo: true
  }
] as const;

// =========================================================================
// 6. EDITORIAL & SECTION MEDIA
// =========================================================================
export const EDITORIAL_MEDIA_ASSETS = {
  aboutModal: {
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    officialPath: '/media/gallery/about-studio.jpg',
    alt: 'BEAJAY Couture Bridal fitting studio in Enugu'
  },
  appointmentCta: {
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop',
    officialPath: '/media/gallery/appointment-cta-bg.jpg',
    alt: 'Bridal consultation backdrop'
  },
  perfectDress: {
    collection: {
      current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/collections/ball-gown/ball-gown-01.jpg',
      alt: 'Luxury bridal ball gown with cathedral train'
    },
    rent: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/rentals/rental-card.jpg',
      alt: 'Bride wearing exquisite off-shoulder gown for rental'
    },
    bespoke: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      officialPath: '/media/bespoke/bespoke-card.jpg',
      alt: 'Intricate bridal back detailing and bespoke lace fitting'
    }
  },
  bespokeSection: {
    primary: {
      current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
      officialPath: '/media/bespoke/bespoke-section-primary.jpg',
      alt: 'Bride bespoke gown back with buttons and lace'
    },
    secondary: {
      current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
      officialPath: '/media/bespoke/bespoke-section-secondary.jpg',
      alt: 'Hand tailoring and lace embroidery detail'
    }
  }
} as const;

// =========================================================================
// CONSOLIDATED MEDIA REGISTRY
// =========================================================================
export const MEDIA_REGISTRY = {
  hero: HERO_MEDIA_ASSETS,
  collections: COLLECTION_MEDIA_ASSETS,
  rentals: RENTALS_MEDIA_ASSETS,
  bespoke: BESPOKE_MEDIA_ASSETS,
  gallery: GALLERY_MEDIA_ASSETS,
  editorial: EDITORIAL_MEDIA_ASSETS
} as const;

export default MEDIA_REGISTRY;
