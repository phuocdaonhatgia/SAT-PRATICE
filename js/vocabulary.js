/**
 * vocabulary.js — drives vocabulary.html (spec mục 12-13).
 */

let quizState = null;        // { questions, index, score, finished }
let browseFilters = { search: "", difficulty: "all", group: "all" };
let dailyOverride = null;    // { words, label } — set when a personalized/custom set replaces today's words

function switchTab(tab) {
  document.querySelectorAll(".vocab-tab").forEach(t => t.classList.toggle("is-active", t.dataset.tab === tab));
  document.querySelectorAll(".vocab-pane").forEach(p => p.classList.toggle("is-active", p.id === "pane-" + tab));
  if (tab === "daily") renderDailyPane();
  if (tab === "browse") renderBrowsePane();
  if (tab === "missed") renderMissedPane();
  if (tab === "quiz") renderQuizPane();
}

function renderStats() {
  const c = VocabService.counts();
  document.getElementById("vocab-stats").innerHTML = `
    <div class="vocab-stat"><div class="vocab-stat__value mono">${c.total}</div><div class="vocab-stat__label">Total Words</div></div>
    <div class="vocab-stat"><div class="vocab-stat__value mono" style="color:var(--success)">${c.known}</div><div class="vocab-stat__label">Known</div></div>
    <div class="vocab-stat"><div class="vocab-stat__value mono" style="color:var(--danger)">${c.review}</div><div class="vocab-stat__label">Review Again</div></div>
    <div class="vocab-stat"><div class="vocab-stat__value mono" style="color:var(--text-400)">${c.new}</div><div class="vocab-stat__label">Not Studied</div></div>
  `;
}

/**
 * Word cards double as mini flashcards: clicking "Learn it" (or the card face)
 * flips the card with a 3D animation to reveal the Vietnamese meaning on the back.
 */
function wordCard(w, { showActions = true } = {}) {
  const progress = VocabService.getProgress(w.id);
  const dotClass = progress.status === "known" ? "status-dot--known"
    : progress.status === "review" ? "status-dot--review" : "status-dot--new";
  return `
    <div class="word-card word-card--flip" data-word-id="${w.id}">
      <div class="word-card__inner">
        <div class="word-card__face word-card__face--front" data-flip-trigger="${w.id}">
          <div class="word-card__head">
            <span class="word-card__word">${w.word}</span>
            <span class="status-dot ${dotClass}" title="${progress.status}"></span>
          </div>
          <div class="word-card__def">${w.definition}</div>
          ${w.group ? `<div class="word-card__group-tag">${w.group}</div>` : ""}
          ${showActions ? `
            <div class="word-card__actions">
              <button class="btn btn--sm btn--secondary" data-action="learn" data-word-id="${w.id}">Learn it</button>
              <button class="btn btn--sm btn--ghost" data-action="review" data-word-id="${w.id}">Review again</button>
            </div>` : ""}
        </div>
        <div class="word-card__face word-card__face--back" data-flip-trigger="${w.id}">
          <div class="word-card__vietnamese">${w.vietnamese || ""}</div>
          <div class="word-card__def word-card__def--muted">${w.definition}</div>
          <div class="word-card__example">"${w.example}"</div>
          ${showActions ? `
            <div class="word-card__actions">
              <button class="btn btn--sm btn--primary" data-action="got-it" data-word-id="${w.id}">Đã thuộc ✓</button>
              <button class="btn btn--sm btn--ghost" data-action="review" data-word-id="${w.id}">Review again</button>
            </div>` : ""}
        </div>
      </div>
    </div>
  `;
}

function flipWordCard(container, wordId, forceFlip) {
  const card = container.querySelector(`.word-card[data-word-id="${wordId}"]`);
  if (!card) return;
  const shouldFlip = typeof forceFlip === "boolean" ? forceFlip : !card.classList.contains("is-flipped");
  card.classList.toggle("is-flipped", shouldFlip);
}

function wireWordCardActions(container) {
  // Tap the card face to flip it (front <-> back).
  container.querySelectorAll("[data-flip-trigger]").forEach(face => {
    face.addEventListener("click", (e) => {
      if (e.target.closest("[data-action]")) return; // let buttons handle their own click
      flipWordCard(container, face.dataset.flipTrigger);
    });
  });
  // "Learn it" flips the card open to reveal the Vietnamese meaning.
  container.querySelectorAll('[data-action="learn"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      flipWordCard(container, btn.dataset.wordId, true);
    });
  });
  // "Đã thuộc ✓" on the back marks the word as known.
  container.querySelectorAll('[data-action="got-it"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      VocabService.markKnown(btn.dataset.wordId);
      if (typeof GamificationService !== "undefined") GamificationService.recordVocabKnown();
      refreshAll();
    });
  });
  container.querySelectorAll('[data-action="review"]').forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      VocabService.markReview(btn.dataset.wordId);
      refreshAll();
    });
  });
}

function refreshAll() {
  renderStats();
  const activeTab = document.querySelector(".vocab-tab.is-active")?.dataset.tab || "daily";
  switchTab(activeTab);
}

/* ---------------- Daily Words ---------------- */
function renderDailyPane() {
  const words = dailyOverride ? dailyOverride.words : VocabService.getDailyWords(10);
  const mount = document.getElementById("daily-grid");
  const toolbar = document.getElementById("daily-toolbar");
  if (dailyOverride) {
    toolbar.style.display = "flex";
    document.getElementById("daily-set-label").textContent = `Showing: ${dailyOverride.label} (${words.length} words)`;
  } else {
    toolbar.style.display = "none";
  }
  mount.innerHTML = words.length
    ? words.map(w => wordCard(w)).join("")
    : `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-state__title">No words here</div></div>`;
  wireWordCardActions(mount);
}

function showDailyOverride(words, label) {
  dailyOverride = { words, label };
  document.querySelector('.vocab-tab[data-tab="daily"]').click();
}

/* ---------------- Quiz ---------------- */
function buildQuizQuestions(source, count) {
  const pool = source === "missed" ? VocabService.getMissedWords() : VocabService.getAllWords();
  const chosen = VocabService.shuffle(pool).slice(0, Math.min(count, pool.length));
  return chosen.map(w => {
    const distractorPool = VocabService.getAllWords().filter(x => x.id !== w.id);
    const distractors = VocabService.shuffle(distractorPool).slice(0, 3).map(x => x.definition);
    const options = VocabService.shuffle([w.definition, ...distractors]);
    return { wordId: w.id, word: w.word, correctDefinition: w.definition, options };
  });
}

function startQuiz(source = "all", count = 10) {
  const questions = buildQuizQuestions(source, count);
  quizState = { questions, index: 0, score: 0, finished: false, answeredThisQuestion: false };
  renderQuizPane();
}

function renderQuizPane() {
  const mount = document.getElementById("pane-quiz");

  if (!quizState) {
    mount.innerHTML = `
      <div class="card empty-state">
        <div class="empty-state__title">Test your vocabulary</div>
        <div class="empty-state__sub">10 multiple-choice questions. Missed words are added to your review list automatically.</div>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:18px; flex-wrap:wrap;">
          <button class="btn btn--primary" id="quiz-start-all">Start Quiz (10 questions)</button>
          <button class="btn btn--secondary" id="quiz-start-missed">Quiz My Missed Words</button>
        </div>
      </div>
    `;
    document.getElementById("quiz-start-all").addEventListener("click", () => startQuiz("all", 10));
    document.getElementById("quiz-start-missed").addEventListener("click", () => startQuiz("missed", 10));
    return;
  }

  if (quizState.index >= quizState.questions.length) {
    const pct = Math.round((quizState.score / quizState.questions.length) * 100);
    mount.innerHTML = `
      <div class="card quiz-summary">
        <div class="quiz-summary__score mono">${pct}%</div>
        <div style="margin: 8px 0 20px; color:var(--text-600);">${quizState.score} of ${quizState.questions.length} correct</div>
        <button class="btn btn--primary" id="quiz-again">Take Another Quiz</button>
      </div>
    `;
    document.getElementById("quiz-again").addEventListener("click", () => { quizState = null; renderQuizPane(); });
    return;
  }

  const q = quizState.questions[quizState.index];
  const pct = Math.round((quizState.index / quizState.questions.length) * 100);

  mount.innerHTML = `
    <div class="card">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <div class="quiz-question">What does "<span style="color:var(--indigo-600); text-transform:capitalize;">${q.word}</span>" most nearly mean?</div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((opt, i) => `<button class="qchoice" data-idx="${i}"><span class="qchoice__letter">${String.fromCharCode(65 + i)}</span><span class="qchoice__text">${opt}</span></button>`).join("")}
      </div>
      <button class="btn btn--primary" id="quiz-next-btn" style="display:none;">Next Question</button>
    </div>
  `;

  document.querySelectorAll("#quiz-options .qchoice").forEach(btn => {
    btn.addEventListener("click", () => selectQuizOption(q, Number(btn.dataset.idx)));
  });
}

function selectQuizOption(q, idx) {
  if (quizState.answeredThisQuestion) return;
  quizState.answeredThisQuestion = true;
  const chosen = q.options[idx];
  const isCorrect = chosen === q.correctDefinition;
  if (isCorrect) quizState.score++;
  else VocabService.markReview(q.wordId);

  document.querySelectorAll("#quiz-options .qchoice").forEach((btn, i) => {
    btn.disabled = true;
    if (q.options[i] === q.correctDefinition) btn.classList.add("is-correct");
    else if (i === idx) btn.classList.add("is-incorrect");
  });
  document.getElementById("quiz-next-btn").style.display = "inline-flex";
  document.getElementById("quiz-next-btn").addEventListener("click", () => {
    quizState.index++;
    quizState.answeredThisQuestion = false;
    if (quizState.index >= quizState.questions.length) {
      VocabService.recordQuizResult(quizState.score, quizState.questions.length);
      if (typeof GamificationService !== "undefined") GamificationService.recordVocabQuizCompleted();
      renderStats();
    }
    renderQuizPane();
  });
}

/* ---------------- SAT Words browser ---------------- */
function renderBrowsePane() {
  const mount = document.getElementById("browse-grid");
  const all = VocabService.getAllWords();
  const filtered = all.filter(w => {
    if (browseFilters.difficulty !== "all" && w.difficulty !== browseFilters.difficulty) return false;
    if (browseFilters.group !== "all" && w.group !== browseFilters.group) return false;
    if (browseFilters.search && !w.word.toLowerCase().includes(browseFilters.search.toLowerCase())) return false;
    return true;
  });
  mount.innerHTML = filtered.length
    ? filtered.map(w => wordCard(w)).join("")
    : `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-state__title">No words match</div></div>`;
  wireWordCardActions(mount);
}

function renderGroupChips() {
  const mount = document.getElementById("browse-group-chips");
  const groups = VocabService.getGroups();
  mount.innerHTML = [`<button class="chip is-selected" data-group="all">Tất cả nhóm</button>`]
    .concat(groups.map(g => `<button class="chip" data-group="${g}">${g}</button>`))
    .join("");
  mount.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      browseFilters.group = chip.dataset.group;
      mount.querySelectorAll(".chip").forEach(c => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      renderBrowsePane();
    });
  });
}

function initBrowseControls() {
  document.getElementById("browse-search").addEventListener("input", (e) => {
    browseFilters.search = e.target.value;
    renderBrowsePane();
  });
  document.querySelectorAll("#browse-diff-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
      browseFilters.difficulty = chip.dataset.diff;
      document.querySelectorAll("#browse-diff-chips .chip").forEach(c => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      renderBrowsePane();
    });
  });
  renderGroupChips();
}

/* ---------------- Words I Missed ---------------- */
function renderMissedPane() {
  const missed = VocabService.getMissedWords();
  const mount = document.getElementById("missed-grid");
  if (missed.length === 0) {
    mount.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-state__title">No missed words</div><div class="empty-state__sub">Words you mark "Review again" will show up here.</div></div>`;
    return;
  }
  mount.innerHTML = missed.map(w => wordCard(w)).join("");
  wireWordCardActions(mount);
}

/* ---------------- Init ---------------- */
function initVocabularyPage() {
  renderSidebar("vocabulary");
  renderStats();

  document.querySelectorAll(".vocab-tab").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  document.getElementById("generate-level-btn").addEventListener("click", () => {
    showDailyOverride(VocabService.generateWordsForLevel(10), "Personalized Set");
  });

  document.getElementById("daily-reset-btn").addEventListener("click", () => {
    dailyOverride = null;
    renderDailyPane();
  });

  initBrowseControls();
  renderDailyPane();
}

document.addEventListener("DOMContentLoaded", initVocabularyPage);
