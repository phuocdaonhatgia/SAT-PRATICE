/**
 * errorLogPage.js — drives error-log.html.
 */

let currentFilter = "all";
let currentEntryId = null;

function statusTag(status) {
  const map = {
    review: { text: "Needs Review", cls: "status-tag--review" },
    progress: { text: "In Progress", cls: "status-tag--progress" },
    fixed: { text: "Fixed", cls: "status-tag--fixed" }
  };
  const s = map[status] || map.review;
  return `<span class="status-tag ${s.cls}">${s.text}</span>`;
}

function renderStats() {
  const c = ErrorLogService.counts();
  document.getElementById("errlog-stats").innerHTML = `
    <div class="errlog-stat"><div class="errlog-stat__value mono">${c.total}</div><div class="errlog-stat__label">Total Logged</div></div>
    <div class="errlog-stat"><div class="errlog-stat__value mono" style="color:var(--danger)">${c.review}</div><div class="errlog-stat__label">Needs Review</div></div>
    <div class="errlog-stat"><div class="errlog-stat__value mono" style="color:#B7791F">${c.progress}</div><div class="errlog-stat__label">In Progress</div></div>
    <div class="errlog-stat"><div class="errlog-stat__value mono" style="color:var(--success)">${c.fixed}</div><div class="errlog-stat__label">Fixed</div></div>
  `;
}

function renderFilterChips() {
  const options = [
    { key: "all", label: "All" },
    { key: "review", label: "Needs Review" },
    { key: "progress", label: "In Progress" },
    { key: "fixed", label: "Fixed" }
  ];
  document.getElementById("filter-chips").innerHTML = options.map(o => `
    <button class="chip ${currentFilter === o.key ? "is-selected" : ""}" data-filter="${o.key}">${o.label}</button>
  `).join("");

  document.querySelectorAll("#filter-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      currentFilter = chip.dataset.filter;
      renderFilterChips();
      renderTable();
    });
  });
}

function renderTable() {
  const all = ErrorLogService.getAll().slice().reverse(); // newest first
  const filtered = currentFilter === "all" ? all : all.filter(e => e.status === currentFilter);
  const wrap = document.getElementById("errlog-table-wrap");
  const empty = document.getElementById("errlog-empty");

  if (all.length === 0) {
    wrap.style.display = "none";
    empty.style.display = "block";
    return;
  }
  wrap.style.display = "block";
  empty.style.display = "none";

  document.getElementById("errlog-rows").innerHTML = filtered.map(e => `
    <tr data-id="${e.id}">
      <td>
        <div class="q-topic">${e.skill}</div>
        <div class="q-id">${e.questionId}</div>
      </td>
      <td>${e.subject === "math" ? "Math" : "Reading & Writing"}</td>
      <td>${e.domain}</td>
      <td>${e.errorType || `<span class="cell-muted">Not logged</span>`}</td>
      <td>${e.correctStrategy ? e.correctStrategy.slice(0, 44) + "…" : `<span class="cell-muted">—</span>`}</td>
      <td>${statusTag(e.status)}</td>
    </tr>
  `).join("");

  document.querySelectorAll("#errlog-rows tr").forEach(row => {
    row.addEventListener("click", () => openDetail(row.dataset.id));
  });

  if (filtered.length === 0) {
    document.getElementById("errlog-rows").innerHTML = `
      <tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-400);">No entries match this filter.</td></tr>
    `;
  }
}

function openDetail(id) {
  currentEntryId = id;
  renderModal();
  document.getElementById("modal-backdrop").classList.add("is-open");
}

function closeModal() {
  document.getElementById("modal-backdrop").classList.remove("is-open");
  currentEntryId = null;
}

function questionRecap(entry, question) {
  if (!question) {
    return `<div class="errlog-section__body" style="color:var(--text-400); font-style:italic;">Original question not found.</div>`;
  }
  const choicesHtml = question.choices.map(c => {
    let cls = "errlog-choice";
    if (c.id === question.correctAnswer) cls += " is-correct";
    else if (c.id === entry.selectedAnswer) cls += " is-incorrect";
    return `
      <div class="${cls}">
        <span class="errlog-choice__letter">${c.id}</span>
        <span class="errlog-choice__text">${c.text}</span>
        ${c.id === question.correctAnswer ? `<span class="errlog-choice__tag">Correct</span>` : ""}
        ${c.id === entry.selectedAnswer && c.id !== question.correctAnswer ? `<span class="errlog-choice__tag errlog-choice__tag--wrong">Your answer</span>` : ""}
      </div>`;
  }).join("");

  return `
    <div class="errlog-section">
      <div class="errlog-section__title">The Question</div>
      ${question.passage ? `<div class="errlog-recap-passage">${question.passage}</div>` : ""}
      <div class="errlog-recap-prompt">${question.question}</div>
      <div class="errlog-choices">${choicesHtml}</div>
    </div>
  `;
}

function renderModal() {
  const entry = ErrorLogService.getById(currentEntryId);
  if (!entry) return;
  const question = QuestionProvider.getQuestionById(entry.questionId);
  const mount = document.getElementById("modal-content");

  const header = `
    <div class="errlog-modal__head">
      <div>
        <div class="card__eyebrow">${entry.skill}</div>
        <h3 style="margin-top:4px;">${entry.domain}</h3>
      </div>
      <button class="errlog-modal__close" id="modal-close-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>
  `;

  const questionBlock = questionRecap(entry, question);

  let body;
  if (!entry.errorType) {
    // Step 1: "Why did you miss this?"
    body = `
      ${questionBlock}
      <div class="errlog-section">
        <div class="errlog-section__title">Why did you miss this?</div>
        <div class="errlog-radio-group">
          ${ERROR_TYPE_OPTIONS.map(opt => `
            <label class="errlog-radio">
              <input type="radio" name="errortype" value="${opt.value}" />
              ${opt.label}
            </label>
          `).join("")}
        </div>
        <button class="btn btn--primary btn--block" id="save-errortype-btn" disabled>Save</button>
      </div>
    `;
  } else {
    body = `
      ${questionBlock}

      <div class="errlog-section">
        <div class="errlog-section__title">What happened?</div>
        <div class="errlog-section__body">${ErrorAnalyzer.whatHappened(entry, question)}</div>
      </div>

      <div class="errlog-section">
        <div class="errlog-section__title">Why did you miss this?</div>
        <div class="errlog-section__body">
          ${ERROR_TYPE_OPTIONS.find(o => o.value === entry.errorType)?.label || entry.errorType}
          <button class="link-btn" id="change-errortype-btn" style="margin-left:8px;">Change</button>
        </div>
      </div>

      <div class="errlog-section">
        <div class="errlog-section__title">Fix — Correct Strategy</div>
        <div class="errlog-strategy-box">${entry.correctStrategy}</div>
      </div>

      <div class="errlog-modal__actions">
        <button class="btn btn--primary" id="retry-similar-btn">Try a Similar Question</button>
        <a class="btn btn--secondary" href="ai-tutor.html?questionId=${entry.questionId}">Ask AI Tutor</a>
        <button class="btn btn--secondary" id="mark-fixed-btn" ${entry.status === "fixed" ? "disabled" : ""}>
          ${entry.status === "fixed" ? "Marked as Fixed" : "Mark as Fixed"}
        </button>
      </div>
    `;
  }

  mount.innerHTML = header + body;
  wireModalEvents(entry);
}

function wireModalEvents(entry) {
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);

  if (!entry.errorType) {
    const radios = document.querySelectorAll('input[name="errortype"]');
    const saveBtn = document.getElementById("save-errortype-btn");
    radios.forEach(r => r.addEventListener("change", () => { saveBtn.disabled = false; }));
    saveBtn.addEventListener("click", () => {
      const selected = document.querySelector('input[name="errortype"]:checked');
      if (!selected) return;
      const strategy = ErrorAnalyzer.suggestStrategy(selected.value);
      ErrorLogService.setErrorType(entry.id, selected.value, strategy);
      if (typeof GamificationService !== "undefined") GamificationService.recordErrorReflectionSaved();
      renderModal();
      renderTable();
      renderStats();
    });
    return;
  }

  const changeBtn = document.getElementById("change-errortype-btn");
  if (changeBtn) {
    changeBtn.addEventListener("click", () => {
      ErrorLogService.updateEntry(entry.id, { errorType: null, correctStrategy: null });
      renderModal();
      renderTable();
    });
  }

  const retryBtn = document.getElementById("retry-similar-btn");
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      const pool = QuestionProvider.filterQuestions({ skills: [entry.skill] })
        .filter(q => q.id !== entry.questionId);
      const ids = QuestionProvider.shuffle(pool).slice(0, Math.min(5, pool.length)).map(q => q.id);
      if (ids.length === 0) {
        alert("No other questions available for this skill yet.");
        return;
      }
      SessionManager.createSession(ids, { source: "retry-similar", label: `Retry: ${entry.skill}` });
      window.location.href = "question.html";
    });
  }

  const fixedBtn = document.getElementById("mark-fixed-btn");
  if (fixedBtn) {
    fixedBtn.addEventListener("click", () => {
      ErrorLogService.setStatus(entry.id, "fixed");
      renderModal();
      renderTable();
      renderStats();
    });
  }
}

function initErrorLogPage() {
  renderSidebar("errorlog");
  renderStats();
  renderFilterChips();
  renderTable();

  document.getElementById("modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", initErrorLogPage);
