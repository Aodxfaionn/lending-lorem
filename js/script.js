/* Отображение значения инпута range */
const per = document.querySelector(".percent");
const range = document.querySelector(".form__range--line");

range.addEventListener("change", function () {
  per.innerHTML = `${range.value}%`;
});

/* Бургерное меню */
const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".header__nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("header__nav--open");
});
