import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Layers, 
  MessageSquare, 
  Maximize2, 
  X, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { GownItem } from '../types';
import { GOWNS_CATALOG } from '../data/bridalData';
import { GownCard } from './GownCard';

interface GownDetailPageProps {
  gown: GownItem;
  onBackToCollections: () => void;
  onSelectGown: (gown: GownItem) => void;
  onBookFitting: (gownName: string) => void;
  onCheckRentalAvailability: (gownName: string) => void;
  onEnquire: (gownName: string) => void;
}

export const GownDetailPage: React.FC<GownDetailPageProps> = ({
  gown,
  onBackToCollections,
  onSelectGown,
  onBookFitting,
  onCheckRentalAvailability,
  onEnquire
}) => {
  const images = gown.images && gown.images.length > 0 
    ? gown.images 
    : [gown.image];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Touch Swipe Handling for Mobile
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next image
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swiped right -> prev image
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
    touchStartXRef.current = null;
  };

  // Related Gowns: 3 related gowns based on category / silhouette, excluding this gown
  const relatedGowns = GOWNS_CATALOG.filter(
    (g) => g.id !== gown.id && g.category === gown.category
  ).slice(0, 3);

  // Fallback to other gowns if fewer than 3 in the same category
  const displayedRelated = relatedGowns.length >= 3
    ? relatedGowns
    : [
        ...relatedGowns,
        ...GOWNS_CATALOG.filter(
          (g) => g.id !== gown.id && !relatedGowns.some((rg) => rg.id === g.id)
        ).slice(0, 3 - relatedGowns.length)
      ];

  const currentImage = images[activeImageIndex] || images[0];

  return (
    <div id="gown-detail-page" className="min-h-screen bg-[#FCFAF7] text-[#111111] flex flex-col pt-28 sm:pt-32">
      
      {/* Navigation & Breadcrumbs Bar */}
      <div className="bg-[#FAF7F0] border-b border-[#EAE4D9] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToCollections}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-neutral-800 hover:text-[#C59B3F] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO COLLECTIONS</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs text-neutral-500 font-light tracking-wider">
            <button 
              onClick={onBackToCollections} 
              className="hover:underline cursor-pointer"
            >
              Collections
            </button>
            <span>/</span>
            <span className="text-[#856122] font-normal">{gown.categoryLabel}</span>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{gown.name}</span>
          </div>
        </div>
      </div>

      {/* Main Gown Showcase Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Large Editorial Image Gallery (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary Large Image Frame */}
            <div 
              className="relative aspect-[3/4] bg-[#F4F0E8] border border-[#EAE4D9] overflow-hidden group select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={currentImage}
                alt={`${gown.name} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out"
              />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                <span className="bg-[#111111]/85 backdrop-blur-xs text-white text-[9.5px] tracking-[0.2em] uppercase px-3 py-1 font-medium font-sans">
                  {gown.code}
                </span>
                {gown.rentalEligible && (
                  <span className="bg-[#C59B3F] text-white text-[9.5px] tracking-[0.16em] uppercase px-3 py-1 font-medium font-sans shadow-xs">
                    Rental Eligible
                  </span>
                )}
              </div>

              {/* Lightbox Trigger Icon */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Enlarge Image"
                className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white text-neutral-800 rounded-full shadow-md transition-colors cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Mobile Swipe Indicators & Arrow Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/85 hover:bg-white text-neutral-900 rounded-full shadow-xs cursor-pointer md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/85 hover:bg-white text-neutral-900 rounded-full shadow-xs cursor-pointer md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Position Indicator Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-xs text-white text-[10px] tracking-widest px-3 py-1 rounded-full font-mono">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Strip (Desktop & Tablet) */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 sm:w-24 aspect-[3/4] flex-shrink-0 border-2 transition-all cursor-pointer overflow-hidden ${
                      activeImageIndex === idx 
                        ? 'border-[#C59B3F] opacity-100 shadow-sm' 
                        : 'border-[#EAE4D9] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Mobile swipe helper hint */}
            <p className="text-[11px] text-neutral-400 text-center sm:hidden font-light">
              Swipe left or right to view alternate angles
            </p>

          </div>

          {/* RIGHT COLUMN: Gown Specifications, Details & Contextual Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header / Titles */}
            <div className="space-y-3 border-b border-[#EAE4D9] pb-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.26em] font-semibold text-[#856122] uppercase">
                  {gown.code} • {gown.categoryLabel}
                </span>

                {/* Relevant Status Badge ONLY if applicable */}
                {gown.availability === 'reserved' && (
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 border border-amber-200">
                    Reserved for Fitting
                  </span>
                )}
                {gown.availability === 'coming-soon' && (
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 border border-purple-200">
                    Atelier Preview
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal tracking-tight leading-snug">
                {gown.name}
              </h1>

              <p className="text-xs tracking-[0.2em] text-[#856122] uppercase font-medium">
                {gown.silhouette}
              </p>
            </div>

            {/* Editorial Description */}
            <div className="space-y-2">
              <span className="text-[10.5px] tracking-[0.2em] font-semibold text-neutral-500 uppercase block">
                ATELIER NOTES
              </span>
              <p className="text-neutral-700 text-sm sm:text-[15px] font-light leading-relaxed">
                {gown.description}
              </p>
            </div>

            {/* Structured Specifications Grid (Only display when field exists) */}
            <div className="bg-[#FAF7F0] border border-[#EAE4D9] p-5 space-y-3.5 text-xs">
              <span className="text-[10px] tracking-[0.24em] font-semibold text-[#856122] uppercase block pb-1 border-b border-[#EAE4D9]">
                GOWN SPECIFICATIONS
              </span>

              {gown.fabric && (
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-neutral-500 font-medium">Fabric:</span>
                  <span className="col-span-2 text-neutral-900 font-normal">{gown.fabric}</span>
                </div>
              )}

              {(gown.details || gown.embellishments) && (
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-neutral-500 font-medium">Details:</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {gown.details || gown.embellishments}
                  </span>
                </div>
              )}

              {(gown.trainStyle || gown.trainLength) && (
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-neutral-500 font-medium">Train Style:</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {gown.trainStyle || gown.trainLength}
                  </span>
                </div>
              )}

              {gown.sizes && gown.sizes.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-neutral-500 font-medium">Available Sizes:</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {gown.sizes.join(' • ')}
                  </span>
                </div>
              )}

              {gown.availability && (
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-neutral-500 font-medium">Availability:</span>
                  <span className="col-span-2 text-neutral-900 font-normal capitalize">
                    {gown.availability === 'available'
                      ? 'Available'
                      : gown.availability === 'reserved'
                      ? 'Reserved'
                      : gown.availability === 'unavailable'
                      ? 'Unavailable'
                      : gown.availability === 'coming-soon'
                      ? 'Coming Soon'
                      : 'Availability requires confirmation'}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-3 gap-2">
                <span className="text-neutral-500 font-medium">Rental Eligibility:</span>
                <span className="col-span-2 font-normal">
                  {gown.rentalEligible ? (
                    <span className="text-[#856122] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B3F]" />
                      Eligible for Couture Gown Rental
                    </span>
                  ) : (
                    <span className="text-neutral-500">
                      Bespoke Atelier Commission Only
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Contextual Action Buttons */}
            <div className="space-y-3 pt-2">
              
              {/* Action 1: Book A Fitting (Always available) */}
              <button
                onClick={() => onBookFitting(gown.name)}
                className="w-full flex items-center justify-center gap-2.5 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A FITTING</span>
              </button>

              {/* Action 2: Check Rental Availability (ONLY if rentalEligible is true) */}
              {gown.rentalEligible && (
                <button
                  onClick={() => gown.availability !== 'unavailable' && onCheckRentalAvailability(gown.name)}
                  disabled={gown.availability === 'unavailable'}
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 shadow-xs border ${
                    gown.availability === 'unavailable'
                      ? 'bg-neutral-200 text-neutral-400 border-neutral-300 cursor-not-allowed'
                      : 'bg-[#111111] hover:bg-[#262420] text-white cursor-pointer border-[#C59B3F]/60'
                  }`}
                >
                  <Layers className="w-4 h-4 text-[#C59B3F]" />
                  <span>
                    {gown.availability === 'unavailable' 
                      ? 'RENTAL CURRENTLY UNAVAILABLE' 
                      : 'CHECK RENTAL AVAILABILITY'}
                  </span>
                </button>
              )}

              {/* Action 3: Enquire About This Gown */}
              <button
                onClick={() => onEnquire(gown.name)}
                className="w-full flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF7F0] text-neutral-800 py-3.5 px-6 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 border border-[#DDD5C7] hover:border-neutral-800 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#856122]" />
                <span>ENQUIRE ABOUT THIS GOWN</span>
              </button>

            </div>

            {/* Atelier Assurance Note */}
            <div className="border-t border-[#EAE4D9] pt-5 space-y-2 text-[11px] text-neutral-500 font-light">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C59B3F] flex-shrink-0 mt-0.5" />
                <p>
                  Every private consultation and fitting is conducted with dedicated care in our Enugu, Nigeria atelier, with bespoke guidance and styling support for brides everywhere.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Section 12: YOU MAY ALSO LOVE (Related Gowns) */}
        {displayedRelated.length > 0 && (
          <section className="mt-24 pt-14 border-t border-[#EAE4D9]">
            <div className="space-y-2 mb-10 text-center">
              <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase">
                CURATED RECOMMENDATIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                YOU MAY ALSO LOVE
              </h2>
              <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayedRelated.map((relatedGown) => (
                <GownCard
                  key={relatedGown.id}
                  gown={relatedGown}
                  onSelectGown={onSelectGown}
                />
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Full-Screen Image Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 p-3 text-white/80 hover:text-white bg-black/50 rounded-full cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={gown.name}
              className="max-w-full max-h-[88vh] object-contain shadow-2xl"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white bg-black/50 hover:bg-black/80 rounded-full cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
