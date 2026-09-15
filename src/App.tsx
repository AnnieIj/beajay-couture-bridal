import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PerfectDressSection } from './components/PerfectDressSection';
import { FeaturedCollectionSection } from './components/FeaturedCollectionSection';
import { GownRentalsSection } from './components/GownRentalsSection';
import { BridalExperienceSection } from './components/BridalExperienceSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentCtaSection } from './components/AppointmentCtaSection';
import { Footer } from './components/Footer';

import { CollectionsPage } from './components/CollectionsPage';
import { GownDetailPage } from './components/GownDetailPage';
import { RentalsPage } from './components/RentalsPage';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

import { AppointmentModal } from './components/AppointmentModal';
import { RentalsModal } from './components/RentalsModal';
import { CollectionsModal } from './components/CollectionsModal';
import { GownDetailModal } from './components/GownDetailModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { SearchModal } from './components/SearchModal';

import { ActiveModal, GownItem, GalleryItem } from './types';
import { GOWNS_CATALOG, EDITORIAL_GALLERY_ITEMS } from './data/bridalData';

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
  const [galleryLightboxItems, setGalleryLightboxItems] = useState<GalleryItem[]>(EDITORIAL_GALLERY_ITEMS);
  const [collectionCategory, setCollectionCategory] = useState<string>('all');
  const [contactPreselectedGown, setContactPreselectedGown] = useState<string | null>(null);

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
  const isRentalsPage = currentPath === '/rentals' || currentPath === '/rentals/';
  const isGalleryPage = currentPath === '/gallery' || currentPath === '/gallery/';
  const isAboutPage = currentPath === '/about' || currentPath === '/about/';
  const isContactPage = currentPath === '/contact' || currentPath === '/contact/';
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
    } else if (isRentalsPage) {
      document.title = "Gown Rentals | BEAJAY COUTURE BRIDAL • Wear the Moment";
    } else if (isCollectionsPage) {
      document.title = "Bridal Collections Showcase | BEAJAY COUTURE BRIDAL";
    } else if (isGalleryPage) {
      document.title = "The Bridal Gallery | Moments in Couture • BEAJAY COUTURE BRIDAL";
    } else if (isAboutPage) {
      document.title = "About BEAJAY COUTURE BRIDAL • Crafted in Nigeria";
    } else if (isContactPage) {
      document.title = "Contact BEAJAY | BEAJAY COUTURE BRIDAL • Begin the Conversation";
    } else {
      document.title = "BEAJAY COUTURE BRIDAL | Luxury Bridal Couture & Gown Rentals, Enugu";
    }
  }, [matchedGown, isRentalsPage, isCollectionsPage, isGalleryPage, isAboutPage, isContactPage]);

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

  const navigateToRentals = () => {
    navigateTo('/rentals');
  };

  const navigateToGallery = () => {
    closeModal();
    navigateTo('/gallery');
  };

  const navigateToAbout = () => {
    closeModal();
    navigateTo('/about');
  };

  const navigateToContact = (preselectedGownName?: string) => {
    closeModal();
    if (preselectedGownName) {
      setContactPreselectedGown(preselectedGownName);
    } else {
      setContactPreselectedGown(null);
    }
    navigateTo('/contact');
  };

  const navigateToGownDetail = (gown: GownItem) => {
    closeModal();
    setSelectedGown(null);
    navigateTo(`/collections/${gown.slug || gown.id}`);
  };

  const openModal = (modal: ActiveModal, payload?: any) => {
    if (modal === 'gallery') {
      navigateToGallery();
      return;
    }
    if (modal === 'about') {
      navigateToAbout();
      return;
    }
    if (modal === 'contact') {
      navigateToContact(payload?.preselectedGown);
      return;
    }
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

  const activeNavView = isRentalsPage 
    ? 'rentals' 
    : isCollectionsPage || matchedGown 
    ? 'collections' 
    : isGalleryPage
    ? 'gallery'
    : isAboutPage
    ? 'about'
    : isContactPage
    ? 'contact'
    : 'home';

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#1A1A1A] font-sans">
      
      {/* Top Announcement Bar */}
      <AnnouncementBar onContactClick={() => navigateToContact()} />

      {/* Main Sticky Header */}
      <Header
        onOpenModal={openModal}
        activeView={activeNavView}
        onNavigateHome={() => navigateTo('/')}
        onNavigateCollections={navigateToCollections}
        onNavigateRentals={navigateToRentals}
        onNavigateGallery={navigateToGallery}
        onNavigateAbout={navigateToAbout}
        onNavigateContact={navigateToContact}
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
            onEnquire={(gownName) => navigateToContact(gownName)}
          />
        ) : isAboutPage ? (
          /* Dedicated About BEAJAY Experience (/about) */
          <AboutPage
            onNavigateHome={() => navigateTo('/')}
            onNavigateCollections={() => navigateToCollections('all')}
            onNavigateRentals={navigateToRentals}
            onNavigateGallery={navigateToGallery}
            onNavigateContact={() => navigateToContact()}
            onOpenAppointment={() => openModal('appointment')}
          />
        ) : isContactPage ? (
          /* Dedicated Contact Experience (/contact) */
          <ContactPage
            preselectedGown={contactPreselectedGown}
            onNavigateHome={() => navigateTo('/')}
            onNavigateCollections={() => navigateToCollections('all')}
            onNavigateRentals={navigateToRentals}
            onNavigateGallery={navigateToGallery}
            onOpenAppointment={() => openModal('appointment')}
          />
        ) : isCollectionsPage ? (
          /* Dedicated Collections Showcase Lookbook (/collections) */
          <CollectionsPage
            onSelectGown={navigateToGownDetail}
            onBookAppointment={(gownName) => handleBookFittingFromGown(gownName)}
            initialCategory={collectionCategory}
          />
        ) : isRentalsPage ? (
          /* Dedicated Unified Rentals Experience (/rentals) */
          <RentalsPage
            onSelectGown={navigateToGownDetail}
            onRequestRental={(gownName) => openModal('rentals', { action: 'request', gownName })}
            onExploreCollections={() => navigateToCollections('all')}
          />
        ) : isGalleryPage ? (
          /* Dedicated Bridal Gallery Experience (/gallery) */
          <GalleryPage
            onOpenLightbox={(item, items) => {
              setSelectedGalleryItem(item);
              setGalleryLightboxItems(items && items.length > 0 ? items : EDITORIAL_GALLERY_ITEMS);
            }}
            onNavigateCollections={() => navigateToCollections('all')}
            onBookAppointment={() => handleBookFittingFromGown(undefined, 'bridal-styling')}
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
              onNavigateRentals={navigateToRentals}
              onNavigateGallery={navigateToGallery}
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
              onNavigateRentals={navigateToRentals}
            />

            {/* SECTION 5 — THE BRIDAL EXPERIENCE (01 to 04) */}
            <BridalExperienceSection
              onOpenModal={openModal}
            />

            {/* SECTION 6 — MOMENTS THAT MATTER (Bridal Gallery) */}
            <GallerySection
              onOpenModal={openModal}
              onOpenLightbox={(item, items) => {
                setSelectedGalleryItem(item);
                setGalleryLightboxItems(items && items.length > 0 ? items : EDITORIAL_GALLERY_ITEMS);
              }}
              onNavigateGallery={navigateToGallery}
            />

            {/* SECTION 8 — APPOINTMENT CTA */}
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
        onNavigateRentals={navigateToRentals}
        onNavigateGallery={navigateToGallery}
        onNavigateAbout={navigateToAbout}
        onNavigateContact={navigateToContact}
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
        onExploreCollections={() => navigateToCollections('all')}
      />

      {/* 3. Collections Modal (Quick Browse Overlay) */}
      <CollectionsModal
        isOpen={activeModal === 'collections'}
        onClose={closeModal}
        defaultCategory={modalPayload?.defaultCategory}
        onSelectGown={navigateToGownDetail}
        onBookAppointment={handleBookFittingFromGown}
      />

      {/* 4. Gown Detail Sheet Modal (Quick Preview) */}
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
        items={galleryLightboxItems}
        onClose={() => setSelectedGalleryItem(null)}
        onSelectItem={(item) => setSelectedGalleryItem(item)}
      />

      {/* 7. Search Modal */}
      <SearchModal
        isOpen={activeModal === 'search'}
        onClose={closeModal}
        onSelectGown={navigateToGownDetail}
      />

    </div>
  );
}
