function socialSignup(provider){
  alert("Bạn chọn đăng ký bằng " + provider + ". (Demo – cần backend OAuth)");
}

function togglePwd(id){
  const el = document.getElementById(id);
  el.type = el.type === "password" ? "text" : "password";
}

/* ==== realtime validate ==== */
const passEl = document.getElementById('password');
const confirmEl = document.getElementById('confirm');
const matchMsgEl = document.getElementById('matchMsg');
const agreeEl = document.getElementById('agree');
const submitBtn = document.getElementById('submitBtn');

function validateMatch(){
  if(!confirmEl.value){ matchMsgEl.textContent=''; return; }
  const ok = confirmEl.value === passEl.value;
  matchMsgEl.textContent = ok ? '✔ Khớp mật khẩu' : '✖ Không khớp mật khẩu';
  matchMsgEl.style.color = ok ? '#2e7d32' : '#c1272d';
}
passEl.addEventListener('input', validateMatch);
confirmEl.addEventListener('input', validateMatch);
agreeEl.addEventListener('change', () => submitBtn.disabled = !agreeEl.checked);
submitBtn.disabled = !agreeEl.checked;

/* ==== submit ==== */
function handleRegister(e){
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.className = '';
  msg.textContent = '';

  const fullname = document.getElementById('fullname').value.trim();
  const phone    = document.getElementById('phone').value.trim();
  const username = document.getElementById('username').value.trim();
  const pass     = passEl.value;
  const confirm  = confirmEl.value;

  // Validate cơ bản
  if (!/^[a-zA-Z0-9._-]{3,20}$/.test(username))
    return showError('Tên đăng nhập 3–20 ký tự (chữ/số/._-).');
  if (!/^[0-9]{9,11}$/.test(phone))
    return showError('Số điện thoại không hợp lệ (9–11 số).');
  if (pass.length < 6)
    return showError('Mật khẩu tối thiểu 6 ký tự.');
  if (pass !== confirm)
    return showError('Mật khẩu nhập lại không khớp.');

  // Lấy users an toàn
  let users = [];
  try { users = JSON.parse(localStorage.getItem('users') || '[]'); } catch { users = []; }
  if (!Array.isArray(users)) users = [];

  // Check trùng
  const uname = username.toLowerCase();
  if (users.some(u => (u.username || '').toLowerCase() === uname))
    return showError('Tên đăng nhập đã tồn tại.');
  if (users.some(u => u.phone === phone))
    return showError('Số điện thoại đã tồn tại.');

  // Lưu
  users.push({
    username,
    password: pass,           // demo: plaintext
    fullname,
    phone,
    dob: document.getElementById('dob').value || '',
    createdAt: Date.now()
  });
  localStorage.setItem('users', JSON.stringify(users));

  msg.className = 'success';
  msg.textContent = 'Đăng ký thành công! Đang chuyển sang trang đăng nhập...';
  setTimeout(() => window.location.replace('lognin.html'), 900);
  return true;

  function showError(t){
    msg.className = 'error';
    msg.textContent = t;
    return false;
  }
}
