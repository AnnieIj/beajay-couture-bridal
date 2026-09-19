import React from 'react';
import { 
  MapPin, 
  Instagram, 
  MessageSquare, 
  ArrowUp,
  Globe
} from 'lucide-react';
import { ActiveModal } from '../types';
import { BRAND_CONTACT, buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';

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
              <li>
                <button 
                  onClick={() => onOpenModal('share-experience')}
                  className="hover:text-[#E6C875] transition-colors cursor-pointer text-left min-h-[32px] inline-flex items-center"
                >
                  Bride Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Appointments Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white pb-1 border-b border-[#262420] inline-block">
              Connect With Us
            </h3>
            
            <div className="space-y-2.5 text-xs text-neutral-300 font-light">
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" />
                <span>{BRAND_CONTACT.location}</span>
              </div>

              {/* Clickable WhatsApp */}
              <div className="pt-0.5">
                <a 
                  href={buildWhatsAppUrl({ type: 'general' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#58f390] transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-mono text-xs">{BRAND_CONTACT.whatsapp.internationalDisplay}</span>
                </a>
              </div>

              {/* Social Channels List */}
              <div className="pt-1.5 space-y-1.5 text-[11px] text-neutral-400">
                <div className="flex items-center gap-2">
                  <a 
                    href={BRAND_CONTACT.socials.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#E6C875] transition-colors flex items-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" />
                    <span>Instagram: {BRAND_CONTACT.socials.instagram.handle}</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">•</span>
                  {BRAND_CONTACT.socials.facebook.url ? (
                    <a 
                      href={BRAND_CONTACT.socials.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit BEAJAY COUTURE BRIDAL on Facebook"
                      className="hover:text-[#E6C875] transition-colors"
                    >
                      Facebook: {BRAND_CONTACT.socials.facebook.handle}
                    </a>
                  ) : (
                    <span>Facebook: {BRAND_CONTACT.socials.facebook.handle}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500">•</span>
                  {BRAND_CONTACT.socials.tiktok.url ? (
                    <a 
                      href={BRAND_CONTACT.socials.tiktok.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#E6C875] transition-colors"
                    >
                      TikTok: {BRAND_CONTACT.socials.tiktok.handle}
                    </a>
                  ) : (
                    <span>TikTok: {BRAND_CONTACT.socials.tiktok.handle}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-[#C59B3F] shrink-0" />
                  {BRAND_CONTACT.socials.global.url ? (
                    <a 
                      href={BRAND_CONTACT.socials.global.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#E6C875] transition-colors"
                    >
                      Global: {BRAND_CONTACT.socials.global.handle}
                    </a>
                  ) : (
                    <span>Global: {BRAND_CONTACT.socials.global.handle}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenModal('appointment')}
                className="bg-[#C59B3F] hover:bg-[#B3892F] text-white py-2.5 px-4 text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer text-center"
              >
                REQUEST FITTING
              </button>
              <a
                href={buildWhatsAppUrl({ type: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 border border-[#25D366]/40 hover:border-[#25D366] text-neutral-300 hover:text-white py-2.5 px-4 text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer text-center"
              >
                <WhatsAppIcon className="w-3 h-3 text-[#25D366]" />
                <span>WHATSAPP CHAT</span>
              </a>
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
