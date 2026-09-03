import React, { useState } from 'react';

export default function CustomizerDemo({ onSelectPreset }) {
  const [isOpen, setIsOpen] = useState(false);

  const presets = {
    diallo: {
      name: "DIALLO & ASSOCIÉS",
      logoBadge: "DA",
      logoText: "DIALLO & ASSOCIÉS",
      logoSubtext: "AVOCATS À LA COUR",
      phone: "+221 33 849 70 00",
      phoneRaw: "+221338497000",
      email: "contact@diallo-associes-avocats.sn",
      addressLine2: "14, Avenue Léopold Sédar Senghor, Dakar Plateau"
    },
    sow: {
      name: "CABINET ME AÏSSATOU SOW",
      logoBadge: "AS",
      logoText: "CABINET ME AÏSSATOU SOW",
      logoSubtext: "AVOCATE AU BARREAU DE DAKAR",
      phone: "+221 33 822 45 10",
      phoneRaw: "+221338224510",
      email: "cabinet@me-aissatou-sow.sn",
      addressLine2: "Immeuble Fahd, Boulevard Djily Mbaye, Dakar Plateau"
    },
    kane: {
      name: "KANE, SY & PARTENAIRES",
      logoBadge: "KS",
      logoText: "KANE, SY & PARTENAIRES",
      logoSubtext: "CABINET D'AFFAIRES & FISCALITÉ",
      phone: "+221 33 860 90 20",
      phoneRaw: "+221338609020",
      email: "direction@kane-sy-avocats.sn",
      addressLine2: "Route des Almadies, Zone 12, Dakar"
    }
  };

  const applyPreset = (key) => {
    onSelectPreset(presets[key]);
    setIsOpen(false);
  };

  return (
    <>
      <div className={`customizer-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="customizer-title">Personnalisation Commerciale</div>
        <div className="customizer-subtitle">Testez le re-branding instantané pour vos prospects au Sénégal :</div>
        <div className="customizer-presets-grid">
          <button type="button" className="customizer-preset-btn" onClick={() => applyPreset('diallo')}>
            <strong>DIALLO & ASSOCIÉS</strong><br />
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Avocats à la Cour • Dakar Plateau</span>
          </button>
          <button type="button" className="customizer-preset-btn" onClick={() => applyPreset('sow')}>
            <strong>CABINET ME AÏSSATOU SOW</strong><br />
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Avocate au Barreau • Imm. Fahd</span>
          </button>
          <button type="button" className="customizer-preset-btn" onClick={() => applyPreset('kane')}>
            <strong>KANE, SY & PARTENAIRES</strong><br />
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Cabinet d'Affaires • Les Almadies</span>
          </button>
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.7rem', color: '#94a3b8', textAlign: 'center' }}>
          Configurable dans <code>src/config/cabinetConfig.js</code>
        </div>
      </div>

      <button 
        type="button" 
        className="demo-customizer-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        title="Personnaliser l'identité du cabinet"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        <span>Mode Démo Re-branding</span>
      </button>
    </>
  );
}
