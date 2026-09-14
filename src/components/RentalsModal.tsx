import React, { useState, useEffect, useId } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Layers,
  Sparkles,
  MapPin,
  Building,
  User,
  AlertCircle,
  Clock,
  Edit3
} from 'lucide-react';
import { GOWNS_CATALOG } from '../data/bridalData';
import { GownItem, RenterType, RentalInquiryFormData } from '../types';

interface RentalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGown?: (gown: GownItem) => void;
  initialGownName?: string;
  initialAction?: 'browse' | 'request';
  onExploreCollections?: () => void;
}

export const RentalsModal: React.FC<RentalsModalProps> = ({
  isOpen,
  onClose,
  onSelectGown,
  initialGownName,
  onExploreCollections
}) => {
  // Only gowns where rentalEligible is true
  const rentalGowns = GOWNS_CATALOG.filter(g => g.rentalEligible);

  // Steps: 1: Select Gown, 2: Renter Type, 3: Event & Dates, 4: Details, 5: Notes, 6: Review, 7: Submitted
  const [step, setStep] = useState<number>(1);

  // Selected Gown
  const [selectedGown, setSelectedGown] = useState<GownItem>(() => {
    if (initialGownName) {
      const match = rentalGowns.find(g => g.name.toLowerCase() === initialGownName.toLowerCase());
      if (match) return match;
    }
    return rentalGowns[0] || GOWNS_CATALOG[0];
  });

  // Form state
  const [formData, setFormData] = useState<RentalInquiryFormData>({
    renterType: 'individual',
    selectedGownName: initialGownName || rentalGowns[0]?.name || '',
    selectedGownId: rentalGowns[0]?.id || '',
    selectedGownCode: rentalGowns[0]?.code || '',
    eventDate: '',
    collectionDate: '',
    returnDate: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    businessName: '',
    contactPerson: '',
    businessType: '',
    socialHandle: '',
    notes: ''
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset or initialize on open
  useEffect(() => {
    if (isOpen) {
      if (initialGownName) {
        const match = rentalGowns.find(g => g.name.toLowerCase() === initialGownName.toLowerCase());
        if (match) {
          setSelectedGown(match);
          setFormData(prev => ({
            ...prev,
            selectedGownName: match.name,
            selectedGownId: match.id,
            selectedGownCode: match.code
          }));
          // If a gown is already selected when modal opens, start at step 2 or stay at step 1 for confirmation
          setStep(1);
        }
      }
      setErrors({});
    }
  }, [isOpen, initialGownName]);

  // Update selected gown in form data when selectedGown changes
  const handleGownChange = (gownId: string) => {
    const found = rentalGowns.find(g => g.id === gownId);
    if (found) {
      setSelectedGown(found);
      setFormData(prev => ({
        ...prev,
        selectedGownName: found.name,
        selectedGownId: found.id,
        selectedGownCode: found.code
      }));
      setErrors(prev => ({ ...prev, gown: '' }));
    }
  };

  if (!isOpen) return null;

  // Validation logic
  const getTodayString = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().split('T')[0];
  };

  const validateStep3 = (): boolean => {
    const newErrors: Record<string, string> = {};
    const todayStr = getTodayString();

    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your wedding / event date.';
    } else if (formData.eventDate < todayStr) {
      newErrors.eventDate = 'Event date cannot be in the past.';
    }

    if (!formData.collectionDate) {
      newErrors.collectionDate = 'Please select a preferred collection date.';
    }

    if (!formData.returnDate) {
      newErrors.returnDate = 'Please select an expected return date.';
    }

    if (formData.collectionDate && formData.returnDate) {
      if (formData.collectionDate > formData.returnDate) {
        newErrors.collectionDate = 'Collection date cannot occur after return date.';
        newErrors.returnDate = 'Return date cannot occur before collection date.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (formData.renterType === 'individual') {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp number is required.';
      if (!formData.country.trim()) newErrors.country = 'Country is required.';
      if (!formData.city.trim()) newErrors.city = 'City is required.';
    } else {
      if (!formData.businessName?.trim()) newErrors.businessName = 'Business or brand name is required.';
      if (!formData.contactPerson?.trim()) newErrors.contactPerson = 'Contact person name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp number is required.';
      if (!formData.country.trim()) newErrors.country = 'Country is required.';
      if (!formData.city.trim()) newErrors.city = 'City is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (selectedGown.availability === 'unavailable') {
        setErrors({ gown: 'This gown is currently unavailable for rental. Please select another style.' });
        return;
      }
      setErrors({});
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (validateStep3()) {
        setStep(4);
      }
    } else if (step === 4) {
      if (validateStep4()) {
        setStep(5);
      }
    } else if (step === 5) {
      setStep(6);
    } else if (step === 6) {
      // Submit
      setStep(7);
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 7) {
      setStep(prev => prev - 1);
      setErrors({});
    }
  };

  const resetForm = () => {
    setStep(1);
    setErrors({});
    setFormData({
      renterType: 'individual',
      selectedGownName: rentalGowns[0]?.name || '',
      selectedGownId: rentalGowns[0]?.id || '',
      selectedGownCode: rentalGowns[0]?.code || '',
      eventDate: '',
      collectionDate: '',
      returnDate: '',
      fullName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      businessName: '',
      contactPerson: '',
      businessType: '',
      socialHandle: '',
      notes: ''
    });
  };

  const isUnavailable = selectedGown.availability === 'unavailable';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rental-modal-title"
    >
      <div 
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-2xl lg:max-w-3xl bg-[#FCFAF7] border-0 sm:border sm:border-[#DCD5C5] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#EAE3D5] flex items-center justify-between bg-white shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] font-semibold text-[#856122] uppercase">
                BEAJAY GOWN RENTALS
              </span>
              <span className="text-neutral-300">•</span>
              <span className="text-[10px] tracking-wider text-neutral-500 uppercase">
                Enugu, Nigeria & Worldwide
              </span>
            </div>
            <h2 id="rental-modal-title" className="font-serif text-xl sm:text-2xl text-[#111111] font-normal mt-0.5">
              {step === 7 ? 'Request Received' : 'Rental Request'}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step Progress Bar (Steps 1 to 6) */}
        {step <= 6 && (
          <div className="bg-[#FAF7F0] border-b border-[#EAE4D9] px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[10.5px] font-semibold tracking-wider text-[#856122] uppercase">
                STEP {step} OF 6
              </span>
              <span className="text-neutral-300">|</span>
              <span className="text-[11px] text-neutral-700 font-medium">
                {step === 1 && 'Select Gown'}
                {step === 2 && 'Renter Type'}
                {step === 3 && 'Event & Dates'}
                {step === 4 && 'Renter Details'}
                {step === 5 && 'Additional Information'}
                {step === 6 && 'Review & Submit'}
              </span>
            </div>

            {/* Step Dots */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((s) => (
                <div 
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === step 
                      ? 'w-6 bg-[#C59B3F]' 
                      : s < step 
                      ? 'w-2 bg-[#856122]' 
                      : 'w-2 bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* =======================================================
              STEP 1: SELECT GOWN
              ======================================================= */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase">
                  STEP 1
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                  Choose Your Rental Silhouette
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Select the couture gown you wish to request for rental. All available pieces are curated from the official BEAJAY bridal collection.
                </p>
              </div>

              {/* Selected Gown Feature Card */}
              <div className="bg-white border border-[#EAE3D5] p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start shadow-xs">
                <div className="relative w-28 sm:w-32 aspect-[3/4] bg-[#F4F0E8] overflow-hidden shrink-0 border border-[#E0D8C8]">
                  <img
                    src={selectedGown.images?.[0] || selectedGown.image}
                    alt={selectedGown.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#111111]/85 text-white text-[8.5px] px-1.5 py-0.5 tracking-wider uppercase font-medium">
                    {selectedGown.code}
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#856122]">
                      {selectedGown.categoryLabel}
                    </span>
                    
                    {/* Availability Tag */}
                    <span className={`text-[9.5px] uppercase tracking-wider font-semibold px-2 py-0.5 border ${
                      selectedGown.availability === 'available'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : selectedGown.availability === 'reserved'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : selectedGown.availability === 'unavailable'
                        ? 'bg-rose-50 text-rose-800 border-rose-200'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                    }`}>
                      {selectedGown.availability === 'available'
                        ? 'Available'
                        : selectedGown.availability === 'reserved'
                        ? 'Reserved'
                        : selectedGown.availability === 'unavailable'
                        ? 'Unavailable'
                        : selectedGown.availability === 'coming-soon'
                        ? 'Coming Soon'
                        : 'Availability requires confirmation'}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl text-[#111111]">
                    {selectedGown.name}
                  </h4>

                  <p className="text-xs text-neutral-600 font-light line-clamp-2 leading-relaxed">
                    {selectedGown.description}
                  </p>

                  {selectedGown.fabric && (
                    <p className="text-[11px] text-neutral-500 font-light">
                      <strong className="font-medium text-neutral-700">Fabric:</strong> {selectedGown.fabric}
                    </p>
                  )}
                </div>
              </div>

              {/* Gown Selector Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="rental-gown-selector" className="block text-xs font-semibold tracking-wider uppercase text-neutral-800">
                  Switch to Another Rental-Eligible Gown
                </label>
                <select
                  id="rental-gown-selector"
                  value={selectedGown.id}
                  onChange={(e) => handleGownChange(e.target.value)}
                  className="w-full px-3.5 py-3 bg-white border border-[#D5CDBF] text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] transition-colors cursor-pointer"
                >
                  {rentalGowns.map(g => (
                    <option key={g.id} value={g.id}>
                      {g.code} — {g.name} ({g.categoryLabel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Unavailable warning if applicable */}
              {isUnavailable && (
                <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Gown Currently Unavailable</strong>
                    This gown is currently unavailable for rental booking. Please select another style from the dropdown to continue.
                  </div>
                </div>
              )}

              {errors.gown && (
                <p className="text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.gown}</span>
                </p>
              )}
            </div>
          )}

          {/* =======================================================
              STEP 2: RENTER TYPE
              ======================================================= */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase">
                  STEP 2
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                  I am renting as:
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Both individual brides and bridal vendors share this unified rental service. Selecting your profile ensures we gather the relevant fitting or commercial details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option A: Individual / Bride */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, renterType: 'individual' })}
                  className={`p-5 sm:p-6 text-left border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    formData.renterType === 'individual'
                      ? 'border-[#C59B3F] bg-[#FAF6EE] shadow-xs'
                      : 'border-[#E2DAD0] bg-white hover:border-[#C59B3F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#E0D7C6] flex items-center justify-center text-[#856122]">
                      <User className="w-4 h-4" />
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      formData.renterType === 'individual'
                        ? 'border-[#C59B3F] bg-[#C59B3F]'
                        : 'border-neutral-400'
                    }`}>
                      {formData.renterType === 'individual' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-base text-neutral-900 font-medium">
                      Individual / Bride
                    </h4>
                    <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
                      For brides, debutantes, or individuals renting directly for their own wedding or special occasion.
                    </p>
                  </div>
                </button>

                {/* Option B: Bridal Vendor / Business */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, renterType: 'vendor' })}
                  className={`p-5 sm:p-6 text-left border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    formData.renterType === 'vendor'
                      ? 'border-[#C59B3F] bg-[#FAF6EE] shadow-xs'
                      : 'border-[#E2DAD0] bg-white hover:border-[#C59B3F]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full bg-white border border-[#E0D7C6] flex items-center justify-center text-[#856122]">
                      <Building className="w-4 h-4" />
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      formData.renterType === 'vendor'
                        ? 'border-[#C59B3F] bg-[#C59B3F]'
                        : 'border-neutral-400'
                    }`}>
                      {formData.renterType === 'vendor' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-base text-neutral-900 font-medium">
                      Bridal Vendor / Business
                    </h4>
                    <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">
                      For professional bridal stylists, wedding planners, photo agencies, or boutiques sourcing for clients.
                    </p>
                  </div>
                </button>
              </div>

              {/* Brand statement */}
              <div className="p-3.5 bg-[#FAF7F0] border border-[#EAE4D9] text-center text-[11px] text-neutral-600 font-light">
                <span className="text-[#856122] font-medium uppercase tracking-wider">
                  BEAJAY COUTURE BRIDAL
                </span>{' '}
                — Crafted in Nigeria. Made for Brides Everywhere.
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 3: EVENT & DATES
              ======================================================= */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase">
                  STEP 3
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                  Event & Preferred Dates
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Provide your target ceremony or intended use dates so our atelier team can review availability and fitting preparation timelines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Event / Intended Use Date */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-event-date" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    Event / Use Date *
                  </label>
                  <input
                    id="rental-event-date"
                    type="date"
                    min={getTodayString()}
                    value={formData.eventDate}
                    onChange={(e) => {
                      setFormData({ ...formData, eventDate: e.target.value });
                      setErrors(prev => ({ ...prev, eventDate: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.eventDate ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.eventDate && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.eventDate}</p>
                  )}
                </div>

                {/* 2. Preferred Collection Date */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-collection-date" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    Preferred Collection *
                  </label>
                  <input
                    id="rental-collection-date"
                    type="date"
                    value={formData.collectionDate}
                    onChange={(e) => {
                      setFormData({ ...formData, collectionDate: e.target.value });
                      setErrors(prev => ({ ...prev, collectionDate: '', returnDate: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.collectionDate ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.collectionDate && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.collectionDate}</p>
                  )}
                </div>

                {/* 3. Expected Return Date */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-return-date" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    Expected Return *
                  </label>
                  <input
                    id="rental-return-date"
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => {
                      setFormData({ ...formData, returnDate: e.target.value });
                      setErrors(prev => ({ ...prev, returnDate: '', collectionDate: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.returnDate ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.returnDate && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.returnDate}</p>
                  )}
                </div>
              </div>

              {/* Neutral Date Disclaimer */}
              <div className="p-4 bg-[#FAF7F0] border border-[#EAE4D9] text-xs text-neutral-600 font-light flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#856122] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Submitting preferred dates does not automatically approve or reserve the gown. Gown availability for your specific dates requires manual review and confirmation by BEAJAY COUTURE BRIDAL.
                </p>
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 4: RENTER DETAILS (Individual vs. Vendor)
              ======================================================= */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase">
                  STEP 4
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                  {formData.renterType === 'vendor' ? 'Vendor & Contact Information' : 'Bride / Client Details'}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  We welcome enquiries from Nigeria and worldwide. Please provide your contact details so our concierge can follow up on your request.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Bridal Vendor Specific Fields */}
                {formData.renterType === 'vendor' && (
                  <>
                    <div className="space-y-1.5">
                      <label htmlFor="rental-business-name" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                        Business / Brand Name *
                      </label>
                      <input
                        id="rental-business-name"
                        type="text"
                        placeholder="e.g. Ivory & Gold Bridal Styling"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          setErrors(prev => ({ ...prev, businessName: '' }));
                        }}
                        className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                          errors.businessName ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-rose-600">{errors.businessName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="rental-contact-person" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                        Contact Person *
                      </label>
                      <input
                        id="rental-contact-person"
                        type="text"
                        placeholder="e.g. Amaka Nwosu"
                        value={formData.contactPerson}
                        onChange={(e) => {
                          setFormData({ ...formData, contactPerson: e.target.value });
                          setErrors(prev => ({ ...prev, contactPerson: '' }));
                        }}
                        className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                          errors.contactPerson ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                        }`}
                      />
                      {errors.contactPerson && (
                        <p className="text-[11px] text-rose-600">{errors.contactPerson}</p>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <label htmlFor="rental-social-handle" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                        Social Handle / Portfolio (Optional)
                      </label>
                      <input
                        id="rental-social-handle"
                        type="text"
                        placeholder="@yourbridalbrand or portfolio link"
                        value={formData.socialHandle}
                        onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>
                  </>
                )}

                {/* Individual Full Name */}
                {formData.renterType === 'individual' && (
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="rental-full-name" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                      Full Name *
                    </label>
                    <input
                      id="rental-full-name"
                      type="text"
                      placeholder="e.g. Nneka Eze"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        setErrors(prev => ({ ...prev, fullName: '' }));
                      }}
                      className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600">{errors.fullName}</p>
                    )}
                  </div>
                )}

                {/* Common Fields: Email */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-email" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    Email Address *
                  </label>
                  <input
                    id="rental-email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600">{errors.email}</p>
                  )}
                </div>

                {/* Common Fields: Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-phone" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="rental-phone"
                    type="tel"
                    placeholder="+234... or international"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      setErrors(prev => ({ ...prev, phone: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600">{errors.phone}</p>
                  )}
                </div>

                {/* Global Location: Country */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-country" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    Country *
                  </label>
                  <input
                    id="rental-country"
                    type="text"
                    placeholder="e.g. Nigeria, United Kingdom, USA..."
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      setErrors(prev => ({ ...prev, country: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.country ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.country && (
                    <p className="text-[11px] text-rose-600">{errors.country}</p>
                  )}
                </div>

                {/* Global Location: City */}
                <div className="space-y-1.5">
                  <label htmlFor="rental-city" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                    City *
                  </label>
                  <input
                    id="rental-city"
                    type="text"
                    placeholder="e.g. Enugu, Lagos, London, Atlanta..."
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      setErrors(prev => ({ ...prev, city: '' }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-white border text-xs focus:outline-none focus:border-[#C59B3F] ${
                      errors.city ? 'border-rose-400 bg-rose-50/20' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-[11px] text-rose-600">{errors.city}</p>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* =======================================================
              STEP 5: ADDITIONAL INFORMATION (Notes)
              ======================================================= */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase">
                  STEP 5
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                  Additional Information
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Let us know if you have specific fitting preferences, measurement notes, or ceremony details you would like our stylists to consider.
                </p>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="rental-notes" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800">
                  Optional Notes / Special Requests
                </label>
                <textarea
                  id="rental-notes"
                  rows={4}
                  placeholder="e.g. Ceremony venue, fitting date availability, height with heels, or specific veil pairing preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3.5 bg-white border border-[#D5CDBF] text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] leading-relaxed"
                />
              </div>

              {/* Minimal rental terms guidance placeholder */}
              <div className="p-4 bg-[#FAF7F0] border border-[#EAE4D9] text-xs text-neutral-600 font-light space-y-1">
                <span className="font-semibold text-[#856122] uppercase tracking-wider text-[10.5px] block">
                  ATELIER RENTAL TERMS
                </span>
                <p>
                  Rental terms and care requirements will be provided by BEAJAY COUTURE BRIDAL as part of the confirmed rental process.
                </p>
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 6: REVIEW
              ======================================================= */}
          {step === 6 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#856122] uppercase">
                  STEP 6
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                  Review Your Request
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  Please review the summary below before submitting. You can click Edit on any section to make adjustments.
                </p>
              </div>

              <div className="bg-white border border-[#EAE3D5] divide-y divide-[#EAE3D5] text-xs">
                
                {/* 1. Gown */}
                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedGown.images?.[0] || selectedGown.image} 
                      alt={selectedGown.name}
                      className="w-12 h-16 object-cover object-top border border-[#E2DAD0]"
                    />
                    <div>
                      <span className="text-[9.5px] font-semibold tracking-wider text-[#856122] uppercase block">
                        {selectedGown.code} • {selectedGown.categoryLabel}
                      </span>
                      <h4 className="font-serif text-sm text-[#111111] font-medium">
                        {selectedGown.name}
                      </h4>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-[11px] text-[#856122] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* 2. Renter Type */}
                <div className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                      Renter Profile
                    </span>
                    <span className="font-medium text-neutral-900">
                      {formData.renterType === 'vendor' ? 'Bridal Vendor / Business' : 'Individual / Bride'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1 text-[11px] text-[#856122] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* 3. Dates */}
                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                      Requested Dates
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-neutral-800">
                      <div>
                        <span className="text-neutral-500 block text-[10px]">Event Date:</span>
                        <span className="font-medium">{formData.eventDate || '—'}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[10px]">Collection:</span>
                        <span className="font-medium">{formData.collectionDate || '—'}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[10px]">Return:</span>
                        <span className="font-medium">{formData.returnDate || '—'}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1 text-[11px] text-[#856122] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* 4. Contact & Location */}
                <div className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                      Contact & Destination
                    </span>
                    <div className="text-neutral-900 font-medium">
                      {formData.renterType === 'vendor' ? (
                        <>
                          {formData.businessName} (Attn: {formData.contactPerson})
                        </>
                      ) : (
                        formData.fullName
                      )}
                    </div>
                    <div className="text-neutral-600 font-light text-[11px]">
                      {formData.email} • {formData.phone}
                    </div>
                    <div className="text-neutral-600 font-light text-[11px] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C59B3F]" />
                      <span>{formData.city}, {formData.country}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-1 text-[11px] text-[#856122] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>

                {/* 5. Notes */}
                {formData.notes && (
                  <div className="p-4 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                        Special Requests
                      </span>
                      <p className="text-neutral-700 font-light italic mt-0.5 leading-relaxed">
                        "{formData.notes}"
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(5)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#856122] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                  </div>
                )}

              </div>

              <div className="p-4 bg-[#FAF7F0] border border-[#EAE4D9] text-xs text-neutral-600 font-light text-center">
                Submitting this request will send your dates and preferences to BEAJAY COUTURE BRIDAL for atelier review.
              </div>
            </div>
          )}

          {/* =======================================================
              STEP 7: SUBMITTED (Confirmation)
              ======================================================= */}
          {step === 7 && (
            <div className="bg-white border border-[#E5DEC9] p-8 sm:p-12 text-center space-y-6 shadow-xs animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#FAF5E8] border border-[#C59B3F] rounded-full flex items-center justify-center mx-auto text-[#C59B3F]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] uppercase">
                  BEAJAY COUTURE BRIDAL
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#111111]">
                  RENTAL REQUEST SUBMITTED
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto font-light leading-relaxed">
                Thank you for your request. BEAJAY COUTURE BRIDAL will review the details and confirm availability.
              </p>

              <div className="pt-4 border-t border-[#EAE4D9] flex flex-wrap items-center justify-center gap-4 text-xs">
                {onExploreCollections && (
                  <button
                    onClick={() => {
                      onClose();
                      onExploreCollections();
                    }}
                    className="bg-[#111111] hover:bg-[#252422] text-white px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    EXPLORE ALL COLLECTIONS
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="bg-white hover:bg-[#FAF7F0] text-neutral-800 border border-[#D5CDBF] px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
              </div>

              <div className="pt-2 text-[11px] text-neutral-400 font-light">
                Crafted in Nigeria. Made for Brides Everywhere.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls (Steps 1 to 6) */}
        {step <= 6 && (
          <div className="p-4 sm:p-5 border-t border-[#EAE3D5] bg-white flex items-center justify-between gap-3 shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-900 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-500 hover:text-neutral-800 cursor-pointer"
              >
                Cancel
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={step === 1 && isUnavailable}
              className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all cursor-pointer shadow-xs ${
                step === 1 && isUnavailable
                  ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                  : 'bg-[#C59B3F] hover:bg-[#B3892F] text-white'
              }`}
            >
              <span>{step === 6 ? 'SUBMIT RENTAL REQUEST' : 'NEXT STEP'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
