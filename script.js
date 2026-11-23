const translations = {
  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Parcours",
    nav_contact: "Contact",
    hero_status: "Disponible dès mars 2027 • Stage PFE (6 mois)",
    hero_role: "Élève-Ingénieur en Systèmes de Production & Logistique — Lean, Automatisme 4.0 & Data Science",
    hero_bio: "Étudiant en dernière année à INP SIGMA Clermont, je conçois et optimise des systèmes industriels en combinant génie des procédés, automatisme et analyse de données. À la recherche d'un stage de fin d'études de 6 mois dès mars 2027 en Supply Chain, logistique industrielle ou amélioration continue.",
    cta_projects: "Explorer mes projets",
    cta_cv: "Télécharger mon CV",
    meta_school: "Formation",
    meta_lang: "Langues",
    meta_focus: "Spécialités",
    meta_focus_val: "Flux, Lean, IA & Automatisme",
    kpi_1: "Précision pixel IA (HSI PCB)",
    kpi_2: "Capacité production drones (Shelter)",
    kpi_3: "Taux d'erreur cible (Pick-to-Light)",
    kpi_4: "Score TOEIC (Niveau C1)",
    about_title: "Approche & Positionnement",
    about_c1_t: "Culture terrain & amélioration continue",
    about_c1_d: "Formé aux méthodes Lean, à l'implantation d'ateliers et à l'analyse des flux physiques, j'aborde chaque problématique industrielle par la mesure, l'ergonomie poste de travail (RULA) et la réduction des gaspillages.",
    about_c2_t: "Double compétence Data & Automatisme 4.0",
    about_c2_d: "De la programmation d'automates Schneider Electric à l'entraînement de réseaux de neurones sous PyTorch en Norvège, j'intègre les outils numériques et l'IA directement au service de la performance opérationnelle.",
    about_c3_t: "Rigueur analytique & exécution",
    about_c3_d: "Issu des classes préparatoires MPSI/PSI* puis de SIGMA Clermont, je structure les projets complexes de l'analyse fonctionnelle SysML jusqu'au prototypage CAO et à la validation terrain.",
    skills_title: "Compétences d'ingénierie",
    sk1_t: "Supply Chain, Flux & Lean",
    sk1_d: "Simulation de flux, implantation d'atelier, kitting, gestion des stocks de sécurité, recherche opérationnelle et étude ergonomique RULA.",
    sk2_t: "Data Science & Vision IA",
    sk2_d: "Prétraitement de cubes spectraux, auto-encodeurs multi-échelles, segmentation sémantique et classification automatisée de composants.",
    sk3_t: "Automatisme & Industrie 4.0",
    sk3_d: "Dimensionnement électrique, architectures Pick-to-Light, automates Modicon M251, IHM tactiles et programmation de machines d'état.",
    sk4_t: "CAO 3D & Réalité Virtuelle",
    sk4_d: "Modélisation paramétrique d'équipements industriels, chariots modulables, outillages sur mesure et validation d'implantation en VR.",
    sk5_t: "Ingénierie Système & Gestion",
    sk5_d: "Cahier des charges fonctionnel, diagrammes d'exigences SysML, planification Gantt, gestion agile Kanban et conformité normative.",
    sk6_t: "BI, Pilotage & Langues",
    sk6_d: "Tableaux de bord décisionnels, indicateurs de performance industrielle (KPI) et collaboration en environnement international anglophone.",
    proj_title: "Projets techniques & Recherche",
    flt_all: "Tous (3)",
    flt_ai: "IA & Data",
    flt_supply: "Supply Chain & Flux",
    flt_auto: "Automatisme 4.0",
    p1_badge: "Stage Recherche • Norvège",
    p1_title: "Tri automatisé de cartes électroniques par imagerie hyperspectrale",
    p1_summary: "Développement d'une pipeline complète sous PyTorch (auto-encodeur parallèle multi-échelle + segmenteur) pour identifier et localiser les composants de PCB (circuits intégrés, condensateurs) sur 214 bandes spectrales.",
    p1_k1: "Pixel Accuracy",
    p1_k2: "Mean Dice",
    p1_k3: "Bandes HSI",
    p2_badge: "Projet 2A • 92e RI & NSE",
    p2_title: "Atelier mobile de production et réparation de drones (Shelter)",
    p2_summary: "Reconversion d'un shelter militaire de 23,8 m³ en unité autonome de fabrication et maintenance : étude des flux opérateurs, système de kitting sur mesure, sécurité incendie LiPo et validation en réalité virtuelle.",
    p2_k1: "Drones produits",
    p2_k2: "+ 24 drones stockés",
    p2_k3: "Surface utile",
    p3_badge: "Projet 3A • SIGMA Clermont",
    p3_title: "Cellule d'assemblage manuelle guidée par Pick-to-Light",
    p3_summary: "Conception matérielle, électrique et logicielle d'un poste d'assemblage Industrie 4.0 (Schneider Electric Modicon M251, IHM HMISTO) couplé à un chariot mobile ergonomique validé par étude RULA.",
    p3_k1: "Erreur opérateur",
    p3_k2: "Ladder & ST",
    p3_k3: "Validation posturale",
    btn_explore: "Explorer l'étude & les graphiques",
    exp_title: "Expériences & Formation",
    t1_tag: "Formation Ingénieur",
    t1_title: "Diplôme d'Ingénieur en Mécanique — Spécialité Systèmes de Production & Logistique (SPL)",
    t1_desc: "Simulation de flux (Arena), gestion de production Lean, recherche opérationnelle, data science, automatisme industriel et gestion de projets.",
    t2_date: "Mai – Sept. 2026",
    t2_tag: "Stage Assistant Ingénieur (4 mois)",
    t2_title: "Recherche en Vision par Ordinateur & Machine Learning (DEEE / PCB)",
    t2_desc: "Conception d'une pipeline Python/PyTorch de prétraitement et segmentation d'images hyperspectrales pour le tri automatisé de cartes électroniques en environnement de recherche international.",
    t3_date: "Juillet 2025",
    t3_tag: "Stage Ouvrier",
    t3_title: "Opérateur de production en menuiserie industrielle",
    t3_desc: "Immersion en atelier de fabrication, compréhension des contraintes de cadence, qualité produit et organisation d'une ligne de production.",
    t4_tag: "Classe Préparatoire",
    t4_title: "CPGE MPSI / PSI* (Mathématiques, Physique et Sciences de l'Ingénieur)",
    t4_desc: "Modélisation des systèmes multiphysiques, sciences industrielles de l'ingénieur et méthodes de résolution analytique.",
    contact_title: "Échangeons autour d'un stage PFE",
    contact_desc: "Je suis disponible pour un entretien concernant un stage de fin d'études de 6 mois à partir de mi-mars 2027 en Supply Chain, logistique ou amélioration continue.",
    btn_copy: "Copier l'adresse mail",
    copy_success: "Adresse mail copiée dans le presse-papiers !",
    footer_note: "Conçu & hébergé sur GitHub Pages"
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Background",
    nav_contact: "Contact",
    hero_status: "Available March 2027 • 6-Month Final-Year Internship",
    hero_role: "Production & Logistics Systems Engineering Student — Lean, Industry 4.0 & Data Science",
    hero_bio: "Final-year mechanical engineering student at INP SIGMA Clermont (majoring in Production & Logistics Systems), combining process engineering, industrial automation, and data science. Seeking a 6-month graduation internship starting mid-March 2027 in Supply Chain, Logistics, or Continuous Improvement.",
    cta_projects: "Explore my projects",
    cta_cv: "Download Resume (PDF)",
    meta_school: "Education",
    meta_lang: "Languages",
    meta_focus: "Core Focus",
    meta_focus_val: "Flow, Lean, AI & Automation",
    kpi_1: "AI Pixel Accuracy (HSI PCB)",
    kpi_2: "Drone Output Capacity (Shelter)",
    kpi_3: "Target Error Rate (Pick-to-Light)",
    kpi_4: "TOEIC Score (C1 Level)",
    about_title: "Engineering Mindset & Positioning",
    about_c1_t: "Shop-floor culture & continuous improvement",
    about_c1_d: "Trained in Lean manufacturing, facility layout, and physical flow analysis, I tackle industrial challenges through data measurement, workstation ergonomics (RULA), and waste elimination.",
    about_c2_t: "Dual Data Science & Industry 4.0 expertise",
    about_c2_d: "From programming Schneider Electric PLCs to training PyTorch neural networks during my research internship in Norway, I deploy digital and AI tools to drive operational efficiency.",
    about_c3_t: "Analytical rigor & practical execution",
    about_c3_d: "With a background in MPSI/PSI* preparatory classes and SIGMA Clermont, I structure complex projects from SysML functional analysis to 3D CAD prototyping and field validation.",
    skills_title: "Engineering Toolkit",
    sk1_t: "Supply Chain, Flow & Lean",
    sk1_d: "Discrete-event flow simulation, plant layout, kitting design, safety stock sizing, operations research, and RULA ergonomic assessment.",
    sk2_t: "Data Science & Computer Vision",
    sk2_d: "Hyperspectral cube preprocessing, multi-scale parallel autoencoders, semantic segmentation, and automated electronic component sorting.",
    sk3_t: "Automation & Industry 4.0",
    sk3_d: "Electrical sizing, Pick-to-Light cells, Modicon M251 PLCs, touch HMIs, and state-machine programming.",
    sk4_t: "3D CAD & Virtual Reality",
    sk4_d: "Parametric modeling of industrial equipment, modular mobile carts, custom kitting trays, and VR ergonomic validation.",
    sk5_t: "Systems Engineering & PM",
    sk5_d: "Functional requirements engineering, SysML diagrams, Gantt scheduling, agile Kanban tracking, and safety standards compliance.",
    sk6_t: "BI, Analytics & Languages",
    sk6_d: "Operational KPI dashboards, data-driven decision support, and cross-functional collaboration in international English-speaking teams.",
    proj_title: "Engineering Projects & Research",
    flt_all: "All (3)",
    flt_ai: "AI & Data",
    flt_supply: "Supply Chain & Flow",
    flt_auto: "Industry 4.0",
    p1_badge: "Research Internship • Norway",
    p1_title: "Automated PCB Sorting via Hyperspectral Imaging & Deep Learning",
    p1_summary: "Built an end-to-end PyTorch pipeline (multi-scale parallel autoencoder + semantic segmenter) to detect and classify PCB components (ICs, capacitors) across 214 spectral bands.",
    p1_k1: "Pixel Accuracy",
    p1_k2: "Mean Dice",
    p1_k3: "Spectral Bands",
    p2_badge: "2nd-Year Project • 92nd RI & NSE",
    p2_title: "Mobile Drone Manufacturing & Repair Shelter Workshop",
    p2_summary: "Converted a 23.8 m³ military shelter into an autonomous production and maintenance unit: operator flow optimization, custom 3D-printed kitting, LiPo fire safety, and VR validation.",
    p2_k1: "Drones / day",
    p2_k2: "+ 24 stored drones",
    p2_k3: "Useful floor area",
    p3_badge: "3rd-Year Project • SIGMA Clermont",
    p3_title: "Pick-to-Light Guided Manual Assembly Cell",
    p3_summary: "Hardware, electrical, and software design of an Industry 4.0 assembly workstation (Schneider Electric Modicon M251, HMISTO HMI) paired with an ergonomic RULA-validated mobile cart.",
    p3_k1: "Human error rate",
    p3_k2: "Ladder & ST",
    p3_k3: "Ergonomic study",
    btn_explore: "Explore Case Study & Charts",
    exp_title: "Experience & Education",
    t1_tag: "Engineering Degree",
    t1_title: "MSc / Engineering Degree in Mechanical Engineering — Production & Logistics Systems (SPL)",
    t1_desc: "Flow simulation (Arena), Lean production management, operations research, data science, industrial automation, and project management.",
    t2_date: "May – Sept. 2026",
    t2_tag: "Assistant Engineer Internship (4 months)",
    t2_title: "Computer Vision & Machine Learning Research (E-Waste / PCB Recovery)",
    t2_desc: "Designed a Python/PyTorch pipeline for hyperspectral image preprocessing and semantic segmentation to automate PCB component recovery in an international research lab.",
    t3_date: "July 2025",
    t3_tag: "Shop-Floor Internship",
    t3_title: "Production Operator in Industrial Joinery",
    t3_desc: "Hands-on manufacturing immersion, gaining direct insight into takt-time constraints, quality control, and production line organization.",
    t4_tag: "Preparatory Classes",
    t4_title: "CPGE MPSI / PSI* (Mathematics, Physics & Engineering Sciences)",
    t4_desc: "Multiphysics system modeling, industrial engineering sciences, and rigorous analytical problem-solving.",
    contact_title: "Let's discuss a 2027 Graduation Internship",
    contact_desc: "Available for interviews regarding a 6-month final-year internship starting mid-March 2027 in Supply Chain, Logistics, or Continuous Improvement.",
    btn_copy: "Copy email address",
    copy_success: "Email address copied to clipboard!",
    footer_note: "Built & hosted on GitHub Pages"
  }
};

const projectDetails = {
  hsi: {
    fr: {
      tag: "STAGE ASSISTANT INGÉNIEUR • UNIVERSITY OF AGDER (NORVÈGE)",
      title: "Classification et segmentation d'images hyperspectrales de PCB par Deep Learning",
      kpis: [
        { val: "92,5 %", lbl: "Pixel Accuracy (Test)" },
        { val: "0,788", lbl: "Mean Dice Score" },
        { val: "604 patches", lbl: "Extraits de 53 cartes PCB" }
      ],
      context: "Dans le cadre du recyclage automatisé des déchets électroniques (DEEE), l'imagerie hyperspectrale (HSI) permet d'identifier la signature spectrale des matériaux au-delà du spectre visible RGB. L'objectif était de concevoir une pipeline Python complète capable de segmenter précisément les composants électroniques sur des cubes de 224 bandes spectrales.",
      bullets: [
        "Prétraitement & Filtrage : élimination des bandes bruitées par analyse d'écart-type (passage de 224 à 214 bandes utiles) et sélection par score de qualité/diversité de 604 patches (128×128 px) issus de 53 cartes PCB pour corriger le déséquilibre de classes.",
        "Architecture Deep Learning : conception sous PyTorch d'un auto-encodeur parallèle à 3 branches (convolutions 1×1 spectrale, 3×3 spatiale fine et 5×5 spatiale large) compressant l'information vers un espace latent de 64 canaux (< 3 % d'erreur relative).",
        "Segmentation & Métriques : entraînement multi-étapes combinant Weighted Cross-Entropy (70 %) et Multi-class Dice Loss (30 %), atteignant 0,876 de Mean Recall et 0,680 de Mean IoU sur les circuits intégrés et condensateurs."
      ],
      gallery: [
        { src: "assets/hsi-architecture.png", caption: "Architecture de l'auto-encodeur parallèle à 3 branches (214 → 64 canaux)" },
        { src: "assets/hsi-metrics.png", caption: "Matrice de confusion et scores finaux sur le jeu de test (92,5 % Pixel Acc)" },
        { src: "assets/hsi-segmentation.png", caption: "Comparaison : image hyperspectrale, masque réel (GT) et masque prédit" }
      ]
    },
    en: {
      tag: "ASSISTANT ENGINEER INTERNSHIP • UNIVERSITY OF AGDER (NORWAY)",
      title: "Hyperspectral PCB Image Classification & Segmentation with Deep Learning",
      kpis: [
        { val: "92.5%", lbl: "Test Pixel Accuracy" },
        { val: "0.788", lbl: "Mean Dice Score" },
        { val: "604 patches", lbl: "Curated from 53 PCBs" }
      ],
      context: "To automate electronic waste (WEEE) recovery, hyperspectral imaging (HSI) captures material spectral signatures beyond standard RGB vision. The goal was to build a complete Python/PyTorch pipeline to segment electronic components across 224-band hyperspectral cubes.",
      bullets: [
        "Preprocessing & Curation: filtered noisy spectral bands via standard deviation thresholding (224 → 214 clean bands) and scored/selected 604 high-value patches (128×128 px) from 53 PCB cubes to mitigate class imbalance.",
        "Deep Learning Architecture: built a 3-branch parallel autoencoder in PyTorch (1×1 spectral, 3×3 fine spatial, and 5×5 wide spatial convolutions) compressing data into a 64-channel latent space (< 3% relative reconstruction error).",
        "Segmentation & KPIs: trained a multi-stage segmenter using a hybrid Weighted Cross-Entropy (70%) + Multi-class Dice Loss (30%), reaching 0.876 Mean Recall and 0.680 Mean IoU on ICs and capacitors."
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
      tag: "PROJET INDUSTRIEL 2A • 92e RÉGIMENT D'INFANTERIE & NSE",
      title: "Adaptation d'un shelter mobile en atelier de production et réparation de drones",
      kpis: [
        { val: "20 drones/j", lbl: "Cadence cible (capacité ×5)" },
        { val: "72 kits", lbl: "+ 24 drones assemblés en stock" },
        { val: "48 %", lbl: "Surface utile (zéro croisement)" }
      ],
      context: "En partenariat avec le 92e RI et l'entreprise aéronautique/défense NSE, notre équipe a conçu l'aménagement complet d'un shelter projetable de 23,8 m³ (5,9 × 2,35 × 2,39 m) capable d'opérer en autonomie énergétique pour produire et réparer des drones FPV.",
      bullets: [
        "Logistique & Kitting : dimensionnement de boîtes de kitting sur mesure (352 × 186 × 60 mm, 12 kits par tiroir) et d'un fichier de suivi d'inventaire pour 100 drones (91,4 L) avec gestion des stocks de sécurité.",
        "Implantation & Sécurité : comparaison multicritère de configurations avec et sans cloison (48 % de surface utile, distance de manutention batterie réduite à 0,79 m, centre de gravité équilibré) et stockage LiPo coupe-feu 90 min (normes NF EN 14470-1 / NFPA 855).",
        "Validation 3D & Réalité Virtuelle : modélisation CAO complète et immersion sous Unity 6 pour valider l'ergonomie des postes et préparer la formation des opérateurs."
      ],
      gallery: [
        { src: "assets/drone-kitting.png", caption: "Modélisation CAO d'une boîte de kitting drone (352 × 186 × 60 mm)" },
        { src: "assets/drone-flux.png", caption: "Diagramme des flux opérateurs et dimensions de la configuration optimisée" },
        { src: "assets/drone-cao-cloison.png", caption: "Rendu CAO 3D — Configuration compartimentée avec cloison" },
        { src: "assets/drone-cao-ouvert.png", caption: "Rendu CAO 3D — Configuration ouverte sans cloison (48 % surface utile)" }
      ]
    },
    en: {
      tag: "2ND-YEAR ENGINEERING PROJECT • 92ND INFANTRY REGIMENT & NSE",
      title: "Mobile Drone Manufacturing & Repair Shelter Workshop",
      kpis: [
        { val: "20 drones/day", lbl: "Target output (5× capacity)" },
        { val: "72 kits", lbl: "+ 24 assembled drones stored" },
        { val: "48%", lbl: "Useful floor area (zero crossover)" }
      ],
      context: "In partnership with the French Army's 92nd Infantry Regiment and aerospace/defense company NSE, we engineered the complete interior layout of a deployable 23.8 m³ military shelter (5.9 × 2.35 × 2.39 m) for autonomous FPV drone assembly and maintenance.",
      bullets: [
        "Logistics & Kitting: designed custom 3D-printed kitting trays (352 × 186 × 60 mm, 12 kits per drawer) and a real-time inventory tracker covering 100 drones (91.4 L) with safety-stock alerts.",
        "Layout & Fire Safety: evaluated partitioned vs. open layouts across 6 industrial KPIs (48% useful floor area, battery handling distance cut to 0.79 m, balanced center of gravity) with 90-min fire-rated LiPo storage (EN 14470-1 / NFPA 855).",
        "3D CAD & Virtual Reality: built full 3D assemblies and an interactive Unity 6 VR simulation to validate workstation ergonomics and operator workflows."
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
      tag: "PROJET INDUSTRIEL 3A • PLATEFORME TECHNOLOGIQUE SIGMA CLERMONT",
      title: "Conception d'une cellule d'assemblage manuelle guidée par Pick-to-Light",
      kpis: [
        { val: "< 1 %", lbl: "Taux d'erreur humain visé" },
        { val: "Modicon M251", lbl: "Automate & E/S TM3" },
        { val: "RULA", lbl: "Ergonomie validée" }
      ],
      context: "Conception et dimensionnement d'une cellule d'assemblage manuelle modulable répondant aux standards de l'Industrie 4.0 pour la plateforme technologique de SIGMA Clermont, incluant la création d'un support de Travaux Pratiques pour les futurs élèves-ingénieurs.",
      bullets: [
        "Automatisme & Architecture matérielle : sélection, dimensionnement électrique et câblage de l'écosystème Schneider Electric (Automate Modicon M251, modules E/S TM3, IHM tactile HMISTO, voyants/boutons Harmony XB4) et capteurs photoélectriques.",
        "Développement Software : programmation complète de la machine d'état sous EcoStruxure Machine Expert en combinant langage graphique (Ladder) et texte structuré (ST) pour guider le prélèvement et réduire les temps de cycle.",
        "Conception & Ergonomie : modélisation sous SolidWorks d'un chariot mobile équipé de bacs inclinés sur rails à rouleaux (alimentation gravitaire) et validation des postures opérateurs via étude ergonomique RULA."
      ],
      gallery: []
    },
    en: {
      tag: "3RD-YEAR ENGINEERING PROJECT • SIGMA CLERMONT TECH PLATFORM",
      title: "Pick-to-Light Guided Manual Assembly Cell Design",
      kpis: [
        { val: "< 1%", lbl: "Target human error rate" },
        { val: "Modicon M251", lbl: "PLC & TM3 I/O architecture" },
        { val: "RULA", lbl: "Postural ergonomics validated" }
      ],
      context: "Design and sizing of a mobile, modular Industry 4.0 manual assembly workstation for SIGMA Clermont's technological platform, including full lab documentation (TP) to train future engineering students.",
      bullets: [
        "Automation & Hardware Architecture: electrical sizing and wiring of the Schneider Electric ecosystem (Modicon M251 PLC, TM3 I/O modules, HMISTO touch HMI, Harmony XB4 pushbuttons/indicators) and photoelectric sensors.",
        "PLC Software Development: programmed the complete state machine in EcoStruxure Machine Expert combining Ladder logic and Structured Text (ST) to guide picking sequences and cut cycle times.",
        "Mechanical Design & Ergonomics: 3D CAD modeling in SolidWorks of a mobile flow-rack cart with inclined roller-rail bins and operator posture validation using the RULA ergonomic method."
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
