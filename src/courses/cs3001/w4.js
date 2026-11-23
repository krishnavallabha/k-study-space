/* ===================== SE WEEK 4 — Software project management ===================== */
WEEK({ course: 'cs3001', n: 4, title: 'Software Project Management',
  blurb: 'Someone has to say how big the project is, how long it will take, what could go wrong and who does what. Estimate effort (expert judgement, Delphi, COCOMO); schedule it (WBS, activity network, critical path, Gantt); manage risk (technical, project, business; risk = P × I); and, in Agile, manage with Scrum roles, ceremonies, story points and velocity.',
  topics: [
    { title: '4.1 Estimation', cs: ['estimation', 'cocomo'] },
    { title: '4.2 Scheduling', cs: ['scheduling'] },
    { title: '4.3 Risk management', cs: ['risk', 'risk-calc'] },
    { title: '4.4 Project management in Scrum', cs: ['scrum', 'velocity'] }] });

/* ---------------- 4.1 Estimation ---------------- */
C({ id: 'estimation', week: 4, title: 'The project manager, size, effort and estimation techniques', pri: 'Medium', prereq: ['srs'],
  src: 'Revision notes W4 §4.1–4.2 · Study guide ch.4 §4.1–4.2 · PYQs 2023 T3 Q184, 2026 T1 Q26',
  oneLine: 'Size in KLOC, effort in person-months. Empirical = from experience (expert judgement, Delphi); heuristic = a mathematical model relating effort to size (COCOMO).',
  misShort: 'Reading 240 person-months as 240 developers, or calling Delphi “a quick rough estimate”.',
  intu: R`<p>A client asks: “How much will my app cost, and when will it be ready?”</p>
<p>You cannot answer without two numbers: how <b>big</b> is it, and how much <b>work</b> does that size take?</p>
<p>Size is counted in lines of code — thousands of lines, <b>KLOC</b>.</p>
<p>Work is counted in <b>person-months</b>: one person working for one month. 240 person-months could be 10 people for 24 months — not 240 people for one month, because people cannot be added endlessly.</p>
<p>To turn size into effort you can ask experienced people (empirical), or use a formula fitted to past projects (heuristic).</p>
<p>The question: <b>which technique is which, and what does each one actually do?</b></p>`,
  why: R`<ul><li>2023 T3 Q184: the goal of Delphi — combine several experts’ estimates into a consensus.</li><li>2026 T1 Q26 (MSQ): heuristic techniques use mathematical models, relate effort to size, include COCOMO — and do not depend solely on intuition.</li><li>Every COCOMO question (next concept, ten papers) builds on these units.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Project manager’s responsibilities</b> — point of contact between client and team; form and manage the team; scheduling; estimation; risk management; configuration management.',
    '<b>Size</b> — lines of code, usually in KLOC (1 KLOC = 1000 lines).',
    '<b>Effort</b> — person-months (PM): the work one person does in one month. Developers × months = person-months.',
    '<b>Empirical estimation</b> — based on experience with similar projects. <i>Expert judgement</i>: an expert makes an educated guess (risk: individual bias, optimism, limited knowledge). <i>Delphi technique</i>: a coordinator sends the SRS to several experts; they estimate anonymously; the coordinator circulates a summary; rounds repeat until a consensus emerges.',
    '<b>Heuristic (model-based) estimation</b> — a mathematical model relating effort to project size, fitted from past data. Example: COCOMO.']))
    + '<p><b>In words:</b> ask people → empirical; plug size into a formula → heuristic.</p>',
  vis: M.flow([{ t: 'Coordinator', sub: 'sends SRS + form' }, { t: 'Experts estimate', sub: 'anonymously' }, { t: 'Summary', sub: 'circulated' }, { t: 'Revise', sub: 'next round' }, { t: 'Consensus', hl: true }], { cap: 'The Delphi technique: anonymous rounds until the estimates converge.' }),
  ex: [
    M.ex('Introductory', R`<p>What is the primary goal of the Delphi technique?</p>`,
      R`<p>To <b>combine estimates from multiple experts to reach a consensus</b> (2023 T3 Q184). Anonymity removes the pressure to agree with the loudest or most senior expert.</p><p><b>Now suppose</b> only one senior engineer gives a number. That is <b>expert judgement</b> — quicker, but exposed to that one person’s bias. Delphi exists to fix exactly that weakness.</p>`),
    M.ex('Standard', R`<p>A project is estimated at 240 person-months and must finish in 2 years. How many developers on average?</p>`,
      R`<p>240 PM ÷ 24 months = <b>10 developers</b>. Not 240 developers — the unit is person × month.</p>`),
    M.ex('Exam-level', R`<p>Select ALL characteristics of heuristic estimation: (a) uses mathematical models (b) relates effort to project size (c) depends solely on expert intuition (d) includes COCOMO.</p>`,
      R`<p>(a), (b), (d). (c) describes empirical expert judgement. 2026 T1 Q26.</p>`)],
  math: M.rule('<p><b>Effort (PM) = developers × months.</b> Empirical = expert judgement, Delphi (anonymous multi-round consensus). Heuristic = model relating effort to size (COCOMO).</p>')
    + M.why([['Delphi = quick rough estimate', 'it takes several rounds; its purpose is consensus.'], ['Delphi = encourage open discussion', 'experts are kept anonymous precisely to avoid group pressure.'], ['Heuristic = intuition', 'that is the empirical family.']]),
  conn: R`<p><b>At work:</b> “planning poker” in Agile teams is a quick, non-anonymous cousin of Delphi.</p><p><b>Earlier:</b> estimates start from the SRS (Week 2), which is what the Delphi coordinator sends out.</p><p><b>Next:</b> COCOMO, the course’s heuristic model.</p>`,
  mis: M.ul(['“To encourage open and collaborative communication” for Delphi (2023 T3 Q184).', '“Depend solely on expert intuition” as heuristic (2026 T1 Q26).', '240 PM = 240 developers.']),
  exam: R`<p><b>Fast method:</b> experts → empirical; formula → heuristic; several anonymous experts converging → Delphi.</p>`
});
Q({ cp: 'estimation', type: 'num', diff: 'easy', q: 'A project needs 180 person-months and must be delivered in 15 months. How many developers are needed on average?', ans: 12, tol: 0, calc: () => 180 / 15,
  sol: '180 ÷ 15 = 12.' });
Q({ cp: 'estimation', type: 'mcq', diff: 'moderate', q: 'Why are experts kept anonymous in the Delphi technique?', opts: ['To save time', 'To avoid one expert’s opinion dominating because of seniority or personality', 'Because the coordinator does not trust them', 'So that no consensus is reached'], ans: 1,
  why: ['It takes longer, not shorter.', 'Correct.', 'Not the reason.', 'Consensus is the goal.'], sol: 'Anonymity removes group pressure.' });
Q({ cp: 'estimation', type: 'msq', diff: 'moderate', q: 'Select ALL responsibilities of a software project manager listed in the course.', opts: ['Project estimation', 'Writing all the code', 'Risk management', 'Configuration management'], ans: [0, 2, 3],
  why: ['Listed.', 'Developers write code.', 'Listed.', 'Listed.'], sol: 'Contact point, team, scheduling, estimation, risk, configuration management.' });
Q({ cp: 'estimation', type: 'short', diff: 'moderate', q: 'Compare expert judgement and the Delphi technique: how each works and one drawback of expert judgement that Delphi reduces.',
  model: '<p><b>Expert judgement:</b> one experienced person makes an educated guess, often by estimating components and combining them. <b>Delphi:</b> a coordinator gives several experts the SRS; they estimate anonymously; the coordinator circulates a summary; experts revise over several rounds until consensus.</p><p>Drawback reduced: a single expert’s bias, optimism or limited knowledge — Delphi averages over several experts and anonymity prevents the most senior voice dominating.</p>' });

/* ---------------- 4.1 COCOMO ---------------- */
C({ id: 'cocomo', week: 4, title: 'COCOMO: effort = a × KLOC^b, then × EAF, then × salary', pri: 'High', prereq: ['estimation'],
  src: 'Revision notes W4 §4.2 COCOMO · Study guide ch.4 §4.2.3 · PYQs 2023 T1 Q245, 2023 T2 Q16, 2024 T1 Q41, 2024 T2 Q21–22, 2024 T3 Q16, 2025 T1 Q40–41, 2025 T2 Q152–153, 2026 T1 Q11, 2026 T2 Q25–26',
  oneLine: 'Pick the type (organic 2.4/1.05, semi-detached 3.0/1.12, embedded 3.6/1.20); initial effort = a·KLOC^b PM; final = initial × EAF (product of cost drivers); cost = effort × monthly salary.',
  misShort: 'Using lines instead of KLOC, adding cost-driver multipliers instead of multiplying, or picking organic for hardware-coupled software.',
  intu: R`<p>Experience shows something simple: bigger programs take more effort — and <i>more than proportionally</i> more, because more parts must fit together.</p>
<p>COCOMO turns that into a formula: effort = a × size<sup>b</sup>, with b a little above 1.</p>
<p>But not every project of the same size is equally hard. A shopping app built by an experienced team on clear requirements is easy (<b>organic</b>). Air-traffic-control software tied to complex hardware is hard (<b>embedded</b>). In between, a mixed team on a moderately familiar system is <b>semi-detached</b>.</p>
<p>Each type gets its own a and b. Then you adjust for specific factors — needed reliability, database size, team experience — by multiplying by the <b>effort adjustment factor</b>.</p>
<p>The question: <b>given a story, a size and maybe a salary, what is the effort or cost?</b> Four steps, every time.</p>`,
  why: R`<ul><li>The single most reliable source of marks in Week 4: ten of eleven papers, often as a 2–3 question comprehension block worth up to 10 marks.</li><li>Every key here is recomputed in code when the app loads.</li><li>Variants: initial effort, final effort with EAF, cost with salary, sum of module sizes (2024 T1), product of four cost drivers (2025 T2), category only (2026 T2).</li></ul>`,
  formal: M.def(M.lines([
    '<b>COCOMO</b> (Constructive Cost Model, Boehm) — a heuristic estimation model.',
    '<b>Step 1 · Type:</b> organic (small, well-understood, experienced team) a = 2.4, b = 1.05; semi-detached (mix of experienced and inexperienced, partly familiar) a = 3.0, b = 1.12; embedded (strongly coupled to hardware or tight constraints) a = 3.6, b = 1.20.',
    '<b>Step 2 · Initial effort:</b> E<sub>i</sub> = a × (KLOC)<sup>b</sup> person-months.',
    '<b>Step 3 · Final effort:</b> E = E<sub>i</sub> × EAF, where EAF = product of the cost-driver multipliers (15 attributes such as reliability, database size, team experience). EAF &gt; 1 raises effort, EAF &lt; 1 lowers it.',
    '<b>Step 4 · Cost:</b> cost = E × monthly salary per developer.']))
    + '<p><b>In words:</b> type → a, b; size in KLOC → power; multiply by EAF; multiply by salary.</p>',
  vis: M.table(['Type', 'Signal words', 'a', 'b', '100 KLOC initial effort'], [['Organic', 'well understood, small experienced team', '2.4', '1.05', '≈ 302 PM'], ['Semi-detached', 'mix of experienced and new; built similar before', '3.0', '1.12', '≈ 521 PM'], ['Embedded', 'tightly coupled with hardware; real-time; strict constraints', '3.6', '1.20', '≈ 904 PM']], 'Both a and b rise from organic to embedded, so effort grows faster.')
    + M.bars([{ t: 'Organic', v: 302 }, { t: 'Semi-detached', v: 521 }, { t: 'Embedded', v: 904 }], { unit: ' PM', cap: 'Same 100 KLOC, three types: effort triples from organic to embedded.' }),
  ex: [
    M.ex('Introductory', R`<p>A mobile app for buying and selling used electronics; requirements clearly understood; small team of experienced developers; 1,00,000 lines. Initial effort? Final effort with EAF = 1.88?</p>`,
      R`<ol><li>Type: well understood + small experienced team → <b>organic</b>, a = 2.4, b = 1.05.</li><li>Size: 1,00,000 lines = <b>100 KLOC</b>.</li><li>100<sup>1.05</sup> = 125.89 → E<sub>i</sub> = 2.4 × 125.89 = <b>302.1 PM</b> → option “303” (2024 T2 Q21).</li><li>Final: 302.1 × 1.88 = <b>568 PM</b> → option “570” (2024 T2 Q22).</li></ol>
<p><b>Now suppose</b> the same 100 KLOC is a traffic-control app integrated with hardware and real-time processing (2025 T1 Q40). Type becomes <b>embedded</b>: 3.6 × 100<sup>1.2</sup> = 3.6 × 251.19 = <b>904.3 PM</b> → “905”. × 1.88 = 1700 → “1702”. Same size, three times the effort — the type is the biggest lever.</p>`),
    M.ex('Standard', R`<p>An internal dashboard; mix of experienced and new developers; the organisation has built similar systems; 6 KLOC. Cost drivers: reliability 1.15, database size 1.08, application experience 1.10, language and tool experience 0.95. Initial and final effort?</p>`,
      R`<ol><li>Mixed team, partly familiar → <b>semi-detached</b>, a = 3.0, b = 1.12.</li><li>6<sup>1.12</sup> = 7.44 → E<sub>i</sub> = 3.0 × 7.44 = <b>22.3 PM</b> (2025 T2 Q152).</li><li>EAF = 1.15 × 1.08 × 1.10 × 0.95 = <b>1.2979</b> — multiply, never add.</li><li>E = 22.32 × 1.2979 = <b>28.97 PM</b> (2025 T2 Q153).</li></ol><p>Adding the drivers (1.15 + 1.08 + 1.10 + 0.95 = 4.28) gives 95.5 — near the decoy “90.304”.</p>`),
    M.ex('Exam-level', R`<p>A food-ordering app with four modules: 5,000 + 20,000 + 15,000 + 8,000 lines; requirements well understood; small experienced team; salary ₹50,000 per developer-month. Approximate cost?</p>`,
      R`<ol><li>Total size = 48,000 lines = <b>48 KLOC</b>. Add the sizes first; do not run COCOMO per module (the exponent makes the sum of parts smaller than the whole).</li><li>Organic: 48<sup>1.05</sup> = 58.27 → E = 2.4 × 58.27 = <b>139.9 PM</b>.</li><li>Cost = 139.9 × 50,000 = ₹69,92,000 ≈ <b>₹70,00,000</b> (2024 T1 Q41).</li></ol>`)],
  math: M.rule(R`<p><b>E<sub>initial</sub> = a × KLOC<sup>b</sup></b> &nbsp; (organic 2.4/1.05 · semi-detached 3.0/1.12 · embedded 3.6/1.20)</p><p><b>E<sub>final</sub> = E<sub>initial</sub> × EAF</b>, EAF = ∏ cost-driver multipliers. &nbsp; <b>Cost = E × salary per month.</b></p>`)
    + M.why([['KLOC = 100000 instead of 100', '100000<sup>1.05</sup> is astronomically large; the formula expects thousands of lines.'], ['Add the multipliers', 'EAF is a product; adding gives 4.28 instead of 1.30.'], ['Organic for “tightly coupled with complex hardware”', 'hardware coupling is the embedded signal.'], ['Estimate each module separately and add', 'the formula is applied to the total size.'], ['Cost = effort × salary × 12', 'effort is already in person-months; salary is per month.']]),
  conn: R`<p><b>At work:</b> COCOMO II and function-point models are used for bids and contracts; most managers still estimate mainly from experience, using models as a cross-check.</p><p><b>Earlier:</b> Week 1’s software-vs-hardware cost curve explains why effort, not machines, dominates cost.</p><p><b>Next:</b> the effort is divided into tasks and scheduled.</p>`,
  mis: M.ul(['Organic chosen for hardware-coupled systems (2023 T2 Q16, 2024 T3 Q16).', 'EAF multipliers added (2025 T2 Q153 decoys).', 'Forgetting to add module sizes (2024 T1 Q41).', 'Exact 1700 vs option 1702 and 4,52,14,000 vs 4,52,50,000: the papers round — pick the nearest option.']),
  exam: R`<p><b>Fast method (do all four steps on paper):</b></p><ol><li>Type from the story → a, b.</li><li>Lines → KLOC (divide by 1000).</li><li>a × KLOC<sup>b</sup>: on a calculator, KLOC ^ b (use the x<sup>y</sup> key).</li><li>× EAF (multiply all drivers), then × salary if cost is asked. Pick the nearest option.</li></ol>`
});
Q({ cp: 'cocomo', type: 'num', diff: 'moderate', q: 'Organic project, 32 KLOC. Initial effort in person-months (one decimal place; ±0.5 accepted)?', ans: 91.1, tol: 0.5, calc: () => CALC.cocomo('organic', 32),
  sol: '32<sup>1.05</sup> = 37.95; × 2.4 = 91.1 PM.' });
Q({ cp: 'cocomo', type: 'mcq', diff: 'moderate', q: 'Semi-detached, 10 KLOC, EAF = 0.85. Final effort ≈', opts: ['33.6 PM', '39.5 PM', '46.5 PM', '22.9 PM'], ans: 0, calc: () => CALC.cocomo('semi', 10, 0.85),
  why: ['Correct: 10^1.12 = 13.18; × 3.0 = 39.5; × 0.85 = 33.6.', 'Initial effort — EAF not applied.', 'Divided by 0.85 instead of multiplying.', 'Organic constants used.'], sol: '3.0 × 10^1.12 = 39.5 PM; × 0.85 = 33.6 PM. An EAF below 1 lowers the effort.' });
Q({ cp: 'cocomo', type: 'mcq', diff: 'easy', q: 'Software for a pacemaker, tightly coupled with sensors and with strict real-time constraints, is which COCOMO type?', opts: ['Organic', 'Semi-detached', 'Embedded', 'Cannot be determined'], ans: 2,
  why: ['Organic = well understood, small experienced team.', 'Semi-detached = mixed team, partly familiar.', 'Correct: hardware coupling and tight constraints.', 'The signals are clear.'], sol: 'Hardware + real-time → embedded.' });
Q({ cp: 'cocomo', type: 'short', diff: 'moderate', q: 'State the four steps of a COCOMO cost estimate, naming every quantity and its unit.',
  model: '<p>(1) Classify the project — organic, semi-detached or embedded — to get a and b. (2) Initial effort E<sub>i</sub> = a × (size in KLOC)<sup>b</sup>, in person-months. (3) Final effort = E<sub>i</sub> × EAF, where EAF is the product of the cost-driver multipliers (dimensionless). (4) Cost = final effort (person-months) × salary per developer per month (rupees).</p>' });

/* ---------------- 4.2 Scheduling ---------------- */
C({ id: 'scheduling', week: 4, title: 'Scheduling: WBS, activity network, critical path, Gantt chart', pri: 'High', prereq: ['estimation'],
  src: 'Revision notes W4 §4.3 · Study guide ch.4 §4.3 · PYQs 2023 T2 Q14, 2024 T2 Q12, 2024 T3 Q18, 2025 T3 Q23, 2026 T2 Q27–28',
  oneLine: 'WBS = tree (project → activities → assignable tasks). Activity network = tasks + durations + dependencies. A task can start only when ALL its predecessors finish; tasks with no path between them can run in parallel. Critical path = the longest chain = minimum project duration.',
  misShort: 'Saying a task can start when ONE of its two predecessors is done, or calling the critical path the shortest path.',
  intu: R`<p>Building a house: you cannot paint before the walls exist, but electrics and plumbing can happen at the same time.</p>
<p>Software is the same. First you list the work as a tree: the project at the root, big activities below, and small tasks at the leaves — each small enough to hand to one developer. That tree is the <b>work breakdown structure</b>.</p>
<p>Then you draw arrows: “this task needs that one finished first”. That drawing is the <b>activity network</b>.</p>
<p>Two rules read everything off it. A task starts only when <i>every</i> arrow into it is finished. Two tasks with no chain of arrows between them can run side by side.</p>
<p>The longest chain of arrows sets the earliest finish date — the <b>critical path</b>. Delay anything on it, and the whole project slips.</p>
<p>The question: <b>given a network, which statements about order and parallelism are true?</b></p>`,
  why: R`<ul><li>Activity-network MSQs appear in five papers, each with a diagram; 2026 T2 adds “what must finish immediately before Deployment?”.</li><li>2025 T3 Q23 tested the WBS itself: dependencies are <i>not</i> shown in a WBS.</li></ul>`,
  formal: M.def(M.lines([
    'Scheduling steps: identify major activities → break into tasks → determine dependencies → estimate durations → represent as a network/chart → fix start and end dates → find the critical path → allocate resources.',
    '<b>WBS</b> — a tree: root = the project; internal nodes = activities (can be broken down further); leaves = tasks small enough to assign to a developer. Shows decomposition, <i>not</i> dependencies.',
    '<b>Activity network</b> — nodes = tasks with durations; arrows = dependencies. A task can start only after <i>all</i> its predecessors are complete.',
    '<b>Parallel tasks</b> — tasks with no directed path between them can be done simultaneously.',
    '<b>Critical path</b> — the longest path (by total duration) from start to finish; its length is the minimum project duration. Tasks on it have zero slack; others have slack.',
    '<b>Gantt chart</b> — horizontal bars against a timeline showing each task’s start, duration and overlap.']))
    + '<p><b>In words:</b> the WBS says <i>what</i>; the network says <i>in what order</i>; the critical path says <i>how long at least</i>; the Gantt chart shows <i>when</i>.</p>',
  vis: M.net([{ id: 'R', t: 'Requirements', d: 30 }, { id: 'U', t: 'UI design', d: 20 }, { id: 'D', t: 'DB design', d: 30 }, { id: 'I', t: 'Implementation', d: 45 }, { id: 'T', t: 'Testing', d: 10 }, { id: 'P', t: 'Deployment', d: 10 }],
    [['R', 'U'], ['R', 'D'], ['U', 'I'], ['D', 'I'], ['I', 'T'], ['T', 'P']]),
  ex: [
    M.ex('Introductory', R`<p>Using the network above (2026 T2): which are true? (a) UI design and DB design can proceed simultaneously (b) Testing can begin right after requirements (c) Implementation depends on both UI and DB design (d) Deployment can start before testing completes. Which task is immediately before Deployment?</p>`,
      R`<ol><li>(a) No arrow joins UI and DB → parallel ✔.</li><li>(b) Testing waits for Implementation ✘.</li><li>(c) Two arrows enter Implementation ✔.</li><li>(d) Deployment’s only predecessor is Testing ✘.</li><li>Immediately before Deployment: <b>Testing</b>.</li></ol>
<p>Critical path: Requirements 30 → DB 30 → Implementation 45 → Testing 10 → Deployment 10 = <b>125</b>. UI design (20) has 10 units of slack.</p><p><b>Now suppose</b> UI design grows to 35. The path through UI becomes 30 + 35 + 45 + 10 + 10 = 130 &gt; 125 — the critical path switches to the UI branch. The critical path is a property of the durations, not of the drawing.</p>`),
    M.ex('Standard', R`<p>Student portal network (2024 T2 Q12): Component diagram → UI, DB schema → Students’ record management → {Result management, Students’ authentication}; Result management → Students’ support system; Result management AND Students’ authentication → Search and download results. Is “Search and download can start when Result management is completed” true?</p>`,
      R`<p><b>False.</b> Two arrows enter Search and download — it also needs Students’ authentication. The true statements are “UI and DB schema can be done simultaneously” and “Students’ support system can start when Result management is completed” (only one arrow enters it).</p>`),
    M.ex('Exam-level', R`<p>A WBS has root “Amazon Seller Portal” and leaves like Component Diagram, Database Schema, User Interface. Which are correct: (a) it breaks activities into smaller tasks (b) each leaf can be assigned to a developer (c) dependencies are explicitly represented (d) it is a tree with the project as root?</p>`,
      R`<p>(a), (b), (d) — 2025 T3 Q23. Dependencies belong to the activity network, not the WBS.</p>`)],
  math: M.rule('<p><b>Start(task) ≥ finish of ALL predecessors. No path between A and B ⇒ parallel. Critical path = LONGEST path = minimum duration; slack = 0 on it.</b></p>')
    + M.why([['“Can start when X is completed” when the task has two incoming arrows', 'it needs every predecessor, not one.'], ['Critical path = shortest path', 'the project cannot finish before its longest chain does.'], ['WBS shows dependencies', 'it shows decomposition only.'], ['“No part of the three end tasks can run in parallel”', 'three tasks fed by the same predecessor and with no arrows between them are parallel.']]),
  conn: R`<p><b>At work:</b> MS Project, Jira Advanced Roadmaps and GitHub Projects compute critical paths and draw Gantt charts automatically.</p><p><b>Earlier:</b> the effort from COCOMO is what gets spread over these tasks.</p><p><b>Next:</b> schedule slippage is a project risk; Agile replaces the up-front schedule with sprints and velocity.</p>`,
  mis: M.ul(['Reversing a dependency (“Component diagram starts after UI and DB”) — 2023 T2 Q14.', 'Needing only one of two predecessors — 2024 T2 Q12.', 'Making two sequential tasks parallel (Font management and Text rendering) — 2024 T3 Q18.', 'Dependencies shown in the WBS — 2025 T3 Q23.']),
  exam: R`<p><b>Fast method:</b> for each statement, trace arrows. “X before Y?” → is there an arrow path X → Y? “Can run together?” → is there no path either way? “Starts when X completes?” → is X the <i>only</i> incoming arrow?</p>`
});
Q({ cp: 'scheduling', type: 'num', diff: 'moderate', q: 'Tasks: A 4, B 6, C 3, D 5 (days). A → C, B → C, C → D. Minimum project duration in days?', ans: 14, tol: 0,
  calc: () => CALC.critical([{ id: 'A', d: 4 }, { id: 'B', d: 6 }, { id: 'C', d: 3 }, { id: 'D', d: 5 }], [['A', 'C'], ['B', 'C'], ['C', 'D']]).len,
  sol: 'C waits for the later of A (4) and B (6) → starts at 6; C ends at 9; D ends at 14. Critical path B → C → D.' });
Q({ cp: 'scheduling', type: 'num', diff: 'hard', q: 'Same network as the previous question (A 4, B 6, C 3, D 5; A → C, B → C, C → D). How many days of slack does task A have?', ans: 2, tol: 0,
  calc: () => CALC.critical([{ id: 'A', d: 4 }, { id: 'B', d: 6 }, { id: 'C', d: 3 }, { id: 'D', d: 5 }], [['A', 'C'], ['B', 'C'], ['C', 'D']]).slack.A,
  sol: 'C cannot start before day 6 (B). A finishes on day 4, so it can slip 2 days without delaying C.' });
Q({ cp: 'scheduling', type: 'mcq', diff: 'easy', q: 'In a WBS, the leaf nodes are:', opts: ['Activities that must be broken down further', 'Tasks small enough to assign to a developer', 'Milestones with dates', 'Dependencies between tasks'], ans: 1,
  why: ['Those are internal nodes.', 'Correct.', 'Dates come from scheduling.', 'Dependencies are in the network.'], sol: 'Root = project; internal = activities; leaves = tasks.' });
Q({ cp: 'scheduling', type: 'short', diff: 'moderate', q: 'Define the critical path and explain why a delay to a task on it delays the project, but a delay to some other tasks may not.',
  model: '<p>The critical path is the longest chain of dependent tasks through the activity network; its total duration is the minimum time in which the project can finish. Tasks on it have zero slack, so any delay pushes back every following task and the finish date. Tasks off the critical path finish before the tasks that wait for them are ready to start, so they have slack and can slip by up to that amount without affecting the end date.</p>' });

/* ---------------- 4.3 Risk types ---------------- */
C({ id: 'risk', week: 4, title: 'Risk types and their mitigations', pri: 'High', prereq: ['estimation'],
  src: 'Revision notes W4 §4.4 · Study guide ch.4 §4.4 · PYQs 2023 T1 Q244, 2023 T2 Q19–20, 2023 T3 Q185, 2024 T1 Q44–45, 2024 T2 Q7, 2024 T3 Q22–23, 2025 T1 Q42–43, 2025 T2 Q150–151, 2026 T1 Q14, 2026 T2 Q23–24',
  oneLine: 'Technical (wrong functions / insufficient knowledge → talk to clients, prototype; shortfalls in external components → benchmark and inspect). Project (schedule, budget, personnel → milestones, iteration, hiring, cross-training). Business (not competitive, gold plating → explore the market).',
  misShort: 'Calling a faulty third-party API a project risk, or “not competitive in the market” a technical risk.',
  intu: R`<p>Three different things can sink a software project.</p>
<p>The <b>software</b> itself can be wrong: you misunderstood what the client wanted, or a component you bought does not work. Those are <b>technical</b> risks.</p>
<p>The <b>project</b> can fail around a correct product: it runs out of money, misses the deadline, or key people quit. Those are <b>project</b> risks.</p>
<p>Or everything goes to plan, and nobody buys it, because ten similar apps already exist — or the team spent its time on features nobody asked for. Those are <b>business</b> risks.</p>
<p>Each kind has its own cure. The papers ask two things together: <b>which kind is this, and which mitigation fits?</b></p>`,
  why: R`<ul><li>A two-question block (type + mitigation) in eight papers — up to 9 marks.</li><li>Business risk “not competitive” keyed four times; technical “third-party component shortfall” four times; technical “incorrect functions” once; gold plating once; personnel (cross-training) once.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Risk</b> — an anticipated unfavourable event that may occur during the project.',
    '<b>Technical risks</b> — insufficient knowledge of the product; developing wrong functions or the wrong user interface; shortfalls in externally furnished components. Mitigations: communicate with clients / build prototypes for feedback; <b>benchmark and regularly inspect</b> external components.',
    '<b>Project risks</b> — budget, schedule, personnel, resources and customer-relationship problems (schedule slippage, personnel shortfall, lack of domain knowledge). Mitigations: detailed milestones, constant iteration, frequent client communication; hire experienced developers or outsource; cross-train team members.',
    '<b>Business risks</b> — the product is not competitive in the market; <b>gold plating</b> (building unnecessary features). Mitigations: explore the market and competing products; cost-benefit analysis.',
    '<b>Mitigation</b> — actions that reduce the probability or the impact of a risk (not eliminating it, ignoring it, or transferring it).']))
    + '<p><b>In words:</b> the product is wrong → technical; the project struggles → project; the market says no → business.</p>',
  vis: M.table(['Scenario signal', 'Type', 'Mitigation'], [['team did not capture the real requirements; wrong functions built', 'Technical', 'communicate with clients, build prototypes'], ['third-party API / payment gateway / vendor component is faulty', 'Technical', 'benchmark and regularly inspect the external component'], ['deadline slips, budget overrun', 'Project', 'detailed milestones, iteration, client communication'], ['experts leave; no skilled people', 'Project', 'hire experienced developers / outsource; cross-train'], ['many similar products; not competitive', 'Business', 'explore the market for similar products'], ['developers add unrequested features (gold plating)', 'Business', 'stick to requirements; cost-benefit analysis']], 'Match signal → type → mitigation. The papers draw their options from this table.'),
  ex: [
    M.ex('Introductory', R`<p>A startup builds a daily-planner app; many similar products already exist, so it may not be competitive. Type of risk, and mitigation?</p>`,
      R`<ol><li>The product may work perfectly, the project may finish on time — the threat is the market → <b>business risk</b> (2023 T2 Q19).</li><li>Mitigation from the business row: <b>explore the market for similar products</b> (2023 T2 Q20).</li></ol>
<p><b>Now suppose</b> the same app relies on a third-party calendar-sync API that keeps returning errors. The threat is now inside the product → <b>technical risk</b>, mitigated by <b>benchmarking and regular inspection of the external component</b> (2025 T1 Q42–43, 2025 T2 Q150–151, 2026 T2 Q23–24).</p>`),
    M.ex('Standard', R`<p>A school website: the requirements team did not capture the school’s real requirements, so incorrect functions were built. Type of risk?</p>`,
      R`<p><b>Technical risk</b> (2023 T1 Q244): “developing the wrong software functions” is in the technical list. Its mitigation: communicate with clients or build prototypes to collect feedback.</p><p>Why not project risk? The schedule, budget and people are fine — the product itself is wrong.</p>`),
    M.ex('Exam-level', R`<p>Several developers with critical expertise leave midway, causing delays. Best mitigation: reduce scope, cross-train team members, use third-party components, increase automation? And what does “gold plating” mean?</p>`,
      R`<p>Personnel shortfall is a project risk; spreading knowledge so nobody is irreplaceable → <b>cross-training</b> (2026 T1 Q14).</p><p>Gold plating = the team develops <b>unnecessary features</b> nobody asked for — classified as a business risk (2024 T2 Q7).</p>`)],
  math: M.rule('<p><b>Technical</b> = the product (wrong functions, insufficient knowledge, external components) → clients/prototypes; benchmark & inspect. <b>Project</b> = schedule, budget, people → milestones, iteration, hiring, cross-training. <b>Business</b> = market, gold plating → explore the market.</p>')
    + M.why([['Project risk for a faulty vendor component', 'the failure is in what the product is built from → technical.'], ['Technical risk for “not competitive”', 'nothing is wrong with the software; the market is the problem.'], ['“Ask developers to avoid third-party modules altogether”', 'that avoids rather than mitigates, and is rarely feasible.'], ['Mitigation = eliminating the risk', 'mitigation reduces probability or impact.']]),
  conn: R`<p><b>At work:</b> risk registers in project tools record each risk with owner, probability, impact and mitigation; vendor SLAs and contract tests are “benchmark and inspect”.</p><p><b>Earlier:</b> technical risk “wrong functions” is why Week 2’s requirement gathering and Week 3’s prototypes matter.</p><p><b>Next:</b> prioritise risks numerically with P × I.</p>`,
  mis: M.ul(['Project risk for incorrect functions (2023 T1 Q244).', 'Prototype mitigation for a business risk (2024 T1 Q45 option 1).', '“Increase the project budget” for a vendor bug (2025 T2 Q151).', '“Transferring the risk to an insurer” as the meaning of mitigation (2023 T3 Q185).']),
  exam: R`<p><b>Fast method:</b> ask “what fails?” — the software (technical), the plan/people/money (project), or the market (business). Then take the mitigation from the same row; the decoys are the other rows’ mitigations.</p>`
});
Q({ cp: 'risk', type: 'mcq', diff: 'easy', q: 'Halfway through, the client cuts the budget by 40%. Risk type?', opts: ['Technical', 'Project', 'Business', 'Not a risk'], ans: 1,
  why: ['The software is not at fault.', 'Correct: budget.', 'The market is not involved.', 'It is.'], sol: 'Budget/schedule/personnel → project.' });
Q({ cp: 'risk', type: 'mcq', diff: 'moderate', q: 'An app depends on an open-source PDF library with a history of crashes on large files. Best mitigation?', opts: ['Explore the market for similar products', 'Benchmark and regularly inspect the external component', 'Detailed milestones and constant iteration', 'Hire more developers'], ans: 1,
  why: ['Business mitigation.', 'Correct: external-component shortfall.', 'Project mitigation.', 'Project mitigation.'], sol: 'External component → technical → benchmark & inspect.' });
Q({ cp: 'risk', type: 'msq', diff: 'hard', q: 'Select ALL that are business risks.', opts: ['The team builds a 3D product viewer nobody requested', 'Three competitors launch the same features first', 'The lead architect resigns', 'The payment SDK has a security bug'], ans: [0, 1],
  why: ['Gold plating → business.', 'Not competitive → business.', 'Personnel → project.', 'External component → technical.'], sol: 'Market and gold plating → business.' });
Q({ cp: 'risk', type: 'short', diff: 'moderate', q: 'Give one example and one mitigation for each of the three risk types.',
  model: '<p><b>Technical:</b> a third-party mapping API has shortcomings → benchmark and regularly inspect it (or: wrong functions built → talk to clients, build prototypes). <b>Project:</b> key developers leave mid-way → cross-train, hire experienced developers (or: schedule slippage → detailed milestones, constant iteration, client communication). <b>Business:</b> the product is not competitive because similar products exist → explore the market and competing products (or gold plating → stick to requirements, cost-benefit analysis).</p>' });

/* ---------------- 4.3 Risk calculation ---------------- */
C({ id: 'risk-calc', week: 4, title: 'Risk assessment: risk = probability × impact', pri: 'High', prereq: ['risk'],
  src: 'Revision notes W4 §4.4 risk table · Study guide ch.4 §4.4 · PYQs 2023 T1 Q246, 2024 T1 Q26, 2024 T3 Q8, 2025 T1 Q28, 2025 T3 Q24',
  oneLine: 'Risk exposure R = P × I (P as a fraction, I on a 1–4 scale). Given any two, find the third: I = R ÷ P. Prioritise the highest R.',
  misShort: 'Multiplying 30% × 3 as 30 × 3 = 90, or computing I = P ÷ R.',
  intu: R`<p>Two risks: a server outage that is unlikely but devastating, and a minor bug that is very likely but harmless. Which do you handle first?</p>
<p>Neither probability alone nor damage alone decides it. Multiply them: how likely × how bad.</p>
<p>That product is the <b>risk</b> (risk exposure). Sort the list by it and work from the top.</p>
<p>The papers ask it three ways: compute R; or, given R and P, find I; or pick the risk to prioritise. All three are one formula.</p>`,
  why: R`<ul><li>Five papers. Three of them give R = 1.8 and a probability, and ask for the impact (answers 3, 3, 2).</li><li>2025 T3 Q24 asks which of three risks to prioritise.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Probability (P)</b> — the likelihood the risk occurs, as a fraction (30% = 0.3).',
    '<b>Impact (I)</b> — the damage if it occurs, on a scale 1–4 (negligible, marginal, critical, catastrophic).',
    '<b>Risk (exposure)</b> R = P × I.',
    '<b>Rearranged:</b> I = R ÷ P; P = R ÷ I.',
    '<b>Risk table</b> — list each risk with P, I and P × I; sort in descending order; the top risks get mitigation first.']))
    + '<p><b>In words:</b> likely × bad = how much it deserves your attention.</p>',
  vis: M.bars([{ t: 'R1 leaving (0.3 × 4)', v: 1.2 }, { t: 'R2 3rd-party (0.5 × 3)', v: 1.5 }, { t: 'R3 ambiguous req. (0.7 × 3)', v: 2.1, hl: true }], { cap: 'Sort by P × I. R3 is prioritised even though R1 has the largest impact.' }),
  ex: [
    M.ex('Introductory', R`<p>Probability of schedule slippage is 30%; impact is 3. Risk?</p>`,
      R`<ol><li>P = 30% = 0.3.</li><li>R = 0.3 × 3 = <b>0.9</b>.</li><li>The paper prints the option as “0.9%” (2023 T1 Q246) — it means the value 0.9.</li></ol><p><b>Now suppose</b> the probability were written as 30 and multiplied directly: 30 × 3 = 90 — far from every option except the misleading “9%” if you also divide by 10. Convert percent to a fraction first.</p>`),
    M.ex('Standard', R`<p>Risk for budget slippage is 1.8; probability 0.6. Impact? And if the probability were 0.9?</p>`,
      R`<p>I = R ÷ P = 1.8 ÷ 0.6 = <b>3</b> (2024 T1 Q26; same numbers in 2024 T3 Q8). With P = 0.9: I = 1.8 ÷ 0.9 = <b>2</b> (2025 T1 Q28).</p><p>Decoys: 1.8 × 0.6 = 1.08 (multiplied instead of divided); 0.6 ÷ 1.8 = 0.33 (inverted).</p>`),
    M.ex('Exam-level', R`<p>R1 team member leaving P 0.3, I 4; R2 third-party module failure P 0.5, I 3; R3 ambiguous requirements P 0.7, I 3. Which should be prioritised?</p>`,
      R`<p>R1 = 1.2, R2 = 1.5, R3 = 2.1 → <b>R3</b> (2025 T3 Q24). The trap: R1 has the biggest impact (4), but its low probability drags it to the bottom.</p>`)],
  math: M.rule('<p><b>R = P × I</b> &nbsp;⇔&nbsp; <b>I = R ÷ P</b> &nbsp;⇔&nbsp; <b>P = R ÷ I</b>. Convert % to a fraction first. Prioritise the largest R.</p>')
    + M.why([['I = R × P', 'gives 1.08 — the decoy.'], ['I = P ÷ R', 'gives 0.33 — inverted.'], ['Prioritise the largest impact', 'probability matters equally; use the product.'], ['Use P = 30', 'probability is a fraction.']]),
  conn: R`<p><b>At work:</b> risk heat maps (probability × impact grids) in project dashboards.</p><p><b>Earlier:</b> each risk’s type decides its mitigation; this decides which mitigation to fund first.</p><p><b>Next:</b> in Scrum, risks are revisited every sprint at review and retrospective.</p>`,
  mis: M.ul(['1.08 (multiplied) in 2024 T1 Q26 and 2024 T3 Q8.', '0.33 (inverted) in 2024 T3 Q8; 0.17 and 16.6 in 2025 T1 Q28.', 'R1 for its high impact (2025 T3 Q24).']),
  exam: R`<p><b>Fast method:</b> write R = P × I, put in the two numbers you have, solve for the third. For ranking, compute every product — never compare P or I alone.</p>`
});
Q({ cp: 'risk-calc', type: 'num', diff: 'easy', q: 'P = 40%, I = 2. Risk exposure?', ans: 0.8, tol: 0.001, calc: () => CALC.risk(0.4, 2), sol: '0.4 × 2 = 0.8.' });
Q({ cp: 'risk-calc', type: 'num', diff: 'moderate', q: 'Risk = 1.2, impact = 4. Probability (as a fraction)?', ans: 0.3, tol: 0.001, calc: () => 1.2 / 4, sol: 'P = R ÷ I = 1.2 ÷ 4 = 0.3.' });
Q({ cp: 'risk-calc', type: 'mcq', diff: 'moderate', q: 'Which risk is prioritised? A: P 0.2, I 4. B: P 0.6, I 2. C: P 0.9, I 1.', opts: ['A', 'B', 'C', 'All equal'], ans: 1, calc: () => CALC.topRisk([['A', 0.2, 4], ['B', 0.6, 2], ['C', 0.9, 1]]),
  why: ['A = 0.8.', 'Correct: B = 1.2.', 'C = 0.9.', 'They differ.'], sol: '0.8, 1.2, 0.9 → B.' });
Q({ cp: 'risk-calc', type: 'short', diff: 'easy', q: 'Explain how a risk table is built and used.',
  model: '<p>List every identified risk; estimate its probability P (as a fraction) and impact I (1 = negligible … 4 = catastrophic); compute R = P × I; sort the table by R in descending order. The risks at the top are mitigated first, and the table is reviewed as the project progresses.</p>' });

/* ---------------- 4.4 Scrum ---------------- */
C({ id: 'scrum', week: 4, title: 'Scrum: roles, backlog and ceremonies', pri: 'High', prereq: ['agile', 'user-stories'],
  src: 'Revision notes W4 §4.5 · Study guide ch.4 §4.5 · PYQs 2023 T1 Q240, 2023 T3 Q186–187, 2024 T1 Q38, 2025 T1 Q27, 2025 T3 Q22, 2026 T1 Q12, 2026 T2 Q4',
  oneLine: 'Product owner prioritises the product backlog for maximum value; Scrum Master removes impediments; the team builds. Sprint planning (what + how), daily scrum (yesterday / today / blockers), sprint review (demo to stakeholders), retrospective (improve the process).',
  misShort: 'Confusing sprint review (the product, shown to customers) with retrospective (the process, for the team).',
  intu: R`<p>A Scrum team works in short sprints of one or two weeks.</p>
<p>Before each sprint, they look at a ranked wish-list — the <b>product backlog</b> — kept in order of value by the <b>product owner</b>. Together they pick what fits and plan how to build it: <b>sprint planning</b>.</p>
<p>Every morning, fifteen minutes standing up: what I did yesterday, what I will do today, what is blocking me. That is the <b>daily scrum</b>.</p>
<p>At the end, they show the working feature to the customer and collect feedback: the <b>sprint review</b>.</p>
<p>Then, without the customer, they ask: how did we work? What should we change? That is the <b>retrospective</b>.</p>
<p>The question: <b>a scenario describes a meeting or a person — which one is it?</b></p>`,
  why: R`<ul><li>Eight papers. Product owner keyed twice; daily scrum twice; retrospective, review, planning and backlog once each.</li><li>2025 T3 Q22 (MSQ) tests sprint planning in detail: the team decides <i>what</i> and <i>how</i>; it is time-boxed; the PO does not decide alone.</li></ul>`,
  formal: M.def(M.lines([
    'Sprints of 1–2 weeks; teams of about 4–9; user stories implemented and re-prioritised each sprint.',
    '<b>Product owner</b> — represents the client; prioritises and maintains the product backlog so the team delivers maximum value, balancing business needs and technical constraints.',
    '<b>Scrum Master</b> — facilitates the process and removes impediments.',
    '<b>Product backlog</b> — a prioritised list of work derived from user stories and requirements; continuously refined.',
    '<b>Sprint planning</b> — the team (with PO and SM) decides what can be completed in the sprint and how it will be done; time-boxed.',
    '<b>Daily scrum / stand-up</b> — each member says what they did yesterday, what they will do today and what is blocking them; its purpose is to identify and address impediments.',
    '<b>Sprint review</b> — the team demonstrates what was completed to stakeholders and gets feedback.',
    '<b>Sprint retrospective</b> — the team evaluates the last sprint: team dynamics, processes, tools; makes an improvement plan.']))
    + '<p><b>In words:</b> plan → stand-up daily → show the product → improve the process.</p>',
  vis: M.flow([{ t: 'Product backlog', sub: 'PO prioritises' }, { t: 'Sprint planning', sub: 'what + how' }, { t: 'Sprint', sub: 'daily scrum' }, { t: 'Sprint review', sub: 'demo the product' }, { t: 'Retrospective', sub: 'improve the process', hl: true }], { loop: 'next sprint', cap: 'One Scrum cycle.' }),
  ex: [
    M.ex('Introductory', R`<p>A ride-sharing team has completed a sprint and demonstrates the driver-tracking feature to customers to get feedback. Which activity?</p>`,
      R`<ol><li>What is examined? The <i>product</i>.</li><li>Who is present? Customers.</li><li>So: <b>sprint review</b> (2026 T2 Q4).</li></ol><p><b>Now suppose</b> the same team meets the next morning, without customers, to discuss why code reviews kept delaying merges and agree to pair-review instead. The subject is the <i>process</i> → <b>retrospective</b> (2025 T1 Q27).</p>`),
    M.ex('Standard', R`<p>A person ensures the team delivers maximum value to the client and prioritises work considering business needs and technical constraints. Which role?</p>`,
      R`<p><b>Product owner</b> (2026 T1 Q12; 2023 T3 Q186). The Scrum Master facilitates and removes impediments — they do not prioritise the backlog. “Project manager” and “development lead” are not Scrum roles.</p>`),
    M.ex('Exam-level', R`<p>In sprint planning, which are true: (a) the team decides what work can be completed (b) only the product owner decides which stories are included (c) the team discusses how the selected work will be implemented (d) sprint planning is time-boxed?</p>`,
      R`<p>(a), (c), (d) — 2025 T3 Q22. The PO proposes priorities, but selection is a collaborative decision with the team.</p>`)],
  math: M.rule('<p><b>PO</b> = value & backlog priority. <b>SM</b> = process & impediments. <b>Planning</b> = what + how. <b>Daily scrum</b> = yesterday/today/blockers. <b>Review</b> = demo the product. <b>Retrospective</b> = improve the process.</p>')
    + M.why([['Scrum Master prioritises the backlog', 'that is the product owner.'], ['Daily scrum = status report to management', 'its purpose is to surface and remove impediments.'], ['Retrospective = demo', 'the demo is the review.'], ['Backlog = list of completed tasks', 'it is the prioritised list of work still to do.']]),
  conn: R`<p><b>At work:</b> Jira boards hold the backlog; teams run exactly these four ceremonies.</p><p><b>Earlier:</b> Week 1’s Agile principles (welcome change, frequent delivery) are what Scrum implements; Week 2’s user stories fill the backlog.</p><p><b>Next:</b> story points and velocity measure how much a sprint can hold.</p>`,
  mis: M.ul(['Sprint retrospective vs review (2025 T1 Q27, 2026 T2 Q4).', 'Scrum Master vs product owner (2023 T3 Q186, 2026 T1 Q12).', '“Only the product owner decides” in sprint planning (2025 T3 Q22).', 'Daily scrum “to provide status updates to upper management” (2023 T3 Q187).']),
  exam: R`<p><b>Fast method:</b> for a meeting, ask what is examined (plan / today’s work / product / process) and who attends. For a role, ask: value and priority → PO; process and blockers → SM.</p>`
});
Q({ cp: 'scrum', type: 'mcq', diff: 'easy', q: 'A developer says at the morning stand-up, “I’m blocked waiting for API keys.” Who should act on this first?', opts: ['Product owner', 'Scrum Master', 'The client', 'Nobody until the retrospective'], ans: 1,
  why: ['PO handles priorities, not impediments.', 'Correct: removing impediments.', 'Not directly.', 'Impediments are handled immediately.'], sol: 'Impediments → Scrum Master.' });
Q({ cp: 'scrum', type: 'mcq', diff: 'moderate', q: 'Which statement about the product backlog is correct?', opts: ['It is frozen after the first sprint', 'It is a prioritised list continuously refined by the product owner', 'It lists only completed work', 'It is owned by the Scrum Master'], ans: 1,
  why: ['Never frozen.', 'Correct.', 'It lists work to be done.', 'Owned by the PO.'], sol: 'Prioritised, living list; PO owns it.' });
Q({ cp: 'scrum', type: 'mcq', diff: 'moderate', q: 'At the end of a sprint, the team agrees to write tests before merging because bugs kept escaping. In which meeting was this decided?', opts: ['Sprint planning', 'Daily scrum', 'Sprint review', 'Sprint retrospective'], ans: 3,
  why: ['Planning picks the next work.', 'Daily scrum covers blockers.', 'Review shows the product.', 'Correct: a process improvement.'], sol: 'Process change → retrospective.' });
Q({ cp: 'scrum', type: 'short', diff: 'moderate', q: 'Distinguish the sprint review from the sprint retrospective (purpose, subject, participants).',
  model: '<p><b>Sprint review:</b> the team demonstrates the completed product increment to stakeholders/customers and collects feedback; the subject is the <i>product</i>. <b>Sprint retrospective:</b> the team (with the Scrum Master) reflects on how the sprint went — team dynamics, processes, tools — and agrees improvements; the subject is the <i>process</i>.</p>' });

/* ---------------- 4.4 Velocity ---------------- */
C({ id: 'velocity', week: 4, title: 'Story points and velocity', pri: 'Medium', prereq: ['scrum'],
  src: 'Revision notes W4 §4.5 · Study guide ch.4 §4.5 · PYQs 2025 T2 Q138, 2026 T1 Q13, 2026 T2 Q5',
  oneLine: 'Story points measure relative size/complexity of a story; velocity = story points completed per sprint (average over sprints) and predicts future progress.',
  misShort: 'Measuring velocity as the number of stories instead of the number of points.',
  intu: R`<p>“How many stories can we finish next sprint?” is a bad question. A story can be tiny or huge.</p>
<p>So each story gets <b>points</b> for its relative size: 1 for easy, more for complex.</p>
<p>Count the points you actually finished in a sprint. That number is your <b>velocity</b>.</p>
<p>Average it over a few sprints, and you can predict how much the next sprint can hold — and how many sprints the backlog needs.</p>`,
  why: R`<ul><li>Three recent papers (2025 T2, 2026 T1, 2026 T2) — a growing family.</li><li>Each has a decoy built on story count (2025 T2: “2” for 2 stories) or on a different metric name (throughput, capacity, burn rate).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Story points</b> — a relative measure of the complexity/size of a user story.',
    '<b>Velocity</b> — the number of story points the team completes in one sprint; averaged across sprints, it predicts future progress.',
    'Remaining sprints ≈ remaining backlog points ÷ velocity (round up).',
    'Agile scheduling is continuous, sprint by sprint, using points and velocity; plan-and-document scheduling fixes a WBS and Gantt chart up front.']))
    + '<p><b>In words:</b> velocity = points done per sprint.</p>',
  vis: M.bars([{ t: 'Sprint 1', v: 18 }, { t: 'Sprint 2', v: 22 }, { t: 'Sprint 3', v: 20 }, { t: 'Sprint 4', v: 24 }, { t: 'Average', v: 21, hl: true }], { unit: ' pts', cap: 'Average velocity = (18 + 22 + 20 + 24) ÷ 4 = 21 points per sprint.' }),
  ex: [
    M.ex('Introductory', R`<p>In the first sprint a team completed 2 stories totalling 5 points. Velocity?</p>`,
      R`<p><b>5</b> (2025 T2 Q138). Velocity counts points, not stories (the decoy “2”) and is not points per story (“2.5”).</p><p><b>Now suppose</b> sprint 2 finishes 7 points. Average velocity = (5 + 7) ÷ 2 = 6. One sprint is a measurement; the average is the forecast.</p>`),
    M.ex('Standard', R`<p>Story points in the last four sprints: 18, 22, 20, 24. Average velocity?</p>`, R`<p>(18 + 22 + 20 + 24) ÷ 4 = 84 ÷ 4 = <b>21</b> (2026 T2 Q5).</p>`),
    M.ex('Exam-level', R`<p>Backlog: 130 points remaining. Velocity 21. How many more sprints?</p>`, R`<p>130 ÷ 21 = 6.19 → <b>7 sprints</b> (a partial sprint is still a sprint). Round up.</p>`)],
  math: M.rule('<p><b>Velocity = Σ points completed in a sprint;</b> average over sprints. <b>Sprints left = ⌈ remaining points ÷ velocity ⌉.</b></p>')
    + M.why([['Velocity = number of stories', 'stories differ in size; points normalise that.'], ['Throughput / capacity / burn rate', 'not the course’s term for points per sprint (2026 T1 Q13).'], ['Round 6.19 down to 6', 'the remaining work needs a seventh sprint.']]),
  conn: R`<p><b>At work:</b> Jira’s velocity chart and burndown charts.</p><p><b>Earlier:</b> SMART’s “Achievable” keeps each story small enough to point and fit in a sprint.</p><p><b>Next:</b> Week 5 moves from managing the project to designing the software.</p>`,
  mis: M.ul(['“2” (stories) for 2025 T2 Q138.', '“Throughput” for 2026 T1 Q13.', 'Picking the last sprint (24) or the median instead of the mean (2026 T2 Q5).']),
  exam: R`<p><b>Fast method:</b> add the points, divide by the number of sprints. Ignore story counts.</p>`
});
Q({ cp: 'velocity', type: 'num', diff: 'easy', q: 'Sprints completed 12, 15 and 18 points. Average velocity?', ans: 15, tol: 0, calc: () => CALC.avg([12, 15, 18]), sol: '45 ÷ 3 = 15.' });
Q({ cp: 'velocity', type: 'num', diff: 'moderate', q: 'Remaining backlog: 95 points. Average velocity: 20. How many sprints are needed?', ans: 5, tol: 0, calc: () => Math.ceil(95 / 20), sol: '95 ÷ 20 = 4.75 → 5 sprints.' });
Q({ cp: 'velocity', type: 'mcq', diff: 'moderate', q: 'Team A finishes 10 stories (2 points each); Team B finishes 4 stories (8 points each). Which has the higher velocity?', opts: ['Team A — more stories', 'Team B — 32 points vs 20', 'Equal', 'Cannot compare velocities'], ans: 1,
  why: ['Story count is not velocity.', 'Correct.', '20 ≠ 32.', 'Points make them comparable within a shared scale.'], sol: 'A = 20 pts, B = 32 pts.' });
Q({ cp: 'velocity', type: 'short', diff: 'easy', q: 'What is velocity, and why is it measured in story points rather than number of stories?',
  model: '<p>Velocity is the number of story points a team completes in a sprint (usually averaged over several sprints) and is used to forecast future sprints. Points are used because stories vary in size and complexity; counting stories would make a sprint of many trivial stories look faster than a sprint of a few hard ones.</p>' });

/* ---------------- Week 4 harder variations ---------------- */
VQ({ kind: 'nearmiss', type: 'mcq', q: 'In the Delphi technique, which step distinguishes it from a simple expert panel meeting?', opts: ['Experts receive the SRS', 'Experts estimate anonymously over several rounds, revising after seeing a summary', 'A single senior expert gives the final number', 'The team breaks the work into a WBS'], ans: 1,
  why: ['An expert panel would also get the SRS.', 'Correct.', 'That is expert judgement.', 'That is scheduling.'], sol: 'Anonymity + rounds + consensus.', trap: 'Option 1 is a real Delphi step, but not the distinguishing one.' }, ['cs3001-2023T3-184', 'cs3001-2026T1-26']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement about heuristic estimation is <b>NOT</b> true?', opts: ['It uses a mathematical model', 'It relates effort to project size', 'COCOMO is an example', 'It needs no historical data at all'], ans: 3,
  why: ['True.', 'True.', 'True.', 'Not true: the model’s constants are fitted from past projects.'], sol: 'Heuristic models are fitted from past data.', trap: 'Option 4 sounds like an advantage.' }, ['cs3001-2026T1-26']);
VQ({ kind: 'numbers', type: 'mcq', q: 'A mobile app; requirements well understood; small, highly experienced team. Size 80,000 lines; EAF = 1.30. Final effort ≈', opts: ['311 PM', '239 PM', '899 PM', '528 PM'], ans: 0, calc: () => CALC.cocomo('organic', 80, 1.30),
  why: ['Correct: 2.4 × 80^1.05 = 239.0; × 1.30 = 310.7.', 'That is the initial effort — EAF not applied.', 'Embedded constants used.', 'Semi-detached constants used.'],
  sol: '80^1.05 = 99.6; × 2.4 = 239.0 PM; × 1.30 = 310.7 PM.', trap: 'Stopping at the initial effort.' }, ['cs3001-2023T1-245', 'cs3001-2024T2-21', 'cs3001-2024T2-22', 'cs3001-2026T2-26']);
VQ({ kind: 'numbers', type: 'mcq', q: 'Railway-signalling software tightly coupled with track sensors; 40,000 lines; salary ₹60,000 per developer-month. Approximate cost?', opts: ['Rs. 1,81,00,000/-', 'Rs. 69,00,000/-', 'Rs. 1,12,00,000/-', 'Rs. 18,06,000/-'], ans: 0, calc: () => CALC.cocomo('embedded', 40) * 60000,
  why: ['Correct: 3.6 × 40^1.2 = 301.1 PM; × 60,000 ≈ ₹1.81 crore.', 'Organic constants.', 'Semi-detached constants.', 'Salary taken as ₹6,000 — a zero dropped.'],
  sol: '40^1.2 = 83.65; × 3.6 = 301.1 PM; × 60,000 = ₹1,80,66,000.', trap: 'Hardware coupling must switch you to embedded; organic gives the smallest, most tempting number.' }, ['cs3001-2023T2-16', 'cs3001-2024T3-16', 'cs3001-2025T1-40']);
VQ({ kind: 'chained', type: 'num', block: { id: 'V4a', text: '<p>An internal HR portal: a mix of experienced and new developers; the company has built similar systems before. Modules: 3,500 + 2,500 + 4,000 lines. Cost drivers: reliability 1.10, product complexity 1.15, analyst capability 0.86. Salary ₹80,000 per developer-month.</p>' },
  q: 'Final cost in lakhs of rupees (one decimal; ±1 lakh accepted)?', ans: 34.4, tol: 1, calc: () => CALC.cocomo('semi', 10, 1.10 * 1.15 * 0.86) * 80000 / 1e5,
  sol: '<ol><li>Semi-detached; size = 10 KLOC.</li><li>3.0 × 10^1.12 = 39.5 PM.</li><li>EAF = 1.10 × 1.15 × 0.86 = 1.088 → 42.97 PM.</li><li>× ₹80,000 = ₹34.4 lakh.</li></ol>', trap: 'Five chained steps; adding the drivers gives 3.11 and triples the answer.' }, ['cs3001-2025T2-152', 'cs3001-2025T2-153', 'cs3001-2024T1-41']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Initial effort 400 PM. Cost drivers 1.20, 0.90, 1.10. Final effort?', opts: ['475 PM', '1280 PM', '480 PM', '440 PM'], ans: 0, calc: () => 400 * 1.20 * 0.90 * 1.10,
  why: ['Correct: EAF = 1.188 → 475.2.', 'Drivers added (3.2).', '400 × 1.20 only.', '400 × 1.10 only.'], sol: 'Multiply all drivers: 1.20 × 0.90 × 1.10 = 1.188.', trap: 'A driver below 1 reduces effort; it must be included.' }, ['cs3001-2026T1-11', 'cs3001-2025T1-41', 'cs3001-2025T2-153']);
VQ({ kind: 'negated', type: 'mcq', q: 'A furniture-shopping platform: well-understood requirements, highly experienced team, 50 KLOC. Which statement is <b>INCORRECT</b>?', opts: ['It is an organic project', 'Its initial effort is about 146 PM', 'Using embedded constants would give about 394 PM', 'Its initial effort is about 220 PM because b = 1.12 for this type'], ans: 3,
  why: ['Correct statement.', 'Correct: 2.4 × 50^1.05 = 146.', 'Correct: 3.6 × 50^1.2 ≈ 394.', 'Incorrect: b = 1.12 is semi-detached; the semi-detached value would be ≈ 239, and this project is organic anyway.'],
  sol: 'Organic: a 2.4, b 1.05 → 146 PM.', trap: '220 is one of the original decoys.' }, ['cs3001-2026T2-25', 'cs3001-2026T2-26']);
VQ({ kind: 'nearmiss', type: 'msq', q: 'Network: Design (10) → Frontend (15), Backend (20); Frontend → Integration (5); Backend → Integration; Backend → Load-test (8); Integration → Release (3). Select ALL true statements.', opts: ['Frontend and Backend can run in parallel', 'Integration can start when Frontend completes', 'Load-test and Integration can run in parallel', 'The minimum project duration is 38'], ans: [0, 2, 3],
  why: ['True: no path between them.', 'False: Integration also needs Backend.', 'True: no path between them (both follow Backend).', 'True: Design 10 → Backend 20 → Integration 5 → Release 3 = 38.'],
  sol: 'Trace each pair; the critical path is Design → Backend → Integration → Release = 38.', trap: 'Option 2 ignores the second incoming arrow.' }, ['cs3001-2023T2-14', 'cs3001-2024T2-12', 'cs3001-2024T3-18', 'cs3001-2026T2-27']);
VQ({ kind: 'counting', type: 'num', q: 'Using the examination-portal network (Requirements 30 → UI 20, DB 30 → Implementation 45 → Testing 10 → Deployment 10): what is the minimum project duration?', ans: 125, tol: 0,
  calc: () => CALC.critical([{ id: 'R', d: 30 }, { id: 'U', d: 20 }, { id: 'D', d: 30 }, { id: 'I', d: 45 }, { id: 'T', d: 10 }, { id: 'P', d: 10 }], [['R', 'U'], ['R', 'D'], ['U', 'I'], ['D', 'I'], ['I', 'T'], ['T', 'P']]).len,
  sol: 'Longest path: 30 + 30 + 45 + 10 + 10 = 125 (through DB design).', trap: 'Adding every task (145) or using the UI branch (115).' }, ['cs3001-2026T2-27', 'cs3001-2026T2-28']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement about a WBS is <b>NOT</b> correct?', opts: ['Its root is the whole project', 'Internal nodes are activities that can be broken down further', 'Its arrows show which task must finish before another starts', 'Leaves are tasks assignable to one developer'], ans: 2,
  why: ['Correct.', 'Correct.', 'Not correct: dependencies belong to the activity network.', 'Correct.'], sol: 'WBS = decomposition only.', trap: 'A tree has edges, which look like dependencies.' }, ['cs3001-2025T3-23']);
VQ({ kind: 'scenario', type: 'mcq', q: 'A hospital app relies on a government health-ID API, which a vendor bulletin warns returns wrong patient matches under load. Type and mitigation?', opts: ['Technical — benchmark and regularly inspect the external component', 'Project — detailed milestones and constant iteration', 'Business — explore the market', 'Technical — communicate with clients and build prototypes'], ans: 0,
  why: ['Correct.', 'Not a schedule/budget/people problem.', 'Not about the market.', 'Right type, wrong mitigation: that one targets wrong functions/requirements.'],
  sol: 'External component shortfall → technical → benchmark and inspect.', trap: 'Option 4 has the right type with the other technical mitigation.' }, ['cs3001-2025T1-42', 'cs3001-2025T1-43', 'cs3001-2025T2-150', 'cs3001-2025T2-151', 'cs3001-2026T2-23', 'cs3001-2026T2-24']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A stock-recommendation app is technically sound and on schedule, but analysts warn that a dozen free rivals do the same. Choose the correct type–mitigation pair.', opts: ['Business — explore the market for similar products', 'Business — benchmark and inspect external components', 'Technical — communicate with clients or build prototypes', 'Project — hire experienced developers'], ans: 0,
  why: ['Correct.', 'Right type, technical mitigation.', 'Nothing is wrong with the product.', 'People are not the issue.'],
  sol: 'Not competitive → business → explore the market.', trap: 'Option 2 has the right type label.' }, ['cs3001-2023T2-19', 'cs3001-2023T2-20', 'cs3001-2024T1-44', 'cs3001-2024T1-45', 'cs3001-2024T3-22', 'cs3001-2024T3-23']);
VQ({ kind: 'scenario', type: 'mcq', q: 'A university portal team builds an attendance module whose rules differ from what the registrar actually follows, because nobody showed the registrar early screens. Type and best mitigation?', opts: ['Technical — communicate with the client and build prototypes for feedback', 'Business — explore the market', 'Project — cross-training', 'Technical — benchmark external components'], ans: 0,
  why: ['Correct: wrong functions → technical; early feedback prevents it.', 'Not a market problem.', 'Not a people problem.', 'No external component involved.'],
  sol: 'Wrong functions built → technical → communicate / prototype.', trap: 'Option 4 is the other technical mitigation.' }, ['cs3001-2023T1-244']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which of these is <b>NOT</b> an example of gold plating?', opts: ['Adding animated themes nobody requested', 'Building an AI chatbot the client never asked for', 'Implementing the payment page specified in the SRS', 'Supporting 12 export formats when the client needs PDF only'], ans: 2,
  why: ['Gold plating.', 'Gold plating.', 'Correct answer: a required feature.', 'Gold plating.'], sol: 'Gold plating = unnecessary features.', trap: 'None strong — tests the definition directly.' }, ['cs3001-2024T2-7']);
VQ({ kind: 'scenario', type: 'mcq', q: 'Only one developer understands the billing engine. Which strategy MOST reduces the impact if she leaves?', opts: ['Cross-train two more developers on the billing engine', 'Reduce scope', 'Buy a third-party billing product', 'Explore the market'], ans: 0,
  why: ['Correct: personnel risk → spread knowledge.', 'Does not address knowledge concentration.', 'A major change, not a mitigation of this risk.', 'Business mitigation.'], sol: 'Personnel → cross-training.', trap: 'Third-party product sounds decisive.' }, ['cs3001-2026T1-14']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which action is <b>NOT</b> risk mitigation?', opts: ['Adding automated tests to reduce the probability of regressions', 'Keeping a backup server to reduce the impact of an outage', 'Ignoring a low-probability risk and hoping it does not occur', 'Prototyping the UI to reduce the chance of building wrong functions'], ans: 2,
  why: ['Mitigation.', 'Mitigation.', 'Correct answer: that is acceptance by neglect, not mitigation.', 'Mitigation.'], sol: 'Mitigation reduces probability or impact.', trap: 'All others reduce probability or impact.' }, ['cs3001-2023T3-185']);
VQ({ kind: 'numbers', type: 'num', q: 'The risk assessed for scope creep is 2.4. Its probability is 0.8. What is the impact?', ans: 3, tol: 0.001, calc: () => 2.4 / 0.8,
  sol: 'I = R ÷ P = 2.4 ÷ 0.8 = 3.', trap: '2.4 × 0.8 = 1.92 and 0.8 ÷ 2.4 = 0.33 are the usual wrong turns.' }, ['cs3001-2024T1-26', 'cs3001-2024T3-8', 'cs3001-2025T1-28']);
VQ({ kind: 'numbers', type: 'num', q: 'Probability of a key vendor delay is 45% and its impact is 2. Risk exposure?', ans: 0.9, tol: 0.001, calc: () => CALC.risk(0.45, 2),
  sol: '0.45 × 2 = 0.9.', trap: 'Writing 45 × 2 = 90.' }, ['cs3001-2023T1-246']);
VQ({ kind: 'counting', type: 'mcq', q: 'R1: P 0.4, I 4. R2: P 0.8, I 2. R3: P 0.5, I 3. Which should be prioritised?', opts: ['R1', 'R2', 'R3', 'R1 and R2 equally'], ans: 3,
  why: ['Tied with R2 at 1.6.', 'Tied with R1 at 1.6.', 'R3 = 1.5, the lowest.', 'Correct: R1 = R2 = 1.6 > R3 = 1.5.'], sol: 'Compute every product: 1.6, 1.6, 1.5.', trap: 'Spotting R1’s impact of 4 and stopping.' }, ['cs3001-2025T3-24']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Each morning, team members state yesterday’s work, today’s plan and blockers; the Scrum Master then follows up on blockers. What is the meeting’s main purpose?', opts: ['To report status to upper management', 'To identify and remove impediments to progress', 'To re-prioritise the product backlog', 'To demonstrate completed work'], ans: 1,
  why: ['Status reporting is not the purpose.', 'Correct.', 'That is the PO’s ongoing work / planning.', 'That is the review.'], sol: 'Daily scrum → impediments.', trap: 'Option 1 describes what it superficially looks like.' }, ['cs3001-2023T3-187', 'cs3001-2024T1-38']);
VQ({ kind: 'chained', type: 'mcq', q: 'Match: (i) the team picks stories and plans how to build them; (ii) the team shows a working feature to customers; (iii) the team discusses that code reviews were slow and agrees on a fix.', opts: ['Planning, Review, Retrospective', 'Planning, Retrospective, Review', 'Review, Planning, Retrospective', 'Daily scrum, Review, Retrospective'], ans: 0,
  why: ['Correct.', '(ii) and (iii) swapped.', '(i) and (ii) swapped.', '(i) is planning, not the daily scrum.'], sol: 'What+how → planning; product → review; process → retrospective.', trap: 'Review/retrospective swap.' }, ['cs3001-2025T1-27', 'cs3001-2026T2-4', 'cs3001-2025T3-22']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Which role keeps the backlog ordered so the highest-value features are built first, and which role removes blockers?', opts: ['Product owner; Scrum Master', 'Scrum Master; Product owner', 'Product owner; Product owner', 'Team lead; Scrum Master'], ans: 0,
  why: ['Correct.', 'Swapped.', 'The PO does not remove impediments.', 'Team lead is not a Scrum role.'], sol: 'Value → PO; impediments → SM.', trap: 'Swapped pair.' }, ['cs3001-2023T3-186', 'cs3001-2026T1-12', 'cs3001-2023T1-240']);
VQ({ kind: 'numbers', type: 'num', q: 'Sprint points: 14, 19, 17, 22, 18. Average velocity?', ans: 18, tol: 0, calc: () => CALC.avg([14, 19, 17, 22, 18]),
  sol: '90 ÷ 5 = 18.', trap: 'Taking the median or the most recent sprint instead of the mean.' }, ['cs3001-2026T2-5', 'cs3001-2025T2-138', 'cs3001-2026T1-13']);

[['Person-month', 'Work done by one person in one month; developers × months.'], ['KLOC', 'Thousand lines of code.'], ['Empirical estimation', 'Estimation from experience with similar projects (expert judgement, Delphi).'], ['Heuristic estimation', 'A mathematical model relating effort to size (COCOMO).'], ['Delphi technique', 'Anonymous experts estimate over several rounds until consensus.'],
 ['COCOMO', 'Effort = a × KLOC^b; organic 2.4/1.05, semi-detached 3.0/1.12, embedded 3.6/1.20.'], ['Organic project', 'Small, well-understood, experienced team.'], ['Semi-detached project', 'Mix of experienced and inexperienced; partly familiar.'], ['Embedded project', 'Strongly coupled with hardware or tight constraints.'], ['EAF', 'Effort adjustment factor: product of cost-driver multipliers.'],
 ['WBS', 'Tree: project → activities → assignable tasks.'], ['Activity network', 'Tasks with durations and dependency arrows.'], ['Critical path', 'Longest path through the network; minimum project duration.'], ['Slack', 'How long a task can slip without delaying the project.'], ['Gantt chart', 'Bars on a timeline showing task start, duration and overlap.'],
 ['Risk', 'An anticipated unfavourable event that may occur.'], ['Technical risk', 'Wrong functions, insufficient knowledge, external component shortfalls.'], ['Project risk', 'Budget, schedule, personnel, resource problems.'], ['Business risk', 'Not competitive in the market; gold plating.'], ['Gold plating', 'Developing unnecessary features.'], ['Mitigation', 'Actions that reduce a risk’s probability or impact.'], ['Risk exposure', 'P × I.'],
 ['Product owner', 'Prioritises the backlog for maximum value.'], ['Scrum Master', 'Facilitates the process; removes impediments.'], ['Product backlog', 'Prioritised list of work from user stories.'], ['Sprint planning', 'Decide what to build in the sprint and how.'], ['Daily scrum', 'Yesterday / today / blockers; surfaces impediments.'], ['Sprint review', 'Demonstrate completed work to stakeholders.'], ['Sprint retrospective', 'Evaluate the sprint’s process and agree improvements.'], ['Story points', 'Relative size/complexity of a story.'], ['Velocity', 'Story points completed per sprint.']].forEach(([t, d]) => GLOSS(t, d, 4));
[['COCOMO constants?', 'Organic 2.4/1.05 · Semi 3.0/1.12 · Embedded 3.6/1.20.'], ['Final effort?', 'Initial × EAF (multiply the drivers).'], ['Cost?', 'Final effort × monthly salary.'], ['100 KLOC organic initial?', '≈ 302 PM.'], ['100 KLOC embedded initial?', '≈ 904 PM.'], ['Delphi in one line?', 'Anonymous multi-round expert consensus.'],
 ['Task with two incoming arrows starts when…', 'Both predecessors finish.'], ['Critical path?', 'Longest path = minimum duration.'], ['Does a WBS show dependencies?', 'No.'],
 ['Third-party API faulty → type, mitigation?', 'Technical; benchmark and inspect.'], ['Not competitive → type, mitigation?', 'Business; explore the market.'], ['Wrong functions built → type, mitigation?', 'Technical; talk to clients, prototype.'], ['Experts leave → mitigation?', 'Cross-train (project risk).'], ['Gold plating?', 'Unnecessary features; business risk.'],
 ['Impact from R = 1.8, P = 0.6?', 'I = R ÷ P = 3.'], ['Prioritise which risk?', 'Highest P × I.'],
 ['Who prioritises the backlog?', 'Product owner.'], ['Demo to customers?', 'Sprint review.'], ['Improve the process?', 'Retrospective.'], ['Yesterday / today / blockers?', 'Daily scrum.'], ['Velocity?', 'Points completed per sprint (average).']].forEach(([f, b]) => CARD(f, b, 4));
