/**
 * progress.js
 *
 * SỬA (tính năng Pro/Plus) trên nền bản đã sửa race condition trước đó:
 *  - Accuracy (tổng quan) vẫn Free.
 *  - Skill Breakdown, biểu đồ Score Trend (lịch sử), Error Trends -> Pro
 *    ("Theo dõi tiến bộ nâng cao" / "Phân tích lỗi sai chi tiết").
 *  - Advanced Analytics (xu hướng theo môn) + nút "Xuất báo cáo chi tiết"
 *    -> Plus.
 * Điểm ước tính hiện tại (1 con số) vẫn hiện cho Free — chỉ phần LỊCH SỬ
 * (biểu đồ) bị khoá, để free vẫn thấy "theo dõi điểm" như đã hứa.
 */

function progressGauge({ value, max, size, stroke, color }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = c * (1 - pct);
  const cx = size / 2, cy = size / 2;

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border-soft)" stroke-width="${stroke}" />
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"
      transform="rotate(-90 ${cx} ${cy})" />
    <text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="var(--font-mono)" font-size="16" font-weight="700" fill="var(--text-900)">${value}%</text>
  </svg>`;
}

function emptyState(title, sub, pad = "16px 0") {
  return `
    <div class="empty-state" style="padding:${pad};">
      <div class="empty-state__title">${title}</div>
      <div class="empty-state__sub">${sub}</div>
    </div>`;
}

function lockedTeaser(title, sub, featureKey) {
  return `
    <div class="locked-panel" style="padding:26px 10px;">
      <div class="locked-panel__icon">🔒</div>
      <div class="locked-panel__title">${title}</div>
      <div class="locked-panel__sub">${sub}</div>
      <button class="locked-panel__btn" data-gate="${featureKey}">Xem các gói</button>
    </div>`;
}

function wireLockButtons(root) {
  root.querySelectorAll("[data-gate]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (typeof PlanService !== "undefined") PlanService.gate(btn.dataset.gate);
    });
  });
}

/* ---------------- Accuracy (Free) ---------------- */

function renderAccuracyGauges(snap) {
  const mount = document.getElementById("accuracy-row");
  if (!mount) return;
  const { overall, readingWriting: rw, math } = snap.accuracy;

  if (overall === null) {
    mount.innerHTML = emptyState(
      "Chưa có dữ liệu",
      "Làm vài câu luyện tập đi, độ chính xác sẽ hiện ở đây.",
      "20px 10px"
    );
    mount.firstElementChild.style.gridColumn = "1/-1";
    return;
  }

  mount.innerHTML = `
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

/* ---------------- Skill Breakdown (Pro) ---------------- */

function renderSkillBreakdown(snap) {
  const mount = document.getElementById("skill-breakdown-list");
  if (!mount) return;

  if (typeof PlanService !== "undefined" && !PlanService.canUseFeature("progress-advanced")) {
    mount.innerHTML = lockedTeaser(
      "Skill Breakdown là tính năng Pro",
      "Xem chi tiết độ chính xác theo từng kỹ năng (Main Idea, Linear Equations...) với gói Pro.",
      "progress-advanced"
    );
    wireLockButtons(mount);
    return;
  }

  const skills = snap.skillBreakdown;
  if (skills.length === 0) {
    mount.innerHTML = emptyState(
      "Chưa có dữ liệu luyện tập",
      "Các kỹ năng như Main Idea, Text Structure hay Linear Equations sẽ hiện ở đây khi bạn bắt đầu làm bài."
    );
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

/* ---------------- Estimated score + trend ---------------- */

function lineChart(points, { w = 520, h = 180, pad = 28, color = "var(--indigo-500)", min, max }) {
  if (points.length === 0) return "";
  const ys = points.map(p => p.score);
  const lo = min !== undefined ? min : Math.min(...ys) - 40;
  const hi = max !== undefined ? max : Math.max(...ys) + 40;
  const span = Math.max(hi - lo, 1);

  const x = i => pad + (points.length === 1 ? (w - 2 * pad) / 2 : (i * (w - 2 * pad)) / (points.length - 1));
  const y = v => h - pad - ((v - lo) / span) * (h - 2 * pad);

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.score).toFixed(1)}`).join(" ");
  const area = `${path} L${x(points.length - 1).toFixed(1)},${h - pad} L${x(0).toFixed(1)},${h - pad} Z`;

  const dots = points.map((p, i) => `
    <circle cx="${x(i).toFixed(1)}" cy="${y(p.score).toFixed(1)}" r="4" fill="var(--surface)" stroke="${color}" stroke-width="2.5">
      <title>${p.label}: ${p.score} (${p.accuracy}% đúng)</title>
    </circle>`).join("");

  const labels = points.map((p, i) => `
    <text x="${x(i).toFixed(1)}" y="${h - 8}" text-anchor="middle"
      font-family="var(--font-mono)" font-size="10" fill="var(--text-400)">${p.label}</text>`).join("");

  return `
  <svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none" style="overflow:visible;">
    <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="var(--border-soft)" stroke-width="1"/>
    <path d="${area}" fill="${color}" opacity="0.08"/>
    <path d="${path}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}${labels}
  </svg>`;
}

function renderScoreTrend(snap) {
  const mount = document.getElementById("score-trend-mount");
  if (!mount) return;

  const est = snap.estimatedScore;
  const trend = snap.scoreTrend;
  const isPro = typeof PlanService === "undefined" || PlanService.canUseFeature("progress-advanced");

  if (!est) {
    mount.innerHTML = emptyState(
      "Chưa có điểm ước tính",
      "Hoàn thành một phiên luyện tập để xem điểm SAT ước tính."
    );
    return;
  }

  // Con số hiện tại luôn hiện cho Free — chỉ phần lịch sử/biểu đồ bị khoá.
  const headHtml = `
    <div class="score-head">
      <div>
        <div class="score-big mono">${est.total}</div>
        <div class="score-caption">Điểm ước tính · RW ${est.readingWriting} · Math ${est.math}</div>
      </div>
    </div>`;

  if (!isPro) {
    mount.innerHTML = headHtml + lockedTeaser(
      "Xu hướng điểm số là tính năng Pro",
      "Xem biểu đồ điểm ước tính thay đổi theo từng phiên luyện tập với gói Pro.",
      "progress-advanced"
    );
    wireLockButtons(mount);
    return;
  }

  const delta = trend.length >= 2 ? trend[trend.length - 1].score - trend[0].score : 0;
  const deltaHtml = trend.length >= 2
    ? `<span class="score-delta ${delta >= 0 ? "is-up" : "is-down"} mono">${delta >= 0 ? "▲" : "▼"} ${Math.abs(delta)}</span>`
    : "";

  mount.innerHTML = `
    <div class="score-head">
      <div>
        <div class="score-big mono">${est.total}</div>
        <div class="score-caption">Điểm ước tính · RW ${est.readingWriting} · Math ${est.math}</div>
      </div>
      ${deltaHtml}
    </div>
    ${trend.length >= 2
      ? lineChart(trend, {})
      : `<div class="score-caption" style="margin-top:12px;">Làm thêm một phiên nữa để vẽ được đường xu hướng.</div>`}
    <div class="score-note">Ước tính từ ${snap.totalAnswered} câu đã làm. Đây là con số tham khảo để theo dõi tiến bộ, không phải điểm scaled chính thức.</div>
  `;
}

/* ---------------- Error trends (Pro) ---------------- */

function renderErrorTrends(snap) {
  const mount = document.getElementById("error-trend-mount");
  if (!mount) return;

  if (typeof PlanService !== "undefined" && !PlanService.canUseFeature("progress-advanced")) {
    mount.innerHTML = lockedTeaser(
      "Error Trends là tính năng Pro",
      "Theo dõi số lỗi sai theo từng tuần để biết mình đang cải thiện hay chững lại.",
      "progress-advanced"
    );
    wireLockButtons(mount);
    return;
  }

  const data = snap.errorTrends;
  if (data.length === 0) {
    mount.innerHTML = emptyState("Chưa có lỗi nào được ghi", "Làm sai câu nào là nó tự vào Error Log, rồi thống kê theo tuần sẽ hiện ở đây.");
    return;
  }

  const maxV = Math.max(...data.map(d => d.mistakes), 1);
  mount.innerHTML = `
    <div class="err-bars">
      ${data.map(d => `
        <div class="err-bar">
          <div class="err-bar__col">
            <div class="err-bar__fill" style="height:${Math.round((d.mistakes / maxV) * 100)}%"></div>
          </div>
          <div class="err-bar__val mono">${d.mistakes}</div>
          <div class="err-bar__label">${d.week}</div>
        </div>`).join("")}
    </div>`;
}

/* ---------------- Advanced Analytics (Plus): xu hướng theo môn ---------------- */

function renderAdvancedAnalytics() {
  const mount = document.getElementById("advanced-analytics-mount");
  if (!mount) return;

  if (typeof PlanService !== "undefined" && !PlanService.canUseFeature("advanced-analytics")) {
    mount.innerHTML = lockedTeaser(
      "Advanced Analytics là tính năng Plus",
      "So sánh xu hướng độ chính xác Reading & Writing và Math qua từng phiên luyện tập.",
      "advanced-analytics"
    );
    wireLockButtons(mount);
    return;
  }

  const history = ProgressService.getHistory();
  const points = history
    .filter(s => s.bySubject && (s.bySubject["reading-writing"] || s.bySubject["math"]))
    .map(s => {
      const rw = s.bySubject["reading-writing"];
      const math = s.bySubject["math"];
      return {
        label: new Date(s.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
        rw: rw && rw.total ? Math.round((rw.correct / rw.total) * 100) : null,
        math: math && math.total ? Math.round((math.correct / math.total) * 100) : null
      };
    });

  if (points.length < 2) {
    mount.innerHTML = emptyState("Chưa đủ dữ liệu", "Làm thêm vài phiên luyện tập có cả Reading & Writing lẫn Math để thấy xu hướng so sánh.");
    return;
  }

  const rwPts = points.filter(p => p.rw !== null).map((p, i) => ({ label: p.label, score: p.rw, accuracy: p.rw }));
  const mathPts = points.filter(p => p.math !== null).map((p, i) => ({ label: p.label, score: p.math, accuracy: p.math }));

  mount.innerHTML = `
    <div style="display:flex; gap:16px; margin-bottom:8px; font-size:12px;">
      <span style="color:var(--violet-500); font-weight:700;">● Reading & Writing</span>
      <span style="color:#2FB07E; font-weight:700;">● Math</span>
    </div>
    ${lineChart(rwPts.length >= 2 ? rwPts : points.map(p => ({ label: p.label, score: p.rw || 0, accuracy: p.rw || 0 })), { color: "var(--violet-500)", min: 0, max: 100 })}
    ${lineChart(mathPts.length >= 2 ? mathPts : points.map(p => ({ label: p.label, score: p.math || 0, accuracy: p.math || 0 })), { color: "#2FB07E", min: 0, max: 100 })}
    <div class="score-note">Độ chính xác (%) theo môn qua từng phiên luyện tập gần đây.</div>
  `;
}

/* ---------------- Báo cáo tiến độ chi tiết (Plus) ---------------- */

function buildReportText(snap) {
  const est = snap.estimatedScore;
  const lines = [];
  lines.push(`<h3>Tổng quan</h3>`);
  lines.push(`<p>Tổng số câu đã làm: <b>${snap.totalAnswered}</b> · Số phiên luyện tập: <b>${snap.sessions}</b></p>`);
  if (est) {
    lines.push(`<p>Điểm ước tính hiện tại: <b>${est.total}</b> (RW ${est.readingWriting} · Math ${est.math})</p>`);
  }
  lines.push(`<h3>Độ chính xác</h3>`);
  lines.push(`<p>Tổng: <b>${snap.accuracy.overall ?? "—"}%</b> · Reading & Writing: <b>${snap.accuracy.readingWriting ?? "—"}%</b> · Math: <b>${snap.accuracy.math ?? "—"}%</b></p>`);
  if (snap.skillBreakdown.length > 0) {
    lines.push(`<h3>Kỹ năng cần cải thiện nhất</h3><ul>`);
    snap.skillBreakdown.slice(0, 5).forEach(s => {
      lines.push(`<li>${s.skill}: ${s.accuracy}% (${s.correct}/${s.total})</li>`);
    });
    lines.push(`</ul>`);
  }
  if (snap.errorTrends.length > 0) {
    const total = snap.errorTrends.reduce((a, d) => a + d.mistakes, 0);
    lines.push(`<h3>Lỗi sai</h3><p>${total} lỗi được ghi trong ${snap.errorTrends.length} tuần gần đây.</p>`);
  }
  return lines.join("");
}

function openReportModal(snap) {
  let el = document.getElementById("report-modal-backdrop");
  if (!el) {
    el = document.createElement("div");
    el.id = "report-modal-backdrop";
    el.className = "report-modal-backdrop";
    el.innerHTML = `<div class="report-modal" id="report-modal"></div>`;
    document.body.appendChild(el);
    el.addEventListener("click", (e) => { if (e.target === el) el.classList.remove("is-open"); });
  }
  document.getElementById("report-modal").innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
      <b>Báo cáo tiến độ chi tiết</b>
      <button id="report-close-btn" style="border:none; background:none; cursor:pointer; font-size:16px;">✕</button>
    </div>
    ${buildReportText(snap)}
    <div class="report-modal__actions">
      <button class="btn btn--primary" id="report-print-btn">In / Lưu PDF</button>
      <button class="btn btn--secondary" id="report-close-btn2">Đóng</button>
    </div>
  `;
  document.getElementById("report-close-btn").addEventListener("click", () => el.classList.remove("is-open"));
  document.getElementById("report-close-btn2").addEventListener("click", () => el.classList.remove("is-open"));
  document.getElementById("report-print-btn").addEventListener("click", () => window.print());
  el.classList.add("is-open");
}

function wireDetailedReportButton() {
  const btn = document.getElementById("detailed-report-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (typeof PlanService !== "undefined") {
      PlanService.gate("detailed-report", () => openReportModal(ProgressService.getSnapshot()));
    } else {
      openReportModal(ProgressService.getSnapshot());
    }
  });
}

/* ---------------- Render + realtime ---------------- */

function renderProgressPage() {
  const snap = ProgressService.getSnapshot();
  renderAccuracyGauges(snap);
  renderSkillBreakdown(snap);
  renderScoreTrend(snap);
  renderErrorTrends(snap);
  renderAdvancedAnalytics();
}

function initProgressPage() {
  renderSidebar("progress");
  wireDetailedReportButton();

  let hasRenderedOnce = false;
  let planIsReady = typeof PlanService === "undefined"; // không có PlanService thì đừng treo mãi
  function safeRender() {
    if (!planIsReady) return; // đợi biết chắc gói trước khi vẽ lần đầu
    hasRenderedOnce = true;
    renderProgressPage();
  }

  if (typeof PlanService !== "undefined") {
    PlanService.whenReady(() => { planIsReady = true; safeRender(); });
  }

  document.addEventListener("satpractice:changed", safeRender);
  document.addEventListener("satpractice:planchanged", safeRender);
  setTimeout(() => { planIsReady = true; if (!hasRenderedOnce) safeRender(); }, 1500);
}

document.addEventListener("DOMContentLoaded", initProgressPage);
