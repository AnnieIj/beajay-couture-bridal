import React from 'react';
import { Search, Calendar, Scissors, Sparkles, ArrowRight } from 'lucide-react';
import { ActiveModal } from '../types';

interface BridalExperienceSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const BridalExperienceSection: React.FC<BridalExperienceSectionProps> = ({ onOpenModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Discover Your Gown',
      description: 'Explore our curated collections online or share your dream bridal vision with our styling directors.',
      icon: Search
    },
    {
      number: '02',
      title: 'Book a Consultation',
      description: 'Reserve a bridal consultation and fitting session in Enugu, Nigeria for you and your bridal guests.',
      icon: Calendar
    },
    {
      number: '03',
      title: 'Fitting & Alterations',
      description: 'Experience multiple precision fittings with our master tailors until the silhouette contours effortlessly.',
      icon: Scissors
    },
    {
      number: '04',
      title: 'Your Final Look',
      description: 'Collect your steam-pressed, veil-adorned gown ready for unforgettable bridal portraits and your grand walk.',
      icon: Sparkles
    }
  ];

  return (
    <section 
      id="bridal-experience" 
      className="py-20 lg:py-28 bg-[#F8F5EE] border-b border-[#EAE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C59B3F]">
            THE BEAJAY JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] tracking-tight">
            The Bridal Experience
          </h2>
          <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto my-3" />
          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            From the moment you connect with our team in Enugu, Nigeria to the second you step down the aisle, we craft an effortless, celebratory experience.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white border border-[#E8E1D2] p-8 flex flex-col justify-between hover:border-[#C59B3F] transition-all duration-300 relative group shadow-xs hover:shadow-md"
              >
                {/* Step Number In Gold */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl font-light text-[#C59B3F] group-hover:scale-105 transition-transform">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E5DEC9] flex items-center justify-center text-[#856122] group-hover:bg-[#C59B3F] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-normal text-[#111111] group-hover:text-[#C59B3F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Subtitle Accent line */}
                <div className="mt-6 pt-4 border-t border-[#F2ECE0] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-[#C59B3F] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenModal('appointment')}
            className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#262420] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md cursor-pointer border border-transparent hover:border-[#C59B3F]"
          >
            <span>START YOUR BRIDAL EXPERIENCE</span>
            <ArrowRight className="w-4 h-4 text-[#C59B3F]" />
          </button>
        </div>

      </div>
    </section>
  );
};
