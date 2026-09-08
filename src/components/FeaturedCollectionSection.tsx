import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { CATEGORIES, GOWNS_CATALOG } from '../data/bridalData';
import { ActiveModal, GownItem } from '../types';

interface FeaturedCollectionSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onSelectGown: (gown: GownItem) => void;
}

export const FeaturedCollectionSection: React.FC<FeaturedCollectionSectionProps> = ({
  onOpenModal,
  onSelectGown
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
    onOpenModal('collections', { defaultCategory: categorySlug });
  };

  return (
    <section 
      id="featured-collections" 
      className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EFECE5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] tracking-tight">
              Featured Bridal Gowns
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F]" />
            <p className="font-sans text-xs sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#856122]">
              ICONIC STYLES FOR EVERY BRIDE
            </p>
          </div>

          {/* View All CTA & Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenModal('collections')}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#111111] hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59B3F]" />
            </button>

            {/* Prev / Next Carousel Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="w-10 h-10 border border-[#D5CEC0] bg-white hover:border-[#C59B3F] hover:bg-[#FAF8F5] text-neutral-800 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="w-10 h-10 border border-[#D5CEC0] bg-white hover:border-[#C59B3F] hover:bg-[#FAF8F5] text-neutral-800 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Editorial Collection Strip */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES.map((category) => {
            // Find a featured gown matching this category for quick peek
            const sampleGown = GOWNS_CATALOG.find(g => g.category === category.slug);

            return (
              <div 
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className="group shrink-0 w-[260px] sm:w-[290px] md:w-[320px] snap-start cursor-pointer flex flex-col"
              >
                {/* Image Container with Editorial Proportions */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 border border-[#E9E4DB] group-hover:border-[#C59B3F] transition-colors">
                  <img
                    src={category.image}
                    alt={`${category.name} Bridal Couture`}
                    loading="lazy"
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
                      className="w-full bg-[#FCFAF7] hover:bg-[#C59B3F] hover:text-white text-[#111111] py-2.5 px-3 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors shadow-md"
                    >
                      EXPLORE SILHOUETTES
                    </button>
                  </div>

                  {/* Piece count badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] tracking-wider px-2 py-1 uppercase font-sans">
                    {category.itemCount} Designs
                  </div>
                </div>

                {/* Category Caption Below Image */}
                <div className="pt-4 text-center space-y-1">
                  <h3 className="font-sans text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase text-[#111111] group-hover:text-[#C59B3F] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[12px] text-neutral-500 font-light line-clamp-1">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Subline */}
        <div className="mt-8 text-center border-t border-[#EFECE5] pt-6">
          <p className="text-xs text-neutral-500 font-light tracking-wider">
            Every gown in our collection is available for custom fitting, bespoke recreation, or selective rental in Enugu.
          </p>
        </div>

      </div>
    </section>
  );
};
