const menu = document.querySelector(".navbar__content");
const menuOpen = document.querySelector(".navbar__open");
const menuClose = document.querySelector(".navbar__close");

menuOpen.addEventListener("click", (e) => {
  menu.classList.add("active");
  menuOpen.classList.add("hide");
});
menuClose.addEventListener("click", (e) => {
  menu.classList.remove("active");
  menuOpen.classList.remove("hide");
});
