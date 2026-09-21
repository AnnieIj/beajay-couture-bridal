import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  Facebook,
  Calendar, 
  Layers, 
  Compass, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  Globe
} from 'lucide-react';
import { ContactEnquiryType, GeneralContactFormData } from '../types';
import { BRAND_CONTACT, buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { TikTokIcon } from './SocialIcons';

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
    <main id="contact-page" className="min-h-screen bg-[#FCFAF7] dark:bg-[#0C0C0B] text-[#141312] dark:text-[#E8E3D8] pt-24 sm:pt-28 pb-20 transition-colors duration-200">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-500 dark:text-[#A39D93] font-medium">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#856122] dark:hover:text-[#E6C875] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#141312] dark:text-[#F8F5EE]">Contact</span>
        </nav>
      </div>

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-[#EAE3D5] dark:border-white/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F2EDE2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 text-[#856122] dark:text-[#E6C875] text-[10.5px] font-semibold tracking-[0.24em] uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-[#C59B3F]" />
            <span>CONTACT BEAJAY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] dark:text-[#F8F5EE] font-normal leading-[1.15] tracking-tight">
            Begin the Conversation.
          </h1>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-[#D4CEC3] font-light leading-relaxed">
            Whether you are inquiring about a specific gown, exploring rental availability, or requesting a fitting, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CONTACT PATHWAYS (BRIDAL COLLECTIONS, RENTAL AVAILABILITY, GALLERY, APPOINTMENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-[#EAE3D5] dark:border-white/10">
        <div className="mb-8 space-y-2">
          <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
            DIRECT PATHWAYS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] dark:text-[#F8F5EE] font-normal">
            Choose How to Connect
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#D4CEC3] font-light">
            Select a service pathway or complete the enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pathway 1: BRIDAL COLLECTIONS */}
          <div className="bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 p-6 flex flex-col justify-between group hover:border-[#856122] dark:hover:border-[#C59B3F] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] uppercase tracking-wide">
                BRIDAL COLLECTIONS
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Explore signature silhouettes, lookbooks, and gown collections.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateCollections}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#F8F4EC] dark:bg-[#22201E] hover:bg-[#111111] dark:hover:bg-[#C59B3F] text-[#141312] dark:text-[#F8F5EE] hover:text-white dark:hover:text-[#0C0C0B] text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1] dark:border-white/10"
              >
                <span>View Collections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 2: RENTAL AVAILABILITY */}
          <div className="bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 p-6 flex flex-col justify-between group hover:border-[#856122] dark:hover:border-[#C59B3F] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] uppercase tracking-wide">
                RENTAL AVAILABILITY
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Check available rental gowns, sizes, and booking details.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateRentals}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#F8F4EC] dark:bg-[#22201E] hover:bg-[#111111] dark:hover:bg-[#C59B3F] text-[#141312] dark:text-[#F8F5EE] hover:text-white dark:hover:text-[#0C0C0B] text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1] dark:border-white/10"
              >
                <span>Explore Rentals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 3: BRIDAL GALLERY */}
          <div className="bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 p-6 flex flex-col justify-between group hover:border-[#856122] dark:hover:border-[#C59B3F] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] uppercase tracking-wide">
                BRIDAL GALLERY
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                View real bride moments and editorial photography.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onNavigateGallery}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#F8F4EC] dark:bg-[#22201E] hover:bg-[#111111] dark:hover:bg-[#C59B3F] text-[#141312] dark:text-[#F8F5EE] hover:text-white dark:hover:text-[#0C0C0B] text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer border border-[#DDD4C1] dark:border-white/10"
              >
                <span>Open Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pathway 4: FITTING / APPOINTMENT */}
          <div className="bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 p-6 flex flex-col justify-between group hover:border-[#856122] dark:hover:border-[#C59B3F] transition-colors shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#FAF7F2] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875]">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-[#111111] dark:text-[#F8F5EE] uppercase tracking-wide">
                FITTING / APPOINTMENT
              </h3>
              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Request a dedicated fitting session or styling consultation.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={onOpenAppointment}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-2.5 bg-[#111111] dark:bg-[#C59B3F] hover:bg-[#C59B3F] dark:hover:bg-[#B3892F] text-white dark:text-[#0C0C0B] text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer"
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
          <div className="lg:col-span-8 bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 p-6 sm:p-10 shadow-sm">
            
            {isSubmitted && submittedData ? (
              <div className="py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#F8F4EC] dark:bg-[#22201E] border border-[#DDD4C1] dark:border-white/10 flex items-center justify-center text-[#856122] dark:text-[#E6C875] rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-[#C59B3F]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
                    REQUEST DETAILS
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] dark:text-[#F8F5EE]">
                    ENQUIRY PREPARED
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-[#D4CEC3] font-light leading-relaxed">
                    Your enquiry details have been prepared. Online messaging submission will be available soon. You can reach BEAJAY directly via WhatsApp or email.
                  </p>
                </div>

                {/* Submission Overview */}
                <div className="p-6 bg-[#FAF7F2] dark:bg-[#1C1B19] border border-[#EAE3D5] dark:border-white/10 space-y-3 text-xs">
                  <div className="font-serif text-sm text-[#111111] dark:text-[#F8F5EE] border-b border-[#E0D7C5] dark:border-white/10 pb-2">
                    Enquiry Details
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-700 dark:text-[#D4CEC3]">
                    <div>
                      <span className="text-neutral-500 dark:text-[#A39D93] block text-[10.5px] uppercase tracking-wider">Name</span>
                      <span className="font-medium text-neutral-900 dark:text-[#F8F5EE]">{submittedData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#A39D93] block text-[10.5px] uppercase tracking-wider">Enquiry Type</span>
                      <span className="font-medium text-[#856122] dark:text-[#E6C875]">{submittedData.enquiryType}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#A39D93] block text-[10.5px] uppercase tracking-wider">Email</span>
                      <span className="font-medium text-neutral-900 dark:text-[#F8F5EE]">{submittedData.email}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#A39D93] block text-[10.5px] uppercase tracking-wider">Phone / WhatsApp</span>
                      <span className="font-medium text-neutral-900 dark:text-[#F8F5EE]">{submittedData.phone}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 dark:text-[#A39D93] block text-[10.5px] uppercase tracking-wider">Location</span>
                      <span className="font-medium text-neutral-900 dark:text-[#F8F5EE]">{submittedData.city}, {submittedData.country}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#EAE3D5] dark:border-white/10">
                    <span className="text-neutral-500 dark:text-[#A39D93] block text-[10.5px] uppercase tracking-wider mb-1">Message</span>
                    <p className="text-neutral-800 dark:text-[#E8E3D8] font-light italic leading-relaxed">
                      "{submittedData.message}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppUrl({
                      type: 'general',
                      notes: `Enquiry from ${submittedData.fullName} (${submittedData.enquiryType}): ${submittedData.message}`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="min-h-[44px] px-6 py-3 border border-[#856122] dark:border-[#C59B3F] text-[#141312] dark:text-[#F8F5EE] hover:bg-[#F8F4EC] dark:hover:bg-[#22201E] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Prepare Another Enquiry
                  </button>
                  <button
                    onClick={onNavigateCollections}
                    className="min-h-[44px] px-6 py-3 bg-[#111111] dark:bg-[#C59B3F] text-white dark:text-[#0C0C0B] hover:bg-[#2A2824] dark:hover:bg-[#B3892F] text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Discover Collections
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="border-b border-[#EAE3D5] dark:border-white/10 pb-4">
                  <h2 className="font-serif text-2xl text-[#111111] dark:text-[#F8F5EE]">
                    Send an Enquiry
                  </h2>
                  <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light mt-1">
                    Please share your details and bridal questions with us.
                  </p>
                </div>

                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chisom Adeleke"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-[#F8F5EE] placeholder:text-neutral-400 dark:placeholder:text-[#7A756D] focus:outline-none focus:border-[#C59B3F] ${
                        errors.fullName ? 'border-red-500' : 'border-[#D5CDBF] dark:border-white/15'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-[#F8F5EE] placeholder:text-neutral-400 dark:placeholder:text-[#7A756D] focus:outline-none focus:border-[#C59B3F] ${
                        errors.email ? 'border-red-500' : 'border-[#D5CDBF] dark:border-white/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone/WhatsApp & Enquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 800 000 0000"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-[#F8F5EE] placeholder:text-neutral-400 dark:placeholder:text-[#7A756D] focus:outline-none focus:border-[#C59B3F] ${
                        errors.phone ? 'border-red-500' : 'border-[#D5CDBF] dark:border-white/15'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-enquiryType" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                      Enquiry Type *
                    </label>
                    <select
                      id="contact-enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as ContactEnquiryType })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border border-[#D5CDBF] dark:border-white/15 text-xs text-neutral-900 dark:text-[#F8F5EE] focus:outline-none focus:border-[#C59B3F]"
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
                    <label htmlFor="contact-country" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                      Country *
                    </label>
                    <input
                      id="contact-country"
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Nigeria"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-[#F8F5EE] placeholder:text-neutral-400 dark:placeholder:text-[#7A756D] focus:outline-none focus:border-[#C59B3F] ${
                        errors.country ? 'border-red-500' : 'border-[#D5CDBF] dark:border-white/15'
                      }`}
                    />
                    {errors.country && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                      City *
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Enugu"
                      className={`w-full min-h-[44px] px-3.5 py-2.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-[#F8F5EE] placeholder:text-neutral-400 dark:placeholder:text-[#7A756D] focus:outline-none focus:border-[#C59B3F] ${
                        errors.city ? 'border-red-500' : 'border-[#D5CDBF] dark:border-white/15'
                      }`}
                    />
                    {errors.city && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-800 dark:text-[#D4CEC3] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your wedding date, gown preferences, or any specific questions..."
                    className={`w-full p-3.5 bg-white dark:bg-[#1C1B19] border text-xs text-neutral-900 dark:text-[#F8F5EE] placeholder:text-neutral-400 dark:placeholder:text-[#7A756D] focus:outline-none focus:border-[#C59B3F] ${
                      errors.message ? 'border-red-500' : 'border-[#D5CDBF] dark:border-white/15'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#111111] dark:bg-[#C59B3F] hover:bg-[#2A2824] dark:hover:bg-[#B3892F] text-white dark:text-[#0C0C0B] text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C59B3F] dark:text-[#0C0C0B]" />
                    <span>SEND ENQUIRY</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Confirmed Contact Points & Social Channels */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Confirmed Official WhatsApp Card */}
            <div className="bg-[#FAF8F5] dark:bg-[#161514] border-2 border-[#25D366]/30 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] dark:text-[#E6C875] uppercase block">
                  DIRECT MESSAGING
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#25D366]/10 text-[#1B8A44] dark:text-[#25D366] text-[10px] font-semibold tracking-wider uppercase rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  Active
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] dark:bg-[#22201E] text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#111111] dark:text-[#F8F5EE]">
                    WhatsApp
                  </h3>
                  <a
                    href={buildWhatsAppUrl({ type: 'general' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base font-semibold text-[#111111] dark:text-[#F8F5EE] hover:text-[#25D366] dark:hover:text-[#25D366] transition-colors block mt-0.5 cursor-pointer"
                  >
                    {BRAND_CONTACT.whatsapp.internationalDisplay}
                  </a>
                </div>
              </div>

              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Connect directly with our team for consultations, custom fitting enquiries, and rental questions.
              </p>

              <a
                href={buildWhatsAppUrl({ type: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-[#111111] dark:bg-[#22201E] hover:bg-[#1E2B22] dark:hover:bg-[#2A2824] text-white text-xs font-semibold tracking-wider uppercase transition-colors border border-[#25D366]/40 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            {/* Confirmed Location Card */}
            <div className="bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.28em] font-semibold text-[#C59B3F] uppercase block">
                  LOCATION
                </span>
                <h3 className="font-serif text-xl text-[#111111] dark:text-[#F8F5EE]">
                  Studio Location
                </h3>
              </div>

              <div className="space-y-3 text-xs text-neutral-700 dark:text-[#D4CEC3]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C59B3F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-900 dark:text-[#F8F5EE] block text-[11px] tracking-wider uppercase">
                      City & Country
                    </span>
                    <span className="text-neutral-600 dark:text-[#D4CEC3] font-light text-sm">
                      {BRAND_CONTACT.location}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2EDE2] dark:border-white/10 space-y-1">
                  <span className="font-semibold text-neutral-900 dark:text-[#F8F5EE] block text-[11px] tracking-wider uppercase">
                    Fittings & Visits
                  </span>
                  <p className="text-neutral-600 dark:text-[#D4CEC3] font-light text-xs leading-relaxed">
                    Fittings are conducted by prior arrangement through our appointment booking system, contact form, or direct WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Connect With BEAJAY Section */}
            <div className="bg-[#FAF7F2] dark:bg-[#161514] border border-[#DDD4C1] dark:border-white/10 p-6 sm:p-8 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.28em] font-semibold text-[#856122] dark:text-[#E6C875] uppercase block">
                  OFFICIAL CHANNELS
                </span>
                <h3 className="font-serif text-xl text-[#111111] dark:text-[#F8F5EE]">
                  Connect With BEAJAY
                </h3>
              </div>

              <p className="text-xs text-neutral-600 dark:text-[#D4CEC3] font-light leading-relaxed">
                Follow our bridal design journey, collection releases, and behind-the-scenes artistry across our confirmed channels:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                {/* Instagram */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#EAE3D5] dark:border-white/10">
                  <a
                    href={BRAND_CONTACT.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BEAJAY on Instagram"
                    className="flex items-center gap-2.5 text-neutral-900 dark:text-[#F8F5EE] hover:text-[#856122] dark:hover:text-[#E6C875] transition-colors group cursor-pointer"
                  >
                    <Instagram className="w-4 h-4 text-[#C59B3F] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                    <span className="font-medium text-neutral-900 dark:text-[#F8F5EE] group-hover:text-[#856122] dark:group-hover:text-[#E6C875]">{BRAND_CONTACT.socials.instagram.handle}</span>
                  </a>
                  <span className="text-[10.5px] uppercase tracking-wider text-neutral-400 dark:text-[#A39D93]">Instagram</span>
                </div>

                {/* TikTok */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#EAE3D5] dark:border-white/10">
                  {BRAND_CONTACT.socials.tiktok.url ? (
                    <a
                      href={BRAND_CONTACT.socials.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="BEAJAY on TikTok"
                      className="flex items-center gap-2.5 text-neutral-900 dark:text-[#F8F5EE] hover:text-[#856122] dark:hover:text-[#E6C875] transition-colors group cursor-pointer"
                    >
                      <TikTokIcon className="w-4 h-4 text-[#C59B3F] group-hover:scale-110 transition-transform shrink-0" />
                      <span className="font-medium text-neutral-900 dark:text-[#F8F5EE] group-hover:text-[#856122] dark:group-hover:text-[#E6C875]">{BRAND_CONTACT.socials.tiktok.handle}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2.5 text-neutral-700 dark:text-[#D4CEC3]">
                      <TikTokIcon className="w-4 h-4 text-[#C59B3F] shrink-0" />
                      <span className="font-medium">{BRAND_CONTACT.socials.tiktok.handle}</span>
                    </div>
                  )}
                  <span className="text-[10.5px] uppercase tracking-wider text-neutral-400 dark:text-[#A39D93]">TikTok</span>
                </div>

                {/* Facebook */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#EAE3D5] dark:border-white/10">
                  {BRAND_CONTACT.socials.facebook.url ? (
                    <a
                      href={BRAND_CONTACT.socials.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="BEAJAY on Facebook"
                      className="flex items-center gap-2.5 text-neutral-900 dark:text-[#F8F5EE] hover:text-[#856122] dark:hover:text-[#E6C875] transition-colors group cursor-pointer"
                    >
                      <Facebook className="w-4 h-4 text-[#C59B3F] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                      <span className="font-medium text-neutral-900 dark:text-[#F8F5EE] group-hover:text-[#856122] dark:group-hover:text-[#E6C875]">{BRAND_CONTACT.socials.facebook.handle}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-2.5 text-neutral-700 dark:text-[#D4CEC3]">
                      <Facebook className="w-4 h-4 text-[#C59B3F] shrink-0" aria-hidden="true" />
                      <span className="font-medium">{BRAND_CONTACT.socials.facebook.handle}</span>
                    </div>
                  )}
                  <span className="text-[10.5px] uppercase tracking-wider text-neutral-400 dark:text-[#A39D93]">Facebook</span>
                </div>

                {/* Global */}
                <div className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#C59B3F] shrink-0" />
                    <span className="font-medium text-neutral-900 dark:text-[#F8F5EE] font-mono text-[11px]">{BRAND_CONTACT.socials.global.handle}</span>
                  </div>
                  <span className="text-[10.5px] uppercase tracking-wider text-neutral-400 dark:text-[#A39D93]">Global</span>
                </div>
              </div>
            </div>

            {/* Brand Statement Banner */}
            <div className="p-6 bg-white dark:bg-[#161514] border border-[#E5DFD1] dark:border-white/10 text-center space-y-2 shadow-xs">
              <p className="font-serif text-sm text-[#111111] dark:text-[#F8F5EE] italic font-normal">
                “{BRAND_CONTACT.tagline}”
              </p>
              <p className="text-[10px] tracking-widest text-[#856122] dark:text-[#E6C875] uppercase font-sans">
                {BRAND_CONTACT.brandName} • {BRAND_CONTACT.location}
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
