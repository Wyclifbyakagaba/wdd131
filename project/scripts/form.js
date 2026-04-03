// Product array
const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" }
];

// Populate Product select
const productSelect = document.getElementById("product");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Increment review counter using localStorage
if (!localStorage.reviewCount) localStorage.reviewCount = 0;
localStorage.reviewCount = Number(localStorage.reviewCount) + 1;
console.log(`Reviews completed: ${localStorage.reviewCount}`);