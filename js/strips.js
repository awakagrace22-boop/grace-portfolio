/* "What I do" as collapsible strips: tall image slices with a vertical label.
   One strip is open at a time. Desktop: strips open sideways (hover or tap).
   Mobile: they stack and open downwards. Used on the homepage and the About page. */
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const src = (u, w) => (/framerusercontent\.com/.test(u) ? u.split("?")[0] + "?scale-down-to=" + (w || 800) : u);
  const MEDIA = [
    [["ace-air-freshener", 0], ["amara-deodorant", 0], ["blaire", 1]],
    [["oud-digital", 0], ["oud-digital", 1], ["amara-ghana", 0]],
    [["tuqio-magazine", 0], ["amara-champions", 1], ["tuqio-magazine", 1]],
    [["3d-stills", 0], ["veloure", 0], ["melto-ice-cream", 0]]
  ];

  window.renderStrips = function (el, idPrefix) {
    if (!el) return;
    const S = window.SITE, all = (window.PROJECTS || []).concat(window.EXPLORATIONS || []);
    const pick = ([slug, i]) => { const p = all.find(x => x.slug === slug); return p && p.images[i] ? { u: src(p.images[i], 800), alt: p.title } : null; };
    const id = idPrefix || "strip";
    el.classList.add("strips");
    el.innerHTML = S.services.map((s, i) => {
      const imgs = (MEDIA[i] || []).map(pick).filter(Boolean);
      const n = String(i + 1).padStart(2, "0");
      return `
      <article class="strip${i === 0 ? " is-open" : ""}" style="--i:${i}">
        <div class="strip-peek" aria-hidden="true">${imgs[0] ? `<img src="${imgs[0].u}" alt="" loading="lazy">` : ""}</div>
        <h3 class="strip-h"><button class="strip-tab" id="${id}-t${i}" aria-expanded="${i === 0}" aria-controls="${id}-p${i}">
          <span class="strip-n">${n}</span><span class="strip-name">${esc(s.title)}</span><i class="strip-dot" aria-hidden="true"></i>
        </button></h3>
        <div class="strip-panel" id="${id}-p${i}" role="region" aria-labelledby="${id}-t${i}">
          <div class="strip-copy">
            <span class="strip-num">${n}</span>
            <p class="strip-title">${esc(s.title)}</p>
            <p class="strip-text">${esc(s.text)}</p>
            <ul class="strip-tags">${(s.tags || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          </div>
          <div class="strip-media">${imgs.map(m => `<img src="${m.u}" alt="${esc(m.alt)}" loading="lazy">`).join("")}</div>
        </div>
      </article>`;
    }).join("");

    const strips = [...el.querySelectorAll(".strip")];
    const open = s => {
      strips.forEach(x => {
        const on = x === s;
        x.classList.toggle("is-open", on);
        x.querySelector(".strip-tab").setAttribute("aria-expanded", on);
      });
    };
    el.addEventListener("click", e => {
      const b = e.target.closest(".strip-tab"); if (!b) return;
      const s = b.closest(".strip");
      const mobile = matchMedia("(max-width: 820px)").matches;
      if (mobile && s.classList.contains("is-open")) { s.classList.remove("is-open"); b.setAttribute("aria-expanded", "false"); return; }
      open(s);
      window.Sound && window.Sound.play && window.Sound.play("tick");
    });
    // desktop: hovering a strip opens it
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      let t;
      strips.forEach(s => s.addEventListener("mouseenter", () => {
        if (matchMedia("(max-width: 820px)").matches) return;
        clearTimeout(t); t = setTimeout(() => open(s), 120);
      }));
      el.addEventListener("mouseleave", () => clearTimeout(t));
    }
  };
})();
