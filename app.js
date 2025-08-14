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

// LightBox

const images = document.querySelectorAll('.grid-container2 img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    lightboxImg.style.opacity = 0; // inicia transição
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

// Carrossel de Projetos

const projetos = [
    {
        id: "01",
        titulo: 'Sales Forecasting<br>Algorithm “ITAMIND”',
        descricao: 'This project solves the problem of wasted frozen products, such as chicken wings, in supermarkets. It uses an algorithm that predicts sales demand. The goal is to help determine the quantity and timing of thawing, ensuring they are sold within two days and thus avoiding losses due to excess stock or expiration dates.',
        link: 'https://github.com/eliascmendes/ItaMind',
        imagem: './assets/images/projects/dev/itamind.png',
        softwares: ['CSS', 'HTML 5']
    },
    {
        id: "02",
        titulo: 'The Secret<br>Number Game',
        descricao: 'The "Secret Number" project is a guessing game developed with HTML, CSS, and JavaScript. The logic generates a random number between 1 and 100, and the player must discover what it is. With each attempt, the system provides hints to guide the user. This project is ideal for practicing concepts of DOM manipulation, flow control, and functions in JavaScript.',
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

function atualizarProjeto(direcao) {
    const slideOutClass = direcao === "left" ? "slide-out-left" : "slide-out-right";

    imgDemoContainer.classList.add(slideOutClass);
    textContainer.classList.add(slideOutClass);

    setTimeout(() => {
        const projeto = projetos[indiceAtual];

        titulo.innerHTML = projeto.id;
        subtitulo.innerHTML = projeto.titulo;
        softwaresContainer.innerHTML = projeto.softwares
            .map(soft => `<h4>${soft}</h4>`)
            .join('');
        descricao.textContent = projeto.descricao;
        link.parentElement.href = projeto.link;
        imgDemo.src = projeto.imagem; // agora alteramos diretamente o src da imagem

        imgDemoContainer.classList.remove(slideOutClass);
        textContainer.classList.remove(slideOutClass);
    }, 400);
}

document.querySelectorAll(".bt-seta")[0].addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
    atualizarProjeto("left");
});

document.querySelectorAll(".bt-seta")[1].addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % projetos.length;
    atualizarProjeto("right");
});

atualizarProjeto();

// Carrossel de projetos de design

// 1. DADOS DOS PROJETOS DE DESIGN
const projetosDesign = [
    {
        id: '01',
        link: 'https://www.behance.net/gallery/192205033/pao-que-gato-amassou-IDENTIDADE-VISUAL', // Link para o botão "SEE MORE"
        imagens: {
            logo: './assets/images/projects/design/catcafe/logo.png',
            galleryTop: 'https://live.staticflickr.com/65535/54718235197_8f9ee3b18e_c.jpg',
            logotype: './assets/images/projects/design/catcafe/logotype.png',
            galleryBot: 'https://live.staticflickr.com/65535/54718235157_d86238cd42_c.jpg',
            galleryMid: 'https://live.staticflickr.com/65535/54719128771_bb53d52bf6_c.jpg',
            gallerySide: 'https://live.staticflickr.com/65535/54719371623_6187c6d32a_c.jpg',
            galleryFinal: 'https://live.staticflickr.com/65535/54719387634_59f0c62744_c.jpg'
        },
        paleta: [ // Array com 5 cores para a paleta
            { bg: '#530C00', text: '#E8D0A0' },
            { bg: '#AC4C34', text: '#E8D0A0' },
            { bg: '#E74431', text: '#E8D0A0' },
            { bg: '#D3AD64', text: '#530C00' },
            { bg: '#E8D0A0', text: '#530C00' }
        ],
        tipografia: { // Fontes usadas no projeto
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
        link: 'https://www.behance.net/gallery/222526779/COLETIVO-EDVARD-DANTAS-IDENTIDADE-VISUAL', // Link do segundo projeto
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


// 3. FUNÇÃO PARA ATUALIZAR O GRID COM ANIMAÇÃO DE SLIDE
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

        // Atualiza cores da .box-text
        typoContainer.style.backgroundColor = projeto.cores.boxTextBg;
        typoContainer.style.color = projeto.cores.boxTextColor;

        // Atualiza cor do texto interno da box-text
        typoContainer.querySelectorAll('h1, h2').forEach(el => {
            el.style.color = projeto.cores.boxTextColor;
        });
        
        void gridContainer.offsetWidth; 

        gridContainer.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';

        gridContainer.style.opacity = '1';
        gridContainer.style.transform = 'translateX(0)';

    }, 400);
}


// 4. EVENTOS DE CLIQUE
document.getElementById("prev-project").addEventListener("click", () => {
    indiceDesignAtual = (indiceDesignAtual - 1 + projetosDesign.length) % projetosDesign.length;
    atualizarGrid('left'); // Informa a direção do clique
});

document.getElementById("next-project").addEventListener("click", () => {
    indiceDesignAtual = (indiceDesignAtual + 1) % projetosDesign.length;
    atualizarGrid('right'); // Informa a direção do clique
});

// 5. INICIALIZA O GRID
// Para evitar uma animação estranha ao carregar a página, podemos carregar o primeiro estado diretamente.
const primeiroProjeto = projetosDesign[indiceDesignAtual];
logoImg.src = primeiroProjeto.imagens.logo;
galleryImgTop.src = primeiroProjeto.imagens.galleryTop;