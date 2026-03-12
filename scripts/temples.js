// Current Year
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// Last Modified
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger Menu
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});