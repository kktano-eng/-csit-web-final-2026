// ===== Product Catalog Data =====
const products = [
  { id: 1, name: "Keychron K2 Mechanical Keyboard", category: "peripherals", price: 4290, icon: "⌨️", desc: "75% wireless hot-swappable tactile mechanical keyboard." },
  { id: 2, name: "Logitech MX Master 3S", category: "peripherals", price: 5490, icon: "🖱️", desc: "Ergonomic wireless mouse with ultra-fast MagSpeed scrolling." },
  { id: 3, name: "Sony WH-1000XM5 Headphones", category: "audio", price: 16990, icon: "🎧", desc: "Industry-leading active noise cancellation for deep coding focus." },
  { id: 4, name: "Aluminum Laptop Riser Stand", category: "workspace", price: 1150, icon: "💻", desc: "Ergonomic ventilated stand for 13-inch to 17-inch laptops." },
  { id: 5, name: "USB-C 8-in-1 Multiport Hub", category: "workspace", price: 1890, icon: "🔌", desc: "4K HDMI, 100W PD charging, Ethernet, and SD card reader." },
  { id: 6, name: "Studio Condenser USB Mic", category: "audio", price: 3200, icon: "🎙️", desc: "Crisp voice clarity for online defenses, meetings, and streaming." }
];

// ===== State =====
let cart = JSON.parse(localStorage.getItem("techhub_cart")) || [];
let currentCategory = "all";
let currentSort = "default";
let searchQuery = "";

// ===== DOM Elements =====
const productGrid = document.getElementById("product-grid");
const emptyMsg = document.getElementById("empty-msg");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const categoryTabs = document.querySelectorAll(".tab");

const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutMsg = document.getElementById("checkout-msg");

// ===== Render Products =====
function renderProducts() {
  let filtered = products.filter((item) => {
    const matchesCat = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (currentSort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  productGrid.innerHTML = "";
  emptyMsg.classList.toggle("hidden", filtered.length > 0);

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div>
        <div class="product-icon">${product.icon}</div>
        <span class="product-cat">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
      </div>
      <div class="card-bottom">
        <span class="price">₱${product.price.toLocaleString()}</span>
        <button class="add-btn" onclick="addToCart(${product.id})">+ Add</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// ===== Cart Logic =====
function saveCart() {
  localStorage.setItem("techhub_cart", JSON.stringify(cart));
  renderCart();
}

window.addToCart = function (productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = products.find((p) => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  openCart();
};

window.updateQty = function (productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  }
  saveCart();
};

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let totalItems = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
  } else {
    cart.forEach((item) => {
      totalItems += item.qty;
      totalPrice += item.price * item.qty;

      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <div style="font-size: 0.85rem; color: #6b7280;">₱${item.price.toLocaleString()} each</div>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      `;
      cartItemsContainer.appendChild(row);
    });
  }

  cartCount.textContent = totalItems;
  cartTotal.textContent = `₱${totalPrice.toLocaleString()}.00`;
}

// ===== Cart Drawer Controls =====
function openCart() {
  checkoutMsg.textContent = "";
  cartDrawer.classList.add("open");
  cartOverlay.classList.remove("hidden");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.add("hidden");
}

cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    checkoutMsg.textContent = "Add items to your cart first!";
    return;
  }
  cart = [];
  saveCart();
  checkoutMsg.textContent = "Order placed! Thank you for shopping at TechHub.";
});

// ===== Filter, Sort & Search Listeners =====
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.dataset.cat;
    renderProducts();
  });
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
});

// ===== Initialize =====
renderProducts();
renderCart();