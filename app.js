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

console.log('olá mundo!');