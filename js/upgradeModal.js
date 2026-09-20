/**
 * upgradeModal.js — hiện bảng 3 gói Free / Pro / Plus khi user đụng vào
 * tính năng bị khoá. Chưa gắn cổng thanh toán thật — nút "Chọn gói" chỉ
 * demo-set field `plan` để test trạng thái khoá/mở khoá xuyên suốt app.
 *
 * SỬA: card gói hiện tại hiện rõ "Đang dùng" (màu đầy đủ), 2 card còn lại
 * xám đi. Bấm chọn gói khác -> card đó chuyển thành "Đang dùng" ngay
 * trong modal, sau đó tự tải lại trang để mọi tính năng khoá/mở trên toàn
 * bộ trang đều cập nhật đúng (không chỉ trang đang mở).
 */

const UpgradeModal = (() => {
  let mounted = false;

  function ensureMount() {
    if (mounted) return;
    const el = document.createElement("div");
    el.id = "upgrade-modal-backdrop";
    el.className = "upgrade-backdrop";
    el.innerHTML = `<div class="upgrade-modal" id="upgrade-modal"></div>`;
    document.body.appendChild(el);
    el.addEventListener("click", (e) => { if (e.target === el) hide(); });
    mounted = true;
  }

  function planCardHtml(planKey, currentPlan) {
    const p = PlanService.PLAN_META[planKey];
    const isCurrent = planKey === currentPlan;
    const featuresHtml = p.features.map(f => `<li>${f}</li>`).join("");

    const statusHtml = isCurrent
      ? `<div class="upgrade-card__status upgrade-card__status--current">✓ Đang dùng</div>`
      : `<div class="upgrade-card__status upgrade-card__status--inactive">Chưa dùng</div>`;

    let ctaHtml;
    if (isCurrent) {
      ctaHtml = `<button class="upgrade-cta upgrade-cta--current" disabled>Đang dùng</button>`;
    } else if (planKey === "free") {
      ctaHtml = `<button class="upgrade-cta upgrade-cta--ghost" data-plan="free">Chuyển về Free</button>`;
    } else {
      ctaHtml = `<button class="upgrade-cta" data-plan="${planKey}">Chọn gói ${p.label}</button>`;
    }

    return `
      <div class="upgrade-card ${p.highlight ? "is-highlight" : ""} ${isCurrent ? "is-current" : "is-inactive"}">
        ${p.highlight ? `<div class="upgrade-card__ribbon">Phổ biến nhất</div>` : ""}
        ${statusHtml}
        <div class="upgrade-card__name">${p.label}</div>
        <div class="upgrade-card__price">
          <span class="upgrade-card__amount">${p.priceLabel}</span>
          <span class="upgrade-card__period">${p.period}</span>
        </div>
        <div class="upgrade-card__tagline">${p.tagline}</div>
        <ul class="upgrade-card__features">${featuresHtml}</ul>
        ${ctaHtml}
      </div>`;
  }

  function show(featureKey, opts = {}) {
    ensureMount();
    const currentPlan = PlanService.getCurrentPlan();
    const feature = featureKey ? PlanService.FEATURE_META[featureKey] : null;

    const headline = feature
      ? `Tính năng "${feature.label}" cần gói ${PlanService.PLAN_META[feature.minPlan].label} trở lên`
      : "Chọn gói phù hợp với bạn";

    const modal = document.getElementById("upgrade-modal");
    modal.innerHTML = `
      <button class="upgrade-modal__close" id="upgrade-close" aria-label="Đóng">✕</button>
      <div class="upgrade-modal__head">
        <div class="upgrade-modal__title">${headline}</div>
        <div class="upgrade-modal__sub">Nâng cấp để mở khóa toàn bộ trải nghiệm luyện thi SAT.</div>
      </div>
      ${opts.justSwitched ? `<div class="upgrade-modal__flash">Đã chuyển sang gói ${PlanService.PLAN_META[currentPlan].label} ✓ — đang tải lại trang để áp dụng…</div>` : ""}
      <div class="upgrade-cards">
        ${["free", "pro", "plus"].map(k => planCardHtml(k, currentPlan)).join("")}
      </div>
      <div class="upgrade-modal__note">* Bản demo — chưa tích hợp cổng thanh toán thật. Chọn gói ở đây chỉ để thử trải nghiệm khoá/mở khoá tính năng.</div>
    `;

    modal.querySelector("#upgrade-close").addEventListener("click", hide);
    modal.querySelectorAll("[data-plan]").forEach(btn => {
      btn.addEventListener("click", async () => {
        modal.querySelectorAll("[data-plan]").forEach(b => b.disabled = true);
        btn.textContent = "Đang xử lý…";
        await PlanService.setPlanDemo(btn.dataset.plan);
        // Vẽ lại modal ngay để thấy card vừa chọn chuyển sang "Đang dùng",
        // rồi tải lại trang để áp dụng khoá/mở khoá trên toàn bộ trang.
        show(featureKey, { justSwitched: true });
        setTimeout(() => { location.reload(); }, 900);
      });
    });

    document.getElementById("upgrade-modal-backdrop").classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function hide() {
    const el = document.getElementById("upgrade-modal-backdrop");
    if (el) el.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  return { show, hide };
})();
