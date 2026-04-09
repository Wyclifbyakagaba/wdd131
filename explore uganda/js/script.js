// ARRAY + OBJECTS
const attractions = [
  { name: "Safari", desc: "Wildlife parks" },
  { name: "Hiking", desc: "Mountain trails" },
  { name: "Culture", desc: "Local traditions" }
];

// DOM MANIPULATION
const list = document.getElementById("attractionList");

if (list) {
  attractions.forEach(item => {
    list.innerHTML += `<p>${item.name} - ${item.desc}</p>`;
  });
}

// FORM + LOCAL STORAGE + FUNCTION
const form = document.getElementById("feedbackForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const product = document.getElementById("product").value;

    // CONDITION
    if (product === "") {
      alert("Please select a product");
      return;
    }

    // STORE
    localStorage.setItem("product", product);

    // OUTPUT (template literal)
    document.getElementById("message").textContent =
      `Thank you! You selected ${product}`;
  });
}