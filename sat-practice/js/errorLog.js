/**
 * errorLog.js — full read/write service for the Error Log (Phase 6, spec mục 9-10).
 */

const ERROR_TYPE_OPTIONS = [
  { value: "Concept Gap",        label: "I didn't understand the concept." },
  { value: "Misread Question",   label: "I misunderstood the question." },
  { value: "Careless Mistake",   label: "I made a careless mistake." },
  { value: "Vocabulary",         label: "I didn't know the vocabulary." },
  { value: "Distractor Trap",    label: "I chose a tempting distractor." },
  { value: "Time Pressure",      label: "I ran out of time." },
  { value: "Guessing",           label: "I guessed." }
];

const ErrorLogService = (() => {
  const KEY = "errorLog";

  function logMistake(question, selectedAnswer) {
    const entry = {
      id: "err-" + Date.now() + "-" + question.id,
      questionId: question.id,
      subject: question.subject,
      domain: question.domain,
      skill: question.skill,
      difficulty: question.difficulty,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      createdAt: new Date().toISOString(),
      errorType: null,       // set by the student on the Error Log page
      reasoning: null,       // student's free-text reflection answer
      correctStrategy: null, // auto-suggested once errorType is set
      status: "review"       // review | progress | fixed
    };
    Storage.push(KEY, entry);
    return entry;
  }

  function getAll() {
    return Storage.get(KEY, []);
  }

  function getById(id) {
    return getAll().find(e => e.id === id) || null;
  }

  function updateEntry(id, patch) {
    const all = getAll();
    const idx = all.findIndex(e => e.id === id);
    if (idx === -1) return null;
    all[idx] = { ...all[idx], ...patch };
    Storage.set(KEY, all);
    return all[idx];
  }

  function setErrorType(id, errorType, strategy) {
    return updateEntry(id, { errorType, correctStrategy: strategy, status: "progress" });
  }

  function setReasoning(id, reasoning) {
    return updateEntry(id, { reasoning });
  }

  function setStatus(id, status) {
    return updateEntry(id, { status });
  }

  function counts() {
    const all = getAll();
    return {
      total: all.length,
      review: all.filter(e => e.status === "review").length,
      progress: all.filter(e => e.status === "progress").length,
      fixed: all.filter(e => e.status === "fixed").length
    };
  }

  return { logMistake, getAll, getById, updateEntry, setErrorType, setReasoning, setStatus, counts };
})();
