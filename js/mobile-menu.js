
document.addEventListener("DOMContentLoaded", function (event) {
  let mobileMenuBtn = document.querySelector("[data-js='open-mobile-menu']"),
    mobileMenuBtnIcon = document.querySelector("[data-js='open-mobile-menu'] svg"),
    menuContainer = document.querySelector("header .main-menu__inner");

  function toggleMobileMenu() {
    document.querySelector('body').classList.toggle('locked');
    mobileMenuBtnIcon.classList.toggle('active');
    menuContainer.classList.toggle('active');
  }

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
});