// Footer dates
const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (modified) {
  modified.textContent = "Last Modified: " + document.lastModified;
}

// Hamburger menu
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});