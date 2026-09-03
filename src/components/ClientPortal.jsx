import React from 'react';

export default function ClientPortal({ onOpenClientPortal }) {
  return (
    <section className="client-space-section section-spacing" id="espace-client">
      <div className="container">
        <div className="client-space-card">
          <div className="client-space-info">
            <div className="section-tag section-tag-gold">Portail Numérique Dédié</div>
            <h3>Espace Client Sécurisé</h3>
            <p>
              Accédez en temps réel à votre espace personnel chiffré pour suivre l'avancement de vos procédures, consulter les actes de procédure et échanger des pièces confidentielles avec vos avocats en toute sérénité.
            </p>

            <div className="client-features-list">
              <div className="client-feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Suivi chronologique des dates d'audiences et délibérés</span>
              </div>
              <div className="client-feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Coffre-fort numérique chiffré de bout en bout (actes, conclusions, jugements)</span>
              </div>
              <div className="client-feature-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Messagerie directe et privée avec l'avocat en charge du dossier</span>
              </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={onOpenClientPortal}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>Accéder à mon espace client</span>
            </button>
          </div>

          {/* Aperçu visuel mockup */}
          <div className="client-portal-preview">
            <div className="portal-preview-header">
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Dossier #SN-2026-884</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Tribunal de Commerce Hors Classe de Dakar</div>
              </div>
              <span className="portal-status-pill">
                <span style={{ width: '6px', height: '6px', background: '#34d399', borderRadius: '50%' }}></span>
                En délibéré
              </span>
            </div>

            <div className="portal-mockup-row">
              <div>
                <div className="portal-row-title">Conclusions en réplique déposées</div>
                <div className="portal-row-sub">Me. Ousmane DIALLO • Audience du 18 Août</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>

            <div className="portal-mockup-row">
              <div>
                <div className="portal-row-title">Assignation signifiée par Huissier</div>
                <div className="portal-row-sub">Acte validé sous scellé numérique</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center' }}>
              Authentification à double facteur (2FA) active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
