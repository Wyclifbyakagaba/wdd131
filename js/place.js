// ================= FOOTER =================

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;


// ================= WIND CHILL =================

// Function (REQUIRED: one-line formula)
function calculateWindChill(temp, wind) {
  return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
}

// Get values from HTML
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Apply ONLY if conditions are met (REQUIRED)
if (temp <= 50 && wind > 3) {
  const chill = calculateWindChill(temp, wind).toFixed(1);
  document.getElementById("windchill").textContent = `${chill} °F`;
} else {
  document.getElementById("windchill").textContent = "N/A";
}