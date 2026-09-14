import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { GalleryItem } from '../types';
import { HERO_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items?: GalleryItem[];
  onClose: () => void;
  onSelectItem?: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onSelectItem
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!item) return null;

  const currentList = items && items.length > 0 ? items : [item];
  const currentIndex = currentList.findIndex((i) => i.id === item.id);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const totalCount = currentList.length;

  const canNavigate = totalCount > 1;

  const handleNext = () => {
    if (!canNavigate) return;
    const nextIndex = (safeIndex + 1) % totalCount;
    if (onSelectItem) {
      onSelectItem(currentList[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (!canNavigate) return;
    const prevIndex = (safeIndex - 1 + totalCount) % totalCount;
    if (onSelectItem) {
      onSelectItem(currentList[prevIndex]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, totalCount, onSelectItem]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Image
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous Image
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const displayCategory = item.categoryLabel || 
    (item.category === 'bridal-looks' ? 'Bridal Looks' :
     item.category === 'couture-details' ? 'Couture Details' :
     item.category === 'bespoke' ? 'Bespoke' :
     item.category === 'veils-accessories' ? 'Veils & Accessories' :
     item.category === 'behind-the-craft' ? 'Behind The Craft' : 'Editorial Archive');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
    >
      {/* Outer wrapper to prevent click propagation */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl h-full max-h-[96vh] sm:max-h-[92vh] bg-[#0E0D0C] text-white border border-[#262420] shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Floating Bar: Counter & Close Button */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          {/* Counter */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.26em] uppercase font-semibold text-[#C59B3F]">
              BEAJAY GALLERY
            </span>
            {canNavigate && (
              <>
                <span className="text-neutral-500">•</span>
                <span className="font-mono text-xs text-neutral-300 tracking-wider">
                  {String(safeIndex + 1).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
                </span>
              </>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close image viewer (Esc)"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Frame (Center viewport) */}
        <div className="relative flex-1 w-full flex items-center justify-center bg-black/60 overflow-hidden pt-12 pb-2 px-2 sm:px-8">
          {item.isVideo ? (
            <div className="w-full max-w-3xl aspect-[16/9] bg-black relative flex items-center justify-center shadow-2xl border border-[#22201D]">
              <video
                src={item.videoUrl || resolveMedia(HERO_MEDIA_ASSETS.video)}
                controls
                autoPlay
                className="w-full h-full object-contain"
                aria-label={item.alt || item.title}
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={item.image}
                alt={item.alt || item.title}
                className="max-h-[62vh] sm:max-h-[70vh] w-auto max-w-full object-contain shadow-2xl select-none"
              />
            </div>
          )}

          {/* Desktop Edge Navigation Arrows */}
          {canNavigate && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous photograph (Left arrow)"
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-black/60 hover:bg-[#1A1918] text-white/80 hover:text-[#C59B3F] border border-[#33302B] transition-all cursor-pointer shadow-lg z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next photograph (Right arrow)"
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-black/60 hover:bg-[#1A1918] text-white/80 hover:text-[#C59B3F] border border-[#33302B] transition-all cursor-pointer shadow-lg z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Editorial Bar: Category, Title, Neutral Caption & Actions */}
        <div className="p-4 sm:p-5 bg-[#141312] border-t border-[#262420] shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Left Metadata */}
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase text-[#C59B3F] font-medium">
                  {displayCategory}
                </span>
                {item.featured && (
                  <span className="text-[9px] tracking-widest uppercase bg-[#C59B3F]/15 text-[#E6C875] px-1.5 py-0.5 border border-[#C59B3F]/30">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-white font-normal tracking-wide">
                {item.title}
              </h3>

              {item.caption && (
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.caption}
                </p>
              )}
            </div>

            {/* Right Controls: Navigation Controls on Mobile */}
            {canNavigate && (
              <div className="flex sm:hidden items-center justify-end gap-1.5 pt-2 border-t border-neutral-800/80">
                <button
                  onClick={handlePrev}
                  aria-label="Previous photograph"
                  className="w-10 h-10 flex items-center justify-center border border-[#33302B] text-neutral-300 hover:text-white bg-black/40 rounded-full cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-mono text-[11px] text-neutral-400 px-2">
                  {safeIndex + 1} / {totalCount}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next photograph"
                  className="w-10 h-10 flex items-center justify-center border border-[#33302B] text-neutral-300 hover:text-white bg-black/40 rounded-full cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
