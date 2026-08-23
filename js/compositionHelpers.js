/**
 * compositionHelpers.js — shared helper used by learningSprint.js's
 * "Prototype" step to build a weighted question composition from the
 * student's real weak areas (GamificationService.getSkillAccuracyList),
 * not static mock data.
 */

function allSkillNames() {
  const rw = QuestionProvider.getDomainsForSubject("reading-writing").flatMap(d => d.skills);
  const math = QuestionProvider.getDomainsForSubject("math").flatMap(d => d.skills);
  return new Set([...rw, ...math]);
}

function poolForArea(skillOrTag) {
  const skills = allSkillNames();
  if (skills.has(skillOrTag)) return QuestionProvider.filterQuestions({ skills: [skillOrTag] });
  return QuestionProvider.filterQuestions({ tag: skillOrTag });
}

function computeComposition(total = 10) {
  let areas = (typeof GamificationService !== "undefined") ? GamificationService.getSkillAccuracyList(1) : [];
  // New students with no attempts yet: fall back to an even spread across
  // a handful of core skills so the feature still produces a usable set.
  if (areas.length === 0) {
    areas = ["Grammar", "Inference", "Linear Equations", "Words in Context"].map(skill => ({ skill, accuracy: 60 }));
  }
  areas = areas.slice(0, 6); // cap breadth so no single skill gets crowded out

  const weights = areas.map(a => Math.max(100 - a.accuracy, 1));
  const sumW = weights.reduce((a, b) => a + b, 0);

  const raw = areas.map((a, i) => ({
    skill: a.skill,
    exact: (total * weights[i]) / sumW
  }));

  const counts = raw.map(r => ({ skill: r.skill, count: Math.floor(r.exact), rem: r.exact - Math.floor(r.exact) }));
  let assigned = counts.reduce((s, c) => s + c.count, 0);
  let remainder = total - assigned;

  const byRemDesc = counts.slice().sort((a, b) => b.rem - a.rem);
  for (let i = 0; i < remainder; i++) {
    byRemDesc[i % byRemDesc.length].count++;
  }

  return counts.filter(c => c.count > 0);
}
