import React from 'react';

export default function CabinetStory({ onOpenAppointment }) {
  return (
    <section className="cabinet-section section-spacing" id="cabinet">
      <div className="container">
        <div className="cabinet-grid">
          {/* Récit et Vision */}
          <div className="cabinet-story-content">
            <div className="section-tag">Le Cabinet</div>
            <h2 className="heading-lg section-title">Une signature juridique d'excellence au cœur de Dakar</h2>

            <p className="cabinet-lead">
              Notre cabinet accompagne <mark>entreprises, institutions et particuliers</mark> dans leurs problématiques juridiques en mettant l'accent sur la rigueur doctrinale, la proximité humaine et la recherche de solutions sur-mesure.
            </p>

            <p className="cabinet-body">
              Fondé à Dakar, le cabinet s'est forgé une réputation solide fondée sur la haute compétence technique de ses avocats, une éthique professionnelle sans compromis et une maîtrise aiguë de l'environnement des affaires sénégalais et régional. Que ce soit pour structurer des investissements majeurs, négocier des accords stratégiques ou défendre avec combativité vos intérêts devant les cours et tribunaux, nous vous offrons une sécurité juridique intégrale.
            </p>

            <div className="cabinet-quote-card">
              <div className="cabinet-quote-text">
                « Le droit n'est pas seulement une règle abstraite : c'est un levier de développement stratégique et le rempart suprême de vos libertés et de votre patrimoine. »
              </div>
              <div className="cabinet-quote-author">Maître Ousmane DIALLO</div>
              <div className="cabinet-quote-role">Avocat Associé Gérant — Barreau du Sénégal</div>
            </div>

            <div>
              <button type="button" className="btn btn-outline-dark" onClick={() => onOpenAppointment()}>
                <span>Solliciter une première consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Visuel et Sceau Institutionnel */}
          <div className="cabinet-visual-container">
            <div className="cabinet-main-img-box">
              <img 
                className="cabinet-main-img" 
                src="/images/cabinet_interior_library.jpg" 
                alt="Bibliothèque juridique et salon de conseil du cabinet à Dakar" 
                loading="lazy" 
              />
            </div>
            <div className="cabinet-stamp-badge">
              <div className="stamp-gold-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <div>
                <div className="stamp-title">Prestige & Rigueur</div>
                <div className="stamp-sub">Dakar Plateau • Barreau du Sénégal</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Cartes de Valeurs */}
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="3" x2="12" y2="21"></line>
                <path d="M5 7l7-3 7 3"></path>
                <path d="M5 7L2 14h6L5 7z"></path>
                <path d="M19 7l-3 7h6l-3-7z"></path>
              </svg>
            </div>
            <h3 className="value-title">Expertise</h3>
            <div className="value-sub">Maîtrise doctrinale approfondie</div>
            <p className="value-desc">Une maîtrise pointue et continuellement actualisée des problématiques juridiques, des textes OHADA et de la jurisprudence sénégalaise.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="value-title">Engagement</h3>
            <div className="value-sub">Combativité & disponibilité</div>
            <p className="value-desc">Une implication constante aux côtés de nos mandants, assurant une défense vigoureuse et une réactivité exemplaire face à l'urgence.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="value-title">Confidentialité</h3>
            <div className="value-sub">Secret professionnel absolu</div>
            <p className="value-desc">Une gestion rigoureuse, protégée et confidentielle de chaque dossier conformément à la déontologie stricte de l'Ordre des Avocats.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
