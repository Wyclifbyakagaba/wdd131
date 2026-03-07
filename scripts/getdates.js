// Get current year
const currentYear = document.querySelector("#currentyear");

// Get last modified element
const lastModified = document.querySelector("#lastModified");

// Insert current year
if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

// Insert last modified date
if (lastModified) {
lastModified.textContent = "Last Modified: " + document.lastModified;
}