/**
 * recommendationService.js — spec mục 18 + /lib/ai/studyPlanner.ts (mục 27).
 * Rule-based for now (no live model call needed): reads real weak areas
 * (GamificationService.getSkillAccuracyList — actual answer accuracy per
 * skill) + the real Error Log to build a short, prioritized plan.
 * Swappable later for an LLM-generated version using the same inputs.
 */

const RecommendationService = (() => {
  function generateRecommendation() {
    const weakAreas = (typeof GamificationService !== "undefined") ? GamificationService.getSkillAccuracyList(1) : [];
    const top = weakAreas[0] || null;

    const errors = (typeof ErrorLogService !== "undefined") ? ErrorLogService.getAll() : [];
    const reviewCount = errors.filter(e => e.status === "review").length;

    if (!top) {
      return {
        headline: `Answer a few practice questions to unlock a personalized study plan.`,
        steps: [
          `Start a Practice session on any subject to build your first data points.`,
          `Log any mistakes — they'll show up automatically in your Error Log.`,
          `Come back here once you've done a session; we'll target your weakest skill next.`
        ],
        ctaHref: "practice.html",
        ctaLabel: "Start Practicing"
      };
    }

    return {
      headline: `Your biggest opportunity right now is ${top.skill} questions (${top.accuracy}% accuracy).`,
      steps: [
        reviewCount > 0
          ? `Review ${Math.min(reviewCount, 3)} previous mistake${reviewCount > 1 ? "s" : ""} in your Error Log.`
          : `Log a few practice mistakes so future recommendations get sharper.`,
        `Study the ${top.skill} strategy — use the AI Tutor if you get stuck.`,
        `Complete 5 easy ${top.skill} questions.`,
        `Complete 5 medium ${top.skill} questions.`,
        `Take a 10-question mini test to check your progress.`
      ],
      ctaHref: "practice.html?focus=weak",
      ctaLabel: "Start Recommended Plan"
    };
  }

  return { generateRecommendation };
})();
