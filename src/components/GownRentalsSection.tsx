import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { GOWNS_CATALOG } from '../data/bridalData';
import { ActiveModal, GownItem } from '../types';

interface GownRentalsSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onSelectGown?: (gown: GownItem) => void;
  onNavigateRentals?: () => void;
}

export const GownRentalsSection: React.FC<GownRentalsSectionProps> = ({
  onOpenModal,
  onSelectGown,
  onNavigateRentals
}) => {
  const previewRentalGowns = GOWNS_CATALOG.filter(g => g.rentalEligible).slice(0, 3);

  const handleBrowseRentals = () => {
    if (onNavigateRentals) {
      onNavigateRentals();
    } else {
      onOpenModal('rentals');
    }
  };

  return (
    <section 
      id="gown-rentals-section" 
      className="py-20 lg:py-28 bg-[#111111] text-[#EFECE5] relative overflow-hidden border-b border-[#262420]"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#C59B3F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#C59B3F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C59B3F]">
            EXQUISITE BRIDAL COUTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Gown Rentals
          </h2>
          <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto my-3" />
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Selected BEAJAY gowns may be available for rental. Discover rental-eligible silhouettes and submit a rental request to confirm availability.
          </p>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 bg-[#181715] border border-[#2B2925] space-y-3">
            <div className="w-10 h-10 bg-[#22201D] border border-[#C59B3F]/30 flex items-center justify-center text-[#C59B3F]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-white">Curated Silhouettes</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Explore selected BEAJAY bridal designs that may be available for rental requests.
            </p>
          </div>

          <div className="p-6 bg-[#181715] border border-[#2B2925] space-y-3">
            <div className="w-10 h-10 bg-[#22201D] border border-[#C59B3F]/30 flex items-center justify-center text-[#C59B3F]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-white">Unified Service</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Individual brides and bridal vendors share one seamless rental request pathway.
            </p>
          </div>

          <div className="p-6 bg-[#181715] border border-[#2B2925] space-y-3">
            <div className="w-10 h-10 bg-[#22201D] border border-[#C59B3F]/30 flex items-center justify-center text-[#C59B3F]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-white">Availability Confirmation</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Submit your preferred dates and BEAJAY reviews the request before confirming availability.
            </p>
          </div>
        </div>

        {/* Rental Gowns Preview Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#2A2824] pb-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C59B3F]">
                Selected Rental Gowns
              </span>
              <h3 className="font-serif text-2xl text-white">
                Available Gowns for Rental Requests
              </h3>
            </div>
            <button
              onClick={handleBrowseRentals}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E6C875] hover:underline cursor-pointer"
            >
              <span>EXPLORE RENTALS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewRentalGowns.map((gown) => (
              <div
                key={gown.id}
                className="group bg-[#1A1917] border border-[#2C2925] hover:border-[#C59B3F] transition-all flex flex-col overflow-hidden shadow-xl"
              >
                <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
                  <img
                    src={gown.image}
                    alt={gown.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[9px] px-2.5 py-1 tracking-wider uppercase font-sans">
                    RENTAL SELECTION
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h4 className="font-serif text-lg text-white group-hover:text-[#E6C875] transition-colors">
                      {gown.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-2">
                      {gown.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#292723] flex items-center gap-2">
                    <button
                      onClick={() => onSelectGown ? onSelectGown(gown) : handleBrowseRentals()}
                      className="flex-1 py-2.5 px-3 text-[11px] border border-[#3E3A34] hover:border-white text-neutral-200 uppercase tracking-wider text-center transition-colors cursor-pointer"
                    >
                      View Gown
                    </button>
                    <button
                      onClick={() => onOpenModal('rentals', { action: 'request', gownName: gown.name })}
                      className="flex-1 py-2.5 px-3 text-[11px] bg-[#C59B3F] hover:bg-[#B3892F] text-white uppercase tracking-wider text-center font-semibold transition-colors cursor-pointer"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified Bottom CTA Banner */}
        <div className="mt-14 p-8 bg-[#181715] border border-[#2D2A26] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-white">
              Request Rental Availability
            </h4>
            <p className="text-xs text-neutral-400 font-light max-w-lg">
              Individual brides and bridal vendors share our unified rental process. Selected gowns may be available for rental upon availability confirmation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleBrowseRentals}
              className="py-3 px-6 text-xs uppercase tracking-wider font-semibold border border-[#C59B3F] text-[#E6C875] hover:bg-[#C59B3F]/10 transition-colors cursor-pointer"
            >
              EXPLORE RENTALS
            </button>
            <button
              onClick={() => onOpenModal('rentals', { action: 'request' })}
              className="py-3 px-6 text-xs uppercase tracking-wider font-semibold bg-[#C59B3F] hover:bg-[#B3892F] text-white transition-colors cursor-pointer shadow-md"
            >
              REQUEST RENTAL AVAILABILITY
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
