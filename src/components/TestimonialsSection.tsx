import React from 'react';
import { Sparkles, HeartHandshake, PenLine } from 'lucide-react';
import { Testimonial, ActiveModal } from '../types';
import { TestimonialCard } from './TestimonialCard';

interface TestimonialsSectionProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  testimonials?: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenModal,
  testimonials = []
}) => {
  // Only approved testimonials should ever be displayed publicly
  const approvedTestimonials = testimonials.filter(
    (t) => t.moderationStatus === 'approved'
  );

  return (
    <section 
      id="testimonials-section"
      className="relative py-20 sm:py-28 bg-[#111110] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Luxury Ambient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#C59B3F]/40 to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C59B3F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#C59B3F]/30 text-[#E6C875]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase">
              AUTHENTIC MOMENTS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Stories From Our <span className="italic font-normal text-[#E6C875]">Brides</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D4CEC3] font-light leading-relaxed">
            This space celebrates the memories, fitting experiences, and aisle reflections 
            shared by brides and clients of BEAJAY COUTURE BRIDAL.
          </p>
        </div>

        {/* Content Container: Dynamic Display vs. Intentional Empty State */}
        {approvedTestimonials.length > 0 ? (
          /* Future Approved Testimonials Showcase */
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {approvedTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Sub-action inviting new stories */}
            <div className="pt-6 text-center">
              <button
                id="testimonials-share-experience-btn-grid"
                type="button"
                onClick={() => onOpenModal('share-experience')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#E6C875] border border-[#C59B3F]/50 hover:border-[#C59B3F] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                <PenLine className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Share Your Experience</span>
              </button>
            </div>
          </div>
        ) : (
          /* Intentional, Polished Empty / Coming-Content State */
          <div 
            id="testimonials-empty-state"
            className="max-w-3xl mx-auto bg-[#181716] border border-white/10 p-8 sm:p-12 lg:p-14 text-center relative shadow-2xl"
          >
            {/* Architectural Border Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C59B3F]/60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C59B3F]/60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C59B3F]/60 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C59B3F]/60 pointer-events-none" />

            {/* Icon & Message */}
            <div className="w-14 h-14 mx-auto mb-6 bg-white/5 border border-[#C59B3F]/40 flex items-center justify-center text-[#E6C875]">
              <HeartHandshake className="w-6 h-6" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-light text-white mb-3">
              Real bride stories will be shared here.
            </h3>

            <p className="text-sm sm:text-[15px] text-[#C2BDB2] font-light leading-relaxed max-w-xl mx-auto mb-8">
              As our brides celebrate their special days, their cherished moments, 
              fitting experiences, and wedding reflections will be featured in this space. 
              Testimonials shared here will come from BEAJAY brides and clients and will be reviewed before publication.
            </p>

            {/* Elegant Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="testimonials-share-experience-btn"
                type="button"
                onClick={() => onOpenModal('share-experience')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl hover:shadow-[#C59B3F]/25 cursor-pointer min-h-[44px] w-full sm:w-auto"
              >
                <PenLine className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Share Your Experience</span>
              </button>

              <button
                id="testimonials-book-appointment-btn"
                type="button"
                onClick={() => onOpenModal('appointment')}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#EFECE5] border border-white/20 hover:border-white/40 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer min-h-[44px] w-full sm:w-auto"
              >
                <span>Book a Fitting</span>
              </button>
            </div>

            <p className="text-[11px] text-neutral-500 font-light mt-6 tracking-wide">
              Submissions are reviewed by BEAJAY COUTURE BRIDAL prior to publication.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
