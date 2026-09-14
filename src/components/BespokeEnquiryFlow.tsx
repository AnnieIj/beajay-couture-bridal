import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  X, 
  Calendar, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Heart, 
  HelpCircle,
  Instagram,
  CheckCircle2,
  FileImage
} from 'lucide-react';
import { BespokeEnquiryFormData } from '../types';

interface BespokeEnquiryFlowProps {
  preselectedGown?: string;
  onBookConsultation?: () => void;
  onComplete?: () => void;
  className?: string;
}

const SILHOUETTE_OPTIONS = [
  { id: 'ball-gown', label: 'Ball Gown', desc: 'Regal volume & structured bodice' },
  { id: 'mermaid', label: 'Mermaid / Trumpet', desc: 'Contoured silhouette & flared skirt' },
  { id: 'a-line', label: 'Romantic A-Line', desc: 'Graceful flow & balanced proportions' },
  { id: 'sheath', label: 'Column Sheath', desc: 'Clean lines & modern simplicity' },
  { id: 'reception', label: 'Reception Dress', desc: 'Sparkle, movement & evening celebration' },
  { id: 'not-sure', label: "Not Sure Yet / I'd Like Guidance", desc: "Open to guidance during consultation" }
];

const PREFERENCE_CATEGORIES = [
  {
    category: 'Neckline & Silhouette Features',
    options: ['Sweetheart', 'Illusion High Neck', 'Deep Plunge', 'Off-The-Shoulder', 'Square Neckline', 'Open to Recommendation']
  },
  {
    category: 'Sleeves & Arm Styling',
    options: ['Long Illusion Sleeves', 'Delicate Cap Sleeves', 'Sleeveless / Strapless', 'Detachable Statement Sleeves', 'Undecided']
  },
  {
    category: 'Train & Veil Intent',
    options: ['Grand Cathedral Train', 'Chapel Length', 'Minimalist Sweep', 'Custom Matching Cathedral Veil', 'Consultation Recommendation']
  },
  {
    category: 'Embellishments & Detailing',
    options: ['Hand-Sewn Beadwork', 'Floral Appliqué', 'Lace Detailing', 'Subtle Shimmer', 'Clean & Minimalist']
  }
];

export const BespokeEnquiryFlow: React.FC<BespokeEnquiryFlowProps> = ({
  preselectedGown,
  onBookConsultation,
  className = ''
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState<BespokeEnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    weddingDate: '',
    weddingLocation: '',
    inspirationSilhouettes: [],
    designPreferences: [],
    preselectedGownInspiration: preselectedGown || '',
    visionNotes: '',
    inspirationFiles: []
  });

  const totalSteps = 6;

  // Validation helpers
  const validateStep = (stepNumber: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (stepNumber === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email address is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone or WhatsApp number is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
    }

    if (stepNumber === 2) {
      if (!formData.weddingDate) newErrors.weddingDate = 'Wedding or event date is required';
    }

    if (stepNumber === 3) {
      if (formData.inspirationSilhouettes.length === 0) {
        newErrors.inspirationSilhouettes = "Please select at least one silhouette direction or choose 'Not Sure Yet'";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const toggleSilhouette = (id: string) => {
    setErrors((prev) => ({ ...prev, inspirationSilhouettes: '' }));
    setFormData((prev) => {
      const current = prev.inspirationSilhouettes;
      if (id === 'not-sure') {
        // If selecting not sure, it can be standalone or toggle
        return {
          ...prev,
          inspirationSilhouettes: current.includes('not-sure') ? [] : ['not-sure']
        };
      } else {
        const withoutNotSure = current.filter((item) => item !== 'not-sure');
        const exists = withoutNotSure.includes(id);
        const updated = exists
          ? withoutNotSure.filter((item) => item !== id)
          : [...withoutNotSure, id];
        return {
          ...prev,
          inspirationSilhouettes: updated
        };
      }
    });
  };

  const togglePreference = (pref: string) => {
    setFormData((prev) => {
      const current = prev.designPreferences;
      const exists = current.includes(pref);
      return {
        ...prev,
        designPreferences: exists
          ? current.filter((p) => p !== pref)
          : [...current, pref]
      };
    });
  };

  // Optional file uploads (prepared frontend preview)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles: { name: string; size: number; previewUrl: string }[] = [];
    Array.from(files).forEach((file: File) => {
      if (file.type.startsWith('image/')) {
        const previewUrl = URL.createObjectURL(file);
        newFiles.push({
          name: file.name,
          size: file.size,
          previewUrl
        });
      }
    });

    setFormData((prev) => ({
      ...prev,
      inspirationFiles: [...(prev.inspirationFiles || []), ...newFiles]
    }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => {
      const updated = [...(prev.inspirationFiles || [])];
      if (updated[index]?.previewUrl) {
        URL.revokeObjectURL(updated[index].previewUrl);
      }
      updated.splice(index, 1);
      return {
        ...prev,
        inspirationFiles: updated
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-[#FCFAF7] border border-[#EAE4D9] p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm ${className}`}>
        <div className="w-16 h-16 bg-[#F6F2E9] border-2 border-[#C59B3F] rounded-full flex items-center justify-center mx-auto text-[#C59B3F] mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase block mb-2">
          BESPOKE ENQUIRY SUBMITTED
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal mb-4">
          Thank You, {formData.fullName || 'Bride'}
        </h3>

        <p className="text-neutral-600 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed mb-8">
          Thank you for sharing your vision with BEAJAY COUTURE BRIDAL. Our team will review your enquiry and continue the conversation with you.
        </p>

        {/* Clean summary of what was shared */}
        <div className="bg-[#FAF7F0] border border-[#EAE4D9] p-6 text-left text-xs max-w-xl mx-auto space-y-3 mb-8">
          <div className="flex justify-between border-b border-[#EAE4D9] pb-2">
            <span className="text-neutral-500">Bride / Client:</span>
            <span className="font-medium text-neutral-900">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-[#EAE4D9] pb-2">
            <span className="text-neutral-500">Contact:</span>
            <span className="font-medium text-neutral-900">{formData.email} • {formData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-[#EAE4D9] pb-2">
            <span className="text-neutral-500">Location:</span>
            <span className="font-medium text-neutral-900">{formData.city}, {formData.country}</span>
          </div>
          <div className="flex justify-between border-b border-[#EAE4D9] pb-2">
            <span className="text-neutral-500">Wedding Date:</span>
            <span className="font-medium text-neutral-900">{formData.weddingDate}</span>
          </div>
          {formData.inspirationSilhouettes.length > 0 && (
            <div className="flex justify-between border-b border-[#EAE4D9] pb-2">
              <span className="text-neutral-500">Silhouettes:</span>
              <span className="font-medium text-neutral-900 capitalize">
                {formData.inspirationSilhouettes.join(', ')}
              </span>
            </div>
          )}
          {formData.preselectedGownInspiration && (
            <div className="flex justify-between border-b border-[#EAE4D9] pb-2">
              <span className="text-neutral-500">Inspiration Reference:</span>
              <span className="font-medium text-[#856122]">{formData.preselectedGownInspiration}</span>
            </div>
          )}
          {formData.inspirationFiles && formData.inspirationFiles.length > 0 && (
            <div className="flex justify-between">
              <span className="text-neutral-500">Moodboard Previews:</span>
              <span className="font-medium text-neutral-900">{formData.inspirationFiles.length} visual reference(s)</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {onBookConsultation && (
            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A BESPOKE CONSULTATION</span>
            </button>
          )}

          <a
            href="https://instagram.com/beajaycouture_bridal"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#C59B3F] text-[#856122] hover:bg-[#FAF6EE] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW BEAJAY BRIDAL</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#FCFAF7] border border-[#EAE4D9] max-w-3xl mx-auto shadow-xs ${className}`}>
      
      {/* Progress & Step Header */}
      <div className="p-6 sm:p-8 border-b border-[#EAE4D9] bg-[#FAF7F0]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] tracking-[0.26em] font-semibold text-[#856122] uppercase block">
              STEP {currentStep} OF {totalSteps}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#111111] font-normal mt-0.5">
              {currentStep === 1 && 'About You'}
              {currentStep === 2 && 'Your Wedding Celebration'}
              {currentStep === 3 && 'Your Silhouette & Vision'}
              {currentStep === 4 && 'Tell Us More'}
              {currentStep === 5 && 'Visual Inspiration & Moodboard'}
              {currentStep === 6 && 'Review & Confirm Enquiry'}
            </h3>
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center gap-2" aria-label={`Step ${currentStep} of ${totalSteps}`}>
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 transition-all duration-300 ${
                  idx + 1 === currentStep
                    ? 'w-7 bg-[#C59B3F]'
                    : idx + 1 < currentStep
                    ? 'w-3 bg-[#856122]'
                    : 'w-3 bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Global Brand Statement */}
        <p className="text-[11px] text-neutral-500 font-light tracking-wider mt-3">
          BEAJAY COUTURE BRIDAL • Crafted in Nigeria. Made for Brides Everywhere.
        </p>

        {/* Preselected Reference Banner if applicable */}
        {formData.preselectedGownInspiration && (
          <div className="mt-4 p-3 bg-white border border-[#E5DEC9] flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-neutral-800">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" />
              <span>
                Inspired by Collection Reference: <strong className="font-medium text-[#856122]">{formData.preselectedGownInspiration}</strong>
              </span>
            </div>
            <span className="text-[10px] uppercase text-neutral-400 font-medium">Inspiration Reference</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        
        {/* =======================================================
            STEP 1: ABOUT YOU
            ======================================================= */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              We welcome brides from across Nigeria and around the world. Please share your primary contact information so we may connect with you directly.
            </p>

            <div>
              <label htmlFor="bespoke-name" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <input
                  id="bespoke-name"
                  type="text"
                  placeholder="e.g. Chisom Adeleke"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-3 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                    errors.fullName ? 'border-red-500' : 'border-[#D5CDBF]'
                  }`}
                />
                <User className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
              {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bespoke-email" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    id="bespoke-email"
                    type="email"
                    placeholder="e.g. bride@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                      errors.email ? 'border-red-500' : 'border-[#D5CDBF]'
                    }`}
                  />
                  <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="bespoke-phone" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <input
                    id="bespoke-phone"
                    type="tel"
                    placeholder="e.g. +234 803 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                      errors.phone ? 'border-red-500' : 'border-[#D5CDBF]'
                    }`}
                  />
                  <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="bespoke-country" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                  Country *
                </label>
                <input
                  id="bespoke-country"
                  type="text"
                  placeholder="e.g. Nigeria, United Kingdom, United States..."
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className={`w-full px-4 py-3 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                    errors.country ? 'border-red-500' : 'border-[#D5CDBF]'
                  }`}
                />
                {errors.country && <p className="text-[11px] text-red-600 mt-1">{errors.country}</p>}
              </div>

              <div>
                <label htmlFor="bespoke-city" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                  City / State *
                </label>
                <input
                  id="bespoke-city"
                  type="text"
                  placeholder="e.g. Enugu, Lagos, London, Atlanta..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={`w-full px-4 py-3 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                    errors.city ? 'border-red-500' : 'border-[#D5CDBF]'
                  }`}
                />
                {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
              </div>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 2: YOUR WEDDING
            ======================================================= */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Sharing your celebration timing enables our team to coordinate design stages and fitting consultations.
            </p>

            <div>
              <label htmlFor="bespoke-date" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                Wedding or Event Date *
              </label>
              <div className="relative">
                <input
                  id="bespoke-date"
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  className={`w-full px-4 py-3 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                    errors.weddingDate ? 'border-red-500' : 'border-[#D5CDBF]'
                  }`}
                />
              </div>
              {errors.weddingDate && <p className="text-[11px] text-red-600 mt-1">{errors.weddingDate}</p>}
            </div>

            <div>
              <label htmlFor="bespoke-location" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                Wedding Location / Venue (Optional)
              </label>
              <div className="relative">
                <input
                  id="bespoke-location"
                  type="text"
                  placeholder="e.g. Cathedral ceremony in Enugu, garden wedding in Abuja, destination in Europe..."
                  value={formData.weddingLocation || ''}
                  onChange={(e) => setFormData({ ...formData, weddingLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#D5CDBF] text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F]"
                />
                <MapPin className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
              </div>
              <p className="text-[11px] text-neutral-500 font-light mt-1">
                Venue setting helps inspire silhouette volume, train length, and fabric weight.
              </p>
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 3: YOUR VISION
            ======================================================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Reassuring Note */}
            <div className="p-4 bg-[#FAF7F0] border border-[#EAE4D9] flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-700 font-light italic leading-relaxed">
                “You don't need to have every detail decided. Your consultation is where the vision begins.”
              </p>
            </div>

            {/* Silhouette Selections */}
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-2">
                Select One or More Silhouette Inspirations *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SILHOUETTE_OPTIONS.map((item) => {
                  const isSelected = formData.inspirationSilhouettes.includes(item.id);
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleSilhouette(item.id)}
                      className={`p-3.5 text-left border transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'border-[#C59B3F] bg-[#FAF6EE] shadow-xs'
                          : 'border-[#E2DBD0] bg-white hover:border-neutral-400'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 mt-0.5 rounded-xs border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#C59B3F] border-[#C59B3F] text-white' : 'border-neutral-400'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-neutral-900">{item.label}</div>
                        <div className="text-[11px] text-neutral-500 font-light mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.inspirationSilhouettes && (
                <p className="text-[11px] text-red-600 mt-1.5">{errors.inspirationSilhouettes}</p>
              )}
            </div>

            {/* Optional Design Preferences */}
            <div className="pt-2 border-t border-[#EAE4D9] space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-800 block">
                Optional Design Preferences (Select Any of Interest)
              </span>

              {PREFERENCE_CATEGORIES.map((cat, catIdx) => (
                <div key={catIdx} className="space-y-2">
                  <span className="text-[11px] text-neutral-500 font-medium tracking-wider uppercase block">
                    {cat.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.options.map((opt) => {
                      const isSelected = formData.designPreferences.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => togglePreference(opt)}
                          className={`px-3 py-1.5 text-[11px] border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#C59B3F] bg-[#FAF6EE] text-[#856122] font-medium'
                              : 'border-[#E0D8CA] bg-white text-neutral-600 hover:border-neutral-400'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 4: TELL US MORE
            ======================================================= */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <label htmlFor="bespoke-notes" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                Tell Us About The Gown You Imagine
              </label>
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-3">
                Describe the atmosphere of your wedding, silhouettes you have felt drawn to, details you adore (or wish to avoid), or the mood you wish to embody.
              </p>
              <textarea
                id="bespoke-notes"
                rows={5}
                placeholder="e.g. I envision a romantic gown with train drama, delicate beadwork on sheer illusion shoulders, and a clean structured skirt for my celebration..."
                value={formData.visionNotes || ''}
                onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#D5CDBF] text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 5: INSPIRATION UPLOAD (OPTIONAL)
            ======================================================= */}
        {currentStep === 5 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                Visual Inspiration & Moodboard (Optional)
              </span>
              <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                Have sketches, photos, textures, or moodboard screenshots you love? You may select preview images below to prepare your consultation profile.
              </p>
            </div>

            {/* Upload Zone */}
            <div className="border-2 border-dashed border-[#D5CDBF] bg-[#FAF7F0] p-8 text-center hover:border-[#C59B3F] transition-colors relative">
              <input
                id="bespoke-file-input"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Upload inspiration images"
              />
              <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C59B3F] shadow-xs">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-xs font-medium text-neutral-900">
                  Click to select images or drag and drop
                </div>
                <div className="text-[11px] text-neutral-500 font-light">
                  PNG, JPG, or WEBP (Optional visual reference)
                </div>
              </div>
            </div>

            {/* Preview Cards */}
            {formData.inspirationFiles && formData.inspirationFiles.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-semibold text-neutral-700 uppercase tracking-wider block">
                  Selected Reference Previews ({formData.inspirationFiles.length})
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.inspirationFiles.map((file, fIdx) => (
                    <div key={fIdx} className="relative group bg-white border border-[#E0D8CA] p-1 shadow-xs">
                      <div className="aspect-square overflow-hidden bg-neutral-100">
                        <img
                          src={file.previewUrl}
                          alt={`Inspiration preview ${fIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-1.5 text-[10px] text-neutral-600 truncate font-light">
                        {file.name}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(fIdx)}
                        aria-label={`Remove ${file.name}`}
                        className="absolute top-2 right-2 p-1 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clear, honest technical notice regarding storage */}
            <div className="p-3.5 bg-white border border-[#EAE4D9] text-[11px] text-neutral-500 font-light leading-relaxed">
              <span className="font-medium text-neutral-700">Note:</span> Uploaded references are loaded for your local session preview. File uploads are completely optional, and you can also share your inspiration photographs and references directly during your bespoke consultation dialogue.
            </div>
          </div>
        )}

        {/* =======================================================
            STEP 6: REVIEW
            ======================================================= */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-800 block mb-1">
                Review Your Bespoke Enquiry
              </span>
              <p className="text-xs text-neutral-600 font-light">
                Please verify your details before submitting your enquiry. You may return to any step to make refinements.
              </p>
            </div>

            <div className="bg-white border border-[#EAE4D9] divide-y divide-[#EAE4D9] text-xs">
              
              {/* Step 1 Review */}
              <div className="p-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                    Contact & Location
                  </span>
                  <div className="font-medium text-neutral-900 mt-1">{formData.fullName}</div>
                  <div className="text-neutral-600">{formData.email} • {formData.phone}</div>
                  <div className="text-neutral-600">{formData.city}, {formData.country}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-[11px] text-[#C59B3F] hover:text-[#856122] font-semibold underline cursor-pointer shrink-0"
                >
                  Edit
                </button>
              </div>

              {/* Step 2 Review */}
              <div className="p-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                    Celebration Timing
                  </span>
                  <div className="font-medium text-neutral-900 mt-1">Date: {formData.weddingDate}</div>
                  {formData.weddingLocation && (
                    <div className="text-neutral-600">Location: {formData.weddingLocation}</div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-[11px] text-[#C59B3F] hover:text-[#856122] font-semibold underline cursor-pointer shrink-0"
                >
                  Edit
                </button>
              </div>

              {/* Step 3 Review */}
              <div className="p-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                    Silhouettes & Preferences
                  </span>
                  <div className="font-medium text-neutral-900 mt-1 capitalize">
                    {formData.inspirationSilhouettes.join(', ')}
                  </div>
                  {formData.designPreferences.length > 0 && (
                    <div className="text-neutral-600 mt-1">
                      Preferences: {formData.designPreferences.join(' • ')}
                    </div>
                  )}
                  {formData.preselectedGownInspiration && (
                    <div className="text-[#856122] mt-1 font-serif italic">
                      Inspiration Gown Reference: {formData.preselectedGownInspiration}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="text-[11px] text-[#C59B3F] hover:text-[#856122] font-semibold underline cursor-pointer shrink-0"
                >
                  Edit
                </button>
              </div>

              {/* Step 4 Review */}
              <div className="p-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                    Gown Vision Notes
                  </span>
                  <p className="text-neutral-700 mt-1 leading-relaxed italic">
                    {formData.visionNotes ? `“${formData.visionNotes}”` : 'No written notes provided'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="text-[11px] text-[#C59B3F] hover:text-[#856122] font-semibold underline cursor-pointer shrink-0"
                >
                  Edit
                </button>
              </div>

              {/* Step 5 Review */}
              <div className="p-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase block">
                    Visual References
                  </span>
                  <div className="text-neutral-700 mt-1">
                    {formData.inspirationFiles && formData.inspirationFiles.length > 0
                      ? `${formData.inspirationFiles.length} visual moodboard preview(s) prepared`
                      : 'None attached (consultation dialogue welcomed)'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(5)}
                  className="text-[11px] text-[#C59B3F] hover:text-[#856122] font-semibold underline cursor-pointer shrink-0"
                >
                  Edit
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Navigation & Action Buttons */}
        <div className="pt-6 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center justify-center gap-2 border border-[#D5CDBF] text-neutral-800 hover:bg-[#FAF7F0] px-6 py-3 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>PREVIOUS</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-sm cursor-pointer min-h-[44px]"
            >
              <span>CONTINUE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#262420] text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-md border border-[#C59B3F]/60 cursor-pointer min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-[#C59B3F]" />
              <span>SUBMIT BESPOKE ENQUIRY</span>
            </button>
          )}
        </div>

      </form>
    </div>
  );
};
