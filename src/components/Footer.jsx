import React from 'react';

export default function Footer({ config, onOpenLegal, onOpenPrivacy, onOpenClientPortal }) {
  return (
    <footer className="footer" id="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Colonne 1 : Cabinet */}
          <div>
            <div className="logo-wrapper">
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
                <span className="logo-title" style={{ color: '#fff' }}>{config.identity.logoText}</span>
                <span className="logo-subtitle">{config.identity.logoSubtext}</span>
              </div>
            </div>
            <p className="footer-col-desc">
              Cabinet d'avocats inscrit au Tableau de l'Ordre des Avocats du Sénégal. Conseil juridique, structuration des investissements et représentation contentieuse devant toutes les juridictions de la République du Sénégal et de l'espace OHADA.
            </p>
            <div className="footer-social-links">
              <a href={config.social.linkedin} className="footer-social-btn" aria-label="LinkedIn du Cabinet" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={config.social.facebook} className="footer-social-btn" aria-label="Facebook du Cabinet" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href={`https://wa.me/${config.contact.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(config.contact.whatsapp.defaultMessage)}`}
                className="footer-social-btn" 
                aria-label="WhatsApp Professionnel" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#cabinet">Le Cabinet</a></li>
              <li className="footer-link-item"><a href="#expertise">Notre Expertise</a></li>
              <li className="footer-link-item"><a href="#equipe">Notre Équipe</a></li>
              <li className="footer-link-item"><a href="#pourquoi-nous">Pourquoi Nous Choisir</a></li>
              <li className="footer-link-item">
                <button 
                  type="button" 
                  onClick={onOpenClientPortal}
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, font: 'inherit', fontSize: '0.88rem' }}
                >
                  Espace Client Sécurisé
                </button>
              </li>
              <li className="footer-link-item"><a href="#contact">Prendre Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Domaines */}
          <div>
            <h4 className="footer-col-title">Pôles d'Expertise</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><a href="#expertise">Droit des Affaires & Sociétés</a></li>
              <li className="footer-link-item"><a href="#expertise">Droit OHADA & Arbitrage</a></li>
              <li className="footer-link-item"><a href="#expertise">Contentieux & Litiges</a></li>
              <li className="footer-link-item"><a href="#expertise">Droit Immobilier & Foncier</a></li>
              <li className="footer-link-item"><a href="#expertise">Droit du Travail & Social</a></li>
              <li className="footer-link-item"><a href="#expertise">Droit Fiscal & Douanier</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Coordonnées */}
          <div>
            <h4 className="footer-col-title">Siège & Permanence</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <span>{config.contact.address.line1}</span><br />
                  <span>{config.contact.address.line2}, {config.contact.address.city}</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <a href={`tel:${config.contact.phones.standardRaw}`}>{config.contact.phones.standard}</a><br />
                  <span style={{ fontSize: '0.75rem', color: '#fca5a5' }}>Permanence : {config.contact.phones.urgences}</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href={`mailto:${config.contact.emails.contact}`}>{config.contact.emails.contact}</a>
              </div>

              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{config.contact.hours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="footer-bottom">
          <div>
            © 2026 <strong>{config.identity.name}</strong>. Tous droits réservés. Inscrit au Barreau de Dakar.
          </div>
          <div className="footer-bottom-links">
            <button 
              type="button" 
              onClick={onOpenLegal} 
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', font: 'inherit', fontSize: '0.8rem' }}
            >
              Mentions Légales
            </button>
            <button 
              type="button" 
              onClick={onOpenPrivacy} 
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', font: 'inherit', fontSize: '0.8rem' }}
            >
              Politique de Confidentialité
            </button>
            <a href={config.social.barreauUrl} target="_blank" rel="noopener noreferrer">
              Règles Déontologiques du Barreau
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
