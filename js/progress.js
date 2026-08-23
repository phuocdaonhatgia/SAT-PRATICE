/**
 * progress.js — drives progress.html (spec mục 17).
 * Accuracy and Skill Breakdown are both computed live from
 * GamificationService's answer stats — real questions the student has
 * actually submitted through Practice / Question sessions, not mock data.
 */

let gaugeUidProgress = 0;

function progressGauge({ value, max, size, stroke, color }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = c * (1 - pct);
  const cx = size / 2, cy = size / 2;
  const gradId = `pgauge-${gaugeUidProgress++}`;

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-soft)" stroke-width="${stroke}" />
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
      transform="rotate(-90 ${cx} ${cy})" />
    <text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="var(--font-mono)" font-size="16" font-weight="700" fill="var(--text-900)">${value}%</text>
  </svg>`;
}

function renderAccuracyGauges() {
  const overall = GamificationService.getOverallAccuracy();
  const rw = GamificationService.getSubjectAccuracy("reading-writing");
  const math = GamificationService.getSubjectAccuracy("math");

  if (overall === null) {
    document.getElementById("accuracy-row").innerHTML = `
      <div class="empty-state" style="grid-column:1/-1; padding:20px 10px;">
        <div class="empty-state__title">No data yet</div>
        <div class="empty-state__sub">Answer some practice questions and your accuracy will show up here.</div>
      </div>`;
    return;
  }

  document.getElementById("accuracy-row").innerHTML = `
    <div>
      ${progressGauge({ value: overall, max: 100, size: 100, stroke: 9, color: "var(--indigo-500)" })}
      <div class="accuracy-item__label">Overall</div>
    </div>
    <div>
      ${rw === null
        ? `<div class="accuracy-item__empty">—</div>`
        : progressGauge({ value: rw, max: 100, size: 100, stroke: 9, color: "var(--violet-500)" })}
      <div class="accuracy-item__label">Reading & Writing</div>
    </div>
    <div>
      ${math === null
        ? `<div class="accuracy-item__empty">—</div>`
        : progressGauge({ value: math, max: 100, size: 100, stroke: 9, color: "#2FB07E" })}
      <div class="accuracy-item__label">Math</div>
    </div>
  `;
}

function renderSkillBreakdown() {
  const mount = document.getElementById("skill-breakdown-list");
  const skills = GamificationService.getSkillAccuracyList(1); // already sorted weakest-first

  if (skills.length === 0) {
    mount.innerHTML = `
      <div class="empty-state" style="padding:16px 0;">
        <div class="empty-state__title">No practice data yet</div>
        <div class="empty-state__sub">Skills like Main Idea, Text Structure, or Linear Equations will show up here once you start answering questions.</div>
      </div>`;
    return;
  }

  mount.innerHTML = skills.map(s => {
    const tier = tierFor(s.accuracy);
    return `
      <div class="weak-item">
        <div class="weak-item__top">
          <span class="weak-item__name">${s.skill}</span>
          <span class="weak-item__pct tier-${tier} mono">${s.accuracy}% <span class="weak-item__n">(${s.correct}/${s.total})</span></span>
        </div>
        <div class="weak-item__bar"><div class="weak-item__bar-fill tier-${tier}" style="width:${s.accuracy}%"></div></div>
      </div>`;
  }).join("");
}

function initProgressPage() {
  renderSidebar("progress");
  renderAccuracyGauges();
  renderSkillBreakdown();
}

document.addEventListener("DOMContentLoaded", initProgressPage);
