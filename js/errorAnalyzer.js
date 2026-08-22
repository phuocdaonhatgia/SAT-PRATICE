/**
 * errorAnalyzer.js — spec mục 27's /lib/ai/errorAnalyzer.ts, static version.
 *
 * AI Tutor is deferred, so this gives rule-based, deterministic suggestions
 * instead of a live model call. `suggestStrategy` and `reflectionQuestion`
 * keep stable signatures — swap the body for an API call later and nothing
 * in error-log.js needs to change.
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

  const REFLECTION_BY_SKILL = {
    "Main Idea": "Which single sentence, if removed, would most change the reader's understanding of the passage's point?",
    "Inference": "What exact words in the passage — not your own assumptions — support the inference you were asked to make?",
    "Evidence": "Does the evidence you picked support the specific claim in the question, or just the general topic?",
    "Words in Context": "If you swap the word for your chosen meaning, does the sentence still make logical sense?",
    "Text Structure": "Does the passage move through time, compare two things, or zoom between specific and general? Which pattern fits?",
    "Transitions": "Do the two sentences agree, contrast, or show cause-and-effect? What word signals that relationship?",
    "Rhetorical Synthesis": "Does your choice combine the notes needed for the stated goal, or does it just restate one note?",
    "Boundaries": "Are there two independent clauses here, or one independent and one dependent clause? What punctuation rule applies?",
    "Form, Structure, and Sense": "What is the true subject of the verb, ignoring any prepositional phrases in between?",
    "Linear Equations": "Which operation should you apply to both sides first to start isolating the variable?",
    "Systems of Equations": "Can you add or subtract the two equations directly to eliminate one variable?",
    "Quadratics": "What two numbers multiply to the constant term and add to the middle coefficient?",
    "Functions": "What value did you substitute for the input, and did you follow order of operations correctly?",
    "Percentages": "Are you finding a percent of a number, or the percent change between two numbers? Which formula applies?",
    "Ratios": "Did you set up your proportion with matching units on each side?",
    "Data Analysis": "Which specific numbers from the data actually answer the question being asked?",
    "Probability": "Did you count total possible outcomes correctly before dividing by favorable outcomes?",
    "Geometry": "Which formula connects the measurement you're given to the measurement you need to find?",
    "Trigonometry": "Which sides of the triangle does the trig ratio in this question relate — opposite, adjacent, or hypotenuse?"
  };

  const REFLECTION_DEFAULT = "What specific detail in the question or passage did you overlook or misread?";

  function suggestStrategy(errorType) {
    return STRATEGY_MAP[errorType] ||
      "Review the explanation for this question, then retry a similar one to confirm the fix worked.";
  }

  function reflectionQuestion(skill) {
    return REFLECTION_BY_SKILL[skill] || REFLECTION_DEFAULT;
  }

  function whatHappened(entry, question) {
    return `You selected ${entry.selectedAnswer}, but the correct answer is ${entry.correctAnswer}. ${question.explanation}`;
  }

  return { suggestStrategy, reflectionQuestion, whatHappened };
})();
