// ARRAY + OBJECTS
const attractions = [
  { name: "Safari", desc: "Wildlife in national parks" },
  { name: "Hiking", desc: "Mountain landscapes" },
  { name: "Culture", desc: "Traditional communities" }
];

// FUNCTION 1
function displayAttractions() {
  const list = document.getElementById("attractionList");

  if (list) {
    attractions.forEach(item => {
      list.innerHTML += `<p>${item.name} - ${item.desc}</p>`;
    });
  }
}

// FUNCTION 2
function handleForm() {
  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const product = document.getElementById("product").value;

      // CONDITIONAL
      if (product === "") {
        alert("Please select a product");
        return;
      }

      // LOCAL STORAGE
      localStorage.setItem("selectedProduct", product);

      document.getElementById("message").textContent =
        `Thank you! You selected ${product}`;
    });
  }
}

// RUN FUNCTIONS
displayAttractions();
handleForm();