const menu = document.querySelector(".navbar__content");
const menuOpen = document.querySelector(".navbar__open");
const menuClose = document.querySelector(".navbar__close");
const bodyElement = document.body;

menuOpen.addEventListener("click", (e) => {
  menu.classList.add("active");
  menuOpen.classList.add("hide");
  bodyElement.classList.add("stop-scrolling");
});

menuClose.addEventListener("click", (e) => {
  menu.classList.remove("active");
  menuOpen.classList.remove("hide");
  bodyElement.classList.remove("stop-scrolling");
});
