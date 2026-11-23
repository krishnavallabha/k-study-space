/* ============================================================
   Calculators. Any question whose answer can be computed carries
   calc: () => value. VERIFY() recomputes every such key at load;
   the app refuses to start if a key disagrees with the maths.
   ============================================================ */
const CALC = {
  COCOMO: { organic: [2.4, 1.05], semi: [3.0, 1.12], embedded: [3.6, 1.20] },
  /* Basic COCOMO effort in person-months: a × KLOC^b × EAF */
  cocomo(mode, kloc, eaf = 1) { const [a, b] = Array.isArray(mode) ? mode : CALC.COCOMO[mode]; return a * Math.pow(kloc, b) * eaf; },
  prod: arr => arr.reduce((p, x) => p * x, 1),
  sum: arr => arr.reduce((p, x) => p + x, 0),
  avg: arr => CALC.sum(arr) / arr.length,
  risk: (p, i) => p * i,
  /* Pick the label with the highest P × I. rows: [[label, p, i], ...] */
  topRisk: rows => rows.map(([l, p, i]) => [l, p * i]).sort((a, b) => b[1] - a[1])[0][0],
  /* Cyclomatic complexity of a Python snippet = decision points + 1.
     Counts if / elif / for / while (and case); never else. */
  cc(code) {
    let d = 0;
    code.split('\n').forEach(line => { const s = line.replace(/#.*/, '').trim(); if (/^(if|elif|for|while|case)\b/.test(s)) d++; });
    return d + 1;
  },
  /* Activity network: tasks [{id,d}], deps [[from,to]] → {order, ef, len, path, slack} */
  critical(tasks, deps) {
    const ids = tasks.map(t => t.id), dur = {}; tasks.forEach(t => dur[t.id] = t.d);
    const indeg = {}; ids.forEach(i => indeg[i] = 0); deps.forEach(([, b]) => indeg[b]++);
    const order = [], q = ids.filter(i => !indeg[i]);
    while (q.length) { const n = q.shift(); order.push(n); deps.filter(d => d[0] === n).forEach(([, b]) => { if (!--indeg[b]) q.push(b); }); }
    const es = {}, ef = {}, prev = {};
    order.forEach(n => { const ps = deps.filter(d => d[1] === n).map(d => d[0]); es[n] = 0; ps.forEach(p => { if (ef[p] > es[n]) { es[n] = ef[p]; prev[n] = p; } }); ef[n] = es[n] + dur[n]; });
    const len = Math.max(...ids.map(i => ef[i])); let end = ids.find(i => ef[i] === len); const path = [];
    while (end) { path.unshift(end); end = prev[end]; }
    const lf = {}; [...order].reverse().forEach(n => { const ss = deps.filter(d => d[0] === n).map(d => d[1]); lf[n] = ss.length ? Math.min(...ss.map(s => lf[s] - dur[s])) : len; });
    const slack = {}; ids.forEach(i => slack[i] = lf[i] - ef[i]);
    return { order, es, ef, len, path, slack };
  },
  /* Read a numeric value out of an option label: "Rs. 14,70,000/-" → 1470000, "146 Person-Months" → 146 */
  num(t) { const m = String(t).replace(/,/g, '').match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : NaN; },
  /* Parse a typed numeric answer, accepting fractions like 3/4 */
  parse(s) { s = String(s).trim().replace(/,/g, ''); const f = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/); if (f) return parseFloat(f[1]) / parseFloat(f[2]); return s === '' ? NaN : Number(s); },
  round: (x, d = 2) => Math.round(x * Math.pow(10, d)) / Math.pow(10, d),
  /* Personal finance (rates as fractions: 0.07 = 7%) */
  fv: (p, r, n) => p * Math.pow(1 + r, n),                        // future value with annual compounding
  cagr: (start, end, years) => (Math.pow(end / start, 1 / years) - 1) * 100,   // % per year
  real: (nominal, inflation) => ((1 + nominal) / (1 + inflation) - 1) * 100,   // exact real return, %
  rule72: years => 72 / years,                                    // % needed to double in `years`
  netWorth: (assets, liabilities) => CALC.sum(assets) - CALC.sum(liabilities)
};

/* Recompute every key that carries calc(). Returns [{id, ok, msg}]. */
function VERIFY(c) {
  const out = [];
  c.qs.filter(q => typeof q.calc === 'function').forEach(q => {
    let v; try { v = q.calc(); } catch (e) { out.push({ id: q.id, ok: false, msg: 'calc threw: ' + e.message }); return; }
    if (typeof v === 'string') {
      const keyText = q.type === 'mcq' ? q.opts[q.ans] : String(q.ans);
      const ok = String(keyText).trim().toLowerCase() === v.trim().toLowerCase();
      out.push({ id: q.id, ok, msg: ok ? 'matches "' + v + '"' : `computed "${v}" but key is "${keyText}"` }); return;
    }
    if (q.type === 'mcq') {
      const vals = q.opts.map(CALC.num);
      let best = 0; vals.forEach((x, i) => { if (Math.abs(x - v) < Math.abs(vals[best] - v)) best = i; });
      const rel = Math.abs(vals[q.ans] - v) / Math.max(1e-9, Math.abs(v));
      const ok = best === q.ans && rel <= (q.relTol || 0.03);
      out.push({ id: q.id, ok, msg: `computed ${CALC.round(v, 3)} → nearest option ${best + 1} (${q.opts[best]}); key = option ${q.ans + 1}; off by ${(rel * 100).toFixed(2)}%` });
    } else if (q.type === 'num') {
      const ok = Math.abs(v - q.ans) <= (q.tol || 1e-9) + 1e-9;
      out.push({ id: q.id, ok, msg: `computed ${CALC.round(v, 4)}; key ${q.ans} ± ${q.tol || 0}` });
    } else out.push({ id: q.id, ok: false, msg: 'calc on unsupported type ' + q.type });
  });
  return out;
}
