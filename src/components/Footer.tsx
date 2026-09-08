import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  MessageSquare, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { ActiveModal } from '../types';

interface FooterProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onNavigateHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-[#EFECE5] pt-16 pb-12 border-t border-[#262420]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#252320]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={onNavigateHome}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.24em] text-white uppercase block font-light group-hover:text-[#E6C875] transition-colors">
                BEAJAY
              </span>
              <span className="font-sans text-[10px] tracking-[0.38em] text-[#C59B3F] font-semibold uppercase block mt-1">
                COUTURE BRIDAL
              </span>
            </button>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm pt-2">
              Exquisite bridal couture, luxury gown rentals, bespoke creations, and personalized fitting services crafted for the modern, unforgettable bride.
            </p>

            <div className="pt-2 text-[11px] tracking-wider text-[#C59B3F]/90 uppercase font-sans">
              Bridal Gowns • Rentals • Bespoke • Fittings • Alterations
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#262420] inline-block">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-neutral-300 font-light">
              <li>
                <button 
                  onClick={onNavigateHome}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('about')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  About Atelier
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('collections')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('gallery')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('rentals')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Rentals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('appointment')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('bespoke')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Bespoke
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('contact')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left"
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('rental-policy')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left col-span-2 text-[11px] text-neutral-400"
                >
                  Rental Policy & Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Visit Our Studio Column (Accurately documented placeholders) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#262420] inline-block">
              Visit Our Studio
            </h3>
            
            <div className="space-y-3 text-xs text-neutral-300 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" />
                <span>
                  85 Chime Avenue, New Haven, Enugu, Nigeria{' '}
                  <span className="text-[10px] text-neutral-500 block">
                    (Fitting Studio & Showroom — By Appointment)
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B3F] shrink-0" />
                <a 
                  href="tel:+2348031234567" 
                  className="hover:text-[#E6C875] transition-colors"
                >
                  +234 803 123 4567 <span className="text-[10px] text-neutral-500">(Placeholder)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B3F] shrink-0" />
                <a 
                  href="mailto:info@beajaycouturebridal.com" 
                  className="hover:text-[#E6C875] transition-colors"
                >
                  info@beajaycouturebridal.com
                </a>
              </div>
            </div>
          </div>

          {/* Social & WhatsApp Connect */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#262420] inline-block">
              Follow Us
            </h3>
            
            <div className="flex flex-col space-y-2 text-xs">
              <a 
                href="https://instagram.com/beajaycouture_bridal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-[#E6C875] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C59B3F]" />
                <span>@beajaycouture_bridal</span>
              </a>

              <a 
                href="https://wa.me/2348031234567?text=Hello%20BEAJAY%20COUTURE%20BRIDAL,%20I%20would%20like%20to%20enquire%20about%20your%20wedding%20gowns."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-[#E6C875] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C59B3F]" />
                <span>WhatsApp Bridal Concierge</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal('appointment')}
                className="w-full bg-[#C59B3F] hover:bg-[#B3892F] text-white py-2.5 px-3 text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-colors"
              >
                REQUEST FITTING
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 BEAJAY COUTURE BRIDAL. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600">
              Luxury Bridal Couture • Gown Rentals • Bespoke Alterations • Enugu, Nigeria
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenModal('rental-policy')}
              className="text-[11px] hover:text-[#E6C875] transition-colors"
            >
              Privacy & Rental Terms
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-[#E6C875] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
