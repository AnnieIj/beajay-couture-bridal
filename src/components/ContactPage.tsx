import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  Calendar, 
  Layers, 
  Compass, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { ContactEnquiryType, GeneralContactFormData } from '../types';

interface ContactPageProps {
  preselectedGown?: string | null;
  onNavigateHome: () => void;
  onNavigateCollections: () => void;
  onNavigateRentals: () => void;
  onNavigateGallery: () => void;
  onOpenAppointment: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedGown,
  onNavigateHome,
  onNavigateCollections,
  onNavigateRentals,
  onNavigateGallery,
  onOpenAppointment
}) => {
  const [formData, setFormData] = useState<GeneralContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    enquiryType: preselectedGown ? 'Gown Enquiry' : 'General Enquiry',
    message: preselectedGown ? `Hello, I would like to enquire regarding the ${preselectedGown} gown.` : ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof GeneralContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<GeneralContactFormData | null>(null);

  useEffect(() => {
    if (preselectedGown) {
      setFormData(prev => ({
        ...prev,
        enquiryType: 'Gown Enquiry',
        message: `Hello, I would like to enquire regarding the ${preselectedGown} gown.`
      }));
    }
  }, [preselectedGown]);

  const validate = () => {
    const newErrors: Partial<Record<keyof GeneralContactFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your phone or WhatsApp number.';
    if (!formData.country.trim()) newErrors.country = 'Please provide your country.';
    if (!formData.city.trim()) newErrors.city = 'Please provide your city.';
    if (!formData.message.trim()) newErrors.message = 'Please include details about your enquiry.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      enquiryType: 'General Enquiry',
      message: ''
    });
    setErrors({});
  };

  return (
    <main id="contact-page" className="min-h-screen bg-[#FCFAF7] text-[#141312] pt-24 sm:pt-28 pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#856122] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#141312]">Contact</span>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-[#EAE3D5]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2EDE2] border border-[#DDD4C1] text-[#856122] text-[10.5px] font-semibold tracking-[0.24em] uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span>CONTACT BEAJAY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.15] tracking-tight">
            Begin the Conversation.
          </h1>

          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            Whether you are inquiring about a specific gown, exploring rental availability, or requesting a fitting, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CONTACT PATHWAYS (BRIDAL COLLECTIONS, RENTAL AVAILABILITY, GALLERY, APPOINTMENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-[#EAE3D5]">
        <div className="mb-8 space-y-2">
          <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
            DIRECT PATHWAYS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal">
            Choose How to Connect
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Select a service pathway or complete the enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pathway 1: BRIDAL COLLECTIONS */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] uppercase tracking-wide">
                BRIDAL COLLECTIONS
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Explore signature silhouettes, lookbooks, and gown collections.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateCollections}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>View Collections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 2: RENTAL AVAILABILITY */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] uppercase tracking-wide">
                RENTAL AVAILABILITY
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Check available rental gowns, sizes, and booking details.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateRentals}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>Explore Rentals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 3: BRIDAL GALLERY */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] uppercase tracking-wide">
                BRIDAL GALLERY
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                View real bride moments and editorial photography.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateGallery}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#F8F4EC] hover:bg-[#111111] text-[#141312] hover:text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1]"
              >
                <span>Open Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 4: FITTING / APPOINTMENT */}
          <div className="bg-white border border-[#E5DFD1] p-6 flex flex-col justify-between group hover:border-[#856122] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] border border-[#DDD4C1] flex items-center justify-center text-[#856122]">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] uppercase tracking-wide">
                FITTING / APPOINTMENT
              </h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Request a dedicated fitting session or styling consultation.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onOpenAppointment}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#111111] hover:bg-[#C59B3F] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>Book Fitting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GENERAL CONTACT FORM & VERIFIED INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Success State */}
          <div className="lg:col-span-8 bg-white border border-[#E5DFD1] p-6 sm:p-10 shadow-sm">
            
            {isSubmitted && submittedData ? (
              <div className="py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#F8F4EC] border border-[#DDD4C1] flex items-center justify-center text-[#856122] rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-[#C59B3F]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
                    CONFIRMATION
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#111111]">
                    ENQUIRY SUBMITTED
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                    Thank you for getting in touch with BEAJAY COUTURE BRIDAL.
                  </p>
                </div>

                {/* Submission Overview */}
                <div className="p-6 bg-[#FAF7F2] border border-[#EAE3D5] space-y-3 text-xs">
                  <div className="font-serif text-sm text-[#111111] border-b border-[#E0D7C5] pb-2">
                    Submission Details
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-700">
                    <div>
                      <span className="text-neutral-500 block text-[10.5px] uppercase tracking-wider">Name</span>
                      <span className="font-medium text-neutral-900">{submittedData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10.5px] uppercase tracking-wider">Enquiry Type</span>
                      <span className="font-medium text-[#856122]">{submittedData.enquiryType}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10.5px] uppercase tracking-wider">Email</span>
                      <span className="font-medium text-neutral-900">{submittedData.email}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10.5px] uppercase tracking-wider">Phone / WhatsApp</span>
                      <span className="font-medium text-neutral-900">{submittedData.phone}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10.5px] uppercase tracking-wider">Location</span>
                      <span className="font-medium text-neutral-900">{submittedData.city}, {submittedData.country}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#EAE3D5]">
                    <span className="text-neutral-500 block text-[10.5px] uppercase tracking-wider mb-1">Message</span>
                    <p className="text-neutral-800 font-light italic leading-relaxed">
                      "{submittedData.message}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleReset}
                    className="min-h-[44px] px-6 py-3 border border-[#856122] text-[#141312] hover:bg-[#F8F4EC] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                  <button
                    onClick={onNavigateCollections}
                    className="min-h-[44px] px-6 py-3 bg-[#111111] text-white hover:bg-[#2A2824] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Discover Collections
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="border-b border-[#EAE3D5] pb-4">
                  <h2 className="font-serif text-2xl text-[#111111]">
                    Send an Enquiry
                  </h2>
                  <p className="text-xs text-neutral-600 font-light mt-1">
                    Please share your details and bridal questions with us.
                  </p>
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chisom Adeleke"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                        errors.fullName ? 'border-red-500' : 'border-[#D5CDBF]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                        errors.email ? 'border-red-500' : 'border-[#D5CDBF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone/WhatsApp & Enquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 800 000 0000"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                        errors.phone ? 'border-red-500' : 'border-[#D5CDBF]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-enquiryType" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                      Enquiry Type *
                    </label>
                    <select
                      id="contact-enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as ContactEnquiryType })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F]"
                    >
                      <option value="Gown Enquiry">Gown Enquiry</option>
                      <option value="Rental Availability">Rental Availability</option>
                      <option value="Fitting / Appointment">Fitting / Appointment</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Country & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-country" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                      Country *
                    </label>
                    <input
                      id="contact-country"
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Nigeria"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                        errors.country ? 'border-red-500' : 'border-[#D5CDBF]'
                      }`}
                    />
                    {errors.country && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                      City *
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Enugu"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                        errors.city ? 'border-red-500' : 'border-[#D5CDBF]'
                      }`}
                    />
                    {errors.city && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your wedding date, gown preferences, or any specific questions..."
                    className={`w-full p-3.5 bg-white border text-xs text-neutral-900 focus:outline-none focus:border-[#C59B3F] ${
                      errors.message ? 'border-red-500' : 'border-[#D5CDBF]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#111111] hover:bg-[#2A2824] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C59B3F]" />
                    <span>SEND ENQUIRY</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Verified Public Information & Instagram */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Verified Location Card */}
            <div className="bg-white border border-[#E5DFD1] p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
                  LOCATION
                </span>
                <h3 className="font-serif text-xl text-[#111111]">
                  Studio Location
                </h3>
              </div>

              <div className="space-y-3 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C59B3F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 block text-[11px] tracking-wider uppercase">
                      City & Country
                    </span>
                    <span className="text-neutral-600 font-light text-sm">
                      Enugu, Nigeria
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F2EDE2] space-y-1">
                  <span className="font-semibold text-neutral-900 block text-[11px] tracking-wider uppercase">
                    Fittings & Visits
                  </span>
                  <p className="text-neutral-600 font-light text-xs">
                    Fittings can be scheduled through our appointment booking system or contact form.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Instagram Link */}
            <div className="bg-[#F8F4EC] border border-[#DDD4C1] p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#C59B3F] shrink-0" />
                <div>
                  <span className="font-semibold text-[#111111] block text-xs tracking-wider uppercase">
                    FOLLOW BEAJAY
                  </span>
                  <span className="text-[11px] text-neutral-600 font-light">
                    Official Social Channel
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Connect with our bridal design journey, collection releases, and gown details on Instagram.
              </p>

              <a
                href="https://instagram.com/beajaycouture_bridal"
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#2A2824] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>@beajaycouture_bridal</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C59B3F]" />
              </a>
            </div>

            {/* Brand Statement Banner */}
            <div className="p-6 bg-white border border-[#E5DFD1] text-center space-y-2">
              <p className="font-serif text-sm text-[#111111] italic font-normal">
                “Crafted in Nigeria. Made for Brides Everywhere.”
              </p>
              <p className="text-[10px] tracking-widest text-[#856122] uppercase font-sans">
                BEAJAY COUTURE BRIDAL
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
