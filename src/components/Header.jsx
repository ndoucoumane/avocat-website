import React, { useState, useEffect } from 'react';

export default function Header({ config, onOpenAppointment, onOpenClientPortal, onToggleMobile, isMobileOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`} id="main-header">
      <div className="container header-inner">
        {/* Logo */}
        <a href="#hero" className="logo-wrapper" aria-label={`Accueil ${config.identity.name}`}>
          <div className="logo-symbol">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="12" y1="3" x2="12" y2="21"></line>
              <path d="M5 7l7-3 7 3"></path>
              <path d="M5 7L2 14h6L5 7z"></path>
              <path d="M19 7l-3 7h6l-3-7z"></path>
              <line x1="9" y1="21" x2="15" y2="21"></line>
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-title">{config.identity.logoText}</span>
            <span className="logo-subtitle">{config.identity.logoSubtext}</span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="nav-desktop" aria-label="Navigation principale">
          <a href="#cabinet" className="nav-link">Le Cabinet</a>
          <a href="#expertise" className="nav-link">Notre Expertise</a>
          <a href="#equipe" className="nav-link">Notre Équipe</a>
          <a href="#pourquoi-nous" className="nav-link">Pourquoi Nous</a>
          <button 
            type="button" 
            className="nav-link" 
            onClick={onOpenClientPortal}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem 0' }}
          >
            Espace Client
          </button>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* CTA & Hamburger */}
        <div className="header-actions">
          <button type="button" className="btn btn-primary" onClick={() => onOpenAppointment()}>
            <span>Prendre rendez-vous</span>
            <svg className="btn-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button 
            className={`burger-btn ${isMobileOpen ? 'is-active' : ''}`} 
            onClick={onToggleMobile} 
            aria-label="Menu mobile"
            aria-expanded={isMobileOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
