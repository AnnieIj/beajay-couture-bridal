import React, { useState } from 'react';
import { X, MapPin, Phone, Mail, Instagram, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointment: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointment
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 z-10 cursor-pointer bg-white/80 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 space-y-8">
          
          <div className="text-center space-y-2 border-b border-[#EAE3D5] pb-6">
            <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
              REACH OUT TO BEAJAY COUTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111111]">
              Contact & Studio Location
            </h2>
            <div className="w-14 h-[2px] bg-[#C59B3F] mx-auto my-2" />
            <p className="text-xs text-neutral-600 font-light">
              We welcome brides and vendor partners by private appointment in Enugu, Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Studio Info Details */}
            <div className="space-y-6 text-xs text-neutral-700 bg-white border border-[#EAE3D5] p-6">
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold tracking-wider uppercase text-[11px]">
                  <MapPin className="w-4 h-4 text-[#C59B3F]" />
                  <span>Atelier Showroom Address</span>
                </div>
                <p className="text-neutral-600 font-light pl-6">
                  85 Chime Avenue, New Haven, Enugu, Enugu State, Nigeria
                </p>
                <span className="text-[10px] text-neutral-400 pl-6 block">
                  (Dedicated VIP Bridal Suite • Private Parking Available)
                </span>
              </div>

              <div className="space-y-1.5 border-t border-[#F2ECE0] pt-4">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold tracking-wider uppercase text-[11px]">
                  <Clock className="w-4 h-4 text-[#C59B3F]" />
                  <span>Fitting & Atelier Hours</span>
                </div>
                <div className="pl-6 space-y-1 text-neutral-600 font-light">
                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p>Saturday: 10:00 AM – 5:00 PM (By Appointment Only)</p>
                  <p>Sunday: Closed for Ceremonies & Rest</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-[#F2ECE0] pt-4">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold tracking-wider uppercase text-[11px]">
                  <Phone className="w-4 h-4 text-[#C59B3F]" />
                  <span>Direct Communication</span>
                </div>
                <div className="pl-6 space-y-1 text-neutral-600 font-light">
                  <p>Phone: +234 803 123 4567 <span className="text-neutral-400">(Placeholder)</span></p>
                  <p>Email: info@beajaycouturebridal.com</p>
                  <p>Instagram: @beajaycouture_bridal</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/2348031234567?text=Hello%20BEAJAY%20Couture%20Bridal,%20I%20would%20like%20to%20reach%20out%20regarding%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white py-3 px-4 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>

            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white border border-[#EAE3D5] p-6 flex flex-col justify-between">
              {sent ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#C59B3F] mx-auto" />
                  <h4 className="font-serif text-2xl text-neutral-900">Message Sent</h4>
                  <p className="text-xs text-neutral-600 font-light max-w-xs mx-auto">
                    Thank you, {name}. Our Enugu studio desk will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs text-[#856122] underline tracking-wider uppercase"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-serif text-lg text-neutral-900">
                    Send Atelier a Message
                  </h4>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Adaeze"
                      className="w-full px-3 py-2 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="+234... or email@domain.com"
                      className="w-full px-3 py-2 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                      Inquiry Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about gown availability, fitting schedules, bespoke timelines..."
                      className="w-full px-3 py-2 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#111111] hover:bg-[#262420] text-white py-3.5 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C59B3F]" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          <div className="pt-2 text-center border-t border-[#EAE3D5]">
            <button
              onClick={() => {
                onClose();
                onOpenAppointment();
              }}
              className="text-xs font-semibold text-[#856122] hover:underline uppercase tracking-wider"
            >
              Prefer to book a private fitting date right now? Click here.
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
