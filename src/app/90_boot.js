/* ============================================================
   Router, header, sidebar, theme, boot.
   Routes: #/  ·  #/<code>  ·  #/<code>/<view>/<arg>?<params>
   ============================================================ */
function sidebar() {
  const c = CO(), cur = location.hash, ex = exam();
  const a = (p, t, extra = '') => `<a class="nav ${cur === '#/' + c.code + (p ? '/' + p : '') ? 'on' : ''}" href="#/${c.code}${p ? '/' + p : ''}">${t}${extra}</a>`;
  let h = `<div class="grp"><span class="cc" style="background:${c.color}"></span>${c.short}</div>` + a('', 'Home');
  h += '<div class="grp">Study</div>';
  c.weeks.forEach(w => {
    const open = cur.includes('/w/' + w.n) || w.topics.some(t => t.cs.some(id => cur.endsWith('/c/' + id)));
    h += `<details ${open ? 'open' : ''}><summary>W${w.n} · ${w.title}${ex.weeks.includes(w.n) ? '' : ' <span class="muted small">(not in exam)</span>'}</summary>${a('w/' + w.n, 'Week overview')}`;
    w.topics.forEach(t => { h += `<div class="topic">${t.title}</div>` + t.cs.map(id => c.cmap[id] ? `<a class="cpt ${cur.endsWith('/c/' + id) ? 'on' : ''}" href="#/${c.code}/c/${id}"><span class="dot ${dotCls(id)}"></span>${c.cmap[id].title}</a>` : '').join(''); });
    h += '</details>';
  });
  h += '<div class="grp">Practice</div>' + a('pyq', 'PYQ repository') + a('bank', 'Practice bank') + a('mock', 'Mocks') + a('errors', 'Error notebook', ` <span class="tag">${openErrs().length}</span>`) + a('review', 'Revision queue', ` <span class="tag">${dueQs().length}</span>`) + a('cards', 'Flashcards');
  h += '<div class="grp">Revise</div>' + a('sheets', 'Revision sheets') + a('glossary', 'Glossary') + a('formulas', 'Formulas & frameworks') + a('compare', 'Comparison tables') + a('examples', 'Worked examples');
  h += '<div class="grp">Exam & honesty</div>' + a('intel', 'Exam intelligence') + a('sources', 'Sources & discrepancies') + a('qa', 'QA & limitations') + a('data', 'Your data');
  return h;
}

function fatal(problems) {
  document.getElementById('main').innerHTML = `<div class="fatal"><h1>Refusing to load: answer keys disagree with the maths</h1><p>These keys were recomputed from their formulas when the page loaded and did not match. Fix the data (or the formula) and rebuild.</p><ul>${problems.map(p => `<li><b>${p.course} · ${esc(p.id)}</b> — ${esc(p.msg)}</li>`).join('')}</ul></div>`;
  document.getElementById('side').innerHTML = '';
}

function render() {
  const raw = location.hash.replace(/^#\/?/, ''), [path, query] = raw.split('?'), parts = path.split('/').filter(Boolean), prm = new URLSearchParams(query || '');
  const main = document.getElementById('main'), side = document.getElementById('side');
  side.classList.remove('open');
  if (!parts.length || !COURSES[parts[0]]) {
    if (COURSE_ORDER.length === 1 && !parts.length) { location.hash = '#/' + COURSE_ORDER[0]; return; }
    APP.code = null; side.innerHTML = '<div class="grp">Courses</div>' + COURSE_ORDER.map(c => `<a class="nav" href="#/${c}"><span class="cc" style="background:${COURSES[c].color}"></span>${COURSES[c].short}</a>`).join('');
    main.innerHTML = V.root(); document.getElementById('courseSel').value = ''; document.getElementById('brandSub').textContent = ''; return;
  }
  if (APP.code !== parts[0]) { APP.code = parts[0]; APP.P = Store.load(APP.code); if (APP.mock) { clearInterval(APP.timer); APP.mock = null; } }
  const c = CO(); document.getElementById('courseSel').value = c.code; document.getElementById('brandSub').textContent = c.short; document.title = c.short + ' · K Study Space';
  const view = parts[1] || 'home', arg = parts[2];
  const fn = { home: V.home, w: () => V.week(arg), c: () => V.concept(arg), q: () => V.question(arg), pyq: () => V.pyq(prm), bank: () => V.bank(prm), mock: () => V.mock(prm), errors: V.errors, review: V.review, cards: () => V.cards(prm),
    sheets: () => V.sheets(arg), glossary: () => V.glossary(prm), formulas: V.formulas, compare: V.compare, examples: () => V.examples(prm), intel: V.intel, sources: V.sources, qa: V.qa, data: V.data, search: () => V.search(prm) }[view] || V.nf;
  if (view !== 'mock' && APP.mock && !APP.mock.done && !confirm('Leave the running mock? It will be abandoned.')) { history.back(); return; }
  if (view !== 'mock' && APP.mock) { clearInterval(APP.timer); if (!APP.mock.done) APP.mock = null; }
  main.innerHTML = fn();
  side.innerHTML = sidebar();
  const after = { home: V.homeAfter, pyq: V.pyqAfter, bank: V.bankAfter, mock: () => APP.mock ? (APP.mock.done ? V.mockResultAfter() : V.mockRunAfter()) : V.mockAfter(), cards: V.cardsAfter, glossary: V.glossaryAfter, examples: V.examplesAfter, data: V.dataAfter }[view];
  if (after) after();
  const anchor = location.hash.match(/#m\w+$/); if (!anchor && view !== 'mock') window.scrollTo(0, 0);
}

function boot() {
  try { FINALIZE(); } catch (e) { document.getElementById('main').innerHTML = `<div class="fatal"><h1>Content failed to load</h1><pre>${esc(e.stack || e)}</pre></div>`; return; }
  const bad = []; COURSE_ORDER.forEach(code => COURSES[code].verify.filter(v => !v.ok).forEach(v => bad.push(Object.assign({ course: code }, v))));
  if (bad.length) return fatal(bad);
  const sel = document.getElementById('courseSel');
  sel.innerHTML = '<option value="">All courses</option>' + COURSE_ORDER.map(c => `<option value="${c}">${COURSES[c].short}</option>`).join('');
  sel.onchange = () => { location.hash = sel.value ? '#/' + sel.value : '#/'; };
  const s = document.getElementById('search');
  s.addEventListener('keydown', e => { if (e.key === 'Enter' && APP.code) location.hash = `#/${APP.code}/search?q=${encodeURIComponent(s.value)}`; });
  const th = localStorage.getItem('theme'); if (th) document.documentElement.dataset.theme = th;
  document.getElementById('themeBtn').onclick = () => { const dark = document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.dataset.theme = dark ? 'light' : 'dark'; localStorage.setItem('theme', document.documentElement.dataset.theme); };
  document.getElementById('menuBtn').onclick = () => document.getElementById('side').classList.toggle('open');
  // in-page anchors (#m1 etc.) must not trigger routing
  document.addEventListener('click', e => { const a = e.target.closest('a[href^="#m"]'); if (a) { e.preventDefault(); const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) t.scrollIntoView({ behavior: 'smooth' }); } });
  window.addEventListener('hashchange', render);
  render();
}
boot();
