import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Calendar, ArrowRight, Eye, ChevronDown } from 'lucide-react';
import { COLLECTION_MEDIA_ITEMS, COLLECTION_NAV_CATEGORIES } from '../data/bridalData';
import { CollectionMediaItem, GalleryItem, GownItem } from '../types';
import { CollectionsHero } from './CollectionsHero';
import { GalleryLightbox } from './GalleryLightbox';
import { getOptimizedMedia } from '../utils/optimizedMedia';

interface CollectionsPageProps {
  onSelectGown?: (gown: GownItem) => void;
  onBookAppointment: (gownName?: string) => void;
  initialCategory?: string;
}

const ITEMS_PER_PAGE = 16;

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onBookAppointment,
  initialCategory = 'all'
}) => {
  // Normalize initial category (e.g. 'accessories' <-> 'veils-accessories')
  const normalizeSlug = (slug: string) => {
    if (slug === 'accessories') return 'veils-accessories';
    return slug;
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(() => normalizeSlug(initialCategory));
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Sync when initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(normalizeSlug(initialCategory));
    }
  }, [initialCategory]);

  // Reset pagination on category switch
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  // Filtered Collection Media - strictly from active categories (Ball Gown, Mermaid Gowns, Veils & Accessories)
  const filteredMedia = useMemo(() => {
    return COLLECTION_MEDIA_ITEMS.filter((item) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'ball-gown') return item.category === 'ball-gown';
      if (selectedCategory === 'mermaid') return item.category === 'mermaid';
      if (selectedCategory === 'veils-accessories' || selectedCategory === 'accessories') {
        return item.category === 'accessories';
      }
      return true;
    });
  }, [selectedCategory]);

  // Transform CollectionMediaItem to GalleryItem for Lightbox viewer
  const mediaToGalleryItem = (media: CollectionMediaItem): GalleryItem => ({
    id: media.id,
    title: `BEAJAY Couture ${media.categoryLabel}`,
    category: 'bridal-looks',
    categoryLabel: media.categoryLabel,
    image: media.src,
    alt: media.alt,
    caption: 'Official BEAJAY COUTURE BRIDAL collection photography, Enugu, Nigeria.',
    featured: media.featured
  });

  const lightboxItems = useMemo(() => {
    return filteredMedia.map(mediaToGalleryItem);
  }, [filteredMedia]);

  const handleOpenLightbox = (item: CollectionMediaItem) => {
    setLightboxItem(mediaToGalleryItem(item));
  };

  const currentCategoryMeta = useMemo(() => {
    if (selectedCategory === 'ball-gown') {
      return {
        title: 'Ball Gown Collection',
        description: 'Stately volumes, architectural corsetry, and sweeping cathedral-length trains tailored for royal ceremonies.',
        count: COLLECTION_MEDIA_ITEMS.filter((i) => i.category === 'ball-gown').length
      };
    }
    if (selectedCategory === 'mermaid') {
      return {
        title: 'Mermaid Silhouette Collection',
        description: 'Contoured elegance celebrating feminine form, tapering gracefully into dramatic flared lace hem skirts.',
        count: COLLECTION_MEDIA_ITEMS.filter((i) => i.category === 'mermaid').length
      };
    }
    if (selectedCategory === 'veils-accessories' || selectedCategory === 'accessories') {
      return {
        title: 'Veils & Accessories Collection',
        description: 'Handcrafted cathedral veils, delicate illusion bridal tulle, and heirloom finishing adornments.',
        count: COLLECTION_MEDIA_ITEMS.filter((i) => i.category === 'accessories').length
      };
    }
    return {
      title: 'Full Collection Lookbook',
      description: 'The complete official photography archive of BEAJAY COUTURE BRIDAL silhouettes, fine craftsmanship, and bridal styling.',
      count: COLLECTION_MEDIA_ITEMS.length
    };
  }, [selectedCategory]);

  const visibleItems = filteredMedia.slice(0, visibleCount);
  const hasMore = visibleCount < filteredMedia.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredMedia.length));
  };

  return (
    <div id="collections-page" className="min-h-screen bg-[#FCFAF7] text-[#111111] flex flex-col">
      {/* Editorial Hero Header */}
      <CollectionsHero />

      {/* Main Showcase Section */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        
        {/* Silhouette Filter Navigation Bar */}
        <div className="border-b border-[#EAE4D9] pb-5 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[10.5px] tracking-[0.24em] font-semibold text-[#856122] uppercase">
              SELECT SILHOUETTE
            </span>
            <span className="text-xs text-neutral-500 font-light">
              Showing <strong className="text-neutral-900 font-medium">{visibleItems.length}</strong> of{' '}
              <strong className="text-neutral-900 font-medium">{filteredMedia.length}</strong> official photographs
            </span>
          </div>

          {/* Filter Pills - Strictly Active Silhouettes Only */}
          <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {COLLECTION_NAV_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              const count = cat.slug === 'all'
                ? COLLECTION_MEDIA_ITEMS.length
                : cat.slug === 'veils-accessories'
                ? COLLECTION_MEDIA_ITEMS.filter((i) => i.category === 'accessories').length
                : COLLECTION_MEDIA_ITEMS.filter((i) => i.category === cat.slug).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 sm:px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                      : 'bg-white text-neutral-700 border-[#E5DFD3] hover:border-[#C59B3F] hover:text-[#C59B3F]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`ml-2 text-[10px] font-mono ${isSelected ? 'text-[#C59B3F]' : 'text-neutral-400'}`}>
                    ({String(count).padStart(2, '0')})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Editorial Atmosphere Header */}
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal tracking-tight">
            {currentCategoryMeta.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mt-1.5">
            {currentCategoryMeta.description}
          </p>
        </div>

        {/* Editorial Lookbook Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {visibleItems.map((item, idx) => {
            const opt = getOptimizedMedia(item.src);

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative flex flex-col bg-white border border-[#EFE9DF] hover:border-[#C59B3F]/70 transition-all duration-500 cursor-pointer overflow-hidden shadow-xs hover:shadow-md"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(item);
                  }
                }}
                aria-label={`View ${item.categoryLabel} photograph`}
              >
                {/* Image Frame with Editorial 3:4 Proportions */}
                <div className="relative aspect-[3/4] w-full bg-[#F4F0E8] overflow-hidden">
                  <img
                    src={opt.src}
                    srcSet={opt.srcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                {/* Subtle Luxury Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#111111]/85 backdrop-blur-xs text-white text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-sans font-medium">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Reveal Action Bar */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                  <span className="text-[10px] tracking-[0.16em] uppercase font-medium flex items-center gap-1.5 bg-black/75 px-2.5 py-1 backdrop-blur-xs">
                    <Eye className="w-3 h-3 text-[#C59B3F]" />
                    <span>View Image</span>
                  </span>
                  <span className="font-mono text-[10px] text-neutral-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Editorial Card Caption */}
              <div className="p-3.5 bg-white border-t border-[#F0ECE1] flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#856122]">
                  {item.categoryLabel}
                </span>
                <span className="text-[10.5px] text-neutral-400 font-light">
                  BEAJAY Editorial
                </span>
              </div>
            </div>
          );
        })}
        </div>

        {/* Progressive Reveal / Load More Button */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#111111] hover:text-white text-[#111111] border border-[#D5CEBF] hover:border-[#111111] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xs cursor-pointer"
            >
              <span>LOAD MORE OFFICIAL PHOTOGRAPHS</span>
              <span className="font-mono text-[11px] text-[#C59B3F]">
                ({filteredMedia.length - visibleCount} REMAINING)
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </section>

      {/* Editorial Bottom Consultation & Rental Pathway */}
      <section className="bg-[#FAF7F0] border-t border-[#EAE4D9] py-16 sm:py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-[#856122] text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
            <span>PRIVATE FITTINGS & APPOINTMENTS</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal tracking-tight">
            EXPERIENCE THE COLLECTION IN PERSON
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            All bridal silhouettes are crafted with meticulous internal corsetry and hand-placed embellishments. Schedule a private consultation at our boutique in Enugu to explore silhouettes and discuss your wedding date.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookAppointment()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A BRIDAL CONSULTATION</span>
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 tracking-wider pt-2">
            Selected gowns available for rental bookings. Fittings by private appointment in Enugu, Nigeria.
          </p>
        </div>
      </section>

      {/* High-Resolution Collection Lightbox Viewer */}
      {lightboxItem && (
        <GalleryLightbox
          item={lightboxItem}
          items={lightboxItems}
          onClose={() => setLightboxItem(null)}
          onSelectItem={(item) => setLightboxItem(item)}
        />
      )}
    </div>
  );
};
