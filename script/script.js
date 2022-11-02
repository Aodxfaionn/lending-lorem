const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".header__nav");
console.log(menu)

menu.addEventListener("click", function () {
  nav.classList.toggle("header__nav--open");
  console.log('menu')
});
