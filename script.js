const translations = {
  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Parcours",
    nav_hobbies: "Loisirs",
    nav_contact: "Contact",
    hero_status: "Disponible dès mars 2027 • Stage PFE (6 mois)",
    hero_role: "Élève-Ingénieur en Systèmes de Production & Logistique — Lean, Automatisme 4.0 & Data Science",
    hero_bio: "Étudiant en dernière année à INP SIGMA Clermont, je conçois et optimise des systèmes industriels en combinant automatisme, gestion de flux et analyse de données. À la recherche d'un stage de fin d'études de 6 mois dès mars 2027 en Supply Chain, logistique industrielle, amélioration continue ou Data Science / IA / Machine Learning.",
    cta_projects: "Explorer mes projets",
    cta_cv: "Télécharger mon CV",
    meta_school: "Formation",
    meta_lang: "Langues",
    meta_focus: "Spécialités",
    meta_focus_val: "Flux, Lean, IA & Automatisme",
    about_tag: "01 // PROFIL",
    about_title: "Approche & Positionnement",
    about_c1_t: "Culture terrain & amélioration continue",
    about_c1_d: "Formé aux méthodes Lean, à l'implantation d'ateliers et à l'analyse des flux physiques, j'aborde chaque problématique industrielle par la mesure, l'ergonomie des postes de travail (RULA, NIOSH) et la réduction des gaspillages.",
    about_c2_t: "Double compétence Data & Automatisme 4.0",
    about_c2_d: "De la programmation d'automates Schneider Electric à l'entraînement de réseaux de neurones sous PyTorch en Norvège (UiA / NORCE), j'intègre les outils numériques et l'IA au service de la performance opérationnelle.",
    about_c3_t: "Rigueur analytique & exécution",
    about_c3_d: "Issu des classes préparatoires MPSI/PSI* puis de SIGMA Clermont, je structure les projets complexes de l'analyse fonctionnelle SysML jusqu'au prototypage CAO et à la validation terrain ou VR.",
    skills_tag: "02 // STACK TECHNIQUE",
    skills_title: "Compétences d'ingénierie",
    sk1_t: "Génie Industriel, Flux & Lean",
    sk1_d: "Gestion de production, simulation de flux, implantation d'atelier, kitting, gestion des stocks de sécurité et études ergonomiques RULA / NIOSH.",
    sk2_t: "Computer Vision & Deep Learning",
    sk2_d: "Prétraitement de cubes spectraux, auto-encodeurs multi-branches, Transfer Learning, segmentation sémantique et documentation LaTeX.",
    sk3_t: "Automatisme & Industrie 4.0",
    sk3_d: "Dimensionnement électrique, architectures Pick-to-Light, automates Modicon M251, IHM tactiles et programmation de machines d'état.",
    sk4_t: "Modélisation 3D & Réalité Virtuelle",
    sk4_d: "Conception assistée par ordinateur (CAO) d'équipements industriels, chariots modulables, outillages sur mesure et simulation VR.",
    sk5_t: "Gestion de Projet & Normes",
    sk5_d: "Cahier des charges fonctionnel, ingénierie système SysML, planification Gantt, versioning GitHub et conformité sécurité incendie.",
    sk6_t: "BI, Pilotage & Langues",
    sk6_d: "Tableaux de bord décisionnels, indicateurs de performance industrielle (KPI) et collaboration en équipe de recherche internationale.",
    proj_tag: "03 // RÉALISATIONS",
    proj_title: "Projets techniques & Recherche",
    flt_all: "Tous (3)",
    flt_ai: "IA & Data",
    flt_supply: "Supply Chain & Flux",
    flt_auto: "Automatisme 4.0",
    p1_badge: "Stage R&D • UiA & NORCE",
    p1_title: "Tri automatisé de cartes électroniques par imagerie hyperspectrale",
    p1_summary: "Conception sous PyTorch (UiA / NORCE) d'un auto-encodeur multi-branches et d'un réseau de segmentation par Transfer Learning pour caractériser les composants de PCB sur 214 bandes spectrales.",
    p1_k1: "Pixel Accuracy",
    p1_k2: "Mean Dice",
    p1_k3: "Bandes HSI",
    p2_badge: "Projet 2A • 92e RI & NSE",
    p2_title: "Atelier mobile déployable de production et réparation de drones",
    p2_summary: "Aménagement d'un shelter militaire de 23,8 m³ en unité autonome : optimisation des flux, kitting sur mesure, sécurité incendie LiPo (NFPA 855 / EN 14470-1) et validation en réalité virtuelle (Unity).",
    p2_k1: "Drones FPV / jour",
    p2_k2: "+ 24 drones stockés",
    p2_k3: "Surface utile",
    p3_badge: "Projet 3A • SIGMA Clermont",
    p3_title: "Cellule d'assemblage manuelle intelligente Pick-to-Light",
    p3_summary: "Conception matérielle, électrique et logicielle d'un poste d'assemblage Industrie 4.0 (Schneider Electric Modicon M251, IHM HMISTO) couplé à un chariot mobile ergonomique validé par étude RULA.",
    p3_k1: "Erreur opérateur",
    p3_k2: "Ladder & ST",
    p3_k3: "Validation posturale",
    btn_explore: "Explorer l'étude & les graphiques",
    exp_tag: "04 // TRAJECTOIRE",
    exp_title: "Expériences & Formation",
    t1_tag: "Formation Ingénieur",
    t1_title: "Diplôme d'Ingénieur en Mécanique — Spécialité Systèmes de Production & Logistique (SPL)",
    t1_desc: "Simulation de flux (Arena), gestion de production Lean, recherche opérationnelle, data science, automatisme industriel et gestion de projets.",
    t2_date: "Mai – Sept. 2026 (5 mois)",
    t2_tag: "Stage Assistant Ingénieur R&D",
    t2_title: "Computer Vision & Deep Learning — Tri automatisé de DEEE / PCB",
    t2_desc: "Conception sous Python/PyTorch d'une pipeline d'imagerie hyperspectrale (auto-encodeur multi-branches et segmentation par Transfer Learning), versioning GitHub et rédaction scientifique sous LaTeX.",
    t3_date: "Juillet 2025",
    t3_tag: "Stage Ouvrier",
    t3_title: "Opérateur de production en menuiserie industrielle",
    t3_desc: "Immersion en atelier de fabrication, compréhension des contraintes de cadence, qualité produit et organisation d'une ligne de production.",
    t4_tag: "Classe Préparatoire",
    t4_title: "CPGE MPSI / PSI* (Mathématiques, Physique et Sciences de l'Ingénieur)",
    t4_desc: "Modélisation des systèmes multiphysiques, sciences industrielles de l'ingénieur et méthodes de résolution analytique.",
    hob_tag: "05 // CENTRES D'INTÉRÊT",
    hob_title: "Loisirs & Engagements",
    hob_c1_t: "Course à pied & Musculation",
    hob_c1_d: "Pratique régulière de la course à pied (5 km en 22 min 16, 10 km en 53 min) et de la musculation en salle avec une approche axée sur la régularité et la progression mesurée.",
    hob_c2_t: "Association Formula Student",
    hob_c2_d: "Participation au sein de l'association Formula Student de SIGMA Clermont (2024–2025) à la conception et à la fabrication d'un kart électrique et d'une découpeuse au fil chaud.",
    hob_c2_tag1: "Kart électrique",
    hob_c2_tag2: "Fabrication",
    hob_c2_tag3: "Travail d'équipe",
    hob_c3_t: "Échecs & Langues étrangères",
    hob_c3_d: "Pratique des échecs pour la réflexion stratégique, et apprentissage actif des langues (anglais niveau C1, espagnol B2 et notions de portugais).",
    hob_c3_tag1: "Échecs",
    hob_c3_tag2: "Anglais C1",
    hob_c3_tag3: "Espagnol B2",
    hob_c3_tag4: "Portugais",
    contact_tag: "06 // CONTACT",
    contact_title: "Échangeons autour d'un stage PFE",
    contact_desc: "Je suis disponible pour un entretien concernant un stage de fin d'études de 6 mois à partir de mi-mars 2027 en Supply Chain, logistique, amélioration continue ou Data Science / IA.",
    btn_copy: "Copier l'adresse mail",
    copy_success: "Adresse mail copiée dans le presse-papiers !",
    footer_note: "Conçu & hébergé sur GitHub Pages"
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Background",
    nav_hobbies: "Interests",
    nav_contact: "Contact",
    hero_status: "Available March 2027 • 6-Month Final-Year Internship",
    hero_role: "Production & Logistics Systems Engineering Student — Lean, Industry 4.0 & Data Science",
    hero_bio: "Final-year mechanical engineering student at INP SIGMA Clermont (majoring in Production & Logistics Systems), combining industrial automation, flow management, and data analytics. Seeking a 6-month graduation internship starting mid-March 2027 in Supply Chain, Logistics, Continuous Improvement, or Data Science / AI / Machine Learning.",
    cta_projects: "Explore my projects",
    cta_cv: "Download Resume (PDF)",
    meta_school: "Education",
    meta_lang: "Languages",
    meta_focus: "Core Focus",
    meta_focus_val: "Flow, Lean, AI & Automation",
    about_tag: "01 // PROFILE",
    about_title: "Engineering Mindset & Positioning",
    about_c1_t: "Shop-floor culture & continuous improvement",
    about_c1_d: "Trained in Lean manufacturing, facility layout, and physical flow analysis, I tackle industrial challenges through data measurement, workstation ergonomics (RULA, NIOSH), and waste elimination.",
    about_c2_t: "Dual Data Science & Industry 4.0 expertise",
    about_c2_d: "From programming Schneider Electric PLCs to training PyTorch neural networks in Norway (UiA / NORCE), I deploy digital and AI tools to drive operational efficiency.",
    about_c3_t: "Analytical rigor & practical execution",
    about_c3_d: "With a background in MPSI/PSI* preparatory classes and SIGMA Clermont, I structure complex projects from SysML functional analysis to 3D CAD prototyping and field or VR validation.",
    skills_tag: "02 // TECH STACK",
    skills_title: "Engineering Toolkit",
    sk1_t: "Industrial Engineering, Flow & Lean",
    sk1_d: "Production management, flow simulation, plant layout, kitting design, safety stock sizing, and RULA / NIOSH ergonomic assessments.",
    sk2_t: "Computer Vision & Deep Learning",
    sk2_d: "Hyperspectral cube preprocessing, multi-branch autoencoders, Transfer Learning, semantic segmentation, and LaTeX technical documentation.",
    sk3_t: "Automation & Industry 4.0",
    sk3_d: "Electrical sizing, Pick-to-Light cells, Modicon M251 PLCs, touch HMIs, and state-machine programming.",
    sk4_t: "3D Modeling & Virtual Reality",
    sk4_d: "Computer-aided design (CAD) of industrial equipment, modular mobile carts, custom kitting trays, and VR ergonomic validation.",
    sk5_t: "Project Management & Standards",
    sk5_d: "Functional requirements engineering, SysML diagrams, Gantt scheduling, GitHub versioning, and fire safety compliance.",
    sk6_t: "BI, Analytics & Languages",
    sk6_d: "Operational KPI dashboards, data-driven decision support, and cross-functional collaboration in international research teams.",
    proj_tag: "03 // ACHIEVEMENTS",
    proj_title: "Engineering Projects & Research",
    flt_all: "All (3)",
    flt_ai: "AI & Data",
    flt_supply: "Supply Chain & Flow",
    flt_auto: "Industry 4.0",
    p1_badge: "R&D Internship • UiA & NORCE",
    p1_title: "Automated PCB Sorting via Hyperspectral Imaging & Deep Learning",
    p1_summary: "Designed a PyTorch pipeline (UiA / NORCE) combining a multi-branch autoencoder and a Transfer Learning segmentation network to classify PCB components across 214 spectral bands.",
    p1_k1: "Pixel Accuracy",
    p1_k2: "Mean Dice",
    p1_k3: "Spectral Bands",
    p2_badge: "2nd-Year Project • 92nd RI & NSE",
    p2_title: "Deployable Mobile Drone Manufacturing & Repair Shelter",
    p2_summary: "Converted a 23.8 m³ military shelter into an autonomous workshop: operator flow optimization, custom kitting, LiPo fire safety (NFPA 855 / EN 14470-1), and Unity VR validation.",
    p2_k1: "FPV drones / day",
    p2_k2: "+ 24 stored drones",
    p2_k3: "Useful floor area",
    p3_badge: "3rd-Year Project • SIGMA Clermont",
    p3_title: "Smart Pick-to-Light Manual Assembly Cell",
    p3_summary: "Hardware, electrical, and software design of an Industry 4.0 assembly workstation (Schneider Electric Modicon M251, HMISTO HMI) paired with an ergonomic RULA-validated mobile cart.",
    p3_k1: "Human error rate",
    p3_k2: "Ladder & ST",
    p3_k3: "Ergonomic study",
    btn_explore: "Explore Case Study & Charts",
    exp_tag: "04 // BACKGROUND",
    exp_title: "Experience & Education",
    t1_tag: "Engineering Degree",
    t1_title: "MSc / Engineering Degree in Mechanical Engineering — Production & Logistics Systems (SPL)",
    t1_desc: "Flow simulation (Arena), Lean production management, operations research, data science, industrial automation, and project management.",
    t2_date: "May – Sept. 2026 (5 mos)",
    t2_tag: "R&D Assistant Engineer Internship",
    t2_title: "Computer Vision & Deep Learning — Automated E-Waste / PCB Sorting",
    t2_desc: "Developed a Python/PyTorch hyperspectral imaging pipeline (multi-branch autoencoder and Transfer Learning segmentation), GitHub version control, and LaTeX scientific writing.",
    t3_date: "July 2025",
    t3_tag: "Shop-Floor Internship",
    t3_title: "Production Operator in Industrial Joinery",
    t3_desc: "Hands-on manufacturing immersion, gaining direct insight into takt-time constraints, quality control, and production line organization.",
    t4_tag: "Preparatory Classes",
    t4_title: "CPGE MPSI / PSI* (Mathematics, Physics & Engineering Sciences)",
    t4_desc: "Multiphysics system modeling, industrial engineering sciences, and rigorous analytical problem-solving.",
    hob_tag: "05 // INTERESTS",
    hob_title: "Interests & Extracurriculars",
    hob_c1_t: "Running & Strength Training",
    hob_c1_d: "Consistent distance running (5 km in 22:16, 10 km in 53:00) and gym strength training driven by structured progression.",
    hob_c2_t: "Formula Student Association",
    hob_c2_d: "Contributed within SIGMA Clermont's Formula Student team (2024–2025) to the design and manufacturing of an electric go-kart and a hot-wire foam cutter.",
    hob_c2_tag1: "Electric Go-Kart",
    hob_c2_tag2: "Manufacturing",
    hob_c2_tag3: "Teamwork",
    hob_c3_t: "Chess & Foreign Languages",
    hob_c3_d: "Strategic thinking through chess and active language learning (English C1, Spanish B2, conversational Brazilian Portuguese).",
    hob_c3_tag1: "Chess",
    hob_c3_tag2: "English C1",
    hob_c3_tag3: "Spanish B2",
    hob_c3_tag4: "Portuguese",
    contact_tag: "06 // CONTACT",
    contact_title: "Let's discuss a 2027 Graduation Internship",
    contact_desc: "Available for interviews regarding a 6-month final-year internship starting mid-March 2027 in Supply Chain, Logistics, Continuous Improvement, or Data Science / AI.",
    btn_copy: "Copy email address",
    copy_success: "Email address copied to clipboard!",
    footer_note: "Built & hosted on GitHub Pages"
  }
};

const projectDetails = {
  hsi: {
    fr: {
      tag: "STAGE R&D • UNIVERSITY OF AGDER (UiA) & INSTITUT NORCE (NORVÈGE)",
      title: "Classification et segmentation d'images hyperspectrales de PCB par Deep Learning",
      kpis: [
        { val: "92,5 %", lbl: "Pixel Accuracy (Test)" },
        { val: "0,788", lbl: "Mean Dice Score" },
        { val: "604 patches", lbl: "Extraits de 53 cartes PCB" }
      ],
      context: "Au sein du département d'ingénierie de l'UiA et en collaboration avec l'institut de recherche NORCE, j'ai participé à un projet de recherche appliquée visant à automatiser la caractérisation et le tri des déchets d'équipements électriques et électroniques (DEEE / cartes PCB) par imagerie hyperspectrale.",
      bullets: [
        "Prétraitement de données hyperspectrales : analyse exploratoire de cubes de données (224 bandes spectrales), réduction du bruit capteur par analyse statistique de l'écart-type (214 bandes retenues) et pipeline de découpage en patches (128×128 px) pour pallier les contraintes mémoire.",
        "Architecture & Modélisation Deep Learning (PyTorch) : conception d'un auto-encodeur multi-branches combinant signatures spectrales (1×1) et contexte spatial (3×3 et 5×5) pour compresser l'information dans un espace latent de 64 canaux (< 3 % d'erreur relative).",
        "Segmentation sémantique & Transfer Learning : développement d'un réseau de segmentation de composants électroniques (circuits intégrés, condensateurs) par stratégie de gel/dégel de l'encodeur et résolution du déséquilibre de classes (Weighted Cross-Entropy + Dice Loss), atteignant 0,876 de Mean Recall.",
        "Collaboration & Méthodologie : travail au sein d'une équipe mixte université-institut (UiA / NORCE) encadrée par des chercheurs en mécatronique, versioning du code sur GitHub et rédaction scientifique sous LaTeX."
      ],
      gallery: [
        { src: "assets/hsi-architecture.png", caption: "Architecture de l'auto-encodeur parallèle à 3 branches (214 → 64 canaux)" },
        { src: "assets/hsi-metrics.png", caption: "Matrice de confusion et scores finaux sur le jeu de test (92,5 % Pixel Acc)" },
        { src: "assets/hsi-segmentation.png", caption: "Comparaison : image hyperspectrale, masque réel (GT) et masque prédit" }
      ]
    },
    en: {
      tag: "R&D INTERNSHIP • UNIVERSITY OF AGDER (UiA) & NORCE RESEARCH INSTITUTE (NORWAY)",
      title: "Hyperspectral PCB Image Classification & Segmentation with Deep Learning",
      kpis: [
        { val: "92.5%", lbl: "Test Pixel Accuracy" },
        { val: "0.788", lbl: "Mean Dice Score" },
        { val: "604 patches", lbl: "Curated from 53 PCBs" }
      ],
      context: "Within UiA's engineering department and in collaboration with the NORCE research institute, I contributed to an applied research project aimed at automating the characterization and sorting of electronic waste (WEEE / PCBs) using hyperspectral imaging.",
      bullets: [
        "Hyperspectral Preprocessing: exploratory analysis of 224-band spectral cubes, sensor noise filtering via standard deviation analysis (214 clean bands retained), and patch extraction pipeline (128×128 px) to overcome memory constraints.",
        "Deep Learning Architecture (PyTorch): designed a 3-branch parallel autoencoder combining spectral signatures (1×1) and spatial context (3×3 and 5×5) to compress features into a 64-channel latent space (< 3% relative error).",
        "Semantic Segmentation & Transfer Learning: built a component segmentation network (ICs, capacitors) using encoder freeze/unfreeze Transfer Learning and class-imbalance mitigation (Weighted Cross-Entropy + Dice Loss), achieving 0.876 Mean Recall.",
        "Collaboration & Methodology: worked within a joint university-institute team (UiA / NORCE) supervised by mechatronics researchers, with GitHub version control and scientific writing in LaTeX."
      ],
      gallery: [
        { src: "assets/hsi-architecture.png", caption: "3-branch parallel autoencoder architecture (214 → 64 latent channels)" },
        { src: "assets/hsi-metrics.png", caption: "Test set confusion matrix and per-class/global metrics (92.5% Pixel Acc)" },
        { src: "assets/hsi-segmentation.png", caption: "Comparison: raw HSI band, ground truth mask (GT), and predicted mask" }
      ]
    }
  },
  shelter: {
    fr: {
      tag: "PROJET INDUSTRIEL 2A • 92e RÉGIMENT D'INFANTERIE & NSE (SEPT. 2025 – MAI 2026)",
      title: "Conception & Optimisation d'un Atelier Mobile Déployable pour Drones (Projet Shelter)",
      kpis: [
        { val: "20 drones/j", lbl: "Cadence cible (capacité ×5)" },
        { val: "72 kits", lbl: "+ 24 drones assemblés en stock" },
        { val: "48 %", lbl: "Surface utile (zéro croisement)" }
      ],
      context: "En partenariat avec le 92e Régiment d'Infanterie (92e RI) et l'entreprise NSE, notre équipe a conçu l'aménagement complet d'un shelter militaire (conteneur mobile de 23,8 m³) transformé en atelier autonome d'assemblage, de réparation et de programmation de drones FPV sur le terrain.",
      bullets: [
        "Analyse fonctionnelle & Sécurité : rédaction du cahier des charges et intégration des normes de sécurité (NFPA 855, NF EN 14470-1) pour le stockage, la charge et la prévention des risques incendie (résistance feu 90 min) liés aux batteries LiPo.",
        "Optimisation des flux & Implantation : étude comparative de configurations spatiales, maximisation de la surface utile (48 %), élimination des croisements d'opérateurs, réduction des distances de manutention (0,79 m) et dimensionnement de l'éclairage (calculs de lux/lumens).",
        "Gestion logistique & Kitting : création d'un suivi de stock intuitif (100 drones, gestion des pannes et seuils de réapprovisionnement) et conception de boîtes de kitting sur mesure dans les tiroirs (352 × 186 × 60 mm, 12 kits/tiroir).",
        "Modélisation 3D & Réalité Virtuelle (VR) : conception 3D intégrale de l'atelier et développement d'un environnement en Réalité Virtuelle (Unity / casque VR) permettant de valider l'ergonomie des postes et de former les opérateurs en amont.",
        "Gestion de projet : planification Gantt, organisation du travail d'équipe et suivi des livrables selon une démarche d'ingénierie rigoureuse."
      ],
      gallery: [
        { src: "assets/drone-kitting.png", caption: "Modélisation CAO d'une boîte de kitting drone (352 × 186 × 60 mm)" },
        { src: "assets/drone-flux.png", caption: "Diagramme des flux opérateurs et dimensions de la configuration optimisée" },
        { src: "assets/drone-cao-cloison.png", caption: "Rendu CAO 3D — Configuration compartimentée avec cloison" },
        { src: "assets/drone-cao-ouvert.png", caption: "Rendu CAO 3D — Configuration ouverte sans cloison (48 % surface utile)" }
      ]
    },
    en: {
      tag: "2ND-YEAR ENGINEERING PROJECT • 92ND INFANTRY REGIMENT & NSE (SEPT. 2025 – MAY 2026)",
      title: "Design & Optimization of a Deployable Mobile Drone Workshop (Shelter Project)",
      kpis: [
        { val: "20 drones/day", lbl: "Target output (5× capacity)" },
        { val: "72 kits", lbl: "+ 24 assembled drones stored" },
        { val: "48%", lbl: "Useful floor area (zero crossover)" }
      ],
      context: "In partnership with the French Army's 92nd Infantry Regiment (92e RI) and aerospace/defense company NSE, we engineered the complete interior layout of a deployable 23.8 m³ military shelter converted into an autonomous field workshop for FPV drone assembly, repair, and programming.",
      bullets: [
        "Functional Analysis & Safety: authored technical specifications and integrated fire safety standards (NFPA 855, NF EN 14470-1) for 90-minute fire-rated LiPo battery storage and charging.",
        "Flow Optimization & Layout: compared spatial configurations, maximized useful floor area (48%), eliminated operator path crossovers, reduced handling distance (0.79 m), and sized workstation lighting (lux/lumens calculations).",
        "Logistics & Kitting: built an intuitive inventory tracking system (100 drones, failure tracking, reorder thresholds) and designed custom drawer kitting trays (352 × 186 × 60 mm, 12 kits/drawer).",
        "3D Modeling & Virtual Reality (VR): created full 3D CAD models and an interactive VR environment (Unity / VR headset) to validate workstation ergonomics and pre-train operators.",
        "Project Management: Gantt scheduling, team coordination, and milestone tracking following a structured systems-engineering methodology."
      ],
      gallery: [
        { src: "assets/drone-kitting.png", caption: "3D CAD model of the custom drone kitting box (352 × 186 × 60 mm)" },
        { src: "assets/drone-flux.png", caption: "Operator spaghetti/flow diagram and dimensional layout" },
        { src: "assets/drone-cao-cloison.png", caption: "3D CAD view — Partitioned shelter configuration" },
        { src: "assets/drone-cao-ouvert.png", caption: "3D CAD view — Open shelter configuration (48% useful area)" }
      ]
    }
  },
  picktolight: {
    fr: {
      tag: "PROJET INDUSTRIEL 3A • PLATEFORME TECHNOLOGIQUE SIGMA CLERMONT (OCT. 2026 – AUJOURD'HUI)",
      title: "Conception d'un poste d'assemblage manuel intelligent Pick-to-Light",
      kpis: [
        { val: "< 1 %", lbl: "Taux d'erreur humain visé" },
        { val: "Modicon M251", lbl: "Automate & E/S TM3" },
        { val: "RULA", lbl: "Ergonomie posturale validée" }
      ],
      context: "Dans le cadre de ma formation d'ingénieur en Systèmes de Production et Logistique (SPL), je conçois et dimensionne une cellule d'assemblage manuelle guidée par la technologie Pick-to-Light, destinée à la plateforme technologique de SIGMA Clermont, accompagnée d'un support pédagogique complet (Travaux Pratiques) pour les futurs étudiants ingénieurs.",
      bullets: [
        "Automatisme & Architecture matérielle : sélection, dimensionnement électrique et câblage de l'écosystème Schneider Electric (Automate Modicon M251, extension E/S TM3, IHM tactile HMISTO, voyants/boutons Harmony XB4) et intégration de capteurs photoélectriques.",
        "Développement Software : programmation de la machine d'état sous EcoStruxure Machine Expert en combinant le langage graphique (Ladder) et le langage textuel structuré (ST) afin de réduire le taux d'erreur sous 1 % et d'optimiser les temps de cycle de prélèvement.",
        "Conception & Ergonomie : modélisation CAO sous SolidWorks d'un chariot de stockage mobile et modulable avec intégration de bacs inclinés sur rails à rouleaux, et validation des postures de travail par étude ergonomique RULA."
      ],
      gallery: []
    },
    en: {
      tag: "3RD-YEAR ENGINEERING PROJECT • SIGMA CLERMONT TECH PLATFORM (OCT. 2026 – PRESENT)",
      title: "Smart Pick-to-Light Manual Assembly Workstation Design",
      kpis: [
        { val: "< 1%", lbl: "Target human error rate" },
        { val: "Modicon M251", lbl: "PLC & TM3 I/O architecture" },
        { val: "RULA", lbl: "Postural ergonomics validated" }
      ],
      context: "As part of my Production and Logistics Systems (SPL) engineering degree, I am designing and sizing a mobile, modular Pick-to-Light manual assembly cell for SIGMA Clermont's technological platform, complete with structured lab coursework (TP) to train future engineering students.",
      bullets: [
        "Automation & Hardware Architecture: electrical sizing and wiring of the Schneider Electric ecosystem (Modicon M251 PLC, TM3 I/O expansion, HMISTO touch HMI, Harmony XB4 indicators/pushbuttons) and photoelectric sensors.",
        "Software Development: programmed the state machine in EcoStruxure Machine Expert combining Ladder logic and Structured Text (ST) to push human error rates below 1% and optimize picking cycle times.",
        "Mechanical Design & Ergonomics: 3D CAD modeling in SolidWorks of a mobile storage cart with inclined bins on roller rails, paired with operator posture validation via RULA ergonomic analysis."
      ],
      gallery: []
    }
  }
};

let currentLang = "fr";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// Language switcher
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Mobile nav
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Project filters
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    document.querySelectorAll(".project-card").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const show = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !show);
    });
  });
});

// Project Modal
const modal = document.getElementById("projectModal");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openProjectModal(projectId) {
  const data = projectDetails[projectId][currentLang];
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;

  const kpisHtml = data.kpis
    .map((k) => `<div class="modal-kpi-box"><strong>${k.val}</strong><span>${k.lbl}</span></div>`)
    .join("");

  const bulletsHtml = data.bullets.map((b) => `<li>${b}</li>`).join("");

  const galleryHtml = data.gallery.length
    ? `<div class="modal-section">
        <h4>${currentLang === "fr" ? "Visuels techniques & résultats" : "Technical Visuals & Results"}</h4>
        <div class="modal-gallery">
          ${data.gallery
            .map(
              (img) => `
            <figure class="gallery-card" data-src="${img.src}" data-caption="${img.caption}">
              <img src="${img.src}" alt="${img.caption}" />
              <figcaption>${img.caption}</figcaption>
            </figure>`
            )
            .join("")}
        </div>
      </div>`
    : "";

  modalBody.innerHTML = `
    <div class="modal-kpis">${kpisHtml}</div>
    <div class="modal-section">
      <h4>${currentLang === "fr" ? "Contexte & Objectif" : "Context & Objective"}</h4>
      <p>${data.context}</p>
    </div>
    <div class="modal-section">
      <h4>${currentLang === "fr" ? "Démarche d'ingénierie & Réalisations" : "Engineering Approach & Deliverables"}</h4>
      <ul>${bulletsHtml}</ul>
    </div>
    ${galleryHtml}
  `;

  modalBody.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(card.dataset.src, card.dataset.caption));
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".btn-explore").forEach((btn) => {
  btn.addEventListener("click", () => openProjectModal(btn.dataset.project));
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeModal();
  }
});

// Copy email
document.getElementById("copyEmailBtn").addEventListener("click", () => {
  navigator.clipboard.writeText("thomastafn@gmail.com").then(() => {
    const feedback = document.getElementById("copyFeedback");
    feedback.textContent = translations[currentLang].copy_success;
    setTimeout(() => (feedback.textContent = ""), 3000);
  });
});
