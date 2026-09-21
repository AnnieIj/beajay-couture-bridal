import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Info, 
  Mail, 
  Layers,
  ChevronDown,
  ChevronUp,
  Clock,
  Globe,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { BookingFormData, AppointmentServiceType } from '../types';
import { BRIDAL_CONSULTATION_POLICY, buildWhatsAppUrl } from '../config/brandConfig';
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
  acknowledgedTerms?: string;
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
    consultationFormat: 'Physical',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 12:00 PM)',
    notes: '',
    silhouetteInterest: [],
    interestedGown: preselectedGown || undefined,
    acknowledgedTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentStep, setShowPaymentStep] = useState(false);
  const [showPolicyAccordion, setShowPolicyAccordion] = useState(false);

  // Synchronize state when modal opens or props change
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      setShowPaymentStep(false);
      setShowPolicyAccordion(false);
      setIsSubmitting(false);
      setErrors({});
      setTouched({});
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        weddingDate: '',
        serviceType: defaultService || 'bridal-consultation',
        consultationFormat: 'Physical',
        preferredDate: '',
        preferredTime: 'Morning (10:00 AM – 12:00 PM)',
        notes: '',
        silhouetteInterest: [],
        interestedGown: preselectedGown || undefined,
        acknowledgedTerms: false
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
  const appointmentServices: { id: AppointmentServiceType; label: string; badge?: string; description: string }[] = [
    { 
      id: 'bridal-consultation', 
      label: 'Bridal Consultation', 
      badge: '₦15,000 • Non-refundable',
      description: 'Private styling assessment, body shape & gown recommendation, budget guidance.' 
    },
    { 
      id: 'gown-viewing', 
      label: 'Gown Viewing', 
      description: 'In-person viewing of collection pieces at Enugu Studio.' 
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

  const validateField = (name: string, value: any): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value || !value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Please enter at least 2 characters';
        return undefined;
      case 'phone':
        if (!value || !value.trim()) return 'Phone / WhatsApp number is required';
        if (value.trim().length < 7) return 'Please enter a valid phone number';
        return undefined;
      case 'email':
        if (!value || !value.trim()) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        return undefined;
      case 'preferredDate':
        if (!value) return 'Preferred date is required';
        return undefined;
      case 'acknowledgedTerms':
        if (formData.serviceType === 'bridal-consultation' && !value) {
          return 'Please acknowledge the consultation fee policy to proceed';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, (formData as any)[field]);
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

    if (formData.serviceType === 'bridal-consultation') {
      const termsErr = validateField('acknowledgedTerms', formData.acknowledgedTerms);
      if (termsErr) newErrors.acknowledgedTerms = termsErr;
    }

    setErrors(newErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      preferredDate: true,
      acknowledgedTerms: true
    });

    if (Object.keys(newErrors).length > 0) {
      modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Advance to Step 2: Payment Required before scheduling
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPaymentStep(true);
      modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350);
  };

  // Today's date in YYYY-MM-DD for min date constraint
  const todayStr = new Date().toISOString().split('T')[0];

  const isConsultation = formData.serviceType === 'bridal-consultation';

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
        className="relative w-full max-w-2xl bg-[#FCFAF7] dark:bg-[#141312] border border-[#DCD5C5] dark:border-[#2E2B27] text-[#141312] dark:text-[#E8E3D8] my-6 sm:my-8 shadow-2xl overflow-hidden focus:outline-none"
      >
        {/* Top Gold Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C59B3F] to-transparent" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-5 border-b border-[#EAE3D5] dark:border-[#262420]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#C59B3F] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
              <span>BEAJAY COUTURE BRIDAL</span>
            </div>
            <h2 
              id="appointment-modal-title"
              className="font-serif text-2xl sm:text-3xl font-light text-[#111111] dark:text-white"
            >
              {showPaymentStep 
                ? (isConsultation ? 'Consultation Payment' : 'Appointment Request')
                : (isConsultation ? 'Bridal Consultation' : 'Request an Appointment')
              }
            </h2>
          </div>

          <button
            id="close-appointment-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-neutral-500 hover:text-black hover:bg-black/5 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors cursor-pointer rounded-full"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Journey Progress Bar */}
        <div className="bg-[#F5EFE4] dark:bg-[#1B1917] px-6 sm:px-8 py-2.5 border-b border-[#E7DECD] dark:border-[#262420] text-[11px] font-medium text-neutral-600 dark:text-neutral-400 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-2 shrink-0">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
              showPaymentStep 
                ? 'bg-[#2E7D32] text-white' 
                : 'bg-[#C59B3F] text-white'
            }`}>
              {showPaymentStep ? '✓' : '1'}
            </span>
            <span className={!showPaymentStep ? 'text-[#111111] dark:text-white font-semibold' : 'text-neutral-500 dark:text-neutral-400'}>
              1. Consultation Details
            </span>
          </div>
          <span className="text-neutral-400">→</span>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
              showPaymentStep 
                ? 'bg-[#C59B3F] text-white font-bold' 
                : 'bg-neutral-300 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
            }`}>
              2
            </span>
            <span className={showPaymentStep ? 'text-[#111111] dark:text-white font-semibold' : 'text-neutral-500 dark:text-neutral-400'}>
              2. ₦15,000 Fee & Payment
            </span>
          </div>
          <span className="text-neutral-400">→</span>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-5 h-5 rounded-full bg-neutral-300 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[10px]">
              3
            </span>
            <span className="text-neutral-500 dark:text-neutral-400">
              3. Schedule Confirmed
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[76vh] overflow-y-auto">
          {showPaymentStep ? (
            /* STEP 2: PAYMENT REQUIRED BEFORE SCHEDULING (HONEST FRONTEND-READY FLOW) */
            <div className="space-y-6">
              
              {/* Step Status Badge */}
              <div className="p-4 bg-[#FBF6EC] dark:bg-[#1E1B15] border border-[#C59B3F]/50 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C59B3F] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#856122] dark:text-[#E6C875] block">
                    Payment Required Prior to Scheduling
                  </span>
                  <p className="text-xs text-neutral-800 dark:text-neutral-300 leading-relaxed font-normal">
                    {isConsultation ? (
                      <>
                        The bridal consultation fee is <strong className="font-semibold text-black dark:text-white">₦15,000 (Non-Refundable)</strong>.
                        Consultation payment must be completed and verified before your appointment slot is confirmed on the studio calendar.
                      </>
                    ) : (
                      <>
                        Please note: A bridal consultation is required before gown booking or customization.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Submitted Request Summary */}
              <div className="bg-white dark:bg-[#181715] border border-[#E8E2D5] dark:border-[#2A2825] p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#F0EAE0] dark:border-[#262420] pb-3">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                    Appointment Summary
                  </span>
                  <span className="text-xs font-serif text-[#C59B3F] font-medium">
                    BEAJAY COUTURE BRIDAL
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Client Name</span>
                    <span className="font-medium text-[#111111] dark:text-white">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Phone / WhatsApp</span>
                    <span className="font-medium text-[#111111] dark:text-white">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Email</span>
                    <span className="font-medium text-[#111111] dark:text-white">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Service</span>
                    <span className="font-medium text-[#111111] dark:text-white">
                      {appointmentServices.find(s => s.id === formData.serviceType)?.label || formData.serviceType}
                    </span>
                  </div>
                  {isConsultation && (
                    <div>
                      <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Consultation Format</span>
                      <span className="font-medium text-[#111111] dark:text-white">
                        {formData.consultationFormat === 'Virtual' ? 'Virtual (Online Styling)' : 'Physical (Enugu Studio Visit)'}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Requested Date & Time</span>
                    <span className="font-medium text-[#111111] dark:text-white">
                      {formData.preferredDate} • {formData.preferredTime}
                    </span>
                  </div>
                  {formData.interestedGown && (
                    <div className="sm:col-span-2">
                      <span className="text-neutral-500 dark:text-neutral-400 block text-[10.5px] uppercase tracking-wider">Interested Gown</span>
                      <span className="font-medium text-[#111111] dark:text-white">{formData.interestedGown}</span>
                    </div>
                  )}
                </div>

                {isConsultation && (
                  <div className="mt-3 pt-3 border-t border-[#F0EAE0] dark:border-[#262420] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-[#FAF7F2] dark:bg-[#201E1B] p-3 border border-[#EFE8DA] dark:border-[#2A2825]">
                    <div>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 block">
                        Consultation Fee
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-xl font-normal text-[#111111] dark:text-white">
                          ₦15,000
                        </span>
                        <span className="text-[10.5px] text-neutral-600 dark:text-neutral-400">
                          (Non-Refundable • Fixed)
                        </span>
                      </div>
                      <span className="text-[10.5px] text-[#856122] dark:text-[#E6C875] font-medium block">
                        $20 USDC consultation fee available for international clients
                      </span>
                    </div>
                    <div className="text-left sm:text-right text-[11px] text-[#2E7D32] bg-white dark:bg-[#151413] px-2.5 py-1 border border-[#D5E5D5] dark:border-[#1E3B20]">
                      <span className="font-medium">₦10,000 credited</span> toward total upon gown booking
                    </div>
                  </div>
                )}
              </div>

              {/* Honest Notice as required by Owner */}
              <div className="p-4 bg-[#F5F2EB] dark:bg-[#1E1D1A] border border-[#E0D7C6] dark:border-[#2E2B27] space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center gap-2 font-semibold text-[#111111] dark:text-white uppercase tracking-wider text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C59B3F]" />
                  <span>Next Step: Complete Payment & Confirm Booking</span>
                </div>
                <p>
                  <strong className="text-[#111111] dark:text-white">Online consultation payment is being prepared.</strong> You can contact BEAJAY to continue your consultation booking.
                </p>
                <p className="text-[11.5px] text-neutral-600 dark:text-neutral-400 font-light">
                  Our studio team in Enugu, Nigeria will receive your details, verify your ₦15,000 fee ($20 USDC for international clients), and confirm your reserved consultation date and time.
                </p>
              </div>

              {/* Direct Actions */}
              <div className="space-y-3 pt-2">
                <a
                  id="appointment-whatsapp-pay-btn"
                  href={buildWhatsAppUrl({ 
                    type: 'appointment', 
                    isConsultation: true, 
                    clientName: formData.fullName, 
                    preferredDate: formData.preferredDate,
                    format: formData.consultationFormat,
                    interestedGown: formData.interestedGown
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#121A15] dark:bg-[#121E17] hover:bg-[#1A261F] text-white border border-[#25D366]/50 hover:border-[#25D366] py-4 px-6 text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-lg cursor-pointer min-h-[48px]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>CONTINUE VIA WHATSAPP (+234 911 702 8264)</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {onOpenContact && (
                    <button
                      id="appointment-contact-btn"
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenContact();
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3 px-4 text-xs font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer min-h-[44px]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact BEAJAY Studio</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPaymentStep(false)}
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1C1B19] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-[#D5CDBF] dark:border-[#33302B] hover:border-neutral-400 dark:hover:border-neutral-500 py-3 px-4 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer min-h-[44px]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Modify Request Details</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>

              <div className="text-[10.5px] text-center text-neutral-400 font-light pt-1">
                Studio visits are held in Enugu, Nigeria. Virtual styling consultations are conducted via video appointment.
              </div>
            </div>
          ) : (
            /* STEP 1: CONSULTATION DETAILS & REQUEST FORM */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Context: Interested Gown (Preserved when opened from gown card or detail) */}
              {formData.interestedGown && (
                <div 
                  id="appointment-interested-gown-badge"
                  className="bg-[#FAF6EE] dark:bg-[#1E1B15] border border-[#C59B3F]/40 p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white dark:bg-[#151413] border border-[#C59B3F]/50 flex items-center justify-center text-[#C59B3F] shrink-0">
                      <Layers className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C59B3F] block">
                        Interested Gown
                      </span>
                      <span className="font-serif text-sm font-normal text-[#111111] dark:text-white">
                        {formData.interestedGown}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={clearInterestedGown}
                    aria-label="Remove interested gown"
                    className="text-[11px] text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label 
                  id="appointment-service-label"
                  className="block text-xs font-semibold tracking-[0.16em] uppercase text-neutral-800 dark:text-neutral-200 mb-2.5"
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
                        className={`p-3.5 text-left border transition-all cursor-pointer min-h-[72px] flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#C59B3F] bg-[#FAF6EE] dark:bg-[#252015] text-[#111111] dark:text-white shadow-xs ring-1 ring-[#C59B3F]'
                            : 'border-[#E2DBD0] dark:border-[#2C2925] bg-white dark:bg-[#181716] text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#111111] dark:text-white">
                            {service.label}
                          </span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-[#C59B3F]" aria-hidden="true" />
                          )}
                        </div>
                        {service.badge && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#856122] dark:text-[#E6C875] mt-0.5">
                            {service.badge}
                          </span>
                        )}
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light mt-1 line-clamp-2">
                          {service.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dedicated Bridal Consultation Policy Card */}
              {isConsultation ? (
                <div className="bg-[#FAF7F0] dark:bg-[#1A1816] border border-[#E5DEC9] dark:border-[#2A2825] p-4 sm:p-5 space-y-4">
                  {/* Fee & Duration Summary Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DFCE] dark:border-[#2A2825] pb-3.5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C59B3F] block">
                        CONFIRMED POLICY
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="font-serif text-2xl sm:text-3xl font-light text-[#111111] dark:text-white">
                          ₦15,000
                        </span>
                        <span className="text-xs font-semibold text-[#A63A2B] dark:text-[#E57373] uppercase tracking-wider">
                          Non-Refundable
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-neutral-600 dark:text-neutral-400 mt-1 font-light">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C59B3F]" />
                          <span>45 minutes – 1 hour</span>
                        </span>
                        <span>•</span>
                        <span>Virtual or Physical</span>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-block bg-white dark:bg-[#22201D] text-[#856122] dark:text-[#E6C875] text-[10.5px] font-medium px-2.5 py-1 border border-[#E0D5BE] dark:border-[#33302B]">
                        USDC payment option available for international clients: <strong>$20 USDC</strong>
                      </span>
                    </div>
                  </div>

                  {/* Consultation Format Selector (Virtual vs Physical) */}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-2">
                      Consultation Format <span className="text-[#C59B3F]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleChange('consultationFormat', 'Physical')}
                        className={`p-2.5 text-left border text-xs flex items-center gap-2.5 cursor-pointer transition-colors ${
                          formData.consultationFormat === 'Physical'
                            ? 'bg-white dark:bg-[#252015] border-[#C59B3F] ring-1 ring-[#C59B3F] font-medium text-[#111111] dark:text-white'
                            : 'bg-white/60 dark:bg-[#181716] border-[#D5CDBF] dark:border-[#2C2925] text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" />
                        <div>
                          <span className="block font-medium">Physical Studio Visit</span>
                          <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-light">In Enugu, Nigeria</span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleChange('consultationFormat', 'Virtual')}
                        className={`p-2.5 text-left border text-xs flex items-center gap-2.5 cursor-pointer transition-colors ${
                          formData.consultationFormat === 'Virtual'
                            ? 'bg-white dark:bg-[#252015] border-[#C59B3F] ring-1 ring-[#C59B3F] font-medium text-[#111111] dark:text-white'
                            : 'bg-white/60 dark:bg-[#181716] border-[#D5CDBF] dark:border-[#2C2925] text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600'
                        }`}
                      >
                        <Globe className="w-3.5 h-3.5 text-[#C59B3F] shrink-0" />
                        <div>
                          <span className="block font-medium">Virtual Styling Session</span>
                          <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-light">Worldwide via Video Call</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Benefit Callout: ₦10,000 Deductible */}
                  <div className="bg-white dark:bg-[#181716] p-3 border border-[#E0D7C2] dark:border-[#2A2825] text-xs flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                      <strong className="font-semibold text-neutral-900 dark:text-white">Gown Booking Benefit:</strong> If you proceed to book a gown or bridal package, <strong className="font-semibold text-[#2E7D32]">₦10,000 from the consultation fee is deducted</strong> from your total payment.
                    </p>
                  </div>

                  {/* What the Consultation Covers */}
                  <div className="space-y-1.5">
                    <span className="text-[10.5px] uppercase font-semibold tracking-wider text-neutral-600 dark:text-neutral-400 block">
                      The Bridal Consultation Covers:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-700 dark:text-neutral-300 font-light">
                      {BRIDAL_CONSULTATION_POLICY.coverage.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Terms Area */}
                  <div className="border-t border-[#E8DFCE] dark:border-[#2A2825] pt-2.5">
                    <button
                      type="button"
                      onClick={() => setShowPolicyAccordion(!showPolicyAccordion)}
                      className="w-full flex items-center justify-between text-[11px] font-medium text-[#856122] dark:text-[#E6C875] hover:text-[#5E4416] dark:hover:text-[#F3D78A] py-1 cursor-pointer"
                    >
                      <span className="uppercase tracking-wider">
                        {showPolicyAccordion ? 'Hide Consultation Policy Terms' : 'View Full Consultation Policy Terms'}
                      </span>
                      {showPolicyAccordion ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {showPolicyAccordion && (
                      <div className="mt-2.5 pt-2.5 border-t border-[#EDE5D5] dark:border-[#2A2825] space-y-2 text-[11px] text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                        <ul className="space-y-1.5 list-disc list-inside">
                          {BRIDAL_CONSULTATION_POLICY.terms.map((term, i) => (
                            <li key={i} className="text-neutral-700 dark:text-neutral-300">
                              {term}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Note for Other Services: Consultation required before gown booking */
                <div className="p-3.5 bg-[#FAF7F0] dark:bg-[#1A1816] border border-[#E5DFD1] dark:border-[#2A2825] text-[11.5px] text-neutral-700 dark:text-neutral-300 font-light leading-relaxed flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-neutral-900 dark:text-white">Bridal Policy:</strong> A bridal consultation (₦15,000 fixed fee, non-refundable) is required before gown booking or customization. ₦10,000 from the fee is deducted upon gown booking.
                  </span>
                </div>
              )}

              {/* Client Information Fields */}
              <div className="space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-400 block pb-1 border-b border-[#EAE3D5] dark:border-[#2A2825]">
                  Bride / Client Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label 
                      htmlFor="appointment-fullName"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
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
                      className={`w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                        touched.fullName && errors.fullName 
                          ? 'border-red-400 bg-red-50/20' 
                          : 'border-[#D5CDBF] dark:border-[#33302B]'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p id="appointment-fullName-err" className="text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label 
                      htmlFor="appointment-phone"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
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
                      className={`w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                        touched.phone && errors.phone 
                          ? 'border-red-400 bg-red-50/20' 
                          : 'border-[#D5CDBF] dark:border-[#33302B]'
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p id="appointment-phone-err" className="text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label 
                      htmlFor="appointment-email"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
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
                      className={`w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                        touched.email && errors.email 
                          ? 'border-red-400 bg-red-50/20' 
                          : 'border-[#D5CDBF] dark:border-[#33302B]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p id="appointment-email-err" className="text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Wedding / Event Date (Optional) */}
                  <div>
                    <label 
                      htmlFor="appointment-weddingDate"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Wedding / Event Date <span className="text-neutral-400 dark:text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="appointment-weddingDate"
                      type="date"
                      value={formData.weddingDate}
                      onChange={(e) => handleChange('weddingDate', e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border border-[#D5CDBF] dark:border-[#33302B] text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-[#C59B3F] min-h-[44px]"
                    />
                    <span className="text-[10.5px] text-neutral-400 dark:text-neutral-400 font-light block mt-1">
                      Helps our team anticipate your fitting timeline
                    </span>
                  </div>
                </div>
              </div>

              {/* Schedule Preference (Neutral Preference, No Fake Availability) */}
              <div className="space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-400 block pb-1 border-b border-[#EAE3D5] dark:border-[#2A2825]">
                  Requested Schedule Preference
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label 
                      htmlFor="appointment-preferredDate"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
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
                        className={`w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-[#C59B3F] min-h-[44px] transition-colors ${
                          touched.preferredDate && errors.preferredDate 
                            ? 'border-red-400 bg-red-50/20' 
                            : 'border-[#D5CDBF] dark:border-[#33302B]'
                        }`}
                      />
                    </div>
                    {touched.preferredDate && errors.preferredDate && (
                      <p id="appointment-preferredDate-err" className="text-[11px] text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                    <span className="text-[10.5px] text-neutral-500 dark:text-neutral-400 font-light block mt-1">
                      Date preference is confirmed after consultation fee verification
                    </span>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label 
                      htmlFor="appointment-preferredTime"
                      className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Preferred Time Slot <span className="text-neutral-400 dark:text-neutral-400 font-normal lowercase">(requested)</span>
                    </label>
                    <select
                      id="appointment-preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border border-[#D5CDBF] dark:border-[#33302B] text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-[#C59B3F] min-h-[44px]"
                    >
                      {timePreferences.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                          {timeOption}
                        </option>
                      ))}
                    </select>
                    <span className="text-[10.5px] text-neutral-500 dark:text-neutral-400 font-light block mt-1">
                      Subject to studio calendar availability
                    </span>
                  </div>
                </div>
              </div>

              {/* Silhouettes of Interest (Optional) */}
              <div>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300">
                    Silhouette Interest <span className="text-neutral-400 dark:text-neutral-400 font-normal lowercase">(optional)</span>
                  </label>
                  <span className="text-[10.5px] text-neutral-500 dark:text-neutral-400 font-light">
                    Select any you wish to explore
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
                            : 'bg-white dark:bg-[#1C1B19] text-neutral-700 dark:text-neutral-300 border-[#DDD5C5] dark:border-[#33302B] hover:border-neutral-400 dark:hover:border-neutral-600'
                        }`}
                      >
                        {sil}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes or Vision */}
              <div>
                <label 
                  htmlFor="appointment-notes"
                  className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300 mb-1"
                >
                  Bridal Vision or Special Notes <span className="text-neutral-400 dark:text-neutral-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="appointment-notes"
                  rows={3}
                  maxLength={500}
                  placeholder="Share any specific styling preferences, veil interests, ceremony details, or questions for your consultation..."
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border border-[#D5CDBF] dark:border-[#33302B] text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#C59B3F] transition-colors resize-none"
                />
                <div className="flex justify-between items-center text-[10.5px] text-neutral-400 dark:text-neutral-400 mt-1 font-light">
                  <span>Enugu studio address provided upon appointment confirmation</span>
                  <span>{formData.notes.length}/500</span>
                </div>
              </div>

              {/* Policy Checkbox Acknowledgment (For Bridal Consultation) */}
              {isConsultation && (
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.acknowledgedTerms || false}
                      onChange={(e) => handleChange('acknowledgedTerms', e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#C59B3F] border-[#D5CDBF] dark:border-[#33302B] rounded-xs focus:ring-[#C59B3F] cursor-pointer"
                    />
                    <span className="text-xs text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                      I understand that the <strong className="font-semibold text-neutral-900 dark:text-white">₦15,000 consultation fee</strong> ($20 USDC for international clients) is <strong className="font-semibold text-neutral-900 dark:text-white">non-refundable</strong> and must be completed before the appointment is scheduled. ₦10,000 will be credited toward my total payment upon gown booking.
                    </span>
                  </label>
                  {touched.acknowledgedTerms && errors.acknowledgedTerms && (
                    <p className="text-[11px] text-red-600 dark:text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                      <span>{errors.acknowledgedTerms}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-3 space-y-3">
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
                      <span>
                        {isConsultation 
                          ? 'CONTINUE TO CONSULTATION PAYMENT (₦15,000)' 
                          : 'SUBMIT APPOINTMENT REQUEST'
                        }
                      </span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                <a
                  href={buildWhatsAppUrl({ 
                    type: 'appointment',
                    isConsultation: isConsultation,
                    interestedGown: formData.interestedGown
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0E1611] dark:bg-[#121E17] hover:bg-[#15231A] text-white border border-[#25D366]/40 hover:border-[#25D366] py-3.5 px-6 text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer min-h-[44px]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>OR ENQUIRE DIRECTLY VIA WHATSAPP</span>
                </a>

                <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400 font-light pt-1">
                  Payment is required before consultation date is scheduled • Private studio in Enugu, Nigeria & virtual worldwide.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
