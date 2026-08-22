/**
 * questionEngine.js — QuestionProvider abstraction (spec mục 15).
 *
 * Every function here reads from the in-memory QUESTIONS_DATA mock bank.
 * To swap in a real backend later, keep the same function signatures and
 * change the body to call `fetch('/api/questions?...')` instead — nothing
 * in practice.js / question.js needs to change.
 */

const QuestionProvider = (() => {

  function getAllQuestions() {
    return QUESTIONS_DATA;
  }

  function getQuestionById(id) {
    return QUESTIONS_DATA.find(q => q.id === id) || null;
  }

  function getQuestionsBySubject(subject) {
    return QUESTIONS_DATA.filter(q => q.subject === subject);
  }

  function getQuestionsByTopic(subject, skill) {
    return QUESTIONS_DATA.filter(q => q.subject === subject && q.skill === skill);
  }

  /**
   * Generic filter. Every key is optional.
   * @param {Object} opts
   * @param {string} [opts.subject] "reading-writing" | "math"
   * @param {string} [opts.domain]
   * @param {string[]} [opts.skills] list of skill names (OR match)
   * @param {string[]} [opts.difficulties] "easy" | "medium" | "hard" (OR match)
   * @param {string} [opts.tag] match against the tags array
   */
  function filterQuestions(opts = {}) {
    return QUESTIONS_DATA.filter(q => {
      if (opts.subject && q.subject !== opts.subject) return false;
      if (opts.domain && q.domain !== opts.domain) return false;
      if (opts.skills && opts.skills.length && !opts.skills.includes(q.skill)) return false;
      if (opts.difficulties && opts.difficulties.length && !opts.difficulties.includes(q.difficulty)) return false;
      if (opts.tag && !q.tags.includes(opts.tag)) return false;
      return true;
    });
  }

  function getDomainsForSubject(subject) {
    const domains = {};
    QUESTIONS_DATA.filter(q => q.subject === subject).forEach(q => {
      if (!domains[q.domain]) domains[q.domain] = new Set();
      domains[q.domain].add(q.skill);
    });
    return Object.entries(domains).map(([domain, skillSet]) => ({
      domain,
      skills: Array.from(skillSet)
    }));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * Build a practice set (used by Practice page + "Practice Weak Areas" +
   * "Build My Mini Test"). Returns an array of question ids in play order.
   */
  function buildPracticeSet({ subject, domain, skills, difficulties, tag, count = 10 } = {}) {
    let pool = filterQuestions({ subject, domain, skills, difficulties, tag });
    if (pool.length === 0) pool = getAllQuestions(); // graceful fallback so a session is never empty
    const picked = shuffle(pool).slice(0, Math.min(count, pool.length));
    return picked.map(q => q.id);
  }

  /**
   * Personalized mini test built from weighted skill counts, e.g.
   * { "Inference": 4, "Transitions": 3, "Linear Equations": 1 }
   * Mirrors spec mục 11 "Build My Mini Test".
   */
  function buildWeightedMiniTest(skillCounts) {
    const ids = [];
    Object.entries(skillCounts).forEach(([skill, n]) => {
      const pool = shuffle(QUESTIONS_DATA.filter(q => q.skill === skill));
      pool.slice(0, n).forEach(q => ids.push(q.id));
    });
    return shuffle(ids);
  }

  return {
    getAllQuestions,
    getQuestionById,
    getQuestionsBySubject,
    getQuestionsByTopic,
    filterQuestions,
    getDomainsForSubject,
    buildPracticeSet,
    buildWeightedMiniTest,
    shuffle
  };
})();
