import React, { useState, useMemo } from 'react';
import { 
  Play, 
  ZoomIn, 
  ArrowRight, 
  Instagram, 
  Sparkles, 
  Compass, 
  SlidersHorizontal 
} from 'lucide-react';
import { GalleryItem, GalleryCategory } from '../types';
import { EDITORIAL_GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/bridalData';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem, items: GalleryItem[]) => void;
  onNavigateCollections: () => void;
  onBookAppointment?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onOpenLightbox,
  onNavigateCollections,
  onBookAppointment
}) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return EDITORIAL_GALLERY_ITEMS;
    }
    return EDITORIAL_GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

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
          Moments in Couture.
        </h1>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto mb-6" />

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed mb-4">
          A visual celebration of bridal artistry, beautiful details and unforgettable moments by BEAJAY COUTURE BRIDAL.
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
          2. BROAD CATEGORY FILTERS (Touch-friendly & Horizontally Scrollable)
          ========================================================================= */}
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

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

      {/* =========================================================================
          3. EDITORIAL MASONRY GALLERY LAYOUT
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Editorial Masonry Grid using multi-column layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
          {filteredItems.map((item) => {
            const isFeatured = item.featured;

            return (
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
                aria-label={`View photo: ${item.title}`}
                className={`group relative break-inside-avoid overflow-hidden bg-[#F3EFE6] cursor-pointer transition-all duration-500 border ${
                  isFeatured 
                    ? 'border-[#C59B3F]/60 shadow-md' 
                    : 'border-[#EAE3D5] hover:border-[#C59B3F] shadow-xs'
                } focus:outline-none focus:ring-2 focus:ring-[#C59B3F] focus:ring-offset-2`}
              >
                {/* Media Container */}
                <div className={`relative w-full ${item.aspectRatio || 'aspect-[3/4]'} overflow-hidden bg-neutral-200`}>
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    loading="lazy"
                    className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />

                  {/* Dark gradient for text legibility on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />

                  {/* Video Indicator */}
                  {item.isVideo && (
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white rounded-full border border-white/20">
                      <Play className="w-3 h-3 fill-current text-[#C59B3F]" />
                      <span className="text-[9px] tracking-widest uppercase font-semibold">Reel</span>
                    </div>
                  )}

                  {/* Featured Statement Badge */}
                  {isFeatured && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 bg-[#141312]/85 text-[#E6C875] border border-[#C59B3F]/40 text-[9px] tracking-[0.2em] uppercase font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Hover Overlay Details */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 transform translate-y-2 group-hover:translate-y-0 group-focus-visible:translate-y-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-300 flex flex-col justify-end text-white">
                    <span className="text-[9px] tracking-[0.24em] uppercase text-[#C59B3F] font-semibold mb-1">
                      {item.categoryLabel || item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-normal leading-snug mb-1">
                      {item.title}
                    </h3>
                    {item.caption && (
                      <p className="text-[11px] text-neutral-300 font-light line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-[#C59B3F] font-medium">
                      <ZoomIn className="w-3 h-3" />
                      <span>View Photograph</span>
                    </div>
                  </div>
                </div>

                {/* Subtle permanent caption bar below image for editorial clarity */}
                <div className="p-3.5 bg-white border-t border-[#EAE3D5] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.22em] uppercase text-[#856122] font-semibold block">
                      {item.categoryLabel || item.category}
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm text-[#111111] font-normal truncate max-w-[240px]">
                      {item.title}
                    </h4>
                  </div>
                  <div className="text-neutral-400 group-hover:text-[#C59B3F] transition-colors p-1">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#EAE3D5] p-8">
            <Compass className="w-8 h-8 text-[#C59B3F] mx-auto mb-3" />
            <p className="font-serif text-lg text-neutral-700 mb-2">No photographs found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-xs uppercase tracking-widest text-[#C59B3F] font-semibold hover:underline"
            >
              View All Photographs
            </button>
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
