import React from 'react';
import { Sparkles } from 'lucide-react';

export const CollectionsHero: React.FC = () => {
  return (
    <section 
      id="collections-hero" 
      className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 bg-[#F9F6F0] dark:bg-[#0C0C0B] border-b border-[#EAE4D9] dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Background Decorative Pattern & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#C59B3F_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#F2ECE0]/60 dark:from-white/5 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4">
          
          {/* Editorial Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[#856122] dark:text-[#E6C875] text-[10.5px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
            <span>THE BEAJAY COLLECTION</span>
          </div>

          {/* Luxury Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111111] dark:text-[#F8F5EE] tracking-tight leading-[1.1]">
            Find The One
          </h1>

          <div className="w-14 h-[2px] bg-[#C59B3F]" />

          {/* Supporting Copy */}
          <p className="text-neutral-600 dark:text-[#D4CEC3] text-sm sm:text-base font-light leading-relaxed max-w-2xl pt-1">
            Discover unforgettable silhouettes, exquisite details and bridal designs created for life's most beautiful moments.
          </p>

          <p className="text-[11px] tracking-[0.2em] text-[#856122] dark:text-[#E6C875] uppercase font-medium pt-2">
            Enugu, Nigeria • Luxury Bridal Couture
          </p>

        </div>
      </div>
    </section>
  );
};
