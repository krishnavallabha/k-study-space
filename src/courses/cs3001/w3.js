/* ===================== SE WEEK 3 — Software user interfaces ===================== */
WEEK({ course: 'cs3001', n: 3, title: 'Software User Interfaces',
  blurb: 'How do you know an interface is good before anyone has coded it? Set usability goals (effective, efficient, safe, learnable, memorable) and UX goals; prototype cheaply, from storyboards to clickable prototypes; then let experts check the prototype against ten heuristics grouped into understanding, action and feedback.',
  topics: [
    { title: '3.1 Interaction design, usability and UX goals', cs: ['interaction-design', 'usability-goals'] },
    { title: '3.2 Prototyping', cs: ['prototyping'] },
    { title: '3.3 Heuristic evaluation', cs: ['heuristics'] }] });

/* ---------------- 3.1 Interaction design & UX ---------------- */
C({ id: 'interaction-design', week: 3, title: 'Interaction design and user-experience goals', pri: 'Supporting', prereq: ['sdlc'],
  src: 'Revision notes W3 §3.1, §3.3 · Study guide ch.3 §3.1',
  oneLine: 'Four repeating activities (identify needs → alternative designs → build interactive versions → evaluate); UX goals are about feelings, usability goals about performance.',
  misShort: 'Calling “fun” or “satisfying” a usability goal.',
  intu: R`<p>Two banking apps both let you transfer money in three taps.</p>
<p>One feels calm and trustworthy. The other feels cramped and nervous.</p>
<p>Both <i>work</i>. Only one is pleasant.</p>
<p>Interaction design cares about both: does the product <b>work</b> for people, and how does it <b>feel</b>?</p>
<p>The question: <b>what are the activities of interaction design, and which goals are about working versus feeling?</b></p>`,
  why: R`<ul><li>Not asked directly as a PYQ yet, but it frames every Week 3 question: usability goals (asked in nine papers) are the “working” half.</li><li>“Novelty” and feeling-words are the standard distractors in usability-goal questions.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Interaction design</b> — designing interactive products that support the way people communicate and interact in everyday and working lives.',
    'Four activities, repeated: (1) identify needs and establish requirements; (2) develop alternative designs; (3) build interactive versions; (4) evaluate. Evaluation feeds back into the others.',
    '<b>Usability goals</b> — objective, measurable: effectiveness, efficiency, safety, learnability, memorability.',
    '<b>User-experience (UX) goals</b> — subjective, emotional: satisfying, enjoyable, fun, motivating, entertaining, rewarding, helpful, emotionally fulfilling.']))
    + '<p><b>In words:</b> “does it work?” → usability; “how does it feel?” → UX.</p>',
  vis: M.flow(['Identify needs', 'Alternative designs', 'Build interactive version', { t: 'Evaluate', hl: true }], { loop: true, cap: 'Evaluation loops back — the design is refined in cycles.' }),
  ex: [
    M.ex('Introductory', R`<p>Classify: (a) “users finish checkout in under a minute” (b) “users find the app fun”.</p>`,
      R`<p>(a) is measurable performance → usability (efficiency). (b) is a feeling → UX goal.</p><p><b>Now suppose</b> (b) is reworded as “80% of users rate the app 4+ for enjoyment”. It now has a number, but it still measures a <i>feeling</i> → still a UX goal. The type depends on what is measured, not on whether a number appears.</p>`),
    M.ex('Standard', R`<p>Map the four interaction-design activities onto SDLC phases.</p>`,
      R`<p>Identify needs ≈ requirements; alternative designs ≈ design; build interactive versions ≈ development; evaluate ≈ testing. The difference: interaction design loops through these quickly with prototypes, not code.</p>`),
    M.ex('Exam-level', R`<p>Which is NOT a usability goal: efficiency, memorability, enjoyability, safety?</p>`,
      R`<p><b>Enjoyability</b> — it is a UX goal (a feeling). The other three are on the list of five usability goals.</p>`)],
  math: M.rule('<p><b>Usability = effective, efficient, safe, learnable, memorable (performance). UX = satisfying, enjoyable, fun, motivating… (feelings).</b></p>')
    + M.why([['“Satisfying” as a usability goal', 'it is subjective — a UX goal.'], ['Evaluate only at the end', 'evaluation happens every cycle.']]),
  conn: R`<p><b>At work:</b> product teams track task-completion time (usability) and NPS / satisfaction surveys (UX) separately.</p><p><b>Earlier:</b> requirements gathering (Week 2) is the “identify needs” activity.</p><p><b>Next:</b> the five usability goals in detail; then prototypes (“build interactive versions”) and heuristic evaluation (“evaluate”).</p>`,
  mis: M.ul(['Treating UX words (fun, satisfying) as usability goals.', 'Thinking interaction design is a one-pass sequence.']),
  exam: R`<p><b>Fast method:</b> ask “is this about performance or about feelings?”.</p>`
});
Q({ cp: 'interaction-design', type: 'mcq', diff: 'easy', q: 'Which is a user-experience goal rather than a usability goal?', opts: ['Learnability', 'Motivating', 'Safety', 'Efficiency'], ans: 1,
  why: ['Usability.', 'Correct: a feeling.', 'Usability.', 'Usability.'], sol: 'Feelings → UX.' });
Q({ cp: 'interaction-design', type: 'mcq', diff: 'moderate', q: 'Which activity of interaction design corresponds most closely to testing in the SDLC?', opts: ['Identify needs', 'Develop alternative designs', 'Build interactive versions', 'Evaluate'], ans: 3,
  why: ['≈ requirements.', '≈ design.', '≈ development.', 'Correct.'], sol: 'Evaluate ≈ testing.' });
Q({ cp: 'interaction-design', type: 'msq', diff: 'moderate', q: 'Select ALL usability goals.', opts: ['Effectiveness', 'Entertaining', 'Memorability', 'Safety'], ans: [0, 2, 3],
  why: ['Usability.', 'UX (feeling).', 'Usability.', 'Usability.'], sol: 'Five usability goals: effective, efficient, safe, learnable, memorable.' });
Q({ cp: 'interaction-design', type: 'short', diff: 'easy', q: 'List the four activities of interaction design and say why the process repeats.',
  model: '<p>Identify needs and establish requirements; develop alternative designs; build interactive versions of the designs; evaluate them. Evaluation reveals problems and new needs, so the results feed back into the earlier activities and the cycle repeats until the design is good enough.</p>' });

/* ---------------- 3.1 Usability goals ---------------- */
C({ id: 'usability-goals', week: 3, title: 'The five usability goals', pri: 'High', prereq: ['interaction-design'],
  src: 'Revision notes W3 §3.2 · Study guide ch.3 §3.2 · PYQs 2023 T1 Q238, 2023 T2 Q6, 2023 T3 Q181, 2024 T1 Q28, 2024 T2 Q6, 2025 T2 Q148, 2025 T3 Q9, 2026 T1 Q8, 2026 T2 Q13',
  oneLine: 'Effectiveness = can do the job at all; Efficiency = few steps for people who already know it; Safety = protects from accidents and lets you recover; Learnability = easy for first-timers; Memorability = easy to remember after a gap.',
  misShort: 'Calling a guided tour “memorability”, or losing a draft on close “effectiveness”.',
  intu: R`<p>Think of your first day with a new phone.</p>
<p>Can it make a call at all? That is <b>effectiveness</b>.</p>
<p>Is there a setup tour that shows you around? That is <b>learnability</b> — easy the first time.</p>
<p>Three months later, does your daily alarm take one tap or seven? That is <b>efficiency</b> — fast for someone who already knows it.</p>
<p>You leave for a month and come back. Do you still remember where settings are? That is <b>memorability</b>.</p>
<p>You accidentally swipe away a half-written message. Is it saved as a draft? That is <b>safety</b>.</p>
<p>The question: <b>a scenario describes a strength or a failure — which goal is it?</b></p>`,
  why: R`<ul><li>Nine of eleven papers. Learnability is keyed five times (tour, help page, no tutorial, wizard/templates); safety three times (no autosave, draft discarded); efficiency once (saved addresses).</li><li>2023 T3 Q181 asks which is NOT a usability goal — Novelty.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Usability</b> (ISO 9241-11) — the extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use.',
    '<b>Effectiveness</b> — how good the system is at doing what it is supposed to do.',
    '<b>Efficiency</b> — how well it supports users in carrying out tasks: minimal steps for routine tasks, for users who already know the system.',
    '<b>Safety</b> — protects users from dangerous and undesirable situations: prevents accidental actions and provides recovery.',
    '<b>Learnability</b> — how easy it is to learn to use, for first-time users.',
    '<b>Memorability</b> — how easy it is to remember how to use, once learned, after a gap.']))
    + '<p><b>In words:</b> works · fast · safe · easy to learn · easy to remember.</p>',
  vis: M.table(['Signal in the stem', 'Goal'], [['guided tour, tutorial, wizard, templates, “new users struggle”, “have to read help”', 'Learnability'], ['saved addresses, shortcuts, fewer clicks for routine tasks', 'Efficiency'], ['autosave, prompt before closing unsaved work, undo, drafts kept', 'Safety'], ['users forget after not using it; unfamiliar icons each time', 'Memorability'], ['cannot accomplish the task at all', 'Effectiveness']], 'Find the signal, name the goal.'),
  ex: [
    M.ex('Introductory', R`<p>An image-processing tool prompts new users to take a step-by-step tour after installation. Which goal is fulfilled?</p>`,
      R`<ol><li>Who benefits? New users.</li><li>When? The first time.</li><li>So: <b>learnability</b> (2023 T1 Q238).</li></ol><p><b>Now suppose</b> the tour is replaced by a “quick action” bar that lets experienced users enhance a photo in one click. The beneficiaries are now people who already know the tool → <b>efficiency</b>. Same tool, different audience, different goal.</p>`),
    M.ex('Standard', R`<p>A text editor has AI paraphrasing but no autosave, and closing an unsaved document gives no prompt. Which goal is missing?</p>`,
      R`<p>Losing work through an accidental action, with no warning and no recovery → <b>safety</b> (2024 T1 Q28; 2024 T2 Q6 is the email-draft twin).</p><p>Why not effectiveness? The editor does edit and paraphrase — it does its job; it just does not protect you.</p>`),
    M.ex('Exam-level', R`<p>For tax software aimed at first-time filers, select ALL features that improve learnability: (a) step-by-step wizard (b) undo with a shortcut (c) templates for salaried / freelancer profiles (d) strong password rules.</p>`,
      R`<p>(a) ✔ guides first-timers; (c) ✔ gives a familiar starting point. (b) is safety (recovery) — and a shortcut is efficiency; (d) is security, not a usability goal. Answer (a), (c) — 2025 T2 Q148.</p>`)],
  math: M.rule('<p><b>First-time → Learnability. Routine speed → Efficiency. Accident/recovery → Safety. After a gap → Memorability. Can do it at all → Effectiveness.</b></p>')
    + M.why([['Memorability for a tour on first install', 'memorability is about returning after a gap; first use is learnability.'], ['Effectiveness for losing a draft on close', 'the app can still compose email; the failure is protection — safety.'], ['Efficiency for “new users struggle to find cancel”', 'efficiency is for people who already know the system.'], ['Consistency as a usability goal', 'consistency is a heuristic, not one of the five goals (see the 2023 T3 Q181 note).']]),
  conn: R`<p><b>At work:</b> onboarding flows (learnability), saved payment methods (efficiency) and “Undo send” (safety) are all product features built for one goal each.</p><p><b>Earlier:</b> these are the “usability” half of the interaction-design goals.</p><p><b>Next:</b> heuristics are the checklist used to find where a prototype fails these goals.</p>`,
  mis: M.ul(['Memorability for a tour (2023 T1 Q238).', 'Effectiveness for missing autosave (2024 T1 Q28, 2024 T2 Q6).', 'Undo shortcut as a learnability feature (2025 T2 Q148).', 'Efficiency for saved addresses is right — learnability is the decoy (2026 T1 Q8).']),
  exam: R`<p><b>Fast method:</b> ask who is affected and when — a new user (learnability), a returning user after a gap (memorability), a regular user doing a routine task (efficiency), a user after an accident (safety).</p>`
});
Q({ cp: 'usability-goals', type: 'mcq', diff: 'easy', q: 'A food app remembers your last order so you can reorder with one tap. This improves:', opts: ['Learnability', 'Efficiency', 'Memorability', 'Safety'], ans: 1,
  why: ['Not about first-time users.', 'Correct: fewer steps for a routine task.', 'Not about remembering after a gap.', 'No accident is prevented.'], sol: 'Routine speed → efficiency.' });
Q({ cp: 'usability-goals', type: 'mcq', diff: 'moderate', q: 'Users who open a quarterly-reporting tool once every three months keep forgetting where the export button is. Which goal is weak?', opts: ['Learnability', 'Memorability', 'Efficiency', 'Effectiveness'], ans: 1,
  why: ['They have learned it before.', 'Correct: remembering after a gap.', 'Not about speed.', 'Export does work.'], sol: 'After a gap → memorability.' });
Q({ cp: 'usability-goals', type: 'mcq', diff: 'moderate', q: 'A banking app asks “Transfer ₹50,000 to R. Mehta? Confirm” and lets you cancel within 10 seconds. Which goal?', opts: ['Safety', 'Efficiency', 'Learnability', 'Memorability'], ans: 0,
  why: ['Correct: prevents and recovers from accidental actions.', 'It adds a step.', 'Not about first use.', 'Not about a gap.'], sol: 'Accident prevention / recovery → safety.' });
Q({ cp: 'usability-goals', type: 'short', diff: 'moderate', q: 'Distinguish learnability from memorability with one example each.',
  model: '<p><b>Learnability</b> is how easy the system is for a first-time user — e.g. an onboarding tour on first install. <b>Memorability</b> is how easy it is to remember how to use after not using it for a while — e.g. a yearly tax tool whose standard icons and labels let you find things again next year without relearning.</p>' });

/* ---------------- 3.2 Prototyping ---------------- */
C({ id: 'prototyping', week: 3, title: 'Prototyping: storyboard, paper, digital mock-up, interactive', pri: 'High', prereq: ['interaction-design'],
  src: 'Revision notes W3 §3.4 · Study guide ch.3 §3.3 · PYQs 2023 T1 Q243, 2023 T2 Q7, 2023 T3 Q182, 2024 T3 Q7, 2025 T2 Q137, 2025 T3 Q10, 2026 T1 Q9, 2026 T2 Q14',
  oneLine: 'Storyboard = one hand-drawn comic (setting, sequence, satisfaction); paper prototype = hand-drawn screens on separate papers, swapped by hand; digital mock-up = screen images made in a digital tool; interactive prototype = a working, clickable app-like version with data.',
  misShort: 'Calling separate hand-drawn screens a storyboard, or clickable PowerPoint images an interactive prototype.',
  intu: R`<p>You want to build a food-delivery app. Coding the UI takes weeks. If the idea is wrong, those weeks are wasted.</p>
<p>So you sketch first.</p>
<p>Step 1: draw a comic. Riya is hungry at midnight (setting), opens the app and orders (sequence), eats happily (satisfaction). No screens yet — just the story. That is a <b>storyboard</b>.</p>
<p>Step 2: draw each screen on its own sheet. A user “taps” a button with a finger; you swap in the next sheet. That is a <b>paper prototype</b>.</p>
<p>Step 3: draw the screens properly in PowerPoint or a design tool, with realistic fake data. That is a <b>digital mock-up</b>.</p>
<p>Step 4: build something users can actually click through, type into and run a workflow on. That is an <b>interactive prototype</b> — close to the real look and feel.</p>
<p>The question: <b>given a description, which of the four is it?</b> The material decides: comic, paper sheets, digital pictures, or working app.</p>`,
  why: R`<ul><li>Eight papers. Paper prototype is keyed three times; interactive twice; digital mock-up once (clickable PowerPoint images); storyboard statements once (MSQ).</li><li>The mock-up vs interactive boundary is the hard part — see the note in the formal section.</li></ul>`,
  formal: M.def(M.lines([
    'Why prototype: initial ideas are rarely the best; real interfaces are slow and costly to build; prototypes let you test feasibility, clarify vague requirements and get user feedback quickly.',
    '<b>Storyboard</b> — a hand-drawn comic of the setting, the sequence of steps and the satisfaction (outcome). Shows how the interface accomplishes a task while avoiding commitment to a particular UI.',
    '<b>Paper prototype</b> — hand-sketched or printed screens on multiple sheets of paper; switching is simulated manually. Cheap, starts conversations, can be changed immediately in front of the user.',
    '<b>Digital mock-up</b> — screens drawn in a digital tool (PowerPoint, drawing tools), often with fabricated data. Images of screens, possibly linked, rather than a working application.',
    '<b>Interactive prototype</b> — a working, clickable version (a web app with fabricated data, a Figma prototype where users navigate, enter sample data and run workflows); high fidelity, close to the real look and feel.',
    '<b>Wizard of Oz</b> — a human secretly operates functionality that does not exist yet.']))
    + '<p><b>In words:</b> fidelity rises from comic → paper → digital pictures → working prototype.</p>'
    + M.box('exam', 'How the papers draw the mock-up / interactive line', '<p>The notes describe a mock-up as static with fake data. The papers key “a web application with fabricated data” as <b>interactive</b> (2024 T3 Q7) and “clickable images of app screens made in PowerPoint” as a <b>mock-up</b> (2025 T2 Q137). The consistent rule: <b>pictures of screens</b> (even linked) → mock-up; <b>a working application / prototype that accepts input and runs workflows</b> → interactive. See Sources &amp; discrepancies.</p>'),
  vis: M.ladder([{ t: 'Storyboard', d: 'one comic: setting, sequence, satisfaction' }, { t: 'Paper prototype', d: 'separate hand-drawn screens, swapped by hand' }, { t: 'Digital mock-up', d: 'screen images in a digital tool, fake data' }, { t: 'Interactive prototype', d: 'clickable working version, close to real' }], { top: 'low fidelity', bottom: 'high fidelity', cap: 'The fidelity ladder.' }),
  ex: [
    M.ex('Introductory', R`<p>Screens of a mobile app are drawn on paper and switching between screens is simulated manually during discussions. Which technique?</p>`,
      R`<ol><li>Material: paper → storyboard or paper prototype.</li><li>Multiple separate screens, swapped → <b>paper prototype</b> (2026 T1 Q9; 2023 T2 Q7; 2025 T3 Q10).</li></ol><p><b>Now suppose</b> the same paper instead shows one comic strip — a customer, their problem, the steps, the happy ending — with no actual screen layouts. That is a <b>storyboard</b>. <b>The mechanism:</b> separate screens = paper prototype; one narrative = storyboard.</p>`),
    M.ex('Standard', R`<p>A UX designer creates clickable screens in Figma. Users navigate between screens, enter sample data and simulate workflows. Which type? And what if a startup instead links PowerPoint images of screens so users can “click” through a test order?</p>`,
      R`<p>Figma with data entry and workflows → <b>interactive prototype</b> (2026 T2 Q14). Linked PowerPoint images → <b>digital mock-up</b> (2025 T2 Q137) — they are pictures of screens, not a working prototype.</p>`),
    M.ex('Exam-level', R`<p>Select ALL true statements about storyboards: (a) a hand-drawn comic featuring setting, sequence and satisfaction (b) hand-drawn UIs of different screens on multiple papers (c) emphasise how the interface accomplishes a task while avoiding commitment to a particular UI (d) web apps with fake data.</p>`,
      R`<p>(a) ✔ and (c) ✔. (b) describes a paper prototype; (d) an interactive prototype. 2023 T1 Q243.</p>`)],
  math: M.rule('<p><b>One comic → Storyboard. Separate paper screens → Paper prototype. Digital pictures of screens → Digital mock-up. Working clickable version → Interactive prototype (high fidelity).</b></p>')
    + M.why([['Storyboard for multiple hand-drawn screens', 'a storyboard is one narrative; separate screens = paper prototype.'], ['Interactive for linked PowerPoint images', 'the papers key that as a mock-up (2025 T2 Q137).'], ['Low-fidelity paper for “close-to-real look and feel”', 'close-to-real = high-fidelity interactive (2023 T3 Q182).'], ['Wizard of Oz for close-to-real look and feel', 'Wizard of Oz fakes the functionality with a human; it says nothing about visual fidelity.']]),
  conn: R`<p><b>At work:</b> designers move from whiteboard sketches to Figma wireframes to clickable Figma prototypes before engineering starts.</p><p><b>Earlier:</b> prototypes are the “build interactive versions” activity; the prototyping SDLC model of Week 1 builds them to clarify requirements.</p><p><b>Next:</b> heuristic evaluation inspects these prototypes.</p>`,
  mis: M.ul(['Storyboard for hand-drawn screens on paper (2023 T2 Q7, 2025 T3 Q10, 2026 T1 Q9).', 'Digital mock-up for a web app with fabricated data (2024 T3 Q7 keys interactive).', 'Interactive for clickable PowerPoint images (2025 T2 Q137 keys mock-up).', 'Wizard of Oz for close-to-real (2023 T3 Q182).']),
  exam: R`<p><b>Fast method:</b> identify the material — comic / paper sheets / digital images / working app — then name the rung of the fidelity ladder.</p>`
});
Q({ cp: 'prototyping', type: 'mcq', diff: 'easy', q: 'A six-panel comic shows a commuter missing a bus, opening an app, booking a cab and arriving on time. This is a:', opts: ['Paper prototype', 'Storyboard', 'Digital mock-up', 'Interactive prototype'], ans: 1,
  why: ['No separate screens.', 'Correct: setting, sequence, satisfaction.', 'Not digital screens.', 'Not clickable.'], sol: 'One comic narrative → storyboard.' });
Q({ cp: 'prototyping', type: 'mcq', diff: 'moderate', q: 'Which prototype type is described as being changed immediately in front of the user during a session?', opts: ['Paper prototype', 'Interactive prototype', 'Digital mock-up', 'Beta release'], ans: 0,
  why: ['Correct: a listed benefit of paper prototypes.', 'Changes take development effort.', 'Needs redrawing in a tool.', 'Not a prototype type.'], sol: 'Paper is cheap and editable on the spot.' });
Q({ cp: 'prototyping', type: 'mcq', diff: 'hard', q: 'A team wants to test whether users trust an “AI travel planner” before building any AI. A staff member secretly types the replies users see. This is:', opts: ['Storyboard', 'Wizard of Oz prototyping', 'Digital mock-up', 'Paper prototype'], ans: 1,
  why: ['No comic.', 'Correct: a hidden human operates non-existent functionality.', 'It responds to users live.', 'Nothing is on paper.'], sol: 'Human behind the curtain → Wizard of Oz.' });
Q({ cp: 'prototyping', type: 'short', diff: 'moderate', q: 'Why prototype before coding? Give three reasons.',
  model: '<p>(1) Initial design ideas are rarely the best, so you need cheap ways to try alternatives. (2) Real interfaces are slow and expensive to build, so testing on prototypes saves rework. (3) Prototypes let you test technical feasibility, clarify vague requirements and get user feedback early, then iterate or pivot.</p>' });

/* ---------------- 3.3 Heuristics ---------------- */
C({ id: 'heuristics', week: 3, title: 'Heuristic evaluation: understanding, action, feedback', pri: 'High', prereq: ['usability-goals', 'prototyping'],
  src: 'Revision notes W3 §3.5 · Study guide ch.3 §3.4 · PYQs 2023 T1 Q239, 2023 T2 Q8, 2023 T3 Q183, 2024 T1 Q36, 2024 T2 Q16, 2024 T3 Q14, 2025 T1 Q34, 2025 T3 Q11, 2026 T1 Q10, 2026 T2 Q15',
  oneLine: 'Understanding: consistency, familiar metaphors & language, clean functional design. Action: freedom, flexibility, recognition over recall. Feedback: show status, prevent errors, support error recovery, provide help.',
  misShort: 'Calling “browse without logging in” flexibility — it is freedom.',
  intu: R`<p>You hand your prototype to three experienced designers.</p>
<p>Each one walks through it alone with a checklist and writes down every rule it breaks.</p>
<p>That checklist has ten rules of thumb, in three groups — three questions a user silently asks:</p>
<p><b>“Will I understand it?”</b> — the same thing looks the same everywhere; words and pictures come from real life; nothing cluttered.</p>
<p><b>“Can I move freely?”</b> — I can explore without committing and undo mistakes; beginners and experts both have a path; I pick from what I see instead of remembering commands.</p>
<p><b>“Does it talk back?”</b> — it shows me what is happening; stops me before mistakes; helps me fix them after; gives help where I need it.</p>
<p>The question: <b>a scenario shows a design choice — which heuristic does it satisfy or violate?</b></p>`,
  why: R`<ul><li>Ten papers — the most varied Week 3 family.</li><li>“Browse without signing in” → Freedom appears four times (2023 T1, 2023 T2, 2026 T1, 2026 T2) and its inverse once (2024 T2, must register for everything → Freedom missing).</li><li>Feedback heuristics: show status (2025 T1), prevent errors (2024 T3), support error recovery (2024 T1). Flexibility: menu vs Ctrl+C (2025 T3).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Heuristic</b> — a rule of thumb learned from experience. <b>Heuristic evaluation</b> — expert evaluators inspect a prototype against the heuristics, independently and in several passes, and list the violations.',
    '<b>Understanding:</b> <i>Consistency</i> — similar actions and elements are presented uniformly (same position, label, icon); <i>Familiar metaphors and language</i> — borrow real-world concepts (shopping cart, “Add money”); <i>Clean, functional design</i> — simple, uncluttered.',
    '<b>Action:</b> <i>Freedom</i> — undo, and explore without commitment (browse before logging in); <i>Flexibility</i> — paths for novices and experts (menus vs shortcuts), personalisation and customisation; <i>Recognition over recall</i> — let users recognise options rather than remember them.',
    '<b>Feedback:</b> <i>Show status</i> — keep users informed in real time (progress, loading, tracking); <i>Prevent errors</i> — stop mistakes before they happen (constraints, highlighting); <i>Support error recovery</i> — after an error, make it clear and offer a fix; <i>Provide help</i> — searchable, contextual help.']))
    + '<p><b>In words:</b> 3 + 3 + 4 = ten heuristics. Prevent errors = before; error recovery = after; show status = during.</p>',
  vis: M.graph([{ id: 'H', t: 'Heuristics', x: 300, y: 30, w: 120, hl: true },
    { id: 'U', t: 'Understanding', x: 100, y: 110, w: 130 }, { id: 'A', t: 'Action', x: 300, y: 110, w: 110 }, { id: 'F', t: 'Feedback', x: 500, y: 110, w: 110 },
    { id: 'u', t: 'Consistency\nFamiliar metaphors\nClean design', x: 100, y: 210, w: 160, h: 70 }, { id: 'a', t: 'Freedom\nFlexibility\nRecognition>recall', x: 300, y: 210, w: 160, h: 70 }, { id: 'f', t: 'Show status\nPrevent errors\nError recovery\nProvide help', x: 500, y: 220, w: 150, h: 86 }],
    [{ a: 'H', b: 'U' }, { a: 'H', b: 'A' }, { a: 'H', b: 'F' }, { a: 'U', b: 'u', noArrow: true }, { a: 'A', b: 'a', noArrow: true }, { a: 'F', b: 'f', noArrow: true }], { cap: 'Three groups, ten heuristics.' }),
  ex: [
    M.ex('Introductory', R`<p>A movie-booking site lets users explore films, descriptions and ratings without signing in; signing in is needed only to book. Which heuristic is fulfilled?</p>`,
      R`<ol><li>What is the user able to do? Explore without committing (no account).</li><li>Explore without commitment is half of the definition of <b>Freedom</b> (the other half is undo).</li><li>Answer: Freedom (2023 T2 Q8; 2023 T1 Q239; 2026 T1 Q10; 2026 T2 Q15).</li></ol><p><b>Now suppose</b> the site forces registration before showing anything (2024 T2 Q16). Freedom is now <i>missing</i>. And if instead the site offered a search box for experts and browsing menus for beginners, that would be <b>Flexibility</b>.</p>`),
    M.ex('Standard', R`<p>A leave app pops up a calendar that does not mark holidays, so employees often apply for leave on holidays. Which heuristic is missing? And a food app with no real-time order tracking?</p>`,
      R`<p>Calendar: the mistake could be stopped <i>before</i> it happens by highlighting holidays → <b>Prevent errors</b> missing (2024 T3 Q14).</p><p>Food app: the user cannot see what is happening <i>during</i> the order → <b>Show status</b> missing (2025 T1 Q34).</p>`),
    M.ex('Exam-level', R`<p>A Python IDE catches a syntax error, shows the message and suggests possible corrections. Which heuristic is best fulfilled — consistency, show status, recognition over recall, support error recovery?</p>`,
      R`<p>The official key is <b>Support error recovery</b> (2024 T1 Q36): the error has already happened, and the IDE makes it clear and offers a solution.</p><p>The revision notes argue for recognition over recall (you pick a fix instead of remembering syntax). In the exam, follow the before/after rule: an error that has <i>already occurred</i> + a suggested fix → error recovery. See Sources &amp; discrepancies.</p>`)],
  math: M.rule('<p><b>Understanding: Consistency · Familiar metaphors · Clean design. Action: Freedom (undo, explore) · Flexibility (novice + expert) · Recognition over recall. Feedback: Show status (during) · Prevent errors (before) · Error recovery (after) · Help.</b></p>')
    + M.why([['Flexibility for browse-without-login', 'flexibility is novice/expert paths and tailoring; exploring without commitment is freedom.'], ['Recognition over recall for menu vs Ctrl+C', 'two paths for two kinds of user → flexibility (2025 T3 Q11).'], ['Prevent errors for suggested fixes after a syntax error', 'the error already happened → recovery.'], ['Show status for a calendar not marking holidays', 'the problem is a mistake that could be prevented.']]),
  conn: R`<p><b>At work:</b> Nielsen’s ten usability heuristics, which this course regroups; UX audits list violations with severity ratings.</p><p><b>Earlier:</b> violations explain which usability goal fails — prevent errors and error recovery serve safety, consistency serves memorability and learnability.</p><p><b>Next:</b> Week 4 moves from the product to the project: estimating, scheduling and managing risk.</p>`,
  mis: M.ul(['Flexibility for “no login to browse” (2023 T2 Q8 lists it first).', 'Recognition over recall for menus vs shortcuts (2025 T3 Q11).', 'Recognition over recall for the IDE fix-suggestion (key: error recovery, 2024 T1 Q36).', '2023 T3 Q183 calls consistency a “heuristic for feedback” — the course groups it under understanding; answer the definition asked.']),
  exam: R`<p><b>Fast method:</b> first decide the group — is it about understanding, moving around, or the system responding? Then within feedback, use time: before an error (prevent), during (status), after (recovery), any time (help).</p>`
});
Q({ cp: 'heuristics', type: 'mcq', diff: 'easy', q: 'A wallet app labels its top-up button “Add money” instead of “Initiate credit transaction”. Which heuristic?', opts: ['Familiar metaphors and language', 'Show status', 'Flexibility', 'Prevent errors'], ans: 0,
  why: ['Correct: everyday words.', 'No progress is shown.', 'No alternate path.', 'No mistake is blocked.'], sol: 'Real-world wording → familiar language.' });
Q({ cp: 'heuristics', type: 'mcq', diff: 'moderate', q: 'A form greys out the “Submit” button until all mandatory fields are filled. Which heuristic?', opts: ['Support error recovery', 'Prevent errors', 'Show status', 'Freedom'], ans: 1,
  why: ['Recovery is after an error.', 'Correct: a constraint stops the mistake before it happens.', 'Not progress information.', 'Restricts rather than frees.'], sol: 'Before the mistake → prevent errors.' });
Q({ cp: 'heuristics', type: 'mcq', diff: 'moderate', q: 'An email app shows “Undo” for 5 seconds after you press Send. This primarily supports:', opts: ['Freedom', 'Consistency', 'Show status', 'Provide help'], ans: 0,
  why: ['Correct: undo is part of freedom.', 'Not about uniformity.', 'Not progress.', 'Not help.'], sol: 'Undo → freedom (it also serves the safety goal).' });
Q({ cp: 'heuristics', type: 'msq', diff: 'hard', q: 'Select ALL heuristics that belong to the <b>feedback</b> group.', opts: ['Show status', 'Recognition over recall', 'Support error recovery', 'Provide help'], ans: [0, 2, 3],
  why: ['Feedback.', 'Action group.', 'Feedback.', 'Feedback.'], sol: 'Feedback = status, prevent errors, error recovery, help.' });
Q({ cp: 'heuristics', type: 'short', diff: 'moderate', q: 'Explain the difference between prevent errors, support error recovery and show status, with one example each.',
  model: '<p><b>Prevent errors</b> acts before a mistake — e.g. a calendar that greys out holidays. <b>Support error recovery</b> acts after a mistake — e.g. a compiler message that explains the error and suggests a fix. <b>Show status</b> keeps users informed while something is happening — e.g. live order tracking or a progress bar.</p>' });

/* ---------------- Week 3 harder variations ---------------- */
VQ({ kind: 'scenario', type: 'mcq', q: 'A photo editor adds a “first-time” overlay that points to each tool, and also a “repeat last edit” button for daily users. Which pair of goals do the two features target, in order?', opts: ['Learnability, Efficiency', 'Memorability, Efficiency', 'Learnability, Memorability', 'Effectiveness, Safety'], ans: 0,
  why: ['Correct.', 'The overlay is for first use, not after a gap.', '“Repeat last edit” speeds a routine task.', 'Neither is about doing the job at all or accidents.'],
  sol: 'First-time → learnability; routine speed → efficiency.', trap: 'Memorability is the usual decoy for any “help” feature.' }, ['cs3001-2023T1-238', 'cs3001-2026T1-8', 'cs3001-2025T3-9']);
VQ({ kind: 'negated', type: 'mcq', q: 'A grievance portal forces employees to read its help page to use it, and new staff take ages to find how to cancel a complaint. Which statement is <b>NOT</b> correct?', opts: ['Learnability is the goal most affected', 'A guided first-use tour would help', 'The main failure is efficiency, because the portal needs too many clicks for experts', 'The people struggling are first-time users'], ans: 2,
  why: ['Correct statement.', 'Correct statement: tours target learnability.', 'Not correct: nothing in the stem concerns experienced users’ speed.', 'Correct statement.'],
  sol: 'First-time difficulty → learnability; efficiency is about people who already know the system.', trap: 'Efficiency sounds right because “takes ages” is about time.' }, ['cs3001-2023T2-6', 'cs3001-2026T2-13']);
VQ({ kind: 'counting', type: 'num', q: 'How many of these are among the five usability goals? Efficiency, Consistency, Novelty, Learnability, Safety, Enjoyability, Memorability, Effectiveness.', ans: 5, tol: 0,
  sol: 'Efficiency, Learnability, Safety, Memorability, Effectiveness → 5. Consistency is a heuristic; Novelty is not a goal; Enjoyability is a UX goal.', trap: 'Consistency feels like a goal — in 2023 T3 Q181 both it and Novelty are off the list, but only Novelty was keyed.' }, ['cs3001-2023T3-181']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A spreadsheet app has no autosave. When the laptop battery dies, unsaved sheets are lost. It also offers 40 keyboard shortcuts. Which goal is missing?', opts: ['Efficiency', 'Safety', 'Effectiveness', 'Memorability'], ans: 1,
  why: ['Shortcuts give efficiency.', 'Correct: no protection from an undesirable situation.', 'The app does edit spreadsheets.', 'Not about a gap in use.'],
  sol: 'Lost work, no recovery → safety.', trap: 'The shortcut detail tempts efficiency, but it is present, not missing.' }, ['cs3001-2024T1-28', 'cs3001-2024T2-6']);
VQ({ kind: 'counting', type: 'num', q: 'Exam-registration portal for first-time candidates. How many of these features mainly improve <b>learnability</b>? (1) a guided first-login tour (2) Ctrl+S to save (3) “fill like last year” button for returning candidates (4) examples beside each field (5) templates for “fresher” and “repeater” candidates (6) OTP on login.', ans: 3, tol: 0,
  sol: '(1), (4), (5) → 3. (2), (3) efficiency; (6) security.', trap: '(3) is helpful but only to returning users.' }, ['cs3001-2025T2-148']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A designer draws each screen of a bus-pass app on separate index cards and also draws one 4-panel comic of a student renewing a pass. Which statement is correct?', opts: ['Both are storyboards', 'Index cards = paper prototype; comic = storyboard', 'Index cards = storyboard; comic = paper prototype', 'Both are digital mock-ups'], ans: 1,
  why: ['Separate screens are not a storyboard.', 'Correct.', 'Swapped.', 'Nothing digital.'],
  sol: 'Separate screens → paper prototype; one narrative → storyboard.', trap: 'Both are hand-drawn on paper.' }, ['cs3001-2023T1-243', 'cs3001-2023T2-7', 'cs3001-2025T3-10', 'cs3001-2026T1-9']);
VQ({ kind: 'scenario', type: 'mcq', q: 'Three prototypes: (P) screen images made in PowerPoint, linked so a click jumps to the next slide; (Q) a React web app wired to fake data where users can type and submit; (R) the same screens on paper. Classify P, Q, R.', opts: ['Mock-up, Interactive, Paper', 'Interactive, Interactive, Paper', 'Mock-up, Mock-up, Storyboard', 'Interactive, Mock-up, Paper'], ans: 0,
  why: ['Correct, following the keys of 2025 T2 Q137 and 2024 T3 Q7.', 'Linked images were keyed as a mock-up.', 'A working web app is interactive; separate paper screens are a paper prototype.', 'Swapped.'],
  sol: 'Pictures of screens → mock-up; working app with data → interactive; paper screens → paper prototype.', trap: 'Clickability alone does not make P interactive in the papers’ keys.' }, ['cs3001-2024T3-7', 'cs3001-2025T2-137', 'cs3001-2026T2-14']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which technique is <b>least</b> suitable for giving users a close-to-real look and feel of the final product?', opts: ['High-fidelity interactive prototype', 'Clickable Figma prototype with sample data', 'Storyboard', 'Web app with fabricated data'], ans: 2,
  why: ['High fidelity.', 'Interactive.', 'Correct: a comic deliberately avoids committing to a UI.', 'Interactive.'],
  sol: 'Storyboard is the lowest rung.', trap: 'Three options describe the same high-fidelity idea in different words.' }, ['cs3001-2023T3-182']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A recipe site lets anyone search and read recipes; saving favourites needs a login. A second site shows a search bar for experts and category menus for beginners. Which heuristics do the two sites illustrate, in order?', opts: ['Freedom, Flexibility', 'Flexibility, Freedom', 'Freedom, Recognition over recall', 'Consistency, Flexibility'], ans: 0,
  why: ['Correct.', 'Swapped.', 'Two user paths = flexibility.', 'Not about uniformity.'],
  sol: 'Explore without commitment → freedom; novice + expert paths → flexibility.', trap: 'The swapped option is listed second.' }, ['cs3001-2023T1-239', 'cs3001-2023T2-8', 'cs3001-2026T1-10', 'cs3001-2026T2-15', 'cs3001-2025T3-11', 'cs3001-2024T2-16']);
VQ({ kind: 'chained', type: 'mcq', q: 'A ticket app: (i) a seat map greys out seats already sold; (ii) after a failed payment it explains why and offers UPI instead; (iii) a progress bar shows “Confirming seats… 2 of 3”. Name the heuristics for (i), (ii), (iii).', opts: ['Prevent errors, Support error recovery, Show status', 'Show status, Prevent errors, Support error recovery', 'Prevent errors, Show status, Support error recovery', 'Support error recovery, Prevent errors, Show status'], ans: 0,
  why: ['Correct: before, after, during.', 'Shifted by one.', '(ii) and (iii) swapped.', '(i) and (ii) swapped.'],
  sol: 'Before → prevent; after → recovery; during → status.', trap: 'Every option uses the same three words; only the order differs.' }, ['cs3001-2024T3-14', 'cs3001-2025T1-34', 'cs3001-2024T1-36']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement about the <b>consistency</b> heuristic is <b>INCORRECT</b>?', opts: ['Similar actions are presented the same way across screens', 'Learning one screen transfers to others', 'It means giving real-time feedback during every interaction', 'A “Save” button in the same place on every page applies it'], ans: 2,
  why: ['Correct statement.', 'Correct statement.', 'Incorrect: that is show status.', 'Correct statement.'],
  sol: 'Consistency = uniformity.', trap: '2023 T3 Q183 calls consistency a “heuristic for feedback”, which makes option 3 sound plausible.' }, ['cs3001-2023T3-183']);

[['Interaction design', 'Designing interactive products that support how people communicate and interact.'], ['Usability goals', 'Effectiveness, efficiency, safety, learnability, memorability — objective.'], ['UX goals', 'Subjective feelings: satisfying, enjoyable, fun, motivating, rewarding.'],
 ['Effectiveness', 'How good the system is at doing what it is supposed to do.'], ['Efficiency', 'Minimal steps for routine tasks, for users who know the system.'], ['Safety (usability)', 'Protects from undesirable situations; prevents accidents; allows recovery.'], ['Learnability', 'Easy to learn for first-time users.'], ['Memorability', 'Easy to remember how to use after a gap.'],
 ['Storyboard', 'Hand-drawn comic of setting, sequence and satisfaction; avoids committing to a UI.'], ['Paper prototype', 'Hand-drawn screens on separate papers; switching simulated by hand.'], ['Digital mock-up', 'Screens drawn in a digital tool, often with fabricated data.'], ['Interactive prototype', 'Clickable, working, high-fidelity version close to the real product.'], ['Wizard of Oz', 'A hidden human operates functionality that does not exist yet.'],
 ['Heuristic evaluation', 'Experts inspect a prototype against a checklist of heuristics and list violations.'], ['Consistency', 'Similar actions and elements presented uniformly.'], ['Familiar metaphors and language', 'Use real-world concepts and plain words.'], ['Freedom', 'Undo, and explore without commitment.'], ['Flexibility', 'Paths for novices and experts; personalisation and customisation.'], ['Recognition over recall', 'Let users pick from what they see instead of remembering.'],
 ['Show status', 'Keep users informed in real time.'], ['Prevent errors', 'Stop mistakes before they happen.'], ['Support error recovery', 'After an error, make it clear and suggest a fix.'], ['Provide help', 'Searchable, contextual help.']].forEach(([t, d]) => GLOSS(t, d, 3));
[['Guided tour on install → goal?', 'Learnability.'], ['Saved addresses for quick checkout → goal?', 'Efficiency.'], ['No autosave, draft lost → goal missing?', 'Safety.'], ['Forget after months away → goal?', 'Memorability.'], ['Which is NOT a usability goal: Novelty or Learnability?', 'Novelty.'],
 ['Hand-drawn screens on separate papers?', 'Paper prototype.'], ['One comic: setting, sequence, satisfaction?', 'Storyboard.'], ['Clickable PowerPoint images?', 'Digital mock-up (per the 2025 T2 key).'], ['Figma screens with data entry and workflows?', 'Interactive prototype.'],
 ['Browse without login?', 'Freedom.'], ['Menus for novices, Ctrl+C for experts?', 'Flexibility.'], ['Calendar does not mark holidays → missing?', 'Prevent errors.'], ['No live order tracking → missing?', 'Show status.'], ['IDE suggests fixes after a syntax error (official key)?', 'Support error recovery.'], ['Feedback group?', 'Show status, prevent errors, error recovery, help.']].forEach(([f, b]) => CARD(f, b, 3));
