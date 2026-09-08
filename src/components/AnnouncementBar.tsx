import React from 'react';
import { MapPin, Instagram, Sparkles, MessageCircle } from 'lucide-react';

interface AnnouncementBarProps {
  onContactClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onContactClick }) => {
  return (
    <div id="top-announcement-bar" className="bg-[#0E0E0E] text-[#D8D2C5] text-xs py-2 px-4 border-b border-[#252320]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Confirmed Location & Status */}
        <div className="flex items-center gap-3 text-[11px] sm:text-xs tracking-wider">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span className="font-light">Enugu, Nigeria</span>
          </div>
          <span className="text-neutral-600">•</span>
          <span className="text-neutral-400 tracking-wider uppercase text-[10px]">
            By Appointment Only
          </span>
        </div>

        {/* Center: Brand Distinction */}
        <div className="text-center font-medium tracking-[0.18em] text-[10px] sm:text-[11px] uppercase text-[#C59B3F] hidden md:block">
          Luxury Bridal Couture • Gown Rentals • Bespoke Fittings
        </div>

        {/* Right: Confirmed Instagram & Quick Inquiry */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a 
            href="https://instagram.com/beajaycouture_bridal" 
            target="_blank" 
            rel="noreferrer"
            aria-label="BEAJAY on Instagram"
            className="flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-[#C59B3F] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span className="font-medium">@beajaycouture_bridal</span>
          </a>
          <span className="text-neutral-700">|</span>
          <button
            onClick={onContactClick}
            className="text-[10px] tracking-widest text-[#E6C875] hover:text-white uppercase font-sans flex items-center gap-1 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3 h-3" />
            <span>Inquiries</span>
          </button>
        </div>
      </div>
    </div>
  );
};
