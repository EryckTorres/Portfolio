//Seletor de bandeira
const selector = document.querySelector(".flag-selector");
const mainFlag = document.querySelector(".main-flag");
const optionsContainer = document.querySelector(".options");

const flags = [
  { src: "./assets/images/flags/US_FLAG.png", alt: "English" },
  { src: "./assets/images/flags/BR_FLAG.png", alt: "Português" },
  { src: "./assets/images/flags/ES_FLAG.png", alt: "Español" },
  { src: "./assets/images/flags/FR_FLAG.png", alt: "Français" },
];

// Abre/fecha
selector.addEventListener("click", () => {
  // Só expande se não estiver aberto
  if (!selector.classList.contains("active")) {
    selector.classList.add("active");

    // Mostra apenas as bandeiras que não são a atual
    optionsContainer.innerHTML = "";
    flags
      .filter(f => f.alt !== mainFlag.alt)
      .forEach(flag => {
        const img = document.createElement("img");
        img.src = flag.src;
        img.alt = flag.alt;
        optionsContainer.appendChild(img);

        img.addEventListener("click", (e) => {
          e.stopPropagation(); // evita fechar ao clicar no container
          // Troca a bandeira principal
          mainFlag.src = flag.src;
          mainFlag.alt = flag.alt;

          // Fecha novamente
          selector.classList.remove("active");
          optionsContainer.innerHTML = "";
        });
      });
  } else {
    // Se já estiver aberto e clicar fora → fecha
    selector.classList.remove("active");
    optionsContainer.innerHTML = "";
  }
});

// ----- i18n GLOBAL -----
const langByAlt = {
  "English": "en",
  "Português": "pt",
  "Español": "es",
  "Français": "fr",
};

// arrays com os textos (na ordem: HOME, ABOUT, PROJECTS, CONTACT)
const i18nHeader = {
  en: ["HOME", "ABOUT ME", "PROJECTS", "CONTACT"],
  pt: ["INÍCIO", "SOBRE MIM", "PROJETOS", "CONTATO"],
  es: ["INICIO", "SOBRE MÍ", "PROYECTOS", "CONTACTO"],
  fr: ["ACCUEIL", "À PROPOS", "PROJETS", "CONTACT"],
};

const translations = {
  en: {
    portfolio: "PORT<br>FOLIO",
    about: "Hello,<br>I'm "
  },
  pt: {
    portfolio: "PORT<br>FÓLIO",
    about: "Olá, eu sou o<br>"
  },
  es: {
    portfolio: "PORTA<br>FOLIO",
    about: "Hola, soy<br>"
  },
  fr: {
    portfolio: "PORT<br>FOLIO",
    about: "Bonjour, je suis<br>"
  }
};

// aplica os textos ao header
function translateHeader(lang) {
  const dict = i18nHeader[lang] || i18nHeader.en;
  const map = {
    "#home":      dict[0],
    "#about-me":  dict[1],
    "#projects":  dict[2],
    "#contact":   dict[3],
  };

  Object.entries(map).forEach(([href, text]) => {
    const el = document.querySelector(`.nav-list a[href="${href}"]`);
    if (el) el.textContent = text;
  });
}

function updatePortfolio(lang) {
  document.getElementById("portfolio-title").innerHTML = translations[lang].portfolio;
}

function updateAbout(lang) {
  const aboutTitle = document.getElementById("about-title");
  const aboutName = aboutTitle.querySelector(".about-nome").outerHTML; // mantém o <span>
  aboutTitle.innerHTML = translations[lang].about + aboutName + "!";
}

// pega o idioma a partir da bandeira principal e traduz
function applyHeaderByMainFlag() {
  const mainFlag = document.querySelector(".main-flag");
  const lang = langByAlt[mainFlag?.alt] || "en";
  translateHeader(lang);
  updatePortfolio(lang);
  updateAbout(lang);
}

// 1) traduz ao carregar
document.addEventListener("DOMContentLoaded", applyHeaderByMainFlag);

// 2) observa mudanças no ALT da bandeira principal (quando você troca no seu código)
const mainFlagEl = document.querySelector(".main-flag");
if (mainFlagEl) {
  const obs = new MutationObserver((muts) => {
    if (muts.some(m => m.type === "attributes" && m.attributeName === "alt")) {
      applyHeaderByMainFlag();
    }
  });
  obs.observe(mainFlagEl, { attributes: true, attributeFilter: ["alt"] });
}