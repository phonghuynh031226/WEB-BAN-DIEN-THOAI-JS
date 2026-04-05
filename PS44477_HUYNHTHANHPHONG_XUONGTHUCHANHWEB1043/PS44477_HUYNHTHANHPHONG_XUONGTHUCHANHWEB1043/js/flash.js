
// ======= COMMON =======
const VND = n => (n).toLocaleString('vi-VN') + '₫';

// ======= Thiết lập Flash Sale: kết thúc sau 15 phút kể từ khi mở trang =======
const FLASH_END = new Date(Date.now() + 15*60*1000);
const FLASH_OFF = 0.15; // 15%

// Đếm ngược
const flashCountdownEl = document.getElementById('flashCountdown');
(function tick(){
  const d = FLASH_END - Date.now();
  if(d <= 0){ flashCountdownEl.textContent = '00:00:00'; return; }
  const h = String(Math.floor(d/3600000)).padStart(2,'0');
  const m = String(Math.floor((d%3600000)/60000)).padStart(2,'0');
  const s = String(Math.floor((d%60000)/1000)).padStart(2,'0');
  flashCountdownEl.textContent = `${h}:${m}:${s}`;
  requestAnimationFrame(tick);
})();

// ===================== CHỌN SẢN PHẨM FLASH =====================
// Cách 1: Nếu bạn đã có mảng PRODUCTS, truyền 4 ID vào đây:
/// const FLASH_IDS = [1,2,3,4]; // ví dụ
/// const FLASH_PRODUCTS = PRODUCTS.filter(p => FLASH_IDS.includes(p.id));

// Cách 2: Không có PRODUCTS? Dùng 4 món mẫu dưới đây:
const FLASH_PRODUCTS = [
  {id:101, name:'Apple Watch S8', price:7500000, img:'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple_lte_2_.png'},
  {id:102, name:'AirPods Pro',    price:5200000, img:'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-pro-2-usb-c_1_.png'},
  {id:103, name:'iPhone 13',      price:13900000,img:'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg'},
  {id:104, name:'iPad Gen 9',     price:7990000, img:'https://cdn.viettablet.com/images/thumbnails/180/193/detailed/53/apple-gen-9_optimized.jpg'},
];

// Hàm giá đã giảm theo thời gian flash
const salePrice = p => (Date.now() < FLASH_END ? Math.round(p*(1-FLASH_OFF)) : p);

// Render 4 sản phẩm flash
const flashGrid = document.getElementById('flashGrid');
function renderFlash(){
  flashGrid.innerHTML = FLASH_PRODUCTS.map(p => `
    <div class="flash-card">
      <img src="${p.img}" alt="${p.name}">
      <div class="body">
        <div style="font-weight:700">${p.name}</div>
        <div>
          <span class="flash-price">${VND(salePrice(p.price))}</span>
          <span class="flash-old">${Date.now()<FLASH_END ? VND(p.price) : ''}</span>
        </div>
      </div>
      <button class="flash-btn" onclick="addToCartFlash(${p.id})">Thêm vào giỏ</button>
    </div>
  `).join('');
}
renderFlash();

// Thêm vào giỏ – tận dụng addToCart của bạn nếu có
function addToCartFlash(id){
  // Nếu bạn đã có hàm addToCart(id) & mảng PRODUCTS: map id flash -> data thật.
  // Dưới đây dùng nhanh theo mảng FLASH_PRODUCTS:
  const p = FLASH_PRODUCTS.find(x=>x.id===id);
  if(!p){ return; }
  // Chuẩn hoá qua addToCart của bạn (nếu có):
  if(typeof addToCart === 'function'){
    // Tạo bản tạm mô phỏng id trong hệ thống
    // -> bạn có thể sửa addToCart để nhận object {id,name,price,img}
    addToCart({
      id: p.id,
      name: p.name,
      price: salePrice(p.price),
      img: p.img
    });
  }else{
    // Demo tối thiểu nếu bạn chưa có addToCart
    alert('Đã thêm ' + p.name + ' – ' + VND(salePrice(p.price)));
  }
}
