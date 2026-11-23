/* ============================================================
   Visual + text helpers shared by every course.
   Everything returns an HTML string. Diagrams are inline SVG.
   ============================================================ */
const R = String.raw;
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const M = {};

/* ---------- text blocks ---------- */
M.box = (kind, title, html) => `<div class="box ${kind}"><div class="bt">${title}</div>${html}</div>`;
M.def = html => M.box('', 'Terms, one per line', html);
M.rule = html => M.box('note', 'The result', html);
M.trap = html => M.box('trap', 'Trap', html);
M.tip = html => M.box('exam', 'Exam lens', html);
M.lines = arr => '<div class="lines">' + arr.map(x => `<p>${x}</p>`).join('') + '</div>';
M.steps = arr => '<ol class="steps">' + arr.map(x => `<li>${x}</li>`).join('') + '</ol>';
M.ul = arr => '<ul class="tight">' + arr.map(x => `<li>${x}</li>`).join('') + '</ul>';
M.code = (src, cap) => `<pre class="code">${esc(src.replace(/^\n+|\s+$/g, ''))}</pre>` + (cap ? `<div class="mcap">${cap}</div>` : '');
M.table = (head, rows, cap) => '<div class="fig"><table class="t">' + (head ? '<tr>' + head.map(h => `<th>${h}</th>`).join('') + '</tr>' : '') +
  rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</table></div>' + (cap ? `<div class="mcap">${cap}</div>` : '');
/* "Why?" list: [[alternative, one-line check], ...] */
M.why = rows => '<p><b>Why? Check every alternative:</b></p><ul class="tight">' + rows.map(([a, b]) => `<li><b>${a}</b> — ${b}</li>`).join('') + '</ul>';

/* ---------- generic SVG graph ----------
   nodes: [{id, x, y, t (label, \n for new line), w, h, shape:'rect'|'round'|'circle'|'diamond'|'note', hl, fill, sub}]
   edges: [{a, b, lab, dash, hl, bend (px), back (bool, route below)}]          */
M._wrap = (t) => String(t).split('\n');
M.graph = function (nodes, edges, o = {}) {
  const by = {}; nodes.forEach(n => { n.w = n.w || Math.max(70, Math.max(...M._wrap(n.t).map(s => s.length)) * 7.4 + 18); n.h = n.h || (M._wrap(n.t).length * 16 + (n.sub ? 16 : 0) + 14); by[n.id] = n; });
  const W = o.W || Math.max(...nodes.map(n => n.x + n.w / 2)) + 20, H = o.H || Math.max(...nodes.map(n => n.y + n.h / 2)) + 24;
  const id = 'g' + Math.random().toString(36).slice(2, 7);
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="${esc(o.label || 'diagram')}"><defs>
<marker id="${id}a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--ink2)"/></marker>
<marker id="${id}h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--good)"/></marker></defs>`;
  const clip = (n, tx, ty) => { // point on n's border toward (tx,ty)
    const dx = tx - n.x, dy = ty - n.y; if (!dx && !dy) return [n.x, n.y];
    if (n.shape === 'circle') { const r = n.w / 2, d = Math.hypot(dx, dy); return [n.x + dx / d * r, n.y + dy / d * r]; }
    const hw = n.w / 2 + 2, hh = n.h / 2 + 2, k = Math.min(Math.abs(dx) > 1e-9 ? hw / Math.abs(dx) : 1e9, Math.abs(dy) > 1e-9 ? hh / Math.abs(dy) : 1e9);
    return [n.x + dx * k, n.y + dy * k];
  };
  edges.forEach(e => {
    const A = by[e.a], B = by[e.b]; if (!A || !B) return;
    const col = e.hl ? 'var(--good)' : 'var(--ink2)', mk = `url(#${id}${e.hl ? 'h' : 'a'})`;
    if (e.back) { // route underneath: down from A, across, up into B
      const yb = Math.max(A.y + A.h / 2, B.y + B.h / 2) + (e.drop || 26);
      s += `<path d="M${A.x},${A.y + A.h / 2} L${A.x},${yb} L${B.x},${yb} L${B.x},${B.y + B.h / 2 + 2}" fill="none" stroke="${col}" stroke-width="${e.hl ? 2.6 : 1.5}" ${e.dash ? 'stroke-dasharray="5 4"' : ''} marker-end="${mk}"/>`;
      if (e.lab) s += `<text x="${(A.x + B.x) / 2}" y="${yb - 5}" font-size="11.5" text-anchor="middle" fill="var(--muted)">${e.lab}</text>`;
      return;
    }
    let [x1, y1] = clip(A, B.x, B.y), [x2, y2] = clip(B, A.x, A.y);
    let d = `M${x1},${y1} L${x2},${y2}`, lx = (x1 + x2) / 2, ly = (y1 + y2) / 2 - 6;
    if (e.bend) { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, nx = -(y2 - y1), ny = x2 - x1, L = Math.hypot(nx, ny) || 1, cx = mx + nx / L * e.bend, cy = my + ny / L * e.bend; d = `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`; lx = cx; ly = cy; }
    s += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${e.hl ? 2.6 : 1.5}" ${e.dash ? 'stroke-dasharray="5 4"' : ''} marker-end="${e.noArrow ? '' : mk}"/>`;
    if (e.lab) s += `<text x="${lx}" y="${ly}" font-size="11.5" text-anchor="middle" fill="var(--ink2)" paint-order="stroke" stroke="var(--bg)" stroke-width="4">${e.lab}</text>`;
  });
  nodes.forEach(n => {
    const fill = n.fill || (n.hl ? 'var(--goodbg)' : 'var(--panel)'), st = n.hl ? 'var(--good)' : 'var(--ink2)', sw = n.hl ? 2.2 : 1.3;
    if (n.shape === 'circle') s += `<circle cx="${n.x}" cy="${n.y}" r="${n.w / 2}" fill="${fill}" stroke="${st}" stroke-width="${sw}"/>`;
    else if (n.shape === 'diamond') s += `<polygon points="${n.x},${n.y - n.h / 2} ${n.x + n.w / 2},${n.y} ${n.x},${n.y + n.h / 2} ${n.x - n.w / 2},${n.y}" fill="${fill}" stroke="${st}" stroke-width="${sw}"/>`;
    else s += `<rect x="${n.x - n.w / 2}" y="${n.y - n.h / 2}" width="${n.w}" height="${n.h}" rx="${n.shape === 'round' ? 14 : 5}" fill="${fill}" stroke="${st}" stroke-width="${sw}"/>`;
    const L = M._wrap(n.t), top = n.y - ((L.length - 1) * 16 + (n.sub ? 16 : 0)) / 2 + 4;
    L.forEach((ln, i) => { s += `<text x="${n.x}" y="${top + i * 16}" font-size="13" text-anchor="middle" font-weight="600">${ln}</text>`; });
    if (n.sub) s += `<text x="${n.x}" y="${top + L.length * 16}" font-size="11.5" text-anchor="middle" fill="var(--muted)">${n.sub}</text>`;
  });
  (o.notes || []).forEach(t => { s += `<text x="${t.x}" y="${t.y}" font-size="${t.fs || 12}" text-anchor="${t.a || 'middle'}" fill="${t.c || 'var(--muted)'}" font-weight="${t.b ? 700 : 400}">${t.t}</text>`; });
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* Horizontal chain of boxes: items = ['A','B',...] or [{t,sub,hl}], o.loop adds a return arrow (cycle). */
M.flow = function (items, o = {}) {
  const gap = o.gap || 46; let x = 20; const y = o.y || 40;
  const nodes = items.map((it, i) => { const n = typeof it === 'string' ? { t: it } : { ...it }; n.id = 'n' + i; n.y = y; n.w = n.w || Math.max(80, Math.max(...M._wrap(n.t).map(s => s.length)) * 7.4 + 18); n.x = x + n.w / 2; x += n.w + gap; n.shape = n.shape || 'round'; return n; });
  const edges = nodes.slice(1).map((n, i) => ({ a: 'n' + i, b: n.id, lab: (o.labs || [])[i] }));
  if (o.loop) edges.push({ a: nodes[nodes.length - 1].id, b: nodes[0].id, back: true, lab: o.loop === true ? '' : o.loop, dash: true });
  return M.graph(nodes, edges, { cap: o.cap, label: o.label, H: o.loop ? y + 70 : undefined });
};

/* ---------- UML class diagram ----------
   classes: [{id, name, attrs:[], ops:[], x, y, stereo}]  (x,y = top-left)
   rels: [{a, b, k:'assoc'|'comp'|'agg'|'inh'|'dep'|'line', lab}]
     comp/agg: diamond at b (b = the WHOLE).  inh: hollow triangle at b (b = PARENT).
     assoc: open arrow at b (a uses b).  dep: dashed arrow a -> b.  line: plain association line. */
M.uml = function (classes, rels, o = {}) {
  const by = {};
  classes.forEach(c => {
    const rows = [c.name, ...(c.attrs || []), ...(c.ops || [])];
    c.w = c.w || Math.max(110, Math.max(...rows.map(r => r.length)) * 7 + 22);
    c.h = 26 + (c.stereo ? 13 : 0) + ((c.attrs || []).length || (c.compact ? 0 : 0.6)) * 16 + 8 + ((c.ops || []).length || (c.compact ? 0 : 0.6)) * 16 + 6;
    if (c.compact) c.h = 34;
    by[c.id] = c;
  });
  const W = o.W || Math.max(...classes.map(c => c.x + c.w)) + 20, H = o.H || Math.max(...classes.map(c => c.y + c.h)) + 20;
  const cx = c => c.x + c.w / 2, cy = c => c.y + c.h / 2;
  const clip = (c, tx, ty) => { const dx = tx - cx(c), dy = ty - cy(c); const k = Math.min(Math.abs(dx) > 1e-9 ? (c.w / 2) / Math.abs(dx) : 1e9, Math.abs(dy) > 1e-9 ? (c.h / 2) / Math.abs(dy) : 1e9); return [cx(c) + dx * k, cy(c) + dy * k]; };
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="UML class diagram">`;
  rels.forEach(r => {
    const A = by[r.a], B = by[r.b]; if (!A || !B) return;
    const [x1, y1] = clip(A, cx(B), cy(B)), [x2, y2] = clip(B, cx(A), cy(A));
    const ang = Math.atan2(y2 - y1, x2 - x1), ux = Math.cos(ang), uy = Math.sin(ang), px = -uy, py = ux;
    let ex = x2, ey = y2, head = '';
    if (r.k === 'comp' || r.k === 'agg') { // diamond at B
      const L = 18, Wd = 7, bx = x2 - ux * L, by_ = y2 - uy * L, mx = x2 - ux * L / 2, my = y2 - uy * L / 2;
      head = `<polygon points="${x2},${y2} ${mx + px * Wd},${my + py * Wd} ${bx},${by_} ${mx - px * Wd},${my - py * Wd}" fill="${r.k === 'comp' ? 'var(--ink)' : 'var(--panel)'}" stroke="var(--ink)" stroke-width="1.3"/>`; ex = bx; ey = by_;
    } else if (r.k === 'inh') {
      const L = 15, Wd = 9, bx = x2 - ux * L, by_ = y2 - uy * L;
      head = `<polygon points="${x2},${y2} ${bx + px * Wd},${by_ + py * Wd} ${bx - px * Wd},${by_ - py * Wd}" fill="var(--panel)" stroke="var(--ink)" stroke-width="1.3"/>`; ex = bx; ey = by_;
    } else if (r.k === 'assoc' || r.k === 'dep') {
      const L = 11, Wd = 6, bx = x2 - ux * L, by_ = y2 - uy * L;
      head = `<polyline points="${bx + px * Wd},${by_ + py * Wd} ${x2},${y2} ${bx - px * Wd},${by_ - py * Wd}" fill="none" stroke="var(--ink)" stroke-width="1.4"/>`;
    }
    s += `<line x1="${x1}" y1="${y1}" x2="${ex}" y2="${ey}" stroke="var(--ink)" stroke-width="1.3" ${r.k === 'dep' ? 'stroke-dasharray="6 4"' : ''}/>` + head;
    if (r.lab) s += `<text x="${(x1 + x2) / 2 + px * 10}" y="${(y1 + y2) / 2 + py * 10 - 2}" font-size="11.5" text-anchor="middle" fill="var(--muted)">${r.lab}</text>`;
  });
  classes.forEach(c => {
    s += `<rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" fill="${c.hl ? 'var(--acc2)' : 'var(--panel)'}" stroke="var(--ink)" stroke-width="1.3"/>`;
    let y = c.y + 18;
    if (c.stereo) { s += `<text x="${c.x + c.w / 2}" y="${y - 2}" font-size="10.5" text-anchor="middle" fill="var(--muted)">«${c.stereo}»</text>`; y += 13; }
    s += `<text x="${c.x + c.w / 2}" y="${y}" font-size="13" font-weight="700" text-anchor="middle">${c.name}</text>`;
    if (c.compact) return;
    y += 8; s += `<line x1="${c.x}" y1="${y}" x2="${c.x + c.w}" y2="${y}" stroke="var(--ink)" stroke-width="1"/>`;
    (c.attrs || []).forEach(a => { y += 16; s += `<text x="${c.x + 8}" y="${y - 3}" font-size="12">${esc(a)}</text>`; });
    y += (c.attrs || []).length ? 6 : 10; s += `<line x1="${c.x}" y1="${y}" x2="${c.x + c.w}" y2="${y}" stroke="var(--ink)" stroke-width="1"/>`;
    (c.ops || []).forEach(a => { y += 16; s += `<text x="${c.x + 8}" y="${y - 3}" font-size="12">${esc(a)}</text>`; });
  });
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};
/* Legend of the four UML relationship arrows */
M.umlLegend = () => M.uml([
  { id: 'a1', name: 'Seller', x: 10, y: 10, compact: 1 }, { id: 'a2', name: 'Inventory', x: 220, y: 10, compact: 1 },
  { id: 'b1', name: 'Product', x: 10, y: 70, compact: 1 }, { id: 'b2', name: 'Catalogue', x: 220, y: 70, compact: 1 },
  { id: 'c1', name: 'Book', x: 10, y: 130, compact: 1 }, { id: 'c2', name: 'Product ', x: 220, y: 130, compact: 1 },
  { id: 'd1', name: 'BankAccount', x: 10, y: 190, compact: 1 }, { id: 'd2', name: '«interface» iTransaction', x: 220, y: 190, compact: 1, w: 190 }],
  [{ a: 'a1', b: 'a2', k: 'assoc', lab: 'association (uses)' }, { a: 'b1', b: 'b2', k: 'comp', lab: 'composition (part of)' },
   { a: 'c1', b: 'c2', k: 'inh', lab: 'inheritance (is-a)' }, { a: 'd1', b: 'd2', k: 'dep', lab: 'dependency (changes ripple)' }],
  { W: 430, cap: 'How the course draws the four relationships. The diamond sits at the WHOLE; the hollow triangle points at the PARENT.' });

/* ---------- activity network with automatic critical path ----------
   tasks: [{id, t, d}], deps: [[from, to], ...]  -> layered layout, longest path highlighted */
M.net = function (tasks, deps, o = {}) {
  const cp = CALC.critical(tasks, deps);
  const lvl = {}; const order = cp.order;
  order.forEach(id => { lvl[id] = Math.max(0, ...deps.filter(d => d[1] === id).map(d => lvl[d[0]] + 1)); });
  const cols = {}; order.forEach(id => (cols[lvl[id]] = cols[lvl[id]] || []).push(id));
  const brk = s => { if (s.length <= 14 || s.includes('\n')) return s; const sp = [...s.matchAll(/ /g)].map(m => m.index); if (!sp.length) return s; const k = sp.reduce((a, b) => Math.abs(b - s.length / 2) < Math.abs(a - s.length / 2) ? b : a); return s.slice(0, k) + '\n' + s.slice(k + 1); };
  const lab = {}; tasks.forEach(t => lab[t.id] = brk(t.t));
  const wOf = id => Math.max(96, Math.max(...lab[id].split('\n').map(x => x.length)) * 7.4 + 18);
  const colW = o.colW || Math.max(...tasks.map(t => wOf(t.id))) + 34, rowH = o.rowH || 78, maxRows = Math.max(...Object.values(cols).map(c => c.length));
  const nodes = tasks.map(t => { const c = cols[lvl[t.id]], i = c.indexOf(t.id); return { id: t.id, t: lab[t.id], sub: t.d + (o.unit || ' d'), x: colW / 2 + 10 + lvl[t.id] * colW, y: 44 + (i + (maxRows - c.length) / 2) * rowH, w: wOf(t.id), hl: o.noCP ? false : cp.path.includes(t.id) }; });
  const onPath = (a, b) => !o.noCP && cp.path.indexOf(a) > -1 && cp.path.indexOf(b) === cp.path.indexOf(a) + 1;
  const edges = deps.map(([a, b]) => ({ a, b, hl: onPath(a, b) }));
  const cap = o.cap || (o.noCP ? '' : `Critical path (green) = ${cp.path.map(id => tasks.find(t => t.id === id).t.replace(/\n/g, ' ')).join(' → ')} = ${cp.len}${o.unit || ' days'}.`);
  return M.graph(nodes, edges, { cap, label: 'activity network' });
};

/* ---------- simple bar chart ---------- bars: [{lab, v}], o.line: value for a dashed reference line */
M.bars = function (bars, o = {}) {
  bars.forEach(b => { b.lab = b.lab || b.t || ''; if (b.hl && !b.c) b.c = 'var(--good)'; });
  const bw = o.bw || Math.max(46, ...bars.map(b => b.lab.length * 6.4)), gap = 18, L = 40, H = o.H || 150, top = 16, mx = Math.max(...bars.map(b => b.v), o.line || 0) * 1.15;
  const W = L + bars.length * (bw + gap) + 20;
  let s = `<svg viewBox="0 0 ${W} ${H + top + 30}" width="${W}" role="img" aria-label="bar chart">`;
  s += `<line x1="${L - 6}" y1="${top + H}" x2="${W - 6}" y2="${top + H}" stroke="var(--ink2)"/>`;
  bars.forEach((b, i) => { const h = b.v / mx * H, x = L + i * (bw + gap); s += `<rect x="${x}" y="${top + H - h}" width="${bw}" height="${h}" rx="3" fill="${b.c || 'var(--acc)'}" opacity=".85"/><text x="${x + bw / 2}" y="${top + H - h - 4}" font-size="12" text-anchor="middle">${b.v}${o.unit || ''}</text><text x="${x + bw / 2}" y="${top + H + 16}" font-size="11.5" text-anchor="middle" fill="var(--muted)">${b.lab}</text>`; });
  if (o.line != null) { const y = top + H - o.line / mx * H; s += `<line x1="${L - 6}" y1="${y}" x2="${W - 6}" y2="${y}" stroke="var(--good)" stroke-width="2" stroke-dasharray="6 4"/><text x="${W - 8}" y="${y - 5}" font-size="12" text-anchor="end" fill="var(--good)" font-weight="700">${o.lineLab || o.line}</text>`; }
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* ---------- ranked ladder (best at top) ---------- items: [{t, d}] */
M.ladder = function (items, o = {}) {
  const rowH = 40, W = o.W || 560, H = items.length * rowH + 30;
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="ranked ladder">`;
  items.forEach((it, i) => {
    const y = 10 + i * rowH, f = i / Math.max(1, items.length - 1);
    s += `<rect x="40" y="${y}" width="${W - 50}" height="${rowH - 8}" rx="6" fill="var(--panel)" stroke="${f < .34 ? 'var(--good)' : f > .66 ? 'var(--bad)' : 'var(--warn)'}" stroke-width="1.6"/>`;
    s += `<text x="52" y="${y + 21}" font-size="13.5" font-weight="700">${i + 1}. ${it.t}</text><text x="${W - 18}" y="${y + 21}" font-size="12" text-anchor="end" fill="var(--muted)">${it.d || ''}</text>`;
  });
  s += `<text x="20" y="22" font-size="11" text-anchor="middle" fill="var(--good)" font-weight="700">${o.top || 'best'}</text><text x="20" y="${H - 22}" font-size="11" text-anchor="middle" fill="var(--bad)" font-weight="700">${o.bottom || 'worst'}</text>`;
  s += `<line x1="20" y1="30" x2="20" y2="${H - 36}" stroke="var(--muted)" stroke-width="1.5" marker-end=""/>`;
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* ---------- 2×2 quadrant ---------- o: {x:'Coupling', y:'Cohesion', cells:[[tl,tr],[bl,br]], hl:[r,c], xl:['low','high'], yl:['high','low']} */
M.quad = function (o) {
  const W = 470, H = 330, x0 = 90, y0 = 20, cw = 175, ch = 130;
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="quadrant">`;
  for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) {
    const on = o.hl && o.hl[0] === r && o.hl[1] === c, good = o.good && o.good[0] === r && o.good[1] === c;
    s += `<rect x="${x0 + c * cw}" y="${y0 + r * ch}" width="${cw - 6}" height="${ch - 6}" rx="8" fill="${good ? 'var(--goodbg)' : on ? 'var(--warnbg)' : 'var(--panel)'}" stroke="${on ? 'var(--warn)' : good ? 'var(--good)' : 'var(--line)'}" stroke-width="${on || good ? 2.2 : 1.2}"/>`;
    M._wrap(o.cells[r][c]).forEach((ln, i, A) => { s += `<text x="${x0 + c * cw + cw / 2 - 3}" y="${y0 + r * ch + ch / 2 - (A.length - 1) * 8 + i * 16}" font-size="12.5" text-anchor="middle">${ln}</text>`; });
  }
  s += `<text x="${x0 + cw - 3}" y="${H - 6}" font-size="13" text-anchor="middle" font-weight="700">${o.x} →</text>`;
  (o.xl || []).forEach((t, i) => { s += `<text x="${x0 + i * cw + cw / 2 - 3}" y="${y0 + 2 * ch + 12}" font-size="11.5" text-anchor="middle" fill="var(--muted)">${t}</text>`; });
  s += `<text x="16" y="${y0 + ch}" font-size="13" font-weight="700" transform="rotate(-90 16 ${y0 + ch})" text-anchor="middle">${o.y}</text>`;
  (o.yl || []).forEach((t, i) => { s += `<text x="${x0 - 8}" y="${y0 + i * ch + ch / 2}" font-size="11.5" text-anchor="end" fill="var(--muted)">${t}</text>`; });
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* ---------- Kanban / sprint board ---------- cols: [{t, cards:[..]}] */
M.board = function (cols, o = {}) {
  const cw = 150, W = cols.length * (cw + 12) + 12, maxc = Math.max(...cols.map(c => c.cards.length)), H = 44 + maxc * 40 + 12;
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="board">`;
  cols.forEach((c, i) => {
    const x = 12 + i * (cw + 12);
    s += `<rect x="${x}" y="6" width="${cw}" height="${H - 12}" rx="8" fill="var(--line2)"/><text x="${x + cw / 2}" y="28" font-size="13" font-weight="700" text-anchor="middle">${c.t}</text>`;
    c.cards.forEach((k, j) => { const kk = typeof k === 'string' ? { t: k } : k; s += `<rect x="${x + 8}" y="${40 + j * 40}" width="${cw - 16}" height="32" rx="5" fill="${kk.hl ? 'var(--warnbg)' : 'var(--panel)'}" stroke="var(--line)"/><text x="${x + cw / 2}" y="${60 + j * 40}" font-size="11.5" text-anchor="middle">${kk.t}</text>`; });
  });
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* ---------- Git branch graph ----------
   lanes: ['master','feature1'], commits: [{l:laneIndex, x:step, t:'label', hl}], links: [[l1,x1,l2,x2,'label']] */
M.git = function (lanes, commits, links, o = {}) {
  const dx = 70, dy = 52, L = 110, steps = Math.max(...commits.map(c => c.x)) + 1, W = L + steps * dx + 20, H = lanes.length * dy + 20;
  const X = x => L + x * dx, Y = l => 26 + l * dy, colr = l => ['var(--acc)', 'var(--good)', 'var(--warn)', 'var(--bad)'][l % 4];
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="git graph">`;
  lanes.forEach((ln, l) => { const xs = commits.filter(c => c.l === l).map(c => c.x); if (!xs.length) return; s += `<text x="${L - 20}" y="${Y(l) + 4}" font-size="12.5" text-anchor="end" font-weight="700" fill="${colr(l)}">${ln}</text><line x1="${X(Math.min(...xs))}" y1="${Y(l)}" x2="${X(Math.max(...xs))}" y2="${Y(l)}" stroke="${colr(l)}" stroke-width="3"/>`; });
  links.forEach(([l1, x1, l2, x2, t]) => { s += `<path d="M${X(x1)},${Y(l1)} C${X(x1) + 30},${Y(l1)} ${X(x2) - 30},${Y(l2)} ${X(x2)},${Y(l2)}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="${t && /merge|rebase/.test(t) ? '0' : '5 4'}"/>`; if (t) s += `<text x="${(X(x1) + X(x2)) / 2}" y="${(Y(l1) + Y(l2)) / 2 - 4}" font-size="11" text-anchor="middle" fill="var(--muted)">${t}</text>`; });
  commits.forEach(c => { s += `<circle cx="${X(c.x)}" cy="${Y(c.l)}" r="8" fill="${c.hl ? 'var(--warnbg)' : 'var(--panel)'}" stroke="${colr(c.l)}" stroke-width="3"/>`; if (c.t) s += `<text x="${X(c.x)}" y="${Y(c.l) + 24}" font-size="11" text-anchor="middle">${c.t}</text>`; });
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* ---------- line plot ---------- lines: [{f, lab, c}], o: {x0,x1,y1,xl,yl, pts:[{x,y,lab}]} */
M.plot = function (lines, o) {
  const W = 520, H = 300, L = 56, B = 40, T = 14, Rr = 120, pw = W - L - Rr, ph = H - B - T;
  const X = x => L + (x - o.x0) / (o.x1 - o.x0) * pw, Y = y => T + ph - y / o.y1 * ph;
  let s = `<svg viewBox="0 0 ${W} ${H}" width="${W}" role="img" aria-label="plot"><line x1="${L}" y1="${T + ph}" x2="${L + pw}" y2="${T + ph}" stroke="var(--ink2)"/><line x1="${L}" y1="${T}" x2="${L}" y2="${T + ph}" stroke="var(--ink2)"/>`;
  for (let i = 0; i <= 4; i++) { const xv = o.x0 + (o.x1 - o.x0) * i / 4, yv = o.y1 * i / 4; s += `<text x="${X(xv)}" y="${T + ph + 16}" font-size="11" text-anchor="middle" fill="var(--muted)">${+xv.toFixed(0)}</text><text x="${L - 6}" y="${Y(yv) + 4}" font-size="11" text-anchor="end" fill="var(--muted)">${+yv.toFixed(0)}</text>`; }
  s += `<text x="${L + pw / 2}" y="${H - 4}" font-size="12" text-anchor="middle">${o.xl}</text><text x="14" y="${T + ph / 2}" font-size="12" text-anchor="middle" transform="rotate(-90 14 ${T + ph / 2})">${o.yl}</text>`;
  const cols = ['var(--good)', 'var(--acc)', 'var(--bad)', 'var(--warn)'];
  lines.forEach((ln, k) => { let d = ''; for (let i = 0; i <= 60; i++) { const x = o.x0 + (o.x1 - o.x0) * i / 60; d += (i ? 'L' : 'M') + X(x).toFixed(1) + ',' + Y(Math.min(ln.f(x), o.y1 * 1.05)).toFixed(1); } s += `<path d="${d}" fill="none" stroke="${ln.c || cols[k]}" stroke-width="2.4"/><text x="${L + pw + 6}" y="${Y(Math.min(ln.f(o.x1), o.y1)) + 4}" font-size="12" fill="${ln.c || cols[k]}" font-weight="700">${ln.lab}</text>`; });
  (o.pts || []).forEach(p => { s += `<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="4.5" fill="var(--ink)"/><text x="${X(p.x) + 7}" y="${Y(p.y) - 7}" font-size="11.5">${p.lab}</text>`; });
  s += '</svg>';
  return `<div class="fig">${s}</div>` + (o.cap ? `<div class="mcap">${o.cap}</div>` : '');
};

/* Worked example block used inside concept pages */
M.ex = (lvl, q, a) => ({ lvl, q, a });
