import React, { useState, useMemo, useEffect } from 'react';
import { 
  Play, 
  ZoomIn, 
  ArrowRight, 
  Instagram, 
  Sparkles 
} from 'lucide-react';
import { GalleryItem, GalleryCategory } from '../types';
import { EDITORIAL_GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/bridalData';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem, items: GalleryItem[]) => void;
  onNavigateCollections: () => void;
  onBookAppointment?: () => void;
}

// Hook to detect responsive column count matching editorial breakpoints:
// Mobile (<768px): 1 column
// Tablet (768px - 1023px): 2 columns
// Desktop (1024px - 1279px): 3 columns (editorial moodboard)
// Wide Desktop (1280px+ / 1440px+): 4 columns (scattered editorial masonry)
const useGalleryColumns = () => {
  const [cols, setCols] = useState<number>(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1024) return 2;
    if (w < 1280) return 3;
    return 4;
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const next = w < 768 ? 1 : w < 1024 ? 2 : w < 1280 ? 3 : 4;
      setCols((prev) => (prev !== next ? next : prev));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return cols;
};

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenLightbox,
  onNavigateCollections,
  onBookAppointment
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const columnCount = useGalleryColumns();

  // Determine which specific categories contain items (excluding 'all')
  const categoriesWithItems = useMemo(() => {
    return GALLERY_CATEGORIES.filter((cat) => {
      if (cat.id === 'all') return false;
      return EDITORIAL_GALLERY_ITEMS.some((item) => item.category === cat.id);
    });
  }, []);

  // Requirement: Hide the entire filter navigation when there is only one non-empty category.
  // Automatically show it again in the future when 2 or more verified categories contain photographs.
  const shouldShowFilters = categoriesWithItems.length >= 2;

  const handleCategoryChange = (cat: GalleryCategory) => {
    setActiveCategory(cat);
    setVisibleCount(16);
  };

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return EDITORIAL_GALLERY_ITEMS;
    }
    return EDITORIAL_GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Progressive batch rendering (16 initial items, expanding by 16 on Load More)
  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  // Distribute displayed items into balanced columns while preserving order and stability on Load More
  const columnsData = useMemo(() => {
    const colsArray: { item: GalleryItem; globalIndex: number }[][] = Array.from(
      { length: columnCount },
      () => []
    );
    displayedItems.forEach((item, globalIndex) => {
      colsArray[globalIndex % columnCount].push({ item, globalIndex });
    });
    return colsArray;
  }, [displayedItems, columnCount]);

  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, filteredItems.length));
  };

  // Deterministic top staggering for columns on desktop to ensure non-aligned starts
  const getColumnTopPadding = (colIndex: number, totalCols: number) => {
    if (totalCols === 1) return 'pt-0';
    if (totalCols === 2) {
      return colIndex === 1 ? 'pt-4' : 'pt-0';
    }
    if (totalCols === 3) {
      // 1024px: Column 0 starts at top, Column 1 starts 48px lower, Column 2 starts 20px lower
      if (colIndex === 1) return 'pt-12';
      if (colIndex === 2) return 'pt-5';
      return 'pt-0';
    }
    // 1280px / 1366px / 1440px+: 4 columns with rich asymmetric offsets
    if (colIndex === 1) return 'pt-14';
    if (colIndex === 2) return 'pt-6';
    if (colIndex === 3) return 'pt-16';
    return 'pt-0';
  };

  // Deterministic subtle spacing rhythm between photographs in a column
  const getItemMarginBottom = (globalIndex: number, totalCols: number) => {
    if (totalCols === 1) return 'mb-4 sm:mb-6';
    if (totalCols === 2) return 'mb-6';
    // Subtle rhythm based on global index: creates breathing room without large gaps
    const r = globalIndex % 7;
    switch (r) {
      case 1:
        return 'mb-10'; // 40px - visual breathing room
      case 4:
        return 'mb-9';  // 36px
      case 2:
        return 'mb-5';  // 20px
      case 5:
        return 'mb-8';  // 32px
      default:
        return 'mb-6';  // 24px standard
    }
  };

  return (
    <div className="bg-[#FCFAF7] min-h-screen text-[#1A1A1A] pt-24 sm:pt-28 pb-20">
      
      {/* =========================================================================
          1. RESTRAINED EDITORIAL HERO
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16 text-center border-b border-[#EAE3D5]">
        
        {/* Subtle Decorative Atmosphere */}
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#F5EFE4] border border-[#E3D9C6] text-[#8C6B28]">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase">
            THE BEAJAY GALLERY
          </span>
        </div>

        {/* Primary Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111111] tracking-tight mb-5 max-w-4xl mx-auto leading-[1.12]">
          BEAJAY Bridal Stories
        </h1>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto mb-6" />

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed mb-4">
          Bridal moments, fittings, details and stories from BEAJAY.
        </p>

        {/* Brand Statement */}
        <p className="font-serif text-xs sm:text-sm tracking-[0.16em] uppercase text-[#856122] font-medium">
          Crafted in Nigeria. Made for Brides Everywhere.
        </p>

        {/* Restrained Instagram Follower Link */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <Instagram className="w-3.5 h-3.5 text-[#C59B3F]" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-700">FOLLOW THE JOURNEY:</span>
          <a
            href="https://instagram.com/beajaycouture_bridal"
            target="_blank"
            rel="noreferrer"
            className="text-[#111111] hover:text-[#C59B3F] font-medium underline underline-offset-4 transition-colors"
          >
            @beajaycouture_bridal
          </a>
        </div>
      </section>

      {/* =========================================================================
          2. BROAD CATEGORY FILTERS (Only shown if 2 or more verified categories exist)
          ========================================================================= */}
      {shouldShowFilters && (
        <nav 
          aria-label="Gallery category filters"
          className="sticky top-[72px] sm:top-[80px] z-30 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-[#EAE3D5] py-3.5 sm:py-4 px-4 sm:px-6 mb-10 shadow-xs"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar scroll-smooth gap-2 sm:gap-3 py-1">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? EDITORIAL_GALLERY_ITEMS.length 
                : EDITORIAL_GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

              // Hide empty categories
              if (cat.id !== 'all' && count === 0) return null;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`min-h-[44px] px-4 sm:px-5 py-2 text-xs tracking-[0.16em] uppercase whitespace-nowrap transition-all duration-300 font-medium cursor-pointer border flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#141312] text-[#F3EFE6] border-[#141312] shadow-sm'
                      : 'bg-[#F9F6F0] text-neutral-700 hover:text-black border-[#E4DCD0] hover:border-[#C59B3F]'
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#C59B3F]' : 'text-neutral-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* =========================================================================
          3. EDITORIAL MASONRY GALLERY LAYOUT (ORGANIC & SCATTERED DESKTOP RHYTHM)
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-20">
        
        {/* Responsive Column-Based Editorial Masonry */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          {columnsData.map((column, colIdx) => (
            <div
              key={`gallery-col-${colIdx}`}
              className={`flex-1 min-w-0 w-full flex flex-col ${getColumnTopPadding(colIdx, columnCount)}`}
            >
              {column.map(({ item, globalIndex }) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item, filteredItems)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(item, filteredItems);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photograph: ${item.title}`}
                  className={`group relative overflow-hidden bg-[#F3EFE6] cursor-pointer transition-all duration-300 border border-[#EAE3D5] hover:border-[#C59B3F] shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C59B3F] focus:ring-offset-2 ${getItemMarginBottom(globalIndex, columnCount)}`}
                >
                  {/* Image Container preserving natural orientation and natural image heights */}
                  <div className="relative w-full overflow-hidden bg-neutral-100">
                    <img
                      src={item.image || item.src}
                      alt={item.alt || item.title}
                      loading="lazy"
                      className={`w-full h-auto block ${item.objectPosition || 'object-center'} group-hover:scale-103 transition-transform duration-500 ease-out select-none`}
                    />

                    {/* Subtle dark gradient overlay on hover/focus */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Video Reel Indicator if applicable */}
                    {item.isVideo && (
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white rounded-full border border-white/20 pointer-events-none">
                        <Play className="w-3 h-3 fill-current text-[#C59B3F]" />
                        <span className="text-[9px] tracking-widest uppercase font-semibold">Reel</span>
                      </div>
                    )}

                    {/* Restrained Hover / Focus Overlay Action: VIEW PHOTOGRAPH */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-xs text-white border border-[#C59B3F]/60 text-[11px] font-semibold tracking-[0.2em] uppercase shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5 text-[#C59B3F]" />
                        <span>VIEW PHOTOGRAPH</span>
                      </div>
                    </div>

                    {/* Subtle Mobile Indicator for Clean Tapability */}
                    <div className="sm:hidden absolute bottom-2 right-2 p-1.5 bg-black/50 backdrop-blur-xs text-white/80 rounded-full pointer-events-none">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Progressive Loading: Load More Action */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center space-y-3">
            <div className="text-xs font-sans tracking-[0.2em] uppercase text-neutral-500">
              Showing {displayedItems.length} of {filteredItems.length} Photographs
            </div>
            <div className="w-24 h-[1px] bg-[#EAE3D5] mx-auto mb-4" />
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center gap-3 min-h-[44px] px-8 py-4 bg-[#141312] hover:bg-[#252422] text-[#F3EFE6] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-transparent hover:border-[#C59B3F] cursor-pointer shadow-md hover:shadow-lg active:scale-98"
            >
              <span>LOAD MORE PHOTOGRAPHS</span>
              <ArrowRight className="w-4 h-4 text-[#C59B3F]" />
            </button>
          </div>
        )}

        {!hasMore && filteredItems.length > 16 && (
          <div className="mt-12 text-center text-xs font-sans tracking-[0.2em] uppercase text-neutral-400">
            All {filteredItems.length} Photographs Loaded
          </div>
        )}

        {/* Fallback state if filteredItems is empty */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white border border-[#EAE3D5] p-8 sm:p-12 max-w-3xl mx-auto shadow-xs space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-center text-[#C59B3F] mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#856122]">
                BEAJAY BRIDAL STORIES
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] max-w-2xl mx-auto leading-snug">
                Bridal moments, fittings, details and stories from BEAJAY.
              </h2>
            </div>

            <div className="w-12 h-[1.5px] bg-[#C59B3F] mx-auto" />

            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
              Our bridal gallery is reserved for authentic visual stories from BEAJAY COUTURE BRIDAL—including bespoke fittings at our atelier in Enugu, hand-crafted couture details, and memorable bridal moments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onNavigateCollections}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#252422] text-[#F3EFE6] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer border border-transparent hover:border-[#C59B3F]"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4 text-[#C59B3F]" />
              </button>

              <a
                href="https://instagram.com/beajaycouture_bridal"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#F2ECE0] text-[#111111] border border-[#D5CEC0] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C59B3F]" />
                <span>FOLLOW BEAJAY ON INSTAGRAM</span>
              </a>
            </div>
          </div>
        )}

      </main>

      {/* =========================================================================
          4. RESTRAINED PATHWAY: COLLECTIONS CONNECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden bg-[#141312] text-[#F9F7F2] p-8 sm:p-12 md:p-14 border border-[#2D2A26] shadow-xl">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C59B3F] block">
              GOWN DISCOVERY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
              Inspired by Our Silhouettes?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
              Explore our full catalog of bridal gowns across royal ball gowns, sculpted mermaid silhouettes, and handcrafted veils & accessories. Available for order and couture gown rental.
            </p>
            <div className="pt-2">
              <button
                onClick={onNavigateCollections}
                className="group inline-flex items-center gap-3 min-h-[44px] px-6 py-3 bg-[#C59B3F] hover:bg-[#B3892F] text-black font-medium text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer shadow-sm"
              >
                <span>DISCOVER THE COLLECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SUBTLE EDITORIAL CTA: BRIDAL APPOINTMENT CONNECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center py-12 sm:py-16 px-6 bg-[#F5EFE4] border border-[#E3D9C6]">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#856122] block mb-2">
            EXPERIENCE THE COLLECTION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal mb-3">
            Begin your personal BEAJAY bridal experience.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto mb-6 leading-relaxed">
            Reserve a bridal fitting consultation in Enugu, Nigeria or discover signature designs available for purchase and rental.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {onBookAppointment && (
              <button
                onClick={onBookAppointment}
                className="group min-h-[44px] inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-black text-[#FAF7F2] font-medium text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer shadow-sm"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59B3F]" />
              </button>
            )}
            <button
              onClick={onNavigateCollections}
              className="min-h-[44px] px-6 py-3 border border-[#856122] hover:bg-[#EBE2D3] text-[#111111] font-medium text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer"
            >
              DISCOVER THE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. RESTRAINED INSTAGRAM INVITATION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 px-6 sm:px-8 bg-white border border-[#EAE3D5] text-xs gap-4">
          <div className="flex items-center gap-3 text-neutral-700">
            <Instagram className="w-5 h-5 text-[#C59B3F] shrink-0" />
            <div>
              <span className="font-semibold tracking-wider uppercase text-[#111111] block text-[11px]">
                FOLLOW BEAJAY
              </span>
              <span className="text-neutral-500 font-light">
                Discover bridal silhouettes, design previews, and veil details.
              </span>
            </div>
          </div>
          <a
            href="https://instagram.com/beajaycouture_bridal"
            target="_blank"
            rel="noreferrer"
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 border border-[#141312] text-[#111111] hover:bg-[#141312] hover:text-white font-medium text-[11px] tracking-widest uppercase transition-colors shrink-0"
          >
            <span>SEE MORE ON INSTAGRAM • @beajaycouture_bridal</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F]" />
          </a>
        </div>
      </section>

    </div>
  );
};
