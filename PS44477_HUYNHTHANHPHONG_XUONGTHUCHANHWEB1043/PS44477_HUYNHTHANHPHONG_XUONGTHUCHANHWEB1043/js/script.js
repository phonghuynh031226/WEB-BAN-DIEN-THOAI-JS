/* ======================= BANNER ======================= */
let bannerIndex = 0;
const BANNER_MAX = 4;                  // 0..4 -> 5 ảnh: banner0.jpg ... banner4.jpg
const bannerImg = () => document.getElementById("image");
const bannerCount = () => document.getElementById("count");

function renderBanner() {
  const img = bannerImg();
  if (!img) return;
  img.src = `img/banner/banner${bannerIndex}.jpg`;
  img.style.transition = "all .5s linear";
  // hiển thị dạng 1/5 cho thân thiện
  bannerCount().textContent = `${bannerIndex + 1}/${BANNER_MAX + 1}`;
}
function back() {
  bannerIndex = (bannerIndex - 1 + (BANNER_MAX + 1)) % (BANNER_MAX + 1);
  renderBanner();
}
function next() {
  bannerIndex = (bannerIndex + 1) % (BANNER_MAX + 1);
  renderBanner();
}
setInterval(next, 3000);

/* =================== DỮ LIỆU SẢN PHẨM =================== */
const products = [
  {
    name: "iPhone 14 Plus 512GB | Chính hãng VN/A",
    category: "SMARTPHONE",
    price: 17490000,
    img: "https://24hstore.vn/images/products/2022/12/07/original/iphone-14-pro-max-256gb-cu-tim_1670389542.jpg",
    images: [
      "https://24hstore.vn/images/products/2024/08/27/large/iphone-14-plus-trang_1724727027_1.jpg",
      "https://24hstore.vn/images/products/2024/08/27/large/iphone-14-plus-den_1724727027_1.jpg",
      "https://24hstore.vn/images/products/2024/08/27/large/iphone-14-plus-vang_1724727027_1.jpg"
    ],
    colors: [
      { color: "Bạc",  img: "https://24hstore.vn/images/products/2024/08/27/large/iphone-14-plus-trang_1724727027_1.jpg" },
      { color: "Đen",  img: "https://24hstore.vn/images/products/2024/08/27/large/iphone-14-plus-den_1724727027_1.jpg" },
      { color: "Vàng", img: "https://24hstore.vn/images/products/2024/08/27/large/iphone-14-plus-vang_1724727027_1.jpg" }
    ],
    topSeller: true,
    description: "Sản phẩm cao cấp của Apple với màn hình lớn, camera chuyên nghiệp."
  },
  {
    name: "iPhone 15 Plus",
    category: "SMARTPHONE",
    price: 25000000,
    img: "https://24hstore.vn/images/products/2024/08/27/original/iphone-15-hong_1724724917.jpg",
    colors: [
      { color: "Hồng", img: "https://24hstore.vn/images/products/2024/08/27/original/iphone-15-hong_1724724917.jpg" },
      { color: "Đen",  img: "https://24hstore.vn/images/products/2024/08/27/original/iphone-15-den_1724724916.jpg" },
      { color: "Trắng",img: "https://24hstore.vn/images/products/2024/08/27/original/iphone-15-trang_1724724915.jpg" }
    ],
    description: "Sản phẩm cao cấp của Apple với màn hình lớn, camera chuyên nghiệp."
  },
  {
    name: "MacBook Air M2",
    category: "LAPTOP",
    price: 35000000,
    img: "https://24hstore.vn/images/products/2022/06/23/original/smart-keyboard-folio-us-cho-129-inch-ipad-pro-gen-5-1_1655957987.webp",
    colors: [{ color: "Bạc", img: "https://24hstore.vn/images/products/2022/06/23/original/smart-keyboard-folio-us-cho-129-inch-ipad-pro-gen-5-1_1655957987.webp" }],
    topSeller: true,
    description: "Laptop siêu mỏng nhẹ với chip M2 mạnh mẽ và pin lâu dài."
  },
  {
    name: "Samsung Galaxy S23",
    category: "SMARTPHONE",
    price: 25000000,
    img: "https://24hstore.vn/images/products/2025/03/10/original/galaxy-a56-5g-8gb-128gb-xam_1741604673.jpg",
    colors: [
      { color: "Xám", img: "https://24hstore.vn/images/products/2025/03/10/original/galaxy-a56-5g-8gb-128gb-xam_1741604673.jpg" },
      { color: "Đen", img: "https://24hstore.vn/images/products/2025/03/10/original/galaxy-a56-5g-8gb-128gb-den_1741604674.jpg" }
    ],
    description: "Điện thoại flagship của Samsung với hiệu năng mạnh mẽ và camera sắc nét."
  },
  {
    name: "iPhone 16 Plus",
    category: "SMARTPHONE",
    price: 20000000,
    img: "https://24hstore.vn/images/products/2024/09/10/original/iphone-16-plus-xanh-luu-ly_1725930493.jpg",
    colors: [
      { color: "Xanh Lưu Ly", img: "https://24hstore.vn/images/products/2024/09/10/original/iphone-16-plus-xanh-luu-ly_1725930493.jpg" },
      { color: "Đen",          img: "https://24hstore.vn/images/products/2024/09/10/original/iphone-16-plus-den_1725930494.jpg" }
    ],
    topSeller: true,
    description: "Sản phẩm cao cấp của Apple với màn hình lớn, camera chuyên nghiệp."
  },
  {
    name: "Tai nghe Bluetooth Apple AirPods 4",
    category: "TAI NGHE APPLE",
    price: 2500000,
    img: "https://24hstore.vn/images/products/2024/09/10/original/apple-airpods-4_1725937362.jpg",
    colors: [{ color: "Trắng", img: "https://24hstore.vn/images/products/2024/09/10/original/apple-airpods-4_1725937362.jpg" }],
    description: "Máy mới 100%, chính hãng Apple Việt Nam. Bảo hành 12 tháng."
  },
  {
    name: "Apple Watch Series 10",
    category: "APPLE WATCH",
    price: 7000000,
    img: "https://24hstore.vn/images/products/2024/10/18/original/mwwh3sa_1729219618.jpg",
    colors: [
      { color: "Bạc", img: "https://24hstore.vn/images/products/2024/10/18/original/mwwh3sa_1729219618.jpg" },
      { color: "Đen", img: "https://24hstore.vn/images/products/2024/10/18/original/apple-watch-den.jpg" }
    ],
    topSeller: true,
    description: "Đồng hồ thông minh với nhiều tính năng sức khoẻ."
  },
  {
    name: "iPad Pro M4 11 inch",
    category: "IPAD",
    price: 25000000,
    img: "https://24hstore.vn/images/products/2024/05/09/original/mvv93za-ipad-pro-m4-11-inch-wifi-bac_1715247697.jpg",
    colors: [{ color: "Bạc", img: "https://24hstore.vn/images/products/2024/05/09/original/mvv93za-ipad-pro-m4-11-inch-wifi-bac_1715247697.jpg" }],
    description: "Chính hãng Apple Việt Nam, bảo hành 12 tháng."
  }
];

/* ================== RENDER MINI SHOP ================== */
const productGrid = document.getElementById("productGrid");
const formatPrice = v => v.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = "";
  products.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      ${p.topSeller ? '<div class="top-seller-badge">Top bán chạy</div>' : ""}
      <div class="thumb"><img src="${p.img}" alt="${p.name}"></div>
      <div class="actions">
        <button title="Xem chi tiết" onclick="showProductDetail(${i})">👁️</button>
        <button title="Thêm vào giỏ" onclick="addToCart(${i}, true)">🛒</button>
      </div>
      <div class="category">${p.category}</div>
      <div class="price">${formatPrice(p.price)}</div>
      <div class="name">${p.name}</div>
    `;
    el.ondblclick = () => showProductDetail(i);
    productGrid.appendChild(el);
  });
}
renderProducts();

/* =================== MODAL CHI TIẾT =================== */
const productModal = document.getElementById("productModal");
const modalMainImg   = document.getElementById("modalMainImg");
const modalThumbs    = document.getElementById("modalThumbnails");
const modalDetailBox = document.getElementById("modalProductDetail");
let currentProductIndex = null;

function showProductDetail(i) {
  const p = products[i];
  if (!productModal || !p) return;

  currentProductIndex = i;
  productModal.style.display = "flex";

  const colors = (p.colors && p.colors.length) ? p.colors : [{ color: "Mặc định", img: p.img }];
  modalMainImg.src = colors[0].img;
  modalMainImg.alt = p.name;

  // thumbnails
  modalThumbs.innerHTML = "";
  colors.forEach((c, idx) => {
    const im = document.createElement("img");
    im.src = c.img; im.alt = c.color; im.className = "modal-thumb";
    im.onclick = () => selectColor(idx);
    modalThumbs.appendChild(im);
  });
  if (modalThumbs.firstChild) modalThumbs.firstChild.style.border = "2.5px solid #2979ff";

  // color buttons + info
  const colorBtns = colors.map((c, idx) =>
    `<button type="button" class="color-btn${idx===0?' active':''}" data-idx="${idx}">${c.color}</button>`
  ).join("");

  modalDetailBox.innerHTML = `
    <h2 style="margin-bottom:8px">${p.name}</h2>
    <div class="modal-product-meta"><b>Danh mục:</b> ${p.category} | <b>Giá:</b> ${formatPrice(p.price)}</div>
    <p style="margin:10px 0">${p.description || ""}</p>
    ${colors.length>1 ? `<div class="color-options"><strong style="margin-right:10px">Chọn màu:</strong>${colorBtns}</div>` : ""}
    <button class="add-to-cart-btn" onclick="addToCart(${i});">Thêm vào giỏ</button>
  `;

  modalDetailBox.querySelectorAll(".color-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      modalDetailBox.querySelectorAll(".color-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      selectColor(+btn.dataset.idx);
    });
  });

  function selectColor(idx){
    modalMainImg.src = colors[idx].img;
    modalThumbs.querySelectorAll("img").forEach((img, k)=>{
      img.style.border = k===idx ? "2.5px solid #2979ff" : "2px solid #eee";
    });
  }
}
function closeModal() {
  if (productModal) productModal.style.display = "none";
  currentProductIndex = null;
}

/* ======================= GIỎ HÀNG ======================= */
const CART_KEY = "cart";
const IS_LOGGED_IN_KEY = "isLoggedIn";

const readCart  = () => { try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; } };
const writeCart = (c) => localStorage.setItem(CART_KEY, JSON.stringify(c));

function addToCart(i, openAfter = false) {
  // yêu cầu đăng nhập
  const logged = localStorage.getItem(IS_LOGGED_IN_KEY) === "true";
  if (!logged) {
    alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
    window.location.href = "lognin.html";
    return;
  }

  const p = products[i];
  if (!p) return;

  // luôn đọc cart mới nhất để tránh sai lệch
  const cart = readCart();
  const item = cart.find(x => x.name === p.name);
  if (item) item.quantity += 1;
  else cart.push({ ...p, quantity: 1 });

  writeCart(cart);
  alert("Đã thêm vào giỏ hàng!");

  if (openAfter) showCart();              // tự mở giỏ sau khi thêm (click 🛒)
}

function showCart() {
  const cartModal = document.getElementById('cartModal');
  const cartItemsDiv = document.getElementById('cartItems');
  const cart = readCart();               // <- luôn đọc mới nhất

  if (!cartModal || !cartItemsDiv) return;

  cartModal.style.display = 'flex';

  if (!Array.isArray(cart) || cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Giỏ hàng đang trống.</p>';
    return;
  }

  let total = 0;
  const rows = cart.map((item, idx) => {
    const line = item.price * item.quantity;
    total += line;
    return `
      <li class="cart-row">
        <img src="${item.img}" alt="${item.name}" />
        <span class="cart-name">${item.name}</span>
        <span class="cart-price">${formatPrice(item.price)}</span>
        <div class="cart-qty">
          <button class="btn-decrease" onclick="changeQuantity(${idx}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="btn-increase" onclick="changeQuantity(${idx}, 1)">+</button>
        </div>
        <span class="cart-line">${formatPrice(line)}</span>
      </li>`;
  }).join("");

  cartItemsDiv.innerHTML = `
    <ul class="cart-list">${rows}</ul>
    <div class="cart-total"><b>Tổng cộng:</b> <span>${formatPrice(total)}</span></div>
  `;
}

function changeQuantity(idx, delta) {
  const cart = readCart();
  if (!cart[idx]) return;
  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  writeCart(cart);
  showCart();                            // re-render
}

function clearCart() {
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?')) {
    writeCart([]);
    showCart();
  }
}


function checkout() {
  window.location.href = "thanhtoan.html";
}

/* ===== ĐÓNG MODAL KHI CLICK RA NGOÀI ===== */
window.addEventListener("click", (e) => {
  if (e.target === productModal) closeModal();
  const cm = document.getElementById("cartModal");
  if (e.target === cm) closeCart();
});

/* ===== HIỂN THỊ NÚT ĐĂNG NHẬP/ĐĂNG XUẤT (đúng id) ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderBanner();

  const logged = localStorage.getItem(IS_LOGGED_IN_KEY) === "true";
  const loginBtn    = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");
  const logoutBtn   = document.getElementById("logout-btn");

  if (loginBtn && registerBtn && logoutBtn) {
    loginBtn.style.display    = logged ? "none"  : "block";
    registerBtn.style.display = logged ? "none"  : "block";
    logoutBtn.style.display   = logged ? "block" : "none";
    logoutBtn.onclick = (ev) => {
      ev.preventDefault();
      localStorage.removeItem(IS_LOGGED_IN_KEY);
      localStorage.removeItem("currentUser");
      window.location.reload();
    };
  }
});


function exportCart() {
  // Lấy giỏ hàng
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (!cart.length) {
    alert('Giỏ hàng đang trống.');
    return;
  }

  // Tạo dữ liệu dạng bảng (AOA)
  const rows = [
    ['STT', 'Tên sản phẩm', 'Đơn giá (VND)', 'Số lượng', 'Thành tiền (VND)']
  ];

  let subtotal = 0;
  cart.forEach((item, i) => {
    const qty = item.quantity || 1;
    const line = (item.price || 0) * qty;
    subtotal += line;
    rows.push([
      i + 1,
      item.name || '',
      item.price || 0,
      qty,
      line
    ]);
  });

  rows.push([]);
  rows.push(['', '', '', 'Tổng cộng', subtotal]);

  const fileName = `gio-hang-${new Date().toISOString().slice(0,10)}.xlsx`;

  // Nếu có SheetJS -> xuất .xlsx, nếu không -> fallback CSV
  if (typeof XLSX !== 'undefined') {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);

    // Set độ rộng cột cho dễ đọc
    ws['!cols'] = [
      { wch: 5 },   // STT
      { wch: 50 },  // Tên SP
      { wch: 16 },  // Đơn giá
      { wch: 10 },  // SL
      { wch: 18 }   // Thành tiền
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'GioHang');
    XLSX.writeFile(wb, fileName);
  } else {
    // Fallback: xuất CSV nếu thiếu thư viện
    const csv = rows
      .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName.replace('.xlsx', '.csv');
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

