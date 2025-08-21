class MobileNavbar {
  constructor(mobileMenu, nav, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.nav = document.querySelector(nav);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isOpen = this.nav.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    
    // só bloqueia scroll se for mobile
    if (window.innerWidth <= 768) {
      document.body.classList.toggle("no-scroll", isOpen);
    }

    // animação dos links
    if (isOpen) {
      this.navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
      });
    } else {
      this.navLinks.forEach(link => (link.style.animation = ""));
      this.resetHamburger();
    }
  }

  resetHamburger() {
    // garante que o hambúrguer volta ao estado inicial
    const lines = this.mobileMenu.querySelectorAll("span");
    lines.forEach(line => {
      line.style.transform = "";
      line.style.opacity = "";
    });
  }

  addClickEvent() {
    // clique no botão hamburguer
    this.mobileMenu.addEventListener("click", this.handleClick);

    // clique nos links (fecha menu e reseta X)
    this.navLinks.forEach(link =>
      link.addEventListener("click", () => {
        if (this.nav.classList.contains(this.activeClass)) {
          this.nav.classList.remove(this.activeClass);
          this.mobileMenu.classList.remove(this.activeClass);
          document.body.classList.remove("no-scroll");
          this.resetHamburger();
        }
      })
    );
  }

  init() {
    if (this.mobileMenu && this.nav) this.addClickEvent();
    return this;
  }
}

new MobileNavbar(".mobile-menu", ".nav", ".nav-list li").init();
