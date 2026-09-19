/**
 * authPage.js — xử lý form ở login.html và signup.html.
 */

(() => {
  const alertBox = document.getElementById("auth-alert");
  const submitBtn = document.getElementById("submit-btn");

  function showError(msg) {
    alertBox.hidden = false;
    alertBox.className = "auth-alert is-error";
    alertBox.textContent = msg;
  }

  function showOk(msg) {
    alertBox.hidden = false;
    alertBox.className = "auth-alert is-ok";
    alertBox.textContent = msg;
  }

  function busy(on, labelWhenIdle) {
    submitBtn.disabled = on;
    submitBtn.textContent = on ? "Đang xử lý…" : labelWhenIdle;
  }

  function nextPage() {
    const next = new URLSearchParams(location.search).get("next");
    // chỉ cho phép điều hướng nội bộ, tránh open-redirect
    return (next && /^[\w.-]+\.html$/.test(next)) ? next : "index.html";
  }

  // Đã đăng nhập rồi thì khỏi ở lại trang login
  AuthService.onUser(user => {
    if (user) location.replace(nextPage());
  });

  /* ---------- Login ---------- */
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = new FormData(loginForm);
      const email = (f.get("email") || "").trim();
      const password = f.get("password") || "";

      if (!email || !password) return showError("Nhập đủ email và mật khẩu nhé.");

      busy(true, "Đăng nhập");
      const res = await AuthService.signIn({ email, password });
      busy(false, "Đăng nhập");

      if (!res.ok) return showError(res.error);
      location.href = nextPage();
    });

    const forgot = document.getElementById("forgot-btn");
    forgot.addEventListener("click", async () => {
      const email = (new FormData(loginForm).get("email") || "").trim();
      if (!email) return showError("Nhập email vào ô phía trên trước đã.");
      const res = await AuthService.resetPassword(email);
      res.ok
        ? showOk("Đã gửi link đặt lại mật khẩu. Kiểm tra hộp thư (cả mục Spam).")
        : showError(res.error);
    });
  }

  /* ---------- Signup ---------- */
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = new FormData(signupForm);
      const displayName = (f.get("displayName") || "").trim();
      const email = (f.get("email") || "").trim();
      const password = f.get("password") || "";
      const grade = f.get("grade") || null;
      const targetScore = f.get("targetScore") ? Number(f.get("targetScore")) : null;

      if (!displayName) return showError("Nhập tên của bạn nhé.");
      if (password.length < 6) return showError("Mật khẩu phải từ 6 ký tự trở lên.");

      busy(true, "Đăng ký");
      const res = await AuthService.signUp({ email, password, displayName, grade, targetScore });
      busy(false, "Đăng ký");

      if (!res.ok) return showError(res.error);
      location.href = "index.html";
    });
  }
})();
