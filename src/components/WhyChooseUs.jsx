import React from 'react';

export default function WhyChooseUs({ config }) {
  return (
    <section className="why-section section-spacing" id="pourquoi-nous">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag section-tag-gold mx-auto">Confiance & Réputation</div>
          <h2 className="heading-lg section-title" style={{ color: 'var(--clr-white)' }}>Pourquoi choisir notre cabinet ?</h2>
          <p className="section-subtitle mx-auto" style={{ color: '#94a3b8' }}>
            La défense de vos droits exige bien plus qu'une simple connaissance des textes : elle requiert de l'audace stratégique, de la diligence et une loyauté sans faille.
          </p>
        </div>

        {/* Statistiques et Chiffres clés */}
        <div className="why-stats-grid">
          {config.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Piliers / Raisons */}
        <div className="reasons-grid">
          {config.reasons.map((reason, i) => (
            <div key={i} className="reason-card">
              <div className="reason-number">{reason.number}</div>
              <div className="reason-content">
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
