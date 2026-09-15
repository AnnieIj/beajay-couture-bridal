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

/** Curated gallery items for homepage preview */
export const HOMEPAGE_GALLERY_MEDIA_ASSETS = [
  {
    id: 'gal-1',
    title: 'Cathedral Veil Drama',
    category: 'veils-accessories' as const,
    current: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-01.jpg',
    alt: 'Cathedral-length bridal veil trailing gracefully in natural light',
    caption: 'Cathedral veil with handcrafted border trim and sheer illusion drape.'
  },
  {
    id: 'gal-2',
    title: 'Back Detailing & Button Spine',
    category: 'couture-details' as const,
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-02.jpg',
    alt: 'Intricate bridal gown back with fabric-covered buttons along spine',
    caption: 'Meticulously spaced satin-covered buttons on sheer illusion tulle.'
  },
  {
    id: 'gal-3',
    title: 'The Radiant Bride with Bouquet',
    category: 'bridal-looks' as const,
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-03.jpg',
    alt: 'Bridal portrait showcasing textured lace gown and classic bouquet',
    caption: 'Refined silhouette featuring delicate textured lace and soft floral notes.'
  },
  {
    id: 'gal-4',
    title: 'Fitting & Silhouette Alignment',
    category: 'behind-the-craft' as const,
    current: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-04.jpg',
    alt: 'Bridal gown fitting session focusing on waistline contours and drape',
    caption: 'Careful proportioning and pin-fitting during gown development.'
  },
  {
    id: 'gal-5',
    title: 'Watch Our Story Reel',
    category: 'behind-the-craft' as const,
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-05.jpg',
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
    officialPath: '/media/gallery/gallery-editorial-01.jpg',
    alt: 'Regal bridal ball gown with sweeping cathedral train in architectural setting',
    caption: 'Full-skirted ivory ball gown with sculpted bodice and sweeping gossamer train.',
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
    officialPath: '/media/gallery/gallery-editorial-02.jpg',
    alt: 'Contoured mermaid wedding gown featuring illusion back and dramatic flare',
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
    alt: 'Graceful A-line wedding gown with floral lace bodice and flowing skirt',
    caption: 'Balanced A-line proportions cascading gracefully in soft bridal tulle.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-04',
    title: 'Understated Column Sheath',
    category: 'bridal-looks' as const,
    categoryLabel: 'Bridal Looks',
    current: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-04.jpg',
    alt: 'Contemporary sheath bridal gown in liquid silk satin with minimalist lines',
    caption: 'Clean architectural lines and fluid drape for the modern minimalist bride.',
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

  // BESPOKE
  {
    id: 'eg-09',
    title: 'Bespoke Concept Development',
    category: 'bespoke' as const,
    categoryLabel: 'Bespoke',
    current: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-09.jpg',
    alt: 'Couture fashion sketches and textile swatches during bespoke design consultation',
    caption: 'Original design sketches translating a bride’s singular aesthetic vision.',
    orientation: 'landscape' as const,
    featured: true,
    aspectRatio: 'aspect-[16/10]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-10',
    title: 'Drape Exploration on Form',
    category: 'bespoke' as const,
    categoryLabel: 'Bespoke',
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
    title: 'Custom Fit Silhouette Evaluation',
    category: 'bespoke' as const,
    categoryLabel: 'Bespoke',
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
    title: 'Bespoke Train Length Calibration',
    category: 'bespoke' as const,
    categoryLabel: 'Bespoke',
    current: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-12.jpg',
    alt: 'Custom bridal gown train billowing out across polished ceremony floor',
    caption: 'Bespoke train length tailored precisely to ceremonial venue proportions.',
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
    alt: 'Measuring tape and chalk pattern markings on bridal atelier cutting table',
    caption: 'Precise bespoke measurements translated onto custom foundation patterns.',
    orientation: 'square' as const,
    featured: false,
    aspectRatio: 'aspect-[1/1]',
    objectPosition: 'object-center'
  },
  {
    id: 'eg-20',
    title: 'Atelier Motion & Veil Flight',
    category: 'behind-the-craft' as const,
    categoryLabel: 'Behind The Craft',
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    officialPath: '/media/gallery/gallery-editorial-20.jpg',
    videoCurrent: 'https://assets.mixkit.co/videos/preview/mixkit-bride-wearing-a-veil-and-a-wedding-dress-41852-large.mp4',
    videoOfficialPath: '/media/gallery/gallery-story-reel.mp4',
    alt: 'Bridal veil gently drifting in atelier motion capture',
    caption: 'Capturing dynamic veil flow, drape weight, and fabric balance in movement.',
    orientation: 'portrait' as const,
    featured: false,
    aspectRatio: 'aspect-[3/4]',
    objectPosition: 'object-center',
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
// 7. ABOUT PAGE MEDIA ASSETS
// =========================================================================
export const ABOUT_MEDIA_ASSETS = {
  hero: {
    current: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
    officialPath: '/media/about/about-hero.jpg',
    alt: 'Bridal gown silhouette and veil arrangement'
  },
  story: {
    current: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/about/about-story.jpg',
    alt: 'Bridal gown back detailing and delicate fabric work'
  },
  craft: {
    current: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/about/about-craft.jpg',
    alt: 'Fine bridal lace and hand-finished beadwork'
  },
  global: {
    current: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop',
    officialPath: '/media/about/about-global.jpg',
    alt: 'Curated bridal fabrics, silk mikado, and lace rolls'
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
  editorial: EDITORIAL_MEDIA_ASSETS,
  about: ABOUT_MEDIA_ASSETS
} as const;

export default MEDIA_REGISTRY;
