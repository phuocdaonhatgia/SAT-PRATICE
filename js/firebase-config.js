/**
 * firebase-config.js — ĐÃ ĐIỀN SẴN CONFIG CỦA BẠN.
 *
 * QUAN TRỌNG: bản bạn đang dùng bị THIẾU phần dưới cùng (3 dòng window.*).
 * Thiếu `window.firebaseReady` thì authService đứng chờ mãi không bao giờ
 * chạy tiếp -> không có đăng nhập, không có đăng xuất. Đừng xoá phần đó.
 */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBH8bxRNumOApN6Td2tHhfuaooMQ4KWVgc",
  authDomain: "sat-p-58c49.firebaseapp.com",
  projectId: "sat-p-58c49",
  storageBucket: "sat-p-58c49.firebasestorage.app",
  messagingSenderId: "615540498435",
  appId: "1:615540498435:web:90ba16151f2898a2102e36",
  measurementId: "G-1FD6RGGKRT"
};

/** "cloud" = dùng Firebase. "local" = chạy offline bằng localStorage. */
const APP_MODE = "cloud";

/* ---- PHẦN BẮT BUỘC, ĐỪNG XOÁ ---- */
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.APP_MODE = APP_MODE;
window.firebaseReady = new Promise((resolve) => {
  window.__resolveFirebase = resolve;
});
if (APP_MODE !== "cloud") window.__resolveFirebase(null);