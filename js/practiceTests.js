/**
 * practiceTests.js — drives practice-tests.html.
 *
 * SỬA (tính năng Pro/Plus): toàn bộ trang này là "Mock Test" -> yêu cầu
 * gói Pro trở lên, nếu không hiện panel khoá thay vì UI thật. Trong trang,
 * "Full Practice" (đề đầy đủ RW+Math, mô phỏng thi thật) là "Bộ đề SAT
 * chuyên sâu" -> yêu cầu riêng gói Plus. Chip Medium/Hard trong Custom Test
 * khoá giống practice.html.
 */

/* ---------------- Full Practice (Plus: "Bộ đề SAT chuyên sâu") ---------------- */
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
  subjectMode: "both",
  selectedSkills: new Set(),
  selectedDifficulties: new Set(["easy", "medium", "hard"]),
  count: 10
};

function isDiffLocked(diff) {
  return (typeof PlanService !== "undefined") && !PlanService.canAccessDifficulty(diff);
}

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
  mount.innerHTML = levels.map(l => {
    const locked = isDiffLocked(l.key);
    return `
    <button class="chip ${customState.selectedDifficulties.has(l.key) && !locked ? "is-selected" : ""} ${locked ? "is-locked" : ""}" data-diff="${l.key}" ${locked ? 'data-locked="true"' : ""}>${l.label}</button>`;
  }).join("");

  levels.forEach(l => { if (isDiffLocked(l.key)) customState.selectedDifficulties.delete(l.key); });
  if (customState.selectedDifficulties.size === 0) customState.selectedDifficulties.add("easy");

  mount.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if (chip.dataset.locked === "true") {
        if (typeof PlanService !== "undefined") PlanService.gate("questions-full");
        return;
      }
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

/* ---------------- Khoá cả trang (Pro) ---------------- */

function renderLockedPage() {
  const main = document.querySelector(".main");
  main.innerHTML = `
    <div class="topbar">
      <div><div class="topbar__greeting">Practice Tests</div></div>
    </div>
    <div class="card">
      <div class="locked-panel">
        <div class="locked-panel__icon">🔒</div>
        <div class="locked-panel__title">Mock Test là tính năng Pro</div>
        <div class="locked-panel__sub">Nâng cấp lên gói Pro để làm đề mô phỏng, mini test và custom test không giới hạn.</div>
        <button class="locked-panel__btn" id="locked-upgrade-btn">Xem các gói</button>
      </div>
    </div>
  `;
  document.getElementById("locked-upgrade-btn").addEventListener("click", () => {
    if (typeof PlanService !== "undefined") PlanService.gate("mock-test");
  });
}

/* ---------------- Init ---------------- */
function initPracticeTestsPage() {
  renderSidebar("tests");

  if (typeof PlanService !== "undefined" && !PlanService.isAtLeast("pro")) {
    renderLockedPage();
    return;
  }

  renderPersonalizedCard();

  document.getElementById("start-full-btn").addEventListener("click", () => {
    if (typeof PlanService !== "undefined") {
      PlanService.gate("deep-sets", startFullPractice);
    } else {
      startFullPractice();
    }
  });
  document.getElementById("start-mini-10-btn").addEventListener("click", () => startMiniTest(10));
  document.getElementById("start-mini-20-btn").addEventListener("click", () => startMiniTest(20));

  renderCustomSubjectChips();
  renderCustomSkillChips();
  renderCustomDifficultyChips();
  renderCustomCountChips();
  updateCustomCount();
  document.getElementById("start-custom-btn").addEventListener("click", startCustomTest);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PlanService !== "undefined") {
    PlanService.whenReady(initPracticeTestsPage);
  } else {
    initPracticeTestsPage();
  }
});
