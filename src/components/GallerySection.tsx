import React from 'react';
import { Play, ArrowRight, Instagram, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bridalData';
import { ActiveModal, GalleryItem } from '../types';

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

        {/* Editorial Photo Strip / Grid (Matches Reference Layout with 5 cards including Video Card) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => {
            if (item.isVideo) {
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item, GALLERY_ITEMS)}
                  className="group relative aspect-[3/4] bg-[#111111] overflow-hidden cursor-pointer col-span-2 sm:col-span-1 border border-[#2D2A26] flex items-center justify-center text-center p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-[#C59B3F] bg-[#1A1918]/80 text-[#E6C875] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#C59B3F] group-hover:text-black transition-all shadow-lg">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white block">
                        WATCH
                      </span>
                      <span className="text-[11px] tracking-[0.16em] uppercase text-[#E6C875] block">
                        OUR STORY
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

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
                aria-label={`View photo: ${item.title}`}
                className="group relative aspect-[3/4] overflow-hidden bg-neutral-200 cursor-pointer border border-[#E9E3D6] hover:border-[#C59B3F] transition-all focus:outline-none focus:ring-2 focus:ring-[#C59B3F]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 text-neutral-900 shadow">
                    <ZoomIn className="w-4 h-4 text-[#C59B3F]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle IG Social Proof Bar */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 border-t border-[#EAE3D5] gap-2">
          <span>Tag <strong className="text-neutral-800">#BeajayBride</strong> on Instagram to be featured in our official studio showcase.</span>
          <a
            href="https://instagram.com/beajaycouture_bridal"
            target="_blank"
            rel="noreferrer"
            className="text-[#856122] font-medium hover:underline flex items-center gap-1"
          >
            Follow @beajaycouture_bridal <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
