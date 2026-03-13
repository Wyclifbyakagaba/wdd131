// Select menu button and navigation
// ======== temples.js ========

// Hamburger menu toggle
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Array of all 9 temples
const temples = [
  { name: "Salt Lake Temple", location: "Salt Lake City", dedicated: 1893, area: 253000, imageUrl: "images/salt-lake.jpg" },
  { name: "Rome Italy Temple", location: "Rome", dedicated: 2019, area: 41000, imageUrl: "images/rome-italy.jpg" },
  { name: "Paris France Temple", location: "Paris", dedicated: 2017, area: 44000, imageUrl: "images/paris-france.jpg" },
  { name: "Accra Ghana Temple", location: "Accra", dedicated: 2004, area: 17500, imageUrl: "images/accra-ghana.jpg" },
  { name: "Tokyo Japan Temple", location: "Tokyo", dedicated: 1980, area: 52000, imageUrl: "images/tokyo-japan.jpg" },
  { name: "London England Temple", location: "London", dedicated: 1958, area: 21000, imageUrl: "images/london-england.jpg" },
  { name: "Nauvoo Illinois Temple", location: "Nauvoo", dedicated: 2002, area: 9000, imageUrl: "images/nauvoo-illinois.jpg" },
  { name: "Sydney Australia Temple", location: "Sydney", dedicated: 1984, area: 30000, imageUrl: "images/sydney-australia.jpg" },
  { name: "Nairobi Kenya Temple", location: "Nairobi", dedicated: 2025, area: 20000, imageUrl: "images/nairobi-kenya.jpg" }
];

// Function to display temples in the gallery
const gallery = document.querySelector(".gallery");

function displayTemples(templeList) {
  gallery.innerHTML = ""; // Clear previous gallery

  templeList.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;

    const caption = document.createElement("figcaption");
    caption.textContent = temple.name;

    figure.appendChild(img);
    figure.appendChild(caption);

    gallery.appendChild(figure);
  });
}

// Call function to display all temples on page load
displayTemples(temples);

// ======== Footer Dates ========

const year = document.querySelector("#currentYear");
const modified = document.querySelector("#lastModified");

if (year) year.textContent = new Date().getFullYear();
if (modified) modified.textContent = document.lastModified;
