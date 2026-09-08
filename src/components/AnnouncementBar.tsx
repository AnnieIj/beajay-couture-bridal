import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

interface AnnouncementBarProps {
  onContactClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onContactClick }) => {
  return (
    <div id="top-announcement-bar" className="bg-[#0E0E0E] text-[#D8D2C5] text-xs py-2 px-4 border-b border-[#252320]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & Contact */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[11px] sm:text-xs tracking-wider">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span>Enugu, Nigeria</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <a 
            href="tel:+2348031234567" 
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#C59B3F] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span>+234 803 123 4567</span>
          </a>
          <span className="hidden md:inline text-neutral-600">•</span>
          <button 
            onClick={onContactClick}
            className="hidden md:flex items-center gap-1.5 text-neutral-300 hover:text-[#C59B3F] transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span>info@beajaycouturebridal.com</span>
          </button>
        </div>

        {/* Center: Brand Promise */}
        <div className="text-center font-medium tracking-[0.18em] text-[10px] sm:text-[11px] uppercase text-[#C59B3F] hidden lg:block">
          Exquisite Bridal Couture • Personalized Fittings • Enugu, Nigeria
        </div>

        {/* Right: Social & Presence */}
        <div className="flex items-center gap-4 text-neutral-400">
          <a 
            href="https://instagram.com/beajaycouture_bridal" 
            target="_blank" 
            rel="noreferrer"
            aria-label="BEAJAY on Instagram"
            className="flex items-center gap-1 text-[11px] hover:text-[#C59B3F] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span className="hidden sm:inline font-medium">@beajaycouture_bridal</span>
          </a>
          <span className="text-neutral-700">|</span>
          <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-sans">
            By Appointment Only
          </span>
        </div>
      </div>
    </div>
  );
};
