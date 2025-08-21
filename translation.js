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

// Carrossel de Projetos
const projetos = [
  {
    id: "01",
    titulo: {
      en: 'Sales Forecasting<br>Algorithm “ITAMIND”',
      pt: 'Algoritmo de Previsão de Vendas “ITAMIND”',
      es: 'Algoritmo de Pronóstico de Ventas<br>“ITAMIND”',
      fr: 'Algorithme de Prévision des Ventes<br>“ITAMIND”'
    },
    descricao: {
      en: 'This project solves the problem of wasted frozen products, such as chicken wings, in supermarkets. It uses an algorithm that predicts sales demand. The goal is to help determine the quantity and timing of thawing, ensuring they are sold within two days and thus avoiding losses due to excess stock or expiration dates.',
      pt: 'Este projeto resolve o problema do desperdício de produtos congelados, como asinhas de frango, em supermercados. Ele utiliza um algoritmo que prevê a demanda de vendas. O objetivo é ajudar a determinar a quantidade e o momento do descongelamento, garantindo que sejam vendidos em até dois dias e evitando perdas por excesso de estoque ou vencimento.',
      es: 'Este proyecto resuelve el problema del desperdicio de productos congelados, como las alitas de pollo, en los supermercados. Utiliza un algoritmo que predice la demanda de ventas. El objetivo es ayudar a determinar la cantidad y el momento de la descongelación, asegurando que se vendan en dos días y evitando pérdidas por exceso de inventario o fechas de vencimiento.',
      fr: 'Ce projet résout le problème du gaspillage de produits surgelés, comme les ailes de poulet, dans les supermarchés. Il utilise un algorithme qui prédit la demande de ventes. L’objectif est d’aider à déterminer la quantité et le moment de la décongélation, afin qu’ils soient vendus en deux jours et éviter les pertes dues à un excès de stock ou aux dates d’expiration.'
    },
    link: 'https://github.com/eliascmendes/ItaMind',
    imagem: './assets/images/projects/dev/itamind.png',
    softwares: ['CSS', 'HTML 5']
  },
  {
    id: "02",
    titulo: {
      en: 'The Secret<br>Number Game',
      pt: 'O Jogo do<br>Número Secreto',
      es: 'El Juego del<br>Número Secreto',
      fr: 'Le Jeu du<br>Nombre Secret'
    },
    descricao: {
      en: 'The "Secret Number" project is a guessing game developed with HTML, CSS, and JavaScript. The logic generates a random number between 1 and 100, and the player must discover what it is. With each attempt, the system provides hints to guide the user. This project is ideal for practicing concepts of DOM manipulation, flow control, and functions in JavaScript.',
      pt: 'O projeto "Número Secreto" é um jogo de adivinhação desenvolvido com HTML, CSS e JavaScript. A lógica gera um número aleatório entre 1 e 100, e o jogador deve descobrir qual é. A cada tentativa, o sistema fornece dicas para orientar o usuário. Este projeto é ideal para praticar conceitos de manipulação do DOM, controle de fluxo e funções em JavaScript.',
      es: 'El proyecto "Número Secreto" es un juego de adivinanzas desarrollado con HTML, CSS y JavaScript. La lógica genera un número aleatorio entre 1 y 100, y el jugador debe descubrir cuál es. Con cada intento, el sistema da pistas para guiar al usuario. Este proyecto es ideal para practicar conceptos de manipulación del DOM, control de flujo y funciones en JavaScript.',
      fr: 'Le projet "Nombre Secret" est un jeu de devinette développé avec HTML, CSS et JavaScript. La logique génère un nombre aléatoire entre 1 et 100, et le joueur doit le découvrir. À chaque tentative, le système fournit des indices pour guider l’utilisateur. Ce projet est idéal pour pratiquer la manipulation du DOM, le contrôle du flux et les fonctions en JavaScript.'
    },
    link: 'https://github.com/EryckTorres/numero-secreto',
    imagem: './assets/images/projects/dev/numero_secreto.png',
    softwares: ['JavaScript', 'HTML 5', 'CSS']
  }
];

let indiceAtual = 0;

const projetosContainer = document.querySelector(".projects-dev");
const imgDemoContainer = projetosContainer.querySelector(".projects-dev-demo");
const imgDemo = imgDemoContainer.querySelector("img"); // agora pegamos a imagem diretamente
const titulo = projetosContainer.querySelector(".projects-dev-title");
const subtitulo = projetosContainer.querySelector(".projects-dev-subtitle");
const descricao = projetosContainer.querySelector(".textblock");
const link = projetosContainer.querySelector(".bt-link");
const textContainer = projetosContainer.querySelector(".projects-dev-text");
const softwaresContainer = projetosContainer.querySelector(".dev-softwares");

function atualizarProjeto(direcao, lang = "en") {
  const slideOutClass = direcao === "left" ? "slide-out-left" : "slide-out-right";

  imgDemoContainer.classList.add(slideOutClass);
  textContainer.classList.add(slideOutClass);

  setTimeout(() => {
    const projeto = projetos[indiceAtual];

    titulo.innerHTML = projeto.id;
    subtitulo.innerHTML = projeto.titulo[lang];
    softwaresContainer.innerHTML = projeto.softwares
      .map(soft => `<h4>${soft}</h4>`)
      .join('');
    descricao.innerHTML = projeto.descricao[lang]; // usei innerHTML pq pode ter <br> ou <strong>
    link.parentElement.href = projeto.link;
    imgDemo.src = projeto.imagem;

    imgDemoContainer.classList.remove(slideOutClass);
    textContainer.classList.remove(slideOutClass);
  }, 400);
}

document.querySelectorAll(".bt-seta").forEach((seta) => {
  seta.addEventListener("click", () => {
    const mainFlag = document.querySelector(".main-flag");
    const lang = langByAlt[mainFlag?.alt] || "en";

    if (seta.src.includes("seta-esquerda")) {
      indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
      atualizarProjeto("left", lang);
    } else {
      indiceAtual = (indiceAtual + 1) % projetos.length;
      atualizarProjeto("right", lang);
    }
  });
});

atualizarProjeto();

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
    about: "Hello, I'm<br>",
    aboutCircle: "ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME • ",
    aboutTextblock: `I'm a Design student at the Federal University of Maranhão (UFMA), focusing on <strong>front-end and UX design.</strong> My goal is to combine the aesthetics of design with the functionality of technology, creating intuitive and visually appealing digital experiences. I'm also passionate about <strong>digital illustration and branding,</strong> as I believe these fields allow me to express my creativity while effectively solving communication and visual identity problems. My portfolio reflects this enthusiasm, where I seek to apply my passion and skills to develop innovative and impactful projects.`,
    skillsTitle: "My Skills",
    projectsTitle: "Projects",
    seeMore: "SEE MORE",
    contactTitle: "Ring a bell!",
    contactText: "Ready for the next challenge! Get in touch to discuss<br>how we can bring together design and technology in your project.",
    placeholderName: "Name",
    placeholderEmail: "E-mail",
    placeholderMessage: "How can I help ya?",
    sendButton: "Send",
    footerText: "© 2025 <strong>Eryck Torres.</strong> All rights reserved."
  },
  pt: {
    portfolio: "PORT<br>FÓLIO",
    about: "Olá, eu sou o<br>",
    aboutCircle: "SOBRE MIM • SOBRE MIM • SOBRE MIM • SOBRE MIM • SOBRE MIM • SOBRE MIM • SBR • ",
    aboutTextblock: `Sou estudante de Design na Universidade Federal do Maranhão (UFMA), com foco em <strong>front-end e design de UX.</strong> Meu objetivo é unir a estética do design com a funcionalidade da tecnologia, criando experiências digitais intuitivas e visualmente atraentes. Também sou apaixonado por <strong>ilustração digital e branding,</strong> pois acredito que essas áreas me permitem expressar minha criatividade ao mesmo tempo em que soluciono problemas de comunicação e identidade visual. Meu portfólio reflete esse entusiasmo, onde busco aplicar minha paixão e habilidades para desenvolver projetos inovadores e de impacto.`,
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    seeMore: "VER MAIS",
    contactTitle: "Dê um toque!",
    contactText: "Pronto para o próximo desafio! Entre em contato para discutirmos<br>como podemos unir design e tecnologia no seu projeto.",
    placeholderName: "Nome",
    placeholderEmail: "E-mail",
    placeholderMessage: "Como posso te ajudar?",
    sendButton: "Enviar",
    footerText: "© 2025 <strong>Eryck Torres.</strong> Todos os direitos reservados."
  },
  es: {
    portfolio: "PORTA<br>FOLIO",
    about: "Hola, soy<br>",
    aboutCircle: "SOBRE MÍ • SOBRE MÍ • SOBRE MÍ • SOBRE MÍ • SOBRE MÍ • SOBRE MÍ • SOBRE MÍ • . • MÍ • ",
    aboutTextblock: `Soy estudiante de Design en la Universidad Federal de Maranhão (UFMA), con enfoque en <strong>front-end y design UX.</strong> Mi objetivo es combinar la estética del design con la funcionalidad de la tecnología, creando experiencias digitales intuitivas y visualmente atractivas. También me apasiona la <strong>ilustración digital y el branding,</strong> ya que creo que estas áreas me permiten expresar mi creatividad mientras resuelvo eficazmente problemas de comunicación e identidad visual. Mi portafolio refleja este entusiasmo, donde busco aplicar mi pasión y habilidades para desarrollar proyectos innovadores e impactantes.`,
    skillsTitle: "Mis Habilidades",
    projectsTitle: "Proyectos",
    seeMore: "VER MÁS",
    contactTitle: "¡Contáctame!",
    contactText: "¡Listo para el próximo desafío! Ponte en contacto para hablar<br>sobre cómo podemos unir diseño y tecnología en tu proyecto.",
    placeholderName: "Nombre",
    placeholderEmail: "Correo electrónico",
    placeholderMessage: "¿Cómo puedo ayudarte?",
    sendButton: "Enviar",
    footerText: "© 2025 <strong>Eryck Torres.</strong> Todos los derechos reservados."
  },
  fr: {
    portfolio: "PORT<br>FOLIO",
    about: "Bonjour, je suis<br>",
    aboutCircle: "À PROPOS • À PROPOS • À PROPOS • À PROPOS • À PROPOS • À PROPOS • À PROPOS • O",
    aboutTextblock: `Je suis étudiant en Design à l'Université Fédérale du Maranhão (UFMA), avec un accent sur le <strong>front-end et le design UX.</strong> Mon objectif est de combiner l'esthétique du design avec la fonctionnalité de la technologie, en créant des expériences numériques intuitives et visuellement attrayantes. Je suis également passionné par <strong>l'illustration numérique et le branding,</strong> car je crois que ces domaines me permettent d'exprimer ma créativité tout en résolvant efficacement les problèmes de communication et d'identité visuelle. Mon portfolio reflète cet enthousiasme, où je cherche à appliquer ma passion et mes compétences pour développer des projets innovants et percutants.`,
    skillsTitle: "Compétences",
    projectsTitle: "Projets",
    seeMore: "VOIR PLUS",
    contactTitle: "Écrivez-moi!",
    contactText: "Prêt pour le prochain défi ! Contactez-moi pour discuter<br>comment nous pouvons allier design et technologie dans votre projet.",
    placeholderName: "Nom",
    placeholderEmail: "E-mail",
    placeholderMessage: "Comment puis-je vous aider ?",
    sendButton: "Envoyer",
    footerText: "© 2025 <strong>Eryck Torres.</strong> Tous droits réservés."
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
  const prefixEl = document.querySelector("#about-title .about-prefix");
  prefixEl.innerHTML = translations[lang].about; // só troca o prefixo
}

function updateAboutCircle(lang) {
  const circleText = document.querySelector("#about-circle textPath");
  if (circleText) {
    circleText.textContent = translations[lang].aboutCircle;
  }
}

function updateAboutTextblock(lang) {
  const textblock = document.getElementById("aboutTextblock");
  if (textblock) {
    textblock.innerHTML = translations[lang].aboutTextblock;
  }
}

function updateSkillsTitle(lang) {
  const el = document.querySelector(".skills-title");
  if (el) el.textContent = translations[lang].skillsTitle;
}

function updateProjectsTitle(lang) {
  const el = document.querySelector(".projects-title");
  if (el) el.textContent = translations[lang].projectsTitle.toUpperCase(); 
  // se quiser sempre em maiúsculas igual ao HTML original
}

function updateSeeMore(lang) {
    const seeMoreElements = document.querySelectorAll(".bt-text");
    if (translations[lang] && translations[lang].seeMore) {
        seeMoreElements.forEach(el => {
            el.textContent = translations[lang].seeMore;
        });
    }
}

function updateContactTitle(lang) {
    const el = document.querySelector(".contact-title");
    if (translations[lang] && translations[lang].contactTitle) {
        el.innerHTML = translations[lang].contactTitle;
    }
}

function updateContactText(lang) {
    const el = document.querySelector(".textblock-alt");
    if (translations[lang] && translations[lang].contactText) {
        el.innerHTML = translations[lang].contactText;
    }
}

function updatePlaceholders(lang) {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (translations[lang]) {
        if (nameInput) nameInput.placeholder = translations[lang].placeholderName;
        if (emailInput) emailInput.placeholder = translations[lang].placeholderEmail;
        if (messageTextarea) messageTextarea.placeholder = translations[lang].placeholderMessage;
    }
}

function updateSendButton(lang) {
    const el = document.querySelector("button.flex");
    if (translations[lang] && translations[lang].sendButton) {
        el.innerHTML = translations[lang].sendButton;
    }
}

function updateFooter(lang) {
    const el = document.querySelector(".rodape_texto");
    if (translations[lang] && translations[lang].footerText) {
        el.innerHTML = translations[lang].footerText;
    }
}

// pega o idioma a partir da bandeira principal e traduz
function applyHeaderByMainFlag() {
  const mainFlag = document.querySelector(".main-flag");
  const lang = langByAlt[mainFlag?.alt] || "en";
  translateHeader(lang);
  updatePortfolio(lang);
  updateAbout(lang);
  updateAboutCircle(lang);
  updateAboutTextblock(lang);
  updateSkillsTitle(lang);
  updateProjectsTitle(lang);
  atualizarProjeto(null, lang);
  updateSeeMore(lang);
  updateContactTitle(lang);
  updateContactText(lang);
  updatePlaceholders(lang);
  updateSendButton(lang);
  updateFooter(lang);
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

//Typewriter About Me
const nomesAbout = ["Eryck", "Kyukiew"];
const nomeElementoAbout = document.querySelector(".about-nome");

let indiceNomeAbout = 0;
let indiceLetraAbout = nomesAbout[indiceNomeAbout].length;
let apagandoAbout = true;

// velocidades configuráveis
const speedWriteAbout = 200;
const speedDeleteAbout = 160;
const pauseAbout = 1000;
const startDelayAbout = 2000;

function digitarNomeAbout() {
  let nomeAtual = nomesAbout[indiceNomeAbout];

  if (!apagandoAbout) {
    nomeElementoAbout.textContent = nomeAtual.slice(0, indiceLetraAbout++);
    if (indiceLetraAbout > nomeAtual.length) {
      apagandoAbout = true;
      setTimeout(digitarNomeAbout, pauseAbout);
      return;
    }
  } else {
    nomeElementoAbout.textContent = nomeAtual.slice(0, indiceLetraAbout--);
    if (indiceLetraAbout < 0) {
      apagandoAbout = false;
      indiceNomeAbout = (indiceNomeAbout + 1) % nomesAbout.length;
      indiceLetraAbout = 0;
    }
  }

  setTimeout(digitarNomeAbout, apagandoAbout ? speedDeleteAbout : speedWriteAbout);
}

window.addEventListener("load", () => {
  setTimeout(digitarNomeAbout, startDelayAbout);
});