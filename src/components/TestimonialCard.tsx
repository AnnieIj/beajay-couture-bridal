import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const SERVICE_LABELS: Record<string, string> = {
  'bridal-collection': 'Bridal Collection / Gown',
  'gown-rental': 'Gown Rental',
  'bridal-consultation': 'Bridal Consultation',
  'fitting-appointment': 'Fitting / Appointment',
  'other': 'BEAJAY Experience'
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const serviceDisplayName = 
    testimonial.serviceLabel || 
    SERVICE_LABELS[testimonial.serviceUsed] || 
    'BEAJAY Experience';

  return (
    <article 
      id={`testimonial-card-${testimonial.id}`}
      className="group relative bg-[#181716] border border-white/10 hover:border-[#C59B3F]/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
    >
      {/* Subtle Corner Accent */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C59B3F]/40 pointer-events-none" />

      {/* Top Meta: Service & Rating */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5 pb-3.5 border-b border-white/10">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#C59B3F] uppercase">
            <Sparkles className="w-3 h-3 text-[#C59B3F]" aria-hidden="true" />
            {serviceDisplayName}
          </span>

          {/* Star Rating (if provided) */}
          {testimonial.rating !== undefined && testimonial.rating > 0 && (
            <div 
              className="flex items-center gap-1"
              aria-label={`Rated ${testimonial.rating} out of 5 stars`}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= (testimonial.rating || 0)
                      ? 'text-[#C59B3F] fill-[#C59B3F]'
                      : 'text-neutral-600'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>

        {/* Quote Icon & Narrative */}
        <Quote className="w-5 h-5 text-[#C59B3F]/40 mb-3" aria-hidden="true" />
        <p className="text-sm sm:text-[15px] font-serif font-light text-[#EAE6DF] leading-relaxed italic mb-6">
          "{testimonial.testimonialText}"
        </p>
      </div>

      {/* Bride / Author Footprint */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-white/10 mt-auto">
        {testimonial.photoUrl ? (
          <img
            src={testimonial.photoUrl}
            alt={`${testimonial.customerName} bridal moment`}
            className="w-11 h-11 rounded-none object-cover border border-[#C59B3F]/50"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-11 h-11 bg-[#242220] border border-white/15 flex items-center justify-center text-[#C59B3F] font-serif text-sm font-semibold">
            {testimonial.customerName.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h4 className="text-xs sm:text-sm font-medium tracking-wider text-white uppercase font-sans">
            {testimonial.customerName}
          </h4>
          <span className="text-[11px] text-neutral-400 font-light block">
            Bride Reflection
          </span>
        </div>
      </div>
    </article>
  );
};
