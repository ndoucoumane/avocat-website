/**
 * SCRIPT PRINCIPAL — CABINET D'AVOCATS AU SÉNÉGAL
 * Gestion des interactions, modales, menu mobile, filtres d'équipe et formulaires
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation des données dynamiques depuis la configuration
  initCabinetData(CABINET_CONFIG);

  // 2. Gestion de la navigation sticky & menu mobile
  initNavigation();

  // 3. Gestion des onglets de l'équipe
  initTeamTabs();

  // 4. Gestion des modales unifiées
  initModals();

  // 5. Formulaires (Contact & Rendez-vous)
  initForms();

  // 6. Animations au défilement (IntersectionObserver)
  initScrollAnimations();

  // 7. Barre de personnalisation commerciale (Mode Démo)
  initDemoCustomizer();
});

/* ==========================================================================
   1. INJECTION DYNAMIQUE DES DONNÉES DEPUIS CONFIG.JS
   ========================================================================== */
function initCabinetData(config) {
  if (!config) return;

  // Header & Logo
  const logoTitleEls = document.querySelectorAll('.dynamic-logo-title');
  logoTitleEls.forEach(el => el.textContent = config.identity.logoText);

  const logoSubtextEls = document.querySelectorAll('.dynamic-logo-sub');
  logoSubtextEls.forEach(el => el.textContent = config.identity.logoSubtext);

  const logoBadgeEls = document.querySelectorAll('.dynamic-logo-badge');
  logoBadgeEls.forEach(el => el.textContent = config.identity.logoBadge);

  // Coordonnées rapides (Topbar & Footer)
  const phoneEls = document.querySelectorAll('.dynamic-phone');
  phoneEls.forEach(el => {
    el.textContent = config.contact.phones.standard;
    if (el.tagName === 'A') el.href = `tel:${config.contact.phones.standardRaw}`;
  });

  const urgentPhoneEls = document.querySelectorAll('.dynamic-phone-urgent');
  urgentPhoneEls.forEach(el => {
    el.textContent = config.contact.phones.urgences;
    if (el.tagName === 'A') el.href = `tel:${config.contact.phones.urgencesRaw}`;
  });

  const emailEls = document.querySelectorAll('.dynamic-email');
  emailEls.forEach(el => {
    el.textContent = config.contact.emails.contact;
    if (el.tagName === 'A') el.href = `mailto:${config.contact.emails.contact}`;
  });

  const addressLine1Els = document.querySelectorAll('.dynamic-address-line1');
  addressLine1Els.forEach(el => el.textContent = config.contact.address.line1);

  const addressLine2Els = document.querySelectorAll('.dynamic-address-line2');
  addressLine2Els.forEach(el => el.textContent = `${config.contact.address.line2}, ${config.contact.address.district}`);

  const hoursEls = document.querySelectorAll('.dynamic-hours');
  hoursEls.forEach(el => el.textContent = config.contact.hours.weekdays);

  // Hero
  const heroBadgeEl = document.querySelector('.dynamic-hero-badge');
  if (heroBadgeEl) heroBadgeEl.textContent = config.identity.barreau;

  const heroHeadlineEl = document.querySelector('.dynamic-hero-headline');
  if (heroHeadlineEl) heroHeadlineEl.innerHTML = config.identity.headline;

  const heroSubheadlineEl = document.querySelector('.dynamic-hero-sub');
  if (heroSubheadlineEl) heroSubheadlineEl.textContent = config.identity.subheadline;

  // WhatsApp CTAs
  const whatsappButtons = document.querySelectorAll('.btn-dynamic-whatsapp');
  whatsappButtons.forEach(btn => {
    const encodedMsg = encodeURIComponent(config.contact.whatsapp.defaultMessage);
    btn.href = `https://wa.me/${config.contact.whatsapp.number.replace('+', '')}?text=${encodedMsg}`;
  });

  // Génération de la grille des Domaines d'Expertise
  renderExpertiseGrid(config.expertise);

  // Génération de l'Équipe
  renderTeam(config.team);

  // Génération des Statistiques et Raisons
  renderStatsAndReasons(config.stats, config.reasons);
}

/* --- Rendu des Domaines d'Expertise --- */
function renderExpertiseGrid(expertiseList) {
  const container = document.getElementById('expertise-grid-container');
  if (!container || !expertiseList) return;

  container.innerHTML = expertiseList.map(exp => `
    <article class="expertise-card reveal" data-expertise-id="${exp.id}">
      <div class="expertise-card-top">
        <div class="expertise-icon-badge">
          ${getIconSvg(exp.icon)}
        </div>
        <h3 class="expertise-card-title">${exp.title}</h3>
        <div class="expertise-card-sub">${exp.subtitle}</div>
        <p class="expertise-card-desc">${exp.shortDesc}</p>
      </div>
      <div class="expertise-card-action">
        <span>Consulter l'intervention</span>
        <svg class="expertise-action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </article>
  `).join('');

  // Ajout des écouteurs de clic pour ouvrir la modal de détail
  container.querySelectorAll('.expertise-card').forEach(card => {
    card.addEventListener('click', () => {
      const expId = card.getAttribute('data-expertise-id');
      const item = expertiseList.find(e => e.id === expId);
      if (item) openExpertiseModal(item);
    });
  });
}

/* --- Rendu de l'Équipe --- */
function renderTeam(teamData) {
  const lawyersContainer = document.getElementById('lawyers-grid-container');
  const adminContainer = document.getElementById('admin-grid-container');

  if (lawyersContainer && teamData.lawyers) {
    lawyersContainer.innerHTML = teamData.lawyers.map(lawyer => `
      <article class="team-card reveal" data-lawyer-id="${lawyer.id}">
        <div class="team-photo-box">
          <img class="team-photo" src="${lawyer.photo}" alt="${lawyer.name} - Avocat au Barreau du Sénégal" loading="lazy" />
          <div class="team-photo-overlay"></div>
          <div class="team-barreau-badge">Barreau du Sénégal</div>
        </div>
        <div class="team-card-content">
          <h3 class="team-name">${lawyer.name}</h3>
          <div class="team-role">${lawyer.role}</div>
          <div class="team-specialties-tags">
            ${lawyer.specialties.map(spec => `<span class="team-spec-pill">${spec}</span>`).join('')}
          </div>
          <p class="team-bio-excerpt">${lawyer.bio}</p>
          <div class="team-card-footer">
            <button type="button" class="btn btn-outline-dark btn-view-lawyer" style="padding: 0.55rem 1.1rem; font-size: 0.8rem; width: 100%;">
              <span>Consulter le profil complet</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    lawyersContainer.querySelectorAll('.team-card').forEach(card => {
      card.addEventListener('click', () => {
        const lawyerId = card.getAttribute('data-lawyer-id');
        const lawyer = teamData.lawyers.find(l => l.id === lawyerId);
        if (lawyer) openLawyerModal(lawyer);
      });
    });
  }

  if (adminContainer && teamData.administrative) {
    adminContainer.innerHTML = teamData.administrative.map(member => `
      <article class="team-card reveal">
        <div class="team-photo-box">
          <img class="team-photo" src="${member.photo}" alt="${member.name} - ${member.role}" loading="lazy" />
          <div class="team-photo-overlay"></div>
        </div>
        <div class="team-card-content">
          <h3 class="team-name">${member.name}</h3>
          <div class="team-role">${member.role}</div>
          <p class="team-bio-excerpt" style="-webkit-line-clamp: 4;">${member.bio}</p>
          <div class="team-card-footer">
            <a href="mailto:${member.email}" class="btn btn-outline-dark" style="padding: 0.55rem 1.1rem; font-size: 0.8rem; width: 100%;">
              <span>Contacter le secrétariat</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }
}

/* --- Rendu des Statistiques & Arguments --- */
function renderStatsAndReasons(stats, reasons) {
  const statsContainer = document.getElementById('stats-grid-container');
  if (statsContainer && stats) {
    statsContainer.innerHTML = stats.map(stat => `
      <div class="stat-item reveal">
        <div class="stat-number">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
        <div class="stat-desc">${stat.description}</div>
      </div>
    `).join('');
  }

  const reasonsContainer = document.getElementById('reasons-grid-container');
  if (reasonsContainer && reasons) {
    reasonsContainer.innerHTML = reasons.map(reason => `
      <div class="reason-card reveal">
        <div class="reason-number">${reason.number}</div>
        <div class="reason-content">
          <h4>${reason.title}</h4>
          <p>${reason.description}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   2. NAVIGATION & MENU MOBILE
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.header');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    // Mise à jour du lien actif au scroll
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Burger Menu Toggle
  function toggleMobileMenu(forceClose = false) {
    const shouldClose = forceClose || mobileDrawer.classList.contains('is-open');
    if (shouldClose) {
      burgerBtn.classList.remove('is-active');
      mobileDrawer.classList.remove('is-open');
      mobileBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    } else {
      burgerBtn.classList.add('is-active');
      mobileDrawer.classList.add('is-open');
      mobileBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });
}

/* ==========================================================================
   3. ONGLETS DE L'ÉQUIPE (AVOCATS / ADMINISTRATION)
   ========================================================================== */
function initTeamTabs() {
  const tabButtons = document.querySelectorAll('.team-tab-btn');
  const panelLawyers = document.getElementById('tab-panel-lawyers');
  const panelAdmin = document.getElementById('tab-panel-admin');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('is-active'));
      button.classList.add('is-active');

      const target = button.getAttribute('data-tab-target');
      if (target === 'lawyers') {
        panelLawyers.style.display = 'block';
        panelAdmin.style.display = 'none';
      } else {
        panelLawyers.style.display = 'none';
        panelAdmin.style.display = 'block';
      }
    });
  });
}

/* ==========================================================================
   4. MODALES UNIFIÉES
   ========================================================================== */
function initModals() {
  // Fermeture des modales via bouton fermer ou clic sur le backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        closeModal(modal);
      }
    });
  });

  // Échap pour fermer toute modal ouverte
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.is-active').forEach(modal => {
        closeModal(modal);
      });
    }
  });

  // Déclencheurs de la Modal Rendez-vous
  document.querySelectorAll('.trigger-appointment-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openAppointmentModal();
    });
  });

  // Déclencheurs de la Modal Espace Client
  document.querySelectorAll('.trigger-client-portal-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openClientPortalModal();
    });
  });

  // Déclencheurs Mentions Légales
  const legalTrigger = document.getElementById('trigger-legal-modal');
  if (legalTrigger) {
    legalTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal();
    });
  }

  // Déclencheurs Confidentialité
  const privacyTrigger = document.getElementById('trigger-privacy-modal');
  if (privacyTrigger) {
    privacyTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openPrivacyModal();
    });
  }

  // Sélecteur de type de consultation dans la modal RDV
  const typeOptions = document.querySelectorAll('.consultation-type-option');
  typeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      typeOptions.forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      const hiddenInput = document.getElementById('rdv-type-input');
      if (hiddenInput) {
        hiddenInput.value = opt.getAttribute('data-type-val');
      }
    });
  });
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('is-active');
  document.body.style.overflow = '';
}

/* Modal Prise de Rendez-vous */
function openAppointmentModal(preselectedDomain = "") {
  const modal = document.getElementById('modal-appointment');
  if (!modal) return;

  // Pré-remplissage du domaine si fourni
  const domainSelect = document.getElementById('rdv-domain-select');
  if (domainSelect) {
    domainSelect.innerHTML = `<option value="">Sélectionnez la matière concernée</option>` +
      CABINET_CONFIG.expertise.map(exp => `
        <option value="${exp.title}" ${preselectedDomain === exp.title ? 'selected' : ''}>${exp.title}</option>
      `).join('');
  }

  openModal(modal);
}

/* Modal Profil Avocat */
function openLawyerModal(lawyer) {
  const modal = document.getElementById('modal-attorney');
  if (!modal) return;

  document.getElementById('attorney-modal-img').src = lawyer.photo;
  document.getElementById('attorney-modal-img').alt = lawyer.name;
  document.getElementById('attorney-modal-name').textContent = lawyer.name;
  document.getElementById('attorney-modal-role').textContent = `${lawyer.role} — ${lawyer.title}`;
  document.getElementById('attorney-modal-barreau').textContent = lawyer.barreau;
  document.getElementById('attorney-modal-bio').textContent = lawyer.bio;
  
  const eduContainer = document.getElementById('attorney-modal-education');
  eduContainer.innerHTML = lawyer.education.map(edu => `<li>${edu}</li>`).join('');

  const langContainer = document.getElementById('attorney-modal-languages');
  langContainer.textContent = lawyer.languages.join(' • ');

  const mailLink = document.getElementById('attorney-modal-mail-btn');
  if (mailLink) mailLink.href = `mailto:${lawyer.email}`;

  openModal(modal);
}

/* Modal Détail Expertise */
function openExpertiseModal(expertise) {
  const modal = document.getElementById('modal-expertise');
  if (!modal) return;

  document.getElementById('expertise-modal-title').textContent = expertise.title;
  document.getElementById('expertise-modal-sub').textContent = expertise.subtitle;
  document.getElementById('expertise-modal-desc').textContent = expertise.shortDesc;

  const scopeList = document.getElementById('expertise-modal-scope');
  scopeList.innerHTML = expertise.scope.map(s => `
    <li style="display: flex; align-items: flex-start; gap: 0.65rem; margin-bottom: 0.6rem; color: #334155;">
      <svg style="color: #b91c1c; margin-top: 0.2rem; flex-shrink: 0;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${s}</span>
    </li>
  `).join('');

  // Bouton pour prendre RDV directement dans cette spécialité
  const bookBtn = document.getElementById('expertise-modal-book-btn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      closeModal(modal);
      setTimeout(() => openAppointmentModal(expertise.title), 200);
    };
  }

  openModal(modal);
}

/* Modal Espace Client Sécurisé */
function openClientPortalModal() {
  const modal = document.getElementById('modal-client-space');
  if (!modal) return;
  openModal(modal);
}

/* Modal Mentions Légales */
function openLegalModal() {
  const modal = document.getElementById('modal-legal');
  if (!modal) return;
  openModal(modal);
}

/* Modal Politique de Confidentialité */
function openPrivacyModal() {
  const modal = document.getElementById('modal-privacy');
  if (!modal) return;
  openModal(modal);
}

/* ==========================================================================
   5. GESTION DES FORMULAIRES & FEEDBACK
   ========================================================================== */
function initForms() {
  // Formulaire de Contact Principal
  const contactForm = document.getElementById('main-contact-form');
  const contactFeedback = document.getElementById('contact-form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Transmission sécurisée...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        contactFeedback.className = 'form-feedback-message is-success';
        contactFeedback.innerHTML = `
          <strong>Votre demande a été transmise avec succès au secrétariat du cabinet.</strong><br/>
          Un avocat prendra contact avec vous dans un délai de 24 heures ouvrées sous le sceau du secret professionnel.
        `;

        setTimeout(() => {
          contactFeedback.className = 'form-feedback-message';
          contactFeedback.innerHTML = '';
        }, 8000);
      }, 1200);
    });
  }

  // Formulaire de Prise de Rendez-vous
  const rdvForm = document.getElementById('modal-rdv-form');
  const rdvFeedback = document.getElementById('rdv-form-feedback');

  if (rdvForm) {
    rdvForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = rdvForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Validation en cours...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        rdvForm.reset();

        rdvFeedback.className = 'form-feedback-message is-success';
        rdvFeedback.innerHTML = `
          <strong>Demande de rendez-vous enregistrée !</strong><br/>
          Notre assistante vous contactera par téléphone ou email pour confirmer le créneau et les pièces justificatives à fournir.
        `;

        setTimeout(() => {
          rdvFeedback.className = 'form-feedback-message';
          rdvFeedback.innerHTML = '';
          const modal = document.getElementById('modal-appointment');
          if (modal) closeModal(modal);
        }, 4000);
      }, 1000);
    });
  }

  // Simulation Connexion Espace Client
  const clientLoginForm = document.getElementById('client-login-form');
  const clientLoginFeedback = document.getElementById('client-login-feedback');
  const clientDemoDashboard = document.getElementById('client-demo-dashboard');

  if (clientLoginForm) {
    clientLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clientLoginFeedback.className = 'form-feedback-message is-success';
      clientLoginFeedback.innerHTML = `Connexion sécurisée établie avec succès (Dossier #SN-2026-884).`;
      
      clientLoginForm.style.display = 'none';
      if (clientDemoDashboard) clientDemoDashboard.style.display = 'block';
    });
  }
}

/* ==========================================================================
   6. ANIMATIONS AU SCROLL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ==========================================================================
   7. MODE DÉMONSTRATION COMMERCIALE (RE-BRANDING INSTANTANÉ)
   Permet à l'agence de montrer à un client avocat comment le site s'adapte
   ========================================================================== */
function initDemoCustomizer() {
  const trigger = document.getElementById('demo-customizer-trigger');
  const drawer = document.getElementById('customizer-drawer');

  if (!trigger || !drawer) return;

  trigger.addEventListener('click', () => {
    drawer.classList.toggle('is-open');
  });

  // Fermeture en cliquant dehors
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !trigger.contains(e.target)) {
      drawer.classList.remove('is-open');
    }
  });

  // Presets de cabinets d'avocats à Dakar
  const presets = {
    diallo: {
      name: "DIALLO & ASSOCIÉS",
      badge: "DA",
      sub: "AVOCATS À LA COUR",
      phone: "+221 33 849 70 00",
      email: "contact@diallo-associes-avocats.sn",
      address: "14, Avenue Léopold Sédar Senghor, Dakar Plateau"
    },
    sow: {
      name: "CABINET ME AÏSSATOU SOW",
      badge: "AS",
      sub: "AVOCATE AU BARREAU DE DAKAR",
      phone: "+221 33 822 45 10",
      email: "cabinet@me-aissatou-sow.sn",
      address: "Immeuble Fahd, Boulevard Djily Mbaye, Dakar Plateau"
    },
    kane: {
      name: "KANE, SY & PARTENAIRES",
      badge: "KS",
      sub: "CABINET D'AFFAIRES & FISCALITÉ",
      phone: "+221 33 860 90 20",
      email: "direction@kane-sy-avocats.sn",
      address: "Route des Almadies, Zone 12, Dakar"
    }
  };

  document.querySelectorAll('.customizer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.getAttribute('data-preset');
      const data = presets[presetKey];
      if (!data) return;

      document.querySelectorAll('.dynamic-logo-title').forEach(el => el.textContent = data.name);
      document.querySelectorAll('.dynamic-logo-badge').forEach(el => el.textContent = data.badge);
      document.querySelectorAll('.dynamic-logo-sub').forEach(el => el.textContent = data.sub);
      document.querySelectorAll('.dynamic-phone').forEach(el => el.textContent = data.phone);
      document.querySelectorAll('.dynamic-email').forEach(el => el.textContent = data.email);
      document.querySelectorAll('.dynamic-address-line2').forEach(el => el.textContent = data.address);

      drawer.classList.remove('is-open');

      // Notification visuelle discrète
      showToastNotification(`Identité changée en direct : ${data.name}`);
    });
  });
}

function showToastNotification(text) {
  let toast = document.getElementById('demo-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'demo-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.background = '#0a0d12';
    toast.style.color = '#ffffff';
    toast.style.padding = '0.75rem 1.25rem';
    toast.style.borderRadius = '8px';
    toast.style.fontSize = '0.85rem';
    toast.style.border = '1px solid #b91c1c';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
    toast.style.zIndex = '3000';
    toast.style.transition = 'all 0.3s ease';
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3500);
}

/* ==========================================================================
   8. ICÔNES SVG SUR-MESURE POUR DOMAINES D'EXPERTISE
   ========================================================================== */
function getIconSvg(type) {
  switch (type) {
    case 'briefcase':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case 'globe':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    case 'gavel':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14 13-7.5 7.5c-.8.8-2 .8-2.8 0s-.8-2 0-2.8L11 10.2"></path><path d="m16 16 6-6"></path><path d="m8 8 6-6"></path><path d="m9 7 8 8"></path><path d="m21 11-8-8"></path></svg>`;
    case 'file-text':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
    case 'users':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
    case 'building':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="9" y1="6" x2="9" y2="6.01"></line><line x1="15" y1="6" x2="15" y2="6.01"></line><line x1="9" y1="10" x2="9" y2="10.01"></line><line x1="15" y1="10" x2="15" y2="10.01"></line><line x1="9" y1="14" x2="9" y2="14.01"></line><line x1="15" y1="14" x2="15" y2="14.01"></line><line x1="9" y1="18" x2="9" y2="18.01"></line><line x1="15" y1="18" x2="15" y2="18.01"></line></svg>`;
    case 'percent':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>`;
    case 'cpu':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}
