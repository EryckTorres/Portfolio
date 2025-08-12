// Detecta o scroll da página
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    // Se o scroll for maior que 100px, a navegação e a flag icon perdem opacidade
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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

console.log('olá mundo!');