/* ==========================================================
   "Inside the mind of Grace Awaka": scroll journey
   GSAP + ScrollTrigger + Lenis. Content lives in data.js.
   ========================================================== */
(function () {
  const S = window.SITE, P = window.PROJECTS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const html = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = matchMedia("(max-width: 820px)").matches;
  const FLOW = reduce || small;
  if (FLOW) html.classList.add("flow");

  const C = { bordo: "#6C151E", bordoDeep: "#4A0E14", ink: "#1A0508", green: "#0F3D3A", greenDeep: "#0A2B29", cream: "#F5DABF", cream2: "#FBEBDA", skin: "#A8604E", skinD: "#8E4E3E", leaf: "#2F6B62" };

  /* ---------------- Grace, the character ---------------- */
  const ME = `
  <picture>
    <source srcset="assets/images/grace-hero.webp" type="image/webp">
    <img class="me-img" src="assets/images/grace-hero.jpg" width="1312" height="1199" alt="Illustration of Grace at her desk, chin in hand, with a cat peeking over her hair" fetchpriority="high">
  </picture>
  <svg class="pops-layer" viewBox="0 0 1312 1199" aria-hidden="true">
    <g transform="translate(650 300) scale(2.3)">
    <g id="pops">
      <g class="pop" data-x="-150" data-y="-170"><rect x="-14" y="-30" width="28" height="44" rx="9" fill="${C.bordo}" stroke="${C.ink}" stroke-width="4"/><rect x="-5" y="-44" width="10" height="16" fill="${C.ink}"/><rect x="-5" y="-48" width="24" height="7" rx="3" fill="${C.ink}"/><rect x="-9" y="-12" width="18" height="16" rx="3" fill="${C.cream}"/></g>
      <g class="pop" data-x="70" data-y="-215"><path d="M0 -26 L14 6 L6 22 H-6 L-14 6 Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/><circle cy="2" r="4" fill="${C.ink}"/><path d="M0 2 V-24" stroke="${C.ink}" stroke-width="3"/><rect x="-9" y="22" width="18" height="9" fill="${C.ink}"/></g>
      <g class="pop" data-x="130" data-y="-275"><path d="M-30 6 C-14 -22 22 -24 32 -10 C18 14 -12 18 -30 6Z" fill="${C.leaf}" stroke="${C.ink}" stroke-width="4"/><path d="M-26 6 C-4 -2 14 -8 30 -10" stroke="${C.ink}" stroke-width="3" fill="none"/></g>
      <g class="pop" data-x="-45" data-y="-245"><circle r="16" fill="${C.cream}" stroke="${C.ink}" stroke-width="4"/></g>
      <g class="pop" data-x="-5" data-y="-150"><circle r="24" fill="${C.green}" stroke="${C.ink}" stroke-width="4"/></g>
      <g class="pop" data-x="175" data-y="-150"><path d="M0 -20 L4 -4 L20 0 L4 4 L0 20 L-4 4 L-20 0 L-4 -4Z" fill="${C.cream}"/></g>
      <g class="pop" data-x="-225" data-y="-95"><path d="M-22 -20 h44 l3 6 l-3 6 l3 6 l-3 6 l3 6 l-3 6 h-44 l-3 -6 l3 -6 l-3 -6 l3 -6 l-3 -6z" fill="${C.cream}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/><path d="M-10 -2 h20" stroke="${C.bordo}" stroke-width="4" stroke-linecap="round"/></g>
    </g>
    </g>
  </svg>`;

  /* ---------------- Nairobi matatu ---------------- */
  const MATATU = `
  <svg viewBox="0 0 360 170" aria-hidden="true">
    <rect x="70" y="8" width="210" height="12" rx="4" fill="${C.ink}"/><rect x="90" y="2" width="8" height="10" fill="${C.ink}"/><rect x="250" y="2" width="8" height="10" fill="${C.ink}"/>
    <path d="M24 30 Q24 18 40 18 H300 Q330 18 342 50 L352 90 Q356 106 356 116 V128 Q356 136 348 136 H20 Q12 136 12 128 V44 Q12 30 24 30Z" fill="${C.cream}" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    <rect x="12" y="96" width="344" height="18" fill="${C.bordo}"/>
    <path d="M12 86 H356" stroke="${C.green}" stroke-width="6"/>
    <g fill="${C.greenDeep}" stroke="${C.ink}" stroke-width="4">
      <rect x="30" y="32" width="52" height="40" rx="8"/><rect x="92" y="32" width="52" height="40" rx="8"/><rect x="154" y="32" width="52" height="40" rx="8"/><rect x="216" y="32" width="52" height="40" rx="8"/>
      <path d="M280 32 H306 Q324 32 332 52 L340 72 H280 Z"/>
    </g>
    <text x="150" y="110" text-anchor="middle" font-family="Big Shoulders, sans-serif" font-weight="900" font-size="15" fill="${C.cream}" letter-spacing="2">PICK ME UP · NAIROBI</text>
    <rect x="314" y="112" width="38" height="14" rx="2" fill="#F2D24B" stroke="${C.ink}" stroke-width="2"/>
    <text x="333" y="123" text-anchor="middle" font-family="Big Shoulders, sans-serif" font-weight="900" font-size="10" fill="${C.ink}">KGA 254</text>
    <circle cx="350" cy="78" r="6" fill="#FFE9A8" stroke="${C.ink}" stroke-width="3"/>
    <g class="wheel"><circle cx="78" cy="138" r="24" fill="${C.ink}"/><circle cx="78" cy="138" r="10" fill="${C.cream}"/></g>
    <g class="wheel"><circle cx="286" cy="138" r="24" fill="${C.ink}"/><circle cx="286" cy="138" r="10" fill="${C.cream}"/></g>
    <path d="M-30 120 h30 M-40 100 h34 M-24 80 h20" stroke="${C.cream}" stroke-width="4" stroke-linecap="round" opacity=".6" class="speed"/>
  </svg>`;

  $("#me").innerHTML = ME;
  $("#matatu").innerHTML = MATATU;

  /* ---------------- type helpers ---------------- */
  let seed = 7;
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  $$(".amp").forEach(el => {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    el.innerHTML = text.split(/\s+/).map(w =>
      `<span class="w" aria-hidden="true">${[...w].map(c => {
        const r = rnd(); const cls = r < .12 ? " s" : r < .24 ? " u" : r < .29 ? " i" : "";
        return `<span class="ch${cls}">${c}</span>`;
      }).join("")}</span>`).join(" ");
  });
  $$(".words").forEach(el => { el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="wd">${w}</span>`).join(""); });

  /* ---------------- content from data.js ---------------- */
  const imgSrc = (u, w) => (/framerusercontent\.com/.test(u) ? u.split("?")[0] + "?scale-down-to=" + (w || 1024) : u);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  $("#track").insertAdjacentHTML("beforeend", P.filter(p => p.featured).slice(0, 6).map(p => `
    <a class="proj" href="project.html?p=${p.slug}">
      <div class="label2"><span>${esc(p.title)}</span><em>${esc(p.subtitle)}</em></div>
      <div class="cover" style="--c:${p.color}">${p.images.length
        ? `<img src="${imgSrc(p.images[0], 1024)}" alt="${esc(p.title)}" loading="lazy" onerror="this.outerHTML='<span class=&quot;ph&quot;>${esc(p.title)}</span>'">`
        : `<span class="ph">${esc(p.title)}</span>`}</div>
      <h3>${esc(p.tagline)}</h3>
      <p>${esc(p.result || p.overview).slice(0, 140)}</p>
    </a>`).join(""));
  $("#tools").innerHTML = S.tools.slice(0, 11).map(t => `<span>${esc(t)}</span>`).join("");
  $("#yr").textContent = new Date().getFullYear();

  /* ---------------- copy email ---------------- */
  $("#copy").addEventListener("click", () => {
    const b = $("#copy");
    navigator.clipboard?.writeText(S.email).then(() => { b.textContent = "Copied"; b.classList.add("done"); setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600); }, () => location.href = "mailto:" + S.email);
  });


  /* ---------------- live selection-box size ---------------- */
  const sel = $(".sel"), dim = $("#dim");
  (function dims() {
    const r = sel.getBoundingClientRect();
    dim.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
    requestAnimationFrame(dims);
  })();

  /* ---------------- sound: a soft synthesised pad ---------------- */
  const sound = {
    on: false, ctx: null, master: null, timer: null, step: 0,
    chords: [[220, 277.18, 329.63, 415.3], [196, 246.94, 293.66, 369.99], [174.61, 220, 261.63, 329.63], [196, 233.08, 293.66, 349.23]],
    start() {
      const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
      this.ctx = this.ctx || new AC();
      const ctx = this.ctx;
      if (!this.master) {
        this.master = ctx.createGain(); this.master.gain.value = 0;
        const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 1400;
        this.master.connect(lp); lp.connect(ctx.destination);
      }
      ctx.resume();
      this.master.gain.cancelScheduledValues(ctx.currentTime);
      this.master.gain.linearRampToValueAtTime(.09, ctx.currentTime + 1.5);
      const play = () => {
        const t = ctx.currentTime, ch = this.chords[this.step++ % this.chords.length];
        ch.forEach((f, i) => ["sine", "triangle"].forEach((type, k) => {
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = type; o.frequency.value = f / (k ? 2 : 1); o.detune.value = (i - 1.5) * 4 + (k ? -6 : 6);
          g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.05, t + 1.6); g.gain.linearRampToValueAtTime(0, t + 6.2);
          o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 6.4);
        }));
      };
      play(); this.timer = setInterval(play, 4500);
    },
    stop() { if (!this.ctx) return; clearInterval(this.timer); this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + .8); },
    blip(freq = 660) {
      if (!this.on || !this.ctx) return;
      const t = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.frequency.value = freq; o.type = "sine"; g.gain.setValueAtTime(.06, t); g.gain.exponentialRampToValueAtTime(.0001, t + .5);
      o.connect(g); g.connect(this.ctx.destination); o.start(t); o.stop(t + .5);
    }
  };
  const sbtn = $("#sound");
  sbtn.addEventListener("click", () => {
    sound.on = !sound.on;
    sound.on ? sound.start() : sound.stop();
    sbtn.setAttribute("aria-pressed", sound.on);
    sbtn.setAttribute("aria-label", sound.on ? "Turn background music off" : "Turn background music on");
    $(".sound-label", sbtn).textContent = sound.on ? "Sound on" : "Sound off";
  });

  /* ---------------- per-scene colours ---------------- */
  const SCENES = {
    hero: ["#64132F", C.cream], hello: [C.green, C.cream], systems: [C.cream, C.bordo], beliefs: [C.bordo, C.cream],
    based: [C.green, C.cream], work: [C.cream, C.bordo], about: [C.bordo, C.cream], contact: [C.bordoDeep, C.cream]
  };

  const gs = window.gsap;
  if (!gs) return;
  gs.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* hero idle loops (both modes) */
  gs.set("#me", { xPercent: FLOW ? 0 : -50 });
  gs.to(".me-img", { y: -6, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gs.to(".dd", { y: "random(-10, 10)", x: "random(-8, 8)", rotation: "random(-12, 12)", duration: "random(2, 4)", ease: "sine.inOut", yoyo: true, repeat: -1 });
  gs.set(".pop", { x: 0, y: 0, scale: 0, transformOrigin: "50% 50%" });
  gs.to(".wheel", { rotation: 360, svgOrigin: "0 0", transformOrigin: "50% 50%", duration: 1, ease: "none", repeat: -1 });

  /* ---------------- MOBILE / REDUCED MOTION: simple flow ---------------- */
  if (FLOW) {
    $$(".layer").forEach(l => { const [bg, fg] = SCENES[l.dataset.scene]; l.style.setProperty("--lbg", bg); l.style.setProperty("--lfg", fg); });
    if (!reduce) {
      $$(".pop").forEach((p, i) => gs.to(p, { x: +p.dataset.x * .55, y: +p.dataset.y * .5, scale: 1, duration: .8, delay: .9 + i * .08, ease: "back.out(1.6)" }));
      $$(".layer > *, .bl-scene > *").forEach(el => el.classList.add("reveal"));
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
      $$(".reveal").forEach(el => io.observe(el));
    }
    $$("[data-go]").forEach(b => b.addEventListener("click", () => $("#s-" + b.dataset.go).scrollIntoView({ behavior: "smooth" })));
    return;
  }

  /* ---------------- DESKTOP: the scroll journey ---------------- */
  const lenis = new Lenis({ lerp: .09, wheelMultiplier: .9 });
  lenis.on("scroll", ScrollTrigger.update);
  gs.ticker.add(t => lenis.raf(t * 1000));
  gs.ticker.lagSmoothing(0);

  const stage = $("#stage"), top = $("#top"), ruler = $("#ruler");
  const tl = gs.timeline({ defaults: { ease: "none" } });
  const colour = (name, at) => {
    const [bg, fg] = SCENES[name];
    tl.to(stage, { backgroundColor: bg, color: fg, duration: .35 }, at)
      .to([top, ruler], { color: fg, duration: .35 }, at);
  };
  const show = (el, at, d = .3) => tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: d }, at);
  const hide = (el, at, d = .3) => tl.to(el, { autoAlpha: 0, duration: d }, at);
  const labels = {};
  const mark = (name, at) => { labels[name] = at; tl.addLabel(name, at); };

  /* 0 · hero: the lid opens, ideas pop out, we fall inside */
  mark("hero", 0);
  tl.to([".kicker", ".phrase", ".hint", ".aisle", "#fakeCursor", "#dim"], { autoAlpha: 0, y: -30, duration: .35, stagger: .03 }, .05)
    .to(".name-wrap", { y: -60, autoAlpha: 0, duration: .5 }, .35)
;
  $$(".pop").forEach((p, i) => tl.to(p, { x: +p.dataset.x, y: +p.dataset.y, scale: 1, duration: .45, ease: "back.out(1.7)" }, .3 + i * .05));
  tl.to("#me", { scale: 9, transformOrigin: "36% 33%", duration: 1.1, ease: "power3.in" }, .95)
    .to(".pop", { scale: 2.4, autoAlpha: 0, duration: .6, stagger: .02 }, 1.1)
    .to("#s-hero .doodles", { autoAlpha: 0, duration: .4 }, .9);
  colour("hello", 1.65);
  hide("#s-hero", 1.85, .2);

  /* 1 · hello */
  show("#s-hello", 1.8, .2);
  tl.from("#s-hello .hi-line .ch", { yPercent: 110, autoAlpha: 0, rotate: 8, stagger: .025, duration: .35, ease: "back.out(1.6)" }, 1.9)
    .from("#s-hello .cap", { y: 30, autoAlpha: 0, duration: .3 }, 2.25)
    .from("#s-hello .dd", { scale: 0, duration: .3, stagger: .04 }, 2.0);
  mark("hello", 2.3);
  hide("#s-hello", 3.05);

  /* 2 · I build brands */
  colour("systems", 3.15);
  show("#s-systems", 3.3);
  tl.from(".sys-small .ch", { y: 40, autoAlpha: 0, stagger: .03, duration: .25 }, 3.35)
    .from(".sys-word", { yPercent: 40, autoAlpha: 0, duration: .35 }, 3.45)
    .from(".bottle", { y: 120, rotation: 10, autoAlpha: 0, duration: .45, ease: "back.out(1.4)" }, 3.55)
    .from(".label", { scale: 0, rotation: -8, duration: .35, ease: "back.out(2)" }, 3.85)
    .from(".label .bar, .label .btn", { scaleX: 0, transformOrigin: "left", stagger: .06, duration: .2 }, 4.05)
    .from(".sw", { x: 80, autoAlpha: 0, stagger: .06, duration: .25, ease: "back.out(2)" }, 3.95)
    .from("#s-systems .cap", { y: 24, autoAlpha: 0, duration: .25 }, 4.3);
  mark("systems", 3.9);
  hide("#s-systems", 4.95);

  /* 3 · beliefs */
  colour("beliefs", 5.05);
  show("#s-beliefs", 5.15, .1);
  const bA = $(".bl-a"), bB = $$(".bl-b"), bC = $(".bl-c");
  show(bA, 5.2);
  tl.from(".bl-years", { scale: .6, autoAlpha: 0, duration: .4, ease: "back.out(1.5)" }, 5.2)
    .from(".bl-hands .ch", { y: 30, autoAlpha: 0, stagger: .015, duration: .2 }, 5.45);
  mark("beliefs", 5.5);
  hide(bA, 6.05, .2);
  bB.forEach((b, i) => {
    const t0 = 6.25 + i * 1.1;
    show(b, t0, .2);
    tl.fromTo($$(".wd", b), { opacity: .15 }, { opacity: 1, stagger: .05, duration: .08 }, t0 + .1)
      .from($$("p", b), { y: 20, autoAlpha: 0, duration: .2, stagger: .1 }, t0 + .45);
    hide(b, t0 + .95, .15);
  });
  const tC = 6.25 + bB.length * 1.1;
  show(bC, tC, .2);
  tl.from(".bl-c .c2 .ch", { yPercent: 100, autoAlpha: 0, stagger: .012, duration: .2 }, tC + .15)
    .from(".bl-c .c3", { y: 20, autoAlpha: 0, duration: .2 }, tC + .45);
  hide("#s-beliefs", tC + .95);

  /* 4 · based in Nairobi */
  const tB = tC + 1.1;
  colour("based", tB);
  show("#s-based", tB + .05);
  tl.from(".based-text .ch", { y: 60, autoAlpha: 0, rotate: -6, stagger: .02, duration: .25, ease: "back.out(1.6)" }, tB + .1)
    .from(".skyline", { yPercent: 40, autoAlpha: 0, duration: .3 }, tB + .1)
    .fromTo("#matatu", { x: () => -innerWidth * .35 }, { x: () => innerWidth * 1.1, duration: 1.6 }, tB + .2)
    .from("#s-based .cap", { y: 20, autoAlpha: 0, duration: .25 }, tB + .5);
  mark("based", tB + .5);
  hide("#s-based", tB + 1.8);

  /* 5 · selected work: horizontal track */
  const tW = tB + 2.0;
  colour("work", tW);
  show("#s-work", tW + .05);
  tl.from(".work-head > *", { y: 40, autoAlpha: 0, stagger: .08, duration: .3 }, tW + .1)
    .to("#track", { x: () => -Math.max(0, $("#track").scrollWidth - innerWidth + 40), duration: 3 }, tW + .45);
  mark("work", tW + .35);
  hide("#s-work", tW + 3.55);

  /* 6 · about */
  const tA = tW + 3.75;
  colour("about", tA);
  show("#s-about", tA + .05);
  tl.from(".st span", { yPercent: 60, autoAlpha: 0, stagger: .1, duration: .3 }, tA + .1)
    .from(".about-sub, .facts > div", { y: 26, autoAlpha: 0, stagger: .07, duration: .25 }, tA + .4)
    .from(".tools span", { scale: 0, stagger: .025, duration: .15, ease: "back.out(2)" }, tA + .6)
    .from(".more .pill", { y: 20, autoAlpha: 0, stagger: .08, duration: .2 }, tA + .8);
  mark("about", tA + .45);
  hide("#s-about", tA + 1.4);

  /* 7 · contact */
  const tK = tA + 1.55;
  colour("contact", tK);
  show("#s-contact", tK + .05);
  tl.from(".contact h2 .ch", { yPercent: 100, autoAlpha: 0, stagger: .01, duration: .25 }, tK + .1)
    .from(".contact .links > *, .contact .pill, .foot", { y: 20, autoAlpha: 0, stagger: .06, duration: .2 }, tK + .4);
  mark("contact", tK + .6);
  tl.to({}, { duration: .5 }, tK + .9); // little hold at the end

  /* scroll length: about one screen per timeline unit */
  const TOTAL = tl.duration();
  const spacer = $("#spacer");
  spacer.style.height = (TOTAL * 90 + 100) + "vh";

  const head = $("#head");
  let lastScene = "hero";
  const st = ScrollTrigger.create({
    trigger: spacer, start: "top top", end: "bottom bottom", scrub: .6, animation: tl,
    invalidateOnRefresh: true,
    onUpdate: self => {
      head.style.left = (self.progress * 100) + "%";
      const t = self.progress * TOTAL;
      let cur = "hero";
      for (const [k, v] of Object.entries(labels)) if (t >= v - .4) cur = k;
      $$(".ruler button").forEach(b => b.classList.toggle("on", b.dataset.go === cur));
      if (cur !== lastScene) { sound.blip(440 + Object.keys(labels).indexOf(cur) * 60); lastScene = cur; }
    }
  });
  /* ruler labels */
  const nice = { hello: "Hello", systems: "Brands", beliefs: "Beliefs", based: "Nairobi", work: "Work", about: "About", contact: "Contact" };
  Object.entries(nice).forEach(([k, txt]) => {
    const b = document.createElement("button");
    b.dataset.go = k; b.tabIndex = -1; b.textContent = txt;
    b.style.left = Math.min(97, (labels[k] / TOTAL) * 100) + "%";
    ruler.appendChild(b);
  });
  const go = name => {
    const y = st.start + (st.end - st.start) * ((labels[name] + .15) / TOTAL);
    lenis.scrollTo(Math.min(y, st.end), { duration: 1.8 });
  };
  document.addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b && labels[b.dataset.go] !== undefined) { e.preventDefault(); go(b.dataset.go); } });

  /* fake collaborator cursor: drags the selection handle, then wanders */
  const cur = $("#fakeCursor"), wrap = $("#nameWrap");
  const handle = () => { const r = wrap.getBoundingClientRect(), s = $("#s-hero").getBoundingClientRect(); return { x: r.right - s.left, y: r.bottom - s.top }; };
  gs.set(cur, { x: innerWidth * .78, y: innerHeight * .55 });
  const loop = gs.timeline({ repeat: -1, repeatDelay: 1.2, delay: 1.5 });
  loop.to(cur, { x: () => handle().x - 4, y: () => handle().y - 4, duration: 1.2, ease: "power2.inOut" })
      .to(sel, { right: -36, bottom: -14, duration: .9, ease: "power1.inOut" })
      .to(cur, { x: "+=36", y: "+=14", duration: .9, ease: "power1.inOut" }, "<")
      .to(sel, { right: 0, bottom: 0, duration: .7, ease: "back.out(2)", delay: .4 })
      .to(cur, { x: () => innerWidth * .2, y: () => innerHeight * .3, duration: 1.6, ease: "power2.inOut" })
      .to(cur, { x: () => innerWidth * .78, y: () => innerHeight * .55, duration: 1.6, ease: "power2.inOut", delay: .6 });

  /* intro entrance */
  gs.from(["#top", ".kicker", ".name-wrap", ".phrase"], { y: 30, autoAlpha: 0, duration: .9, stagger: .12, ease: "power3.out", delay: .1 });
  gs.from("#me", { yPercent: 40, duration: 1.2, ease: "back.out(1.2)", delay: .3 });
  gs.from([".aisle", ".hint", "#ruler"], { autoAlpha: 0, y: 20, duration: .6, stagger: .1, delay: 1.1 });

  addEventListener("resize", () => {
    if (matchMedia("(max-width: 820px)").matches) location.reload();
  });
})();
