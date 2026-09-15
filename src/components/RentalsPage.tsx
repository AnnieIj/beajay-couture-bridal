import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Calendar, 
  Globe, 
  ShieldCheck, 
  Eye, 
  Filter, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  HelpCircle,
  Scissors
} from 'lucide-react';
import { GOWNS_CATALOG, COLLECTION_NAV_CATEGORIES } from '../data/bridalData';
import { GownItem } from '../types';

interface RentalsPageProps {
  onSelectGown: (gown: GownItem) => void;
  onRequestRental: (gownName?: string) => void;
  onExploreCollections: () => void;
}

export const RentalsPage: React.FC<RentalsPageProps> = ({
  onSelectGown,
  onRequestRental,
  onExploreCollections
}) => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'available' | 'reserved' | 'unavailable' | 'coming-soon'>('all');

  // Single source of truth: GOWNS_CATALOG filtered for rentalEligible === true
  const rentalGowns = useMemo(() => {
    return GOWNS_CATALOG.filter((gown) => {
      if (!gown.rentalEligible) return false;

      if (selectedCategory !== 'all' && gown.category !== selectedCategory) {
        return false;
      }

      if (availabilityFilter !== 'all' && gown.availability !== availabilityFilter) {
        return false;
      }

      return true;
    });
  }, [selectedCategory, availabilityFilter]);

  const allRentalGownsCount = useMemo(() => {
    return GOWNS_CATALOG.filter(g => g.rentalEligible).length;
  }, []);

  const scrollToCatalogue = () => {
    const el = document.getElementById('rental-catalogue-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="rentals-page" className="min-h-screen bg-[#FCFAF7] text-[#111111] pt-24 sm:pt-28 pb-20">
      
      {/* =======================================================
          1. EDITORIAL HERO SECTION
          ======================================================= */}
      <section className="relative overflow-hidden border-b border-[#EAE3D5] bg-[#FAF7F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DDD4C4] text-[#856122] shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase">
              BEAJAY GOWN RENTALS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#111111] leading-[1.1]">
            Wear the Moment.
          </h1>

          {/* Supporting Copy */}
          <p className="font-serif text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto font-light leading-relaxed">
            Discover selected BEAJAY gowns available for rental — whether you're choosing for your own special occasion or sourcing a beautiful piece for a client.
          </p>

          {/* Core Brand Statement */}
          <div className="pt-2">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#856122] border-b border-[#C59B3F]/50 pb-1">
              Crafted in Nigeria. Made for Brides Everywhere.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToCatalogue}
              className="bg-[#C59B3F] hover:bg-[#B3892F] text-white px-7 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer inline-flex items-center gap-2"
            >
              <span>EXPLORE RENTAL GOWNS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onRequestRental()}
              className="bg-white hover:bg-[#F5F0E6] text-[#111111] border border-[#D5CDBF] px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>REQUEST A RENTAL</span>
            </button>
          </div>

        </div>
      </section>

      {/* =======================================================
          2. RENTAL PROCESS EXPLANATION (4 Steps)
          ======================================================= */}
      <section className="border-b border-[#EAE3D5] bg-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-1">
            <span className="text-[10px] tracking-[0.22em] font-semibold text-[#856122] uppercase">
              THE RENTAL PROCESS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111]">
              How Couture Rental Works
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto">
              A refined four-step request process to discover, select, request, and confirm your gown rental.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#EAE3D5] space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">01</span>
              <h3 className="font-serif text-base text-neutral-900 font-medium uppercase tracking-wider">
                DISCOVER
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Explore selected BEAJAY gowns available for rental.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#EAE3D5] space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">02</span>
              <h3 className="font-serif text-base text-neutral-900 font-medium uppercase tracking-wider">
                SELECT
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Choose the gown that fits your vision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#EAE3D5] space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">03</span>
              <h3 className="font-serif text-base text-neutral-900 font-medium uppercase tracking-wider">
                REQUEST
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Submit your preferred dates and contact details.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#EAE3D5] space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">04</span>
              <h3 className="font-serif text-base text-neutral-900 font-medium uppercase tracking-wider">
                CONFIRM
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                BEAJAY reviews the request and confirms availability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =======================================================
          3. RENTAL CATALOGUE GRID & FILTERS
          ======================================================= */}
      <section id="rental-catalogue-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        
        {/* Filter Bar */}
        <div className="bg-white border border-[#EAE3D5] p-4 sm:p-5 space-y-4 shadow-xs">
          
          {/* Silhouette Category Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10.5px] uppercase tracking-wider text-neutral-500 mr-2 font-semibold">
              Silhouette:
            </span>
            {COLLECTION_NAV_CATEGORIES.map((cat) => {
              const count = GOWNS_CATALOG.filter(g => g.rentalEligible && (cat.id === 'all' || g.category === cat.id)).length;
              if (count === 0 && cat.id !== 'all') return null;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors cursor-pointer border ${
                    selectedCategory === cat.id
                      ? 'bg-[#111111] text-white border-[#111111] font-semibold'
                      : 'bg-[#FCFAF7] text-neutral-700 border-[#E2DAD0] hover:border-neutral-800'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          <div className="border-t border-[#F0EBE0] pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Availability Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-[10.5px] uppercase tracking-wider text-neutral-500 mr-1 font-semibold">
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
                All Availability
              </button>
              <button
                onClick={() => setAvailabilityFilter('available')}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider cursor-pointer ${
                  availabilityFilter === 'available'
                    ? 'text-[#856122] font-semibold underline'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Available
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
              <button
                onClick={() => setAvailabilityFilter('unavailable')}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider cursor-pointer ${
                  availabilityFilter === 'unavailable'
                    ? 'text-[#856122] font-semibold underline'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Unavailable
              </button>
              <button
                onClick={() => setAvailabilityFilter('coming-soon')}
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider cursor-pointer ${
                  availabilityFilter === 'coming-soon'
                    ? 'text-[#856122] font-semibold underline'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Coming Soon
              </button>
            </div>

            {/* Live Count & Reset */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-neutral-500 font-light">
                Showing <strong className="font-semibold text-neutral-900">{rentalGowns.length}</strong> of {allRentalGownsCount} rental gowns
              </span>
              {(selectedCategory !== 'all' || availabilityFilter !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setAvailabilityFilter('all');
                  }}
                  className="text-[11px] text-[#856122] underline uppercase font-semibold cursor-pointer hover:text-neutral-900"
                >
                  Reset
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Rental Gowns Grid */}
        {rentalGowns.length === 0 ? (
          <div className="py-16 text-center bg-white border border-[#EAE3D5] p-8 space-y-4">
            <Layers className="w-10 h-10 text-neutral-300 mx-auto" />
            <h3 className="font-serif text-xl text-neutral-800">
              No Gowns Match This Selection
            </h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto font-light">
              Try adjusting your silhouette or availability filter to view other rental pieces.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setAvailabilityFilter('all');
              }}
              className="px-5 py-2.5 bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              View All Rental Gowns
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rentalGowns.map((gown) => {
              const isUnavailable = gown.availability === 'unavailable';
              const isReserved = gown.availability === 'reserved';

              return (
                <article
                  key={gown.id}
                  className="bg-white border border-[#E8E1D2] hover:border-[#C59B3F]/70 transition-all duration-300 flex flex-col overflow-hidden group shadow-xs hover:shadow-md"
                >
                  {/* Gown Image Container */}
                  <div 
                    onClick={() => onSelectGown(gown)}
                    className="relative aspect-[3/4] bg-[#F4F0E8] overflow-hidden cursor-pointer block"
                  >
                    <img
                      src={gown.images?.[0] || gown.image}
                      alt={gown.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Code badge */}
                    <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-medium">
                      {gown.code}
                    </div>

                    {/* Availability Tag */}
                    <div className="absolute top-3 right-3">
                      <span className={`text-[9.5px] uppercase tracking-wider font-semibold px-2 py-0.5 border shadow-xs ${
                        gown.availability === 'available'
                          ? 'bg-emerald-50/95 text-emerald-900 border-emerald-300'
                          : isReserved
                          ? 'bg-amber-50/95 text-amber-900 border-amber-300'
                          : isUnavailable
                          ? 'bg-rose-50/95 text-rose-900 border-rose-300'
                          : 'bg-neutral-50/95 text-neutral-800 border-neutral-300'
                      }`}>
                        {gown.availability === 'available'
                          ? 'Available'
                          : isReserved
                          ? 'Reserved'
                          : isUnavailable
                          ? 'Unavailable'
                          : gown.availability === 'coming-soon'
                          ? 'Coming Soon'
                          : 'Requires Confirmation'}
                      </span>
                    </div>

                    {/* Silhouette Label */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="bg-white/95 backdrop-blur-xs text-[#856122] text-[9.5px] tracking-widest uppercase font-semibold px-2.5 py-1 border border-[#DDD4C4] inline-block">
                        {gown.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 
                        onClick={() => onSelectGown(gown)}
                        className="font-serif text-lg text-[#111111] group-hover:text-[#856122] transition-colors cursor-pointer leading-snug"
                      >
                        {gown.name}
                      </h3>

                      <p className="text-xs text-neutral-600 font-light line-clamp-2 leading-relaxed">
                        {gown.description}
                      </p>

                      {gown.fabric && (
                        <p className="text-[11px] text-neutral-500 font-light">
                          <strong className="font-medium text-neutral-700">Fabric:</strong> {gown.fabric}
                        </p>
                      )}
                    </div>

                    {/* Actions: View Gown & Request Rental */}
                    <div className="pt-2 border-t border-[#F0EBE0] space-y-2">
                      <button
                        onClick={() => onSelectGown(gown)}
                        className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#FAF7F0] text-neutral-900 border border-[#D5CDBF] hover:border-neutral-800 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#856122]" />
                        <span>VIEW GOWN</span>
                      </button>

                      <button
                        onClick={() => !isUnavailable && onRequestRental(gown.name)}
                        disabled={isUnavailable}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 border ${
                          isUnavailable
                            ? 'bg-neutral-200 text-neutral-400 border-neutral-300 cursor-not-allowed'
                            : 'bg-[#C59B3F] hover:bg-[#B3892F] text-white border-[#C59B3F] cursor-pointer shadow-xs'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>{isUnavailable ? 'CURRENTLY UNAVAILABLE' : 'REQUEST RENTAL'}</span>
                      </button>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}

      </section>

      {/* =======================================================
          4. WORLDWIDE ENQUIRIES & DISTRIBUTION DISTINCTION
          ======================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#111111] text-white p-8 sm:p-12 border border-[#262420] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-[#E6C875] text-xs uppercase tracking-widest font-semibold">
              <Globe className="w-4 h-4 text-[#C59B3F]" />
              <span>Worldwide Rental & Styling Inquiries</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Crafted in Nigeria. Made for Brides Everywhere.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
              Based in Enugu, Nigeria, BEAJAY COUTURE BRIDAL welcomes rental inquiries from brides and bridal vendors across Nigeria and internationally. Submit your preferred dates, country, and city, and our atelier team will review whether your request can be fulfilled and confirm availability.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => onRequestRental()}
              className="bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3.5 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-all text-center cursor-pointer shadow-sm"
            >
              START A RENTAL REQUEST
            </button>
            <button
              onClick={onExploreCollections}
              className="bg-transparent hover:bg-white/10 text-white border border-[#444] py-3.5 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-all text-center cursor-pointer"
            >
              EXPLORE ALL COLLECTIONS
            </button>
          </div>
        </div>
      </section>

      {/* =======================================================
          5. RENTAL TERMS & POLICY PLACEHOLDER
          ======================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center space-y-3">
        <span className="text-[10px] tracking-[0.24em] font-semibold text-[#856122] uppercase block">
          ATELIER CARE & TERMS
        </span>
        <p className="font-serif text-sm sm:text-base text-neutral-600 font-light italic max-w-xl mx-auto">
          "Rental terms and care requirements will be provided by BEAJAY COUTURE BRIDAL as part of the confirmed rental process."
        </p>
      </section>

      {/* =======================================================
          6. RENTALS -> COLLECTIONS CONNECTION
          ======================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-[#EAE3D5]">
        <div className="bg-[#FAF7F0] border border-[#EAE3D5] p-8 sm:p-10 text-center space-y-4">
          <span className="text-[10px] tracking-[0.22em] font-semibold text-[#856122] uppercase">
            COMPLETE SHOWCASE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111111]">
            Looking to Explore All BEAJAY Designs?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
            While our Rentals collection features selected gowns ready for hire, our complete bridal collection includes our full range of silhouettes, statement designs, and signature made-to-order couture.
          </p>
          <div>
            <button
              onClick={onExploreCollections}
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#252422] text-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>EXPLORE ALL COLLECTIONS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
