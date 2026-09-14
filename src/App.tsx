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

import { CollectionsPage } from './components/CollectionsPage';
import { GownDetailPage } from './components/GownDetailPage';

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
import { GOWNS_CATALOG } from './data/bridalData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [modalPayload, setModalPayload] = useState<any>(null);
  const [selectedGown, setSelectedGown] = useState<GownItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [collectionCategory, setCollectionCategory] = useState<string>('all');

  // Handle browser history back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard accessibility and body scroll lock
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

  // Route Resolution
  const isCollectionsPage = currentPath === '/collections' || currentPath === '/collections/';
  const gownSlugMatch = currentPath.startsWith('/collections/') 
    ? currentPath.replace('/collections/', '').replace(/\/$/, '')
    : null;

  const matchedGown = gownSlugMatch 
    ? GOWNS_CATALOG.find(g => g.slug === gownSlugMatch || g.id === gownSlugMatch)
    : null;

  // Title update reflecting active page
  useEffect(() => {
    if (matchedGown) {
      document.title = `${matchedGown.name} | BEAJAY COUTURE BRIDAL Collections`;
    } else if (isCollectionsPage) {
      document.title = "Bridal Collections Showcase | BEAJAY COUTURE BRIDAL";
    } else {
      document.title = "BEAJAY COUTURE BRIDAL | Luxury Bridal Couture & Gown Rentals, Enugu";
    }
  }, [matchedGown, isCollectionsPage]);

  // Navigation Helpers
  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToCollections = (category?: string) => {
    if (category) {
      setCollectionCategory(category);
    }
    navigateTo('/collections');
  };

  const navigateToGownDetail = (gown: GownItem) => {
    closeModal();
    setSelectedGown(null);
    navigateTo(`/collections/${gown.slug || gown.id}`);
  };

  const openModal = (modal: ActiveModal, payload?: any) => {
    setModalPayload(payload || null);
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalPayload(null);
  };

  const handleBookFittingFromGown = (gownName?: string, service?: any) => {
    closeModal();
    openModal('appointment', { 
      preselectedGown: gownName, 
      defaultService: service || 'bridal-styling' 
    });
  };

  const handleRentGownFromDetail = (gownName: string) => {
    closeModal();
    openModal('rentals', { 
      action: 'request', 
      gownName 
    });
  };

  const activeNavView = isCollectionsPage || matchedGown ? 'collections' : 'home';

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#1A1A1A] font-sans">
      
      {/* Top Announcement Bar */}
      <AnnouncementBar onContactClick={() => openModal('contact')} />

      {/* Main Sticky Header */}
      <Header
        onOpenModal={openModal}
        activeView={activeNavView}
        onNavigateHome={() => navigateTo('/')}
        onNavigateCollections={navigateToCollections}
      />

      {/* Content Rendering based on route */}
      <div className="flex-1">
        {matchedGown ? (
          /* Dedicated Gown Detail Page (/collections/:slug) */
          <GownDetailPage
            gown={matchedGown}
            onBackToCollections={() => navigateTo('/collections')}
            onSelectGown={navigateToGownDetail}
            onBookFitting={(gownName) => handleBookFittingFromGown(gownName)}
            onCheckRentalAvailability={(gownName) => handleRentGownFromDetail(gownName)}
            onEnquire={(gownName) => openModal('contact', { preselectedGown: gownName })}
          />
        ) : isCollectionsPage ? (
          /* Dedicated Collections Showcase Lookbook (/collections) */
          <CollectionsPage
            onSelectGown={navigateToGownDetail}
            onBookAppointment={(gownName) => handleBookFittingFromGown(gownName)}
            initialCategory={collectionCategory}
          />
        ) : (
          /* Homepage */
          <main>
            {/* HERO SECTION — Cinematic Visuals */}
            <HeroSection
              onOpenModal={openModal}
              onExploreCollections={() => navigateToCollections('all')}
            />

            {/* SECTION 2 — FIND YOUR PERFECT DRESS */}
            <PerfectDressSection
              onOpenModal={openModal}
              onViewCollections={() => navigateToCollections('all')}
            />

            {/* SECTION 3 — FEATURED BRIDAL COLLECTION */}
            <FeaturedCollectionSection
              onOpenModal={openModal}
              onSelectGown={navigateToGownDetail}
              onNavigateCollections={navigateToCollections}
            />

            {/* SECTION 4 — GOWN RENTALS (Unified Rental Service) */}
            <GownRentalsSection
              onOpenModal={openModal}
              onSelectGown={navigateToGownDetail}
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
        )}
      </div>

      {/* FOOTER */}
      <Footer
        onOpenModal={openModal}
        onNavigateHome={() => navigateTo('/')}
        onNavigateCollections={navigateToCollections}
      />

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

      {/* 2. Unified Rentals Modal */}
      <RentalsModal
        isOpen={activeModal === 'rentals'}
        onClose={closeModal}
        onSelectGown={navigateToGownDetail}
        initialGownName={modalPayload?.gownName}
        initialAction={modalPayload?.action || 'browse'}
      />

      {/* 3. Collections Modal (Quick Browse Overlay) */}
      <CollectionsModal
        isOpen={activeModal === 'collections'}
        onClose={closeModal}
        defaultCategory={modalPayload?.defaultCategory}
        onSelectGown={navigateToGownDetail}
        onBookAppointment={handleBookFittingFromGown}
      />

      {/* 4. Bespoke Couture Modal */}
      <BespokeModal
        isOpen={activeModal === 'bespoke'}
        onClose={closeModal}
      />

      {/* 5. Gown Detail Sheet Modal (Quick Preview) */}
      <GownDetailModal
        gown={selectedGown}
        onClose={() => {
          setSelectedGown(null);
          if (activeModal === 'gown-detail') closeModal();
        }}
        onBookFitting={handleBookFittingFromGown}
        onRentGown={handleRentGownFromDetail}
        onViewFullGownPage={navigateToGownDetail}
      />

      {/* 6. Gallery Lightbox / Video Modal */}
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
        onSelectGown={navigateToGownDetail}
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
        preselectedGown={modalPayload?.preselectedGown}
      />

    </div>
  );
}
