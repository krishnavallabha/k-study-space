/* ============================================================
   Content validator. Shared by the in-browser QA page and by
   scripts/check.js (Node). Target: 0 errors, no PYQ without a
   variation.
   ============================================================ */
const CONCEPT_FIELDS = ['intu', 'why', 'formal', 'vis', 'math', 'ex', 'conn', 'mis', 'exam', 'src', 'prereq', 'pri'];
const QTYPES = ['mcq', 'msq', 'num', 'text', 'short'];

function VALIDATE(code) {
  const c = COURSES[code], E = [], W = [];
  const err = (...a) => E.push(a.join(' ')), warn = (...a) => W.push(a.join(' '));
  c._dups.forEach(d => err('duplicate id:', d));
  if (!c.exams || !c.exams.length) err('course has no exams');
  /* weeks and topics */
  const placed = {};
  c.weeks.forEach(w => w.topics.forEach(t => t.cs.forEach(id => {
    if (!c.cmap[id]) err(`week ${w.n}: topic "${t.title}" lists missing concept`, id);
    if (placed[id]) err('concept listed in two topics:', id); placed[id] = 1;
  })));
  /* concepts */
  c.concepts.forEach(k => {
    CONCEPT_FIELDS.forEach(f => { const v = k[f]; if (v == null || v === '' || (f !== 'prereq' && Array.isArray(v) && !v.length)) err('concept', k.id, 'missing field', f); });
    if (!placed[k.id]) err('concept not placed in any week topic:', k.id);
    if (!Array.isArray(k.ex) || k.ex.length !== 3) err('concept', k.id, 'needs exactly 3 worked examples (has', (k.ex || []).length + ')');
    else k.ex.forEach((e, i) => { if (!e.q || !e.a) err('concept', k.id, 'example', i + 1, 'incomplete'); });
    if (!['High', 'Medium', 'Supporting'].includes(k.pri)) err('concept', k.id, 'bad pri', k.pri);
    if (!Array.isArray(k.prereq)) err('concept', k.id, 'prereq must be an array');
    else k.prereq.forEach(p => { if (!c.cmap[p]) err('concept', k.id, 'unknown prereq', p); });
    if (!c.weeks.some(w => w.n === k.week)) err('concept', k.id, 'week', k.week, 'not defined');
    const cps = c.qs.filter(q => q.cp === k.id);
    if (cps.length < 3) err('concept', k.id, 'has', cps.length, 'checkpoints (need ≥ 3)');
    if (!cps.some(q => q.type === 'short' && q.model)) err('concept', k.id, 'has no self-graded short checkpoint with a model answer');
    if (/undefined|NaN/.test(CONCEPT_FIELDS.map(f => typeof k[f] === 'string' ? k[f] : '').join(' '))) err('concept', k.id, 'contains "undefined"/"NaN" text');
  });
  /* questions */
  c.qs.forEach(q => {
    if (!LABELS[q.src]) err(q.id, 'bad label', q.src);
    if (!QTYPES.includes(q.type)) err(q.id, 'bad type', q.type);
    if (!q.q) err(q.id, 'empty stem');
    (q.cs || []).forEach(id => { if (!c.cmap[id]) err(q.id, 'unknown concept', id); });
    if (!q.cs || !q.cs.length) err(q.id, 'not mapped to any concept');
    if (q.week == null) err(q.id, 'no week');
    if (q.type === 'mcq') {
      if (!Array.isArray(q.opts) || q.opts.length < 2) err(q.id, 'mcq needs options');
      else if (!(Number.isInteger(q.ans) && q.ans >= 0 && q.ans < q.opts.length)) err(q.id, 'bad mcq ans index', q.ans);
    }
    if (q.type === 'msq') {
      if (!Array.isArray(q.ans) || !q.ans.length || q.ans.some(a => !Number.isInteger(a) || a < 0 || a >= (q.opts || []).length)) err(q.id, 'bad msq ans', JSON.stringify(q.ans));
    }
    if ((q.type === 'mcq' || q.type === 'msq') && q.why && q.why.length !== q.opts.length) err(q.id, 'why has', q.why.length, 'entries for', q.opts.length, 'options');
    if ((q.type === 'mcq' || q.type === 'msq') && (q.src === 'PYQ' || q.src === 'VARIATION') && !q.why) err(q.id, 'PYQ/variation needs a why for every option');
    if (q.type === 'num' && typeof q.ans !== 'number') err(q.id, 'num ans must be a number');
    if (q.type === 'text' && typeof q.ans !== 'string') err(q.id, 'text ans must be a string');
    if (q.type === 'short' && !q.model) err(q.id, 'short question needs a model answer');
    if (!q.sol && q.type !== 'short') err(q.id, 'no step-by-step solution');
    if (!['easy', 'moderate', 'hard'].includes(q.diff)) err(q.id, 'bad diff', q.diff);
    if (q.src === 'PYQ') {
      if (!c.papers[q.paper]) err(q.id, 'unknown paper', q.paper);
      if (!q.fam || !c.families[q.fam]) err(q.id, 'missing/unknown family', q.fam);
      if (!q.trap) err(q.id, 'PYQ needs a trap note');
      if (!(c.vars[q.id] || []).length) err(q.id, 'PYQ has no variation');
      if (/^ET/.test(q.paper) && !(c.papers[q.paper] || {}).endTerm) err(q.id, 'end-term label on a paper not marked endTerm');
    }
    if (q.src === 'VARIATION') { q.varOf.forEach(id => { if (!c.qmap[id] || c.qmap[id].src !== 'PYQ') err(q.id, 'varies unknown PYQ', id); }); if (!q.kind) err(q.id, 'variation needs a kind'); }
  });
  (c.verify || []).forEach(v => { if (!v.ok) err('KEY MISMATCH', v.id, '—', v.msg); });
  const P = c.qs.filter(q => q.src === 'PYQ');
  const stats = { concepts: c.concepts.length, questions: c.qs.length, pyq: P.length,
    variations: c.qs.filter(q => q.src === 'VARIATION').length, checkpoints: c.qs.filter(q => q.cp).length,
    computedKeys: (c.verify || []).length, pyqWithoutVariation: P.filter(q => !(c.vars[q.id] || []).length).length,
    glossary: c.gloss.length, flashcards: c.cards.length, families: Object.keys(c.families).length };
  return { errors: E, warnings: W, stats };
}
