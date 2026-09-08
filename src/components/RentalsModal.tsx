import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Store, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  AlertCircle,
  Sparkles,
  Phone
} from 'lucide-react';
import { GOWNS_CATALOG, RENTAL_POLICIES } from '../data/bridalData';
import { GownItem, VendorInquiryFormData } from '../types';

interface RentalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'bride' | 'vendor' | 'policy';
  onBookFitting: (gownName?: string, service?: any) => void;
  onSelectGown: (gown: GownItem) => void;
}

export const RentalsModal: React.FC<RentalsModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'bride',
  onBookFitting,
  onSelectGown
}) => {
  const [activeTab, setActiveTab] = useState<'bride' | 'vendor' | 'policy'>(defaultTab);

  const [vendorForm, setVendorForm] = useState<VendorInquiryFormData>({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessAddress: '',
    cityState: 'Enugu',
    socialHandle: '',
    yearsInBusiness: '1-3 years',
    clientWeddingDate: '',
    selectedGownInterest: 'The Amara Sovereign Gown',
    specialRequests: ''
  });

  const [vendorSubmitted, setVendorSubmitted] = useState(false);

  if (!isOpen) return null;

  const rentalGowns = GOWNS_CATALOG.filter(g => g.isAvailableForRent);

  const handleVendorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVendorSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#EAE3D5] flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
              BEAJAY GOWN RENTAL SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
              Couture Gown Rentals
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E8E1D2] bg-[#FAF7F0] text-xs font-semibold tracking-[0.16em] uppercase">
          <button
            onClick={() => setActiveTab('bride')}
            className={`flex-1 py-3.5 px-4 flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'bride'
                ? 'border-[#C59B3F] text-[#111111] bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Heart className="w-4 h-4 text-[#C59B3F]" />
            <span>1. Bride Rentals</span>
          </button>

          <button
            onClick={() => setActiveTab('vendor')}
            className={`flex-1 py-3.5 px-4 flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'vendor'
                ? 'border-[#C59B3F] text-[#111111] bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Store className="w-4 h-4 text-[#C59B3F]" />
            <span>2. Vendor Rentals</span>
          </button>

          <button
            onClick={() => setActiveTab('policy')}
            className={`flex-1 py-3.5 px-4 flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'policy'
                ? 'border-[#C59B3F] text-[#111111] bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#C59B3F]" />
            <span>3. Rental Policy</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* TAB 1: BRIDE RENTALS */}
          {activeTab === 'bride' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Intro Banner */}
              <div className="bg-[#FAF6EE] border border-[#EADBBD] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-[#111111]">
                    Rent Your Dream Dress for the Big Day
                  </h3>
                  <p className="text-xs text-neutral-600 font-light max-w-xl">
                    Experience luxury without compromise. All bride rentals include private studio fitting, temporary micro-adjustments, and post-ceremony couture dry cleaning.
                  </p>
                </div>
                <button
                  onClick={() => onBookFitting(undefined, 'gown-rental')}
                  className="shrink-0 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3 px-6 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Book Rental Try-On
                </button>
              </div>

              {/* Gowns Available For Rent Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#EAE3D5] pb-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-800">
                    Available Rental Gowns in Enugu ({rentalGowns.length} styles)
                  </span>
                  <span className="text-[11px] text-[#856122] font-medium">
                    Standard 3 to 5-Day Rental
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rentalGowns.map((gown) => (
                    <div 
                      key={gown.id}
                      className="group bg-white border border-[#E8E1D2] hover:border-[#C59B3F] transition-all flex flex-col overflow-hidden shadow-xs"
                    >
                      <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
                        <img
                          src={gown.image}
                          alt={gown.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2 bg-[#111111]/85 text-white text-[9px] px-2 py-1 tracking-wider uppercase">
                          {gown.categoryLabel}
                        </div>
                      </div>

                      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                        <div>
                          <h4 className="font-serif text-base text-[#111111] group-hover:text-[#C59B3F] transition-colors">
                            {gown.name}
                          </h4>
                          <p className="text-[11px] text-neutral-500 font-light mt-0.5 line-clamp-2">
                            {gown.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#F2ECE0] space-y-2">
                          <div className="text-xs font-semibold text-[#856122]">
                            {gown.rentalStartingPrice}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            <button
                              onClick={() => onSelectGown(gown)}
                              className="w-full py-2 px-2 text-[10.5px] border border-neutral-300 hover:border-neutral-800 text-neutral-800 uppercase tracking-wider text-center"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => onBookFitting(gown.name, 'gown-rental')}
                              className="w-full py-2 px-2 text-[10.5px] bg-[#C59B3F] hover:bg-[#B3892F] text-white uppercase tracking-wider text-center font-semibold"
                            >
                              Rent Dress
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: VENDOR RENTALS */}
          {activeTab === 'vendor' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Important Vendor Clarification Banner */}
              <div className="bg-[#1A1918] text-[#EFECE5] border border-[#2F2C28] p-6 sm:p-7 relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#E6C875] text-[11px] font-semibold tracking-[0.2em] uppercase">
                    <Store className="w-4 h-4 text-[#C59B3F]" />
                    <span>BRIDAL VENDOR PARTNERSHIP PROGRAM</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    Designed Exclusively for Bridal Fashion Vendors
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl">
                    <strong className="text-white">Note:</strong> Vendor Rentals refers strictly to 
                    <strong className="text-[#E6C875]"> bridal stylists, fashion houses, wedding wardrobe consultants, and boutique curators </strong> 
                    who rent BEAJAY gowns for use by their own registered brides and clients.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 mt-5 border-t border-[#33302B] text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" />
                    <span>Commercial partner discounts & flexible multi-hire rates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" />
                    <span>Priority calendar reservations for your brides</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59B3F] shrink-0 mt-0.5" />
                    <span>Direct logistics pickup in New Haven, Enugu</span>
                  </div>
                </div>
              </div>

              {/* Vendor Registration Form or Confirmation */}
              {vendorSubmitted ? (
                <div className="bg-white border border-[#E5DEC9] p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#FAF5E8] border border-[#C59B3F] rounded-full flex items-center justify-center mx-auto text-[#C59B3F]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    Vendor Application Received
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="font-medium text-neutral-900">{vendorForm.businessName}</strong>. 
                    Our commercial bridal partnerships desk will verify your details and send our confidential vendor rate card via WhatsApp / Email within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setVendorSubmitted(false)}
                      className="text-xs text-[#856122] underline tracking-wider uppercase font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleVendorSubmit} className="bg-white border border-[#EAE3D5] p-6 sm:p-8 space-y-6">
                  <div className="border-b border-[#EAE3D5] pb-4">
                    <h4 className="font-serif text-xl text-[#111111]">
                      Register / Request Gown Hold for Your Client
                    </h4>
                    <p className="text-xs text-neutral-500 font-light">
                      Please enter your bridal fashion business credentials.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zara Bridal Styling Studio"
                        value={vendorForm.businessName}
                        onChange={(e) => setVendorForm({ ...vendorForm, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Lead Stylist / Founder"
                        value={vendorForm.contactPerson}
                        onChange={(e) => setVendorForm({ ...vendorForm, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Official Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234..."
                        value={vendorForm.phone}
                        onChange={(e) => setVendorForm({ ...vendorForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Instagram Handle or Website *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="@yourbridalbrand"
                        value={vendorForm.socialHandle}
                        onChange={(e) => setVendorForm({ ...vendorForm, socialHandle: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Client Wedding Date
                      </label>
                      <input
                        type="date"
                        value={vendorForm.clientWeddingDate}
                        onChange={(e) => setVendorForm({ ...vendorForm, clientWeddingDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Gown of Interest
                      </label>
                      <select
                        value={vendorForm.selectedGownInterest}
                        onChange={(e) => setVendorForm({ ...vendorForm, selectedGownInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      >
                        {rentalGowns.map(g => (
                          <option key={g.id} value={g.name}>{g.name} ({g.categoryLabel})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                      Business Address / Special Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Location of your studio or details about your bride's dress fitting timeline..."
                      value={vendorForm.specialRequests}
                      onChange={(e) => setVendorForm({ ...vendorForm, specialRequests: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#111111] hover:bg-[#252422] text-[#F5F1E8] border border-[#C59B3F]/60 py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                  >
                    SUBMIT VENDOR PARTNERSHIP REQUEST
                  </button>
                </form>
              )}

            </div>
          )}

          {/* TAB 3: RENTAL POLICY */}
          {activeTab === 'policy' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-[#FAF7F0] border border-[#E5DEC9] p-6 space-y-2">
                <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
                  CLEAR STANDARDS FOR EVERY BRIDE & VENDOR
                </span>
                <h3 className="font-serif text-2xl text-[#111111]">
                  BEAJAY Rental Policy & Terms
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  We take pride in preserving our gowns in immaculate couture condition so that every bride steps down the aisle looking radiant and royal.
                </p>
              </div>

              <div className="space-y-4">
                {RENTAL_POLICIES.map((policy, idx) => (
                  <div key={idx} className="bg-white border border-[#EAE3D5] p-5 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C59B3F] font-serif font-medium text-sm">0{idx + 1}.</span>
                      <h4 className="font-sans text-xs sm:text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                        {policy.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed pl-6">
                      {policy.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
                <AlertCircle className="w-5 h-5 text-[#C59B3F] shrink-0 mt-0.5" />
                <p>
                  Have custom dates or require multi-gown holds for destination weddings outside Enugu? 
                  Reach out to our bridal concierge team directly via WhatsApp for customized rental agreements.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#EAE3D5] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span>Enugu Studio • Showroom Viewings By Appointment</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onBookFitting(undefined, 'gown-rental')}
              className="text-[#856122] font-semibold hover:underline"
            >
              Book Rental Fitting
            </button>
            <span>•</span>
            <button
              onClick={onClose}
              className="text-neutral-700 hover:text-neutral-900"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
