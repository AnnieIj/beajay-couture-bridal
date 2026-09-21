import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { ACTIVE_GOWNS_CATALOG } from '../data/bridalData';
import { GownItem } from '../types';
import { getOptimizedMedia } from '../utils/optimizedMedia';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGown: (gown: GownItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectGown
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? []
    : ACTIVE_GOWNS_CATALOG.filter(g => 
        g.name.toLowerCase().includes(query.toLowerCase()) ||
        g.silhouette.toLowerCase().includes(query.toLowerCase()) ||
        g.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        g.description.toLowerCase().includes(query.toLowerCase()) ||
        g.fabric.toLowerCase().includes(query.toLowerCase()) ||
        g.tags?.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
        (query.toLowerCase().includes('rent') && g.rentalEligible)
      );

  const quickTags = ['Ball Gown', 'Mermaid Gowns', 'Veils & Accessories', 'Rental', 'Cathedral Veil'];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-label="Search bridal collection"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FCFAF7] dark:bg-[#141312] border border-[#DCD5C5] dark:border-white/10 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EAE3D5] dark:border-white/10 flex items-center gap-3 bg-white dark:bg-[#181716]">
          <Search className="w-5 h-5 text-[#C59B3F] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search gowns by silhouette, fabric, rental, or detail..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 dark:text-[#F8F5EE] focus:outline-none placeholder:text-neutral-400 dark:placeholder:text-[#A39D93] font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 dark:text-[#A39D93] hover:text-neutral-700 dark:hover:text-[#F8F5EE]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-neutral-500 dark:text-[#A39D93] hover:text-neutral-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-3 bg-[#FAF7F0] dark:bg-[#1C1B19] border-b border-[#E8E1D2] dark:border-white/10 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[10px] uppercase font-semibold text-neutral-500 dark:text-[#A39D93] tracking-wider">Suggested:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white dark:bg-[#252422] border border-[#DDD5C5] dark:border-white/15 hover:border-[#C59B3F] text-neutral-700 dark:text-[#D4CEC3] hover:text-black dark:hover:text-white text-[11px] whitespace-nowrap cursor-pointer transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3 bg-[#FCFAF7] dark:bg-[#141312]">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs text-neutral-400 dark:text-[#A39D93] font-light">
              Type to search our Enugu, Nigeria bridal couture gowns, rental silhouettes, or veils...
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs text-neutral-500 dark:text-[#D4CEC3]">
              No bridal gowns matched &ldquo;{query}&rdquo;. Try another search term or explore our full collection.
            </div>
          ) : (
            results.map((gown) => (
              <div
                key={gown.id}
                onClick={() => {
                  onSelectGown(gown);
                  onClose();
                }}
                className="group flex items-center gap-4 p-3 bg-white dark:bg-[#1C1B19] border border-[#EAE3D5] dark:border-white/10 hover:border-[#C59B3F] transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-16 h-20 bg-neutral-100 dark:bg-[#252422] shrink-0 overflow-hidden">
                  {(() => {
                    const opt = getOptimizedMedia(gown.image);
                    return (
                      <img
                        src={opt.thumbnail || opt.src}
                        alt={gown.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    );
                  })()}
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider text-[#856122] dark:text-[#E6C875] font-semibold bg-[#FAF7F0] dark:bg-[#22201E] px-1.5 py-0.5 border border-[#E5DEC9] dark:border-white/15">
                      {gown.categoryLabel}
                    </span>
                    {gown.rentalEligible && (
                      <span className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-[#A39D93]">
                        Rental Available
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-sm sm:text-base text-[#111111] dark:text-[#F8F5EE] group-hover:text-[#C59B3F] dark:group-hover:text-[#E6C875] transition-colors truncate">
                    {gown.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-[#A39D93] font-light truncate">
                    {gown.silhouette} • {gown.fabric}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C59B3F] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
