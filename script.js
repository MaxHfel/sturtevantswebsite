// ===== Sturtevants - shared script =====

/* ---------- Store data (real Sturtevant's locations) ---------- */
const stores = [
  { id: "bellevue", name: "Bellevue",            address: "13131 NE 20th St, Bellevue, WA 98005", zip: 98005, phone: "425.869.7669" },
  { id: "skimart",  name: "Ski Mart – Bellevue", address: "13219 NE 20th St, Bellevue, WA 98005", zip: 98005, phone: "425.637.8958" },
  { id: "tacoma",   name: "Ski Mart – Tacoma",   address: "2220 S 37th St, Tacoma, WA 98409",     zip: 98409, phone: "253.473.1134" }
];

// Opening hours by day (0 = Sunday ... 6 = Saturday), in 24-hour time
// All three stores have the same hours
const hours = {
  0: [10, 18],
  1: [10, 19], 2: [10, 19], 3: [10, 19], 4: [10, 19], 5: [10, 19],
  6: [10, 18]
};

/* ---------- Sample inventory (stock numbers are SAMPLE data) ---------- */
const inventory = {
  ski: [
    { name: "All-Mountain Skis (170cm)", category: "Skis",     price: 549, stock: { bellevue: 4,  skimart: 2, tacoma: 0 } },
    { name: "Beginner Skis (150cm)",     category: "Skis",     price: 329, stock: { bellevue: 6,  skimart: 3, tacoma: 5 } },
    { name: "Freeride Skis (184cm)",     category: "Skis",     price: 699, stock: { bellevue: 1,  skimart: 0, tacoma: 2 } },
    { name: "Intermediate Ski Boots",    category: "Boots",    price: 399, stock: { bellevue: 8,  skimart: 5, tacoma: 3 } },
    { name: "Performance Ski Boots",     category: "Boots",    price: 599, stock: { bellevue: 2,  skimart: 1, tacoma: 0 } },
    { name: "Adjustable Bindings",       category: "Bindings", price: 249, stock: { bellevue: 5,  skimart: 4, tacoma: 6 } },
    { name: "Aluminum Poles",            category: "Poles",    price: 59,  stock: { bellevue: 12, skimart: 9, tacoma: 10 } },
    { name: "MIPS Helmet",               category: "Helmets",  price: 159, stock: { bellevue: 0,  skimart: 3, tacoma: 4 } },
    { name: "Low-Light Goggles",         category: "Goggles",  price: 129, stock: { bellevue: 7,  skimart: 0, tacoma: 2 } }
  ],
  snowboard: [
    { name: "All-Mountain Board (156cm)", category: "Snowboards", price: 499, stock: { bellevue: 3, skimart: 4, tacoma: 2 } },
    { name: "Park Board (152cm)",         category: "Snowboards", price: 429, stock: { bellevue: 2, skimart: 0, tacoma: 3 } },
    { name: "Powder Board (160cm)",       category: "Snowboards", price: 579, stock: { bellevue: 0, skimart: 1, tacoma: 4 } },
    { name: "Soft Flex Boots",            category: "Boots",      price: 279, stock: { bellevue: 6, skimart: 5, tacoma: 2 } },
    { name: "Stiff Flex Boots",           category: "Boots",      price: 389, stock: { bellevue: 1, skimart: 2, tacoma: 0 } },
    { name: "Strap Bindings",             category: "Bindings",   price: 229, stock: { bellevue: 7, skimart: 6, tacoma: 5 } },
    { name: "Rear-Entry Bindings",        category: "Bindings",   price: 279, stock: { bellevue: 0, skimart: 2, tacoma: 1 } },
    { name: "Spherical Goggles",          category: "Goggles",    price: 179, stock: { bellevue: 4, skimart: 3, tacoma: 6 } }
  ],
  // Tennis gear is sold at Bellevue and Tacoma, not the Bellevue Ski Mart
  tennis: [
    { name: "Lightweight Racquet (100 sq in)", category: "Racquets", price: 199, stock: { bellevue: 5,  skimart: 0, tacoma: 3 } },
    { name: "Control Racquet (98 sq in)",      category: "Racquets", price: 239, stock: { bellevue: 2,  skimart: 0, tacoma: 4 } },
    { name: "Junior Racquet (25 in)",          category: "Racquets", price: 69,  stock: { bellevue: 6,  skimart: 0, tacoma: 0 } },
    { name: "All-Court Shoes (Men's)",         category: "Shoes",    price: 139, stock: { bellevue: 9,  skimart: 0, tacoma: 7 } },
    { name: "All-Court Shoes (Women's)",       category: "Shoes",    price: 139, stock: { bellevue: 8,  skimart: 0, tacoma: 6 } },
    { name: "Tennis Balls (4-ball can)",       category: "Balls",    price: 7,   stock: { bellevue: 40, skimart: 0, tacoma: 35 } },
    { name: "6-Racquet Bag",                   category: "Bags",     price: 89,  stock: { bellevue: 3,  skimart: 0, tacoma: 1 } },
    { name: "Overgrips (3-pack)",              category: "Grips",    price: 12,  stock: { bellevue: 25, skimart: 0, tacoma: 18 } }
  ],
  winter: [
    { name: "Insulated Jacket",        category: "Jackets",     price: 299, stock: { bellevue: 6,  skimart: 4,  tacoma: 3 } },
    { name: "Waterproof Shell Jacket", category: "Jackets",     price: 349, stock: { bellevue: 2,  skimart: 0,  tacoma: 2 } },
    { name: "Insulated Snow Pants",    category: "Pants",       price: 199, stock: { bellevue: 5,  skimart: 6,  tacoma: 4 } },
    { name: "Merino Base Layer Top",   category: "Base layers", price: 99,  stock: { bellevue: 10, skimart: 8,  tacoma: 1 } },
    { name: "Waterproof Gloves",       category: "Gloves",      price: 69,  stock: { bellevue: 12, skimart: 9,  tacoma: 7 } },
    { name: "Down Mittens",            category: "Mittens",     price: 59,  stock: { bellevue: 0,  skimart: 3,  tacoma: 5 } },
    { name: "Knit Beanie",             category: "Hats",        price: 32,  stock: { bellevue: 15, skimart: 11, tacoma: 8 } },
    { name: "Wool Ski Socks",          category: "Socks",       price: 26,  stock: { bellevue: 20, skimart: 14, tacoma: 0 } }
  ]
};

/* ---------- Helpers ---------- */

// Get the store the visitor picked (saved in the browser), or null
function getStore() {
  let id = null;
  try { id = localStorage.getItem("store"); } catch (e) {}
  return stores.find(s => s.id === id) || null;
}

function saveStore(id) {
  try { localStorage.setItem("store", id); } catch (e) {}
}

// Simple "nearest store": the store whose ZIP number is closest.
// (A real site would use a map API, but this works for a demo.)
function nearestStore(zip) {
  let best = stores[0];
  stores.forEach(s => {
    if (Math.abs(s.zip - zip) < Math.abs(best.zip - zip)) best = s;
  });
  return best;
}

function formatHour(h) {
  return (h % 12 || 12) + (h < 12 ? "am" : "pm");
}

function todaysHours() {
  const now = new Date();
  const [open, close] = hours[now.getDay()];
  const time = now.getHours() + now.getMinutes() / 60;
  return {
    text: formatHour(open) + " – " + formatHour(close),
    isOpen: time >= open && time < close
  };
}

function formatPrice(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

/* ---------- Location picker ---------- */

function buildLocationModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "location-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="loc-title">
      <button type="button" class="modal-close" aria-label="Close">&times;</button>
      <h2 id="loc-title">Find Your Store</h2>
      <form id="location-form">
        <label for="zip-input">Enter your ZIP code</label>
        <input type="text" id="zip-input" inputmode="numeric" maxlength="5" placeholder="e.g. 98005">
        <p class="or">or choose a store</p>
        <select id="store-select" aria-label="Choose a store">
          <option value="">-- Choose a store --</option>
          ${stores.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}
        </select>
        <button type="submit" class="btn">Find Store</button>
      </form>
      <div id="location-result"></div>
    </div>`;
  document.body.appendChild(modal);
  return modal;
}

function showStoreResult(store) {
  const today = todaysHours();
  document.getElementById("location-result").innerHTML = `
    <div class="store-card">
      <h3>Your store: ${store.name}</h3>
      <p>${store.address}</p>
      <p>${store.phone}</p>
      <p>Today: ${today.text}
        <span class="badge ${today.isOpen ? "open" : "closed"}">${today.isOpen ? "Open now" : "Closed"}</span>
      </p>
    </div>`;
}

function updateLocationButton() {
  const label = document.getElementById("location-label");
  const store = getStore();
  if (label) label.textContent = store ? store.name : "Select Location";
}

function setupLocationPicker() {
  const button = document.querySelector(".location-btn");
  if (!button) return;

  const modal = buildLocationModal();
  const form = document.getElementById("location-form");
  const zipInput = document.getElementById("zip-input");
  const select = document.getElementById("store-select");
  const result = document.getElementById("location-result");

  function openModal() {
    modal.hidden = false;
    const store = getStore();
    if (store) {
      select.value = store.id;
      showStoreResult(store);
    }
    zipInput.focus();
  }

  function closeModal() {
    modal.hidden = true;
    button.focus();
  }

  button.addEventListener("click", openModal);
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // Typing a ZIP clears the dropdown, and picking a store clears the ZIP
  zipInput.addEventListener("input", () => { select.value = ""; });
  select.addEventListener("change", () => { zipInput.value = ""; });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const zip = zipInput.value.trim();
    let store = null;

    if (zip !== "") {
      if (!/^\d{5}$/.test(zip)) {
        result.innerHTML = `<p class="error">Please enter a valid 5-digit ZIP code.</p>`;
        return;
      }
      store = nearestStore(Number(zip));
    } else if (select.value) {
      store = stores.find(s => s.id === select.value);
    } else {
      result.innerHTML = `<p class="error">Enter a ZIP code or choose a store.</p>`;
      return;
    }

    saveStore(store.id);
    showStoreResult(store);
    updateLocationButton();
    renderInventory(); // update stock numbers if this page has an inventory table
  });

  updateLocationButton();
}

/* ---------- Inventory table ---------- */

function stockLabel(qty) {
  if (qty === 0) return `<span class="stock out">Out of stock</span>`;
  if (qty <= 2)  return `<span class="stock low">${qty} left</span>`;
  return `${qty} in stock`;
}

function renderInventory() {
  const section = document.querySelector(".inventory");
  if (!section) return;

  const items = inventory[section.dataset.sport] || [];
  const search = document.getElementById("inv-search").value.trim().toLowerCase();
  const category = document.getElementById("inv-category").value;
  const inStockOnly = document.getElementById("inv-instock").checked;
  const store = getStore();

  document.getElementById("inv-store-note").textContent = store
    ? `Showing stock at our ${store.name} store.`
    : "Showing stock across all stores. Select a location to see one store.";

  const rows = items
    .map(item => {
      // Use the selected store's stock, or add up every store
      const qty = store
        ? item.stock[store.id]
        : Object.values(item.stock).reduce((a, b) => a + b, 0);
      return { ...item, qty };
    })
    .filter(item => item.name.toLowerCase().includes(search))
    .filter(item => category === "all" || item.category === category)
    .filter(item => !inStockOnly || item.qty > 0);

  const tbody = document.getElementById("inv-body");
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty">No items match your search.</td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${formatPrice(item.price)}</td>
      <td>${stockLabel(item.qty)}</td>
    </tr>`).join("");
}

function setupInventory() {
  const section = document.querySelector(".inventory");
  if (!section) return;

  // Fill the category dropdown from the data
  const items = inventory[section.dataset.sport] || [];
  const categories = [...new Set(items.map(i => i.category))];
  const catSelect = document.getElementById("inv-category");
  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catSelect.appendChild(opt);
  });

  const form = document.getElementById("inventory-form");
  form.addEventListener("input", renderInventory);
  form.addEventListener("change", renderInventory);
  form.addEventListener("submit", e => e.preventDefault());

  renderInventory();
}

/* ---------- Start ---------- */
setupLocationPicker();
setupInventory();