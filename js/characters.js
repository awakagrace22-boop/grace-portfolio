/* Illustrated mascots: soft-shaded shapes with legs and expressive eyes.
   Each returns an SVG string. Elements with class "eye" follow the cursor. */
(function () {
  const C = {
    oxblood: "#1A0508",
    burgundy: "#6C151E",
    wine: "#8E2430",
    blush: "#F5DABF",
    rose: "#E9C2A0",
    lilac: "#2F6B62",
    paper: "#FBF3F1"
  };
  let uid = 0;

  const grad = (id, stops, cx = .32, cy = .28, r = .9) =>
    `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("")}</radialGradient>`;

  // Eye with optional lid (0 = wide open, 1 = half closed)
  function eye(cx, cy, r, lid = 0, look = 0) {
    const lidPath = lid
      ? `<path d="M${cx - r * 1.15} ${cy - r * 0.2} Q${cx} ${cy - r * (1.6 - lid)} ${cx + r * 1.15} ${cy - r * 0.2} L${cx + r * 1.3} ${cy - r * 1.6} L${cx - r * 1.3} ${cy - r * 1.6} Z" class="lid"/>`
      : "";
    return `<g class="eye" data-r="${(r * 0.45).toFixed(1)}">
      <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 1.18}" fill="${C.paper}"/>
      <g class="pupil" style="transform:translate(${look}px,0)"><circle cx="${cx}" cy="${cy + r * 0.1}" r="${r * 0.52}" fill="${C.oxblood}"/>
      <circle cx="${cx - r * 0.2}" cy="${cy - r * 0.12}" r="${r * 0.16}" fill="${C.paper}"/></g>
      ${lidPath}
    </g>`;
  }
  const pair = (cx, cy, gap, r, lid, fill) =>
    `<g class="eyes" style="--lid:${fill}">${eye(cx - gap, cy, r, lid)}${eye(cx + gap, cy, r, lid)}</g>`;

  const brows = (cx, cy, gap, mood) => {
    if (mood === "sad")
      return `<path d="M${cx - gap - 9} ${cy + 4} L${cx - gap + 7} ${cy - 3}M${cx + gap + 9} ${cy + 4} L${cx + gap - 7} ${cy - 3}" stroke="${C.oxblood}" stroke-width="3.5" stroke-linecap="round"/>`;
    return `<path d="M${cx - gap - 8} ${cy + 2} Q${cx - gap} ${cy - 5} ${cx - gap + 8} ${cy}M${cx + gap - 8} ${cy - 3} Q${cx + gap} ${cy - 10} ${cx + gap + 9} ${cy - 4}" stroke="${C.oxblood}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  };

  // Legs with little rounded shoes
  const legs = (xl, xr, y0, len, shoe, pose) => {
    const kick = pose === "kick" ? 10 : 0;
    return `<g class="legs" stroke="${C.oxblood}" stroke-width="4.5" stroke-linecap="round" fill="none">
      <path d="M${xl} ${y0} q-3 ${len * 0.55} ${-2 - kick} ${len}"/>
      <path class="leg-r" d="M${xr} ${y0} q3 ${len * 0.55} ${2 + kick} ${len}"/>
    </g>
    <g fill="${shoe}" stroke="${C.oxblood}" stroke-width="3">
      <path d="M${xl - 2 - kick + 3} ${y0 + len - 1} h-12 a6 6 0 0 0 0 10 h12 z"/>
      <path d="M${xr + 2 + kick - 3} ${y0 + len - 1} h12 a6 6 0 0 1 0 10 h-12 z"/>
    </g>`;
  };
  const ground = (cx, cy, rx) => `<ellipse class="ground" cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.14}" fill="${C.oxblood}" opacity=".22"/>`;

  /* Drop: a glossy lotion droplet with attitude */
  function drop(o = {}) {
    const g = "g" + ++uid;
    return `<svg class="char char--drop" viewBox="0 0 120 200" aria-hidden="true">
      <defs>${grad(g, [[0, "#FF9BB0"], [.4, "#E0506F"], [1, "#9E1F3D"]])}</defs>
      ${ground(60, 194, 34)}
      <g class="char-body">
        ${legs(48, 72, 140, 44, C.lilac, o.pose)}
        <path d="M60 8 C66 26 106 64 106 100 A46 46 0 0 1 14 100 C14 64 54 26 60 8 Z" fill="url(#${g})"/>
        <ellipse cx="40" cy="72" rx="9" ry="17" fill="#fff" opacity=".28" transform="rotate(24 40 72)"/>
        ${brows(60, 82, 15, o.mood)}
        ${pair(60, 100, 15, 9, o.mood === "sad" ? .5 : 0, C.burgundy)}
      </g>
    </svg>`;
  }

  /* Pump: a tall, elegant handwash bottle */
  function pump(o = {}) {
    const g = "g" + ++uid;
    return `<svg class="char char--pump" viewBox="0 0 120 250" aria-hidden="true">
      <defs>${grad(g, [[0, "#FFF6EC"], [.5, C.blush], [1, "#D9A980"]])}</defs>
      ${ground(60, 244, 36)}
      <g class="char-body">
        ${legs(48, 72, 196, 38, C.burgundy, o.pose)}
        <path d="M44 10 h46 a7 7 0 0 1 0 14 h-26 v18 h-16 v-18 h-4 a7 7 0 0 1 0 -14z" fill="${C.oxblood}"/>
        <rect x="44" y="40" width="32" height="20" rx="6" fill="${C.burgundy}"/>
        <path d="M44 58 h32 c0 12 26 16 26 40 v86 a18 18 0 0 1 -18 18 h-48 a18 18 0 0 1 -18 -18 v-86 c0 -24 26 -28 26 -40z" fill="url(#${g})"/>
        <rect x="18" y="150" width="84" height="14" fill="${C.lilac}" opacity=".9"/>
        <ellipse cx="34" cy="112" rx="5" ry="20" fill="#fff" opacity=".55"/>
        <path class="arm arm--wave" d="M18 128 q-18 -6 -16 -30" stroke="${C.oxblood}" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M102 124 q14 8 4 22 q-4 4 -6 2" stroke="${C.oxblood}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        ${pair(60, 110, 17, 11, .35, "#F7D3DA")}
      </g>
    </svg>`;
  }

  /* Bloom: a scalloped scent-burst that floats and spins */
  function bloom(o = {}) {
    const g = "g" + ++uid;
    const n = 9, R = 70, r = 56, cx = 80, cy = 80;
    let d = "";
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 0.5) / n) * Math.PI * 2, a2 = ((i + 1) / n) * Math.PI * 2;
      const p0 = [cx + r * Math.cos(a0), cy + r * Math.sin(a0)];
      const c = [cx + R * 1.18 * Math.cos(a1), cy + R * 1.18 * Math.sin(a1)];
      const p2 = [cx + r * Math.cos(a2), cy + r * Math.sin(a2)];
      d += (i ? "" : `M${p0[0].toFixed(1)} ${p0[1].toFixed(1)}`) + ` Q${c[0].toFixed(1)} ${c[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return `<svg class="char char--bloom" viewBox="0 0 160 160" aria-hidden="true">
      <defs>${grad(g, [[0, "#7FB3A8"], [.55, "#2F6B62"], [1, "#0F3D3A"]])}</defs>
      <g class="char-body">
        <path class="spin" d="${d} Z" fill="url(#${g})"/>
        <circle cx="64" cy="60" r="10" fill="#fff" opacity=".4"/>
        ${pair(80, 82, 15, 9, .45, C.lilac)}
        <path d="M74 106 q6 5 12 0" stroke="${C.oxblood}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      </g>
    </svg>`;
  }

  /* Arch: a soft rose arch, sitting pretty */
  function arch(o = {}) {
    const g = "g" + ++uid;
    return `<svg class="char char--arch" viewBox="0 0 140 190" aria-hidden="true">
      <defs>${grad(g, [[0, "#F7DCC4"], [.5, C.rose], [1, "#B9784F"]])}</defs>
      ${ground(70, 184, 40)}
      <g class="char-body">
        ${legs(56, 84, 140, 34, C.lilac, "kick")}
        <path d="M18 146 V74 a52 52 0 0 1 104 0 V146 a6 6 0 0 1 -6 6 H24 a6 6 0 0 1 -6 -6z" fill="url(#${g})"/>
        <path d="M36 60 a36 36 0 0 1 30 -26" stroke="#fff" stroke-width="7" stroke-linecap="round" fill="none" opacity=".5"/>
        ${brows(70, 76, 16, o.mood)}
        ${pair(70, 94, 16, 9.5, 0, C.rose)}
      </g>
    </svg>`;
  }

  // Older names kept as aliases so every page keeps working
  const api = { drop, pump, bloom, arch, colors: C };
  api.bottie = pump; api.sachi = arch; api.spritz = drop; api.jarra = bloom;
  window.Characters = api;
})();
