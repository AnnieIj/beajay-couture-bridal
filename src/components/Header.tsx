import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ActiveModal } from '../types';
import { BRAND_CONTACT, buildWhatsAppUrl } from '../config/brandConfig';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { BrandIdentity } from './BrandIdentity';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  activeView: string;
  onNavigateHome: () => void;
  onNavigateCollections?: () => void;
  onNavigateRentals?: () => void;
  onNavigateGallery?: () => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onNavigateAcademy?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  activeView,
  onNavigateHome,
  onNavigateCollections,
  onNavigateRentals,
  onNavigateGallery,
  onNavigateAbout,
  onNavigateContact,
  onNavigateAcademy
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

    if (modalType === 'rentals' && onNavigateRentals) {
      onNavigateRentals();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (modalType === 'gallery' && onNavigateGallery) {
      onNavigateGallery();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (modalType === 'about' && onNavigateAbout) {
      onNavigateAbout();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (modalType === 'contact' && onNavigateContact) {
      onNavigateContact();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (modalType === 'academy' && onNavigateAcademy) {
      onNavigateAcademy();
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
          ? 'bg-[#FCFAF7]/95 dark:bg-[#0C0C0B]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#EAE4D9] dark:border-white/10' 
          : 'bg-[#FCFAF7] dark:bg-[#0C0C0B] py-5 border-b border-[#EAE4D9]/80 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Refined Brand Identity */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer focus:outline-none py-0.5"
            aria-label="BEAJAY COUTURE BRIDAL - Home"
          >
            <BrandIdentity variant="header" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-[11px] font-medium tracking-[0.14em] uppercase text-neutral-800 dark:text-[#E8E3D8]">
            {/* Home */}
            <button 
              onClick={() => handleNavClick('home')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer ${
                activeView === 'home' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              Home
            </button>

            {/* Collections */}
            <button 
              onClick={() => handleNavClick('featured-collections', 'collections')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer ${
                activeView === 'collections' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              Collections
            </button>

            {/* Rentals - Single Unified Direct Link */}
            <button
              onClick={() => handleNavClick('gown-rentals-section', 'rentals')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer ${
                activeView === 'rentals' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              Rentals
            </button>

            {/* Gallery */}
            <button 
              onClick={() => handleNavClick('bridal-gallery', 'gallery')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer ${
                activeView === 'gallery' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              Gallery
            </button>

            {/* About */}
            <button 
              onClick={() => handleNavClick('about-page', 'about')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer ${
                activeView === 'about' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              About
            </button>

            {/* Academy (Phase 1) */}
            <button 
              onClick={() => handleNavClick('academy-page', 'academy')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                activeView === 'academy' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              <span>Academy</span>
              <span className="text-[8.5px] px-1 py-0.5 bg-[#C59B3F]/15 dark:bg-[#E6C875]/15 text-[#856122] dark:text-[#E6C875] tracking-wider rounded-xs font-semibold">SOON</span>
            </button>

            {/* Book Appointment */}
            <button 
              onClick={() => onOpenModal('appointment')}
              className="py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer"
            >
              Book Appointment
            </button>

            {/* Contact */}
            <button 
              onClick={() => handleNavClick('contact-page', 'contact')}
              className={`py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer ${
                activeView === 'contact' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Search */}
            <button
              onClick={() => onOpenModal('search')}
              aria-label="Search Gowns"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-700 dark:text-[#E8E3D8] hover:text-[#C59B3F] dark:hover:text-[#E6C875] transition-colors cursor-pointer focus:outline-none"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Desktop Theme Toggle */}
            <ThemeToggle className="hidden md:flex" />

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
              className="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-800 dark:text-[#F8F5EE] hover:text-[#C59B3F] dark:hover:text-[#E6C875] focus:outline-none cursor-pointer"
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
          className="xl:hidden bg-[#FCFAF7] dark:bg-[#121110] border-b border-[#EAE4D9] dark:border-white/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3 text-sm font-medium tracking-[0.12em] uppercase text-neutral-800 dark:text-[#F8F5EE] border-b border-[#EAE4D9] dark:border-white/10 pb-5">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer"
            >
              <span>Home</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">01</span>
            </button>

            <button 
              onClick={() => handleNavClick('featured-collections', 'collections')}
              className="text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer"
            >
              <span>Collections</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">02</span>
            </button>

            {/* Rentals - Direct link */}
            <button 
              onClick={() => handleNavClick('gown-rentals-section', 'rentals')}
              className="text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer"
            >
              <span>Rentals</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">03</span>
            </button>

            <button 
              onClick={() => handleNavClick('bridal-gallery', 'gallery')}
              className={`text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer ${
                activeView === 'gallery' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              <span>Gallery</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">04</span>
            </button>

            <button 
              onClick={() => handleNavClick('about-page', 'about')}
              className={`text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer ${
                activeView === 'about' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              <span>About</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">05</span>
            </button>

            <button 
              onClick={() => handleNavClick('academy-page', 'academy')}
              className={`text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer ${
                activeView === 'academy' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <span>Academy</span>
                <span className="text-[8.5px] px-1.5 py-0.5 bg-[#C59B3F]/15 dark:bg-[#E6C875]/15 text-[#856122] dark:text-[#E6C875] tracking-wider rounded-xs font-semibold">SOON</span>
              </div>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">06</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('appointment');
              }}
              className="text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer"
            >
              <span>Book Appointment</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">07</span>
            </button>

            <button 
              onClick={() => handleNavClick('contact-page', 'contact')}
              className={`text-left py-2 hover:text-[#C59B3F] dark:hover:text-[#E6C875] flex items-center justify-between cursor-pointer ${
                activeView === 'contact' ? 'text-[#C59B3F] dark:text-[#E6C875] font-semibold' : ''
              }`}
            >
              <span>Contact</span>
              <span className="text-[10px] text-[#C59B3F] dark:text-[#E6C875] tracking-widest">08</span>
            </button>

            {/* Appearance Toggle */}
            <div className="flex items-center justify-between py-2 border-t border-[#EAE4D9]/60 dark:border-white/10 pt-3">
              <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-600 dark:text-[#D4CEC3] font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="pt-2 space-y-2.5">
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

            <a
              href={buildWhatsAppUrl({ type: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#121A15] hover:bg-[#1A261F] text-white border border-[#25D366]/40 py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <p className="text-center text-[11px] text-neutral-500 dark:text-[#A39D93] tracking-wider pt-1">
              Enugu, Nigeria
            </p>
          </div>

        </div>
      )}
    </header>
  );
};
