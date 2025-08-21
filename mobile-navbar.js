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
    document.body.classList.toggle("no-scroll", isOpen);

    // anima apenas quando abre; limpa quando fecha
    if (isOpen) {
      this.navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
      });
    } else {
      this.navLinks.forEach(link => (link.style.animation = ""));
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    // fecha ao clicar em qualquer link
    this.navLinks.forEach(link => link.addEventListener("click", this.handleClick));
  }

  init() {
    if (this.mobileMenu && this.nav) this.addClickEvent();
    return this;
  }
}

new MobileNavbar(".mobile-menu", ".nav", ".nav-list li").init();
