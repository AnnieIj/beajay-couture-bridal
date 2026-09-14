import React from 'react';
import { X, Sparkles, Compass } from 'lucide-react';
import { BespokeEnquiryFlow } from './BespokeEnquiryFlow';

interface BespokeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGown?: string;
  onNavigateBespokePage?: () => void;
  onBookConsultation?: () => void;
}

export const BespokeModal: React.FC<BespokeModalProps> = ({ 
  isOpen, 
  onClose,
  preselectedGown,
  onNavigateBespokePage,
  onBookConsultation
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FCFAF7] border border-[#DCD5C5] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 z-20 cursor-pointer bg-white/90 rounded-full shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner with Page Link */}
        {onNavigateBespokePage && (
          <div className="bg-[#111111] text-white px-6 py-2.5 flex items-center justify-between text-[11px] pr-14">
            <span className="text-[#C59B3F] font-serif italic">
              Crafted in Nigeria. Made for Brides Everywhere.
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateBespokePage();
              }}
              className="text-[#E6C875] hover:text-white underline cursor-pointer inline-flex items-center gap-1 font-sans font-medium uppercase tracking-wider text-[10px]"
            >
              <span>Explore Full Bespoke Experience</span>
              <Compass className="w-3 h-3" />
            </button>
          </div>
        )}

        <div className="p-2 sm:p-4">
          <BespokeEnquiryFlow
            preselectedGown={preselectedGown}
            onBookConsultation={() => {
              onClose();
              if (onBookConsultation) onBookConsultation();
            }}
          />
        </div>
      </div>
    </div>
  );
};

