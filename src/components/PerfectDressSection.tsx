import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ActiveModal } from '../types';
import { EDITORIAL_MEDIA_ASSETS, resolveMedia } from '../config/mediaAssets';

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
  const cards = [
    {
      id: 'collection',
      title: 'BRIDAL COLLECTION',
      description: 'Explore BEAJAY bridal designs.',
      cta: 'View Collection',
      action: onViewCollections,
      image: resolveMedia(EDITORIAL_MEDIA_ASSETS.perfectDress.collection),
      alt: EDITORIAL_MEDIA_ASSETS.perfectDress.collection.alt,
      tag: 'Bridal Designs'
    },
    {
      id: 'rent',
      title: 'GOWN RENTALS',
      description: 'Discover selected gowns available for rental requests.',
      cta: 'Explore Rentals',
      action: onNavigateRentals,
      image: resolveMedia(EDITORIAL_MEDIA_ASSETS.perfectDress.rent),
      alt: EDITORIAL_MEDIA_ASSETS.perfectDress.rent.alt,
      tag: 'Gown Rental Collection'
    },
    {
      id: 'gallery',
      title: 'BRIDAL GALLERY',
      description: 'Explore BEAJAY bridal looks, details and creative work.',
      cta: 'View Gallery',
      action: onNavigateGallery,
      image: resolveMedia(EDITORIAL_MEDIA_ASSETS.perfectDress.bespoke),
      alt: 'BEAJAY bridal looks, details and creative work',
      tag: 'Moments & Details'
    }
  ];

  return (
    <section 
      id="find-your-perfect-dress"
      className="py-20 lg:py-28 bg-[#FCFAF7] border-b border-[#EFECE5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111]">
            Find Your Perfect Dress
          </h2>
          <div className="w-16 h-[2px] bg-[#C59B3F] mx-auto my-2" />
          <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-[#C59B3F]">
            BRIDAL COLLECTION • GOWN RENTALS • BRIDAL GALLERY
          </p>
        </div>

        {/* 3 Premium Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="group bg-white border border-[#E9E4DB] flex flex-col hover:border-[#C59B3F] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
            >
              {/* Image Frame with Elegant Hover Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#111111]/85 backdrop-blur-md text-[#EFECE5] text-[10px] font-medium tracking-[0.16em] uppercase px-3 py-1.5 border border-[#C59B3F]/40">
                    {card.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white space-y-5">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-2xl font-normal text-[#111111] group-hover:text-[#C59B3F] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={card.action}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C59B3F] group-hover:bg-[#B3892F] text-white py-3.5 px-5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm cursor-pointer"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridal Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F5F1E8] border border-[#E5DFD3] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-medium text-[#111111]">
              Need guidance on your bridal selection?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Book an appointment with BEAJAY COUTURE BRIDAL to view collections, try silhouettes, or discuss rental availability.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('appointment')}
            className="shrink-0 inline-flex items-center gap-2 bg-[#111111] hover:bg-[#252422] text-[#F3EFE6] px-6 py-3 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer border border-transparent hover:border-[#C59B3F]"
          >
            <span>BOOK AN APPOINTMENT</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F]" />
          </button>
        </div>

      </div>
    </section>
  );
};
