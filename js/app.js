/**
 * app.js — shared shell logic used across every page.
 * Renders the sidebar nav and exposes small DOM helpers.
 */

const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
  practice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-6-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>`,
  vocabulary: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>`,
  errorlog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>`,
  aitutor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a4 4 0 0 1 4 4v1a4 4 0 1 1-8 0V7a4 4 0 0 1 4-4Z"/><path d="M5 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"/><path d="M9 10h.01M15 10h.01"/></svg>`,
  progress: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/></svg>`,
  tests: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11.5 11 13.5 15.5 9"/><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2c1 3-3 4.5-3 8a3 3 0 0 0 6 0c1 1 1.5 2.3 1.5 3.7A5.5 5.5 0 0 1 11 19a5.5 5.5 0 0 1-4-9.3C8.5 7 11 6 12 2Z"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>`,
  exit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.5h6c0-1.2.4-1.9 1-2.5A6 6 0 0 0 12 2Z"/></svg>`,
  flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18"/><path d="M5 4h11l-2 4 2 4H5"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1.4.9-1.4 1.7v.5"/><path d="M12 17h.01"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`
};

const NAV_ITEMS = [
  { key: "dashboard",  label: "Dashboard",      href: "index.html",           icon: ICONS.dashboard },
  { key: "practice",   label: "Practice",       href: "practice.html",        icon: ICONS.practice },
  { key: "vocabulary", label: "Vocabulary",     href: "vocabulary.html",      icon: ICONS.vocabulary },
  { key: "errorlog",   label: "Error Log",      href: "error-log.html",       icon: ICONS.errorlog },
  { key: "progress",   label: "Progress",       href: "progress.html",        icon: ICONS.progress }
];

function renderSidebar(activeKey) {
  const mount = document.getElementById("sidebar-mount");
  if (!mount) return;

  // Visiting any page counts as today's activity — streak is 1 the first
  // time the student shows up, and increments once per consecutive day.
  if (typeof GamificationService !== "undefined") GamificationService.recordActivity();

  const navHtml = NAV_ITEMS.map(item => `
    <a class="sidebar__link ${item.key === activeKey ? "is-active" : ""}" href="${item.href}">
      ${item.icon}
      <span>${item.label}</span>
    </a>
  `).join("");

  mount.innerHTML = `
    <div class="sidebar__brand">
      <div class="sidebar__brand-mark">S</div>
      <div class="sidebar__brand-text">SAT PRACTICE</div>
    </div>
    <nav class="sidebar__nav">${navHtml}</nav>
    <div class="sidebar__footer">
      <div class="sidebar__user">
        <div class="sidebar__avatar">KN</div>
        <div>
          <div class="sidebar__user-name">Khánh Ngọc</div>
          <div class="sidebar__user-role">Grade 11 · Target 1600</div>
        </div>
      </div>
    </div>
  `;
}

function fmt(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function tierFor(accuracy) {
  if (accuracy < 65) return "danger";
  if (accuracy < 80) return "warning";
  return "success";
}
