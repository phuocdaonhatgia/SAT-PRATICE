/**
 * cloudSync.js — đồng bộ 2 chiều localStorage <-> Firestore, realtime.
 *
 * SỬA LỖI (so với bản trước): mergeInto() giờ bỏ qua field nào trên
 * Firestore có giá trị null/undefined, thay vì ghi đè xuống local. Đây là
 * phòng vệ thêm cho lỗi "null" từng làm vocabService/errorLog crash — dù
 * storage.js đã tự phục hồi ở lượt đọc tiếp theo, cloudSync không nên là
 * nguồn tiếp tục bơm null vào local mỗi lần đồng bộ.
 */

const CloudSync = (() => {
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
  let status = "offline";

  function setStatus(s) {
    status = s;
    document.dispatchEvent(new CustomEvent("satpractice:syncstatus", { detail: { status: s } }));
  }

  function getStatus() { return status; }

  function stateDoc(FB) {
    return FB.doc(FB.db, "users", uid, "state", "main");
  }

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

  function mergeInto(remoteData) {
    const merged = {};
    Object.entries(remoteData || {}).forEach(([key, remoteVal]) => {
      // Field rác (null/undefined) trên Firestore -> bỏ qua, đừng ghi đè
      // xuống local. Coi như "chưa có dữ liệu cho field này".
      if (remoteVal === null || remoteVal === undefined) return;

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
      setStatus("offline");
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

  document.addEventListener("satpractice:changed", (e) => {
    if (e.detail && e.detail.remote) return;
    schedulePush();
  });

  window.addEventListener("beforeunload", () => {
    if (pushTimer) { clearTimeout(pushTimer); pushNow(); }
  });

  if (typeof AuthService !== "undefined") {
    AuthService.onUser(user => start(user));
  }

  return { start, stop, pushNow, getStatus, SYNCED_KEYS };
})();
