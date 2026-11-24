/* ==========================================================
   AWAKA motion layer
   Small, purposeful interactions shared by every page:
   · magnetic CTAs and links (pointer devices only)
   · cards with a little depth and a light that follows the cursor
   · masked headline reveals and image reveals on the inner pages
   · gentle image parallax and a progressive timeline
   Everything is off for prefers-reduced-motion, and content is
   fully visible if this file never runs (states are added by JS).
   ========================================================== */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const page = document.body.dataset.page || "home";
  document.documentElement.classList.add("motion-on");

  /* ---------- 1. magnetic: buttons lean towards the cursor ---------- */
  const MAG = ".pill, .btn, .nav button[data-go], .nav-links a, .footer-top, .footer-cta, .contact .links a, .copy, .p-back, .chip";
  if (fine) {
    const bind = el => {
      if (el.dataset.mag) return; el.dataset.mag = "1";
      const strength = el.matches(".nav button, .nav-links a, .contact .links a, .chip") ? .18 : .3;
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength, y = (e.clientY - r.top - r.height / 2) * strength * 1.2;
        el.style.setProperty("--mx", x.toFixed(1) + "px"); el.style.setProperty("--my", y.toFixed(1) + "px");
        el.classList.add("is-mag");
      });
      el.addEventListener("pointerleave", () => { el.style.setProperty("--mx", "0px"); el.style.setProperty("--my", "0px"); el.classList.remove("is-mag"); });
    };
    const scan = () => $$(MAG).forEach(bind);
    scan(); setTimeout(scan, 600); setTimeout(scan, 2000);
  }

  /* ---------- 2. depth: cards tilt slightly, a soft light follows ---------- */
  const DEPTH = ".card-media, .proj .cover, .metric, .now-pass";
  if (fine) {
    const bindD = el => {
      if (el.dataset.depth) return; el.dataset.depth = "1";
      el.classList.add("has-depth");
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        const k = el.matches(".now-pass") ? 3 : 5;
        el.style.setProperty("--ry", ((px - .5) * k).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((.5 - py) * k).toFixed(2) + "deg");
        el.style.setProperty("--lx", (px * 100).toFixed(1) + "%");
        el.style.setProperty("--ly", (py * 100).toFixed(1) + "%");
      });
      el.addEventListener("pointerleave", () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
    };
    const scanD = () => $$(DEPTH).forEach(bindD);
    scanD(); setTimeout(scanD, 600); setTimeout(scanD, 2000);
  }

  /* the homepage has its own scroll-scrubbed choreography (GSAP) */
  if (page === "home") return;

  /* ---------- 3. masked headline reveal (inner pages) ---------- */
  const splitWords = el => {
    if (el.dataset.split) return; el.dataset.split = "1";
    el.setAttribute("aria-label", el.textContent.trim());
    const wrap = t => t.split(/(\s+)/).map(w => /^\s+$/.test(w) || !w ? w : `<span class="km" aria-hidden="true"><span class="kw">${w}</span></span>`).join("");
    el.innerHTML = [...el.childNodes].map(n => n.nodeType === 3 ? wrap(n.textContent) : n.outerHTML.replace(n.innerHTML, wrap(n.textContent))).join("");
    $$(".kw", el).forEach((w, i) => w.style.setProperty("--i", i));
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in"); io.unobserve(e.target);
  }), { threshold: .12, rootMargin: "0px 0px -8% 0px" });

  // clipped elements report almost no area to IntersectionObserver, so they get their own observer at threshold 0
  const revIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    (e.target._rev || []).forEach(el => el.classList.add("is-in")); revIO.unobserve(e.target);
  }), { threshold: 0, rootMargin: "0px 0px -6% 0px" });
  const prepare = () => {
    $$(".page-head .mega, .p-hero h1, .h-xl, .h-lg, .footer-cta").forEach(el => {
      if (el.closest(".footer")) return;
      splitWords(el); el.classList.add("kin"); io.observe(el);
    });
    $$(".card-media, .p-cover, .gallery button, .range-grid figure, .ux-frame, .now-pass, .collage .ah-portrait").forEach(el => {
      if (el.dataset.rev) return; el.dataset.rev = "1"; el.classList.add("rev");
      const host = el.parentElement; (host._rev = host._rev || []).push(el); revIO.observe(host);
    });
    $$(".timeline li, .edu li, .caps > *, .toolgroups > *, .cs-sec, .story section, .facts").forEach((el, i) => {
      if (el.dataset.rise) return; el.dataset.rise = "1"; el.classList.add("rise"); io.observe(el);
    });
  };
  prepare(); setTimeout(prepare, 400); setTimeout(prepare, 1500);

  /* ---------- 4. parallax: images drift a little slower than the page ---------- */
  const PX = ".card-media img, .p-cover img, .gallery img";
  let ticking = false;
  const par = () => {
    ticking = false;
    const vh = innerHeight;
    $$(PX).forEach(img => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = ((r.top + r.height / 2) - vh / 2) / vh; // -1..1 across the viewport
      img.style.setProperty("--py", (p * -6).toFixed(2) + "%");
    });
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(par); } }, { passive: true });
  addEventListener("resize", par); setTimeout(par, 300); setTimeout(par, 1500);
})();
