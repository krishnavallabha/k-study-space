/* ===================== SE WEEK 5 — Software design ===================== */
WEEK({ course: 'cs3001', n: 5, title: 'Software Design',
  blurb: 'Turn requirements into a blueprint. Design produces components, interfaces, data structures and algorithms; a good design is correct, efficient, maintainable and understandable. Keep each module focused (high cohesion) and modules independent (low coupling); know the five cohesion and four coupling types; model classes and their relationships, and the four UML views.',
  topics: [
    { title: '5.1 Design outcomes and qualities', cs: ['design-outcomes'] },
    { title: '5.2 Modularity: cohesion and coupling', cs: ['coupling-cohesion', 'cohesion-types', 'coupling-types'] },
    { title: '5.3 Object-oriented design and class relationships', cs: ['class-relationships'] },
    { title: '5.4 UML', cs: ['uml'] }] });

/* ---------------- 5.1 Design outcomes ---------------- */
C({ id: 'design-outcomes', week: 5, title: 'Outcomes of design and qualities of a good design', pri: 'Medium', prereq: ['components'],
  src: 'Revision notes W5 §5.1 · Study guide ch.5 §5.1 · PYQs 2024 T2 Q8, 2024 T3 Q10, 2025 T2 Q139, 2025 T3 Q12',
  oneLine: 'Four outcomes: components (do a well-defined task), interfaces (let components communicate), data structures (store and manage data), algorithms (implement each component). Four qualities: correctness, efficiency, maintainability, understandability.',
  misShort: 'Calling “communication between components” a component, or memory optimisation “maintainability”.',
  intu: R`<p>An architect’s drawing of a house shows rooms, doors between rooms, where the water tank goes, and how each room is built.</p>
<p>A software design shows the same four things.</p>
<p><b>Components</b> are the rooms — each with one well-defined job: payments, catalogue, inventory.</p>
<p><b>Interfaces</b> are the doors — how one component talks to another.</p>
<p><b>Data structures</b> are the storage — how data is kept and managed.</p>
<p><b>Algorithms</b> are the building instructions for each component.</p>
<p>And a good design, like a good house plan, is correct, uses resources efficiently, is easy to change later, and is understandable by everyone who builds it.</p>`,
  why: R`<ul><li>Outcome definitions: 2024 T2 Q8 (interface), 2024 T3 Q10 (four-way match), 2025 T3 Q12 (grouping functionality into modules = components).</li><li>Qualities: 2025 T2 Q139 (optimise memory for low-end devices = efficiency).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Components</b> — modules designed to accomplish a well-defined task.',
    '<b>Interfaces</b> — define how components communicate with each other.',
    '<b>Data structures</b> — designed for storing and managing data.',
    '<b>Algorithms</b> — required to implement the individual components.',
    'Qualities of good design: <b>correctness</b> (implements all required functionality correctly); <b>efficiency</b> (good use of time, space and cost); <b>maintainability</b> (easy to change and update); <b>understandability</b> (the whole team can understand it, not only its author).']))
    + '<p><b>In words:</b> rooms, doors, storage, instructions — built correctly, cheaply, changeably and clearly.</p>',
  vis: M.table(['Outcome', 'What it is', 'Seller-portal example'], [['Components', 'accomplish a well-defined task', 'Inventory, Payments, Catalogue modules'], ['Interfaces', 'how components communicate', 'Payments exposes pay(orderId, amount)'], ['Data structures', 'store and manage data', 'orders table; product dictionary'], ['Algorithms', 'implement each component', 'the steps of the recommendation logic']], 'The four outcomes of the design process.'),
  ex: [
    M.ex('Introductory', R`<p>A team groups inventory management, payment processing and catalogue management into separate modules. Which design aspect?</p>`,
      R`<p>Grouping related functionality into modules with well-defined tasks → <b>components</b> (2025 T3 Q12).</p><p><b>Now suppose</b> the team instead defines exactly which functions Payments exposes and what each returns. That is about communication between modules → <b>interfaces</b> (2024 T2 Q8).</p>`),
    M.ex('Standard', R`<p>Match 1 Components, 2 Interfaces, 3 Data structures, 4 Algorithms with A storing and managing data, B accomplish well-defined tasks, C required to implement individual components, D define how components communicate.</p>`,
      R`<p>1-B, 2-D, 3-A, 4-C (2024 T3 Q10). The near-misses swap A and C (both sound like “inside a component”).</p>`),
    M.ex('Exam-level', R`<p>A mobile game for low-end devices restricts image resolution and reuses textures to save memory. Which quality? And if the priority were “a new developer can read the design in a day”?</p>`,
      R`<p>Saving memory = good use of resources → <b>efficiency</b> (2025 T2 Q139). Readable by the whole team → <b>understandability</b>. Easy to change later → maintainability. Scalability is not one of the four.</p>`)],
  math: M.rule('<p><b>Outcomes:</b> Components (task) · Interfaces (communication) · Data structures (store/manage) · Algorithms (implement components). <b>Qualities:</b> Correct · Efficient · Maintainable · Understandable.</p>')
    + M.why([['Interface = accomplishes a well-defined task', 'that is a component.'], ['Algorithms = store and manage data', 'that is data structures.'], ['Scalability for memory optimisation', 'not in the course’s list; resource use = efficiency.']]),
  conn: R`<p><b>At work:</b> design documents list services (components), API contracts (interfaces), schemas (data structures) and key algorithms.</p><p><b>Earlier:</b> Week 1 introduced components and interfaces; here they become design outcomes.</p><p><b>Next:</b> how to divide into components well — cohesion and coupling.</p>`,
  mis: M.ul(['Interfaces vs components (2024 T2 Q8, 2025 T3 Q12).', 'Data structures vs algorithms in the match (2024 T3 Q10).', 'Maintainability or scalability for memory optimisation (2025 T2 Q139).']),
  exam: R`<p><b>Fast method:</b> task → component; talk → interface; store → data structure; how to compute → algorithm.</p>`
});
Q({ cp: 'design-outcomes', type: 'mcq', diff: 'easy', q: 'Deciding that orders are stored as a hash map keyed by order ID is which design outcome?', opts: ['Component', 'Interface', 'Data structure', 'Algorithm'], ans: 2,
  why: ['Not a module.', 'Not communication.', 'Correct.', 'Not the computing steps.'], sol: 'Storing/managing data → data structure.' });
Q({ cp: 'design-outcomes', type: 'mcq', diff: 'moderate', q: 'A design that only its original author can follow lacks:', opts: ['Correctness', 'Efficiency', 'Understandability', 'Scalability'], ans: 2,
  why: ['It may work correctly.', 'Not about resources.', 'Correct.', 'Not one of the four.'], sol: 'Whole team must understand it.' });
Q({ cp: 'design-outcomes', type: 'mcq', diff: 'moderate', q: 'Adding a new payment method required changing only one module in a day. Which quality does this show?', opts: ['Maintainability', 'Efficiency', 'Correctness', 'Understandability'], ans: 0,
  why: ['Correct: easy to change.', 'Not about resources.', 'Not about getting functionality right.', 'Related, but the evidence is ease of change.'], sol: 'Easy to change → maintainability.' });
Q({ cp: 'design-outcomes', type: 'short', diff: 'easy', q: 'Name the four outcomes of the design process and define each in one line.',
  model: '<p><b>Components</b> — modules that accomplish well-defined tasks. <b>Interfaces</b> — define how components communicate. <b>Data structures</b> — how data is stored and managed. <b>Algorithms</b> — the procedures that implement individual components.</p>' });

/* ---------------- 5.2 Cohesion & coupling (overall) ---------------- */
C({ id: 'coupling-cohesion', week: 5, title: 'High cohesion, low coupling', pri: 'High', prereq: ['design-outcomes'],
  src: 'Revision notes W5 §5.2 · Study guide ch.5 §5.2 · PYQs 2023 T1 Q249, 2023 T2 Q9, 2024 T1 Q37, 2025 T1 Q25, 2025 T3 Q14, 2026 T2 Q6',
  oneLine: 'Cohesion = how well the functions inside one module work toward a single objective (internal). Coupling = how much modules interact/depend on each other (external). Judge them separately; the goal is high cohesion + low coupling.',
  misShort: 'Assuming high cohesion implies low coupling — the papers love “single objective but heavy shared data” = high + high.',
  intu: R`<p>Look at one drawer in a kitchen: if it holds only knives, it is focused. If it holds knives, batteries and birthday candles, it is a mess. That is <b>cohesion</b> — <i>inside</i> one module.</p>
<p>Now look between drawers: if you can cook using one drawer without opening any other, the drawers are independent. If every recipe needs five drawers open at once, they are tangled. That is <b>coupling</b> — <i>between</i> modules.</p>
<p>These are two separate questions. A kitchen can have perfectly focused drawers that are still tangled together.</p>
<p>The question: <b>given a description, is cohesion high or low, and is coupling high or low?</b></p>`,
  why: R`<ul><li>Six papers. Four of them (2023 T2, 2024 T1, 2025 T1, 2026 T2) describe <b>single-objective modules that share a lot of data</b> → high cohesion AND high coupling — the answer most students get wrong.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Cohesion</b> — the degree to which the functions within a module work together toward a single objective. High = focused.',
    '<b>Coupling</b> — the degree of interaction/dependence between modules. High = many shared data and calls; a change in one ripples into others.',
    'Good design: <b>high cohesion + low coupling</b>.',
    'The two are independent axes: judge cohesion from “what each module does” and coupling from “how much modules share or depend on each other”.']))
    + '<p><b>In words:</b> cohesion looks inward, coupling looks outward.</p>',
  vis: M.quad({ x: 'Coupling', y: 'Cohesion', xl: ['low', 'high'], yl: ['high', 'low'], cells: [['IDEAL\nfocused and\nindependent', 'focused but\ntangled\n(shared DB / globals)'], ['unfocused but\nindependent', 'WORST\nunfocused and\ntangled']], good: [0, 0], hl: [0, 1], cap: 'Two separate axes. The papers’ favourite is the top-right box: high cohesion and high coupling.' }),
  ex: [
    M.ex('Introductory', R`<p>Each module of an online medicine app performs a single objective, but modules are highly dependent on each other because they share a large amount of common data. Cohesion? Coupling?</p>`,
      R`<ol><li>Inside each module: a single objective → <b>high cohesion</b>.</li><li>Between modules: heavy sharing → <b>high coupling</b>.</li><li>Answer: high cohesion, highly coupled (2024 T1 Q37; same in 2023 T2 Q9, 2025 T1 Q25, 2026 T2 Q6).</li></ol>
<p><b>Now suppose</b> the modules stop sharing the database and instead call each other’s small, well-defined functions with a few parameters. Cohesion stays high; coupling drops to <b>low</b> — the ideal.</p>`),
    M.ex('Standard', R`<p>A developer changes code in one module and several other modules start failing. Which issue?</p>`,
      R`<p>Changes ripple across modules → <b>high coupling</b> (2025 T3 Q14). Nothing is said about what happens inside each module, so cohesion is not the issue.</p>`),
    M.ex('Exam-level', R`<p>“High cohesion and low coupling” means: (a) varied operations, lots of data exchanged (b) single operation, lots of data exchanged (c) single operation, very low interaction (d) none.</p>`,
      R`<p><b>(c)</b> (2023 T1 Q249). (b) is high cohesion + high coupling; (a) low cohesion + high coupling.</p>`)],
  math: M.rule('<p><b>Cohesion</b> = inside one module (single objective → high). <b>Coupling</b> = between modules (shared data, dependencies → high). Judge separately. Goal: high cohesion + low coupling.</p>')
    + M.why([['“Single objective” → low coupling', 'objective says nothing about sharing; judge coupling from interaction.'], ['Shared database → low cohesion', 'sharing data across modules is coupling, not cohesion.'], ['Ripple failures → poor cohesion', 'ripples between modules are coupling.']]),
  conn: R`<p><b>At work:</b> microservices each owning their own database is a push toward low coupling; “god classes” are low cohesion.</p><p><b>Earlier:</b> interfaces (Week 1) are how coupling is kept low.</p><p><b>Next:</b> the five named cohesion types and four coupling types; Week 8’s SOLID principles are rules for keeping cohesion high and coupling low.</p>`,
  mis: M.ul(['“High cohesion and lowly coupled” for single objective + shared data (2024 T1 Q37, 2025 T1 Q25).', '“Poor data cohesion” for ripple failures (2025 T3 Q14).']),
  exam: R`<p><b>Fast method:</b> read the stem twice. First pass: what does each module do? (one thing → high cohesion). Second pass: how much do modules share or depend on each other? (a lot → high coupling). Then find the option with both words right.</p>`
});
Q({ cp: 'coupling-cohesion', type: 'mcq', diff: 'easy', q: 'Good design aims for:', opts: ['High coupling, high cohesion', 'Low coupling, high cohesion', 'High coupling, low cohesion', 'Low coupling, low cohesion'], ans: 1,
  why: ['Coupling should be low.', 'Correct.', 'Opposite.', 'Cohesion should be high.'], sol: 'Focused modules, few dependencies.' });
Q({ cp: 'coupling-cohesion', type: 'mcq', diff: 'moderate', q: 'A module “Utils” contains date formatting, PDF export and email validation. The modules that use it pass only simple parameters. Cohesion and coupling?', opts: ['Low cohesion, low coupling', 'High cohesion, low coupling', 'Low cohesion, high coupling', 'High cohesion, high coupling'], ans: 0,
  why: ['Correct: unrelated functions; simple parameter passing.', 'The functions are unrelated.', 'Simple parameters keep coupling low.', 'Neither is high.'], sol: 'Judge each axis separately.' });
Q({ cp: 'coupling-cohesion', type: 'mcq', diff: 'hard', q: 'Which change reduces coupling WITHOUT changing cohesion?', opts: ['Merging two modules into one', 'Replacing direct access to another module’s global data with a function call that takes parameters', 'Adding unrelated functions to a module', 'Splitting a module into two halves at random'], ans: 1,
  why: ['Changes both.', 'Correct.', 'Lowers cohesion.', 'Lowers cohesion and may raise coupling.'], sol: 'Narrow, explicit interfaces lower coupling.' });
Q({ cp: 'coupling-cohesion', type: 'short', diff: 'moderate', q: 'Explain why a design can have high cohesion and high coupling at the same time, with an example.',
  model: '<p>Cohesion is about what happens inside one module; coupling is about how modules depend on one another. Each module can be focused on a single objective (high cohesion) while still sharing a lot of data with others (high coupling). Example: Inventory, Payment and Recommendation modules each do one job, but all read and modify the same global product dictionary, so changing its structure breaks all three.</p>' });

/* ---------------- 5.2 Cohesion types ---------------- */
C({ id: 'cohesion-types', week: 5, title: 'The five types of cohesion', pri: 'High', prereq: ['coupling-cohesion'],
  src: 'Revision notes W5 §5.2 · Study guide ch.5 §5.2.2 · PYQs 2023 T1 Q248, 2023 T2 Q10, 2024 T1 Q33, 2024 T2 Q9, 2024 T3 Q9, 2025 T1 Q24, 2026 T1 Q15',
  oneLine: 'Best → worst: Functional (all functions complete one task) > Sequential (output of one is input to the next) > Communicational (functions operate on the same data) > Procedural (executed in order, different purposes) > Coincidental (no meaningful relation).',
  misShort: 'Calling “executed one after another” sequential when there is no output → input chain — that is procedural.',
  intu: R`<p>Three modules, each with four functions.</p>
<p>Module A: <i>clean the audio → remove noise → balance volume → compress</i>. Each step takes the previous step’s output. That chain is <b>sequential</b>.</p>
<p>Module B: <i>push_front, push_back, pop_front, pop_back</i> on one shared linked list. They do not feed each other, but they all work on the same data. That is <b>communicational</b>.</p>
<p>Module C: <i>log in → add product → place order → log out</i>. They run in that order, but each does something unrelated; nothing is passed along. That is <b>procedural</b>.</p>
<p>The question: <b>what binds the functions together — one task, a data chain, shared data, mere order, or nothing?</b></p>`,
  why: R`<ul><li>Seven papers. Sequential keyed three times (output → input), procedural three times (order without shared purpose), communicational once (Deque).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Functional</b> (strongest) — every function in the module contributes to one single task (inventory: view, add, delete items).',
    '<b>Sequential</b> — functions execute in order and the output of one is the input of the next (create order → check availability → place order).',
    '<b>Communicational</b> — functions operate on the same data structure, without a chain (Deque push/pop on one linked list).',
    '<b>Procedural</b> — functions are executed in a sequence but work toward different purposes; no data flows between them (login → add product → place order → logout).',
    '<b>Coincidental</b> (weakest) — functions are grouped with no meaningful relationship.']))
    + '<p><b>In words:</b> one task › data chain › shared data › just the order › nothing.</p>',
  vis: M.ladder([{ t: 'Functional', d: 'all serve one task' }, { t: 'Sequential', d: 'output of one → input of next' }, { t: 'Communicational', d: 'same data structure, no chain' }, { t: 'Procedural', d: 'run in order, different purposes' }, { t: 'Coincidental', d: 'no meaningful relation' }], { top: 'strongest (best)', bottom: 'weakest (worst)', cap: 'The cohesion ladder.' }),
  ex: [
    M.ex('Introductory', R`<p>A music app’s sound-enhancement module applies functions in sequence, each using the output of the previous one as its input. Which cohesion?</p>`,
      R`<p>Output → input chain → <b>sequential</b> (2024 T1 Q33; also 2023 T1 Q248 OrderProcessing).</p><p><b>Now suppose</b> the functions still run one after another, but each does an unrelated job and nothing is passed between them. The chain is gone; only the order remains → <b>procedural</b> (2023 T2 Q10, 2024 T2 Q9).</p>`),
    M.ex('Standard', R`<p>A module Deque has push_back, push_front, pop_back, pop_front on one doubly linked list. Which cohesion?</p>`,
      R`<p>No function feeds another; they all operate on the same list → <b>communicational</b> (2024 T3 Q9).</p>`),
    M.ex('Exam-level', R`<p>An inventory module has UpdateStock(), GenerateInventoryReport(), SendLowStockNotification(). They are loosely related in purpose and are executed one after the other. Which cohesion?</p>`,
      R`<p>Loosely related, distinct tasks, run in order, no output → input chain stated → <b>procedural</b> (2025 T1 Q24).</p><p>Why not communicational? The stem stresses execution order and distinct tasks, not operations on one shared data structure. Why not sequential? No output feeds the next.</p>`)],
  math: M.rule('<p><b>One task → Functional. Output → input → Sequential. Same data → Communicational. Order only → Procedural. Nothing → Coincidental.</b></p>')
    + M.why([['Sequential for “executed one after the other, different purposes”', 'no data chain → procedural.'], ['Procedural for Deque', 'Deque functions share data, not an execution order → communicational.'], ['Coincidental for “one after another”', 'there is a relation (order); coincidental has none.'], ['Functional for 2026 T1 Q15', 'the stem stresses each step depending on the previous one → keyed sequential.']]),
  conn: R`<p><b>At work:</b> data pipelines (ETL stages) are sequential; repository classes around one table are communicational; “helpers.py” is often coincidental.</p><p><b>Earlier:</b> these refine “high vs low cohesion”.</p><p><b>Next:</b> the four coupling types; later the Single Responsibility Principle (Week 8) pushes modules toward functional cohesion.</p>`,
  mis: M.ul(['Sequential vs procedural (2023 T2 Q10, 2024 T2 Q9, 2025 T1 Q24).', 'Procedural for Deque (2024 T3 Q9).', 'Functional for a step-by-step chain (2026 T1 Q15).']),
  exam: R`<p><b>Fast method:</b> ask in order — is there an output → input chain? (sequential). Do they share one data structure? (communicational). Are they only run in order? (procedural). No link at all? (coincidental). All doing one single task? (functional).</p>`
});
Q({ cp: 'cohesion-types', type: 'mcq', diff: 'easy', q: 'A module bundles “print invoice”, “compress image” and “validate PAN number” because they were written by the same intern. Cohesion?', opts: ['Procedural', 'Communicational', 'Coincidental', 'Functional'], ans: 2,
  why: ['No execution order.', 'No shared data.', 'Correct.', 'No single task.'], sol: 'No meaningful relation → coincidental.' });
Q({ cp: 'cohesion-types', type: 'mcq', diff: 'moderate', q: 'A StudentRecord module has addMarks(), computeGPA() and printTranscript(), all reading and writing the same student record but not in a fixed chain. Cohesion?', opts: ['Sequential', 'Communicational', 'Procedural', 'Coincidental'], ans: 1,
  why: ['No output → input chain.', 'Correct: same data.', 'Not defined by order.', 'They are related through data.'], sol: 'Same data → communicational.' });
Q({ cp: 'cohesion-types', type: 'mcq', diff: 'hard', q: 'Rank from strongest to weakest: procedural, functional, coincidental, sequential, communicational.', opts: ['Functional, sequential, communicational, procedural, coincidental', 'Functional, communicational, sequential, procedural, coincidental', 'Sequential, functional, communicational, procedural, coincidental', 'Functional, sequential, procedural, communicational, coincidental'], ans: 0,
  why: ['Correct.', 'Sequential is above communicational.', 'Functional is the strongest.', 'Communicational is above procedural.'], sol: 'F › S › C › P › C.' });
Q({ cp: 'cohesion-types', type: 'short', diff: 'moderate', q: 'Distinguish sequential from procedural cohesion with one example each.',
  model: '<p><b>Sequential:</b> functions run in order AND the output of one is the input of the next, all for one purpose — e.g. read sensor data → filter noise → compute average. <b>Procedural:</b> functions only run in a set order but do unrelated things and pass no data — e.g. log in → add product → place order → log out.</p>' });

/* ---------------- 5.2 Coupling types ---------------- */
C({ id: 'coupling-types', week: 5, title: 'The four types of coupling', pri: 'High', prereq: ['coupling-cohesion'],
  src: 'Revision notes W5 §5.2 · Study guide ch.5 §5.2.1 · PYQs 2025 T2 Q146, 2025 T3 Q13, 2026 T2 Q16',
  oneLine: 'Loosest → tightest: Data (primitive parameters) < Control (a flag decides the other module’s logic) < Common (shared global data) < Content (one module modifies another’s internals).',
  misShort: 'Calling a flag parameter “data coupling” because it is passed as a parameter.',
  intu: R`<p>Two modules, four ways to connect them.</p>
<p>Seller passes a seller ID to Inventory: “show me my products”. Just data → <b>data coupling</b>, the loosest.</p>
<p>Seller passes a flag: “operation = DELETE”. The flag steers what Inventory does inside → <b>control coupling</b>.</p>
<p>Both read and write the same global variable. Change it in one place and both are affected → <b>common coupling</b>.</p>
<p>Seller reaches inside Inventory and changes its private variables directly → <b>content coupling</b>, the tightest.</p>
<p>The question: <b>what crosses the boundary — data, a control flag, a shared global, or a hand inside the other module?</b></p>`,
  why: R`<ul><li>Three recent papers (2025 T2, 2025 T3, 2026 T2) — a new, growing family. Content coupling was keyed twice; control coupling once.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Data coupling</b> (loosest, best) — modules communicate by passing primitive data as parameters: <code>view_inventory(seller_id)</code>.',
    '<b>Control coupling</b> — one module passes data that controls the internal logic of the other: <code>perform_action(OPERATION_FLAG)</code>.',
    '<b>Common coupling</b> — modules share global data that each can read and modify.',
    '<b>Content coupling</b> (tightest, worst) — one module directly accesses or modifies the internal data or implementation of another.']))
    + '<p><b>In words:</b> Data → Control → Common → Content (“Don’t Call Common Code”).</p>',
  vis: M.ladder([{ t: 'Data', d: 'primitive parameters' }, { t: 'Control', d: 'a flag drives the other’s logic' }, { t: 'Common', d: 'shared global data' }, { t: 'Content', d: 'modifies the other’s internals' }], { top: 'loosest (best)', bottom: 'tightest (worst)', cap: 'The coupling ladder.' }),
  ex: [
    M.ex('Introductory', R`<p>Module M1 directly modifies variables inside module M2 by referencing its internal implementation. Which coupling?</p>`,
      R`<p>Reaching into another module’s internals → <b>content coupling</b> (2025 T3 Q13; 2026 T2 Q16).</p><p><b>Now suppose</b> M1 and M2 both read and write a global variable instead. Neither reaches into the other; they meet in shared global space → <b>common coupling</b>.</p>`),
    M.ex('Standard', R`<p>SellerModule calls an InventoryModule function with a variable operationFlag deciding whether to view, add or delete a product. Which coupling?</p>`,
      R`<p>The flag controls the callee’s internal logic → <b>control coupling</b> (2025 T2 Q146). If Seller passed only <code>seller_id</code> to a function that always does one thing, it would be data coupling.</p>`),
    M.ex('Exam-level', R`<p>Three modules all directly modify the same global dictionary of products. Which coupling type, and is overall coupling high or low?</p>`,
      R`<p>Shared global data → <b>common coupling</b>; it is a tight form, so overall coupling is <b>high</b> (2026 T2 Q6 scenario).</p>`)],
  math: M.rule('<p><b>Data</b> (values) &lt; <b>Control</b> (flag) &lt; <b>Common</b> (global) &lt; <b>Content</b> (internals). Lower is better.</p>')
    + M.why([['Data coupling for operationFlag', 'the flag controls the callee’s logic → control.'], ['Common for “modifies variables inside M2”', 'common = shared globals; reaching inside = content.'], ['Control for shared global dictionary', 'nothing steers logic; they share data → common.']]),
  conn: R`<p><b>At work:</b> boolean “mode” parameters are a known smell (control coupling); global state makes testing hard (common coupling).</p><p><b>Earlier:</b> these name the degrees of “high vs low coupling”.</p><p><b>Next:</b> encapsulation (private data, public methods) is the OO defence against content coupling.</p>`,
  mis: M.ul(['Data coupling for a flag (2025 T2 Q146).', 'Common coupling for direct modification of internals (2025 T3 Q13, 2026 T2 Q16).']),
  exam: R`<p><b>Fast method:</b> what crosses the boundary? Plain values → data. A flag that decides behaviour → control. A global → common. Direct access to private internals → content.</p>`
});
Q({ cp: 'coupling-types', type: 'mcq', diff: 'easy', q: '<code>calculate_tax(amount, rate)</code> is called by Billing and returns a number. Coupling?', opts: ['Data', 'Control', 'Common', 'Content'], ans: 0,
  why: ['Correct: plain values.', 'No flag.', 'No globals.', 'No internals accessed.'], sol: 'Primitive parameters → data.' });
Q({ cp: 'coupling-types', type: 'mcq', diff: 'moderate', q: '<code>export(report, mode)</code>, where mode = "pdf" | "csv" | "xlsx" selects completely different code paths inside export(). Coupling?', opts: ['Data', 'Control', 'Common', 'Content'], ans: 1,
  why: ['The value controls logic.', 'Correct.', 'No globals.', 'No internals accessed.'], sol: 'A selector flag → control.' });
Q({ cp: 'coupling-types', type: 'mcq', diff: 'moderate', q: 'Order the coupling types from best to worst.', opts: ['Data, Control, Common, Content', 'Control, Data, Common, Content', 'Data, Common, Control, Content', 'Content, Common, Control, Data'], ans: 0,
  why: ['Correct.', 'Data is best.', 'Control is looser than common.', 'Reversed.'], sol: 'Data → Control → Common → Content.' });
Q({ cp: 'coupling-types', type: 'short', diff: 'moderate', q: 'Define common and content coupling and explain why content coupling is the worst.',
  model: '<p><b>Common coupling:</b> modules share global data that each can read and modify. <b>Content coupling:</b> one module directly accesses or modifies another module’s internal data or implementation. Content is worst because any internal change in the second module can silently break the first, and it violates encapsulation — the modules cannot be understood, tested or changed independently.</p>' });

/* ---------------- 5.3 OO & class relationships ---------------- */
C({ id: 'class-relationships', week: 5, title: 'Objects, encapsulation and class relationships', pri: 'High', prereq: ['coupling-types'],
  src: 'Revision notes W5 §5.3–5.4 · Study guide ch.5 §5.3–5.4 · PYQs 2023 T1 Q247, 2023 T2 Q21, 2023 T3 Q194, 2024 T1 Q42, 2024 T2 Q14, 2025 T2 Q147, 2025 T3 Q15, 2026 T1 Q16, Q18, 2026 T2 Q22',
  oneLine: 'Association = one class uses/calls another (plain arrow). Composition = whole/part, “has-a” (filled diamond at the whole). Inheritance = “is-a” (hollow triangle at the parent). Dependency = a change in one forces a change in the other (dashed arrow; the course uses it for implementing an interface).',
  misShort: 'Reading the diamond end as the part, or calling “Seller calls Inventory” inheritance.',
  intu: R`<p>An online shop has a <i>Customer</i>, an <i>Order</i>, <i>Items</i> and an <i>ExpressOrder</i>.</p>
<p>A Customer <b>places</b> Orders — they work together, but each exists on its own. That is <b>association</b>.</p>
<p>An Order <b>contains</b> Items — the Order is the whole, the Items are its parts. That is <b>composition</b> (“has-a”).</p>
<p>An ExpressOrder <b>is a</b> special kind of Order — it inherits everything and adds a delivery charge. That is <b>inheritance</b> (“is-a”).</p>
<p>And if a class must change whenever some interface it implements changes, it <b>depends</b> on that interface: <b>dependency</b>.</p>
<p>Underneath it all, each object hides its data and exposes methods — <b>encapsulation</b>.</p>
<p>The question: <b>given a diagram or a story, which relationship holds between which pair?</b></p>`,
  why: R`<ul><li>Ten papers — the most frequent Week 5 family, mostly as MSQs over a class diagram.</li><li>The Customer–Order–Item–ExpressOrder diagram appears in 2025 T3 and 2026 T2; Payment–Order–Item with UPI/Card subclasses in 2023 T2 and 2023 T3.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Object</b> — a real-world entity with data (attributes) and behaviour (methods). <b>Class</b> — a template for objects with similar attributes and methods.',
    '<b>Encapsulation</b> — bundling data with the methods that operate on it; data is hidden (private) and accessed only through the object’s own methods.',
    '<b>Association</b> — classes take each other’s help: one uses or calls the other (Seller calls Inventory.viewInventory()). UML: a solid line, usually with an open arrow.',
    '<b>Composition</b> — a whole/part relationship: the whole “has” the parts (Order has Items; Catalogue has Products). UML: filled diamond at the <i>whole</i>.',
    '<b>Inheritance</b> — a class is a specialised kind of another (“is-a”): Book is-a Product. UML: hollow triangle pointing to the <i>parent</i>.',
    '<b>Dependency</b> — a change in one class forces a change in another; the course keys “a class implements an interface” as dependency. UML: dashed arrow.']))
    + '<p><b>In words:</b> uses → association; has-a → composition; is-a → inheritance; breaks-when-it-changes → dependency.</p>',
  vis: M.uml([
    { id: 'C', name: 'Customer', attrs: ['- custID: Integer'], ops: ['+ placeOrder(): void'], x: 10, y: 20 },
    { id: 'O', name: 'Order', attrs: ['- orderID: Integer'], ops: ['+ calculateBill(): Double'], x: 230, y: 20 },
    { id: 'I', name: 'Item', attrs: ['- price: Double'], x: 460, y: 20 },
    { id: 'E', name: 'ExpressOrder', attrs: ['- deliveryCharge: Double'], x: 220, y: 170 }],
    [{ a: 'C', b: 'O', k: 'assoc', lab: 'places' }, { a: 'I', b: 'O', k: 'comp', lab: 'part of' }, { a: 'E', b: 'O', k: 'inh', lab: 'is-a' }],
    { cap: 'Customer → Order: association. Order ◆— Item: composition (diamond at the whole). ExpressOrder ▷ Order: inheritance (triangle at the parent).' }),
  ex: [
    M.ex('Introductory', R`<p>In the diagram above, which are true? (a) association Customer–Order (b) composition Order–Item (c) inheritance Order–ExpressOrder (d) aggregation Customer–Order (e) composition Customer–Order (f) inheritance Item–Order.</p>`,
      R`<ol><li>Customer → Order: plain arrow → association ✔ (a).</li><li>Filled diamond at Order, line to Item → composition ✔ (b).</li><li>Hollow triangle from ExpressOrder to Order → inheritance ✔ (c).</li><li>(d), (e), (f) misread the arrows. Answer (a), (b), (c) — 2025 T3 Q15; 2026 T2 Q22.</li></ol>
<p><b>Now suppose</b> the diamond were hollow. UML calls that aggregation (a weaker whole/part). The course teaches composition only and treats “aggregation” options as distractors — so read the diamond’s fill carefully, but expect composition to be the keyed answer.</p>`),
    M.ex('Standard', R`<p>Seller uses Inventory’s viewInventory(sellerID); Inventory implements an interface InventoryInterface. Which relationships?</p>`,
      R`<p>Seller–Inventory: one calls the other → <b>association</b>. Inventory–InventoryInterface: a change in the interface forces a change in Inventory → <b>dependency</b> (2025 T2 Q147; same idea in 2024 T2 Q14 for BankAccount and iTransaction).</p><p>Standard UML calls implementing an interface “realization”; the course keys it as dependency (see Sources &amp; discrepancies).</p>`),
    M.ex('Exam-level', R`<p>A Shape class has two types, Rectangle and Circle; each Shape has several Points. Which are correct: (a) Rectangle–Shape inheritance (b) Point–Shape inheritance (c) Rectangle–Shape composition (d) Point–Shape composition? Also: a class with private price and name, accessible only via getPrice() and setPrice() illustrates which concept?</p>`,
      R`<p>(a) ✔ Rectangle is-a Shape. (d) ✔ Shape has Points. Answer (a), (d) — 2024 T1 Q42.</p><p>Private data + access only through methods → <b>encapsulation</b> (2026 T1 Q18).</p>`)],
  math: M.rule('<p><b>Uses/calls → Association (→). Has-a / part-of → Composition (◆ at the whole). Is-a → Inheritance (▷ at the parent). Change forces change / implements an interface → Dependency (- - →). Private data + public methods → Encapsulation.</b></p>')
    + M.why([['Inheritance for “Seller uses Inventory”', 'using is association.'], ['Composition for Payment–UPIPayment', 'the triangle means is-a → inheritance.'], ['Composition between Customer and Order', 'the plain arrow means association.'], ['“Book has-a Product” when Book inherits from Product', 'inheritance is is-a.']]),
  conn: R`<p><b>At work:</b> “favour composition over inheritance” is a classic design guideline; class diagrams in design reviews use exactly these symbols.</p><p><b>Earlier:</b> encapsulation prevents content coupling.</p><p><b>Next:</b> UML’s other views; Week 8’s Liskov principle governs when inheritance is safe.</p>`,
  mis: M.ul(['Composition for Payment–UPIPayment (2023 T2 Q21, 2023 T3 Q194).', 'Inheritance for Order–Item (same papers).', 'Aggregation/composition for Customer–Order (2025 T3 Q15).', 'Point inherits Shape (2024 T1 Q42).', '“BankAccount is composition of CurrentAccount…” (2024 T2 Q14).']),
  exam: R`<p><b>Fast method:</b> for each option, find the pair in the diagram and read the end symbol: open arrow (association), filled diamond (composition, at the whole), hollow triangle (inheritance, at the parent), dashed arrow (dependency). For prose, translate the verb: uses / has / is a / must change when.</p>`
});
Q({ cp: 'class-relationships', type: 'mcq', diff: 'easy', q: 'A Car has an Engine that does not exist outside the car. Relationship from Car to Engine?', opts: ['Inheritance', 'Composition', 'Association', 'Dependency'], ans: 1,
  why: ['An engine is not a car.', 'Correct: whole/part.', 'Stronger than mere use.', 'Not about change propagation.'], sol: 'Has-a / part-of → composition.' });
Q({ cp: 'class-relationships', type: 'mcq', diff: 'moderate', q: 'In a UML class diagram, a hollow triangle on the line between SavingsAccount and Account, at the Account end, means:', opts: ['Account is-a SavingsAccount', 'SavingsAccount is-a Account', 'Account has SavingsAccounts', 'SavingsAccount uses Account'], ans: 1,
  why: ['Reversed.', 'Correct: the triangle points to the parent.', 'That is a diamond.', 'That is an association arrow.'], sol: 'Triangle at the parent.' });
Q({ cp: 'class-relationships', type: 'msq', diff: 'hard', q: 'Library system: Library contains Books (a Book record is deleted with the library’s catalogue); Member borrows Books; EBook is a special kind of Book; Book implements interface Searchable. Select ALL correct.', opts: ['Library–Book composition', 'Member–Book association', 'EBook–Book inheritance', 'Book–Searchable composition'], ans: [0, 1, 2],
  why: ['Whole/part.', 'Uses.', 'Is-a.', 'Implementing an interface is keyed as dependency in this course.'], sol: 'Has → composition; uses → association; is-a → inheritance; implements → dependency.' });
Q({ cp: 'class-relationships', type: 'short', diff: 'moderate', q: 'Define encapsulation and explain how it helps keep coupling low.',
  model: '<p>Encapsulation bundles an object’s data with the methods that operate on it and hides the data (private), so other objects can access it only through those methods. Other modules therefore cannot reach in and change internals directly (content coupling); they depend only on the public methods, so the internal representation can change without breaking them.</p>' });

/* ---------------- 5.4 UML ---------------- */
C({ id: 'uml', week: 5, title: 'UML views: class, state machine, activity, interaction (sequence)', pri: 'High', prereq: ['class-relationships'],
  src: 'Revision notes W5 §5.5 · Study guide ch.5 §5.5 · PYQs 2023 T1 Q241, 2023 T3 Q188–190, 2024 T1 Q32, 2024 T2 Q17, 2024 T3 Q5, 2025 T1 Q26, 2026 T1 Q17',
  oneLine: 'Class diagram = static structure. State machine = states of one object and transitions. Activity = flow of control among activities. Interaction / sequence = messages exchanged between parts of the system over time.',
  misShort: 'Picking activity view for “sequence of messages” — that is the interaction (sequence) view.',
  intu: R`<p>You can describe one ATM four ways.</p>
<p>What classes exist and how they relate: Account, Card, Transaction. That is the <b>class diagram</b> — the structure.</p>
<p>What states a card session goes through: idle → card inserted → PIN verified → dispensing → idle. That is the <b>state machine</b>.</p>
<p>The flowchart of withdrawing cash: check balance → if enough, dispense, else show error. That is the <b>activity</b> view — flow of control.</p>
<p>Who sends which message to whom, in time order: User → ATM: insert card; ATM → Bank: verify; Bank → ATM: OK. That is the <b>interaction</b> view, drawn as a <b>sequence diagram</b>.</p>
<p>The papers ask one thing almost word for word: <b>which view models the sequence of messages exchanged between parts of the system?</b> Interaction.</p>`,
  why: R`<ul><li>Nine questions in seven papers. “Sequence of message exchanges” → interaction view / sequence diagram appears five times.</li><li>2024 T3 Q5: flow of control → activity. 2024 T2 Q17: four-way match. 2023 T3 adds component diagrams and VeriSIM.</li></ul>`,
  formal: M.def(M.lines([
    '<b>UML</b> (Unified Modelling Language) — a standard notation for representing a software design through multiple views. <b>Modelling</b> — creating an external representation of the system to be built.',
    'Purposes: communicate and generate ideas; guide development; generate code.',
    '<b>Structural view — class diagram:</b> classes, attributes, operations and relationships (the structure of the system).',
    '<b>Behavioural — state machine view:</b> the different states of an object of a class and the transitions between them.',
    '<b>Behavioural — activity view:</b> the flow of control among computational activities.',
    '<b>Behavioural — interaction view (sequence diagram):</b> the sequence of messages exchanged among parts of the system / objects over time.',
    '<b>Component diagram</b> — a component represents a module, package or subsystem encapsulating related functionality.',
    '<b>VeriSIM</b> — a learning tool that helps developers understand and comprehend designs by simulating/verifying them (e.g. class and sequence diagrams).']))
    + '<p><b>In words:</b> structure · states · control flow · messages over time.</p>',
  vis: M.table(['Phrase in the stem', 'View / diagram'], [['describes the structure of the system', 'Class diagram (structural)'], ['different states of an object of a class', 'State machine view'], ['flow of control among computational activities', 'Activity view'], ['sequence of messages exchanged among parts; interactions between objects over time', 'Interaction view / sequence diagram'], ['module, package or subsystem', 'Component (in a component diagram)']], 'Phrase → view. The papers reuse these phrases verbatim.'),
  ex: [
    M.ex('Introductory', R`<p>Which UML view presents the sequence of messages exchanged between different parts of the system?</p>`,
      R`<p><b>Interaction view</b> (2023 T1 Q241, 2024 T1 Q32, 2025 T1 Q26); drawn as a <b>sequence diagram</b> (2023 T3 Q189, 2026 T1 Q17).</p><p><b>Now suppose</b> the stem says “flow of control among computational activities”. Messages are gone; it is a flowchart → <b>activity view</b> (2024 T3 Q5).</p>`),
    M.ex('Standard', R`<p>Match A class diagram, B interaction diagram, C state machine diagram, D activity diagram with 1 flow of control among activities, 2 sequence of message exchanges, 3 structure of the system, 4 different states of an object.</p>`,
      R`<p>A-3, B-2, C-4, D-1 (2024 T2 Q17).</p>`),
    M.ex('Exam-level', R`<p>In a component diagram, what does a component represent? And what is VeriSIM’s primary goal?</p>`,
      R`<p>A component is a <b>module, package or subsystem that encapsulates related functionality</b> (2023 T3 Q190) — not an instance of a class. VeriSIM’s goal is to <b>help developers understand and comprehend complex software designs</b> (2023 T3 Q188) — not to generate code or fix flaws automatically.</p>`)],
  math: M.rule('<p><b>Class = structure. State machine = states of an object. Activity = flow of control. Interaction / sequence = messages over time.</b></p>')
    + M.why([['Activity view for message sequences', 'activity is control flow between activities, not messages between parts.'], ['State machine for interactions', 'it follows one object’s states.'], ['Class diagram for interactions', 'it is static structure.'], ['Component = an instance of a class', 'that is an object; a component is a module/package/subsystem.']]),
  conn: R`<p><b>At work:</b> sequence diagrams document API call flows; state machines model order or payment statuses.</p><p><b>Earlier:</b> class diagrams draw the relationships of 5.3.</p><p><b>Next:</b> Week 7 turns designs into code; Week 8 groups components into architectures.</p>`,
  mis: M.ul(['Activity view for message sequences (2023 T1 Q241, 2024 T1 Q32 list it).', 'Interaction view for flow of control (2024 T3 Q5).', '“Automatically generate code” for VeriSIM (2023 T3 Q188).']),
  exam: R`<p><b>Fast method:</b> “messages / interactions / over time” → interaction (sequence). “Flow of control” → activity. “States” → state machine. “Structure” → class.</p>`
});
Q({ cp: 'uml', type: 'mcq', diff: 'easy', q: 'An order moves through Placed → Paid → Shipped → Delivered (or Cancelled). Which UML view models this best?', opts: ['Class diagram', 'State machine view', 'Activity view', 'Interaction view'], ans: 1,
  why: ['Static structure.', 'Correct: states of one object.', 'Control flow between activities.', 'Messages between parts.'], sol: 'States + transitions → state machine.' });
Q({ cp: 'uml', type: 'mcq', diff: 'moderate', q: 'A diagram shows Browser → API: POST /login; API → AuthService: verify(); AuthService → API: token; API → Browser: 200 OK, top to bottom in time order. This is a:', opts: ['Sequence diagram', 'Activity diagram', 'Class diagram', 'State machine diagram'], ans: 0,
  why: ['Correct.', 'No control-flow branches between activities.', 'Not structure.', 'Not one object’s states.'], sol: 'Messages over time → sequence diagram.' });
Q({ cp: 'uml', type: 'msq', diff: 'moderate', q: 'Select ALL behavioural UML views.', opts: ['Class diagram', 'State machine view', 'Activity view', 'Interaction view'], ans: [1, 2, 3],
  why: ['Structural.', 'Behavioural.', 'Behavioural.', 'Behavioural.'], sol: 'One structural view, three behavioural.' });
Q({ cp: 'uml', type: 'short', diff: 'easy', q: 'Give the three purposes of UML modelling.',
  model: '<p>(1) To communicate ideas and generate design ideas among the team; (2) to guide development, acting as a roadmap for implementation; (3) to generate code, since models map onto implementation classes.</p>' });

/* ---------------- Week 5 harder variations ---------------- */
VQ({ kind: 'scenario', type: 'mcq', q: 'A ride app’s design specifies: (i) a Fare module; (ii) Fare exposes <code>quote(pickup, drop)</code> to the Booking module; (iii) rides kept in a priority queue by pickup time; (iv) the step-by-step surge-pricing computation. Which outcomes, in order?', opts: ['Component, Interface, Data structure, Algorithm', 'Component, Algorithm, Data structure, Interface', 'Interface, Component, Algorithm, Data structure', 'Component, Interface, Algorithm, Data structure'], ans: 0,
  why: ['Correct.', '(ii) and (iv) swapped.', '(i) and (ii) swapped; (iii) and (iv) swapped.', '(iii) and (iv) swapped.'],
  sol: 'Task → component; communication → interface; storage → data structure; procedure → algorithm.', trap: 'Option 4 differs only in the last two.' }, ['cs3001-2024T3-10', 'cs3001-2024T2-8', 'cs3001-2025T3-12']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A banking app’s design lets a new developer trace any feature from the documents in an afternoon, but the app is slow on old phones. Which quality is present, and which is lacking?', opts: ['Understandability present; efficiency lacking', 'Maintainability present; correctness lacking', 'Efficiency present; understandability lacking', 'Correctness present; maintainability lacking'], ans: 0,
  why: ['Correct.', 'Nothing says features are wrong.', 'Reversed.', 'Nothing about changes.'], sol: 'Readable by the team → understandability; slow on low-end devices → efficiency.', trap: 'Maintainability is the natural decoy for “easy for a developer”.' }, ['cs3001-2025T2-139']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Hospital system: Billing, Pharmacy and Lab modules each do exactly one job, but all three read and write the same patients table, and a schema change forces edits in all three. Which is true?', opts: ['High cohesion, low coupling', 'High cohesion, high coupling', 'Low cohesion, high coupling', 'Low cohesion, low coupling'], ans: 1,
  why: ['The shared table makes coupling high.', 'Correct.', 'Each module has one job.', 'Neither.'], sol: 'Judge each axis separately.', trap: 'The “ideal” answer (option 1) tempts because the modules are well focused.' }, ['cs3001-2023T2-9', 'cs3001-2024T1-37', 'cs3001-2025T1-25', 'cs3001-2026T2-6']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement is <b>NOT</b> correct?', opts: ['High cohesion means a module’s functions work toward a single objective', 'High coupling means a change in one module tends to break others', 'High cohesion guarantees low coupling', 'Good design aims for high cohesion and low coupling'], ans: 2,
  why: ['Correct statement.', 'Correct statement.', 'Not correct: they are independent axes.', 'Correct statement.'], sol: 'Cohesion and coupling are independent.', trap: 'Options 1 and 4 together make option 3 sound like a consequence.' }, ['cs3001-2023T1-249', 'cs3001-2025T3-14']);
VQ({ kind: 'chained', type: 'mcq', q: 'Classify: (i) parse_csv → clean_rows → compute_totals, each using the previous output; (ii) open_app → sync_contacts → show_ads, each unrelated and nothing passed; (iii) enqueue, dequeue, peek on one shared queue.', opts: ['Sequential, Procedural, Communicational', 'Procedural, Sequential, Communicational', 'Sequential, Coincidental, Functional', 'Functional, Procedural, Sequential'], ans: 0,
  why: ['Correct.', '(i) and (ii) swapped.', '(ii) has an execution order, so not coincidental; (iii) shares data → communicational.', '(i) is a data chain; (iii) has no chain.'], sol: 'Chain → sequential; order only → procedural; shared data → communicational.', trap: 'Swapped first two.' }, ['cs3001-2023T1-248', 'cs3001-2023T2-10', 'cs3001-2024T2-9', 'cs3001-2024T3-9', 'cs3001-2024T1-33']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A module ReportJob runs fetchSales(), then emailHR(), then rotateLogs() every night, in that order. The three tasks are unrelated and pass nothing to each other. Cohesion?', opts: ['Sequential', 'Procedural', 'Communicational', 'Functional'], ans: 1,
  why: ['No output → input chain.', 'Correct: related only by execution order.', 'No shared data structure.', 'Not one task.'], sol: 'Order only → procedural.', trap: '“Then … then” sounds sequential.' }, ['cs3001-2025T1-24', 'cs3001-2026T1-15']);
VQ({ kind: 'counting', type: 'num', q: 'How many of these are control coupling? (1) <code>resize(img, 800)</code> (2) <code>save(doc, overwrite=True)</code> where the flag switches between two code paths (3) two modules read/write <code>CONFIG</code>, a global dict (4) <code>process(order, mode="refund")</code> selecting refund vs charge logic (5) module A sets <code>B._cache = []</code> directly.', ans: 2, tol: 0,
  sol: '(2) and (4) are control. (1) data; (3) common; (5) content.', trap: 'A boolean parameter looks like plain data.' }, ['cs3001-2025T2-146']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which pair is <b>INCORRECTLY</b> matched?', opts: ['Passing primitive values as parameters — data coupling', 'Sharing a global variable — common coupling', 'Directly modifying another module’s private fields — common coupling', 'Passing a flag that selects the callee’s logic — control coupling'], ans: 2,
  why: ['Correct pair.', 'Correct pair.', 'Incorrect: that is content coupling.', 'Correct pair.'], sol: 'Internals → content.', trap: 'Both common and content involve “shared” data.' }, ['cs3001-2025T3-13', 'cs3001-2026T2-16']);
VQ({ kind: 'scenario', type: 'msq', q: 'A food app: Restaurant has Menu (the Menu exists only as part of its Restaurant); Customer uses Restaurant.search(); VegRestaurant is a special kind of Restaurant; Restaurant implements interface Rateable, so any change to Rateable forces changes in Restaurant. Select ALL correct.', opts: ['Restaurant–Menu composition', 'Customer–Restaurant association', 'VegRestaurant–Restaurant inheritance', 'Restaurant–Rateable dependency'], ans: [0, 1, 2, 3],
  why: ['Whole/part.', 'Uses.', 'Is-a.', 'Keyed as dependency in this course.'], sol: 'All four relationships appear once.', trap: 'Expecting at least one false option in an MSQ.' }, ['cs3001-2025T2-147', 'cs3001-2024T2-14', 'cs3001-2026T2-22']);
VQ({ kind: 'nearmiss', type: 'msq', q: 'Class diagram: Invoice ◆—— LineItem (filled diamond at Invoice); Customer ——> Invoice (plain arrow); GSTInvoice ——▷ Invoice (hollow triangle at Invoice). Select ALL true.', opts: ['LineItem is composed into Invoice (Invoice is the whole)', 'Customer and Invoice have an association', 'Invoice inherits from GSTInvoice', 'GSTInvoice is-a Invoice'], ans: [0, 1, 3],
  why: ['Diamond at the whole.', 'Plain arrow.', 'Reversed: the triangle points at the parent.', 'Correct reading of the triangle.'], sol: 'Read the end symbols carefully.', trap: 'Option 3 reverses the inheritance direction.' }, ['cs3001-2023T1-247', 'cs3001-2023T2-21', 'cs3001-2023T3-194', 'cs3001-2025T3-15']);
VQ({ kind: 'negated', type: 'mcq', q: 'Shape has subtypes Rectangle and Circle; each Shape owns several Point objects. Which statement is <b>NOT</b> correct?', opts: ['Rectangle is-a Shape', 'Shape has-a Point (composition)', 'Point is-a Shape', 'Circle inherits from Shape'], ans: 2,
  why: ['Correct.', 'Correct.', 'Not correct: a Point is a part of a Shape, not a kind of Shape.', 'Correct.'], sol: 'Part-of ≠ is-a.', trap: 'All four mention Shape.' }, ['cs3001-2024T1-42', 'cs3001-2026T1-16']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A class Wallet keeps <code>balance</code> private and exposes only <code>deposit()</code> and <code>withdraw()</code>, which validate amounts. Which concept is this, and which coupling does it prevent?', opts: ['Encapsulation; content coupling', 'Inheritance; control coupling', 'Encapsulation; data coupling', 'Association; common coupling'], ans: 0,
  why: ['Correct.', 'No is-a relationship.', 'Data coupling is the good kind; it is not prevented.', 'Not association.'], sol: 'Private data + methods = encapsulation; stops other modules modifying internals.', trap: 'Option 3 has the right concept.' }, ['cs3001-2026T1-18']);
VQ({ kind: 'chained', type: 'mcq', q: 'Match: (i) the states of a Payment object (ii) messages between App, Gateway and Bank over time (iii) the flowchart of the refund procedure (iv) the classes and their relationships.', opts: ['State machine, Interaction, Activity, Class', 'Activity, Interaction, State machine, Class', 'State machine, Activity, Interaction, Class', 'Class, Interaction, Activity, State machine'], ans: 0,
  why: ['Correct.', '(i) and (iii) swapped.', '(ii) and (iii) swapped.', '(i) and (iv) swapped.'], sol: 'States · messages · control flow · structure.', trap: 'Interaction vs activity swap.' }, ['cs3001-2024T2-17', 'cs3001-2024T3-5', 'cs3001-2023T1-241', 'cs3001-2024T1-32', 'cs3001-2025T1-26']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>NOT</b> a correct statement about UML?', opts: ['A sequence diagram shows interactions between objects over time', 'A component in a component diagram is a module, package or subsystem', 'VeriSIM’s main purpose is to automatically generate code from diagrams', 'A class diagram is a structural view'], ans: 2,
  why: ['Correct.', 'Correct.', 'Not correct: VeriSIM helps developers understand and verify designs.', 'Correct.'], sol: 'VeriSIM = comprehension aid.', trap: 'UML can be used to generate code, which makes option 3 plausible.' }, ['cs3001-2023T3-188', 'cs3001-2023T3-189', 'cs3001-2023T3-190', 'cs3001-2026T1-17']);

[['Component (design)', 'A module that accomplishes a well-defined task.'], ['Interface (design)', 'Defines how components communicate.'], ['Data structure (design)', 'How data is stored and managed.'], ['Algorithm (design)', 'The procedure that implements a component.'],
 ['Correctness', 'Correctly implements all required functionality.'], ['Efficiency (design)', 'Good use of time, space and cost.'], ['Maintainability', 'Easy to change and update.'], ['Understandability', 'Understandable by the whole team.'],
 ['Cohesion', 'How well the functions inside a module work toward a single objective.'], ['Coupling', 'Degree of interaction/dependence between modules.'],
 ['Functional cohesion', 'All functions complete one task.'], ['Sequential cohesion', 'Output of one function is the input of the next.'], ['Communicational cohesion', 'Functions operate on the same data structure.'], ['Procedural cohesion', 'Functions run in order but have different purposes.'], ['Coincidental cohesion', 'No meaningful relation.'],
 ['Data coupling', 'Primitive data passed as parameters.'], ['Control coupling', 'A flag controls the other module’s logic.'], ['Common coupling', 'Modules share global data.'], ['Content coupling', 'One module modifies another’s internals.'],
 ['Encapsulation', 'Data bundled with methods; data hidden and accessed only via methods.'], ['Association', 'One class uses/calls another.'], ['Composition', 'Whole/part (“has-a”); filled diamond at the whole.'], ['Inheritance', '“Is-a”; hollow triangle at the parent.'], ['Dependency', 'A change in one class forces a change in another.'],
 ['UML', 'Unified Modelling Language: standard notation for design views.'], ['Class diagram', 'Static structure: classes, attributes, operations, relationships.'], ['State machine view', 'States of an object and transitions.'], ['Activity view', 'Flow of control among activities.'], ['Interaction view / sequence diagram', 'Sequence of messages exchanged over time.'], ['VeriSIM', 'Tool that helps understand and verify designs by simulation.']].forEach(([t, d]) => GLOSS(t, d, 5));
[['Four design outcomes?', 'Components, interfaces, data structures, algorithms.'], ['Interface (design) = ?', 'How components communicate.'], ['Save memory on low-end devices → quality?', 'Efficiency.'],
 ['Single objective + shared data?', 'High cohesion AND high coupling.'], ['Change ripples to other modules?', 'High coupling.'], ['Cohesion ladder?', 'Functional › Sequential › Communicational › Procedural › Coincidental.'], ['Output → input chain?', 'Sequential.'], ['Run in order, unrelated purposes?', 'Procedural.'], ['Deque push/pop on one list?', 'Communicational.'],
 ['Coupling ladder?', 'Data › Control › Common › Content (best → worst).'], ['operationFlag decides view/add/delete?', 'Control coupling.'], ['M1 modifies M2’s internals?', 'Content coupling.'],
 ['Filled diamond?', 'Composition, at the whole.'], ['Hollow triangle?', 'Inheritance, at the parent.'], ['Class implements an interface (course key)?', 'Dependency.'], ['Private data via getters/setters?', 'Encapsulation.'],
 ['Sequence of messages between parts?', 'Interaction view / sequence diagram.'], ['Flow of control among activities?', 'Activity view.'], ['States of an object?', 'State machine view.']].forEach(([f, b]) => CARD(f, b, 5));
