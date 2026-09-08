import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Ruler, Instagram } from 'lucide-react';

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessSchedule?: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [preferredSilhouette, setPreferredSilhouette] = useState('Ball Gown with Cathedral Train');
  const [budgetTier, setBudgetTier] = useState('Signature Cathedral & Beading');
  const [customNotes, setCustomNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 z-10 cursor-pointer bg-white/80 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#F5EFE0] border-2 border-[#C59B3F] rounded-full flex items-center justify-center mx-auto text-[#C59B3F]">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
                BESPOKE COUTURE ENQUIRY RECORDED
              </span>
              <h3 className="font-serif text-3xl text-[#111111] font-normal">
                Your Custom Gown Journey Begins, {fullName || 'Bride'}
              </h3>
              <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                Our head couture atelier in Enugu, Nigeria will review your silhouette vision and prepare preliminary sketch inspirations and fabric options before your private fitting consultation.
              </p>
            </div>

            <div className="p-4 bg-[#F7F3EB] border border-[#E5DEC9] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Selected Silhouette:</span>
                <span className="font-medium text-neutral-900">{preferredSilhouette}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Event Date:</span>
                <span className="font-medium text-neutral-900">{weddingDate || 'To be specified'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Design Tier:</span>
                <span className="font-medium text-neutral-900">{budgetTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Location:</span>
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
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            <div className="text-center space-y-2 mb-8 border-b border-[#EAE3D5] pb-6">
              <span className="text-[10px] tracking-[0.24em] font-semibold text-[#C59B3F] uppercase">
                MADE-TO-MEASURE ATELIER
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                Enquire About a Custom Gown
              </h2>
              <p className="text-xs text-neutral-600 font-light max-w-lg mx-auto">
                Collaborate directly with BEAJAY COUTURE BRIDAL to design, structure, and hand-embroider a wedding gown tailored purely to your story.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Somtochukwu Okoye"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Wedding Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                    Desired Silhouette
                  </label>
                  <select
                    value={preferredSilhouette}
                    onChange={(e) => setPreferredSilhouette(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                  >
                    <option value="Ball Gown with Cathedral Train">Royal Ball Gown (Grand Skirt)</option>
                    <option value="Sculpted Hourglass Mermaid">Sculpted Mermaid / Trumpet</option>
                    <option value="Ethereal Chantilly A-Line">Romantic Flowing A-Line</option>
                    <option value="Modern Architectural Sheath">Modern Column Sheath</option>
                    <option value="Sparkling Reception Gown">Crystal Reception Dress</option>
                    <option value="2-in-1 Transformable Gown">2-in-1 Transformable (Detachable Skirt)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                  Design Scope Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {['Intimate & Minimalist Couture', 'Signature Cathedral & Beading', 'Haute Royal Masterpiece'].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudgetTier(tier)}
                      className={`p-2.5 text-center border text-[11px] transition-all cursor-pointer ${
                        budgetTier === tier
                          ? 'border-[#C59B3F] bg-[#FAF6EE] text-[#111111] font-medium'
                          : 'border-[#E0D9CC] bg-white text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-neutral-700 mb-1">
                  Describe Your Dream Gown (Neckline, Lace, Sleeves, Venue Inspiration)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about neckline preference (sweetheart, illusion, high collar), train length, sparkle level, or any Instagram references you love..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D5CDBF] text-xs focus:outline-none focus:border-[#C59B3F]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-4 px-6 text-xs font-semibold tracking-[0.2em] uppercase transition-colors shadow-lg cursor-pointer"
                >
                  <Ruler className="w-4 h-4" />
                  <span>SUBMIT BESPOKE ENQUIRY</span>
                </button>
                <p className="text-[11px] text-center text-neutral-500 mt-2">
                  Atelier located in Enugu, Nigeria. Private consultation includes fabric swatch exploration.
                </p>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

