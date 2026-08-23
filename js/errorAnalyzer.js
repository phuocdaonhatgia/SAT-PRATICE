/**
 * errorAnalyzer.js — spec mục 27's /lib/ai/errorAnalyzer.ts, static version.
 *
 * AI Tutor is deferred, so this gives rule-based, deterministic suggestions
 * instead of a live model call. `suggestStrategy` keeps a stable signature —
 * swap the body for an API call later and nothing in error-log.js needs to change.
 */

const ErrorAnalyzer = (() => {

  const STRATEGY_MAP = {
    "Concept Gap": "Re-read the explanation for this question closely, then retry 3 easy questions on this skill before moving to medium/hard.",
    "Misread Question": "Before choosing an answer, restate the question in your own words to confirm exactly what it's asking.",
    "Careless Mistake": "Slow down on your final check — reread your selected choice against the question one more time before submitting.",
    "Vocabulary": "Add the unfamiliar word to your vocabulary deck and review it with flashcards this week.",
    "Distractor Trap": "Practice eliminating choices that sound right but don't directly answer the question — always trace your choice back to the text.",
    "Time Pressure": "Time yourself on 5 practice questions in this skill to build speed without sacrificing accuracy.",
    "Guessing": "Go back through this question without a timer and try to reason it out using the 4 hint levels before checking the answer."
  };

  function suggestStrategy(errorType) {
    return STRATEGY_MAP[errorType] ||
      "Review the explanation for this question, then retry a similar one to confirm the fix worked.";
  }

  function whatHappened(entry, question) {
    return `You selected ${entry.selectedAnswer}, but the correct answer is ${entry.correctAnswer}. ${question.explanation}`;
  }

  return { suggestStrategy, whatHappened };
})();
