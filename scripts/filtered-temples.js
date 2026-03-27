// Array of temple objects
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253000,
    image: "images/salt-lake.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 75000,
    image: "images/rome-italy.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 64000,
    image: "images/paris-france.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-12-11",
    area: 10500,
    image: "images/accra-ghana.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 50000,
    image: "images/tokyo-japan.jpg"
  },
  {
    name: "London England Temple",
    location: "London, England",
    dedicated: "1958-09-07",
    area: 9500,
    image: "images/london-england.jpg"
  },
  {
    name: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002-06-27",
    area: 11500,
    image: "images/nauvoo-illinois.jpg"
  },
  {
    name: "Sydney Australia Temple",
    location: "Sydney, Australia",
    dedicated: "1984-09-09",
    area: 102000,
    image: "images/sydney-australia.jpg"
  },
  {
    name: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: "2019-10-13",
    area: 9000,
    image: "images/nairobi-kenya.jpg"
  },
  // Added three new temples
  {
    name: "Tokyo Dome Temple",
    location: "Tokyo, Japan",
    dedicated: "2021-04-15",
    area: 120000,
    image: "images/tokyo-dome.jpg"
  },
  {
    name: "Florence Italy Temple",
    location: "Florence, Italy",
    dedicated: "2023-02-20",
    area: 89000,
    image: "images/florence-italy.jpg"
  },
  {
    name: "Oslo Norway Temple",
    location: "Oslo, Norway",
    dedicated: "2001-06-11",
    area: 8000,
    image: "images/oslo-norway.jpg"
  }
];

// Function to render temple cards
function displayTemples(templeArray) {
  const gallery = document.getElementById("templeGallery");
  gallery.innerHTML = ""; // Clear previous content

  templeArray.forEach(temple => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.image;
    img.alt = temple.name;
    img.loading = "lazy"; // Native lazy loading
    card.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.innerHTML = `<strong>${temple.name}</strong><br>
                         ${temple.location}<br>
                         Dedicated: ${temple.dedicated}<br>
                         Area: ${temple.area.toLocaleString()} sq ft`;
    card.appendChild(caption);

    gallery.appendChild(card);
  });
}

// Initial display of all temples
displayTemples(temples);

// Filter functions
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));

// Footer date updates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;