/**
 * ============================================================================
 * IGNACIO VELIZ // EDGERUNNERS HOLOGRAPHIC HUD & CYBERDECK CONTROLLER (app.js)
 * ============================================================================
 * Edita el objeto PORTFOLIO_DATA a continuación para personalizar tus datos
 * personales, proyectos, habilidades y enlaces de contacto.
 */

const storedLanguage = localStorage.getItem("portfolio-language");
const browserLanguage = (navigator.language || "es").toLowerCase();
let currentLanguage = storedLanguage || (browserLanguage.startsWith("es") ? "es" : "en");

const PROJECT_EN = {
  "OWN-01": { title: "STREAMIXOR // TWITCH COMMUNITY PLATFORM", desc: "Self-hosted platform I designed and built to manage and gamify Twitch communities through a multichannel bot, virtual economy, games, OBS overlays, WebSockets and local text-to-speech." },
  "OWN-02": { title: "RAMIFICA // DESKTOP GIT CLIENT", desc: "Desktop Git client I designed and built in Spanish with staging, history, remote synchronization, secure multi-account management and visual block-based conflict resolution." },
  "CORP-01": { title: "ARCOPRIME // TEMPLATE MANAGER", desc: "Lead developer of an enterprise platform for managing templates and automating document generation, validation and processing." },
  "CORP-02": { title: "ARCOPRIME // INTEGRATION MIDDLEWARE", desc: "Maintenance and evolution of a legacy enterprise middleware that centralizes integrations and information flows between internal systems." },
  "CORP-03": { title: "ARCOPRIME // WORKFLOW ENGINE", desc: "Technical lead and principal developer for a configurable workflow engine, coordinating frontend and backend work planning and delivery." },
  "CORP-04": { title: "CONTRATACIÓN RED // MODERNIZATION & INTEGRATIONS", desc: "Principal developer modernizing a legacy hiring system through CI/CD, digital-signature and workflow integrations, technical-debt reduction and deployment stabilization." },
  "CORP-05": { title: "IDEA UNO // GLOBAL SERVICES API", desc: "Principal developer of a centralized platform for shared company services, including a news API and integrations with Instagram, LinkedIn and Google Chat." }
};

const CYBERWARE_EN = [
  {
    category: "LANGUAGES, FRAMEWORKS & FRONTEND",
    description: "Robust backend development, web interfaces and maintainable business services.",
    items: ["PHP", "Laravel", "JavaScript", "React", "HTML5", "Bootstrap", "Python", "Flask", "C#", ".NET"]
  },
  {
    category: "CLOUD, DEVOPS & SECURITY",
    description: "Continuous delivery, cloud infrastructure and secure production operations.",
    items: ["AWS Lambda", "Serverless Framework", "Docker", "Production / QA Environments", "CI/CD", "GitHub Actions", "Bitbucket Pipelines", "JWT", "OAuth2"]
  },
  {
    category: "ARCHITECTURE, LEADERSHIP & QUALITY",
    description: "System design, technical coordination and quality practices across delivery teams.",
    items: ["Jira", "Confluence", "Trello", "Technical Leadership", "Software Architecture", "Data Models", "RESTful APIs", "Postman", "Software Quality"]
  }
];

const PORTFOLIO_DATA = {
  profile: {
    name: "IGNACIO VELIZ",
    role: "Analista Desarrollador · Full-Stack Developer",
    level: 50,
    streetCred: 50,
    affiliation: "4+ Años // IDEA UNO",
    specialty: "Laravel · React · AWS · Docker",
    bounty: "APIS RESTFUL, CLOUD & CI/CD",
    location: "Santiago, Chile",
    totalRam: 16,
    bio: [
      "Con más de 4 años de experiencia en desarrollo de software, especializado en Laravel y con proyectos realizados en Flask y .NET. Domino tecnologías como Laravel, React, AWS Lambda, Serverless Framework, JavaScript y Docker.",
      "He liderado y participado en proyectos reales internos y externos en IDEA UNO, fortaleciendo mis habilidades técnicas, de liderazgo y trabajo colaborativo con Jira y Confluence. Actualmente finalizo mis estudios de Ingeniería en Informática en DUOC UC (modalidad vespertina), complementando formación académica con experiencia práctica en producción."
    ],
    bioEn: [
      "Full-stack developer with more than 4 years of professional experience, specializing in Laravel and with production work in Flask and .NET. My stack includes React, AWS Lambda, Serverless Framework, JavaScript and Docker.",
      "I have led and contributed to real internal and client projects at IDEA UNO, combining hands-on engineering with planning, task assignment and collaboration through Jira and Confluence. I am currently completing an evening degree in Computer Engineering at DUOC UC."
    ],
    attributes: [
      { name: "DESARROLLO BACKEND (Laravel / Flask / .NET)", score: "20 / 20", percent: 100 },
      { name: "FRONTEND & UI (React / JavaScript / HTML / Bootstrap)", score: "19 / 20", percent: 95 },
      { name: "DEVOPS & CLOUD (AWS Lambda / Serverless / Docker / CI-CD)", score: "19 / 20", percent: 95 },
      { name: "LIDERAZGO, GESTIÓN & QA (Jira / Confluence / Postman)", score: "19 / 20", percent: 95 }
    ],
    experience: [
      {
        period: "OCTUBRE 2022 — ACTUAL",
        role: "Analista Desarrollador",
        company: "IDEA UNO · Santiago, Chile",
        desc: "Liderazgo y participación en proyectos internos y externos con Jira y Confluence. Desarrollo de APIs RESTful (Laravel, Flask, .NET) e interfaces en React, gestión de contenedores Docker, levantamiento de ambientes productivos/QA, actualización de sistemas de clientes e implementación de integración continua (CI/CD) con pipelines de Bitbucket y GitHub."
      },
      {
        period: "EN CURSO (MODALIDAD VESPERTINA)",
        role: "Ingeniería en Informática",
        company: "DUOC UC · Santiago, Chile",
        desc: "Certificaciones obtenidas: Arquitectura de Software · Análisis y Planificación de Requerimientos Informáticos · Programación de Software · Gestión de Proyectos Informáticos · Análisis y Desarrollo de Modelos de Datos · Calidad de Software."
      }
    ]
  },

  projects: [
    {
      id: "OWN-01",
      period: { start: "2026-03-17", end: "actual", label: "MAR 2026 — ACTUAL" },
      title: "STREAMIXOR // PLATAFORMA PARA COMUNIDADES DE TWITCH",
      category: "personal",
      threat: "PROYECTO PROPIO // FULL-STACK & REAL-TIME",
      desc: "Proyecto diseñado y desarrollado íntegramente por mí: plataforma autohospedada para administrar y gamificar comunidades de Twitch mediante bot multicanal, economía virtual, juegos, overlays para OBS, WebSockets y síntesis de voz local.",
      stack: ["FastAPI", "React", "TypeScript", "MariaDB", "Redis", "Docker", "Twitch API", "Piper TTS"],
      highlights: [
        "Arquitectura separada en API, bot, worker, frontend y servicio de síntesis de voz.",
        "Eventos en tiempo real para Twitch y OBS mediante WebSockets y Redis Streams.",
        "CI/CD, pruebas automatizadas, healthchecks, respaldos y recuperación productiva."
      ],
      demoUrl: "",
      repoUrl: "https://github.com/markawaii/cl_streamixor_app"
    },
    {
      id: "OWN-02",
      period: { start: "2026-10-14", end: "actual", label: "OCT 2026 — ACTUAL" },
      title: "RAMIFICA // CLIENTE GIT DE ESCRITORIO",
      category: "personal",
      threat: "PROYECTO PROPIO // TAURI & RUST",
      desc: "Proyecto diseñado y desarrollado íntegramente por mí: cliente Git de escritorio en español con staging, historial, sincronización remota, gestión segura de múltiples cuentas y resolución visual de conflictos por bloques.",
      stack: ["Tauri", "Rust", "TypeScript", "Git CLI", "Keyring nativo", "GitHub Actions"],
      highlights: [
        "Operaciones Git reales con staging, commits, fetch, pull seguro y push.",
        "Editor visual para resolver conflictos de merge, rebase, cherry-pick y revert.",
        "Credenciales protegidas por el llavero del sistema y builds multiplataforma."
      ],
      demoUrl: "",
      repoUrl: "https://github.com/markawaii/cl_ramifica_app"
    },
    {
      id: "CORP-01",
      period: { start: "2024-10-01", end: "actual", label: "OCT 2024 — ACTUAL" },
      title: "ARCOPRIME // GESTOR DE PLANTILLAS",
      category: "enterprise",
      threat: "CLIENTE: ARCOPRIME // DESARROLLADOR PRINCIPAL",
      desc: "Desarrollador principal de una plataforma empresarial para administrar plantillas y automatizar la generación, validación y procesamiento de documentos. Responsable de la evolución funcional, lógica backend e integración con servicios relacionados.",
      stack: ["PHP", "Laravel", "JavaScript", "MySQL", "Docker", "Procesamiento documental"],
      highlights: [
        "Diseño y evolución del flujo de administración de plantillas reutilizables.",
        "Validación de datos, generación documental y procesamiento asíncrono.",
        "Integración con almacenamiento y servicios empresariales relacionados."
      ],
      demoUrl: "",
      repoUrl: ""
    },
    {
      id: "CORP-02",
      period: { start: "2024-01-01", end: "actual", label: "ENE 2024 — ACTUAL" },
      title: "ARCOPRIME // MIDDLEWARE DE INTEGRACIONES",
      category: "enterprise",
      threat: "CLIENTE: ARCOPRIME // PROYECTO HEREDADO",
      desc: "Participación en la mantención y evolución de un middleware empresarial heredado que centraliza integraciones y flujos de información entre sistemas internos. Trabajo sobre modernización tecnológica, procesos de contratación y servicios de recursos humanos.",
      stack: ["PHP", "Laravel", "APIs REST", "MySQL", "Docker", "Integraciones empresariales"],
      highlights: [
        "Comprensión y evolución segura de una base de código heredada en producción.",
        "Centralización de contratos e intercambio de información entre sistemas.",
        "Modernización progresiva de Laravel y mantenimiento de compatibilidad operativa."
      ],
      demoUrl: "",
      repoUrl: ""
    },
    {
      id: "CORP-03",
      period: { start: "2025-07-01", end: "actual", label: "JUL 2025 — ACTUAL" },
      title: "ARCOPRIME // MOTOR DE WORKFLOWS",
      category: "enterprise",
      threat: "CLIENTE: ARCOPRIME // LÍDER TÉCNICO",
      desc: "Lideré el desarrollo del producto y coordiné al equipo frontend y backend mediante definición y asignación de tareas. Participé como desarrollador principal en un motor para configurar, ejecutar y supervisar workflows, integraciones y procesos automatizados.",
      stack: ["Laravel", "React", "TypeScript", "Redis", "Laravel Horizon", "Docker"],
      highlights: [
        "Liderazgo técnico de frontend y backend, planificación y asignación de tareas.",
        "Ejecución supervisada de workflows con colas, estados e historial de procesos.",
        "Integraciones mediante webhooks, tareas programadas y servicios externos."
      ],
      demoUrl: "",
      repoUrl: ""
    },
    {
      id: "CORP-04",
      period: { start: "2025-01-01", end: "actual", label: "ENE 2025 — ACTUAL" },
      title: "CONTRATACIÓN RED // MODERNIZACIÓN E INTEGRACIONES",
      category: "enterprise",
      threat: "CLIENTE: ARCOPRIME // DESARROLLADOR PRINCIPAL",
      desc: "Desarrollador principal de un sistema heredado para procesos de contratación. Implementé mejoras de CI/CD, integración con un proveedor de firma digital y un motor de workflows, además de reducir deuda técnica y estabilizar sus despliegues.",
      stack: ["Python", "Flask", "React", "JavaScript", "Firma digital", "Workflows", "CI/CD"],
      highlights: [
        "Integración del proceso de contratación con firma digital y workflows.",
        "Mejora del pipeline entre desarrollo, QA y producción.",
        "Reducción de deuda técnica y estabilización de un sistema heredado."
      ],
      demoUrl: "",
      repoUrl: ""
    },
    {
      id: "CORP-05",
      period: { start: "2022-10-01", end: "2023-12-31", label: "OCT 2022 — DIC 2023" },
      title: "IDEA UNO // API GLOBAL DE SERVICIOS",
      category: "enterprise",
      threat: "PROYECTO INTERNO: IDEA UNO // DESARROLLADOR PRINCIPAL",
      desc: "Desarrollador principal de una plataforma para centralizar servicios reutilizados por distintos sistemas de la empresa y mantenerlos desde un único lugar. Incluye una API de noticias e integraciones con Instagram, LinkedIn y Google Chat.",
      stack: ["PHP", "Laravel", "APIs REST", "API de noticias", "OAuth", "Instagram", "LinkedIn", "Google Chat", "Docker"],
      highlights: [
        "API de noticias con agregación RSS, proveedores y consulta por categorías.",
        "Centralización de servicios comunes para reducir duplicación entre proyectos.",
        "Integraciones sociales y de mensajería con flujos OAuth y procesos automatizados."
      ],
      demoUrl: "",
      repoUrl: ""
    }
  ],

  cyberware: [
    {
      category: "LENGUAJES, FRAMEWORKS & FRONTEND",
      slot: "MOD: CORE_STACK",
      items: [
        { name: "PHP", tier: "ESPECIALISTA", level: 96 },
        { name: "Laravel", tier: "ESPECIALISTA", level: 96 },
        { name: "JavaScript", tier: "AVANZADO", level: 92 },
        { name: "React", tier: "AVANZADO", level: 92 },
        { name: "HTML5", tier: "AVANZADO", level: 92 },
        { name: "Bootstrap", tier: "AVANZADO", level: 92 },
        { name: "Python", tier: "AVANZADO", level: 88 },
        { name: "Flask", tier: "AVANZADO", level: 88 },
        { name: "C#", tier: "AVANZADO", level: 88 },
        { name: ".NET", tier: "AVANZADO", level: 88 }
      ]
    },
    {
      category: "CLOUD, DEVOPS & SEGURIDAD",
      slot: "MOD: CLOUD_OPS",
      items: [
        { name: "AWS Lambda", tier: "AVANZADO", level: 90 },
        { name: "Serverless Framework", tier: "AVANZADO", level: 90 },
        { name: "Docker", tier: "AVANZADO", level: 92 },
        { name: "Ambientes Productivos / QA", tier: "AVANZADO", level: 92 },
        { name: "CI/CD", tier: "AVANZADO", level: 91 },
        { name: "GitHub Actions", tier: "AVANZADO", level: 91 },
        { name: "Bitbucket Pipelines", tier: "AVANZADO", level: 91 },
        { name: "JWT", tier: "AVANZADO", level: 91 },
        { name: "OAuth2", tier: "AVANZADO", level: 91 }
      ]
    },
    {
      category: "ARQUITECTURA, GESTIÓN & CALIDAD (QA)",
      slot: "MOD: ARCH_LEAD",
      items: [
        { name: "Jira", tier: "AVANZADO", level: 95 },
        { name: "Confluence", tier: "AVANZADO", level: 95 },
        { name: "Trello", tier: "AVANZADO", level: 95 },
        { name: "Liderazgo Técnico", tier: "AVANZADO", level: 95 },
        { name: "Arquitectura de Software", tier: "CERTIFICADO", level: 92 },
        { name: "Modelos de Datos", tier: "CERTIFICADO", level: 92 },
        { name: "APIs RESTful", tier: "AVANZADO", level: 94 },
        { name: "Postman", tier: "AVANZADO", level: 94 },
        { name: "Calidad de Software", tier: "AVANZADO", level: 94 }
      ]
    }
  ],

  contacts: [
    {
      label: "GITHUB // REPOSITORIOS & CÓDIGO",
      value: "github.com/markawaii",
      url: "https://github.com/markawaii"
    },
    {
      label: "LINKEDIN // PERFIL PROFESIONAL",
      value: "linkedin.com/in/ingveliz",
      url: "https://www.linkedin.com/in/ingveliz/"
    },
    {
      label: "EMAIL // CONTACTO DIRECTO",
      value: "ignaciovs.dev@gmail.com",
      url: "mailto:ignaciovs.dev@gmail.com"
    },
    {
      label: "CURRÍCULUM // FORMATO PDF OFICIAL",
      value: "Ignacio_Veliz_CV.pdf",
      url: "./Ignacio_Veliz_CV.pdf"
    }
  ]
};

/* ============================================================================
   SINTETIZADOR DE AUDIO DE INTERFAZ (WEB AUDIO API)
   ============================================================================ */
class CyberAudio {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playTone(freq = 800, duration = 0.05, type = "sawtooth", gainVal = 0.035) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (_) {}
  }

  hover() {
    this.playTone(1350, 0.025, "sine", 0.02);
  }

  click() {
    this.playTone(620, 0.05, "square", 0.035);
    setTimeout(() => this.playTone(1240, 0.04, "sawtooth", 0.03), 30);
  }

  success() {
    this.playTone(520, 0.07, "triangle", 0.04);
    setTimeout(() => this.playTone(880, 0.08, "triangle", 0.04), 65);
    setTimeout(() => this.playTone(1320, 0.12, "sawtooth", 0.04), 130);
  }

  emp() {
    this.playTone(140, 0.2, "sawtooth", 0.06);
    setTimeout(() => this.playTone(95, 0.16, "square", 0.05), 55);
  }
}

const sfx = new CyberAudio();

/* ============================================================================
   MOTOR DE ESCRITURA TERMINAL (TYPEWRITER SIN SALTOS DE LAYOUT NI PARPADEO)
   ============================================================================ */
const VIEW_TYPEWRITER_SELECTOR = [
  ".cp-kicker",
  ".cp-title",
  "#profile-name",
  "#profile-role",
  ".data-val",
  "#bio-paragraphs p",
  ".tl-period",
  ".tl-role",
  ".tl-company",
  ".tl-desc",
  ".gig-code",
  ".gig-title",
  ".gig-desc",
  ".cw-cat-title",
  ".cw-implant-top span:first-child",
  ".cp-toolbar-label",
  ".cp-toolbar-sub",
  "#db-preset-desc",
  ".bw-helper-text",
  ".bw-unlocked-seq",
  ".channel-label",
  ".channel-val"
].join(", ");

function typeElementText(el, delayMs = 0, durationMs = null) {
  if (!el) return;
  if (typeof el._twCancel === "function") {
    el._twCancel();
  }

  const fullText = (el.dataset.twText ?? el.textContent).replace(/\s+/g, " ").trim();
  if (!fullText) return;
  el.dataset.twText = fullText;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = fullText;
    return;
  }

  const dur = durationMs || Math.min(1850, Math.max(520, fullText.length * 22));

  const typedSpan = document.createElement("span");
  typedSpan.className = delayMs > 0 ? "tw-typed waiting" : "tw-typed";
  typedSpan.textContent = "";

  const ghostSpan = document.createElement("span");
  ghostSpan.className = "tw-ghost";
  ghostSpan.setAttribute("aria-hidden", "true");
  ghostSpan.textContent = fullText;

  el.textContent = "";
  el.appendChild(typedSpan);
  el.appendChild(ghostSpan);

  let rafId = null;
  let startTime = null;

  el._twCancel = () => {
    if (rafId) cancelAnimationFrame(rafId);
    el._twCancel = null;
    el.textContent = fullText;
  };

  const step = (now) => {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;

    if (elapsed < delayMs) {
      rafId = requestAnimationFrame(step);
      return;
    }

    typedSpan.classList.remove("waiting");
    const activeElapsed = elapsed - delayMs;
    const progress = Math.min(1, activeElapsed / dur);
    const charCount = Math.max(1, Math.floor(progress * fullText.length));

    typedSpan.textContent = fullText.slice(0, charCount);
    ghostSpan.textContent = fullText.slice(charCount);

    if (progress < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      el._twCancel = null;
      el.textContent = fullText;
    }
  };

  rafId = requestAnimationFrame(step);
}

function setTypedText(el, newText, durationMs = null) {
  if (!el) return;
  if (typeof el._twCancel === "function") {
    el._twCancel();
  }
  const clean = String(newText).replace(/\s+/g, " ").trim();
  el.dataset.twText = clean;
  el.textContent = clean;
  typeElementText(el, 0, durationMs);
}

const CORRUPT_GLYPHS = "0123456789ABCDEF#$%&@*+?~<>^=¥§";

function buildCorruptString(str) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === " ") {
      out += " ";
    } else {
      out += CORRUPT_GLYPHS[Math.floor(Math.random() * CORRUPT_GLYPHS.length)];
    }
  }
  return out;
}

function scrambleDecryptElement(el, delayMs = 0, durationMs = 1050) {
  if (!el) return;
  if (typeof el._scCancel === "function") {
    el._scCancel();
  }

  const fullText = el.dataset.origChip || el.textContent;
  if (!fullText) return;
  el.dataset.origChip = fullText;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.classList.remove("decrypting");
    el.textContent = fullText;
    return;
  }

  const decodedSpan = document.createElement("span");
  decodedSpan.className = "sc-decoded";
  decodedSpan.textContent = "";

  const corruptSpan = document.createElement("span");
  corruptSpan.className = "sc-corrupt";
  corruptSpan.textContent = buildCorruptString(fullText);

  el.textContent = "";
  el.classList.add("decrypting");
  el.appendChild(decodedSpan);
  el.appendChild(corruptSpan);

  let rafId = null;
  let startTime = null;
  let lastScrambleTick = 0;

  el._scCancel = () => {
    if (rafId) cancelAnimationFrame(rafId);
    el._scCancel = null;
    el.classList.remove("decrypting");
    el.textContent = fullText;
  };

  const step = (now) => {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;

    if (elapsed < delayMs) {
      if (now - lastScrambleTick >= 55) {
        lastScrambleTick = now;
        corruptSpan.textContent = buildCorruptString(fullText);
      }
      rafId = requestAnimationFrame(step);
      return;
    }

    const activeElapsed = elapsed - delayMs;
    const progress = Math.min(1, activeElapsed / durationMs);
    const lockedCount = Math.floor(progress * fullText.length);

    if (progress < 1) {
      decodedSpan.textContent = fullText.slice(0, lockedCount);
      if (now - lastScrambleTick >= 45) {
        lastScrambleTick = now;
        corruptSpan.textContent = buildCorruptString(fullText.slice(lockedCount));
      }
      rafId = requestAnimationFrame(step);
    } else {
      el._scCancel = null;
      el.classList.remove("decrypting");
      el.textContent = fullText;
    }
  };

  rafId = requestAnimationFrame(step);
}

function animateContainerTexts(containerEl, customSelector = null) {
  if (!containerEl) return;
  const selector = customSelector || VIEW_TYPEWRITER_SELECTOR;
  const nodes = containerEl.querySelectorAll(selector);
  nodes.forEach((el, idx) => {
    typeElementText(el, Math.min(idx * 65, 520));
  });

  // Efecto de datos corruptos desencriptándose para los chips de tecnologías (.stack-chip)
  if (!customSelector) {
    const chips = containerEl.querySelectorAll(".stack-chip");
    chips.forEach((chip, idx) => {
      scrambleDecryptElement(chip, idx * 75, 1050);
    });
  }
}

/* ============================================================================
   INICIALIZACIÓN DEL HUD
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initIntrusionGate();
  renderProfileAndHUD();
  renderProjects("all");
  renderProjectTimeline();
  renderProjectFolders();
  initProjectDetailsModal();
  renderCyberware();
  renderContacts();
  initBlackwallSection();
  initDaemonNavigation();
  initProjectViewToggle();
  initDeveloperTools();
  initBreachProtocol();
  initClockAndTickers();
  initSystemControls();
});

/* ============================================================================
   1. RENDERIZADO DE FICHA KIROSHI, RAM Y BIO
   ============================================================================ */
function renderProfileAndHUD() {
  const { profile } = PORTFOLIO_DATA;

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) {
      el.dataset.twText = String(val);
      el.textContent = val;
    }
  };

  setTxt("hud-level", profile.level);
  setTxt("hud-sc", profile.streetCred);
  setTxt("hud-location", profile.location);
  setTxt("profile-name", profile.name);
  setTxt("profile-role", profile.role);
  setTxt("profile-affiliation", profile.affiliation);
  setTxt("profile-specialty", profile.specialty);
  setTxt("profile-bounty", profile.bounty);

  updateRamDisplay(2);

  const attrContainer = document.getElementById("attributes-list");
  if (attrContainer) {
    attrContainer.innerHTML = profile.attributes
      .map(
        (attr) => `
        <div class="attr-item">
          <div class="attr-top">
            <span class="attr-name">${attr.name}</span>
            <span class="attr-score">${attr.score}</span>
          </div>
          <div class="attr-bar">
            <div class="attr-bar-fill" style="width: ${attr.percent}%"></div>
          </div>
        </div>
      `
      )
      .join("");
  }

  const bioContainer = document.getElementById("bio-paragraphs");
  if (bioContainer) {
    const bio = currentLanguage === "en" ? profile.bioEn : profile.bio;
    bioContainer.innerHTML = bio.map((p) => `<p>${p}</p>`).join("");
  }

  const timelineContainer = document.getElementById("experience-timeline");
  if (timelineContainer) {
    timelineContainer.innerHTML = profile.experience
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="tl-period">${item.period}</div>
          <div class="tl-role">${item.role}</div>
          <div class="tl-company">${item.company}</div>
          <p class="tl-desc">${item.desc}</p>
        </div>
      `
      )
      .join("");
  }
}

function updateRamDisplay(usedUnits) {
  const total = PORTFOLIO_DATA.profile.totalRam;
  const available = Math.max(0, total - usedUnits);
  const ramSlots = document.getElementById("ram-slots");
  const ramCounter = document.getElementById("ram-counter");

  if (ramCounter) ramCounter.textContent = `${available} / ${total}`;
  if (!ramSlots) return;

  ramSlots.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const slot = document.createElement("span");
    slot.className = `ram-unit ${i >= available ? "used" : ""}`;
    ramSlots.appendChild(slot);
  }
}

/* ============================================================================
   2. RENDERIZADO DE PROYECTOS (GIGS) Y FILTROS
   ============================================================================ */
function renderProjects(filter = "all", animate = false) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const items =
    filter === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  grid.innerHTML = items
    .map(
      (gig) => {
      const copy = getLocalizedProject(gig);
      return `
      <div class="gig-card">
        <div>
          <div class="gig-top">
            <span class="gig-code">PROJECT_ID // ${gig.id}</span>
            <span class="gig-threat">${copy.threat}</span>
          </div>
          <h3 class="gig-title">${copy.title}</h3>
          <div class="gig-period">${copy.periodLabel}</div>
          <p class="gig-desc">${copy.desc}</p>
        </div>
        <div>
          <div class="gig-stack">
            ${gig.stack.map((tech) => `<span class="stack-chip">${tech}</span>`).join("")}
          </div>
          <div class="gig-links">
            <button type="button" class="gig-link gig-details-btn" data-project-details="${gig.id}">${currentLanguage === "en" ? "VIEW DETAILS" : "VER DETALLES"} [+]</button>
            ${gig.demoUrl ? `<a href="${gig.demoUrl}" target="_blank" rel="noopener" class="gig-link">LIVE_DEMO [↗]</a>` : ""}
            ${gig.repoUrl
              ? `<a href="${gig.repoUrl}" target="_blank" rel="noopener" class="gig-link">SOURCE_CODE [&lt;/&gt;]</a>`
              : `<span class="gig-link gig-link-private">${currentLanguage === "en" ? "PRIVATE CODE // PROTECTED INFORMATION" : "CÓDIGO PRIVADO // INFORMACIÓN PROTEGIDA"}</span>`}
          </div>
        </div>
      </div>
    `; }
    )
    .join("");

  grid.querySelectorAll(".stack-chip").forEach((chip) => {
    chip.addEventListener("mouseenter", () => {
      if (!chip._scCancel) {
        scrambleDecryptElement(chip, 0, 680);
      }
    });
  });

  if (animate) {
    animateContainerTexts(grid);
  }

  grid.querySelectorAll("[data-project-details]").forEach((btn) => {
    btn.addEventListener("click", () => openProjectDetailsModal(btn.dataset.projectDetails));
  });
}

function renderProjectTimeline() {
  const timeline = document.getElementById("projects-timeline");
  if (!timeline) return;
  const projects = [...PORTFOLIO_DATA.projects]
    .sort((a, b) => a.period.start.localeCompare(b.period.start));
  const rangeStart = projects[0]?.period.start.slice(0, 4) || "—";
  const rangeEnd = currentLanguage === "en" ? "PRESENT" : "ACTUAL";

  timeline.innerHTML = `
    <div class="timeline-command-bar">
      <span>${currentLanguage === "en" ? "PROFESSIONAL TRAJECTORY" : "TRAYECTORIA PROFESIONAL"}</span>
      <span>${rangeStart} — ${rangeEnd}</span>
    </div>
    <div class="timeline-scroll">
      <div class="timeline-axis" role="tablist" aria-label="${currentLanguage === "en" ? "Project chronology" : "Cronología de proyectos"}">
        ${projects.map((project, index) => {
      const copy = getLocalizedProject(project);
      return `
          <article class="project-timeline-item" role="presentation">
            <div class="timeline-period">${copy.periodLabel}</div>
            <button id="timeline-tab-${project.id}" type="button" class="timeline-node${index === 0 ? " active" : ""}"
              role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="timeline-detail"
              tabindex="${index === 0 ? "0" : "-1"}" data-timeline-project="${project.id}">
              <span class="timeline-marker" aria-hidden="true"></span>
              <span class="timeline-index">${String(index + 1).padStart(2, "0")}</span>
              <span class="timeline-node-copy">
                <strong>${copy.title}</strong>
                <small>${project.id}</small>
              </span>
            </button>
          </article>`;
        }).join("")}
      </div>
    </div>
    <section id="timeline-detail" class="timeline-detail" role="tabpanel" aria-live="polite"></section>`;

  const detail = timeline.querySelector("#timeline-detail");
  const nodes = [...timeline.querySelectorAll("[data-timeline-project]")];
  const selectProject = (projectId, moveFocus = false) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project || !detail) return;
    const copy = getLocalizedProject(project);
    nodes.forEach((node) => {
      const active = node.dataset.timelineProject === projectId;
      node.classList.toggle("active", active);
      node.setAttribute("aria-selected", String(active));
      node.tabIndex = active ? 0 : -1;
      if (active && moveFocus) {
        node.focus();
        node.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });
    detail.setAttribute("aria-labelledby", `timeline-tab-${projectId}`);
    detail.innerHTML = `
      <div class="timeline-detail-accent" aria-hidden="true"></div>
      <div class="timeline-detail-main">
        <div class="gig-code">${project.id} // ${copy.threat}</div>
        <h3>${copy.title}</h3>
        <p>${copy.desc}</p>
        <div class="gig-stack">${project.stack.map((tech) => `<span class="stack-chip">${tech}</span>`).join("")}</div>
      </div>
      <aside class="timeline-detail-side">
        <span>${currentLanguage === "en" ? "PERIOD" : "PERIODO"}</span>
        <strong>${copy.periodLabel}</strong>
        <button type="button" class="gig-link gig-details-btn" data-project-details="${project.id}">${currentLanguage === "en" ? "OPEN FILE" : "ABRIR EXPEDIENTE"} [↗]</button>
      </aside>`;
    detail.querySelector("[data-project-details]")?.addEventListener("click", () => openProjectDetailsModal(projectId));
  };

  nodes.forEach((node, index) => {
    node.addEventListener("click", () => selectProject(node.dataset.timelineProject));
    node.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let targetIndex = index;
      if (event.key === "ArrowLeft") targetIndex = (index - 1 + nodes.length) % nodes.length;
      if (event.key === "ArrowRight") targetIndex = (index + 1) % nodes.length;
      if (event.key === "Home") targetIndex = 0;
      if (event.key === "End") targetIndex = nodes.length - 1;
      selectProject(nodes[targetIndex].dataset.timelineProject, true);
    });
  });
  if (projects[0]) selectProject(projects[0].id);
}

function renderProjectFolders() {
  const explorer = document.getElementById("projects-folders");
  if (!explorer) return;
  const groups = [
    { key: "enterprise", label: currentLanguage === "en" ? "CORPORATE SYSTEMS" : "SISTEMAS EMPRESARIALES" },
    { key: "personal", label: currentLanguage === "en" ? "PERSONAL PROJECTS" : "PROYECTOS PERSONALES" }
  ];

  explorer.innerHTML = `
    <div class="folder-explorer-bar">
      <span>${currentLanguage === "en" ? "PROJECT ARCHIVE" : "ARCHIVO DE PROYECTOS"}</span>
      <span>${PORTFOLIO_DATA.projects.length.toString().padStart(2, "0")} ${currentLanguage === "en" ? "FILES" : "EXPEDIENTES"}</span>
    </div>
    ${groups.map((group) => {
      const projects = PORTFOLIO_DATA.projects.filter((project) => project.category === group.key);
      return `
        <section class="folder-group" aria-labelledby="folder-group-${group.key}">
          <h3 id="folder-group-${group.key}" class="folder-group-title">// ${group.label}</h3>
          <div class="folder-grid">
            ${projects.map((project) => {
              const copy = getLocalizedProject(project);
              return `
                <article class="project-folder">
                  <button type="button" class="project-folder-tab" data-project-details="${project.id}" aria-label="${currentLanguage === "en" ? "View details for" : "Ver detalles de"} ${copy.title}">
                    <span class="folder-tab-edge" aria-hidden="true"></span>
                    <span class="folder-code">${project.id}</span>
                    <span class="folder-name">${copy.title}</span>
                    <span class="folder-state">${project.period.end === "actual" ? (currentLanguage === "en" ? "ACTIVE" : "ACTIVO") : (currentLanguage === "en" ? "ARCHIVED" : "ARCHIVADO")}</span>
                    <span class="folder-action">${currentLanguage === "en" ? "VIEW DETAILS" : "VER DETALLES"} [+]</span>
                  </button>
                </article>`;
            }).join("")}
          </div>
        </section>`;
    }).join("")}`;

  explorer.querySelectorAll("[data-project-details]").forEach((folder) => {
    folder.addEventListener("click", () => openProjectDetailsModal(folder.dataset.projectDetails));
  });
}

function getLocalizedProject(project) {
  if (currentLanguage !== "en") return { ...project, periodLabel: project.period.label };
  const role = project.threat
    .replace("PROYECTO PROPIO", "PERSONAL PROJECT")
    .replace("CLIENTE", "CLIENT")
    .replace("PROYECTO INTERNO", "INTERNAL PROJECT")
    .replace("DESARROLLADOR PRINCIPAL", "LEAD DEVELOPER")
    .replace("PROYECTO HEREDADO", "LEGACY PROJECT")
    .replace("LÍDER TÉCNICO", "TECH LEAD");
  const periodLabel = project.period.label
    .replace("ENE", "JAN")
    .replace("MAR", "MAR")
    .replace("JUL", "JUL")
    .replace("OCT", "OCT")
    .replace("DIC", "DEC")
    .replace("ACTUAL", "PRESENT");
  return { ...project, ...PROJECT_EN[project.id], threat: role, periodLabel };
}

function initProjectViewToggle() {
  const views = {
    grid: document.getElementById("projects-grid"),
    timeline: document.getElementById("projects-timeline"),
    folders: document.getElementById("projects-folders")
  };
  document.querySelectorAll("[data-project-view]").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedView = button.dataset.projectView;
      Object.entries(views).forEach(([name, view]) => view?.classList.toggle("hidden", name !== selectedView));
      document.querySelectorAll("[data-project-view]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });
  });
  const requestedView = new URLSearchParams(window.location.search).get("view");
  if (["grid", "timeline", "folders"].includes(requestedView)) {
    document.getElementById("tab-button-gigs")?.click();
    document.querySelector(`[data-project-view="${requestedView}"]`)?.click();
  }
}

let projectModalTrigger = null;

function initProjectDetailsModal() {
  const modal = document.getElementById("project-details-modal");
  const closeBtn = document.getElementById("project-modal-close-btn");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeProjectDetailsModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeProjectDetailsModal();
  });

  window.addEventListener("keydown", (event) => {
    if (modal.classList.contains("hidden")) return;
    if (event.key === "Escape") {
      closeProjectDetailsModal();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = modal.querySelectorAll("button, a[href]");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function openProjectDetailsModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find((item) => item.id === projectId);
  const modal = document.getElementById("project-details-modal");
  if (!project || !modal) return;

  projectModalTrigger = document.activeElement;
  const copy = getLocalizedProject(project);
  const setModalText = (id, value) => {
    const element = document.getElementById(id);
    if (!element) return;
    if (typeof element._twCancel === "function") element._twCancel();
    if (typeof element._scCancel === "function") element._scCancel();
    element.dataset.twText = value;
    delete element.dataset.origChip;
    element.textContent = value;
  };
  setModalText("project-modal-code", `DOSSIER // ${project.id}`);
  setModalText("project-modal-title", copy.title);
  setModalText("project-modal-role", copy.threat);
  setModalText("project-modal-period", copy.periodLabel);
  setModalText("project-modal-summary", copy.desc);
  document.getElementById("project-modal-highlights").innerHTML = project.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");
  document.getElementById("project-modal-stack").innerHTML = project.stack
    .map((tech) => `<span class="stack-chip">${tech}</span>`)
    .join("");

  const repoLink = document.getElementById("project-modal-repo");
  const modalFooter = document.getElementById("project-modal-footer");
  if (project.repoUrl) {
    repoLink.href = project.repoUrl;
    repoLink.classList.remove("hidden");
    modalFooter?.classList.remove("hidden");
  } else {
    repoLink.removeAttribute("href");
    repoLink.classList.add("hidden");
    modalFooter?.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.querySelector(".hud-container")?.setAttribute("inert", "");
  document.getElementById("project-modal-close-btn").focus();
  requestAnimationFrame(() => animateProjectModalContent(modal));
  sfx.click();
}

function animateProjectModalContent(modal) {
  if (!modal || modal.classList.contains("hidden")) return;
  const typedTargets = [
    ["#project-modal-code", 0, 420],
    ["#project-modal-title", 45, 620],
    ["#project-modal-period", 90, 440],
    ["#project-modal-summary", 150, 920]
  ];

  typedTargets.forEach(([selector, delay, duration]) => {
    typeElementText(modal.querySelector(selector), delay, duration);
  });
  modal.querySelectorAll("#project-modal-highlights li").forEach((item, index) => {
    typeElementText(item, 250 + (index * 85), 620);
  });

  scrambleDecryptElement(modal.querySelector("#project-modal-role"), 80, 680);
  modal.querySelectorAll("#project-modal-stack .stack-chip").forEach((chip, index) => {
    scrambleDecryptElement(chip, 180 + (index * 55), 720);
  });
}

function closeProjectDetailsModal() {
  const modal = document.getElementById("project-details-modal");
  if (!modal || modal.classList.contains("hidden")) return;
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  document.querySelector(".hud-container")?.removeAttribute("inert");
  if (projectModalTrigger && typeof projectModalTrigger.focus === "function") {
    projectModalTrigger.focus();
  }
  projectModalTrigger = null;
}

const projectFiltersEl = document.getElementById("project-filters");
if (projectFiltersEl) {
  projectFiltersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-pill");
    if (!btn) return;
    sfx.click();
    document.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter, true);
  });
}

/* ============================================================================
   3. RENDERIZADO DE TECH STACK (CYBERWARE)
   ============================================================================ */
function renderCyberware() {
  const container = document.getElementById("cyberware-grid");
  if (!container) return;
  const en = currentLanguage === "en";
  const shortLabels = en ? ["CORE", "CLOUD", "ARCHITECTURE"] : ["CORE", "CLOUD", "ARQUITECTURA"];
  const descriptions = en
    ? CYBERWARE_EN.map((category) => category.description)
    : [
        "Backend robusto, interfaces web y servicios empresariales mantenibles.",
        "Entrega continua, infraestructura cloud y operación segura en producción.",
        "Diseño de sistemas, coordinación técnica y prácticas de calidad de software."
      ];

  container.innerHTML = `
    <div class="stack-category-tabs" role="tablist" aria-label="${en ? "Technology categories" : "Categorías tecnológicas"}">
      ${PORTFOLIO_DATA.cyberware.map((category, index) => `
        <button type="button" class="stack-category-tab${index === 0 ? " active" : ""}" role="tab"
          aria-selected="${index === 0 ? "true" : "false"}" aria-controls="stack-category-panel"
          tabindex="${index === 0 ? "0" : "-1"}" data-stack-category="${index}">
          <span>0${index + 1}</span>${shortLabels[index]}
        </button>`).join("")}
    </div>
    <section id="stack-category-panel" class="cw-category-card stack-category-panel" role="tabpanel"></section>`;

  const panel = container.querySelector("#stack-category-panel");
  const tabs = [...container.querySelectorAll("[data-stack-category]")];
  const selectCategory = (categoryIndex, moveFocus = false) => {
    const cat = PORTFOLIO_DATA.cyberware[categoryIndex];
    const localized = CYBERWARE_EN[categoryIndex];
    if (!cat || !panel) return;
    const categoryName = en ? localized.category : cat.category;
    panel.dataset.category = String(categoryIndex);
    tabs.forEach((tab, index) => {
      const active = index === categoryIndex;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && moveFocus) tab.focus();
    });
    panel.setAttribute("aria-labelledby", tabs[categoryIndex].id || "");
    panel.innerHTML = `
      <div class="cw-cat-header">
        <span class="cw-cat-index">0${categoryIndex + 1}</span>
        <div><h3 class="cw-cat-title">${categoryName}</h3><span class="cw-cat-slot">${cat.slot}</span></div>
      </div>
      <p class="cw-cat-description">${descriptions[categoryIndex]}</p>
      <div class="cw-items-list">
        ${cat.items.map((item, itemIndex) => {
          const itemName = en ? localized.items[itemIndex] : item.name;
          const tier = en
            ? ({ ESPECIALISTA: "SPECIALIST", AVANZADO: "ADVANCED", CERTIFICADO: "CERTIFIED" }[item.tier] || item.tier)
            : item.tier;
          return `<div class="cw-implant">
            <div class="cw-implant-top"><span>${itemName}</span><span class="cw-tier">${tier}</span></div>
            <div class="cw-bar-bg" role="progressbar" aria-label="${itemName}: ${tier}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${item.level}">
              <div class="cw-bar-fill" style="width:${item.level}%"></div>
            </div>
          </div>`;
        }).join("")}
      </div>`;
    animateContainerTexts(panel, ".cw-cat-title, .cw-cat-description, .cw-implant-top span:first-child");
  };

  tabs.forEach((tab, index) => {
    tab.id = `stack-category-tab-${index}`;
    tab.addEventListener("click", () => selectCategory(index));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let targetIndex = index;
      if (event.key === "ArrowLeft") targetIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "ArrowRight") targetIndex = (index + 1) % tabs.length;
      if (event.key === "Home") targetIndex = 0;
      if (event.key === "End") targetIndex = tabs.length - 1;
      selectCategory(targetIndex, true);
    });
  });
  selectCategory(0);
}

/* ============================================================================
   4. RENDERIZADO DE CONTACTO (HOLOCALL)
   ============================================================================ */
function renderContacts() {
  const list = document.getElementById("contact-links");
  if (list) {
    list.innerHTML = PORTFOLIO_DATA.contacts
      .map(
        (c) => `
        <a href="${c.url}" target="_blank" rel="noopener" class="channel-card">
          <div>
            <div class="channel-label">${c.label}</div>
            <div class="channel-val">${c.value}</div>
          </div>
          <span style="font-family: var(--font-mono); color: var(--cp-cyan);">[LINK ↗]</span>
        </a>
      `
      )
      .join("");
  }

  const form = document.getElementById("holocall-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const handle = document.getElementById("sender-handle").value;
      const email = document.getElementById("sender-email").value;
      const message = document.getElementById("sender-msg").value;
      const submitButton = document.getElementById("contact-submit-btn");
      submitButton.disabled = true;
      submitButton.textContent = currentLanguage === "en" ? "SENDING..." : "ENVIANDO...";
      feedback.classList.remove("hidden");
      try {
        const response = await fetch("https://formsubmit.co/ajax/ignaciovs.dev@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: handle, email, message, _subject: `Portafolio — ${handle}`, _template: "table" })
        });
        if (!response.ok) throw new Error("No se pudo enviar el formulario");
        feedback.textContent = currentLanguage === "en" ? ">> MESSAGE SENT SUCCESSFULLY." : ">> MENSAJE ENVIADO CORRECTAMENTE.";
        form.reset();
        sfx.success();
      } catch {
        feedback.textContent = currentLanguage === "en" ? ">> DELIVERY FAILED. OPENING YOUR EMAIL CLIENT AS A BACKUP." : ">> FALLÓ EL ENVÍO. ABRIENDO TU CLIENTE DE CORREO COMO RESPALDO.";
        const subject = encodeURIComponent(`Contacto desde el portafolio — ${handle}`);
        const body = encodeURIComponent(`Nombre / empresa: ${handle}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:ignaciovs.dev@gmail.com?subject=${subject}&body=${body}`;
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = currentLanguage === "en" ? "SEND MESSAGE" : "ENVIAR MENSAJE";
      }
    });
  }
}

/* ============================================================================
   5. NAVEGACIÓN DE DAEMONS (QUICKHACKING TABS)
   ============================================================================ */
function isTokenToolViewActive() {
  return document.getElementById("tab-breach")?.classList.contains("active") === true
    && document.getElementById("tool-token")?.classList.contains("active") === true;
}

function syncTokenShortcutVisibility() {
  document.getElementById("token-shortcut-hint")?.classList.toggle("hidden", !isTokenToolViewActive());
}

function initDaemonNavigation() {
  const tabs = document.querySelectorAll(".daemon-tab");
  const panels = document.querySelectorAll(".deck-panel");
  const inspectorEl = document.getElementById("inspector-text");

  const activateTab = (tabName) => {
    const targetTab = Array.from(tabs).find((t) => t.dataset.tab === tabName);
    if (!targetTab || targetTab.classList.contains("active")) return;

    sfx.click();

    tabs.forEach((t) => {
      const isActive = t === targetTab;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", String(isActive));
      t.tabIndex = isActive ? 0 : -1;
    });

    const ramCost = parseInt(targetTab.dataset.ram || "2", 10);
    updateRamDisplay(ramCost);

    panels.forEach((p) => {
      p.classList.remove("active");
      p.hidden = true;
    });
    const activePanel = document.getElementById(`tab-${tabName}`);
    if (activePanel) {
      activePanel.classList.add("active");
      activePanel.hidden = false;
      animateContainerTexts(activePanel);
    }

    if (tabName === "breach" && document.querySelector(".tool-tab.active")?.dataset.tool === "token") {
      startAutonomousBreachCycle();
    } else {
      clearInterval(breachState.stepTimer);
      clearInterval(breachState.countdownInterval);
    }
    syncTokenShortcutVisibility();

    if (inspectorEl && targetTab.dataset.desc) {
      inspectorEl.textContent = `MÓDULO ACTIVO: ${targetTab.dataset.desc}`;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => sfx.hover());
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  });

  document.getElementById("daemon-tabs")?.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const tabList = Array.from(tabs).filter((tab) => !tab.hidden);
    const currentIndex = tabList.indexOf(document.activeElement);
    let nextIndex = currentIndex;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabList.length - 1;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabList.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabList.length) % tabList.length;
    tabList[nextIndex].focus();
    activateTab(tabList[nextIndex].dataset.tab);
  });

  document.querySelectorAll("[data-goto-tab]").forEach((btn) => {
    btn.addEventListener("click", () => activateTab(btn.dataset.gotoTab));
  });

  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    const gate = document.getElementById("intrusion-gate");
    if (gate && !gate.classList.contains("hidden")) return;
    const map = { "1": "dossier", "2": "gigs", "3": "cyberware", "4": "blackwall", "5": "holocall", "6": "breach" };
    if (map[e.key]) activateTab(map[e.key]);
  });
}

/* ============================================================================
   6. HERRAMIENTAS DE DESARROLLO
   ============================================================================ */
function initDeveloperTools() {
  const toolTabs = Array.from(document.querySelectorAll(".tool-tab"));
  const toolPanels = Array.from(document.querySelectorAll(".tool-panel"));
  if (!toolTabs.length) return;

  const activateTool = (toolName, moveFocus = false) => {
    toolTabs.forEach((tab) => {
      const isActive = tab.dataset.tool === toolName;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      if (isActive && moveFocus) tab.focus();
    });
    toolPanels.forEach((panel) => {
      const isActive = panel.id === `tool-${toolName}`;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });

    if (toolName === "token") {
      startAutonomousBreachCycle();
    } else {
      clearInterval(breachState.stepTimer);
      clearInterval(breachState.countdownInterval);
    }
    syncTokenShortcutVisibility();
    sfx.click();
  };

  toolTabs.forEach((tab) => tab.addEventListener("click", () => activateTool(tab.dataset.tool)));
  document.querySelector(".tools-nav")?.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = toolTabs.indexOf(document.activeElement);
    let next = current < 0 ? 0 : current;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = toolTabs.length - 1;
    if (event.key === "ArrowRight") next = (next + 1) % toolTabs.length;
    if (event.key === "ArrowLeft") next = (next - 1 + toolTabs.length) % toolTabs.length;
    activateTool(toolTabs[next].dataset.tool, true);
  });

  const calculateRutDv = (rutNumber) => {
    let sum = 0;
    let multiplier = 2;
    String(rutNumber).split("").reverse().forEach((digit) => {
      sum += Number(digit) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    });
    const result = 11 - (sum % 11);
    return result === 11 ? "0" : result === 10 ? "K" : String(result);
  };

  const formatRut = (rutNumber, dv) =>
    `${Number(rutNumber).toLocaleString("es-CL")}-${String(dv).toUpperCase()}`;

  document.getElementById("generate-rut-btn")?.addEventListener("click", () => {
    const random = new Uint32Array(1);
    crypto.getRandomValues(random);
    const rutNumber = 5000000 + (random[0] % 20000000);
    document.getElementById("rut-generated-output").textContent = formatRut(rutNumber, calculateRutDv(rutNumber));
    sfx.success();
  });

  document.getElementById("validate-rut-btn")?.addEventListener("click", () => {
    const input = document.getElementById("rut-input");
    const result = document.getElementById("rut-validation-result");
    const cleaned = input.value.replace(/[^0-9kK]/g, "").toUpperCase();
    if (cleaned.length < 2) {
      setUtilityFeedback(result, "Ingresa un RUT válido para comprobar.", false);
      return;
    }
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    const valid = calculateRutDv(number) === dv;
    setUtilityFeedback(result, valid ? `RUT válido: ${formatRut(number, dv)}` : "RUT inválido: el dígito verificador no coincide.", valid);
  });

  document.getElementById("generate-uuid-btn")?.addEventListener("click", () => {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    document.getElementById("uuid-output").textContent = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    sfx.success();
  });

  const transformJson = (spacing) => {
    const input = document.getElementById("json-input");
    const result = document.getElementById("json-result");
    try {
      input.value = JSON.stringify(JSON.parse(input.value), null, spacing);
      setUtilityFeedback(result, "JSON válido y procesado correctamente.", true);
    } catch (error) {
      setUtilityFeedback(result, `JSON inválido: ${error.message}`, false);
    }
  };
  document.getElementById("format-json-btn")?.addEventListener("click", () => transformJson(2));
  document.getElementById("minify-json-btn")?.addEventListener("click", () => transformJson(0));

  document.getElementById("generate-hash-btn")?.addEventListener("click", async () => {
    const value = document.getElementById("hash-input").value;
    const output = document.getElementById("hash-output");
    if (!value) {
      output.textContent = "Ingresa texto para generar el hash.";
      return;
    }
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
    output.textContent = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
    sfx.success();
  });

  document.getElementById("encode-base64-btn")?.addEventListener("click", () => {
    const value = document.getElementById("base64-input").value;
    const bytes = new TextEncoder().encode(value);
    let binary = "";
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    document.getElementById("base64-output").textContent = btoa(binary);
    setUtilityFeedback(document.getElementById("base64-result"), "Texto codificado correctamente.", true);
  });

  document.getElementById("decode-base64-btn")?.addEventListener("click", () => {
    const result = document.getElementById("base64-result");
    try {
      const binary = atob(document.getElementById("base64-input").value.trim());
      const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
      document.getElementById("base64-output").textContent = new TextDecoder().decode(bytes);
      setUtilityFeedback(result, "Base64 decodificado correctamente.", true);
    } catch {
      setUtilityFeedback(result, "El contenido no es Base64 válido.", false);
    }
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      const value = "value" in target ? target.value : target.textContent;
      if (!value || value === "—") return;
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        fallbackCopyText(value);
      }
      const original = button.textContent;
      button.textContent = "COPIADO ✓";
      sfx.success();
      setTimeout(() => { button.textContent = original; }, 1200);
    });
  });

  const requestedTool = new URLSearchParams(window.location.search).get("tool");
  if (toolTabs.some((tab) => tab.dataset.tool === requestedTool)) {
    document.getElementById("tab-button-breach")?.click();
    activateTool(requestedTool);
  }
}

function setUtilityFeedback(element, message, isValid) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("success", isValid);
  element.classList.toggle("error", !isValid);
}

/* ============================================================================
   6. ALGORITMO AUTÓNOMO: BREACH PROTOCOL // DATABASE & SECRET TOKEN GENERATOR
   ============================================================================ */
const HEX_POOL = ["1C", "BD", "55", "E9", "7A", "FF", "A4", "3E", "9B", "C2"];
const BUFFER_MAX = 6;
const TOKEN_ROTATION_MS = 15000;

// Caracteres seguros (No look-alikes: sin 0, O, 1, l, I; URI & Terminal-safe)
const CHAR_ALPHA = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"; // 49 chars
const CHAR_NUM = "23456789"; // 8 chars
const CHAR_SYM = "-._"; // 3 chars (RFC 3986 unreserved)
const CHAR_FULL_POOL = CHAR_ALPHA + CHAR_NUM + CHAR_SYM; // 60 chars (~5.90689 bits/char -> 24 chars = 142 bits)

const DB_PRESETS = {
  postgres: {
    name: "PostgreSQL",
    defaultLen: 24,
    desc: (len) =>
      `PostgreSQL has no password length limit, so ${len} characters gives you plenty of entropy. Drops straight into a postgres:// connection string, psql, and .env files.`,
    connTemplate: (tok) => `postgresql://appuser:${tok}@localhost:5432/mydb`
  },
  mysql: {
    name: "MySQL",
    defaultLen: 24,
    desc: (len) =>
      `MySQL 8.0+ caching_sha2_password supports up to 255 characters. ${len} URI-safe characters avoid shell escaping issues in mysql CLI and connection URLs.`,
    connTemplate: (tok) => `mysql://appuser:${tok}@localhost:3306/mydb`
  },
  sqlserver: {
    name: "SQL Server",
    defaultLen: 24,
    desc: (len) =>
      `SQL Server passwords support up to 128 characters. ${len} characters without semicolons or quotes ensure ADO.NET and ODBC strings never break.`,
    connTemplate: (tok) => `sqlserver://localhost:1433;database=mydb;user=appuser;password=${tok};`
  },
  mongodb: {
    name: "MongoDB",
    defaultLen: 24,
    desc: (len) =>
      `SCRAM-SHA-256 ready. ${len} RFC-3986 unreserved characters mean zero percent-encoding required in mongodb+srv:// cluster connection strings.`,
    connTemplate: (tok) => `mongodb://appuser:${tok}@localhost:27017/mydb?authSource=admin`
  },
  redis: {
    name: "Redis",
    defaultLen: 32,
    desc: (len) =>
      `Redis is ultra-fast in memory, so ${len} high-entropy characters are ideal for requirepass and ACL user secrets in redis:// URLs.`,
    connTemplate: (tok) => `redis://default:${tok}@localhost:6379/0`
  },
  custom: {
    name: "Custom",
    defaultLen: 24,
    desc: (len) =>
      `${len}-character cryptographic token ready for JWT secrets, API keys, webhook signatures, and production .env files.`,
    connTemplate: (tok) => `DATABASE_URL="postgresql://appuser:${tok}@localhost:5432/mydb"`
  }
};

let breachState = {
  preset: "postgres",
  tokenLength: 24,
  targetToken: "",
  currentToken: "",
  scrambleSeed: "",
  grid: [],
  buffer: [],
  mode: "row",
  activeIndex: 0,
  lastPickedCoord: null, // {r, c}
  hoverCoord: null, // {r, c}
  usedCells: new Map(),
  autoCycle: true,
  stepTimer: null,
  countdownInterval: null,
  remainingMs: TOKEN_ROTATION_MS,
  scanning: false,
  cellEls: [],
  slotEls: []
};

function ensureBreachMatrixDOM() {
  const matrixEl = document.getElementById("hex-matrix");
  const bufferEl = document.getElementById("buffer-slots");
  if (!matrixEl || !bufferEl) return;

  if (breachState.cellEls.length === 25 && breachState.slotEls.length === BUFFER_MAX) {
    return;
  }

  matrixEl.innerHTML = "";
  breachState.cellEls = [];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const cell = document.createElement("div");
      cell.className = "hex-cell";
      const valSpan = document.createElement("span");
      const tagSpan = document.createElement("span");
      tagSpan.className = "hex-step-tag";
      cell.appendChild(valSpan);
      cell.appendChild(tagSpan);

      cell.addEventListener("mouseenter", () => {
        breachState.hoverCoord = { r, c };
        renderBreachUI();
      });
      cell.addEventListener("mouseleave", () => {
        breachState.hoverCoord = null;
        renderBreachUI();
      });
      cell.addEventListener("click", () => {
        handleManualBreachCellClick(r, c);
      });

      matrixEl.appendChild(cell);
      breachState.cellEls.push({ cell, valSpan, tagSpan, r, c });
    }
  }

  bufferEl.innerHTML = "";
  breachState.slotEls = [];
  for (let i = 0; i < BUFFER_MAX; i++) {
    const slot = document.createElement("div");
    slot.className = "buffer-slot";
    bufferEl.appendChild(slot);
    breachState.slotEls.push(slot);
  }
}

function handleManualBreachCellClick(r, c) {
  clearInterval(breachState.stepTimer);
  clearInterval(breachState.countdownInterval);

  // Si ya había terminado el ciclo anterior, iniciar uno manual desde este clic
  if (!breachState.scanning || breachState.buffer.length >= BUFFER_MAX) {
    breachState.buffer = [];
    breachState.usedCells = new Map();
    breachState.scanning = true;
    breachState.targetToken = synthesizeSecretToken(breachState.tokenLength);
    breachState.scrambleSeed = generateHexScrambleString(breachState.tokenLength);
    breachState.mode = "row";
    breachState.activeIndex = r;
  }

  const key = `${r}-${c}`;
  if (breachState.usedCells.has(key)) return;

  // Permitir clic en el eje activo (o ajustar eje si el usuario inicia en otra celda)
  const inActiveAxis =
    (breachState.mode === "row" && r === breachState.activeIndex) ||
    (breachState.mode === "col" && c === breachState.activeIndex);
  if (!inActiveAxis && breachState.buffer.length > 0) {
    sfx.emp();
    return;
  }

  sfx.click();
  applyBreachCellSelection(r, c);
}

function initBreachProtocol() {
  const resetBtn = document.getElementById("reset-breach-btn");
  const inlineNewBtn = document.getElementById("inline-new-token-btn");
  const autoBtn = document.getElementById("toggle-auto-breach-btn");
  const copyBtn = document.getElementById("copy-token-btn");
  const copyConnBtn = document.getElementById("copy-conn-btn");
  const presetPills = document.getElementById("db-preset-pills");
  const minusBtn = document.getElementById("len-minus-btn");
  const plusBtn = document.getElementById("len-plus-btn");

  ensureBreachMatrixDOM();

  const triggerNewCycle = () => {
    sfx.click();
    startAutonomousBreachCycle();
  };

  if (resetBtn) resetBtn.addEventListener("click", triggerNewCycle);
  if (inlineNewBtn) inlineNewBtn.addEventListener("click", triggerNewCycle);

  if (autoBtn) {
    autoBtn.addEventListener("click", () => {
      sfx.click();
      breachState.autoCycle = !breachState.autoCycle;
      const cdEl = document.getElementById("token-countdown");
      if (cdEl) {
        cdEl.textContent = breachState.autoCycle ? `${(breachState.remainingMs / 1000).toFixed(1)}s` : "PAUSED";
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const tok = breachState.currentToken || breachState.targetToken;
      if (!tok) return;
      copyTokenToClipboard(tok, document.getElementById("copy-token-label"), "COPIAR");
    });
  }

  if (copyConnBtn) {
    copyConnBtn.addEventListener("click", () => {
      const tok = breachState.currentToken || breachState.targetToken;
      if (!tok) return;
      const connStr = DB_PRESETS[breachState.preset].connTemplate(tok);
      copyTokenToClipboard(connStr, document.getElementById("copy-conn-label"), "Copy");
    });
  }

  if (presetPills) {
    presetPills.addEventListener("click", (e) => {
      const pill = e.target.closest(".db-pill");
      if (!pill) return;
      sfx.click();
      document.querySelectorAll(".db-pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      const presetKey = pill.dataset.preset;
      breachState.preset = presetKey;
      breachState.tokenLength = DB_PRESETS[presetKey].defaultLen;
      updatePresetAndLengthUI();
      startAutonomousBreachCycle();
    });
  }

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      if (breachState.tokenLength > 8) {
        sfx.click();
        breachState.tokenLength -= 2;
        updatePresetAndLengthUI();
        startAutonomousBreachCycle();
      }
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      if (breachState.tokenLength < 64) {
        sfx.click();
        breachState.tokenLength += 2;
        updatePresetAndLengthUI();
        startAutonomousBreachCycle();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key.toLowerCase() === "r" && isTokenToolViewActive()) {
      sfx.click();
      startAutonomousBreachCycle();
    }
  });

  updatePresetAndLengthUI();
  syncTokenShortcutVisibility();
  if (document.querySelector(".tool-tab.active")?.dataset.tool === "token") {
    startAutonomousBreachCycle();
  }
}

function updatePresetAndLengthUI() {
  const lenEl = document.getElementById("token-length-val");
  const descEl = document.getElementById("db-preset-desc");
  const bitsEl = document.getElementById("entropy-bits-label");
  const strengthLabel = document.getElementById("strength-label");
  const strengthFill = document.getElementById("strength-fill");
  const tokenOutEl = document.getElementById("breach-token-output");

  const len = breachState.tokenLength;
  const presetObj = DB_PRESETS[breachState.preset];

  if (lenEl) lenEl.textContent = len;
  if (descEl) setTypedText(descEl, presetObj.desc(len), 1100);

  if (tokenOutEl) {
    tokenOutEl.classList.toggle("len-medium", len >= 28 && len < 42);
    tokenOutEl.classList.toggle("len-long", len >= 42);
  }

  const entropyBits = Math.round(len * Math.log2(CHAR_FULL_POOL.length));
  if (bitsEl) bitsEl.textContent = `${entropyBits} BITS OF ENTROPY`;

  if (strengthLabel && strengthFill) {
    if (entropyBits >= 110) {
      strengthLabel.textContent = "STRENGTH: EXCELLENT";
      strengthLabel.style.color = "var(--cp-breach-lime)";
      strengthFill.style.width = "100%";
      strengthFill.style.background = "var(--cp-breach-lime)";
    } else if (entropyBits >= 75) {
      strengthLabel.textContent = "STRENGTH: STRONG";
      strengthLabel.style.color = "var(--cp-cyan)";
      strengthFill.style.width = "78%";
      strengthFill.style.background = "var(--cp-cyan)";
    } else {
      strengthLabel.textContent = "STRENGTH: GOOD";
      strengthLabel.style.color = "var(--cp-yellow)";
      strengthFill.style.width = "55%";
      strengthFill.style.background = "var(--cp-yellow)";
    }
  }
}

function generateHexScrambleString(length = 24) {
  const hexChars = "0123456789ABCDEF";
  let out = "";
  for (let i = 0; i < length; i++) {
    out += hexChars[cryptoRandomInt(hexChars.length)];
  }
  return out;
}

/**
 * Entero criptográficamente seguro en [0, max) usando Web Crypto API + Rejection Sampling
 * para eliminar cualquier sesgo de módulo (Zero Modulo Bias).
 */
function cryptoRandomInt(max) {
  if (!window.crypto || !window.crypto.getRandomValues) {
    return Math.floor(Math.random() * max);
  }
  const range = 0x100000000; // 2^32
  const limit = range - (range % max);
  const buf = new Uint32Array(1);
  let val;
  do {
    window.crypto.getRandomValues(buf);
    val = buf[0];
  } while (val >= limit);
  return val % max;
}

function synthesizeSecretToken(length = 24) {
  const alphaNumPool = CHAR_ALPHA + CHAR_NUM;
  const chars = new Array(length);

  // Extremos alfanuméricos para que nunca empiece ni termine en '-' o '.' en consolas/URIs
  chars[0] = CHAR_ALPHA[cryptoRandomInt(CHAR_ALPHA.length)];
  chars[length - 1] = alphaNumPool[cryptoRandomInt(alphaNumPool.length)];

  // Cuerpo interior con muestreo uniforme sobre los 60 caracteres seguros
  for (let i = 1; i < length - 1; i++) {
    chars[i] = CHAR_FULL_POOL[cryptoRandomInt(CHAR_FULL_POOL.length)];
  }

  // Garantizar al menos 2 dígitos y 2 símbolos en posiciones internas aleatorias disjuntas
  const innerIndices = [];
  for (let i = 1; i < length - 1; i++) innerIndices.push(i);
  for (let i = innerIndices.length - 1; i > 0; i--) {
    const j = cryptoRandomInt(i + 1);
    const tmp = innerIndices[i];
    innerIndices[i] = innerIndices[j];
    innerIndices[j] = tmp;
  }

  if (innerIndices.length >= 4) {
    chars[innerIndices[0]] = CHAR_NUM[cryptoRandomInt(CHAR_NUM.length)];
    chars[innerIndices[1]] = CHAR_NUM[cryptoRandomInt(CHAR_NUM.length)];
    chars[innerIndices[2]] = CHAR_SYM[cryptoRandomInt(CHAR_SYM.length)];
    chars[innerIndices[3]] = CHAR_SYM[cryptoRandomInt(CHAR_SYM.length)];
  }

  return chars.join("");
}

function formatTokenWithSyntaxColors(tokenStr) {
  return Array.from(tokenStr)
    .map((ch) => {
      if (CHAR_NUM.includes(ch)) return `<span class="tok-char-num">${ch}</span>`;
      if (CHAR_SYM.includes(ch)) return `<span class="tok-char-sym">${ch}</span>`;
      return `<span class="tok-char-alpha">${ch}</span>`;
    })
    .join("");
}

function updateConnectionStringDisplay(tokenStr) {
  const connEl = document.getElementById("conn-string-output");
  if (!connEl) return;
  const presetObj = DB_PRESETS[breachState.preset];
  const rawConn = presetObj.connTemplate(tokenStr);
  connEl.innerHTML = rawConn.replace(
    tokenStr,
    `<span class="conn-token-hl">${formatTokenWithSyntaxColors(tokenStr)}</span>`
  );
}

function copyTokenToClipboard(textToCopy, labelEl, defaultText = "COPY") {
  sfx.success();
  const finishCopyUI = () => {
    if (!labelEl) return;
    labelEl.textContent = "COPIADO";
    setTimeout(() => {
      labelEl.textContent = defaultText;
    }, 1500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(finishCopyUI).catch(() => {
      fallbackCopyText(textToCopy);
      finishCopyUI();
    });
  } else {
    fallbackCopyText(textToCopy);
    finishCopyUI();
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (_) {}
  document.body.removeChild(ta);
}

function startAutonomousBreachCycle() {
  clearInterval(breachState.stepTimer);
  clearInterval(breachState.countdownInterval);
  ensureBreachMatrixDOM();

  const grid = [];
  for (let r = 0; r < 5; r++) {
    const row = [];
    for (let c = 0; c < 5; c++) {
      row.push(HEX_POOL[Math.floor(Math.random() * HEX_POOL.length)]);
    }
    grid.push(row);
  }

  breachState.grid = grid;
  breachState.buffer = [];
  breachState.mode = "row";
  breachState.activeIndex = 0; // Inicia siempre en la Fila 1 como en Cyberpunk 2077
  breachState.lastPickedCoord = null;
  breachState.hoverCoord = null;
  breachState.usedCells = new Map();
  breachState.scanning = true;
  breachState.remainingMs = TOKEN_ROTATION_MS;
  breachState.targetToken = synthesizeSecretToken(breachState.tokenLength);
  breachState.scrambleSeed = generateHexScrambleString(breachState.tokenLength);

  const badgeEl = document.getElementById("token-status-badge");
  const barEl = document.getElementById("token-timer-bar");
  const countdownEl = document.getElementById("token-countdown");

  if (badgeEl) {
    badgeEl.textContent = "SCANNING MATRIX...";
    badgeEl.classList.remove("ready");
  }
  if (barEl) barEl.style.width = "100%";
  if (countdownEl) countdownEl.textContent = "SCANNING";

  renderBreachUI();

  breachState.stepTimer = setInterval(() => {
    performRandomAlgorithmStep();
  }, 220);
}

function performRandomAlgorithmStep() {
  const stepNum = breachState.buffer.length + 1;
  if (stepNum > BUFFER_MAX) {
    clearInterval(breachState.stepTimer);
    finalizeUniqueToken();
    return;
  }

  const candidates = [];
  if (breachState.mode === "row") {
    const r = breachState.activeIndex;
    for (let c = 0; c < 5; c++) {
      if (!breachState.usedCells.has(`${r}-${c}`)) candidates.push([r, c]);
    }
  } else {
    const c = breachState.activeIndex;
    for (let r = 0; r < 5; r++) {
      if (!breachState.usedCells.has(`${r}-${c}`)) candidates.push([r, c]);
    }
  }

  if (candidates.length === 0) {
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (!breachState.usedCells.has(`${r}-${c}`)) candidates.push([r, c]);
      }
    }
  }

  const [pickedR, pickedC] = candidates[Math.floor(Math.random() * candidates.length)];
  const breachPanel = document.getElementById("tab-breach");
  if (breachPanel && breachPanel.classList.contains("active")) {
    sfx.hover();
  }

  applyBreachCellSelection(pickedR, pickedC);
}

function applyBreachCellSelection(pickedR, pickedC) {
  const stepNum = breachState.buffer.length + 1;
  const hexVal = breachState.grid[pickedR][pickedC];
  const cellKey = `${pickedR}-${pickedC}`;

  breachState.usedCells.set(cellKey, stepNum);
  breachState.lastPickedCoord = { r: pickedR, c: pickedC };
  breachState.buffer.push(hexVal);

  // Alternar Fila <-> Columna igual que en Cyberpunk 2077
  if (breachState.mode === "row") {
    breachState.mode = "col";
    breachState.activeIndex = pickedC;
  } else {
    breachState.mode = "row";
    breachState.activeIndex = pickedR;
  }

  // Usar caracteres hexadecimales del mismo ancho (1ch) en lugar de '•' para que el token NUNCA cambie de ancho
  const revealedCount = Math.ceil((stepNum / BUFFER_MAX) * breachState.tokenLength);
  const revealedPart = breachState.targetToken.slice(0, revealedCount);
  const maskedPart = breachState.scrambleSeed.slice(revealedCount, breachState.tokenLength);

  const tokenOutEl = document.getElementById("breach-token-output");
  if (tokenOutEl) {
    tokenOutEl.innerHTML =
      formatTokenWithSyntaxColors(revealedPart) +
      (maskedPart ? `<span class="tok-char-masked">${maskedPart}</span>` : "");
  }
  updateConnectionStringDisplay(revealedPart + maskedPart);

  renderBreachUI();

  if (breachState.buffer.length >= BUFFER_MAX) {
    clearInterval(breachState.stepTimer);
    setTimeout(finalizeUniqueToken, 160);
  }
}

function finalizeUniqueToken() {
  breachState.scanning = false;
  breachState.lastPickedCoord = null;

  const newToken = breachState.targetToken;
  breachState.currentToken = newToken;

  const badgeEl = document.getElementById("token-status-badge");
  const tokenOutEl = document.getElementById("breach-token-output");

  if (badgeEl) {
    badgeEl.textContent = "READY // VERIFIED";
    badgeEl.classList.add("ready");
  }
  if (tokenOutEl) {
    tokenOutEl.innerHTML = formatTokenWithSyntaxColors(newToken);
  }

  updateConnectionStringDisplay(newToken);

  const breachPanel = document.getElementById("tab-breach");
  if (breachPanel && breachPanel.classList.contains("active")) {
    sfx.success();
  }

  renderBreachUI();
  startTokenRotationCountdown();
}

function startTokenRotationCountdown() {
  clearInterval(breachState.countdownInterval);
  breachState.remainingMs = TOKEN_ROTATION_MS;

  const countdownEl = document.getElementById("token-countdown");
  const barEl = document.getElementById("token-timer-bar");

  breachState.countdownInterval = setInterval(() => {
    if (!breachState.autoCycle) {
      if (countdownEl) countdownEl.textContent = "PAUSED";
      return;
    }

    breachState.remainingMs -= 100;
    if (breachState.remainingMs <= 0) {
      clearInterval(breachState.countdownInterval);
      startAutonomousBreachCycle();
      return;
    }

    const secs = (breachState.remainingMs / 1000).toFixed(1);
    const pct = Math.max(0, (breachState.remainingMs / TOKEN_ROTATION_MS) * 100);
    if (countdownEl) countdownEl.textContent = `${secs}s`;
    if (barEl) barEl.style.width = `${pct}%`;
  }, 100);
}

function renderBreachUI() {
  ensureBreachMatrixDOM();
  const statusEl = document.getElementById("buffer-status");
  const axisEl = document.getElementById("breach-axis-indicator");

  if (axisEl) {
    axisEl.textContent = !breachState.scanning
      ? "LOCKED [OK]"
      : breachState.mode === "row"
      ? `FILA [${breachState.activeIndex + 1}]`
      : `COL [${breachState.activeIndex + 1}]`;
  }

  const focusCoord = breachState.hoverCoord || breachState.lastPickedCoord;

  breachState.cellEls.forEach(({ cell, valSpan, tagSpan, r, c }) => {
    if (!breachState.grid[r]) return;
    const key = `${r}-${c}`;
    const stepTaken = breachState.usedCells.get(key);
    const isLastPick =
      breachState.lastPickedCoord &&
      breachState.lastPickedCoord.r === r &&
      breachState.lastPickedCoord.c === c;

    const isScanLine =
      breachState.scanning &&
      !stepTaken &&
      ((breachState.mode === "row" && r === breachState.activeIndex) ||
        (breachState.mode === "col" && c === breachState.activeIndex));

    let isCrossLine = false;
    if (focusCoord && !stepTaken && !isScanLine) {
      if (breachState.mode === "row" && c === focusCoord.c) {
        isCrossLine = true;
      } else if (breachState.mode === "col" && r === focusCoord.r) {
        isCrossLine = true;
      }
    }

    cell.classList.toggle("used", Boolean(stepTaken));
    cell.classList.toggle("scan-line", Boolean(isScanLine));
    cell.classList.toggle("cross-line", Boolean(isCrossLine));
    cell.classList.toggle("active-pick", Boolean(isLastPick));

    valSpan.textContent = stepTaken ? "--" : breachState.grid[r][c];
    tagSpan.textContent = stepTaken ? `#${stepTaken}` : "";
  });

  if (statusEl) statusEl.textContent = `${breachState.buffer.length} / ${BUFFER_MAX}`;
  breachState.slotEls.forEach((slotEl, idx) => {
    const val = breachState.buffer[idx];
    slotEl.classList.toggle("filled", Boolean(val));
    slotEl.textContent = val || "--";
  });
}

/* ============================================================================
   7. RELOJ Y CONTROLES DEL SISTEMA (AUDIO / EMP GLITCH)
   ============================================================================ */
function initClockAndTickers() {
  const timeEl = document.getElementById("hud-time");
  const tickerEl = document.getElementById("hex-ticker");

  const updateClock = () => {
    if (timeEl) timeEl.textContent = new Date().toTimeString().split(" ")[0];
  };
  updateClock();
  setInterval(updateClock, 1000);

  setInterval(() => {
    if (!tickerEl) return;
    tickerEl.textContent = Array.from({ length: 8 }, () =>
      HEX_POOL[Math.floor(Math.random() * HEX_POOL.length)]
    ).join(" ");
  }, 1800);
}

function initSystemControls() {
  const sfxBtn = document.getElementById("sfx-toggle");
  const sfxLabel = document.getElementById("sfx-label");
  const glitchBtn = document.getElementById("glitch-trigger");
  const modeBtn = document.getElementById("visual-mode-toggle");
  const languageBtn = document.getElementById("language-toggle");
  const settingsToggle = document.getElementById("settings-menu-toggle");
  const settingsMenu = document.getElementById("settings-menu");

  const setSettingsMenu = (open) => {
    if (!settingsToggle || !settingsMenu) return;
    settingsMenu.classList.toggle("hidden", !open);
    settingsToggle.setAttribute("aria-expanded", String(open));
  };

  settingsToggle?.addEventListener("click", () => {
    setSettingsMenu(settingsToggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".hub-controls-right")) setSettingsMenu(false);
  });

  const toggleAudio = () => {
    sfx.enabled = !sfx.enabled;
    if (sfxLabel) sfxLabel.textContent = sfx.enabled ? "ON" : "OFF";
    if (sfx.enabled) sfx.click();
    setSettingsMenu(false);
  };

  if (sfxBtn) sfxBtn.addEventListener("click", toggleAudio);

  const applyVisualMode = (professional) => {
    document.body.classList.toggle("professional-mode", professional);
    if (modeBtn) modeBtn.textContent = currentLanguage === "en"
      ? (professional ? "LIGHT" : "CYBER")
      : (professional ? "CLARO" : "CYBER");
  };
  const query = new URLSearchParams(window.location.search);
  localStorage.removeItem("portfolio-visual-mode");
  applyVisualMode(query.get("mode") === "professional");
  modeBtn?.addEventListener("click", () => {
    applyVisualMode(!document.body.classList.contains("professional-mode"));
    setSettingsMenu(false);
  });

  const applyLanguage = (language) => {
    currentLanguage = language;
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    const en = language === "en";
    const setStableText = (node, value) => {
      if (!node) return;
      if (typeof node._twCancel === "function") node._twCancel();
      node.dataset.twText = value;
      node.textContent = value;
    };
    const navLabels = en ? ["PROFILE", "PROJECTS", "STACK", "TOOLS", "/blackwall/", "CONTACT"] : ["PERFIL", "PROYECTOS", "STACK", "HERRAMIENTAS", "/blackwall/", "CONTACTO"];
    document.querySelectorAll(".daemon-name").forEach((node, index) => setStableText(node, navLabels[index]));
    const titles = en ? ["IGNACIO ANDRÉS VELIZ SEGUEL", "FEATURED PROJECTS", "TECH STACK", "DEVELOPER TOOLS", "ENCRYPTED FILES (/blackwall/)", "CONTACT & LINKS"] : ["IGNACIO ANDRÉS VELIZ SEGUEL", "PROYECTOS DESTACADOS", "STACK TECNOLÓGICO", "HERRAMIENTAS DE DESARROLLO", "ARCHIVOS ENCRIPTADOS (/blackwall/)", "CONTACTO Y ENLACES"];
    document.querySelectorAll(".deck-panel > .cp-section-header .cp-title").forEach((node, index) => setStableText(node, titles[index]));
    if (languageBtn) languageBtn.textContent = en ? "EN" : "ES";
    if (modeBtn) modeBtn.textContent = en
      ? (document.body.classList.contains("professional-mode") ? "LIGHT" : "CYBER")
      : (document.body.classList.contains("professional-mode") ? "CLARO" : "CYBER");
    setStableText(document.getElementById("settings-trigger-label"), en ? "SETTINGS" : "AJUSTES");
    setStableText(document.getElementById("settings-menu-title"), en ? "PREFERENCES" : "PREFERENCIAS");
    setStableText(document.getElementById("language-setting-label"), en ? "LANGUAGE" : "IDIOMA");
    setStableText(document.getElementById("visual-setting-label"), en ? "THEME" : "TEMA");
    setStableText(document.getElementById("sfx-setting-label"), en ? "SOUND" : "SONIDO");
    const kickerCopy = en
      ? ["01 // PROFESSIONAL DOSSIER", "02 // REPOSITORIES & SYSTEMS", "03 // TECHNICAL CAPABILITIES", "06 // DEVELOPMENT & QA UTILITIES", "04 // OPTIONAL SECRET DIRECTORY", "05 // COMMUNICATIONS"]
      : ["01 // EXPEDIENTE PROFESIONAL", "02 // REPOSITORIOS & SISTEMAS", "03 // CAPACIDADES TÉCNICAS", "06 // UTILIDADES PARA DESARROLLO Y QA", "04 // DIRECTORIO SECRETO OPCIONAL", "05 // COMUNICACIONES"];
    document.querySelectorAll(".deck-panel > .cp-section-header .cp-kicker").forEach((node, index) => setStableText(node, kickerCopy[index]));
    document.getElementById("section-shortcut-hint").innerHTML = en
      ? '<kbd>1</kbd>–<kbd>5</kbd> Sections'
      : '<kbd>1</kbd>–<kbd>5</kbd> Secciones';
    document.getElementById("secret-tool-hint").innerHTML = en
      ? '<kbd>6</kbd> Hidden access'
      : '<kbd>6</kbd> Acceso oculto';
    document.querySelector('[data-project-view="grid"]').textContent = en ? "CARDS" : "TARJETAS";
    document.querySelector('[data-project-view="timeline"]').textContent = "TIMELINE";
    document.querySelector('[data-project-view="folders"]').textContent = en ? "FOLDERS" : "CARPETAS";
    document.getElementById("contact-submit-btn").textContent = en ? "SEND MESSAGE" : "ENVIAR MENSAJE";
    renderProfileAndHUD();
    renderProjects("all");
    renderProjectTimeline();
    renderProjectFolders();
    renderCyberware();
  };
  applyLanguage(query.get("lang") === "en" ? "en" : currentLanguage);
  languageBtn?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "es" ? "en" : "es");
    setSettingsMenu(false);
  });

  if (glitchBtn) {
    glitchBtn.addEventListener("click", () => {
      sfx.emp();
      document.body.classList.remove("emp-glitch");
      void document.body.offsetWidth;
      document.body.classList.add("emp-glitch");
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && settingsToggle?.getAttribute("aria-expanded") === "true") {
      setSettingsMenu(false);
      settingsToggle.focus();
      return;
    }
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key.toLowerCase() === "m") toggleAudio();
  });
}


/* ============================================================================
   8. PANTALLA DE INGRESO: MODAL DE CARGA Y SINCRONIZACIÓN DE TERMINAL
   ============================================================================ */
const GATE_STORAGE_KEY = "cp2077_intrusion_passed_v1";

const BOOT_SEQUENCE_STEPS = [
  { pct: 18, status: "VERIFICANDO CREDENCIALES...", log: "> [OK] Handshake cifrado establecido con nodo central Santiago_CL." },
  { pct: 42, status: "CARGANDO PERFIL DE OPERADOR...", log: "> [OK] Expediente cargado: Ignacio Andrés Veliz Seguel (Full Stack / Cloud)." },
  { pct: 68, status: "MONTANDO ARQUITECTURAS...", log: "> [OK] Módulos activos: Laravel · React · Python · AWS · Docker · CI/CD." },
  { pct: 90, status: "DESBLOQUEANDO INTERFAZ...", log: "> [OK] Repositorios GitHub (@markawaii) y telemetría sincronizados." },
  { pct: 100, status: "ACCESO CONCEDIDO // BIENVENIDO", log: "> [READY] Enlace neural completado (100%). Iniciando portafolio..." }
];

let bootTimers = [];
let bootCompleted = false;

function clearBootTimers() {
  bootTimers.forEach((t) => clearTimeout(t));
  bootTimers = [];
}

function initIntrusionGate() {
  const gateOverlay = document.getElementById("intrusion-gate");
  const skipBtn = document.getElementById("skip-intrusion-btn");

  if (!gateOverlay) return;

  if (sessionStorage.getItem(GATE_STORAGE_KEY) === "granted") {
    gateOverlay.classList.add("hidden");
    document.querySelector(".hud-container")?.removeAttribute("inert");
    return;
  }
  openIntrusionGate();

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      sfx.click();
      finishBootGate();
    });
  }
}

function openIntrusionGate() {
  const gateOverlay = document.getElementById("intrusion-gate");
  const linesEl = document.getElementById("boot-terminal-lines");
  const pctPill = document.getElementById("boot-percent-pill");
  const statusText = document.getElementById("boot-status-text");
  const progressNum = document.getElementById("boot-progress-num");
  const progressFill = document.getElementById("boot-progress-fill");
  const headerState = document.getElementById("gate-header-state");

  if (!gateOverlay) return;

  clearBootTimers();
  bootCompleted = false;

  gateOverlay.classList.remove("hidden");
  document.querySelector(".hud-container")?.setAttribute("inert", "");
  if (linesEl) linesEl.innerHTML = "";
  if (pctPill) pctPill.textContent = "0%";
  if (progressNum) progressNum.textContent = "0%";
  if (progressFill) progressFill.style.width = "0%";
  if (statusText) statusText.textContent = "INICIALIZANDO ENLACE NEURAL...";
  if (headerState) {
    headerState.textContent = "SINCRONIZANDO PERFIL...";
    headerState.classList.remove("granted");
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    finishBootGate();
    return;
  }

  animateContainerTexts(
    gateOverlay,
    "#gate-title, .boot-kicker, .boot-name, .boot-role"
  );

  const stepInterval = 420;

  BOOT_SEQUENCE_STEPS.forEach((step, idx) => {
    const t = setTimeout(() => {
      if (bootCompleted) return;
      sfx.hover();

      if (pctPill) pctPill.textContent = `${step.pct}%`;
      if (progressNum) progressNum.textContent = `${step.pct}%`;
      if (progressFill) progressFill.style.width = `${step.pct}%`;
      if (statusText) statusText.textContent = step.status;

      if (linesEl) {
        const lineDiv = document.createElement("div");
        lineDiv.className = `boot-log-line ${step.pct === 100 ? "ok" : ""}`;
        lineDiv.textContent = step.log;
        linesEl.appendChild(lineDiv);
        typeElementText(lineDiv, step.log, { duration: 300 });
      }

      if (step.pct === 100) {
        if (headerState) {
          headerState.textContent = "ENLACE ESTABLECIDO";
          headerState.classList.add("granted");
        }
        const tDone = setTimeout(() => {
          finishBootGate();
        }, 480);
        bootTimers.push(tDone);
      }
    }, (idx + 1) * stepInterval);

    bootTimers.push(t);
  });
}

function finishBootGate() {
  if (bootCompleted) return;
  bootCompleted = true;
  clearBootTimers();
  sfx.success();

  const gateOverlay = document.getElementById("intrusion-gate");
  sessionStorage.setItem(GATE_STORAGE_KEY, "granted");
  updateClearanceBadge("granted");

  if (gateOverlay) {
    gateOverlay.classList.add("hidden");
  }
  document.querySelector(".hud-container")?.removeAttribute("inert");

  const activePanel = document.querySelector(".deck-panel.active");
  if (activePanel) {
    animateContainerTexts(activePanel);
  }
}

function updateClearanceBadge(mode) {
  const badge = document.getElementById("user-clearance-badge");
  if (!badge) return;
  if (mode === "guest") {
    badge.textContent = "GUEST SESSION";
    badge.style.color = "var(--cp-yellow)";
  } else {
    badge.textContent = "ROOT ACCESS";
    badge.style.color = "var(--cp-green)";
  }
}

/* ============================================================================
   9. NIVEL 2 OPCIONAL: ARCHIVOS EN /blackwall/ CON MODAL DE MATRIZ HEXADECIMAL
   ============================================================================ */
const BLACKWALL_FILES = [
  {
    id: "BW-01",
    filename: "CERTIFICACIONES_DUOC.enc",
    daemonName: "ICEPICK // NIVEL 1",
    sequence: ["55", "1C", "E9"],
    title: "Certificaciones Oficiales — Ingeniería en Informática (DUOC UC)",
    content:
      "• Arquitectura de Software · • Análisis y Planificación de Requerimientos Informáticos · • Programación de Software · • Gestión de Proyectos Informáticos · • Análisis y Desarrollo de Modelos de Datos · • Calidad de Software."
  },
  {
    id: "BW-02",
    filename: "OPERACIONES_IDEA_UNO.enc",
    daemonName: "OPTICS JAMMER // NIVEL 2",
    sequence: ["BD", "7A", "FF"],
    title: "Bitácora de Ingeniería — IDEA UNO (Oct 2022 - Actual)",
    content:
      "Liderazgo en proyectos internos y externos, levantamiento de ambientes Productivos y QA con contenedores Docker, pipelines CI/CD en Bitbucket y GitHub, desarrollo de APIs RESTful en Laravel, Flask y .NET, y despliegues Serverless en AWS Lambda."
  },
  {
    id: "BW-03",
    filename: "EXPEDIENTE_VELIZ.enc",
    daemonName: "DATAMINE V3 // NÚCLEO",
    sequence: ["1C", "55", "BD", "E9"],
    title: "Expediente Clasificado // Contacto Directo & Repositorios",
    content:
      "Operador: Ignacio Andrés Veliz Seguel (Santiago, Chile) · Email: ignaciovs.dev@gmail.com · GitHub: github.com/markawaii · LinkedIn: linkedin.com/in/ingveliz."
  }
];

const BW_BUFFER_MAX = 5;

let bwState = {
  unlocked: new Set(),
  activeFileId: null,
  grid: [],
  solutionPath: [], // Array de coordenadas [{r, c, hex, step}, ...] garantizando solución 100% válida
  buffer: [],
  usedCells: new Set(),
  mode: "row", // 'row' | 'col' (en Cyberpunk siempre inicia en la Fila 1 -> r = 0)
  activeIndex: 0,
  hoverCoord: null, // {r, c} para previsualizar el eje perpendicular
  autoTargetCoord: null, // {r, c} resaltado durante la animación de Auto-Desencriptar
  autoDecrypting: false,
  autoTimers: [],
  matchedSteps: 0,
  showHint: false,
  solved: false
};

function clearBwAutoTimers() {
  bwState.autoTimers.forEach((t) => clearTimeout(t));
  bwState.autoTimers = [];
  bwState.autoDecrypting = false;
  bwState.autoTargetCoord = null;
}

function initBlackwallSection() {
  renderBlackwallCards();

  const closeBtn = document.getElementById("bw-modal-close-btn");
  const resetBtn = document.getElementById("bw-modal-reset-btn");
  const hintBtn = document.getElementById("bw-modal-hint-btn");
  const autoBtn = document.getElementById("bw-modal-autodecrypt-btn");
  const modalOverlay = document.getElementById("blackwall-breach-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sfx.click();
      closeBlackwallModal();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (bwState.autoDecrypting) return;
      sfx.click();
      if (bwState.activeFileId) setupBlackwallMatrixForFile(bwState.activeFileId);
    });
  }

  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      if (bwState.autoDecrypting) return;
      sfx.click();
      bwState.showHint = !bwState.showHint;
      renderBlackwallModalUI();
    });
  }

  if (autoBtn) {
    autoBtn.addEventListener("click", () => {
      if (!bwState.activeFileId || bwState.autoDecrypting || bwState.solved) return;
      sfx.click();
      runBlackwallAutoDecryptAnimation();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeBlackwallModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && !modalOverlay.classList.contains("hidden")) {
      closeBlackwallModal();
    }
  });
}

function renderBlackwallCards(newlyUnlockedId = null) {
  const grid = document.getElementById("blackwall-grid");
  const statusTag = document.getElementById("blackwall-status-tag");
  if (!grid) return;

  const remaining = BLACKWALL_FILES.length - bwState.unlocked.size;
  if (statusTag) {
    statusTag.textContent =
      remaining === 0
        ? "TODOS LOS ARCHIVOS DESBLOQUEADOS"
        : `${remaining} ARCHIVOS BLOQUEADOS`;
  }

  grid.innerHTML = BLACKWALL_FILES.map((file) => {
    const isUnlocked = bwState.unlocked.has(file.id);

    if (isUnlocked) {
      return `
        <div class="bw-card unlocked" data-bw-card="${file.id}">
          <div>
            <div class="gig-top">
              <span class="gig-code" style="color: var(--cp-green);">DECRYPTED // ${file.filename}</span>
              <span class="gig-threat">DESBLOQUEADO</span>
            </div>
            <h3 class="gig-title">${file.title}</h3>
            <p class="gig-desc">${file.content}</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="bw-card" data-bw-card="${file.id}">
        <div>
          <div class="gig-top">
            <span class="gig-code">ENCRYPTED // ${file.filename}</span>
            <span class="gig-threat">${file.daemonName}</span>
          </div>
          <h3 class="gig-title">${file.title}</h3>
          <p class="bw-helper-text">
            Archivo protegido. Desencripta manualmente con la Matriz Hexadecimal o ejecuta el proceso automático.
          </p>
        </div>
        <div class="bw-card-footer">
          <button type="button" class="cyber-btn btn-cyan" data-bw-open="${file.id}">
            DESENCRIPTAR
          </button>
          <button type="button" class="cp-util-btn" data-bw-auto-direct="${file.id}">
            ⚡ AUTO-DESENCRIPTAR
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (newlyUnlockedId) {
    const unlockedCard = grid.querySelector(`[data-bw-card="${newlyUnlockedId}"]`);
    if (unlockedCard) {
      animateContainerTexts(unlockedCard);
    }
  }

  // Abrir Modal de Matriz Hexadecimal
  grid.querySelectorAll("[data-bw-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      sfx.click();
      openBlackwallModal(btn.dataset.bwOpen);
    });
  });

  // Auto-Desencriptar desde la tarjeta: abre el modal y ejecuta el efecto visual de desencriptado paso a paso
  grid.querySelectorAll("[data-bw-auto-direct]").forEach((btn) => {
    btn.addEventListener("click", () => {
      sfx.click();
      openBlackwallModal(btn.dataset.bwAutoDirect);
      setTimeout(() => {
        runBlackwallAutoDecryptAnimation();
      }, 180);
    });
  });
}

function openBlackwallModal(fileId) {
  const modal = document.getElementById("blackwall-breach-modal");
  if (!modal) return;
  clearBwAutoTimers();
  modal.classList.remove("hidden");
  setupBlackwallMatrixForFile(fileId);
}

function closeBlackwallModal() {
  clearBwAutoTimers();
  const modal = document.getElementById("blackwall-breach-modal");
  if (modal) modal.classList.add("hidden");
  bwState.activeFileId = null;
}

/**
 * Ejecuta el efecto visual de Auto-Desencriptar paso a paso sobre la Matriz Hexadecimal:
 * 1. Si el usuario ya había hecho clics erróneos, limpia el estado actual manteniendo la misma grilla.
 * 2. Recorre cada coordenada de solutionPath:
 *    - Primero ilumina la celda objetivo (.auto-targeting) y su eje perpendicular (.next-axis-preview).
 *    - Luego selecciona la celda, la inyecta en el Búfer y alterna entre FILA y COLUMNA.
 */
function runBlackwallAutoDecryptAnimation() {
  const file = BLACKWALL_FILES.find((f) => f.id === bwState.activeFileId);
  if (!file || bwState.solved || bwState.autoDecrypting) return;

  clearBwAutoTimers();

  // Reiniciar progreso sobre la matriz actual para recorrer limpiamente toda la ruta solución
  bwState.buffer = [];
  bwState.usedCells = new Set();
  bwState.mode = "row";
  bwState.activeIndex = 0;
  bwState.matchedSteps = 0;
  bwState.hoverCoord = null;
  bwState.autoTargetCoord = null;
  // El modo automático recorre la misma interfaz que el manual: muestra únicamente
  // el eje activo, la celda apuntada y cada selección incorporándose al búfer.
  bwState.showHint = false;
  bwState.autoDecrypting = true;
  renderBlackwallModalUI();

  const stepInterval = 760;

  bwState.solutionPath.forEach((stepNode, idx) => {
    // Fase 1: Apuntar al nodo y previsualizar el cruce Fila/Columna
    const tAim = setTimeout(() => {
      sfx.hover();
      bwState.hoverCoord = { r: stepNode.r, c: stepNode.c };
      bwState.autoTargetCoord = { r: stepNode.r, c: stepNode.c };
      renderBlackwallModalUI();
    }, idx * stepInterval + 120);

    // Fase 2: Acoplar el byte en el búfer y cambiar de eje (Fila <-> Columna)
    const tPick = setTimeout(() => {
      bwState.autoTargetCoord = null;
      handleBlackwallMatrixPick(stepNode.r, stepNode.c, true);
    }, idx * stepInterval + 560);

    bwState.autoTimers.push(tAim, tPick);
  });
}

/**
 * Genera una matriz 5x5 con una ruta 100% válida que alterna:
 * Paso 1: Fila 0 (top row) -> (0, c0)
 * Paso 2: Columna c0       -> (r1, c0)
 * Paso 3: Fila r1          -> (r1, c2)
 * Paso 4: Columna c2       -> (r3, c2)
 */
function setupBlackwallMatrixForFile(fileId) {
  const file = BLACKWALL_FILES.find((f) => f.id === fileId);
  if (!file) return;

  clearBwAutoTimers();

  bwState.activeFileId = fileId;
  bwState.buffer = [];
  bwState.usedCells = new Set();
  bwState.mode = "row";
  bwState.activeIndex = 0; // En Cyberpunk siempre se empieza eligiendo de la Fila 1 (índice 0)
  bwState.hoverCoord = null;
  bwState.autoTargetCoord = null;
  bwState.matchedSteps = 0;
  bwState.showHint = false;
  bwState.solved = false;

  // Inicializar grilla 5x5 aleatoria
  const grid = [];
  for (let r = 0; r < 5; r++) {
    const row = [];
    for (let c = 0; c < 5; c++) {
      row.push(HEX_POOL[Math.floor(Math.random() * HEX_POOL.length)]);
    }
    grid.push(row);
  }

  // Trazar camino solución sin repetir celdas alternando Fila -> Columna -> Fila -> Columna
  const path = [];
  const usedInPath = new Set();
  let curR = 0;
  let curC = Math.floor(Math.random() * 5);

  for (let i = 0; i < file.sequence.length; i++) {
    const hex = file.sequence[i];
    if (i === 0) {
      curR = 0;
      curC = Math.floor(Math.random() * 5);
    } else if (i % 2 === 1) {
      // Turno de Columna: mantener curC, elegir nueva fila curR
      const candidateRows = [0, 1, 2, 3, 4].filter((r) => !usedInPath.has(`${r}-${curC}`));
      curR = candidateRows[Math.floor(Math.random() * candidateRows.length)];
    } else {
      // Turno de Fila: mantener curR, elegir nueva columna curC
      const candidateCols = [0, 1, 2, 3, 4].filter((c) => !usedInPath.has(`${curR}-${c}`));
      curC = candidateCols[Math.floor(Math.random() * candidateCols.length)];
    }

    usedInPath.add(`${curR}-${curC}`);
    grid[curR][curC] = hex;
    path.push({ r: curR, c: curC, hex, step: i + 1 });
  }

  bwState.grid = grid;
  bwState.solutionPath = path;

  const titleEl = document.getElementById("bw-modal-title");
  const codeEl = document.getElementById("bw-modal-file-code");
  if (titleEl) setTypedText(titleEl, `BREACH PROTOCOL // ${file.filename}`, 820);
  if (codeEl) codeEl.textContent = file.id;

  renderBlackwallModalUI();
}

function ensureBwModalMatrixDOM() {
  const matrixEl = document.getElementById("bw-modal-matrix");
  if (!matrixEl) return;
  if (bwState.cellEls && bwState.cellEls.length === 25) return;

  matrixEl.innerHTML = "";
  bwState.cellEls = [];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "bw-m-cell";

      const valSpan = document.createElement("span");
      const badgeSpan = document.createElement("span");
      badgeSpan.className = "bw-m-step-badge";
      cell.appendChild(valSpan);
      cell.appendChild(badgeSpan);

      cell.addEventListener("mouseenter", () => {
        if (cell.disabled || bwState.autoDecrypting || bwState.solved) return;
        bwState.hoverCoord = { r, c };
        updateMatrixHoverCrosshair();
      });

      cell.addEventListener("mouseleave", () => {
        if (!bwState.hoverCoord) return;
        bwState.hoverCoord = null;
        updateMatrixHoverCrosshair();
      });

      cell.addEventListener("click", () => {
        if (cell.disabled || bwState.autoDecrypting || bwState.solved) return;
        handleBlackwallMatrixPick(r, c, false);
      });

      matrixEl.appendChild(cell);
      bwState.cellEls.push({ cell, valSpan, badgeSpan, r, c });
    }
  }
}

function renderBlackwallModalUI() {
  const file = BLACKWALL_FILES.find((f) => f.id === bwState.activeFileId);
  if (!file) return;

  ensureBwModalMatrixDOM();

  const axisPillEl = document.getElementById("bw-modal-axis-pill");
  const bufCountEl = document.getElementById("bw-modal-buffer-count");
  const bufSlotsEl = document.getElementById("bw-modal-buffer-slots");
  const seqNodesEl = document.getElementById("bw-modal-sequence-nodes");
  const stepGuideEl = document.getElementById("bw-modal-step-guide");

  if (axisPillEl) {
    axisPillEl.textContent = bwState.solved
      ? "✓ ARCHIVO DESENCRIPTADO"
      : bwState.autoDecrypting
      ? `⚡ AUTO-DESENCRIPTANDO ${bwState.matchedSteps + 1}/${file.sequence.length}`
      : `PASO ${bwState.matchedSteps + 1}/${file.sequence.length}: BUSCA [${
          file.sequence[bwState.matchedSteps]
        }] EN ${bwState.mode === "row" ? `FILA ${bwState.activeIndex + 1}` : `COLUMNA ${bwState.activeIndex + 1}`}`;
  }

  // Búfer de memoria
  if (bufCountEl) bufCountEl.textContent = `${bwState.buffer.length} / ${BW_BUFFER_MAX}`;
  if (bufSlotsEl) {
    bufSlotsEl.innerHTML = Array.from({ length: BW_BUFFER_MAX }, (_, idx) => {
      const val = bwState.buffer[idx];
      return `<div class="bw-buf-slot ${val ? "filled" : ""}">${val || "--"}</div>`;
    }).join("");
  }

  // Nodos de la secuencia requerida
  if (seqNodesEl) {
    seqNodesEl.innerHTML = file.sequence
      .map((hex, idx) => {
        const isDone = idx < bwState.matchedSteps;
        const isCurrent = idx === bwState.matchedSteps && !bwState.solved;
        return `
          <span class="bw-seq-node ${isDone ? "done" : ""} ${isCurrent ? "current" : ""}">
            ${hex}
          </span>
        `;
      })
      .join(`<span style="color: var(--text-muted); font-family: var(--font-mono);">→</span>`);
  }

  // Serie de pasos en tabla alineada de 4 columnas (1 sola línea fija por paso, CERO saltos)
  if (stepGuideEl) {
    stepGuideEl.innerHTML = file.sequence
      .map((hex, idx) => {
        const isDone = idx < bwState.matchedSteps;
        const isCurrent = idx === bwState.matchedSteps && !bwState.solved;
        const expectedAxis =
          idx === 0 ? "EJE: FILA 1 (Superior)" : idx % 2 === 1 ? "EJE: COLUMNA Vertical" : "EJE: FILA Horizontal";
        const statusLabel = isDone ? "✓ LISTO" : isCurrent ? "◄ ACTIVO" : "PENDIENTE";
        return `
          <div class="bw-step-item ${isDone ? "completed" : ""} ${isCurrent ? "active" : ""}">
            <span class="bw-step-col-num">PASO ${idx + 1}</span>
            <span class="bw-step-col-hex">[${hex}]</span>
            <span class="bw-step-col-axis">${expectedAxis}</span>
            <span class="bw-step-col-state">${statusLabel}</span>
          </div>
        `;
      })
      .join("");
  }

  // Actualizar las 25 celdas en sitio (CERO recreación de DOM = CERO saltos visuales)
  if (!bwState.cellEls) return;

  bwState.cellEls.forEach(({ cell, valSpan, badgeSpan, r, c }) => {
    const cellKey = `${r}-${c}`;
    const isUsed = bwState.usedCells.has(cellKey);
    const isSelectable =
      !bwState.solved &&
      !isUsed &&
      ((bwState.mode === "row" && r === bwState.activeIndex) ||
        (bwState.mode === "col" && c === bwState.activeIndex));

    const isAutoTargeting =
      bwState.autoTargetCoord &&
      bwState.autoTargetCoord.r === r &&
      bwState.autoTargetCoord.c === c;

    let isNextAxisPreview = false;
    if (bwState.hoverCoord && !bwState.solved && !isUsed) {
      if (bwState.mode === "row" && c === bwState.hoverCoord.c && r !== bwState.hoverCoord.r) {
        isNextAxisPreview = true;
      } else if (bwState.mode === "col" && r === bwState.hoverCoord.r && c !== bwState.hoverCoord.c) {
        isNextAxisPreview = true;
      }
    }

    const hintStepObj = bwState.showHint
      ? bwState.solutionPath.find((p) => p.r === r && p.c === c && p.step > bwState.matchedSteps)
      : null;

    cell.classList.toggle("active-axis", Boolean(isSelectable));
    cell.classList.toggle("auto-targeting", Boolean(isAutoTargeting));
    cell.classList.toggle("next-axis-preview", Boolean(isNextAxisPreview));
    cell.classList.toggle("used", Boolean(isUsed));
    cell.classList.toggle("hint-target", Boolean(hintStepObj));

    cell.disabled = !isSelectable || bwState.autoDecrypting;
    valSpan.textContent = isUsed ? "--" : bwState.grid[r][c];
    badgeSpan.textContent = hintStepObj ? `#${hintStepObj.step}` : "";
  });
}

/**
 * Actualiza en tiempo real la línea perpendicular (Columna o Fila) cuando el usuario mueve el mouse
 * por las celdas del eje activo, tal como en Cyberpunk 2077.
 */
function updateMatrixHoverCrosshair() {
  if (!bwState.cellEls) return;
  bwState.cellEls.forEach(({ cell, r, c }) => {
    const isUsed = bwState.usedCells.has(`${r}-${c}`);
    let preview = false;
    if (bwState.hoverCoord && !bwState.solved && !isUsed) {
      if (bwState.mode === "row" && c === bwState.hoverCoord.c && r !== bwState.hoverCoord.r) {
        preview = true;
      } else if (bwState.mode === "col" && r === bwState.hoverCoord.r && c !== bwState.hoverCoord.c) {
        preview = true;
      }
    }
    cell.classList.toggle("next-axis-preview", preview);
  });
}

function handleBlackwallMatrixPick(r, c, fromAuto = false) {
  const file = BLACKWALL_FILES.find((f) => f.id === bwState.activeFileId);
  if (!file || bwState.solved) return;
  if (bwState.autoDecrypting && !fromAuto) return;

  const pickedHex = bwState.grid[r][c];
  const expectedHex = file.sequence[bwState.matchedSteps];

  bwState.usedCells.add(`${r}-${c}`);
  bwState.buffer.push(pickedHex);
  bwState.hoverCoord = null;

  // Alternar eje: si estábamos en FILA, ahora pasamos a la COLUMNA c; si estábamos en COLUMNA, pasamos a la FILA r
  if (bwState.mode === "row") {
    bwState.mode = "col";
    bwState.activeIndex = c;
  } else {
    bwState.mode = "row";
    bwState.activeIndex = r;
  }

  if (pickedHex === expectedHex) {
    sfx.click();
    bwState.matchedSteps += 1;

    if (bwState.matchedSteps === file.sequence.length) {
      bwState.solved = true;
      bwState.autoDecrypting = false;
      sfx.success();
      renderBlackwallModalUI();
      completeBlackwallFileUnlock(file);
      return;
    }
  } else {
    sfx.emp();
    bwState.matchedSteps = pickedHex === file.sequence[0] ? 1 : 0;
  }

  // Si se llenó el búfer sin completar la secuencia, reiniciar automáticamente tras breve pausa
  if (bwState.buffer.length >= BW_BUFFER_MAX && !bwState.solved) {
    setTimeout(() => {
      if (bwState.activeFileId) {
        setupBlackwallMatrixForFile(bwState.activeFileId);
        bwState.showHint = true;
        renderBlackwallModalUI();
      }
    }, 900);
    renderBlackwallModalUI();
    return;
  }

  renderBlackwallModalUI();
}

function completeBlackwallFileUnlock(file) {
  bwState.unlocked.add(file.id);

  setTimeout(() => {
    closeBlackwallModal();
    renderBlackwallCards(file.id);
  }, 850);
}



