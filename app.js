/**
 * ============================================================================
 * IGNACIO VELIZ // EDGERUNNERS HOLOGRAPHIC HUD & CYBERDECK CONTROLLER (app.js)
 * ============================================================================
 * Edita el objeto PORTFOLIO_DATA a continuación para personalizar tus datos
 * personales, proyectos, habilidades y enlaces de contacto.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "IGNACIO VELIZ",
    role: "Analista Desarrollador · Full-Stack Developer",
    level: 50,
    streetCred: 50,
    affiliation: "3+ Años // IDEA UNO",
    specialty: "Laravel · React · AWS · Docker",
    bounty: "APIS RESTFUL, CLOUD & CI/CD",
    location: "Santiago, Chile",
    totalRam: 16,
    bio: [
      "Con 3 años de experiencia en desarrollo de software, especializado en Laravel y con proyectos realizados en Flask y .NET. Domino tecnologías como Laravel, React, AWS Lambda, Serverless Framework, JavaScript y Docker.",
      "He liderado y participado en proyectos reales internos y externos en IDEA UNO, fortaleciendo mis habilidades técnicas, de liderazgo y trabajo colaborativo con Jira y Confluence. Actualmente finalizo mis estudios de Ingeniería en Informática en DUOC UC (modalidad vespertina), complementando formación académica con experiencia práctica en producción."
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
      id: "SYS-01",
      title: "ECOSISTEMA EMPRESARIAL & APIS RESTFUL",
      category: "webapp",
      threat: "PRODUCCIÓN // LARAVEL & REACT",
      desc: "Liderazgo y desarrollo de plataformas web y servicios API RESTful internos y externos en IDEA UNO, integrando seguridad con JWT/OAuth2, actualización de versiones y vistas responsivas.",
      stack: ["PHP", "Laravel", "React", "JavaScript", "JWT / OAuth2", "Bootstrap"],
      demoUrl: "https://github.com/markawaii",
      repoUrl: "https://github.com/markawaii"
    },
    {
      id: "SYS-02",
      title: "ARQUITECTURA CLOUD SERVERLESS & MICROSERVICIOS",
      category: "systems",
      threat: "AWS // PYTHON & .NET",
      desc: "Diseño e implementación de funciones y servicios backend escalables desplegados sobre AWS Lambda mediante Serverless Framework, combinando ecosistemas en Python (Flask) y C# (.NET).",
      stack: ["Python", "Flask", "C#", ".NET", "AWS Lambda", "Serverless Framework"],
      demoUrl: "https://github.com/markawaii",
      repoUrl: "https://github.com/markawaii"
    },
    {
      id: "SYS-03",
      title: "INFRAESTRUCTURA DOCKER & PIPELINES CI/CD",
      category: "systems",
      threat: "DEVOPS // PRODUCCIÓN & QA",
      desc: "Configuración, contenerización y levantamiento de ambientes productivos y de aseguramiento de calidad (QA) con Docker, automatizando despliegues con Bitbucket Pipelines y GitHub Actions.",
      stack: ["Docker", "CI/CD", "GitHub Actions", "Bitbucket Pipelines", "AWS", "Postman"],
      demoUrl: "https://github.com/markawaii",
      repoUrl: "https://github.com/markawaii"
    },
    {
      id: "SYS-04",
      title: "CYBERPUNK TERMINAL // INTERACTIVE PORTFOLIO",
      category: "ui",
      threat: "FRONTEND // UI ENGINE",
      desc: "Portafolio interactivo inspirado en las terminales de Cyberpunk 2077 con Matriz Hexadecimal Breach Protocol (cruce de filas y columnas), sintetizador WebAudio API y generador criptográfico de tokens.",
      stack: ["JavaScript", "HTML5", "CSS3 Clip-Path", "Web Audio API"],
      demoUrl: "https://github.com/markawaii",
      repoUrl: "https://github.com/markawaii"
    }
  ],

  cyberware: [
    {
      category: "LENGUAJES, FRAMEWORKS & FRONTEND",
      slot: "MOD: CORE_STACK",
      items: [
        { name: "PHP & Laravel Framework", tier: "ESPECIALISTA", level: 96 },
        { name: "JavaScript, React, HTML5 & Bootstrap", tier: "AVANZADO", level: 92 },
        { name: "Python (Flask) & C# (.NET)", tier: "AVANZADO", level: 88 }
      ]
    },
    {
      category: "CLOUD, DEVOPS & SEGURIDAD",
      slot: "MOD: CLOUD_OPS",
      items: [
        { name: "AWS Lambda & Serverless Framework", tier: "AVANZADO", level: 90 },
        { name: "Docker & Ambientes Productivos / QA", tier: "AVANZADO", level: 92 },
        { name: "CI/CD (GitHub / Bitbucket) · JWT & OAuth2", tier: "AVANZADO", level: 91 }
      ]
    },
    {
      category: "ARQUITECTURA, GESTIÓN & CALIDAD (QA)",
      slot: "MOD: ARCH_LEAD",
      items: [
        { name: "Jira, Confluence & Trello (Liderazgo Técnico)", tier: "AVANZADO", level: 95 },
        { name: "Arquitectura de Software & Modelos de Datos", tier: "CERTIFICADO", level: 92 },
        { name: "APIs RESTful, Postman & Calidad de Software", tier: "AVANZADO", level: 94 }
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
  renderCyberware();
  renderContacts();
  initBlackwallSection();
  initDaemonNavigation();
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
    bioContainer.innerHTML = profile.bio.map((p) => `<p>${p}</p>`).join("");
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
      (gig) => `
      <div class="gig-card">
        <div>
          <div class="gig-top">
            <span class="gig-code">PROJECT_ID // ${gig.id}</span>
            <span class="gig-threat">${gig.threat}</span>
          </div>
          <h3 class="gig-title">${gig.title}</h3>
          <p class="gig-desc">${gig.desc}</p>
        </div>
        <div>
          <div class="gig-stack">
            ${gig.stack.map((tech) => `<span class="stack-chip">${tech}</span>`).join("")}
          </div>
          <div class="gig-links">
            <a href="${gig.demoUrl}" target="_blank" rel="noopener" class="gig-link">LIVE_DEMO [↗]</a>
            <a href="${gig.repoUrl}" target="_blank" rel="noopener" class="gig-link">SOURCE_CODE [&lt;/&gt;]</a>
          </div>
        </div>
      </div>
    `
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

  container.innerHTML = PORTFOLIO_DATA.cyberware
    .map(
      (cat) => `
      <div class="cw-category-card">
        <div class="cw-cat-header">
          <span class="cw-cat-title">${cat.category}</span>
          <span class="cw-cat-slot">${cat.slot}</span>
        </div>
        <div class="cw-items-list">
          ${cat.items
            .map(
              (item) => `
              <div class="cw-implant">
                <div class="cw-implant-top">
                  <span>${item.name}</span>
                  <span class="cw-tier">${item.tier}</span>
                </div>
                <div class="cw-bar-bg">
                  <div class="cw-bar-fill" style="width: ${item.level}%"></div>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
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
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sfx.success();
      const handle = document.getElementById("sender-handle").value;
      feedback.classList.remove("hidden");
      setTypedText(
        feedback,
        `>> TRANSMISIÓN ENVIADA DESDE [${handle.toUpperCase()}]. IGNACIO VELIZ RESPONDERÁ PRONTO.`,
        1150
      );
      form.reset();
    });
  }
}

/* ============================================================================
   5. NAVEGACIÓN DE DAEMONS (QUICKHACKING TABS)
   ============================================================================ */
function initDaemonNavigation() {
  const tabs = document.querySelectorAll(".daemon-tab");
  const panels = document.querySelectorAll(".deck-panel");
  const inspectorEl = document.getElementById("inspector-text");

  const activateTab = (tabName) => {
    const targetTab = Array.from(tabs).find((t) => t.dataset.tab === tabName);
    if (!targetTab || targetTab.classList.contains("active")) return;

    sfx.click();

    tabs.forEach((t) => t.classList.remove("active"));
    targetTab.classList.add("active");

    const ramCost = parseInt(targetTab.dataset.ram || "2", 10);
    updateRamDisplay(ramCost);

    panels.forEach((p) => p.classList.remove("active"));
    const activePanel = document.getElementById(`tab-${tabName}`);
    if (activePanel) {
      activePanel.classList.add("active");
      animateContainerTexts(activePanel);
    }

    if (tabName === "breach") {
      startAutonomousBreachCycle();
    } else {
      clearInterval(breachState.stepTimer);
      clearInterval(breachState.countdownInterval);
    }

    if (inspectorEl && targetTab.dataset.desc) {
      inspectorEl.textContent = `MÓDULO ACTIVO: ${targetTab.dataset.desc}`;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => sfx.hover());
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  });

  document.querySelectorAll("[data-goto-tab]").forEach((btn) => {
    btn.addEventListener("click", () => activateTab(btn.dataset.gotoTab));
  });

  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    const gate = document.getElementById("intrusion-gate");
    if (gate && !gate.classList.contains("hidden")) return;
    const map = { "1": "dossier", "2": "gigs", "3": "cyberware", "4": "breach", "5": "blackwall", "6": "holocall" };
    if (map[e.key]) activateTab(map[e.key]);
  });
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
    if (e.key.toLowerCase() === "r") {
      sfx.click();
      startAutonomousBreachCycle();
    }
  });

  updatePresetAndLengthUI();
  startAutonomousBreachCycle();
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

  const toggleAudio = () => {
    sfx.enabled = !sfx.enabled;
    if (sfxLabel) sfxLabel.textContent = `SFX: ${sfx.enabled ? "ON" : "OFF"}`;
    if (sfx.enabled) sfx.click();
  };

  if (sfxBtn) sfxBtn.addEventListener("click", toggleAudio);

  if (glitchBtn) {
    glitchBtn.addEventListener("click", () => {
      sfx.emp();
      document.body.classList.remove("emp-glitch");
      void document.body.offsetWidth;
      document.body.classList.add("emp-glitch");
    });
  }

  window.addEventListener("keydown", (e) => {
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

  // Mostrar siempre el modal de carga al entrar o recargar (Ctrl + R)
  localStorage.removeItem(GATE_STORAGE_KEY);
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
  if (linesEl) linesEl.innerHTML = "";
  if (pctPill) pctPill.textContent = "0%";
  if (progressNum) progressNum.textContent = "0%";
  if (progressFill) progressFill.style.width = "0%";
  if (statusText) statusText.textContent = "INICIALIZANDO ENLACE NEURAL...";
  if (headerState) {
    headerState.textContent = "SINCRONIZANDO PERFIL...";
    headerState.classList.remove("granted");
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
  localStorage.setItem(GATE_STORAGE_KEY, "granted");
  updateClearanceBadge("granted");

  if (gateOverlay) {
    gateOverlay.classList.add("hidden");
  }

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
            Archivo protegido. Inicia la Matriz Hexadecimal o usa el desencriptado automático para desbloquear su contenido.
          </p>
        </div>
        <div class="bw-card-footer">
          <button type="button" class="cyber-btn btn-cyan" data-bw-open="${file.id}">
            INICIAR BREACH // MATRIZ HEX
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
  bwState.showHint = true;
  bwState.autoDecrypting = true;
  renderBlackwallModalUI();

  const stepInterval = 520;

  bwState.solutionPath.forEach((stepNode, idx) => {
    // Fase 1: Apuntar al nodo y previsualizar el cruce Fila/Columna
    const tAim = setTimeout(() => {
      sfx.hover();
      bwState.hoverCoord = { r: stepNode.r, c: stepNode.c };
      bwState.autoTargetCoord = { r: stepNode.r, c: stepNode.c };
      renderBlackwallModalUI();
    }, idx * stepInterval + 80);

    // Fase 2: Acoplar el byte en el búfer y cambiar de eje (Fila <-> Columna)
    const tPick = setTimeout(() => {
      bwState.autoTargetCoord = null;
      handleBlackwallMatrixPick(stepNode.r, stepNode.c, true);
    }, idx * stepInterval + 340);

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



