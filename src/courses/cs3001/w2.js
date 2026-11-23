/* ===================== SE WEEK 2 — Software requirements ===================== */
WEEK({ course: 'cs3001', n: 2, title: 'Software Requirements',
  blurb: 'Before anything is built, find out what it must do and for whom. Identify primary, secondary and tertiary users; gather requirements with questionnaires, interviews, focus groups, observation and documents; spot ambiguous, inconsistent and incomplete requirements; separate functional from non-functional; write them as an SRS or as user stories, and make each story SMART.',
  topics: [
    { title: '2.1 Who are the users, and what can go wrong', cs: ['users'] },
    { title: '2.2 Gathering requirements', cs: ['gathering'] },
    { title: '2.3 Classifying and documenting', cs: ['fr-nfr', 'srs'] },
    { title: '2.4 Agile requirements', cs: ['user-stories', 'smart'] }] });

/* ---------------- 2.1 Users and requirement problems ---------------- */
C({ id: 'users', week: 2, title: 'Primary, secondary and tertiary users; requirement problems', pri: 'High', prereq: ['clients'],
  src: 'Revision notes W2 §2.1–2.2 · Study guide ch.2 §2.1–2.2 · PYQs 2023 T1 Q235, 2023 T2 Q4, 2024 T3 Q19, 2025 T2 Q132, Q133',
  oneLine: 'Primary = frequent direct users; secondary = use it through someone else; tertiary = never use it but are affected. Problems: ambiguous, inconsistent, incomplete.',
  misShort: 'Calling a courier who is only phoned a “secondary” user, or calling a contradiction “ambiguous”.',
  intu: R`<p>A florist in Pune builds an app where customers order bouquets.</p>
<p>The <i>customers</i> tap through it every day.</p>
<p>A busy executive never opens it; her assistant orders flowers for her.</p>
<p>When an order comes in, the shop manager <i>phones</i> a courier to collect it. The courier never sees the app.</p>
<p>Who are the “users”? All three are affected by the app, but in very different ways.</p>
<p>The question this concept answers: <b>how directly does each person touch the system?</b></p>
<p>You might think the courier is “not a user at all”. The course says otherwise: the courier is a <b>tertiary</b> user — never touches it, but the app changes their day.</p>`,
  why: R`<ul><li>The courier/flower-store scenario appears twice almost verbatim (2023 T1 Q235, 2024 T3 Q19). 2023 T2 Q4 asks for the tertiary users of a jewellery app.</li><li>2025 T2 Q132 tests that <i>two</i> groups can both be primary.</li><li>2025 T2 Q133 introduced the requirement-problem family: two stakeholders contradict → <b>inconsistent</b>.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Requirement gathering</b> — actively collecting what the system must do from clients and stakeholders.',
    '<b>Requirement analysis</b> — examining what was gathered for completeness, consistency and absence of ambiguity. Done by a <b>system analyst</b> with the team.',
    '<b>Primary users</b> — frequent, direct users (sellers on the Amazon Seller Portal).',
    '<b>Secondary users</b> — do not use it directly; use it through an intermediary (an executive whose assistant places orders).',
    '<b>Tertiary users</b> — do not use it at all, but are affected by it or influence its purchase (banks settling payments, logistics partners, the advertising department).',
    '<b>Ambiguous</b> requirement — can be read in more than one way.',
    '<b>Inconsistent</b> requirements — two requirements directly contradict each other.',
    '<b>Incomplete</b> requirement — something important is never stated (a case, a user, a condition).']))
    + '<p><b>In words:</b> primary touches the keyboard, secondary is one step removed, tertiary never touches it but feels the ripple.</p>',
  vis: M.graph([
    { id: 'app', t: 'Flower app', x: 260, y: 150, shape: 'circle', w: 110, hl: true },
    { id: 'p', t: 'Customers\n(primary)', x: 80, y: 60, w: 120 },
    { id: 'a', t: 'Assistant', x: 80, y: 250, w: 100 },
    { id: 's', t: 'Executive\n(secondary)', x: 80, y: 340, w: 120 },
    { id: 'm', t: 'Shop manager', x: 460, y: 60, w: 120 },
    { id: 't', t: 'Courier\n(tertiary)', x: 460, y: 250, w: 110 }],
    [{ a: 'p', b: 'app', lab: 'uses directly' }, { a: 'a', b: 'app', lab: 'uses' }, { a: 's', b: 'a', lab: 'asks' }, { a: 'm', b: 'app', lab: 'uses' }, { a: 'm', b: 't', lab: 'phones', dash: true }],
    { cap: 'Distance from the system decides the type. The courier is only ever reached by phone.', label: 'user types' }),
  ex: [
    M.ex('Introductory', R`<p>Customers order bouquets in the app; the store manager phones a courier to pick up and deliver. What type of user is the courier?</p>`,
      R`<ol><li>Does the courier use the app directly? No.</li><li>Through an intermediary who operates it for them? No — the manager phones them; nobody uses the app on the courier’s behalf.</li><li>Is the courier affected by the app? Yes — every order creates a pickup.</li><li>So: <b>tertiary user</b> (2023 T1 Q235, 2024 T3 Q19).</li></ol>
<p><b>Now suppose</b> the app is upgraded so couriers log in and accept pickups on their phones. The courier now touches the app directly and often → <b>primary user</b>. Same person, new relationship, new label.</p>`),
    M.ex('Standard', R`<p>An education platform: professors upload materials, students access content, and an accreditation body occasionally reviews reports generated by the system. Classify all three.</p>`,
      R`<ul><li>Professors use it directly and frequently → primary.</li><li>Students use it directly and frequently → primary too (two primary groups are allowed).</li><li>The accreditation body reads reports produced by the system; it influences and is affected but does not operate it → tertiary.</li></ul><p>Key of 2025 T2 Q132: Primary, Primary, Tertiary. The decoy makes students “secondary” — but secondary means <i>through an intermediary</i>, not “less important”.</p>`),
    M.ex('Exam-level', R`<p>Stakeholder A: “Passwords must expire every 30 days.” Stakeholder B: “Users must never be forced to change passwords more than once a year.” A third requirement says: “The system should load quickly.” Name the problem in each.</p>`,
      R`<ol><li>A vs B cannot both be satisfied → <b>inconsistent</b> (2025 T2 Q133).</li><li>“Quickly” can be read as 1 second or 10 → <b>ambiguous</b>.</li><li>Neither says what happens to accounts that are already older than 30 days → that gap would be <b>incomplete</b>.</li></ol>`)],
  math: M.rule(R`<p><b>Primary</b> = uses directly and often. <b>Secondary</b> = uses through an intermediary. <b>Tertiary</b> = never uses it, but is affected or influences adoption.</p><p><b>Ambiguous</b> = many readings. <b>Inconsistent</b> = contradiction. <b>Incomplete</b> = missing piece.</p>`)
    + M.why([['Courier as secondary', 'secondary users have someone operating the system for them; the courier has nobody using the app on their behalf.'],
      ['Students as secondary because professors upload', 'students use the system directly to access content — primary.'],
      ['Auditors who access the app twice a year as tertiary', 'they log in and use it themselves; infrequent direct use is not tertiary (2023 T2 Q4 decoy).'],
      ['Contradiction called ambiguous', 'each requirement alone is perfectly clear; together they clash — inconsistent.'],
      ['“Implicit” as a requirement problem', 'not one of the course’s three named problems.']]),
  conn: R`<p><b>At work:</b> product managers write separate personas for each user type; tertiary stakeholders (legal, banks, logistics) often add hard constraints late if they are forgotten.</p>
<p><b>Earlier:</b> Week 1’s client types (external / internal / software) answer a different question — who the system is built for. The papers mix the two lists on purpose.</p>
<p><b>Later:</b> the next concept gathers requirements from <i>all</i> of these users; incomplete and ambiguous requirements are exactly what SMART refinement fixes.</p>`,
  mis: M.ul(['Secondary for the courier (2023 T1 Q235, 2024 T3 Q19).', 'Auditors (who access the app) offered as tertiary users in 2023 T2 Q4 — the jewellers who never use the app are the tertiary users.', '“Students – Secondary users” (2025 T2 Q132).', '“Ambiguous” or “Implicit” for two contradicting stakeholders (2025 T2 Q133).']),
  exam: R`<p><b>Fast method:</b> for each person ask “do they press the buttons themselves?”</p><ul><li>Yes, regularly → primary.</li><li>No, someone presses them on their behalf → secondary.</li><li>No, and nobody does it for them, but the system still affects them → tertiary.</li></ul><p>For requirement problems: one requirement with two readings → ambiguous; two requirements that fight → inconsistent; something never said → incomplete.</p>`
});
Q({ cp: 'users', type: 'mcq', diff: 'easy', q: 'A hospital’s billing system sends claims to insurance companies; insurers never log in, but their payouts depend on it. Insurers are:', opts: ['Primary users', 'Secondary users', 'Tertiary users', 'Software clients'], ans: 2,
  why: ['They do not use the system directly.', 'Nobody operates it on their behalf.', 'Correct: affected without using it.', 'The insurers here are organisations of people; the question is about user type.'], sol: 'Never use it + affected → tertiary.' });
Q({ cp: 'users', type: 'mcq', diff: 'moderate', q: 'A CEO never opens the travel-booking tool; her secretary books all her trips in it. The CEO is a:', opts: ['Primary user', 'Secondary user', 'Tertiary user', 'Not a user'], ans: 1,
  why: ['She never uses it directly.', 'Correct: uses it through an intermediary.', 'Tertiary users have nobody using it for them.', 'The system is used on her behalf.'], sol: 'Through an intermediary → secondary.' });
Q({ cp: 'users', type: 'mcq', diff: 'moderate', q: '“The report should be generated in a suitable format.” The main problem with this requirement is that it is:', opts: ['Inconsistent', 'Ambiguous', 'Incomplete', 'Non-functional'], ans: 1,
  why: ['Nothing contradicts it.', 'Correct: “suitable” can be read many ways.', 'It is stated; it is just vague.', 'Classification is a separate question from the defect.'], sol: 'Vague word with many readings → ambiguous.' });
Q({ cp: 'users', type: 'short', diff: 'moderate', q: 'Explain the difference between a secondary and a tertiary user with one example of each.',
  model: '<p>A <b>secondary</b> user does not operate the system but uses it through an intermediary — e.g. an executive whose assistant places orders for her.</p><p>A <b>tertiary</b> user does not use the system at all, even indirectly, but is affected by it or influences its adoption — e.g. a courier who is phoned to deliver an order placed on a flower app, or a bank settling the payments.</p>' });

/* ---------------- 2.2 Gathering techniques ---------------- */
C({ id: 'gathering', week: 2, title: 'Requirement-gathering techniques', pri: 'High', prereq: ['users'],
  src: 'Revision notes W2 §2.3 · Study guide ch.2 §2.3 · PYQs 2023 T1 Q236, 2023 T2 Q5, 2023 T3 Q179, 2024 T1 Q25, 2024 T2 Q4, 2024 T3 Q20, 2025 T1 Q23, Q39, 2025 T2 Q135, 2025 T3 Q6, 2026 T1 Q6, 2026 T2 Q2',
  oneLine: 'Questionnaire = specific questions to many; interview (structured / semi / unstructured) = depth; focus group = many viewpoints, consensus and conflict; observation = real context; documentation = rules and procedures.',
  misShort: 'Calling a fixed list of questions asked aloud to everyone a “questionnaire” instead of a structured interview.',
  intu: R`<p>You are asked to build a payroll system for 500 companies.</p>
<p>You could post a form to all 500 HR managers. Fast and cheap — but you only learn what you thought to ask.</p>
<p>You could sit down with five managers and talk for an hour each. Slow — but you hear the problems you never imagined.</p>
<p>You could put eight managers in a room and let them argue. You learn where they agree, and where they clash.</p>
<p>You could sit beside a payroll clerk on salary day and just watch.</p>
<p>Or you could read the labour laws and the company’s salary policy.</p>
<p>The question: <b>which technique is the story describing?</b> The exam gives you one verb — “sent”, “asked aloud”, “discussed as a group”, “visited and watched”, “read the rules” — and that verb is the answer.</p>`,
  why: R`<ul><li>The largest Week 2 family: twelve questions across ten papers.</li><li>Documentation alone was keyed four times (2023 T1, 2025 T1, 2025 T2 and in the 2024 T1 match).</li><li>The interview flavours are the newest twist: structured (2024 T2, 2026 T2), unstructured (2025 T1).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Questionnaire</b> — a list of specific, well-defined questions sent to a large group. Fast, cheap, no follow-up; misses hidden requirements.',
    '<b>Interview</b> — talking to stakeholders to explore issues in depth. <i>Structured</i>: fixed questions, same order, same for everyone. <i>Unstructured</i>: open-ended, follow-ups adapt to answers. <i>Semi-structured</i>: a fixed base plus free follow-ups.',
    '<b>Focus group / workshop</b> — a group of stakeholders discussing together; collects multiple viewpoints and surfaces both consensus and conflict.',
    '<b>Naturalistic observation</b> — watching people do the task in their real setting, to understand context and unspoken behaviour.',
    '<b>Documentation</b> — reading existing procedures, rules, regulations and standards.',
    'Guidelines: focus on actual needs, involve all user types, combine techniques, run a pilot first, be pragmatic about cost.']))
    + '<p><b>In words:</b> many people + specific questions → questionnaire; depth with one person → interview; a group → focus group; watch → observation; read → documentation.</p>',
  vis: M.table(['Technique', 'Best for', 'Giveaway verb in the stem'], [['Questionnaire', 'Specific questions, large/distributed group', '“sent a list”, “thousands of sellers”'], ['Interview', 'Exploring issues in depth', '“sat down with”, “asked”'], ['Focus group', 'Multiple viewpoints, consensus and conflict', '“group discussion”, “workshop”'], ['Naturalistic observation', 'Understanding the real context', '“visited”, “watched”, “observed”'], ['Documentation', 'Procedures, rules, regulations', '“went through documents / policies / FAQs”']], 'The verb decides the technique.')
    + M.ladder([{ t: 'Structured interview', d: 'fixed list, same order, everyone' }, { t: 'Semi-structured', d: 'fixed base + free follow-ups' }, { t: 'Unstructured interview', d: 'open-ended, adapts to answers' }], { top: 'rigid', bottom: 'free', cap: 'The interview flavours, from most scripted to least.' }),
  ex: [
    M.ex('Introductory', R`<p>An analyst prepares a fixed list of 25 questions and <i>verbally</i> asks exactly the same questions to HR managers of every company. Which technique?</p>`,
      R`<ol><li>Verbally asked → an interview, not a form.</li><li>Fixed list, same questions, everyone → <b>structured interview</b> (2026 T2 Q2, also 2024 T2 Q4).</li></ol>
<p><b>Now suppose</b> the analyst starts from the same 25 questions but follows up freely on interesting answers → <b>semi-structured</b>. And if there is no list at all and the conversation flows → <b>unstructured</b> (2025 T1 Q23).</p>
<p><b>Now suppose</b> the 25 questions are emailed as a form to all 500 managers → <b>questionnaire</b>. The medium (spoken vs sent) and the script decide it.</p>`),
    M.ex('Standard', R`<p>Match: A. Interviews, B. Focus groups, C. Naturalistic observations, D. Documentation — with 1. collect multiple viewpoints, 2. understand procedures, regulations and standards, 3. explore issues, 4. understand the context.</p>`,
      R`<p>A–3 (explore), B–1 (multiple viewpoints), C–4 (context), D–2 (procedures). This is the 2024 T1 Q25 key. The near-miss options swap A and B, or C and D.</p>`),
    M.ex('Exam-level', R`<p>For a sales-summary module, mobile sales teams care about launch-day sales and furniture teams about 30-day trends. Why run focus groups with managers from different industries? Select all: (a) gain consensus on common requirements (b) highlight conflicts between stakeholder needs (c) observe how users work in their natural setting (d) get detailed regulatory information from banks.</p>`,
      R`<p>(a) ✔ and (b) ✔ — a focus group surfaces both agreement and disagreement. (c) is naturalistic observation; (d) is documentation. Answer (a), (b) — 2025 T3 Q6.</p>`)],
  math: M.rule(R`<p><b>Specific questions × many people → Questionnaire. Depth → Interview (structured / semi / unstructured). Group → Focus group. Watch → Naturalistic observation. Read rules → Documentation.</b></p>`)
    + M.why([['Questionnaire for questions asked aloud', 'a questionnaire is sent and filled in; spoken questions make it an interview.'],
      ['Interviews for thousands of distributed sellers', 'too slow and costly; specific questions to many → questionnaire (2026 T1 Q6).'],
      ['Observation for reading banking policies and competitor FAQs', 'reading documents is documentation (2025 T2 Q135).'],
      ['Focus group for visiting grocery shops to watch customers', 'watching in the real setting is naturalistic observation (2023 T3 Q179).'],
      ['Semi-structured for “exactly the same questions”', 'no follow-ups → structured.']]),
  conn: R`<p><b>At work:</b> UX researchers combine a survey (questionnaire) for breadth with five interviews for depth, then shadow users (observation) — exactly the “combine techniques” guideline.</p><p><b>Earlier:</b> you must reach primary, secondary <i>and</i> tertiary users.</p><p><b>Later:</b> what you gather is classified (functional / non-functional) and written as an SRS or user stories.</p>`,
  mis: M.ul(['“Questionnaires” as a decoy for a structured interview (2024 T2 Q4 lists it as an option).', '“Interviews” for a fixed set of questions to a large group (2023 T2 Q5, 2024 T3 Q20 — key is questionnaires).', '“Focus groups” for reading rules (2023 T1 Q236 — documentation).', 'Picking “observe users in their natural setting” as a reason for focus groups (2025 T3 Q6).']),
  exam: R`<p><b>Fast method:</b> circle the verb and the audience.</p><ul><li>Sent + many → questionnaire.</li><li>Asked in person → interview; then decide the script (fixed / partly / none).</li><li>Group discussing → focus group.</li><li>Visited / watched → naturalistic observation.</li><li>Read documents / policies / regulations → documentation.</li></ul>`
});
Q({ cp: 'gathering', type: 'mcq', diff: 'easy', q: 'A team spends two days at a pharmacy watching how pharmacists check prescriptions and fetch medicines. Technique?', opts: ['Questionnaire', 'Focus group', 'Naturalistic observation', 'Documentation'], ans: 2,
  why: ['No questions are sent.', 'No group discussion.', 'Correct: watching in the real setting.', 'No documents are read.'], sol: 'Watch → observation.' });
Q({ cp: 'gathering', type: 'mcq', diff: 'moderate', q: 'An analyst begins each interview with the same 10 questions but asks follow-ups based on each answer. This is a:', opts: ['Structured interview', 'Semi-structured interview', 'Unstructured interview', 'Questionnaire'], ans: 1,
  why: ['Structured has no follow-ups.', 'Correct: fixed base + free follow-ups.', 'Unstructured has no fixed base.', 'Spoken, not sent.'], sol: 'Fixed base + follow-ups → semi-structured.' });
Q({ cp: 'gathering', type: 'msq', diff: 'hard', q: 'Select ALL weaknesses of relying <b>only</b> on questionnaires.', opts: ['Limited to the questions you thought of in advance', 'No follow-up on interesting answers', 'Cannot reach large audiences', 'Can miss hidden requirements'], ans: [0, 1, 3],
  why: ['Correct.', 'Correct.', 'False — reaching many people is its strength.', 'Correct.'], sol: 'Questionnaires are broad but shallow.' });
Q({ cp: 'gathering', type: 'short', diff: 'moderate', q: 'Why does the course recommend focus groups in addition to one-on-one interviews?',
  model: '<p>One interview captures one person’s perspective. A focus group brings several stakeholders together, so you collect multiple viewpoints at once and see where they agree (consensus) and where they conflict — which individual interviews would hide.</p>' });

/* ---------------- 2.3 Functional vs non-functional ---------------- */
C({ id: 'fr-nfr', week: 2, title: 'Functional vs non-functional requirements', pri: 'High', prereq: ['gathering'],
  src: 'Revision notes W2 §2.4 · Study guide ch.2 §2.4 · PYQs 2024 T1 Q24, 2024 T2 Q5, 2024 T3 Q4, 2025 T1 Q37, 2025 T3 Q7, 2026 T1 Q25, 2026 T2 Q11',
  oneLine: 'Functional = WHAT the system does (input → output). Non-functional = HOW WELL (time, load, uptime, reliability, robustness, security, portability).',
  misShort: 'Calling “must process payments within 3 seconds” functional because it mentions a feature.',
  intu: R`<p>Two requirements for an exam portal.</p>
<p>“Students shall be able to submit answers online.”</p>
<p>“The system shall save each submission within 2 seconds.”</p>
<p>The first describes something the system <i>does</i>. Without it, there is no exam portal.</p>
<p>The second describes <i>how well</i> it does it. Without it, the portal still works — just slowly.</p>
<p>The question: <b>is a requirement about a capability, or about a quality of that capability?</b></p>
<p>You might think anything mentioning “payments” or “search” is functional. The trap: “process payments <i>within 3 seconds</i>” is about speed — non-functional.</p>`,
  why: R`<ul><li>Seven papers. The two-requirement version (2024 T2, 2024 T3, 2025 T3, 2026 T2) and the four-requirement version (2024 T1, 2025 T1) both recur.</li><li>2026 T1 Q25 turned it into an MSQ including reliability (“behave consistently over time”) and robustness (“recover from invalid input”).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Functional requirement</b> — what the system does: a capability or feature; a mapping from input to output. Verified by a pass/fail functional test.',
    '<b>Non-functional requirement</b> — how well the system behaves: a quality attribute or constraint. Verified by measuring (seconds, users, uptime %).',
    'Named non-functional categories: <b>Reliability</b>, <b>Robustness</b>, <b>Performance</b>, <b>Portability</b>, <b>Security</b>.',
    '<b>Reliability</b> — behaves the same way over time in the same environment.',
    '<b>Robustness</b> — recovers from errors or unexpected input without crashing or producing garbage.']))
    + '<p><b>In words:</b> functional = a verb the system performs; non-functional = an adverb or number describing that performance.</p>',
  vis: M.table(['Requirement', 'Type', 'Why'], [['A seller can add, edit and delete catalogue items', 'Functional', 'a capability'], ['New products appear within 5 seconds', 'Non-functional', 'a time limit'], ['Support at least 500 simultaneous logins', 'Non-functional', 'a load figure'], ['Notify the user when an appointment is booked', 'Functional', 'an action'], ['Behave consistently over time', 'Non-functional', 'reliability'], ['Recover from invalid input', 'Non-functional', 'robustness']], 'Numbers, time limits, loads and qualities → non-functional.'),
  ex: [
    M.ex('Introductory', R`<p>R1: Students shall be able to submit answers online. R2: The system shall process and save submissions within 2 seconds.</p>`,
      R`<ol><li>R1 — an action the system performs → functional.</li><li>R2 — a time limit on that action → non-functional.</li><li>Answer: R1 functional, R2 non-functional (2026 T2 Q11).</li></ol>
<p><b>Now suppose</b> R2 is reworded to “The system shall save each submission.” The time limit is gone; it is now a capability → functional. <b>The mechanism:</b> the number is what moved it to non-functional.</p>`),
    M.ex('Standard', R`<p>Clinic app: (1) support at least 500 simultaneous logins; (2) let users view doctors and slots; (3) notify users when an appointment is booked; (4) process payments within 3 seconds.</p>`,
      R`<p>(2) and (3) are actions → functional. (1) is a load figure and (4) a time limit → non-functional. Key: “2 and 3 functional, 1 and 4 non-functional” (2025 T1 Q37; 2024 T1 Q24 is the grocery twin).</p><p>Trap: (3) “notify” and (4) “process payments” both sound like features; only (4) carries a number.</p>`),
    M.ex('Exam-level', R`<p>Select ALL non-functional: (a) display new products within 5 seconds (b) behave consistently over time (c) the seller can update product prices (d) recover from invalid input (e) the portal must run on Android and iOS.</p>`,
      R`<p>(a) performance, (b) reliability, (d) robustness, (e) portability → non-functional. (c) is a capability → functional. Answer (a), (b), (d), (e). 2026 T1 Q25 had (a), (b), (d); (e) is the extra Spartan item.</p>`)],
  math: M.rule(R`<p><b>Functional = WHAT (capability, f : input → output).</b></p><p><b>Non-functional = HOW WELL (performance, reliability, robustness, portability, security) — usually carries a number.</b></p>`)
    + M.why([['“Within 2 seconds” as functional', 'it limits how fast, not what — non-functional.'], ['“Support 100 simultaneous requests” as functional', 'a load figure is a performance constraint.'], ['“Generate the invoice” as non-functional', 'generating an invoice is a capability; only “within a second” makes requirement 4 non-functional.'], ['Reliability vs robustness swapped', 'reliability = same behaviour over time; robustness = survives bad input.']]),
  conn: R`<p><b>At work:</b> non-functional requirements become SLAs (“99.9% uptime”, “p95 latency under 300 ms”) and are tested with load tests; functional ones become feature tickets with acceptance tests.</p><p><b>Earlier:</b> gathering produces raw statements; this step classifies them.</p><p><b>Later:</b> the SRS lists both classes separately; the “Measurable” in SMART is often what turns a vague wish into a non-functional requirement.</p>`,
  mis: M.ul(['“Requirements 1, 2, 3 functional” when 1 is a load figure (2024 T1 Q24, 2025 T1 Q37).', 'Requirement 2 as functional because it is about “downloading a marksheet” when it says “within 30 seconds” (2024 T3 Q4).', 'Missing “behave consistently over time” as non-functional (2026 T1 Q25).']),
  exam: R`<p><b>Fast method:</b> look for a number, time limit, load, percentage or quality word (reliable, robust, secure, portable). If present → non-functional. If the sentence is only an action → functional. Then find the option with your exact split.</p>`
});
Q({ cp: 'fr-nfr', type: 'mcq', diff: 'easy', q: '“The app must allow users to reset their password via email.” This is:', opts: ['Functional', 'Non-functional (performance)', 'Non-functional (security)', 'Not a requirement'], ans: 0,
  why: ['Correct: a capability.', 'No time or load constraint.', 'It is a feature, even if security-related.', 'It is a requirement.'], sol: 'Action without a number → functional.' });
Q({ cp: 'fr-nfr', type: 'msq', diff: 'moderate', q: 'Select ALL non-functional requirements.', opts: ['99.9% uptime per month', 'Managers can approve leave requests', 'Pages load within 2 seconds on 4G', 'Works on Chrome, Firefox and Safari'], ans: [0, 2, 3],
  why: ['Reliability/availability figure.', 'An action — functional.', 'Performance.', 'Portability.'], sol: 'Numbers and qualities → non-functional.' });
Q({ cp: 'fr-nfr', type: 'mcq', diff: 'moderate', q: '“When a user enters letters in the phone-number field, the app shows a message and keeps running.” Which quality is this?', opts: ['Reliability', 'Robustness', 'Portability', 'Functional requirement only'], ans: 1,
  why: ['Reliability = consistent behaviour over time.', 'Correct: survives unexpected input.', 'Portability = runs on other platforms.', 'It describes how well the system copes, a quality.'], sol: 'Recover from bad input → robustness.' });
Q({ cp: 'fr-nfr', type: 'short', diff: 'easy', q: 'Define reliability and robustness and give one requirement sentence for each.',
  model: '<p><b>Reliability:</b> the system behaves the same way over time in the same environment — “The billing job must produce identical totals every night for the same data.”</p><p><b>Robustness:</b> the system recovers from errors or unexpected input without crashing — “If a CSV row is malformed, the importer must skip it and report it, not crash.”</p>' });

/* ---------------- 2.3 SRS ---------------- */
C({ id: 'srs', week: 2, title: 'The Software Requirements Specification (SRS)', pri: 'Supporting', prereq: ['fr-nfr'],
  src: 'Revision notes W2 §2.5 · Study guide ch.2 §2.5 · PYQ 2023 T3 Q180',
  oneLine: 'A formal document of all requirements, clear to technical and non-technical readers; great when requirements are fixed, heavy when they keep changing.',
  misShort: 'Choosing “write it in technical language for precision” or “keep it vague for flexibility”.',
  intu: R`<p>A hospital and a software vendor sign a contract.</p>
<p>Six months later they argue: “We said reports must be exportable!” “No, you didn’t!”</p>
<p>Who is right? Without a written, agreed list of requirements, nobody can tell.</p>
<p>The <b>SRS</b> is that list. Both sides read it, both sides sign it.</p>
<p>The question: <b>what goes in it, and how should it be written?</b></p>
<p>You might think it should be full of technical precision. But the hospital’s administrators must understand it too. The goal is clarity for <i>everyone</i>.</p>`,
  why: R`<ul><li>2023 T3 Q180 asked the primary focus regarding clarity: clear, unambiguous, understandable by technical and non-technical stakeholders.</li><li>The SRS’s drawback (heavy up-front documents) is the bridge to user stories, the most tested Week 2 idea.</li></ul>`,
  formal: M.def(M.lines([
    '<b>SRS</b> — a formal document organising all the system’s requirements, produced by the system analyst with the team.',
    'Contents (4): broad outline and system description; functional and non-functional requirements; external interface requirements (user, hardware, software, communication interfaces); system features.',
    'Advantages: a formal agreement between customer and developer; reduces rework; basis for cost and schedule estimation; makes future extensions easier.',
    'Drawback: large up-front documentation — good when requirements are fixed, poor when they evolve.']))
    + '<p><b>In words:</b> the SRS is the signed shopping list of the project.</p>',
  vis: M.flow(['Gather', 'Analyse', { t: 'SRS', sub: 'signed by both', hl: true }, 'Estimate cost & schedule', 'Design'], { cap: 'The SRS sits between analysis and everything that is planned from it.' }),
  ex: [
    M.ex('Introductory', R`<p>What should be the primary focus regarding the clarity of requirements in an SRS? (a) technical language for precision (b) ambiguous language for flexibility (c) clear, unambiguous, understandable by technical and non-technical stakeholders (d) only high-level requirements.</p>`,
      R`<p><b>(c)</b> (2023 T3 Q180). (a) shuts out non-technical readers; (b) invites disputes; (d) leaves the document incomplete.</p><p><b>Now suppose</b> the client’s requirements change every two weeks. A huge SRS would be rewritten constantly — that is the drawback, and the reason Agile teams use user stories instead.</p>`),
    M.ex('Standard', R`<p>Name the four parts of an SRS.</p>`, R`<ol><li>Outline and system description.</li><li>Functional and non-functional requirements.</li><li>External interface requirements (user, hardware, software, communication).</li><li>System features.</li></ol>`),
    M.ex('Exam-level', R`<p>Which is <b>NOT</b> an advantage of maintaining an SRS? (a) formal agreement (b) basis for cost estimation (c) reduces future rework (d) lets requirements change freely mid-sprint without paperwork.</p>`,
      R`<p><b>(d)</b> — that is the strength of user stories; an SRS is heavy to change. The other three are the listed advantages.</p>`)],
  math: M.rule('<p><b>SRS = formal, complete, clear-to-everyone list of requirements. Strength: agreement and estimation. Weakness: heavy when requirements change.</b></p>')
    + M.why([['Technical jargon for precision', 'non-technical stakeholders must understand it.'], ['Vague wording for flexibility', 'vagueness is the “ambiguous” defect.'], ['High-level only', 'that is incomplete.']]),
  conn: R`<p><b>At work:</b> tenders and regulated projects still require SRS-style documents (IEEE 830 style).</p><p><b>Earlier:</b> the SRS records the functional and non-functional requirements you classified.</p><p><b>Later:</b> COCOMO estimates (Week 4) start from the size implied by the SRS; Agile replaces it with a backlog of user stories.</p>`,
  mis: M.ul(['“Write requirements in a technical language to ensure precision” (2023 T3 Q180 decoy).', '“Use ambiguous language to allow flexibility” (same paper).']),
  exam: R`<p><b>Fast method:</b> any option that excludes a group of readers, or makes requirements less precise, is wrong.</p>`
});
Q({ cp: 'srs', type: 'mcq', diff: 'easy', q: 'Which is part of an SRS?', opts: ['External interface requirements', 'The source code', 'Sprint retrospective notes', 'The Gantt chart'], ans: 0,
  why: ['Correct.', 'Code is written later.', 'Retrospectives belong to Scrum.', 'Schedules are built from the SRS, not inside it.'], sol: 'Four parts: outline, F/NF requirements, external interfaces, features.' });
Q({ cp: 'srs', type: 'mcq', diff: 'moderate', q: 'The main drawback of the SRS approach is:', opts: ['It cannot record non-functional requirements', 'Large up-front documentation that suits fixed requirements but not evolving ones', 'It is not understood by developers', 'It replaces testing'], ans: 1,
  why: ['It records both classes.', 'Correct.', 'It is written for both technical and non-technical readers.', 'It does not.'], sol: 'Heavy when requirements change → Agile pivot.' });
Q({ cp: 'srs', type: 'mcq', diff: 'moderate', q: 'Which advantage of an SRS helps a manager produce a COCOMO estimate?', opts: ['It is a basis for cost and schedule estimation', 'It removes the need for design', 'It guarantees no requirement changes', 'It contains velocity data'], ans: 0,
  why: ['Correct.', 'Design is still needed.', 'Nothing guarantees that.', 'Velocity is Agile data.'], sol: 'Estimation starts from the documented requirements.' });
Q({ cp: 'srs', type: 'short', diff: 'easy', q: 'List three advantages and one drawback of an SRS.',
  model: '<p>Advantages: formal agreement between customers and developers; reduces future rework because ambiguity is resolved before coding; basis for cost and schedule estimation (also: eases future extensions).</p><p>Drawback: large up-front documentation, which works when requirements are fixed but becomes a burden when they keep changing.</p>' });

/* ---------------- 2.4 User stories & BDD ---------------- */
C({ id: 'user-stories', week: 2, title: 'Behaviour-driven design and user stories', pri: 'Medium', prereq: ['srs'],
  src: 'Revision notes W2 §2.6 · Study guide ch.2 §2.6 · PYQs 2023 T3 Q178, 2026 T1 Q7',
  oneLine: 'As a [role], I want [feature], so that [benefit] — the Role–Feature–Benefit template; a promise for a conversation, sized for one sprint.',
  misShort: 'Picking “Feature–Role–Time” or “Input–Process–Output” as the template.',
  intu: R`<p>A seller on a marketplace says: “I want to see my reviews.”</p>
<p>Why? “So that I can improve what I stock.”</p>
<p>That one breath contains <i>who</i> wants something, <i>what</i> they want, and <i>why</i>.</p>
<p>Write it down on a card: “As a seller, I want to view product reviews, so that I can improve my inventory.”</p>
<p>That card is a <b>user story</b>. It is not a full specification. It is a reminder to have a conversation.</p>
<p>The question: <b>how do Agile teams write requirements, and what is the exact template?</b></p>`,
  why: R`<ul><li>2026 T1 Q7: the correct BDD template is Role–Feature–Benefit.</li><li>2023 T3 Q178: user stories express requirements from the end-user’s perspective.</li><li>Every SMART question (next concept, nine papers) is built on a user story.</li></ul>`,
  formal: M.def(M.lines([
    '<b>BDD (behaviour-driven design)</b> — keep asking questions about the application’s behaviour before and during development; refine requirements continuously; write them as user stories.',
    '<b>User story</b> — a short, informal, plain-language description of something a user wants that has value to them; the smallest unit of work that fits in one sprint.',
    '<b>Template (Role–Feature–Benefit)</b> — As a [type of user], I want [an action], so that [a benefit].',
    'Benefits: lightweight; helps plan and prioritise; focuses on behaviour, not implementation; starts a conversation.',
    'Drawbacks: needs continuous access to users; does not scale well to very large or safety-critical projects.']))
    + '<p><b>In words:</b> who, what, why — on one card.</p>',
  vis: M.graph([{ id: 'r', t: 'As a seller,', x: 110, y: 40, w: 160 }, { id: 'f', t: 'I want to view\nproduct reviews,', x: 110, y: 120, w: 160 }, { id: 'b', t: 'so that I can\nimprove my inventory.', x: 110, y: 210, w: 180 },
    { id: 'R', t: 'ROLE', x: 330, y: 40, w: 90, fill: 'var(--acc2)' }, { id: 'F', t: 'FEATURE', x: 330, y: 120, w: 90, fill: 'var(--acc2)' }, { id: 'B', t: 'BENEFIT', x: 330, y: 210, w: 90, fill: 'var(--acc2)' }],
    [{ a: 'r', b: 'R', noArrow: true, dash: true }, { a: 'f', b: 'F', noArrow: true, dash: true }, { a: 'b', b: 'B', noArrow: true, dash: true }], { cap: 'Role – Feature – Benefit.' }),
  ex: [
    M.ex('Introductory', R`<p>Rewrite “The system shall allow librarians to scan library cards to retrieve user details” as a user story.</p>`,
      R`<p>As a librarian, I want to scan library cards, so that I can retrieve the users’ details.</p><ol><li>Role: librarian.</li><li>Feature: scan cards.</li><li>Benefit: retrieve details.</li></ol><p><b>Now suppose</b> the benefit is left out: “As a librarian, I want to scan cards.” It is still a feature request, but the team loses the <i>why</i> — and with it the ability to judge relevance or find a better solution. The benefit clause is not decoration.</p>`),
    M.ex('Standard', R`<p>Which is the correct BDD user-story template? (a) Feature–Role–Time (b) Input–Process–Output (c) Role–Feature–Benefit (d) Task–Module–Deadline.</p>`, R`<p><b>(c)</b> (2026 T1 Q7). (b) is the functional-requirement mapping idea; (a) and (d) are invented.</p>`),
    M.ex('Exam-level', R`<p>A regulated aircraft-software project with 400 engineers wants to replace its SRS with user stories only. Give the two course-listed drawbacks that apply.</p>`,
      R`<ol><li>Continuous contact with users is often impossible for such a project.</li><li>User stories do not scale to very large or safety-critical projects.</li></ol>`)],
  math: M.rule('<p><b>As a [role], I want [feature], so that [benefit].</b> A user story = the end-user’s perspective, small enough for one sprint, a promise for a conversation.</p>')
    + M.why([['A user story is a detailed description of code structure', 'it describes behaviour, not implementation.'], ['A list of tasks assigned to developers', 'tasks come from stories; the story is the user’s need.'], ['Input–Process–Output', 'that is the functional “f : I → O” view, not the story template.']]),
  conn: R`<p><b>At work:</b> Jira “Story” tickets use exactly this template, plus acceptance criteria.</p><p><b>Earlier:</b> stories are the Agile replacement for a heavy SRS.</p><p><b>Later:</b> SMART makes each story testable and sprint-sized; Week 4 assigns story points and measures velocity.</p>`,
  mis: M.ul(['“Feature–Role–Time” and “Input–Process–Output” (2026 T1 Q7).', '“A form of documentation used for project management” and “a list of tasks” (2023 T3 Q178).']),
  exam: R`<p><b>Fast method:</b> the template always starts with a <i>role</i> and ends with a <i>benefit</i>. Any other order or content is a decoy.</p>`
});
Q({ cp: 'user-stories', type: 'mcq', diff: 'easy', q: 'In “As a buyer, I want to save items to a wishlist, so that I can buy them later”, the benefit is:', opts: ['buyer', 'save items to a wishlist', 'buy them later', 'the wishlist'], ans: 2,
  why: ['That is the role.', 'That is the feature.', 'Correct: the “so that” clause.', 'Part of the feature.'], sol: 'Benefit = “so that …”.' });
Q({ cp: 'user-stories', type: 'mcq', diff: 'moderate', q: 'BDD primarily means:', opts: ['Writing all code before any requirements', 'Asking questions about the application’s behaviour before and during development and expressing requirements as user stories', 'Designing the database first', 'Testing only after release'], ans: 1,
  why: ['Backwards.', 'Correct.', 'Not related.', 'Not related.'], sol: 'Behaviour-driven: behaviour questions → user stories, refined continuously.' });
Q({ cp: 'user-stories', type: 'msq', diff: 'moderate', q: 'Select ALL listed benefits of user stories.', opts: ['Lightweight', 'Help plan and prioritise', 'Scale well to safety-critical systems', 'Focus on behaviour rather than implementation'], ans: [0, 1, 3],
  why: ['Benefit.', 'Benefit.', 'That is a listed drawback.', 'Benefit.'], sol: 'Drawbacks: need user access; poor for very large/safety-critical projects.' });
Q({ cp: 'user-stories', type: 'short', diff: 'easy', q: 'Write a user story for a student who wants to download their marksheet, and label its three parts.',
  model: '<p>“As a <b>student</b> (role), I want to <b>download my marksheet as a PDF</b> (feature), so that <b>I can submit it with job applications</b> (benefit).”</p>' });

/* ---------------- 2.4 SMART ---------------- */
C({ id: 'smart', week: 2, title: 'SMART user stories', pri: 'High', prereq: ['user-stories'],
  src: 'Revision notes W2 §2.6 SMART · Study guide ch.2 §2.6.4 · PYQs 2023 T1 Q237, 2023 T2 Q15, 2024 T1 Q29, 2024 T2 Q15, 2024 T3 Q21, 2025 T1 Q33, 2025 T2 Q136, 2025 T3 Q8, 2026 T2 Q12',
  oneLine: 'Specific (one reading), Measurable (a number to check), Achievable (fits one iteration — split it), Relevant (business value), Timeboxed (stop/split when time runs out).',
  misShort: 'Choosing Timeboxed when a too-big story is split up front — that is Achievable.',
  intu: R`<p>A user story says: “I want to search a medicine, so that I get a list of brand names.”</p>
<p>Search by what? Name? Symptom? Two developers would build two different things.</p>
<p>Fix it: “search a medicine <i>by its generic name</i>”. Now there is one reading. That is <b>Specific</b>.</p>
<p>Another story says results should come “within a reasonable time”. Is 6 seconds reasonable? Nobody can test that.</p>
<p>Fix it: “within 1 second”. Now a test can pass or fail. That is <b>Measurable</b>.</p>
<p>A third story — “search the catalogue and place an order” — will not fit in one two-week sprint.</p>
<p>Fix it: split into “search catalogue” and “place order”. That is <b>Achievable</b>.</p>
<p>The question: <b>which SMART letter does a given refinement improve?</b> Each letter has its own signature change.</p>`,
  why: R`<ul><li>Asked in nine of the eleven papers — the most reliable Week 2 marks.</li><li>Measurable (“reasonable time” → a number) is keyed four times; Achievable (split into smaller stories) three times; Specific and Time-boxed once each.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Specific</b> — no ambiguity; one reading. <i>Signature:</i> adds a qualifier (“by its generic name”, “by title”).',
    '<b>Measurable</b> — known, verifiable expected results. <i>Signature:</i> a vague word becomes a number (“reasonable time” → “within 4 seconds”, “refresh every 15 seconds”).',
    '<b>Achievable</b> — can be implemented in one Agile iteration. <i>Signature:</i> a big story is subdivided into smaller ones.',
    '<b>Relevant</b> — has real business value. <i>Signature:</i> asking “why / so what?”.',
    '<b>Timeboxed</b> — stop, split or reschedule when the allotted time runs out. <i>Signature:</i> a deadline/timeframe, or stopping work that is overrunning.']))
    + '<p><b>In words:</b> clear, checkable, sprint-sized, worth doing, and bounded in time.</p>',
  vis: M.table(['Before', 'After', 'Letter'], [['search a medicine', 'search a medicine <b>by its generic name</b>', 'Specific'], ['within a reasonable time', '<b>within 4 seconds</b>', 'Measurable'], ['search catalogue and place order (too big)', '<b>1a: search catalogue · 1b: place order</b>', 'Achievable'], ['bundle suggestions (no deadline)', '<b>deliver in this sprint</b>', 'Timeboxed'], ['add a feature nobody needs', 'ask <b>why</b>; drop if no value', 'Relevant']], 'Each letter has a signature edit.'),
  ex: [
    M.ex('Introductory', R`<p>“…so that I can retrieve the users’ details within a reasonable time” is changed to “…within a second”. Which property improves?</p>`,
      R`<ol><li>What changed? A vague phrase became a number.</li><li>Can a tester now pass/fail it? Yes.</li><li>So: <b>Measurable</b> (2023 T2 Q15; same as 2024 T2 Q15, 2025 T3 Q8, 2026 T2 Q12).</li></ol>
<p><b>Now suppose</b> the change had been “I want to scan library cards” → “I want to scan the <i>barcode on</i> library cards”. No number appears; the meaning narrows → <b>Specific</b>. <b>The mechanism:</b> adding a number = Measurable; adding a qualifier = Specific.</p>`),
    M.ex('Standard', R`<p>A story cannot be completed in one Agile iteration, so it is subdivided into smaller stories. This makes it…</p>`,
      R`<p><b>Achievable</b> (2023 T1 Q237, 2024 T3 Q21, 2025 T1 Q33). Not Timeboxed: timeboxing is stopping or rescheduling when time <i>runs out during</i> work; splitting a too-big story <i>up front</i> is Achievable.</p>`),
    M.ex('Exam-level', R`<p>“As a seller, I want suggestions on bundling products based on previous buyer behaviour, so that I can increase cross-selling.” The Scrum Master notes the story has no deadline or timeframe. Which letter is lacking? Then: which single edit would make the <i>original</i> 2024 T1 medicine story Specific?</p>`,
      R`<ol><li>No deadline/timeframe → <b>Time-boxed</b> is lacking (2025 T2 Q136).</li><li>“search a medicine” → “search a medicine <b>by its generic name</b>” → Specific (2024 T1 Q29).</li></ol><p>Note: Relevant is not lacking — the cross-selling benefit gives it business value.</p>`)],
  math: M.rule('<p><b>Qualifier → Specific. Number → Measurable. Split to fit a sprint → Achievable. Business value → Relevant. Deadline / stop when time runs out → Timeboxed.</b></p>')
    + M.why([['Timeboxed for splitting a too-big story', 'splitting up front so it fits = Achievable.'], ['Specific for “within 4 seconds”', 'the meaning was already clear; the number makes it checkable → Measurable.'], ['Measurable for “by its generic name”', 'no number was added; ambiguity was removed → Specific.'], ['Relevant for a missing deadline', 'the story still has value; it lacks a timeframe → Timeboxed.']]),
  conn: R`<p><b>At work:</b> “acceptance criteria” on a Jira story are the Measurable part; sprint planning enforces Achievable.</p><p><b>Earlier:</b> SMART repairs the ambiguous and incomplete requirements of concept 2.1.</p><p><b>Later:</b> Week 4 — stories that are Achievable get story points; velocity measures how many points a sprint completes.</p>`,
  mis: M.ul(['Timeboxed vs Achievable for splitting (2023 T1 Q237, 2024 T3 Q21, 2025 T1 Q33).', 'Specific vs Measurable when a number is added (2026 T2 Q12 offers Specific first).', 'Relevant offered when a timeframe is missing (2025 T2 Q136).']),
  exam: R`<p><b>Fast method — compare before and after, and ask what kind of edit it is:</b></p><ol><li>A number/unit appeared? → Measurable.</li><li>A qualifier narrowed the meaning? → Specific.</li><li>The story was split because it would not fit one iteration? → Achievable.</li><li>A deadline/timeframe is at stake? → Timeboxed.</li><li>Value questioned? → Relevant.</li></ol>`
});
Q({ cp: 'smart', type: 'mcq', diff: 'easy', q: '“Show results quickly” becomes “show results within 3 seconds”. Which SMART property improves?', opts: ['Specific', 'Measurable', 'Achievable', 'Relevant'], ans: 1,
  why: ['The meaning was already single; a number was added.', 'Correct.', 'Size is unchanged.', 'Value is unchanged.'], sol: 'Number added → Measurable.' });
Q({ cp: 'smart', type: 'mcq', diff: 'moderate', q: '“I want to filter orders” becomes “I want to filter orders by delivery date”. Which property improves?', opts: ['Specific', 'Measurable', 'Achievable', 'Timeboxed'], ans: 0,
  why: ['Correct: a qualifier removes ambiguity.', 'No number or verifiable result was added.', 'Not split.', 'No timeframe.'], sol: 'Qualifier → Specific.' });
Q({ cp: 'smart', type: 'mcq', diff: 'hard', q: 'Mid-sprint, a story is clearly overrunning its allotted time, so the team stops, splits off the remainder and reschedules it. This applies:', opts: ['Achievable', 'Timeboxed', 'Measurable', 'Specific'], ans: 1,
  why: ['Achievable is about sizing up front.', 'Correct: stop/split/reschedule when time runs out.', 'No new measure.', 'No new qualifier.'], sol: 'Stopping when time runs out = Timeboxed (the Achievable/Timeboxed trap, reversed).' });
Q({ cp: 'smart', type: 'short', diff: 'moderate', q: 'Explain the difference between Achievable and Timeboxed with one example each.',
  model: '<p><b>Achievable:</b> before starting, a story too big for one iteration is split so each part fits — “search catalogue and place order” → two stories.</p><p><b>Timeboxed:</b> during work, when the time allotted to a story runs out, the team stops, splits or reschedules rather than letting it expand — e.g. halting an overrunning report feature at the end of its two days and moving the rest to the next sprint.</p>' });

/* ---------------- Week 2 harder variations ---------------- */
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A ticketing app: fans buy tickets in it; a corporate travel desk buys tickets in it on behalf of executives who never open it; stadium security receives a daily gate list generated by the system but never logs in. Which classification is correct for executives and stadium security?', opts: ['Executives — secondary; security — tertiary', 'Executives — tertiary; security — secondary', 'Executives — primary; security — tertiary', 'Both — secondary'], ans: 0,
  why: ['Correct: through an intermediary; affected without using.', 'Swapped.', 'Executives never use it themselves.', 'Security has nobody using the system on its behalf.'],
  sol: 'Intermediary → secondary; no use at all but affected → tertiary.', trap: 'Receiving output from the system feels like “using” it.' }, ['cs3001-2023T1-235', 'cs3001-2023T2-4', 'cs3001-2024T3-19', 'cs3001-2025T2-132']);
VQ({ kind: 'counting', type: 'num', q: 'Online exam platform. How many of these are <b>primary</b> users? (1) Students taking exams (2) Invigilators monitoring live (3) Parents who receive an emailed result (4) Question setters uploading papers (5) The university’s accreditation agency reading annual reports (6) A dean whose office staff download reports for her.', ans: 3, tol: 0,
  sol: 'Primary: students (1), invigilators (2), question setters (4) → 3. Parents and agency are tertiary; the dean is secondary.', trap: 'Thinking only one group can be primary.' }, ['cs3001-2025T2-132', 'cs3001-2023T1-235']);
VQ({ kind: 'scenario', type: 'mcq', q: 'Requirement A: “Every user must re-verify by OTP at each login.” Requirement B: “Trusted devices must never be asked for an OTP.” Requirement C: “Login should be secure.” Which pair correctly names the problems with A+B and with C?', opts: ['A+B inconsistent; C ambiguous', 'A+B ambiguous; C incomplete', 'A+B incomplete; C inconsistent', 'A+B inconsistent; C non-functional so no problem'], ans: 0,
  why: ['Correct: A and B contradict; “secure” has many readings.', 'A and B are each clear; together they clash.', 'Nothing is missing from A+B; they conflict.', 'Classification does not cure vagueness.'],
  sol: 'Contradiction between two → inconsistent; many readings in one → ambiguous.', trap: 'Option 4 mixes classification with defects.' }, ['cs3001-2025T2-133']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A requirements engineer emails the same 30 multiple-choice questions to 4,000 delivery riders across India, with no follow-up. Which technique — and which weakness applies most?', opts: ['Structured interview — slow', 'Questionnaire — misses hidden requirements because there is no follow-up', 'Focus group — dominated by loud voices', 'Documentation — rules may be outdated'], ans: 1,
  why: ['Nothing is asked aloud.', 'Correct.', 'There is no group discussion.', 'No documents are read.'],
  sol: 'Sent + many + specific → questionnaire; its weakness is no follow-up.', trap: '“Same questions to everyone” also describes a structured interview — the medium (emailed) decides.' }, ['cs3001-2023T2-5', 'cs3001-2024T3-20', 'cs3001-2026T1-6', 'cs3001-2024T2-4', 'cs3001-2026T2-2']);
VQ({ kind: 'counting', type: 'num', q: 'For a GST-filing app the team: (1) reads the GST Act and rules, (2) sits with an accountant for an hour asking whatever comes up, (3) watches clerks file returns at a CA firm, (4) reads competitor apps’ help FAQs, (5) emails a 20-question survey to 2,000 shopkeepers, (6) reads the client company’s internal filing procedure manual. How many activities are <b>documentation</b>?', ans: 3, tol: 0,
  sol: '(1), (4), (6) → 3. (2) unstructured interview, (3) naturalistic observation, (5) questionnaire.', trap: 'Competitor FAQs are documents too (2025 T2 Q135).' }, ['cs3001-2023T1-236', 'cs3001-2025T1-39', 'cs3001-2025T2-135', 'cs3001-2023T3-179']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which pairing of technique and main objective is <b>INCORRECT</b>?', opts: ['Interviews — to explore issues', 'Focus groups — to collect multiple viewpoints', 'Naturalistic observation — to understand procedures, regulations and standards', 'Documentation — to understand procedures, regulations and standards'], ans: 2,
  why: ['Correct pairing.', 'Correct pairing.', 'Incorrect — observation is for understanding the context.', 'Correct pairing.'],
  sol: 'The 2024 T1 Q25 match, inverted.', trap: 'Options 3 and 4 share the same objective text; only one technique owns it.' }, ['cs3001-2024T1-25', 'cs3001-2025T3-6', 'cs3001-2025T1-23']);
VQ({ kind: 'counting', type: 'num', q: 'Hotel-booking app. How many are <b>non-functional</b>? (1) Users can cancel a booking up to 24 hours before check-in. (2) Search results appear within 2 seconds for 95% of queries. (3) The app supports 20,000 concurrent users during sales. (4) The app emails a confirmation after payment. (5) If the payment gateway times out, the app shows a retry option and does not crash. (6) The app runs on Android 9 and above.', ans: 4, tol: 0,
  sol: 'Non-functional: (2) performance, (3) load, (5) robustness, (6) portability → 4. (1) and (4) are capabilities.', trap: '(1) contains a number (24 hours) but it is a business rule describing what the system allows — a functional capability. Numbers are a strong hint, not an absolute rule.' }, ['cs3001-2024T1-24', 'cs3001-2025T1-37', 'cs3001-2026T1-25']);
VQ({ kind: 'negated', type: 'mcq', q: 'R1: “The portal must lock an account after 5 failed logins.” R2: “The portal must respond to a login attempt within 1 second.” Which statement is <b>NOT</b> true?', opts: ['R2 is non-functional', 'R1 describes a behaviour the system performs', 'Both are non-functional because both contain numbers', 'R2 would be verified by measurement'], ans: 2,
  why: ['True.', 'True: locking is an action.', 'Not true — R1’s number is part of a rule about what the system does; it remains functional.', 'True.'],
  sol: 'A number inside a business rule does not by itself make a requirement non-functional; ask “what” vs “how well”.', trap: 'Blindly applying “number → non-functional”.' }, ['cs3001-2024T2-5', 'cs3001-2024T3-4', 'cs3001-2025T3-7', 'cs3001-2026T2-11']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Which instruction about SRS clarity is the best one?', opts: ['Use precise technical terms throughout so developers cannot misread it', 'Write it so that both technical and non-technical stakeholders understand every requirement unambiguously', 'Keep requirements high-level so developers have freedom', 'Leave wording flexible so that later changes need no re-signing'], ans: 1,
  why: ['Precise but excludes non-technical readers — near miss.', 'Correct.', 'Incomplete.', 'Ambiguous.'],
  sol: 'Clarity for everyone is the goal.', trap: 'Option 1 sounds professional.' }, ['cs3001-2023T3-180']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>NOT</b> a valid description of a user story?', opts: ['Expresses a requirement from the end-user’s perspective', 'Follows As a [role], I want [feature], so that [benefit]', 'Is a detailed description of how the code is structured', 'Is small enough to be completed in one sprint'], ans: 2,
  why: ['Valid.', 'Valid.', 'Not valid — stories describe behaviour, not implementation.', 'Valid.'],
  sol: 'Stories are about behaviour and value.', trap: 'Three valid descriptions listed first.' }, ['cs3001-2023T3-178', 'cs3001-2026T1-7']);
VQ({ kind: 'chained', type: 'mcq', block: { id: 'V2', text: '<p>Original story: “As a commuter, I want to book a cab and pay, so that I reach office.” Refinement 1: split into “book a cab” and “pay for a ride”. Refinement 2: “book a cab” becomes “book a cab <i>by entering a pickup pin-code</i>”. Refinement 3: “…the nearest driver is shown <i>within 5 seconds</i>”.</p>' },
  q: 'Which SMART letters do Refinements 1, 2 and 3 improve, in order?', opts: ['Achievable, Specific, Measurable', 'Timeboxed, Specific, Measurable', 'Achievable, Measurable, Specific', 'Specific, Achievable, Measurable'], ans: 0,
  why: ['Correct.', 'Splitting up front is Achievable, not Timeboxed.', '2 adds a qualifier, 3 adds a number — swapped.', '1 is a split, not a qualifier.'],
  sol: 'Split → A; qualifier → S; number → M. One wrong link kills the option.', trap: 'Option 2 differs only in the first letter.' }, ['cs3001-2023T1-237', 'cs3001-2024T3-21', 'cs3001-2025T1-33', 'cs3001-2024T1-29']);
VQ({ kind: 'negated', type: 'mcq', q: '“…so that I can see the fare within a reasonable time” becomes “…within 4 seconds”. Which statement is <b>INCORRECT</b>?', opts: ['The story is now more Measurable', 'A tester can now pass or fail it', 'The story is now more Specific because it is shorter', 'The change adds a verifiable expected result'], ans: 2,
  why: ['Correct statement.', 'Correct statement.', 'Incorrect — adding a number improves Measurable; length has nothing to do with Specific.', 'Correct statement.'],
  sol: 'Number → Measurable.', trap: 'Specific is the most-offered decoy for this family.' }, ['cs3001-2023T2-15', 'cs3001-2024T2-15', 'cs3001-2025T3-8', 'cs3001-2026T2-12']);
VQ({ kind: 'scenario', type: 'mcq', q: '“As a teacher, I want to auto-grade MCQ tests, so that I save time.” The product owner says: “Great idea, but it must be delivered within the next two-week sprint or dropped.” Which SMART letter is being enforced?', opts: ['Relevant', 'Timeboxed', 'Achievable', 'Specific'], ans: 1,
  why: ['Value is not questioned.', 'Correct: a fixed timeframe.', 'Nothing is split.', 'No ambiguity is removed.'],
  sol: 'Deadline/timeframe → Timeboxed (2025 T2 Q136 twin).', trap: 'Relevant tempts because the PO comments on value.' }, ['cs3001-2025T2-136']);

[['Primary user', 'Frequent, direct user of the system.'], ['Secondary user', 'Uses the system through an intermediary, not directly.'], ['Tertiary user', 'Does not use the system at all but is affected by it or influences its purchase.'],
 ['Requirement gathering', 'Actively collecting what the system must do from clients and stakeholders.'], ['Requirement analysis', 'Checking gathered requirements for completeness, consistency and absence of ambiguity.'],
 ['Ambiguous requirement', 'Can be read in more than one way.'], ['Inconsistent requirements', 'Two requirements that contradict each other.'], ['Incomplete requirement', 'Something important was never stated.'],
 ['Questionnaire', 'Specific questions sent to a large group; no follow-up.'], ['Structured interview', 'Fixed questions, same order, asked to everyone.'], ['Semi-structured interview', 'Fixed base questions plus free follow-ups.'], ['Unstructured interview', 'Open-ended conversation; follow-ups adapt to answers.'],
 ['Focus group', 'Group discussion collecting multiple viewpoints, consensus and conflict.'], ['Naturalistic observation', 'Watching users perform tasks in their real setting.'], ['Documentation (technique)', 'Reading procedures, rules, regulations and standards.'],
 ['Functional requirement', 'What the system does — a capability, input → output.'], ['Non-functional requirement', 'How well the system behaves — performance, reliability, robustness, portability, security.'],
 ['Reliability', 'Behaves the same way over time in the same environment.'], ['Robustness', 'Recovers from errors or unexpected input without crashing.'], ['SRS', 'Software Requirements Specification: formal document of all requirements.'],
 ['BDD', 'Behaviour-driven design: ask about behaviour continuously; write requirements as user stories.'], ['User story', 'As a [role], I want [feature], so that [benefit] — smallest unit of work for a sprint.'], ['SMART', 'Specific, Measurable, Achievable, Relevant, Timeboxed.']].forEach(([t, d]) => GLOSS(t, d, 2));
[['Courier phoned by the shop, never uses the app — user type?', 'Tertiary.'], ['Executive whose assistant uses the app?', 'Secondary.'], ['Two stakeholders contradict each other — problem?', 'Inconsistent.'],
 ['Fixed list asked aloud to everyone?', 'Structured interview.'], ['Open-ended, adapting follow-ups?', 'Unstructured interview.'], ['Specific questions to thousands?', 'Questionnaire.'], ['Visit shops and watch customers?', 'Naturalistic observation.'], ['Read regulations / policies / FAQs?', 'Documentation.'], ['Why focus groups?', 'Multiple viewpoints; consensus and conflicts.'],
 ['“Within 3 seconds” — F or NF?', 'Non-functional.'], ['Reliability vs robustness?', 'Same over time vs recovers from bad input.'], ['User-story template?', 'Role – Feature – Benefit.'],
 ['“Reasonable time” → “4 seconds” improves…', 'Measurable.'], ['Split a story too big for one sprint…', 'Achievable.'], ['Add “by generic name”…', 'Specific.'], ['Story lacks a deadline…', 'Timeboxed.']].forEach(([f, b]) => CARD(f, b, 2));
