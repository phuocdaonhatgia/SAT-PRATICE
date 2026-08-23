/**
 * learningSprint.js — spec mục 19 "Your SAT Learning Sprint" section.
 * Lives on progress.html. Persists Empathize/Define answers and chosen
 * strategies to localStorage; Prototype reuses computeComposition()
 * (compositionHelpers.js) to generate a real session from the student's
 * actual weak areas that they can immediately take.
 */

const SPRINT_STEPS = [
  { key: "empathize", label: "Empathize" },
  { key: "define", label: "Define" },
  { key: "ideate", label: "Ideate" },
  { key: "prototype", label: "Prototype" },
  { key: "test", label: "Test" }
];

let sprintStep = "empathize";

function getSprintData() {
  return Storage.get("learningSprint", {
    empathize: { q1: "", q2: "", q3: "" },
    define: "",
    strategies: []
  });
}

function saveSprintData(data) {
  Storage.set("learningSprint", data);
}

function renderSprintTabs() {
  document.getElementById("sprint-tabs").innerHTML = SPRINT_STEPS.map((s, i) => `
    <button class="sprint-tab ${sprintStep === s.key ? "is-active" : ""}" data-step="${s.key}">
      <span class="sprint-tab__num">${i + 1}</span> ${s.label}
    </button>
  `).join("");

  document.querySelectorAll(".sprint-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      sprintStep = btn.dataset.step;
      renderSprintTabs();
      renderSprintPane();
    });
  });
}

function renderSprintPane() {
  const data = getSprintData();
  const mount = document.getElementById("sprint-pane-mount");

  if (sprintStep === "empathize") {
    mount.innerHTML = `
      <div class="sprint-q">
        <div class="sprint-q__label">What types of questions do I usually miss?</div>
        <textarea class="text-input" id="emp-q1" placeholder="Type your answer...">${data.empathize.q1 || ""}</textarea>
      </div>
      <div class="sprint-q">
        <div class="sprint-q__label">When do I lose focus?</div>
        <textarea class="text-input" id="emp-q2" placeholder="Type your answer...">${data.empathize.q2 || ""}</textarea>
      </div>
      <div class="sprint-q">
        <div class="sprint-q__label">What mistakes happen repeatedly?</div>
        <textarea class="text-input" id="emp-q3" placeholder="Type your answer...">${data.empathize.q3 || ""}</textarea>
      </div>
      <button class="btn btn--primary" id="sprint-next-btn">Save & Continue to Define</button>
    `;
    document.getElementById("sprint-next-btn").addEventListener("click", () => {
      const d = getSprintData();
      d.empathize = {
        q1: document.getElementById("emp-q1").value.trim(),
        q2: document.getElementById("emp-q2").value.trim(),
        q3: document.getElementById("emp-q3").value.trim()
      };
      saveSprintData(d);
      sprintStep = "define";
      renderSprintTabs();
      renderSprintPane();
    });
  }

  else if (sprintStep === "define") {
    mount.innerHTML = `
      <div class="sprint-q">
        <div class="sprint-q__label">Create a problem statement</div>
        <div style="font-size:12.5px; color:var(--text-400); margin-bottom:8px;">
          Example: "I struggle with inference questions because I choose answers based on assumptions instead of textual evidence."
        </div>
        <textarea class="text-input" id="def-statement" placeholder="Type your problem statement...">${data.define || ""}</textarea>
      </div>
      <button class="btn btn--primary" id="sprint-next-btn">Save & Continue to Ideate</button>
    `;
    document.getElementById("sprint-next-btn").addEventListener("click", () => {
      const d = getSprintData();
      d.define = document.getElementById("def-statement").value.trim();
      saveSprintData(d);
      sprintStep = "ideate";
      renderSprintTabs();
      renderSprintPane();
    });
  }

  else if (sprintStep === "ideate") {
    const strategies = [
      { key: "evidence-highlighting", label: "Evidence highlighting", desc: "Underline the exact textual evidence before selecting an answer." },
      { key: "elimination", label: "Elimination strategy", desc: "Cross out choices that are clearly wrong before comparing what's left." },
      { key: "timed-drills", label: "Timed drills", desc: "Practice under a timer to build pacing instinct." },
      { key: "vocab-review", label: "Vocabulary review", desc: "Spend 10 minutes a day on flashcards for words that keep tripping you up." }
    ];
    mount.innerHTML = `
      <div style="font-size:13px; color:var(--text-600); margin-bottom:10px;">AI-suggested strategies — pick the ones you'll try:</div>
      <div class="sprint-strategy-list">
        ${strategies.map(s => `
          <label class="sprint-strategy">
            <input type="checkbox" data-strategy="${s.key}" ${data.strategies.includes(s.key) ? "checked" : ""} />
            <div>
              <div style="font-weight:600;">${s.label}</div>
              <div style="color:var(--text-400); font-size:12px;">${s.desc}</div>
            </div>
          </label>
        `).join("")}
      </div>
      <button class="btn btn--primary" id="sprint-next-btn" style="margin-top:14px;">Save & Continue to Prototype</button>
    `;
    document.getElementById("sprint-next-btn").addEventListener("click", () => {
      const d = getSprintData();
      d.strategies = Array.from(document.querySelectorAll("[data-strategy]:checked")).map(el => el.dataset.strategy);
      saveSprintData(d);
      sprintStep = "prototype";
      renderSprintTabs();
      renderSprintPane();
    });
  }

  else if (sprintStep === "prototype") {
    const composition = computeComposition(10);
    mount.innerHTML = `
      <div style="font-size:13px; color:var(--text-600); margin-bottom:6px;">
        Based on your Weak Areas, here's a personalized mini-test prototype:
      </div>
      <div class="sprint-composition comp-list">
        ${composition.map(c => `
          <div class="comp-row">
            <span class="comp-row__label">${c.skill}</span>
            <span class="comp-row__count">${c.count}</span>
          </div>
        `).join("")}
      </div>
      <button class="btn btn--primary" id="sprint-build-btn">Build This Test</button>
    `;
    document.getElementById("sprint-build-btn").addEventListener("click", () => {
      let ids = [];
      composition.forEach(c => {
        const pool = QuestionProvider.shuffle(poolForArea(c.skill));
        pool.slice(0, c.count).forEach(q => ids.push(q.id));
      });
      ids = QuestionProvider.shuffle(ids);
      if (ids.length === 0) ids = QuestionProvider.buildPracticeSet({ count: 10 });
      SessionManager.createSession(ids, { source: "learning-sprint", label: "Learning Sprint Prototype" });
      window.location.href = "question.html";
    });
  }

  else if (sprintStep === "test") {
    mount.innerHTML = `
      <p style="font-size:13.5px; color:var(--text-600); margin-bottom:14px;">
        After you finish your prototype test, come back to this page — your Accuracy
        and Skill Breakdown above will reflect what you just practiced. Compare it
        against where you started, then repeat the cycle on your next weak area.
      </p>
      <a class="btn btn--secondary" href="practice.html">Go to Practice</a>
    `;
  }
}

function initLearningSprint() {
  renderSprintTabs();
  renderSprintPane();
}

document.addEventListener("DOMContentLoaded", initLearningSprint);
