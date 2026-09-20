/**
 * planService.js — Free / Pro / Plus.
 *
 * Nguồn sự thật cho gói hiện tại: field `plan` trên profile Firestore
 * (users/{uid}.plan), cache trong AuthService.getUser().plan. Mặc định
 * "free" nếu chưa có.
 *
 * Đây KHÔNG phải hệ thống thanh toán thật — setPlanDemo() chỉ ghi thẳng
 * field `plan` để bạn demo/test trạng thái khoá-mở khoá. Khi làm thanh
 * toán thật (Stripe/VNPay/Momo...), thay phần bên trong setPlanDemo()
 * bằng luồng checkout thật rồi mới set plan sau khi thanh toán thành công
 * (tốt nhất là set qua Cloud Function / webhook, không set từ client).
 */

const PlanService = (() => {
  const RANK = { free: 0, pro: 1, plus: 2 };

  const PLAN_META = {
    free: {
      key: "free",
      label: "Free",
      price: 0,
      priceLabel: "0đ",
      period: "",
      tagline: "Bắt đầu làm quen với luyện thi SAT",
      features: [
        "Câu hỏi SAT cơ bản",
        "Vocabulary cơ bản",
        "Theo dõi điểm & tiến độ",
        "Streak học tập"
      ]
    },
    pro: {
      key: "pro",
      label: "Pro",
      price: 99000,
      priceLabel: "99.000đ",
      period: "/tháng",
      tagline: "Luyện tập không giới hạn",
      highlight: true,
      features: [
        "Mở khóa toàn bộ câu hỏi",
        "Vocabulary nâng cao",
        "Phân tích lỗi sai chi tiết",
        "Theo dõi tiến bộ nâng cao",
        "Mock Test"
      ]
    },
    plus: {
      key: "plus",
      label: "Plus",
      price: 199000,
      priceLabel: "199.000đ",
      period: "/tháng",
      tagline: "Chuẩn bị SAT toàn diện, có định hướng",
      features: [
        "Tất cả tính năng Pro",
        "Bộ đề SAT chuyên sâu",
        "Personalized Study Plan",
        "Advanced Analytics",
        "Báo cáo tiến độ chi tiết"
      ]
    }
  };

  /** Mỗi feature cần plan tối thiểu nào. Dùng cho UpgradeModal hiển thị đúng ngữ cảnh. */
  const FEATURE_META = {
    "questions-full": { minPlan: "pro", label: "Mở khóa toàn bộ câu hỏi" },
    "vocab-advanced": { minPlan: "pro", label: "Vocabulary nâng cao" },
    "errorlog-detail": { minPlan: "pro", label: "Phân tích lỗi sai chi tiết" },
    "progress-advanced": { minPlan: "pro", label: "Theo dõi tiến bộ nâng cao" },
    "mock-test": { minPlan: "pro", label: "Mock Test" },
    "deep-sets": { minPlan: "plus", label: "Bộ đề SAT chuyên sâu" },
    "study-plan": { minPlan: "plus", label: "Personalized Study Plan" },
    "advanced-analytics": { minPlan: "plus", label: "Advanced Analytics" },
    "detailed-report": { minPlan: "plus", label: "Báo cáo tiến độ chi tiết" }
  };

  function getCurrentPlan() {
    const user = (typeof AuthService !== "undefined") ? AuthService.getUser() : null;
    return (user && user.plan) || "free";
  }

  function rankOf(plan) { return RANK[plan] ?? 0; }

  /** true nếu gói hiện tại >= minPlan (free < pro < plus). */
  function isAtLeast(minPlan) {
    return rankOf(getCurrentPlan()) >= rankOf(minPlan);
  }

  function canUseFeature(featureKey) {
    const meta = FEATURE_META[featureKey];
    if (!meta) return true; // feature không được khai báo -> mặc định mở
    return isAtLeast(meta.minPlan);
  }

  /** Free chỉ được câu hỏi/từ vựng "easy". Pro/Plus được tất cả. */
  function canAccessDifficulty(difficulty) {
    if (isAtLeast("pro")) return true;
    return difficulty === "easy";
  }

  /**
   * Lọc danh sách question id theo độ khó được phép của gói hiện tại.
   * Nếu lọc xong rỗng nhưng đầu vào không rỗng (free chọn toàn Medium/Hard),
   * fail-open trả nguyên bản để không tạo session rỗng gây lỗi — nơi gọi
   * (practice.js/practiceTests.js) nên tự chặn từ UI bằng cách khoá chip
   * Medium/Hard cho free thay vì để rơi vào trường hợp này.
   */
  function filterQuestionIds(ids) {
    if (isAtLeast("pro")) return ids;
    if (typeof QuestionProvider === "undefined") return ids;
    const filtered = ids.filter(id => {
      const q = QuestionProvider.getQuestionById(id);
      return !q || canAccessDifficulty(q.difficulty);
    });
    return filtered.length > 0 ? filtered : ids;
  }

  /**
   * Gọi khi user cố dùng 1 tính năng bị khoá. Nếu đủ quyền -> chạy onAllowed()
   * và trả true. Nếu không -> mở paywall và trả false.
   */
  function gate(featureKey, onAllowed) {
    if (canUseFeature(featureKey)) {
      if (onAllowed) onAllowed();
      return true;
    }
    if (typeof UpgradeModal !== "undefined") UpgradeModal.show(featureKey);
    return false;
  }

  /** DEMO ONLY — xem comment đầu file. */
  async function setPlanDemo(plan) {
    if (!PLAN_META[plan]) return;
    if (typeof AuthService === "undefined") return;
    const user = AuthService.getUser();
    if (!user) return;
    await AuthService.saveProfile(user, { plan });
    user.plan = plan; // cập nhật cache cục bộ ngay, khỏi chờ vòng onAuthStateChanged
    document.dispatchEvent(new CustomEvent("satpractice:planchanged", { detail: { plan } }));
    paintSidebarBadge();
  }

  /* ---------- badge nhỏ ở sidebar hiện gói hiện tại ---------- */

  function paintSidebarBadge() {
    const footer = document.querySelector(".sidebar__footer");
    if (!footer) return;
    let badge = document.getElementById("plan-badge");
    if (!badge) {
      badge = document.createElement("button");
      badge.id = "plan-badge";
      badge.type = "button";
      badge.className = "plan-badge";
      footer.appendChild(badge);
      badge.addEventListener("click", () => {
        if (typeof UpgradeModal !== "undefined") UpgradeModal.show(null);
      });
    }
    const plan = getCurrentPlan();
    badge.className = "plan-badge plan-badge--" + plan;
    badge.innerHTML = plan === "free"
      ? `Gói Free · <span class="plan-badge__cta">Nâng cấp</span>`
      : `Gói ${PLAN_META[plan].label} <span class="plan-badge__cta">Quản lý</span>`;
  }

  /* ---------- sẵn sàng: đợi biết chắc user + plan trước khi trang nào
     đó dùng canAccessDifficulty/canUseFeature để vẽ UI lần đầu ---------- */

  let planReady = false;
  const readyWaiters = [];

  function isPlanReady() { return planReady; }

  /** Gọi cb ngay nếu đã biết plan; nếu chưa, đợi tới khi AuthService xác
   * định xong user (dù có hay không). Dùng cái này bọc quanh MỌI lần vẽ
   * UI đầu tiên phụ thuộc plan, để tránh flash sai gói lúc Firebase còn
   * đang xác thực. */
  function whenReady(cb) {
    if (planReady) { cb(); return; }
    readyWaiters.push(cb);
  }

  function markReady() {
    planReady = true;
    readyWaiters.splice(0).forEach(cb => { try { cb(); } catch (e) { console.error(e); } });
    document.dispatchEvent(new CustomEvent("satpractice:planready"));
  }

  function init() {
    if (typeof AuthService !== "undefined") {
      AuthService.onUser(() => {
        markReady();
        setTimeout(paintSidebarBadge, 0);
      });
    } else {
      markReady(); // không có AuthService (không nên xảy ra) -> đừng treo UI mãi
    }
    document.addEventListener("satpractice:planchanged", paintSidebarBadge);
    document.addEventListener("DOMContentLoaded", () => setTimeout(paintSidebarBadge, 0));
  }
  init();

  return {
    PLAN_META, FEATURE_META,
    getCurrentPlan, isAtLeast, canUseFeature, canAccessDifficulty,
    filterQuestionIds, gate, setPlanDemo, paintSidebarBadge,
    isPlanReady, whenReady
  };
})();
