const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "images.jpeg"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: "8677153f-e778-4fa1-875b-19ccbd7042bb.jpg"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1499,
      image: "61UfclzDgdL._AC_SL1250_-800x800.jpg"
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 899,
      image: "images (1).jpeg"
    }
  ];
  
  const productGrid = document.getElementById("productGrid");
  
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(div);
  });
  
  function addToCart(productName) {
    alert(`${productName} added to cart!`);
  }
  
  let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.querySelector(".cart-icon").textContent = `🛍️ Cart (${cartCount})`;
  alert(`${productName} added to cart!`);
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  productGrid.innerHTML = "";
  products
    .filter(p => p.name.toLowerCase().includes(query))
    .forEach(displayProduct);
});

function displayProduct(product) {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <div class="rating">⭐⭐⭐⭐☆</div>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    </div>
  `;
  productGrid.appendChild(div);
}

products.forEach(displayProduct);
