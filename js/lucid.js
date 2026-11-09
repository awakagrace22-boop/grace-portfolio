/* ==========================================================
   Grace Awaka: scroll journey ("Scroll to unpack")
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

  const C = { bordo: "#6D2038", bordoDeep: "#4E1628", ink: "#191719", green: "#C77B68", greenDeep: "#0F0E0F", cream: "#F7F4F1", cream2: "#FFFFFF", skin: "#A8604E", skinD: "#8E4E3E", leaf: "#C77B68", rose: "#C77B68", taupe: "#D8C5B7", stone: "#E9E4E1", black: "#191719" };

  /* ---------------- Grace, the character ---------------- */
  const EYES = {"w":1115,"h":1041,"eyes":{"gl":{"clip":[[364,534],[367,533],[371,532],[388,528],[401,525],[406,524],[434,522],[435,522],[438,523],[440,524],[446,528],[447,529],[449,532],[453,540],[454,543],[454,548],[453,550],[452,551],[437,556],[421,561],[417,562],[412,563],[391,563],[386,562],[383,561],[378,559],[376,558],[358,546],[357,545],[357,543],[358,541],[363,535]],"p":[424.5,538.4],"r":21.9,"c":[408.0,542.8]},"gr":{"clip":[[526,519],[526,509],[527,503],[529,497],[535,485],[540,480],[543,478],[558,470],[572,463],[575,462],[590,460],[590,491],[589,495],[588,497],[570,509],[558,515],[552,517],[548,518],[543,519]],"p":[579.9,479.3],"r":20.8,"c":[559.7,491.4]},"cl":{"clip":[[341,218],[338,212],[337,207],[337,200],[338,195],[342,187],[344,185],[347,183],[349,182],[355,180],[360,179],[365,179],[371,180],[375,181],[389,185],[391,187],[393,191],[394,194],[395,198],[395,207],[394,211],[393,212],[381,220],[375,223],[372,224],[368,225],[354,225],[350,224],[344,221]],"p":[385.7,198.9],"r":17.6,"c":[365.29999999999995,202.1]},"cr":{"clip":[[451,164],[451,149],[452,145],[455,139],[457,137],[460,135],[465,133],[470,132],[475,132],[479,133],[497,139],[498,140],[501,146],[502,149],[502,163],[501,167],[498,169],[490,174],[480,179],[475,180],[468,180],[464,179],[461,178],[457,176],[456,175],[452,167]],"p":[493.5,153.1],"r":17.7,"c":[475.6,155.9]}}};
  const eyeSvg = Object.entries(EYES.eyes).map(([k, e]) => {
    const pts = e.clip.map(p => p.join(",")).join(" ");
    const cx = e.c[0], cy = e.c[1];
    const out = e.clip.map(([x, y]) => { const dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy) || 1; return [(x + dx / d * 3).toFixed(1), (y + dy / d * 3).toFixed(1)].join(","); }).join(" ");
    return `<clipPath id="clip-${k}"><polygon points="${pts}"/></clipPath>
      <g class="eye-v" data-k="${k}" data-cx="${cx}" data-cy="${cy}" data-px="${e.p[0]}" data-py="${e.p[1]}" data-cat="${k[0] === "c" ? 1 : 0}">
        <g clip-path="url(#clip-${k})"><circle class="pupil-v" cx="${e.p[0]}" cy="${e.p[1]}" r="${e.r}" fill="#0B0405"/>
        <circle class="glint" cx="${e.p[0] - e.r * .35}" cy="${e.p[1] - e.r * .38}" r="${e.r * .22}" fill="#F7E4D9" opacity=".9"/></g>
        <polygon class="lid" points="${pts}" fill="#B85D73"/>
        <polygon points="${out}" fill="none" stroke="#1A070B" stroke-width="7" stroke-linejoin="round"/>
      </g>`;
  }).join("");
  const ME = `
  <img class="me-img" src="assets/images/grace-cutout.webp" width="${EYES.w}" height="${EYES.h}" alt="Illustration of Grace, chin in hand, with a cat peeking over her hair" fetchpriority="high">
  <svg class="eyes-layer" viewBox="0 0 ${EYES.w} ${EYES.h}" aria-hidden="true">${eyeSvg}</svg>
  <svg class="pops-layer" viewBox="0 0 ${EYES.w} ${EYES.h}" aria-hidden="true">
    <g transform="translate(470 250) scale(2.3)">
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
  <svg viewBox="0 0 400 200" aria-hidden="true">
    <defs>
      <linearGradient id="nb" x1="0" x2="1"><stop offset="0" stop-color="#6D2038"/><stop offset=".45" stop-color="#C77B68"/><stop offset=".8" stop-color="#D8C5B7"/><stop offset="1" stop-color="#F7F4F1"/></linearGradient>
      <radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#C77B68" stop-opacity=".9"/><stop offset="1" stop-color="#C77B68" stop-opacity="0"/></radialGradient>
      <clipPath id="bodyclip"><path d="M30 44 Q30 30 46 30 H318 Q350 30 364 64 L376 104 Q380 120 380 132 V146 Q380 154 372 154 H26 Q18 154 18 146 V58 Q18 44 30 44Z"/></clipPath>
    </defs>
    <ellipse class="underglow" cx="200" cy="176" rx="190" ry="16" fill="url(#glow)"/>
    <!-- roof rack + spoiler -->
    <path d="M60 30 L72 12 H300 L316 30" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    <rect x="100" y="8" width="150" height="10" rx="5" fill="${C.ink}"/>
    <path d="M18 50 L4 40 H34" fill="${C.ink}"/>
    <!-- body -->
    <path d="M30 44 Q30 30 46 30 H318 Q350 30 364 64 L376 104 Q380 120 380 132 V146 Q380 154 372 154 H26 Q18 154 18 146 V58 Q18 44 30 44Z" fill="url(#nb)"/>
    <g clip-path="url(#bodyclip)">
      <!-- graffiti art -->
      <path d="M10 120 Q60 90 110 118 T210 112 T310 120 T400 108 V160 H10Z" fill="${C.ink}" opacity=".9"/>
      <path d="M10 126 Q60 98 110 124 T210 118 T310 126 T400 114" fill="none" stroke="#F7F4F1" stroke-width="4"/>
      <g fill="#F7F4F1" opacity=".9"><circle cx="58" cy="138" r="5"/><circle cx="150" cy="140" r="3"/><circle cx="246" cy="136" r="6"/><circle cx="330" cy="142" r="4"/></g>
      <path d="M200 80 l10 -20 l6 16 l14 -10 l-4 18 l16 4 l-16 8 l6 14 l-16 -8 l-8 14 l-4 -16 l-16 2 l10 -12z" fill="#F7F4F1" opacity=".85"/>
      <path d="M118 84 q8 -18 22 -6 q14 -16 20 6" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>
    </g>
    <path d="M30 44 Q30 30 46 30 H318 Q350 30 364 64 L376 104 Q380 120 380 132 V146 Q380 154 372 154 H26 Q18 154 18 146 V58 Q18 44 30 44Z" fill="none" stroke="${C.ink}" stroke-width="5" stroke-linejoin="round"/>
    <!-- tinted windows -->
    <g fill="#191719" stroke="${C.ink}" stroke-width="4">
      <rect x="36" y="42" width="56" height="40" rx="8"/><rect x="100" y="42" width="56" height="40" rx="8"/><rect x="164" y="42" width="56" height="40" rx="8"/><rect x="228" y="42" width="56" height="40" rx="8"/>
      <path d="M294 42 H320 Q340 42 348 62 L356 82 H294 Z"/>
    </g>
    <g fill="none" stroke="#fff" stroke-width="3" opacity=".35"><path d="M44 74 L62 48"/><path d="M108 74 L126 48"/><path d="M172 74 L190 48"/><path d="M236 74 L254 48"/></g>
    <!-- route board -->
    <rect x="298" y="46" width="44" height="18" rx="3" fill="#F7F4F1" stroke="${C.ink}" stroke-width="2.5"/>
    <text x="320" y="60" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-weight="900" font-size="13" fill="${C.ink}">45</text>
    <!-- side lettering -->
    <text x="164" y="106" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-weight="900" font-size="20" fill="#fff" stroke="${C.ink}" stroke-width="4" paint-order="stroke" letter-spacing="1" transform="rotate(-3 164 100)">GITHURAI 45</text>
    <text x="300" y="120" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-weight="900" font-size="10" fill="${C.ink}" letter-spacing="1">GRACE ON BOARD</text>
    <!-- lights -->
    <circle cx="372" cy="94" r="7" fill="#F7F4F1" stroke="${C.ink}" stroke-width="3"/>
    <rect x="20" y="96" width="8" height="18" rx="2" fill="#C77B68" stroke="${C.ink}" stroke-width="2"/>
    <g class="leds"><circle cx="40" cy="34" r="3" fill="#D8C5B7"/><circle cx="90" cy="34" r="3" fill="#C77B68"/><circle cx="140" cy="34" r="3" fill="#F7F4F1"/><circle cx="190" cy="34" r="3" fill="#D8C5B7"/><circle cx="240" cy="34" r="3" fill="#C77B68"/><circle cx="290" cy="34" r="3" fill="#F7F4F1"/></g>
    <!-- plate -->
    <rect x="336" y="134" width="40" height="14" rx="2" fill="#F7F4F1" stroke="${C.ink}" stroke-width="2"/>
    <text x="356" y="145" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-weight="900" font-size="9" fill="${C.ink}">KGA 45G</text>
    <!-- chrome rims -->
    <g class="wheel"><circle cx="88" cy="158" r="27" fill="${C.ink}"/><circle cx="88" cy="158" r="16" fill="#D9D9E3" stroke="#8E8EA0" stroke-width="2"/><path d="M88 142 V174 M72 158 H104 M77 147 L99 169 M99 147 L77 169" stroke="#8E8EA0" stroke-width="3"/><circle cx="88" cy="158" r="4" fill="${C.ink}"/></g>
    <g class="wheel"><circle cx="310" cy="158" r="27" fill="${C.ink}"/><circle cx="310" cy="158" r="16" fill="#D9D9E3" stroke="#8E8EA0" stroke-width="2"/><path d="M310 142 V174 M294 158 H326 M299 147 L321 169 M321 147 L299 169" stroke="#8E8EA0" stroke-width="3"/><circle cx="310" cy="158" r="4" fill="${C.ink}"/></g>
    <!-- music blasting -->
    <g class="notes" fill="${C.cream}"><path d="M150 20 v-16 l12 -3 v14" stroke="${C.cream}" stroke-width="2.5" fill="none"/><circle cx="147" cy="20" r="4"/><circle cx="159" cy="15" r="4"/><path d="M236 16 v-14" stroke="${C.cream}" stroke-width="2.5"/><circle cx="233" cy="17" r="4"/></g>
    <path d="M-30 140 h30 M-44 116 h36 M-26 92 h22" stroke="${C.cream}" stroke-width="4" stroke-linecap="round" opacity=".6" class="speed"/>
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
  const HL = ["job", "beyond", "dots.", "making."];
  $$(".words").forEach(el => { el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="wd${HL.includes(w) ? " hl" : ""}">${w}</span>`).join(""); });

  /* ---------------- content from data.js ---------------- */
  const imgSrc = (u, w) => (/framerusercontent\.com/.test(u) ? u.split("?")[0] + "?scale-down-to=" + (w || 1024) : u);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  $("#track").insertAdjacentHTML("beforeend", P.filter(p => p.featured).slice(0, 8).map(p => `
    <a class="proj" href="project.html?p=${p.slug}">
      <div class="label2"><span>${esc(p.title)}</span><em>${esc(p.subtitle)}</em></div>
      <div class="cover" style="--c:${p.color}">${p.images.length
        ? `<img src="${imgSrc(p.images[0], 1024)}" alt="${esc(p.title)}" loading="lazy" onerror="this.outerHTML='<span class=&quot;ph&quot;>${esc(p.title)}</span>'">`
        : `<span class="ph">${esc(p.title)}</span>`}</div>
      <h3>${esc(p.tagline)}</h3>
      <p>${esc(p.result || p.overview).slice(0, 140)}</p>
    </a>`).join(""));
  const X = window.EXPLORATIONS || [];
  $("#xtrack").insertAdjacentHTML("beforeend", X.map((p, i) => `
    <a class="proj xcard" href="project.html?p=${p.slug}">
      <div class="label2"><span>${esc(p.title)}</span><em>${esc(p.kind)} · ${esc(p.year)}</em></div>
      <div class="cover" style="--c:${p.color}">${p.images.length
        ? `<img src="${p.images[0]}" alt="${esc(p.title)}, ${esc(p.subtitle).toLowerCase()}" loading="lazy">`
        : `<span class="ph">${esc(p.title)}</span>`}<span class="xsticker">${String(i + 1).padStart(2, "0")}</span></div>
      <h3>${esc(p.subtitle)}</h3>
      <p>${esc(p.tagline)}</p>
    </a>`).join(""));
  $("#doGrid").innerHTML = S.services.map((d, i) => `
    <article class="do-card">
      <span class="do-n">${String(i + 1).padStart(2, "0")}</span>
      <h3>${esc(d.title)}</h3>
      <p>${esc(d.text)}</p>
      <ul>${(d.tags || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
    </article>`).join("");
  $("#yr").textContent = new Date().getFullYear();

  /* ---------------- view bubble over project cards ---------------- */
  const vb = $("#viewBubble");
  addEventListener("pointermove", e => { vb.style.left = e.clientX + "px"; vb.style.top = e.clientY + "px"; vb.classList.toggle("on", !!e.target.closest(".proj")); }, { passive: true });
  /* magnetic buttons */
  $$(".pill, .copy").forEach(b => {
    b.addEventListener("pointermove", e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`; });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });

  /* ---------------- copy email ---------------- */
  $("#copy").addEventListener("click", () => {
    const b = $("#copy");
    navigator.clipboard?.writeText(S.email).then(() => { b.textContent = "Copied"; b.classList.add("done"); setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600); }, () => location.href = "mailto:" + S.email);
  });


  /* ---------------- eyes follow the cursor ---------------- */
  let mx = null, my = null;
  addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  const eyesV = $$(".eye-v");
  (function look() {
    eyesV.forEach(g => {
      const svg = g.ownerSVGElement, m = svg.getScreenCTM(); if (!m) return;
      const cx = +g.dataset.cx, cy = +g.dataset.cy, px = +g.dataset.px, py = +g.dataset.py, cat = g.dataset.cat === "1";
      let tx = px, ty = py;
      if (mx !== null) {
        const sx = cx * m.a + m.e, sy = cy * m.d + m.f;
        const dx = mx - sx, dy = my - sy, d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 260);
        const rx = cat ? 13 : 24, ry = cat ? 12 : 11;
        tx = cx + dx / d * rx * k; ty = cy + dy / d * ry * k;
      }
      const c = g.querySelectorAll("circle");
      const cur = g._p || [px, py];
      cur[0] += (tx - cur[0]) * .18; cur[1] += (ty - cur[1]) * .18; g._p = cur;
      const ox = cur[0] - px, oy = cur[1] - py;
      c.forEach(el => el.setAttribute("transform", `translate(${ox.toFixed(2)} ${oy.toFixed(2)})`));
    });
    requestAnimationFrame(look);
  })();
  /* blink now and then */
  setInterval(() => {
    const who = Math.random() < .5 ? "g" : "c";
    $$(`.eye-v[data-k^="${who}"]`).forEach(g => { g.classList.add("blink"); setTimeout(() => g.classList.remove("blink"), 180); });
  }, 3200);



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
    $(".sound-label", sbtn).textContent = sound.on ? "Music on" : "Music off";
  });

  /* ---------------- per-scene colours ---------------- */
  const SCENES = {
    hero: [C.bordo, C.cream], impact: [C.black, C.cream], hello: [C.cream, C.black], story: [C.stone, C.black], systems: [C.cream, C.black], beliefs: [C.black, C.cream],
    work: [C.cream, C.black], explore: [C.black, C.cream], based: [C.bordo, C.cream], about: [C.cream, C.black], contact: [C.black, C.cream]
  };

  const gs = window.gsap;
  if (!gs) return;
  gs.registerPlugin(ScrollTrigger, ScrollToPlugin);

  /* hero idle loops (both modes) */
  gs.set("#me", { xPercent: FLOW ? 0 : -44 });
  gs.to("#me", { "--breath": 1, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gs.to(".dd", { y: "random(-10, 10)", x: "random(-8, 8)", rotation: "random(-12, 12)", duration: "random(2, 4)", ease: "sine.inOut", yoyo: true, repeat: -1 });
  gs.set(".pop", { x: 0, y: 0, scale: 0, transformOrigin: "50% 50%" });
  gs.to(".matatu .leds circle", { opacity: .25, duration: .25, stagger: { each: .08, repeat: -1, yoyo: true } });
  gs.to(".matatu .notes", { y: -10, opacity: .3, duration: .7, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gs.to(".matatu svg", { y: -3, duration: .18, ease: "sine.inOut", yoyo: true, repeat: -1 });
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
    Counter.watch(document);
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
  tl.to([".kicker", ".phrase", ".hero-intro", ".hint", ".aisle", ".stamp"], { autoAlpha: 0, y: -30, duration: .35, stagger: .03 }, .05)
    .to(".name-wrap", { y: -60, autoAlpha: 0, duration: .5 }, .35)
;
  $$(".pop").forEach((p, i) => tl.to(p, { x: +p.dataset.x, y: +p.dataset.y, scale: 1, duration: .45, ease: "back.out(1.7)" }, .3 + i * .05));
  tl.to("#me", { yPercent: 70, rotate: -6, duration: 1.0, ease: "power3.in" }, .95)
    .to(".halo", { scale: 4.2, duration: 1.0, ease: "power2.in" }, .9)
    .to(".pop", { scale: 2.4, autoAlpha: 0, duration: .6, stagger: .02 }, 1.1)
    .to("#s-hero .doodles", { autoAlpha: 0, duration: .4 }, .9);
  colour("hello", 1.65);
  hide("#s-hero", 1.85, .2);

  /* 1 · hello */
  show("#s-hello", 1.8, .2);
  tl.from("#s-hello .band", { xPercent: -30, autoAlpha: 0, duration: .4 }, 1.95)
    .from("#s-hello", { "--arch": 0 }, 1.9);
  tl.from("#s-hello .hi-line .ch", { yPercent: 110, autoAlpha: 0, rotate: 8, stagger: .025, duration: .35, ease: "back.out(1.6)" }, 1.9)
    .from("#s-hello .cap", { y: 30, autoAlpha: 0, duration: .3 }, 2.25)
    .from("#s-hello .dd", { scale: 0, duration: .3, stagger: .04 }, 2.0);
  mark("hello", 2.3);
  hide("#s-hello", 3.05);

  /* 2 · story */
  colour("story", 3.15);
  show("#s-story", 3.3);
  tl.from(".story-num b", { scale: .3, rotate: -12, autoAlpha: 0, duration: .4, ease: "back.out(1.8)" }, 3.35)
    .from(".story-num span", { y: 20, autoAlpha: 0, duration: .25 }, 3.55)
    .from(".story-copy p", { y: 30, autoAlpha: 0, stagger: .12, duration: .3 }, 3.45)
    .from(".story-kick .ch", { yPercent: 100, autoAlpha: 0, stagger: .005, duration: .2 }, 3.7)
    .from(".story-kick em", { autoAlpha: 0, scale: .6, duration: .25, ease: "back.out(2)" }, 3.95);
  mark("story", 4.1);
  hide("#s-story", 4.85);

  /* 3 · what I do */
  const tD = 5.0;
  colour("systems", tD);
  show("#s-systems", tD + .1);
  tl.from(".do-small .ch", { y: 30, autoAlpha: 0, stagger: .02, duration: .2 }, tD + .15)
    .from(".do-title", { yPercent: 30, autoAlpha: 0, duration: .35 }, tD + .25)
    .from(".do-card", { y: 140, rotate: (i) => [-6, 4, -3, 5][i % 4], autoAlpha: 0, stagger: .12, duration: .45, ease: "back.out(1.4)" }, tD + .45)
    .from(".do-card li", { scale: 0, autoAlpha: 0, stagger: .01, duration: .12, ease: "back.out(2)" }, tD + .9);
  mark("systems", tD + 1.0);
  hide("#s-systems", tD + 1.9);

  /* 4 · the way I think */
  const tT = tD + 2.05;
  colour("beliefs", tT);
  show("#s-beliefs", tT + .1, .1);
  const bA = $(".bl-a"), bB = $$(".bl-b"), bC = $(".bl-c");
  show(bA, tT + .15);
  tl.from(".bl-hands .ch", { y: 30, autoAlpha: 0, stagger: .015, duration: .2 }, tT + .15)
    .from(".bl-years", { scale: .8, autoAlpha: 0, duration: .4, ease: "back.out(1.5)" }, tT + .3);
  mark("beliefs", tT + .45);
  hide(bA, tT + 1.0, .2);
  bB.forEach((b, i) => {
    const t0 = tT + 1.2 + i * 1.1;
    show(b, t0, .2);
    tl.fromTo($$(".wd", b), { opacity: .15 }, { opacity: 1, stagger: .05, duration: .08 }, t0 + .1)
      .from($$("p", b), { y: 20, autoAlpha: 0, duration: .2, stagger: .1 }, t0 + .45);
    hide(b, t0 + .95, .15);
  });
  /* 4b · a little more about the work */
  const tC = tT + 1.2 + bB.length * 1.1;
  show(bC, tC, .2);
  tl.from(".bl-c .c1", { y: 20, autoAlpha: 0, duration: .2 }, tC + .05)
    .from(".bl-c .c2 .ch", { yPercent: 100, autoAlpha: 0, stagger: .01, duration: .2 }, tC + .15)
    .from(".c-copy p", { y: 24, autoAlpha: 0, stagger: .1, duration: .25 }, tC + .45)
    .from(".c-stat", { scale: .4, rotate: 10, autoAlpha: 0, duration: .4, ease: "back.out(1.8)" }, tC + .55)
    .from(".bl-c .c3, .bl-c .pill", { y: 20, autoAlpha: 0, stagger: .1, duration: .2 }, tC + .8);
  mark("process", tC + .85);
  hide("#s-beliefs", tC + 1.45);

  /* 5 · selected work: horizontal track */
  const tW = tC + 1.6;
  colour("work", tW);
  show("#s-work", tW + .05);
  tl.from("#s-work .work-head > *", { y: 40, autoAlpha: 0, stagger: .08, duration: .3 }, tW + .1)
    .to("#track", { x: () => -Math.max(0, $("#track").scrollWidth - innerWidth + 40), duration: 3 }, tW + .45);
  mark("work", tW + .35);
  hide("#s-work", tW + 3.55);

  /* 6 · explorations: second horizontal track */
  const tX = tW + 3.7;
  colour("explore", tX);
  show("#s-explore", tX + .05);
  tl.from("#s-explore .work-head > *", { y: 40, autoAlpha: 0, stagger: .08, duration: .3 }, tX + .1)
    .from(".xcard", { y: 80, rotate: (i) => (i % 2 ? 4 : -4), autoAlpha: 0, stagger: .08, duration: .4, ease: "back.out(1.5)" }, tX + .2)
    .to("#xtrack", { x: () => -Math.max(0, $("#xtrack").scrollWidth - innerWidth + 40), duration: 2.6 }, tX + .55);
  mark("explore", tX + .4);
  hide("#s-explore", tX + 3.25);

  /* 7 · about me: Nairobi */
  const tB = tX + 3.4;
  colour("based", tB);
  show("#s-based", tB + .05);
  tl.from(".based-kick", { y: 20, autoAlpha: 0, duration: .2 }, tB + .05)
    .from(".based-text .ch", { y: 60, autoAlpha: 0, rotate: -6, stagger: .012, duration: .25, ease: "back.out(1.6)" }, tB + .1)
    .from(".skyline", { yPercent: 40, autoAlpha: 0, duration: .3 }, tB + .1)
    .fromTo("#matatu", { x: () => -innerWidth * .35 }, { x: () => innerWidth * 1.1, duration: 1.6 }, tB + .2)
    .from("#s-based .cap", { y: 20, autoAlpha: 0, duration: .25 }, tB + .5);
  mark("based", tB + .5);
  hide("#s-based", tB + 1.8);

  /* 8 · currently */
  const tA = tB + 1.95;
  colour("about", tA);
  show("#s-about", tA + .05);
  tl.from(".about-copy p", { y: 30, autoAlpha: 0, stagger: .1, duration: .3 }, tA + .1)
    .from(".now-h, .facts > div", { x: 40, autoAlpha: 0, stagger: .07, duration: .25 }, tA + .3)
    .from(".more .pill", { y: 20, autoAlpha: 0, stagger: .08, duration: .2 }, tA + .75);
  mark("about", tA + .45);
  hide("#s-about", tA + 1.4);

  /* 9 · contact */
  const tK = tA + 1.55;
  colour("contact", tK);
  show("#s-contact", tK + .05);
  tl.from(".contact h2 .ch", { yPercent: 100, autoAlpha: 0, stagger: .01, duration: .25 }, tK + .1)
    .from(".contact-sub, .contact-kick, .contact .links > *, .contact .pill, .foot", { y: 20, autoAlpha: 0, stagger: .06, duration: .2 }, tK + .4);
  mark("contact", tK + .6);
  tl.to({}, { duration: .5 }, tK + .9); // little hold at the end

  /* impact dashboard: slot it in right after the hero by pushing everything else back */
  const IMP = 1.75;
  tl.shiftChildren(IMP, true, 1.6);
  Object.keys(labels).forEach(k => { if (labels[k] >= 1.6) labels[k] += IMP; });
  $$(".count").forEach(Counter.prime);
  const runIn = (sel, at) => tl.call(() => $$(sel).forEach(Counter.run), null, at);
  colour("impact", 1.65);
  hide("#s-hero", 1.85, .2);
  show("#s-impact", 1.8, .2);
  tl.from(".impact-head > *", { y: 40, autoAlpha: 0, stagger: .08, duration: .3 }, 1.85)
    .from(".impact-label", { autoAlpha: 0, duration: .2 }, 2.05)
    .from(".metric", { y: 60, autoAlpha: 0, stagger: .07, duration: .35, ease: "power3.out" }, 2.05);
  runIn("#s-impact .count", 2.15);
  mark("impact", 2.45);
  hide("#s-impact", 3.15);
  runIn("#s-story .count", labels.story - .2);
  runIn(".c-stat .count", labels.process - .3);

  /* scroll length: about one screen per timeline unit */
  const TOTAL = tl.duration();
  const spacer = $("#spacer");
  spacer.style.height = (TOTAL * 90 + 100) + "vh";

  window.__J = { labels, TOTAL };
  const head = $("#head");
  let lastScene = "hero";
  const st = ScrollTrigger.create({
    trigger: spacer, start: "top top", end: "bottom bottom", scrub: .6, animation: tl,
    invalidateOnRefresh: true,
    onUpdate: self => {
      head.style.top = (self.progress * 100) + "%";
      const t = self.progress * TOTAL;
      let cur = "hero";
      for (const [k, v] of Object.entries(labels)) if (t >= v - .4) cur = k;
      $$(".ruler button").forEach(b => b.classList.toggle("on", b.dataset.go === cur));
      if (cur !== lastScene) { sound.blip(440 + Object.keys(labels).indexOf(cur) * 60); lastScene = cur; }
    }
  });
  /* ruler labels */
  const nice = { impact: "Impact", hello: "Hello", systems: "What I do", beliefs: "Thinking", work: "Work", explore: "Explorations", based: "About", contact: "Contact" };
  Object.entries(nice).forEach(([k, txt]) => {
    const b = document.createElement("button");
    b.dataset.go = k; b.tabIndex = -1; b.textContent = txt;
    b.style.top = Math.min(97, (labels[k] / TOTAL) * 100) + "%";
    ruler.appendChild(b);
  });
  const go = name => {
    const y = st.start + (st.end - st.start) * ((labels[name] + .15) / TOTAL);
    lenis.scrollTo(Math.min(y, st.end), { duration: 1.8 });
  };
  document.addEventListener("click", e => { const b = e.target.closest("[data-go]"); if (b && labels[b.dataset.go] !== undefined) { e.preventDefault(); go(b.dataset.go); } });

  /* crop marks draw in, the stamp spins in like a sticker */
  gs.from(".crop i", { scale: 0, duration: .6, stagger: .06, ease: "back.out(2)", delay: .9 });
  gs.from(".stamp", { scale: 0, rotate: -120, duration: .9, ease: "back.out(1.8)", delay: 1.4 });
  gs.to(".stamp svg", { rotate: 360, duration: 18, ease: "none", repeat: -1 });

  /* intro entrance */
  gs.from(["#top", ".kicker", ".name-wrap", ".phrase"], { y: 30, autoAlpha: 0, duration: .9, stagger: .12, ease: "power3.out", delay: .1 });
  gs.from("#me", { yPercent: 40, duration: 1.2, ease: "back.out(1.2)", delay: .3 });
  gs.from([".hero-intro", ".aisle", ".hint", "#ruler"], { autoAlpha: 0, y: 20, duration: .6, stagger: .1, delay: 1.1 });

  addEventListener("resize", () => {
    if (matchMedia("(max-width: 820px)").matches) location.reload();
  });
})();
