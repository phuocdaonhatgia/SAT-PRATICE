/**
 * progress.js — drives progress.html (spec mục 17).
 * Score trend / baseline accuracy / skill breakdown come from the mock
 * PROGRESS_DATA (spec mục 28 "Sample progress data"). The current week's
 * mistake count in Error Trends is blended live from ErrorLogService so the
 * chart reacts to what the student has actually logged this session.
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

function renderScoreLineChart() {
  const points = PROGRESS_DATA.scoreProgress;
  const values = points.map(p => p.score);
  const min = Math.min(...values) - 30;
  const max = Math.max(...values) + 30;
  const W = 560, H = 180, PAD = 24;

  const coords = points.map((p, i) => {
    const x = PAD + (i / (points.length - 1)) * (W - PAD * 2);
    const y = H - PAD - ((p.score - min) / (max - min)) * (H - PAD * 2);
    return { x, y, score: p.score };
  });

  const linePath = coords.map((c, i) => (i === 0 ? "M" : "L") + c.x + "," + c.y).join(" ");
  const areaPath = linePath + ` L${coords[coords.length - 1].x},${H - PAD} L${coords[0].x},${H - PAD} Z`;

  const dots = coords.map(c => `
    <circle cx="${c.x}" cy="${c.y}" r="4.5" fill="var(--indigo-600)" stroke="white" stroke-width="2" />
    <text x="${c.x}" y="${c.y - 12}" text-anchor="middle" class="linechart-point-value">${c.score}</text>
  `).join("");

  document.getElementById("score-linechart").innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5B5FEF" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#5B5FEF" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path d="${areaPath}" fill="url(#areaGrad)" />
      <path d="${linePath}" fill="none" stroke="var(--indigo-500)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
      ${dots}
    </svg>
  `;

  document.getElementById("score-linechart-labels").innerHTML = points.map(p => `<span>${p.label}</span>`).join("");
}

function renderAccuracyGauges() {
  const a = PROGRESS_DATA.accuracy;
  document.getElementById("accuracy-row").innerHTML = `
    <div>
      ${progressGauge({ value: a.overall, max: 100, size: 100, stroke: 9, color: "var(--indigo-500)" })}
      <div class="accuracy-item__label">Overall</div>
    </div>
    <div>
      ${progressGauge({ value: a.readingWriting, max: 100, size: 100, stroke: 9, color: "var(--violet-500)" })}
      <div class="accuracy-item__label">Reading & Writing</div>
    </div>
    <div>
      ${progressGauge({ value: a.math, max: 100, size: 100, stroke: 9, color: "#2FB07E" })}
      <div class="accuracy-item__label">Math</div>
    </div>
  `;
}

function renderSkillBreakdown() {
  const mount = document.getElementById("skill-breakdown-list");
  const sorted = PROGRESS_DATA.skillBreakdown.slice().sort((a, b) => a.accuracy - b.accuracy);
  mount.innerHTML = sorted.map(s => {
    const tier = tierFor(s.accuracy);
    return `
      <div class="weak-item">
        <div class="weak-item__top">
          <span class="weak-item__name">${s.skill}</span>
          <span class="weak-item__pct tier-${tier} mono">${s.accuracy}%</span>
        </div>
        <div class="weak-item__bar"><div class="weak-item__bar-fill tier-${tier}" style="width:${s.accuracy}%"></div></div>
      </div>`;
  }).join("");
}

function renderErrorTrends() {
  const trends = PROGRESS_DATA.errorTrends.slice();
  const liveMistakesThisWeek = ErrorLogService.getAll().length;
  trends.push({ week: "This Week", mistakes: liveMistakesThisWeek, isLive: true });

  const max = Math.max(...trends.map(t => t.mistakes), 1);
  document.getElementById("errortrend-chart").innerHTML = trends.map(t => {
    const heightPct = Math.max((t.mistakes / max) * 100, 4);
    return `
      <div class="errortrend-col">
        <div class="errortrend-bar" style="height:${heightPct}%; ${t.isLive ? "background:linear-gradient(180deg, var(--success), #1a8f5a);" : ""}">
          <span class="errortrend-bar__value">${t.mistakes}</span>
        </div>
        <span class="errortrend-col__label">${t.week}${t.isLive ? " 🔴" : ""}</span>
      </div>
    `;
  }).join("");
}

function initProgressPage() {
  renderSidebar("progress");
  renderScoreLineChart();
  renderAccuracyGauges();
  renderSkillBreakdown();
  renderErrorTrends();
}

document.addEventListener("DOMContentLoaded", initProgressPage);
