import React, { useState } from 'react';

export default function Contact({ config }) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Transmission confidentielle en cours...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Votre demande a été transmise avec succès au secrétariat du cabinet. Un avocat prendra contact avec vous dans un délai de 24 heures ouvrées sous le sceau du secret professionnel.'
      });
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
        consent: false
      });

      setTimeout(() => {
        setStatus({ state: 'idle', message: '' });
      }, 8000);
    }, 1200);
  };

  return (
    <section className="contact-section section-spacing" id="contact">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag mx-auto">Contact & Accès</div>
          <h2 className="heading-lg section-title">Prendre attache avec le cabinet</h2>
          <p className="section-subtitle mx-auto">
            Nos bureaux sont idéalement situés au Plateau, centre des institutions juridiques, économiques et judiciaires du Sénégal.
          </p>
        </div>

        <div className="contact-grid">
          {/* Coordonnées & Accès */}
          <div className="contact-info-col">
            <h3 className="heading-sm" style={{ marginBottom: '0.5rem' }}>Cabinet Principal à Dakar</h3>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.92rem' }}>
              Réception sur rendez-vous du lundi au vendredi. Pour toute urgence judiciaire (garde à vue, saisie conservatoire), contactez notre permanence téléphonique.
            </p>

            <div className="contact-cards-stack">
              {/* Adresse */}
              <div className="contact-info-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h4>Siège du Cabinet</h4>
                  <p>{config.contact.address.line1}</p>
                  <p>{config.contact.address.line2}, {config.contact.address.district}</p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{config.contact.address.country} — {config.contact.address.postalCode}</p>
                </div>
              </div>

              {/* Téléphones */}
              <div className="contact-info-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h4>Téléphone & Permanence</h4>
                  <p>Standard : <a href={`tel:${config.contact.phones.standardRaw}`}>{config.contact.phones.standard}</a></p>
                  <p>Urgences 24/7 : <a href={`tel:${config.contact.phones.urgencesRaw}`} style={{ color: 'var(--clr-red-primary)', fontWeight: 600 }}>{config.contact.phones.urgences}</a></p>
                </div>
              </div>

              {/* Horaires */}
              <div className="contact-info-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <h4>Horaires d'Ouverture</h4>
                  <p>{config.contact.hours.weekdays}</p>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{config.contact.hours.saturday}</p>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="contact-map-wrapper">
              <iframe 
                className="contact-map-frame" 
                src={config.contact.address.googleMapsEmbedUrl} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localisation du cabinet à Dakar Plateau"
              ></iframe>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact-form-card">
            <h3 className="heading-sm" style={{ marginBottom: '0.4rem' }}>Envoyer une demande confidentielle</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--clr-text-muted)', marginBottom: '2rem' }}>
              Remplissez ce formulaire pour soumettre les éléments préalables de votre dossier. Les informations transmises bénéficient de la protection stricte du secret professionnel.
            </p>

            {status.state === 'success' && (
              <div className="form-feedback-message is-success" role="alert">
                <strong>Votre demande a été transmise !</strong><br />
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="react-contact-nom">Nom de famille <span>*</span></label>
                  <input 
                    className="form-input" 
                    type="text" 
                    id="react-contact-nom" 
                    name="nom" 
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Ex: Ndiaye" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="react-contact-prenom">Prénom <span>*</span></label>
                  <input 
                    className="form-input" 
                    type="text" 
                    id="react-contact-prenom" 
                    name="prenom" 
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Ex: Amadou" 
                    required 
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="react-contact-email">Adresse Email <span>*</span></label>
                  <input 
                    className="form-input" 
                    type="email" 
                    id="react-contact-email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nom@domaine.sn" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="react-contact-tel">Téléphone (avec indicatif) <span>*</span></label>
                  <input 
                    className="form-input" 
                    type="tel" 
                    id="react-contact-tel" 
                    name="telephone" 
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+221 77 000 00 00" 
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="react-contact-sujet">Matière ou objet de la demande <span>*</span></label>
                <select 
                  className="form-select" 
                  id="react-contact-sujet" 
                  name="sujet" 
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un domaine d'intervention</option>
                  <option value="Droit des Affaires & Corporate">Droit des Affaires & Corporate</option>
                  <option value="Droit OHADA & Arbitrage">Droit OHADA & Arbitrage CCJA</option>
                  <option value="Contentieux Commercial & Bancaire">Contentieux Commercial & Bancaire</option>
                  <option value="Droit Immobilier & Titres Fonciers">Droit Immobilier & Foncier (Sénégal)</option>
                  <option value="Droit du Travail & Social">Droit du Travail & Relations Sociales</option>
                  <option value="Droit Fiscal & Douanier">Droit Fiscal & Contrôle DGID</option>
                  <option value="Autre demande">Autre conseil ou procédure d'urgence</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="react-contact-message">Exposé sommaire des faits <span>*</span></label>
                <textarea 
                  className="form-textarea" 
                  id="react-contact-message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez succinctement votre situation, les parties concernées et les échéances éventuelles..." 
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label className="form-checkbox-label">
                  <input 
                    type="checkbox" 
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required 
                  />
                  <span>Je confirme que les données transmises sont exactes et consens à être contacté par le cabinet dans le cadre de ma demande.</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={status.state === 'loading'}
              >
                <span>{status.state === 'loading' ? 'Transmission en cours...' : 'Envoyer ma demande confidentielle'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
