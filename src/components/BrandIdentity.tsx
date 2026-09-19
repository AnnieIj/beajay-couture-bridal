import React from 'react';

/**
 * Minimal Couture Atelier Emblem
 * Delicate editorial line-art insignia: fine couture needle and celestial bridal veil arc.
 * Restrained, sophisticated, and strictly secondary to the BEAJAY wordmark.
 */
export const CoutureEmblem: React.FC<{ 
  className?: string; 
  strokeColor?: string;
  fillColor?: string;
}> = ({ 
  className = "w-5 h-5", 
  strokeColor = "currentColor",
  fillColor = "currentColor" 
}) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Delicate Couture Needle */}
      <line x1="16" y1="3" x2="16" y2="20" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      {/* Needle Eye */}
      <ellipse cx="16" cy="6" rx="0.6" ry="1.2" stroke={strokeColor} strokeWidth="0.8" fill="none" />
      {/* Needlepoint apex starlet */}
      <path 
        d="M16 2.2L16.35 3.1L17.25 3.45L16.35 3.8L16 4.7L15.65 3.8L14.75 3.45L15.65 3.1Z" 
        fill={fillColor} 
      />
      {/* Outer Ethereal Bridal Veil Arc */}
      <path 
        d="M7 23C7 16 11.5 12 16 12C20.5 12 25 16 25 23" 
        stroke={strokeColor} 
        strokeWidth="0.9" 
        strokeLinecap="round" 
      />
      {/* Inner Whispering Arc */}
      <path 
        d="M10.5 24.5C10.5 19 13.5 16 16 16C18.5 16 21.5 19 21.5 24.5" 
        stroke={strokeColor} 
        strokeWidth="0.75" 
        strokeLinecap="round" 
        opacity="0.6" 
      />
      {/* Delicate Atelier Baseline Dash */}
      <line x1="13" y1="26" x2="19" y2="26" stroke={strokeColor} strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
};

interface BrandIdentityProps {
  variant?: 'header' | 'footer' | 'standalone';
  className?: string;
  onClick?: () => void;
}

/**
 * BEAJAY COUTURE BRIDAL — Official Refined Fashion House Brand Treatment
 *
 * Visual hierarchy:
 * 1. BEAJAY — Dominant, large editorial serif with subtle typographic grace.
 * 2. COUTURE — Smaller, widely spaced uppercase in crisp noir / contrast tone.
 * 3. BRIDAL — Smaller, restrained champagne gold with elegant letter-spacing.
 */
export const BrandIdentity: React.FC<BrandIdentityProps> = ({
  variant = 'header',
  className = '',
  onClick
}) => {
  if (variant === 'header') {
    return (
      <div 
        id="beajay-brand-header"
        onClick={onClick}
        className={`flex items-center gap-2 sm:gap-3 select-none text-left cursor-pointer group ${className}`}
        role="banner"
        aria-label="BEAJAY COUTURE BRIDAL"
      >
        {/* Dominant Wordmark: BEAJAY */}
        <div className="flex items-baseline">
          <span className="font-serif text-[21px] sm:text-2xl lg:text-[27px] font-normal tracking-[0.16em] sm:tracking-[0.18em] text-[#111111] group-hover:text-[#856122] transition-colors leading-none">
            BEA<span className="font-serif italic font-normal text-[#856122] pr-[0.5px]">J</span>AY
          </span>
        </div>

        {/* Slender Vertical Atelier Divider */}
        <span 
          className="w-[1px] h-6 sm:h-7 bg-[#DDD6C8] shrink-0" 
          aria-hidden="true" 
        />

        {/* Couture & Bridal Lockup */}
        <div className="flex flex-col justify-center leading-none space-y-[2px] sm:space-y-[3px]">
          <span className="font-sans text-[8px] sm:text-[9.5px] font-semibold tracking-[0.32em] uppercase text-[#1A1A1A]">
            COUTURE
          </span>
          <span className="font-sans text-[7.5px] sm:text-[9px] font-semibold tracking-[0.34em] uppercase text-[#856122]">
            BRIDAL
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div 
        id="beajay-brand-footer"
        onClick={onClick}
        className={`space-y-4 select-none text-left cursor-pointer group ${className}`}
        aria-label="BEAJAY COUTURE BRIDAL"
      >
        {/* Optional Couture Line-Art Emblem */}
        <div className="flex items-center gap-2">
          <CoutureEmblem 
            className="w-6 h-6 text-[#E6C875] transition-transform duration-300 group-hover:scale-105" 
            strokeColor="#E6C875"
            fillColor="#E6C875"
          />
        </div>

        {/* Dominant Wordmark: BEAJAY */}
        <div className="space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-light tracking-[0.22em] text-[#FDFBF7] group-hover:text-[#E6C875] transition-colors leading-none">
            BEA<span className="font-serif italic text-[#E6C875]">J</span>AY
          </h2>

          {/* Couture & Bridal Lockup with Micro Hairline */}
          <div className="flex items-center gap-3 pt-1">
            <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.38em] uppercase text-[#E5E0D6]">
              COUTURE
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C59B3F] shrink-0" aria-hidden="true" />
            <span className="font-sans text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.4em] uppercase text-[#E6C875]">
              BRIDAL
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Standalone / Modal variant
  return (
    <div 
      id="beajay-brand-standalone"
      onClick={onClick}
      className={`text-center select-none ${className}`}
      aria-label="BEAJAY COUTURE BRIDAL"
    >
      <div className="flex justify-center mb-2">
        <CoutureEmblem className="w-6 h-6 text-[#C59B3F]" strokeColor="#C59B3F" fillColor="#C59B3F" />
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#111111]">
        BEA<span className="font-serif italic text-[#856122]">J</span>AY
      </h2>
      <div className="flex items-center justify-center gap-2 pt-1">
        <span className="font-sans text-[9px] font-semibold tracking-[0.32em] uppercase text-[#111111]">
          COUTURE
        </span>
        <span className="w-1 h-1 rotate-45 bg-[#856122]" />
        <span className="font-sans text-[8.5px] font-semibold tracking-[0.34em] uppercase text-[#856122]">
          BRIDAL
        </span>
      </div>
    </div>
  );
};
