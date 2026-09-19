import React from 'react';
import { Play, ArrowRight, Instagram, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bridalData';
import { ActiveModal, GalleryItem } from '../types';
import { getOptimizedMedia } from '../utils/optimizedMedia';

interface GallerySectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onOpenLightbox: (item: GalleryItem, items?: GalleryItem[]) => void;
  onNavigateGallery?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenModal,
  onOpenLightbox,
  onNavigateGallery
}) => {
  const handleViewGallery = () => {
    if (onNavigateGallery) {
      onNavigateGallery();
    } else {
      onOpenModal('gallery');
    }
  };
  return (
    <section 
      id="bridal-gallery" 
      className="py-20 lg:py-24 bg-[#F8F5EE] border-b border-[#EAE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with VIEW GALLERY -> link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
              Moments That Matter
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F]" />
            <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#856122]">
              OUR BRIDAL GALLERY
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/beajaycouture_bridal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-[#C59B3F] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C59B3F]" />
              <span className="font-medium">@beajaycouture_bridal</span>
            </a>

            <button
              onClick={handleViewGallery}
              aria-label="View the full bridal gallery"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#111111] hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              <span>VIEW THE GALLERY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59B3F]" />
            </button>
          </div>
        </div>

        {/* Editorial Content Display: Elegant Intentional State when items empty, or curated editorial preview */}
        {GALLERY_ITEMS.length === 0 ? (
          <div className="bg-white border border-[#E7E1D4] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C59B3F]" />
            
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-center text-[#C59B3F] mx-auto mb-5">
              <Instagram className="w-5 h-5" />
            </div>

            <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#856122] mb-3">
              BEAJAY BRIDAL STORIES
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] max-w-2xl mx-auto leading-snug mb-4">
              Bridal moments, fittings, details and stories from BEAJAY.
            </h3>

            <div className="w-12 h-[1.5px] bg-[#C59B3F] mx-auto mb-5" />

            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto leading-relaxed mb-8">
              A visual chronicle celebrating BEAJAY couture in motion—from bridal fittings and intricate hand-appliquéd lace to memorable wedding days. Follow our official channel for real-time bridal updates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenModal('collections')}
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
                <span>FOLLOW ON INSTAGRAM</span>
              </a>

              <button
                onClick={handleViewGallery}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#856122] hover:text-[#111111] transition-colors py-3 px-4 cursor-pointer"
              >
                <span>VIEW GALLERY ARCHIVE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Curated Editorial Teaser (Teases the Gallery without repeating Discover the Collections) */
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Small Curated Grid of 4 unique official Gallery photographs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {GALLERY_ITEMS.map((item) => {
                const opt = getOptimizedMedia(item.image);
                return (
                  <div
                    key={item.id}
                    onClick={() => onOpenLightbox(item, GALLERY_ITEMS)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onOpenLightbox(item, GALLERY_ITEMS);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View photograph: ${item.title}`}
                    className="group relative aspect-[3/4] overflow-hidden bg-[#F5EFE4] border border-[#E3D9C6] hover:border-[#C59B3F] transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C59B3F]"
                  >
                    <img
                      src={opt.src}
                      srcSet={opt.srcSet}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      alt={item.alt || item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#111111] px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#C59B3F]" />
                      <span>View</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-left">
                    <span className="text-[9px] tracking-[0.24em] uppercase text-[#E6C875] font-semibold block">
                      {item.categoryLabel || 'Bridal Stories'}
                    </span>
                    <p className="font-serif text-xs text-white/95 truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Editorial Narrative Teaser Banner */}
            <div className="bg-white border border-[#EAE3D5] p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6EE] border border-[#E8DFC8] text-[#856122] text-[10px] font-semibold tracking-[0.24em] uppercase">
                  BEAJAY BRIDAL STORIES
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] leading-snug">
                  Bridal moments, fittings, details and stories from BEAJAY.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  Explore our dedicated 65-photograph bridal gallery archive celebrating authentic bridal fittings, handcrafted details, and memorable bridal moments in motion.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
                <button
                  onClick={handleViewGallery}
                  className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#252422] text-[#F3EFE6] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer border border-transparent hover:border-[#C59B3F]"
                >
                  <span>VIEW FULL GALLERY</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B3F]" />
                </button>

                <a
                  href="https://instagram.com/beajaycouture_bridal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-[#F2ECE0] text-[#111111] border border-[#D5CEC0] px-5 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C59B3F]" />
                  <span>@beajaycouture_bridal</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Subtle IG Link Bar */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 border-t border-[#EAE3D5] gap-3">
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-[#C59B3F]" />
            <span className="font-medium text-neutral-800 tracking-wider uppercase text-[11px]">FOLLOW THE JOURNEY</span>
          </div>
          <a
            href="https://instagram.com/beajaycouture_bridal"
            target="_blank"
            rel="noreferrer"
            className="text-[#856122] hover:text-[#C59B3F] font-medium hover:underline flex items-center gap-1.5 uppercase tracking-wider text-[11px] transition-colors"
          >
            <span>SEE MORE ON INSTAGRAM • @beajaycouture_bridal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
