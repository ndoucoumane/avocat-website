/**
 * CONFIGURATION DU CABINET D'AVOCATS (REACT ES MODULE)
 * Permet d'adapter l'identité, les coordonnées, les expertises et l'équipe
 */

export const INITIAL_CONFIG = {
  identity: {
    name: "DIALLO & ASSOCIÉS",
    shortName: "Diallo & Associés",
    tagline: "Cabinet d'Avocats à la Cour — Barreau du Sénégal",
    headline: "Votre défense.<br /><span>Notre engagement.</span>",
    subheadline: "Un cabinet d'avocats engagé aux côtés de ses clients pour apporter des solutions juridiques rigoureuses, stratégiques et adaptées à chaque situation au Sénégal et dans tout l'espace OHADA.",
    foundedYear: 2008,
    barreau: "Cabinet d'Avocats à la Cour — Barreau du Sénégal",
    juridiction: "Cour d'Appel de Dakar & CCJA (Abidjan)",
    logoBadge: "DA",
    logoText: "DIALLO & ASSOCIÉS",
    logoSubtext: "AVOCATS À LA COUR"
  },

  contact: {
    address: {
      line1: "Immeuble Concorde, 4ème étage",
      line2: "14, Avenue Léopold Sédar Senghor",
      district: "Dakar Plateau",
      city: "Dakar",
      country: "Sénégal",
      postalCode: "BP 11455 Dakar-Peytavin",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3907722744855!2d-17.433857623910955!3d14.667825385828453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1724bf200d72f%3A0xbce5c7964a38cb62!2sAv.%20L%C3%A9opold%20S%C3%A9dar%20Senghor%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1700000000000!5m2!1sfr!2ssn"
    },
    phones: {
      standard: "+221 33 849 70 00",
      standardRaw: "+221338497000",
      urgences: "+221 77 650 12 12",
      urgencesRaw: "+221776501212"
    },
    emails: {
      contact: "contact@diallo-associes-avocats.sn",
      consultations: "rdv@diallo-associes-avocats.sn"
    },
    whatsapp: {
      number: "+221776501212",
      displayNumber: "+221 77 650 12 12",
      defaultMessage: "Bonjour Maître, je souhaite solliciter un conseil ou un rendez-vous avec le cabinet DIALLO & ASSOCIÉS."
    },
    hours: {
      weekdays: "Lundi – Vendredi : 08h00 – 18h30",
      saturday: "Samedi : Sur rendez-vous uniquement",
      sunday: "Dimanche : Permanence pénale 24h/7j"
    }
  },

  social: {
    linkedin: "https://www.linkedin.com/company/diallo-associes-avocats-dakar",
    facebook: "https://www.facebook.com/dialloassociesavocats",
    whatsappDirect: "https://wa.me/221776501212",
    barreauUrl: "https://ordredesavocats.sn"
  },

  stats: [
    {
      value: "18+",
      label: "Années d'excellence",
      description: "Pratique continue au Barreau du Sénégal et dans l'espace UEMOA/OHADA"
    },
    {
      value: "650+",
      label: "Dossiers accompagnés",
      description: "Contentieux stratégiques et opérations corporate menées avec succès"
    },
    {
      value: "98%",
      label: "Taux de satisfaction",
      description: "Confiance renouvelée de nos clients institutionnels et privés"
    },
    {
      value: "17",
      label: "États membres OHADA",
      description: "Capacité d'intervention panafricaine via notre réseau de correspondants"
    }
  ],

  values: [
    {
      id: "expertise",
      title: "Expertise",
      subtitle: "Maîtrise doctrinale approfondie",
      description: "Une maîtrise pointue et continuellement actualisée des problématiques juridiques, des textes OHADA et de la jurisprudence sénégalaise.",
      icon: "balance"
    },
    {
      id: "engagement",
      title: "Engagement",
      subtitle: "Combativité & disponibilité",
      description: "Une implication constante aux côtés de nos mandants, assurant une défense vigoureuse et une réactivité exemplaire face à l'urgence.",
      icon: "shield"
    },
    {
      id: "confidentialite",
      title: "Confidentialité",
      subtitle: "Secret professionnel absolu",
      description: "Une gestion rigoureuse, protégée et confidentielle de chaque dossier conformément à la déontologie stricte de l'Ordre des Avocats.",
      icon: "lock"
    }
  ],

  expertise: [
    {
      id: "droit-affaires",
      title: "Droit des Affaires & Corporate",
      subtitle: "Accompagnement juridique des entreprises, dirigeants et investisseurs",
      shortDesc: "Structuration juridique, gouvernance d'entreprise, fusions-acquisitions, levées de fonds et sécurisation des investissements directs étrangers (IDE) au Sénégal.",
      scope: [
        "Création de sociétés, filiales et succursales au Sénégal",
        "Opérations sur capital, pactes d'actionnaires et gouvernance",
        "Opérations de fusions, acquisitions et cessions d'actifs",
        "Audits juridiques d'acquisition (Due Diligence)"
      ],
      icon: "briefcase"
    },
    {
      id: "droit-ohada",
      title: "Droit OHADA & Intégration Régionale",
      subtitle: "Maîtrise complète des Actes Uniformes dans tout l'espace ouest-africain",
      shortDesc: "Conseil et contentieux sous l'égide du Traité OHADA. Représentation devant les juridictions sénégalaises et la Cour Commune de Justice et d'Arbitrage (CCJA d'Abidjan).",
      scope: [
        "Application des Actes Uniformes (sociétés, sûretés, recouvrement)",
        "Voies d'exécution et saisies conservatoires ou attribution",
        "Procédures collectives d'apurement du passif",
        "Recours et pourvois devant la CCJA"
      ],
      icon: "globe"
    },
    {
      id: "contentieux-arbitrage",
      title: "Contentieux & Arbitrage",
      subtitle: "Défense et représentation devant toutes les juridictions",
      shortDesc: "Plaidoyers devant les Tribunaux de Grande Instance, Tribunaux de Commerce, Cours d'Appel et Cour Suprême du Sénégal. Pratique de l'arbitrage CCJA, CAMC et CCI.",
      scope: [
        "Contentieux commercial, civil, bancaire et des affaires",
        "Référés d'urgence, mesures conservatoires et exécutions",
        "Arbitrage institutionnel (CAMC Dakar, CCJA, CCI Paris)",
        "Médiation et règlements transactionnels précontentieux"
      ],
      icon: "gavel"
    },
    {
      id: "droit-commercial",
      title: "Droit Commercial & Contrats",
      subtitle: "Sécurisation des relations d'affaires et partenariats économiques",
      shortDesc: "Rédaction, négociation et audit de contrats commerciaux nationaux et internationaux, baux commerciaux, accords de distribution, franchise et agence commerciale.",
      scope: [
        "Contrats de distribution, franchise et fourniture exclusive",
        "Baux professionnels et baux commerciaux (OHADA)",
        "Recouvrement de créances civiles et commerciales",
        "Rupture abusive de pourparlers ou de relations commerciales"
      ],
      icon: "file-text"
    },
    {
      id: "droit-travail",
      title: "Droit du Travail & Protection Sociale",
      subtitle: "Accompagnement des employeurs et cadres dirigeants",
      shortDesc: "Conseil en relations individuelles et collectives de travail selon le Code du Travail du Sénégal, gestion des restructurations, départs négociés et contentieux prud'homal.",
      scope: [
        "Rédaction de contrats de travail et clauses spécifiques",
        "Procédures de licenciement pour motif personnel ou économique",
        "Audits sociaux et conformité avec la législation sénégalaise",
        "Assistance devant l'Inspection du Travail et le Tribunal du Travail"
      ],
      icon: "users"
    },
    {
      id: "droit-immobilier",
      title: "Droit Immobilier & Foncier",
      subtitle: "Conseil et sécurisation des opérations foncières et immobilières",
      shortDesc: "Accompagnement lors de l'acquisition de titres fonciers (TF), baux emphytéotiques, autorisations administratives, promotion immobilière et contentieux de la propriété.",
      scope: [
        "Vérification des titres fonciers et de l'état des charges (NICAD)",
        "Contrats de promotion immobilière et vente en l'état futur d'achèvement (VEFA)",
        "Baux à construction, concessions et contentieux de bail",
        "Contentieux de l'expulsion et litiges de bornage foncier"
      ],
      icon: "building"
    },
    {
      id: "droit-fiscal",
      title: "Droit Fiscal & Douanier",
      subtitle: "Optimisation légale et défense lors des contrôles fiscaux",
      shortDesc: "Assistance fiscale aux entreprises sénégalaises et multinationales, régimes d'incitation du Code des Investissements, contentieux contre la DGID et l'Administration des Douanes.",
      scope: [
        "Conseil sur l'impôt sur les sociétés (IS), TVA, BRS et retenues",
        "Agrément aux régimes privilégiés du Code des Investissements",
        "Assistance lors des vérifications de comptabilité de la DGID",
        "Réclamations contentieuses préalables et recours juridictionnels"
      ],
      icon: "percent"
    },
    {
      id: "propriete-intellectuelle",
      title: "Propriété Intellectuelle & Numérique",
      subtitle: "Protection des actifs immatériels dans la zone OAPI",
      shortDesc: "Dépôt et défense des marques, brevets et modèles auprès de l'Organisation Africaine de la Propriété Intellectuelle (OAPI). Droit des technologies, RGPD/CDP Sénégal.",
      scope: [
        "Enregistrement et défense des marques auprès de l'OAPI",
        "Actions en contrefaçon et concurrence déloyale",
        "Conformité avec la Commission de Protection des Données Personnelles (CDP)",
        "Contrats informatiques et cybersécurité"
      ],
      icon: "cpu"
    }
  ],

  team: {
    lawyers: [
      {
        id: "me-ousmane-diallo",
        name: "Me. Ousmane DIALLO",
        role: "Avocat Associé Fondateur",
        title: "Managing Partner",
        barreau: "Barreau du Sénégal (Promotion 2005)",
        photo: "/images/partner_diallo.jpg",
        specialties: ["Droit des Affaires", "Contentieux & Arbitrage", "Droit OHADA"],
        bio: "Ancien Secrétaire de la Conférence du Stage du Barreau du Sénégal, Me. Ousmane Diallo cumule plus de 18 années de pratique juridique. Il conseille des groupes industriels, des banques régionales et des institutions internationales dans leurs litiges stratégiques.",
        education: [
          "DESS Droit des Affaires & Fiscalité — Université Cheikh Anta Diop de Dakar (UCAD)",
          "Master 2 Droit Économique International — Université Paris 1 Panthéon-Sorbonne",
          "Certificat d'Aptitude à la Profession d'Avocat (CAPA) — Barreau du Sénégal"
        ],
        languages: ["Français", "Wolof", "Anglais"],
        email: "o.diallo@diallo-associes-avocats.sn"
      },
      {
        id: "me-fatou-diop",
        name: "Me. Fatou DIOP FALL",
        role: "Avocate Associée",
        title: "Senior Partner",
        barreau: "Barreau du Sénégal (Promotion 2011)",
        photo: "/images/associate_fall.jpg",
        specialties: ["Droit des Sociétés", "Droit Fiscal & Douanier", "Droit Social"],
        bio: "Me. Fatou Diop Fall est une spécialiste reconnue de la structuration corporate et de l'ingénierie fiscale au Sénégal. Elle pilote le département Conseil du cabinet et intervient régulièrement sur des opérations de fusions transfrontalières en Afrique de l'Ouest.",
        education: [
          "DEA Droit Privé Général — Université Gaston Berger de Saint-Louis (UGB)",
          "LL.M International Business Law — Université de Fribourg (Suisse)",
          "Membre de l'Ordre des Avocats du Sénégal"
        ],
        languages: ["Français", "Wolof", "Anglais"],
        email: "f.diop@diallo-associes-avocats.sn"
      },
      {
        id: "me-cheikh-tall",
        name: "Me. Cheikh TALL",
        role: "Avocat Collaborateur Senior",
        title: "Senior Associate",
        barreau: "Barreau du Sénégal (Promotion 2017)",
        photo: "/images/associate_tall.jpg",
        specialties: ["Droit Foncier & Immobilier", "Recouvrement de Créances", "Contentieux Commercial"],
        bio: "Spécialiste du contentieux civil et commercial, Me. Cheikh Tall intervient quotidiennement devant les tribunaux de Dakar, Thiès et Saint-Louis. Il assure la défense rigoureuse de nos clients dans les procédures d'urgence et voies d'exécution.",
        education: [
          "Master 2 Pratique Juridique et Judiciaire — UCAD Dakar",
          "Diplôme de Droit Comparé OHADA — ERSUMA (Bénin)",
          "Avocat inscrit au Tableau de l'Ordre des Avocats du Sénégal"
        ],
        languages: ["Français", "Wolof", "Anglais"],
        email: "c.tall@diallo-associes-avocats.sn"
      }
    ],

    administrative: [
      {
        id: "aminata-kane",
        name: "Mme. Aminata KANE",
        role: "Directrice Administrative & Office Manager",
        photo: "/images/admin_director.jpg",
        bio: "Diplômée en management des organisations et gestion de cabinets juridiques, Mme. Kane coordonne l'accueil de notre clientèle, la gestion des audiences et la communication confidentielle avec les greffes et juridictions.",
        email: "secretariat@diallo-associes-avocats.sn"
      }
    ]
  },

  reasons: [
    {
      number: "01",
      title: "Ancrage Sénégalais & Portée Panafricaine",
      description: "Une parfaite maîtrise des institutions judiciaires locales combinée à une capacité d'intervention directe dans les 17 pays membres du Traité OHADA."
    },
    {
      number: "02",
      title: "Approche Stratégique & Sur-Mesure",
      description: "Nous n'appliquons aucune recette préfabriquée : chaque consultation aboutit à un plan d'action juridique calibré selon vos enjeux financiers et temporels."
    },
    {
      number: "03",
      title: "Transparence & Rigueur Déontologique",
      description: "Convention d'honoraires claire et détaillée dès l'ouverture du dossier, sans coûts cachés, dans le respect scrupuleux du code de déontologie du Barreau de Dakar."
    },
    {
      number: "04",
      title: "Réactivité Immédiate & Disponibilité",
      description: "Un interlocuteur dédié au sein du cabinet et une ligne d'urgence ouverte 24h/24 pour les gardes à vue, saisies conservatoires et urgences judiciaires."
    }
  ]
};
