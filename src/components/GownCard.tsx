import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GownItem } from '../types';

interface GownCardProps {
  gown: GownItem;
  onSelectGown: (gown: GownItem) => void;
  featured?: boolean;
}

export const GownCard: React.FC<GownCardProps> = ({
  gown,
  onSelectGown,
  featured = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const primaryImage = gown.image || gown.images?.[0];
  const secondaryImage = gown.secondaryImage || null;

  const handleCardClick = () => {
    onSelectGown(gown);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectGown(gown);
    }
  };

  return (
    <article
      id={`gown-card-${gown.slug || gown.id}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${gown.name}`}
      className={`group relative flex flex-col bg-white border border-[#EFE9DF] hover:border-[#C59B3F]/60 transition-all duration-500 cursor-pointer overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Editorial Image Container */}
      <div className="relative aspect-[3/4] w-full bg-[#F4F0E8] overflow-hidden">
        {/* Loading Placeholder Skeleton */}
        {!imageLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#EFE9DF] animate-pulse" />
        )}

        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={`${gown.name} - ${gown.categoryLabel}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-top transition-opacity duration-400 ease-out motion-reduce:transition-none ${
            secondaryImage ? '[@media(hover:hover)]:group-hover:opacity-0' : ''
          }`}
        />

        {/* Secondary Angle Image (reveals smoothly on desktop hover if verified for this gown) */}
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={`${gown.name} - Alternate view`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-400 ease-out motion-reduce:transition-none pointer-events-none"
          />
        )}

        {/* Top Badges: Gown Code */}
        <div className="absolute top-3 left-3 pointer-events-none z-10">
          <span className="bg-[#111111]/85 backdrop-blur-xs text-white text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 font-sans font-medium">
            {gown.code || 'COUTURE'}
          </span>
        </div>

        {/* Subtle Bottom Vignette on Hover */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Hover View Action Banner */}
        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="w-full bg-[#111111]/90 backdrop-blur-xs text-white text-[11px] font-semibold tracking-[0.2em] uppercase py-2.5 px-4 text-center flex items-center justify-center gap-2 border border-[#C59B3F]/50">
            <span>VIEW GOWN</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F]" />
          </div>
        </div>
      </div>

      {/* Gown Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[#856122] font-medium">
            <span>{gown.categoryLabel}</span>
            <span className="text-neutral-400 font-normal">{gown.silhouette.split(' ')[0]}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl text-[#111111] group-hover:text-[#856122] transition-colors leading-snug line-clamp-1">
            {gown.name}
          </h3>

          <p className="text-xs text-neutral-500 font-light line-clamp-2 leading-relaxed pt-0.5">
            {gown.description}
          </p>
        </div>

        {/* Bottom Bar: Action Trigger */}
        <div className="pt-3.5 mt-3 border-t border-[#F2ECE0] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#111111] group-hover:text-[#C59B3F] transition-colors">
            <span>VIEW GOWN</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>

          <span className="text-[10px] text-[#856122] tracking-wider uppercase font-medium">
            Rental on Request
          </span>
        </div>
      </div>
    </article>
  );
};
