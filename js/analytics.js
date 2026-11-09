/* =========================================================
   Analytics: Google Analytics 4 with a consent banner.
   Set the ID once in js/data.js (window.SITE.gaId = "G-XXXXXXXXXX").
   Nothing loads until the visitor accepts.
   Custom events tracked (on top of GA4's automatic page views,
   scrolls, outbound clicks, site search and file downloads):
     cta_click         buttons and pills ("Explore my work", "Let's talk"...)
     project_open      a project or exploration card is opened
     impact_metric     a dashboard metric card is clicked
     nav_click         header / ruler navigation
     contact_click     email, copy email, social links, "Start a project"
     cv_download       CV download
     case_detail       a numbered marker on a case-study mockup is opened
     section_view      a homepage section is reached (once per visit)
     form_submit       contact form sent
   ========================================================= */
(function () {
  const ID = (window.SITE && window.SITE.gaId) || "";
  if (!ID || !/^G-[A-Z0-9]+$/.test(ID)) { window.track = () => {}; return; }

  const KEY = "ga-consent";
  let choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  gtag("js", new Date());

  let loaded = false;
  function load() {
    if (loaded) return; loaded = true;
    gtag("consent", "update", { analytics_storage: "granted" });
    gtag("config", ID, { anonymize_ip: true });
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
  }

  window.track = (name, params) => { if (loaded) gtag("event", name, params || {}); };

  /* ---------- consent banner ---------- */
  function banner() {
    const b = document.createElement("div");
    b.className = "consent";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-label", "Analytics cookies");
    b.innerHTML = `<p>I use Google Analytics to see how people find and use this site. No ads, no selling data.</p>
      <div><button type="button" data-c="yes">Accept</button><button type="button" data-c="no">Decline</button></div>`;
    const css = document.createElement("style");
    css.textContent = `.consent{position:fixed;right:16px;bottom:16px;z-index:400;max-width:360px;background:#191719;color:#F7F4F1;border-radius:16px;padding:1rem 1.1rem;font:500 .9rem/1.45 Inter,system-ui,sans-serif;box-shadow:0 20px 40px -20px rgba(0,0,0,.6)}
      .consent p{margin:0 0 .8rem}.consent div{display:flex;gap:.5rem}
      .consent button{font:600 .85rem Inter,system-ui,sans-serif;border:0;border-radius:99px;padding:.5rem 1rem;cursor:pointer}
      .consent [data-c=yes]{background:#6D2038;color:#F7F4F1}.consent [data-c=no]{background:transparent;color:#F7F4F1;box-shadow:inset 0 0 0 1px rgba(247,244,241,.4)}
      .consent button:focus-visible{outline:2px solid #C77B68;outline-offset:2px}`;
    document.head.appendChild(css);
    b.addEventListener("click", e => {
      const c = e.target.closest("[data-c]"); if (!c) return;
      try { localStorage.setItem(KEY, c.dataset.c); } catch (er) {}
      if (c.dataset.c === "yes") load();
      b.remove();
    });
    document.body.appendChild(b);
  }

  if (choice === "yes") load();
  else if (choice !== "no") (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", banner) : banner());

  /* ---------- behaviour events ---------- */
  const label = el => (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80);
  document.addEventListener("click", e => {
    const el = e.target.closest("a, button");
    if (!el || el.closest(".consent")) return;
    const href = el.getAttribute("href") || "";
    if (el.closest(".metric")) return track("impact_metric", { metric: label(el.querySelector(".metric-k") || el), link: href });
    if (el.matches(".proj, .card, .xcard") || /project(\.html)?\?p=/.test(href)) {
      const slug = (href.match(/p=([\w-]+)/) || [])[1] || "";
      return track("project_open", { project: slug, from: location.pathname });
    }
    if (el.classList.contains("pin")) return track("case_detail", { detail: label(el) });
    if (/\.pdf$/i.test(href) || el.hasAttribute("download")) return track("cv_download", { file: href });
    if (href.startsWith("mailto:") || el.id === "copy" || /linkedin|behance|instagram/i.test(href) || /contact/.test(href)) return track("contact_click", { target: href || label(el) });
    if (el.closest(".top nav, .ruler, .nav, header")) return track("nav_click", { item: label(el) });
    if (el.matches(".pill, .btn") || el.dataset.go) return track("cta_click", { cta: label(el), page: location.pathname });
  }, true);

  document.addEventListener("submit", e => track("form_submit", { form: e.target.id || "contact" }), true);

  /* homepage sections reached (pinned journey publishes its labels; flow mode uses the sections) */
  const seen = new Set();
  const section = name => { if (name && !seen.has(name)) { seen.add(name); track("section_view", { section: name }); } };
  window.trackSection = section;
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting && document.documentElement.classList.contains("flow")) section(en.target.dataset.scene); }), { threshold: .5 });
    addEventListener("load", () => document.querySelectorAll("[data-scene]").forEach(s => io.observe(s)));
  }
})();
