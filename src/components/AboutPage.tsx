import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Instagram, 
  Calendar, 
  Layers, 
  Compass, 
  MessageSquare,
  HeartHandshake
} from 'lucide-react';
import { ABOUT_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';
import { BRAND_CONTACT, buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateCollections: () => void;
  onNavigateRentals: () => void;
  onNavigateGallery: () => void;
  onNavigateContact: () => void;
  onOpenAppointment: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateCollections,
  onNavigateRentals,
  onNavigateGallery,
  onNavigateContact,
  onOpenAppointment
}) => {
  const heroImg = resolveMedia(ABOUT_MEDIA_ASSETS.hero);
  const storyImg = resolveMedia(ABOUT_MEDIA_ASSETS.story);
  const globalImg = resolveMedia(ABOUT_MEDIA_ASSETS.global);

  return (
    <main id="about-page" className="min-h-screen bg-[#FCFAF7] text-[#141312] pt-24 sm:pt-28 pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#856122] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#141312]">About BEAJAY</span>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-[#EAE3D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2EDE2] border border-[#DDD4C1] text-[#856122] text-[10.5px] font-semibold tracking-[0.24em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
              <span>BEAJAY COUTURE BRIDAL</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.15] tracking-tight">
              Where Bridal Dreams <br className="hidden sm:inline" />
              <span className="italic font-light text-[#856122]">Take Form.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-2xl">
              BEAJAY COUTURE BRIDAL creates bridal experiences shaped around elegance, individuality, and thoughtful design. Every gown is conceived to reflect the inner radiance and grace of the bride who wears it.
            </p>

            <div className="p-5 sm:p-6 bg-[#F8F4EC] border-l-2 border-[#C59B3F] max-w-xl">
              <p className="font-serif text-base sm:text-lg text-[#111111] font-normal tracking-wide italic">
                “Crafted in Nigeria. Made for Brides Everywhere.”
              </p>
              <p className="text-[11px] tracking-wider text-neutral-500 uppercase font-sans mt-1.5">
                The BEAJAY Bridal Promise
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="min-h-[44px] inline-flex items-center justify-center px-6 sm:px-7 py-3 bg-[#111111] hover:bg-[#2A2824] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer shadow-sm"
              >
                <span>BOOK AN APPOINTMENT</span>
              </button>
              
              <button
                onClick={onNavigateCollections}
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 border border-[#856122] hover:bg-[#F2EDE2] text-[#141312] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
              >
                <span>EXPLORE COLLECTIONS</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-[#ECE6D9] shadow-lg border border-[#DDD4C1]">
              <img
                src={heroImg}
                alt={ABOUT_MEDIA_ASSETS.hero.alt}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-[11px] tracking-widest uppercase font-serif">
                BEAJAY COUTURE BRIDAL • ENUGU, NIGERIA
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BRAND STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-md">
              <img
                src={storyImg}
                alt={ABOUT_MEDIA_ASSETS.story.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-[11px] text-neutral-500 tracking-wider uppercase font-light text-center">
              Careful tailoring, delicate lace and balanced proportions
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
                OUR STORY
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] font-normal leading-tight">
                An Individual Approach to <br />
                Bridal Elegance.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
              At BEAJAY COUTURE BRIDAL, bridal design is approached as an intimate celebration of identity. No two brides share the exact same silhouette, cadence, or vision for their walk down the aisle. Each piece is designed to embrace that unique essence.
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
              From majestic ball gowns with delicate hand-beaded details to sculpted mermaid silhouettes and handcrafted accessories, our designs combine timeless romance with contemporary grace. Through our curated collections and rental options, we ensure every bride experiences bridal elegance tailored with care and attention to detail.
            </p>

            {/* Confirmed Creative Direction Attribution */}
            <div className="pt-5 border-t border-[#EAE3D5] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#111111] text-[#C59B3F] flex items-center justify-center font-serif text-sm font-medium border border-[#C59B3F]/40 shrink-0">
                BO
              </div>
              <div>
                <span className="font-serif text-base text-[#111111] block font-normal">
                  {BRAND_CONTACT.founder.name}
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#856122] font-semibold block">
                  {BRAND_CONTACT.founder.title}
                </span>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#EAE3D5]">
              <div className="p-4 bg-white border border-[#E8E2D4]">
                <h3 className="font-serif text-base text-[#111111] mb-1">
                  Bridal Collections
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Curated gowns spanning royal ball gowns, sculpted mermaid silhouettes, and handcrafted veils & accessories.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#E8E2D4]">
                <h3 className="font-serif text-base text-[#111111] mb-1">
                  Careful Fit & Styling
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Attentive guidance to ensure each gown sits with comfort, confidence, and natural grace.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY (SIMPLIFIED LUXURY TERMINOLOGY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] font-normal">
            Our Bridal Philosophy
          </h2>
          <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Three guiding ideals that shape our design approach, fittings, and the gowns we create for our brides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: BEAUTIFUL BRIDAL DESIGN */}
          <div className="bg-white border border-[#E5DFD1] p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#C59B3F] transition-colors">
            <div className="space-y-4">
              <span className="text-[11px] font-mono text-[#856122] tracking-widest block">
                01 / PRINCIPLE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#111111] tracking-wide uppercase">
                Beautiful Bridal Design
              </h3>
              <div className="w-8 h-[1px] bg-[#C59B3F]" />
              <p className="text-sm font-serif italic text-neutral-800">
                Every bridal look begins with the bride's personal vision.
              </p>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                We create gowns that balance timeless romance with modern grace, giving each bride a silhouette that feels memorable and uniquely hers.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2EDE2] text-[10.5px] uppercase tracking-widest text-[#856122] font-medium">
              Distinctive Bridal Style
            </div>
          </div>

          {/* Pillar 2: CAREFUL FIT & FINISHING */}
          <div className="bg-white border border-[#E5DFD1] p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#C59B3F] transition-colors">
            <div className="space-y-4">
              <span className="text-[11px] font-mono text-[#856122] tracking-widest block">
                02 / PRINCIPLE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#111111] tracking-wide uppercase">
                Careful Fit & Finishing
              </h3>
              <div className="w-8 h-[1px] bg-[#C59B3F]" />
              <p className="text-sm font-serif italic text-neutral-800">
                A gown that feels as comfortable as it is stunning.
              </p>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Every dress is tailored with supportive structures, clean seam lines, and thoughtful finishing so brides can move with effortless confidence.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2EDE2] text-[10.5px] uppercase tracking-widest text-[#856122] font-medium">
              Comfort & Poise
            </div>
          </div>

          {/* Pillar 3: ATTENTION TO DETAIL */}
          <div className="bg-white border border-[#E5DFD1] p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#C59B3F] transition-colors">
            <div className="space-y-4">
              <span className="text-[11px] font-mono text-[#856122] tracking-widest block">
                03 / PRINCIPLE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#111111] tracking-wide uppercase">
                Attention to Detail
              </h3>
              <div className="w-8 h-[1px] bg-[#C59B3F]" />
              <p className="text-sm font-serif italic text-neutral-800">
                Thoughtful details brought together with care.
              </p>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                From delicate lace placement to harmonious neckline contours, we focus on the subtle touches that elevate each bridal gown into a lasting memory.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2EDE2] text-[10.5px] uppercase tracking-widest text-[#856122] font-medium">
              Careful Attention to Detail
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE 5 APPROVED CONTINUATION PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
            CONTINUE EXPLORING
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] font-normal">
            The BEAJAY Experience
          </h2>
          <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Choose how you would like to explore our bridal designs and services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          
          {/* Pathway 1: EXPLORE COLLECTIONS */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base text-[#111111] uppercase tracking-wide">
                Explore Collections
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Discover signature bridal silhouettes and gown designs.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateCollections}
                className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>View Gowns</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 2: DISCOVER RENTALS */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base text-[#111111] uppercase tracking-wide">
                Discover Rentals
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Explore selected gowns available for rental requests.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateRentals}
                className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>Explore Rentals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 3: VIEW GALLERY */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base text-[#111111] uppercase tracking-wide">
                View Gallery
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                See real brides and editorial gown moments.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateGallery}
                className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>Open Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 4: BOOK AN APPOINTMENT */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122] mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base text-[#111111] uppercase tracking-wide">
                Book Appointment
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Request time to discuss your bridal gown needs.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onOpenAppointment}
                className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 bg-[#111111] hover:bg-[#C59B3F] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>Request Time</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 5: CONTACT BEAJAY */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base text-[#111111] uppercase tracking-wide">
                Contact BEAJAY
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Send an enquiry about any gown or bridal question.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateContact}
                className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>Send Note</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. NIGERIAN ROOTS & GLOBAL REACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-[#F6F1E7] border border-[#DDD4C1] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-[#856122]">
                <MapPin className="w-4 h-4 text-[#C59B3F]" />
                <span>BASED IN ENUGU, NIGERIA</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] font-normal leading-tight">
                Crafted in Nigeria.<br />
                <span className="italic text-[#856122]">Made for Brides Everywhere.</span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                BEAJAY COUTURE BRIDAL is proudly based in Enugu, Nigeria, designing for brides locally and beyond. Whether you are planning a traditional celebration or a cathedral wedding, our gowns are crafted to make your day unforgettable. Brides outside Enugu can easily get in touch and submit enquiries through our website.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={buildWhatsAppUrl({ type: 'general' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 bg-[#111111] hover:bg-[#1C2820] text-white text-xs font-semibold tracking-widest uppercase transition-colors border border-[#25D366]/40"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WHATSAPP ATELIER</span>
                </a>

                <a
                  href={BRAND_CONTACT.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit BEAJAY COUTURE BRIDAL on Instagram"
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#F2ECE1] text-[#111111] border border-[#DDD4C1] text-xs font-semibold tracking-widest uppercase transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C59B3F]" />
                  <span>{BRAND_CONTACT.socials.instagram.handle}</span>
                </a>

                {BRAND_CONTACT.socials.facebook.url && (
                  <a
                    href={BRAND_CONTACT.socials.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit BEAJAY COUTURE BRIDAL on Facebook"
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-[#F2ECE1] text-[#111111] border border-[#DDD4C1] text-xs font-semibold tracking-widest uppercase transition-colors"
                  >
                    <span>{BRAND_CONTACT.socials.facebook.handle}</span>
                  </a>
                )}

                <button
                  onClick={onNavigateContact}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 border border-[#856122] hover:bg-white text-[#141312] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                >
                  <span>CONTACT BEAJAY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-sm">
                <img
                  src={globalImg}
                  alt={ABOUT_MEDIA_ASSETS.global.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
