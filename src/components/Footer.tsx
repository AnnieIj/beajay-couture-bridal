import React from 'react';
import { 
  MapPin, 
  Instagram, 
  MessageSquare, 
  ArrowUp
} from 'lucide-react';
import { ActiveModal } from '../types';

interface FooterProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onNavigateHome: () => void;
  onNavigateCollections?: () => void;
  onNavigateRentals?: () => void;
  onNavigateGallery?: () => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenModal, 
  onNavigateHome,
  onNavigateCollections,
  onNavigateRentals,
  onNavigateGallery,
  onNavigateAbout,
  onNavigateContact
}) => {
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

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm pt-1">
              Exquisite bridal couture, luxury gown rentals, and personalized fitting services.
            </p>

            <div className="text-xs text-[#E6C875] tracking-widest uppercase font-serif">
              Crafted in Nigeria. Made for Brides Everywhere.
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-300 font-light pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" />
              <span>Enugu, Nigeria</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#262420] inline-block">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs text-neutral-300 font-light">
              <li>
                <button 
                  onClick={onNavigateHome}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateCollections) {
                      onNavigateCollections();
                    } else {
                      onOpenModal('collections');
                    }
                  }}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateRentals) {
                      onNavigateRentals();
                    } else {
                      onOpenModal('rentals');
                    }
                  }}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Rentals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateGallery) {
                      onNavigateGallery();
                    } else {
                      onOpenModal('gallery');
                    }
                  }}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateAbout) {
                      onNavigateAbout();
                    } else {
                      onOpenModal('about');
                    }
                  }}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigateContact) {
                      onNavigateContact();
                    } else {
                      onOpenModal('contact');
                    }
                  }}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('appointment')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Appointments Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#262420] inline-block">
              Connect
            </h3>
            
            <div className="space-y-3 text-xs text-neutral-300 font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C59B3F] shrink-0" />
                <span>Enugu, Nigeria • By Appointment Only</span>
              </div>

              <div className="pt-1">
                <a 
                  href="https://instagram.com/beajaycouture_bridal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-300 hover:text-[#E6C875] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C59B3F]" />
                  <span>@beajaycouture_bridal</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenModal('appointment')}
                className="bg-[#C59B3F] hover:bg-[#B3892F] text-white py-2.5 px-4 text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer text-center"
              >
                REQUEST FITTING
              </button>
              <button
                onClick={() => {
                  if (onNavigateContact) {
                    onNavigateContact();
                  } else {
                    onOpenModal('contact');
                  }
                }}
                className="border border-[#3E3A32] hover:border-[#C59B3F] text-neutral-300 hover:text-white py-2.5 px-4 text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer text-center"
              >
                CONTACT US
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 BEAJAY COUTURE BRIDAL. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600">
              Crafted in Nigeria. Made for Brides Everywhere. • Enugu, Nigeria
            </p>
          </div>

          <div className="flex items-center gap-6">
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
