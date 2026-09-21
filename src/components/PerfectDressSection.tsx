import React from 'react';
import { ArrowRight, Sparkles, Calendar, Camera } from 'lucide-react';
import { ActiveModal } from '../types';

interface PerfectDressSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  onViewCollections: () => void;
  onNavigateRentals: () => void;
  onNavigateGallery: () => void;
}

export const PerfectDressSection: React.FC<PerfectDressSectionProps> = ({
  onOpenModal,
  onViewCollections,
  onNavigateRentals,
  onNavigateGallery
}) => {
  const pathways = [
    {
      id: 'explore-collections',
      eyebrow: 'PATHWAY 01',
      title: 'EXPLORE COLLECTIONS',
      description: 'Browse Ball Gown, Mermaid Gowns, Veils & Accessories.',
      cta: 'Explore Collections',
      action: onViewCollections,
      icon: Sparkles
    },
    {
      id: 'gown-rentals',
      eyebrow: 'PATHWAY 02',
      title: 'GOWN RENTALS',
      description: 'Discover selected gowns available for rental requests.',
      cta: 'Explore Rentals',
      action: onNavigateRentals,
      icon: Calendar
    },
    {
      id: 'bridal-gallery',
      eyebrow: 'PATHWAY 03',
      title: 'BRIDAL GALLERY',
      description: 'Discover real brides, bridal moments, fittings and details from BEAJAY.',
      cta: 'View Gallery',
      action: onNavigateGallery,
      icon: Camera
    }
  ];

  return (
    <section 
      id="begin-your-experience"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] dark:bg-[#0C0C0B] border-b border-[#EAE3D5] dark:border-white/10 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#856122] dark:text-[#E6C875]">
            YOUR BRIDAL PATHWAY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] dark:text-[#F8F5EE]">
            Begin Your BEAJAY Experience
          </h2>
          <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#D4CEC3] font-light max-w-xl mx-auto leading-relaxed">
            Select your journey to explore the collections, discover selected rental gowns, or experience BEAJAY bridal stories.
          </p>
        </div>

        {/* 3 Restrained Editorial Pathway Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pathways.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="group bg-white dark:bg-[#161514] border border-[#E7E1D4] dark:border-white/10 hover:border-[#C59B3F] dark:hover:border-[#C59B3F] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md relative overflow-hidden"
              >
                {/* Subtle Top Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C59B3F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Eyebrow & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#856122] dark:text-[#E6C875]">
                      {item.eyebrow}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] dark:bg-[#22201E] border border-[#EAE3D5] dark:border-white/15 flex items-center justify-center text-[#C59B3F] group-hover:border-[#C59B3F] group-hover:bg-[#111111] dark:group-hover:bg-[#C59B3F] group-hover:text-[#FAF7F2] dark:group-hover:text-[#0C0C0B] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#111111] dark:text-[#F8F5EE] group-hover:text-[#856122] dark:group-hover:text-[#E6C875] transition-colors leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  {/* Restrained Accent Divider */}
                  <div className="w-10 h-[1.5px] bg-[#C59B3F]/60 group-hover:w-14 transition-all duration-300" />

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Navigation CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={item.action}
                    className="w-full inline-flex items-center justify-between bg-[#FAF7F2] dark:bg-[#22201E] hover:bg-[#111111] dark:hover:bg-[#C59B3F] hover:text-[#FAF7F2] dark:hover:text-[#0C0C0B] text-[#111111] dark:text-[#F8F5EE] border border-[#DDD6C8] dark:border-white/15 hover:border-[#111111] dark:hover:border-[#C59B3F] py-3.5 px-5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer shadow-xs group/btn"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#C59B3F] group-hover/btn:text-[#FAF7F2] dark:group-hover/btn:text-[#0C0C0B] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridal Consultation Banner */}
        <div className="mt-12 sm:mt-14 p-6 sm:p-8 bg-[#F5F1E8] dark:bg-[#181716] border border-[#E5DFD3] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-medium text-[#111111] dark:text-[#F8F5EE]">
              Need guidance on your bridal selection?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#D4CEC3] font-light">
              Book an appointment with BEAJAY COUTURE BRIDAL to view collections, try silhouettes, or discuss rental availability.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('appointment')}
            className="shrink-0 inline-flex items-center gap-2 bg-[#111111] dark:bg-[#C59B3F] hover:bg-[#252422] dark:hover:bg-[#B3892F] text-[#F3EFE6] dark:text-white px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer border border-transparent hover:border-[#C59B3F]"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F] dark:text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};
