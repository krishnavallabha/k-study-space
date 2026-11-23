/* ============================================================
   Views. Each returns HTML for #main; V.after(...) hooks run after render.
   ============================================================ */
const V = {};
const pct = x => x == null ? '—' : Math.round(x * 100) + '%';
const link = (p, t) => `<a href="#/${APP.code}/${p}">${t}</a>`;
const wkTitle = n => { const w = CO().weeks.find(w => w.n === n); return w ? `Week ${n} · ${w.title}` : 'Week ' + n; };
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const hbar = (lab, v, max, n) => `<div class="hbar"><span class="lab" title="${esc(lab.replace(/<[^>]+>/g, ''))}">${lab}</span><span class="trk"><i style="width:${max ? v / max * 100 : 0}%"></i></span><span class="n">${n == null ? v : n}</span></div>`;
const stat = (v, l) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`;
const qs = (o = {}) => CO().qs.filter(q => (!o.src || o.src.includes(q.src)) && (!o.type || q.type === o.type));

/* ---------- course picker ---------- */
V.root = () => `<div class="wrap"><h1>K Study Space</h1><p class="muted">One platform, many courses. Pick a course to study. Everything you do is saved in this browser, separately for each course.</p>
<div class="grid g2">${COURSE_ORDER.map(code => { const c = COURSES[code], P = Store.load(code), att = Object.keys(P.qa).length;
  return `<a class="ccard" href="#/${code}"><span class="cc" style="background:${c.color}"></span><span class="small muted">${code}</span><h3>${c.title}</h3><p class="small muted">${c.weeks.length} weeks · ${c.concepts.length} concepts · ${c.qs.filter(q => q.src === 'PYQ').length} mapped PYQs · ${c.qs.length} questions</p><p class="small">${att} questions attempted</p></a>`; }).join('')}</div></div>`;

/* ---------- home ---------- */
V.home = () => {
  const c = CO(), ex = exam(), P = APP.P;
  const inScope = c.concepts.filter(k => ex.weeks.includes(k.week));
  const st = inScope.map(k => conceptStats(k.id));
  const att = Object.values(P.qa).reduce((s, a) => s + a.n, 0), cor = Object.values(P.qa).reduce((s, a) => s + a.c, 0);
  const pyqs = qs({ src: ['PYQ'] }).filter(q => ex.weeks.includes(q.week)), pyqDone = pyqs.filter(q => P.qa[q.id]).length;
  const rec = recommend();
  let h = `<div class="wrap"><div class="crumb">${c.code}</div><h1>${c.title}</h1><p class="muted">${c.blurb || ''}</p>`;
  h += `<h3>Exam</h3><div class="chips">${c.exams.map(e => `<button class="chip ${e.id === ex.id ? 'on' : ''}" data-exam="${e.id}">${e.label} · W${e.weeks[0]}–${e.weeks[e.weeks.length - 1]}</button>`).join('')}</div>`;
  if (ex.note) h += `<p class="small muted">${ex.note}</p>`;
  h += `<div class="grid g4" style="margin-top:12px">${stat(`${st.filter(s => s.seen || s.n).length}/${inScope.length}`, 'concepts studied')}${stat(`${st.filter(s => s.mastered).length}/${inScope.length}`, 'concepts mastered')}${stat(pct(att ? cor / att : null), `accuracy over ${att} attempts`)}${stat(`${pyqDone}/${pyqs.length}`, 'PYQs attempted')}</div>`;
  h += `<p class="small muted">“Mastered” means: every checkpoint of the concept answered correctly on its latest attempt <b>and</b> at least 80% accuracy over at least 5 attempts on its questions. No partial credit for reading.</p>`;
  h += `<div class="grid g3">${stat(dueQs().length, `${link('review', 'reviews due today')}`)}${stat(openErrs().length, `${link('errors', 'open in error notebook')}`)}${stat(P.mocks.length, `${link('mock', 'mocks taken')}`)}</div>`;
  h += `<h2>What to study next</h2><p class="small muted">Weak spots first: priority × PYQ frequency × (1 − your accuracy), plus open errors. Scope: ${ex.label}.</p>`;
  h += rec.length ? '<ol>' + rec.map(r => `<li>${link('c/' + r.k.id, r.k.title)} <span class="tag ${r.k.pri === 'High' ? 'hi' : r.k.pri === 'Medium' ? 'med' : 'sup'}">${r.k.pri}</span><div class="small muted">${r.why}</div></li>`).join('') + '</ol>' : '<p>Everything in scope is mastered. Run a Spartan mock to prove it.</p>';
  h += `<div class="row"><a class="btn" href="#/${c.code}/mock?preset=spartan">Start a Spartan mock</a><a class="btn ghost" href="#/${c.code}/mock?preset=exam">Exam mock (${ex.label})</a><a class="btn ghost" href="#/${c.code}/review">Review queue</a></div>`;
  h += `<h2>Weeks</h2><div class="grid g2">` + c.weeks.map(w => {
    const ks = c.concepts.filter(k => k.week === w.n), m = ks.filter(k => conceptStats(k.id).mastered).length, sn = ks.filter(k => dotCls(k.id)).length;
    const np = c.qs.filter(q => q.src === 'PYQ' && q.week === w.n).length;
    return `<a class="ccard" href="#/${c.code}/w/${w.n}"><span class="small muted">Week ${w.n}${ex.weeks.includes(w.n) ? '' : ' · outside selected exam'}</span><h3>${w.title}</h3><p class="small muted">${ks.length} concepts · ${np} PYQs · ${sn} studied · ${m} mastered</p><div class="bar"><i style="width:${ks.length ? m / ks.length * 100 : 0}%"></i></div></a>`;
  }).join('') + '</div></div>';
  return h;
};
V.homeAfter = () => document.querySelectorAll('[data-exam]').forEach(b => b.onclick = () => { APP.P.exam = b.dataset.exam; Store.save(); render(); });

/* ---------- week ---------- */
V.week = n => {
  const c = CO(), w = c.weeks.find(w => w.n === +n); if (!w) return V.nf();
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Week ${w.n}</div><h1>Week ${w.n} · ${w.title}</h1><p class="reading">${w.blurb}</p>`;
  if (w.note) h += M.box('exam', 'Note', w.note);
  const np = c.qs.filter(q => q.src === 'PYQ' && q.week === w.n).length;
  h += `<div class="row">${np ? `<a class="btn ghost" href="#/${c.code}/pyq?week=${w.n}">${np} PYQs of this week</a>` : ''}<a class="btn ghost" href="#/${c.code}/bank?week=${w.n}">Practice bank</a><a class="btn" href="#/${c.code}/mock?preset=week&week=${w.n}">Timed week mock</a><a class="btn ghost" href="#/${c.code}/sheets/${w.n}">Revision sheet</a><a class="btn ghost" href="#/${c.code}/cards?week=${w.n}">Flashcards</a></div>`;
  w.topics.forEach(t => {
    h += `<h2>${t.title}</h2>`;
    t.cs.forEach(id => { const k = c.cmap[id]; if (!k) return; const s = conceptStats(id), p = c.qs.filter(q => q.src === 'PYQ' && q.cs.includes(id)).length;
      h += `<div class="panel"><div class="row"><span class="dot ${dotCls(id)}"></span><b>${link('c/' + id, k.title)}</b><span class="tag ${k.pri === 'High' ? 'hi' : k.pri === 'Medium' ? 'med' : 'sup'}">${k.pri}</span>${p ? `<span class="tag pyq">${p} PYQs</span>` : ''}<span class="small muted" style="margin-left:auto">${s.n ? `accuracy ${pct(s.acc)} · ${s.att}/${s.total} questions tried` : 'not attempted'}</span></div>${k.misShort ? `<div class="small muted" style="margin-top:4px">Top trap: ${k.misShort}</div>` : ''}</div>`; });
  });
  if (w.extra) h += w.extra;
  if (!w.topics.length && w.practice) h += w.practice;
  return h + '</div>';
};

/* ---------- concept page: the six moves ---------- */
V.concept = id => {
  const c = CO(), k = c.cmap[id]; if (!k) return V.nf();
  APP.P.seen[id] = 1; Store.save();
  const order = c.weeks.flatMap(w => w.topics.flatMap(t => t.cs)), i = order.indexOf(id), prev = order[i - 1], next = order[i + 1];
  const pyq = c.qs.filter(q => q.src === 'PYQ' && q.cs.includes(id)), cps = c.qs.filter(q => q.cp === id);
  const s = conceptStats(id);
  const exB = (e, n) => `<div class="ex"><div class="et">Worked example ${n} · ${e.lvl}</div><div>${e.q}</div>${n === 1 ? `<div>${e.a}</div>` : `<details class="reveal"><summary>Try it first, then show the worked solution</summary>${e.a}</details>`}</div>`;
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › ${link('w/' + k.week, 'Week ' + k.week)}</div><h1>${k.title}</h1>`;
  h += `<div class="row small"><span class="tag ${k.pri === 'High' ? 'hi' : k.pri === 'Medium' ? 'med' : 'sup'}">${k.pri} priority</span><span class="tag pyq">${pyq.length} PYQs</span><span class="tag">${cps.length} checkpoints</span>${s.mastered ? '<span class="tag asg">mastered</span>' : ''}${k.prereq.length ? `<span class="muted">Builds on: ${k.prereq.map(p => c.cmap[p] ? link('c/' + p, c.cmap[p].title) : p).join(', ')}</span>` : ''}</div>`;
  h += `<div class="toc"><a href="#m1">1 · Intuition</a><a href="#m2">2 · Formal setup</a><a href="#m3">3 · Visualise</a><a href="#m4">4 · Result</a><a href="#m5">5 · Connection</a><a href="#m6">6 · Exam lens</a><a href="#mcp">Checkpoints</a>${pyq.length ? '<a href="#mpyq">PYQs</a>' : ''}</div>`;
  h += `<div class="reading">`;
  h += `<div class="move" id="m1">Move 1 · Intuition first</div>${M.box('intu', 'A scene before any jargon', k.intu)}`;
  h += `<h3>Why it matters</h3>${k.why}`;
  h += `<div class="move" id="m2">Move 2 · Formal setup</div>${k.formal}`;
  h += `<div class="move" id="m3">Move 3 · Visualise an example</div>${k.vis}${exB(k.ex[0], 1)}`;
  h += `<div class="move" id="m4">Move 4 · The result</div>${k.math}`;
  h += `<div class="move" id="m5">Move 5 · Connection</div>${k.conn}`;
  h += `<div class="move" id="m6">Move 6 · Exam lens</div>${M.tip(k.exam)}${M.box('trap', 'Traps the papers set', k.mis)}${exB(k.ex[1], 2)}${exB(k.ex[2], 3)}`;
  h += `</div>`;
  h += `<h2 id="mcp">Checkpoints (${cps.length})</h2><p class="small muted">Answer these before moving on. A concept counts as mastered only when all of them are right.</p>` + cps.map(q => qCard(q)).join('');
  if (pyq.length) h += `<h2 id="mpyq">Past-paper questions on this concept (${pyq.length})</h2><p class="small muted">Verbatim stems and options; official keys re-derived. Each has at least one harder variation (linked under the solution).</p>` + pyq.map(q => qCard(q)).join('');
  h += `<h3>Sources</h3><p class="small">${k.src}</p>`;
  h += `<div class="navfoot"><span>${prev ? '← ' + link('c/' + prev, c.cmap[prev].title) : ''}</span><span>${next ? link('c/' + next, c.cmap[next].title) + ' →' : ''}</span></div></div>`;
  return h;
};

V.question = id => { const c = CO(), q = c.qmap[id]; if (!q) return V.nf(); return `<div class="wrap"><div class="crumb">${link('', c.short)} › question</div>${qCard(q)}</div>`; };

/* ---------- filtered lists (PYQ repository + practice bank) ---------- */
function filterUI(defs, cur) {
  return '<div class="filters">' + defs.map(([key, label, opts]) => `<label class="small">${label} <select data-f="${key}"><option value="">All</option>${opts.map(([v, t]) => `<option value="${v}" ${String(cur[key] || '') === String(v) ? 'selected' : ''}>${t}</option>`).join('')}</select></label>`).join('') + '</div>';
}
function bindFilters(base) {
  document.querySelectorAll('[data-f]').forEach(s => s.onchange = () => {
    const p = new URLSearchParams(); document.querySelectorAll('[data-f]').forEach(x => { if (x.type === 'checkbox' ? x.checked : x.value) p.set(x.dataset.f, x.type === 'checkbox' ? '1' : x.value); });
    location.hash = `#/${APP.code}/${base}?${p}`;
  });
}
const weekOpts = () => CO().weeks.map(w => [w.n, 'W' + w.n + ' · ' + w.title]);
const conceptOpts = () => CO().concepts.map(k => [k.id, 'W' + k.week + ' · ' + k.title]);

V.pyq = prm => {
  const c = CO(), P = APP.P;
  let list = qs({ src: ['PYQ'] });
  const f = Object.fromEntries(prm);
  if (f.paper) list = list.filter(q => q.paper === f.paper);
  if (f.week) list = list.filter(q => q.week === +f.week);
  if (f.fam) list = list.filter(q => q.fam === f.fam);
  if (f.type) list = list.filter(q => q.type === f.type);
  if (f.concept) list = list.filter(q => q.cs.includes(f.concept));
  if (f.left) list = list.filter(q => !P.qa[q.id]);
  const papers = Object.values(c.papers).sort((a, b) => a.id < b.id ? 1 : -1);
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › PYQ repository</div><h1>PYQ repository</h1><p class="muted small">Every question from the provided past papers, mapped to the concept it tests. Stems and options are verbatim (image-only parts were read from the rendered page and typed out). Labels: only these items carry the PYQ tag.</p>`;
  h += filterUI([['paper', 'Paper', papers.map(p => [p.id, p.label])], ['week', 'Week', weekOpts()], ['fam', 'Family', Object.values(c.families).map(x => [x.id, x.t])], ['type', 'Type', [['mcq', 'MCQ'], ['msq', 'MSQ']]], ['concept', 'Concept', conceptOpts()]], f);
  h += `<label class="small"><input type="checkbox" data-f="left" ${f.left ? 'checked' : ''}> only unattempted</label>`;
  h += `<p class="small muted">${list.length} questions · ${list.filter(q => P.qa[q.id]).length} attempted</p>`;
  return h + list.map(q => qCard(q)).join('') + '</div>';
};
V.pyqAfter = () => bindFilters('pyq');

V.bank = prm => {
  const c = CO(), P = APP.P, f = Object.fromEntries(prm);
  let list = qs();
  if (f.week) list = list.filter(q => q.week === +f.week);
  if (f.src) list = list.filter(q => q.src === f.src);
  if (f.diff) list = list.filter(q => q.diff === f.diff);
  if (f.type) list = list.filter(q => q.type === f.type);
  if (f.concept) list = list.filter(q => q.cs.includes(f.concept));
  if (f.left) list = list.filter(q => !P.qa[q.id]);
  const page = +(f.page || 1), per = 20, pages = Math.max(1, Math.ceil(list.length / per));
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Practice bank</div><h1>Practice bank</h1><p class="small muted">All questions: PYQs, harder variations, new questions and checkpoints. Filter, then work through. Every check is recorded.</p>`;
  h += filterUI([['week', 'Week', weekOpts()], ['src', 'Label', Object.keys(LABELS).map(x => [x, x])], ['diff', 'Difficulty', [['easy', 'easy'], ['moderate', 'moderate'], ['hard', 'hard']]], ['type', 'Type', Object.keys(TYPENAME).map(x => [x, x])], ['concept', 'Concept', conceptOpts()]], f);
  h += `<label class="small"><input type="checkbox" data-f="left" ${f.left ? 'checked' : ''}> only unattempted</label><p class="small muted">${list.length} questions · page ${page}/${pages}</p>`;
  h += list.slice((page - 1) * per, page * per).map(q => qCard(q)).join('');
  const p2 = new URLSearchParams(prm);
  h += `<div class="row">${page > 1 ? (p2.set('page', page - 1), `<a class="btn ghost sm" href="#/${c.code}/bank?${p2}">← Previous</a>`) : ''}${page < pages ? (p2.set('page', page + 1), `<a class="btn ghost sm" href="#/${c.code}/bank?${p2}">Next →</a>`) : ''}</div>`;
  return h + '</div>';
};
V.bankAfter = () => bindFilters('bank');

/* ---------- mocks ---------- */
const PRESETS = {
  week: { label: 'Week mock', n: 12, min: 20, src: ['PYQ', 'VARIATION', 'NEW', 'ASSIGNMENT'], diff: ['easy', 'moderate', 'hard'] },
  exam: { label: 'Exam mock', n: 25, min: 60, src: ['PYQ', 'VARIATION', 'NEW', 'ASSIGNMENT'], diff: ['easy', 'moderate', 'hard'] },
  cum: { label: 'Cumulative mock (all weeks)', n: 30, min: 75, src: ['PYQ', 'VARIATION', 'NEW', 'ASSIGNMENT'], diff: ['easy', 'moderate', 'hard'] },
  spartan: { label: 'Spartan mock', n: 25, min: 60, src: ['PYQ', 'VARIATION', 'NEW'], diff: ['moderate', 'hard'], varShare: 0.5 }
};
function drawPaper(o) {
  const c = CO();
  let pool = c.qs.filter(q => q.type !== 'short' && o.weeks.includes(q.week) && o.src.includes(q.src) && o.diff.includes(q.diff));
  // keep comprehension blocks together: treat a block as one unit
  const units = {}; pool.forEach(q => { const k = q.block ? q.paper + ':' + q.block.id : q.id; (units[k] = units[k] || []).push(q); });
  let U = shuffle(Object.values(units));
  const out = [];
  if (o.varShare) { const vs = U.filter(u => u[0].src === 'VARIATION'); const want = Math.round(o.n * o.varShare); vs.slice(0, want).forEach(u => out.push(...u)); U = U.filter(u => !out.includes(u[0])); }
  // spread across weeks, then fill
  for (const u of U) { if (out.length >= o.n) break; out.push(...u); }
  return shuffle(groupBlocks(out)).flat(); // blocks are never split, so a paper may run 1–2 items over n
}
function groupBlocks(list) { const g = {}; list.forEach(q => { const k = q.block ? q.paper + ':' + q.block.id : q.id; (g[k] = g[k] || []).push(q); }); return Object.values(g); }

V.mock = prm => {
  const c = CO(), f = Object.fromEntries(prm), ex = exam();
  if (APP.mock && !APP.mock.done) return V.mockRun();
  if (APP.mock && APP.mock.done) return V.mockResult();
  const preset = f.preset || 'exam', p = PRESETS[preset];
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Mocks</div><h1>Timed mocks</h1><p class="muted small">Answers stay hidden until you submit. Every press of “Start” draws a fresh paper. Short self-graded questions are never in mocks. MSQs are all-or-nothing, as in the real paper.</p>`;
  h += `<div class="chips">${Object.entries(PRESETS).map(([k, v]) => `<a class="chip ${k === preset ? 'on' : ''}" href="#/${c.code}/mock?preset=${k}">${v.label}</a>`).join('')}</div>`;
  if (preset === 'spartan') h += M.box('exam', 'Spartan preset', '<p>Moderate and hard items only. About half the paper is harder-than-exam variations (changed numbers, negated stems, new scenarios, chained and counting items). Exam length. Scope: the exam selected on the home page.</p>');
  h += `<div class="panel"><div class="kv">
    <b>Scope</b><span>${preset === 'week' ? `<select id="mkWeek">${c.weeks.map(w => `<option value="${w.n}" ${+f.week === w.n ? 'selected' : ''}>Week ${w.n} · ${w.title}</option>`).join('')}</select>` : preset === 'cum' ? 'All weeks' : `<select id="mkExam">${c.exams.map(e => `<option value="${e.id}" ${e.id === ex.id ? 'selected' : ''}>${e.label} (W${e.weeks.join(', ')})</option>`).join('')}</select>`}</span>
    <b>Questions</b><span><input id="mkN" type="number" min="5" max="60" value="${p.n}" style="width:80px"></span>
    <b>Minutes</b><span><input id="mkMin" type="number" min="5" max="240" value="${p.min}" style="width:80px"> <span class="small muted">(your choice; the paper PDFs do not state the official duration)</span></span>
    <b>Labels</b><span>${Object.keys(LABELS).map(s => `<label class="small"><input type="checkbox" class="mkSrc" value="${s}" ${p.src.includes(s) ? 'checked' : ''}> ${s}</label>`).join(' ')}</span>
  </div><div class="row" style="margin-top:12px"><button class="btn" id="mkGo">Start ${p.label.toLowerCase()}</button></div></div>`;
  if (APP.P.mocks.length) h += `<h2>History</h2>` + M.table(['When', 'Mock', 'Score', '%'], APP.P.mocks.slice().reverse().slice(0, 15).map(m => [new Date(m.t).toLocaleString(), m.label, `${m.s}/${m.max}`, pct(m.s / m.max)]));
  return h + '</div>';
};
V.mockAfter = () => {
  const go = document.getElementById('mkGo'); if (!go) return V.mockRunAfter && APP.mock && !APP.mock.done && V.mockRunAfter();
  const f = Object.fromEntries(new URLSearchParams(location.hash.split('?')[1] || '')), preset = f.preset || 'exam', p = PRESETS[preset];
  go.onclick = () => {
    const c = CO(); let weeks, label;
    if (preset === 'week') { const w = +document.getElementById('mkWeek').value; weeks = [w]; label = 'Week ' + w + ' mock'; }
    else if (preset === 'cum') { weeks = c.weeks.map(w => w.n); label = 'Cumulative mock'; }
    else { const e = c.exams.find(e => e.id === document.getElementById('mkExam').value); weeks = e.weeks; label = (preset === 'spartan' ? 'Spartan · ' : '') + e.label; }
    const src = [...document.querySelectorAll('.mkSrc:checked')].map(x => x.value);
    const n = +document.getElementById('mkN').value || p.n, min = +document.getElementById('mkMin').value || p.min;
    const paper = drawPaper({ weeks, src, diff: p.diff, n, varShare: p.varShare });
    if (!paper.length) { alert('No questions match these settings yet.'); return; }
    APP.mock = { label, qs: paper.map(q => q.id), resp: {}, end: Date.now() + min * 60e3, start: Date.now() };
    render();
  };
};
V.mockRun = () => {
  const c = CO(), m = APP.mock, list = m.qs.map(id => c.qmap[id]);
  let h = `<div class="wrap"><h1>${m.label}</h1><div class="timer"><span><span class="t" id="mkT"></span> left · ${list.length} questions · ${list.reduce((s, q) => s + qMarks(q), 0)} marks</span><button class="btn" id="mkSubmit">Submit paper</button></div>`;
  h += `<div class="qnav">${list.map((q, i) => `<a href="javascript:void 0" data-jump="${q.id}" id="nav_${i}">${i + 1}</a>`).join('')}</div>`;
  h += list.map((q, i) => qCard(q, 'mock', { num: i + 1, resp: m.resp[q.id] })).join('');
  return h + `<div class="row"><button class="btn" id="mkSubmit2">Submit paper</button><button class="btn ghost danger" id="mkQuit" style="color:var(--bad)">Abandon</button></div></div>`;
};
V.mockRunAfter = () => {
  const m = APP.mock, c = CO(), list = m.qs.map(id => c.qmap[id]);
  const save = () => list.forEach((q, i) => { const el = document.querySelector(`[data-qid="${q.id}"]`); if (!el) return; m.resp[q.id] = readResp(el, q); const r = m.resp[q.id]; const nav = document.getElementById('nav_' + i); if (nav) nav.classList.toggle('ans', !(r == null || r === '' || (Array.isArray(r) && !r.length))); });
  document.getElementById('main').addEventListener('change', save); document.getElementById('main').addEventListener('input', save);
  document.querySelectorAll('[data-jump]').forEach(a => a.onclick = () => document.querySelector(`[data-qid="${a.dataset.jump}"]`).scrollIntoView({ behavior: 'smooth' }));
  const submit = () => { save(); clearInterval(APP.timer); m.done = true; let s = 0, max = 0; list.forEach(q => { const ok = grade(q, m.resp[q.id]); record(q, ok); max += qMarks(q); if (ok) s += qMarks(q); }); m.s = s; m.max = max; APP.P.mocks.push({ t: Date.now(), label: m.label, s, max, n: list.length }); Store.save(); render(); window.scrollTo(0, 0); };
  document.getElementById('mkSubmit').onclick = submit; document.getElementById('mkSubmit2').onclick = () => confirm('Submit the paper now?') && submit();
  document.getElementById('mkQuit').onclick = () => { if (confirm('Abandon this mock? Nothing will be recorded.')) { clearInterval(APP.timer); APP.mock = null; render(); } };
  const tick = () => { const left = Math.max(0, m.end - Date.now()), t = document.getElementById('mkT'); if (!t) return clearInterval(APP.timer); t.textContent = `${Math.floor(left / 60e3)}:${String(Math.floor(left / 1e3) % 60).padStart(2, '0')}`; t.classList.toggle('low', left < 5 * 60e3); if (!left) submit(); };
  clearInterval(APP.timer); APP.timer = setInterval(tick, 1000); tick();
};
V.mockResult = () => {
  const c = CO(), m = APP.mock, list = m.qs.map(id => c.qmap[id]);
  const by = {}; list.forEach(q => { const k = q.cs[0]; by[k] = by[k] || { n: 0, ok: 0 }; by[k].n++; if (grade(q, m.resp[q.id])) by[k].ok++; });
  const weak = Object.entries(by).filter(([, v]) => v.ok < v.n).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n);
  const mins = Math.round((Math.min(Date.now(), m.end) - m.start) / 60e3);
  let h = `<div class="wrap"><h1>${m.label} — result</h1><div class="grid g3">${stat(`${m.s}/${m.max}`, 'marks')}${stat(pct(m.s / m.max), 'score')}${stat(mins + ' min', 'time used')}</div>`;
  h += `<h2>Topic breakdown</h2>` + Object.entries(by).sort((a, b) => b[1].n - a[1].n).map(([k, v]) => hbar(c.cmap[k] ? link('c/' + k, c.cmap[k].title) : k, v.ok, v.n, `${v.ok}/${v.n}`)).join('');
  h += `<h2>Revision advice</h2>` + (weak.length ? '<ol>' + weak.slice(0, 6).map(([k, v]) => `<li>Re-read ${link('c/' + k, c.cmap[k].title)} — you got ${v.ok}/${v.n}. Start with its “Exam lens” traps, then redo its checkpoints.</li>`).join('') + '</ol><p class="small muted">Every wrong answer is now in your error notebook and back in Leitner box 1.</p>' : '<p>Clean sheet. Raise the difficulty: run the Spartan preset.</p>');
  h += `<div class="row"><button class="btn" id="mkNew">New mock</button>${link('errors', 'Open error notebook')}</div><h2>Paper with solutions</h2>`;
  h += list.map((q, i) => qCard(q, 'review', { num: i + 1, resp: m.resp[q.id] })).join('');
  return h + '</div>';
};
V.mockResultAfter = () => { const b = document.getElementById('mkNew'); if (b) b.onclick = () => { APP.mock = null; render(); }; };

/* ---------- error notebook & Leitner review ---------- */
V.errors = () => {
  const c = CO(), P = APP.P, open = openErrs(), fixed = c.qs.filter(q => P.err[q.id] && P.err[q.id].done);
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Error notebook</div><h1>Error notebook</h1><p class="small muted">Every question you got wrong lands here. It leaves only after two correct re-attempts in a row. No mistake left behind.</p>`;
  h += `<div class="grid g3">${stat(open.length, 'open')}${stat(fixed.length, 'mastered and cleared')}${stat(Object.values(P.err).reduce((s, e) => s + e.n, 0), 'total misses recorded')}</div>`;
  if (!open.length) h += '<p>Nothing open. Good — now go and make new mistakes in a Spartan mock.</p>';
  h += open.sort((a, b) => P.err[b.id].n - P.err[a.id].n).map(q => `<div class="small muted">missed ${P.err[q.id].n}× · correct-in-a-row ${P.err[q.id].streak}/2</div>` + qCard(q)).join('');
  return h + '</div>';
};
V.review = () => {
  const c = CO(), P = APP.P, due = dueQs(), boxes = [1, 2, 3, 4, 5].map(b => Object.values(P.qa).filter(a => a.box === b).length);
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Revision queue</div><h1>Revision queue (Leitner)</h1><p class="small muted">Each attempted question sits in a box. Right → next box (reviewed after 1, 3, 7, 14, 30 days). Wrong → back to box 1, due today.</p>`;
  h += M.bars(boxes.map((v, i) => ({ lab: 'Box ' + (i + 1), v })), { cap: 'Questions per Leitner box' });
  h += `<p><b>${due.length}</b> due today.</p>` + due.slice(0, 25).map(q => qCard(q)).join('');
  return h + '</div>';
};

/* ---------- flashcards ---------- */
V.cards = prm => {
  const c = CO(), f = Object.fromEntries(prm), P = APP.P;
  let list = c.cards.filter(k => !f.week || k.week === +f.week);
  list = list.sort((a, b) => ((P.cards[a.id] || {}).due || 0) - ((P.cards[b.id] || {}).due || 0));
  const k = list[0];
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Flashcards</div><h1>Flashcards</h1>${filterUI([['week', 'Week', weekOpts()]], f)}<p class="small muted">${list.length} cards · ${list.filter(x => ((P.cards[x.id] || {}).due || 0) <= today()).length} due. Cards you miss come back first.</p>`;
  if (!k) return h + '<p>No cards yet.</p></div>';
  h += `<div class="card"><div class="fc" id="fc"><div class="side">Front · W${k.week}</div><div>${k.front}</div></div></div><div class="row" style="justify-content:center"><button class="btn ghost" id="fcFlip">Flip</button><button class="btn" id="fcY" style="display:none">Knew it</button><button class="btn ghost" id="fcN" style="display:none">Didn’t know</button></div>`;
  APP._card = k; return h + '</div>';
};
V.cardsAfter = () => {
  bindFilters('cards'); const k = APP._card; if (!k) return;
  document.getElementById('fcFlip').onclick = () => { document.getElementById('fc').innerHTML = `<div class="side">Back</div><div>${k.back}</div>`; fcY.style.display = fcN.style.display = ''; fcFlip.style.display = 'none'; };
  const mark = ok => { const s = APP.P.cards[k.id] = APP.P.cards[k.id] || { box: 1 }; s.box = ok ? Math.min(5, s.box + 1) : 1; s.due = today() + (ok ? LEITNER[s.box] : 0) + (ok ? 0 : 0.5); Store.save(); render(); };
  fcY.onclick = () => mark(true); fcN.onclick = () => mark(false);
};

/* ---------- revise: sheets, glossary, formulas, comparisons, worked examples ---------- */
V.sheets = n => {
  const c = CO();
  if (!n) return `<div class="wrap"><div class="crumb">${link('', c.short)} › Revision sheets</div><h1>Weekly revision sheets</h1><ul>${c.weeks.map(w => `<li>${link('sheets/' + w.n, wkTitle(w.n))}</li>`).join('')}</ul></div>`;
  const w = c.weeks.find(w => w.n === +n); if (!w) return V.nf();
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › ${link('sheets', 'Revision sheets')}</div><h1>Revision sheet · ${wkTitle(w.n)}</h1>`;
  h += c.sheets[w.n] || '';
  const ks = c.concepts.filter(k => k.week === w.n);
  if (ks.length) h += `<h2>Concept one-liners and top traps</h2>` + M.table(['Concept', 'Remember', 'Top trap'], ks.map(k => [link('c/' + k.id, k.title), k.oneLine || '', k.misShort || '']));
  const fm = c.formulas.filter(x => x.week === w.n); if (fm.length) h += `<h2>Formulas and frameworks</h2>` + fm.map(x => `<div class="panel"><b>${x.t}</b><div>${x.f}</div><div class="small muted">In words: ${x.words}</div></div>`).join('');
  const gl = c.gloss.filter(g => g.week === w.n); if (gl.length) h += `<h2>Terms</h2>` + M.table(null, gl.map(g => [`<b>${g.term}</b>`, g.def]));
  return h + '</div>';
};
V.glossary = prm => {
  const c = CO(), f = Object.fromEntries(prm);
  const list = c.gloss.filter(g => !f.week || g.week === +f.week).sort((a, b) => a.term.localeCompare(b.term));
  return `<div class="wrap"><div class="crumb">${link('', c.short)} › Glossary</div><h1>Glossary</h1>${filterUI([['week', 'Week', weekOpts()]], f)}<input id="glq" type="search" placeholder="Filter terms…" style="width:100%;max-width:360px">` + `<div id="gl">${M.table(['Term', 'Meaning', 'Week'], list.map(g => [`<b>${g.term}</b>`, g.def, 'W' + g.week]))}</div></div>`;
};
V.glossaryAfter = () => { bindFilters('glossary'); const i = document.getElementById('glq'); i.oninput = () => document.querySelectorAll('#gl tr').forEach((tr, k) => { if (k) tr.style.display = tr.textContent.toLowerCase().includes(i.value.toLowerCase()) ? '' : 'none'; }); };
V.formulas = () => { const c = CO(); return `<div class="wrap"><div class="crumb">${link('', c.short)} › Formulas & frameworks</div><h1>Formula and framework handbook</h1><p class="small muted">Every formula is followed by its “in words” reading.</p>` + c.weeks.map(w => { const fm = c.formulas.filter(x => x.week === w.n); return fm.length ? `<h2>${wkTitle(w.n)}</h2>` + fm.map(x => `<div class="panel"><b>${x.t}</b><div style="margin:6px 0">${x.f}</div><div class="small"><b>In words:</b> ${x.words}</div>${x.ex ? `<div class="small muted">Example: ${x.ex}</div>` : ''}</div>`).join('') : ''; }).join('') + '</div>'; };
V.compare = () => { const c = CO(); return `<div class="wrap"><div class="crumb">${link('', c.short)} › Comparison tables</div><h1>Comparison tables</h1><p class="small muted">The pairs the papers love to confuse, side by side, each with the deciding question.</p>` + c.compare.map(t => `<h2>${t.t}</h2>${M.table(t.head, t.rows)}${t.decide ? `<p class="small"><b>Deciding question:</b> ${t.decide}</p>` : ''}`).join('') + '</div>'; };
V.examples = prm => {
  const c = CO(), f = Object.fromEntries(prm);
  const ks = c.concepts.filter(k => !f.week || k.week === +f.week);
  return `<div class="wrap"><div class="crumb">${link('', c.short)} › Worked examples</div><h1>Worked-example library</h1>${filterUI([['week', 'Week', weekOpts()], ['lvl', 'Level', [['Introductory', 'Introductory'], ['Standard', 'Standard'], ['Exam-level', 'Exam-level']]]], f)}` +
    ks.map(k => k.ex.filter(e => !f.lvl || e.lvl === f.lvl).map(e => `<div class="ex"><div class="et">${e.lvl} · ${link('c/' + k.id, k.title)}</div><div>${e.q}</div><details class="reveal"><summary>Show the worked solution</summary>${e.a}</details></div>`).join('')).join('') + '</div>';
};
V.examplesAfter = () => bindFilters('examples');

/* ---------- exam intelligence (computed live from mapped PYQs) ---------- */
const NEG = /\bNOT\b|\bINCORRECT\b|\bnot fulfilled\b|\bmissing\b|\blacking\b|\bviolat|\bnot satisfied\b|\bnot an?\b/i;
V.intel = () => {
  const c = CO(), P = qs({ src: ['PYQ'] }), papers = Object.values(c.papers).sort((a, b) => a.id < b.id ? -1 : 1);
  const ofPaper = id => P.filter(q => q.paper === id);
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › Exam intelligence</div><h1>Exam intelligence</h1>`;
  h += M.box('trap', 'Read this first', '<p>Everything below is computed live from the mapped past papers. It tells you what <b>has</b> been asked, not what <b>will</b> be asked. Past frequency is not a guarantee. Professors change patterns — prepare for the next paper, not the last one.</p>');
  h += `<h2>Paper-by-paper pattern</h2>` + M.table(['Paper', 'Questions', 'Marks', 'MCQ', 'MSQ', 'Comprehension blocks', 'Negated stems', 'Computed items'], papers.map(p => { const L = ofPaper(p.id); return [p.label, L.length, L.reduce((s, q) => s + q.marks, 0), L.filter(q => q.type === 'mcq').length, L.filter(q => q.type === 'msq').length, new Set(L.filter(q => q.block).map(q => q.block.id)).size, L.filter(q => NEG.test(q.q.replace(/<[^>]+>/g, ''))).length, L.filter(q => q.calc).length]; }));
  const fams = Object.values(c.families).map(f => { const L = P.filter(q => q.fam === f.id), ps = new Set(L.map(q => q.paper)); const last = [...ps].sort().pop(); return { f, n: L.length, ps: ps.size, last }; }).sort((a, b) => b.ps - a.ps || b.n - a.n);
  h += `<h2>Recurring families</h2><p class="small muted">Appearances = in how many of the ${papers.length} papers the family showed up at least once.</p>` + fams.map(x => hbar(`<a href="#/${c.code}/pyq?fam=${x.f.id}">${x.f.t}</a>`, x.ps, papers.length, `${x.ps}/${papers.length}`)).join('');
  const wk = c.weeks.map(w => ({ w, n: P.filter(q => q.week === w.n).length, m: P.filter(q => q.week === w.n).reduce((s, q) => s + q.marks, 0) }));
  const totM = P.reduce((s, q) => s + q.marks, 0);
  h += `<h2>Marks share by week</h2>` + wk.map(x => hbar(wkTitle(x.w.n), x.m, Math.max(...wk.map(y => y.m)), `${Math.round(x.m / totM * 100)}%`)).join('');
  const ck = c.concepts.map(k => ({ k, n: P.filter(q => q.cs.includes(k.id)).length })).filter(x => x.n).sort((a, b) => b.n - a.n);
  h += `<h2>Questions per concept</h2>` + ck.map(x => hbar(link('c/' + x.k.id, x.k.title), x.n, ck[0].n)).join('');
  h += `<h2>Traps the papers keep setting</h2>` + fams.filter(x => x.f.trap).slice(0, 20).map(x => `<div class="panel small"><b>${x.f.t}</b> — ${x.f.trap}</div>`).join('');
  if (papers.length > 1) {
    const half = Math.floor(papers.length / 2), old = papers.slice(0, half), neu = papers.slice(half);
    const agg = ps => { const L = P.filter(q => ps.some(p => p.id === q.paper)); return { q: L.length / ps.length, msq: L.filter(q => q.type === 'msq').length / ps.length, comp: new Set(L.filter(q => q.block).map(q => q.paper + q.block.id)).size / ps.length, neg: L.filter(q => NEG.test(q.q.replace(/<[^>]+>/g, ''))).length / ps.length, calc: L.filter(q => q.calc).length / ps.length, scen: L.filter(q => q.q.replace(/<[^>]+>/g, '').length > 220).length / ps.length }; };
    const A = agg(old), B = agg(neu), f1 = x => x.toFixed(1);
    h += `<h2>Pattern change across terms</h2><p class="small muted">Average per paper: older half (${old[0].label} – ${old[old.length - 1].label}) vs newer half (${neu[0].label} – ${neu[neu.length - 1].label}).</p>` + M.table(['Per paper', 'Older', 'Newer'], [['Questions', f1(A.q), f1(B.q)], ['MSQs', f1(A.msq), f1(B.msq)], ['Comprehension blocks', f1(A.comp), f1(B.comp)], ['Negated stems', f1(A.neg), f1(B.neg)], ['Computed (numeric) items', f1(A.calc), f1(B.calc)], ['Long scenario stems (> 220 chars)', f1(A.scen), f1(B.scen)]]);
  }
  h += c.intel.map(x => `<h2>${x.t}</h2>${x.html}`).join('');
  return h + '</div>';
};

/* ---------- sources, QA, data ---------- */
V.sources = () => { const c = CO(); return `<div class="wrap"><div class="crumb">${link('', c.short)} › Sources & discrepancies</div><h1>Sources & discrepancies</h1>${c.sourceNote || ''}<h2>Where sources disagree (and what this platform does)</h2>` + c.sources.map(s => `<div class="panel"><b>${s.t}</b><div class="small" style="margin-top:4px">${s.detail}</div><div class="small" style="margin-top:4px"><b>Resolution:</b> ${s.res}</div></div>`).join('') + '</div>'; };
V.qa = () => {
  const c = CO(), r = VALIDATE(c.code);
  let h = `<div class="wrap"><div class="crumb">${link('', c.short)} › QA & limitations</div><h1>QA & limitations</h1><h2>Live validator</h2><p class="small muted">The same checks as <code>node scripts/check.js</code>, run in your browser just now.</p>`;
  h += `<div class="grid g4">${stat(r.errors.length, 'errors')}${stat(r.stats.pyqWithoutVariation, 'PYQs without a variation')}${stat(r.stats.computedKeys, 'keys recomputed at load')}${stat(r.stats.questions, 'questions')}</div>`;
  h += M.table(['Count', 'Value'], Object.entries(r.stats).map(([k, v]) => [k, v]));
  h += r.errors.length ? `<div class="panel" style="border-color:var(--bad)"><b>Errors</b><ul>${r.errors.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>` : '<p class="pill-ok">0 errors.</p>';
  h += `<h2>Recomputed keys</h2><p class="small muted">Every numeric key is recomputed from its formula when the page loads. On any mismatch the platform refuses to start.</p>` + M.table(['Question', 'Check'], c.verify.map(v => [link('q/' + v.id, v.id.replace(c.code + '-', '')), (v.ok ? '✓ ' : '✗ ') + esc(v.msg)]));
  h += `<h2>Known limitations</h2><ul>${c.limits.map(l => `<li>${l}</li>`).join('')}</ul>`;
  return h + '</div>';
};
V.data = () => `<div class="wrap"><div class="crumb">${link('', CO().short)} › Your data</div><h1>Your data</h1><p class="small muted">Progress lives in this browser under the key <code>prog:${APP.code}</code>. Export it to move to another device.</p><div class="row"><button class="btn" id="dExp">Export JSON</button><label class="btn ghost">Import JSON<input type="file" id="dImp" accept="application/json" style="display:none"></label><button class="btn danger" id="dRst">Reset this course</button></div><pre class="code" style="max-height:240px">${esc(JSON.stringify({ attempts: Object.keys(APP.P.qa).length, errors: Object.keys(APP.P.err).length, mocks: APP.P.mocks.length, cards: Object.keys(APP.P.cards).length }, null, 1))}</pre></div>`;
V.dataAfter = () => {
  dExp.onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(APP.P)], { type: 'application/json' })); a.download = `prog-${APP.code}.json`; a.click(); };
  dImp.onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { try { const d = JSON.parse(t); if (!d.qa) throw 0; APP.P = Object.assign(Store.blank(), d); Store.save(); alert('Imported.'); render(); } catch (x) { alert('That file is not a progress export.'); } }); };
  dRst.onclick = () => { if (confirm(`Erase all progress for ${APP.code}? This cannot be undone.`)) { APP.P = Store.blank(); Store.save(); render(); } };
};

/* ---------- search ---------- */
const strip = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
V.search = prm => {
  const c = CO(), term = (prm.get('q') || '').trim(), t = term.toLowerCase();
  if (!t) return '<div class="wrap"><h1>Search</h1><p>Type in the box above.</p></div>';
  const hl = s => { const i = s.toLowerCase().indexOf(t); if (i < 0) return esc(s.slice(0, 160)); const a = Math.max(0, i - 70); return esc(s.slice(a, i)) + '<mark>' + esc(s.slice(i, i + t.length)) + '</mark>' + esc(s.slice(i + t.length, i + t.length + 90)); };
  const ks = c.concepts.map(k => [k, strip([k.title, k.intu, k.formal, k.math, k.exam, k.mis].join(' '))]).filter(([, s]) => s.toLowerCase().includes(t));
  const qq = c.qs.map(q => [q, strip(q.q + ' ' + (q.opts || []).join(' '))]).filter(([, s]) => s.toLowerCase().includes(t)).slice(0, 40);
  const gg = c.gloss.filter(g => (g.term + ' ' + g.def).toLowerCase().includes(t));
  let h = `<div class="wrap"><h1>Search: “${esc(term)}”</h1>`;
  h += `<h2>Concepts (${ks.length})</h2>` + ks.map(([k, s]) => `<div class="hit">${link('c/' + k.id, k.title)}<div class="small muted">${hl(s)}</div></div>`).join('');
  h += `<h2>Glossary (${gg.length})</h2>` + gg.map(g => `<div class="hit"><b>${g.term}</b> — ${g.def}</div>`).join('');
  h += `<h2>Questions (${qq.length}${qq.length === 40 ? '+' : ''})</h2>` + qq.map(([q, s]) => `<div class="hit"><span class="tag ${TAGCLS[q.src]}">${q.src}</span> ${link('q/' + q.id, q.id.replace(c.code + '-', ''))}<div class="small muted">${hl(s)}</div></div>`).join('');
  return h + '</div>';
};
V.nf = () => '<div class="wrap"><h1>Not found</h1><p>That page does not exist.</p></div>';
