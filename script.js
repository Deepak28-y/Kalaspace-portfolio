/* =========================================================
   CSE326 Project: कलाspace — Online Portfolio for Artists
   Units 4, 5 & 6: Vanilla JavaScript Fundamentals,
   DOM Manipulation, Events, Regex Validation, Date,
   localStorage, and try/catch Error Handling
   ========================================================= */

// === UNIT 4: Constants, Arrays & Objects ===
const STORAGE_KEYS = {
  ARTWORKS: "kalaspace_artworks_v4",
  USERS: "kalaspace_users_v1",
  SESSION: "kalaspace_session_v1",
  FAVORITES: "kalaspace_favorites_v1",
  THEME: "kalaspace_theme_v1"
};

const CATEGORIES = [
  "All",
  "Digital Art",
  "Illustration",
  "Photography",
  "UI/UX Design",
  "Graphic Design",
  "3D & Sculpture"
];

// Built-in SVG Artwork Presets (Unit 1 Topic 5: SVG Graphics)
const SVG_PRESETS = {
  sunset: {
    label: "Sunset Mountains (SVG)",
    svg: `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sunset over layered mountains">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="55%" stop-color="#c2410c"/>
          <stop offset="100%" stop-color="#fdba74"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#sky1)"/>
      <circle cx="300" cy="185" r="64" fill="#fef3c7" opacity="0.95"/>
      <polygon points="0,330 140,190 290,330" fill="#7c2d12"/>
      <polygon points="210,340 400,155 600,340" fill="#431407"/>
      <polygon points="0,400 190,260 390,350 600,250 600,400" fill="#1c1917"/>
    </svg>`
  },
  bauhaus: {
    label: "Bauhaus Geometry (SVG)",
    svg: `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Geometric Bauhaus abstract poster">
      <rect width="600" height="400" fill="#f5efe6"/>
      <rect x="40" y="40" width="220" height="320" fill="#1c1917"/>
      <circle cx="350" cy="150" r="105" fill="#c2410c"/>
      <polygon points="260,360 440,190 560,360" fill="#eab308"/>
      <circle cx="150" cy="150" r="52" fill="#f5efe6"/>
      <rect x="290" y="295" width="240" height="22" fill="#1d4ed8"/>
    </svg>`
  },
  botanical: {
    label: "Botanical Oasis (SVG)",
    svg: `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minimalist botanical leaf illustration">
      <rect width="600" height="400" fill="#ecfdf5"/>
      <circle cx="300" cy="200" r="140" fill="#d1fae5"/>
      <path d="M300 350 C300 240 300 150 300 70" stroke="#065f46" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M300 270 C220 250 185 190 220 140 C265 155 290 210 300 270 Z" fill="#10b981"/>
      <path d="M300 230 C380 210 415 150 380 100 C335 115 310 170 300 230 Z" fill="#059669"/>
      <path d="M300 160 C250 130 240 85 270 60 C295 85 300 120 300 160 Z" fill="#047857"/>
      <rect x="220" y="340" width="160" height="16" rx="8" fill="#064e3b"/>
    </svg>`
  },
  cybergrid: {
    label: "Neon Horizon (SVG)",
    svg: `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retro neon grid cityscape">
      <defs>
        <linearGradient id="neonSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#4c1d95"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#neonSky)"/>
      <circle cx="300" cy="190" r="78" fill="#f43f5e"/>
      <rect x="0" y="230" width="600" height="170" fill="#1e1b4b"/>
      <line x1="0" y1="260" x2="600" y2="260" stroke="#38bdf8" stroke-width="2"/>
      <line x1="0" y1="305" x2="600" y2="305" stroke="#38bdf8" stroke-width="2"/>
      <line x1="0" y1="355" x2="600" y2="355" stroke="#38bdf8" stroke-width="2"/>
      <line x1="300" y1="230" x2="80" y2="400" stroke="#c084fc" stroke-width="2"/>
      <line x1="300" y1="230" x2="520" y2="400" stroke="#c084fc" stroke-width="2"/>
      <rect x="70" y="130" width="55" height="100" fill="#0f172a"/>
      <rect x="465" y="110" width="65" height="120" fill="#0f172a"/>
    </svg>`
  },
  uiwire: {
    label: "Mobile App UI Concept (SVG)",
    svg: `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clean mobile interface wireframe mockup">
      <rect width="600" height="400" fill="#eff6ff"/>
      <rect x="195" y="35" width="210" height="330" rx="24" fill="#ffffff" stroke="#1e40af" stroke-width="6"/>
      <rect x="220" y="65" width="160" height="75" rx="12" fill="#2563eb"/>
      <rect x="220" y="158" width="74" height="74" rx="10" fill="#dbeafe"/>
      <rect x="306" y="158" width="74" height="74" rx="10" fill="#bfdbfe"/>
      <rect x="220" y="248" width="160" height="24" rx="6" fill="#e2e8f0"/>
      <rect x="220" y="286" width="110" height="24" rx="6" fill="#cbd5e1"/>
      <circle cx="300" cy="340" r="10" fill="#93c5fd"/>
    </svg>`
  },
  sculpture: {
    label: "Terracotta Vessels (SVG)",
    svg: `<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minimalist 3D terracotta ceramic vessels">
      <rect width="600" height="400" fill="#fef2f2"/>
      <rect x="0" y="300" width="600" height="100" fill="#e7e2da"/>
      <ellipse cx="220" cy="245" rx="72" ry="90" fill="#c2410c"/>
      <rect x="192" y="125" width="56" height="42" rx="8" fill="#9a3412"/>
      <ellipse cx="385" cy="260" rx="58" ry="70" fill="#d97706"/>
      <rect x="360" y="160" width="50" height="40" rx="8" fill="#b45309"/>
      <circle cx="305" cy="105" r="36" fill="#fed7aa"/>
    </svg>`
  }
};

// Default Starter Users (Creator & Admin accounts for easy viva demo)
const DEFAULT_USERS = [
  {
    id: "u1",
    name: "Aarav Sharma",
    email: "creator@kalaspace.edu",
    password: "password123",
    role: "creator",
    specialty: "Digital Illustration & Concept Art",
    location: "Chandigarh, India",
    bio: "Visual storyteller creating warm atmospheric landscapes, editorial posters, and modern web interfaces.",
    website: "https://aaravart.example.com"
  },
  {
    id: "u2",
    name: "Meera Nair",
    email: "meera@kalaspace.edu",
    password: "password123",
    role: "creator",
    specialty: "UI/UX & Brand Identity",
    location: "Bengaluru, India",
    bio: "Product designer focused on accessible mobile systems, typography, and calm human-centered experiences.",
    website: "https://meeradesign.example.com"
  },
  {
    id: "admin1",
    name: "Admin Moderator",
    email: "admin@kalaspace.edu",
    password: "admin123",
    role: "admin",
    specialty: "Platform Curation & Moderation",
    location: "LPU Campus",
    bio: "Curates featured artworks, reviews newly uploaded submissions, and keeps community feedback helpful.",
    website: ""
  }
];

// Default Starter Portfolio Works (15 Examples: 5 Digital Art + 2 of each other category)
const DEFAULT_ARTWORKS = [
  // --- DIGITAL ART (5) ---
  {
    id: "art1",
    title: "Mystic Forest Glow",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Digital Art",
    tags: ["forest", "glow", "landscape"],
    medium: "Digital Painting",
    year: "2026",
    description: "A tranquil pine valley bathed in luminous teal mist and warm sunlight, where a quiet river reflects floating embers and towering silhouettes.",
    imageType: "url",
    imageValue: "mystic-forest-glow.jpg",
    status: "approved",
    favorites: 24,
    createdAt: "2026-11-22",
    feedback: [
      { id: "fb1", author: "Riya Verma", rating: 5, comment: "Love the glowing teal mist and calm river reflections!", date: "2026-11-22" }
    ]
  },
  {
    id: "art2",
    title: "Road at Sunset",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Digital Art",
    tags: ["synthwave", "sunset", "city"],
    medium: "Digital Illustration",
    year: "2026",
    description: "A vibrant purple synthwave highway cutting through a silhouetted skyline toward a glowing golden sun, with neon taillights reflecting off the wet asphalt.",
    imageType: "url",
    imageValue: "road-at-sunset.jpg",
    status: "approved",
    favorites: 31,
    createdAt: "2026-11-21",
    feedback: []
  },
  {
    id: "art3",
    title: "Moon in the Blue Sky",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Digital Art",
    tags: ["moon", "night", "reflection"],
    medium: "Digital Matte Painting",
    year: "2026",
    description: "A luminous cobalt full moon rising above snow-dusted alpine peaks, casting a crisp mirror reflection across a silent midnight mountain lake.",
    imageType: "url",
    imageValue: "moon-in-the-blue-sky.jpg",
    status: "approved",
    favorites: 27,
    createdAt: "2026-11-20",
    feedback: [
      { id: "fb2", author: "Kabir Singh", rating: 5, comment: "The water reflection of the blue moon looks surreal.", date: "2026-11-21" }
    ]
  },
  {
    id: "art4",
    title: "Edge of the Event Horizon",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Digital Art",
    tags: ["space", "blackhole", "scifi"],
    medium: "Sci-Fi Digital Art",
    year: "2026",
    description: "A dramatic cosmic vista showing a supermassive black hole bending golden accretion light beside a ringed, city-lit world drifting in deep space.",
    imageType: "url",
    imageValue: "edge-of-the-event-horizon.jpg",
    status: "approved",
    favorites: 35,
    createdAt: "2026-11-19",
    feedback: []
  },
  {
    id: "art5",
    title: "Lost Santos Sunset",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "Digital Art",
    tags: ["sunset", "skyline", "atmospheric"],
    medium: "Digital Environment Art",
    year: "2026",
    description: "Warm golden-hour haze drifting across hillside pines and a distant downtown skyline as the evening sun dips softly behind the ridge.",
    imageType: "url",
    imageValue: "lost-santos-sunset.jpg",
    status: "approved",
    favorites: 22,
    createdAt: "2026-11-18",
    feedback: []
  },

  // --- ILLUSTRATION (2) ---
  {
    id: "art6",
    title: "Emerald Botanical Study",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "Illustration",
    tags: ["nature", "botanical", "watercolor"],
    medium: "Watercolor & Fine Ink",
    year: "2026",
    description: "Detailed botanical watercolor of monstera, fern fronds, and eucalyptus painted in layered translucent greens on textured cotton art paper.",
    imageType: "url",
    imageValue: "emerald-botanical-study.jpg",
    status: "approved",
    favorites: 19,
    createdAt: "2026-11-17",
    feedback: [
      { id: "fb3", author: "Ananya Roy", rating: 5, comment: "The paper grain and delicate ink veins feel so authentic.", date: "2026-11-18" }
    ]
  },
  {
    id: "art7",
    title: "Midnight Koi Ink Print",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Illustration",
    tags: ["koi", "watercolor", "ink"],
    medium: "Sumi Ink & Watercolor",
    year: "2026",
    description: "Two vibrant orange-and-ivory koi fish gliding in a calm indigo lotus pond, accented with gold-leaf speckles and hand-drawn water ripples.",
    imageType: "url",
    imageValue: "midnight-koi-ink.jpg",
    status: "approved",
    favorites: 26,
    createdAt: "2026-11-16",
    feedback: []
  },

  // --- PHOTOGRAPHY (2) ---
  {
    id: "art8",
    title: "Blue Hour Cobblestones",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "Photography",
    tags: ["street", "rain", "twilight"],
    medium: "35mm Street Photography",
    year: "2026",
    description: "A quiet rain-washed stone alleyway captured at blue hour, where warm amber wall lanterns shimmer across glossy wet cobblestones.",
    imageType: "url",
    imageValue: "blue-hour-alley.jpg",
    status: "approved",
    favorites: 21,
    createdAt: "2026-11-15",
    feedback: []
  },
  {
    id: "art9",
    title: "Himalayan Alpine Dawn",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Photography",
    tags: ["mountains", "sunrise", "nature"],
    medium: "Landscape Photography",
    year: "2026",
    description: "Golden first light breaking through layered silver valley mist over cedar slopes and distant snow-capped Himalayan peaks.",
    imageType: "url",
    imageValue: "himalayan-alpine-dawn.jpg",
    status: "approved",
    favorites: 29,
    createdAt: "2026-11-14",
    feedback: []
  },

  // --- UI/UX DESIGN (2) ---
  {
    id: "art10",
    title: "Pulse Health Mobile UI",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "UI/UX Design",
    tags: ["mobile", "dashboard", "accessible"],
    medium: "Mobile Interface Design",
    year: "2026",
    description: "High-contrast mobile wellness dashboard featuring luminous activity rings, smooth heart-rate curves, and effortless one-thumb navigation.",
    imageType: "url",
    imageValue: "pulse-health-ui.jpg",
    status: "approved",
    favorites: 17,
    createdAt: "2026-11-13",
    feedback: []
  },
  {
    id: "art11",
    title: "Obsidian Studio Dashboard",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "UI/UX Design",
    tags: ["web-ui", "dark-mode", "analytics"],
    medium: "Web Application Design",
    year: "2026",
    description: "A sleek dark-mode analytics workspace crafted in matte charcoal and warm gold accents for creative agencies and independent studios.",
    imageType: "url",
    imageValue: "obsidian-studio-dashboard.jpg",
    status: "approved",
    favorites: 23,
    createdAt: "2026-11-12",
    feedback: []
  },

  // --- GRAPHIC DESIGN (2) ---
  {
    id: "art12",
    title: "Bauhaus Rhythm Poster",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "Graphic Design",
    tags: ["poster", "geometry", "bauhaus"],
    medium: "Print Poster Design",
    year: "2026",
    description: "A framed exhibition print exploring bold terracotta circles, deep charcoal bars, and mustard triangles balanced across negative space.",
    imageType: "url",
    imageValue: "bauhaus-rhythm-poster.jpg",
    status: "approved",
    favorites: 16,
    createdAt: "2026-11-11",
    feedback: []
  },
  {
    id: "art13",
    title: "Plum & Gold Artisan Packaging",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "Graphic Design",
    tags: ["packaging", "branding", "minimal"],
    medium: "Brand Identity & Print",
    year: "2026",
    description: "Minimalist tactile packaging suite pairing matte cream and deep plum paperboard with fine gold-foil geometric arch motifs.",
    imageType: "url",
    imageValue: "plum-gold-packaging.jpg",
    status: "approved",
    favorites: 20,
    createdAt: "2026-11-10",
    feedback: []
  },

  // --- 3D & SCULPTURE (2) ---
  {
    id: "art14",
    title: "Terracotta Studio Forms",
    creatorId: "u2",
    creatorName: "Meera Nair",
    category: "3D & Sculpture",
    tags: ["ceramics", "clay", "sculpture"],
    medium: "Handcrafted Clay & Still Life",
    year: "2026",
    description: "Three handcrafted matte terracotta and ochre ceramic vessels arranged on a sandstone plinth, exploring silhouette, texture, and shadow.",
    imageType: "url",
    imageValue: "terracotta-studio-forms.jpg",
    status: "approved",
    favorites: 15,
    createdAt: "2026-11-09",
    feedback: []
  },
  {
    id: "art15",
    title: "Travertine Marble Arch",
    creatorId: "u1",
    creatorName: "Aarav Sharma",
    category: "3D & Sculpture",
    tags: ["marble", "architecture", "3d"],
    medium: "Carved Stone & 3D Form",
    year: "2026",
    description: "An architectural miniature arch combining porous travertine and polished white marble atop a raw charcoal slate block in warm studio light.",
    imageType: "url",
    imageValue: "travertine-marble-arch.jpg",
    status: "approved",
    favorites: 18,
    createdAt: "2026-11-08",
    feedback: []
  }
];

// === Application State (Unit 4 Object) ===
const state = {
  users: [],
  artworks: [],
  currentUser: null,
  isGuest: false,
  gateAuthMode: "login",
  favorites: [],
  activeView: "gallery",
  viewMode: "grid",
  selectedCategory: "All",
  selectedTag: "",
  searchQuery: "",
  sortBy: "newest",
  onlyFavorites: false,
  editingArtId: null,
  detailArtId: null,
  pendingDeleteId: null,
  authMode: "login"
};

// === UNIT 5 & 6: Storage Helpers with try/catch Error Handling ===
function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn("Storage load error for " + key + ":", error);
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Storage save error for " + key + ":", error);
  }
}

// === Utility Helpers ===
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function renderArtworkVisual(art) {
  if (art.imageType === "upload" || art.imageType === "url") {
    return `<img src="${escapeHTML(art.imageValue)}" alt="${escapeHTML(art.title)}">`;
  }
  const preset = SVG_PRESETS[art.imageValue] || SVG_PRESETS.sunset;
  return preset.svg;
}

let toastTimer = null;
function showToast(message) {
  const toastEl = document.querySelector("#toast");
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2800);
}

// === UNIT 5: Initialize Data & DOM ===
// === UNIT 3 & 5: Light / Dark Theme Toggle ===
function applyTheme(themeName) {
  const isDark = themeName === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  const label = isDark ? "☀ Light" : "☾ Dark";
  const btn = document.querySelector("#themeToggleBtn");
  const gateBtn = document.querySelector("#gateThemeBtn");
  if (btn) btn.textContent = label;
  if (gateBtn) gateBtn.textContent = label;
}

// === Auth Gate Visibility (Show Login/Signup Page Before Website) ===
function renderEntryGate() {
  const gate = document.querySelector("#authGate");
  const appShell = document.querySelector("#appShell");
  const canEnter = Boolean(state.currentUser) || state.isGuest;
  gate.classList.toggle("hidden", canEnter);
  appShell.classList.toggle("hidden", !canEnter);
}

function setGateAuthMode(mode) {
  state.gateAuthMode = mode;
  const isRegister = mode === "register";
  document.querySelector("#gateAuthError").textContent = "";
  document.querySelector("#gateRegisterFields").style.display = isRegister ? "block" : "none";
  document.querySelector("#gateAuthSubmitBtn").textContent = isRegister ? "Create Account" : "Login";
  document.querySelector("#gateTabLoginBtn").className = isRegister ? "btn btn-secondary" : "btn btn-primary";
  document.querySelector("#gateTabRegisterBtn").className = isRegister ? "btn btn-primary" : "btn btn-secondary";
}

function enterAsGuest() {
  state.currentUser = null;
  state.isGuest = true;
  state.onlyFavorites = false;
  document.querySelector("#favOnlyBtn").classList.remove("active");
  renderAll();
  showToast("Browsing as Guest — sign in to unlock favorites, uploads, and feedback.");
}

function toggleTheme() {
  const isCurrentlyDark = document.body.classList.contains("dark-theme");
  const nextTheme = isCurrentlyDark ? "light" : "dark";
  applyTheme(nextTheme);
  saveToStorage(STORAGE_KEYS.THEME, nextTheme);
  showToast(nextTheme === "dark" ? "Switched to Obsidian & Gold (Dark)" : "Switched to Plum & Rose Quartz (Light)");
}

function initApp() {
  const savedTheme = loadFromStorage(STORAGE_KEYS.THEME, "light");
  applyTheme(savedTheme);
  state.users = loadFromStorage(STORAGE_KEYS.USERS, DEFAULT_USERS);
  state.artworks = loadFromStorage(STORAGE_KEYS.ARTWORKS, DEFAULT_ARTWORKS);
  state.favorites = loadFromStorage(STORAGE_KEYS.FAVORITES, ["art1"]);
  const savedSessionId = loadFromStorage(STORAGE_KEYS.SESSION, null);
  state.currentUser = state.users.find((u) => u.id === savedSessionId) || null;

  buildCategoryPills();
  buildPresetDropdown();
  attachEventListeners();
  renderAll();
  console.log("कलाspace initialized successfully with", state.artworks.length, "artworks.");
}

function buildCategoryPills() {
  const container = document.querySelector("#categoryPills");
  container.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pill-btn" + (cat === state.selectedCategory ? " active" : "");
    btn.textContent = cat;
    btn.dataset.category = cat;
    container.append(btn);
  });
}

function buildPresetDropdown() {
  const select = document.querySelector("#artPreset");
  select.innerHTML = "";
  for (const key in SVG_PRESETS) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = SVG_PRESETS[key].label;
    select.append(option);
  }
}

// === Master Render Function ===
function renderAll() {
  renderEntryGate();
  renderHeaderAuth();
  renderStats();
  renderGallery();
  renderProfileView();
  renderAdminView();
  updateNavVisibility();
}

function updateNavVisibility() {
  const addNavBtn = document.querySelector("#navAddBtn");
  const profileNavBtn = document.querySelector("#navProfileBtn");
  const adminNavBtn = document.querySelector("#navAdminBtn");

  const isLoggedIn = Boolean(state.currentUser);
  const isAdmin = state.currentUser && state.currentUser.role === "admin";

  addNavBtn.style.display = isLoggedIn ? "inline-flex" : "none";
  profileNavBtn.style.display = isLoggedIn ? "inline-flex" : "none";
  adminNavBtn.style.display = isAdmin ? "inline-flex" : "none";

  // Switch back to gallery if user logs out from a protected view
  if (!isLoggedIn && (state.activeView === "add" || state.activeView === "profile" || state.activeView === "admin")) {
    switchView("gallery");
  }
  if (!isAdmin && state.activeView === "admin") {
    switchView("gallery");
  }
}

function switchView(viewName) {
  state.activeView = viewName;
  const sections = document.querySelectorAll(".view-section");
  sections.forEach((sec) => {
    sec.classList.toggle("active", sec.id === "view-" + viewName);
  });

  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  if (viewName === "add" && !state.editingArtId) {
    resetArtworkForm();
  }
}

function renderHeaderAuth() {
  const authArea = document.querySelector("#authArea");
  if (state.currentUser) {
    const initial = escapeHTML(state.currentUser.name.charAt(0).toUpperCase());
    authArea.innerHTML = `
      <button type="button" class="btn btn-secondary btn-sm" id="logoutBtn">Logout</button>
      <button type="button" class="user-pill user-pill-btn" id="headerProfileBtn" title="Open My Profile">
        <span class="user-avatar-sm">${initial}</span>
        <span id="headerUserName">${escapeHTML(state.currentUser.name)}</span>
        <span class="role-badge">${escapeHTML(state.currentUser.role)}</span>
      </button>
    `;
  } else {
    authArea.innerHTML = `
      <button type="button" class="btn btn-primary btn-sm" id="openAuthBtn">Login / Sign Up</button>
      <div class="user-pill">
        <span class="user-avatar-sm">G</span>
        <span>Guest</span>
        <span class="role-badge">BROWSE ONLY</span>
      </div>
    `;
  }
}

function renderStats() {
  const approvedCount = state.artworks.filter((a) => a.status === "approved").length;
  const creatorCount = state.users.filter((u) => u.role === "creator").length;
  const favCount = state.favorites.length;

  document.querySelector("#statWorks").textContent = approvedCount;
  document.querySelector("#statCreators").textContent = creatorCount;
  document.querySelector("#statFavs").textContent = favCount;
}

// === Filter & Sort Logic (Unit 5 Higher-Order Functions) ===
function getFilteredArtworks() {
  const query = state.searchQuery.trim().toLowerCase();

  const filtered = state.artworks.filter((art) => {
    // Visibility rules: visitors see approved; creators also see their own works; admin sees all
    const isOwner = state.currentUser && art.creatorId === state.currentUser.id;
    const isAdmin = state.currentUser && state.currentUser.role === "admin";
    if (art.status !== "approved" && !isOwner && !isAdmin) {
      return false;
    }

    if (state.selectedCategory !== "All" && art.category !== state.selectedCategory) {
      return false;
    }

    if (state.selectedTag && !art.tags.includes(state.selectedTag)) {
      return false;
    }

    if (state.onlyFavorites && !state.favorites.includes(art.id)) {
      return false;
    }

    if (query) {
      const searchable = (
        art.title + " " +
        art.creatorName + " " +
        art.category + " " +
        art.description + " " +
        art.tags.join(" ")
      ).toLowerCase();
      return searchable.includes(query);
    }

    return true;
  });

  // Sort copy of filtered list
  const sorted = [...filtered];
  if (state.sortBy === "favorites") {
    sorted.sort((a, b) => b.favorites - a.favorites);
  } else if (state.sortBy === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  return sorted;
}

function renderGallery() {
  const grid = document.querySelector("#portfolioGrid");
  const resultsText = document.querySelector("#resultsCount");
  const tagBar = document.querySelector("#activeTagBar");
  const activeTagText = document.querySelector("#activeTagText");

  grid.classList.toggle("list-view", state.viewMode === "list");

  // Update active category pill styling
  document.querySelectorAll("#categoryPills .pill-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === state.selectedCategory);
  });

  if (state.selectedTag) {
    tagBar.style.display = "flex";
    activeTagText.textContent = "#" + state.selectedTag;
  } else {
    tagBar.style.display = "none";
  }

  const list = getFilteredArtworks();
  resultsText.textContent = `Showing ${list.length} artwork${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>No artworks match your filter</h3>
        <p>Try clearing your search, choosing another category, or uploading a new artwork.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map((art) => {
    const isFav = state.favorites.includes(art.id);
    const canManage =
      state.currentUser &&
      (state.currentUser.role === "admin" || state.currentUser.id === art.creatorId);

    const statusBadge =
      art.status !== "approved"
        ? `<span class="status-chip status-${art.status}">${escapeHTML(art.status.toUpperCase())}</span>`
        : "";

    const tagButtons = art.tags
      .map((tag) => `<button type="button" class="tag-chip" data-tag="${escapeHTML(tag)}">#${escapeHTML(tag)}</button>`)
      .join("");

    const manageButtons = canManage
      ? `<button type="button" class="btn btn-secondary btn-sm" data-action="edit" data-id="${art.id}">Edit</button>
         <button type="button" class="btn btn-danger btn-sm" data-action="delete" data-id="${art.id}">Delete</button>`
      : "";

    return `
      <article class="art-card">
        <div class="art-thumb" data-action="detail" data-id="${art.id}">
          ${renderArtworkVisual(art)}
          ${statusBadge}
        </div>
        <div class="art-body">
          <div class="art-meta-row">
            <span class="art-category">${escapeHTML(art.category)}</span>
            <span>${escapeHTML(art.year)}</span>
          </div>
          <h3 class="art-title" data-action="detail" data-id="${art.id}">${escapeHTML(art.title)}</h3>
          <p class="art-creator">By ${escapeHTML(art.creatorName)}</p>
          <p class="art-desc">${escapeHTML(art.description)}</p>
          <div class="tag-list">${tagButtons}</div>
          <div class="art-footer">
            <button type="button" class="fav-btn ${isFav ? "favorited" : ""}" data-action="favorite" data-id="${art.id}" aria-label="Favorite ${escapeHTML(art.title)}">
              ${isFav ? "♥" : "♡"} ${art.favorites}
            </button>
            <div class="card-actions">
              <button type="button" class="btn btn-primary btn-sm" data-action="detail" data-id="${art.id}">View</button>
              ${manageButtons}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// === Item Detail Modal & Feedback ===
function openDetailModal(artId) {
  const art = state.artworks.find((a) => a.id === artId);
  if (!art) return;
  state.detailArtId = artId;

  const isFav = state.favorites.includes(art.id);
  const modalBody = document.querySelector("#detailModalBody");
  document.querySelector("#detailModalTitle").textContent = art.title;

  const feedbackItems =
    art.feedback.length === 0
      ? `<li class="helper-text">No feedback yet. Be the first visitor to share your thoughts!</li>`
      : art.feedback
          .map(
            (fb) => `
          <li class="feedback-item">
            <div class="feedback-top">
              <strong>${escapeHTML(fb.author)}</strong>
              <span>${"★".repeat(fb.rating)}${"☆".repeat(5 - fb.rating)} · ${escapeHTML(fb.date)}</span>
            </div>
            <p>${escapeHTML(fb.comment)}</p>
          </li>`
          )
          .join("");

  modalBody.innerHTML = `
    <div class="detail-artwork">${renderArtworkVisual(art)}</div>
    <p>${escapeHTML(art.description)}</p>
    <div class="detail-specs">
      <span><strong>Creator:</strong> ${escapeHTML(art.creatorName)}</span>
      <span><strong>Category:</strong> ${escapeHTML(art.category)}</span>
      <span><strong>Medium:</strong> ${escapeHTML(art.medium)}</span>
      <span><strong>Year:</strong> ${escapeHTML(art.year)}</span>
      <span><strong>Status:</strong> ${escapeHTML(art.status)}</span>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
      <div class="tag-list">
        ${art.tags.map((t) => `<span class="tag-chip">#${escapeHTML(t)}</span>`).join("")}
      </div>
      <button type="button" class="fav-btn ${isFav ? "favorited" : ""}" id="detailFavBtn">
        ${isFav ? "♥ Favorited" : "♡ Add to Favorites"} (${art.favorites})
      </button>
    </div>

    <section class="feedback-section">
      <h3>Visitor Feedback (${art.feedback.length})</h3>
      <ul class="feedback-list">${feedbackItems}</ul>

      ${state.currentUser ? `
      <form id="feedbackForm" novalidate>
        <div class="form-grid">
          <div class="form-group">
            <label for="fbAuthor">Your Name</label>
            <input type="text" id="fbAuthor" required placeholder="e.g. Priya Kapoor" value="${escapeHTML(state.currentUser.name)}">
          </div>
          <div class="form-group">
            <label for="fbRating">Rating</label>
            <select id="fbRating">
              <option value="5">5 Stars — Excellent</option>
              <option value="4">4 Stars — Great</option>
              <option value="3">3 Stars — Good</option>
              <option value="2">2 Stars — Fair</option>
              <option value="1">1 Star — Needs Work</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label for="fbComment">Comment</label>
            <textarea id="fbComment" required placeholder="Share constructive feedback on this artwork..."></textarea>
            <span class="error-msg" id="fbError"></span>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Post Feedback</button>
      </form>
      ` : `
      <div class="guest-lock-box">
        <p><strong>Guest Mode:</strong> Sign in with an account to rate artworks and post feedback.</p>
        <button type="button" class="btn btn-primary btn-sm" id="detailLoginPromptBtn">Login / Sign Up</button>
      </div>
      `}
    </section>
  `;

  document.querySelector("#detailModal").classList.add("open");

  document.querySelector("#detailFavBtn").addEventListener("click", () => {
    toggleFavorite(art.id);
    openDetailModal(art.id);
  });

  const detailLoginBtn = document.querySelector("#detailLoginPromptBtn");
  if (detailLoginBtn) {
    detailLoginBtn.addEventListener("click", () => {
      document.querySelector("#detailModal").classList.remove("open");
      openAuthModal("login");
    });
  }

  const fbFormEl = document.querySelector("#feedbackForm");
  if (fbFormEl) fbFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const author = document.querySelector("#fbAuthor").value.trim();
    const rating = Number(document.querySelector("#fbRating").value);
    const comment = document.querySelector("#fbComment").value.trim();
    const errEl = document.querySelector("#fbError");

    if (author.length < 2 || comment.length < 4) {
      errEl.textContent = "Please enter your name (min 2 chars) and a comment (min 4 chars).";
      return;
    }

    art.feedback.unshift({
      id: "fb_" + Date.now(),
      author,
      rating,
      comment,
      date: getTodayDate()
    });
    saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
    showToast("Feedback added!");
    openDetailModal(art.id);
    renderAdminView();
  });
}

function toggleFavorite(artId) {
  if (!state.currentUser) {
    showToast("Please sign in to save favorite artworks.");
    openAuthModal("login");
    return;
  }
  const art = state.artworks.find((a) => a.id === artId);
  if (!art) return;

  const index = state.favorites.indexOf(artId);
  if (index === -1) {
    state.favorites.push(artId);
    art.favorites += 1;
    showToast("Added to Favorites");
  } else {
    state.favorites.splice(index, 1);
    art.favorites = Math.max(0, art.favorites - 1);
    showToast("Removed from Favorites");
  }

  saveToStorage(STORAGE_KEYS.FAVORITES, state.favorites);
  saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
  renderStats();
  renderGallery();
}

// === Add / Edit Artwork Form ===
function resetArtworkForm() {
  state.editingArtId = null;
  document.querySelector("#artFormHeading").textContent = "Upload New Artwork";
  document.querySelector("#artSubmitBtn").textContent = "Publish Artwork";
  document.querySelector("#artworkForm").reset();
  document.querySelector("#artYear").value = "2026";
  document.querySelector("#artFormError").textContent = "";
  document.querySelector("#uploadedDataUrl").value = "";
  updateArtPreview();
}

function startEditArtwork(artId) {
  const art = state.artworks.find((a) => a.id === artId);
  if (!art) return;

  state.editingArtId = artId;
  switchView("add");

  document.querySelector("#artFormHeading").textContent = "Edit Artwork: " + art.title;
  document.querySelector("#artSubmitBtn").textContent = "Save Changes";
  document.querySelector("#artTitle").value = art.title;
  document.querySelector("#artCategory").value = art.category;
  document.querySelector("#artTags").value = art.tags.join(", ");
  document.querySelector("#artMedium").value = art.medium;
  document.querySelector("#artYear").value = art.year;
  document.querySelector("#artDescription").value = art.description;

  if (art.imageType === "preset") {
    document.querySelector("#artPreset").value = art.imageValue;
    document.querySelector("#uploadedDataUrl").value = "";
  } else {
    document.querySelector("#uploadedDataUrl").value = art.imageValue;
  }
  updateArtPreview();
}

function updateArtPreview() {
  const preview = document.querySelector("#artPreviewBox");
  const uploaded = document.querySelector("#uploadedDataUrl").value;
  const presetKey = document.querySelector("#artPreset").value;

  if (uploaded) {
    preview.innerHTML = `<img src="${escapeHTML(uploaded)}" alt="Uploaded artwork preview">`;
  } else {
    const preset = SVG_PRESETS[presetKey] || SVG_PRESETS.sunset;
    preview.innerHTML = preset.svg;
  }
}

function handleArtworkSubmit(event) {
  event.preventDefault();
  if (!state.currentUser) {
    showToast("Please login as a creator to add artworks.");
    openAuthModal("login");
    return;
  }

  const title = document.querySelector("#artTitle").value.trim();
  const category = document.querySelector("#artCategory").value;
  const tagsRaw = document.querySelector("#artTags").value;
  const medium = document.querySelector("#artMedium").value.trim();
  const year = document.querySelector("#artYear").value.trim();
  const description = document.querySelector("#artDescription").value.trim();
  const uploadedUrl = document.querySelector("#uploadedDataUrl").value;
  const presetKey = document.querySelector("#artPreset").value;
  const errEl = document.querySelector("#artFormError");

  // Unit 5: JS & Regex Validation
  const yearPattern = /^(19|20)\d{2}$/;
  if (title.length < 3) {
    errEl.textContent = "Title must be at least 3 characters long.";
    return;
  }
  if (!yearPattern.test(year)) {
    errEl.textContent = "Please enter a valid 4-digit year (e.g. 2026).";
    return;
  }
  if (description.length < 10) {
    errEl.textContent = "Description must be at least 10 characters long.";
    return;
  }
  errEl.textContent = "";

  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim().toLowerCase().replace(/^#/, ""))
    .filter((t) => t.length > 0);

  const imageType = uploadedUrl ? "upload" : "preset";
  const imageValue = uploadedUrl || presetKey;

  if (state.editingArtId) {
    const existing = state.artworks.find((a) => a.id === state.editingArtId);
    if (existing) {
      existing.title = title;
      existing.category = category;
      existing.tags = tags.length ? tags : ["creative"];
      existing.medium = medium || "Mixed Media";
      existing.year = year;
      existing.description = description;
      existing.imageType = imageType;
      existing.imageValue = imageValue;
      showToast("Artwork updated!");
    }
  } else {
    const newArt = {
      id: "art_" + Date.now(),
      title,
      creatorId: state.currentUser.id,
      creatorName: state.currentUser.name,
      category,
      tags: tags.length ? tags : ["creative"],
      medium: medium || "Mixed Media",
      year,
      description,
      imageType,
      imageValue,
      // Admin uploads are approved immediately; creator uploads can be moderated
      status: state.currentUser.role === "admin" ? "approved" : "approved",
      favorites: 0,
      createdAt: getTodayDate(),
      feedback: []
    };
    state.artworks.unshift(newArt);
    showToast("New artwork published to your portfolio!");
  }

  saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
  resetArtworkForm();
  renderAll();
  switchView("gallery");
}

// === Profile View ===
function renderProfileView() {
  if (!state.currentUser) return;
  const user = state.currentUser;
  const myWorks = state.artworks.filter((a) => a.creatorId === user.id);
  const totalLikes = myWorks.reduce((sum, item) => sum + item.favorites, 0);

  document.querySelector("#profileAvatar").textContent = user.name.charAt(0).toUpperCase();
  document.querySelector("#profileNameDisplay").textContent = user.name;
  document.querySelector("#profileMetaDisplay").textContent =
    `${user.specialty || "Independent Creator"} · ${user.location || "India"}`;
  document.querySelector("#profileBioDisplay").textContent =
    user.bio || "No bio added yet. Update your creator profile below.";
  document.querySelector("#profileWorksCount").textContent = myWorks.length;
  document.querySelector("#profileLikesCount").textContent = totalLikes;

  // Populate edit profile form
  document.querySelector("#profName").value = user.name;
  document.querySelector("#profSpecialty").value = user.specialty || "";
  document.querySelector("#profLocation").value = user.location || "";
  document.querySelector("#profWebsite").value = user.website || "";
  document.querySelector("#profBio").value = user.bio || "";
}

function handleProfileSave(event) {
  event.preventDefault();
  if (!state.currentUser) return;

  const newName = document.querySelector("#profName").value.trim();
  if (newName.length < 2) {
    showToast("Name must be at least 2 characters.");
    return;
  }

  state.currentUser.name = newName;
  state.currentUser.specialty = document.querySelector("#profSpecialty").value.trim();
  state.currentUser.location = document.querySelector("#profLocation").value.trim();
  state.currentUser.website = document.querySelector("#profWebsite").value.trim();
  state.currentUser.bio = document.querySelector("#profBio").value.trim();

  // Keep creatorName synced on their artworks
  state.artworks.forEach((art) => {
    if (art.creatorId === state.currentUser.id) {
      art.creatorName = newName;
    }
  });

  saveToStorage(STORAGE_KEYS.USERS, state.users);
  saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
  renderAll();
  showToast("Creator profile saved!");
}

// === Admin Moderation View (Unit 2 Table + Unit 5 DOM) ===
function renderAdminView() {
  const tbody = document.querySelector("#adminTableBody");
  const total = state.artworks.length;
  const approved = state.artworks.filter((a) => a.status === "approved").length;
  const pending = state.artworks.filter((a) => a.status === "pending").length;
  const hidden = state.artworks.filter((a) => a.status === "hidden").length;

  document.querySelector("#adminStatTotal").textContent = total;
  document.querySelector("#adminStatApproved").textContent = approved;
  document.querySelector("#adminStatPending").textContent = pending;
  document.querySelector("#adminStatHidden").textContent = hidden;

  tbody.innerHTML = state.artworks
    .map((art) => {
      return `
        <tr>
          <td><strong>${escapeHTML(art.title)}</strong></td>
          <td>${escapeHTML(art.creatorName)}</td>
          <td>${escapeHTML(art.category)}</td>
          <td><span class="status-chip status-${art.status}" style="position:static;">${escapeHTML(art.status.toUpperCase())}</span></td>
          <td>${art.feedback.length}</td>
          <td>
            <div class="card-actions">
              <button type="button" class="btn btn-success btn-sm" data-admin-action="approve" data-id="${art.id}">Approve</button>
              <button type="button" class="btn btn-secondary btn-sm" data-admin-action="hide" data-id="${art.id}">Hide</button>
              <button type="button" class="btn btn-danger btn-sm" data-admin-action="delete" data-id="${art.id}">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

// === Authentication Modal (Unit 5 Regex Validation) ===
function openAuthModal(mode) {
  state.authMode = mode;
  document.querySelector("#authError").textContent = "";
  document.querySelector("#authForm").reset();

  const isRegister = mode === "register";
  document.querySelector("#authModalTitle").textContent = isRegister ? "Create Creator Account" : "Login to कलाspace";
  document.querySelector("#registerFields").style.display = isRegister ? "block" : "none";
  document.querySelector("#authSubmitBtn").textContent = isRegister ? "Create Account" : "Login";
  document.querySelector("#tabLoginBtn").className = isRegister ? "btn btn-secondary" : "btn btn-primary";
  document.querySelector("#tabRegisterBtn").className = isRegister ? "btn btn-primary" : "btn btn-secondary";

  document.querySelector("#authModal").classList.add("open");
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const email = document.querySelector("#authEmail").value.trim().toLowerCase();
  const password = document.querySelector("#authPassword").value;
  const errEl = document.querySelector("#authError");

  // Unit 5: Regular Expression Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errEl.textContent = "Please enter a valid email address.";
    return;
  }
  if (password.length < 6) {
    errEl.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (state.authMode === "login") {
    const found = state.users.find((u) => u.email === email && u.password === password);
    if (!found) {
      errEl.textContent = "Invalid email or password. Please check your credentials or sign up.";
      return;
    }
    loginUser(found);
  } else {
    const name = document.querySelector("#authName").value.trim();
    const specialty = document.querySelector("#authSpecialty").value.trim();
    if (name.length < 2) {
      errEl.textContent = "Please enter your full name.";
      return;
    }
    if (state.users.some((u) => u.email === email)) {
      errEl.textContent = "An account with this email already exists.";
      return;
    }
    const newUser = {
      id: "u_" + Date.now(),
      name,
      email,
      password,
      role: "creator",
      specialty: specialty || "Visual Artist",
      location: "India",
      bio: "New creative member on कलाspace.",
      website: ""
    };
    state.users.push(newUser);
    saveToStorage(STORAGE_KEYS.USERS, state.users);
    loginUser(newUser);
  }
}

function loginUser(user) {
  state.currentUser = user;
  state.isGuest = false;
  saveToStorage(STORAGE_KEYS.SESSION, user.id);
  document.querySelector("#authModal").classList.remove("open");
  renderAll();
  showToast("Welcome, " + user.name + "!");
}

function logoutUser() {
  state.currentUser = null;
  state.isGuest = false;
  state.onlyFavorites = false;
  saveToStorage(STORAGE_KEYS.SESSION, null);
  renderAll();
  showToast("You have logged out.");
}

function handleGateAuthSubmit(event) {
  event.preventDefault();
  const email = document.querySelector("#gateAuthEmail").value.trim().toLowerCase();
  const password = document.querySelector("#gateAuthPassword").value;
  const errEl = document.querySelector("#gateAuthError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errEl.textContent = "Please enter a valid email address.";
    return;
  }
  if (password.length < 6) {
    errEl.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (state.gateAuthMode === "login") {
    const found = state.users.find((u) => u.email === email && u.password === password);
    if (!found) {
      errEl.textContent = "Invalid email or password. Please check your credentials or sign up.";
      return;
    }
    document.querySelector("#gateAuthForm").reset();
    loginUser(found);
  } else {
    const name = document.querySelector("#gateAuthName").value.trim();
    const specialty = document.querySelector("#gateAuthSpecialty").value.trim();
    if (name.length < 2) {
      errEl.textContent = "Please enter your full name.";
      return;
    }
    if (state.users.some((u) => u.email === email)) {
      errEl.textContent = "An account with this email already exists.";
      return;
    }
    const newUser = {
      id: "u_" + Date.now(),
      name,
      email,
      password,
      role: "creator",
      specialty: specialty || "Visual Artist",
      location: "India",
      bio: "New creative member on कलाspace.",
      website: ""
    };
    state.users.push(newUser);
    saveToStorage(STORAGE_KEYS.USERS, state.users);
    document.querySelector("#gateAuthForm").reset();
    loginUser(newUser);
  }
}

// === Delete Confirmation Modal (Safe In-Page Alternative to confirm()) ===
function askDeleteArtwork(artId) {
  const art = state.artworks.find((a) => a.id === artId);
  if (!art) return;
  state.pendingDeleteId = artId;
  document.querySelector("#deleteTargetName").textContent = art.title;
  document.querySelector("#deleteModal").classList.add("open");
}

function confirmDeleteArtwork() {
  if (!state.pendingDeleteId) return;
  state.artworks = state.artworks.filter((a) => a.id !== state.pendingDeleteId);
  state.favorites = state.favorites.filter((id) => id !== state.pendingDeleteId);
  saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
  saveToStorage(STORAGE_KEYS.FAVORITES, state.favorites);
  state.pendingDeleteId = null;
  document.querySelector("#deleteModal").classList.remove("open");
  renderAll();
  showToast("Artwork deleted.");
}

// === UNIT 5: Event Listeners ===
function attachEventListeners() {
  // Light / Dark theme toggle buttons (both Gate & Header)
  document.querySelector("#themeToggleBtn").addEventListener("click", toggleTheme);
  document.querySelector("#gateThemeBtn").addEventListener("click", toggleTheme);

  // Initial Login / Sign Up Gate controls
  document.querySelector("#gateTabLoginBtn").addEventListener("click", () => setGateAuthMode("login"));
  document.querySelector("#gateTabRegisterBtn").addEventListener("click", () => setGateAuthMode("register"));
  document.querySelector("#gateAuthForm").addEventListener("submit", handleGateAuthSubmit);
  document.querySelector("#continueGuestBtn").addEventListener("click", enterAsGuest);

  // Navigation tabs
  document.querySelector(".main-nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-btn");
    if (!btn) return;
    if (btn.dataset.view === "add") {
      state.editingArtId = null;
    }
    switchView(btn.dataset.view);
  });

  // Hero quick actions
  document.querySelector("#heroExploreBtn").addEventListener("click", () => {
    switchView("gallery");
    document.querySelector("#galleryToolbar").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("#heroAddBtn").addEventListener("click", () => {
    if (state.currentUser) {
      state.editingArtId = null;
      switchView("add");
    } else {
      openAuthModal("login");
    }
  });

  // Header Login / Logout / Profile Pill (delegated)
  document.querySelector("#authArea").addEventListener("click", (e) => {
    if (e.target.id === "openAuthBtn") openAuthModal("login");
    if (e.target.id === "logoutBtn") logoutUser();
    if (e.target.closest("#headerProfileBtn")) switchView("profile");
  });

  // Search, Sort, Favorites Filter, View Toggle
  document.querySelector("#searchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderGallery();
  });

  document.querySelector("#sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderGallery();
  });

  document.querySelector("#favOnlyBtn").addEventListener("click", (e) => {
    if (!state.currentUser) {
      showToast("Sign in to filter your saved favorites.");
      openAuthModal("login");
      return;
    }
    state.onlyFavorites = !state.onlyFavorites;
    e.target.classList.toggle("active", state.onlyFavorites);
    renderGallery();
  });

  document.querySelector("#gridViewBtn").addEventListener("click", () => {
    state.viewMode = "grid";
    document.querySelector("#gridViewBtn").classList.add("active");
    document.querySelector("#listViewBtn").classList.remove("active");
    renderGallery();
  });

  document.querySelector("#listViewBtn").addEventListener("click", () => {
    state.viewMode = "list";
    document.querySelector("#listViewBtn").classList.add("active");
    document.querySelector("#gridViewBtn").classList.remove("active");
    renderGallery();
  });

  // Category filter pills
  document.querySelector("#categoryPills").addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn) return;
    state.selectedCategory = btn.dataset.category;
    renderGallery();
  });

  // Clear active tag filter
  document.querySelector("#clearTagBtn").addEventListener("click", () => {
    state.selectedTag = "";
    renderGallery();
  });

  // Portfolio Grid delegated clicks (View, Favorite, Edit, Delete, Tag filter)
  document.querySelector("#portfolioGrid").addEventListener("click", (e) => {
    const tagBtn = e.target.closest("[data-tag]");
    if (tagBtn) {
      state.selectedTag = tagBtn.dataset.tag;
      renderGallery();
      return;
    }
    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;
    const action = actionEl.dataset.action;
    const id = actionEl.dataset.id;

    if (action === "detail") openDetailModal(id);
    if (action === "favorite") toggleFavorite(id);
    if (action === "edit") startEditArtwork(id);
    if (action === "delete") askDeleteArtwork(id);
  });

  // Artwork Form & Image FileReader Upload
  document.querySelector("#artworkForm").addEventListener("submit", handleArtworkSubmit);
  document.querySelector("#cancelEditBtn").addEventListener("click", () => {
    resetArtworkForm();
    switchView("gallery");
  });

  document.querySelector("#artPreset").addEventListener("change", () => {
    document.querySelector("#uploadedDataUrl").value = "";
    document.querySelector("#artFileInput").value = "";
    updateArtPreview();
  });

  document.querySelector("#artFileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      document.querySelector("#uploadedDataUrl").value = reader.result;
      updateArtPreview();
    };
    reader.readAsDataURL(file);
  });

  // Profile Form
  document.querySelector("#profileForm").addEventListener("submit", handleProfileSave);

  // Admin Table actions
  document.querySelector("#adminTableBody").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-admin-action]");
    if (!btn) return;
    const action = btn.dataset.adminAction;
    const art = state.artworks.find((a) => a.id === btn.dataset.id);
    if (!art) return;

    if (action === "approve") {
      art.status = "approved";
      saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
      renderAll();
      showToast("Artwork approved and published.");
    } else if (action === "hide") {
      art.status = "hidden";
      saveToStorage(STORAGE_KEYS.ARTWORKS, state.artworks);
      renderAll();
      showToast("Artwork hidden from public gallery.");
    } else if (action === "delete") {
      askDeleteArtwork(art.id);
    }
  });

  // Auth Modal controls & Demo Logins
  document.querySelector("#tabLoginBtn").addEventListener("click", () => openAuthModal("login"));
  document.querySelector("#tabRegisterBtn").addEventListener("click", () => openAuthModal("register"));
  document.querySelector("#authForm").addEventListener("submit", handleAuthSubmit);


  // Delete Modal confirm
  document.querySelector("#confirmDeleteBtn").addEventListener("click", confirmDeleteArtwork);

  // Close Modals via close buttons, backdrop click, or Escape key
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector("#" + btn.dataset.closeModal).classList.remove("open");
    });
  });

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach((m) => m.classList.remove("open"));
    }
  });
}

// Start the application once DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
