document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  const header = document.querySelector("header");

  // Get CSS variables (yellow & green)
  const rootStyles = getComputedStyle(document.documentElement);
  const yellow = rootStyles.getPropertyValue("--primary-color");
  const green = rootStyles.getPropertyValue("--secondary-color");

  // ===================== FORM VALIDATION =====================
  form.addEventListener("submit", function (e) {

    const product = document.getElementById("product").value;
    const date = document.getElementById("visit-date").value;
    const activity = document.querySelector('input[name="activity"]:checked');

    if (!product) {
      alert("Please select a product.");
      e.preventDefault();
      return;
    }

    if (!activity) {
      alert("Please select an activity.");
      e.preventDefault();
      return;
    }

    if (!date) {
      alert("Please choose a visit date.");
      e.preventDefault();
      return;
    }

    alert("Thank you! Your feedback has been submitted.");
  });

  // ===================== HEADER INTERACTION =====================
  header.addEventListener("mouseover", () => {
    header.style.backgroundColor = yellow; // uses your yellow
  });

  header.addEventListener("mouseout", () => {
    header.style.backgroundColor = green; // uses your green
  });

});