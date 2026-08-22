/**
 * storage.js — thin, safe wrapper around localStorage.
 * Centralizing this now means later phases (Error Log, Vocabulary, Progress)
 * all read/write through the same safe interface, and swapping to a real
 * backend later only means changing this one file.
 */

const Storage = (() => {
  const PREFIX = "satpractice:";

  function get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.error("Storage.get failed for", key, e);
      return fallback;
    }
  }

  function set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Storage.set failed for", key, e);
      return false;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
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

  return { get, set, remove, push };
})();
