/**
 * storage.js — wrapper quanh localStorage.
 *
 * SỬA LỖI QUAN TRỌNG (so với bản trước): hàm get() giờ tự phục hồi khi dữ
 * liệu lưu trong localStorage là chuỗi "null" (tức JSON.parse ra null) mà
 * caller lại mong đợi một object/array rỗng.
 *
 * Vì sao cần: get() cũ chỉ trả về fallback khi KEY HOÀN TOÀN KHÔNG TỒN TẠI
 * (raw === null). Nhưng nếu key tồn tại và giá trị lưu là "null" (literal),
 * JSON.parse("null") = null — get() cũ trả thẳng null đó, bỏ qua fallback.
 * Nơi nào gọi `Storage.get(key, {})` hay `Storage.get(key, [])` rồi thao
 * tác trực tiếp (all[id], arr.push(...)) sẽ crash với TypeError
 * "Cannot read properties of null".
 *
 * Giá trị "null" này từng bị ghi vào bởi một lần đồng bộ/merge lỗi trước
 * đây. Với fix này, lần đọc TIẾP THEO sẽ tự thay bằng fallback đúng
 * ({}/[]) — không cần xoá tay localStorage, dữ liệu tự phục hồi.
 */

const Storage = (() => {
  const BASE = "satpractice:";
  let namespace = "";
  let muted = false;

  function fullKey(key) {
    return BASE + namespace + key;
  }

  function emit(key) {
    if (muted) return;
    document.dispatchEvent(new CustomEvent("satpractice:changed", { detail: { key } }));
  }

  function setNamespace(ns) {
    namespace = ns ? ns + ":" : "";
    document.dispatchEvent(new CustomEvent("satpractice:changed", { detail: { key: "*" } }));
  }

  function get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(fullKey(key));
      if (raw === null) return fallback;
      const parsed = JSON.parse(raw);
      // Dữ liệu lưu thành "null" nhưng caller mong một object/array rỗng
      // (fallback khác null) -> coi như chưa có gì, trả fallback thay vì
      // trả null thẳng ra để crash chỗ gọi.
      if (parsed === null && fallback !== null) return fallback;
      return parsed;
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
    const arr = get(key, []); // luôn là mảng thật nhờ fix ở get()
    arr.push(item);
    set(key, arr);
    return arr;
  }

  /* ---------- dùng cho cloudSync ---------- */

  function dump(keys) {
    const out = {};
    keys.forEach(k => {
      const v = get(k, undefined);
      if (v !== undefined) out[k] = v;
    });
    return out;
  }

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
