/* Shared behaviour for every page: nav, footer, transitions,
   preloader, sound, Nairobi clock, character eyes, reveals. */
(function () {
  const S = window.SITE, Ch = window.Characters;
  const page = document.body.dataset.page || "";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    sset(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };

  /* Fill every [data-char] placeholder with its character */
  document.querySelectorAll("[data-char]").forEach(el => { if (!el.innerHTML.trim()) el.innerHTML = Ch[el.dataset.char](); });

  /* ---------- NAV ---------- */
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "work.html", label: "Work", key: "work" },
    { href: "about.html", label: "About", key: "about" },
    { href: "contact.html", label: "Contact", key: "contact" }
  ];
  const navHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <header class="nav" id="nav">
      <a class="logo" href="index.html" aria-label="${S.name}, home">
        <span class="logo-mark">${Ch.bottie()}</span><span>grace awaka</span>
      </a>
      <nav aria-label="Main"><ul class="nav-links">
        ${links.slice(1).map(l => `<li><a href="${l.href}" ${l.key === page ? 'aria-current="page"' : ""}>${l.label}</a></li>`).join("")}
      </ul></nav>
      <div class="nav-right">
        <span class="clock">${S.city} <b id="clock">--:--</b></span>
        <button class="sound-btn" id="soundBtn" aria-pressed="false" aria-label="Sound effects">
          <svg class="off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m23 9-6 6M17 9l6 6"/></svg>
          <svg class="on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>
        </button>
        <a class="btn" href="contact.html">Start a project</a>
        <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open menu"><span></span></button>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <ul>${links.map(l => `<li><a href="${l.href}" tabindex="-1">${l.label}</a></li>`).join("")}</ul>
      <div class="socials">${S.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener" tabindex="-1">${s.label}</a>`).join("")}<a href="mailto:${S.email}" tabindex="-1">${S.email}</a></div>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", navHTML);

  /* ---------- FOOTER ---------- */
  const footerSlot = document.getElementById("footer");
  if (footerSlot) {
    footerSlot.outerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer-chars"><span class="slot">${Ch.spritz()}</span><span class="slot">${Ch.sachi()}</span></div>
        <h2>Got a brand that needs to fly off the shelf?</h2>
        <div class="footer-cta">
          <a class="btn" href="contact.html">Start a project</a>
          <button class="btn btn--ghost copy-email" data-email="${S.email}">
            <span class="toast" role="status">Copied!</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
            ${S.email}
          </button>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${S.name}. Designed and built in ${S.city}.</span>
          <ul>
            ${S.socials.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join("")}
            <li><a href="${S.resume}" download>Résumé</a></li>
          </ul>
        </div>
      </div>
    </footer>`;
  }

  /* ---------- CURTAIN (page transitions) ---------- */
  const curtain = document.createElement("div");
  curtain.className = "curtain";
  curtain.setAttribute("aria-hidden", "true");
  curtain.innerHTML = Ch.bottie();
  document.body.appendChild(curtain);

  const firstVisit = !store.sget("visited");
  if (store.sget("transition") === "1" && !reduce) {
    curtain.classList.add("is-out");
    curtain.addEventListener("animationend", () => curtain.classList.remove("is-out"), { once: true });
  }
  store.sset("transition", "0");

  document.addEventListener("click", e => {
    const a = e.target.closest("a");
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const href = a.getAttribute("href");
    if (!href || a.target === "_blank" || a.hasAttribute("download") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search) { e.preventDefault(); return; }
    if (reduce) return;
    e.preventDefault();
    sound.play("whoosh");
    store.sset("transition", "1");
    curtain.classList.add("is-in");
    setTimeout(() => { location.href = a.href; }, 480);
  });
  window.addEventListener("pageshow", e => { if (e.persisted) curtain.classList.remove("is-in"); });

  /* ---------- PRELOADER (first visit only) ---------- */
  if (firstVisit && page === "home" && !reduce) {
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.setAttribute("aria-hidden", "true");
    loader.innerHTML = `<div class="loader-chars">${Ch.spritz()}${Ch.bottie()}${Ch.sachi()}${Ch.jarra()}</div>
      <div class="loader-shelf"></div><p>Stocking the shelves <b>0</b>%</p>`;
    document.body.appendChild(loader);
    document.documentElement.style.overflow = "hidden";
    const chars = loader.querySelectorAll(".char"), num = loader.querySelector("b");
    chars.forEach((c, i) => setTimeout(() => c.classList.add("drop"), 150 + i * 260));
    const t0 = performance.now(), dur = 1500;
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      num.textContent = Math.round(p * 100);
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => {
        loader.classList.add("done");
        document.documentElement.style.overflow = "";
        document.dispatchEvent(new Event("loader:done"));
        setTimeout(() => loader.remove(), 900);
      }, 250);
    })(t0);
  } else {
    requestAnimationFrame(() => document.dispatchEvent(new Event("loader:done")));
  }
  store.sset("visited", "1");
  window.__loaderPending = firstVisit && page === "home" && !reduce;

  /* ---------- SOUND (synthesised, off by default) ---------- */
  const sound = {
    on: store.get("sound") === "on",
    ctx: null,
    play(type) {
      if (!this.on) return;
      try {
        this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
        const ctx = this.ctx, t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        if (type === "boing") {
          o.type = "sine"; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(660, t + .12); o.frequency.exponentialRampToValueAtTime(330, t + .3);
          g.gain.setValueAtTime(.18, t); g.gain.exponentialRampToValueAtTime(.001, t + .35); o.start(t); o.stop(t + .36);
        } else if (type === "whoosh") {
          o.type = "triangle"; o.frequency.setValueAtTime(600, t); o.frequency.exponentialRampToValueAtTime(140, t + .3);
          g.gain.setValueAtTime(.08, t); g.gain.exponentialRampToValueAtTime(.001, t + .32); o.start(t); o.stop(t + .33);
        } else {
          o.type = "sine"; o.frequency.setValueAtTime(880, t); o.frequency.exponentialRampToValueAtTime(1320, t + .05);
          g.gain.setValueAtTime(.06, t); g.gain.exponentialRampToValueAtTime(.001, t + .09); o.start(t); o.stop(t + .1);
        }
      } catch (e) {}
    }
  };
  window.Sound = sound;
  const soundBtn = document.getElementById("soundBtn");
  soundBtn.setAttribute("aria-pressed", String(sound.on));
  soundBtn.addEventListener("click", () => {
    sound.on = !sound.on;
    store.set("sound", sound.on ? "on" : "off");
    soundBtn.setAttribute("aria-pressed", String(sound.on));
    sound.play("boing");
  });
  document.addEventListener("mouseover", e => {
    const el = e.target.closest(".btn, .chip, .nav-links a");
    if (el && !el.contains(e.relatedTarget)) sound.play("tick");
  });

  /* ---------- NAV behaviour ---------- */
  const nav = document.getElementById("nav");
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("is-solid", y > 60);
    nav.classList.toggle("is-hidden", y > 300 && y > lastY && !document.body.classList.contains("menu-open"));
    lastY = y;
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const menuBtn = document.getElementById("menuBtn"), menu = document.getElementById("mobileMenu");
  const setMenu = open => {
    document.body.classList.toggle("menu-open", open);
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.querySelectorAll("a").forEach(a => a.tabIndex = open ? 0 : -1);
    document.documentElement.style.overflow = open ? "hidden" : "";
  };
  menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Clock ---------- */
  const clock = document.getElementById("clock");
  const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: S.timezone });
  const tickClock = () => { clock.textContent = fmt.format(new Date()); };
  tickClock(); setInterval(tickClock, 15000);

  /* ---------- Copy email ---------- */
  document.addEventListener("click", e => {
    const b = e.target.closest(".copy-email");
    if (!b) return;
    const email = b.dataset.email;
    const done = () => { b.classList.add("copied"); sound.play("boing"); setTimeout(() => b.classList.remove("copied"), 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, () => { location.href = "mailto:" + email; });
    else location.href = "mailto:" + email;
  });

  /* ---------- Character eyes follow the cursor ---------- */
  let mx = innerWidth / 2, my = innerHeight / 3, eyeQueued = false;
  const moveEyes = () => {
    eyeQueued = false;
    document.querySelectorAll(".eye").forEach(eye => {
      const r = eye.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const ang = Math.atan2(my - cy, mx - cx), max = parseFloat(eye.dataset.r) || 3.5;
      const d = Math.min(max, Math.hypot(mx - cx, my - cy) / 30);
      eye.querySelector(".pupil").style.transform = `translate(${Math.cos(ang) * d}px, ${Math.sin(ang) * d}px)`;
    });
  };
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; if (!eyeQueued) { eyeQueued = true; requestAnimationFrame(moveEyes); } }, { passive: true });
  addEventListener("scroll", () => { if (!eyeQueued) { eyeQueued = true; requestAnimationFrame(moveEyes); } }, { passive: true });

  // random blinking
  setInterval(() => {
    const chars = document.querySelectorAll(".char");
    if (!chars.length) return;
    const c = chars[Math.floor(Math.random() * chars.length)];
    c.classList.add("blink"); setTimeout(() => c.classList.remove("blink"), 260);
  }, 1400);

  // click/tap a character: squash & boing
  document.addEventListener("click", e => {
    const slot = e.target.closest(".slot, .head-char");
    if (!slot) return;
    slot.classList.remove("bounce"); void slot.offsetWidth; slot.classList.add("bounce");
    sound.play("boing");
  });

  /* ---------- Cursor tag on project cards ---------- */
  const tag = document.createElement("div");
  tag.className = "cursor-tag"; tag.textContent = "Open"; tag.setAttribute("aria-hidden", "true");
  document.body.appendChild(tag);
  addEventListener("pointermove", e => { tag.style.left = e.clientX + "px"; tag.style.top = e.clientY + "px"; }, { passive: true });
  document.addEventListener("pointerover", e => { tag.classList.toggle("show", !!e.target.closest(".card")); });

  /* ---------- Reveal (used sparingly) ---------- */
  window.observeReveals = () => {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: .15 });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  };
  window.observeReveals();

  /* Helpers shared by page scripts */
  window.charFor = (p, mood) => {
    const map = { Packaging: "bottie", Campaign: "spritz", Identity: "jarra", Editorial: "sachi", "Market entry": "sachi" };
    return Ch[map[p.category] || "bottie"]({ mood });
  };
  window.esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  window.imgSrc = (url, w) => (/framerusercontent\.com/.test(url) ? url.split("?")[0] + "?scale-down-to=" + (w || 1024) : url);
})();
