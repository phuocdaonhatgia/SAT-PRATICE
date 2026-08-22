/**
 * vocabulary.js — drives vocabulary.html (spec mục 12-13).
 */

let flashcardState = null;   // { deck, index, flipped, label }
let quizState = null;        // { questions, index, score, finished }
let browseFilters = { search: "", difficulty: "all" };

function switchTab(tab) {
  document.querySelectorAll(".vocab-tab").forEach(t => t.classList.toggle("is-active", t.dataset.tab === tab));
  document.querySelectorAll(".vocab-pane").forEach(p => p.classList.toggle("is-active", p.id === "pane-" + tab));
  if (tab === "daily") renderDailyPane();
  if (tab === "browse") renderBrowsePane();
  if (tab === "missed") renderMissedPane();
  if (tab === "flashcards") renderFlashcardPane();
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

function wordCard(w, { showActions = true } = {}) {
  const progress = VocabService.getProgress(w.id);
  const dotClass = progress.status === "known" ? "status-dot--known"
    : progress.status === "review" ? "status-dot--review" : "status-dot--new";
  return `
    <div class="word-card" data-word-id="${w.id}">
      <div class="word-card__head">
        <span class="word-card__word">${w.word}</span>
        <span class="status-dot ${dotClass}" title="${progress.status}"></span>
      </div>
      <div class="word-card__def">${w.definition}</div>
      ${showActions ? `
        <div class="word-card__actions">
          <button class="btn btn--sm btn--secondary" data-action="known" data-word-id="${w.id}">Know it</button>
          <button class="btn btn--sm btn--ghost" data-action="review" data-word-id="${w.id}">Review again</button>
        </div>` : ""}
    </div>
  `;
}

function wireWordCardActions(container) {
  container.querySelectorAll('[data-action="known"]').forEach(btn => {
    btn.addEventListener("click", () => { VocabService.markKnown(btn.dataset.wordId); refreshAll(); });
  });
  container.querySelectorAll('[data-action="review"]').forEach(btn => {
    btn.addEventListener("click", () => { VocabService.markReview(btn.dataset.wordId); refreshAll(); });
  });
}

function refreshAll() {
  renderStats();
  const activeTab = document.querySelector(".vocab-tab.is-active")?.dataset.tab || "daily";
  switchTab(activeTab);
}

/* ---------------- Daily Words ---------------- */
function renderDailyPane() {
  const words = VocabService.getDailyWords(10);
  const mount = document.getElementById("daily-grid");
  mount.innerHTML = words.map(w => wordCard(w)).join("");
  wireWordCardActions(mount);
}

/* ---------------- Flashcards ---------------- */
function startFlashcards(deck, label) {
  if (deck.length === 0) {
    flashcardState = null;
  } else {
    flashcardState = { deck: VocabService.shuffle(deck), index: 0, flipped: false, label };
  }
  document.querySelector('.vocab-tab[data-tab="flashcards"]').click();
}

function renderFlashcardPane() {
  const mount = document.getElementById("pane-flashcards");
  if (!flashcardState) {
    mount.innerHTML = `
      <div class="card empty-state">
        <div class="empty-state__title">Choose a deck to study</div>
        <div class="empty-state__sub">Pick a source, then flip through the cards.</div>
        <div style="display:flex; gap:10px; justify-content:center; margin-top:18px; flex-wrap:wrap;">
          <button class="btn btn--primary" id="deck-all">All Words</button>
          <button class="btn btn--secondary" id="deck-daily">Today's Words</button>
          <button class="btn btn--secondary" id="deck-missed">Words I Missed</button>
        </div>
      </div>
    `;
    document.getElementById("deck-all").addEventListener("click", () => startFlashcards(VocabService.getAllWords(), "All Words"));
    document.getElementById("deck-daily").addEventListener("click", () => startFlashcards(VocabService.getDailyWords(10), "Today's Words"));
    document.getElementById("deck-missed").addEventListener("click", () => startFlashcards(VocabService.getMissedWords(), "Words I Missed"));
    return;
  }

  if (flashcardState.index >= flashcardState.deck.length) {
    mount.innerHTML = `
      <div class="card empty-state">
        <div class="empty-state__title">Deck complete 🎉</div>
        <div class="empty-state__sub">You reviewed ${flashcardState.deck.length} words from "${flashcardState.label}".</div>
        <button class="btn btn--primary" id="deck-restart" style="margin-top:16px;">Study Another Deck</button>
      </div>
    `;
    document.getElementById("deck-restart").addEventListener("click", () => { flashcardState = null; renderFlashcardPane(); });
    return;
  }

  const w = flashcardState.deck[flashcardState.index];
  mount.innerHTML = `
    <div class="flashcard-wrap">
      <div class="flashcard-progress">${flashcardState.label} · Card ${flashcardState.index + 1} / ${flashcardState.deck.length}</div>
      <div class="flashcard-stage">
        <div class="flashcard ${flashcardState.flipped ? "is-flipped" : ""}" id="flashcard-el">
          <div class="flashcard__face flashcard__face--front">
            <div class="flashcard__word">${w.word}</div>
            <div class="flashcard__tap-hint">Tap to reveal definition</div>
          </div>
          <div class="flashcard__face flashcard__face--back">
            <div class="flashcard__definition">${w.definition}</div>
            <div class="flashcard__example">"${w.example}"</div>
          </div>
        </div>
      </div>
      <div class="flashcard-actions">
        <button class="btn btn--secondary" id="fc-review">Review again</button>
        <button class="btn btn--primary" id="fc-know">I know it</button>
      </div>
    </div>
  `;

  document.getElementById("flashcard-el").addEventListener("click", () => {
    flashcardState.flipped = !flashcardState.flipped;
    renderFlashcardPane();
  });
  document.getElementById("fc-know").addEventListener("click", (e) => {
    e.stopPropagation();
    VocabService.markKnown(w.id);
    flashcardState.index++;
    flashcardState.flipped = false;
    renderStats();
    renderFlashcardPane();
  });
  document.getElementById("fc-review").addEventListener("click", (e) => {
    e.stopPropagation();
    VocabService.markReview(w.id);
    flashcardState.index++;
    flashcardState.flipped = false;
    renderStats();
    renderFlashcardPane();
  });
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
    if (browseFilters.search && !w.word.toLowerCase().includes(browseFilters.search.toLowerCase())) return false;
    return true;
  });
  mount.innerHTML = filtered.length
    ? filtered.map(w => wordCard(w)).join("")
    : `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-state__title">No words match</div></div>`;
  wireWordCardActions(mount);
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
}

/* ---------------- Words I Missed ---------------- */
function renderMissedPane() {
  const missed = VocabService.getMissedWords();
  const mount = document.getElementById("missed-grid");
  const cta = document.getElementById("missed-cta");
  if (missed.length === 0) {
    mount.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><div class="empty-state__title">No missed words</div><div class="empty-state__sub">Words you mark "Review again" will show up here.</div></div>`;
    cta.style.display = "none";
    return;
  }
  mount.innerHTML = missed.map(w => wordCard(w)).join("");
  wireWordCardActions(mount);
  cta.style.display = "inline-flex";
}

/* ---------------- Init ---------------- */
function initVocabularyPage() {
  renderSidebar("vocabulary");
  renderStats();

  document.querySelectorAll(".vocab-tab").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  document.getElementById("generate-level-btn").addEventListener("click", () => {
    startFlashcards(VocabService.generateWordsForLevel(10), "Personalized Set");
  });

  document.getElementById("missed-cta").addEventListener("click", () => {
    startFlashcards(VocabService.getMissedWords(), "Words I Missed");
  });

  initBrowseControls();
  renderDailyPane();
}

document.addEventListener("DOMContentLoaded", initVocabularyPage);
