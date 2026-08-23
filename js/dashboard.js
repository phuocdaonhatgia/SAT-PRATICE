/**
 * dashboard.js — renders every dynamic piece of index.html.
 * Score card removed. Today's Goal, Weak Areas, Recent Mistakes, and the
 * streak pill are all computed live from GamificationService / ErrorLogService
 * instead of static mock numbers.
 */

let gaugeUid = 0;

function radialGauge({ value, max, size, stroke, subLabel, trackColor, showText = true }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = max > 0 ? Math.min(value / max, 1) : 0;
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

function pct(v, max) {
  return Math.round((v / max) * 100);
}

/** Today's Goal — real progress: questions answered / vocab marked known /
 *  mistakes reviewed, all scoped to today via GamificationService. Reaching
 *  a target auto-ticks + strikes through that item (CSS: .goal-item.is-done). */
function renderGoalCard(data) {
  const g = data.todayGoal;
  const activity = (typeof GamificationService !== "undefined")
    ? GamificationService.getTodayActivity()
    : { questionsAnswered: 0, vocabKnown: 0, mistakesReviewed: 0 };

  const items = [
    { label: `${g.questionsTarget} questions`, done: activity.questionsAnswered, target: g.questionsTarget },
    { label: `${g.vocabTarget} vocabulary words`, done: activity.vocabKnown, target: g.vocabTarget },
    { label: `Review ${g.reviewTarget} mistakes`, done: activity.mistakesReviewed, target: g.reviewTarget }
  ];

  const totalTarget = items.reduce((s, it) => s + it.target, 0);
  const totalDone = items.reduce((s, it) => s + Math.min(it.done, it.target), 0);
  const ringPct = totalTarget > 0 ? Math.round((totalDone / totalTarget) * 100) : 0;

  const ring = radialGauge({
    value: totalDone,
    max: totalTarget,
    size: 84,
    stroke: 9,
    trackColor: "#EFEFF7",
    showText: false
  });
  document.getElementById("goal-ring").innerHTML = ring;
  document.getElementById("goal-pct-badge").textContent = `${ringPct}%`;

  document.getElementById("goal-progress-text").innerHTML =
    `<b>${ringPct}%</b> of today's goal complete`;

  document.getElementById("goal-list").innerHTML = items.map(it => `
    <div class="goal-item ${it.done >= it.target ? "is-done" : ""}">
      <div class="goal-item__check">${it.done >= it.target ? ICONS.check : ""}</div>
      <span>${it.label}</span>
      <span class="goal-item__count mono">${Math.min(it.done, it.target)}/${it.target}</span>
    </div>
  `).join("");
}

/** Weak Areas — real accuracy per skill from GamificationService, computed
 *  from questions the student has actually answered (not assigned data). */
function renderWeakAreas() {
  const mount = document.getElementById("weak-list");
  const list = (typeof GamificationService !== "undefined") ? GamificationService.getSkillAccuracyList(3) : [];

  if (list.length === 0) {
    mount.innerHTML = `
      <div class="empty-state" style="padding:10px 0;">
        <div class="empty-state__title">Not enough data yet</div>
        <div class="empty-state__sub">Answer a few more practice questions per skill and your weakest areas will show up here.</div>
      </div>`;
    return;
  }

  mount.innerHTML = list.slice(0, 4).map(w => {
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

/** Recent Mistakes — pulled straight from the real Error Log. */
function renderRecentMistakes() {
  const mount = document.getElementById("mistake-list");
  const all = (typeof ErrorLogService !== "undefined") ? ErrorLogService.getAll().slice().reverse() : [];
  const recent = all.slice(0, 4);

  if (recent.length === 0) {
    mount.innerHTML = `
      <div class="empty-state" style="padding:10px 0;">
        <div class="empty-state__title">No mistakes logged yet</div>
        <div class="empty-state__sub">Wrong answers from Practice sessions show up here automatically.</div>
      </div>`;
    return;
  }

  mount.innerHTML = recent.map(m => {
    const s = STATUS_LABEL[m.status] || STATUS_LABEL.review;
    return `
      <div class="mistake-row">
        <div>
          <div class="mistake-row__topic">${m.skill}</div>
          <div class="mistake-row__meta">${m.domain} · ${m.errorType || "Not yet reviewed"}</div>
        </div>
        <span class="status-tag ${s.cls}">${s.text}</span>
      </div>`;
  }).join("");
}

function renderTopbar(data) {
  document.getElementById("greeting-name").textContent = data.student.name;
  const liveStreak = (typeof GamificationService !== "undefined") ? GamificationService.getStreak() : { count: 0 };
  document.getElementById("streak-count").textContent = `${liveStreak.count} Day Streak`;
}

const BADGE_ICONS = {
  "grammar-master": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>`,
  "inference-hunter": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  "math-grinder": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v4H4z"/><path d="M6 12h.01M6 16h.01M10 12h4M10 16h4M18 12v4"/></svg>`,
  "error-log-pro": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>`
};

function renderBadges() {
  const mount = document.getElementById("badges-row");
  if (!mount || typeof GamificationService === "undefined") return;
  const badges = GamificationService.getAllBadgesWithStatus();
  mount.innerHTML = badges.map(b => `
    <div class="badge-tile ${b.unlocked ? "is-unlocked" : ""}" title="${b.description}">
      <div class="badge-tile__icon">${BADGE_ICONS[b.key] || ""}</div>
      <div class="badge-tile__label">${b.label}</div>
    </div>
  `).join("");
}

function renderRecommendation() {
  const mount = document.getElementById("recommendation-mount");
  if (!mount || typeof RecommendationService === "undefined") return;
  const rec = RecommendationService.generateRecommendation();
  mount.innerHTML = `
    <div class="card__head"><span class="card__title">Recommended For You</span></div>
    <p style="font-size:14px; font-weight:600; margin-bottom:14px;">${rec.headline}</p>
    <ol style="margin:0 0 18px; padding-left:20px; display:flex; flex-direction:column; gap:8px; font-size:13.5px; color:var(--text-600);">
      ${rec.steps.map(s => `<li>${s}</li>`).join("")}
    </ol>
    <a class="btn btn--primary btn--block" href="${rec.ctaHref}">${rec.ctaLabel}</a>
  `;
}

function initDashboard() {
  renderSidebar("dashboard");
  const data = DASHBOARD_DATA;
  renderTopbar(data);
  renderGoalCard(data);
  renderWeakAreas();
  renderRecentMistakes();
  renderBadges();
  renderRecommendation();
}

document.addEventListener("DOMContentLoaded", initDashboard);
