/* ============================================================
   Progress storage (localStorage, namespaced per course: prog:<code>),
   grading, Leitner scheduling, mastery and the recommender.
   ============================================================ */
const APP = { code: null, P: null, mock: null };
const DAY = 864e5, today = () => Math.floor(Date.now() / DAY);
const LEITNER = [0, 1, 3, 7, 14, 30]; // days until next review for boxes 1..5 (index = box)

const Store = {
  key: code => 'prog:' + code,
  blank: () => ({ v: 1, seen: {}, qa: {}, err: {}, cards: {}, mocks: [], exam: null }),
  load(code) { try { return Object.assign(Store.blank(), JSON.parse(localStorage.getItem(Store.key(code)) || '{}')); } catch (e) { return Store.blank(); } },
  save() { try { localStorage.setItem(Store.key(APP.code), JSON.stringify(APP.P)); } catch (e) { /* storage full or blocked */ } }
};
const CO = () => COURSES[APP.code];
const exam = () => { const c = CO(); return c.exams.find(e => e.id === APP.P.exam) || c.exams[0]; };

/* ---------- grading ---------- */
function grade(q, r) {
  if (r == null || r === '' || (Array.isArray(r) && !r.length)) return false;
  if (q.type === 'mcq') return r === q.ans;
  if (q.type === 'msq') { const a = [...q.ans].sort().join(','), b = [...r].sort().join(','); return a === b; }
  if (q.type === 'num') { const v = CALC.parse(r); return !isNaN(v) && Math.abs(v - q.ans) <= (q.tol || 0) + 1e-9; }
  if (q.type === 'text') return q.caseSens ? String(r).trim() === q.ans : String(r).trim().toLowerCase() === q.ans.toLowerCase();
  return false;
}
const qMarks = q => q.marks || (q.type === 'msq' ? 4 : 4);

/* Record an attempt: accuracy, Leitner box, error notebook. */
function record(q, ok) {
  const P = APP.P, a = P.qa[q.id] = P.qa[q.id] || { n: 0, c: 0, box: 1, due: today() };
  a.n++; if (ok) a.c++; a.last = ok ? 1 : 0; a.t = Date.now();
  a.box = ok ? Math.min(5, (a.box || 1) + 1) : 1; a.due = today() + LEITNER[a.box];
  if (!ok) { const e = P.err[q.id] = P.err[q.id] || { n: 0, streak: 0, added: Date.now() }; e.n++; e.streak = 0; e.done = 0; }
  else if (P.err[q.id] && !P.err[q.id].done) { const e = P.err[q.id]; e.streak++; if (e.streak >= 2) e.done = Date.now(); }
  Store.save();
}

/* ---------- concept status ---------- */
const conceptQs = (c, id) => c.qs.filter(q => q.type !== 'short' && (q.cs || []).includes(id));
function conceptStats(id) {
  const c = CO(), P = APP.P, qs = conceptQs(c, id);
  let n = 0, k = 0, att = 0; qs.forEach(q => { const a = P.qa[q.id]; if (a) { n += a.n; k += a.c; att++; } });
  const cps = c.qs.filter(q => q.cp === id);
  const cpsOk = cps.every(q => P.qa[q.id] && P.qa[q.id].last === 1);
  const acc = n ? k / n : null;
  const errs = qs.filter(q => P.err[q.id] && !P.err[q.id].done).length;
  const mastered = cpsOk && n >= 5 && acc >= 0.8;
  return { n, acc, att, total: qs.length, errs, mastered, seen: !!P.seen[id] };
}
const dotCls = id => { const s = conceptStats(id); return s.mastered ? 'ms' : (s.seen || s.n ? 'st' : ''); };

/* ---------- "what to study next" ----------
   Weak spots first: priority × PYQ weight × (1 − accuracy), plus open errors. Unseen concepts rank high. */
function recommend(limit = 6) {
  const c = CO(), ex = exam(), P = APP.P, W = { High: 3, Medium: 2, Supporting: 1 };
  return c.concepts.filter(k => ex.weeks.includes(k.week)).map(k => {
    const s = conceptStats(k.id), pyq = c.qs.filter(q => q.src === 'PYQ' && q.cs.includes(k.id)).length;
    if (s.mastered) return null;
    const weak = s.n ? (1 - s.acc) + 0.15 : 1.2;
    const score = W[k.pri] * (1 + pyq / 6) * weak + s.errs * 0.9;
    const why = [];
    why.push(`${k.pri} priority`); if (pyq) why.push(`${pyq} PYQ${pyq > 1 ? 's' : ''}`);
    if (!s.seen && !s.n) why.push('not studied yet'); else if (s.n) why.push(`accuracy ${Math.round(s.acc * 100)}% over ${s.n} attempts`);
    if (s.errs) why.push(`${s.errs} open in error notebook`);
    return { k, score, why: why.join(' · ') };
  }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, limit);
}
const dueQs = () => { const P = APP.P; return CO().qs.filter(q => P.qa[q.id] && q.type !== 'short' && P.qa[q.id].due <= today()); };
const openErrs = () => { const P = APP.P; return CO().qs.filter(q => P.err[q.id] && !P.err[q.id].done); };
