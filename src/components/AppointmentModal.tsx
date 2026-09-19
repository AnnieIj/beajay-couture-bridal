import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Info, 
  Mail, 
  Layers
} from 'lucide-react';
import { BookingFormData, AppointmentServiceType } from '../types';
import { buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGown?: string;
  defaultService?: AppointmentServiceType;
  onOpenContact?: () => void;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedGown,
  defaultService = 'bridal-consultation',
  onOpenContact
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    weddingDate: '',
    serviceType: defaultService,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 12:00 PM)',
    notes: '',
    silhouetteInterest: [],
    interestedGown: preselectedGown || undefined
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTemporaryState, setShowTemporaryState] = useState(false);

  // Synchronize state when modal opens or props change
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      setShowTemporaryState(false);
      setIsSubmitting(false);
      setErrors({});
      setTouched({});
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        weddingDate: '',
        serviceType: defaultService || 'bridal-consultation',
        preferredDate: '',
        preferredTime: 'Morning (10:00 AM – 12:00 PM)',
        notes: '',
        silhouetteInterest: [],
        interestedGown: preselectedGown || undefined
      });

      // Lock body scroll
      document.body.style.overflow = 'hidden';

      // Focus modal on mount
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, defaultService, preselectedGown]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Established silhouettes for optional interest
  const silhouettes = [
    'Ball Gown',
    'Mermaid',
    'A-Line',
    'Sheath',
    'Reception Dresses',
    'Veils & Accessories'
  ];

  // Authentic BEAJAY services
  const appointmentServices: { id: AppointmentServiceType; label: string; description: string }[] = [
    { 
      id: 'bridal-consultation', 
      label: 'Bridal Consultation', 
      description: 'Private styling consultation & try-on guidance.' 
    },
    { 
      id: 'gown-viewing', 
      label: 'Gown Viewing', 
      description: 'In-person viewing of collection pieces.' 
    },
    { 
      id: 'rental-fitting', 
      label: 'Rental Fitting', 
      description: 'Fit check & sizing for collection gown rental.' 
    },
    { 
      id: 'fitting-appointment', 
      label: 'Fitting / Appointment', 
      description: 'Gown fitting session and measurements.' 
    }
  ];

  // Neutral preferred-time options (preferences only; no fake availability claims)
  const timePreferences = [
    'Morning (10:00 AM – 12:00 PM)',
    'Midday (12:00 PM – 2:00 PM)',
    'Early Afternoon (2:00 PM – 4:00 PM)',
    'Late Afternoon (4:00 PM – 6:00 PM)',
    'Flexible / Any Available Time'
  ];

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Please enter at least 2 characters';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Phone / WhatsApp number is required';
        if (value.trim().length < 7) return 'Please enter a valid phone number';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        return undefined;
      case 'preferredDate':
        if (!value) return 'Preferred date is required';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field] || '');
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof BookingFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field as string, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const toggleSilhouette = (sil: string) => {
    setFormData((prev) => ({
      ...prev,
      silhouetteInterest: prev.silhouetteInterest.includes(sil)
        ? prev.silhouetteInterest.filter((s) => s !== sil)
        : [...prev.silhouetteInterest, sil]
    }));
  };

  const clearInterestedGown = () => {
    setFormData((prev) => ({ ...prev, interestedGown: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors: FormErrors = {};
    const nameErr = validateField('fullName', formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const dateErr = validateField('preferredDate', formData.preferredDate);
    if (dateErr) newErrors.preferredDate = dateErr;

    setErrors(newErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      preferredDate: true
    });

    if (Object.keys(newErrors).length > 0) {
      // Scroll modal to top to view errors
      modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Frontend-only submission handling: simulate request processing then show transparent status
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowTemporaryState(true);
    }, 450);
  };

  // Today's date in YYYY-MM-DD for min date constraint
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#DCD5C5] text-[#141312] my-6 sm:my-8 shadow-2xl overflow-hidden focus:outline-none"
      >
        {/* Top Gold Border Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C59B3F] to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-[#EAE3D5]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#C59B3F] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span>BEAJAY COUTURE BRIDAL</span>
            </div>
            <h2 
              id="appointment-modal-title"
              className="font-serif text-2xl sm:text-3xl font-light text-[#111111]"
            >
              Request an Appointment
            </h2>
          </div>

          <button
            id="close-appointment-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-neutral-500 hover:text-black hover:bg-black/5 transition-colors cursor-pointer rounded-full"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {showTemporaryState ? (
            /* Transparent Temporary State (Frontend-Only Checkpoint) */
            <div className="py-6 sm:py-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-[#F5EFE0] border border-[#C59B3F]/60 flex items-center justify-center text-[#C59B3F]">
                <Info className="w-8 h-8" aria-hidden="true" />
              </div>

              <div className="space-y-3 max-w-lg mx-auto">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C59B3F] uppercase block">
                  DIGITAL SCHEDULING NOTICE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                  Online appointment requests will be available soon.
                </h3>
                <p className="text-sm text-neutral-700 font-light leading-relaxed">
                  Thank you for preparing your consultation request for <strong className="font-medium text-[#111111]">BEAJAY COUTURE BRIDAL</strong> in Enugu, Nigeria. 
                  Our digital appointment scheduling system is currently undergoing scheduled backend integration.
                </p>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  In the meantime, our team welcomes your consultation or fitting enquiry directly through our Contact studio form.
                </p>
              </div>

              {/* Direct Alternative Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={buildWhatsAppUrl({ type: 'appointment' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#121A15] hover:bg-[#1A261F] text-white border border-[#25D366]/50 hover:border-[#25D366] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer min-h-[44px] w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>

                {onOpenContact && (
                  <button
                    id="appointment-temp-contact-btn"
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer min-h-[44px] w-full sm:w-auto shadow-sm"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Contact BEAJAY</span>
                  </button>
                )}

                <button
                  id="appointment-temp-close-btn"
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-neutral-600 hover:text-black border border-[#D5CDBF] hover:border-neutral-400 uppercase transition-colors cursor-pointer min-h-[44px] w-full sm:w-auto"
                >
                  <span>Close Window</span>
                </button>
              </div>

              <p className="text-[11px] text-neutral-400 font-light pt-2">
                All appointments in Enugu, Nigeria are private and personalized.
              </p>
            </div>
          ) : (
            /* Appointment Request Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              
              {/* Context: Interested Gown (Preserved when opened from gown card or detail) */}
              {formData.interestedGown && (
                <div 
                  id="appointment-interested-gown-badge"
                  className="bg-[#FAF6EE] border border-[#C59B3F]/40 p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white border border-[#C59B3F]/50 flex items-center justify-center text-[#C59B3F] shrink-0">
                      <Layers className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C59B3F] block">
                        Interested Gown
                      </span>
                      <span className="font-serif text-sm font-normal text-[#111111]">
                        {formData.interestedGown}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={clearInterestedGown}
                    aria-label="Remove interested gown"
                    className="text-[11px] text-neutral-500 hover:text-black underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label 
                  id="appointment-service-label"
                  className="block text-xs font-semibold tracking-[0.16em] uppercase text-neutral-800 mb-2.5"
                >
                  Appointment Type <span className="text-[#C59B3F]">*</span>
                </label>
                <div 
                  role="radiogroup"
                  aria-labelledby="appointment-service-label"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                >
                  {appointmentServices.map((service) => {
                    const isSelected = formData.serviceType === service.id;
                    return (
                      <button
                        type="button"
                        key={service.id}
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => handleChange('serviceType', service.id)}
                        className={`p-3.5 text-left border transition-all cursor-pointer min-h-[64px] flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#C59B3F] bg-[#FAF6EE] text-[#111111] shadow-xs ring-1 ring-[#C59B3F]'
                            : 'border-[#E2DBD0] bg-white text-neutral-600 hover:border-neutral-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#111111]">
                            {service.label}
                          </span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
                          )}
                        </div>
                        <span className="text-[11px] text-neutral-500 font-light mt-1 line-clamp-1">
                          {service.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 block pb-1 border-b border-[#EAE3D5]">
                  Bride / Client Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label 
                      htmlFor="appointment-fullName"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                    >
                      Full Name <span className="text-[#C59B3F]">*</span>
                    </label>
                    <input
                      id="appointment-fullName"
                      type="text"
                      required
                      placeholder="e.g. Somtochukwu Okoye"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      aria-invalid={touched.fullName && !!errors.fullName}
                      aria-describedby={errors.fullName ? 'appointment-fullName-err' : undefined}
                      className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                        touched.fullName && errors.fullName 
                          ? 'border-red-400 bg-red-50/20' 
                          : 'border-[#D5CDBF]'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p id="appointment-fullName-err" className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label 
                      htmlFor="appointment-phone"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                    >
                      Phone / WhatsApp Number <span className="text-[#C59B3F]">*</span>
                    </label>
                    <input
                      id="appointment-phone"
                      type="tel"
                      required
                      placeholder="e.g. +234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      aria-invalid={touched.phone && !!errors.phone}
                      aria-describedby={errors.phone ? 'appointment-phone-err' : undefined}
                      className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                        touched.phone && errors.phone 
                          ? 'border-red-400 bg-red-50/20' 
                          : 'border-[#D5CDBF]'
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p id="appointment-phone-err" className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label 
                      htmlFor="appointment-email"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                    >
                      Email Address <span className="text-[#C59B3F]">*</span>
                    </label>
                    <input
                      id="appointment-email"
                      type="email"
                      required
                      placeholder="e.g. bride@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={touched.email && !!errors.email}
                      aria-describedby={errors.email ? 'appointment-email-err' : undefined}
                      className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                        touched.email && errors.email 
                          ? 'border-red-400 bg-red-50/20' 
                          : 'border-[#D5CDBF]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p id="appointment-email-err" className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Wedding / Event Date (Optional) */}
                  <div>
                    <label 
                      htmlFor="appointment-weddingDate"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                    >
                      Wedding / Event Date <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="appointment-weddingDate"
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => handleChange('weddingDate', e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F] min-h-[44px]"
                    />
                    <span className="text-[10.5px] text-neutral-400 font-light block mt-1">
                      Helps our team anticipate your fitting timeline
                    </span>
                  </div>
                </div>
              </div>

              {/* Schedule Preference (Neutral Preference, No Fake Availability) */}
              <div className="space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 block pb-1 border-b border-[#EAE3D5]">
                  Requested Schedule
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label 
                      htmlFor="appointment-preferredDate"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                    >
                      Preferred Date <span className="text-[#C59B3F]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="appointment-preferredDate"
                        type="date"
                        required
                        min={todayStr}
                        value={formData.preferredDate}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        onBlur={() => handleBlur('preferredDate')}
                        aria-invalid={touched.preferredDate && !!errors.preferredDate}
                        aria-describedby={errors.preferredDate ? 'appointment-preferredDate-err' : undefined}
                        className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                          touched.preferredDate && errors.preferredDate 
                            ? 'border-red-400 bg-red-50/20' 
                            : 'border-[#D5CDBF]'
                        }`}
                      />
                    </div>
                    {touched.preferredDate && errors.preferredDate && (
                      <p id="appointment-preferredDate-err" className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                    <span className="text-[10.5px] text-neutral-500 font-light block mt-1">
                      Requested preference, subject to confirmation
                    </span>
                  </div>

                  {/* Preferred Time (Requested Preference Only) */}
                  <div>
                    <label 
                      htmlFor="appointment-preferredTime"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                    >
                      Preferred Time <span className="text-neutral-400 font-normal lowercase">(requested)</span>
                    </label>
                    <select
                      id="appointment-preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F] min-h-[44px]"
                    >
                      {timePreferences.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                          {timeOption}
                        </option>
                      ))}
                    </select>
                    <span className="text-[10.5px] text-neutral-500 font-light block mt-1">
                      Subject to studio schedule confirmation
                    </span>
                  </div>
                </div>
              </div>

              {/* Silhouettes of Interest (Optional) */}
              <div>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700">
                    Silhouette Interest <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                  </label>
                  <span className="text-[10.5px] text-neutral-500 font-light">
                    Select any you wish to try
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {silhouettes.map((sil) => {
                    const isSelected = formData.silhouetteInterest.includes(sil);
                    return (
                      <button
                        type="button"
                        key={sil}
                        onClick={() => toggleSilhouette(sil)}
                        className={`text-xs px-3.5 py-2 border transition-colors cursor-pointer min-h-[38px] ${
                          isSelected
                            ? 'bg-[#C59B3F] text-white border-[#C59B3F] font-medium'
                            : 'bg-white text-neutral-700 border-[#DDD5C5] hover:border-neutral-400'
                        }`}
                      >
                        {sil}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10.5px] text-neutral-500 font-light mt-1.5">
                  Helps your stylist prepare selections; specific gown availability is confirmed during your visit.
                </p>
              </div>

              {/* Notes or Vision */}
              <div>
                <label 
                  htmlFor="appointment-notes"
                  className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1"
                >
                  Bridal Vision or Special Notes <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="appointment-notes"
                  rows={3}
                  maxLength={500}
                  placeholder="Share any specific styling preferences, veil interests, ceremony details, or questions for your visit..."
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F] transition-colors resize-none"
                />
                <div className="flex justify-between items-center text-[10.5px] text-neutral-400 mt-1 font-light">
                  <span>Enugu studio address provided upon appointment confirmation</span>
                  <span>{formData.notes.length}/500</span>
                </div>
              </div>

              {/* Clear Request Nature Notice */}
              <div className="p-3.5 bg-[#FAF7F0] border border-[#E5DFD1] text-[11.5px] text-neutral-600 font-light leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="font-medium text-neutral-800">Please Note:</strong> This form submits an appointment request. 
                  All dates and times are requested preferences. Our team will contact you to confirm studio schedule availability.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 space-y-2.5">
                <button
                  id="appointment-submit-request-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px]"
                >
                  {isSubmitting ? (
                    <span>Preparing Request...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                      <span>SUBMIT APPOINTMENT REQUEST</span>
                    </>
                  )}
                </button>

                <a
                  href={buildWhatsAppUrl({ type: 'appointment' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0E1611] hover:bg-[#15231A] text-white border border-[#25D366]/40 hover:border-[#25D366] py-3.5 px-6 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer min-h-[44px]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>OR ENQUIRE VIA WHATSAPP</span>
                </a>

                <p className="text-[11px] text-center text-neutral-500 font-light pt-1">
                  No payment required today. Private appointments in Enugu, Nigeria.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
