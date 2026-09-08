import React, { useState, useMemo } from 'react';
import { Sparkles, Calendar, RotateCcw, Check } from 'lucide-react';
import { GOWNS_CATALOG, COLLECTION_NAV_CATEGORIES } from '../data/bridalData';
import { GownItem, GownCategory } from '../types';
import { CollectionsHero } from './CollectionsHero';
import { GownCard } from './GownCard';

interface CollectionsPageProps {
  onSelectGown: (gown: GownItem) => void;
  onBookAppointment: (gownName?: string) => void;
  initialCategory?: string;
  initialRentalOnly?: boolean;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectGown,
  onBookAppointment,
  initialCategory = 'all',
  initialRentalOnly = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [rentalOnly, setRentalOnly] = useState<boolean>(initialRentalOnly);
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'available' | 'reserved' | 'coming-soon'>('all');

  // Filtered Gowns Logic
  const filteredGowns = useMemo(() => {
    return GOWNS_CATALOG.filter((gown) => {
      // Category filter
      if (selectedCategory !== 'all' && gown.category !== selectedCategory) {
        return false;
      }
      // Rental eligibility filter
      if (rentalOnly && !gown.rentalEligible) {
        return false;
      }
      // Availability filter
      if (availabilityFilter !== 'all' && gown.availability !== availabilityFilter) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, rentalOnly, availabilityFilter]);

  const hasActiveFilters = selectedCategory !== 'all' || rentalOnly || availabilityFilter !== 'all';

  const resetFilters = () => {
    setSelectedCategory('all');
    setRentalOnly(false);
    setAvailabilityFilter('all');
  };

  return (
    <div id="collections-page" className="min-h-screen bg-[#FCFAF7] text-[#111111] flex flex-col">
      {/* Editorial Hero Header */}
      <CollectionsHero />

      {/* Main Showcase Section */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        
        {/* Category Navigation Bar */}
        <div className="border-b border-[#EAE4D9] pb-4 mb-6">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#856122] uppercase hidden sm:block">
              BROWSE BY SILHOUETTE
            </span>
          </div>

          {/* Horizontally scrollable on mobile, flex wrap on desktop */}
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {COLLECTION_NAV_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              // Compute count for each category
              const count = cat.slug === 'all' 
                ? GOWNS_CATALOG.length 
                : GOWNS_CATALOG.filter(g => g.category === cat.slug).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 text-[11px] font-medium tracking-[0.14em] uppercase whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                      : 'bg-white text-neutral-700 border-[#E5DFD3] hover:border-[#C59B3F] hover:text-[#C59B3F]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`ml-2 text-[9.5px] ${isSelected ? 'text-[#C59B3F]' : 'text-neutral-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter & Counter Toolbar */}
        <div className="bg-[#FAF7F0] border border-[#EAE4D9] p-3.5 sm:p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Left: Availability & Rental Filters */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            {/* Rental Eligible Toggle */}
            <button
              onClick={() => setRentalOnly(!rentalOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border text-[11px] font-medium tracking-wider uppercase transition-colors cursor-pointer ${
                rentalOnly
                  ? 'bg-[#C59B3F] text-white border-[#C59B3F]'
                  : 'bg-white text-neutral-700 border-[#DDD5C7] hover:border-[#C59B3F]'
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center text-[9px] ${
                rentalOnly ? 'bg-white text-[#C59B3F] border-white' : 'border-neutral-400'
              }`}>
                {rentalOnly && <Check className="w-3 h-3 stroke-[3]" />}
              </span>
              <span>Rental Eligible Only</span>
            </button>

            <span className="text-neutral-300 hidden sm:inline">|</span>

            {/* Availability Filter */}
            <div className="flex items-center gap-1">
              <span className="text-[10.5px] uppercase tracking-wider text-neutral-500 mr-1 hidden sm:inline">
                Status:
              </span>
              <button
                onClick={() => setAvailabilityFilter('all')}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider cursor-pointer ${
                  availabilityFilter === 'all'
                    ? 'text-[#856122] font-semibold underline'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setAvailabilityFilter('available')}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider cursor-pointer ${
                  availabilityFilter === 'available'
                    ? 'text-[#856122] font-semibold underline'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Available in Atelier
              </button>
              <button
                onClick={() => setAvailabilityFilter('reserved')}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider cursor-pointer ${
                  availabilityFilter === 'reserved'
                    ? 'text-[#856122] font-semibold underline'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Reserved
              </button>
            </div>
          </div>

          {/* Right: Gown Counter & Reset */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
            <span className="text-[11px] font-medium tracking-wider uppercase text-neutral-600">
              Showing <strong className="text-neutral-900">{filteredGowns.length}</strong> {filteredGowns.length === 1 ? 'gown' : 'gowns'}
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-[10.5px] text-[#856122] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

        </div>

        {/* Editorial Gown Grid */}
        {filteredGowns.length === 0 ? (
          /* Polished Empty State */
          <div className="py-24 text-center space-y-4 bg-white border border-[#EAE4D9] p-8 max-w-xl mx-auto">
            <Sparkles className="w-8 h-8 text-[#C59B3F] mx-auto opacity-70" />
            <h3 className="font-serif text-2xl text-[#111111]">No Gowns Found</h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed max-w-md mx-auto">
              No bridal gowns matched your current filter criteria. Try adjusting your silhouette selection or clearing active filters to view our full collection.
            </p>
            <div className="pt-2">
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#C59B3F]" />
                <span>View Full Collection</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredGowns.map((gown, index) => (
              <GownCard
                key={gown.id}
                gown={gown}
                onSelectGown={onSelectGown}
              />
            ))}
          </div>
        )}

      </section>

      {/* Collection Bottom Consultation Banner */}
      <section className="bg-[#FAF7F0] border-t border-[#EAE4D9] py-16 sm:py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-[#856122] text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
            <span>EXPERT BRIDAL STYLING</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal tracking-tight">
            NOT SURE WHICH SILHOUETTE IS RIGHT FOR YOU?
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Let our bridal team help you discover a gown that feels uniquely yours. Private consultations in our Enugu atelier provide individual silhouette assessments and fabric previews.
          </p>

          <div className="pt-3">
            <button
              onClick={() => onBookAppointment()}
              className="inline-flex items-center gap-2.5 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A BRIDAL CONSULTATION</span>
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 tracking-wider">
            Private fittings scheduled by appointment only in Enugu, Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
};
