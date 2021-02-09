// * ====== Hamburger active class toggle

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navigation__nav"),
    menuItem = document.querySelectorAll(".nav-link"),
    hamburger = document.querySelector(".header__hamburger"),
    lines = document.querySelectorAll(".header__hamburger-item");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("header__hamburger--active");
    menu.classList.toggle("navigation__nav--active");
    lines.forEach((lines) => {
      lines.classList.toggle("header__hamburger--active-item");
    });
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("header__hamburger--active");
      menu.classList.toggle("navigation__nav--active");
      lines.forEach((lines) => {
        lines.classList.toggle("header__hamburger--active-item");
      });
    });
  });
});
$(document).ready(function(){
  $('.quotes__carousel-inner').slick({
    infinite: true,
    dots: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    arrows: false,
    dotsClass: 'quotes__dots'
  });
});