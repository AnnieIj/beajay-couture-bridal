import React from 'react';
import { 
  Sparkles, 
  MapPin
} from 'lucide-react';
import { ABOUT_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';
import { BRAND_CONTACT, buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { getOptimizedMedia } from '../utils/optimizedMedia';

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
  const founderPrimaryOpt = getOptimizedMedia(ABOUT_MEDIA_ASSETS.founderPrimary.current);
  const founderJourneyOpt = getOptimizedMedia(ABOUT_MEDIA_ASSETS.founderJourney.current);
  const founderVisionOpt = getOptimizedMedia(ABOUT_MEDIA_ASSETS.founderVision.current);
  const teamImages = ABOUT_MEDIA_ASSETS.team.map(item => ({
    opt: getOptimizedMedia(item.current),
    alt: item.alt
  }));

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

      {/* 1. EDITORIAL OPENING / HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 border-b border-[#EAE3D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2EDE2] border border-[#DDD4C1] text-[#856122] text-[10.5px] font-semibold tracking-[0.24em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
              <span>OUR STORY</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.12] tracking-tight">
              From a Dream in Enugu to a Bridal Brand with a{' '}
              <span className="italic font-light text-[#856122]">Global Vision.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-800 font-light leading-relaxed max-w-2xl">
              BEAJAY COUTURE BRIDAL is more than a bridal fashion brand. It is the story of a woman who chose to start again, trust her gift, and build something different.
            </p>

            <div className="p-5 sm:p-6 bg-[#F8F4EC] border-l-2 border-[#C59B3F] max-w-xl">
              <p className="font-serif text-base sm:text-lg text-[#111111] font-normal italic">
                “Crafted in Nigeria. Made for Brides Everywhere.”
              </p>
              <p className="text-[11px] tracking-wider text-neutral-600 uppercase font-sans mt-1.5 font-medium">
                BEAJAY COUTURE BRIDAL • ENUGU, NIGERIA
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

          {/* Primary Founder Portrait (beauty-okiemute-01.jpg) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-[#ECE6D9] shadow-xl border border-[#DDD4C1]">
              <img
                src={founderPrimaryOpt.src}
                srcSet={founderPrimaryOpt.srcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                alt={ABOUT_MEDIA_ASSETS.founderPrimary.alt}
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
                width={2800}
                height={3919}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-serif text-sm tracking-wide block">
                  {BRAND_CONTACT.founder.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#E6C875] font-medium block mt-0.5">
                  {BRAND_CONTACT.founder.title}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MEET BEAUTY OKIEMUTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10.5px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              THE CREATIVE FORCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
              Meet Okiemute Beauty
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto mt-2" />
            <p className="text-xs uppercase tracking-[0.22em] text-[#856122] font-medium pt-1">
              Founder & Creative Director
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            <p>
              Beauty’s journey into fashion began with a genuine passion for creativity and a love for seeing people look and feel beautiful. She started sewing while she was still in school, and what began as a personal skill gradually became a business.
            </p>
            <p>
              The original name, <strong className="font-medium text-neutral-900">BJ Couture</strong>, came from the combination of Beauty and Jessica — Beauty’s husband’s sister and her roommate during school. Created during the early days of her fashion journey, the name was officially registered around 2019.
            </p>
            <p>
              Beauty spent years working in ready-to-wear and serving clients within and outside Nigeria. Yet even while dressing women for everyday elegance, she knew in her heart that she wanted to build something more focused, more deliberate, and profoundly personal.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE TURNING POINT — STARTING AGAIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Founder Photo 2 (beauty-okiemute-02.jpg) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-lg">
              <img
                src={founderJourneyOpt.src}
                srcSet={founderJourneyOpt.srcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                alt={ABOUT_MEDIA_ASSETS.founderJourney.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={2800}
                height={4200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-[11px] tracking-wider uppercase font-serif">
                BEAUTY OKIEMUTE • DESIGN REFLECTION
              </div>
            </div>
            <p className="mt-3 text-[11px] text-neutral-500 tracking-wider uppercase font-light text-center">
              Trusting the gift and committing fully to bridal couture
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
                THE TURNING POINT
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#111111] font-normal leading-tight">
                Starting Again.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              In 2022, after spending about three years intentionally learning bridal design through online courses and investing deeply in her craft, Beauty made a defining decision: 2023 would be the year she went fully into bridal.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              It was not an easy decision. She stopped taking ready-to-wear jobs, gave out the remaining fabrics from that chapter of the business, and began building BEAJAY COUTURE BRIDAL from her parlour.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              There was no established bridal clientele and no guarantee of how the decision would turn out. What she had was the conviction that she wanted something different and the belief that there was more ahead.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              Social media became an important tool in the early growth of the business. Beauty created the bridal platform, shared the work, invested in advertising, collaborated with vendors and creatives, and began building the brand one bride at a time.
            </p>

            <div className="p-4 bg-white border border-[#E8E2D4] text-xs text-neutral-700 font-light italic leading-relaxed">
              “Every bride who trusted us in those early days laid the foundation for the house we are building today.”
            </div>
          </div>

        </div>
      </section>

      {/* 4. FROM ONE PARLOUR TO A GROWING BRIDAL NETWORK & MILESTONE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-4 text-center">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              EXPANSION & TRUST
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#111111] font-normal leading-tight">
              From One Parlour to a Growing Bridal Network
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto mt-2" />
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            <p>
              As BEAJAY grew, bridal businesses began noticing the work and coming to the brand for gowns. What began from home gradually developed into a trusted production relationship with bridal vendors and bridal houses purchasing BEAJAY gowns to serve their own clients.
            </p>
            <p>
              Today, that network reaches bridal businesses across Nigeria, extending through all 36 states. BEAJAY therefore serves not only brides who come directly to the brand, but also supports fellow bridal houses and rental businesses in serving their brides with confidence.
            </p>
            <p>
              That steady momentum led to the growth from the original home beginning to BEAJAY operating from a dedicated space in New Haven, Enugu. Alongside local brides, the brand has welcomed and styled clients traveling from other states across Nigeria as well as international brides.
            </p>
          </div>

          {/* Milestone: Pampered Brides Experience in Lagos */}
          <div className="p-8 sm:p-10 bg-[#F8F5EE] border border-[#DDD4C1] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#111111] text-[#E6C875] flex items-center justify-center text-xs font-serif shrink-0">
                ✦
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#856122] font-semibold block">
                  AN IMPORTANT MILESTONE
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#111111] font-normal">
                  The Pampered Brides Experience, Lagos
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
              BEAJAY COUTURE BRIDAL was presented at the Pampered Brides Experience in Lagos. Beauty describes this runway as the brand’s first bridal presentation outside Enugu — an affirming moment and an enduring reminder that a small, faithful beginning could grow into something recognized nationwide.
            </p>
          </div>

        </div>
      </section>

      {/* 5. EDITORIAL QUOTE & BRIDAL PHILOSOPHY */}
      <section className="bg-[#111111] text-white py-20 sm:py-26 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10.5px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
            MORE THAN A GOWN
          </span>

          <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light italic leading-snug sm:leading-tight text-[#FAF7F2] max-w-3xl mx-auto">
            “I want to create the dress she remembers years later — the dress that makes her look in the mirror and say, ‘This is me.’”
          </blockquote>

          <div className="w-16 h-[1px] bg-[#C59B3F] mx-auto pt-2" />
        </div>
      </section>

      {/* 6. MORE THAN A GOWN — THE CREATIVE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              DESIGN PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal leading-tight">
              Designing With the Bride at the Centre
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            <p>
              BEAJAY works with a bride’s vision, including when that vision is not yet completely clear, and helps develop it into a finished bridal look. Every consultation begins with listening: understanding how the bride wishes to feel, the scale of her celebration, and the silhouette that honors her body.
            </p>
            <p>
              Beauty describes herself as deeply detail-oriented. She pays meticulous attention to fabric, silhouette, structure, comfort, finishing, and the subtle nuances that make the final look feel authentically personal to the bride.
            </p>
            <p>
              Beauty also describes creativity as a gift from God. During consultations and the design process, ideas often begin naturally from the fabric, the bride’s thoughts, and her own creative interpretation — always keeping the bride at the very center of every choice.
            </p>
          </div>

          {/* Pillars of Design Attention */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            <div className="p-6 bg-white border border-[#E5DFD1] space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#856122] block">01 / TEXTILE</span>
              <h3 className="font-serif text-base text-[#111111]">Curated Fabric & Lace</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Selecting fabrics that drape naturally and capture light with gentle sophistication.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD1] space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#856122] block">02 / BALANCE</span>
              <h3 className="font-serif text-base text-[#111111]">Silhouette & Structure</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Balanced corsetry, boning, and contours tailored for both poised elegance and all-day comfort.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD1] space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#856122] block">03 / ARTISTRY</span>
              <h3 className="font-serif text-base text-[#111111]">Refined Hand Finishing</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Carefully placed beading, clean seam work, and delicate details that complete the gown.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. THE BEAJAY EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              THE BRIDAL JOURNEY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal leading-tight">
              The BEAJAY Experience
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
            <p className="text-base sm:text-lg font-serif italic text-neutral-800 max-w-xl mx-auto">
              “Our brides are not just clients to us.”
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            <p>
              From the first consultation to final delivery, BEAJAY aims to build a warm relationship where brides can relax, express themselves freely, and trust our team with their vision.
            </p>
            <p>
              Beauty describes the goal as a stress-free experience where the process feels just as special as the final gown itself. When a bride works with BEAJAY, our desire is for her to feel four things at every step:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-6 bg-white border border-[#E5DFD1] text-center space-y-2">
              <span className="font-serif text-xl sm:text-2xl text-[#856122] block font-light">Welcomed</span>
              <p className="text-xs text-neutral-600 font-light">
                An atmosphere of warmth, respect, and attentive hospitality.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD1] text-center space-y-2">
              <span className="font-serif text-xl sm:text-2xl text-[#856122] block font-light">Heard</span>
              <p className="text-xs text-neutral-600 font-light">
                Your ideas, preferences, and worries receive honest, focused guidance.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD1] text-center space-y-2">
              <span className="font-serif text-xl sm:text-2xl text-[#856122] block font-light">Beautiful</span>
              <p className="text-xs text-neutral-600 font-light">
                Seeing your silhouette elevated with proportion, grace, and radiance.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5DFD1] text-center space-y-2">
              <span className="font-serif text-xl sm:text-2xl text-[#856122] block font-light">Confident</span>
              <p className="text-xs text-neutral-600 font-light">
                Stepping toward the aisle knowing your dress fits comfortably and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE PEOPLE BEHIND BEAJAY (OFFICIAL TEAM MEDIA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              THE BEAJAY TEAM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal leading-tight">
              The People Behind BEAJAY
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto" />
            <p className="text-sm text-neutral-700 font-light leading-relaxed">
              The growth of BEAJAY COUTURE BRIDAL is powered by the dedicated hands and hearts working behind the scenes to bring each bridal experience together.
            </p>
          </div>

          {/* Collective 3-image editorial presentation of real team photography */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Team Image 1 (Landscape, 1364x908) */}
            <div className="md:col-span-5 flex flex-col">
              <div className="relative aspect-[3/2] overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-sm flex-1">
                <img
                  src={teamImages[0].opt.src}
                  srcSet={teamImages[0].opt.srcSet}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  alt={teamImages[0].alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  width={1364}
                  height={908}
                />
              </div>
              <p className="mt-2 text-[11px] text-neutral-500 font-light tracking-wide text-center">
                Dedicated collaboration across cutting, styling, and fitting
              </p>
            </div>

            {/* Team Image 2 (Portrait, 969x1280) */}
            <div className="md:col-span-3 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-sm flex-1">
                <img
                  src={teamImages[1].opt.src}
                  srcSet={teamImages[1].opt.srcSet}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  alt={teamImages[1].alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  width={969}
                  height={1280}
                />
              </div>
              <p className="mt-2 text-[11px] text-neutral-500 font-light tracking-wide text-center">
                Detailed gown finishing and presentation
              </p>
            </div>

            {/* Team Image 3 (Landscape, 1365x910) */}
            <div className="md:col-span-4 flex flex-col">
              <div className="relative aspect-[3/2] overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-sm flex-1">
                <img
                  src={teamImages[2].opt.src}
                  srcSet={teamImages[2].opt.srcSet}
                  sizes="(max-width: 768px) 100vw, 35vw"
                  alt={teamImages[2].alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  width={1365}
                  height={910}
                />
              </div>
              <p className="mt-2 text-[11px] text-neutral-500 font-light tracking-wide text-center">
                Crafting memories together in Enugu
              </p>
            </div>

          </div>

          <div className="max-w-2xl mx-auto text-center pt-2">
            <p className="text-xs text-neutral-600 font-light leading-relaxed italic">
              From pattern adjustments to hand-stitched beadwork and final pressings, our team works united to ensure every gown leaves our studio ready for the aisle.
            </p>
          </div>

        </div>
      </section>

      {/* 9. FROM ENUGU TO BRIDES EVERYWHERE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="bg-[#F8F5EE] border border-[#DDD4C1] p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-[#856122]">
              <MapPin className="w-4 h-4 text-[#C59B3F]" />
              <span>FROM ENUGU TO BRIDES EVERYWHERE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal leading-tight">
              Crafted in Nigeria.<br />
              <span className="italic text-[#856122]">Made for Brides Everywhere.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-800 font-light leading-relaxed">
              What began from a parlour in Enugu has grown beyond the city where BEAJAY's bridal journey began.
            </p>

            <blockquote className="p-5 bg-white border-l-2 border-[#C59B3F] font-serif text-base sm:text-lg italic text-[#111111]">
              “Beautiful bridal fashion can be created from Enugu and experienced anywhere in the world.”
            </blockquote>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              Today, BEAJAY works with brides within and outside Nigeria, including through remote consultations, while continuing to build relationships with bridal businesses across the country.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="min-h-[44px] inline-flex items-center justify-center px-7 py-3 bg-[#111111] hover:bg-[#2A2824] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer shadow-sm"
              >
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                href={buildWhatsAppUrl({ type: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 border border-[#856122] hover:bg-white text-[#141312] text-xs font-semibold tracking-[0.18em] uppercase transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 10. WHERE WE ARE GOING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#EAE3D5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              OUR VISION & LEGACY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal leading-tight">
              Where We Are Going
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              BEAJAY’s vision is to continue building a global bridal fashion brand known for distinctive design, uncompromising craftsmanship, and a memorable bridal experience.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              Beauty wants to transfer her knowledge to the next generation of bridal professionals and create opportunities for others who are ready to build meaningful careers in the bridal industry.
            </p>

            <div className="p-6 bg-white border border-[#E5DFD1] space-y-2">
              <p className="font-serif text-lg sm:text-xl text-[#111111] font-normal italic">
                “The dream is bigger than gowns.”
              </p>
              <p className="font-serif text-lg sm:text-xl text-[#856122] font-normal italic">
                “It is about building a legacy.”
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500 font-sans pt-1">
                And we are only getting started.
              </p>
            </div>
          </div>

          {/* Founder Photo 3 (beauty-okiemute-03.jpg) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-[#ECE6D9] border border-[#DDD4C1] shadow-xl">
              <img
                src={founderVisionOpt.src}
                srcSet={founderVisionOpt.srcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                alt={ABOUT_MEDIA_ASSETS.founderVision.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
                width={2800}
                height={4200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-serif text-sm tracking-wide block">
                  Okiemute Beauty
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#E6C875] font-medium block mt-0.5">
                  BEAJAY COUTURE BRIDAL
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 11. CLOSING MESSAGE TO THE BRIDE & ACTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block">
              BEGIN YOUR STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] font-normal leading-tight">
              Your Vision Matters to Us.
            </h2>
            <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto mt-2" />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            <p>
              Whether you already know exactly what you want or are still imagining your wedding dress, BEAJAY is here to guide you, refine the idea, and help bring that vision to life.
            </p>
            <p className="font-serif text-lg sm:text-xl text-[#111111] italic font-normal">
              Welcome to BEAJAY. <br className="hidden sm:inline" />
              Welcome to the experience of seeing your dream come to life.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAppointment}
              className="min-h-[44px] inline-flex items-center justify-center px-8 py-3.5 bg-[#111111] hover:bg-[#2A2824] text-white text-xs font-semibold tracking-[0.22em] uppercase transition-colors cursor-pointer shadow-md"
            >
              <span>BOOK AN APPOINTMENT</span>
            </button>
            
            <button
              onClick={onNavigateCollections}
              className="min-h-[44px] inline-flex items-center justify-center px-8 py-3.5 border border-[#856122] hover:bg-[#F2EDE2] text-[#141312] text-xs font-semibold tracking-[0.22em] uppercase transition-colors cursor-pointer"
            >
              <span>EXPLORE COLLECTIONS</span>
            </button>

            <button
              onClick={onNavigateRentals}
              className="min-h-[44px] inline-flex items-center justify-center px-8 py-3.5 bg-white border border-[#DDD4C1] hover:bg-[#F8F5EE] text-[#141312] text-xs font-semibold tracking-[0.22em] uppercase transition-colors cursor-pointer"
            >
              <span>DISCOVER RENTALS</span>
            </button>
          </div>

          {/* Quick links */}
          <div className="pt-8 border-t border-[#EAE3D5] flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
            <button onClick={onNavigateGallery} className="hover:text-[#856122] transition-colors cursor-pointer">
              Bridal Gallery
            </button>
            <span>•</span>
            <button onClick={onNavigateContact} className="hover:text-[#856122] transition-colors cursor-pointer">
              Contact Us
            </button>
            <span>•</span>
            <a 
              href={buildWhatsAppUrl({ type: 'general' })}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#25D366] transition-colors inline-flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
};
