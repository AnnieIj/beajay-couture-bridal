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
import { ACTIVE_RENTAL_GOWNS, COLLECTION_NAV_CATEGORIES } from '../data/bridalData';
import { GownItem } from '../types';
import { buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { getOptimizedMedia } from '../utils/optimizedMedia';

interface RentalsPageProps {
  onSelectGown: (gown: GownItem) => void;
  onRequestRental: (gownName?: string) => void;
  onExploreCollections: () => void;
}

interface RentalGownCardProps {
  gown: GownItem;
  onSelectGown: (gown: GownItem) => void;
  onRequestRental: (gownName?: string) => void;
}

const RentalGownCard: React.FC<RentalGownCardProps> = ({
  gown,
  onSelectGown,
  onRequestRental
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);

  const primaryOpt = getOptimizedMedia(gown.image);
  const secondaryOpt = gown.secondaryImage ? getOptimizedMedia(gown.secondaryImage) : null;
  const showSecondary = isHovered && secondaryLoaded;

  return (
    <article
      key={gown.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white dark:bg-[#161514] border border-[#E8E1D2] dark:border-white/10 hover:border-[#C59B3F]/70 transition-all duration-300 flex flex-col overflow-hidden group shadow-xs hover:shadow-md"
    >
      {/* Gown Image Container */}
      <div 
        onClick={() => onSelectGown(gown)}
        className="relative aspect-[3/4] bg-[#F4F0E8] dark:bg-[#1A1918] overflow-hidden cursor-pointer block"
      >
        {/* Primary Image: Stays visible until secondary has completely loaded */}
        <img
          src={primaryOpt.src}
          srcSet={primaryOpt.srcSet}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={gown.name}
          className={`w-full h-full object-cover object-top transition-opacity duration-400 ease-out motion-reduce:transition-none ${
            showSecondary ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          decoding="async"
        />

        {/* Secondary Angle Image (Only fetched upon user hover on desktop, never eagerly requested) */}
        {gown.secondaryImage && isHovered && secondaryOpt && (
          <img
            src={secondaryOpt.src}
            srcSet={secondaryOpt.srcSet}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={`${gown.name} - Alternate view`}
            onLoad={() => setSecondaryLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-400 ease-out motion-reduce:transition-none pointer-events-none ${
              secondaryLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            decoding="async"
          />
        )}

        {/* Code badge */}
        <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-medium z-10 pointer-events-none">
          {gown.code}
        </div>

        {/* Subtle Desktop Hover Indicator */}
        <div className="absolute top-3 right-3 opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <span className="bg-[#111111]/85 backdrop-blur-xs text-white text-[9px] tracking-widest uppercase px-2 py-1 font-medium border border-[#C59B3F]/40">
            VIEW DETAILS
          </span>
        </div>

        {/* Silhouette Label */}
        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <span className="bg-white/95 dark:bg-[#1C1B19]/95 backdrop-blur-xs text-[#856122] dark:text-[#E6C875] text-[9.5px] tracking-widest uppercase font-semibold px-2.5 py-1 border border-[#DDD4C4] dark:border-white/15 inline-block">
            {gown.categoryLabel}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 
            onClick={() => onSelectGown(gown)}
            className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] group-hover:text-[#856122] dark:group-hover:text-[#E6C875] transition-colors cursor-pointer leading-snug"
          >
            {gown.name}
          </h3>

          <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light line-clamp-2 leading-relaxed">
            {gown.description}
          </p>

          {gown.fabric && (
            <p className="text-[11px] text-neutral-500 dark:text-[#A39D93] font-light">
              <strong className="font-medium text-neutral-700 dark:text-neutral-300">Fabric:</strong> {gown.fabric}
            </p>
          )}
        </div>

        {/* Actions: View Gown, Request Rental Availability & WhatsApp Enquiry */}
        <div className="pt-2 border-t border-[#F0EBE0] dark:border-white/10 space-y-2">
          <button
            onClick={() => onSelectGown(gown)}
            className="w-full flex items-center justify-center gap-2 bg-white dark:bg-[#22201E] hover:bg-[#FAF7F0] dark:hover:bg-[#2C2A26] text-neutral-900 dark:text-[#F8F5EE] border border-[#D5CDBF] dark:border-white/15 hover:border-neutral-800 dark:hover:border-white/30 py-2.5 px-4 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#856122] dark:text-[#E6C875]" />
            <span>VIEW GOWN</span>
          </button>

          <button
            onClick={() => onRequestRental(gown.name)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 border bg-[#C59B3F] hover:bg-[#B3892F] text-white border-[#C59B3F] cursor-pointer shadow-xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>REQUEST RENTAL AVAILABILITY</span>
          </button>

          <a
            href={buildWhatsAppUrl({ type: 'rental', gownName: gown.name, gownCode: gown.code })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#101A14] hover:bg-[#18281E] text-white border border-[#25D366]/40 hover:border-[#25D366] py-2 px-3 text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WHATSAPP RENTAL ENQUIRY</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export const RentalsPage: React.FC<RentalsPageProps> = ({
  onSelectGown,
  onRequestRental,
  onExploreCollections
}) => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Single source of truth: ACTIVE_RENTAL_GOWNS
  const rentalGowns = useMemo(() => {
    if (selectedCategory === 'all') return ACTIVE_RENTAL_GOWNS;
    return ACTIVE_RENTAL_GOWNS.filter((gown) => gown.category === selectedCategory);
  }, [selectedCategory]);

  const allRentalGownsCount = ACTIVE_RENTAL_GOWNS.length;

  const scrollToCatalogue = () => {
    const el = document.getElementById('rental-catalogue-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="rentals-page" className="min-h-screen bg-[#FCFAF7] dark:bg-[#0C0C0B] text-[#111111] dark:text-[#F8F5EE] pt-24 sm:pt-28 pb-20">
      
      {/* =======================================================
          1. EDITORIAL HERO SECTION
          ======================================================= */}
      <section className="relative overflow-hidden border-b border-[#EAE3D5] dark:border-white/10 bg-[#FAF7F0] dark:bg-[#121110] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-[#1C1B19] border border-[#DDD4C4] dark:border-white/15 text-[#856122] dark:text-[#E6C875] shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase">
              BEAJAY GOWN RENTALS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#111111] dark:text-[#F8F5EE] leading-[1.1]">
            Wear the Moment.
          </h1>

          {/* Supporting Copy */}
          <p className="font-serif text-base sm:text-lg md:text-xl text-neutral-700 dark:text-[#D4CEC3] max-w-2xl mx-auto font-light leading-relaxed">
            All BEAJAY bridal gowns and dresses are available for rental requests. Browse our silhouettes and submit your preferred event dates to confirm rental availability.
          </p>

          {/* Core Brand Statement */}
          <div className="pt-2">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase font-medium text-[#856122] dark:text-[#E6C875] border-b border-[#C59B3F]/50 pb-1">
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
              className="bg-white dark:bg-[#1C1B19] hover:bg-[#F5F0E6] dark:hover:bg-[#252422] text-[#111111] dark:text-[#F8F5EE] border border-[#D5CDBF] dark:border-white/15 px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>REQUEST RENTAL AVAILABILITY</span>
            </button>

            <a
              href={buildWhatsAppUrl({ type: 'rental' })}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#101A14] hover:bg-[#18281E] text-white border border-[#25D366]/40 hover:border-[#25D366] px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>RENTAL WHATSAPP</span>
            </a>
          </div>

        </div>
      </section>

      {/* =======================================================
          2. RENTAL JOURNEY (6 Steps)
          ======================================================= */}
      <section className="border-b border-[#EAE3D5] dark:border-white/10 bg-white dark:bg-[#121110] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center space-y-1">
            <span className="text-[10px] tracking-[0.22em] font-semibold text-[#856122] dark:text-[#E6C875] uppercase">
              THE RENTAL JOURNEY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] dark:text-[#F8F5EE]">
              How Couture Rental Works
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#D4CEC3] font-light max-w-xl mx-auto">
              A refined six-step journey to discover, select, and submit a rental availability request for BEAJAY review.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 bg-[#FCFAF7] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">01</span>
              <h3 className="font-serif text-base text-neutral-900 dark:text-[#F8F5EE] font-medium uppercase tracking-wider">
                DISCOVER
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Browse selected rental-eligible gowns.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-[#FCFAF7] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">02</span>
              <h3 className="font-serif text-base text-neutral-900 dark:text-[#F8F5EE] font-medium uppercase tracking-wider">
                SELECT
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Open the gown and review available verified information.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-[#FCFAF7] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">03</span>
              <h3 className="font-serif text-base text-neutral-900 dark:text-[#F8F5EE] font-medium uppercase tracking-wider">
                REQUEST
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Request rental availability.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 bg-[#FCFAF7] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">04</span>
              <h3 className="font-serif text-base text-neutral-900 dark:text-[#F8F5EE] font-medium uppercase tracking-wider">
                DETAILS
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Provide renter, event/use and collection/return information.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 bg-[#FCFAF7] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">05</span>
              <h3 className="font-serif text-base text-neutral-900 dark:text-[#F8F5EE] font-medium uppercase tracking-wider">
                REVIEW
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Review the request before submission.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-6 bg-[#FCFAF7] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 space-y-3">
              <span className="font-serif text-2xl text-[#C59B3F] font-light">06</span>
              <h3 className="font-serif text-base text-neutral-900 dark:text-[#F8F5EE] font-medium uppercase tracking-wider">
                SUBMIT
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Submit the rental request for BEAJAY review.
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
        <div className="bg-white dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 p-4 sm:p-5 space-y-4 shadow-xs">
          
          {/* Silhouette Category Buttons & Count Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10.5px] uppercase tracking-wider text-neutral-500 dark:text-[#A39D93] mr-2 font-semibold">
                Silhouette:
              </span>
              {COLLECTION_NAV_CATEGORIES.map((cat) => {
                const count = ACTIVE_RENTAL_GOWNS.filter(g => (cat.id === 'all' || g.category === cat.id)).length;
                if (count === 0 && cat.id !== 'all') return null;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors cursor-pointer border ${
                      selectedCategory === cat.id
                        ? 'bg-[#111111] dark:bg-[#C59B3F] text-white dark:text-[#0C0C0B] border-[#111111] dark:border-[#C59B3F] font-semibold'
                        : 'bg-[#FCFAF7] dark:bg-[#201E1C] text-neutral-700 dark:text-[#D4CEC3] border-[#E2DAD0] dark:border-white/15 hover:border-neutral-800 dark:hover:border-white/30'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Live Count & Reset */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-[11px] text-neutral-500 dark:text-[#A39D93] font-light">
                Showing <strong className="font-semibold text-neutral-900 dark:text-[#F8F5EE]">{rentalGowns.length}</strong> of {allRentalGownsCount} rental gowns
              </span>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="text-[11px] text-[#856122] dark:text-[#E6C875] underline uppercase font-semibold cursor-pointer hover:text-neutral-900 dark:hover:text-white"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Rental Gowns Grid */}
        {rentalGowns.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 p-8 space-y-4">
            <Layers className="w-10 h-10 text-neutral-300 dark:text-neutral-600 mx-auto" />
            <h3 className="font-serif text-xl text-neutral-800 dark:text-[#F8F5EE]">
              No Gowns Match This Silhouette
            </h3>
            <p className="text-xs text-neutral-500 dark:text-[#D4CEC3] max-w-sm mx-auto font-light">
              Select another silhouette to view available rental pieces.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-5 py-2.5 bg-[#111111] dark:bg-[#C59B3F] text-white dark:text-[#0C0C0B] text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              View All Rental Gowns
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rentalGowns.map((gown) => (
              <RentalGownCard
                key={gown.id}
                gown={gown}
                onSelectGown={onSelectGown}
                onRequestRental={onRequestRental}
              />
            ))}
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
              <span>Rental Inquiries & Availability Requests</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
              Crafted in Nigeria. Made for Brides Everywhere.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
              Based in Enugu, Nigeria, BEAJAY COUTURE BRIDAL welcomes rental inquiries from brides and bridal vendors. Submit your preferred dates and location, and our bridal team will review whether your request can be fulfilled and confirm availability.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => onRequestRental()}
              className="bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3.5 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-all text-center cursor-pointer shadow-sm"
            >
              REQUEST RENTAL AVAILABILITY
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
        <span className="text-[10px] tracking-[0.24em] font-semibold text-[#856122] dark:text-[#E6C875] uppercase block">
          RENTAL CARE & TERMS
        </span>
        <p className="font-serif text-sm sm:text-base text-neutral-600 dark:text-[#D4CEC3] font-light italic max-w-xl mx-auto">
          "Rental terms and care requirements will be provided by BEAJAY COUTURE BRIDAL as part of the confirmed rental process."
        </p>
      </section>

      {/* =======================================================
          6. RENTALS -> COLLECTIONS CONNECTION
          ======================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-[#EAE3D5] dark:border-white/10">
        <div className="bg-[#FAF7F0] dark:bg-[#161514] border border-[#EAE3D5] dark:border-white/10 p-8 sm:p-10 text-center space-y-4">
          <span className="text-[10px] tracking-[0.22em] font-semibold text-[#856122] dark:text-[#E6C875] uppercase">
            COMPLETE SHOWCASE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] dark:text-[#F8F5EE]">
            Looking to Explore All BEAJAY Designs?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#D4CEC3] font-light max-w-xl mx-auto leading-relaxed">
            Explore our complete bridal showcase, signature silhouettes, couture lookbooks, and cathedral veils in our collections.
          </p>
          <div>
            <button
              onClick={onExploreCollections}
              className="inline-flex items-center gap-2 bg-[#111111] dark:bg-[#C59B3F] hover:bg-[#252422] dark:hover:bg-[#B3892F] text-white dark:text-[#0C0C0B] px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer"
            >
              <span>EXPLORE ALL COLLECTIONS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F] dark:text-[#0C0C0B]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
