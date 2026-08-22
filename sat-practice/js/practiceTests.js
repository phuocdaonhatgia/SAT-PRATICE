/**
 * practiceTests.js — drives practice-tests.html (spec mục 11 + mục 14).
 */

/* ---------------- helpers shared with the weak-area logic ---------------- */
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

/* ---------------- Full Practice ---------------- */
function startFullPractice() {
  const rw = QuestionProvider.shuffle(QuestionProvider.getQuestionsBySubject("reading-writing"));
  const math = QuestionProvider.shuffle(QuestionProvider.getQuestionsBySubject("math"));
  const ids = [...rw, ...math].map(q => q.id);
  SessionManager.createSession(ids, {
    source: "full-practice",
    label: "Full Practice — Reading & Writing + Math"
  });
  window.location.href = "question.html";
}

/* ---------------- Mini Test (fixed size, mixed subjects) ---------------- */
function startMiniTest(count) {
  const ids = QuestionProvider.buildPracticeSet({ count });
  SessionManager.createSession(ids, { source: "mini-test", label: `${count}-Question Mini Test` });
  window.location.href = "question.html";
}

/* ---------------- Personalized "Build My Mini Test" ---------------- */
function computeComposition(total = 10) {
  const areas = DASHBOARD_DATA.weakAreas;
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

function renderPersonalizedCard() {
  const composition = computeComposition(10);
  const mount = document.getElementById("comp-list");
  mount.innerHTML = composition.map(c => `
    <div class="comp-row">
      <span class="comp-row__label">${c.skill}</span>
      <span class="comp-row__count">${c.count}</span>
    </div>
  `).join("");

  document.getElementById("start-personalized-btn").addEventListener("click", () => {
    let ids = [];
    composition.forEach(c => {
      const pool = QuestionProvider.shuffle(poolForArea(c.skill));
      pool.slice(0, c.count).forEach(q => ids.push(q.id));
    });
    ids = QuestionProvider.shuffle(ids);
    if (ids.length === 0) ids = QuestionProvider.buildPracticeSet({ count: 10 });
    SessionManager.createSession(ids, { source: "personalized-mini-test", label: "Personalized Mini Test" });
    window.location.href = "question.html";
  });
}

/* ---------------- Custom Test composer ---------------- */
const customState = {
  subjectMode: "both",              // "reading-writing" | "math" | "both"
  selectedSkills: new Set(),
  selectedDifficulties: new Set(["easy", "medium", "hard"]),
  count: 10
};

function renderCustomSubjectChips() {
  const options = [
    { key: "both", label: "Both Subjects" },
    { key: "reading-writing", label: "Reading & Writing" },
    { key: "math", label: "Math" }
  ];
  const mount = document.getElementById("custom-subject-chips");
  mount.innerHTML = options.map(o => `
    <button class="chip ${customState.subjectMode === o.key ? "is-selected" : ""}" data-subject="${o.key}">${o.label}</button>
  `).join("");
  mount.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      customState.subjectMode = chip.dataset.subject;
      customState.selectedSkills.clear();
      renderCustomSubjectChips();
      renderCustomSkillChips();
      updateCustomCount();
    });
  });
}

function renderCustomSkillChips() {
  const wrap = document.getElementById("custom-skill-wrap");
  if (customState.subjectMode === "both") {
    wrap.innerHTML = `<div style="font-size:12.5px; color:var(--text-400);">Skill filter is available when a single subject is selected.</div>`;
    return;
  }
  const domains = QuestionProvider.getDomainsForSubject(customState.subjectMode);
  wrap.innerHTML = domains.map(d => `
    <div class="chip-row" style="margin-bottom:8px;">
      ${d.skills.map(s => `
        <button class="chip ${customState.selectedSkills.has(s) ? "is-selected" : ""}" data-skill="${s}">${s}</button>
      `).join("")}
    </div>
  `).join("");
  wrap.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const s = chip.dataset.skill;
      customState.selectedSkills.has(s) ? customState.selectedSkills.delete(s) : customState.selectedSkills.add(s);
      chip.classList.toggle("is-selected");
      updateCustomCount();
    });
  });
}

function renderCustomDifficultyChips() {
  const levels = [{ key: "easy", label: "Easy" }, { key: "medium", label: "Medium" }, { key: "hard", label: "Hard" }];
  const mount = document.getElementById("custom-difficulty-chips");
  mount.innerHTML = levels.map(l => `
    <button class="chip ${customState.selectedDifficulties.has(l.key) ? "is-selected" : ""}" data-diff="${l.key}">${l.label}</button>
  `).join("");
  mount.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const d = chip.dataset.diff;
      if (customState.selectedDifficulties.has(d) && customState.selectedDifficulties.size === 1) return;
      customState.selectedDifficulties.has(d) ? customState.selectedDifficulties.delete(d) : customState.selectedDifficulties.add(d);
      chip.classList.toggle("is-selected");
      updateCustomCount();
    });
  });
}

function renderCustomCountChips() {
  const options = [5, 10, 15, 20];
  const mount = document.getElementById("custom-count-chips");
  mount.innerHTML = options.map(n => `
    <button class="chip ${customState.count === n ? "is-selected" : ""}" data-count="${n}">${n} questions</button>
  `).join("");
  mount.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      customState.count = Number(chip.dataset.count);
      mount.querySelectorAll(".chip").forEach(c => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      updateCustomCount();
    });
  });
}

function customPool() {
  return QuestionProvider.filterQuestions({
    subject: customState.subjectMode === "both" ? undefined : customState.subjectMode,
    skills: Array.from(customState.selectedSkills),
    difficulties: Array.from(customState.selectedDifficulties)
  });
}

function updateCustomCount() {
  const available = customPool().length;
  const willTake = Math.min(customState.count, available);
  document.getElementById("custom-count-text").innerHTML = `<b>${willTake}</b> of ${available} matching questions available`;
  document.getElementById("start-custom-btn").disabled = available === 0;
}

function startCustomTest() {
  const ids = QuestionProvider.buildPracticeSet({
    subject: customState.subjectMode === "both" ? undefined : customState.subjectMode,
    skills: Array.from(customState.selectedSkills),
    difficulties: Array.from(customState.selectedDifficulties),
    count: customState.count
  });
  SessionManager.createSession(ids, { source: "custom-test", label: "Custom Test" });
  window.location.href = "question.html";
}

/* ---------------- Init ---------------- */
function initPracticeTestsPage() {
  renderSidebar("tests");
  renderPersonalizedCard();

  document.getElementById("start-full-btn").addEventListener("click", startFullPractice);
  document.getElementById("start-mini-10-btn").addEventListener("click", () => startMiniTest(10));
  document.getElementById("start-mini-20-btn").addEventListener("click", () => startMiniTest(20));

  renderCustomSubjectChips();
  renderCustomSkillChips();
  renderCustomDifficultyChips();
  renderCustomCountChips();
  updateCustomCount();
  document.getElementById("start-custom-btn").addEventListener("click", startCustomTest);
}

document.addEventListener("DOMContentLoaded", initPracticeTestsPage);
