// Danh sách chi nhánh
const stores = [
  {
    name: "Trung tâm Q.10",
    address: "12 Lý Thường Kiệt, Q.10, TP.HCM",
    lat: 10.762622,
    lng: 106.660172
  },
  {
    name: "Chi nhánh Q.1",
    address: "1 Nguyễn Huệ, Q.1, TP.HCM",
    lat: 10.772024,
    lng: 106.704111
  }
];

// Hiển thị danh sách
const storeList = document.getElementById("store-list");
stores.forEach(store => {
  const li = document.createElement("li");
  li.className = "sl-item";
  li.innerHTML = `
    <strong>${store.name}</strong> — ${store.address}
    <br><small>(${store.lat}, ${store.lng})</small>
  `;
  storeList.appendChild(li);
});

// Xử lý tìm cửa hàng gần nhất
document.getElementById("btn-find-nearest").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      let nearest = stores[0];
      let minDist = getDistance(latitude, longitude, nearest.lat, nearest.lng);

      stores.forEach(store => {
        const dist = getDistance(latitude, longitude, store.lat, store.lng);
        if (dist < minDist) {
          minDist = dist;
          nearest = store;
        }
      });

      document.getElementById("nearest-box").hidden = false;
      document.getElementById("nearest-msg").textContent = 
        `Cửa hàng gần nhất: ${nearest.name} (${minDist.toFixed(2)} km)`;
      document.getElementById("nearest-shop").textContent = nearest.address;

      document.getElementById("map-embed").src =
        `https://www.google.com/maps?q=${nearest.lat},${nearest.lng}&z=15&output=embed`;
    });
  } else {
    alert("Trình duyệt không hỗ trợ định vị!");
  }
});

// Hàm tính khoảng cách giữa 2 tọa độ
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // bán kính Trái đất km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
}
