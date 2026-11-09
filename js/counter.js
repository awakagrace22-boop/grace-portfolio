/* =========================================================
   Counter: reusable count-up for metrics.
   Markup: <b class="count" data-to="22000" data-suffix="+">22,000+</b>
     data-to       final value (number, required)
     data-decimals decimals to show while counting (default 0)
     data-prefix / data-suffix   text around the number ("+", "M+", "%")
     data-duration seconds (optional; default 1.5–2.5s scaled by size)
   Counter.run(el)        animate one element (only ever once)
   Counter.watch(root)    animate every .count inside root when it scrolls into view
   Counter.fromLabel(str) turns "2.5M+" / "60%" / "3" into counter attributes
   Reduced motion: numbers are shown at their final value straight away.
   ========================================================= */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (n, d) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const ease = t => 1 - Math.pow(1 - t, 4); // easeOutQuart: smooth, no bounce

  function final(el) {
    const d = +(el.dataset.decimals || 0);
    return (el.dataset.prefix || "") + fmt(+el.dataset.to, d) + (el.dataset.suffix || "");
  }

  function run(el) {
    if (!el || el.dataset.counted) return;
    el.dataset.counted = "1";
    const to = +el.dataset.to, d = +(el.dataset.decimals || 0);
    if (reduce || !isFinite(to)) { el.textContent = final(el); return; }
    const dur = (+el.dataset.duration || Math.min(2.5, 1.5 + Math.log10(Math.max(10, to)) / 6)) * 1000;
    const pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    // reserve the final width so the layout never jumps while counting
    if (!el.style.minWidth) el.style.minWidth = el.getBoundingClientRect().width + "px";
    const t0 = performance.now();
    (function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = pre + fmt(to * ease(p), d) + suf;
      if (p < 1) requestAnimationFrame(tick); else el.textContent = final(el);
    })(t0);
  }

  function prime(el) {
    // show 0 before the animation starts (final value stays in the HTML for no-JS / SEO)
    if (reduce || el.dataset.counted) return;
    el.setAttribute("aria-label", final(el));
    el.textContent = (el.dataset.prefix || "") + fmt(0, +(el.dataset.decimals || 0)) + (el.dataset.suffix || "");
  }

  function watch(root) {
    const els = [...(root || document).querySelectorAll(".count")];
    els.forEach(el => { el.style.minWidth = el.getBoundingClientRect().width + "px"; prime(el); });
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    }), { threshold: .4 });
    els.forEach(el => io.observe(el));
  }

  function fromLabel(str) {
    const m = String(str).match(/^([^\d]*)([\d,.]+)\s*(.*)$/);
    if (!m) return null;
    const num = m[2].replace(/,/g, "");
    const decimals = (num.split(".")[1] || "").length;
    return { prefix: m[1], to: +num, decimals, suffix: m[3] };
  }

  function html(str, cls) {
    const c = fromLabel(str);
    if (!c) return `<b class="${cls || ""}">${str}</b>`;
    return `<b class="count ${cls || ""}" data-to="${c.to}" data-decimals="${c.decimals}" data-prefix="${c.prefix}" data-suffix="${c.suffix}">${str}</b>`;
  }

  window.Counter = { run, watch, prime, fromLabel, html };
})();
