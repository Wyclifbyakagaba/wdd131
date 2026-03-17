// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC VALUES
const temp = 45;
const wind = 5;

// ONE-LINE FUNCTION
function calculateWindChill(t, w) {
  return 35.74 + 0.6215*t - 35.75*Math.pow(w,0.16) + 0.4275*t*Math.pow(w,0.16);
}

// DISPLAY RESULT
const output = document.getElementById("windchill");

if (temp <= 50 && wind > 3) {
  output.textContent = calculateWindChill(temp, wind).toFixed(1) + " °F";
} else {
  output.textContent = "N/A";
}