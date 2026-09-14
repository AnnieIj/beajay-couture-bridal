import React from 'react';
import { X, Play, Instagram, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { HERO_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onBookAppointment
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#111111] text-white border border-[#2D2A26] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white z-20 cursor-pointer bg-black/60 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
          {item.isVideo ? (
            <div className="w-full h-full relative">
              <video
                src={resolveMedia(HERO_MEDIA_ASSETS.video)}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Caption & Actions */}
        <div className="p-6 bg-[#161514] border-t border-[#262420] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#C59B3F] font-semibold">
              BEAJAY BRIDAL MOMENTS
            </span>
            <h3 className="font-serif text-xl text-white font-normal">
              {item.title}
            </h3>
            {item.caption && (
              <p className="text-xs text-neutral-400 font-light">
                {item.caption}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://instagram.com/beajaycouture_bridal"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 border border-[#33302B] text-neutral-300 hover:text-[#C59B3F] hover:border-[#C59B3F] transition-colors"
              title="Instagram @beajaycouture_bridal"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                onClose();
                onBookAppointment();
              }}
              className="bg-[#C59B3F] hover:bg-[#B3892F] text-white py-2.5 px-5 text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Enquire Fitting
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
