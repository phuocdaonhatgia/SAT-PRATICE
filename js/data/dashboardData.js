/**
 * Dashboard config.
 * Score, Weak Areas, and Recent Mistakes are no longer static mock data —
 * they're computed live in dashboard.js from GamificationService (real
 * answer accuracy per skill) and ErrorLogService (real logged mistakes).
 * This file only holds the small bits that aren't derived from activity:
 * the student's name and today's goal *targets* (the "done" counts are
 * read live from GamificationService.getTodayActivity()).
 */
const DASHBOARD_DATA = {
  student: {
    name: "Khánh Ngọc"
  },
  todayGoal: {
    questionsTarget: 20,
    vocabTarget: 20,
    reviewTarget: 5
  }
};
