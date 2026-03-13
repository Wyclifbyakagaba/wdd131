// Select menu button and navigation
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

// Hamburger menu toggle
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Temple data
const temples = [
{
name: "Salt Lake Temple",
location: "Salt Lake City",
dedicated: 1893,
area: 253000,
imageUrl: "images/salt-lake.jpg"
},
{
name: "Rome Italy Temple",
location: "Rome",
dedicated: 2019,
area: 41000,
imageUrl: "images/rome-italy.jpg"
},
{
name: "Paris France Temple",
location: "Paris",
dedicated: 2017,
area: 44000,
imageUrl: "images/paris-france.jpg"
},
{
name: "Accra Ghana Temple",
location: "Accra",
dedicated: 2004,
area: 17500,
imageUrl: "images/accra-ghana.jpg"
},
{
name: "Tokyo Japan Temple",
location: "Tokyo",
dedicated: 1980,
area: 52000,
imageUrl: "images/tokyo-japan.jpg"
},
{
name: "Nairobi Kenya Temple",
location: "Nairobi",
dedicated: 2025,
area: 20000,
imageUrl: "images/nairobi-kenya.jpg"
}
];
