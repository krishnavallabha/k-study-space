/* ============================================================
   Strategies for Professional Growth (gn3001) — course registry
   Weeks 1–8 (the quiz syllabus). Weeks 9–12 later: add w9.js … w12.js
   and widen the exam weeks below.
   ============================================================ */
COURSE({
  code: 'gn3001', title: 'Strategies for Professional Growth', short: 'SPG', color: '#7a4b8c',
  blurb: 'The people side of work: teams, communication and listening, presentations, leadership, emotional intelligence and conflict, working across cultures, personal finance and economic sense, and creative thinking. Weeks 1–8.',
  exams: [
    { id: 'q2', label: 'Quiz 2', weeks: [1, 2, 3, 4, 5, 6, 7, 8], note: 'The quiz syllabus is Weeks 1–8. Ten Quiz 2 papers and one Quiz 1 paper were provided; every question in them tests Weeks 1–8 content.' },
    { id: 'et', label: 'End term', weeks: [1, 2, 3, 4, 5, 6, 7, 8], note: 'For now: a cumulative mock over Weeks 1–8 built from quiz past papers. No end-term past papers were provided, so nothing here is labelled an end-term PYQ.' }
  ],
  sourceNote: `<p><b>Source priority:</b> PYQs › week-wise notes › books › general knowledge.</p>
<h3>Materials read</h3>
<table class="t"><tr><th>File</th><th>Type</th><th>Weeks</th><th>Status</th></tr>
<tr><td>gn3001_2023T1_Q1 … 2026T2_Q2 _NA.pdf (11 files)</td><td>One Quiz 1 and ten Quiz 2 papers with the official key (green ticks)</td><td>1–8</td><td>289 SPG questions mapped. Questions from other subjects that share a PDF (e.g. a neural-network question, a factory-efficiency question) were excluded. Image stems (balance sheets, tables) were read and typed out.</td></tr>
<tr><td>spg_by_AT.pdf</td><td>Week-wise study guide, Weeks 1–12</td><td>1–8 used</td><td>Primary notes source; Weeks 9–12 parked.</td></tr>
<tr><td>spg notes.pdf</td><td>Week-wise revision notes with model short answers</td><td>1–12</td><td>Cross-checked; used for week placement (e.g. Gardner’s multiple intelligences in Week 4).</td></tr>
<tr><td>SPG_Complete_Notes_by_Anmol_Kansal.pdf</td><td>Notes, Weeks 1–7</td><td>1–7</td><td>Cross-checked definitions.</td></tr>
<tr><td>SPG.docx</td><td>Notes</td><td>mixed</td><td>Cross-checked.</td></tr></table>
<p class="small muted">No books, PDFs or notes are stored in this repository. Page numbers and timestamps are never cited.</p>
<p class="small"><b>Short-answer (case) questions</b> have no official key: they are evaluated by hand. Their model answers here are written for this platform and marked <i>key derived</i>. Several papers redact the case text; where that happened the question is kept as printed.</p>`
});

const SPG = 'gn3001';
[['2023T1q1', 'Quiz 1 · 2023 T1'], ['2023T1', 'Quiz 2 · 2023 T1'], ['2023T2', 'Quiz 2 · 2023 T2'], ['2023T3', 'Quiz 2 · 2023 T3'], ['2024T1', 'Quiz 2 · 2024 T1'], ['2024T2', 'Quiz 2 · 2024 T2'],
 ['2024T3', 'Quiz 2 · 2024 T3'], ['2025T2', 'Quiz 2 · 2025 T2'], ['2025T3', 'Quiz 2 · 2025 T3'], ['2026T1', 'Quiz 2 · 2026 T1'], ['2026T2', 'Quiz 2 · 2026 T2']]
  .forEach(([id, label]) => PAPER(SPG, id, { label, exam: id.endsWith('q1') ? 'q1' : 'q2' }));

[
  ['g-teamtype', 'Group or team type', 1, 'Members from different specialities = cross-functional; no boss and own decisions = self-managed; dispersed members on video calls = virtual. “All teams are groups” is true; the reverse is not.'],
  ['g-tuckman', 'Stage of team development', 1, 'Disagreement and competing for status = Storming; agreeing on how to work = Norming; high output = Performing.'],
  ['g-teamdyn', 'Team dynamics: synergy, loafing, groupthink, roles', 1, 'Bigger team → less individual effort (social loafing). Groupthink = losing independent thinking for the sake of cohesion.'],
  ['g-teameff', 'What makes a team effective', 1, 'Coordination = divide and track; collaboration = work it out together. Psychological safety = safe to speak up and admit mistakes, not “everyone agrees”.'],
  ['g-teamcase', 'Teamwork case analysis', 1, 'Pick the option that fixes coordination and communication; extreme options (“micromanage”, “keep information”) are always wrong.'],
  ['g-commbarrier', 'Communication barriers and flows', 2, 'Jargon = semantic barrier; unfamiliar concepts = information overload in the course’s list; a policy distorted on its way down = downward communication.'],
  ['g-listen', 'Listening skills', 2, 'RASA = Receive, Appreciate, Summarize, Ask. Active listening = open questions, restating, encouraging.'],
  ['g-commpractice', 'Communication practice at work', 2, 'Choose specific, constructive, listening-first options; reject confrontation, vagueness or authority alone.'],
  ['g-present', 'Presentation skills', 3, 'Outline = list of major headings. Summarising does not add new insights. Open hand gestures; pause; repeat audience questions.'],
  ['g-writing', 'Professional writing', 3, 'Steps in sequence = chronological order. Appearance of a document sends a non-verbal message.'],
  ['g-lstyle', 'Leadership style', 4, 'Telling people how to do the job, plans and reports = job/task-centred; greeting, asking for ideas, psychological safety = employee/people-centred.'],
  ['g-leadself', 'Leading yourself and others', 4, 'Outside your control but affects you directly = sphere of influence; indirectly = sphere of concern. Squirrel = worthwhile work.'],
  ['g-mi', 'Multiple intelligences (Gardner)', 4, 'Intrapersonal = knowing yourself; interpersonal = understanding others. All intelligences can be developed.'],
  ['g-coach', 'Coaching and managing people', 4, 'A collaborative coach generates alternatives with the person; does not diagnose and prescribe.'],
  ['g-eiconstruct', 'Which EI construct is shown', 5, 'Recognising your own feelings = self-awareness; holding back an impulse = self-regulation/management; reading others = empathy; persuading and getting along = social skills.'],
  ['g-eitheory', 'Emotional intelligence ideas', 5, 'Emotions are brief and triggered; moods last longer. Amygdala hijack = sudden anger you regret. 6R: Recognise, Respect, Rationalise …'],
  ['g-tki', 'Conflict management style (TKI)', 5, 'Axes: assertiveness (up) and cooperativeness (across). Give in to keep the relationship = accommodating; win–win with time = collaborating; urgent call = competing/forcing.'],
  ['g-culture', 'Culture: definition and iceberg', 6, 'Visible: food, language, festivals, flags. Invisible: attitudes to work, privacy, time, authority.'],
  ['g-culturedim', 'Cultural dimensions and context', 6, 'Formal titles for authority = power distance; individual credit = individualism; SOPs before any change = uncertainty avoidance. Written, explicit = low-context.'],
  ['g-cultureshock', 'Culture shock stages', 6, 'Excitement = elation/honeymoon; frustration over small differences = transition; adopting local habits = integration.'],
  ['g-culturestrat', 'Cultural strategies and barriers', 6, 'Adopt the local system = accommodation; impose your own = dominance; blend both = synergy. “Ours is superior” = ethnocentrism.'],
  ['g-finstmt', 'Financial statements', 7, 'Income statement = profitability; balance sheet = assets and liabilities; a credit sale = accounts receivable. Borrowing does not raise owner’s equity.'],
  ['g-pbs', 'Personal balance sheet and net worth', 7, 'Net worth = total assets − total liabilities. Swapping one asset for another (stocks → mutual funds) leaves net worth unchanged.'],
  ['g-invest', 'Investments, risk and banking products', 7, 'Higher return comes with higher risk. Savings accounts are not long-term growth investments. Sovereign Gold Bonds are the tax-efficient gold.'],
  ['g-returns', 'Returns, inflation and money maths', 7, 'Real return ≈ (1 + nominal) ÷ (1 + inflation) − 1. Rule of 72: years to double ≈ 72 ÷ rate. Irregular cash flows → XIRR.'],
  ['g-econ', 'Economic sense', 7, 'Too much demand chasing too few goods = demand-pull inflation. Opportunity cost = value of the next best alternative.'],
  ['g-creative', 'Creativity', 8, 'Creativity is iterative and partly social, not inadvertent. Drawing on diverse experiences = intersections.'],
  ['g-thinking', 'Thinking skills and design thinking', 8, 'Judging evidence = critical thinking; framing problems from users’ viewpoint = design thinking.'],
  ['g-sa', 'Written case answer', 0, 'Name the framework the question asks for, apply each element to a named person in the case, and finish with a recommendation within the word limit.']
].forEach(([id, t, week, trap]) => FAMILY(id, { t, week: week || null, trap }));
