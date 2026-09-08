import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Crown, 
  Scissors, 
  CalendarCheck, 
  HeartHandshake, 
  Play, 
  Pause,
  Layers
} from 'lucide-react';
import { HERO_VIDEO_URL, HERO_POSTER_URL } from '../data/bridalData';
import { ActiveModal } from '../types';

interface HeroSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onExploreCollections: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenModal,
  onExploreCollections
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const servicePillList = [
    {
      icon: Crown,
      title: 'Premium Bridal Collections',
      desc: 'Haute couture & royal silhouettes'
    },
    {
      icon: Layers,
      title: 'Gown Rentals',
      desc: 'Exquisite couture gowns available for rental'
    },
    {
      icon: Scissors,
      title: 'Bespoke Couture',
      desc: 'Custom-made to your body & vision'
    },
    {
      icon: CalendarCheck,
      title: 'Fittings & Alterations',
      desc: 'Precision bridal sculpting in Enugu, Nigeria'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Experience',
      desc: 'One-on-one private bridal styling'
    }
  ];

  return (
    <section 
      id="hero-section"
      className="relative w-full min-h-[640px] lg:min-h-[760px] xl:min-h-[820px] overflow-hidden flex items-center justify-center bg-[#0D0D0D] text-white"
    >
      {/* Cinematic Background Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        
        {/* High-definition poster image (always present as base background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${HERO_POSTER_URL})` }}
        />

        {/* Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            src={HERO_VIDEO_URL}
            poster={HERO_POSTER_URL}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-70' : 'opacity-0'
            }`}
          />
        )}

        {/* Tasteful luxury dark & gradient overlays ensuring high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-[#C59B3F]/40 text-[#E6C875]">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase">
                BRIDAL COUTURE • ENUGU, NIGERIA
              </span>
            </div>

            {/* Large Headline (Playfair / Cormorant Serif) */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08]">
              Your Dream Dress <br />
              <span className="italic font-normal text-[#E6C875] drop-shadow-sm">Starts Here</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#E3DDD1] max-w-xl font-light leading-relaxed tracking-wide">
              Explore, rent, or create a custom bridal gown designed just for you. At{' '}
              <strong className="font-medium text-white">BEAJAY COUTURE BRIDAL</strong>, every bride
              deserves an unforgettable, personalized bridal experience.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary CTA */}
              <button
                id="hero-explore-collections-btn"
                onClick={onExploreCollections}
                className="group inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white px-8 py-4 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#C59B3F]/25 cursor-pointer"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-book-appointment-btn"
                onClick={() => onOpenModal('appointment')}
                className="inline-flex items-center justify-center gap-2 bg-[#1C1B1A]/80 hover:bg-[#252422] text-[#F3EFE6] border border-white/20 hover:border-[#C59B3F]/70 px-7 py-4 text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <span>BOOK AN APPOINTMENT</span>
              </button>
            </div>

            {/* Subtle Studio Trust Banner */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-300 border-t border-white/15">
              <span className="flex items-center gap-1.5 font-medium tracking-wider text-[11px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
                Enugu, Nigeria
              </span>
              <span className="flex items-center gap-1.5 font-medium tracking-wider text-[11px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
                Private Fittings
              </span>
              <span className="flex items-center gap-1.5 font-medium tracking-wider text-[11px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
                Gown Rentals
              </span>
            </div>
          </div>

          {/* Right Column: Floating Luxury Service Badges (From Visual Reference) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <div className="bg-black/45 backdrop-blur-md border border-white/15 p-6 sm:p-8 space-y-4 shadow-2xl relative">
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C59B3F]/80 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C59B3F]/80 pointer-events-none" />

              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#C59B3F] uppercase pb-1 border-b border-white/10">
                Couture Services & Offerings
              </div>

              <div className="space-y-3">
                {servicePillList.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={index}
                      className="group flex items-center gap-3.5 p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C59B3F]/50 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-none bg-[#1A1918] border border-[#C59B3F]/40 flex items-center justify-center shrink-0 text-[#E6C875] group-hover:bg-[#C59B3F] group-hover:text-black transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xs sm:text-sm font-medium tracking-wider text-white group-hover:text-[#E6C875] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-[11px] text-neutral-300 font-light">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
                <span>By Private Consultation</span>
                <button 
                  onClick={() => onOpenModal('appointment')}
                  className="text-[#E6C875] hover:underline cursor-pointer flex items-center gap-1 font-medium"
                >
                  Reserve a Fitting <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls (Subtle bottom-right pill) */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 text-[10px] tracking-wider uppercase backdrop-blur-md transition-colors cursor-pointer"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-[#C59B3F]" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#C59B3F]" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
