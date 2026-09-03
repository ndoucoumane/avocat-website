import React from 'react';

export default function AppointmentCTA({ config, onOpenAppointment }) {
  return (
    <section className="appointment-cta-section section-spacing" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="appointment-banner">
          <div className="appointment-banner-text">
            <div className="section-tag">Consultation Juridique</div>
            <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>Besoin d'un accompagnement juridique immédiat ?</h3>
            <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.98rem', lineHeight: '1.65' }}>
              Notre équipe d'avocats est à votre disposition pour étudier votre situation en toute confidentialité, évaluer vos chances de succès et définir la stratégie la plus performante.
            </p>
          </div>

          <div className="appointment-banner-actions">
            <button type="button" className="btn btn-primary" onClick={() => onOpenAppointment()}>
              <span>Prendre rendez-vous</span>
              <svg className="btn-icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a 
              href={`https://wa.me/${config.contact.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(config.contact.whatsapp.defaultMessage)}`}
              className="btn btn-whatsapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
              </svg>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
