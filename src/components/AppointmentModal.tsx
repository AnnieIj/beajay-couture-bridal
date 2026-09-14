import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, Send, Instagram } from 'lucide-react';
import { BookingFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGown?: string;
  defaultService?: 'bridal-styling' | 'gown-rental' | 'bespoke-consultation' | 'fitting-alteration';
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedGown,
  defaultService = 'bridal-styling'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    weddingDate: '',
    serviceType: defaultService,
    budgetRange: 'Consultation to Discuss',
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: preselectedGown ? `Interested in trying on: ${preselectedGown}` : '',
    silhouetteInterest: []
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(prev => ({
        ...prev,
        serviceType: defaultService || prev.serviceType,
        notes: preselectedGown ? `Interested in: ${preselectedGown}` : prev.notes
      }));
    }
  }, [isOpen, defaultService, preselectedGown]);

  if (!isOpen) return null;

  const silhouettes = [
    'Ball Gown',
    'Mermaid / Fit-and-Flare',
    'Classic A-Line',
    'Minimalist Sheath',
    'Reception Glamour',
    'Cathedral Veils'
  ];

  const toggleSilhouette = (sil: string) => {
    setFormData(prev => ({
      ...prev,
      silhouetteInterest: prev.silhouetteInterest.includes(sil)
        ? prev.silhouetteInterest.filter(s => s !== sil)
        : [...prev.silhouetteInterest, sil]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 z-10 cursor-pointer bg-white/80 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#F5EFE0] border-2 border-[#C59B3F] rounded-full flex items-center justify-center mx-auto text-[#C59B3F]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
                CONSULTATION REQUEST RECORDED
              </span>
              <h3 className="font-serif text-3xl text-[#111111] font-normal">
                Thank You, {formData.fullName || 'Bride'}
              </h3>
              <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                Your bridal consultation request for BEAJAY in Enugu, Nigeria has been received. 
                Our team will review your schedule and reach out to confirm your appointment slot.
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="bg-[#F6F2E9] border border-[#E5DEC9] p-5 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#E8E1CD] pb-2">
                <span className="text-neutral-500">Service:</span>
                <span className="font-medium text-neutral-900 capitalize">
                  {formData.serviceType.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#E8E1CD] pb-2">
                <span className="text-neutral-500">Requested Date & Time:</span>
                <span className="font-medium text-neutral-900">
                  {formData.preferredDate || 'Pending Schedule'} at {formData.preferredTime}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#E8E1CD] pb-2">
                <span className="text-neutral-500">Contact Number:</span>
                <span className="font-medium text-neutral-900">{formData.phone || 'Provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Studio Location:</span>
                <span className="font-medium text-neutral-900">Enugu, Nigeria</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="https://instagram.com/beajaycouture_bridal"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-6 py-3 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit Instagram @beajaycouture_bridal</span>
              </a>

              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-6 py-3 text-xs border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="text-center space-y-2 mb-8 border-b border-[#EAE3D5] pb-6">
              <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
                ENUGU, NIGERIA
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                Book Your Bridal Consultation
              </h2>
              <p className="text-xs text-neutral-600 font-light">
                Experience a private styling consultation session tailored to your wedding vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-neutral-800 mb-2">
                  Select Consultation Type *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'bridal-styling', label: 'Bridal Styling & Try-On (Collection)' },
                    { id: 'gown-rental', label: 'Gown Rental Consultation' },
                    { id: 'bespoke-consultation', label: 'Bespoke Consultation' },
                    { id: 'fitting-alteration', label: 'Fittings & Alterations' }
                  ].map((service) => (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => setFormData({ ...formData, serviceType: service.id as any })}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        formData.serviceType === service.id
                          ? 'border-[#C59B3F] bg-[#FAF6EE] text-[#111111] font-medium shadow-xs'
                          : 'border-[#E2DBD0] bg-white text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Bride / Client Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Somtochukwu Okoye"
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
                    placeholder="e.g. +234 803 000 0000"
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
                    placeholder="e.g. bride@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Wedding Date / Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  />
                </div>
              </div>

              {/* Date & Time Preferences */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Preferred Consultation Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Session)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:30 PM">1:30 PM (Midday Session)</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:30 PM">4:30 PM (Late Afternoon Session)</option>
                  </select>
                </div>
              </div>

              {/* Silhouettes of Interest */}
              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-2">
                  Silhouettes You Wish to Try (Select Any)
                </label>
                <div className="flex flex-wrap gap-2">
                  {silhouettes.map((sil) => {
                    const isSelected = formData.silhouetteInterest.includes(sil);
                    return (
                      <button
                        type="button"
                        key={sil}
                        onClick={() => toggleSilhouette(sil)}
                        className={`text-xs px-3 py-1.5 border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#C59B3F] text-white border-[#C59B3F]'
                            : 'bg-white text-neutral-700 border-[#DDD5C5] hover:border-neutral-400'
                        }`}
                      >
                        {sil}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                  Bridal Vision or Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your ceremony theme, veil preferences, or specific gown from our catalogue..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CONFIRM APPOINTMENT REQUEST</span>
                </button>
                <p className="text-[11px] text-center text-neutral-500 mt-2">
                  No payment required today. All fittings in Enugu, Nigeria are private and personalized.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};

