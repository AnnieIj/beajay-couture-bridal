import React from 'react';
import { 
  Heart, 
  Store, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  FileText 
} from 'lucide-react';
import { ActiveModal } from '../types';

interface GownRentalsSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
}

export const GownRentalsSection: React.FC<GownRentalsSectionProps> = ({
  onOpenModal
}) => {
  return (
    <section 
      id="gown-rentals-section" 
      className="py-20 lg:py-28 bg-[#111111] text-[#EFECE5] relative overflow-hidden border-b border-[#262420]"
    >
      {/* Subtle gold watermark pattern / ambient background */}
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#C59B3F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#C59B3F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C59B3F]">
            BEAUTIFUL GOWNS. MORE LOVE STORIES.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Gown Rentals
          </h2>
          <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto my-3" />
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Experience the majesty of luxury bridal couture without the commitment of full purchase. 
            Impeccably cleaned, professionally altered, and ready for your vows.
          </p>
        </div>

        {/* Two Clearly Divided Paths: For Brides vs For Vendors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* PATH 1: FOR BRIDES */}
          <div className="bg-[#1A1918] border border-[#2D2A26] hover:border-[#C59B3F]/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative group shadow-xl">
            <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#C59B3F]" />
            
            <div className="space-y-6">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-[#23211F] border border-[#C59B3F]/30 flex items-center justify-center text-[#E6C875] group-hover:bg-[#C59B3F] group-hover:text-black transition-colors">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E6C875] bg-[#C59B3F]/10 px-3 py-1 border border-[#C59B3F]/30">
                  Direct for Brides
                </span>
              </div>

              {/* Title & Copy */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#E6C875] transition-colors">
                  For Brides
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Find and rent your dream gown for your special day. Enjoy an intimate private fitting in our Enugu studio, complete with gentle tailoring adjustments and couture veil pairings.
                </p>
              </div>

              {/* Key Highlights */}
              <ul className="space-y-2.5 pt-2 text-xs text-neutral-300 border-t border-[#2A2724]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0" />
                  <span>3 to 5-Day Standard Rental Window</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0" />
                  <span>Complimentary Couture Sanitization & Pressing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0" />
                  <span>Custom In-House Basting for a Flawless Fit</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button
                onClick={() => onOpenModal('rentals', { defaultTab: 'bride' })}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer shadow-lg"
              >
                <span>BROWSE BRIDE RENTALS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PATH 2: FOR VENDORS */}
          <div className="bg-[#1A1918] border border-[#2D2A26] hover:border-[#C59B3F]/80 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative group shadow-xl">
            <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#C59B3F]" />

            <div className="space-y-6">
              {/* Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-[#23211F] border border-[#C59B3F]/30 flex items-center justify-center text-[#E6C875] group-hover:bg-[#C59B3F] group-hover:text-black transition-colors">
                  <Store className="w-6 h-6" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E6C875] bg-[#C59B3F]/10 px-3 py-1 border border-[#C59B3F]/30">
                  Commercial Program
                </span>
              </div>

              {/* Title & Copy */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white group-hover:text-[#E6C875] transition-colors">
                  For Vendors
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  Partner with BEAJAY COUTURE BRIDAL and access selected gowns for your clients. 
                  Tailored specifically for bridal stylists, fashion houses, and boutique curators who rent gowns for their own brides.
                </p>
              </div>

              {/* Key Highlights */}
              <ul className="space-y-2.5 pt-2 text-xs text-neutral-300 border-t border-[#2A2724]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0" />
                  <span>Privileged Commercial Rental Tariffs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0" />
                  <span>Early Date Reservation & Gown Hold Privilege</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0" />
                  <span>Flexible Multi-Client Logistics across South East Nigeria</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button
                onClick={() => onOpenModal('vendor-rentals', { defaultTab: 'vendor' })}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#262420] hover:bg-[#33302B] text-[#EFECE5] border border-[#C59B3F]/60 hover:border-[#C59B3F] py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                <span>VENDOR RENTAL PROGRAM</span>
                <ArrowRight className="w-4 h-4 text-[#C59B3F]" />
              </button>
            </div>
          </div>

        </div>

        {/* Policy & Care Guarantee Ribbon */}
        <div className="mt-12 p-6 bg-[#161514] border border-[#2B2824] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-[#C59B3F] shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                The BEAJAY Rental Assurance
              </h4>
              <p className="text-xs text-neutral-400 font-light">
                Transparent refundable security deposit, guaranteed sanitization, and verified fit before pickup.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenModal('rental-policy')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase font-semibold text-[#E6C875] hover:underline cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>READ FULL RENTAL POLICY</span>
          </button>
        </div>

      </div>
    </section>
  );
};
