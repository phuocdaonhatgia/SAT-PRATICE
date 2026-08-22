/**
 * sessionManager.js — owns the "current practice session" the Question
 * Interface (question.html) runs against. A session is just a list of
 * question ids in play order plus per-question answer state.
 */

const SessionManager = (() => {
  const KEY = "currentSession";

  function createSession(questionIds, meta = {}) {
    const session = {
      id: "session-" + Date.now(),
      createdAt: new Date().toISOString(),
      meta,                     // { source, label, subject, skills, difficulties }
      questionIds,
      currentIndex: 0,
      answers: {}               // questionId -> { selected, submitted, correct, markedForReview, hintLevel, timeSpentSec }
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
