/**
 * progressService.js — thay thế PROGRESS_DATA tĩnh trong js/data/progressData.js.
 *
 * Mọi con số ở đây đều tính từ hoạt động thật của học sinh:
 *   - accuracy / skill breakdown  <- GamificationService.answerStats
 *   - score trend                 <- sessionHistory (mỗi lần finish session)
 *   - error trends                <- ErrorLogService (mistake thật, gom theo tuần)
 *
 * Không có số mock nào. Khi chưa làm bài -> trả về mảng rỗng / null để UI
 * hiện empty state thay vì bịa số.
 */

const ProgressService = (() => {
  const HISTORY_KEY = "sessionHistory";

  /* ---------- ghi lại 1 phiên luyện tập ---------- */

  /**
   * Gọi khi học sinh bấm Finish ở question.html.
   * @param {{total:number, answered:number, correct:number, bySkill:Object, meta:Object}} result
   */
  function recordSessionResult(result) {
    const entry = {
      id: "sess-" + Date.now(),
      date: new Date().toISOString(),
      total: result.total,
      answered: result.answered,
      correct: result.correct,
      accuracy: result.answered ? Math.round((result.correct / result.answered) * 100) : 0,
      bySubject: result.bySubject || {},
      label: (result.meta && result.meta.label) || "Practice"
    };
    Storage.push(HISTORY_KEY, entry);
    return entry;
  }

  function getHistory() {
    return Storage.get(HISTORY_KEY, []);
  }

  /* ---------- điểm SAT ước tính ---------- */

  /**
   * Quy đổi accuracy -> điểm section (200-800), làm tròn bội số 10.
   * Đây là ƯỚC TÍNH thô để thấy xu hướng, không phải điểm scaled thật của
   * College Board (điểm thật phụ thuộc độ khó adaptive module 2).
   */
  function accuracyToSection(accuracy) {
    if (accuracy === null || accuracy === undefined) return null;
    const raw = 200 + (accuracy / 100) * 600;
    return Math.round(raw / 10) * 10;
  }

  /** Điểm tổng ước tính hiện tại, hoặc null nếu chưa có dữ liệu. */
  function getEstimatedScore() {
    const overall = GamificationService.getOverallAccuracy();
    if (overall === null) return null;
    const rw = GamificationService.getSubjectAccuracy("reading-writing");
    const math = GamificationService.getSubjectAccuracy("math");
    const rwScore = accuracyToSection(rw === null ? overall : rw);
    const mathScore = accuracyToSection(math === null ? overall : math);
    return { total: rwScore + mathScore, readingWriting: rwScore, math: mathScore };
  }

  /**
   * Xu hướng điểm theo thời gian: accuracy cộng dồn sau mỗi phiên -> điểm.
   * Dùng cộng dồn (chứ không phải từng phiên riêng lẻ) cho đường mượt và
   * phản ánh đúng "trình hiện tại".
   */
  function getScoreTrend() {
    const history = getHistory();
    if (history.length === 0) return [];

    let cumCorrect = 0, cumAnswered = 0;
    return history.map(s => {
      cumCorrect += s.correct;
      cumAnswered += s.answered;
      const acc = cumAnswered ? (cumCorrect / cumAnswered) * 100 : 0;
      return {
        label: new Date(s.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
        score: accuracyToSection(acc) * 2,
        accuracy: Math.round(acc)
      };
    });
  }

  /* ---------- lỗi theo tuần ---------- */

  function weekKey(iso) {
    const d = new Date(iso);
    const day = (d.getDay() + 6) % 7;          // thứ 2 = 0
    const monday = new Date(d);
    monday.setDate(d.getDate() - day);
    monday.setHours(0, 0, 0, 0);
    return monday.toISOString().slice(0, 10);
  }

  /** Số lỗi thật mỗi tuần, 6 tuần gần nhất. */
  function getErrorTrends(weeks = 6) {
    if (typeof ErrorLogService === "undefined") return [];
    const all = ErrorLogService.getAll();
    if (all.length === 0) return [];

    const buckets = {};
    all.forEach(e => {
      const k = weekKey(e.createdAt);
      buckets[k] = (buckets[k] || 0) + 1;
    });

    return Object.keys(buckets).sort().slice(-weeks).map(k => ({
      week: new Date(k).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
      mistakes: buckets[k]
    }));
  }

  /* ---------- tổng hợp cho trang Progress ---------- */

  function getSnapshot() {
    return {
      estimatedScore: getEstimatedScore(),
      scoreTrend: getScoreTrend(),
      accuracy: {
        overall: GamificationService.getOverallAccuracy(),
        readingWriting: GamificationService.getSubjectAccuracy("reading-writing"),
        math: GamificationService.getSubjectAccuracy("math")
      },
      skillBreakdown: GamificationService.getSkillAccuracyList(1),
      errorTrends: getErrorTrends(),
      totalAnswered: GamificationService.getStats().totalAnswered,
      sessions: getHistory().length
    };
  }

  return {
    recordSessionResult, getHistory,
    getEstimatedScore, getScoreTrend, getErrorTrends, getSnapshot,
    accuracyToSection
  };
})();
