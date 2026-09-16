import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Star, 
  Upload, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Info, 
  Trash2, 
  RefreshCw,
  MessageCircle,
  Mail
} from 'lucide-react';
import { TestimonialServiceType } from '../types';

interface ShareExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

const SERVICE_OPTIONS: { value: TestimonialServiceType; label: string }[] = [
  { value: 'bridal-collection', label: 'Bridal Collection / Gown' },
  { value: 'gown-rental', label: 'Gown Rental' },
  { value: 'bridal-consultation', label: 'Bridal Consultation' },
  { value: 'fitting-appointment', label: 'Fitting / Appointment' },
  { value: 'other', label: 'Other BEAJAY Experience' }
];

export const ShareExperienceModal: React.FC<ShareExperienceModalProps> = ({
  isOpen,
  onClose,
  onOpenContact
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceUsed, setServiceUsed] = useState<TestimonialServiceType>('bridal-collection');
  const [experienceText, setExperienceText] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [consentToPublish, setConsentToPublish] = useState(false);

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isReadyToSubmitState, setIsReadyToSubmitState] = useState(false);

  // Clean up object URLs to prevent browser memory leaks
  useEffect(() => {
    return () => {
      if (photoPreviewUrl) {
        URL.revokeObjectURL(photoPreviewUrl);
      }
    };
  }, [photoPreviewUrl]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFullName('');
      setEmail('');
      setServiceUsed('bridal-collection');
      setExperienceText('');
      setRating(0);
      setHoverRating(0);
      setPhotoFile(null);
      if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
      setPhotoPreviewUrl(null);
      setConsentToPublish(false);
      setErrors({});
      setIsReadyToSubmitState(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate image format
    const validFormats = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validFormats.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        photo: 'Please select a valid JPG, PNG, or WebP photograph.'
      }));
      return;
    }

    // Limit client-side preview to 10MB
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        photo: 'Photo size should be under 10MB.'
      }));
      return;
    }

    if (photoPreviewUrl) {
      URL.revokeObjectURL(photoPreviewUrl);
    }

    setPhotoFile(file);
    setPhotoPreviewUrl(URL.createObjectURL(file));
    setErrors((prev) => {
      const rest = { ...prev };
      delete rest.photo;
      return rest;
    });
  };

  const handleRemovePhoto = () => {
    if (photoPreviewUrl) {
      URL.revokeObjectURL(photoPreviewUrl);
    }
    setPhotoFile(null);
    setPhotoPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!experienceText.trim() || experienceText.trim().length < 20) {
      newErrors.experienceText = 'Please share at least 20 characters about your bridal experience.';
    }

    if (experienceText.trim().length > 1000) {
      newErrors.experienceText = 'Experience description should not exceed 1,000 characters.';
    }

    if (!consentToPublish) {
      newErrors.consent = 'Your consent is required to submit a testimonial for publication.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Frontend-only submission behavior:
    // We do NOT pretend it's saved in a database, nor do we store it in localStorage.
    // We transition to the transparent notice explaining that online submission
    // will be available soon with backend deployment, while offering direct channels.
    setIsReadyToSubmitState(true);
  };

  return (
    <div 
      id="share-experience-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-experience-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#141312] border border-white/15 text-white my-8 shadow-2xl overflow-hidden focus:outline-none"
      >
        {/* Top Gold Border Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C59B3F] to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#C59B3F] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span>BEAJAY COUTURE BRIDAL</span>
            </div>
            <h2 
              id="share-experience-title"
              className="font-serif text-2xl sm:text-3xl font-light text-white"
            >
              Share Your Experience
            </h2>
          </div>

          <button
            id="close-share-experience-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isReadyToSubmitState ? (
            /* Transparent Temporary State (Frontend-Only Checkpoint) */
            <div className="py-6 sm:py-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-[#C59B3F]/15 border border-[#C59B3F]/40 flex items-center justify-center text-[#E6C875]">
                <Info className="w-8 h-8" aria-hidden="true" />
              </div>

              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="font-serif text-2xl font-light text-white">
                  Online testimonial submission will be available soon.
                </h3>
                <p className="text-sm text-[#D1CCC2] font-light leading-relaxed">
                  Thank you for preparing your wedding reflection for <strong className="font-medium text-white">BEAJAY COUTURE BRIDAL</strong>. 
                  Our client review and verification portal is currently undergoing scheduled backend integration.
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  In the meantime, if you would love to share your bridal photos or wedding story directly with the team, 
                  we welcome your message via WhatsApp or our Contact enquiry form.
                </p>
              </div>

              {/* Direct Alternative Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href="https://wa.me/2348000000000?text=Hello%20BEAJAY%20Couture%20Bridal%2C%20I%20would%20love%20to%20share%20my%20bridal%20experience%20and%20photos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer min-h-[44px] w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Message on WhatsApp</span>
                </a>

                {onOpenContact && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#EFECE5] border border-white/20 px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer min-h-[44px] w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Contact Studio</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-neutral-400 hover:text-white uppercase transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          ) : (
            /* Testimonial Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Informational Sub-header */}
              <p className="text-xs sm:text-sm text-[#CDC7BC] font-light leading-relaxed">
                Whether you selected a gown from our collection, enjoyed a rental, or attended a fitting session in Enugu, 
                we invite you to share your genuine thoughts.
              </p>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label 
                    htmlFor="testimonial-full-name"
                    className="block text-xs font-medium tracking-wider text-neutral-300 uppercase mb-2"
                  >
                    Full Name <span className="text-[#C59B3F]">*</span>
                  </label>
                  <input
                    id="testimonial-full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Adaobi N."
                    className={`w-full bg-[#1C1B1A] border px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.fullName 
                        ? 'border-red-500/80 focus:border-red-500' 
                        : 'border-white/15 focus:border-[#C59B3F]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="testimonial-email"
                    className="block text-xs font-medium tracking-wider text-neutral-300 uppercase mb-2"
                  >
                    Email Address <span className="text-[#C59B3F]">*</span>
                  </label>
                  <input
                    id="testimonial-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., bride@example.com"
                    className={`w-full bg-[#1C1B1A] border px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.email 
                        ? 'border-red-500/80 focus:border-red-500' 
                        : 'border-white/15 focus:border-[#C59B3F]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Service Used */}
              <div>
                <label 
                  htmlFor="testimonial-service-used"
                  className="block text-xs font-medium tracking-wider text-neutral-300 uppercase mb-2"
                >
                  Service Used <span className="text-[#C59B3F]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="testimonial-service-used"
                    value={serviceUsed}
                    onChange={(e) => setServiceUsed(e.target.value as TestimonialServiceType)}
                    className="w-full bg-[#1C1B1A] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C59B3F] transition-colors appearance-none cursor-pointer"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#1C1B1A] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 3: Rating (Accessible Keyboard-Interactive Selector) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label 
                    id="rating-label"
                    className="block text-xs font-medium tracking-wider text-neutral-300 uppercase"
                  >
                    Rating <span className="text-neutral-500 font-light normal-case">(Optional)</span>
                  </label>
                  <span className="text-xs text-[#E6C875]">
                    {rating > 0 ? `${rating} of 5 Stars` : 'Unrated'}
                  </span>
                </div>

                <div 
                  role="radiogroup" 
                  aria-labelledby="rating-label"
                  className="flex items-center gap-2"
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((starValue) => {
                    const isFilled = (hoverRating || rating) >= starValue;
                    return (
                      <button
                        key={starValue}
                        type="button"
                        role="radio"
                        aria-checked={rating === starValue}
                        aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
                        onClick={() => setRating(rating === starValue ? 0 : starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onFocus={() => setHoverRating(starValue)}
                        onBlur={() => setHoverRating(0)}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                            e.preventDefault();
                            setRating(Math.min(5, (rating || 0) + 1));
                          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                            e.preventDefault();
                            setRating(Math.max(1, (rating || 1) - 1));
                          }
                        }}
                        className="p-1 text-neutral-500 hover:text-[#C59B3F] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B3F] transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                      >
                        <Star 
                          className={`w-6 h-6 transition-transform hover:scale-110 ${
                            isFilled 
                              ? 'text-[#C59B3F] fill-[#C59B3F]' 
                              : 'text-neutral-600'
                          }`} 
                          aria-hidden="true" 
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Experience Textarea */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label 
                    htmlFor="testimonial-experience-text"
                    className="block text-xs font-medium tracking-wider text-neutral-300 uppercase"
                  >
                    Tell us about your experience <span className="text-[#C59B3F]">*</span>
                  </label>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    {experienceText.length} / 1000
                  </span>
                </div>

                <textarea
                  id="testimonial-experience-text"
                  rows={4}
                  value={experienceText}
                  onChange={(e) => setExperienceText(e.target.value)}
                  placeholder="Share details about your gown fitting, rental experience, or wedding day reflection..."
                  className={`w-full bg-[#1C1B1A] border p-4 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                    errors.experienceText 
                      ? 'border-red-500/80 focus:border-red-500' 
                      : 'border-white/15 focus:border-[#C59B3F]'
                  }`}
                />
                {errors.experienceText && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.experienceText}
                  </p>
                )}
              </div>

              {/* Row 5: Optional Bridal Photo Upload */}
              <div>
                <label className="block text-xs font-medium tracking-wider text-neutral-300 uppercase mb-2">
                  Bridal Photograph <span className="text-neutral-500 font-light normal-case">(Optional)</span>
                </label>

                {photoPreviewUrl ? (
                  /* Photo Preview Card */
                  <div className="flex items-center gap-4 p-3.5 bg-[#1C1B1A] border border-white/15">
                    <img
                      src={photoPreviewUrl}
                      alt="Bridal photo preview"
                      className="w-16 h-16 object-cover border border-[#C59B3F]/40 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">
                        {photoFile?.name}
                      </p>
                      <p className="text-[11px] text-neutral-400">
                        {photoFile ? `${(photoFile.size / 1024).toFixed(0)} KB` : ''} • Image ready for review
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        title="Change photo"
                        aria-label="Change photo"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleRemovePhoto}
                        className="p-2 text-neutral-400 hover:text-red-400 hover:bg-white/10 transition-colors cursor-pointer"
                        title="Remove photo"
                        aria-label="Remove photo"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Drag & Drop / Click Upload Area */
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-dashed border-white/20 hover:border-[#C59B3F]/70 bg-[#1C1B1A]/60 hover:bg-[#1C1B1A] p-6 text-center cursor-pointer transition-all duration-200"
                  >
                    <Upload className="w-6 h-6 mx-auto text-[#C59B3F] mb-2" aria-hidden="true" />
                    <p className="text-xs font-medium text-white mb-1">
                      Upload a bridal photograph
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      JPG, PNG, or WebP up to 10MB
                    </p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  id="testimonial-photo-input"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handlePhotoSelect}
                  className="hidden"
                  aria-label="Upload bridal photograph"
                />

                {errors.photo && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.photo}
                  </p>
                )}
              </div>

              {/* Row 6: Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                    <input
                      id="testimonial-consent-checkbox"
                      type="checkbox"
                      checked={consentToPublish}
                      onChange={(e) => setConsentToPublish(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-4 h-4 border border-white/30 peer-checked:border-[#C59B3F] peer-checked:bg-[#C59B3F] transition-colors flex items-center justify-center">
                      <Check className={`w-3 h-3 text-black ${consentToPublish ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  </div>
                  <span className="text-xs text-[#CDC7BC] leading-relaxed select-none">
                    I give <strong className="text-white font-medium">BEAJAY COUTURE BRIDAL</strong> permission to publish my testimonial and submitted photo on its website and promotional channels.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Moderation Notice */}
              <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-2.5 text-neutral-300">
                <Info className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[11px] font-light leading-relaxed">
                  <strong>Notice:</strong> Testimonials are reviewed before they appear publicly. Submissions are not automatically published.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 border border-white/20 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white hover:border-white/40 uppercase transition-colors cursor-pointer min-h-[44px]"
                >
                  Cancel
                </button>

                <button
                  id="submit-testimonial-btn"
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 shadow-xl hover:shadow-[#C59B3F]/25 cursor-pointer min-h-[44px]"
                >
                  Submit for Review
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
