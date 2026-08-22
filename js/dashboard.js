/**
 * dashboard.js — renders every dynamic piece of index.html from DASHBOARD_DATA.
 */

let gaugeUid = 0;

function radialGauge({ value, max, size, stroke, subLabel, trackColor, showText = true }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = c * (1 - pct);
  const cx = size / 2, cy = size / 2;
  const gradId = `gaugeGrad-${gaugeUid++}`;

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${trackColor}" stroke-width="${stroke}" />
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="url(#${gradId})" stroke-width="${stroke}"
      stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
      transform="rotate(-90 ${cx} ${cy})" />
    <defs>
      <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7A7DF2" />
        <stop offset="100%" stop-color="#8B5CF6" />
      </linearGradient>
    </defs>
    ${showText ? `
    <text x="${cx}" y="${cy - 4}" text-anchor="middle" class="score-gauge__value">${fmt(value)}</text>
    <text x="${cx}" y="${cy + 16}" text-anchor="middle" class="score-gauge__label">${subLabel}</text>` : ""}
  </svg>`;
}

function renderScoreCard(data) {
  const { score } = data;
  const gauge = radialGauge({
    value: score.total,
    max: score.max,
    size: 132,
    stroke: 11,
    subLabel: `OF ${fmt(score.max)}`,
    trackColor: "rgba(255,255,255,0.10)"
  });

  document.getElementById("score-card-body").innerHTML = `
    <div class="score-gauge" aria-label="Total score ${score.total} of ${score.max}">${gauge}</div>
    <div class="score-breakdown">
      <div class="score-row">
        <span class="score-row__label">Reading & Writing</span>
        <div class="score-row__bar"><div class="score-row__bar-fill" style="width:${pct(score.readingWriting, score.readingWritingMax)}%"></div></div>
        <span class="score-row__value mono">${score.readingWriting}</span>
      </div>
      <div class="score-row">
        <span class="score-row__label">Math</span>
        <div class="score-row__bar"><div class="score-row__bar-fill" style="width:${pct(score.math, score.mathMax)}%"></div></div>
        <span class="score-row__value mono">${score.math}</span>
      </div>
    </div>
  `;

  document.getElementById("score-target").innerHTML = `
    <span>Target score</span>
    <b>${fmt(score.target)}</b>
  `;
}

function pct(v, max) {
  return Math.round((v / max) * 100);
}

function renderGoalCard(data) {
  const g = data.todayGoal;
  const totalTarget = g.questionsTarget + g.vocabTarget + g.reviewTarget;
  const totalDone = g.questionsDone + g.vocabDone + g.reviewDone;
  const ringPct = Math.round((totalDone / totalTarget) * 100);

  const ring = radialGauge({
    value: totalDone,
    max: totalTarget,
    size: 74,
    stroke: 8,
    trackColor: "#EFEFF7",
    showText: false
  });
  document.getElementById("goal-ring").innerHTML = ring;

  document.getElementById("goal-progress-text").innerHTML =
    `<b>${ringPct}%</b> of today's goal complete`;

  const items = [
    { label: `${g.questionsTarget} questions`, done: g.questionsDone, target: g.questionsTarget },
    { label: `${g.vocabTarget} vocabulary words`, done: g.vocabDone, target: g.vocabTarget },
    { label: `Review ${g.reviewTarget} mistakes`, done: g.reviewDone, target: g.reviewTarget }
  ];

  document.getElementById("goal-list").innerHTML = items.map(it => `
    <div class="goal-item ${it.done >= it.target ? "is-done" : ""}">
      <div class="goal-item__check">${it.done >= it.target ? ICONS.check : ""}</div>
      <span>${it.label}</span>
      <span class="goal-item__count mono">${it.done}/${it.target}</span>
    </div>
  `).join("");
}

function renderWeakAreas(data) {
  document.getElementById("weak-list").innerHTML = data.weakAreas.map(w => {
    const tier = tierFor(w.accuracy);
    return `
      <div class="weak-item">
        <div class="weak-item__top">
          <span class="weak-item__name">${w.skill}</span>
          <span class="weak-item__pct tier-${tier} mono">${w.accuracy}%</span>
        </div>
        <div class="weak-item__bar"><div class="weak-item__bar-fill tier-${tier}" style="width:${w.accuracy}%"></div></div>
      </div>`;
  }).join("");
}

const STATUS_LABEL = {
  review: { text: "Needs Review", cls: "status-tag--review" },
  progress: { text: "In Progress", cls: "status-tag--progress" },
  fixed: { text: "Fixed", cls: "status-tag--fixed" }
};

function renderRecentMistakes(data) {
  document.getElementById("mistake-list").innerHTML = data.recentMistakes.map(m => {
    const s = STATUS_LABEL[m.status];
    return `
      <div class="mistake-row">
        <div>
          <div class="mistake-row__topic">${m.topic}</div>
          <div class="mistake-row__meta">${m.question} · ${m.errorType}</div>
        </div>
        <span class="status-tag ${s.cls}">${s.text}</span>
      </div>`;
  }).join("");
}

function renderTopbar(data) {
  document.getElementById("greeting-name").textContent = data.student.name;
  document.getElementById("streak-count").textContent = `${data.student.streakDays} Day Streak`;
  document.getElementById("xp-count").textContent = `${fmt(data.student.xp)} XP`;
}

function initDashboard() {
  renderSidebar("dashboard");
  const data = DASHBOARD_DATA;
  renderTopbar(data);
  renderScoreCard(data);
  renderGoalCard(data);
  renderWeakAreas(data);
  renderRecentMistakes(data);
}

document.addEventListener("DOMContentLoaded", initDashboard);
