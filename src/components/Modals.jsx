import React, { useState } from 'react';

export default function Modals({
  activeModal,
  onClose,
  config,
  selectedLawyer,
  selectedExpertise,
  onSwitchToAppointment
}) {
  if (!activeModal) return null;

  return (
    <div 
      className={`modal-backdrop ${activeModal ? 'is-active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* 1. Modal Rendez-vous */}
      {activeModal === 'appointment' && (
        <AppointmentModal 
          config={config} 
          onClose={onClose} 
          defaultDomain={selectedExpertise ? selectedExpertise.title : ''} 
        />
      )}

      {/* 2. Modal Avocat */}
      {activeModal === 'lawyer' && selectedLawyer && (
        <LawyerModal lawyer={selectedLawyer} onClose={onClose} />
      )}

      {/* 3. Modal Expertise */}
      {activeModal === 'expertise' && selectedExpertise && (
        <ExpertiseModal 
          expertise={selectedExpertise} 
          onClose={onClose} 
          onBook={() => {
            onClose();
            setTimeout(() => onSwitchToAppointment(selectedExpertise.title), 150);
          }} 
        />
      )}

      {/* 4. Modal Espace Client */}
      {activeModal === 'client-portal' && (
        <ClientSpaceModal onClose={onClose} />
      )}

      {/* 5. Modal Mentions Légales */}
      {activeModal === 'legal' && (
        <LegalModal config={config} onClose={onClose} />
      )}

      {/* 6. Modal Politique de Confidentialité */}
      {activeModal === 'privacy' && (
        <PrivacyModal config={config} onClose={onClose} />
      )}
    </div>
  );
}

/* --- Sous-composant : Modal Rendez-vous --- */
function AppointmentModal({ config, onClose, defaultDomain }) {
  const [consultationType, setConsultationType] = useState('Cabinet Dakar Plateau');
  const [domain, setDomain] = useState(defaultDomain || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Matin (09h00 - 12h00)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 3500);
  };

  return (
    <div className="modal-dialog">
      <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer la modal">&times;</button>
      <div className="modal-header">
        <div className="modal-header-tag">Consultation Juridique</div>
        <h3 className="modal-title">Prendre rendez-vous avec un avocat</h3>
      </div>
      <div className="modal-body">
        {isSuccess ? (
          <div className="form-feedback-message is-success" style={{ display: 'block' }}>
            <strong>Demande de rendez-vous enregistrée avec succès !</strong><br />
            Notre secrétariat prendra contact avec vous rapidement pour valider la date définitive et la liste des pièces requises.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Format de consultation */}
            <label className="form-label" style={{ marginBottom: '0.6rem', display: 'block' }}>Format de la consultation :</label>
            <div className="consultation-types-selector">
              <div 
                className={`consultation-type-option ${consultationType === 'Cabinet Dakar Plateau' ? 'is-selected' : ''}`}
                onClick={() => setConsultationType('Cabinet Dakar Plateau')}
              >
                <div className="consultation-type-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="consultation-type-title">Au Cabinet</div>
                <div className="consultation-type-sub">Dakar Plateau</div>
              </div>

              <div 
                className={`consultation-type-option ${consultationType === 'Visioconférence Sécurisée' ? 'is-selected' : ''}`}
                onClick={() => setConsultationType('Visioconférence Sécurisée')}
              >
                <div className="consultation-type-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <div className="consultation-type-title">Visioconférence</div>
                <div className="consultation-type-sub">Lien chiffré HD</div>
              </div>

              <div 
                className={`consultation-type-option ${consultationType === 'Entretien Téléphonique' ? 'is-selected' : ''}`}
                onClick={() => setConsultationType('Entretien Téléphonique')}
              >
                <div className="consultation-type-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="consultation-type-title">Téléphone</div>
                <div className="consultation-type-sub">Appel confidentiel</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Domaine concerné <span>*</span></label>
              <select 
                className="form-select" 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)} 
                required
              >
                <option value="">Sélectionnez la matière concernée</option>
                {config.expertise.map((exp) => (
                  <option key={exp.id} value={exp.title}>{exp.title}</option>
                ))}
              </select>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Date souhaitée <span>*</span></label>
                <input 
                  className="form-input" 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Créneau horaire <span>*</span></label>
                <select className="form-select" value={time} onChange={(e) => setTime(e.target.value)} required>
                  <option value="Matin (09h00 - 12h00)">Matin (09h00 - 12h00)</option>
                  <option value="Après-midi (14h00 - 17h00)">Après-midi (14h00 - 17h00)</option>
                  <option value="Fin de journée (17h00 - 18h30)">Fin de journée (17h00 - 18h30)</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Nom et Prénom <span>*</span></label>
                <input 
                  className="form-input" 
                  type="text" 
                  placeholder="Votre nom complet" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Téléphone direct <span>*</span></label>
                <input 
                  className="form-input" 
                  type="tel" 
                  placeholder="+221 XX XXX XX XX" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Adresse Email <span>*</span></label>
              <input 
                className="form-input" 
                type="email" 
                placeholder="votre@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Précisions utiles sur le dossier</label>
              <textarea 
                className="form-textarea" 
                placeholder="Contexte, degré d'urgence, pièces déjà en votre possession..." 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}
                style={{ minHeight: '80px' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <span>Confirmer la demande de rendez-vous</span>
            </button>
          </form>
        )}

        <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.82rem', color: '#64748b' }}>
          Besoin d'une réponse d'urgence immédiate ?<br />
          <a 
            href={`https://wa.me/${config.contact.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(config.contact.whatsapp.defaultMessage)}`}
            style={{ color: '#25d366', fontWeight: 700, textDecoration: 'underline' }} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Échanger directement par WhatsApp avec le cabinet
          </a>
        </div>
      </div>
    </div>
  );
}

/* --- Sous-composant : Modal Avocat --- */
function LawyerModal({ lawyer, onClose }) {
  return (
    <div className="modal-dialog modal-dialog-large">
      <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer la modal">&times;</button>
      <div className="modal-body">
        <div className="attorney-modal-layout">
          <div>
            <img className="attorney-modal-photo" src={lawyer.photo} alt={lawyer.name} />
            <div style={{ marginTop: '1rem' }}>
              <a href={`mailto:${lawyer.email}`} className="btn btn-outline-dark" style={{ width: '100%', fontSize: '0.8rem', padding: '0.6rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>Écrire à cet avocat</span>
              </a>
            </div>
          </div>
          <div>
            <div className="modal-header-tag">{lawyer.barreau}</div>
            <h3 className="attorney-modal-name">{lawyer.name}</h3>
            <div className="attorney-modal-role">{lawyer.role} — {lawyer.title}</div>

            <div className="attorney-modal-block">
              <div className="attorney-modal-block-title">Présentation & Expérience</div>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7 }}>{lawyer.bio}</p>
            </div>

            <div className="attorney-modal-block">
              <div className="attorney-modal-block-title">Titres Académiques & Qualifications</div>
              <ul className="attorney-modal-list">
                {lawyer.education.map((edu, i) => (
                  <li key={i}>{edu}</li>
                ))}
              </ul>
            </div>

            <div className="attorney-modal-block">
              <div className="attorney-modal-block-title">Langues Pratiquées</div>
              <p style={{ fontSize: '0.88rem', color: '#475569', fontWeight: 500 }}>
                {lawyer.languages.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Sous-composant : Modal Expertise --- */
function ExpertiseModal({ expertise, onClose, onBook }) {
  return (
    <div className="modal-dialog">
      <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer la modal">&times;</button>
      <div className="modal-header">
        <div className="modal-header-tag">Domaine d'Intervention</div>
        <h3 className="modal-title">{expertise.title}</h3>
        <div style={{ fontSize: '0.85rem', color: 'var(--clr-red-primary)', fontWeight: 600, marginTop: '0.25rem' }}>
          {expertise.subtitle}
        </div>
      </div>
      <div className="modal-body">
        <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          {expertise.shortDesc}
        </p>

        <div className="attorney-modal-block-title" style={{ marginBottom: '0.75rem' }}>Missions & Actes Principaux :</div>
        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
          {expertise.scope.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.6rem', color: '#334155' }}>
              <svg style={{ color: '#b91c1c', marginTop: '0.2rem', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="button" className="btn btn-primary" style={{ flex: 1 }} onClick={onBook}>
            <span>Solliciter un conseil dans cette matière</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* --- Sous-composant : Modal Espace Client --- */
function ClientSpaceModal({ onClose }) {
  const [numDossier, setNumDossier] = useState('SN-2026-884');
  const [cle, setCle] = useState('••••••••••••');
  const [isConnected, setIsConnected] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsConnected(true);
  };

  return (
    <div className="modal-dialog">
      <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer la modal">&times;</button>
      <div className="modal-header">
        <div className="modal-header-tag">Portail Sécurisé</div>
        <h3 className="modal-title">Accès Espace Client</h3>
      </div>
      <div className="modal-body">
        <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
          Cette interface donne un aperçu de la plateforme confidentielle réservée aux clients du cabinet pour le suivi de leurs dossiers en cours.
        </p>

        {!isConnected ? (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Numéro de dossier ou Identifiant</label>
              <input 
                className="form-input" 
                type="text" 
                value={numDossier} 
                onChange={(e) => setNumDossier(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label">Clé confidentielle d'accès</label>
              <input 
                className="form-input" 
                type="password" 
                value={cle} 
                onChange={(e) => setCle(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>Se connecter à mon espace</span>
            </button>
          </form>
        ) : (
          <div style={{ marginTop: '0.5rem' }}>
            <div className="form-feedback-message is-success" style={{ display: 'block', marginBottom: '1.25rem' }}>
              Connexion sécurisée établie avec succès (Dossier #SN-2026-884).
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>Tableau de bord — Dossier #SN-2026-884</span>
              <span style={{ background: '#dcfce7', color: '#166534', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontWeight: 600 }}>Dossier Actif</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1rem' }}>
              Juridiction : <strong>Tribunal de Commerce de Dakar</strong><br />
              Avocat référent : <strong>Me. Ousmane DIALLO</strong><br />
              Prochaine audience : <strong>12 Octobre 2026 (Plaidoirie sur le fond)</strong>
            </p>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.85rem', borderRadius: '6px', fontSize: '0.8rem', color: '#334155' }}>
              ✓ 3 actes de procédure disponibles en téléchargement sécurisé.<br />
              ✓ Messagerie instantanée confidentielle active avec votre avocat.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* --- Sous-composant : Mentions Légales --- */
function LegalModal({ config, onClose }) {
  return (
    <div className="modal-dialog">
      <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer la modal">&times;</button>
      <div className="modal-header">
        <div className="modal-header-tag">Réglementation & Déontologie</div>
        <h3 className="modal-title">Mentions Légales</h3>
      </div>
      <div className="modal-body" style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>
        <h4 style={{ color: '#0f172a', marginBottom: '0.3rem' }}>Éditeur du site</h4>
        <p style={{ marginBottom: '1rem' }}>
          Le présent site est édité par le cabinet d'avocats <strong>{config.identity.name}</strong>, Société Civile Professionnelle d'Avocats au Barreau de Dakar, régie par la loi n° 84-09 du 4 janvier 1984 relative à l'Ordre des Avocats du Sénégal et le Règlement n° 05/CM/UEMOA relatif à l'harmonisation des règles de la profession d'avocat.
        </p>
        <h4 style={{ color: '#0f172a', marginBottom: '0.3rem' }}>Siège professionnel</h4>
        <p style={{ marginBottom: '1rem' }}>
          {config.contact.address.line1}, {config.contact.address.line2}, {config.contact.address.city}, Sénégal.<br />
          Téléphone : {config.contact.phones.standard} • Email : {config.contact.emails.contact}
        </p>
        <h4 style={{ color: '#0f172a', marginBottom: '0.3rem' }}>Déontologie & Secret Professionnel</h4>
        <p>
          Tous les échanges, consultations et correspondances échangés avec les membres du cabinet sont rigoureusement protégés par le secret professionnel absolu et les règles de l'Ordre des Avocats du Sénégal.
        </p>
      </div>
    </div>
  );
}

/* --- Sous-composant : Confidentialité --- */
function PrivacyModal({ config, onClose }) {
  return (
    <div className="modal-dialog">
      <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer la modal">&times;</button>
      <div className="modal-header">
        <div className="modal-header-tag">Protection des Données</div>
        <h3 className="modal-title">Politique de Confidentialité</h3>
      </div>
      <div className="modal-body" style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.7 }}>
        <p style={{ marginBottom: '1rem' }}>
          Le cabinet s'engage à traiter vos données dans le strict respect de la <strong>Loi n° 2008-12 du 25 janvier 2008</strong> portant sur la protection des données à caractère personnel au Sénégal, sous le contrôle de la <strong>Commission de Protection des Données Personnelles (CDP)</strong>.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Les informations collectées via le formulaire de contact ou la demande de rendez-vous sont exclusivement réservées à l'évaluation de votre dossier juridique et ne font l'objet d'aucune cession ni transfert à des tiers.
        </p>
        <p>
          Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en adressant votre requête à : <em>{config.contact.emails.contact}</em>.
        </p>
      </div>
    </div>
  );
}
