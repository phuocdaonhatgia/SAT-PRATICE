/**
 * question.js — drives question.html.
 *
 * HINT SYSTEM (Phase 4 — spec mục 7): 4 levels.
 *   1. Recall    — hint1 from question data (re-read what's being asked)
 *   2. Strategy  — hint2 from question data (which strategy to apply)
 *   3. Evidence  — hint3 from question data (point toward the evidence)
 *   4. Strong Hint — computed live: eliminates 2 of the 3 wrong choices,
 *      narrowing it to 2 options without ever naming the correct answer.
 * Phase 5 (AI Tutor) will let the student go beyond level 4 with open-ended
 * Socratic follow-up — the "Ask AI Tutor" affordance is wired at the bottom
 * of the hint panel once all 4 levels are used.
 */

const HINT_LEVELS = ["Recall", "Strategy", "Evidence", "Strong Hint"];

let session = null;
let currentQuestion = null;
let sessionTimerHandle = null;

function requireSession() {
  session = SessionManager.getSession();
  if (!session || !session.questionIds || session.questionIds.length === 0) {
    window.location.href = "practice.html";
    return false;
  }
  return true;
}

function startSessionTimer() {
  const start = new Date(session.createdAt).getTime();
  const el = document.getElementById("qtimer-value");
  function tick() {
    const elapsed = Math.floor((Date.now() - start) / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const s = String(elapsed % 60).padStart(2, "0");
    el.textContent = `${m}:${s}`;
  }
  tick();
  sessionTimerHandle = setInterval(tick, 1000);
}

function difficultyDots(level) {
  const map = { easy: 1, medium: 2, hard: 3 };
  const n = map[level] || 1;
  return `<span class="diff-dots" data-level="${n}"><span></span><span></span><span></span></span>`;
}

function renderHeader(index, total) {
  document.getElementById("qheader-progress-text").textContent = `Question ${index + 1} / ${total}`;
  const pct = Math.round(((index + 1) / total) * 100);
  document.getElementById("qheader-bar-fill").style.width = pct + "%";
}

function renderMeta(q) {
  document.getElementById("qmeta-row").innerHTML = `
    <span class="badge badge--indigo">${q.subject === "math" ? "Math" : "Reading & Writing"}</span>
    <span class="badge badge--neutral">${q.skill}</span>
    ${difficultyDots(q.difficulty)}
    <span class="badge badge--difficulty-${q.difficulty}" style="text-transform:capitalize;">${q.difficulty}</span>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function applyHighlights(html, highlights) {
  let result = html;
  (highlights || []).forEach(h => {
    if (!h) return;
    const escaped = escapeHtml(h);
    const idx = result.indexOf(escaped);
    if (idx === -1) return; // already wrapped or not found — skip rather than corrupt markup
    result = result.slice(0, idx) + `<mark class="sat-highlight" data-highlight-text="${escaped}">${escaped}</mark>` + result.slice(idx + escaped.length);
  });
  return result;
}

function renderPassage(q, answerState) {
  const el = document.getElementById("qpassage");
  const toolbar = document.getElementById("qpassage-toolbar");
  const clearBtn = document.getElementById("clear-highlights-btn");

  if (!q.passage) {
    el.style.display = "none";
    toolbar.style.display = "none";
    return;
  }
  el.style.display = "block";
  toolbar.style.display = "flex";

  let html = escapeHtml(q.passage).replace("______", `<span class="qpassage__blank">______</span>`);
  html = applyHighlights(html, answerState.highlights);
  el.innerHTML = html;

  const highlights = answerState.highlights || [];
  clearBtn.style.display = highlights.length ? "inline" : "none";

  el.querySelectorAll(".sat-highlight").forEach(mark => {
    mark.addEventListener("click", () => removeHighlight(mark.dataset.highlightText));
  });
}

function addHighlight(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  const highlights = answerState.highlights || [];
  if (!highlights.includes(trimmed)) highlights.push(trimmed);
  SessionManager.setAnswerState(session, currentQuestion.id, { highlights });
  renderQuestion();
}

function removeHighlight(text) {
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  const highlights = (answerState.highlights || []).filter(h => h !== text);
  SessionManager.setAnswerState(session, currentQuestion.id, { highlights });
  renderQuestion();
}

function clearHighlights() {
  SessionManager.setAnswerState(session, currentQuestion.id, { highlights: [] });
  renderQuestion();
}

function initHighlightTool() {
  const popup = document.getElementById("highlight-popup");
  let pendingText = "";

  function hidePopup() {
    popup.classList.remove("is-visible");
    pendingText = "";
  }

  document.addEventListener("mouseup", (e) => {
    if (e.target.closest("#highlight-popup")) return;
    const passageEl = document.getElementById("qpassage");
    const sel = window.getSelection();
    if (!passageEl || !sel || sel.isCollapsed || sel.toString().trim() === "") {
      hidePopup();
      return;
    }
    if (!passageEl.contains(sel.anchorNode)) {
      hidePopup();
      return;
    }
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    pendingText = sel.toString();
    popup.style.left = (rect.left + rect.width / 2) + "px";
    popup.style.top = (rect.top - 8) + "px";
    popup.classList.add("is-visible");
  });

  popup.addEventListener("mousedown", (e) => {
    // mousedown (not click) so it fires before the selection is cleared by the browser
    e.preventDefault();
    if (pendingText) addHighlight(pendingText);
    window.getSelection().removeAllRanges();
    hidePopup();
  });

  document.addEventListener("scroll", hidePopup, true);
}

function renderChoices(q, answerState) {
  const mount = document.getElementById("qchoices");
  const eliminated = answerState.eliminated || [];

  mount.innerHTML = q.choices.map(c => {
    let cls = "qchoice";
    const isEliminated = !answerState.submitted && eliminated.includes(c.id);

    if (answerState.submitted) {
      cls += " is-disabled";
      if (c.id === q.correctAnswer) cls += " is-correct";
      else if (c.id === answerState.selected) cls += " is-incorrect";
    } else if (isEliminated) {
      cls += " is-eliminated is-disabled";
    } else if (c.id === answerState.selected) {
      cls += " is-selected";
    }

    return `
      <button class="${cls}" data-choice="${c.id}" ${answerState.submitted || isEliminated ? "disabled" : ""}>
        <span class="qchoice__letter">${c.id}</span>
        <span class="qchoice__text">${c.text}</span>
        ${isEliminated ? `<span class="qchoice__eliminated-tag">Eliminated</span>` : ""}
      </button>
    `;
  }).join("");

  if (!answerState.submitted) {
    mount.querySelectorAll(".qchoice:not(.is-eliminated)").forEach(btn => {
      btn.addEventListener("click", () => selectChoice(btn.dataset.choice));
    });
  }
}

function renderActions(answerState) {
  const submitBtn = document.getElementById("submit-btn");
  const hintBtn = document.getElementById("hint-btn");
  const explainBtn = document.getElementById("explain-btn");
  const reviewChip = document.getElementById("review-chip");

  submitBtn.disabled = answerState.submitted || !answerState.selected;
  submitBtn.textContent = answerState.submitted ? "Submitted" : "Submit Answer";

  hintBtn.disabled = answerState.submitted || answerState.hintLevel >= 4;
  hintBtn.textContent = answerState.hintLevel >= 4 ? "No more hints" : `Hint (${answerState.hintLevel}/4)`;

  explainBtn.disabled = !answerState.submitted;

  reviewChip.classList.toggle("is-marked", !!answerState.markedForReview);
  reviewChip.innerHTML = `${ICONS.flag} ${answerState.markedForReview ? "Marked for Review" : "Mark for Review"}`;
}

function renderHintPanel(q, answerState) {
  const mount = document.getElementById("hint-panel-mount");
  if (answerState.hintLevel === 0) {
    mount.innerHTML = "";
    return;
  }
  const level = answerState.hintLevel;
  const levelLabel = HINT_LEVELS[level - 1];
  let text;
  if (level <= 3) {
    text = [q.hint1, q.hint2, q.hint3][level - 1];
  } else {
    text = "Two of the four choices have been eliminated. Compare the two remaining options carefully — think about which one the passage actually supports.";
  }

  mount.innerHTML = `
    <div class="qpanel">
      <div class="qpanel__head">${ICONS.lightbulb} Hint ${level} of 4 · ${levelLabel}</div>
      <div class="qpanel__text">${text}</div>
    </div>
  `;
}

function renderResultPanel(q, answerState) {
  const mount = document.getElementById("result-panel-mount");
  if (!answerState.submitted) {
    mount.innerHTML = "";
    return;
  }
  const isCorrect = answerState.correct;
  let explainHtml = "";
  if (answerState.explanationShown) {
    explainHtml = `
      <div class="qexplain-title">Why?</div>
      <div class="qpanel__text">${q.explanation}</div>
    `;
  } else {
    explainHtml = `
      <div class="qpanel__text" style="color:var(--text-600);">
        Click <b>Explain</b> below to see the full reasoning.
      </div>
    `;
  }

  mount.innerHTML = `
    <div class="qpanel qpanel--result">
      <span class="qresult-badge ${isCorrect ? "qresult-badge--correct" : "qresult-badge--incorrect"}">
        ${isCorrect ? ICONS.check : ICONS.x} ${isCorrect ? "Correct" : "Not quite"}
      </span>
      ${explainHtml}
    </div>
  `;
}

function renderFooterNav(index, total) {
  document.getElementById("prev-btn").disabled = index === 0;
  const nextBtn = document.getElementById("next-btn");
  const finishBtn = document.getElementById("finish-btn");
  if (index === total - 1) {
    nextBtn.style.display = "none";
    finishBtn.style.display = "inline-flex";
  } else {
    nextBtn.style.display = "inline-flex";
    finishBtn.style.display = "none";
  }
}

function renderQuestion() {
  const index = session.currentIndex;
  const total = session.questionIds.length;
  currentQuestion = QuestionProvider.getQuestionById(session.questionIds[index]);
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);

  renderHeader(index, total);
  renderMeta(currentQuestion);
  renderPassage(currentQuestion, answerState);
  document.getElementById("qprompt").textContent = currentQuestion.question;
  renderChoices(currentQuestion, answerState);
  renderActions(answerState);
  renderHintPanel(currentQuestion, answerState);
  renderResultPanel(currentQuestion, answerState);
  renderFooterNav(index, total);
}

function selectChoice(choiceId) {
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  if (answerState.submitted) return;
  SessionManager.setAnswerState(session, currentQuestion.id, { selected: choiceId });
  renderQuestion();
}

function submitAnswer() {
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  if (!answerState.selected || answerState.submitted) return;
  const correct = answerState.selected === currentQuestion.correctAnswer;
  SessionManager.setAnswerState(session, currentQuestion.id, { submitted: true, correct });
  if (!correct) {
    ErrorLogService.logMistake(currentQuestion, answerState.selected);
  }
  renderQuestion();
}

function showNextHint() {
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  if (answerState.submitted || answerState.hintLevel >= 4) return;
  const newLevel = answerState.hintLevel + 1;
  const patch = { hintLevel: newLevel };

  if (newLevel === 4 && !answerState.eliminated) {
    const wrongChoices = currentQuestion.choices
      .map(c => c.id)
      .filter(id => id !== currentQuestion.correctAnswer);
    const eliminated = QuestionProvider.shuffle(wrongChoices).slice(0, 2);
    patch.eliminated = eliminated;
    // if the eliminated set happens to include the student's current pick, clear the selection
    if (eliminated.includes(answerState.selected)) {
      patch.selected = null;
    }
  }

  SessionManager.setAnswerState(session, currentQuestion.id, patch);
  renderQuestion();
}

function toggleReview() {
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  SessionManager.setAnswerState(session, currentQuestion.id, { markedForReview: !answerState.markedForReview });
  renderQuestion();
}

function showExplanation() {
  const answerState = SessionManager.getAnswerState(session, currentQuestion.id);
  if (!answerState.submitted) return;
  SessionManager.setAnswerState(session, currentQuestion.id, { explanationShown: true });
  renderQuestion();
}

function goPrev() {
  if (session.currentIndex === 0) return;
  session.currentIndex -= 1;
  SessionManager.saveSession(session);
  renderQuestion();
}

function goNext() {
  if (session.currentIndex >= session.questionIds.length - 1) return;
  session.currentIndex += 1;
  SessionManager.saveSession(session);
  renderQuestion();
}

function finishSession() {
  const total = session.questionIds.length;
  const unanswered = session.questionIds.filter(id => !session.answers[id]?.submitted).length;
  if (unanswered > 0) {
    const ok = confirm(`You still have ${unanswered} unanswered question(s). Finish anyway?`);
    if (!ok) return;
  }
  const correctCount = session.questionIds.filter(id => session.answers[id]?.correct).length;
  const answeredCount = session.questionIds.filter(id => session.answers[id]?.submitted).length;
  renderSummary({ total, answered: answeredCount, correct: correctCount });
}

function renderSummary({ total, answered, correct }) {
  clearInterval(sessionTimerHandle);
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  document.getElementById("qbody").innerHTML = `
    <div class="card" style="text-align:center; padding:44px 28px;">
      <div style="font-family:var(--font-display); font-size:22px; font-weight:700; margin-bottom:6px;">
        Session Complete
      </div>
      <div style="color:var(--text-600); font-size:14px; margin-bottom:26px;">
        You answered ${answered} of ${total} questions.
      </div>
      <div style="display:flex; justify-content:center; gap:40px; margin-bottom:30px;">
        <div>
          <div class="mono" style="font-size:30px; font-weight:700; color:var(--indigo-600);">${accuracy}%</div>
          <div style="font-size:12px; color:var(--text-400);">Accuracy</div>
        </div>
        <div>
          <div class="mono" style="font-size:30px; font-weight:700;">${correct}/${answered}</div>
          <div style="font-size:12px; color:var(--text-400);">Correct</div>
        </div>
      </div>
      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <a href="practice.html" class="btn btn--primary">Practice Again</a>
        <a href="error-log.html" class="btn btn--secondary">Review Mistakes</a>
        <a href="index.html" class="btn btn--ghost">Back to Dashboard</a>
      </div>
    </div>
  `;
  document.getElementById("qfooter").style.display = "none";
  SessionManager.clearSession();
}

function exitSession() {
  const ok = confirm("Leave this practice session? Your progress on answered questions is saved.");
  if (ok) window.location.href = "practice.html";
}

function initQuestionPage() {
  if (!requireSession()) return;
  startSessionTimer();
  initHighlightTool();
  renderQuestion();

  document.getElementById("submit-btn").addEventListener("click", submitAnswer);
  document.getElementById("hint-btn").addEventListener("click", showNextHint);
  document.getElementById("explain-btn").addEventListener("click", showExplanation);
  document.getElementById("review-chip").addEventListener("click", toggleReview);
  document.getElementById("prev-btn").addEventListener("click", goPrev);
  document.getElementById("next-btn").addEventListener("click", goNext);
  document.getElementById("finish-btn").addEventListener("click", finishSession);
  document.getElementById("exit-btn").addEventListener("click", exitSession);
  document.getElementById("clear-highlights-btn").addEventListener("click", clearHighlights);
}

document.addEventListener("DOMContentLoaded", initQuestionPage);
