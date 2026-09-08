import React from 'react';
import { X, Heart, Sparkles, Instagram, Calendar } from 'lucide-react';
import { GownItem } from '../types';

interface GownDetailModalProps {
  gown: GownItem | null;
  onClose: () => void;
  onBookFitting: (gownName: string) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const GownDetailModal: React.FC<GownDetailModalProps> = ({
  gown,
  onClose,
  onBookFitting,
  isSaved,
  onToggleSave
}) => {
  if (!gown) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-neutral-600 hover:text-neutral-900 z-20 cursor-pointer bg-white/90 rounded-full shadow"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Gown Imagery */}
        <div className="md:w-1/2 relative bg-neutral-100 min-h-[350px] md:min-h-full">
          <img
            src={gown.image}
            alt={gown.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="bg-black/85 text-white text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1 border border-[#C59B3F]/40 font-sans">
              {gown.categoryLabel}
            </span>
            {gown.isAvailableForRent && (
              <span className="bg-[#C59B3F] text-white text-[10px] font-semibold tracking-[0.16em] uppercase px-3 py-1 font-sans">
                Available For Rent & Bespoke
              </span>
            )}
          </div>

          <button
            onClick={() => onToggleSave(gown.id)}
            aria-label="Toggle wishlist"
            className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors cursor-pointer ${
              isSaved ? 'bg-[#C59B3F] text-white' : 'bg-white/90 text-neutral-800 hover:bg-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Right Column: Specifications & Booking */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-5">
            
            <div className="border-b border-[#EAE3D5] pb-4 space-y-1">
              <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
                BEAJAY COUTURE ARCHIVE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                {gown.name}
              </h2>
            </div>

            <p className="text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
              {gown.description}
            </p>

            {/* Specifications */}
            <div className="space-y-3 bg-[#FAF7F0] border border-[#EAE3D5] p-4 text-xs">
              <div className="grid grid-cols-3 gap-1">
                <span className="text-neutral-500 font-medium">Silhouette:</span>
                <span className="col-span-2 text-neutral-900 font-normal">{gown.silhouette}</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <span className="text-neutral-500 font-medium">Fabric:</span>
                <span className="col-span-2 text-neutral-900 font-normal">{gown.fabric}</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <span className="text-neutral-500 font-medium">Embellishments:</span>
                <span className="col-span-2 text-neutral-900 font-normal">{gown.embellishments}</span>
              </div>
              {gown.trainLength && (
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-neutral-500 font-medium">Train Length:</span>
                  <span className="col-span-2 text-neutral-900 font-normal">{gown.trainLength}</span>
                </div>
              )}
            </div>

            {/* Pricing / Inquiries Section */}
            <div className="p-4 border border-[#D9CEBA] bg-[#FAF6EE] flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                  Rental Status
                </span>
                <span className="font-serif text-base font-medium text-[#856122]">
                  {gown.rentalStartingPrice || 'Rate on Request'}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                  Bespoke / Purchase
                </span>
                <span className="font-serif text-base font-medium text-neutral-900">
                  {gown.purchaseStartingPrice || 'Available on Request'}
                </span>
              </div>
            </div>

            {/* Tags */}
            {gown.tags && gown.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {gown.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 tracking-wider uppercase font-sans">
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2 border-t border-[#EAE3D5]">
            <button
              onClick={() => onBookFitting(gown.name)}
              className="w-full bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3.5 px-5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>BOOK TRY-ON FOR THIS GOWN</span>
            </button>

            <a
              href="https://instagram.com/beajaycouture_bridal"
              target="_blank"
              rel="noreferrer"
              className="w-full border border-neutral-800 hover:border-[#C59B3F] hover:text-[#C59B3F] text-neutral-900 py-3 px-5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#C59B3F]" />
              <span>Inquire on Instagram @beajaycouture_bridal</span>
            </a>

            <p className="text-[10px] text-center text-neutral-500 font-light pt-1">
              Private atelier appointments in Enugu, Nigeria. Showroom directions sent upon booking.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

