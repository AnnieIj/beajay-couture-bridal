import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ActiveModal } from '../types';

interface HeaderProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  activeView: string;
  onNavigateHome: () => void;
  onNavigateCollections?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  activeView,
  onNavigateHome,
  onNavigateCollections
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, modalType?: ActiveModal) => {
    setMobileMenuOpen(false);

    if (sectionId === 'home') {
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (modalType === 'collections' && onNavigateCollections) {
      onNavigateCollections();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (modalType) {
      onOpenModal(modalType);
      return;
    }

    if (activeView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#EAE4D9]' 
          : 'bg-[#FCFAF7] py-5 border-b border-[#EAE4D9]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Monogram */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left group cursor-pointer"
            aria-label="BEAJAY Couture Bridal - Home"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-[26px] tracking-[0.14em] font-normal text-[#111111] group-hover:text-[#C59B3F] transition-colors uppercase">
              BEAJAY
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.38em] uppercase text-[#666666] font-light -mt-0.5">
              COUTURE BRIDAL
            </span>
            <span className="text-[7.5px] tracking-[0.22em] text-[#C59B3F] uppercase font-medium">
              Enugu, Nigeria
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-[11px] font-medium tracking-[0.14em] uppercase text-neutral-800">
            {/* Home */}
            <button 
              onClick={() => handleNavClick('home')}
              className={`py-2 hover:text-[#C59B3F] transition-colors cursor-pointer ${
                activeView === 'home' ? 'text-[#C59B3F] font-semibold' : ''
              }`}
            >
              Home
            </button>

            {/* Collections */}
            <button 
              onClick={() => handleNavClick('featured-collections', 'collections')}
              className={`py-2 hover:text-[#C59B3F] transition-colors cursor-pointer ${
                activeView === 'collections' ? 'text-[#C59B3F] font-semibold' : ''
              }`}
            >
              Collections
            </button>

            {/* Rentals - Single Unified Direct Link */}
            <button
              onClick={() => handleNavClick('gown-rentals-section', 'rentals')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              Rentals
            </button>

            {/* Bespoke */}
            <button 
              onClick={() => handleNavClick('bespoke-section', 'bespoke')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              Bespoke
            </button>

            {/* Gallery */}
            <button 
              onClick={() => handleNavClick('bridal-gallery', 'gallery')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              Gallery
            </button>

            {/* About */}
            <button 
              onClick={() => onOpenModal('about')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              About
            </button>

            {/* Book Appointment */}
            <button 
              onClick={() => onOpenModal('appointment')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              Book Appointment
            </button>

            {/* Contact */}
            <button 
              onClick={() => onOpenModal('contact')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Quick Search */}
            <button
              onClick={() => onOpenModal('search')}
              aria-label="Search Gowns"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-700 hover:text-[#C59B3F] transition-colors cursor-pointer focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Prominent Gold Book Appointment Button */}
            <button
              onClick={() => onOpenModal('appointment')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-200 shadow-xs cursor-pointer"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-800 hover:text-[#C59B3F] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="xl:hidden bg-[#FCFAF7] border-b border-[#EAE4D9] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3 text-sm font-medium tracking-[0.12em] uppercase text-neutral-800 border-b border-[#EAE4D9] pb-5">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Home</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">01</span>
            </button>

            <button 
              onClick={() => handleNavClick('featured-collections', 'collections')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Collections</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">02</span>
            </button>

            {/* Rentals - Direct link */}
            <button 
              onClick={() => handleNavClick('gown-rentals-section', 'rentals')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Rentals</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">03</span>
            </button>

            <button 
              onClick={() => handleNavClick('bespoke-section', 'bespoke')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Bespoke Couture</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">04</span>
            </button>

            <button 
              onClick={() => handleNavClick('bridal-gallery', 'gallery')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Gallery</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">05</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('about');
              }}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>About Atelier</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">06</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('appointment');
              }}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Book Appointment</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">07</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('contact');
              }}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between cursor-pointer"
            >
              <span>Contact</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">08</span>
            </button>
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('appointment');
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <p className="text-center text-[11px] text-neutral-500 tracking-wider">
              Enugu, Nigeria • By Appointment Only
            </p>
          </div>

        </div>
      )}
    </header>
  );
};
