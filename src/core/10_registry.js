/* ============================================================
   Course registry. Content files call these functions; the app
   never needs to change when a course or week is added.
   Load order (build.py): core → each course (course.js, w*.js,
   pyq.js, extra.js) → app.
   ============================================================ */
const COURSES = {}, COURSE_ORDER = [];
let CUR = null;
const LABELS = { PYQ: 'PYQ', ASSIGNMENT: 'ASSIGNMENT', NEW: 'NEW', VARIATION: 'VARIATION' };

function COURSE(o) {
  Object.assign(o, { weeks: [], concepts: [], cmap: {}, qs: [], qmap: {}, gloss: [], cards: [], formulas: [], compare: [], sheets: {},
    sources: [], limits: [], papers: {}, families: {}, intel: [], _dups: [], _n: 0 });
  COURSES[o.code] = o; COURSE_ORDER.push(o.code); CUR = o; return o;
}
const _course = code => { const c = code ? COURSES[code] : CUR; if (!c) throw new Error('Unknown course ' + code + ' — call COURSE() first'); CUR = c; return c; };

function WEEK(o) { const c = _course(o.course); o.course = c.code; o.topics = o.topics || []; c.weeks.push(o); c.weeks.sort((a, b) => a.n - b.n); return o; }

/* Concept. Required: id, week, title, pri, intu, why, formal, vis, math, ex[3], conn, mis, exam, src, prereq */
function C(o) { const c = _course(o.course); o.course = c.code; if (c.cmap[o.id]) c._dups.push('concept ' + o.id); c.cmap[o.id] = o; c.concepts.push(o); return o; }

function _addQ(c, o) {
  o.course = c.code;
  if (!o.id) o.id = c.code + '-q' + (++c._n);
  if (c.qmap[o.id]) c._dups.push('question ' + o.id);
  c.qmap[o.id] = o; c.qs.push(o); return o;
}
/* Checkpoint / practice question. cp = concept it checks. src defaults to NEW. */
function Q(o) {
  const c = _course(o.course); o.src = o.src || 'NEW';
  if (o.cp) { o.cs = o.cs || [o.cp]; if (!o.id) { const k = c.qs.filter(q => q.cp === o.cp).length + 1; o.id = c.code + '-' + o.cp + '-c' + k; } }
  return _addQ(c, o);
}
/* Past-paper question. id = <course>-<paper>-<qno>. otype: mcq|msq|num|text */
function PQ(course, paper, qno, marks, otype, o) {
  const c = _course(course);
  Object.assign(o, { id: `${course}-${paper}-${qno}`, src: 'PYQ', paper, qno, marks, type: otype });
  return _addQ(c, o);
}
/* Harder variation of one or more PYQs (a whole family). */
function VQ(o, pyqIds) {
  const c = _course(o.course); o.src = 'VARIATION'; o.varOf = [].concat(pyqIds); o.diff = o.diff || 'hard';
  if (!o.id) o.id = c.code + '-v' + (c.qs.filter(q => q.src === 'VARIATION').length + 1);
  return _addQ(c, o);
}
function PAPER(course, id, meta) { _course(course).papers[id] = Object.assign({ id }, meta); }
function FAMILY(id, meta) { const c = _course(meta.course); c.families[id] = Object.assign({ id }, meta); }
function GLOSS(term, def, week) { _course().gloss.push({ term, def, week }); }
function CARD(front, back, week) { const c = _course(); c.cards.push({ id: c.code + '-k' + (c.cards.length + 1), front, back, week }); }
function FORMULA(o) { _course().formulas.push(o); }
function COMPARE(o) { _course().compare.push(o); }
function SHEET(week, html) { _course().sheets[week] = html; }
function SOURCE(o) { _course().sources.push(o); }
function LIMIT(t) { _course().limits.push(t); }
function INTEL(o) { _course().intel.push(o); }

/* Resolve cross-references once every file has loaded. */
function FINALIZE() {
  COURSE_ORDER.forEach(code => {
    const c = COURSES[code];
    c.qs.forEach(q => {
      if (q.src === 'VARIATION') {
        const base = q.varOf.map(id => c.qmap[id]).filter(Boolean);
        if (base[0]) { q.cs = q.cs || base[0].cs; q.week = q.week || base[0].week; q.fam = q.fam || base[0].fam; }
      }
      if (q.week == null && q.cs && c.cmap[q.cs[0]]) q.week = c.cmap[q.cs[0]].week;
      q.cs = q.cs || [];
    });
    c.vars = {}; c.qs.filter(q => q.src === 'VARIATION').forEach(v => v.varOf.forEach(id => (c.vars[id] = c.vars[id] || []).push(v.id)));
    c.verify = VERIFY(c);
  });
}
