const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contentContainer = document.querySelector(".content-container");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  contentContainer.classList.toggle("update-content");
}
