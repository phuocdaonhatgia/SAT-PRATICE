/**
 * gamificationService.js — spec mục 21.
 * Tracks real activity (not mock numbers): every submitted answer, finished
 * session, vocab review, and error-log reflection feeds streak, daily-goal
 * progress, badge progress, and skill/subject accuracy. Dashboard and
 * Progress read from here instead of static mock data for anything that
 * should reflect actual usage.
 */

const GamificationService = (() => {
  const STREAK_KEY = "gamification:streak";
  const STATS_KEY = "gamification:answerStats";
  const BADGES_KEY = "gamification:unlockedBadges";
  const DAILY_KEY = "gamification:dailyActivity";

  const BADGE_DEFS = [
    {
      key: "grammar-master",
      label: "Grammar Master",
      description: "Answer 10 grammar questions correctly",
      check: (stats) => (stats.byTag["Grammar"]?.correct || 0) >= 10
    },
    {
      key: "inference-hunter",
      label: "Inference Hunter",
      description: "Answer 8 Inference questions correctly",
      check: (stats) => (stats.bySkill["Inference"]?.correct || 0) >= 8
    },
    {
      key: "math-grinder",
      label: "Math Grinder",
      description: "Answer 15 Math questions correctly",
      check: (stats) => (stats.bySubject["math"]?.correct || 0) >= 15
    },
    {
      key: "error-log-pro",
      label: "Error Log Pro",
      description: "Reflect on 5 logged mistakes",
      check: () => {
        const entries = (typeof ErrorLogService !== "undefined") ? ErrorLogService.getAll() : [];
        return entries.filter(e => !!e.errorType).length >= 5;
      }
    }
  ];

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  /** Marks today as "active". Called on every page load so the streak counts
   *  simply showing up — first visit ever gives a streak of 1. */
  function recordActivity() {
    const streak = getStreak();
    const today = todayStr();
    if (streak.lastActiveDate === today) return streak;

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const next = {
      count: streak.lastActiveDate === yesterday ? streak.count + 1 : 1,
      lastActiveDate: today
    };
    Storage.set(STREAK_KEY, next);
    return next;
  }

  function getStreak() {
    return Storage.get(STREAK_KEY, { count: 0, lastActiveDate: null });
  }

  /* ---------------- Today's Goal (daily-scoped) activity ---------------- */
  function getDailyStore() {
    return Storage.get(DAILY_KEY, {});
  }

  function emptyDay() {
    return { questionsAnswered: 0, vocabKnown: 0, mistakesReviewed: 0 };
  }

  function getTodayActivity() {
    const all = getDailyStore();
    return all[todayStr()] || emptyDay();
  }

  function bumpToday(field, amount = 1) {
    const all = getDailyStore();
    const day = todayStr();
    if (!all[day]) all[day] = emptyDay();
    all[day][field] = (all[day][field] || 0) + amount;
    Storage.set(DAILY_KEY, all);
  }

  /* ---------------- Answer stats (skill / subject / tag accuracy) ---------------- */
  function getStats() {
    return Storage.get(STATS_KEY, { bySkill: {}, byTag: {}, bySubject: {}, totalCorrect: 0, totalAnswered: 0 });
  }

  function bump(bucket, key, correct) {
    if (!bucket[key]) bucket[key] = { correct: 0, total: 0 };
    bucket[key].total += 1;
    if (correct) bucket[key].correct += 1;
  }

  function recordAnswer(question, correct) {
    recordActivity();
    const stats = getStats();
    bump(stats.bySkill, question.skill, correct);
    bump(stats.bySubject, question.subject, correct);
    (question.tags || []).forEach(tag => bump(stats.byTag, tag, correct));
    stats.totalAnswered += 1;
    if (correct) stats.totalCorrect += 1;
    Storage.set(STATS_KEY, stats);

    bumpToday("questionsAnswered");
    checkBadges();
  }

  function recordSessionFinished() {
    recordActivity();
  }

  function recordVocabKnown() {
    recordActivity();
    bumpToday("vocabKnown");
  }

  function recordVocabQuizCompleted() {
    recordActivity();
  }

  function recordErrorReflectionSaved() {
    recordActivity();
    bumpToday("mistakesReviewed");
    checkBadges();
  }

  /** Skills sorted weakest-first, real accuracy from actual submitted answers.
   *  minAttempts filters out noisy one-off results. */
  function getSkillAccuracyList(minAttempts = 1) {
    const stats = getStats();
    return Object.entries(stats.bySkill)
      .map(([skill, s]) => ({ skill, correct: s.correct, total: s.total, accuracy: Math.round((s.correct / s.total) * 100) }))
      .filter(s => s.total >= minAttempts)
      .sort((a, b) => a.accuracy - b.accuracy);
  }

  function getSubjectAccuracy(subject) {
    const stats = getStats();
    const s = stats.bySubject[subject];
    if (!s || s.total === 0) return null;
    return Math.round((s.correct / s.total) * 100);
  }

  function getOverallAccuracy() {
    const stats = getStats();
    if (stats.totalAnswered === 0) return null;
    return Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
  }

  function getUnlockedBadges() {
    return Storage.get(BADGES_KEY, []);
  }

  function checkBadges() {
    const stats = getStats();
    const unlocked = new Set(getUnlockedBadges());
    let changed = false;
    BADGE_DEFS.forEach(b => {
      if (!unlocked.has(b.key) && b.check(stats)) {
        unlocked.add(b.key);
        changed = true;
      }
    });
    if (changed) Storage.set(BADGES_KEY, Array.from(unlocked));
    return Array.from(unlocked);
  }

  function getAllBadgesWithStatus() {
    const unlocked = new Set(checkBadges());
    return BADGE_DEFS.map(b => ({ ...b, unlocked: unlocked.has(b.key) }));
  }

  return {
    getStreak, recordActivity,
    getTodayActivity,
    getStats, recordAnswer, recordSessionFinished,
    recordVocabKnown, recordVocabQuizCompleted, recordErrorReflectionSaved,
    getSkillAccuracyList, getSubjectAccuracy, getOverallAccuracy,
    getUnlockedBadges, getAllBadgesWithStatus, checkBadges
  };
})();
