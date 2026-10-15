/*
  Kuckoo Co. — page behaviour.
  Reads the products from products.js and draws them on each page.
  You shouldn't need to edit this file to change products.
*/

function formatPrice(rm) {
  return "RM" + Number(rm).toFixed(2);
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function productLink(p) {
  return "product.html?id=" + encodeURIComponent(p.id);
}

function cardHTML(p) {
  return `
    <a class="card" href="${productLink(p)}">
      <div class="card-media">
        ${p.isNew ? '<span class="badge-new">New</span>' : ""}
        <img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy" width="400" height="400">
      </div>
      <div class="card-body">
        <span class="cat">${escapeHTML(p.category)}</span>
        <h3>${escapeHTML(p.name)}</h3>
        <span class="price">${formatPrice(p.price)}</span>
      </div>
    </a>`;
}

/* ---------- Home page: featured products ---------- */
function renderFeatured() {
  const el = document.getElementById("featured");
  if (!el) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  el.innerHTML = featured.map(cardHTML).join("");
}

/* ---------- Shop page: all products + category filter ---------- */
function renderShop() {
  const grid = document.getElementById("shop-grid");
  const filters = document.getElementById("filters");
  const count = document.getElementById("result-count");
  if (!grid || !filters) return;

  const params = new URLSearchParams(location.search);
  let active = params.get("category");
  if (!CATEGORIES.includes(active)) active = "All";

  const options = ["All", ...CATEGORIES];
  filters.innerHTML = options.map(c =>
    `<button class="chip" type="button" data-cat="${escapeHTML(c)}">${escapeHTML(c)}</button>`
  ).join("");

  function draw() {
    const list = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);
    grid.innerHTML = list.map(cardHTML).join("");
    count.textContent = `Showing ${list.length} ${list.length === 1 ? "item" : "items"}` +
      (active === "All" ? "" : ` in ${active}`);
    filters.querySelectorAll(".chip").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.cat === active))
    );
  }

  filters.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    active = btn.dataset.cat;
    // Keep the chosen category in the address so it can be shared or bookmarked
    const url = new URL(location.href);
    if (active === "All") url.searchParams.delete("category");
    else url.searchParams.set("category", active);
    history.replaceState(null, "", url);
    draw();
  });

  draw();
}

/* ---------- Product page ---------- */
function renderProduct() {
  const el = document.getElementById("product");
  if (!el) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find(item => item.id === id);

  if (!p) {
    document.title = "Item not found — Kuckoo Co.";
    el.innerHTML = `
      <div class="page-title">
        <h1>Oops, this one flew away.</h1>
        <p>We couldn't find that item. It may have sold out or moved.</p>
        <p style="margin-top:20px"><a class="btn" href="shop.html">Back to the shop</a></p>
      </div>`;
    return;
  }

  document.title = `${p.name} — Kuckoo Co.`;
  const catLink = "shop.html?category=" + encodeURIComponent(p.category);

  el.innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb">
      <a href="shop.html">Shop</a> / <a href="${catLink}">${escapeHTML(p.category)}</a> / ${escapeHTML(p.name)}
    </nav>
    <div class="product">
      <div class="product-img">${p.isNew ? '<span class="badge-new">New</span>' : ""}<img src="${p.image}" alt="${escapeHTML(p.name)}" width="800" height="800"></div>
      <div class="product-info">
        <a class="cat" href="${catLink}">${escapeHTML(p.category)}</a>
        <h1>${escapeHTML(p.name)}</h1>
        <p class="price">${formatPrice(p.price)}</p>
        <p class="desc">${escapeHTML(p.description)}</p>
        <button class="btn" type="button" disabled>Online ordering coming soon</button>
        <p class="note">We're still building our checkout. Check back soon!</p>
        <ul class="perks">
          <li>🎁 Free gift wrap on every order</li>
          <li>🚚 Ships within Malaysia</li>
          <li>💛 Picked by humans who giggle at odd things</li>
        </ul>
      </div>
    </div>`;

  // "You might also like": other items from the same category
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  const relEl = document.getElementById("related");
  if (relEl && related.length) {
    relEl.innerHTML = `
      <div class="section-head"><h2>You might also like</h2><a href="${catLink}">More ${escapeHTML(p.category)} →</a></div>
      <div class="grid">${related.map(cardHTML).join("")}</div>`;
  }
}

/* Footer: Instagram and email from SHOP_INFO in products.js */
function renderContact() {
  if (typeof SHOP_INFO === "undefined") return;
  document.querySelectorAll("[data-instagram]").forEach(a => {
    a.href = "https://www.instagram.com/" + encodeURIComponent(SHOP_INFO.instagram) + "/";
    a.querySelector("span").textContent = "@" + SHOP_INFO.instagram;
  });
  document.querySelectorAll("[data-email]").forEach(a => {
    a.href = "mailto:" + SHOP_INFO.email;
    a.querySelector("span").textContent = SHOP_INFO.email;
  });
}
renderContact();

/* Footer year */
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

renderFeatured();
renderShop();
renderProduct();
