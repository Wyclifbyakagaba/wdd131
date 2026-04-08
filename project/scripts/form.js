// Product array
const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" }
];

// ===============================
// form page logic
// ===============================
const productSelect = document.getElementById("product");

if (productSelect) {
  // Populate dropdown ONLY if element exists
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Count reviews oNLY when form is submitted
  const form = document.querySelector("form");

  form.addEventListener("submit", () => {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    localStorage.setItem("reviewCount", count + 1);
  });
}

// ===============================
// review page logic
// ===============================
const reviewDisplay = document.getElementById("reviewCount");

if (reviewDisplay) {
  const count = localStorage.getItem("reviewCount") || 0;
  reviewDisplay.textContent = count;

  console.log(`Reviews completed: ${count}`);
}