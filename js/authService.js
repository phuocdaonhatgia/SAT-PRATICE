/**
 * authService.js — đăng ký / đăng nhập / đăng xuất.
 *
 * SỬA (tính năng Pro/Plus): thêm field `plan` (mặc định "free") vào profile —
 * đây là nguồn sự thật cho PlanService.getCurrentPlan().
 */

const AuthService = (() => {
  const LOCAL_USER_KEY = "auth:localUser";
  const listeners = [];
  let currentUser = null;
  let ready = false;

  function notify() {
    listeners.forEach(fn => {
      try { fn(currentUser); } catch (e) { console.error(e); }
    });
  }

  function friendlyError(code) {
    const map = {
      "auth/email-already-in-use": "Email này đã được đăng ký rồi.",
      "auth/invalid-email": "Email không hợp lệ.",
      "auth/weak-password": "Mật khẩu phải từ 6 ký tự trở lên.",
      "auth/user-not-found": "Không tìm thấy tài khoản với email này.",
      "auth/wrong-password": "Sai mật khẩu.",
      "auth/invalid-credential": "Email hoặc mật khẩu không đúng.",
      "auth/too-many-requests": "Thử quá nhiều lần. Đợi một lát rồi thử lại.",
      "auth/network-request-failed": "Lỗi mạng. Kiểm tra kết nối internet."
    };
    return map[code] || "Có lỗi xảy ra. Thử lại nhé.";
  }

  function shape(fbUser, extra = {}) {
    if (!fbUser) return null;
    return {
      uid: fbUser.uid,
      email: fbUser.email,
      displayName: fbUser.displayName || (fbUser.email || "").split("@")[0],
      ...extra
    };
  }

  async function saveProfile(user, patch = {}) {
    const FB = window.FB;
    if (!FB || !user) return;
    await FB.setDoc(
      FB.doc(FB.db, "users", user.uid),
      {
        email: user.email,
        displayName: user.displayName,
        updatedAt: FB.serverTimestamp(),
        ...patch
      },
      { merge: true }
    );
  }

  async function loadProfile(uid) {
    const FB = window.FB;
    if (!FB) return {};
    try {
      const snap = await FB.getDoc(FB.doc(FB.db, "users", uid));
      return snap.exists() ? snap.data() : {};
    } catch (e) {
      console.error("[auth] loadProfile:", e);
      return {};
    }
  }

  async function init() {
    const FB = await window.firebaseReady;

    if (!FB) {
      currentUser = Storage.get(LOCAL_USER_KEY, null);
      if (currentUser && !currentUser.plan) currentUser.plan = "free";
      ready = true;
      notify();
      return;
    }

    FB.onAuthStateChanged(FB.auth, async (fbUser) => {
      if (fbUser) {
        const profile = await loadProfile(fbUser.uid);
        currentUser = shape(fbUser, {
          grade: profile.grade || null,
          targetScore: profile.targetScore || null,
          plan: profile.plan || "free"
        });
      } else {
        currentUser = null;
      }
      ready = true;
      notify();
    });
  }

  async function signUp({ email, password, displayName, grade, targetScore }) {
    const FB = await window.firebaseReady;

    if (!FB) {
      currentUser = {
        uid: "local-" + Date.now(),
        email,
        displayName: displayName || email.split("@")[0],
        grade: grade || null,
        targetScore: targetScore || null,
        plan: "free"
      };
      Storage.set(LOCAL_USER_KEY, currentUser);
      notify();
      return { ok: true };
    }

    try {
      const cred = await FB.createUserWithEmailAndPassword(FB.auth, email, password);
      if (displayName) await FB.updateProfile(cred.user, { displayName });
      const user = shape(cred.user, { grade, targetScore, plan: "free" });
      user.displayName = displayName || user.displayName;
      await saveProfile(user, {
        grade: grade || null,
        targetScore: targetScore || null,
        plan: "free",
        createdAt: FB.serverTimestamp()
      });
      currentUser = user;
      notify();
      return { ok: true };
    } catch (e) {
      return { ok: false, error: friendlyError(e.code) };
    }
  }

  async function signIn({ email, password }) {
    const FB = await window.firebaseReady;

    if (!FB) {
      const saved = Storage.get(LOCAL_USER_KEY, null);
      if (!saved || saved.email !== email) {
        return { ok: false, error: "Chế độ local: chưa có tài khoản này trên máy." };
      }
      currentUser = saved;
      notify();
      return { ok: true };
    }

    try {
      await FB.signInWithEmailAndPassword(FB.auth, email, password);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: friendlyError(e.code) };
    }
  }

  async function logOut() {
    const FB = await window.firebaseReady;
    if (FB) {
      await FB.signOut(FB.auth);
    } else {
      currentUser = null;
      notify();
    }
  }

  async function resetPassword(email) {
    const FB = await window.firebaseReady;
    if (!FB) return { ok: false, error: "Chế độ local không hỗ trợ reset mật khẩu." };
    try {
      await FB.sendPasswordResetEmail(FB.auth, email);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: friendlyError(e.code) };
    }
  }

  function getUser() { return currentUser; }
  function isReady() { return ready; }

  function onUser(cb) {
    listeners.push(cb);
    if (ready) cb(currentUser);
    return () => {
      const i = listeners.indexOf(cb);
      if (i > -1) listeners.splice(i, 1);
    };
  }

  init();

  return { signUp, signIn, logOut, resetPassword, getUser, isReady, onUser, saveProfile };
})();
