import React, { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { GOWNS_CATALOG, CATEGORIES } from '../data/bridalData';
import { GownItem } from '../types';

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
  onSelectGown,
  onBookAppointment
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory || 'all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'rent' | 'bespoke'>('all');

  if (!isOpen) return null;

  const filteredGowns = GOWNS_CATALOG.filter((gown) => {
    // Category filter
    if (selectedCategory !== 'all' && gown.category !== selectedCategory) {
      return false;
    }
    // Availability filter
    if (availabilityFilter === 'rent' && !gown.isAvailableForRent) {
      return false;
    }
    if (availabilityFilter === 'bespoke' && !gown.isBespokeInspiration) {
      return false;
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#EAE3D5] flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
              BEAJAY COUTURE ARCHIVE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
              Bridal Collections Showcase
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-4 sm:px-8 border-b border-[#E8E1D2] bg-[#FAF7F0] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Silhouette Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 whitespace-nowrap transition-colors cursor-pointer font-medium tracking-wider uppercase text-[11px] ${
                selectedCategory === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-neutral-700 hover:bg-[#F2EDE2]'
              }`}
            >
              All Silhouettes
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 whitespace-nowrap transition-colors cursor-pointer font-medium tracking-wider uppercase text-[11px] ${
                  selectedCategory === cat.slug
                    ? 'bg-[#C59B3F] text-white'
                    : 'bg-white text-neutral-700 hover:bg-[#F2EDE2]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Availability Filter */}
          <div className="flex items-center gap-2 self-end md:self-auto text-xs">
            <button
              onClick={() => setAvailabilityFilter('all')}
              className={`px-2.5 py-1 text-[11px] transition-colors cursor-pointer ${
                availabilityFilter === 'all' ? 'text-[#856122] font-semibold underline' : 'text-neutral-600'
              }`}
            >
              All Gowns
            </button>
            <span className="text-neutral-400">|</span>
            <button
              onClick={() => setAvailabilityFilter('rent')}
              className={`px-2.5 py-1 text-[11px] transition-colors cursor-pointer ${
                availabilityFilter === 'rent' ? 'text-[#856122] font-semibold underline' : 'text-neutral-600'
              }`}
            >
              Available For Rent
            </button>
            <span className="text-neutral-400">|</span>
            <button
              onClick={() => setAvailabilityFilter('bespoke')}
              className={`px-2.5 py-1 text-[11px] transition-colors cursor-pointer ${
                availabilityFilter === 'bespoke' ? 'text-[#856122] font-semibold underline' : 'text-neutral-600'
              }`}
            >
              Bespoke Inspiration
            </button>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {filteredGowns.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-[#C59B3F] mx-auto opacity-50" />
              <h3 className="font-serif text-xl text-neutral-700">No gowns found in this selection</h3>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Try selecting a different silhouette category or reset filters to browse our full couture catalog.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setAvailabilityFilter('all');
                }}
                className="mt-2 text-xs text-[#C59B3F] underline uppercase tracking-wider font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGowns.map((gown) => (
                <div
                  key={gown.id}
                  className="group bg-white border border-[#E9E3D6] hover:border-[#C59B3F] transition-all flex flex-col overflow-hidden shadow-xs hover:shadow-lg"
                >
                  {/* Gown Photo */}
                  <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden cursor-pointer">
                    <img
                      src={gown.image}
                      alt={gown.name}
                      loading="lazy"
                      onClick={() => onSelectGown(gown)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="bg-[#111111]/85 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 tracking-wider uppercase font-sans">
                        {gown.categoryLabel}
                      </span>
                      {gown.isAvailableForRent && (
                        <span className="bg-[#C59B3F] text-white text-[9px] px-2 py-0.5 tracking-wider uppercase font-sans font-medium">
                          Available For Rent
                        </span>
                      )}
                    </div>

                    {/* Quick Inspect Button on Hover */}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => onSelectGown(gown)}
                        className="w-full bg-[#111111]/90 hover:bg-black text-white py-2 text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
                      >
                        View Details & Fit
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                    <div>
                      <h4 
                        onClick={() => onSelectGown(gown)}
                        className="font-serif text-base text-[#111111] hover:text-[#C59B3F] transition-colors cursor-pointer"
                      >
                        {gown.name}
                      </h4>
                      <p className="text-[11px] text-neutral-500 font-light mt-1 line-clamp-2">
                        {gown.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F2ECE0] space-y-2.5">
                      {(gown.rentalStartingPrice || gown.purchaseStartingPrice) && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[10px] uppercase text-neutral-400">Pricing:</span>
                          <span className="font-semibold text-[#856122]">
                            {gown.rentalStartingPrice || gown.purchaseStartingPrice}
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onSelectGown(gown)}
                          className="py-2 text-[10.5px] border border-neutral-300 hover:border-neutral-800 text-neutral-800 uppercase tracking-wider text-center cursor-pointer"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onBookAppointment(gown.name)}
                          className="py-2 text-[10.5px] bg-[#C59B3F] hover:bg-[#B3892F] text-white uppercase tracking-wider text-center font-semibold cursor-pointer"
                        >
                          Book Fitting
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#EAE3D5] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span>Enugu, Nigeria</span>
          <button
            onClick={() => onBookAppointment()}
            className="text-xs font-semibold text-[#856122] hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer"
          >
            <span>Book In-Studio Fitting Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
