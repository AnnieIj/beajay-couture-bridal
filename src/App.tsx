import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PerfectDressSection } from './components/PerfectDressSection';
import { FeaturedCollectionSection } from './components/FeaturedCollectionSection';
import { GownRentalsSection } from './components/GownRentalsSection';
import { BespokeSection } from './components/BespokeSection';
import { BridalExperienceSection } from './components/BridalExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentCtaSection } from './components/AppointmentCtaSection';
import { Footer } from './components/Footer';

import { AppointmentModal } from './components/AppointmentModal';
import { RentalsModal } from './components/RentalsModal';
import { CollectionsModal } from './components/CollectionsModal';
import { BespokeModal } from './components/BespokeModal';
import { GownDetailModal } from './components/GownDetailModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { SearchModal } from './components/SearchModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';

import { ActiveModal, GownItem, GalleryItem } from './types';
import { GOWNS_CATALOG, GALLERY_ITEMS } from './data/bridalData';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [modalPayload, setModalPayload] = useState<any>(null);
  const [selectedGown, setSelectedGown] = useState<GownItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [savedGownIds, setSavedGownIds] = useState<string[]>(['bj-01', 'bj-02']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedGalleryItem) {
          setSelectedGalleryItem(null);
        } else if (selectedGown && activeModal !== 'gown-detail') {
          setSelectedGown(null);
        } else if (activeModal) {
          closeModal();
        }
      }
    };

    const isAnyModalOpen = activeModal !== null || selectedGalleryItem !== null || selectedGown !== null;
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModal, selectedGalleryItem, selectedGown]);

  const openModal = (modal: ActiveModal, payload?: any) => {
    setModalPayload(payload || null);
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalPayload(null);
  };

  const handleSelectGown = (gown: GownItem) => {
    setSelectedGown(gown);
    openModal('gown-detail');
  };

  const handleToggleSave = (gownId: string) => {
    setSavedGownIds((prev) => {
      const exists = prev.includes(gownId);
      const updated = exists ? prev.filter(id => id !== gownId) : [...prev, gownId];
      
      const gown = GOWNS_CATALOG.find(g => g.id === gownId);
      setToastMessage(exists ? `Removed from wishlist` : `Added "${gown?.name || 'Gown'}" to wishlist`);
      setTimeout(() => setToastMessage(null), 3000);
      
      return updated;
    });
  };

  const handleBookFittingFromGown = (gownName?: string, service?: any) => {
    closeModal();
    openModal('appointment', { 
      preselectedGown: gownName, 
      defaultService: service || 'bridal-styling' 
    });
  };

  const handleExploreCollections = () => {
    const el = document.getElementById('featured-collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      openModal('collections');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#1A1A1A] font-sans">
      
      {/* Top Announcement Bar */}
      <AnnouncementBar onContactClick={() => openModal('contact')} />

      {/* Main Sticky Header */}
      <Header
        onOpenModal={openModal}
        activeView="home"
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        savedGownsCount={savedGownIds.length}
      />

      <main className="flex-1">
        {/* HERO SECTION — Cinematic Background Video */}
        <HeroSection
          onOpenModal={openModal}
          onExploreCollections={handleExploreCollections}
        />

        {/* SECTION 2 — FIND YOUR PERFECT DRESS */}
        <PerfectDressSection
          onOpenModal={openModal}
          onViewCollections={() => openModal('collections')}
        />

        {/* SECTION 3 — FEATURED BRIDAL COLLECTION */}
        <FeaturedCollectionSection
          onOpenModal={openModal}
          onSelectGown={handleSelectGown}
        />

        {/* SECTION 4 — GOWN RENTALS (Brides & Vendors) */}
        <GownRentalsSection
          onOpenModal={openModal}
        />

        {/* SECTION 5 — BESPOKE BRIDAL (Your Gown. Your Story.) */}
        <BespokeSection
          onOpenModal={openModal}
        />

        {/* SECTION 6 — THE BRIDAL EXPERIENCE (01 to 04) */}
        <BridalExperienceSection
          onOpenModal={openModal}
        />

        {/* SECTION 7 — WHAT OUR BRIDES SAY (Testimonials) */}
        <TestimonialsSection />

        {/* SECTION 8 — MOMENTS THAT MATTER (Bridal Gallery) */}
        <GallerySection
          onOpenModal={openModal}
          onOpenLightbox={(item) => setSelectedGalleryItem(item)}
        />

        {/* SECTION 9 — APPOINTMENT CTA */}
        <AppointmentCtaSection
          onOpenModal={openModal}
        />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenModal={openModal}
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111111] text-white px-5 py-3 text-xs tracking-wider border border-[#C59B3F] shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B3F]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =======================================================
          MODALS & INTERACTIVE OVERLAYS
          ======================================================= */}

      {/* 1. Appointment Booking Modal */}
      <AppointmentModal
        isOpen={activeModal === 'appointment'}
        onClose={closeModal}
        preselectedGown={modalPayload?.preselectedGown}
        defaultService={modalPayload?.defaultService || 'bridal-styling'}
      />

      {/* 2. Rentals Modal (Bride Rentals, Vendor Rentals, Rental Policy) */}
      <RentalsModal
        isOpen={activeModal === 'rentals' || activeModal === 'vendor-rentals' || activeModal === 'rental-policy'}
        onClose={closeModal}
        defaultTab={
          activeModal === 'vendor-rentals' 
            ? 'vendor' 
            : activeModal === 'rental-policy' 
            ? 'policy' 
            : modalPayload?.defaultTab || 'bride'
        }
        onBookFitting={handleBookFittingFromGown}
        onSelectGown={handleSelectGown}
      />

      {/* 3. Collections Modal */}
      <CollectionsModal
        isOpen={activeModal === 'collections'}
        onClose={closeModal}
        defaultCategory={modalPayload?.defaultCategory}
        filterMode={modalPayload?.filter}
        onSelectGown={handleSelectGown}
        onBookAppointment={handleBookFittingFromGown}
        savedGownIds={savedGownIds}
        onToggleSave={handleToggleSave}
      />

      {/* 4. Bespoke Couture Modal */}
      <BespokeModal
        isOpen={activeModal === 'bespoke'}
        onClose={closeModal}
      />

      {/* 5. Gown Detail Sheet Modal */}
      <GownDetailModal
        gown={selectedGown}
        onClose={() => {
          setSelectedGown(null);
          if (activeModal === 'gown-detail') closeModal();
        }}
        onBookFitting={handleBookFittingFromGown}
        isSaved={selectedGown ? savedGownIds.includes(selectedGown.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* 6. Gallery Lightbox / Story Reel Video Modal */}
      <GalleryLightbox
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onBookAppointment={() => {
          setSelectedGalleryItem(null);
          openModal('appointment');
        }}
      />

      {/* 7. Search Modal */}
      <SearchModal
        isOpen={activeModal === 'search'}
        onClose={closeModal}
        onSelectGown={handleSelectGown}
      />

      {/* 8. About Atelier Modal */}
      <AboutModal
        isOpen={activeModal === 'about'}
        onClose={closeModal}
        onBookAppointment={() => {
          closeModal();
          openModal('appointment');
        }}
      />

      {/* 9. Contact & Location Modal */}
      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        onOpenAppointment={() => {
          closeModal();
          openModal('appointment');
        }}
      />

    </div>
  );
}
