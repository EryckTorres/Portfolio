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
        imagem: './assets/images/projetos/itamind.png'
    },
    {
        id: "02",
        titulo: 'The Secret<br>Number Game',
        descricao: 'The "Secret Number" project is a guessing game developed with HTML, CSS, and JavaScript. The logic generates a random number between 1 and 100, and the player must discover what it is. With each attempt, the system provides hints to guide the user. This project is ideal for practicing concepts of DOM manipulation, flow control, and functions in JavaScript.',
        link: 'https://github.com/EryckTorres/numero-secreto',
        imagem: './assets/images/projetos/ecommerce.png'
    }
];

let indiceAtual = 0;

// Encontre os elementos dentro do carrossel de projetos (use querySelectorAll se houver múltiplos)
const projetosContainer = document.querySelector(".projects-dev");

// Pegue os elementos de descrição diretamente dentro do contêiner
const imgDemo = projetosContainer.querySelector(".projects-dev-demo");
const titulo = projetosContainer.querySelector(".projects-dev-title");
const subtitulo = projetosContainer.querySelector(".projects-dev-subtitle");
const descricao = projetosContainer.querySelector(".textblock");
const link = projetosContainer.querySelector(".bt-link");
const textContainer = projetosContainer.querySelector(".projects-dev-text");

function atualizarProjeto(direcao) {
    const slideOutClass = direcao === "left" ? "slide-out-left" : "slide-out-right";

    // Aplica animação de saída
    imgDemo.classList.add(slideOutClass);
    textContainer.classList.add(slideOutClass);

    setTimeout(() => {
        const projeto = projetos[indiceAtual];
        titulo.innerHTML = projeto.id;
        subtitulo.innerHTML = projeto.titulo;
        descricao.textContent = projeto.descricao;
        link.parentElement.href = projeto.link;
        imgDemo.style.backgroundImage = `url('${projeto.imagem}')`;
        imgDemo.style.backgroundSize = "cover";
        imgDemo.style.backgroundPosition = "center";

        // Remove classes para resetar estado
        imgDemo.classList.remove(slideOutClass);
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
        }
    },
    {
        id: '02',
        link: 'https://www.behance.net/gallery/222526779/COLETIVO-EDVARD-DANTAS-IDENTIDADE-VISUAL', // Link do segundo projeto
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
            { bg: '#100C32', text: '#EBE9FE' },
            { bg: '#25206C', text: '#EBE9FE' },
            { bg: '#4239C8', text: '#EBE9FE' },
            { bg: '#8B84FD', text: '#100C32' },
            { bg: '#EBE9FE', text: '#100C32' }
        ],
        tipografia: {
            header: 'Nico Moji',
            body: 'Oxanium'
        }
    }
    // Adicione mais objetos de projeto aqui
];

// ... (O array projetosDesign e a seleção de elementos continuam os mesmos) ...

let indiceDesignAtual = 0;
const designContainer = document.querySelector(".projects-design");
const gridContainer = designContainer.querySelector(".grid-container");

// (todas as suas outras seleções de const logoImg, galleryImgTop, etc. continuam aqui)
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


// 3. FUNÇÃO ATUALIZADA PARA ATUALIZAR O GRID COM ANIMAÇÃO DE SLIDE
function atualizarGrid(direcao) {
    const projeto = projetosDesign[indiceDesignAtual];

    // Define para qual lado o grid vai sair e de qual lado ele vai entrar
    // Se a direção for 'right' (clicou na seta da direita), o grid sai para a esquerda.
    const slideOutDirection = direcao === 'right' ? '-50px' : '50px';
    const slideInDirection = direcao === 'right' ? '50px' : '-50px';

    // ---- Animação de Saída ----
    gridContainer.style.opacity = '0';
    gridContainer.style.transform = `translateX(${slideOutDirection})`;

    // Espera a animação de saída terminar
    setTimeout(() => {
        // ---- Preparação para Entrada (enquanto invisível) ----
        // 1. Desliga a transição para que a mudança de posição seja instantânea
        gridContainer.style.transition = 'none'; 
        // 2. Move o grid para a posição de início da animação de entrada
        gridContainer.style.transform = `translateX(${slideInDirection})`;

        // ---- Atualização do Conteúdo ----
        // (O código para atualizar imagens, paleta, texto, etc., é exatamente o mesmo)
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
        

        // ---- Animação de Entrada ----
        // 3. Força o navegador a aplicar as mudanças (um truque comum)
        // Isso garante que a posição de "teleporte" seja renderizada antes de reativar a animação.
        void gridContainer.offsetWidth; 

        // 4. Religa a transição que definimos no CSS
        gridContainer.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';
        // 5. Manda o grid para a posição final (centro e visível)
        gridContainer.style.opacity = '1';
        gridContainer.style.transform = 'translateX(0)';

    }, 400); // Este tempo DEVE ser o mesmo da sua transição no CSS
}


// 4. EVENTOS DE CLIQUE ATUALIZADOS
document.getElementById("prev-project").addEventListener("click", () => {
    indiceDesignAtual = (indiceDesignAtual - 1 + projetosDesign.length) % projetosDesign.length;
    atualizarGrid('left'); // Informa a direção do clique
});

document.getElementById("next-project").addEventListener("click", () => {
    indiceDesignAtual = (indiceDesignAtual + 1) % projetosDesign.length;
    atualizarGrid('right'); // Informa a direção do clique
});

// 5. INICIALIZA O GRID (sem animação na primeira carga)
// Para evitar uma animação estranha ao carregar a página, podemos carregar o primeiro estado diretamente.
const primeiroProjeto = projetosDesign[indiceDesignAtual];
logoImg.src = primeiroProjeto.imagens.logo;
galleryImgTop.src = primeiroProjeto.imagens.galleryTop;
//... e assim por diante para todos os outros elementos, como na função de atualizar.
// (Opcional, mas melhora a experiência inicial)

console.log('olá mundo!');