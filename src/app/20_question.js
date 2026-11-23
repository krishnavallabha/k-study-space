/* ============================================================
   Question card. Modes:
     practice — check immediately, show why/solution/trap, record attempt
     mock     — inputs only, answers hidden until the paper is submitted
     review   — read-only, shows the student's response and the full solution
   ============================================================ */
const TAGCLS = { PYQ: 'pyq', ASSIGNMENT: 'asg', NEW: 'new', VARIATION: 'var' };
const TYPENAME = { mcq: 'MCQ', msq: 'MSQ · select all that apply', num: 'Numeric', text: 'Text answer', short: 'Short answer · self-graded' };
const KIND = { numbers: 'changed numbers', negated: 'negated stem', scenario: 'new scenario', chained: 'chained', counting: 'counting', nearmiss: 'near-miss distractors' };

function qMeta(q) {
  const c = CO(), t = [];
  t.push(`<span class="tag ${TAGCLS[q.src]}">${q.src}</span>`);
  if (q.src === 'PYQ') { const p = c.papers[q.paper]; t.push(`<span class="tag">${p ? p.label : q.paper} · Q${q.qno} · ${q.marks} marks</span>`); }
  if (q.src === 'VARIATION') t.push(`<span class="tag var">${q.varOf.length} PYQ${q.varOf.length > 1 ? 's' : ''} · ${KIND[q.kind] || q.kind}</span>`);
  t.push(`<span class="tag">${TYPENAME[q.type]}</span>`, `<span class="tag">${q.diff}</span>`);
  if (q.week != null) t.push(`<span class="tag">W${q.week}</span>`);
  if (q.fam && c.families[q.fam]) t.push(`<a class="tag" href="#/${c.code}/pyq?fam=${q.fam}">family: ${c.families[q.fam].t}</a>`);
  (q.cs || []).slice(0, 2).forEach(id => c.cmap[id] && t.push(`<a class="tag" href="#/${c.code}/c/${id}">${c.cmap[id].title}</a>`));
  if (q.derived) t.push(`<span class="tag derived" title="${esc(q.derived)}">key derived</span>`);
  return t.join('');
}

function qInputs(q, mode, resp) {
  const name = 'r_' + q.id.replace(/\W/g, '_') + '_' + mode;
  if (q.type === 'mcq' || q.type === 'msq') {
    return q.opts.map((o, i) => {
      const picked = q.type === 'mcq' ? resp === i : Array.isArray(resp) && resp.includes(i);
      let cls = picked ? 'picked' : '';
      if (mode === 'review') { const right = q.type === 'mcq' ? q.ans === i : q.ans.includes(i); cls = right ? 'right' : (picked ? 'wrong' : ''); }
      return `<label class="opt ${cls}"><input type="${q.type === 'mcq' ? 'radio' : 'checkbox'}" name="${name}" value="${i}" ${picked ? 'checked' : ''} ${mode === 'review' ? 'disabled' : ''}><span>${o}</span></label>`;
    }).join('');
  }
  if (q.type === 'num' || q.type === 'text') return `<input class="resp" type="text" name="${name}" value="${resp == null ? '' : esc(resp)}" placeholder="${q.type === 'num' ? 'Type a number (fractions like 3/4 are fine)' : 'Type your answer'}" ${mode === 'review' ? 'disabled' : ''} style="width:100%;max-width:340px">`;
  if (q.type === 'short') return `<textarea class="resp" rows="3" style="width:100%" placeholder="Write your answer first, then reveal the model answer." ${mode === 'review' ? 'disabled' : ''}></textarea>`;
  return '';
}

function readResp(el, q) {
  if (q.type === 'mcq') { const x = el.querySelector('input:checked'); return x ? +x.value : null; }
  if (q.type === 'msq') return [...el.querySelectorAll('input:checked')].map(x => +x.value);
  const x = el.querySelector('.resp'); return x ? x.value : null;
}

function answerText(q) {
  if (q.type === 'mcq') return `Option ${q.ans + 1}: ${q.opts[q.ans]}`;
  if (q.type === 'msq') return q.ans.map(i => `Option ${i + 1}: ${q.opts[i]}`).join('<br>');
  if (q.type === 'num') return (q.ansText || q.ans) + (q.tol ? ` (accepted within ± ${q.tol})` : '');
  return esc(q.ans);
}

function solutionHTML(q) {
  const c = CO(); let h = '<div class="sol">';
  if (q.type !== 'short') h += `<h5>Answer</h5><div>${answerText(q)}</div>`;
  if (q.derived) h += M.box('exam', 'Key status: derived', `<p>${q.derived}</p>`);
  if (q.sol) h += `<h5>Method, step by step</h5><div>${q.sol}</div>`;
  if (q.why && q.opts) h += '<h5>Why each option is right or wrong</h5><ul class="why">' + q.opts.map((o, i) => {
    const right = q.type === 'mcq' ? q.ans === i : q.ans.includes(i);
    return `<li><span class="${right ? 'pill-ok' : 'pill-no'}">${right ? '✓' : '✗'}</span> <b>${o}</b> — ${q.why[i]}</li>`;
  }).join('') + '</ul>';
  if (q.trap) h += M.box('trap', 'The trap the paper set', `<p>${q.trap}</p>`);
  if (q.src === 'PYQ' && (c.vars[q.id] || []).length) h += `<h5>Harder variations of this PYQ</h5><p class="small">${c.vars[q.id].map((v, i) => `<a href="#/${c.code}/q/${v}">Variation ${i + 1} (${KIND[c.qmap[v].kind] || c.qmap[v].kind})</a>`).join(' · ')}</p>`;
  if (q.src === 'VARIATION') h += `<h5>Built on</h5><p class="small">${q.varOf.map(id => `<a href="#/${c.code}/q/${id}">${id.replace(c.code + '-', '')}</a>`).join(' · ')}</p>`;
  return h + '</div>';
}

function blockHTML(q) { return q.block ? `<details class="ctx" open><summary>Common data for this block (${q.block.id})</summary>${q.block.text}</details>` : ''; }

function qCard(q, mode = 'practice', o = {}) {
  const P = APP.P, a = P.qa[q.id];
  const hist = a ? `<span class="small muted" style="margin-left:auto">${a.c}/${a.n} correct · box ${a.box}</span>` : '';
  let h = `<div class="q" data-qid="${q.id}" data-mode="${mode}" id="q_${q.id.replace(/\W/g, '_')}">`;
  h += `<div class="qh">${o.num ? `<b style="margin-right:6px">Q${o.num}.</b>` : ''}${qMeta(q)}${mode === 'practice' ? hist : ''}</div>`;
  h += blockHTML(q) + `<div class="stem">${q.q}</div>`;
  h += `<div class="inputs">${qInputs(q, mode, o.resp)}</div>`;
  if (mode === 'practice') {
    h += q.type === 'short'
      ? `<div class="row" style="margin-top:8px"><button class="btn sm" data-act="reveal">Show model answer</button></div><div class="fbx"></div>`
      : `<div class="row" style="margin-top:8px"><button class="btn sm" data-act="check">Check</button><button class="btn sm ghost" data-act="show">Show solution</button></div><div class="fbx"></div>`;
  }
  if (mode === 'review') {
    const ok = grade(q, o.resp);
    h += `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? 'Correct' : (o.resp == null || o.resp === '' || (Array.isArray(o.resp) && !o.resp.length) ? 'Not answered' : 'Incorrect')} · ${ok ? qMarks(q) : 0}/${qMarks(q)} marks</div>` + solutionHTML(q);
  }
  return h + '</div>';
}

/* Practice-mode interactions (event delegation, set up once). */
document.addEventListener('click', ev => {
  const b = ev.target.closest('[data-act]'); if (!b) return;
  const card = b.closest('.q'); if (!card || card.dataset.mode !== 'practice') return;
  const q = CO().qmap[card.dataset.qid], fb = card.querySelector('.fbx'), act = b.dataset.act;
  if (act === 'check') {
    const r = readResp(card, q);
    if (r == null || r === '' || (Array.isArray(r) && !r.length)) { fb.innerHTML = '<div class="fb no">Pick or type an answer first.</div>'; return; }
    const ok = grade(q, r); record(q, ok); refreshSide();
    if (q.opts) card.querySelectorAll('.opt').forEach((el, i) => { const right = q.type === 'mcq' ? q.ans === i : q.ans.includes(i); el.classList.toggle('right', right); el.classList.toggle('wrong', !right && el.querySelector('input').checked); });
    fb.innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}">${ok ? '✓ Correct.' : '✗ Not quite — the method below shows where it goes wrong. Added to your error notebook.'}</div>` + solutionHTML(q);
  } else if (act === 'show') fb.innerHTML = solutionHTML(q);
  else if (act === 'reveal') {
    fb.innerHTML = M.box('note', 'Model answer', q.model) + (q.sol ? `<div class="sol"><h5>Notes</h5>${q.sol}</div>` : '') +
      `<div class="selfgrade"><span class="small muted">Compare honestly. Did your answer contain every point above?</span><button class="btn sm" data-act="sg1">I got it</button><button class="btn sm ghost" data-act="sg0">I missed something</button></div>`;
  } else if (act === 'sg1' || act === 'sg0') { record(q, act === 'sg1'); fb.querySelector('.selfgrade').innerHTML = `<span class="${act === 'sg1' ? 'pill-ok' : 'pill-no'}">Recorded.</span>`; }
});

function refreshSide() { const s = document.getElementById('side'); if (s && APP.code) { const y = s.scrollTop; s.innerHTML = sidebar(); s.scrollTop = y; } }
