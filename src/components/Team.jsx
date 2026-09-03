import React, { useState } from 'react';

export default function Team({ config, onSelectLawyer }) {
  const [activeTab, setActiveTab] = useState('lawyers');

  return (
    <section className="team-section section-spacing" id="equipe">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <div className="section-tag mx-auto">Notre Équipe</div>
          <h2 className="heading-lg section-title">Des professionnels engagés au service de vos intérêts</h2>
          <p className="section-subtitle mx-auto">
            Une équipe d'avocats chevronnés et de collaborateurs dévoués, combinant rigueur académique, expérience des prétoires et réactivité administrative.
          </p>
        </div>

        {/* Onglets */}
        <div className="team-tabs-container">
          <div className="team-tabs-nav" role="tablist">
            <button 
              type="button" 
              className={`team-tab-btn ${activeTab === 'lawyers' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('lawyers')}
              role="tab"
              aria-selected={activeTab === 'lawyers'}
            >
              Avocats & Juristes Associés
            </button>
            <button 
              type="button" 
              className={`team-tab-btn ${activeTab === 'admin' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('admin')}
              role="tab"
              aria-selected={activeTab === 'admin'}
            >
              Pôle Administratif & Secrétariat
            </button>
          </div>
        </div>

        {/* Panel 1: Avocats */}
        {activeTab === 'lawyers' && (
          <div className="team-cards-grid">
            {config.team.lawyers.map((lawyer) => (
              <article key={lawyer.id} className="team-card">
                <div className="team-photo-box">
                  <img 
                    className="team-photo" 
                    src={lawyer.photo} 
                    alt={`${lawyer.name} - Avocat au Barreau du Sénégal`} 
                    loading="lazy" 
                  />
                  <div className="team-photo-overlay"></div>
                  <div className="team-barreau-badge">Barreau du Sénégal</div>
                </div>

                <div className="team-card-content">
                  <h3 className="team-name">{lawyer.name}</h3>
                  <div className="team-role">{lawyer.role}</div>

                  <div className="team-specialties-tags">
                    {lawyer.specialties.map((spec, i) => (
                      <span key={i} className="team-spec-pill">{spec}</span>
                    ))}
                  </div>

                  <p className="team-bio-excerpt">{lawyer.bio}</p>

                  <div className="team-card-footer">
                    <button 
                      type="button" 
                      className="btn btn-outline-dark" 
                      style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem', width: '100%' }}
                      onClick={() => onSelectLawyer(lawyer)}
                    >
                      <span>Consulter le profil complet</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Panel 2: Équipe administrative */}
        {activeTab === 'admin' && (
          <div className="team-admin-grid">
            {config.team.administrative.map((member) => (
              <article key={member.id} className="team-card">
                <div className="team-photo-box">
                  <img 
                    className="team-photo" 
                    src={member.photo} 
                    alt={`${member.name} - ${member.role}`} 
                    loading="lazy" 
                  />
                  <div className="team-photo-overlay"></div>
                </div>

                <div className="team-card-content">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-bio-excerpt" style={{ WebkitLineClamp: 4 }}>{member.bio}</p>

                  <div className="team-card-footer">
                    <a 
                      href={`mailto:${member.email}`} 
                      className="btn btn-outline-dark" 
                      style={{ padding: '0.55rem 1.1rem', fontSize: '0.8rem', width: '100%' }}
                    >
                      <span>Contacter le secrétariat</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
