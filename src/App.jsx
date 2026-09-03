import React, { useState, useEffect } from 'react';
import { INITIAL_CONFIG } from './config/cabinetConfig';
import Topbar from './components/Topbar';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import CabinetStory from './components/CabinetStory';
import Expertise from './components/Expertise';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChooseUs';
import ClientPortal from './components/ClientPortal';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modals from './components/Modals';
import CustomizerDemo from './components/CustomizerDemo';

export default function App() {
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [activeModal, setActiveModal] = useState(null); // 'appointment' | 'lawyer' | 'expertise' | 'client-portal' | 'legal' | 'privacy'
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // IntersectionObserver pour animations fluides au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Gestion des modales
  const handleOpenAppointment = (preselectedDomain = '') => {
    if (preselectedDomain) {
      const found = config.expertise.find((e) => e.title === preselectedDomain);
      if (found) setSelectedExpertise(found);
    }
    setActiveModal('appointment');
  };

  const handleSelectLawyer = (lawyer) => {
    setSelectedLawyer(lawyer);
    setActiveModal('lawyer');
  };

  const handleSelectExpertise = (expertise) => {
    setSelectedExpertise(expertise);
    setActiveModal('expertise');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  // Re-branding preset commercial
  const handleSelectPreset = (presetData) => {
    setConfig((prev) => ({
      ...prev,
      identity: {
        ...prev.identity,
        name: presetData.name,
        logoText: presetData.logoText,
        logoSubtext: presetData.logoSubtext,
        logoBadge: presetData.logoBadge
      },
      contact: {
        ...prev.contact,
        address: {
          ...prev.contact.address,
          line2: presetData.addressLine2
        },
        phones: {
          ...prev.contact.phones,
          standard: presetData.phone,
          standardRaw: presetData.phoneRaw
        },
        emails: {
          ...prev.contact.emails,
          contact: presetData.email
        }
      }
    }));
  };

  return (
    <div className="site-wrapper">
      {/* Barre institutionnelle */}
      <Topbar config={config} />

      {/* Header Sticky */}
      <Header 
        config={config}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenClientPortal={() => setActiveModal('client-portal')}
        onToggleMobile={() => setIsMobileOpen(!isMobileOpen)}
        isMobileOpen={isMobileOpen}
      />

      {/* Menu mobile */}
      <MobileDrawer 
        config={config}
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenClientPortal={() => setActiveModal('client-portal')}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          config={config} 
          onOpenAppointment={() => handleOpenAppointment()} 
        />

        {/* Le Cabinet (Récit & Valeurs) */}
        <CabinetStory 
          onOpenAppointment={() => handleOpenAppointment()} 
        />

        {/* Notre Expertise (8 domaines) */}
        <Expertise 
          config={config}
          onSelectExpertise={handleSelectExpertise}
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* Notre Équipe (Avocats & Administration) */}
        <Team 
          config={config}
          onSelectLawyer={handleSelectLawyer}
        />

        {/* Pourquoi Nous Choisir & Statistiques */}
        <WhyChooseUs config={config} />

        {/* Espace Client Sécurisé */}
        <ClientPortal onOpenClientPortal={() => setActiveModal('client-portal')} />

        {/* Bannière de consultation */}
        <AppointmentCTA 
          config={config} 
          onOpenAppointment={() => handleOpenAppointment()} 
        />

        {/* Contact & Localisation Dakar */}
        <Contact config={config} />
      </main>

      {/* Grand Footer */}
      <Footer 
        config={config}
        onOpenLegal={() => setActiveModal('legal')}
        onOpenPrivacy={() => setActiveModal('privacy')}
        onOpenClientPortal={() => setActiveModal('client-portal')}
      />

      {/* Modales Juridiques */}
      <Modals 
        activeModal={activeModal}
        onClose={handleCloseModal}
        config={config}
        selectedLawyer={selectedLawyer}
        selectedExpertise={selectedExpertise}
        onSwitchToAppointment={handleOpenAppointment}
      />

      {/* Outil Commercial Mode Démo */}
      <CustomizerDemo onSelectPreset={handleSelectPreset} />
    </div>
  );
}
