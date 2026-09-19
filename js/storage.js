/**
 * storage.js — wrapper quanh localStorage (BẢN CẬP NHẬT).
 *
 * Thay đổi so với bản cũ:
 *  1. Mỗi lần set/remove/push sẽ bắn event "satpractice:changed" -> UI nào
 *     đang mở có thể vẽ lại ngay lập tức (đây là phần "realtime" trong cùng tab).
 *  2. Thêm applyRemote() / dump() để cloudSync.js đồng bộ 2 chiều với Firestore.
 *  3. Thêm setNamespace() để dữ liệu của mỗi user tách riêng trên cùng 1 máy.
 *
 * API cũ (get/set/remove/push) giữ nguyên 100% -> mọi file cũ không cần sửa.
 */

const Storage = (() => {
  const BASE = "satpractice:";
  let namespace = "";          // ví dụ "u_abc123:" sau khi đăng nhập
  let muted = false;           // true khi đang ghi dữ liệu từ cloud xuống

  function fullKey(key) {
    return BASE + namespace + key;
  }

  function emit(key) {
    if (muted) return;
    document.dispatchEvent(new CustomEvent("satpractice:changed", { detail: { key } }));
  }

  /** Đổi vùng lưu theo user. Gọi khi đăng nhập / đăng xuất. */
  function setNamespace(ns) {
    namespace = ns ? ns + ":" : "";
    document.dispatchEvent(new CustomEvent("satpractice:changed", { detail: { key: "*" } }));
  }

  function get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(fullKey(key));
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.error("Storage.get failed for", key, e);
      return fallback;
    }
  }

  function set(key, value) {
    try {
      localStorage.setItem(fullKey(key), JSON.stringify(value));
      emit(key);
      return true;
    } catch (e) {
      console.error("Storage.set failed for", key, e);
      return false;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(fullKey(key));
      emit(key);
      return true;
    } catch (e) {
      console.error("Storage.remove failed for", key, e);
      return false;
    }
  }

  /** Append one item to an array stored at `key` (creates the array if missing). */
  function push(key, item) {
    const arr = get(key, []);
    arr.push(item);
    set(key, arr);
    return arr;
  }

  /* ---------- dùng cho cloudSync ---------- */

  /** Trả về toàn bộ dữ liệu của namespace hiện tại dạng { key: value }. */
  function dump(keys) {
    const out = {};
    keys.forEach(k => {
      const v = get(k, undefined);
      if (v !== undefined) out[k] = v;
    });
    return out;
  }

  /** Ghi dữ liệu từ cloud xuống mà KHÔNG bắn event đẩy ngược lên cloud. */
  function applyRemote(obj) {
    muted = true;
    try {
      Object.entries(obj || {}).forEach(([k, v]) => set(k, v));
    } finally {
      muted = false;
    }
    document.dispatchEvent(new CustomEvent("satpractice:changed", { detail: { key: "*", remote: true } }));
  }

  return { get, set, remove, push, dump, applyRemote, setNamespace };
})();
