import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const currentList = items && items.length > 0 ? items : (item ? [item] : []);
  const currentIndex = item ? currentList.findIndex((i) => i.id === item.id) : -1;
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const totalCount = currentList.length;
  const canNavigate = totalCount > 1;

  const handleNext = () => {
    if (!canNavigate || !onSelectItem) return;
    const nextIndex = (safeIndex + 1) % totalCount;
    onSelectItem(currentList[nextIndex]);
  };

  const handlePrev = () => {
    if (!canNavigate || !onSelectItem) return;
    const prevIndex = (safeIndex - 1 + totalCount) % totalCount;
    onSelectItem(currentList[prevIndex]);
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!item) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

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
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, safeIndex, totalCount, onSelectItem, onClose]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!item || !mounted) return null;

  const displayImageSrc = item.image || item.src || '';

  const lightboxContent = (
    <div
      id="gallery-fullscreen-lightbox"
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-md select-none overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image viewer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Counter & Close Button */}
      <div 
        className="relative z-20 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm tracking-[0.2em] uppercase text-[#E6C875] font-light">
            BEAJAY
          </span>
          {canNavigate && (
            <>
              <span className="text-neutral-600">/</span>
              <span className="font-mono text-xs text-neutral-300 tracking-widest">
                {String(safeIndex + 1).padStart(2, '0')} of {String(totalCount).padStart(2, '0')}
              </span>
            </>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close fullscreen gallery (Escape)"
          className="w-11 h-11 flex items-center justify-center text-neutral-400 hover:text-white bg-white/5 hover:bg-white/15 rounded-full transition-colors cursor-pointer border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Viewport: Center Stage with High-Resolution Image & Navigation Arrows */}
      <div 
        className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-hidden"
        onClick={onClose}
      >
        {/* Prev Arrow Desktop */}
        {canNavigate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photograph (Left Arrow)"
            className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-black/60 hover:bg-[#1A1918] text-neutral-300 hover:text-[#C59B3F] border border-[#33302B] transition-all cursor-pointer shadow-2xl z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Media Centerpiece */}
        <div 
          className="relative max-w-full max-h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {item.isVideo ? (
            <div className="w-full max-w-4xl aspect-[16/9] bg-black shadow-2xl border border-neutral-800">
              <video
                src={item.videoUrl || resolveMedia(HERO_MEDIA_ASSETS.video)}
                controls
                autoPlay
                className="w-full h-full object-contain"
                aria-label={item.alt || item.title}
              />
            </div>
          ) : (
            <img
              src={displayImageSrc}
              alt={item.alt || item.title}
              className="max-h-[78vh] sm:max-h-[82vh] md:max-h-[84vh] w-auto max-w-[95vw] md:max-w-[88vw] object-contain shadow-2xl select-none"
            />
          )}
        </div>

        {/* Next Arrow Desktop */}
        {canNavigate && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photograph (Right Arrow)"
            className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-black/60 hover:bg-[#1A1918] text-neutral-300 hover:text-[#C59B3F] border border-[#33302B] transition-all cursor-pointer shadow-2xl z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Bar: Clean Editorial Controls */}
      <div 
        className="relative z-20 px-4 sm:px-8 py-3.5 bg-gradient-to-t from-black/90 via-black/60 to-transparent shrink-0 flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-left">
          <p className="font-serif text-sm sm:text-base text-white/90 font-light tracking-wide">
            {item.title}
          </p>
          <span className="text-[10px] tracking-[0.22em] uppercase text-[#C59B3F] font-medium">
            BEAJAY COUTURE BRIDAL • ENUGU
          </span>
        </div>

        {/* Mobile Navigation Controls (Touch friendly min-44px) */}
        {canNavigate && (
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous photograph"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/70 border border-[#33302B] text-neutral-200 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-neutral-300 px-1">
              {safeIndex + 1}/{totalCount}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next photograph"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/70 border border-[#33302B] text-neutral-200 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(lightboxContent, document.body)
    : lightboxContent;
};
