import React from 'react';
import { X, Sparkles, Heart, Award, MapPin, ArrowRight } from 'lucide-react';
import { EDITORIAL_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onBookAppointment
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 z-10 cursor-pointer bg-white/80 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-[#EAE3D5] pb-6">
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
              THE BEAJAY BRIDAL HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111111]">
              About BEAJAY COUTURE BRIDAL
            </h2>
            <div className="w-14 h-[2px] bg-[#C59B3F] mx-auto my-2" />
            <p className="font-sans text-xs text-neutral-600 font-light max-w-lg mx-auto">
              Rooted in Enugu, Nigeria — celebrating elegance, thoughtful craftsmanship, and dedicated bridal styling.
            </p>
          </div>

          {/* Editorial Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/5] bg-neutral-100 overflow-hidden border border-[#E5DEC9] shadow-md relative">
              <img
                src={resolveMedia(EDITORIAL_MEDIA_ASSETS.aboutModal)}
                alt={EDITORIAL_MEDIA_ASSETS.aboutModal.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic text-center">
                “Every bride is a queen stepping into her sacred destiny.”
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-[13px] text-neutral-600 font-light leading-relaxed">
              <h3 className="font-serif text-xl font-normal text-[#111111]">
                Bridal Craftsmanship in Enugu
              </h3>
              <p>
                BEAJAY COUTURE BRIDAL was founded with a singular conviction: that every bride deserves to experience royal bridal luxury without compromise. 
                Based in Enugu, Nigeria, BEAJAY showcases statement ball gowns, elegant mermaid silhouettes, and signature veil creations.
              </p>
              <p>
                Alongside our bridal collections, we offer our refined 
                <strong className="font-medium text-neutral-900"> Gown Rental Service</strong> for brides and bridal industry partners.
              </p>
              <div className="pt-2 border-t border-[#EAE3D5] grid grid-cols-2 gap-4 text-neutral-800 font-medium">
                <div>
                  <span className="font-serif text-2xl text-[#C59B3F] block font-light">100%</span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500">Private Fitting Sessions</span>
                </div>
                <div>
                  <span className="font-serif text-2xl text-[#C59B3F] block font-light">Dedicated</span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500">Fitting Consultations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE3D5]">
            <div className="p-4 bg-white border border-[#EAE3D5] text-center space-y-2">
              <Heart className="w-5 h-5 text-[#C59B3F] mx-auto" />
              <h4 className="font-serif text-base text-neutral-900">Dedicated Care</h4>
              <p className="text-[11px] text-neutral-500 font-light">
                From private bridal styling to gentle hand adjustments, you are revered throughout.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#EAE3D5] text-center space-y-2">
              <Award className="w-5 h-5 text-[#C59B3F] mx-auto" />
              <h4 className="font-serif text-base text-neutral-900">Quality Standards</h4>
              <p className="text-[11px] text-neutral-500 font-light">
                Curated fabrics, hand-finished detailing, and thoughtful gown construction.
              </p>
            </div>

            <div className="p-4 bg-white border border-[#EAE3D5] text-center space-y-2">
              <MapPin className="w-5 h-5 text-[#C59B3F] mx-auto" />
              <h4 className="font-serif text-base text-neutral-900">Enugu, Nigeria</h4>
              <p className="text-[11px] text-neutral-500 font-light">
                Located in Enugu, Nigeria with private consultation sessions.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 text-center">
            <button
              onClick={() => {
                onClose();
                onBookAppointment();
              }}
              className="bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3.5 px-8 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md inline-flex items-center gap-2"
            >
              <span>BOOK A BRIDAL CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
