import React, { useState, useMemo } from 'react';
import { X, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { COLLECTION_MEDIA_ITEMS, COLLECTION_NAV_CATEGORIES } from '../data/bridalData';
import { CollectionMediaItem, GalleryItem, GownItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';
import { getOptimizedMedia } from '../utils/optimizedMedia';

interface CollectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  onSelectGown: (gown: GownItem) => void;
  onBookAppointment: (gownName?: string) => void;
}

export const CollectionsModal: React.FC<CollectionsModalProps> = ({
  isOpen,
  onClose,
  defaultCategory,
  onBookAppointment
}) => {
  const normalizeSlug = (slug?: string) => {
    if (!slug || slug === 'all') return 'all';
    if (slug === 'accessories') return 'veils-accessories';
    return slug;
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(() => normalizeSlug(defaultCategory));
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredMedia = useMemo(() => {
    return COLLECTION_MEDIA_ITEMS.filter((item) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'ball-gown') return item.category === 'ball-gown';
      if (selectedCategory === 'mermaid') return item.category === 'mermaid';
      if (selectedCategory === 'veils-accessories' || selectedCategory === 'accessories') {
        return item.category === 'accessories';
      }
      return true;
    });
  }, [selectedCategory]);

  const mediaToGalleryItem = (media: CollectionMediaItem): GalleryItem => ({
    id: media.id,
    title: `BEAJAY Couture ${media.categoryLabel}`,
    category: 'bridal-looks',
    categoryLabel: media.categoryLabel,
    image: media.src,
    alt: media.alt,
    caption: 'Official BEAJAY COUTURE BRIDAL collection photography, Enugu, Nigeria.',
    featured: media.featured
  });

  const lightboxItems = useMemo(() => {
    return filteredMedia.map(mediaToGalleryItem);
  }, [filteredMedia]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl bg-[#FCFAF7] dark:bg-[#141312] border border-[#DCD5C5] dark:border-[#2C2925] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#EAE3D5] dark:border-[#262420] flex items-center justify-between bg-white dark:bg-[#181716]">
          <div>
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
              BEAJAY COUTURE ARCHIVE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] dark:text-white">
              Bridal Collections Lookbook
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-[#252320] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar - Strictly Active Silhouettes Only */}
        <div className="p-4 sm:px-8 border-b border-[#E8E1D2] dark:border-[#262420] bg-[#FAF7F0] dark:bg-[#1D1B18] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            {COLLECTION_NAV_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              const count = cat.slug === 'all'
                ? COLLECTION_MEDIA_ITEMS.length
                : cat.slug === 'veils-accessories'
                ? COLLECTION_MEDIA_ITEMS.filter((i) => i.category === 'accessories').length
                : COLLECTION_MEDIA_ITEMS.filter((i) => i.category === cat.slug).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-1.5 whitespace-nowrap transition-all cursor-pointer font-semibold tracking-[0.16em] uppercase text-[10.5px] border ${
                    isSelected
                      ? 'bg-[#111111] dark:bg-[#C59B3F] text-white border-[#111111] dark:border-[#C59B3F]'
                      : 'bg-white dark:bg-[#252320] text-neutral-700 dark:text-neutral-300 border-[#DDD5C7] dark:border-[#38342E] hover:border-[#C59B3F] hover:text-[#C59B3F]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`ml-1.5 font-mono text-[9.5px] ${isSelected ? 'text-[#C59B3F] dark:text-neutral-900' : 'text-neutral-400 dark:text-neutral-500'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light hidden sm:inline">
            Click any image to view in high resolution
          </span>
        </div>

        {/* Content Body Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredMedia.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(mediaToGalleryItem(item))}
                className="group relative flex flex-col bg-white dark:bg-[#1A1917] border border-[#EBE5DA] dark:border-[#2C2925] hover:border-[#C59B3F] transition-all cursor-pointer overflow-hidden shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[3/4] bg-[#F3EFE7] dark:bg-[#201E1B] overflow-hidden">
                  {(() => {
                    const opt = getOptimizedMedia(item.src);
                    return (
                      <img
                        src={opt.src}
                        srcSet={opt.srcSet}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    );
                  })()}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 dark:bg-[#1A1917]/90 text-[#111111] dark:text-white text-[10px] uppercase font-semibold tracking-wider px-3 py-1.5 flex items-center gap-1.5">
                      <Eye className="w-3 h-3 text-[#C59B3F]" />
                      <span>View</span>
                    </span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#111111]/80 text-white text-[8.5px] tracking-[0.18em] uppercase px-2 py-0.5 font-mono">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#EAE3D5] dark:border-[#262420] bg-white dark:bg-[#181716] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-400">
          <span>Official BEAJAY Collection Archive • Enugu, Nigeria</span>
          <button
            onClick={() => {
              onClose();
              onBookAppointment();
            }}
            className="text-xs font-semibold text-[#856122] dark:text-[#E6C875] hover:underline flex items-center gap-1.5 uppercase tracking-wider cursor-pointer"
          >
            <span>Book Bridal Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {lightboxItem && (
        <GalleryLightbox
          item={lightboxItem}
          items={lightboxItems}
          onClose={() => setLightboxItem(null)}
          onSelectItem={(item) => setLightboxItem(item)}
        />
      )}
    </div>
  );
};
