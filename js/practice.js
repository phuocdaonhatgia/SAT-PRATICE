/**
 * practice.js — logic for practice.html (the picker screen).
 */

const state = {
  subject: "reading-writing",
  selectedSkills: new Set(),      // empty set == "all skills in this subject"
  selectedDifficulties: new Set(["easy", "medium", "hard"]),
  count: 10
};

const SUBJECT_META = {
  "reading-writing": {
    label: "Reading & Writing",
    sub: "Information, craft, expression & grammar",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>`
  },
  "math": {
    label: "Math",
    sub: "Algebra, advanced math, data & geometry",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v4H4z"/><path d="M6 12h.01M6 16h.01M10 12h4M10 16h4M18 12v4"/></svg>`
  }
};

function renderSubjectTabs() {
  const mount = document.getElementById("subject-tabs");
  mount.innerHTML = Object.entries(SUBJECT_META).map(([key, m]) => `
    <button class="subject-tab ${state.subject === key ? "is-active" : ""}" data-subject="${key}">
      <div class="subject-tab__icon">${m.icon}</div>
      <div>
        <div class="subject-tab__title">${m.label}</div>
        <div class="subject-tab__sub">${m.sub}</div>
      </div>
    </button>
  `).join("");

  mount.querySelectorAll(".subject-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.subject = btn.dataset.subject;
      state.selectedSkills.clear();
      renderSubjectTabs();
      renderDomains();
      updateStartBar();
    });
  });
}

function renderDomains() {
  const mount = document.getElementById("domain-list");
  const domains = QuestionProvider.getDomainsForSubject(state.subject);

  mount.innerHTML = domains.map(d => `
    <div class="domain-block">
      <div class="domain-block__title">
        ${d.domain}
        <span class="count">${d.skills.length} skills</span>
      </div>
      <div class="chip-row" data-domain="${d.domain}">
        ${d.skills.map(skill => `
          <button class="chip ${state.selectedSkills.has(skill) ? "is-selected" : ""}" data-skill="${skill}">
            ${skill}
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  mount.querySelectorAll(".chip[data-skill]").forEach(chip => {
    chip.addEventListener("click", () => {
      const skill = chip.dataset.skill;
      if (state.selectedSkills.has(skill)) {
        state.selectedSkills.delete(skill);
      } else {
        state.selectedSkills.add(skill);
      }
      chip.classList.toggle("is-selected");
      updateStartBar();
    });
  });
}

function renderDifficultyChips() {
  const mount = document.getElementById("difficulty-chips");
  const levels = [
    { key: "easy", label: "Easy" },
    { key: "medium", label: "Medium" },
    { key: "hard", label: "Hard" }
  ];
  mount.innerHTML = levels.map(l => `
    <button class="chip ${state.selectedDifficulties.has(l.key) ? "is-selected" : ""}" data-diff="${l.key}">
      ${l.label}
    </button>
  `).join("");

  mount.querySelectorAll(".chip[data-diff]").forEach(chip => {
    chip.addEventListener("click", () => {
      const diff = chip.dataset.diff;
      // don't allow deselecting the last difficulty
      if (state.selectedDifficulties.has(diff) && state.selectedDifficulties.size === 1) return;
      if (state.selectedDifficulties.has(diff)) {
        state.selectedDifficulties.delete(diff);
      } else {
        state.selectedDifficulties.add(diff);
      }
      chip.classList.toggle("is-selected");
      updateStartBar();
    });
  });
}

function renderCountChips() {
  const mount = document.getElementById("count-chips");
  const options = [5, 10, 15, 20];
  mount.innerHTML = options.map(n => `
    <button class="chip ${state.count === n ? "is-selected" : ""}" data-count="${n}">${n} questions</button>
  `).join("");

  mount.querySelectorAll(".chip[data-count]").forEach(chip => {
    chip.addEventListener("click", () => {
      state.count = Number(chip.dataset.count);
      mount.querySelectorAll(".chip").forEach(c => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      updateStartBar();
    });
  });
}

function currentPool() {
  return QuestionProvider.filterQuestions({
    subject: state.subject,
    skills: Array.from(state.selectedSkills),
    difficulties: Array.from(state.selectedDifficulties)
  });
}

function updateStartBar() {
  const pool = currentPool();
  const available = pool.length;
  const willTake = Math.min(state.count, available);
  document.getElementById("start-bar-count").innerHTML =
    `<b>${willTake}</b> of ${available} matching questions available`;
  document.getElementById("start-practice-btn").disabled = available === 0;
}

function startPractice() {
  const ids = QuestionProvider.buildPracticeSet({
    subject: state.subject,
    skills: Array.from(state.selectedSkills),
    difficulties: Array.from(state.selectedDifficulties),
    count: state.count
  });
  SessionManager.createSession(ids, {
    source: "practice",
    label: state.selectedSkills.size
      ? Array.from(state.selectedSkills).join(", ")
      : SUBJECT_META[state.subject].label,
    subject: state.subject
  });
  window.location.href = "question.html";
}

function startWeakAreaSession() {
  const weakList = (typeof GamificationService !== "undefined") ? GamificationService.getSkillAccuracyList(1) : [];
  const weakSkills = weakList.length > 0
    ? weakList.slice(0, 4).map(w => w.skill)
    : ["Inference", "Transitions", "Linear Equations"]; // sensible default before the student has any real data
  const bySkill = QuestionProvider.filterQuestions({ skills: weakSkills });
  const ids = QuestionProvider.shuffle(bySkill).slice(0, Math.min(12, bySkill.length)).map(q => q.id);
  SessionManager.createSession(ids, { source: "weak-areas", label: "Weak Areas Practice" });
  window.location.href = "question.html";
}

function initPractice() {
  renderSidebar("practice");

  const params = new URLSearchParams(window.location.search);
  if (params.get("focus") === "weak") {
    startWeakAreaSession();
    return; // redirecting, no need to render the picker
  }

  renderSubjectTabs();
  renderDomains();
  renderDifficultyChips();
  renderCountChips();
  updateStartBar();

  document.getElementById("select-all-skills").addEventListener("click", () => {
    state.selectedSkills.clear();
    renderDomains();
    updateStartBar();
  });

  document.getElementById("start-practice-btn").addEventListener("click", startPractice);
}

document.addEventListener("DOMContentLoaded", initPractice);
