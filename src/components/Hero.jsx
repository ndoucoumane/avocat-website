import React from 'react';

export default function Hero({ config, onOpenAppointment }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <img 
          className="hero-bg-img" 
          src="/images/hero_cabinet_dakar.jpg" 
          alt="Cabinet d'avocats de prestige à Dakar vue sur l'océan Atlantique" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge-container">
          <span className="hero-badge-dot"></span>
          <span className="hero-badge-text">{config.identity.barreau}</span>
        </div>

        <h1 
          className="heading-xl hero-title"
          dangerouslySetInnerHTML={{ __html: config.identity.headline }}
        />

        <p className="hero-desc">
          {config.identity.subheadline}
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => onOpenAppointment()}>
            <span>Prendre rendez-vous</span>
            <svg className="btn-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <a href="#expertise" className="btn btn-secondary">
            <span>Découvrir notre expertise</span>
          </a>
        </div>

        {/* 3 Piliers de confiance */}
        <div className="hero-trust-bar">
          <div className="hero-trust-item">
            <div className="hero-trust-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="hero-trust-text">
              <h4>Secret Professionnel</h4>
              <p>Confidentialité absolue garantie</p>
            </div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="hero-trust-text">
              <h4>Expertise OHADA & UEMOA</h4>
              <p>17 juridictions régionales</p>
            </div>
          </div>

          <div className="hero-trust-item">
            <div className="hero-trust-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="hero-trust-text">
              <h4>Plaidoiries & Conseil</h4>
              <p>Tribunaux, CCJA et Arbitrage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
