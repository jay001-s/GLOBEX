const products = [
  { name: "Wireless Headphones", price: "$59.99" },
  { name: "Smartwatch", price: "$129.99" },
  { name: "Gaming Mouse", price: "$39.99" },
  { name: "Bluetooth Speaker", price: "$49.99" }
];

function displayProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
    container.appendChild(div);
  });
}

function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}

window.onload = () => displayProducts(products);