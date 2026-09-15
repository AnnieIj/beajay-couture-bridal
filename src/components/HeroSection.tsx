import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Crown, 
  CalendarCheck, 
  HeartHandshake, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Layers
} from 'lucide-react';
import { HERO_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';
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
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Consume hero media directly from central registry
  const heroVideoSrc = resolveMedia(HERO_MEDIA_ASSETS.video);
  const heroPosterSrc = resolveMedia(HERO_MEDIA_ASSETS.poster);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionPreference = (matches: boolean) => {
      setPrefersReducedMotion(matches);
      if (matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    handleMotionPreference(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => handleMotionPreference(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
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

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const servicePillList = [
    {
      icon: Crown,
      title: 'Bridal Collections',
      desc: 'Explore bridal collections and lookbooks'
    },
    {
      icon: Layers,
      title: 'Gown Rentals',
      desc: 'Selected gowns available for rental'
    },
    {
      icon: CalendarCheck,
      title: 'Fittings & Appointments',
      desc: 'Scheduled bridal fittings in Enugu, Nigeria'
    },
    {
      icon: HeartHandshake,
      title: 'Bridal Consultation',
      desc: 'Guidance on silhouettes and styling'
    },
    {
      icon: Sparkles,
      title: 'Bridal Gallery',
      desc: 'Moments and details from our collection'
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
          style={{ backgroundImage: `url(${heroPosterSrc})` }}
        />

        {/* Native HTML5 Background Video Element */}
        {!videoError && (
          <video
            ref={videoRef}
            src={heroVideoSrc}
            poster={heroPosterSrc}
            autoPlay={!prefersReducedMotion}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_25%] md:object-center transition-opacity duration-1000 ${
              videoLoaded && (!prefersReducedMotion || isPlaying) ? 'opacity-70' : 'opacity-0'
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
              Explore bridal collections, discover gowns available for rental, and book a fitting or consultation with{' '}
              <strong className="font-medium text-white">BEAJAY COUTURE BRIDAL</strong>.
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
                Fittings & Appointments
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
                Services & Offerings
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
                <span>BEAJAY COUTURE BRIDAL</span>
                <button 
                  onClick={() => onOpenModal('appointment')}
                  className="text-[#E6C875] hover:underline cursor-pointer flex items-center gap-1 font-medium"
                >
                  Book an Appointment <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls (Subtle bottom-right pill) */}
      <div 
        id="hero-video-controls"
        className="absolute bottom-4 right-4 z-20 flex items-center gap-2"
        role="toolbar"
        aria-label="Video playback controls"
      >
        {/* Play / Pause Toggle */}
        <button
          id="hero-video-play-pause-btn"
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/90 active:bg-black text-white/85 hover:text-white border border-white/20 hover:border-[#C59B3F]/60 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-[#C59B3F]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>

        {/* Mute / Unmute Toggle */}
        <button
          id="hero-video-mute-unmute-btn"
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute background video" : "Mute background video"}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-black/90 active:bg-black text-white/85 hover:text-white border border-white/20 hover:border-[#C59B3F]/60 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-[#C59B3F]"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span className="hidden sm:inline">Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span className="hidden sm:inline">Mute</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
