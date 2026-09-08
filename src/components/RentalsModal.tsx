import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Sparkles
} from 'lucide-react';
import { GOWNS_CATALOG, RENTAL_POLICIES } from '../data/bridalData';
import { GownItem, RenterType, RentalInquiryFormData } from '../types';

interface RentalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGown: (gown: GownItem) => void;
  initialGownName?: string;
  initialAction?: 'browse' | 'request';
}

export const RentalsModal: React.FC<RentalsModalProps> = ({
  isOpen,
  onClose,
  onSelectGown,
  initialGownName,
  initialAction = 'browse'
}) => {
  const rentalGowns = GOWNS_CATALOG.filter(g => g.isAvailableForRent);

  const [view, setView] = useState<'browse' | 'request'>(initialAction);
  const [renterType, setRenterType] = useState<RenterType>('individual');
  const [formData, setFormData] = useState<RentalInquiryFormData>({
    renterType: 'individual',
    fullName: '',
    phone: '',
    email: '',
    weddingDate: '',
    selectedGownName: initialGownName || rentalGowns[0]?.name || '',
    businessName: '',
    businessType: '',
    socialHandle: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialAction === 'request' || initialGownName) {
        setView('request');
      } else {
        setView('browse');
      }
      if (initialGownName) {
        setFormData(prev => ({ ...prev, selectedGownName: initialGownName }));
      }
      setSubmitted(false);
    }
  }, [isOpen, initialAction, initialGownName]);

  useEffect(() => {
    setFormData(prev => ({ ...prev, renterType }));
  }, [renterType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const startRequestForGown = (gownName: string) => {
    setFormData(prev => ({ ...prev, selectedGownName: gownName }));
    setView('request');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#EAE3D5] flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
              BEAJAY GOWN RENTALS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
              {view === 'browse' ? 'Couture Gown Rentals' : 'Gown Rental Request'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action / View Switch Bar */}
        <div className="px-5 sm:px-8 py-3.5 border-b border-[#E8E1D2] bg-[#FAF7F0] flex items-center justify-between text-xs">
          {view === 'request' ? (
            <button
              onClick={() => setView('browse')}
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-[#C59B3F] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Rental Gowns</span>
            </button>
          ) : (
            <span className="text-neutral-600 font-light">
              All gowns eligible for rental in Enugu, Nigeria ({rentalGowns.length} styles)
            </span>
          )}

          {view === 'browse' && (
            <button
              onClick={() => setView('request')}
              className="inline-flex items-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
            >
              <span>Start Rental Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* VIEW 1: UNIFIED RENTAL GOWNS BROWSING */}
          {view === 'browse' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Introduction Banner */}
              <div className="bg-[#FAF6EE] border border-[#EADBBD] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-[#111111]">
                    Rent Your Dream Dress for Your Ceremony
                  </h3>
                  <p className="text-xs text-neutral-600 font-light max-w-xl leading-relaxed">
                    Access our luxury bridal couture silhouettes with dedicated fittings, temporary basting adjustments, and meticulous post-event cleaning.
                  </p>
                </div>
                <button
                  onClick={() => setView('request')}
                  className="shrink-0 bg-[#111111] hover:bg-[#252422] text-white py-3 px-6 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Request a Rental
                </button>
              </div>

              {/* Gowns Grid */}
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
                        loading="lazy"
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
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => onSelectGown(gown)}
                            className="w-full py-2 px-2 text-[10.5px] border border-neutral-300 hover:border-neutral-800 text-neutral-800 uppercase tracking-wider text-center cursor-pointer"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => startRequestForGown(gown.name)}
                            className="w-full py-2 px-2 text-[10.5px] bg-[#C59B3F] hover:bg-[#B3892F] text-white uppercase tracking-wider text-center font-semibold cursor-pointer"
                          >
                            Rent Gown
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rental Guidelines & Assurance */}
              <div className="pt-6 border-t border-[#EAE3D5] space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C59B3F] uppercase">
                    RENTAL STANDARDS
                  </span>
                  <h3 className="font-serif text-xl text-[#111111]">
                    BEAJAY Rental Guidelines
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {RENTAL_POLICIES.map((policy, idx) => (
                    <div key={idx} className="bg-white border border-[#EAE3D5] p-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[#C59B3F] font-serif font-medium text-xs">0{idx + 1}.</span>
                        <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                          {policy.title}
                        </h4>
                      </div>
                      <p className="text-[11.5px] text-neutral-600 font-light leading-relaxed pl-5">
                        {policy.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* VIEW 2: UNIFIED RENTAL REQUEST FORM */}
          {view === 'request' && (
            <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
              
              {submitted ? (
                <div className="bg-white border border-[#E5DEC9] p-8 sm:p-10 text-center space-y-4 shadow-sm">
                  <div className="w-14 h-14 bg-[#FAF5E8] border border-[#C59B3F] rounded-full flex items-center justify-center mx-auto text-[#C59B3F]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    Rental Request Received
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="font-medium text-neutral-900">{formData.fullName || formData.businessName}</strong>. 
                    Our bridal concierge in Enugu, Nigeria will review gown availability for your date and get in touch shortly.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#856122] underline tracking-wider uppercase font-semibold cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <span className="text-neutral-300">•</span>
                    <button
                      onClick={() => setView('browse')}
                      className="text-neutral-700 hover:text-neutral-900 tracking-wider uppercase font-semibold cursor-pointer"
                    >
                      Return to Rental Gowns
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-[#EAE3D5] p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="border-b border-[#EAE3D5] pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#111111]">
                      Gown Rental Inquiry
                    </h3>
                    <p className="text-xs text-neutral-500 font-light mt-1">
                      Both individual brides and bridal vendors share this unified rental inquiry flow.
                    </p>
                  </div>

                  {/* Primary Selection: I am renting as: */}
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-2.5">
                      I am renting as: *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label 
                        className={`flex items-center gap-3 p-3.5 border cursor-pointer transition-colors ${
                          renterType === 'individual'
                            ? 'border-[#C59B3F] bg-[#FAF6EE] text-neutral-900 font-medium'
                            : 'border-[#D5CDBF] bg-white text-neutral-700 hover:border-neutral-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="renterType"
                          value="individual"
                          checked={renterType === 'individual'}
                          onChange={() => setRenterType('individual')}
                          className="accent-[#C59B3F] cursor-pointer"
                        />
                        <span className="text-xs uppercase tracking-wider font-semibold">
                          Individual / Bride
                        </span>
                      </label>

                      <label 
                        className={`flex items-center gap-3 p-3.5 border cursor-pointer transition-colors ${
                          renterType === 'vendor'
                            ? 'border-[#C59B3F] bg-[#FAF6EE] text-neutral-900 font-medium'
                            : 'border-[#D5CDBF] bg-white text-neutral-700 hover:border-neutral-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="renterType"
                          value="vendor"
                          checked={renterType === 'vendor'}
                          onChange={() => setRenterType('vendor')}
                          className="accent-[#C59B3F] cursor-pointer"
                        />
                        <span className="text-xs uppercase tracking-wider font-semibold">
                          Bridal Vendor / Business
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Conditionally Revealed Fields for Bridal Vendor / Business */}
                  {renterType === 'vendor' && (
                    <div className="p-4 sm:p-5 bg-[#FAF7F0] border border-[#E8E1D2] space-y-4 animate-in fade-in duration-200">
                      <div className="text-[11px] font-semibold tracking-wider uppercase text-[#856122]">
                        Business & Styling Credentials
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                            Business / Brand Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Zara Bridal Styling"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                            Business Type
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Stylist, Boutique, Wardrobe"
                            value={formData.businessType}
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                            Official Social Handle or Website *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="@yourbridalbrand or website"
                            value={formData.socialHandle}
                            onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Core Renter Fields (Same Flow for Both) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        {renterType === 'vendor' ? 'Contact Person Name *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chioma Okafor"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Ceremony / Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                        Gown of Interest *
                      </label>
                      <select
                        value={formData.selectedGownName}
                        onChange={(e) => setFormData({ ...formData, selectedGownName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                      >
                        {rentalGowns.map(g => (
                          <option key={g.id} value={g.name}>
                            {g.name} ({g.categoryLabel})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                      Fitting Notes & Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Notes regarding fitting timeline, alterations, or ceremony location..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#111111] hover:bg-[#252422] text-[#F5F1E8] border border-[#C59B3F]/60 py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors cursor-pointer"
                  >
                    SUBMIT RENTAL REQUEST
                  </button>
                </form>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#EAE3D5] bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span>Enugu, Nigeria</span>
          <button
            onClick={onClose}
            className="text-neutral-700 hover:text-neutral-900 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
