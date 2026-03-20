// place.js

document.addEventListener("DOMContentLoaded", () => {
  // Footer: current year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Footer: last modified date
  const lastModifiedEl = document.getElementById("lastModified");
  if (lastModifiedEl) {
    lastModifiedEl.textContent = document.lastModified;
  }

  // Wind Chill Calculation
  const tempEl = document.getElementById("temp");
  const windEl = document.getElementById("wind");
  const windChillEl = document.getElementById("windchill");

  if (tempEl && windEl && windChillEl) {
    const temp = parseFloat(tempEl.textContent);
    const wind = parseFloat(windEl.textContent);

    function calculateWindChill(tempF, windMph) {
      return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * tempF * Math.pow(windMph, 0.16);
    }

    if (temp <= 50 && wind > 3) {
      windChillEl.textContent = calculateWindChill(temp, wind).toFixed(1) + "°F";
    } else {
      windChillEl.textContent = "N/A";
    }
  }
});