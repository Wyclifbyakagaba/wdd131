// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, wind) {
  return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

if (temp <= 50 && wind > 3) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, wind).toFixed(1) + "°F";
} else {
  document.getElementById("windchill").textContent = "N/A";
}