/**
 * progress.js — BẢN SỬA RACE CONDITION.
 *
 * Bug cũ: trang vẽ ngay lúc DOMContentLoaded, trong khi Firebase Auth còn
 * đang xác thực và Storage vẫn ở namespace rỗng ("") — nên nếu máy này từng
 * có dữ liệu luyện tập từ TRƯỚC KHI có hệ thống đăng nhập (namespace chưa
 * tồn tại), trang sẽ đọc nhầm đúng dữ liệu cũ đó trong một khoảnh khắc,
 * trước khi cloudSync kịp chuyển sang namespace riêng của tài khoản.
 *
 * Sửa: không vẽ lần đầu cho tới khi có ít nhất 1 sự kiện
 * "satpractice:changed" xảy ra — sự kiện này luôn được cloudSync bắn ra
 * ngay sau khi namespace được xác lập (dù đăng nhập cloud hay chạy local),
 * nên đảm bảo lần vẽ đầu tiên luôn dùng đúng dữ liệu của đúng tài khoản.
 * Có timeout dự phòng 1.5s để trang không bị trắng nếu vì lý do gì đó
 * event không bắn (ví dụ cloudSync.js lỡ không được nhúng vào trang).
 */

let gaugeUidProgress = 0;

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

/* ---------------- Accuracy ---------------- */

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

/* ---------------- Skill breakdown ---------------- */

function renderSkillBreakdown(snap) {
  const mount = document.getElementById("skill-breakdown-list");
  if (!mount) return;
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

  if (!est) {
    mount.innerHTML = emptyState(
      "Chưa có điểm ước tính",
      "Hoàn thành một phiên luyện tập để xem điểm SAT ước tính và xu hướng theo thời gian."
    );
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

/* ---------------- Error trends ---------------- */

function renderErrorTrends(snap) {
  const mount = document.getElementById("error-trend-mount");
  if (!mount) return;
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

/* ---------------- Render + realtime ---------------- */

function renderProgressPage() {
  const snap = ProgressService.getSnapshot();
  renderAccuracyGauges(snap);
  renderSkillBreakdown(snap);
  renderScoreTrend(snap);
  renderErrorTrends(snap);
}

function initProgressPage() {
  renderSidebar("progress");

  let hasRenderedOnce = false;
  function safeRender() {
    hasRenderedOnce = true;
    renderProgressPage();
  }

  // KHÔNG vẽ ngay ở đây. Chờ tín hiệu namespace đã sẵn sàng (event đầu tiên
  // mà cloudSync bắn ra sau khi biết chính xác đây là tài khoản nào), rồi
  // mới vẽ lần đầu — tránh đọc nhầm dữ liệu cũ trong lúc Firebase còn xác thực.
  document.addEventListener("satpractice:changed", safeRender);

  // Lưới an toàn: nếu vì lý do gì đó không có event nào bắn trong 1.5s
  // (ví dụ thiếu cloudSync.js), vẫn vẽ để trang không trắng mãi.
  setTimeout(() => { if (!hasRenderedOnce) safeRender(); }, 1500);
}

document.addEventListener("DOMContentLoaded", initProgressPage);
