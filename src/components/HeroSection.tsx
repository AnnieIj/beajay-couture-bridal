import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  Pause,
  Volume2,
  VolumeX
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
    // Respect prefers-reduced-motion with cross-browser fallback
    if (typeof window === 'undefined' || !window.matchMedia) return;
    try {
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
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
      } else if ((mediaQuery as any).addListener) {
        (mediaQuery as any).addListener(listener);
        return () => (mediaQuery as any).removeListener(listener);
      }
    } catch {
      // Fallback gracefully if media query is unsupported
    }
  }, []);

  // Sync DOM muted property directly to HTMLMediaElement to satisfy browser autoplay policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

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
    if (!nextMuted) {
      // When unmuting upon user interaction, ensure playback is active
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    setIsMuted(nextMuted);
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:min-h-[88vh] xl:min-h-[90vh] max-h-[980px] overflow-hidden flex items-center justify-center bg-[#0D0D0D] text-white"
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
            onCanPlay={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_20%] sm:object-[center_25%] md:object-center transition-opacity duration-1000 ${
              videoLoaded && (!prefersReducedMotion || isPlaying) ? 'opacity-85 sm:opacity-90' : 'opacity-0'
            }`}
          />
        )}

        {/* Directional Readability Gradients: Darker on left behind text, tapering transparent to center & right */}
        {/* Desktop & tablet horizontal gradient concentrated around the text */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent w-full lg:w-3/4 pointer-events-none" />

        {/* Mobile vertical gradient protecting text readability while showcasing gown */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/75 pointer-events-none" />

        {/* Subtle vignette top & bottom for header and controls framing */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Hero Content Container - Single Spacious Editorial Column */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8 text-left">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-[#C59B3F]/40 text-[#E6C875]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase">
              BRIDAL COUTURE • ENUGU, NIGERIA
            </span>
          </div>

          {/* Large Headline (Serif Elegance) */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08]">
            Your Dream Dress <br />
            <span className="italic font-normal text-[#E6C875] drop-shadow-sm">Starts Here</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-[#E3DDD1] max-w-lg font-light leading-relaxed tracking-wide">
            Explore bridal collections, discover gowns available for rental, and book a fitting or consultation with{' '}
            <strong className="font-medium text-white">BEAJAY COUTURE BRIDAL</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* Primary CTA */}
            <button
              id="hero-explore-collections-btn"
              onClick={onExploreCollections}
              className="group inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white px-8 py-4 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#C59B3F]/25 cursor-pointer min-h-[48px]"
            >
              <span>EXPLORE COLLECTIONS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              id="hero-book-appointment-btn"
              onClick={() => onOpenModal('appointment')}
              className="inline-flex items-center justify-center gap-2 bg-[#1C1B1A]/80 hover:bg-[#252422] text-[#F3EFE6] border border-white/20 hover:border-[#C59B3F]/70 px-7 py-4 text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer min-h-[48px]"
            >
              <span>BOOK AN APPOINTMENT</span>
            </button>
          </div>

          {/* Studio Trust Indicators */}
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
      </div>

      {/* Video Controls (Tasteful lower-right area) */}
      <div 
        id="hero-video-controls"
        className="absolute bottom-6 right-4 sm:right-6 lg:right-10 z-20 flex items-center gap-2.5 sm:gap-3"
        role="toolbar"
        aria-label="Video playback and sound controls"
      >
        {/* Play / Pause Toggle */}
        <button
          id="hero-video-play-pause-btn"
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[44px] bg-black/60 hover:bg-black/85 active:bg-black text-white/90 hover:text-white border border-white/20 hover:border-[#C59B3F]/70 text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B3F]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#C59B3F] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#C59B3F] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Play</span>
            </>
          )}
        </button>

        {/* Sound On / Sound Off Toggle */}
        <button
          id="hero-video-sound-toggle-btn"
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Sound On" : "Sound Off"}
          className={`group flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[44px] border text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B3F] ${
            isMuted
              ? 'bg-black/60 hover:bg-black/85 active:bg-black text-white/90 hover:text-white border-white/20 hover:border-[#C59B3F]/70'
              : 'bg-[#C59B3F]/35 hover:bg-[#C59B3F]/45 active:bg-[#C59B3F]/55 text-white border-[#C59B3F] shadow-lg shadow-[#C59B3F]/20'
          }`}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#C59B3F] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Sound On</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#E6C875] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Sound Off</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};

