// projects/siteplan.js

// Example: simple console log to show JS is loaded
console.log("siteplan.js loaded");

// Add any event listeners or dynamic functionality here
document.addEventListener("DOMContentLoaded", () => {
  // Example: highlight all section headers
  const headers = document.querySelectorAll("section h2");
  headers.forEach(h => {
    h.style.color = "#228B22"; // Forest Green
  });
});