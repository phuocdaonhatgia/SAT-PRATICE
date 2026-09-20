/**
 * sessionManager.js — owns the "current practice session" the Question
 * Interface (question.html) runs against.
 *
 * SỬA (tính năng Pro): createSession() lọc bớt câu hỏi ngoài quyền của gói
 * hiện tại (PlanService.filterQuestionIds) — lớp phòng vệ cuối, phòng khi
 * một luồng nào đó chưa tự khoá chip độ khó ở UI.
 */

const SessionManager = (() => {
  const KEY = "currentSession";

  function createSession(questionIds, meta = {}) {
    const allowedIds = (typeof PlanService !== "undefined")
      ? PlanService.filterQuestionIds(questionIds)
      : questionIds;

    const session = {
      id: "session-" + Date.now(),
      createdAt: new Date().toISOString(),
      meta,
      questionIds: allowedIds,
      currentIndex: 0,
      answers: {}
    };
    Storage.set(KEY, session);
    return session;
  }

  function getSession() {
    return Storage.get(KEY, null);
  }

  function clearSession() {
    Storage.remove(KEY);
  }

  function saveSession(session) {
    Storage.set(KEY, session);
  }

  function getAnswerState(session, questionId) {
    return session.answers[questionId] || {
      selected: null,
      submitted: false,
      correct: null,
      markedForReview: false,
      hintLevel: 0,
      timeSpentSec: 0
    };
  }

  function setAnswerState(session, questionId, patch) {
    const current = getAnswerState(session, questionId);
    session.answers[questionId] = { ...current, ...patch };
    saveSession(session);
    return session.answers[questionId];
  }

  function progressCount(session) {
    const answered = session.questionIds.filter(id => session.answers[id]?.submitted).length;
    return { answered, total: session.questionIds.length };
  }

  return {
    createSession, getSession, clearSession, saveSession,
    getAnswerState, setAnswerState, progressCount
  };
})();
