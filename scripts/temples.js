// Navigation filters

document.querySelector("#home").addEventListener("click", () => {
displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
const oldTemples = temples.filter(temple => temple.dedicated < 1900);
displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
const newTemples = temples.filter(temple => temple.dedicated > 2000);
displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
const largeTemples = temples.filter(temple => temple.area > 90000);
displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
const smallTemples = temples.filter(temple => temple.area < 10000);
displayTemples(smallTemples);
});
