/**
 * cloudSync.js — đồng bộ 2 chiều localStorage <-> Firestore, realtime.
 *
 * Cách hoạt động:
 *   - Đăng nhập -> đọc doc users/{uid}/state/main, merge xuống localStorage.
 *   - onSnapshot: máy khác ghi -> doc đổi -> tự ghi xuống localStorage -> bắn
 *     event "satpractice:changed" -> trang đang mở vẽ lại. Đây là realtime thật.
 *   - Mỗi lần Storage.set -> gom lại 1.2s rồi đẩy nguyên state lên (debounce,
 *     tránh spam ghi vì Firestore free tier giới hạn 20k writes/ngày).
 *
 * Chống loop: khi ghi từ cloud xuống thì Storage.applyRemote() tắt event,
 * nên không đẩy ngược lên.
 */

const CloudSync = (() => {
  /* Danh sách key được đồng bộ. Thêm key mới vào đây nếu sau này có feature mới. */
  const SYNCED_KEYS = [
    "gamification:streak",
    "gamification:answerStats",
    "gamification:unlockedBadges",
    "gamification:dailyActivity",
    "errorLog",
    "vocabProgress",
    "vocabQuizHistory",
    "learningReflections",
    "sessionHistory"
  ];

  const DEBOUNCE_MS = 1200;

  let uid = null;
  let unsubscribeSnapshot = null;
  let pushTimer = null;
  let applyingRemote = false;
  let status = "offline"; // offline | syncing | synced | error

  function setStatus(s) {
    status = s;
    document.dispatchEvent(new CustomEvent("satpractice:syncstatus", { detail: { status: s } }));
  }

  function getStatus() { return status; }

  function stateDoc(FB) {
    return FB.doc(FB.db, "users", uid, "state", "main");
  }

  /* ---------- đẩy lên ---------- */

  async function pushNow() {
    const FB = window.FB;
    if (!FB || !uid) return;
    try {
      setStatus("syncing");
      await FB.setDoc(
        stateDoc(FB),
        { data: Storage.dump(SYNCED_KEYS), updatedAt: FB.serverTimestamp() },
        { merge: true }
      );
      setStatus("synced");
    } catch (e) {
      console.error("[cloudSync] push lỗi:", e);
      setStatus("error");
    }
  }

  function schedulePush() {
    if (!uid || applyingRemote) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, DEBOUNCE_MS);
  }

  /* ---------- kéo xuống + lắng nghe realtime ---------- */

  /**
   * Merge cloud vào local. Với mảng append-only (errorLog, history) thì gộp
   * theo id/date để không mất dữ liệu làm offline ở máy khác.
   */
  function mergeInto(remoteData) {
    const merged = {};
    Object.entries(remoteData || {}).forEach(([key, remoteVal]) => {
      const localVal = Storage.get(key, undefined);

      if (Array.isArray(remoteVal) && Array.isArray(localVal)) {
        const seen = new Set();
        const out = [];
        [...remoteVal, ...localVal].forEach(item => {
          const id = item && (item.id || item.date || JSON.stringify(item));
          if (seen.has(id)) return;
          seen.add(id);
          out.push(item);
        });
        merged[key] = out;
      } else if (localVal === undefined) {
        merged[key] = remoteVal;
      } else {
        // object/số: cloud là nguồn chuẩn (máy này vừa được cập nhật từ cloud)
        merged[key] = remoteVal;
      }
    });
    return merged;
  }

  async function start(user) {
    const FB = await window.firebaseReady;
    stop();

    if (!user) {
      Storage.setNamespace("");
      setStatus("offline");
      return;
    }

    uid = user.uid;
    Storage.setNamespace("u_" + uid);

    if (!FB) {
      setStatus("offline"); // chế độ local: chỉ tách namespace, không sync
      return;
    }

    setStatus("syncing");

    unsubscribeSnapshot = FB.onSnapshot(
      stateDoc(FB),
      (snap) => {
        if (!snap.exists()) { pushNow(); return; }
        const remote = snap.data().data || {};
        applyingRemote = true;
        try {
          Storage.applyRemote(mergeInto(remote));
        } finally {
          applyingRemote = false;
        }
        setStatus("synced");
      },
      (err) => {
        console.error("[cloudSync] snapshot lỗi:", err);
        setStatus("error");
      }
    );
  }

  function stop() {
    if (unsubscribeSnapshot) { unsubscribeSnapshot(); unsubscribeSnapshot = null; }
    clearTimeout(pushTimer);
    uid = null;
  }

  /* Bất kỳ Storage.set nào cũng lên lịch đẩy lên cloud. */
  document.addEventListener("satpractice:changed", (e) => {
    if (e.detail && e.detail.remote) return;
    schedulePush();
  });

  /* Đẩy nốt trước khi đóng tab. */
  window.addEventListener("beforeunload", () => {
    if (pushTimer) { clearTimeout(pushTimer); pushNow(); }
  });

  /* Tự bám theo trạng thái đăng nhập. */
  if (typeof AuthService !== "undefined") {
    AuthService.onUser(user => start(user));
  }

  return { start, stop, pushNow, getStatus, SYNCED_KEYS };
})();
