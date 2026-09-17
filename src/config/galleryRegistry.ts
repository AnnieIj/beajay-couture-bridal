import { GalleryMediaItem, GalleryItem, GalleryCategory } from '../types';

/**
 * BEAJAY COUTURE BRIDAL — OFFICIAL GALLERY MEDIA REGISTRY
 *
 * Dedicated Gallery media registry independent from:
 * - Gown records
 * - CollectionMediaItem records (the 51 official Collection assets)
 * - Rental inventory
 *
 * Grounded strictly in physically verified files present in /public/media/gallery/
 *
 * Physical files audited:
 * 1. /media/gallery/9.jpg — 3024x3780 (portrait / 4:5), 702KB (unique official photograph)
 * 2. /media/gallery/8.jpeg — 4000x2252 (landscape / 16:9), 1.9MB (official camera file)
 */

export const GALLERY_FILTERS: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'ALL MOMENTS' },
  { id: 'bridal-portraits', label: 'BRIDAL PORTRAITS' },
  { id: 'couture-details', label: 'COUTURE DETAILS' },
  { id: 'fittings-bts', label: 'FITTINGS & BEHIND THE SCENES' },
];

/**
 * Verified physical gallery media items
 */
export const OFFICIAL_GALLERY_ITEMS: GalleryMediaItem[] = [
  {
    id: 'gallery-09',
    src: '/media/gallery/9.jpg',
    image: '/media/gallery/9.jpg',
    category: 'all-moments',
    categoryLabel: 'Bridal Stories',
    title: 'BEAJAY Bridal Moment',
    alt: 'BEAJAY bridal gallery photograph',
    caption: 'Bridal moments, fittings, details and stories from BEAJAY.',
    aspectRatio: 'aspect-[4/5]',
    orientation: 'portrait',
    objectPosition: 'object-center',
    featured: true,
  },
  {
    id: 'gallery-08',
    src: '/media/gallery/8.jpeg',
    image: '/media/gallery/8.jpeg',
    category: 'all-moments',
    categoryLabel: 'Bridal Stories',
    title: 'BEAJAY Bridal Moment',
    alt: 'BEAJAY bridal gallery photograph',
    caption: 'Bridal moments, fittings, details and stories from BEAJAY.',
    aspectRatio: 'aspect-[16/9]',
    orientation: 'landscape',
    objectPosition: 'object-center',
    featured: false,
  },
];

/**
 * Curated small homepage preview item(s).
 * Uses unique gallery photograph (/media/gallery/9.jpg) so it does not repeat
 * the collection photographs shown immediately above in Discover the Collections.
 */
export const HOMEPAGE_GALLERY_PREVIEW_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-preview-09',
    src: '/media/gallery/9.jpg',
    image: '/media/gallery/9.jpg',
    category: 'all-moments',
    categoryLabel: 'Bridal Stories',
    title: 'BEAJAY Bridal Moment',
    alt: 'BEAJAY bridal gallery photograph',
    caption: 'Bridal moments, fittings, details and stories from BEAJAY.',
    aspectRatio: 'aspect-[4/5]',
    orientation: 'portrait',
    featured: true,
  },
];

/**
 * Editorial Gallery items for the full Bridal Gallery page
 */
export const EDITORIAL_GALLERY_REGISTRY: GalleryItem[] = OFFICIAL_GALLERY_ITEMS.map((item) => ({
  id: item.id,
  title: item.title,
  alt: item.alt,
  category: item.category,
  categoryLabel: item.categoryLabel,
  image: item.image,
  src: item.src,
  caption: item.caption,
  orientation: item.orientation,
  aspectRatio: item.aspectRatio,
  objectPosition: item.objectPosition,
  featured: item.featured,
}));
