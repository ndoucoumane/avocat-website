import React from 'react';

export default function MobileDrawer({ config, isOpen, onClose, onOpenAppointment, onOpenClientPortal }) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div 
        className={`mobile-nav-backdrop ${isOpen ? 'is-open' : ''}`} 
        onClick={onClose}
        aria-hidden={!isOpen}
      ></div>

      <aside className={`mobile-nav-drawer ${isOpen ? 'is-open' : ''}`} aria-label="Menu mobile">
        <div>
          <div className="logo-wrapper" style={{ marginBottom: '2.5rem' }}>
            <div className="logo-symbol">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
          </div>

          <nav className="mobile-links-list">
            <a href="#cabinet" className="mobile-link" onClick={handleLinkClick}>
              <span>Le Cabinet</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="#expertise" className="mobile-link" onClick={handleLinkClick}>
              <span>Notre Expertise</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="#equipe" className="mobile-link" onClick={handleLinkClick}>
              <span>Notre Équipe</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="#pourquoi-nous" className="mobile-link" onClick={handleLinkClick}>
              <span>Pourquoi Choisir Notre Cabinet</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <button 
              type="button"
              className="mobile-link" 
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => { onClose(); onOpenClientPortal(); }}
            >
              <span>Espace Client Sécurisé</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <a href="#contact" className="mobile-link" onClick={handleLinkClick}>
              <span>Contact & Localisation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </nav>
        </div>

        <div className="mobile-drawer-footer">
          <button 
            type="button" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            onClick={() => { onClose(); onOpenAppointment(); }}
          >
            <span>Prendre rendez-vous</span>
          </button>
          
          <a 
            href={`https://wa.me/${config.contact.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(config.contact.whatsapp.defaultMessage)}`}
            className="btn btn-whatsapp" 
            style={{ width: '100%' }} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
            </svg>
            <span>Échanger sur WhatsApp</span>
          </a>

          <div style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', marginTop: '0.5rem' }}>
            Permanence d'urgence : {config.contact.phones.urgences}
          </div>
        </div>
      </aside>
    </>
  );
}
