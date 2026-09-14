import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Ruler, 
  Compass, 
  PenTool, 
  Layers, 
  CheckCircle2, 
  Eye, 
  ChevronRight, 
  Maximize2,
  X,
  Heart,
  Scissors
} from 'lucide-react';
import { 
  BESPOKE_MEDIA, 
  BESPOKE_JOURNEY_STAGES, 
  BESPOKE_CRAFTSMANSHIP_ITEMS, 
  BESPOKE_SILHOUETTE_INSPIRATIONS, 
  BESPOKE_INSPIRATION_GALLERY,
  BespokeGalleryItem
} from '../data/bridalData';
import { BespokeEnquiryFlow } from './BespokeEnquiryFlow';

interface BespokePageProps {
  onNavigateCollections: (category?: string) => void;
  onBookConsultation: (gownName?: string) => void;
  preselectedInspirationGown?: string;
}

export const BespokePage: React.FC<BespokePageProps> = ({
  onNavigateCollections,
  onBookConsultation,
  preselectedInspirationGown
}) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<BespokeGalleryItem | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('all');

  const scrollToEnquiry = () => {
    const element = document.getElementById('bespoke-journey-flow');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryFilters = [
    { id: 'all', label: 'All Moments' },
    { id: 'Atelier', label: 'Atelier & Form' },
    { id: 'Details', label: 'Details & Accents' },
    { id: 'Silhouettes', label: 'Silhouettes' },
    { id: 'Craftsmanship', label: 'Craftsmanship' },
    { id: 'Bridal Inspiration', label: 'Bridal Inspiration' }
  ];

  const filteredGallery = activeGalleryFilter === 'all'
    ? BESPOKE_INSPIRATION_GALLERY
    : BESPOKE_INSPIRATION_GALLERY.filter(item => item.category === activeGalleryFilter);

  return (
    <div className="bg-[#FCFAF7] text-[#1A1A1A]">
      
      {/* =======================================================
          1. EDITORIAL BESPOKE HERO SECTION
          Haute couture atelier photography — Gown creation in progress
          ======================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden border-b border-[#EAE4D9] bg-[#F7F3EB]">
        
        {/* Subtle background luxury accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6C875]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Brand statement & Eyebrow */}
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#856122] block">
                  BESPOKE BY BEAJAY
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#E0D8C8] text-[10px] tracking-[0.2em] uppercase text-neutral-600 font-medium">
                  <Sparkles className="w-3 h-3 text-[#C59B3F]" />
                  <span>Crafted in Nigeria. Made for Brides Everywhere.</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111111] tracking-tight leading-[1.08]">
                Made For You.
              </h1>

              <div className="w-16 h-[2px] bg-[#C59B3F]" />

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed max-w-xl">
                A bridal gown should feel as individual as the woman wearing it. Discover a couture experience shaped around your vision, your story and your moment.
              </p>

              <div className="pt-2 text-xs text-neutral-500 font-light tracking-wide italic">
                “You don't need to have every detail decided. Your consultation is where the vision begins.”
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={scrollToEnquiry}
                  className="inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-sm cursor-pointer min-h-[44px]"
                >
                  <span>BEGIN YOUR BESPOKE JOURNEY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onBookConsultation(preselectedInspirationGown)}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF7F0] border border-neutral-800 hover:border-[#C59B3F] text-neutral-900 hover:text-[#C59B3F] px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase transition-colors cursor-pointer min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-[#856122]" />
                  <span>BOOK A CONSULTATION</span>
                </button>
              </div>

              {/* Atelier Positioning Pills */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#E5DEC9] max-w-lg">
                <div className="text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#856122] block">
                    PERSONAL
                  </span>
                  <span className="text-[11px] text-neutral-600 font-light">Custom contours</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#856122] block">
                    ARTISTIC
                  </span>
                  <span className="text-[11px] text-neutral-600 font-light">Original sketching</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#856122] block">
                    INTENTIONAL
                  </span>
                  <span className="text-[11px] text-neutral-600 font-light">Meticulous fittings</span>
                </div>
              </div>

            </div>

            {/* Right Asymmetrical Atelier Photography Grid */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Primary Large Atelier Construction Image */}
                <div className="relative aspect-[3/4] bg-neutral-200 overflow-hidden shadow-2xl border border-[#DCD5C5]">
                  <img
                    src={BESPOKE_MEDIA.hero.primary}
                    alt={BESPOKE_MEDIA.hero.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Subtle Inner Accent Border */}
                  <div className="absolute inset-4 border border-[#C59B3F]/40 pointer-events-none" />

                  {/* Atelier Inscription Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/85 backdrop-blur-xs p-3 text-left">
                    <span className="text-[9px] tracking-[0.24em] uppercase text-[#E6C875] font-semibold block">
                      BESPOKE CREATION
                    </span>
                    <span className="text-xs text-neutral-200 font-light font-serif italic">
                      Crafted with care, tailored to your silhouette
                    </span>
                  </div>
                </div>

                {/* Overlapping Floating Secondary Macro Detail Image */}
                <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 sm:w-56 aspect-square bg-white p-2 shadow-2xl border border-[#DCD5C5]">
                  <img
                    src={BESPOKE_MEDIA.atelier.sketching}
                    alt="Bridal gown sketch and design concept"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-3 -right-3 bg-[#C59B3F] text-white p-2 rounded-full shadow-xs">
                    <PenTool className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =======================================================
          2. COUTURE STORYTELLING: FROM VISION TO VEIL
          Asymmetrical editorial layout with rich narrative
          ======================================================= */}
      <section className="py-20 sm:py-28 border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                
                <div className="space-y-4">
                  <div className="aspect-[4/5] bg-[#F5F1E8] overflow-hidden border border-[#EAE4D9] shadow-md">
                    <img
                      src={BESPOKE_MEDIA.atelier.structure}
                      alt="Thoughtful gown structure and bodice tailoring"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 bg-[#FAF7F0] border border-[#EAE4D9] text-left">
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                      GOWN STRUCTURE
                    </span>
                    <p className="text-[11px] text-neutral-600 font-light mt-0.5">
                      Crafted for poise, balance, and comfortable movement.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="p-3 bg-[#FAF7F0] border border-[#EAE4D9] text-left">
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                      DETAILED EMBELLISHMENT
                    </span>
                    <p className="text-[11px] text-neutral-600 font-light mt-0.5">
                      Thoughtful placement and accents tailored to your silhouette.
                    </p>
                  </div>
                  <div className="aspect-[4/5] bg-[#F5F1E8] overflow-hidden border border-[#EAE4D9] shadow-md">
                    <img
                      src={BESPOKE_MEDIA.details.lace}
                      alt="Hand placement of lace detailing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Editorial Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-[11px] tracking-[0.26em] font-semibold text-[#856122] uppercase block">
                  COUTURE STORYTELLING
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] tracking-tight">
                  FROM VISION TO VEIL
                </h2>
                <div className="w-12 h-[2px] bg-[#C59B3F]" />
              </div>

              <div className="space-y-4 text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Every bespoke BEAJAY gown begins with a conversation and evolves through thoughtful design, craftsmanship and fitting into a piece created for one bride.
                </p>
                <p>
                  We believe bespoke bridal begins with listening. It is about understanding your vision, your aesthetic taste, and the personal significance of your wedding day.
                </p>
                <p>
                  From initial consultation to fabric selection and hand-finished details, BEAJAY in Enugu, Nigeria brings your gown to life with care and dedication.
                </p>
              </div>

              {/* Atelier Pillars */}
              <div className="pt-2 border-t border-[#EAE4D9] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#C59B3F]/40 flex items-center justify-center shrink-0 text-[#C59B3F]">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 font-serif">Custom Pattern & Fit</h3>
                    <p className="text-neutral-500 font-light mt-0.5">Tailored to your individual measurements and proportions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#C59B3F]/40 flex items-center justify-center shrink-0 text-[#C59B3F]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 font-serif">Hand-Finished Details</h3>
                    <p className="text-neutral-500 font-light mt-0.5">Careful lace placement, beading, and finishing accents.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =======================================================
          3. THE BESPOKE JOURNEY: 01 to 05
          Elegantly presenting the creative steps without invented claims
          ======================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              THE COUTURE PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111]">
              The Bespoke Journey
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
            <p className="text-sm text-neutral-600 font-light leading-relaxed pt-1">
              A collaborative, reassuring creative path from your first consultation to your final finished gown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BESPOKE_JOURNEY_STAGES.map((stage) => (
              <div 
                key={stage.step}
                className="bg-white border border-[#EAE4D9] p-6 flex flex-col justify-between shadow-xs relative group hover:border-[#C59B3F] transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-[#EAE4D9] pb-3 mb-4">
                    <span className="font-serif text-2xl text-[#856122] font-normal">
                      {stage.step}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400">
                      STAGE
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-[#111111] font-normal tracking-wide mb-1">
                    {stage.title}
                  </h3>

                  <div className="text-[11px] font-medium text-[#856122] tracking-wider uppercase mb-3">
                    {stage.subtitle}
                  </div>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {stage.image && (
                  <div className="mt-6 aspect-[4/3] bg-neutral-100 overflow-hidden border border-[#EAE4D9]">
                    <img
                      src={stage.image}
                      alt={`${stage.title} - ${stage.subtitle}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reassurance Banner */}
          <div className="mt-12 p-5 bg-white border border-[#E5DEC9] max-w-3xl mx-auto text-center space-y-2">
            <p className="text-xs text-neutral-700 font-light leading-relaxed">
              Every bride's calendar and vision is unique. During your consultation, we walk you through the custom design timeline and fitting milestones tailored to your celebration.
            </p>
          </div>

        </div>
      </section>


      {/* =======================================================
          4. CRAFTSMANSHIP SECTION: CRAFTED IN EVERY DETAIL
          Macro couture detail photography highlighting haute fashion
          ======================================================= */}
      <section className="py-20 sm:py-28 border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              ATELIER MASTERY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111]">
              CRAFTED IN EVERY DETAIL
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
            <p className="text-sm text-neutral-600 font-light leading-relaxed pt-1">
              Thoughtful gown structure, material selection, and hand-finished details bringing your gown to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BESPOKE_CRAFTSMANSHIP_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-[#EAE4D9] overflow-hidden group shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className="p-6 space-y-2 text-left">
                  <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#856122] block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#111111] font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =======================================================
          5. SILHOUETTE INSPIRATION: YOUR SILHOUETTE. YOUR STORY.
          Inspirational starting points linking gracefully to Collections
          ======================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3 text-left max-w-2xl">
              <span className="text-[11px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
                CREATIVE STARTING POINTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111]">
                YOUR SILHOUETTE. YOUR STORY.
              </h2>
              <div className="w-12 h-[2px] bg-[#C59B3F]" />
              <p className="text-sm text-neutral-600 font-light leading-relaxed pt-1">
                These silhouettes represent starting inspirations for your imagination, not rigid limitations. Through our bespoke process, every line and proportion can be tailored to you.
              </p>
            </div>

            <button
              onClick={() => onNavigateCollections('all')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#856122] hover:text-[#AA802E] underline cursor-pointer shrink-0"
            >
              <span>Explore All Collections</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BESPOKE_SILHOUETTE_INSPIRATIONS.map((sil) => (
              <div
                key={sil.slug}
                className="bg-white border border-[#EAE4D9] flex flex-col justify-between group shadow-xs hover:border-[#C59B3F] transition-colors"
              >
                <div>
                  <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                    <img
                      src={sil.image}
                      alt={sil.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[9px] tracking-[0.2em] font-semibold uppercase text-neutral-800">
                      {sil.highlight}
                    </div>
                  </div>

                  <div className="p-5 space-y-2 text-left">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-400 block">
                      {sil.subtitle}
                    </span>
                    <h3 className="font-serif text-xl text-[#111111] font-normal">
                      {sil.name}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {sil.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onNavigateCollections(sil.slug)}
                    className="w-full py-2.5 px-3 text-center border border-[#E2DBD0] hover:border-[#C59B3F] hover:bg-[#FAF6EE] text-[11px] font-semibold tracking-wider uppercase text-neutral-800 hover:text-[#856122] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View {sil.name} Examples</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =======================================================
          6. BESPOKE INSPIRATION GALLERY
          Editorial masonry of the couture creation process
          ======================================================= */}
      <section className="py-20 sm:py-28 border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
            <span className="text-[11px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              COUTURE IN PROGRESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111]">
              Bespoke Inspiration Gallery
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
            <p className="text-sm text-neutral-600 font-light leading-relaxed pt-1">
              Visual glimpses into design development, fabric selection, fittings, and finishing details.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {galleryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveGalleryFilter(filter.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeGalleryFilter === filter.id
                    ? 'bg-[#111111] text-white font-medium shadow-xs'
                    : 'bg-white border border-[#E2DBD0] text-neutral-700 hover:border-neutral-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Masonry / Editorial Composition Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative bg-white border border-[#EAE4D9] overflow-hidden cursor-pointer shadow-xs hover:border-[#C59B3F] transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-xs text-white text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 font-medium">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 text-left">
                  <h3 className="font-serif text-sm font-medium text-neutral-900 group-hover:text-[#856122] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =======================================================
          7. BEGIN YOUR BESPOKE JOURNEY: MULTI-STEP ENQUIRY
          Seamless enquiry collection without payment or fake pricing
          ======================================================= */}
      <section id="bespoke-journey-flow" className="py-20 sm:py-28 bg-[#FAF7F0] border-b border-[#EAE4D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
            <span className="text-[11px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              COLLABORATE WITH BEAJAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111]">
              Begin Your Bespoke Journey
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
            <p className="text-sm text-neutral-600 font-light leading-relaxed pt-1">
              Share your initial ideas, wedding details, and aesthetic vision with our team. We look forward to creating something memorable together.
            </p>
          </div>

          {/* Multi-Step Form */}
          <BespokeEnquiryFlow
            preselectedGown={preselectedInspirationGown}
            onBookConsultation={() => onBookConsultation(preselectedInspirationGown)}
          />

        </div>
      </section>


      {/* =======================================================
          8. BOOK A CONSULTATION BANNER
          Direct pathway to existing appointment system
          ======================================================= */}
      <section className="py-16 sm:py-20 bg-[#111111] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-[#C59B3F] uppercase block">
            BRIDAL APPOINTMENT
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Consult With Our Bridal Team
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Prefer a direct consultation before completing a detailed enquiry? Book a consultation with BEAJAY in Enugu, Nigeria, or connect with our bridal team.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookConsultation(preselectedInspirationGown)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md cursor-pointer min-h-[44px]"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A BESPOKE CONSULTATION</span>
            </button>

            <button
              onClick={scrollToEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-600 hover:border-white text-neutral-200 hover:text-white px-7 py-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer min-h-[44px]"
            >
              <span>SHARE YOUR VISION ONLINE</span>
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 font-light tracking-wider pt-2">
            Crafted in Nigeria. Made for Brides Everywhere.
          </p>
        </div>
      </section>


      {/* =======================================================
          LIGHTBOX FOR BESPOKE GALLERY
          Accessible fullscreen preview with keyboard ESC close
          ======================================================= */}
      {selectedGalleryItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#111111] border border-[#333333] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryItem(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-left bg-[#1C1B1A] text-white">
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase block">
                  {selectedGalleryItem.category}
                </span>
                <h3 className="font-serif text-2xl font-normal leading-snug">
                  {selectedGalleryItem.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed pt-2">
                  {selectedGalleryItem.caption}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800 space-y-3">
                <button
                  onClick={() => {
                    setSelectedGalleryItem(null);
                    scrollToEnquiry();
                  }}
                  className="w-full py-3 bg-[#C59B3F] hover:bg-[#B3892F] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Commission A Bespoke Gown
                </button>
                <button
                  onClick={() => setSelectedGalleryItem(null)}
                  className="w-full py-2.5 border border-neutral-700 text-neutral-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
