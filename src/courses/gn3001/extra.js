/* ===================== Strategies for Professional Growth — formulas, comparisons, sheets, sources, limits ===================== */

/* ---------------- Formulas and frameworks ---------------- */
[
  { week: 1, t: 'Tuckman’s stages', f: 'Forming → Storming → Norming → Performing → Adjourning', words: 'Polite → conflict over roles and status → agreed ways of working → high output → disband.' },
  { week: 1, t: 'The 10 Cs of teamwork', f: 'Clarity · Commitment · Communication · Competence · Collaboration · Coordination · Connection · Conflict Resolution · Change Management · Continuous Improvement', words: 'The course’s checklist for an effective team.' },
  { week: 2, t: 'The 10 Cs of communication', f: 'Clear · Concise · Concrete · Correct · Complete · Consistent · Confident · Creative · Courteous · Considerate', words: 'Check a message against each before sending.' },
  { week: 2, t: 'RASA listening', f: 'Receive · Appreciate · Summarize · Ask', words: 'Attend, show you are listening, restate, ask follow-ups.' },
  { week: 5, t: 'Goleman’s EI', f: 'Self-awareness · Self-regulation · Motivation · Empathy · Social skills', words: 'First three are about you; last two about others.' },
  { week: 5, t: 'The 6R of handling emotions', f: 'Recognize · Respect · Rationalize · Release · Response-able · Resilient', words: 'Name it, accept it, understand it, let it go, choose a response, learn from it.' },
  { week: 5, t: 'TKI conflict modes', f: 'Competing (assertive, uncooperative) · Accommodating (unassertive, cooperative) · Avoiding (neither) · Collaborating (both) · Compromising (middle)', words: 'Two axes: assertiveness and cooperativeness.' },
  { week: 6, t: 'Culture shock stages', f: 'Elation → Transition → Understanding → Integration', words: 'Wow → ugh → I see → this is home too.' },
  { week: 6, t: 'Five cultural strategies', f: 'Dominance · Avoidance · Compromise · Accommodation · Synergy', words: 'Impose · ignore · each gives · adopt theirs · blend into something new.' },
  { week: 7, t: 'Net worth', f: 'Net worth = total assets − total liabilities', words: 'Asset swaps and loan-funded purchases leave it unchanged; consumption lowers it.', ex: '12,00,000 − 4,10,000 = ₹7,90,000.' },
  { week: 7, t: 'Future value', f: 'FV = P × (1 + r)<sup>n</sup>', words: 'Compound annually for n years.', ex: '₹1,00,000 at 15% for 5 years ≈ ₹2,01,135.' },
  { week: 7, t: 'CAGR', f: 'CAGR = (end ÷ start)<sup>1/n</sup> − 1', words: 'Only start and end values; not total growth ÷ years.', ex: '50,000 → 75,000 in 3 years: 1.5<sup>1/3</sup> − 1 ≈ 14.47%.' },
  { week: 7, t: 'Real return', f: 'Real = (1 + nominal) ÷ (1 + inflation) − 1 ≈ nominal − inflation', words: 'Use the exact form when options are close.', ex: '1.12 ÷ 1.07 − 1 ≈ 4.67%.' },
  { week: 7, t: 'Rule of 72', f: 'Years to double ≈ 72 ÷ rate% · rate ≈ 72 ÷ years', words: 'Quick doubling estimate.', ex: 'Double in 8 years → about 9%.' },
  { week: 7, t: 'Post-tax interest', f: 'Interest after tax = principal × rate × (1 − tax rate)', words: 'Tax the interest, not the principal.', ex: '50,000 × 7.5% × 0.7 = ₹2,625.' },
  { week: 8, t: 'Creative process', f: 'Define → Collect information → Redefine → Generate ideas → Design the solution → Evaluate feasibility → Implement', words: 'Iterative: loop back when evaluation fails.' }
].forEach(FORMULA);

/* ---------------- Comparison tables ---------------- */
[
  { t: 'Group vs team; team types', head: ['', 'Signal'], rows: [['Group', 'individual goals, individual accountability'], ['Team', 'shared goal, mutual accountability, synergy'], ['Cross-functional', 'members from different specialities'], ['Self-managed', 'no boss; team decides'], ['Virtual', 'dispersed members, online']], decide: 'Every team is a group; not every group is a team.' },
  { t: 'Coordination vs collaboration', head: ['', 'Coordination', 'Collaboration'], rows: [['Means', 'dividing and tracking work', 'working it out together'], ['Signal', 'schedules, owners, handoffs', 'joint problem-solving']], decide: 'Divide and track → coordination; solve together → collaboration.' },
  { t: 'Job-centred vs employee-centred leadership', head: ['', 'Job/task-centred', 'Employee/people-centred'], rows: [['Focus', 'plans, methods, reports', 'relationships, ideas, safety'], ['Signal', 'tells people how to do the job', 'greets, asks for ideas, supports']], decide: 'Is the leader talking about the work or the people?' },
  { t: 'Sphere of control vs influence vs concern', head: ['Sphere', 'Meaning'], rows: [['Control', 'what you decide directly'], ['Influence', 'outside your control but affects you directly; you can sway it'], ['Concern', 'affects you indirectly; you cannot change it']], decide: 'Can you decide it, sway it, or only worry about it?' },
  { t: 'TKI modes', head: ['Mode', 'Assertive', 'Cooperative', 'Signal'], rows: [['Competing', 'high', 'low', 'urgent call; “my way”'], ['Accommodating', 'low', 'high', 'give in to keep the relationship'], ['Avoiding', 'low', 'low', 'postpone, sidestep'], ['Collaborating', 'high', 'high', 'win–win, needs time'], ['Compromising', 'medium', 'medium', 'split the difference']], decide: 'Place the person on the two axes.' },
  { t: 'Cultural dimensions', head: ['Course label', 'Hofstede', 'Signal'], rows: [['Equal / Unequal', 'Power distance', 'titles, deference, never contradicting seniors'], ['Collective / Individual', 'Individualism', 'team credit vs personal credit'], ['Certainty / Ambiguity', 'Uncertainty avoidance', 'SOPs, approvals, precise plans'], ['Time scarce / plentiful', 'Long-term orientation (related)', 'deadlines vs flexible time']], decide: 'Name the noun the scenario is about.' },
  { t: 'High-context vs low-context', head: ['', 'Low-context', 'High-context'], rows: [['Message', 'explicit, literal, written', 'implicit, relational, nonverbal'], ['Examples (Erin Meyer)', 'USA, Germany', 'Japan, India']], decide: 'Is the meaning in the words or around them?' },
  { t: 'Compromise vs synergy vs accommodation', head: ['Strategy', 'Who changes?'], rows: [['Compromise', 'both give something up'], ['Synergy', 'both combine strengths into something new'], ['Accommodation', 'the newcomer adopts the local way'], ['Dominance', 'the powerful side imposes its way']], decide: 'Ask “who changed, and is the result new?”.' },
  { t: 'Ethnocentrism vs parochialism vs stereotyping', head: ['Barrier', 'Signal'], rows: [['Ethnocentrism', '“our way is superior”'], ['Parochialism', 'unaware other ways exist'], ['Stereotyping', 'generalising about a group']], decide: 'Knows and dismisses → ethnocentrism; does not know → parochialism.' },
  { t: 'Financial statements', head: ['Statement', 'Shows', 'Time'], rows: [['Income statement', 'profitability', 'period'], ['Balance sheet', 'assets, liabilities, equity', 'one date'], ['Cash flow statement', 'cash in and out', 'period']], decide: 'Profit → income statement; owned/owed → balance sheet; cash → cash flow.' },
  { t: 'CAGR vs IRR vs XIRR', head: ['Measure', 'Use when'], rows: [['CAGR', 'one start value and one end value'], ['IRR', 'several cash flows at regular intervals'], ['XIRR', 'cash flows on irregular dates (SIPs)']], decide: 'Count the cash flows and check the dates.' },
  { t: 'Demand-pull vs cost-push vs stagflation', head: ['Type', 'Cause'], rows: [['Demand-pull', 'aggregate demand > aggregate supply (stimulus, higher incomes)'], ['Cost-push', 'rising input costs'], ['Stagflation', 'inflation with stagnant growth']], decide: 'Demand side or cost side?' },
  { t: 'Critical vs design vs divergent thinking', head: ['Thinking', 'Key move'], rows: [['Critical', 'weigh evidence and arguments → judgement'], ['Design', 'frame problems from users’ viewpoint'], ['Divergent', 'generate many options'], ['Convergent', 'narrow to one answer']], decide: 'Evidence, users, many, or one?' }
].forEach(COMPARE);

/* ---------------- Weekly revision sheets ---------------- */
const SPGTOP = (moves, traps) => `<h2>Exam moves</h2><ol>${moves.map(m => `<li>${m}</li>`).join('')}</ol><h2>Traps the papers set</h2><ul>${traps.map(t => `<li>${t}</li>`).join('')}</ul>`;
SHEET(1, SPGTOP(['Conflict over roles and status → Storming; agreeing how to work → Norming.', 'Bigger team, less effort each → social loafing; cohesion over independent thinking → groupthink.', 'Divide and track → coordination; solve together → collaboration.', 'Case options: pick the one that fixes communication and coordination.'],
  ['“All groups are teams”.', 'Psychological safety read as “everyone agrees”.', 'Extreme options (micromanage, hoard information).']));
SHEET(2, SPGTOP(['Jargon → semantic barrier; a policy distorted on the way down → downward communication.', 'RASA: Receive, Appreciate, Summarize, Ask.', 'Match a fix to the C it repairs (vague → Concrete; long → Concise).', 'Written cases: name the barrier, then the fix, with an example from the case.'],
  ['Hearing = listening.', 'Information overload keyed for unfamiliar concepts (see Sources).']));
SHEET(3, SPGTOP(['Outline = list of major headings.', 'Steps in sequence → chronological order.', 'Open-palm gestures, pauses, repeat audience questions.', 'Summary slide: restates, does not add new insights.'],
  ['Summary slides adding new material.', 'Ignoring a document’s appearance as a nonverbal message.']));
SHEET(4, SPGTOP(['Tells how to do the job → job-centred; asks for ideas → employee-centred.', 'Affects you directly but outside your control → sphere of influence.', 'Knowing yourself → intrapersonal; understanding others → interpersonal.', 'Collaborative coach generates options with the person.'],
  ['Sphere of concern for direct effects.', 'Intelligences are fixed.', 'Coach prescribes solutions.']));
SHEET(5, SPGTOP(['Recognising own feeling → self-awareness; holding back → self-regulation; reading others → empathy.', 'Amygdala hijack: intense fear/anger; manage with self-awareness and self-regulation.', '6R ends with Resilient: learn and release.', 'TKI: give in → accommodating; win–win with time → collaborating; urgent call → competing.'],
  ['Self-management when the stem says “recognises”.', 'EI as a single fixed construct.', 'EI–leadership keyed “positively related” (see Sources).']));
SHEET(6, SPGTOP(['Photograph test: visible → surface culture; learned from behaviour → deep.', 'Authority → power distance; credit → individualism; SOPs → uncertainty avoidance.', 'Excitement → elation; frustration → transition; adopting habits → integration.', '“Ours is superior” → ethnocentrism; blend → synergy.'],
  ['Power distance for SOP and approval scenarios.', 'Compromise for a hybrid model.', 'Parochialism for a manager who knows and dismisses other ways.']));
SHEET(7, SPGTOP(['NW = assets − liabilities; swaps and loan purchases leave it unchanged.', 'FV = P(1+r)ⁿ; CAGR = (E/S)^(1/n) − 1; real = (1+n)/(1+i) − 1; rate ≈ 72 ÷ years.', 'Uneven flows → IRR; irregular dates → XIRR.', 'Higher return → higher risk; savings accounts are not long-term growth.'],
  ['Simple-interest answers in compound questions.', 'Total assets picked as net worth.', 'Opportunity cost = all alternatives.', 'Repaying a loan “raises” net worth.']));
SHEET(8, SPGTOP(['Creativity is iterative, social and effortful.', 'Combining fields → intersections; openness → curiosity.', 'Biomimicry copies a mechanism from nature.', 'Evidence → critical thinking; users → design thinking.'],
  ['“Always linear”, “must succeed”, “out of nowhere”.', 'Curiosity for the Steve Jobs scenario.']));

/* ---------------- Sources & discrepancies ---------------- */
const QLS = id => `<a href="#/gn3001/q/gn3001-${id}">${id.replace('-', ' Q')}</a>`;
[
  { t: `EI and leadership: study guide vs key (${QLS('2023T1-11')})`, detail: 'The study guide says past keys treat the relationship between emotional intelligence and leadership as curvilinear. In the rendered paper the green tick is on “positively related”.', res: 'The paper’s key is followed; the note appears with the solution.' },
  { t: `Information overload keyed for unfamiliar concepts (${QLS('2023T1q1-47')})`, detail: 'General communication texts would call this a semantic or comprehension barrier; the key gives information overload, matching the course’s list.', res: 'Key followed and taught as the course’s usage.' },
  { t: `Summary-slide statement (${QLS('2023T1q1-60')}, ${QLS('2023T2-110')})`, detail: 'These keys include the statement about summary slides. The “spg notes” cite a December 2024 paper (not provided) whose key for a similar item was 2, 3 and 4.', res: 'The provided papers’ keys are followed; the other key is mentioned only as reported in the notes.' },
  { t: `Face-to-face communication keyed as low-context (${QLS('2024T2-107')})`, detail: 'In Erin Meyer’s framing, relationship-heavy face-to-face exchanges lean high-context; the key says low-context, reading the scenario as direct and explicit.', res: 'Key followed; flagged in the concept’s mistakes list.' },
  { t: `Net worth after an education loan (${QLS('2024T3-210')})`, detail: 'From the balance sheet, net worth is ₹9,50,000. Borrowing ₹10 lakh leaves it unchanged; spending it on fees gives −₹50,000. The key is ₹4,50,000, which follows from neither reading.', res: 'Key shown with a note; the variation teaches the accounting rule.' },
  { t: `Diversification “maximizes returns” (${QLS('2024T2-106')})`, detail: 'Finance theory: diversification reduces unsystematic risk; it does not maximise returns. The key accepts both statements.', res: 'Key shown with a note; the variation asks for the theory-supported statement.' },
  { t: `Biomimicry and tree-like skyscrapers (${QLS('2023T1-40')})`, detail: 'Some writers call tree-inspired structures biomimetic architecture. The key treats the skyscraper as not biomimicry because the other three copy a specific biological mechanism.', res: 'Key followed; rule taught: copying a mechanism.' },
  { t: 'Gardner’s multiple intelligences: week placement', detail: 'The AT study guide covers Gardner in a later week; “spg notes” and the papers place it with leadership in Week 4.', res: 'Placed in Week 4, following the papers and notes.' },
  { t: 'Case text missing in later papers', detail: 'The 2025 T2, 2025 T3, 2026 T1 and 2026 T2 papers redact or omit case text for some short-answer questions.', res: 'Questions kept as printed; model answers use only what the question states plus the course frameworks, and say so.' },
  { t: '2025 T3 Q234 is truncated', detail: 'The options of this culture question are cut off in the provided file.', res: 'Excluded from the past papers. A practice question adapted from its statements is in Week 6 and labelled as such.' },
  { t: 'Questions from other subjects', detail: 'Some PDFs contain questions from other courses (for example a neural-network item and a factory-efficiency item).', res: 'Excluded from the bank and from every count.' },
  { t: `Outside the notes (${QLS('2023T1-55')}, ${QLS('2023T1-56')})`, detail: 'Cost leadership and intangible assets in the Tata case are not covered in the notes provided.', res: 'Kept and mapped to Week 7; answered from general business knowledge and flagged.' },
  { t: `Joke option (${QLS('2024T1-201')})`, detail: 'One option in this question is a joke.', res: 'Kept verbatim; the explanation says why it is wrong.' },
  { t: 'Teamwork and communication “10 Cs”', detail: 'General sources list different 10 Cs. The course’s own lists are used throughout.', res: 'Course lists followed in concepts, flashcards and model answers.' }
].forEach(SOURCE);

/* ---------------- Known limitations ---------------- */
[
  'Weeks 9–12 are not built yet; the exam selector covers Weeks 1–8 only.',
  'One Quiz 1 paper and ten Quiz 2 papers were provided. There are no end-term past papers, so the end-term option is a cumulative mock built from quiz questions; nothing is labelled an end-term PYQ.',
  'Balance-sheet tables and other images in the papers are typed out; layout differs from the originals while the numbers are kept.',
  'Answer keys were read from the green ticks in the provided files. Where a key looks wrong it is followed and the disagreement is recorded above.',
  'Short-answer (case) questions have no official key. Their model answers are written for this platform, marked “key derived”, and self-graded.',
  'Harder variations and checkpoint questions are written for this platform and are always labelled as such; they are never presented as past-paper questions.',
  'Exam intelligence describes what has been asked, not what will be asked.',
  'Progress is stored only in this browser; export it from “Your data” to move devices.'
].forEach(LIMIT);

INTEL({ t: 'Where the marks are', html: '<ul><li><b>Week 7 (finance)</b> has the most questions: two balance-sheet case blocks and four direct calculations in the 2026 T1 paper alone. Practise net worth, CAGR, real return, future value and the rule of 72 until they are automatic.</li><li><b>Weeks 5 and 6</b> (EI, conflict, culture) are scenario-heavy: identify the construct, dimension or stage from one key word in the stem.</li><li><b>Short answers</b> appear in most papers: name the framework, apply each element to the case, finish with a recommendation.</li></ul>' });
INTEL({ t: 'How to use this for the quiz', html: '<ol><li>Work week by week: concept → checkpoints → that week’s PYQs → variations.</li><li>Clear the error notebook and the review queue daily.</li><li>Take one per-week mock for each week, then the cumulative mock.</li><li>In the last two days, read the revision sheets, formulas and comparison tables only.</li></ol>' });
