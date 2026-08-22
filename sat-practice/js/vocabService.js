/**
 * vocabService.js — storage + selection logic for the Vocabulary feature.
 */

const VocabService = (() => {
  const PROGRESS_KEY = "vocabProgress";   // { [wordId]: { status, timesReviewed, lastSeen } }
  const QUIZ_HISTORY_KEY = "vocabQuizHistory"; // [{ date, score, total }]

  function getAllWords() {
    return VOCAB_DATA;
  }

  function getWordById(id) {
    return VOCAB_DATA.find(w => w.id === id) || null;
  }

  function getProgress(wordId) {
    const all = Storage.get(PROGRESS_KEY, {});
    return all[wordId] || { status: "new", timesReviewed: 0, lastSeen: null };
  }

  function getAllProgress() {
    return Storage.get(PROGRESS_KEY, {});
  }

  function setStatus(wordId, status) {
    const all = Storage.get(PROGRESS_KEY, {});
    const current = all[wordId] || { status: "new", timesReviewed: 0, lastSeen: null };
    all[wordId] = {
      status,
      timesReviewed: current.timesReviewed + 1,
      lastSeen: new Date().toISOString()
    };
    Storage.set(PROGRESS_KEY, all);
    return all[wordId];
  }

  function markKnown(wordId) { return setStatus(wordId, "known"); }
  function markReview(wordId) { return setStatus(wordId, "review"); }

  function getWordsByStatus(status) {
    const progress = getAllProgress();
    return VOCAB_DATA.filter(w => (progress[w.id]?.status || "new") === status);
  }

  function getMissedWords() {
    return getWordsByStatus("review");
  }

  function counts() {
    const progress = getAllProgress();
    let known = 0, review = 0, fresh = 0;
    VOCAB_DATA.forEach(w => {
      const s = progress[w.id]?.status || "new";
      if (s === "known") known++;
      else if (s === "review") review++;
      else fresh++;
    });
    return { total: VOCAB_DATA.length, known, review, new: fresh };
  }

  /** Deterministic "today's words" — same 10 words all day, rotates daily. */
  function getDailyWords(count = 10) {
    const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
    let seed = 0;
    for (let i = 0; i < today.length; i++) seed = (seed * 31 + today.charCodeAt(i)) % 100000;
    const start = seed % VOCAB_DATA.length;
    const words = [];
    for (let i = 0; i < count; i++) {
      words.push(VOCAB_DATA[(start + i) % VOCAB_DATA.length]);
    }
    return words;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /** "Generate N words based on my level" — rule-based (spec mục 13),
   *  skews toward harder words as recent quiz accuracy improves. */
  function generateWordsForLevel(count = 10) {
    const history = Storage.get(QUIZ_HISTORY_KEY, []);
    const recent = history.slice(-3);
    let accuracy = 0.5;
    if (recent.length) {
      const totalScore = recent.reduce((s, h) => s + h.score, 0);
      const totalCount = recent.reduce((s, h) => s + h.total, 0);
      accuracy = totalCount ? totalScore / totalCount : 0.5;
    }
    let tier;
    if (accuracy >= 0.8) tier = "hard";
    else if (accuracy >= 0.5) tier = "medium";
    else tier = "easy";

    const pool = VOCAB_DATA.filter(w => w.difficulty === tier);
    return shuffle(pool).slice(0, Math.min(count, pool.length));
  }

  function recordQuizResult(score, total) {
    Storage.push(QUIZ_HISTORY_KEY, { date: new Date().toISOString(), score, total });
  }

  function getQuizHistory() {
    return Storage.get(QUIZ_HISTORY_KEY, []);
  }

  return {
    getAllWords, getWordById, getProgress, getAllProgress,
    markKnown, markReview, getWordsByStatus, getMissedWords, counts,
    getDailyWords, generateWordsForLevel, recordQuizResult, getQuizHistory, shuffle
  };
})();
