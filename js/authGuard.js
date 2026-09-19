/**
 * authGuard.js — chặn trang khi chưa đăng nhập + đổ tên user thật vào sidebar.
 *
 * Nhúng file này vào MỌI trang cần đăng nhập (index, practice, question,
 * vocabulary, error-log, progress, practice-tests). KHÔNG nhúng vào
 * login.html / signup.html.
 */

(() => {
  const LOGIN_PAGE = "login.html";

  function initials(name) {
    return (name || "U")
      .trim().split(/\s+/).slice(-2)
      .map(w => w[0]).join("").toUpperCase().slice(0, 2);
  }

  /** Ghi đè phần user ở đáy sidebar bằng dữ liệu thật + nút đăng xuất. */
  function paintSidebar(user) {
    const footer = document.querySelector(".sidebar__footer");
    if (!footer || !user) return;

    const sub = [
      user.grade ? `Grade ${user.grade}` : null,
      user.targetScore ? `Target ${user.targetScore}` : null
    ].filter(Boolean).join(" · ") || user.email;

    footer.innerHTML = `
      <div class="sidebar__user">
        <div class="sidebar__avatar">${initials(user.displayName)}</div>
        <div>
          <div class="sidebar__user-name">${user.displayName}</div>
          <div class="sidebar__user-role">${sub}</div>
        </div>
      </div>
      <button id="logout-btn" class="sidebar__logout" type="button">Đăng xuất</button>
      <div class="sync-pill" id="sync-pill" hidden></div>
    `;

    document.getElementById("logout-btn").addEventListener("click", async () => {
      await AuthService.logOut();
      location.href = LOGIN_PAGE;
    });
  }

  function paintSyncStatus(status) {
    const pill = document.getElementById("sync-pill");
    if (!pill) return;
    const map = {
      syncing: ["Đang đồng bộ…", "is-syncing"],
      synced: ["Đã lưu lên cloud", "is-synced"],
      error: ["Lỗi đồng bộ", "is-error"],
      offline: ["Đang lưu trên máy", "is-offline"]
    };
    const [text, cls] = map[status] || map.offline;
    pill.hidden = false;
    pill.className = "sync-pill " + cls;
    pill.textContent = text;
  }

  // Tên hiển thị trên topbar dashboard (nếu trang đó có)
  function paintGreeting(user) {
    const el = document.getElementById("greeting-name");
    if (el && user) el.textContent = user.displayName;
  }

  AuthService.onUser((user) => {
    if (!user) {
      const next = encodeURIComponent(location.pathname.split("/").pop() || "index.html");
      location.replace(`${LOGIN_PAGE}?next=${next}`);
      return;
    }
    // sidebar có thể render sau -> đợi 1 nhịp
    paintSidebar(user);
    paintGreeting(user);
    setTimeout(() => { paintSidebar(user); paintGreeting(user); }, 0);
  });

  document.addEventListener("satpractice:syncstatus", (e) => paintSyncStatus(e.detail.status));
})();
