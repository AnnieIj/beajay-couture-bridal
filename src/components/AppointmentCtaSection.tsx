import React from 'react';
import { Calendar, Shield, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { ActiveModal } from '../types';
import { EDITORIAL_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';

interface AppointmentCtaSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const AppointmentCtaSection: React.FC<AppointmentCtaSectionProps> = ({ onOpenModal }) => {
  return (
    <section 
      id="appointment-cta-section" 
      className="relative py-20 lg:py-24 bg-[#0D0D0D] text-white overflow-hidden border-b border-[#222]"
    >
      {/* Background imagery with dark couture gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('${resolveMedia(EDITORIAL_MEDIA_ASSETS.appointmentCta)}')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left: Callout & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#E6C875] text-[11px] font-semibold tracking-[0.24em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
              <span>PRIVATE ATELIER CONSULTATIONS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
              Ready to Find Your Dream Dress?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl leading-relaxed">
              Book a consultation at our Enugu, Nigeria atelier and let us bring your bridal vision to life.
              Whether you wish to purchase, rent, or experience our collection, our team is honored to walk with you.
            </p>

            <div className="pt-2">
              <button
                id="cta-book-appointment-btn"
                onClick={() => onOpenModal('appointment')}
                className="inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white py-4 px-8 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase transition-colors shadow-xl cursor-pointer"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Small Benefits Grid matching the prototype */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-start sm:items-center justify-between lg:justify-end gap-6 sm:gap-8 pt-4 lg:pt-0">
            
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 bg-white/5 border border-[#C59B3F]/40 flex items-center justify-center text-[#E6C875] group-hover:bg-[#C59B3F] group-hover:text-black transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium tracking-wider uppercase text-neutral-200">
                Easy Booking
              </span>
              <span className="text-[11px] text-neutral-400 font-light">
                Flexible Slots
              </span>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 bg-white/5 border border-[#C59B3F]/40 flex items-center justify-center text-[#E6C875] group-hover:bg-[#C59B3F] group-hover:text-black transition-colors">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium tracking-wider uppercase text-neutral-200">
                Personalized Service
              </span>
              <span className="text-[11px] text-neutral-400 font-light">
                Private Consultation
              </span>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 bg-white/5 border border-[#C59B3F]/40 flex items-center justify-center text-[#E6C875] group-hover:bg-[#C59B3F] group-hover:text-black transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium tracking-wider uppercase text-neutral-200">
                Studio Location
              </span>
              <span className="text-[11px] text-neutral-400 font-light">
                Enugu, Nigeria
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
