// * ====== Hamburger active class toggle

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navigation__nav"),
    menuItem = document.querySelectorAll(".nav-link"),
    hamburger = document.querySelector(".header__hamburger"),
    lines = document.querySelectorAll(".header__hamburger-item")
    loginBtn = document.querySelector(".navigation__btn");

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


    loginBtn.addEventListener("click", () => {
      hamburger.classList.toggle("header__hamburger--active");
      menu.classList.toggle("navigation__nav--active");
      lines.forEach((lines) => {
        lines.classList.toggle("header__hamburger--active-item");
      });
    });
  });


// * ====== Fade click
/* 
window.addEventListener('click', function(event)) {
  if (event.target === 
} */





$(document).ready(function(){
  $('.quotes__carousel-inner').slick({
    infinite: true,
    dots: true,
    speed: 1200,
    autoplay: false,
    autoplaySpeed: 2500,
    adaptiveHeight: false,
    arrows: false,
    dotsClass: 'quotes__dots'
  });
});

