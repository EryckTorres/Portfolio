console.log('olá mundo!');

// Animação de Intro

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() =>{

        logoSpan.forEach((span, idx) => {
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        
        setTimeout(() =>{
            logoSpan.forEach((span, idx) => {

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

// Detecta o scroll da página
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu Hamburguer
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

//Efeito Typewriter
const textos = ["DESIGNER", "DEVELOPER", "ILLUSTRATOR"];
const elemento = document.querySelector(".subtitulo-main");

let indiceTexto = 0;
let indiceLetra = 0;
let apagando = false;

// velocidades configuráveis
const speedWrite = 120;
const speedDelete = 70;
const pause = 1000;
const startDelay = 3000;

function digitar() {
  let textoAtual = textos[indiceTexto];

  if (!apagando) {
    elemento.textContent = textoAtual.slice(0, indiceLetra++);
    if (indiceLetra > textoAtual.length) {
      apagando = true;
      setTimeout(digitar, pause);
      return;
    }
  } else {
    elemento.textContent = textoAtual.slice(0, indiceLetra--);
    if (indiceLetra < 0) {
      apagando = false;
      indiceTexto = (indiceTexto + 1) % textos.length;
      indiceLetra = 0;
    }
  }

  setTimeout(digitar, apagando ? speedDelete : speedWrite);
}

// só começa 3 segundos depois que a página carregar
window.addEventListener("load", () => {
  setTimeout(digitar, startDelay);
});

//Formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        status.textContent = 'Enviando...';
        status.style.color = 'var(--branco)';

        const formAction = form.action;
        const data = new FormData(form);

        try {
            // Usa a API 'fetch' para enviar os dados de forma assíncrona
            const response = await fetch(formAction, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = 'Mensagem enviada com sucesso! Em breve, entrarei em contato.';
                status.style.color = 'green';
                form.reset();
            } else {
                const responseData = await response.json();
                if (responseData.errors) {
                    status.textContent = responseData.errors.map(error => error.message).join(", ");
                } else {
                    status.textContent = 'Ocorreu um erro no envio. Por favor, tente novamente.';
                }
                status.style.color = 'red';
            }
        } catch (error) {
            status.textContent = 'Houve um problema com a conexão. Verifique sua internet e tente novamente.';
            status.style.color = 'red';
        }
    });
});

// LightBox

const images = document.querySelectorAll('.grid-container2 img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    lightboxImg.style.opacity = 0;
    setTimeout(() => {
        lightboxImg.src = images[index].src;
        lightboxImg.style.opacity = 1;
    }, 200);
}

images.forEach((img, i) => {
    img.addEventListener('click', () => {
        currentIndex = i;
        lightbox.style.display = 'flex';
        showImage(currentIndex);
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Carrossel de projetos de design
const projetosDesign = [
    {
        id: '01',
        link: 'https://www.behance.net/gallery/192205033/pao-que-gato-amassou-IDENTIDADE-VISUAL',
        imagens: {
            logo: './assets/images/projects/design/catcafe/logo.png',
            galleryTop: 'https://live.staticflickr.com/65535/54718235197_8f9ee3b18e_c.jpg',
            logotype: './assets/images/projects/design/catcafe/logotype.png',
            galleryBot: 'https://live.staticflickr.com/65535/54718235157_d86238cd42_c.jpg',
            galleryMid: 'https://live.staticflickr.com/65535/54719128771_bb53d52bf6_c.jpg',
            gallerySide: 'https://live.staticflickr.com/65535/54719371623_6187c6d32a_c.jpg',
            galleryFinal: 'https://live.staticflickr.com/65535/54719387634_59f0c62744_c.jpg'
        },
        paleta: [
            { bg: '#530C00', text: '#E8D0A0' },
            { bg: '#AC4C34', text: '#E8D0A0' },
            { bg: '#E74431', text: '#E8D0A0' },
            { bg: '#D3AD64', text: '#530C00' },
            { bg: '#E8D0A0', text: '#530C00' }
        ],
        tipografia: {
            header: 'Mokomori Kuro',
            body: 'Poppins'
        },
        cores: {
            logoBoxBg: '#E8D0A0',
            boxTextBg: '#E8D0A0',
            boxTextColor: '#E74431'
        }
    },
    {
        id: '02',
        link: 'https://www.behance.net/gallery/222526779/COLETIVO-EDVARD-DANTAS-IDENTIDADE-VISUAL',
        imagens: {
            logo: './assets/images/projects/design/ced/logotype.png',
            galleryTop: 'https://live.staticflickr.com/65535/54719419052_2fb11704b6_c.jpg',
            logotype: './assets/images/projects/design/ced/logo.png',
            galleryBot: 'https://live.staticflickr.com/65535/54719416222_15ba76c763_c.jpg',
            galleryMid: 'https://live.staticflickr.com/65535/54720540063_7632610e80_c.jpg',
            gallerySide: 'https://live.staticflickr.com/65535/54720524608_32be79b9c3_c.jpg',
            galleryFinal: 'https://live.staticflickr.com/65535/54719415902_faf81fd2b0_c.jpg'
        },
        paleta: [
            { bg: '#FF8A09', text: '#F7DBA9' },
            { bg: '#00CA42', text: '#185226' },
            { bg: '#185226', text: '#F7DBA9' },
            { bg: '#009FEB', text: '#002E6C' },
            { bg: '#002E6C', text: '#F7DBA9' }
        ],
        tipografia: {
            header: 'DAGESTAN',
            body: 'Montserrat'
        },
        cores: {
            logoBoxBg: '#185226',
            boxTextBg: '#185226',
            boxTextColor: '#F7DBA9'
        }
    },
    {
        id: '03',
        link: 'https://www.behance.net/gallery/195892235/VELHO-CHICO-IDENTIDADE-VISUAL',
        imagens: {
            logo: './assets/images/projects/design/velhoChico/logo.png',
            galleryTop: 'https://live.staticflickr.com/65535/54720340192_0ef7d8e649_c.jpg',
            logotype: './assets/images/projects/design/velhoChico/mockup.png',
            galleryBot: 'https://live.staticflickr.com/65535/54721169781_ab749d2496_c.jpg',
            galleryMid: 'https://live.staticflickr.com/65535/54721512605_7f816c0758_c.jpg',
            gallerySide: 'https://live.staticflickr.com/65535/54721383788_3aedcd4c86_c.jpg',
            galleryFinal: 'https://live.staticflickr.com/65535/54720340112_3acd7f85ac_c.jpg'
        },
        paleta: [
            { bg: '#333D79', text: '#D9C29E' },
            { bg: '#F3A94F', text: '#111820' },
            { bg: '#E94B3D', text: '#111820' },
            { bg: '#D9C29E', text: '#111820' },
            { bg: '#111820', text: '#D9C29E' }
        ],
        tipografia: {
            header: 'Bauhaus',
            body: 'Glacial Indiff'
        },
        cores: {
            logoBoxBg: '#E94B3D',
            boxTextBg: '#333D79',
            boxTextColor: '#D9C29E'
        }
    }
];

let indiceDesignAtual = 0;
const designContainer = document.querySelector(".projects-design");
const gridContainer = designContainer.querySelector(".grid-container");

const logoImg = gridContainer.querySelector('[style*="box-1"] .logo-img');
const galleryImgTop = gridContainer.querySelector('[style*="box-2"] .gallery__img');
const logotypeImg = gridContainer.querySelector('[style*="box-3"] .logo-img2');
const galleryImgBot = gridContainer.querySelector('[style*="box-4"] .gallery__img');
const paletteContainer = gridContainer.querySelector('.palette-cascade');
const galleryImgMid = gridContainer.querySelector('[style*="box-6"] .gallery__img');
const typoContainer = gridContainer.querySelector('.box-text');
const galleryImgSide = gridContainer.querySelector('[style*="box-8"] .gallery__img');
const seeMoreLink = gridContainer.querySelector('.bt-see-more');
const galleryImgFinal = gridContainer.querySelector('[style*="box-9"] .gallery__img');

function atualizarGrid(direcao) {
    const projeto = projetosDesign[indiceDesignAtual];
    const slideOutDirection = direcao === 'right' ? '-50px' : '50px';
    const slideInDirection = direcao === 'right' ? '50px' : '-50px';

    gridContainer.style.opacity = '0';
    gridContainer.style.transform = `translateX(${slideOutDirection})`;

    setTimeout(() => {

        gridContainer.style.transition = 'none'; 
        gridContainer.style.transform = `translateX(${slideInDirection})`;

        logoImg.src = projeto.imagens.logo;
        galleryImgTop.src = projeto.imagens.galleryTop;
        logotypeImg.src = projeto.imagens.logotype;
        galleryImgBot.src = projeto.imagens.galleryBot;
        galleryImgMid.src = projeto.imagens.galleryMid;
        galleryImgSide.src = projeto.imagens.gallerySide;
        galleryImgFinal.src = projeto.imagens.galleryFinal;
        seeMoreLink.href = projeto.link;
        const paletaDivs = paletteContainer.querySelectorAll('div');
        paletaDivs.forEach((div, index) => {
            const cor = projeto.paleta[index];
            div.style.background = cor.bg;
            const h2 = div.querySelector('h2');
            h2.textContent = cor.bg.toUpperCase();
            h2.style.color = cor.text;
        });

        const typoHeaders = typoContainer.querySelectorAll('h1');
        typoHeaders[0].textContent = projeto.tipografia.header;
        typoHeaders[1].textContent = projeto.tipografia.body;

        const logoBoxes = gridContainer.querySelectorAll('.logo-box');
        logoBoxes.forEach(lb => lb.style.backgroundColor = projeto.cores.logoBoxBg);

        typoContainer.style.backgroundColor = projeto.cores.boxTextBg;
        typoContainer.style.color = projeto.cores.boxTextColor;

        typoContainer.querySelectorAll('h1, h2').forEach(el => {
            el.style.color = projeto.cores.boxTextColor;
        });
        
        void gridContainer.offsetWidth; 

        gridContainer.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';

        gridContainer.style.opacity = '1';
        gridContainer.style.transform = 'translateX(0)';

    }, 400);
}

document.getElementById("prev-project").addEventListener("click", () => {
    indiceDesignAtual = (indiceDesignAtual - 1 + projetosDesign.length) % projetosDesign.length;
    atualizarGrid('left');
});

document.getElementById("next-project").addEventListener("click", () => {
    indiceDesignAtual = (indiceDesignAtual + 1) % projetosDesign.length;
    atualizarGrid('right');
});

const primeiroProjeto = projetosDesign[indiceDesignAtual];
logoImg.src = primeiroProjeto.imagens.logo;
galleryImgTop.src = primeiroProjeto.imagens.galleryTop;