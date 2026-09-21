import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ACTIVE_CATEGORIES, ACTIVE_GOWNS_CATALOG } from '../data/bridalData';
import { ActiveModal, GownItem } from '../types';
import { getOptimizedMedia } from '../utils/optimizedMedia';

interface FeaturedCollectionSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onSelectGown: (gown: GownItem) => void;
  onNavigateCollections?: (category?: string) => void;
}

export const FeaturedCollectionSection: React.FC<FeaturedCollectionSectionProps> = ({
  onOpenModal,
  onSelectGown,
  onNavigateCollections
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (categorySlug: string) => {
    if (onNavigateCollections) {
      onNavigateCollections(categorySlug);
    } else {
      onOpenModal('collections', { defaultCategory: categorySlug });
    }
  };

  return (
    <section 
      id="featured-collections" 
      className="py-20 lg:py-28 bg-[#FBF9F5] dark:bg-[#121110] border-b border-[#EFECE5] dark:border-white/10 relative transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] dark:text-[#F8F5EE] tracking-tight">
              DISCOVER THE COLLECTIONS
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F]" />
            <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-[#D4CEC3] font-light">
              Explore BEAJAY's current bridal collections.
            </p>
          </div>

          {/* View All CTA & Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                if (onNavigateCollections) {
                  onNavigateCollections();
                } else {
                  onOpenModal('collections');
                }
              }}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#111111] dark:text-[#F8F5EE] hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer"
            >
              <span>VIEW ALL COLLECTIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59B3F]" />
            </button>

            {/* Prev / Next Carousel Navigation (visible on mobile where scrolling applies) */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-10 h-10 border border-[#D5CEC0] dark:border-white/15 bg-white dark:bg-[#1C1B19] hover:border-[#C59B3F] hover:bg-[#FAF8F5] dark:hover:bg-[#262421] text-neutral-800 dark:text-[#F8F5EE] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-10 h-10 border border-[#D5CEC0] dark:border-white/15 bg-white dark:bg-[#1C1B19] hover:border-[#C59B3F] hover:bg-[#FAF8F5] dark:hover:bg-[#262421] text-neutral-800 dark:text-[#F8F5EE] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Collection Layout - 3 Balanced Categories on Desktop */}
        <div 
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ACTIVE_CATEGORIES.map((category) => {
            // Find a featured gown matching this active category
            const sampleGown = ACTIVE_GOWNS_CATALOG.find(g => g.category === category.slug);

            const catOpt = getOptimizedMedia(category.image);

            return (
              <div 
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className="group shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-start cursor-pointer flex flex-col"
              >
                {/* Image Container with Editorial Proportions */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 dark:bg-[#1A1918] border border-[#E9E4DB] dark:border-white/10 group-hover:border-[#C59B3F] transition-colors">
                  <img
                    src={catOpt.src}
                    srcSet={catOpt.srcSet}
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 33vw"
                    alt={`${category.name} Bridal Couture`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Hover Quick Action */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (sampleGown) {
                          onSelectGown(sampleGown);
                        } else {
                          handleCategoryClick(category.slug);
                        }
                      }}
                      className="w-full bg-[#FCFAF7] dark:bg-[#22201E] hover:bg-[#C59B3F] dark:hover:bg-[#C59B3F] hover:text-white dark:hover:text-[#0C0C0B] text-[#111111] dark:text-[#F8F5EE] py-2.5 px-3 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors shadow-md"
                    >
                      EXPLORE SILHOUETTES
                    </button>
                  </div>
                </div>

                {/* Category Caption Below Image */}
                <div className="pt-4 text-center space-y-1">
                  <h3 className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase text-[#111111] dark:text-[#F8F5EE] group-hover:text-[#C59B3F] dark:group-hover:text-[#E6C875] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[12px] text-neutral-500 dark:text-[#A39D93] font-light line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Subline */}
        <div className="mt-8 text-center border-t border-[#EFECE5] dark:border-white/10 pt-6">
          <p className="text-xs text-neutral-500 dark:text-[#A39D93] font-light tracking-wider">
            Gowns in our collection are available for fittings, consultations, or rental requests with BEAJAY COUTURE BRIDAL in Enugu, Nigeria.
          </p>
        </div>

      </div>
    </section>
  );
};
