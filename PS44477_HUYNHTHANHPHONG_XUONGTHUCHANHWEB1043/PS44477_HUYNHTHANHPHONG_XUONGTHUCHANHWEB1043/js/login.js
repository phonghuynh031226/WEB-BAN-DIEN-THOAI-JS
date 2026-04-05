function loginUser() {
  const username = document.getElementById('username')?.value.trim();
  const password = document.getElementById('password')?.value;

  // 1) Kiểm tra nhập liệu
  if (!username || !password) {
    alert('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu');
    return false;
  }

  // 2) Đọc users an toàn
  const USERS_KEY = 'users';
  const IS_LOGGED_IN_KEY = 'isLoggedIn';
  const CURRENT_USER_KEY = 'currentUser';

  let users = [];
  try {
    users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  } catch {
    users = [];
  }
  if (!Array.isArray(users) || users.length === 0) {
    alert('Chưa có tài khoản. Vui lòng đăng ký trước!');
    return false;
  }

  // 3) Tìm user (không phân biệt hoa/thường cho username)
  const target = username.toLowerCase();
  const user = users.find(u =>
    (u?.username || '').toLowerCase() === target &&
    u?.password === password
  );

  if (!user) {
    alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    return false;
  }

  // 4) Lưu trạng thái đăng nhập
  localStorage.setItem(IS_LOGGED_IN_KEY, 'true');
  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify({
      username: user.username,
      lastLogin: Date.now()
    })
  );

  // 5) Điều hướng (replace để không quay về trang login khi bấm Back)
  alert('Đăng nhập thành công!');
  window.location.replace('index.html');
  return false; // chặn form submit mặc định
}
