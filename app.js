const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Chhutkan+Jain+General+Laxmi+Market+Pali+Bazar+Beawar+26.100734,74.319075";

const PRODUCTS = [
  {
    id: "soft-cloud-romper",
    name: "Soft Cloud Romper",
    category: "baby",
    price: 649,
    material: "cotton",
    featured: true,
    isNew: true,
    age: "0–12 months",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "little-star-dress",
    name: "Little Star Dress",
    category: "kids",
    price: 899,
    material: "cotton",
    featured: true,
    isNew: false,
    age: "2–5 years",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sunny-day-set",
    name: "Sunny Day Set",
    category: "kids",
    price: 799,
    material: "cotton",
    featured: false,
    isNew: true,
    age: "1–4 years",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cozy-knit-cardigan",
    name: "Cozy Knit Cardigan",
    category: "baby",
    price: 749,
    material: "cotton",
    featured: true,
    isNew: false,
    age: "6–18 months",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "playtime-joggers",
    name: "Playtime Joggers",
    category: "kids",
    price: 549,
    material: "blend",
    featured: false,
    isNew: false,
    age: "2–6 years",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bunny-soft-toy",
    name: "Bunny Soft Toy",
    category: "toys",
    price: 499,
    material: "plush",
    featured: true,
    isNew: true,
    age: "All ages",
    image:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "wooden-stack-rings",
    name: "Wooden Stack Rings",
    category: "toys",
    price: 429,
    material: "wood",
    featured: false,
    isNew: false,
    age: "1–3 years",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tiny-traveler-tee",
    name: "Tiny Traveler Tee",
    category: "baby",
    price: 399,
    material: "cotton",
    featured: false,
    isNew: true,
    age: "3–12 months",
    image:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rainbow-blocks",
    name: "Rainbow Blocks",
    category: "toys",
    price: 599,
    material: "wood",
    featured: false,
    isNew: true,
    age: "2–5 years",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "weekend-frock",
    name: "Weekend Frock",
    category: "kids",
    price: 999,
    material: "cotton",
    featured: true,
    isNew: false,
    age: "3–7 years",
    image:
      "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "night-owl-sleepsuit",
    name: "Night Owl Sleepsuit",
    category: "baby",
    price: 699,
    material: "cotton",
    featured: false,
    isNew: false,
    age: "0–9 months",
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pocket-play-shorts",
    name: "Pocket Play Shorts",
    category: "kids",
    price: 449,
    material: "blend",
    featured: false,
    isNew: true,
    age: "2–6 years",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORY_LABELS = {
  baby: "Baby Clothing",
  kids: "Kids Clothing",
  toys: "Toys",
};

const state = {
  category: "all",
  filter: "all",
  sort: "featured",
};

const grid = document.getElementById("product-grid");
const resultsMeta = document.getElementById("results-meta");
const emptyState = document.getElementById("empty-state");
const filterSelect = document.getElementById("filter-select");
const sortSelect = document.getElementById("sort-select");
const categoryChips = document.getElementById("category-chips");
const header = document.querySelector(".site-header");

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function matchesFilter(product) {
  switch (state.filter) {
    case "featured":
      return product.featured;
    case "new":
      return product.isNew;
    case "under-500":
      return product.price < 500;
    case "under-800":
      return product.price < 800;
    case "cotton":
      return product.material === "cotton";
    default:
      return true;
  }
}

function getVisibleProducts() {
  let items = PRODUCTS.filter((product) => {
    const categoryOk = state.category === "all" || product.category === state.category;
    return categoryOk && matchesFilter(product);
  });

  const sorters = {
    featured: (a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name),
    newest: (a, b) => Number(b.isNew) - Number(a.isNew) || a.name.localeCompare(b.name),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name),
  };

  return items.sort(sorters[state.sort] || sorters.featured);
}

function productCard(product, index) {
  const badge = product.isNew ? "New" : product.featured ? "Featured" : "";
  const waText = encodeURIComponent(
    `Hi Chhutkan, I'm interested in ${product.name} (${formatPrice(product.price)}).`
  );

  return `
    <article class="product" style="animation-delay: ${index * 40}ms">
      <div class="product-media">
        ${badge ? `<span class="product-badge">${badge}</span>` : ""}
        <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="500" />
      </div>
      <div class="product-body">
        <p class="product-cat">${CATEGORY_LABELS[product.category]}</p>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-meta">${product.age} · ${product.material}</p>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <a class="btn btn-whatsapp" href="https://wa.me/919887007788?text=${waText}" target="_blank" rel="noopener noreferrer">Ask</a>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const items = getVisibleProducts();
  const categoryLabel =
    state.category === "all" ? "all categories" : CATEGORY_LABELS[state.category].toLowerCase();

  resultsMeta.textContent =
    items.length === 0
      ? "No products to show"
      : `Showing ${items.length} ${items.length === 1 ? "item" : "items"} in ${categoryLabel}`;

  emptyState.hidden = items.length > 0;
  grid.innerHTML = items.map(productCard).join("");
}

function setCategory(category) {
  state.category = category;
  categoryChips.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === category);
  });
  render();
}

categoryChips.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  setCategory(chip.dataset.category);
});

filterSelect.addEventListener("change", () => {
  state.filter = filterSelect.value;
  render();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  render();
});

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  },
  { passive: true }
);

document.querySelectorAll(".map-card, #open-maps").forEach((el) => {
  el.setAttribute("href", MAP_URL);
});

render();
