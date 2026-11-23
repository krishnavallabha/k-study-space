/* ============================================================
   Software Engineering (cs3001) — course registry
   Weeks 1–8 (Week 6 has no official content). Weeks 9–12 later:
   add w9.js … w12.js and widen the exam weeks below.
   ============================================================ */
COURSE({
  code: 'cs3001', title: 'Software Engineering', short: 'Software Engineering', color: '#2f5d8a',
  blurb: 'How real software gets built: components and clients, the lifecycle and process models, requirements, user interfaces, project management, design, development practice and architecture. Weeks 1–8.',
  exams: [
    { id: 'q2', label: 'Quiz 2', weeks: [1, 2, 3, 4, 5, 6, 7, 8], note: 'All 11 provided past papers are Quiz 2 papers, and every question in them tests Weeks 1–8 content. Week 6 had no published content.' },
    { id: 'et', label: 'End term', weeks: [1, 2, 3, 4, 5, 6, 7, 8], note: 'For now: a cumulative mock over Weeks 1–8 built from quiz past papers. No end-term past papers were provided, so nothing here is labelled an end-term PYQ.' }
  ],
  sourceNote: `<p><b>Source priority:</b> PYQs › week-wise notes › books › general knowledge.</p>
<h3>Materials read</h3>
<table class="t"><tr><th>File</th><th>Type</th><th>Weeks</th><th>Status</th></tr>
<tr><td>cs3001_2023T1 … 2026T2 _Q2_NA.pdf (11 files)</td><td>Quiz 2 past papers with the official key (green ticks)</td><td>1–8</td><td>All 253 questions extracted; keys read from the green option colour; image-only stems, code, tables and diagrams rendered and read; every key re-derived.</td></tr>
<tr><td>se-quiz2-revision-notes.pdf</td><td>Week-wise revision notebook (Weeks 1–8)</td><td>1–8</td><td>Read in full; primary notes source.</td></tr>
<tr><td>Software_Engineering_StudyGuide_Weeks1-12.pdf</td><td>Week-wise study guide</td><td>1–12 (used 1–8)</td><td>Read for structure and definitions; Weeks 9–12 parked for later.</td></tr>
<tr><td>SE_Detailed_Notes_AnmolKansal.pdf</td><td>Detailed notes</td><td>1–5</td><td>Cross-checked definitions.</td></tr>
<tr><td>SE.pdf</td><td>Notes</td><td>mixed</td><td>Cross-checked.</td></tr>
<tr><td>Pressman, <i>Software Engineering: A Practitioner’s Approach</i> (7th ed.)</td><td>Book</td><td>background</td><td>Used only for background; no page numbers cited.</td></tr></table>
<p class="small muted">No books, PDFs or notes are stored in this repository. Page numbers and timestamps are never cited because the notes do not show them consistently.</p>`
});

const SE = 'cs3001';
[['2023T1', 'Quiz 2 · 2023 T1'], ['2023T2', 'Quiz 2 · 2023 T2'], ['2023T3', 'Quiz 2 · 2023 T3'], ['2024T1', 'Quiz 2 · 2024 T1'], ['2024T2', 'Quiz 2 · 2024 T2'], ['2024T3', 'Quiz 2 · 2024 T3'],
 ['2025T1', 'Quiz 2 · 2025 T1'], ['2025T2', 'Quiz 2 · 2025 T2'], ['2025T3', 'Quiz 2 · 2025 T3'], ['2026T1', 'Quiz 2 · 2026 T1'], ['2026T2', 'Quiz 2 · 2026 T2']]
  .forEach(([id, label]) => PAPER(SE, id, { label, exam: 'q2' }));

/* PYQ families: groups of past questions that reuse one scenario/method. Every family gets harder variations. */
[
  ['f-interface', 'Interfaces in distributed development', 1, 'Picking “interfaces reveal the implementation” or “nothing may change until the interface changes”. Interfaces hide the implementation; only the interface is frozen.'],
  ['f-client', 'Client type (external / internal / software)', 1, 'Calling the company’s own staff “external”, or calling a payment gateway an “internal user”. Ask: human or program? inside or outside the developing company?'],
  ['f-sdlc', 'Which SDLC phase is this?', 1, 'A pre-release group finding bugs is Testing, not Maintenance; a released product being patched is Maintenance, not Development.'],
  ['f-testing', 'Levels of testing, alpha vs beta', 1, 'Alpha = internal testers; Beta = real external users before full release. “Selected customers, real-world use” is Beta.'],
  ['f-models', 'Waterfall, prototype, spiral, build-and-fix', 1, 'Prototype is not delivered to the client, does not cut cost significantly and never guarantees zero bugs.'],
  ['f-agile', 'Agile manifesto and Agile vs Waterfall', 1, '“Over” means valued more, not abandoned. Agile’s edge is accommodating change, not more documentation.'],
  ['f-users', 'Primary / secondary / tertiary users', 2, 'A courier phoned by the store never touches the app: tertiary. Two different groups can both be primary.'],
  ['f-reqprob', 'Requirement problems (ambiguous / inconsistent / incomplete)', 2, 'Two stakeholders contradicting each other is inconsistent, not ambiguous.'],
  ['f-gather', 'Requirement-gathering technique', 2, 'Reading rules or policies is Documentation; watching people work is Naturalistic observation; a fixed list asked to everyone is a Structured interview.'],
  ['f-frnfr', 'Functional vs non-functional requirements', 2, 'A number, time limit or load figure makes it non-functional, even if a feature is mentioned in the same sentence.'],
  ['f-story', 'User stories and BDD', 2, 'The template is Role–Feature–Benefit (As a…, I want…, so that…).'],
  ['f-srs', 'SRS document', 2, 'An SRS must be clear to technical and non-technical readers; never vague “for flexibility”.'],
  ['f-smart', 'SMART refinement of a user story', 2, '“Within 4 seconds” adds Measurable; splitting a too-big story up front is Achievable, not Timeboxed.'],
  ['f-usability', 'Usability goals', 3, 'Guided tour or no tutorial → Learnability; losing unsaved work → Safety; saved details for repeat buyers → Efficiency.'],
  ['f-prototype', 'Prototype types (storyboard → interactive)', 3, 'Clickable slides/images are a digital mock-up; a working app or Figma flow with data entry is an interactive prototype.'],
  ['f-heuristic', 'UI design heuristics', 3, 'Browsing without login is Freedom, not Flexibility; shortcuts for experts are Flexibility.'],
  ['f-estimate', 'Estimation techniques (expert, Delphi, COCOMO)', 4, 'Delphi = anonymous experts over several rounds reaching consensus; COCOMO is a heuristic (model-based) technique.'],
  ['f-cocomo', 'COCOMO effort and cost', 4, 'Choosing the wrong project type from the scenario, or adding the EAF instead of multiplying.'],
  ['f-network', 'Activity network, WBS and critical path', 4, 'A task can start only when ALL its predecessors finish; the critical path is the LONGEST chain.'],
  ['f-risk', 'Risk type and mitigation', 4, 'A faulty third-party component is a Technical risk (benchmark and inspect it); not being competitive or gold plating is a Business risk.'],
  ['f-riskcalc', 'Risk = probability × impact', 4, 'Solving for impact means dividing: I = Risk ÷ P. Prioritise by the product, not by probability alone.'],
  ['f-scrum', 'Scrum roles and ceremonies', 4, 'Demo to stakeholders = Sprint Review; “how do we work better” = Retrospective; backlog priority = Product Owner, not Scrum Master.'],
  ['f-velocity', 'Story points and velocity', 4, 'Velocity counts story points completed per sprint, not the number of stories.'],
  ['f-design', 'Design outcomes and good-design qualities', 5, 'Interfaces = how components communicate; data structures = storing data; algorithms = implementing a component.'],
  ['f-cohcoup', 'Cohesion and coupling together', 5, 'Judge the two axes separately: one objective per module (high cohesion) can coexist with heavy shared data (high coupling).'],
  ['f-cohesion', 'Type of cohesion', 5, 'Output feeds the next step and one purpose → Sequential; merely executed in order with different purposes → Procedural; same data structure → Communicational.'],
  ['f-coupling', 'Type of coupling', 5, 'A flag that decides what the other module does → Control; editing another module’s internals → Content; shared global → Common.'],
  ['f-classrel', 'Class relationships in a class diagram', 5, 'Filled diamond sits at the whole (composition); hollow triangle points to the parent (inheritance). Implementing an interface is keyed as dependency in this course.'],
  ['f-oo', 'Object-oriented basics', 5, 'Private data reachable only through methods is Encapsulation.'],
  ['f-uml', 'UML diagrams and views', 5, 'Messages exchanged over time → Interaction / Sequence; flow of control among activities → Activity.'],
  ['f-tools', 'IDEs, frameworks and version control', 7, 'git pull = fetch + merge; git fetch does not merge. Rebase brings master’s commits under your branch.'],
  ['f-fault', 'Error, fault, failure, debugging', 7, 'The wrong line of code is the Fault; the wrong output the user sees is the Failure.'],
  ['f-debugstrat', 'Debugging strategies', 7, 'Start from the trigger and go forward = Forwards; start from the bad output and go back = Backwards; docs/examples for a black box = Blackbox.'],
  ['f-debugtech', 'Debugging techniques', 7, 'Slow program, CPU and memory hot spots → Profiling; print statements → Logging.'],
  ['f-metrics', 'Raw metrics, Halstead', 7, 'LOC / LLOC / SLOC are Raw metrics, not Halstead (operators and operands).'],
  ['f-cc', 'Cyclomatic complexity of a Python function', 7, 'Count every if, elif, for and while; never count else; add 1.'],
  ['f-arch', 'Architecture style', 8, 'A chain where each stage’s output is the next stage’s input is Pipe-and-Filter; no central server is Peer-to-Peer.'],
  ['f-solid', 'SOLID principle', 8, 'Forced to implement irrelevant methods → ISP; depending on an interface instead of a concrete class → DIP; subclass breaks substitution → LSP.'],
  ['f-pattern', 'Design pattern', 8, 'Converting an incompatible format → Adapter; one simple method that orchestrates a subsystem → Facade; many optional fields → Builder.']
].forEach(([id, t, week, trap]) => FAMILY(id, { t, week, trap }));
