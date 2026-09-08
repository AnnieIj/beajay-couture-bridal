import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  ArrowRight,
  Sparkles,
  Bookmark
} from 'lucide-react';
import { ActiveModal } from '../types';

interface HeaderProps {
  onOpenModal: (modal: ActiveModal, payload?: any) => void;
  activeView: string;
  onNavigateHome: () => void;
  savedGownsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  activeView,
  onNavigateHome,
  savedGownsCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rentalsDropdownOpen, setRentalsDropdownOpen] = useState(false);
  const [mobileRentalsExpanded, setMobileRentalsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, modalType?: ActiveModal) => {
    setMobileMenuOpen(false);
    setRentalsDropdownOpen(false);

    if (modalType) {
      onOpenModal(modalType);
      return;
    }

    if (sectionId === 'home') {
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-sm border-b border-[#EAE4D9]' 
          : 'bg-[#FCFAF7] border-b border-[#EFECE5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Brand Logo / Wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start text-left group cursor-pointer focus:outline-none"
            aria-label="BEAJAY COUTURE BRIDAL Home"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-[#111111] uppercase font-light leading-none group-hover:text-[#C59B3F] transition-colors">
              BEAJAY
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.38em] text-[#C59B3F] font-semibold uppercase mt-1">
              COUTURE BRIDAL
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7 text-[12.5px] font-medium tracking-[0.14em] uppercase text-neutral-800">
            
            {/* Home */}
            <button 
              onClick={() => handleNavClick('home')}
              className={`relative py-2 hover:text-[#C59B3F] transition-colors cursor-pointer ${
                activeView === 'home' ? 'text-[#C59B3F]' : ''
              }`}
            >
              Home
              {activeView === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C59B3F]" />
              )}
            </button>

            {/* Collections */}
            <button 
              onClick={() => handleNavClick('featured-collections', 'collections')}
              className="py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
            >
              Collections
            </button>

            {/* Rentals with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setRentalsDropdownOpen(true)}
              onMouseLeave={() => setRentalsDropdownOpen(false)}
            >
              <button 
                onClick={() => onOpenModal('rentals', { defaultTab: 'bride' })}
                className="flex items-center gap-1 py-2 hover:text-[#C59B3F] transition-colors cursor-pointer"
                aria-expanded={rentalsDropdownOpen}
                aria-haspopup="true"
              >
                Rentals
                <ChevronDown className={`w-3.5 h-3.5 text-[#C59B3F] transition-transform duration-200 ${
                  rentalsDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              {rentalsDropdownOpen && (
                <div 
                  role="menu"
                  className="absolute top-full left-0 w-64 bg-[#111111] text-[#EFECE5] shadow-2xl border border-[#2D2A26] py-2 animate-in fade-in slide-in-from-top-2 duration-150 rounded-none z-50"
                >
                  <div className="px-4 py-2 border-b border-[#252320] mb-1">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C59B3F] font-semibold">
                      Gown Rental Services
                    </span>
                  </div>
                  
                  <button
                    role="menuitem"
                    onClick={() => {
                      setRentalsDropdownOpen(false);
                      onOpenModal('rentals', { defaultTab: 'bride' });
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#1E1D1B] hover:text-[#C59B3F] transition-colors flex flex-col cursor-pointer"
                  >
                    <span className="font-medium text-xs">For Brides</span>
                    <span className="text-[10px] tracking-normal text-neutral-400 capitalize">
                      Rent your dream gown for your big day
                    </span>
                  </button>

                  <button
                    role="menuitem"
                    onClick={() => {
                      setRentalsDropdownOpen(false);
                      onOpenModal('vendor-rentals', { defaultTab: 'vendor' });
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#1E1D1B] hover:text-[#C59B3F] transition-colors flex flex-col cursor-pointer"
                  >
                    <span className="font-medium text-xs flex items-center justify-between">
                      For Vendors
                      <span className="text-[9px] bg-[#C59B3F]/20 text-[#C59B3F] px-1.5 py-0.5 rounded-none font-sans">
                        Partners
                      </span>
                    </span>
                    <span className="text-[10px] tracking-normal text-neutral-400 capitalize">
                      Exclusive access for bridal stylists & boutiques
                    </span>
                  </button>

                  <button
                    role="menuitem"
                    onClick={() => {
                      setRentalsDropdownOpen(false);
                      onOpenModal('rental-policy', { defaultTab: 'policy' });
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#1E1D1B] hover:text-[#C59B3F] transition-colors flex flex-col cursor-pointer border-t border-[#252320] mt-1"
                  >
                    <span className="font-medium text-xs">Rental Policy & Terms</span>
                    <span className="text-[10px] tracking-normal text-neutral-400 capitalize">
                      Fittings, reservations & care standards
                    </span>
                  </button>
                </div>
              )}
            </div>


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

            {/* Saved Wishlist */}
            <button
              onClick={() => onOpenModal('collections', { filter: 'saved' })}
              aria-label="Wishlist"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-700 hover:text-[#C59B3F] transition-colors relative cursor-pointer focus:outline-none"
              title="Saved Gowns"
            >
              <Bookmark className="w-5 h-5" />
              {savedGownsCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#C59B3F] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {savedGownsCount}
                </span>
              )}
            </button>

            {/* Prominent Gold Book Appointment / Enquire Button (Matches Reference Image) */}
            <button
              id="header-enquire-btn"
              onClick={() => onOpenModal('appointment')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] active:bg-[#9E7724] text-white px-5 py-2.5 min-h-[44px] text-[11.5px] font-semibold tracking-[0.16em] uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-800 hover:text-[#C59B3F] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-menu"
          className="xl:hidden bg-[#FCFAF7] border-b border-[#EAE4D9] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3 text-sm font-medium tracking-[0.12em] uppercase text-neutral-800 border-b border-[#EAE4D9] pb-5">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between"
            >
              <span>Home</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">01</span>
            </button>

            <button 
              onClick={() => handleNavClick('featured-collections', 'collections')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between"
            >
              <span>Collections</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">02</span>
            </button>

            {/* Rentals Sub-menu on Mobile */}
            <div className="py-1">
              <button 
                onClick={() => setMobileRentalsExpanded(!mobileRentalsExpanded)}
                className="w-full text-left py-2 flex items-center justify-between hover:text-[#C59B3F]"
              >
                <span>Rentals</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileRentalsExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileRentalsExpanded && (
                <div className="pl-4 py-2 space-y-2.5 border-l-2 border-[#C59B3F]/40 my-1 bg-[#F5F1E8]/50 p-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal('rentals', { defaultTab: 'bride' });
                    }}
                    className="block w-full text-left py-1 text-xs font-medium text-neutral-800 hover:text-[#C59B3F]"
                  >
                    For Brides
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal('vendor-rentals', { defaultTab: 'vendor' });
                    }}
                    className="block w-full text-left py-1 text-xs font-medium text-neutral-800 hover:text-[#C59B3F]"
                  >
                    For Vendors (Bridal Partners)
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal('rental-policy', { defaultTab: 'policy' });
                    }}
                    className="block w-full text-left py-1 text-xs font-medium text-neutral-800 hover:text-[#C59B3F]"
                  >
                    Rental Policy & Terms
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('bespoke-section', 'bespoke')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between"
            >
              <span>Bespoke Couture</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">04</span>
            </button>

            <button 
              onClick={() => handleNavClick('bridal-gallery', 'gallery')}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between"
            >
              <span>Gallery</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">05</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('about');
              }}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between"
            >
              <span>About Atelier</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">06</span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('contact');
              }}
              className="text-left py-2 hover:text-[#C59B3F] flex items-center justify-between"
            >
              <span>Contact & Studio</span>
              <span className="text-[10px] text-[#C59B3F] tracking-widest">07</span>
            </button>
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('appointment');
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#C59B3F] hover:bg-[#B3892F] text-white py-3 px-4 text-xs font-semibold tracking-[0.16em] uppercase shadow cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <p className="text-center text-[11px] text-neutral-500 tracking-wider">
              Enugu, Nigeria • Fittings By Private Booking
            </p>
          </div>

        </div>
      )}
    </header>
  );
};
