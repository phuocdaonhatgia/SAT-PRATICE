/**
 * firebase-init.js — nạp Firebase SDK (ESM từ CDN gstatic) rồi đẩy ra
 * window.FB cho mấy file script thường (authService, cloudSync) dùng được.
 *
 * File này PHẢI được nhúng bằng <script type="module" src="js/firebase-init.js"></script>
 * và đặt SAU js/firebase-config.js.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

if (window.APP_MODE === "cloud") {
  try {
    const app = initializeApp(window.FIREBASE_CONFIG);
    const auth = getAuth(app);
    const db = getFirestore(app);

    window.FB = {
      app, auth, db,
      createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
      onAuthStateChanged, updateProfile, sendPasswordResetEmail,
      doc, getDoc, setDoc, onSnapshot, serverTimestamp
    };
    window.__resolveFirebase(window.FB);
  } catch (e) {
    console.error("[firebase-init] Khởi tạo thất bại, rơi về chế độ local:", e);
    window.APP_MODE = "local";
    window.__resolveFirebase(null);
  }
}
