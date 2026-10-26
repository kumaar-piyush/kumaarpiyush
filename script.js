"use strict";

/* ==========================================================================
   ✏️  EDIT ME — every piece of personal content on the page lives here.
   - Wrap a word in *asterisks* to render it as an italic serif accent.
   - Details come from LinkedIn (https://www.linkedin.com/in/piyushkumaar).
   - Lines marked  // TODO  still need something LinkedIn didn't show.
   ========================================================================== */
const PROFILE = {
  name: "Piyush Kumar",
  firstName: "Piyush",
  role: "Structural Bioinformatician",
  intro:
    "I solve biological puzzles the way you solve a cube. I study the pattern in the data, make a deliberate move, then test it until every side lines up.",

  // The two numbers on the yellow hero card
  stats: [
    { value: 2, suffix: "+", label: "years in research" },
    { value: 1, suffix: "", label: "published paper" },
  ],

  availability: {
    title: "Available for work",
    note: "Open to freelance & full-time roles",
  },

  email: "", // TODO: your email. Empty = the "Say hello" button opens LinkedIn instead.
  links: {
    linkedin: "https://www.linkedin.com/in/piyushkumaar",
    github: "", // TODO: e.g. "https://github.com/yourname" (empty = hidden)
    instagram: "https://www.instagram.com/", // TODO: your profile, e.g. "https://www.instagram.com/yourname" ("" = hidden)
    scholar: "https://scholar.google.com/citations?hl=en&user=0rqg8sIAAAAJ&view_op=list_works",
  },

  // Photo for the About section. Leave it empty to show the initials tile instead.
  photo: "images/piyush.webp",

  // The blue "Featured case" card in the hero.
  // metricValue: a number counts up (with metricPrefix/metricSuffix, e.g. "+" and "%"); text shows as-is.
  featured: {
    title: "Network biology: decoding *cervical cancer* kinases",
    metricLabel: "Published",
    metricValue: "Aug 2026",
    metricPrefix: "",
    metricSuffix: "",
    href: "#work",
  },

  skills: [
    "Structural Bioinformatics", "Drug Discovery", "Network Biology", "Computational Biology",
    "Biological Data Analysis", "Next-Generation Sequencing (NGS)", "QSAR", "Computer-Aided Design (CAD)",
    "Database Development", "MySQL", "R", "Biology", "Problem Solving",
  ],

  // The Work section: "About Me" card + "Science in motion" bento.
  showcase: {
    cutout: "images/piyush-cutout.webp", // portrait with the background removed
    badge: "MY RESEARCH PORTFOLIO", // spins around the black badge (the year is added)
    heading: "Science in motion",
    topics: ["Computational Drug Discovery", "Machine Learning", "AI", "NGS"],
    mediaTitle: "Research in Action",
    mediaText: "Molecular docking • MD simulations • AI-driven discovery",
    // layout: "stat" = icon, number, label · "center" = icon over label · "row" = icon beside number + label
    // icon: paper · presenter · doc · scholar · imagery · chart
    // href: "publication" = your first publication's link, "scholar" = links.scholar,
    //       "" = not a link (e.g. paste a gallery URL for Imagery)
    tiles: [
      { layout: "stat", color: "teal", icon: "paper", value: 2, label: "Publications", href: "publication" },
      { layout: "stat", color: "purple", icon: "presenter", value: 3, label: "Conferences", href: "" },
      { layout: "center", color: "pink", icon: "scholar", ariaLabel: "Google Scholar profile", href: "scholar" },
      { layout: "center", color: "green", icon: "imagery", label: "Imagery", href: "gallery.html" },
      { layout: "row", color: "orange", icon: "chart", value: 172, label: "Research Impact", href: "" },
    ],
  },

  // The Imagery page (gallery.html). Put your images in images/gallery/ and list them here.
  // w/h are the image's pixel size (keeps the layout steady while it loads). demo: true shows a "Demo" tag.
  gallery: {
    title: "Imagery",
    intro: "Renders, figures and moments from my research. These demo images are placeholders until I add my own.",
    items: [
      { src: "images/gallery/docking-pocket.webp", w: 1200, h: 800, title: "Ligand in the binding pocket", category: "Structures", year: 2026, demo: true, alt: "3D render of a small molecule bound inside a lavender protein pocket" },
      { src: "images/gallery/kinase-network.webp", w: 1000, h: 1000, title: "Kinase interaction network", category: "Networks", year: 2026, demo: true, alt: "Network graph with clusters of coloured nodes joined by thin edges" },
      { src: "images/gallery/expression-heatmap.webp", w: 1000, h: 760, title: "Expression heatmap", category: "Figures", year: 2025, demo: true, alt: "Clustered heatmap in blue, white and red with dendrograms" },
      { src: "images/piyush.webp", w: 800, h: 1000, title: "At work", category: "Life", year: 2026, alt: "Piyush Kumar smiling with arms crossed in an office" },
      { src: "images/gallery/volcano-plot.webp", w: 1000, h: 800, title: "Differential expression", category: "Figures", year: 2025, demo: true, alt: "Volcano plot with up-regulated points in red and down-regulated points in blue" },
      { src: "images/gallery/ngs-reads.webp", w: 1200, h: 700, title: "Sequencing read pile-up", category: "Sequencing", year: 2024, demo: true, alt: "Stacked sequencing reads with coloured mismatches under a coverage track" },
      { src: "images/gallery/dna-helix.webp", w: 900, h: 1200, title: "Double helix", category: "Illustrations", year: 2024, demo: true, alt: "Illustration of a DNA double helix with coloured base pairs" },
      { src: "images/gallery/docking-closeup.webp", w: 900, h: 1100, title: "Pocket close-up", category: "Structures", year: 2026, demo: true, alt: "Close-up 3D render of a ligand and protein surface" },
    ],
  },

  process: [
    { title: "Study the pattern", text: "Read the biology first: the literature, the datasets and the question that really matters." },
    { title: "Plan the move", text: "Pick the right approach, from network analysis to QSAR, before running a single job." },
    { title: "Build", text: "Build clean, queryable databases and reproducible analyses in R and MySQL." },
    { title: "Test until every side lines up", text: "Check every hit against the data and the literature until the result holds from every angle." },
  ],

  about: {
    bio: "I treat every biological problem like a *cube*. I look at it from every side, the sequence, the structure and the network, then make one deliberate move at a time until it all lines up.",
    more: "I'm a bioinformatics researcher based in Noida, India, passionate about solving biological puzzles through data analysis. Let's explore the world of genomics and computational biology together.",
  },

  experience: [
    {
      company: "National Institute of Cancer Prevention & Research",
      role: "Project Research Scientist I",
      dates: "Dec 2024 – Present",
      place: "Noida · Full-time",
      impact: "Developing research databases in MySQL to support cancer prevention research.",
    },
    {
      company: "Maulana Azad National Institute of Technology",
      role: "Dissertation Intern",
      dates: "Jan 2024 – Jul 2024",
      place: "Bhopal · Internship",
      impact: "Seven-month M.Sc dissertation applying computer-aided design and biological data analysis.",
    },
  ],

  education: [
    { school: "Central University of South Bihar", degree: "M.Sc, Bioinformatics", years: "Nov 2022 – Jul 2024" },
    { school: "Magadh University", degree: "B.Sc, Biotechnology", years: "2018 – 2022" },
  ],

  publications: [
    {
      title: "Network biology driven identification of dysregulated kinases and phytochemical inhibitors in cervical cancer",
      date: "Aug 2026",
      link: "", // TODO: paste the publication URL
    },
  ],

  // e.g. { name: "Certification name", issuer: "Issuer", year: "2025" }
  certifications: [],

  contact: {
    heading: "Let's solve *your* next puzzle.",
    text: "Have a research collaboration, a role or a tricky dataset in mind? Let's connect.",
  },

  // The hero cube. Each face spells 9 characters, read in rows of three.
  cube: {
    faces: {
      front: "PORTFOLIO",
      top: "HEYPIYUSH",
      right: "STRUCTURE",
      left: "GENOMICS!",
      back: "NETWORKS!",
      bottom: "SAYHELLO!",
    },
    solvedCaption: "PORTFOLIO",
    scrambleMoves: 14,
    turnMs: 250, // duration of one layer turn while solving
    autoLoopMs: 7000, // pause on "Solved" before it scrambles itself again
  },
};

/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const pad = (n) => String(n).padStart(2, "0");
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
// escape, then turn *word* into <em>word</em>
const fmt = (s) => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
const plain = (s) => String(s).replace(/\*/g, "");
const isExternal = (href) => /^https?:\/\//.test(href);

// small deterministic RNG so decorative stickers look the same on every load
function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Brand palette (matches the CSS variables)
const BRAND = { cream: "#F5EBDD", coral: "#F2765E", steel: "#315B8C", cocoa: "#413333", deep: "#2A2020" };

// Cube palette: sticker colour + the letter colour that reads on it.
// Red, blue and white stickers use the brand coral, steel blue and cream.
const COLORS = { R: BRAND.coral, Y: "#F5C518", B: BRAND.steel, W: BRAND.cream, G: "#1FA34A", O: "#F07A1A" };
const INK_ON = { R: BRAND.deep, Y: BRAND.steel, B: BRAND.cream, W: BRAND.cocoa, G: "#FFFAF3", O: "#FFFAF3" };
const TILE_INK = { R: BRAND.deep, Y: BRAND.cocoa, B: BRAND.cream, W: BRAND.cocoa, G: BRAND.deep, O: BRAND.deep };
const COLOR_KEYS = Object.keys(COLORS);

// Sticker colours for each solved face, read in rows of three
const FACE_COLORS = {
  front: "RWYBRYWBR",
  top: "YBRWRBGYO",
  right: "BYWRGRYWB",
  left: "OWGYBRWRY",
  back: "GRBYWORBY",
  bottom: "WOBRYGBRW",
};
const FACE_ORDER = ["front", "back", "right", "left", "top", "bottom"];

// Skill pills on the cocoa strip: led by the brand colours, with a few cube accents
const PILL_COLORS = [
  { bg: BRAND.steel, fg: BRAND.cream },
  { bg: BRAND.coral, fg: BRAND.deep },
  { bg: BRAND.cream, fg: BRAND.cocoa },
  { bg: "#F5C518", fg: BRAND.cocoa },
  { bg: "#93DFDE", fg: BRAND.deep },
  { bg: "#F9D5E5", fg: BRAND.cocoa },
  { bg: "#1FA34A", fg: BRAND.deep },
  { bg: "#CFF0AF", fg: BRAND.cocoa },
];

const SOCIALS = [
  ["linkedin", "LinkedIn"],
  ["instagram", "Instagram"],
  ["github", "GitHub"],
];

// Navbar icons
const SOCIAL_ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>`,
};

function faceLetters(words) {
  const out = {};
  for (const face of FACE_ORDER) {
    const chars = Array.from(String(words[face] || "").toUpperCase());
    out[face] = Array.from({ length: 9 }, (_, i) => chars[i] || " ");
  }
  return out;
}

/* ==========================================================================
   Render content from PROFILE
   ========================================================================== */
function bindText(key, text) {
  $$(`[data-bind="${key}"]`).forEach((el) => (el.textContent = text));
}

// navbar + footer: used by every page
function renderShared() {
  const P = PROFILE;
  bindText("brand", `${P.firstName}.`);
  bindText("name", P.name);
  $("#year").textContent = new Date().getFullYear();

  const socials = SOCIALS.filter(([key]) => P.links[key]);
  $("#nav-socials").innerHTML = socials
    .map(
      ([key, label]) =>
        `<li><a class="nav-icon" href="${esc(P.links[key])}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${SOCIAL_ICONS[key]}</a></li>`
    )
    .join("");
  const contactSocials = $("#contact-socials");
  if (contactSocials) {
    contactSocials.innerHTML =
      socials
        .map(([key, label]) => `<li><a href="${esc(P.links[key])}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a></li>`)
        .join("") + (P.email ? `<li><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>` : "");
  }
}

function renderContent() {
  const P = PROFILE;
  document.title = `${P.name}: ${P.role}`;

  bindText("greeting", `Hi, I'm ${P.firstName}.`);
  bindText("role", `${P.role}.`);
  bindText("intro", P.intro);
  bindText("availTitle", P.availability.title);
  bindText("availNote", P.availability.note);

  // hero stat + featured cards
  $("#hero-stats").innerHTML = P.stats
    .map(
      (s) =>
        `<p class="stat"><span class="stat-num"><span data-count="${Number(s.value) || 0}">0</span>${esc(s.suffix || "")}</span><span class="stat-cap">${esc(s.label)}</span></p>`
    )
    .join("");
  const f = P.featured;
  $("#featured-title").innerHTML = fmt(f.title);
  $("#featured-label").textContent = f.metricLabel;
  $("#featured-metric").innerHTML =
    typeof f.metricValue === "number"
      ? `${esc(f.metricPrefix || "")}<span data-count="${f.metricValue}">0</span>${esc(f.metricSuffix || "")}`
      : esc(f.metricValue);
  $("#featured-card").href = f.href || "#work";

  renderSkills();
  renderShowcase();
  renderProcess();
  renderAbout();
  renderContact();
}

function renderSkills() {
  const base = PROFILE.skills;
  let list = base.slice();
  while (list.length && list.length < 18) list = list.concat(base); // long enough to fill wide screens

  $$(".marquee-track").forEach((track, row) => {
    const items = row ? list.slice().reverse() : list;
    const pills = items
      .map((skill, i) => {
        const c = PILL_COLORS[(i + row * 4) % PILL_COLORS.length];
        return `<li class="skill" style="--bg:${c.bg};--fg:${c.fg}">${esc(skill)}</li>`;
      })
      .join("");
    track.innerHTML = `<ul class="marquee-group">${pills}</ul><ul class="marquee-group" aria-hidden="true">${pills}</ul>`;
  });
}

// Illustrated icons for the "Science in motion" tiles
const TILE_ICONS = {
  // newspaper + blue chart card
  paper: `<svg viewBox="0 0 104 66" width="104" height="66">
    <defs>
      <linearGradient id="ti-paper-sheet" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e4e9f2"/></linearGradient>
      <linearGradient id="ti-paper-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f8ef7"/><stop offset="1" stop-color="#2a5fd6"/></linearGradient>
    </defs>
    <rect x="4" y="3" width="50" height="58" rx="4" fill="url(#ti-paper-sheet)" stroke="#1c2540" stroke-width="2.6"/>
    <path d="M11 12h32" stroke="#1c2540" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="11" y="19" width="14" height="11" rx="1.5" fill="#c9d3e6" stroke="#1c2540" stroke-width="1.6"/>
    <path d="M30 21h12M30 27h12M11 36h31M11 42h31M11 48h24M11 54h28" stroke="#58627c" stroke-width="2.4" stroke-linecap="round"/>
    <rect x="44" y="20" width="56" height="42" rx="6" fill="url(#ti-paper-card)" stroke="#1c2540" stroke-width="2.6"/>
    <rect x="50" y="26" width="44" height="30" rx="3" fill="#eaf1ff" opacity=".22"/>
    <rect x="56" y="40" width="7" height="12" rx="1.5" fill="#f6a5dc" stroke="#1c2540" stroke-width="1.4"/>
    <rect x="67" y="33" width="7" height="19" rx="1.5" fill="#c49af7" stroke="#1c2540" stroke-width="1.4"/>
    <rect x="78" y="28" width="7" height="24" rx="1.5" fill="#f6a5dc" stroke="#1c2540" stroke-width="1.4"/>
    <path d="M53 53h37" stroke="#1c2540" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M49 25h16" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/>
  </svg>`,
  // presenter at a chart board with an audience
  presenter: `<svg viewBox="0 0 104 70" width="104" height="70">
    <defs><linearGradient id="ti-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ad9ff"/><stop offset="1" stop-color="#4fa7e8"/></linearGradient></defs>
    <rect x="38" y="3" width="62" height="40" rx="3" fill="#fff" stroke="#24224a" stroke-width="2.6"/>
    <path d="M51 34v-7M61 34v-13M71 34v-9M81 34v-19" stroke="#24224a" stroke-width="5" stroke-linecap="round"/>
    <path d="M46 37h46" stroke="#24224a" stroke-width="2" stroke-linecap="round"/>
    <circle cx="21" cy="10" r="6.5" fill="#fde3c8" stroke="#24224a" stroke-width="2"/>
    <path d="M12 36V24a8 8 0 0 1 16 0v12z" fill="url(#ti-shirt)" stroke="#24224a" stroke-width="2"/>
    <path d="M27 24l12-8" stroke="#24224a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M8 36h26l-3 16H11z" fill="#eef1fb" stroke="#24224a" stroke-width="2"/>
    <circle cx="50" cy="52" r="5" fill="#fff" stroke="#24224a" stroke-width="2"/><path d="M41 68a9 8 0 0 1 18 0z" fill="#fff" stroke="#24224a" stroke-width="2"/>
    <circle cx="68" cy="52" r="5" fill="#fff" stroke="#24224a" stroke-width="2"/><path d="M59 68a9 8 0 0 1 18 0z" fill="#fff" stroke="#24224a" stroke-width="2"/>
    <circle cx="86" cy="52" r="5" fill="#fff" stroke="#24224a" stroke-width="2"/><path d="M77 68a9 8 0 0 1 18 0z" fill="#fff" stroke="#24224a" stroke-width="2"/>
  </svg>`,
  // document with pink bar chart
  doc: `<svg viewBox="0 0 70 72" width="70" height="72">
    <defs>
      <linearGradient id="ti-doc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e1e1e7"/></linearGradient>
      <linearGradient id="ti-doc-bar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6b0f2"/><stop offset="1" stop-color="#c77be0"/></linearGradient>
    </defs>
    <path d="M8 4h28l14 14v44a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="url(#ti-doc)"/>
    <path d="M36 4v10a4 4 0 0 0 4 4h10z" fill="#c9c9d1"/>
    <path d="M12 24h26M12 32h26M12 40h20M12 48h14" stroke="#4a4a52" stroke-width="3.2" stroke-linecap="round"/>
    <rect x="34" y="52" width="9" height="16" rx="2" fill="url(#ti-doc-bar)"/>
    <rect x="46" y="42" width="9" height="26" rx="2" fill="url(#ti-doc-bar)"/>
    <rect x="58" y="32" width="9" height="36" rx="2" fill="url(#ti-doc-bar)"/>
  </svg>`,
  // Google Scholar mark
  scholar: `<svg viewBox="0 0 512 512" width="512" height="512">
    <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z"/>
    <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z"/>
    <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333"/>
    <path fill="#76a7fa" d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"/>
  </svg>`,
  // gallery of picture frames + painter's palette
  imagery: `<svg viewBox="0 0 132 86" width="132" height="86">
    <defs>
      <linearGradient id="ti-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5cb8f0"/><stop offset="1" stop-color="#c8ecff"/></linearGradient>
      <linearGradient id="ti-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#86dd5e"/><stop offset="1" stop-color="#3fae3a"/></linearGradient>
      <linearGradient id="ti-frame" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#40506e"/><stop offset="1" stop-color="#222a3c"/></linearGradient>
    </defs>
    <rect x="14" y="6" width="32" height="40" rx="3" fill="url(#ti-frame)"/>
    <rect x="18" y="10" width="24" height="32" fill="#9fd4f5"/>
    <circle cx="30" cy="22" r="5" fill="#2e3b55"/><path d="M21 42a9 9 0 0 1 18 0z" fill="#2e3b55"/>
    <rect x="42" y="1" width="44" height="32" rx="3" fill="url(#ti-frame)"/>
    <rect x="46" y="5" width="36" height="24" fill="#7cd3e8"/>
    <path d="M46 29l10-10 8 6 6-5 12 9z" fill="#3a8f9c"/>
    <rect x="92" y="8" width="32" height="40" rx="3" fill="#ec8fb4"/>
    <rect x="96" y="12" width="24" height="32" fill="#fde7c9"/>
    <circle cx="108" cy="24" r="5" fill="#2f5d50"/><path d="M99 44a9 9 0 0 1 18 0z" fill="#2f8f6f"/>
    <rect x="100" y="50" width="26" height="30" rx="3" fill="url(#ti-frame)"/>
    <rect x="104" y="54" width="18" height="22" fill="#9fd4f5"/>
    <path d="M104 76l6-8 5 4 7-6v10z" fill="#4c9c5a"/>
    <rect x="38" y="24" width="64" height="56" rx="4" fill="url(#ti-frame)"/>
    <rect x="43" y="29" width="54" height="46" fill="#fff"/>
    <rect x="46" y="32" width="48" height="40" fill="url(#ti-sky)"/>
    <circle cx="57" cy="43" r="5" fill="#ffd34d"/>
    <path d="M46 72V60c8-8 16-10 24-4 6-6 14-8 24-2v18z" fill="url(#ti-hill)"/>
    <path d="M60 72c6-10 20-14 34-8v8z" fill="#2f9a3a"/>
    <path d="M4 66c0-12 12-20 26-18 10 1.5 14 8 10 12-3 3-8 1-9 5s5 6 3 10c-3 6-14 7-21 4C7 76 4 72 4 66z" fill="#f5d7a1" stroke="#a87a3c" stroke-width="2"/>
    <circle cx="14" cy="62" r="3.2" fill="#e63b2e"/><circle cx="22" cy="56" r="3.2" fill="#f5c518"/><circle cx="31" cy="56" r="3.2" fill="#1e63d6"/><circle cx="14" cy="71" r="3.2" fill="#1fa34a"/>
  </svg>`,
  // bar chart
  chart: `<svg viewBox="0 0 56 64" width="56" height="64"><g fill="#1d2433"><rect x="4" y="40" width="7" height="22" rx="1.5"/><rect x="17" y="22" width="7" height="40" rx="1.5"/><rect x="30" y="32" width="7" height="30" rx="1.5"/><rect x="43" y="6" width="7" height="56" rx="1.5"/></g></svg>`,
};

function renderShowcase() {
  const P = PROFILE;
  const S = P.showcase;

  // About Me card
  const [first, ...rest] = P.name.split(/\s+/);
  $("#am-first").textContent = first;
  $("#am-last").textContent = rest.join(" ");
  const photo = $("#am-photo");
  photo.src = S.cutout;
  photo.alt = `Portrait of ${P.name}`;
  const contact = $("#am-contact");
  if (P.email) {
    contact.href = `mailto:${P.email}`;
    contact.removeAttribute("target");
    $("#am-contact-text").textContent = P.email;
  } else {
    contact.href = P.links.linkedin;
    $("#am-contact-text").textContent = P.links.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  }
  $("#badge-text").textContent = `${S.badge} · ${new Date().getFullYear()} ·`;

  // Science in motion
  $("#science-title").textContent = S.heading;
  $("#sim-topics").innerHTML = S.topics.map((t) => `<span>${esc(t)}</span>`).join("");
  $("#sim-media-title").textContent = S.mediaTitle;
  $("#sim-media-text").textContent = S.mediaText;

  const firstPub = P.publications && P.publications[0];
  const pubLink = (firstPub && firstPub.link) || P.links.linkedin;
  const scholarLink =
    P.links.scholar ||
    (firstPub ? `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${firstPub.title}"`)}` : "https://scholar.google.com/");
  const grid = $("#sim-grid");
  $$(".tile", grid).forEach((t) => t.remove());
  grid.insertAdjacentHTML(
    "beforeend",
    S.tiles
      .map((t, i) => {
        const href = { publication: pubLink, scholar: scholarLink }[t.href] || t.href;
        const tag = href ? "a" : "div";
        const attrs =
          (href ? ` href="${esc(href)}"${isExternal(href) ? ' target="_blank" rel="noopener"' : ""}` : "") +
          (t.ariaLabel ? ` aria-label="${esc(t.ariaLabel)}" title="${esc(t.ariaLabel)}"` : "");
        let num = "";
        if (typeof t.value === "number") num = `<span class="tile-num"><span data-count="${t.value}">0</span>${esc(t.suffix || "")}</span>`;
        else if (t.value !== undefined) num = `<span class="tile-num">${esc(t.value)}${esc(t.suffix || "")}</span>`;
        const label = t.label ? `<span class="tile-label">${esc(t.label)}</span>` : "";
        const text = t.layout === "row" ? `<span class="tile-text">${num}${label}</span>` : num + label;
        const cls = `tile tile--${t.layout || "stat"} tile-${t.color}${t.caps ? " tile--caps" : ""} reveal`;
        return `<${tag} class="${cls}" style="--d:${(i * 0.07).toFixed(2)}s"${attrs}><span class="tile-icon tile-icon--${esc(t.icon)}" aria-hidden="true">${
          TILE_ICONS[t.icon] || ""
        }</span>${text}<span class="corner" aria-hidden="true"></span></${tag}>`;
      })
      .join("")
  );
}

function renderProcess() {
  const keys = ["R", "Y", "B", "G"];
  const solvedCount = [2, 4, 7, 9]; // the face gets closer to solved with every step
  const solveOrder = [4, 0, 8, 2, 6, 1, 7, 3, 5];
  const tilts = [-1.2, 0.9, -0.7, 1.1];

  $("#process-grid").innerHTML = PROFILE.process
    .map((s, i) => {
      const key = keys[i % keys.length];
      const solved = solvedCount[Math.min(i, solvedCount.length - 1)];
      const rng = seeded(311 + i * 13);
      const others = COLOR_KEYS.filter((k) => k !== key);
      const cells = Array.from({ length: 9 }, (_, k) =>
        solveOrder.indexOf(k) < solved ? key : others[Math.floor(rng() * others.length)]
      );
      return `
        <li class="step reveal" style="--d:${i * 0.12}s;--r:${tilts[i % tilts.length]}deg;--c:${COLORS[key]};--t:${TILE_INK[key]}">
          <div class="step-top">
            <span class="step-num">${pad(i + 1)}</span>
            <span class="step-face" aria-hidden="true">${cells.map((c) => `<i style="--c:${COLORS[c]}"></i>`).join("")}</span>
          </div>
          <h3>${fmt(s.title)}</h3>
          <p>${esc(s.text)}</p>
        </li>`;
    })
    .join("");
}

function renderAbout() {
  const P = PROFILE;
  $("#about-bio").innerHTML = fmt(P.about.bio);
  $("#about-more").textContent = P.about.more;

  const frame = $("#photo-frame");
  if (P.photo) {
    frame.innerHTML = `<img src="${esc(P.photo)}" alt="Portrait of ${esc(P.name)}" loading="lazy">`;
  } else {
    const initials = P.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    const mini = (seed) => {
      const rng = seeded(seed);
      return Array.from({ length: 9 }, () => `<i style="--c:${COLORS[COLOR_KEYS[Math.floor(rng() * 6)]]}"></i>`).join("");
    };
    frame.innerHTML = `
      <div class="photo-placeholder" role="img" aria-label="${esc(P.name)}'s initials">
        <span class="initials" aria-hidden="true">${esc(initials)}</span>
        <span class="mini a" aria-hidden="true">${mini(5)}</span>
        <span class="mini b" aria-hidden="true">${mini(9)}</span>
      </div>`;
  }

  const dotColors = ["R", "B", "Y", "G", "O"];
  $("#timeline").innerHTML = P.experience
    .map(
      (e, i) => `
      <li class="tl-item reveal" style="--d:${i * 0.1}s;--c:${COLORS[dotColors[i % dotColors.length]]}">
        <h4 class="tl-role">${fmt(e.role)}</h4>
        <p class="tl-meta"><strong>${esc(e.company)}</strong><span>${esc(e.dates)}</span>${
          e.place ? `<span aria-hidden="true">·</span><span>${esc(e.place)}</span>` : ""
        }</p>
        <p class="tl-impact">${esc(e.impact)}</p>
      </li>`
    )
    .join("");

  const education = P.education || [];
  const publications = P.publications || [];
  const certifications = P.certifications || [];
  const stickers = [
    ...education.map((e) => ({ tag: "Education", key: "Y", title: e.degree, sub: `${e.school} · ${e.years}` })),
    ...publications.map((p) => ({ tag: "Publication", key: "R", title: p.title, sub: p.date, link: p.link, wide: true })),
    ...certifications.map((c) => ({ tag: "Certification", key: "B", title: c.name, sub: `${c.issuer} · ${c.year}` })),
  ];
  const tilts = [-1.5, 1.2, 1, -1.3];
  $("#sticker-grid").innerHTML = stickers
    .map((s, i) => {
      const title = s.link
        ? `<a href="${esc(s.link)}" target="_blank" rel="noopener">${fmt(s.title)} <span aria-hidden="true">↗</span></a>`
        : fmt(s.title);
      return `
      <li class="card sticker-card reveal${s.wide ? " wide" : ""}" style="--d:${i * 0.08}s;--r:${tilts[i % tilts.length]}deg">
        <span class="sticker-tag" style="--c:${COLORS[s.key]};--t:${TILE_INK[s.key]}">${s.tag}</span>
        <h4>${title}</h4>
        <p>${esc(s.sub)}</p>
      </li>`;
    })
    .join("");

  // "Education, publications & certifications": only the groups that have entries
  const groups = [
    education.length && "education",
    publications.length && "publications",
    certifications.length && "certifications",
  ].filter(Boolean);
  const label = groups.length > 1 ? `${groups.slice(0, -1).join(", ")} & ${groups[groups.length - 1]}` : groups[0] || "";
  const credsTitle = $("#creds-title");
  credsTitle.textContent = label.charAt(0).toUpperCase() + label.slice(1);
  credsTitle.hidden = !label;
}

function renderContact() {
  const P = PROFILE;
  const title = $("#contact-title");
  let n = 0;
  // split into words → letters so each letter can blur in on its own
  const animated = P.contact.heading
    .split("*")
    .map((segment, s) => {
      const html = segment
        .split(/(\s+)/)
        .map((word) => {
          if (!word) return "";
          if (/^\s+$/.test(word)) return " ";
          const letters = Array.from(word).map((ch) => `<span class="ch" style="--i:${n++}">${esc(ch)}</span>`).join("");
          return `<span class="word">${letters}</span>`;
        })
        .join("");
      return s % 2 ? `<em>${html}</em>` : html;
    })
    .join("");
  title.innerHTML = `<span class="sr-only">${esc(plain(P.contact.heading))}</span><span aria-hidden="true">${animated}</span>`;

  $("#contact-text").textContent = P.contact.text;
  const hello = $("#say-hello");
  if (P.email) {
    hello.href = `mailto:${P.email}`;
  } else {
    hello.href = P.links.linkedin;
    hello.target = "_blank";
    hello.rel = "noopener";
  }
}

/* ==========================================================================
   Page interactions
   ========================================================================== */
function countUp(el) {
  const end = Number(el.dataset.count) || 0;
  if (reduceMotion) {
    el.textContent = end;
    return;
  }
  const start = performance.now();
  const dur = 1400;
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initInteractions() {
  // reveal sections as they scroll into view
  const revealIO = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        revealIO.unobserve(e.target);
      }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  $$(".reveal, .contact-title").forEach((el) => revealIO.observe(el));

  // count numbers up once visible
  const countIO = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        countUp(e.target);
        countIO.unobserve(e.target);
      }),
    { threshold: 0.6 }
  );
  $$("[data-count]").forEach((el) => countIO.observe(el));

  // nav: background once scrolled + highlight the section in view
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = $$(".nav-pill a");
  const sectionIO = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  ["top", "work", "process", "about", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionIO.observe(el);
  });

  // floating cards drift slightly against the mouse
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!reduceMotion && fine) {
    const cards = $$(".float-card");
    let raf = 0;
    let mx = 0;
    let my = 0;
    window.addEventListener(
      "pointermove",
      (e) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          cards.forEach((card) => {
            const depth = Number(card.dataset.depth) || 1;
            card.style.setProperty("--px", `${(-mx * 30 * depth).toFixed(1)}px`);
            card.style.setProperty("--py", `${(-my * 22 * depth).toFixed(1)}px`);
          });
        });
      },
      { passive: true }
    );
  }
}

/* ==========================================================================
   The puzzle: drives the cube and the "THE PUZZLE" status card
   ========================================================================== */
const Puzzle = (() => {
  const cfg = PROFILE.cube;
  const ui = {};
  let engine = null;
  let busy = false;
  let loopTimer = 0;
  let heroVisible = true;

  function setWord(text, state) {
    ui.card.dataset.state = state;
    if (ui.word.textContent === text) return;
    ui.word.textContent = text;
    ui.word.classList.remove("swap");
    void ui.word.offsetWidth; // restart the animation
    ui.word.classList.add("swap");
  }
  const setCaption = (text) => (ui.caption.textContent = text);
  const setProgress = (p) => (ui.fill.style.clipPath = `inset(0 ${((1 - clamp(p, 0, 1)) * 100).toFixed(1)}% 0 0)`);
  const setBusy = (b) => {
    busy = b;
    ui.btn.setAttribute("aria-disabled", String(b));
  };
  const announce = (text) => (ui.live.textContent = text);

  function inkBurst() {
    if (reduceMotion) return;
    const ink = $(".ink-burst");
    $$("span", ink).forEach((blob, i, all) => {
      const angle = (i / all.length) * Math.PI * 2 + Math.random() * 0.9;
      const dist = 14 + Math.random() * 20;
      blob.style.setProperty("--x", `${50 + Math.cos(angle) * dist}%`);
      blob.style.setProperty("--y", `${52 + Math.sin(angle) * dist * 0.8}%`);
      blob.style.setProperty("--s", `${26 + Math.random() * 30}%`);
      blob.style.setProperty("--d", `${(Math.random() * 0.18).toFixed(2)}s`);
    });
    ink.classList.remove("go");
    void ink.offsetWidth;
    ink.classList.add("go");
    const stage = $("#cube-stage");
    stage.classList.remove("blur-burst");
    void stage.offsetWidth;
    stage.classList.add("blur-burst");
  }

  async function solve() {
    setWord("Thinking…", "thinking");
    setCaption("planning the solve");
    await sleep(reduceMotion ? 250 : 1100);
    const total = engine.pending();
    setWord("Solving", "solving");
    for (let i = 1; engine.pending() > 0; i++) {
      setCaption(`move ${pad(i)} of ${pad(total)}`);
      await engine.solveStep(cfg.turnMs);
      setProgress(i / total);
    }
    setWord("Solved", "solved");
    setCaption(cfg.solvedCaption);
    setProgress(1);
  }

  async function scramble(byUser) {
    if (busy || !engine) return;
    clearTimeout(loopTimer);
    setBusy(true);
    if (byUser) announce("Scrambling the cube…");
    inkBurst();
    setWord("Scrambling", "scrambling");
    const n = cfg.scrambleMoves;
    for (let i = 1; i <= n; i++) {
      setCaption(`move ${pad(i)} of ${pad(n)}`);
      await engine.scrambleStep(Math.round(cfg.turnMs * 0.55));
      setProgress(1 - i / n);
    }
    await solve();
    if (byUser) announce(`Solved. It spells ${cfg.solvedCaption}.`);
    setBusy(false);
    scheduleLoop();
  }

  function scheduleLoop() {
    clearTimeout(loopTimer);
    if (reduceMotion) return; // no auto-solve loop for reduced motion
    loopTimer = setTimeout(() => {
      if (heroVisible && !document.hidden && !engine.isInteracting()) scramble(false);
      else scheduleLoop();
    }, cfg.autoLoopMs);
  }

  async function start(eng) {
    engine = eng;
    if (reduceMotion) {
      setWord("Solved", "solved");
      setCaption(cfg.solvedCaption);
      setProgress(1);
      setBusy(false);
      return;
    }
    setBusy(true);
    engine.scrambleInstant(cfg.scrambleMoves);
    setProgress(0);
    await sleep(700);
    await solve();
    setBusy(false);
    scheduleLoop();
  }

  function init() {
    ui.card = $(".card-puzzle");
    ui.word = $("#puzzle-word");
    ui.caption = $("#puzzle-caption");
    ui.fill = $("#puzzle-fill");
    ui.btn = $("#scramble-btn");
    ui.live = $("#cube-live");
    ui.btn.addEventListener("click", () => {
      if (ui.btn.getAttribute("aria-disabled") !== "true") scramble(true);
    });
  }

  return {
    init,
    start,
    setHeroVisible(v) {
      heroVisible = v;
      if (engine) engine.setVisible(v);
    },
  };
})();

/* ==========================================================================
   Shared drag handling for both cube engines
   ========================================================================== */
function attachDrag(el, handlers) {
  let p = null;
  el.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    p = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now() };
    try {
      el.setPointerCapture(e.pointerId);
    } catch (_) {}
    el.classList.add("grabbing");
    handlers.start();
  });
  el.addEventListener("pointermove", (e) => {
    if (!p || e.pointerId !== p.id) return;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    p.x = e.clientX;
    p.y = e.clientY;
    p.t = performance.now();
    handlers.move(dx, dy);
  });
  const end = () => {
    if (!p) return;
    const idle = performance.now() - p.t;
    p = null;
    el.classList.remove("grabbing");
    handlers.end(idle);
  };
  ["pointerup", "pointercancel", "lostpointercapture"].forEach((type) => el.addEventListener(type, end));
}

function randomMove(prev) {
  const axes = ["x", "y", "z"];
  let move;
  do {
    move = {
      axis: axes[Math.floor(Math.random() * 3)],
      layer: Math.floor(Math.random() * 3) - 1,
      dir: Math.random() < 0.5 ? 1 : -1,
    };
  } while (prev && prev.axis === move.axis && prev.layer === move.layer);
  return move;
}

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* ==========================================================================
   WebGL cube (Three.js)
   ========================================================================== */
function drawSticker(key, letter, size) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  const r = size * 0.17;
  const m = 2;
  g.beginPath();
  g.moveTo(m + r, m);
  g.arcTo(size - m, m, size - m, size - m, r);
  g.arcTo(size - m, size - m, m, size - m, r);
  g.arcTo(m, size - m, m, m, r);
  g.arcTo(m, m, size - m, m, r);
  g.closePath();
  g.fillStyle = COLORS[key];
  g.fill();
  const sheen = g.createLinearGradient(0, 0, size * 0.4, size);
  sheen.addColorStop(0, "rgba(255,255,255,0.22)");
  sheen.addColorStop(0.5, "rgba(255,255,255,0)");
  sheen.addColorStop(1, "rgba(0,0,0,0.07)");
  g.fillStyle = sheen;
  g.fill();

  if (letter.trim()) {
    g.fillStyle = INK_ON[key];
    g.font = `${Math.round(size * 0.68)}px "Instrument Serif", "DM Serif Display", Georgia, serif`;
    g.textAlign = "center";
    g.textBaseline = "alphabetic";
    const metrics = g.measureText(letter);
    const ascent = metrics.actualBoundingBoxAscent || size * 0.48;
    const descent = metrics.actualBoundingBoxDescent || 0;
    g.fillText(letter, size / 2, size / 2 + (ascent - descent) / 2);
  }
  return c;
}

function roundedBoxGeometry(THREE, size, radius, segments) {
  const geo = new THREE.BoxGeometry(size, size, size, segments, segments, segments);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  const core = new THREE.Vector3();
  const inner = size / 2 - radius;
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    core.set(clamp(v.x, -inner, inner), clamp(v.y, -inner, inner), clamp(v.z, -inner, inner));
    v.sub(core).normalize().multiplyScalar(radius).add(core);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// where each face's stickers sit, and how a cubie (x,y,z) maps to a sticker index 0–8
const GL_FACES = {
  front: { axis: "z", sign: 1, rot: [0, 0, 0], idx: (x, y) => (1 - y) * 3 + (x + 1) },
  back: { axis: "z", sign: -1, rot: [0, Math.PI, 0], idx: (x, y) => (1 - y) * 3 + (1 - x) },
  right: { axis: "x", sign: 1, rot: [0, Math.PI / 2, 0], idx: (x, y, z) => (1 - y) * 3 + (1 - z) },
  left: { axis: "x", sign: -1, rot: [0, -Math.PI / 2, 0], idx: (x, y, z) => (1 - y) * 3 + (z + 1) },
  top: { axis: "y", sign: 1, rot: [-Math.PI / 2, 0, 0], idx: (x, y, z) => (z + 1) * 3 + (x + 1) },
  bottom: { axis: "y", sign: -1, rot: [Math.PI / 2, 0, 0], idx: (x, y, z) => (1 - z) * 3 + (x + 1) },
};

function createGLCube(mount, words) {
  const THREE = window.THREE;
  if (!THREE) throw new Error("Three.js did not load");

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute("aria-hidden", "true");
  mount.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);
  camera.position.set(0, 0, 12.4);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x8f8a80, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 0.62);
  key.position.set(-3, 7, 8);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.2);
  fill.position.set(6, -2, 3);
  scene.add(fill);

  const root = new THREE.Group(); // whole-cube orientation (drag + idle sway)
  const cube = new THREE.Group(); // the space layer turns happen in
  root.add(cube);
  scene.add(root);

  const SIZE = 0.965;
  const bodyGeo = roundedBoxGeometry(THREE, SIZE, 0.085, 6);
  const bodyMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x241c1c).convertSRGBToLinear(), roughness: 0.55 });
  const stickerGeo = new THREE.PlaneGeometry(0.82, 0.82);
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const materials = new Map();
  const stickerMaterial = (colorKey, letter) => {
    const id = colorKey + letter;
    if (!materials.has(id)) {
      const tex = new THREE.CanvasTexture(drawSticker(colorKey, letter, 256));
      tex.encoding = THREE.sRGBEncoding;
      tex.anisotropy = maxAniso;
      materials.set(id, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.34, metalness: 0, alphaTest: 0.5 }));
    }
    return materials.get(id);
  };

  const letters = faceLetters(words);
  const cubies = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (!x && !y && !z) continue;
        const cubie = new THREE.Group();
        cubie.position.set(x, y, z);
        cubie.add(new THREE.Mesh(bodyGeo, bodyMat));
        const coords = { x, y, z };
        for (const [name, f] of Object.entries(GL_FACES)) {
          if (coords[f.axis] !== f.sign) continue;
          const i = f.idx(x, y, z);
          const sticker = new THREE.Mesh(stickerGeo, stickerMaterial(FACE_COLORS[name][i], letters[name][i]));
          sticker.rotation.set(f.rot[0], f.rot[1], f.rot[2]);
          sticker.position[f.axis] = f.sign * (SIZE / 2 + 0.004);
          cubie.add(sticker);
        }
        cube.add(cubie);
        cubies.push(cubie);
      }
    }
  }

  /* ---- layer turns ---- */
  const history = [];
  let turn = null;
  const m4 = new THREE.Matrix4();

  function snap(c) {
    c.position.set(Math.round(c.position.x), Math.round(c.position.y), Math.round(c.position.z));
    m4.makeRotationFromQuaternion(c.quaternion);
    const e = m4.elements;
    for (const i of [0, 1, 2, 4, 5, 6, 8, 9, 10]) e[i] = Math.round(e[i]);
    c.quaternion.setFromRotationMatrix(m4);
  }

  function finishTurn() {
    const t = turn;
    turn = null;
    t.pivot.rotation[t.axis] = t.target;
    t.pivot.updateMatrixWorld(true);
    t.members.forEach((c) => {
      cube.attach(c);
      snap(c);
    });
    cube.remove(t.pivot);
    t.resolve();
  }

  function doTurn(move, ms) {
    return new Promise((resolve) => {
      const pivot = new THREE.Object3D();
      cube.add(pivot);
      const members = cubies.filter((c) => Math.round(c.position[move.axis]) === move.layer);
      members.forEach((c) => pivot.attach(c));
      turn = { pivot, members, axis: move.axis, target: (move.dir * Math.PI) / 2, start: performance.now(), ms, resolve };
      if (ms <= 0) finishTurn();
      else wake();
    });
  }

  /* ---- orientation: drag, inertia, return home, idle sway ---- */
  const home = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.5, -0.64, 0, "XYZ"));
  const user = home.clone();
  const sway = new THREE.Quaternion();
  const swayEuler = new THREE.Euler();
  const q = new THREE.Quaternion();
  const AX = new THREE.Vector3(1, 0, 0);
  const AY = new THREE.Vector3(0, 1, 0);
  let dragging = false;
  let vx = 0;
  let vy = 0;
  let lastTouch = -1e9;
  let visible = true;
  let rafId = 0;
  let last = performance.now();

  function spin(dx, dy) {
    q.setFromAxisAngle(AY, dx);
    user.premultiply(q);
    q.setFromAxisAngle(AX, dy);
    user.premultiply(q);
  }

  attachDrag(mount, {
    start() {
      dragging = true;
      vx = vy = 0;
      lastTouch = performance.now();
      wake();
    },
    move(dx, dy) {
      vx = dx * 0.009;
      vy = dy * 0.009;
      spin(vx, vy);
      lastTouch = performance.now();
    },
    end(idle) {
      dragging = false;
      if (idle > 90) vx = vy = 0;
      lastTouch = performance.now();
    },
  });

  function frame(now) {
    rafId = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!dragging) {
      if (Math.abs(vx) + Math.abs(vy) > 1e-4) {
        spin(vx, vy);
        const k = Math.pow(0.92, dt * 60);
        vx *= k;
        vy *= k;
      }
      if (now - lastTouch > 1500) user.slerp(home, 1 - Math.pow(0.965, dt * 60));
    }
    if (reduceMotion) {
      root.quaternion.copy(user);
    } else {
      swayEuler.set(Math.sin(now / 2300) * 0.04, Math.sin(now / 3100) * 0.08, 0);
      sway.setFromEuler(swayEuler);
      root.quaternion.copy(user).multiply(sway);
    }
    if (turn) {
      const t = Math.min(1, (now - turn.start) / turn.ms);
      turn.pivot.rotation[turn.axis] = turn.target * easeInOut(t);
      if (t >= 1) finishTurn();
    }
    if (visible) renderer.render(scene, camera);
    if (visible || turn || dragging) rafId = requestAnimationFrame(frame);
  }

  function wake() {
    if (rafId) return;
    last = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function resize() {
    const w = mount.clientWidth || 300;
    const h = mount.clientHeight || 300;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    wake();
  }
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(mount);
  else window.addEventListener("resize", resize);
  resize();

  return {
    type: "webgl",
    scrambleStep(ms) {
      const move = randomMove(history[history.length - 1]);
      history.push(move);
      return doTurn(move, ms);
    },
    solveStep(ms) {
      const move = history.pop();
      return move ? doTurn({ ...move, dir: -move.dir }, ms) : Promise.resolve();
    },
    scrambleInstant(n) {
      for (let i = 0; i < n; i++) {
        const move = randomMove(history[history.length - 1]);
        history.push(move);
        doTurn(move, 0);
      }
      wake();
    },
    pending: () => history.length,
    isInteracting: () => dragging || performance.now() - lastTouch < 1500,
    nudge(dx, dy) {
      spin(dx, dy);
      lastTouch = performance.now();
      wake();
    },
    setVisible(v) {
      visible = v;
      if (v) wake();
    },
  };
}

/* ==========================================================================
   CSS 3D fallback cube (no WebGL / Three.js unavailable)
   Scrambling swaps stickers around; solving swaps them back.
   ========================================================================== */
function createCSSCube(mount, words) {
  mount.classList.add("is-css");
  const letters = faceLetters(words);
  const cubeEl = document.createElement("div");
  cubeEl.className = "css-cube";
  const slots = [];
  FACE_ORDER.forEach((face) => {
    const faceEl = document.createElement("div");
    faceEl.className = `css-face css-${face}`;
    for (let i = 0; i < 9; i++) {
      const el = document.createElement("span");
      el.className = "css-sticker";
      faceEl.appendChild(el);
      slots.push({ el, face, content: { c: FACE_COLORS[face][i], l: letters[face][i] } });
    }
    cubeEl.appendChild(faceEl);
  });
  mount.appendChild(cubeEl);

  const paint = (slot) => {
    slot.el.style.background = COLORS[slot.content.c];
    slot.el.style.color = INK_ON[slot.content.c];
    slot.el.textContent = slot.content.l.trim();
  };
  slots.forEach(paint);

  const visibleSlots = slots.map((s, i) => i).filter((i) => ["front", "top", "right"].includes(slots[i].face));
  const history = [];

  function swap(pairs, ms) {
    pairs.forEach(([a, b]) => {
      const t = slots[a].content;
      slots[a].content = slots[b].content;
      slots[b].content = t;
    });
    const touched = Array.from(new Set(pairs.flat()));
    if (ms <= 0) {
      touched.forEach((i) => paint(slots[i]));
      return Promise.resolve();
    }
    touched.forEach((i) => {
      slots[i].el.style.setProperty("--flip", `${ms / 2}ms`);
      slots[i].el.classList.add("flip");
    });
    return sleep(ms / 2).then(() => {
      touched.forEach((i) => {
        paint(slots[i]);
        slots[i].el.classList.remove("flip");
      });
      return sleep(ms / 2);
    });
  }

  function randomPairs() {
    return Array.from({ length: 3 }, () => {
      const a = visibleSlots[Math.floor(Math.random() * visibleSlots.length)];
      let b;
      do b = Math.floor(Math.random() * slots.length);
      while (b === a);
      return [a, b];
    });
  }

  // orientation (degrees)
  const HOME = { x: -26, y: -36 };
  const rot = { ...HOME };
  let dragging = false;
  let lastTouch = -1e9;
  let rafId = 0;

  const apply = () => (cubeEl.style.transform = `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`);
  const sizeToMount = () => cubeEl.style.setProperty("--s", `${Math.round(mount.clientWidth * 0.46)}px`);
  function settle() {
    rafId = 0;
    if (dragging || performance.now() - lastTouch < 1500) {
      rafId = requestAnimationFrame(settle);
      return;
    }
    rot.x += (HOME.x - rot.x) * 0.06;
    rot.y += (HOME.y - rot.y) * 0.06;
    apply();
    if (Math.abs(HOME.x - rot.x) + Math.abs(HOME.y - rot.y) > 0.05) rafId = requestAnimationFrame(settle);
  }
  const wake = () => {
    if (!rafId) rafId = requestAnimationFrame(settle);
  };

  attachDrag(mount, {
    start() {
      dragging = true;
      lastTouch = performance.now();
    },
    move(dx, dy) {
      rot.y += dx * 0.5;
      rot.x -= dy * 0.5;
      lastTouch = performance.now();
      apply();
    },
    end() {
      dragging = false;
      lastTouch = performance.now();
      wake();
    },
  });

  if ("ResizeObserver" in window) new ResizeObserver(sizeToMount).observe(mount);
  sizeToMount();
  apply();

  return {
    type: "css",
    scrambleStep(ms) {
      const pairs = randomPairs();
      history.push(pairs);
      return swap(pairs, ms);
    },
    solveStep(ms) {
      const pairs = history.pop();
      return pairs ? swap(pairs.slice().reverse(), ms) : Promise.resolve();
    },
    scrambleInstant(n) {
      for (let i = 0; i < n; i++) {
        const pairs = randomPairs();
        history.push(pairs);
        swap(pairs, 0);
      }
    },
    pending: () => history.length,
    isInteracting: () => dragging || performance.now() - lastTouch < 1500,
    nudge(dx, dy) {
      rot.y += (dx * 180) / Math.PI;
      rot.x -= (dy * 180) / Math.PI;
      lastTouch = performance.now();
      apply();
      wake();
    },
    setVisible() {},
  };
}

/* ==========================================================================
   "Research in action": a small molecule bound in a protein pocket (Three.js)
   ========================================================================== */
const ATOM_STYLE = {
  C: { color: "#E7B73C", r: 0.27 },
  N: { color: "#2F6FE6", r: 0.28 },
  O: { color: "#E2453A", r: 0.28 },
  H: { color: "#F4F4F4", r: 0.16 },
};

// An illustrative drug-like ligand: two aromatic rings, an amide linker and a five-membered ring
function buildLigand() {
  const atoms = [];
  const bonds = [];
  const L = 0.74; // bond length
  const add = (e, x, y) => atoms.push({ e, x, y, z: 0 }) - 1;
  const link = (a, b) => bonds.push([a, b]);
  const from = (i, e, ang, len = L) => {
    const id = add(e, atoms[i].x + Math.cos(ang) * len, atoms[i].y + Math.sin(ang) * len);
    link(i, id);
    return id;
  };
  // ring of n atoms whose first atom sits one bond away from atom i, along `ang`
  const ringFrom = (i, ang, n, els = []) => {
    const R = L / (2 * Math.sin(Math.PI / n));
    const cx = atoms[i].x + Math.cos(ang) * (L + R);
    const cy = atoms[i].y + Math.sin(ang) * (L + R);
    const ids = [];
    for (let k = 0; k < n; k++) {
      const a = ang + Math.PI + (k * 2 * Math.PI) / n;
      ids.push(add(els[k] || "C", cx + Math.cos(a) * R, cy + Math.sin(a) * R));
    }
    ids.forEach((id, k) => link(id, ids[(k + 1) % n]));
    link(i, ids[0]);
    return { ids, cx, cy };
  };
  const out = (ring, k, e, len = L) => {
    const a = atoms[ring.ids[k]];
    return from(ring.ids[k], e, Math.atan2(a.y - ring.cy, a.x - ring.cx), len);
  };

  const hydroxyl = add("O", 0, 0);
  const A = ringFrom(hydroxyl, 0.15, 6, ["C", "C", "N", "C", "C", "C"]);
  const B = ringFrom(A.ids[3], 0.3, 6);
  const c1 = from(B.ids[3], "C", -0.25);
  const n1 = from(c1, "N", 0.5);
  const c2 = from(n1, "C", -0.15);
  from(c2, "O", -1.45);
  const C = ringFrom(c2, 0.55, 5, ["C", "N", "C", "C", "O"]);
  from(hydroxyl, "H", Math.PI + 0.7, 0.5);
  from(n1, "H", 1.9, 0.5);
  out(A, 1, "H", 0.52);
  out(A, 5, "H", 0.52);
  out(B, 1, "O");
  out(B, 5, "H", 0.52);
  out(C, 2, "H", 0.52);
  out(C, 3, "N");

  // centre it and give it some depth
  const mx = atoms.reduce((s, a) => s + a.x, 0) / atoms.length;
  const my = atoms.reduce((s, a) => s + a.y, 0) / atoms.length;
  atoms.forEach((a) => {
    a.x -= mx;
    a.y -= my;
    a.z = 0.55 * Math.sin(a.x * 0.75) - 0.2 * a.y;
  });
  return { atoms, bonds };
}

function createMoleculeScene(mount, media) {
  const THREE = window.THREE;
  if (!THREE) throw new Error("Three.js did not load");

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute("aria-hidden", "true");
  mount.appendChild(canvas);

  const col = (hex) => new THREE.Color(hex).convertSRGBToLinear();
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(col("#24456e"), 9, 17);
  const camera = new THREE.PerspectiveCamera(36, 1.5, 0.1, 60);

  scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x2b2160, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 0.95);
  key.position.set(3, 5, 7);
  scene.add(key);
  const rim = new THREE.PointLight(0xb69cff, 1.1, 24);
  rim.position.set(-5, 3, -2);
  scene.add(rim);
  const fill = new THREE.PointLight(0x7fd0ff, 0.6, 20);
  fill.position.set(5, -3, 4);
  scene.add(fill);

  const world = new THREE.Group();
  scene.add(world);
  const sphere = new THREE.SphereGeometry(1, 32, 24);
  const rng = seeded(42);

  // protein surface: clusters of soft lavender blobs around the pocket
  const blobMat = new THREE.MeshStandardMaterial({ color: col("#8F7CF2"), roughness: 0.5, metalness: 0.05 });
  const blobMatLight = new THREE.MeshStandardMaterial({ color: col("#A99BF7"), roughness: 0.55, metalness: 0.02 });
  const blobs = [];
  [
    [-3.4, -1.9, -0.6, 1.8], [-1.5, -2.5, 0.1, 1.35], [0.5, -2.7, -0.7, 1.5], [2.6, -2.3, -0.3, 1.3],
    [4.2, -1.3, -1.3, 1.4], [-4.3, 0.9, -1.8, 1.6], [-2.4, 2.2, -2.6, 1.5], [0.3, 2.6, -3.2, 1.6],
    [3, 2.2, -2.8, 1.5], [4.8, 0.6, -2.4, 1.2], [-0.9, 0.2, -2.6, 1.6], [1.8, 0.1, -3, 1.7], [-5, -0.8, 0.3, 1.2],
  ].forEach(([x, y, z, r], i) => {
    const m = new THREE.Mesh(sphere, i % 3 ? blobMat : blobMatLight);
    m.position.set(x, y, z);
    m.scale.setScalar(r);
    world.add(m);
    blobs.push({ m, r, phase: rng() * Math.PI * 2 });
    for (let k = 0; k < 4; k++) {
      const dir = new THREE.Vector3(rng() - 0.5, rng() - 0.2, rng() * 0.8 + 0.1).normalize();
      const bump = new THREE.Mesh(sphere, blobMat);
      bump.position.set(x, y, z).addScaledVector(dir, r * 0.92);
      bump.scale.setScalar(r * (0.28 + rng() * 0.22));
      world.add(bump);
    }
  });

  // backbone ribbons
  const ribbonMat = new THREE.MeshStandardMaterial({ color: col("#58B7E8"), roughness: 0.35, metalness: 0.1 });
  const strandMat = new THREE.MeshStandardMaterial({ color: col("#A6E3F5"), roughness: 0.4 });
  const v3 = (p) => new THREE.Vector3(p[0], p[1], p[2]);
  const helix = (a, b, turns, radius) => {
    const start = v3(a);
    const axis = v3(b).sub(start);
    const len = axis.length();
    axis.normalize();
    const u = new THREE.Vector3(0, 0, 1).cross(axis).normalize();
    const w = axis.clone().cross(u);
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const t = i / 80;
      const ang = t * turns * Math.PI * 2;
      pts.push(start.clone().addScaledVector(axis, t * len).addScaledVector(u, Math.cos(ang) * radius).addScaledVector(w, Math.sin(ang) * radius));
    }
    return new THREE.CatmullRomCurve3(pts);
  };
  const tube = (curve, r, mat) => world.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 220, r, 10, false), mat));
  tube(helix([-5.5, 2.8, -1.2], [-1.2, 3.6, -2], 4, 0.45), 0.11, ribbonMat);
  tube(helix([3.2, -0.4, 0.6], [5.8, 2.6, -1], 3.5, 0.4), 0.11, ribbonMat);
  tube(new THREE.CatmullRomCurve3([[-6, -0.5, -3.5], [-3, 1.2, -1.2], [0, 1.6, -1.5], [2.5, 3.2, -1.8], [6, 3.5, -3]].map(v3)), 0.07, strandMat);
  tube(new THREE.CatmullRomCurve3([[-5, -3.5, 0.5], [-2, -1, 1.4], [1.5, -1.3, 1.6], [4, -3.2, 1]].map(v3)), 0.06, strandMat);

  // the ligand, ball-and-stick with two-tone bonds
  const { atoms, bonds } = buildLigand();
  const ligand = new THREE.Group();
  const xs = atoms.map((a) => a.x);
  ligand.scale.setScalar(5.6 / (Math.max(...xs) - Math.min(...xs)));
  ligand.position.set(0.4, 0.35, 0.9);
  world.add(ligand);
  const atomMat = {};
  Object.entries(ATOM_STYLE).forEach(([e, s]) => (atomMat[e] = new THREE.MeshStandardMaterial({ color: col(s.color), roughness: 0.3, metalness: 0.1 })));
  const atomPos = atoms.map((a) => new THREE.Vector3(a.x, a.y, a.z));
  const atomGeo = new THREE.SphereGeometry(1, 24, 18);
  atoms.forEach((a, i) => {
    const m = new THREE.Mesh(atomGeo, atomMat[a.e]);
    m.position.copy(atomPos[i]);
    m.scale.setScalar(ATOM_STYLE[a.e].r);
    ligand.add(m);
  });
  const bondGeo = new THREE.CylinderGeometry(0.085, 0.085, 1, 12);
  const up = new THREE.Vector3(0, 1, 0);
  const halfBond = (a, b, mat) => {
    const dir = b.clone().sub(a);
    const m = new THREE.Mesh(bondGeo, mat);
    m.position.copy(a).addScaledVector(dir, 0.5);
    m.scale.set(1, dir.length(), 1);
    m.quaternion.setFromUnitVectors(up, dir.normalize());
    ligand.add(m);
  };
  bonds.forEach(([i, j]) => {
    const mid = atomPos[i].clone().add(atomPos[j]).multiplyScalar(0.5);
    halfBond(atomPos[i], mid, atomMat[atoms[i].e]);
    halfBond(mid, atomPos[j], atomMat[atoms[j].e]);
  });

  // dashed hydrogen bonds from N/O atoms to the nearest surface
  ligand.updateMatrix();
  const dashMat = new THREE.LineDashedMaterial({ color: col("#FFD34D"), dashSize: 0.14, gapSize: 0.1 });
  const tipMat = new THREE.MeshBasicMaterial({ color: col("#FFD34D") });
  let hbonds = 0;
  atoms.forEach((a, i) => {
    if (hbonds >= 4 || (a.e !== "O" && a.e !== "N")) return;
    const p = atomPos[i].clone().applyMatrix4(ligand.matrix);
    let best = null;
    let gap = Infinity;
    blobs.forEach((b) => {
      const d = p.distanceTo(b.m.position) - b.r;
      if (d < gap) {
        gap = d;
        best = b;
      }
    });
    if (!best || gap > 2.4 || gap < 0.3) return;
    const q = p.clone().sub(best.m.position).normalize().multiplyScalar(best.r).add(best.m.position);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([p, q]), dashMat);
    line.computeLineDistances();
    world.add(line);
    const tip = new THREE.Mesh(atomGeo, tipMat);
    tip.position.copy(q);
    tip.scale.setScalar(0.07);
    world.add(tip);
    hbonds++;
  });

  /* ---- playback ---- */
  let playing = false;
  let visible = true;
  let raf = 0;
  let last = 0;
  let t = 0;

  function pose() {
    world.rotation.y = -0.18 + Math.sin(t * 0.35) * 0.42;
    world.rotation.x = Math.sin(t * 0.23) * 0.08;
    ligand.rotation.z = Math.sin(t * 0.5) * 0.04;
    blobs.forEach((b) => b.m.scale.setScalar(b.r * (1 + Math.sin(t * 0.8 + b.phase) * 0.015)));
  }
  const render = () => renderer.render(scene, camera);
  function frame(now) {
    raf = 0;
    t += Math.min(0.05, (now - last) / 1000);
    last = now;
    pose();
    render();
    if (playing && visible) raf = requestAnimationFrame(frame);
  }
  function start() {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function resize() {
    const w = mount.clientWidth || 600;
    const h = mount.clientHeight || 400;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const dist = 9.6 * Math.max(1, Math.pow(1.5 / camera.aspect, 0.85));
    camera.position.set(0, 0.25, dist);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    scene.fog.near = dist - 1;
    scene.fog.far = dist + 8;
    render();
  }
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(mount);
  else window.addEventListener("resize", resize);
  pose();
  resize();

  return {
    toggle() {
      playing = !playing;
      media.classList.toggle("is-playing", playing);
      if (playing) start();
      return playing;
    },
    setVisible(v) {
      visible = v;
      if (v && playing) start();
    },
  };
}

// Static drawing of the same ligand, used when WebGL is unavailable
function drawLigandSVG(mount) {
  const { atoms, bonds } = buildLigand();
  const xs = atoms.map((a) => a.x);
  const ys = atoms.map((a) => -a.y);
  const w = Math.max(...xs) - Math.min(...xs) + 2.4;
  const h = w / 1.5;
  const cy = (Math.max(...ys) + Math.min(...ys)) / 2;
  const vb = `${(Math.min(...xs) - 1.2).toFixed(2)} ${(cy - h / 2).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}`;
  const lines = bonds
    .map(([i, j]) => `<line x1="${atoms[i].x.toFixed(2)}" y1="${(-atoms[i].y).toFixed(2)}" x2="${atoms[j].x.toFixed(2)}" y2="${(-atoms[j].y).toFixed(2)}"/>`)
    .join("");
  const dots = atoms
    .map((a) => `<circle cx="${a.x.toFixed(2)}" cy="${(-a.y).toFixed(2)}" r="${ATOM_STYLE[a.e].r}" fill="${ATOM_STYLE[a.e].color}"/>`)
    .join("");
  mount.innerHTML = `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g stroke="#D9C27A" stroke-width="0.16" stroke-linecap="round">${lines}</g>${dots}</svg>`;
}

function initMolecule() {
  const mount = $("#molecule");
  const media = mount.closest(".sim-media");
  const btn = $("#sim-play");
  let scene;
  try {
    scene = createMoleculeScene(mount, media);
  } catch (err) {
    console.warn("WebGL molecule unavailable, showing a static drawing.", err);
    drawLigandSVG(mount);
    btn.hidden = true;
    return;
  }
  btn.addEventListener("click", () => {
    const on = scene.toggle();
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? "Pause the molecule animation" : "Play the molecule animation");
  });
  new IntersectionObserver(([entry]) => scene.setVisible(entry.isIntersecting)).observe(media);
}

/* ==========================================================================
   Line-art decor: retro wireframe shapes scattered behind each section
   ========================================================================== */
const LINE = 'fill="none" stroke="currentColor" stroke-width="1.3" vector-effect="non-scaling-stroke"';
const f1 = (n) => n.toFixed(1);

const DECOR_SHAPES = {
  sparkle: () => `<svg viewBox="0 0 100 100"><path fill="currentColor" d="M50 0C53 36 64 47 100 50 64 53 53 64 50 100 47 64 36 53 0 50 36 47 47 36 50 0Z"/></svg>`,
  flower: () => {
    const petals = Array.from({ length: 6 }, (_, i) => {
      const a = (i * Math.PI) / 3;
      return `<circle cx="${f1(50 + Math.cos(a) * 27)}" cy="${f1(50 + Math.sin(a) * 27)}" r="20"/>`;
    }).join("");
    return `<svg viewBox="0 0 100 100"><g fill="currentColor">${petals}<circle cx="50" cy="50" r="24"/></g></svg>`;
  },
  burst: () => {
    const rays = Array.from({ length: 18 }, (_, i) => {
      const a = (i * Math.PI * 2) / 18;
      return `M${f1(50 + Math.cos(a) * 10)} ${f1(50 + Math.sin(a) * 10)}L${f1(50 + Math.cos(a) * 48)} ${f1(50 + Math.sin(a) * 48)}`;
    }).join("");
    return `<svg viewBox="0 0 100 100"><path d="${rays}" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`;
  },
  // wireframe globe whose meridians breathe to look like it's spinning
  globe: () => {
    const lats = [-36, -24, -12, 0, 12, 24, 36].map((y) => {
      const rx = Math.sqrt(45 * 45 - y * y);
      return `<ellipse cx="50" cy="${50 + y}" rx="${f1(rx)}" ry="${f1(rx * 0.12)}"/>`;
    }).join("");
    const mer = Array.from({ length: 6 }, (_, i) => {
      const anim = reduceMotion ? "" : `<animate attributeName="rx" values="45;0;45" dur="9s" begin="-${f1((i * 9) / 6)}s" repeatCount="indefinite"/>`;
      return `<ellipse cx="50" cy="50" rx="${f1(Math.abs(Math.cos((i * Math.PI) / 6)) * 45)}" ry="45">${anim}</ellipse>`;
    }).join("");
    return `<svg viewBox="0 0 100 100"><g ${LINE}><circle cx="50" cy="50" r="45"/>${lats}${mer}</g></svg>`;
  },
  rings: () => {
    const r = Array.from({ length: 9 }, (_, i) => `<ellipse cx="${f1(38 + i * 2.6)}" cy="50" rx="${f1(10 + i * 3.4)}" ry="${f1(24 + i * 2.8)}"/>`).join("");
    return `<svg viewBox="0 0 100 100"><g ${LINE}>${r}<ellipse cx="66" cy="50" rx="30" ry="48"/></g></svg>`;
  },
  tornado: () => {
    const r = Array.from({ length: 15 }, (_, i) => {
      const rx = 46 - i * 2.9;
      return `<ellipse cx="${f1(50 + Math.sin(i * 0.55) * 7)}" cy="${f1(8 + i * 6)}" rx="${f1(rx)}" ry="${f1(rx * 0.2)}"/>`;
    }).join("");
    return `<svg viewBox="0 0 100 100"><g ${LINE}>${r}</g></svg>`;
  },
  web: () => {
    const circles = Array.from({ length: 7 }, (_, i) => `<circle cx="50" cy="50" r="${f1(8 + i * 6.4)}"/>`).join("");
    const spokes = Array.from({ length: 12 }, (_, i) => {
      const a = (i * Math.PI) / 6;
      const b = a + 0.35;
      return `M50 50Q${f1(50 + Math.cos(a) * 26)} ${f1(50 + Math.sin(a) * 26)} ${f1(50 + Math.cos(b) * 46)} ${f1(50 + Math.sin(b) * 46)}`;
    }).join("");
    return `<svg viewBox="0 0 100 100"><g ${LINE}>${circles}<path d="${spokes}"/></g></svg>`;
  },
  // warped wireframe grid
  grid: () => {
    const warp = (x, y) => [x + Math.sin(y * 0.07) * 5, y + Math.sin(x * 0.06) * 5];
    let d = "";
    for (let k = 0; k <= 10; k++) {
      const v = k * 10;
      d += Array.from({ length: 21 }, (_, i) => {
        const [x, y] = warp(i * 5, v);
        return `${i ? "L" : "M"}${f1(x)} ${f1(y)}`;
      }).join("");
      d += Array.from({ length: 21 }, (_, i) => {
        const [x, y] = warp(v, i * 5);
        return `${i ? "L" : "M"}${f1(x)} ${f1(y)}`;
      }).join("");
    }
    return `<svg viewBox="0 0 100 100"><path d="${d}" ${LINE}/></svg>`;
  },
  // warped checkerboard
  checker: () => {
    const n = 10;
    const warp = (x, y) => {
      const dx = x - 50, dy = y - 50, r = Math.hypot(dx, dy) / 50;
      const s = 1 + 0.28 * Math.sin(r * Math.PI);
      return [50 + dx * s, 50 + dy * s];
    };
    let cells = "";
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if ((i + j) % 2) continue;
      const p = [[i, j], [i + 1, j], [i + 1, j + 1], [i, j + 1]].map(([a, b]) => warp((a * 100) / n, (b * 100) / n));
      cells += `M${p.map(([x, y]) => `${f1(x)} ${f1(y)}`).join("L")}Z`;
    }
    return `<svg viewBox="0 0 100 100"><path d="${cells}" fill="currentColor"/></svg>`;
  },
  // stacked wavy contour blob
  blob: () => {
    const shape = (o) =>
      Array.from({ length: 49 }, (_, i) => {
        const a = (i / 48) * Math.PI * 2;
        const r = 30 + Math.sin(a * 3) * 7 + Math.cos(a * 2) * 5;
        return `${i ? "L" : "M"}${f1(50 + Math.cos(a) * r + o)} ${f1(50 + Math.sin(a) * r * 0.7 - o * 0.6)}`;
      }).join("") + "Z";
    return `<svg viewBox="0 0 100 100"><path d="${Array.from({ length: 8 }, (_, i) => shape(i * 1.6)).join("")}" ${LINE}/></svg>`;
  },
  arch: () => {
    const a = (o) => `M${20 + o} ${90 - o}V${50 - o}A${22} 22 0 0 1 ${64 + o} ${50 - o}V${90 - o}`;
    const back = Array.from({ length: 5 }, (_, i) => a(14 - i * 3)).join("");
    return `<svg viewBox="0 0 100 100"><path d="${back}" ${LINE}/><path d="${a(0)}" fill="none" stroke="currentColor" stroke-width="10"/></svg>`;
  },
  plus: () => {
    const p = (o) => `M${36 + o} ${16 - o}h28v26h26v28h-26v26h-28v-26h-26v-28h26z`;
    const back = Array.from({ length: 5 }, (_, i) => `<path d="${p(14 - i * 3)}" ${LINE}/>`).join("");
    return `<svg viewBox="0 0 100 100">${back}<path d="${p(0)}" fill="currentColor"/></svg>`;
  },
};

const ANIMS = {
  spin: "d-spin 60s linear infinite",
  spinFast: "d-spin 24s linear infinite",
  float: "d-float 9s ease-in-out infinite",
  twinkle: "d-twinkle 4s ease-in-out infinite",
  sway: "d-sway 7s ease-in-out infinite",
  pulse: "d-pulse 6s ease-in-out infinite",
};

// where each shape sits: pos is CSS placement, s = size in px, o = opacity, c = colour,
// depth = scroll parallax strength, sm: "hide" hides it on phones
const DECOR = {
  "#top": [
    { shape: "sparkle", pos: "top:8%;left:9%", s: 46, o: 0.9, c: "var(--coral)", anim: "twinkle" },
    { shape: "sparkle", pos: "top:44%;left:29%", s: 18, o: 0.85, c: "var(--steel)", anim: "twinkle", delay: "-2s", sm: "hide" },
    { shape: "burst", pos: "top:15%;right:27%", s: 64, o: 0.45, anim: "spinFast", sm: "hide" },
    { shape: "flower", pos: "bottom:15%;right:7%", s: 62, o: 0.85, c: "var(--steel)", anim: "spin" },
    { shape: "globe", pos: "bottom:8%;left:5%", s: 130, o: 0.4, anim: "float", depth: 0.4 },
    { shape: "plus", pos: "top:62%;right:30%", s: 40, o: 0.7, c: "var(--coral)", anim: "pulse", sm: "hide" },
  ],
  "#work": [
    { shape: "rings", pos: "top:-30px;left:-70px", s: 230, o: 0.28, anim: "float", depth: 0.5 },
    { shape: "sparkle", pos: "top:5%;left:42%", s: 26, o: 0.85, c: "var(--coral)", anim: "twinkle" },
    { shape: "checker", pos: "bottom:-60px;right:-50px", s: 200, o: 0.08, anim: "spin", depth: 0.3, sm: "hide" },
  ],
  "#process": [
    { shape: "tornado", pos: "top:8%;right:4%", s: 170, o: 0.3, anim: "sway", depth: 0.4 },
    { shape: "grid", pos: "bottom:-40px;left:-60px", s: 300, o: 0.18, anim: "float", depth: 0.3 },
    { shape: "flower", pos: "top:12%;left:40%", s: 34, o: 0.85, c: "var(--coral)", anim: "spin", sm: "hide" },
  ],
  "#about": [
    { shape: "web", pos: "top:24%;right:-110px", s: 340, o: 0.2, anim: "spin", depth: 0.4 },
    { shape: "blob", pos: "bottom:4%;left:-50px", s: 230, o: 0.28, anim: "float", depth: 0.3, sm: "hide" },
    { shape: "sparkle", pos: "top:9%;right:30%", s: 30, o: 0.85, c: "var(--steel)", anim: "twinkle" },
    { shape: "arch", pos: "bottom:12%;right:44%", s: 70, o: 0.75, c: "var(--coral)", anim: "pulse", sm: "hide" },
  ],
  "#contact": [
    { shape: "globe", pos: "top:50%;left:50%;translate:-50% -50%", s: 580, o: 0.1, anim: "", depth: 0.2 },
    { shape: "sparkle", pos: "top:26%;left:14%", s: 40, o: 0.9, c: "var(--coral)", anim: "twinkle" },
    { shape: "sparkle", pos: "top:62%;right:14%", s: 28, o: 0.85, c: "var(--steel)", anim: "twinkle", delay: "-1.6s" },
    { shape: "burst", pos: "bottom:10%;left:18%", s: 52, o: 0.45, anim: "spinFast", sm: "hide" },
    { shape: "flower", pos: "top:14%;right:20%", s: 46, o: 0.85, c: "var(--steel)", anim: "spin" },
  ],
  ".gallery-hero": [
    { shape: "tornado", pos: "top:6%;right:2%", s: 180, o: 0.3, anim: "sway" },
    { shape: "sparkle", pos: "top:38%;right:36%", s: 34, o: 0.9, c: "var(--coral)", anim: "twinkle" },
    { shape: "flower", pos: "bottom:8%;right:22%", s: 42, o: 0.85, c: "var(--steel)", anim: "spin", sm: "hide" },
  ],
  ".gallery-grid": [
    { shape: "blob", pos: "top:20%;left:-120px", s: 260, o: 0.22, anim: "float", depth: 0.3, sm: "hide" },
    { shape: "globe", pos: "bottom:12%;right:-90px", s: 220, o: 0.22, anim: "float", depth: 0.3, sm: "hide" },
    { shape: "checker", pos: "top:52%;left:46%", s: 120, o: 0.06, anim: "spin", sm: "hide" },
  ],
};

function initDecor() {
  const decos = [];
  Object.entries(DECOR).forEach(([sel, items]) => {
    const host = $(sel);
    if (!host) return;
    const layer = document.createElement("div");
    layer.className = "decor";
    layer.setAttribute("aria-hidden", "true");
    layer.innerHTML = items
      .map((d) => {
        const style = [
          d.pos,
          `--s:${d.s}px`,
          `--o:${d.o}`,
          d.c ? `--c:${d.c}` : "",
          d.anim ? `--anim:${ANIMS[d.anim]}` : "",
          d.delay ? `--delay:${d.delay}` : "",
        ].filter(Boolean).join(";");
        return `<div class="deco" style="${style}" data-depth="${d.depth || 0}"${d.sm ? ` data-sm="${d.sm}"` : ""}>${DECOR_SHAPES[d.shape]()}</div>`;
      })
      .join("");
    host.prepend(layer);
    decos.push(...$$(".deco", layer).filter((el) => Number(el.dataset.depth)));
  });

  // gentle scroll parallax for the bigger shapes
  if (reduceMotion || !decos.length) return;
  let raf = 0;
  const update = () => {
    raf = 0;
    const mid = window.innerHeight / 2;
    decos.forEach((el) => {
      const r = el.parentElement.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      const offset = (r.top + r.height / 2 - mid) * Number(el.dataset.depth) * -0.25;
      el.style.setProperty("--py", `${offset.toFixed(1)}px`);
    });
  };
  window.addEventListener("scroll", () => raf || (raf = requestAnimationFrame(update)), { passive: true });
  update();
}

// Hero background: a warped wireframe grid that ripples and bulges around the cursor
function initHeroGrid() {
  const hero = $(".hero");
  if (!hero) return;
  const canvas = document.createElement("canvas");
  canvas.className = "hero-grid";
  canvas.setAttribute("aria-hidden", "true");
  hero.prepend(canvas);
  const g = canvas.getContext("2d");
  let w = 0, h = 0, raf = 0, visible = true, t = 0, last = 0;
  const lens = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
  const STEP = 46;

  function point(x, y) {
    const dx = x - lens.x, dy = y - lens.y;
    const d = Math.hypot(dx, dy) || 1;
    const bulge = Math.exp(-(d * d) / (2 * 150 * 150)) * 38;
    return [
      x + (dx / d) * bulge + Math.sin(y * 0.011 + t * 0.9) * 7,
      y + (dy / d) * bulge + Math.sin(x * 0.009 - t * 0.7) * 8,
    ];
  }
  function draw() {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = "rgba(65, 51, 51, .13)";
    g.lineWidth = 1;
    g.beginPath();
    for (let y = -STEP; y <= h + STEP; y += STEP) {
      for (let x = -STEP; x <= w + STEP; x += STEP / 2) {
        const [px, py] = point(x, y);
        x === -STEP ? g.moveTo(px, py) : g.lineTo(px, py);
      }
    }
    for (let x = -STEP; x <= w + STEP; x += STEP) {
      for (let y = -STEP; y <= h + STEP; y += STEP / 2) {
        const [px, py] = point(x, y);
        y === -STEP ? g.moveTo(px, py) : g.lineTo(px, py);
      }
    }
    g.stroke();
  }
  function frame(now) {
    raf = 0;
    t += Math.min(0.05, (now - last) / 1000);
    last = now;
    lens.x += (lens.tx - lens.x) * 0.08;
    lens.y += (lens.ty - lens.y) * 0.08;
    draw();
    if (visible) raf = requestAnimationFrame(frame);
  }
  const start = () => {
    if (reduceMotion || raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth;
    h = hero.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    lens.tx = e.clientX - r.left;
    lens.ty = e.clientY - r.top;
    if (lens.x < -9000) {
      lens.x = lens.tx;
      lens.y = lens.ty;
    }
  }, { passive: true });
  hero.addEventListener("pointerleave", () => {
    lens.tx = lens.ty = -9999;
  });
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(hero);
  resize();
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) start();
  }).observe(hero);
}

/* ==========================================================================
   Imagery page (gallery.html): masonry grid, category filters, lightbox
   ========================================================================== */
function renderGallery() {
  const G = PROFILE.gallery;
  document.title = `${G.title}: ${PROFILE.name}`;
  $("#gallery-title").textContent = G.title;
  $("#gallery-intro").textContent = G.intro;

  const cats = ["All", ...new Set(G.items.map((it) => it.category).filter(Boolean))];
  $("#gallery-filters").innerHTML = cats
    .map((c, i) => `<button type="button" class="g-filter" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
    .join("");

  $("#gallery-grid").innerHTML = G.items
    .map((it, i) => {
      const size = it.w && it.h ? ` width="${it.w}" height="${it.h}"` : "";
      return `
      <div class="g-item reveal" data-cat="${esc(it.category || "")}" style="--d:${((i % 3) * 0.08).toFixed(2)}s">
        <button type="button" class="g-card" data-index="${i}" aria-label="View ${esc(plain(it.title))}">
          <span class="g-media">
            <img src="${esc(it.src)}" alt="${esc(it.alt || plain(it.title))}"${size} loading="lazy" decoding="async">
            ${it.demo ? '<span class="g-demo">Demo</span>' : ""}
          </span>
          <span class="g-cap">
            <strong>${fmt(it.title)}</strong>
            <span class="g-meta">${it.category ? `<span class="g-tag">${esc(it.category)}</span>` : ""}${it.year ? `<span>${esc(it.year)}</span>` : ""}</span>
          </span>
        </button>
      </div>`;
    })
    .join("");
}

function initGallery() {
  const items = PROFILE.gallery.items;
  const grid = $("#gallery-grid");
  const dlg = $("#lightbox");
  let current = 0;

  $("#gallery-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".g-filter");
    if (!btn) return;
    $$(".g-filter").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    $$(".g-item", grid).forEach((el) => (el.hidden = btn.dataset.cat !== "All" && el.dataset.cat !== btn.dataset.cat));
  });

  const visible = () => $$(".g-item:not([hidden]) .g-card", grid).map((b) => Number(b.dataset.index));
  function show(i) {
    current = i;
    const it = items[i];
    const img = $("#lb-img");
    img.src = it.src;
    img.alt = it.alt || plain(it.title);
    $("#lb-title").innerHTML = fmt(it.title);
    $("#lb-meta").textContent = [it.category, it.year].filter(Boolean).join(" · ");
  }
  function step(delta) {
    const list = visible();
    if (!list.length) return;
    const pos = list.indexOf(current);
    show(list[(pos + delta + list.length) % list.length]);
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".g-card");
    if (!card) return;
    show(Number(card.dataset.index));
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  });
  const close = () => (typeof dlg.close === "function" ? dlg.close() : dlg.removeAttribute("open"));
  $("#lb-close").addEventListener("click", close);
  $("#lb-prev").addEventListener("click", () => step(-1));
  $("#lb-next").addEventListener("click", () => step(1));
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) close(); // click on the dark backdrop
  });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

/* ==========================================================================
   Boot
   ========================================================================== */
async function fontsReady() {
  if (!document.fonts || !document.fonts.load) return;
  try {
    await Promise.race([
      Promise.all([document.fonts.load('100px "Instrument Serif"', "PORTFOLIO"), document.fonts.ready]),
      sleep(2500),
    ]);
  } catch (_) {
    /* draw with the fallback serif */
  }
}

async function initCube() {
  const mount = $("#cube");
  await fontsReady();

  let engine;
  try {
    engine = createGLCube(mount, PROFILE.cube.faces);
  } catch (err) {
    console.warn("WebGL cube unavailable, using the CSS 3D fallback.", err);
    mount.innerHTML = "";
    engine = createCSSCube(mount, PROFILE.cube.faces);
  }

  mount.addEventListener("keydown", (e) => {
    const s = 0.26;
    const moves = { ArrowLeft: [-s, 0], ArrowRight: [s, 0], ArrowUp: [0, -s], ArrowDown: [0, s] };
    if (!moves[e.key]) return;
    e.preventDefault();
    engine.nudge(moves[e.key][0], moves[e.key][1]);
  });

  new IntersectionObserver(([entry]) => Puzzle.setHeroVisible(entry.isIntersecting)).observe($("#cube-stage"));

  Puzzle.start(engine);
}

renderShared();
if (document.body.dataset.page === "gallery") {
  renderGallery();
  initGallery();
  initInteractions();
} else {
  renderContent();
  initInteractions();
  Puzzle.init();
  initCube();
  initMolecule();
}
initDecor(); // after rendering, so the shapes aren't wiped by innerHTML
initHeroGrid();
