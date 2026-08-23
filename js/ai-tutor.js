/**
 * ai-tutor.js — drives ai-tutor.html (spec mục 8).
 */

let tutorContext = null;   // { question, answerState } | null
let tutorContextId = "general";
let tutorHistory = [];

function resolveContext() {
  const params = new URLSearchParams(window.location.search);
  const questionId = params.get("questionId");
  if (!questionId) return null;

  const question = QuestionProvider.getQuestionById(questionId);
  if (!question) return null;

  let answerState = null;
  const session = SessionManager.getSession();
  if (session && session.answers && session.answers[questionId]) {
    answerState = session.answers[questionId];
  }

  return { question, answerState };
}

function renderContextBanner() {
  const mount = document.getElementById("tutor-context-mount");
  if (!tutorContext) {
    mount.innerHTML = "";
    return;
  }
  const q = tutorContext.question;
  mount.innerHTML = `
    <div class="tutor-context">
      <div>
        <div class="tutor-context__label">Discussing</div>
        <div class="tutor-context__text">${q.skill} · ${q.domain} — "${q.question.slice(0, 90)}${q.question.length > 90 ? "…" : ""}"</div>
      </div>
      <a class="link-btn" href="ai-tutor.html">Start general chat instead</a>
    </div>
  `;
}

function greetingMessage() {
  if (tutorContext) {
    return `Hi! I saw you're working on a **${tutorContext.question.skill}** question. Before we look at the answer — can you walk me through your reasoning so far?`;
  }
  return `Hi! I'm your Socratic SAT tutor. I won't give you the answer — I'll help you discover it yourself. What would you like to work on today?`;
}

function renderKeyBanner() {
  const mount = document.getElementById("tutor-keybanner-mount");
  if (AiTutorService.hasApiKey()) {
    mount.innerHTML = "";
    return;
  }
  mount.innerHTML = `
    <div class="tutor-keybanner">
      <span>Add your Gemini or OpenAI API key to start chatting with the AI Tutor. Your key is stored only in this browser.</span>
      <button class="btn btn--primary btn--sm" id="keybanner-settings-btn">Add API Key</button>
    </div>
  `;
  document.getElementById("keybanner-settings-btn").addEventListener("click", openSettings);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderMessages() {
  const mount = document.getElementById("tutor-messages");
  mount.innerHTML = tutorHistory.map(m => `
    <div class="tutor-msg tutor-msg--${m.role}${m.isError ? " tutor-msg--error" : ""}">
      <div class="tutor-msg__avatar">${m.role === "user" ? "You" : "AI"}</div>
      <div class="tutor-msg__bubble">${escapeHtml(m.content)}</div>
    </div>
  `).join("");
  mount.scrollTop = mount.scrollHeight;
}

function showTypingIndicator() {
  const mount = document.getElementById("tutor-messages");
  const el = document.createElement("div");
  el.className = "tutor-msg tutor-msg--assistant";
  el.id = "typing-indicator";
  el.innerHTML = `
    <div class="tutor-msg__avatar">AI</div>
    <div class="tutor-msg__bubble"><div class="tutor-typing"><span></span><span></span><span></span></div></div>
  `;
  mount.appendChild(el);
  mount.scrollTop = mount.scrollHeight;
}

function hideTypingIndicator() {
  document.getElementById("typing-indicator")?.remove();
}

async function sendTutorMessage() {
  const textarea = document.getElementById("tutor-input");
  const text = textarea.value.trim();
  if (!text) return;

  if (!AiTutorService.hasApiKey()) {
    openSettings();
    return;
  }

  tutorHistory.push({ role: "user", content: text });
  AiTutorService.saveChatHistory(tutorContextId, tutorHistory);
  textarea.value = "";
  autoGrow(textarea);
  renderMessages();
  showTypingIndicator();

  document.getElementById("tutor-send-btn").disabled = true;
  try {
    const reply = await AiTutorService.sendMessage(tutorHistory, tutorContext);
    tutorHistory.push({ role: "assistant", content: reply });
  } catch (err) {
    tutorHistory.push({ role: "assistant", content: err.message, isError: true });
  } finally {
    hideTypingIndicator();
    document.getElementById("tutor-send-btn").disabled = false;
    AiTutorService.saveChatHistory(tutorContextId, tutorHistory);
    renderMessages();
  }
}

function autoGrow(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 140) + "px";
}

function clearConversation() {
  const ok = confirm("Clear this conversation? This can't be undone.");
  if (!ok) return;
  AiTutorService.clearChatHistory(tutorContextId);
  tutorHistory = [{ role: "assistant", content: greetingMessage() }];
  renderMessages();
}

/* ---------------- Settings modal ---------------- */
function openSettings() {
  const s = AiTutorService.getSettings();
  document.getElementById("settings-provider").value = s.provider || "openai";
  renderProviderToggle(s.provider || "openai");
  document.getElementById("settings-apikey").value = s.apiKey || "";
  document.getElementById("settings-model").value = s.model || "";
  document.getElementById("settings-model").placeholder = AiTutorService.DEFAULT_MODELS[s.provider || "openai"];
  document.getElementById("settings-backdrop").classList.add("is-open");
}

function closeSettings() {
  document.getElementById("settings-backdrop").classList.remove("is-open");
}

function renderProviderToggle(active) {
  document.querySelectorAll(".provider-toggle .chip").forEach(chip => {
    chip.classList.toggle("is-selected", chip.dataset.provider === active);
  });
  document.getElementById("settings-provider").value = active;
  document.getElementById("settings-model").placeholder = AiTutorService.DEFAULT_MODELS[active];
}

function saveSettingsForm() {
  const provider = document.getElementById("settings-provider").value;
  const apiKey = document.getElementById("settings-apikey").value.trim();
  const model = document.getElementById("settings-model").value.trim();
  AiTutorService.saveSettings({ provider, apiKey, model });
  closeSettings();
  renderKeyBanner();
}

/* ---------------- Init ---------------- */
function initAiTutorPage() {
  renderSidebar("aitutor");

  tutorContext = resolveContext();
  tutorContextId = tutorContext ? tutorContext.question.id : "general";

  renderContextBanner();
  renderKeyBanner();

  tutorHistory = AiTutorService.getChatHistory(tutorContextId);
  if (tutorHistory.length === 0) {
    tutorHistory = [{ role: "assistant", content: greetingMessage() }];
    AiTutorService.saveChatHistory(tutorContextId, tutorHistory);
  }
  renderMessages();

  const textarea = document.getElementById("tutor-input");
  textarea.addEventListener("input", () => autoGrow(textarea));
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendTutorMessage();
    }
  });

  document.getElementById("tutor-send-btn").addEventListener("click", sendTutorMessage);
  document.getElementById("clear-chat-btn").addEventListener("click", clearConversation);
  document.getElementById("open-settings-btn").addEventListener("click", openSettings);
  document.getElementById("settings-close-btn").addEventListener("click", closeSettings);
  document.getElementById("settings-save-btn").addEventListener("click", saveSettingsForm);
  document.getElementById("settings-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "settings-backdrop") closeSettings();
  });
  document.querySelectorAll(".provider-toggle .chip").forEach(chip => {
    chip.addEventListener("click", () => renderProviderToggle(chip.dataset.provider));
  });
}

document.addEventListener("DOMContentLoaded", initAiTutorPage);
