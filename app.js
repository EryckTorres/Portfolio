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


console.log('olá mundo!');