/* Page-specific rendering from data.js */
(function () {
  const S = window.SITE, P = window.PROJECTS.concat(window.EXPLORATIONS || []), Ch = window.Characters, esc = window.esc;
  const page = document.body.dataset.page;
  const $ = s => document.querySelector(s);
  const url = p => `project.html?p=${p.slug}`;

  const placeholder = (p, note) => `<div class="ph" style="--c:${p.color}">${window.charFor(p)}<small>${note || "Pictures coming soon"}</small></div>`;

  // If an image fails, swap in the placeholder art
  window.imgFail = img => {
    const p = P.find(x => x.slug === img.dataset.slug) || { color: "#F2C6CF", category: "Packaging" };
    img.outerHTML = placeholder(p, "Image missing");
  };

  const card = (p, i) => `
    <a class="card" href="${url(p)}" data-cat="${esc(p.category)}" style="--c:${p.color}">
      <div class="card-media">
        <span class="tag">${esc(p.category)}</span>
        ${p.images.length
          ? `<img src="${window.imgSrc(p.images[0], 1024)}" alt="${esc(p.title)} ${esc(p.subtitle).toLowerCase()}" loading="${i < 2 ? "eager" : "lazy"}" data-slug="${p.slug}" onerror="imgFail(this)">`
          : placeholder(p)}
      </div>
      <div class="card-info">
        <div><h3>${esc(p.title)}</h3><p>${esc(p.subtitle)}</p></div>
        <span class="yr">${esc(p.year)}</span>
      </div>
    </a>`;

  /* ================= HOME ================= */
  if (page === "home") {
    // hero characters
    document.querySelectorAll("[data-char]").forEach(el => { el.innerHTML = Ch[el.dataset.char](); });

    // split name letters & run the one orchestrated entrance
    document.querySelectorAll(".hero-name .word").forEach(line => {
      line.innerHTML = [...line.textContent].map(c => `<span class="ch">${c === " " ? "&nbsp;" : c}</span>`).join("");
    });
    const enter = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      document.querySelectorAll(".hero-name .ch").forEach((ch, i) => {
        ch.animate([{ transform: "translateY(110%) rotate(8deg)", opacity: 0 }, { transform: "none", opacity: 1 }],
          { duration: 800, delay: 60 * i, easing: "cubic-bezier(.2,.9,.25,1.2)", fill: "backwards" });
      });
      document.querySelectorAll(".hero .slot").forEach((s, i) => {
        s.animate([{ transform: "translateY(-120vh)" }, { transform: "translateY(0) scale(1.15,.85)", offset: .75 }, { transform: "none" }],
          { duration: 900, delay: 650 + i * 160, easing: "cubic-bezier(.5,0,.6,1)", fill: "backwards" });
      });
      document.querySelectorAll(".hero .badge, .hero-foot > *").forEach((el, i) => {
        el.animate([{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "none" }],
          { duration: 700, delay: 1300 + i * 120, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
      });
    };
    if (window.__loaderPending) document.addEventListener("loader:done", enter, { once: true });
    else enter();

    // letters wiggle on hover
    document.querySelectorAll(".hero-name .ch").forEach(ch => ch.addEventListener("mouseenter", () => {
      ch.animate([{ transform: "none" }, { transform: "translateY(-12%) rotate(-8deg)" }, { transform: "none" }], { duration: 450, easing: "cubic-bezier(.2,.9,.25,1.2)" });
    }));

    // marquee
    const mq = $("#marquee");
    if (mq) { const items = S.brands.map(b => `<span>${esc(b)}</span>`).join(""); mq.innerHTML = items + items + items + items; }

    // featured projects
    $("#featured").innerHTML = P.filter(p => p.featured).slice(0, 6).map(card).join("");
    $("#allCount").textContent = P.length;

    // receipt
    $("#receiptItems").innerHTML = S.receipt.map((r, i) =>
      `<li style="transition-delay:${i * 90}ms"><span>${esc(r.item)}</span><span class="dots"></span><b>${esc(r.qty)}</b></li>`).join("");
    const rc = $("#receipt");
    new IntersectionObserver((en, io) => { if (en[0].isIntersecting) { rc.classList.add("is-printed"); io.disconnect(); } }, { threshold: .3 }).observe(rc);

    renderServices();
  }

  /* ================= SERVICES (accordion) ================= */
  function renderServices() {
    const el = $("#services");
    if (!el) return;
    el.innerHTML = S.services.map((s, i) => `
      <div class="svc-item" data-open="${i === 0}">
        <h3><button aria-expanded="${i === 0}" aria-controls="svc-${i}" id="svc-b-${i}">${esc(s.title)}<span class="plus" aria-hidden="true"></span></button></h3>
        <div class="svc-panel" id="svc-${i}" role="region" aria-labelledby="svc-b-${i}"><div><p>${esc(s.text)}</p>${s.tags ? `<p class="svc-tags">${s.tags.map(esc).join(" · ")}</p>` : ""}</div></div>
      </div>`).join("");
    el.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      const item = b.closest(".svc-item"), open = item.dataset.open !== "true";
      item.dataset.open = open; b.setAttribute("aria-expanded", open);
      window.Sound && Sound.play("tick");
    });
  }

  /* ================= WORK ================= */
  if (page === "work") {
    const grid = $("#workGrid"), filters = $("#filters");
    const cats = ["All", ...(window.CATEGORIES || []).filter(c => P.some(p => p.category === c)), ...new Set(P.map(p => p.category).filter(c => !(window.CATEGORIES || []).includes(c)))];
    filters.innerHTML = cats.map(c => {
      const n = c === "All" ? P.length : P.filter(p => p.category === c).length;
      return `<button class="chip" aria-pressed="${c === "All"}" data-cat="${esc(c)}">${esc(c)}<sup>${n}</sup></button>`;
    }).join("");
    grid.innerHTML = P.map(card).join("");
    const apply = cat => {
      filters.querySelectorAll(".chip").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
      let shown = 0;
      grid.querySelectorAll(".card").forEach(c => {
        const on = cat === "All" || c.dataset.cat === cat;
        c.classList.toggle("is-out", !on);
        c.classList.remove("pop");
        if (on) { void c.offsetWidth; c.style.animationDelay = (shown++ * 60) + "ms"; c.classList.add("pop"); }
      });
      $("#workCount").textContent = `${shown} ${shown === 1 ? "project" : "projects"}`;
      const u = new URL(location.href);
      cat === "All" ? u.searchParams.delete("cat") : u.searchParams.set("cat", cat);
      history.replaceState(null, "", u);
    };
    filters.addEventListener("click", e => { const b = e.target.closest(".chip"); if (b) apply(b.dataset.cat); });
    const start = new URLSearchParams(location.search).get("cat");
    apply(cats.includes(start) ? start : "All");
  }

  /* ---------- reusable case-study pieces ---------- */
  function uxFrame(sc, i) {
    const pins = (sc.pins || []).map((pn, k) => `<button class="pin" style="left:${pn[0]}%;top:${pn[1]}%" aria-expanded="false" aria-label="Detail ${k + 1}: ${esc(pn[2])}"><b>${k + 1}</b><span>${esc(pn[2])}</span></button>`).join("");
    return `<figure class="ux-frame ux-${sc.device}">
      <div class="device">${sc.device === "desktop" ? `<div class="chrome"><i></i><i></i><i></i><span>haco.africa</span></div>` : `<div class="notch"></div>`}
        <div class="screen"><img src="${sc.src}" alt="${esc(sc.caption)}" loading="lazy">${pins}</div></div>
      <figcaption><b>${String(i + 1).padStart(2, "0")}</b> ${esc(sc.caption)}</figcaption>
    </figure>`;
  }
  function caseStudy(p) {
    const c = p.caseStudy;
    const sec = (n, h, body) => `<section class="cs-sec"><span class="cs-n">${n}</span><h2>${h}</h2>${body}</section>`;
    const list = a => `<ul class="cs-list">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
    const ia = `<div class="ia" role="tree" aria-label="Site navigation">${c.ia.map(n => `<div class="ia-node" role="treeitem"><b>${esc(n.label)}</b>${n.children ? `<ul>${n.children.map(ch => `<li>${esc(ch)}</li>`).join("")}</ul>` : ""}</div>`).join("")}</div>`;
    const journeys = `<div class="journeys">${c.journeys.map(j => `<div class="journey"><span>${esc(j.who)}</span><ol>${j.path.map(x => `<li>${esc(x)}</li>`).join("")}</ol></div>`).join("")}</div>`;
    const order = `<ol class="cs-order">${c.homeOrder.map(x => `<li>${esc(x)}</li>`).join("")}</ol>`;
    const screens = c.screens.map(uxFrame).join("");
    const mobile = c.mobile && c.mobile.length ? `<div class="ux-mobiles">${c.mobile.map((m, k) => uxFrame(m, c.screens.length + k)).join("")}</div>` : "";
    const metric = p.stats.map(s => `<div class="cs-metric">${window.Counter ? Counter.html(s.value) : `<b>${esc(s.value)}</b>`}<span>${esc(s.label)}</span></div>`).join("");
    return `<div class="case">
      ${sec("01", "Project overview", `<p>${esc(p.overview)}</p>`)}
      ${sec("02", "Background and objectives", `<p>${esc(c.background)}</p>${list(c.objectives)}`)}
      ${sec("03", "Redesign approach", list(c.approach))}
      ${sec("04", "My role and contribution", `<p>${esc(c.role)}</p>`)}
      ${sec("05", "UX and information architecture", `<p>The navigation as it stands on the live site: nine top-level routes, with About and Our Brands carrying the depth.</p>${ia}<h3>Four visitors, four routes</h3>${journeys}<h3>How the homepage is ordered</h3>${order}`)}
      ${sec("06", "Desktop and mobile experience", `<p class="cs-note">Screens captured from the live site, haco.africa, in November 2026 and shown in device frames. Tap a numbered marker for the detail.</p><div class="ux-gallery">${screens}</div>${mobile}`)}
      ${sec("07", "Launch and results", `<div class="cs-metrics">${metric}</div><p>${esc(c.results)}</p><a class="btn" href="${p.liveUrl}" target="_blank" rel="noopener">Visit haco.africa <span aria-hidden="true">↗</span></a>`)}
    </div>`;
  }

  /* ================= PROJECT ================= */
  if (page === "project") {
    const slug = new URLSearchParams(location.search).get("p") || location.pathname.split("/").filter(Boolean).pop();
    const i = P.findIndex(p => p.slug === slug);
    const root = $("#project");
    if (i < 0) {
      root.innerHTML = `<section class="nf"><div>${Ch.sachi({ mood: "sad" })}<h1>Out of stock</h1>
        <p>There's no project at this address. It may have moved, or the link has a typo.</p>
        <a class="btn" href="work.html">See all projects</a></div></section>`;
      document.title = "Project not found | " + S.name;
      return;
    }
    const p = P[i], next = P[(i + 1) % P.length];
    const dark = ["#6D2038", "#191719", "#6C151E", "#2A070B", "#0F3D3A"].includes(p.color);
    document.title = `${p.title}: ${p.subtitle} | ${S.name}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.tagline);
    document.body.classList.add("light-top");

    const story = [["Overview", p.overview], ["The challenge", p.challenge], ["What I did", p.solution], ["The result", p.result]]
      .filter(s => s[1]).map(s => `<section><h2>${s[0]}</h2><p>${esc(s[1])}</p></section>`).join("");
    const stats = p.stats.length ? `<div class="p-stats">${p.stats.map(s => `<div class="p-stat">${window.Counter ? Counter.html(s.value) : `<strong>${esc(s.value)}</strong>`}<span>${esc(s.label)}</span></div>`).join("")}</div>` : "";
    const range = p.range ? `<section class="range" aria-label="The range"><h2>The range</h2><p>${p.range.length} variants, one family.</p><div class="range-grid">${p.range.map(v => `<figure><img src="${v.src}" alt="${esc(p.title)}, ${esc(v.name)}" loading="lazy"><figcaption>${esc(v.name)}</figcaption></figure>`).join("")}</div></section>` : "";
    const cs = p.caseStudy ? caseStudy(p) : "";
    const gallery = p.images.length > 1
      ? `<div class="gallery">${p.images.slice(1).map((src, k) => `<button data-k="${k + 1}" aria-label="Enlarge image ${k + 2} of ${p.images.length}"><img src="${window.imgSrc(src, 1024)}" alt="${esc(p.title)}, image ${k + 2}" loading="lazy" data-slug="${p.slug}" onerror="imgFail(this)"></button>`).join("")}</div>`
      : p.images.length ? "" : `<div class="empty-gallery">${window.charFor(p)}<p>Project images are on their way. In the meantime, ask me about this one and I'll walk you through it.</p><a class="btn" href="contact.html">Ask about this project</a></div>`;

    root.innerHTML = `
      <header class="p-hero ${dark ? "dark" : ""}" style="--c:${p.color}">
        <div class="wrap">
          <a class="p-back" href="work.html"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18 9 12l6-6"/></svg>All work</a>
          <h1>${esc(p.title)}</h1>
          <p class="lede">${esc(p.tagline)}</p>
          <div class="p-cover">${p.images.length
            ? `<button style="all:unset;display:block;width:100%;height:100%;cursor:zoom-in" data-k="0" aria-label="Enlarge cover image"><img src="${window.imgSrc(p.images[0], 2048)}" alt="${esc(p.title)} ${esc(p.subtitle).toLowerCase()}" data-slug="${p.slug}" onerror="imgFail(this)"></button>`
            : placeholder(p)}</div>
        </div>
      </header>
      <section class="section">
        <div class="wrap p-body">
          <aside class="facts" aria-label="Project facts">
            <h2>Project facts</h2>
            <dl>
              <div class="row thick"><dt>Brand</dt><dd>${esc(p.brand)}</dd></div>
              <div class="row"><dt>Year</dt><dd>${esc(p.year)}</dd></div>
              <div class="row"><dt>Project</dt><dd>${esc(p.subtitle)}</dd></div>
              <div class="row"><dt>Category</dt><dd>${esc(p.category)}</dd></div>${p.kind ? `<div class="row"><dt>Type</dt><dd>${esc(p.kind)}</dd></div>` : ""}
              <div class="row block"><dt>My role</dt><dd>${p.role.map(esc).join(", ")}</dd></div>
              <div class="row block"><dt>Scope</dt><dd>${p.elements.map(esc).join(", ")}</dd></div>
              <div class="row block thick"><dt>Tools</dt><dd>${p.tools.map(esc).join(", ")}</dd></div>
            </dl>
            ${p.liveUrl ? `<a class="btn live" href="${p.liveUrl}" target="_blank" rel="noopener">Visit the live site <span aria-hidden="true">↗</span></a>` : ""}<p class="made">Designed in ${S.city}, Kenya.</p>${p.link ? `<p class="made"><a href="${p.link}" target="_blank" rel="noopener">See the original post on LinkedIn</a></p>` : ""}
          </aside>
          <div>
            ${cs || `<div class="story">${story}</div>`}
            ${cs ? "" : stats}
            ${range}
            <div style="margin-top:clamp(3rem,6vw,5rem)">${gallery}</div>
          </div>
        </div>
      </section>
      <a class="next-proj" href="${url(next)}">
        <div class="wrap"><small>Next on the shelf</small><strong>${esc(next.title)}</strong></div>
      </a>
      <div class="lightbox" id="lb" role="dialog" aria-modal="true" aria-label="Image viewer">
        <button class="lb-close" aria-label="Close">✕</button>
        <button class="lb-prev" aria-label="Previous image">‹</button>
        <img alt="">
        <button class="lb-next" aria-label="Next image">›</button>
        <span class="lb-count"></span>
      </div>`;

    if (window.Counter) Counter.watch(root);
    root.querySelectorAll(".ux-frame").forEach(f => f.addEventListener("click", e => { const b = e.target.closest(".pin"); if (b) { e.preventDefault(); f.querySelectorAll(".pin").forEach(x => x !== b && x.setAttribute("aria-expanded", "false")); b.setAttribute("aria-expanded", String(b.getAttribute("aria-expanded") !== "true")); } }));

    // gallery wipe-in
    const gio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("wipe"); gio.unobserve(e.target); } }), { threshold: .15 });
    document.querySelectorAll(".gallery button").forEach(b => gio.observe(b));

    // lightbox
    const lb = $("#lb"), lbImg = lb.querySelector("img"), count = lb.querySelector(".lb-count");
    let cur = 0, lastFocus = null;
    const show = k => {
      cur = (k + p.images.length) % p.images.length;
      lbImg.src = window.imgSrc(p.images[cur], 2048);
      lbImg.alt = `${p.title}, image ${cur + 1}`;
      count.textContent = `${cur + 1} / ${p.images.length}`;
    };
    const open = k => { lastFocus = document.activeElement; show(k); lb.classList.add("is-open"); document.documentElement.style.overflow = "hidden"; lb.querySelector(".lb-close").focus(); };
    const close = () => { lb.classList.remove("is-open"); document.documentElement.style.overflow = ""; lastFocus && lastFocus.focus(); };
    root.addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (b && p.images.length) open(+b.dataset.k); });
    lb.addEventListener("click", e => {
      if (e.target.closest(".lb-close") || e.target === lb) close();
      else if (e.target.closest(".lb-next")) show(cur + 1);
      else if (e.target.closest(".lb-prev")) show(cur - 1);
    });
    addEventListener("keydown", e => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "Tab") { // keep focus inside
        const f = [...lb.querySelectorAll("button")]; const idx = f.indexOf(document.activeElement);
        e.preventDefault(); f[(idx + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
    let sx = 0;
    lb.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); });
  }

  /* ================= ABOUT ================= */
  if (page === "about") {
    document.querySelectorAll("[data-char]").forEach(el => { el.innerHTML = Ch[el.dataset.char](); });
    $("#timeline").innerHTML = S.experience.map(x => `
      <li><span class="when">${esc(x.years)}</span><h3>${esc(x.title)}</h3><div class="where">${esc(x.place)}</div><p>${esc(x.text)}</p>${x.points && x.points.length ? `<ul class="xp-points">${x.points.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}</li>`).join("");
    if ($("#caps")) $("#caps").innerHTML = (S.capabilities || []).map(c => `<div class="cap"><h3>${esc(c.title)}</h3><ul>${c.items.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>`).join("");
    const icons = [
      `<svg viewBox="0 0 48 48" fill="none" stroke="#1A0508" stroke-width="3.5" stroke-linecap="round"><circle cx="24" cy="30" r="9" fill="#E9C2A0"/><path d="M4 40h40M24 10v5M10 18l3.5 3.5M38 18l-3.5 3.5"/></svg>`,
      `<svg viewBox="0 0 48 48" fill="none" stroke="#1A0508" stroke-width="3.5" stroke-linejoin="round"><rect x="7" y="7" width="34" height="34" rx="3" fill="#fff"/><path d="m11 35 9-11 7 8 4-5 6 8z" fill="#6C151E"/><circle cx="33" cy="16" r="3.5" fill="#F5DABF"/></svg>`,
      `<svg viewBox="0 0 48 48" fill="none" stroke="#1A0508" stroke-width="3.5" stroke-linejoin="round"><path d="M24 12c-5-4-12-4-18-2v28c6-2 13-2 18 2 5-4 12-4 18-2V10c-6-2-13-2-18 2z" fill="#fff"/><path d="M24 12v28"/></svg>`,
      `<svg viewBox="0 0 48 48" fill="none" stroke="#1A0508" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M34 30A13 13 0 1 1 20 9a10 10 0 0 0 14 21z" fill="#F5DABF"/></svg>`
    ];
    if ($("#offclock")) $("#offclock").innerHTML = S.offClock.map((o, i) => `<div class="oc">${icons[i % icons.length]}<h3>${esc(o.title)}</h3><p>${esc(o.text)}</p></div>`).join("");
    $("#tools").innerHTML = S.toolGroups
      ? S.toolGroups.map(g => `<li class="tg"><h3>${esc(g.title)}</h3><ul>${g.items.map(t => `<li>${esc(t)}</li>`).join("")}</ul></li>`).join("")
      : S.tools.map(t => `<li>${esc(t)}</li>`).join("");
    $("#edu").innerHTML = S.education.map(e => `<li><strong>${esc(e.title)}${e.status ? ` <em class="tag-live">${esc(e.status)}</em>` : ""}</strong><span>${esc(e.place)}, ${esc(e.when)}</span></li>`).join("");
    if (window.Counter) Counter.watch(document);
    renderServices();
  }

  /* ================= CONTACT ================= */
  if (page === "contact") {
    document.querySelectorAll("[data-char]").forEach(el => { el.innerHTML = Ch[el.dataset.char](); });
    $("#bookLink").href = S.bookingUrl;
    $("#mailLink").href = "mailto:" + S.email; $("#mailLink").textContent = S.email;
    $("#socialList").innerHTML = S.socials.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join("");

    const wrap = $("#formWrap"), form = $("#contactForm"), status = $("#formStatus"), btn = form.querySelector("button[type=submit]");
    const checks = {
      name: v => v.trim().length > 1 || "Add your name so I know who I'm talking to.",
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Add an email address like name@company.com.",
      message: v => v.trim().length > 9 || "Tell me a little more, at least a sentence."
    };
    const validate = el => {
      const res = checks[el.name] ? checks[el.name](el.value) : true;
      const f = el.closest(".field");
      f.classList.toggle("invalid", res !== true);
      if (res !== true) f.querySelector(".err").textContent = res;
      el.setAttribute("aria-invalid", String(res !== true));
      return res === true;
    };
    form.querySelectorAll("input[name=name], input[name=email], textarea").forEach(el => el.addEventListener("blur", () => validate(el)));
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const fields = [...form.querySelectorAll("input[name=name], input[name=email], textarea")];
      const ok = fields.map(validate).every(Boolean);
      if (!ok) { fields.find(f => f.getAttribute("aria-invalid") === "true").focus(); return; }
      if (form.querySelector("[name=_honey]").value) return;
      const data = Object.fromEntries(new FormData(form));
      data.services = [...form.querySelectorAll("input[name=service]:checked")].map(i => i.value).join(", ") || "Not specified";
      delete data.service;
      data._subject = `New project enquiry from ${data.name}`;
      btn.disabled = true; btn.textContent = "Sending…"; status.textContent = "";
      try {
        const r = await fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error(r.status);
        wrap.classList.add("sent"); window.Sound && Sound.play("boing");
        $("#doneName").textContent = data.name.split(" ")[0];
      } catch (err) {
        btn.disabled = false; btn.textContent = "Send message";
        const body = encodeURIComponent(`${data.message}\n\n${data.name}\nServices: ${data.services}`);
        status.innerHTML = `The message didn't send. Try again, or <a href="mailto:${S.email}?subject=${encodeURIComponent(data._subject)}&body=${body}">send it by email instead</a>.`;
      }
    });
  }
})();
