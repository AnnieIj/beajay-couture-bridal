import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/bridalData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonials-section" 
      className="py-20 lg:py-24 bg-[#FCFAF7] border-b border-[#EFECE5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            What Our Brides Say
          </h2>
          <div className="w-12 h-[2px] bg-[#C59B3F] mx-auto my-2" />
          <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#856122]">
            CLIENT EXPERIENCES & STORIES
          </p>
        </div>

        {/* Carousel Card (Matches Visual Reference Layout) */}
        <div className="relative bg-white border border-[#E9E3D6] shadow-sm max-w-4xl mx-auto p-6 sm:p-10 lg:p-12">
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Bride Portrait with Gold Ring Accent */}
            <div className="shrink-0 relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#C59B3F] p-1 bg-white shadow-md">
                <img
                  src={current.image}
                  alt={current.brideName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#111111] text-[#E6C875] p-2 rounded-full border border-[#C59B3F]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="space-y-4 text-center md:text-left flex-1">
              
              <Quote className="w-8 h-8 text-[#C59B3F]/70 mx-auto md:mx-0" />

              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-neutral-800 font-light italic leading-relaxed">
                “{current.quote}”
              </blockquote>

              <div className="pt-2 border-t border-[#F2ECE0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-sans font-semibold text-sm tracking-wider text-[#111111] uppercase">
                    — {current.brideName}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    {current.location} • {current.weddingDate}
                  </p>
                </div>
                <span className="text-[11px] font-medium tracking-widest text-[#C59B3F] uppercase bg-[#FAF7F2] px-3 py-1 border border-[#E8E1D2] self-center sm:self-auto">
                  {current.gownType}
                </span>
              </div>

            </div>

          </div>

          {/* Navigation Controls: Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F0EAE0]">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentIndex 
                      ? 'w-6 bg-[#C59B3F]' 
                      : 'w-2 bg-[#DDD6C8] hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-9 h-9 border border-[#DDD6C8] bg-[#FAF8F5] hover:border-[#C59B3F] hover:bg-white text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-9 h-9 border border-[#DDD6C8] bg-[#FAF8F5] hover:border-[#C59B3F] hover:bg-white text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
