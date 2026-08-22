

const STORE_CONFIG = {
  name: "Retro Station",
  currency: "IQD",
  deliveryFee: 5000,
  phone: "07506692030",
  whatsappNumber: "9647506692030",
  logo: "./Images/logo.png",
  social: {
    instagram: "https://www.instagram.com/retro.station.iq/",
    tiktok: "https://www.tiktok.com/@retrostation_iq?_r=1&_t=ZS-98jW45B4bhc",
    whatsapp: "https://wa.me/9647506692030",
  },

  coupons: {
    RETROSTATIONJR44: { type: "percent", value: 0.1, label: "10% off" },
  },
};

const PRODUCTS = [
  {
    id: 1,
    name: "R36S Handheld",
    price: 56000,
    badge: "",
    image: "./Images/R36S Purple.png",
    images: [
      "./Images/R36S Purple2.png",
      "./Images/R36S White2.png",
      "./Images/R36S Black2.png",
      "./Images/R36S Orange2.png",
      "./Images/R36S Blue2.png",
      "./Images/R36S Red2.png",
      "./Images/R36S Green2.png",
    ],
    description:
      "Open-source retro gaming handheld with a 3.5-inch 640×480 IPS display, RK3326 processor options, 3200mAh battery, and support for thousands of classic games.",
    specs: [
      "3.5-inch IPS Display",
      "640×480 Resolution",
      "128GB or 64GB Storage Options",
      "Mali-G31 GPU",
      "3200mAh Battery",
      "Linux/Open-Source System",
      "TF / MicroSD Storage Support",
      "Supports Classic Retro Emulators",
      "USB-C Charging",
      "3.5mm Headphone Jack",
    ],
    variants: [
      {
        id: "dual-core",
        label: "128GB · 25,000 Games",
        labelKey: "variants.r36sDual",
        price: 56000,
      },
      {
        id: "one-core",
        label: "64GB · 15,000 Games",
        labelKey: "variants.r36sOne",
        price: 46000,
      },
    ],
  },
  {
    id: 2,
    name: "M22 Pro Handheld",
    price: 75000,
    badge: "",
    image: "./Images/M22 Black.png",
    images: [
      "./Images/M22 Pro wh-bk.png",
      "./Images/M22 Black.png",
      "./Images/M22 Pro White.png",
      "./Images/M22 Pro ShowCase.png",
    ],
    description:
      "Portable retro handheld with a large 5-inch IPS display, 3000mAh battery, and large-capacity game storage options.",
    specs: [
      "5.0-inch IPS Display",
      "1920×1080 Listed Resolution",
      "N909 Dual-Core 1.2GHz CPU",
      "3000mAh Battery",
      "64GB / 128GB TF Card Options",
      "20,000+ Listed Games Depending on Version",
      "Built-in Speaker",
      "Multiple Language Support",
      "Portable Lightweight Body",
      "USB Charging",
    ],
  },
  {
    id: 3,
    name: "G28 Handheld",
    price: 69000,
    badge: "Out of Stock",
    outOfStock: true,
    image: "./Images/G28 Black.png",
    images: ["./Images/G28 Black.png"],
    description:
      "Compact retro gaming handheld with a 4.3-inch IPS display, 64GB expandable storage options, OTG support, and thousands of preloaded classic games depending on version.",
    specs: [
      "4.3-inch IPS Display",
      "480×272 Resolution",
      "16:9 Screen Ratio",
      "60Hz Refresh Rate",
      "2000mAh Battery",
      "64GB Storage Version Available",
      "Expandable TF / MicroSD Storage",
      "OTG Support",
      "Supports Multiple Retro Emulators",
      "Portable Plug-and-Play Design",
    ],
  },
  {
    id: 4,
    name: "Anime LED Box",
    price: 15000,
    badge: "",
    image: "./Images/AOT LED.png",
    images: [
      "./Images/AOT LED.png",
      "./Images/Goku LED.png",
      "./Images/Light Box Red.png",
      "./Images/Naruto LED.png",
      "./Images/Luffy LED.png",
    ],
    description:
      "Decorative gaming-themed LED light box for desks, gaming rooms, shelves, entertainment setups, and gift displays.",
    specs: [
      "Gaming Room Decoration",
      "LED Light Box Design",
      "Side-Lit 3D Visual Effect",
      "Dimmable Brightness",
      "Desk / Shelf Display",
      "Gift-Friendly Design",
      "Approx. 28×50×3.5cm Listed Size",
      "Ambient Gaming Setup Lighting",
    ],
  },
  {
    id: 5,
    name: "Gaming Carry Bags",
    price: 32000,
    badge: "",
    image: "./Images/Bags.png",
    images: [
      "./Images/Bags.png",
      "./Images/Bag AOT.png",
      "./Images/totoro bag.png",
      "./Images/one piece bag.png",
      "./Images/naruto bag.png",
      "./Images/tokyo ghoul bag.png",
      "./Images/demon slayer bag.png",
      "./Images/bag showcase.png",
      "./Images/bag showcase2.png",
      "./Images/bag showcase3.png",
    ],
    description:
      "High-quality anime-inspired backpack designed for college, travel, work, and everyday use. With dedicated space for your laptop, books, gaming devices, accessories, and daily essentials, it keeps everything organized while giving your outfit a unique anime touch.",
    specs: [
      "Protective Carrying Bag",
      "Fits Handheld Consoles",
      "Accessory Storage Space",
      "Travel-Friendly Design",
      "Scratch Protection",
      "Shock-Resistant Exterior",
      "Zipper Closure",
      "Lightweight Portable Build",
    ],
  },
  {
    id: 6,
    name: "Board Game",
    price: 15000,
    badge: "",
    image: "./Images/Football Board Game.png",
    images: ["./Images/Football Board Game.png",
      "./Images/amojr44.jpg",
      "./Images/amojr442.jpg",
      "./Images/Football board 3.png",
    ],
    description:
      "Fun tabletop board game option for family nights, friends, parties, and offline entertainment.",
    specs: [
      "Tabletop Board Game",
      "Family-Friendly Entertainment",
      "Good for Friends and Parties",
      "Offline Multiplayer Fun",
      "Easy to Learn",
      "Replayable Gameplay",
      "Gift-Friendly Product",
      "Portable Box Packaging",
    ],
    variants: [
      {
        id: "buy-1",
        label: "Buy 1",
        labelKey: "variants.boardBuy1",
        price: 15000,
        packQty: 1,
      },
      {
        id: "buy-2",
        label: "Buy 2",
        labelKey: "variants.boardBuy2",
        price: 14000,
        originalPrice: 15000,
        discountPercent: 10,
        packQty: 2,
        offer: true,
      },
    ],
  },
];

const CART_KEY = "retro_cart";

function parseIQD(text) {
  const cleaned = String(text || "")
    .replace(/IQD/gi, "")
    .replace(/[^\d]/g, "");

  return Number(cleaned || 0);
}

function formatIQD(n) {
  return (Number(n) || 0).toLocaleString("en-US") + " " + STORE_CONFIG.currency;
}

function formatPhoneDisplay(phone = STORE_CONFIG.phone) {
  const digits = String(phone).replace(/\D/g, "");

  if (digits.startsWith("07") && digits.length === 11) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }

  if (digits.startsWith("964") && digits.length >= 12) {
    const local = `0${digits.slice(3)}`;
    if (local.length === 11) {
      return `${local.slice(0, 4)} ${local.slice(4, 7)} ${local.slice(7)}`;
    }
    return `+964 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }

  return phone.startsWith("+") ? phone : phone;
}

function getPhoneTelHref(phone = STORE_CONFIG.phone) {
  let digits = String(phone).replace(/\D/g, "");
  if (digits.startsWith("0")) digits = `964${digits.slice(1)}`;
  return `tel:+${digits}`;
}

function applyStoreContactInfo() {
  const telHref = getPhoneTelHref();
  const display = formatPhoneDisplay();

  document.querySelectorAll("[data-store-phone]").forEach((el) => {
    el.textContent = display;
    if (el.tagName === "A") {
      el.setAttribute("href", telHref);
    }
  });

  document.querySelectorAll("[data-store-logo]").forEach((el) => {
    if (el.tagName === "IMG" && STORE_CONFIG.logo) {
      el.src = STORE_CONFIG.logo;
    }
  });
}

function getProduct(id) {
  return PRODUCTS.find((p) => String(p.id) === String(id)) || null;
}

function getProductImages(product) {
  if (!product) return [];

  if (Array.isArray(product.images) && product.images.length) {
    return product.images;
  }

  return product.image ? [product.image] : [];
}

function getProductVariants(product) {
  return Array.isArray(product?.variants) ? product.variants : [];
}

function getVariantLabel(variant) {
  if (!variant) return "";

  if (variant.labelKey && typeof t === "function") {
    const translated = t(variant.labelKey);
    if (translated && translated !== variant.labelKey) return translated;
  }

  return variant.label || "";
}

function getVariantById(product, variantId) {
  const variants = getProductVariants(product);
  if (!variants.length) return null;
  return variants.find((v) => String(v.id) === String(variantId)) || variants[0];
}

function getDisplayPrice(product, variantId) {
  const variant = getVariantById(product, variantId);
  return Number(variant?.price ?? product?.price) || 0;
}

function isProductOutOfStock(product) {
  return Boolean(product?.outOfStock);
}

function cartItemKey(item) {
  return `${item.id}::${item.variantId || ""}`;
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function getCartCount(cart) {
  return (cart || getCart()).reduce((sum, it) => {
    return sum + (Number(it.qty) || 0);
  }, 0);
}

function updateCartBadge() {
  const count = getCartCount();

  document.querySelectorAll("[data-cart-badge]").forEach((el) => {
    el.textContent = count > 0 ? String(count) : "";
    el.classList.toggle("is-visible", count > 0);
  });

  document.querySelectorAll("[data-cart-label]").forEach((el) => {
    el.textContent = count > 0 ? `(${count})` : "";
  });
}

function upsertCartItem(item) {
  const cart = getCart();
  const key = cartItemKey(item);
  const idx = cart.findIndex((x) => cartItemKey(x) === key);

  if (idx >= 0) {
    cart[idx].qty = (Number(cart[idx].qty) || 0) + (Number(item.qty) || 1);
    cart[idx].name = item.name;
    cart[idx].price = item.price;
    cart[idx].img = item.img;
    cart[idx].variantId = item.variantId || "";
    cart[idx].variantLabel = item.variantLabel || "";
  } else {
    cart.push({
      id: item.id,
      variantId: item.variantId || "",
      variantLabel: item.variantLabel || "",
      name: item.name,
      price: item.price,
      img: item.img,
      qty: Number(item.qty) || 1,
    });
  }

  setCart(cart);
  return cart;
}

function addProductToCart(productId, qty = 1, variantId = null) {
  const product = getProduct(productId);
  if (!product || isProductOutOfStock(product)) return null;

  const localized = typeof getLocalizedProduct === "function"
    ? getLocalizedProduct(product.id) || product
    : product;
  const variant = getVariantById(product, variantId);
  const packQty = Number(variant?.packQty) || 1;
  const unitPrice = Number(variant?.price ?? product.price) || 0;
  const variantLabel = variant ? getVariantLabel(variant) : "";
  const displayName = variantLabel
    ? `${localized.name} — ${variantLabel}`
    : localized.name;

  upsertCartItem({
    id: product.id,
    variantId: variant?.id || "",
    variantLabel,
    name: displayName,
    price: unitPrice,
    img: product.image,
    qty: (Number(qty) || 1) * packQty,
  });

  return { product, variant, displayName };
}

function computeOrder(cart, coupon, deliveryFee = STORE_CONFIG.deliveryFee) {
  const subtotal = cart.reduce((sum, it) => {
    return sum + (Number(it.price) || 0) * (Number(it.qty) || 0);
  }, 0);

  const delivery = subtotal > 0 ? Math.max(0, Number(deliveryFee) || 0) : 0;
  let discount = 0;

  if (coupon) {
    if (coupon.type === "percent") {
      discount = Math.round(subtotal * coupon.value);
    }

    if (coupon.type === "fixed") {
      discount = coupon.value;
    }

    if (discount > subtotal) {
      discount = subtotal;
    }
  }

  const total = Math.max(0, subtotal - discount + delivery);

  return {
    subtotal,
    discount,
    delivery,
    total,
  };
}

function resolveCoupon(code) {
  const raw = String(code || "").trim();

  if (!raw) return null;

  const key = Object.keys(STORE_CONFIG.coupons).find(
    (k) => k.toUpperCase() === raw.toUpperCase()
  );

  if (!key) return null;

  return { ...STORE_CONFIG.coupons[key], code: key };
}

function buildWhatsAppOrderMessage(cart, summary, customer = {}) {
  const lang = typeof getCurrentLang === "function" ? getCurrentLang() : "en";
  const lines = [];

  if (lang === "ar") {
    lines.push("طلب جديد من Retro Station");
    lines.push("");
    lines.push(`الاسم: ${customer.name || "-"}`);
    lines.push(`المحافظة: ${customer.city || "-"}`);
    lines.push(`العنوان: ${customer.address || "-"}`);
    lines.push(`ملاحظات: ${customer.notes || "-"}`);
    lines.push("");
    lines.push("المنتجات:");

    cart.forEach((item, index) => {
      const itemTotal = Number(item.price) * Number(item.qty);

      lines.push(
        `${index + 1}. ${item.name} × ${item.qty} — ${formatIQD(itemTotal)}`
      );
    });

    lines.push("");
    lines.push(`المجموع الفرعي: ${formatIQD(summary.subtotal)}`);
    lines.push(`الخصم: ${formatIQD(summary.discount)}`);
    lines.push(`التوصيل: ${formatIQD(summary.delivery)}`);
    lines.push(`الإجمالي: ${formatIQD(summary.total)}`);

    return lines.join("\n");
  }

  if (lang === "ku") {
    lines.push("داواکاریی نوێ لە Retro Station");
    lines.push("");
    lines.push(`ناو: ${customer.name || "-"}`);
    lines.push(`پارێزگا: ${customer.city || "-"}`);
    lines.push(`ناونیشان: ${customer.address || "-"}`);
    lines.push(`تێبینی: ${customer.notes || "-"}`);
    lines.push("");
    lines.push("بەرهەمەکان:");

    cart.forEach((item, index) => {
      const itemTotal = Number(item.price) * Number(item.qty);

      lines.push(
        `${index + 1}. ${item.name} × ${item.qty} — ${formatIQD(itemTotal)}`
      );
    });

    lines.push("");
    lines.push(`کۆی لاوەکی: ${formatIQD(summary.subtotal)}`);
    lines.push(`داشکاندن: ${formatIQD(summary.discount)}`);
    lines.push(`گەیاندن: ${formatIQD(summary.delivery)}`);
    lines.push(`کۆی گشتی: ${formatIQD(summary.total)}`);

    return lines.join("\n");
  }

  lines.push("New order from Retro Station");
  lines.push("");
  lines.push(`Name: ${customer.name || "-"}`);
  lines.push(`City: ${customer.city || "-"}`);
  lines.push(`Address: ${customer.address || "-"}`);
  lines.push(`Notes: ${customer.notes || "-"}`);
  lines.push("");
  lines.push("Products:");

  cart.forEach((item, index) => {
    const itemTotal = Number(item.price) * Number(item.qty);

    lines.push(
      `${index + 1}. ${item.name} × ${item.qty} — ${formatIQD(itemTotal)}`
    );
  });

  lines.push("");
  lines.push(`Subtotal: ${formatIQD(summary.subtotal)}`);
  lines.push(`Discount: ${formatIQD(summary.discount)}`);
  lines.push(`Delivery: ${formatIQD(summary.delivery)}`);
  lines.push(`Total: ${formatIQD(summary.total)}`);

  return lines.join("\n");
}

function openWhatsAppOrder(cart, summary, customer = {}) {
  const phone = String(STORE_CONFIG.whatsappNumber || "").replace(/[^\d]/g, "");

  if (!phone) {
    showToast("WhatsApp number is missing.", "error");
    return false;
  }

  const message = buildWhatsAppOrderMessage(cart, summary, customer);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");

  return true;
}

function getWhatsAppContactMessage() {
  if (typeof t === "function") {
    const msg = t("whatsapp.contact");
    if (msg && msg !== "whatsapp.contact") return msg;
  }

  return "Hello Retro Station! I'd like to ask a few questions about your products and services.";
}

function openWhatsAppContact() {
  const phone = String(STORE_CONFIG.whatsappNumber || "").replace(/[^\d]/g, "");

  if (!phone) {
    showToast("WhatsApp number is missing.", "error");
    return false;
  }

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(getWhatsAppContactMessage())}`;
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

function bindWhatsAppContactLinks(root = document) {
  root.querySelectorAll("[data-whatsapp-contact]").forEach((el) => {
    if (el.dataset.whatsappBound === "1") return;
    el.dataset.whatsappBound = "1";

    el.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsAppContact();
    });
  });
}

function submitOrder(cart, summary, customer = {}) {
  if (!cart.length) {
    showToast(t("toast.cartEmpty"), "error");
    return false;
  }

  if (!customer.name) {
    showToast(t("errors.nameRequired"), "error");
    return false;
  }

  if (!customer.city) {
    showToast(t("errors.cityRequired"), "error");
    return false;
  }

  const opened = openWhatsAppOrder(cart, summary, customer);

  if (!opened) {
    return false;
  }

  showToast(t("toast.orderPlaced", { total: formatIQD(summary.total) }));

  localStorage.removeItem(CART_KEY);
  updateCartBadge();

  return true;
}

function showToast(message, type = "success") {
  const existing = document.querySelector(".rs-toast");

  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.className = `rs-toast rs-toast--${type}`;
  toast.innerHTML = `
    <i class="fas ${type === "error" ? "fa-circle-exclamation" : "fa-circle-check"}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2400);
}

function offerText(key, fallback) {
  if (typeof t === "function") {
    const value = t(key);
    if (value && value !== key) return value;
  }
  return fallback;
}

function renderVariantOptions(product, selectedId = null) {
  const variants = getProductVariants(product);
  if (!variants.length) return "";

  const activeId = selectedId || variants[0].id;

  return `
    <div class="product-variants" data-variant-group="${product.id}">
      ${variants
        .map((variant) => {
          const label = getVariantLabel(variant);
          const active = String(variant.id) === String(activeId) ? " is-active" : "";
          const offer = variant.offer ? " is-offer" : "";
          const originalPrice = Number(variant.originalPrice) || 0;
          const discount = Number(variant.discountPercent) || 0;

          if (variant.offer && originalPrice > 0) {
            return `
              <button type="button" class="variant-option offer-deal${active}${offer}" data-variant-id="${variant.id}" data-variant-price="${variant.price}" data-original-price="${originalPrice}" data-discount-percent="${discount}">
                <span class="offer-ribbon" aria-hidden="true">-${discount}%</span>
                <span class="offer-deal-body">
                  <span class="offer-kicker">${offerText("variants.boardOfferTitle", "Special Offer")}</span>
                  <span class="variant-option-label">${label}</span>
                  <span class="offer-price-row">
                    <span class="price-was">${formatIQD(originalPrice)}</span>
                    <span class="price-now">${formatIQD(variant.price)} <small>${offerText("variants.boardOfferEach", "each")}</small></span>
                  </span>
                  <span class="offer-hint">${offerText("variants.boardOfferHint", "Buy 2 and get 11% off")}</span>
                </span>
              </button>
            `;
          }

          return `
            <button type="button" class="variant-option${active}${offer}" data-variant-id="${variant.id}" data-variant-price="${variant.price}">
              <span class="variant-option-label">${label}</span>
              <span class="variant-option-price">${formatIQD(variant.price)}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderProductCard(product) {
  const p = getLocalizedProduct(product.id) || product;
  const outOfStock = isProductOutOfStock(p);
  const variants = getProductVariants(p);
  const defaultVariant = variants[0] || null;
  const offerVariant = variants.find((v) => v.offer && v.originalPrice);
  const badgeHtml = p.badge
    ? `<div class="product-badge${outOfStock ? " is-oos" : ""}">${p.badge}</div>`
    : offerVariant
      ? `<div class="product-badge is-offer-badge">${offerText("variants.boardOfferSave", `-${offerVariant.discountPercent || 11}%`)}</div>`
      : "";
  const price = defaultVariant ? defaultVariant.price : p.price;
  const actionHtml = outOfStock
    ? `<button type="button" class="btn-add-cart is-disabled" disabled>
         <i class="fas fa-ban"></i> ${typeof t === "function" ? t("product.outOfStock") : "Out of Stock"}
       </button>`
    : `<button type="button" class="btn-add-cart" data-add-cart="${p.id}" data-selected-variant="${defaultVariant?.id || ""}">
         <i class="fas fa-cart-plus"></i> ${typeof t === "function" ? t("product.add") : "Add to Cart"}
       </button>`;

  return `
    <div class="col-lg-4 col-md-6 col-sm-6">
      <article class="product-card${outOfStock ? " is-oos" : ""}${offerVariant ? " has-offer" : ""}" data-product-id="${p.id}">
        ${badgeHtml}

        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>

        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-description">${p.description}</p>
          <div class="product-price-wrap">
            <div class="product-price" data-price-display>${formatIQD(price)}</div>
            ${offerVariant ? `<div class="product-offer-note">${offerText("variants.boardOfferHint", "Buy 2 and get 11% off")}</div>` : ""}
          </div>
          ${renderVariantOptions(p, defaultVariant?.id)}

          <div class="product-actions">
            ${actionHtml}
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderProductsGrid(containerId) {
  const grid = document.getElementById(containerId);

  if (!grid) {
    return;
  }

  grid.innerHTML = PRODUCTS.map(renderProductCard).join("");
  bindVariantSelectors(grid);
  bindAddToCartButtons(grid);
}

function updatePriceDisplay(priceEl, btn) {
  if (!priceEl || !btn) return;

  const price = Number(btn.dataset.variantPrice) || 0;
  const original = Number(btn.dataset.originalPrice) || 0;
  const wrap = priceEl.closest(".product-price-wrap") || priceEl.parentElement;

  if (original > price) {
    priceEl.innerHTML = `<span class="price-was">${formatIQD(original)}</span><span class="price-now">${formatIQD(price)}</span>`;
    priceEl.classList.add("is-sale");
    wrap?.classList.add("is-sale");
  } else {
    priceEl.textContent = formatIQD(price);
    priceEl.classList.remove("is-sale");
    wrap?.classList.remove("is-sale");
  }
}

function bindVariantSelectors(root = document) {
  root.querySelectorAll("[data-variant-group]").forEach((group) => {
    const card = group.closest(".product-card, .details-card, .product-content");
    const priceEl = card?.querySelector("[data-price-display]") || card?.querySelector(".product-price");
    const addBtn = card?.querySelector("[data-add-cart]");

    group.querySelectorAll(".variant-option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        group.querySelectorAll(".variant-option").forEach((el) => el.classList.remove("is-active"));
        btn.classList.add("is-active");

        updatePriceDisplay(priceEl, btn);
        if (addBtn) addBtn.dataset.selectedVariant = btn.dataset.variantId || "";
      });
    });
  });
}

function bindAddToCartButtons(root = document) {
  root.querySelectorAll("[data-add-cart]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const id = btn.getAttribute("data-add-cart");
      const variantId = btn.dataset.selectedVariant || null;
      const result = addProductToCart(id, 1, variantId);

      if (result) {
        showToast(t("toast.added", { name: result.displayName }));
      }
    });
  });
}

function refreshStoreUI() {
  renderProductsGrid("productsGrid");
}

function initStore() {
  updateCartBadge();
  applyStoreContactInfo();
  bindWhatsAppContactLinks();
  window.addEventListener("languageChanged", refreshStoreUI);
}

document.addEventListener("DOMContentLoaded", initStore);
