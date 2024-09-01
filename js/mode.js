const menu = document.querySelector(".header__button-menu-item-1");
const menu1 = document.querySelector(".header__button-menu1");

menu.addEventListener("click", () => {
  menu1.classList.toggle("menu2");
});
const headerMenu = document.querySelector(".header__button-menu-item1");
const headerMenu2 = document.querySelector(".header__button-menu2");
headerMenu.addEventListener("click", () => {
  headerMenu2.classList.toggle("menu3");
});
const menuBar = document.querySelector(".menu__bar");
const menuBlock = document.querySelector(".header__button-menu");
const sicl = document.querySelector(".menu__bar-x");
menuBar.addEventListener("click", () => {
  menuBlock.classList.toggle("show");
  sicl.classList.toggle("x-circl");
  menuBar.classList.toggle("exens");
});

const aroww = document.querySelector(".analytics1");
const aroww1 = document.querySelector(".svg");
aroww.addEventListener("click", () => {
  aroww1.classList.toggle("active");
});
const analytics1 = document.querySelector(".analytics1");
analytics1.addEventListener("click", () => {
  analytics1.classList.toggle("color");
});
const population = "34.23 mln";
const checking =
  population > "34.23 mln"
    ? "O'zbekistoning aholisi o'rtachadat yuqori"
    : "O'zbekistoning aholisi o'rta darjadan past";
console.log(checking);
