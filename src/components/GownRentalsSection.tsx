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
}

export const GownRentalsSection: React.FC<GownRentalsSectionProps> = ({
  onOpenModal,
  onSelectGown
}) => {
  const previewRentalGowns = GOWNS_CATALOG.filter(g => g.isAvailableForRent).slice(0, 3);

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
            EXQUISITE COUTURE ATELIER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Gown Rentals
          </h2>
          <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto my-3" />
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Experience the majesty of luxury bridal couture without the commitment of full purchase. 
            Impeccably maintained, professionally fitted, and available in Enugu, Nigeria.
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
              From cathedral ball gowns to sculpted mermaids, our rental archive houses diverse couture designs.
            </p>
          </div>

          <div className="p-6 bg-[#181715] border border-[#2B2925] space-y-3">
            <div className="w-10 h-10 bg-[#22201D] border border-[#C59B3F]/30 flex items-center justify-center text-[#C59B3F]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-white">Atelier Tailoring & Fit</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every rental includes temporary in-house basting adjustments executed to ensure a flawless fit.
            </p>
          </div>

          <div className="p-6 bg-[#181715] border border-[#2B2925] space-y-3">
            <div className="w-10 h-10 bg-[#22201D] border border-[#C59B3F]/30 flex items-center justify-center text-[#C59B3F]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-white">Couture Sanitization</h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Hospital-grade steam sanitization and delicate fabric pressing guarantee immaculate freshness.
            </p>
          </div>
        </div>

        {/* Rental Gowns Preview Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#2A2824] pb-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C59B3F]">
                Featured in Rental Archive
              </span>
              <h3 className="font-serif text-2xl text-white">
                Available Gowns for Rental
              </h3>
            </div>
            <button
              onClick={() => onOpenModal('rentals')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#E6C875] hover:underline cursor-pointer"
            >
              <span>View All Rental Gowns</span>
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
                    {gown.categoryLabel}
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
                      onClick={() => onSelectGown ? onSelectGown(gown) : onOpenModal('rentals')}
                      className="flex-1 py-2.5 px-3 text-[11px] border border-[#3E3A34] hover:border-white text-neutral-200 uppercase tracking-wider text-center transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenModal('rentals', { action: 'request', gownName: gown.name })}
                      className="flex-1 py-2.5 px-3 text-[11px] bg-[#C59B3F] hover:bg-[#B3892F] text-white uppercase tracking-wider text-center font-semibold transition-colors cursor-pointer"
                    >
                      Rent Gown
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
              Ready to Reserve Your Gown?
            </h4>
            <p className="text-xs text-neutral-400 font-light max-w-lg">
              Individual brides and bridal vendors share our unified rental process. Submit your inquiry to check date availability.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenModal('rentals')}
              className="py-3 px-6 text-xs uppercase tracking-wider font-semibold border border-[#C59B3F] text-[#E6C875] hover:bg-[#C59B3F]/10 transition-colors cursor-pointer"
            >
              Browse All Rentals
            </button>
            <button
              onClick={() => onOpenModal('rentals', { action: 'request' })}
              className="py-3 px-6 text-xs uppercase tracking-wider font-semibold bg-[#C59B3F] hover:bg-[#B3892F] text-white transition-colors cursor-pointer shadow-md"
            >
              Start Rental Request
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
