import React from 'react';
import { ArrowRight, Sparkles, Ruler, Compass, PenTool, Check } from 'lucide-react';
import { ActiveModal } from '../types';

interface BespokeSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
}

export const BespokeSection: React.FC<BespokeSectionProps> = ({ onOpenModal }) => {
  const steps = [
    {
      icon: Compass,
      title: 'Vision & Silhouette Exploration',
      desc: 'Moodboards, personal aesthetics, ceremony venue aesthetics, and fabric swatching.'
    },
    {
      icon: Ruler,
      title: '28-Point Custom Body Measurements',
      desc: 'Precision anatomic measurement ensuring a corseted silhouette engineered exclusively for your posture.'
    },
    {
      icon: PenTool,
      title: 'Toile Fitting & Hand Embellishment',
      desc: 'Muslin mock-up fitting followed by delicate hand-beading of French lace and Swarovski crystals.'
    }
  ];

  return (
    <section 
      id="bespoke-section" 
      className="py-20 lg:py-28 bg-[#FCFAF7] border-b border-[#EFECE5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Imagery of Tailoring / Back Detail / Craft */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-2xl border border-[#E8E2D5]">
                <img
                  src="https://images.unsplash.com/photo-1546804784-896d0dca3805?q=80&w=1200&auto=format&fit=crop"
                  alt="Bride bespoke gown back with buttons and lace"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle Gold Frame Inset */}
                <div className="absolute inset-4 border border-[#C59B3F]/40 pointer-events-none" />
              </div>

              {/* Overlapping Secondary Atelier Detail Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 sm:w-64 aspect-square bg-white p-2 shadow-2xl border border-[#E0D8C8]">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"
                  alt="Hand tailoring and lace embroidery detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-center py-1.5 px-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#E6C875]">
                    Enugu Atelier Craft
                  </span>
                </div>
              </div>

              {/* Bespoke Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 border border-[#C59B3F]/50 shadow-md">
                <span className="font-serif text-sm font-medium text-[#111111] italic">
                  Made-to-Measure Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Process */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Header */}
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.26em] uppercase text-[#C59B3F]">
                A GOWN AS UNIQUE AS YOU
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] tracking-tight leading-tight">
                Your Gown. <br />
                <span className="italic">Your Story.</span>
              </h2>
              <div className="w-14 h-[2px] bg-[#C59B3F]" />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              At <strong className="font-medium text-neutral-900">BEAJAY COUTURE BRIDAL</strong>, bespoke is more than a service — it is a collaborative art form. 
              We craft one-of-a-kind wedding gowns sculpted strictly around your body contours, personal aesthetic, and the emotional resonance of your wedding celebration.
            </p>

            {/* Process Highlights */}
            <div className="space-y-4 pt-2">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3.5 bg-white border border-[#EDE7DC]">
                    <div className="w-10 h-10 bg-[#FAF7F2] border border-[#C59B3F]/40 flex items-center justify-center shrink-0 text-[#C59B3F]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium text-neutral-900 tracking-wide font-serif">
                        {step.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="bespoke-enquiry-btn"
                onClick={() => onOpenModal('bespoke')}
                className="inline-flex items-center justify-center gap-3 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white py-4 px-8 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md cursor-pointer"
              >
                <span>ENQUIRE ABOUT A CUSTOM GOWN</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenModal('appointment')}
                className="inline-flex items-center justify-center gap-2 border border-neutral-800 hover:border-[#C59B3F] hover:text-[#C59B3F] text-neutral-900 py-4 px-6 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer"
              >
                <span>BOOK STUDIO VISIT</span>
              </button>
            </div>

            {/* Timeline Note */}
            <p className="text-[11px] text-neutral-500 tracking-wider font-light flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
              Recommended timeline: 3 to 6 months prior to wedding date (Express slots upon consultation)
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
