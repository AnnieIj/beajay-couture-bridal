import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { GOWNS_CATALOG } from '../data/bridalData';
import { GownItem } from '../types';

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
    : GOWNS_CATALOG.filter(g => 
        g.name.toLowerCase().includes(query.toLowerCase()) ||
        g.silhouette.toLowerCase().includes(query.toLowerCase()) ||
        g.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        g.description.toLowerCase().includes(query.toLowerCase()) ||
        g.fabric.toLowerCase().includes(query.toLowerCase()) ||
        g.tags?.some(t => t.toLowerCase().includes(query.toLowerCase()))
      );

  const quickTags = ['Ball Gown', 'Mermaid', 'Rental', 'Cathedral Veil', 'Pearl', 'Reception'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#EAE3D5] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#C59B3F] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search gowns by silhouette, fabric, rental, or detail..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 focus:outline-none placeholder:text-neutral-400 font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-neutral-400 hover:text-neutral-700"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-neutral-500 hover:text-neutral-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-3 bg-[#FAF7F0] border-b border-[#E8E1D2] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider">Suggested:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white border border-[#DDD5C5] hover:border-[#C59B3F] text-neutral-700 text-[11px] whitespace-nowrap cursor-pointer transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs text-neutral-400 font-light">
              Type to search our Enugu bridal couture gowns, rental silhouettes, or veils...
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-xs text-neutral-500">
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
                className="group flex items-center gap-4 p-3 bg-white border border-[#EAE3D5] hover:border-[#C59B3F] transition-all cursor-pointer shadow-2xs"
              >
                <div className="w-16 h-20 bg-neutral-100 shrink-0 overflow-hidden">
                  <img
                    src={gown.image}
                    alt={gown.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider text-[#856122] font-semibold bg-[#FAF7F0] px-1.5 py-0.5 border border-[#E5DEC9]">
                      {gown.categoryLabel}
                    </span>
                    {gown.isAvailableForRent && (
                      <span className="text-[9px] uppercase tracking-wider text-neutral-500">
                        Rental Available
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-sm sm:text-base text-[#111111] group-hover:text-[#C59B3F] transition-colors truncate">
                    {gown.name}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light truncate">
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
