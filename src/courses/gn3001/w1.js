/* ===================== SPG WEEK 1 — Teamwork ===================== */
WEEK({ course: 'gn3001', n: 1, title: 'Teamwork and Getting Along',
  blurb: 'A group becomes a team when people share a goal and their combined output beats the sum of their parts. Teams come in types (functional, cross-functional, virtual, self-managed), pass through stages (forming to adjourning), suffer predictable problems (social loafing, groupthink) and succeed for predictable reasons (clear goals, communication, psychological safety, coordination and collaboration).',
  topics: [
    { title: '1.1 Groups, teams and team types', cs: ['team-basics'] },
    { title: '1.2 How teams develop and change', cs: ['team-development'] },
    { title: '1.3 Team dynamics: synergy, loafing, groupthink, norms', cs: ['team-dynamics'] },
    { title: '1.4 What makes a team effective', cs: ['team-effectiveness'] }] });

/* ---------------- 1.1 Groups, teams, team types ---------------- */
C({ id: 'team-basics', week: 1, title: 'Groups, teams and the four team types', pri: 'High', prereq: [],
  src: 'Study guide W1 (teams vs groups, team types, Belbin) · spg notes W1 · PYQs 2023 T1 Q1 Q32 Q39 Q52, 2023 T2 Q107 Q109, 2023 T3 Q206–210, 2024 T2 Q92 Q96, 2024 T3 Q194–199',
  oneLine: 'All teams are groups, not all groups are teams. Type = who is in it and how it is run: same department, mixed specialities, linked by technology, or no boss.',
  misShort: 'Calling a mixed-speciality team “functional”, or a team that is told what to do “self-managed”.',
  intu: R`<p>Five people sit in the same office and each fills in their own sales report. They share a room, a manager and maybe lunch. That is a <b>group</b>.</p>
<p>Now give the same five people one target: launch a product in three months. The designer’s work feeds the engineer, the engineer’s feeds the marketer, and nobody succeeds unless the launch succeeds. That is a <b>team</b>.</p>
<p>The question this concept answers: <b>what makes a collection of people a team, and which kind of team is it?</b></p>
<p>The papers love the second half. They describe a team in one sentence and ask you to name its type. Four cues decide it: <i>where the members come from</i>, <i>where they sit</i>, and <i>who directs them</i>.</p>`,
  why: R`<ul><li>The team-type match is the most repeated Week 1 item: 2023 T3 Q206–210 and 2024 T3 Q194–198 are five-question blocks, and 2024 T2 Q92 is a list match.</li><li>“All teams are groups, and all groups are teams” (2024 T2 Q96) and the virtual-team MSQs (2023 T1 Quiz 1 Q52, 2024 T3 Q199) recur.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Group</b> — two or more people who interact and depend on each other for some purpose. Members share information but each is accountable for their own work.',
    '<b>Team</b> — a group whose members share a common goal, are mutually accountable, and produce <b>synergy</b>: a combined result greater than the sum of individual efforts.',
    '<b>Formal group</b> — set up by the organisation for a task. <b>Informal group</b> — forms by choice for social reasons (lunch friends, after-work cricket).',
    '<b>Functional (problem-solving) team</b> — members from the <i>same department</i> improving their own work.',
    '<b>Cross-functional team</b> — members from <i>various specialities or units</i>, sometimes including customers or suppliers.',
    '<b>Virtual team</b> — <i>physically dispersed</i> members linked by technology (video calls, shared tools).',
    '<b>Self-managed team</b> — usually 10–15 people doing interdependent jobs who take on <i>supervisory</i> duties themselves: no boss directs them.',
    '<b>Belbin team roles</b> — nine roles in three groups: <i>thinking</i> (Plant, Monitor Evaluator, Specialist), <i>action</i> (Shaper, Implementer, Completer Finisher), <i>people</i> (Coordinator, Teamworker, Resource Investigator).']))
    + '<p><b>In words:</b> a team is a group plus a shared goal plus synergy. Its type is read from three cues: same or mixed specialities, together or dispersed, directed or self-directing.</p>',
  vis: M.graph([
    { id: 'q', t: 'Who directs the team?', x: 260, y: 30, shape: 'diamond', w: 210, h: 54 },
    { id: 's', t: 'Self-managed', x: 470, y: 120, hl: true, w: 130 },
    { id: 'd', t: 'Members dispersed,\nlinked by technology?', x: 200, y: 130, shape: 'diamond', w: 220, h: 70 },
    { id: 'v', t: 'Virtual', x: 430, y: 230, w: 110 },
    { id: 'm', t: 'Members from different\nunits / specialities?', x: 160, y: 250, shape: 'diamond', w: 230, h: 70 },
    { id: 'c', t: 'Cross-functional', x: 400, y: 340, w: 150 },
    { id: 'f', t: 'Functional', x: 160, y: 360, w: 120 }],
    [{ a: 'q', b: 's', lab: 'nobody / the team itself' }, { a: 'q', b: 'd', lab: 'a manager' }, { a: 'd', b: 'v', lab: 'yes' }, { a: 'd', b: 'm', lab: 'no' }, { a: 'm', b: 'c', lab: 'yes' }, { a: 'm', b: 'f', lab: 'no, same department' }],
    { cap: 'Ask the cue that is strongest in the sentence. “No boss” beats everything; “dispersed + video calls” means virtual.', label: 'team type decision tree' }),
  ex: [
    M.ex('Introductory', R`<p>“Our team has no supervisor; we set our own deadlines.” Which type?</p>`,
      R`<ol><li>Who directs it? Nobody outside the team.</li><li>That is the defining feature of a <b>self-managed</b> team.</li></ol><p><b>Now suppose</b> the sentence were “our team is spread over three countries and meets on video calls”. Direction is not mentioned; dispersion plus technology is → <b>virtual</b>.</p><p><b>The mechanism:</b> each type has one signature cue. Find it in the sentence.</p>`),
    M.ex('Standard', R`<p>Label each: (1) a manager picks three employees from different business units to brainstorm productivity ideas; (2) workers who play cricket together every Sunday; (3) members of the accounts department meet weekly to fix invoice delays.</p>`,
      R`<ol><li>Different business units → <b>cross-functional</b>. The manager setting it up does not make it functional.</li><li>Social, by choice → <b>informal group</b> (not a team at all).</li><li>Same department improving its own work → <b>functional</b> (problem-solving) team.</li></ol>`),
    M.ex('Exam-level', R`<p>A team of developers, designers and strategists builds a new tool. Each member takes ownership, the team sets its own timelines and allocates resources, and it meets weekly to stay aligned. Which type? Justify against the near-miss.</p>`,
      R`<ol><li>Mixed specialities suggest cross-functional.</li><li>But the stronger cue is “sets its own timelines, allocates resources”: the team runs itself.</li><li>The key is <b>self-managed</b> (2024 T3 Q195). When both cues appear, self-direction decides, because it is the more specific description.</li></ol>`)],
  math: M.rule(R`<p><b>Team = group + common goal + mutual accountability + synergy.</b></p><p><b>Type cues:</b> no boss → self-managed; dispersed + technology → virtual; different units/specialities/outsiders → cross-functional; same department → functional.</p>`)
    + M.why([['“All groups are teams”', 'false: a group can share information without a shared goal or synergy.'],
      ['Belbin “leadership roles”', 'not a category; Coordinator and Shaper sit under people and action roles.'],
      ['Virtual teams are less productive even when well managed', 'too strong; the real drawbacks are lost nonverbal cues and informal chat.'],
      ['Direct supervision for a self-managed team', 'contradicts the definition; it is the step to avoid.']]),
  conn: R`<p><b>At work:</b> a product squad of engineer, designer and analyst is cross-functional; if it sets its own sprint goals it is also self-managed; if half of it is remote it is virtual too.</p><p><b>Later:</b> the stages a team passes through (next concept) and the 10 Cs that make it effective (1.4). Week 6 returns to virtual and cross-cultural teams.</p>`,
  mis: M.ul(['Picking “functional” because a manager formed the team (2023 T3 Q210, 2024 T3 Q198): the members come from different units → cross-functional.',
    '“All teams are groups, and all groups are teams” — True is wrong (2024 T2 Q96).',
    '“Leadership roles” offered as a Belbin category (2023 T1 Quiz 1 Q39).',
    'Dropping the unfamiliar statement about social facilitation in 2024 T3 Q199 — all four statements were true.',
    'In 2024 T2 Q92, using item IV (same department) for a self-managed team.']),
  exam: R`<p><b>How it is asked:</b> a block of five one-line scenarios with the same four options (functional, cross-functional, virtual, self-managed), or a list match.</p><p><b>Fast method:</b> underline the cue words: “no boss / own way / sets own timelines” → self-managed; “dispersed / video / online tool” → virtual; “different units / specialities / customers / suppliers” → cross-functional. Only choose functional when the sentence says “same department”.</p>`
});
Q({ cp: 'team-basics', type: 'mcq', diff: 'easy', q: 'Which feature distinguishes a team from a work group?', opts: ['Members share information', 'Members have individual goals', 'Synergy: combined output greater than the sum of individual outputs', 'Members report to the same manager'], ans: 2,
  why: ['Groups share information too.', 'Individual goals describe a group.', 'Correct: synergy is the defining feature.', 'Sharing a manager does not make a team.'], sol: 'Team = group + shared goal + synergy.' });
Q({ cp: 'team-basics', type: 'mcq', diff: 'moderate', q: 'Engineers in Pune and Berlin plus two client representatives build an app, coordinating through Jira and video calls. A manager assigns the work. The <b>best single</b> label is:', opts: ['Functional', 'Self-managed', 'Virtual', 'Informal group'], ans: 2,
  why: ['They are not from one department.', 'A manager assigns the work.', 'Correct: dispersion plus technology is the dominant cue (it is also cross-functional, which is not offered).', 'It is a formal work team.'], sol: 'When the option list lacks one true label, pick the other true one: dispersed + tools → virtual.' });
Q({ cp: 'team-basics', type: 'num', diff: 'hard', q: 'How many of these are <b>teams</b> (not just groups)? (1) Employees who lunch together daily. (2) Five analysts each filing separate weekly reports to one manager. (3) A launch squad whose bonus depends on the joint release. (4) A virtual team building one product across three countries. (5) A self-managed cell that owns an assembly line’s output.', ans: 3, tol: 0,
  sol: 'Teams: 3, 4, 5 (shared goal and joint accountability). 1 is an informal group; 2 is a work group.' });
Q({ cp: 'team-basics', type: 'short', diff: 'easy', q: 'Define the four team types in one line each and give the cue word you would look for in a question.',
  model: '<ul><li>Functional: same department improving its own work — cue “same department”.</li><li>Cross-functional: members from different specialities or units — cue “different units / specialities”.</li><li>Virtual: dispersed members linked by technology — cue “video calls / different locations”.</li><li>Self-managed: the team directs itself — cue “no boss / sets its own timelines”.</li></ul>' });

/* ---------------- 1.2 Team development and change ---------------- */
C({ id: 'team-development', week: 1, title: 'Team development (Tuckman), change and continuous improvement', pri: 'High', prereq: ['team-basics'],
  src: 'Study guide W1 (Tuckman, change management, Kaizen) · spg notes W1 · PYQs 2023 T1 Quiz 1 Q38 Q64, 2023 T2 Q108, 2023 T3 Q217, 2024 T1 Q182–185, 2024 T2 Q94 Q95',
  oneLine: 'Forming → Storming → Norming → Performing → Adjourning. Change management works before, during and after a change, at organisation and individual level.',
  misShort: 'Confusing norming (agreeing how to work) with performing (high output), or thinking change management is organisation-level only.',
  intu: R`<p>Think of a new college project group. Week one, everyone is polite and unsure (<b>forming</b>). Week two, two people argue about the approach and someone sulks (<b>storming</b>). Week three, you agree who does what and how you will decide (<b>norming</b>). Week four, work flows and you finish early (<b>performing</b>). After submission, the group dissolves (<b>adjourning</b>).</p>
<p>The question this concept answers: <b>which stage is this team in, and how do teams handle change?</b></p>`,
  why: R`<ul><li>Stage identification: 2024 T1 Q182–184 (a block of three) and 2024 T2 Q94.</li><li>Change management and continuous improvement: 2023 T1 Quiz 1 Q38 (Kaizen) and Q64, 2023 T2 Q108, 2023 T3 Q217, 2024 T1 Q185, 2024 T2 Q95. These are “which statements are correct” items with an “only” trap.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Forming</b> — members get to know each other; polite, unsure, dependent on the leader.',
    '<b>Storming</b> — disagreement over direction, competition for status, tension.',
    '<b>Norming</b> — agreement on roles and ways of working; cohesion; members support each other.',
    '<b>Performing</b> — high productivity and efficiency; members work seamlessly toward the goal.',
    '<b>Adjourning (terminating)</b> — the task ends and the team disbands.',
    '<b>Change management</b> — ideas, strategies and skills for leading change. Applied during planning, implementation and sustaining after the change. Works at the <i>organisational</i> level (processes, technology, mergers) and the <i>individual</i> level (people’s motivations, concerns, the human side).',
    '<b>Continuous improvement</b> — ongoing evaluation and revision of processes, methods and practices: products, services and processes, not just people.',
    '<b>Kaizen</b> — Japanese “change for the better”: continuous improvement of all functions, involving everyone from the CEO to assembly-line workers.']))
    + '<p><b>In words:</b> teams go from polite to fighting to agreeing to producing to ending. Change succeeds when it is planned, communicated openly and supported for individuals as well as the organisation.</p>',
  vis: M.flow([{ t: 'Forming', sub: 'polite, unsure' }, { t: 'Storming', sub: 'conflict, status' }, { t: 'Norming', sub: 'agree how to work' }, { t: 'Performing', sub: 'high output', hl: true }, { t: 'Adjourning', sub: 'disband' }], { cap: 'Tuckman’s stages. The papers give one or two sentences of behaviour and ask which box.' }),
  ex: [
    M.ex('Introductory', R`<p>“Disagreements emerge regarding the direction of the campaign, leading to heated discussions.” Stage?</p>`,
      R`<p>Conflict over direction → <b>Storming</b>.</p><p><b>Now suppose</b> the next sentence is “after facilitated discussions, the team agrees a cohesive strategy and members support each other”. Agreement and support → <b>Norming</b>. Only when the text stresses output and efficiency is it <b>Performing</b>.</p>`),
    M.ex('Standard', R`<p>True or false: (1) Change management plans change at the organisational level only. (2) Empowering team members through training is a key part of change management.</p>`,
      R`<ol><li>False: “only” is wrong; it also works at the individual level.</li><li>True.</li></ol><p>Answer: <b>2 only</b> (2023 T1 Quiz 1 Q64).</p>`),
    M.ex('Exam-level', R`<p>Which describes organisational vs individual change management correctly? (1) Organisational = process level; individual = personal level. (2) Organisational = new technology, mergers; individual = motivations, desires, concerns. (3) Organisational = the human aspect; individual = the technical aspect.</p>`,
      R`<ol><li>True.</li><li>True.</li><li>False: reversed — the individual level is the human aspect.</li></ol><p>Answer: <b>1 and 2 only</b> (2023 T3 Q217).</p>`)],
  math: M.rule(R`<p><b>Stage cues:</b> getting to know → forming; conflict/status → storming; agreement/cohesion → norming; productivity → performing; disband → adjourning.</p><p><b>Change management:</b> before + during + after; organisation + individual; open, transparent communication.</p>`)
    + M.why([['Norming for “high productivity”', 'productivity is performing; norming is about agreeing.'],
      ['Change management “at organisational level only”', 'it also manages individuals’ concerns.'],
      ['Continuous improvement “for personnel only”', 'it covers processes, products and services.'],
      ['Kaizen as just “a set of tools”', 'its defining idea is continuous improvement by everyone, CEO to line worker.']]),
  conn: R`<p><b>At work:</b> a newly merged team in storming needs a facilitator and agreed norms; a team in performing needs autonomy, not supervision.</p><p><b>Later:</b> Week 5’s conflict styles are the tools for the storming stage; Week 4’s leadership styles explain why a team in forming needs more direction.</p>`,
  mis: M.ul(['Choosing Forming in 2024 T2 Q94 because the caselet starts with getting-to-know behaviour; the current stage is storming.',
    '“Organizational level only” (2023 T1 Quiz 1 Q64) and “personnel only” (2024 T2 Q95): the word “only” makes the statement false.',
    'Statement 3 in 2023 T3 Q217 swaps the human and technical sides.',
    'Stopping change management at go-live; 2024 T1 Q185’s key includes post-change support.']),
  exam: R`<p><b>How it is asked:</b> stage blocks (scenario → Forming … Terminating) and “which statements are correct” items on change.</p><p><b>Fast method:</b> for stages, find the verb (argue, agree, produce). For statements, hunt for absolute words — <i>only</i>, <i>all</i>, <i>never</i> — and check whether the course really limits it that way.</p>`
});
Q({ cp: 'team-development', type: 'mcq', diff: 'easy', q: 'Members have agreed roles, a meeting rhythm and how decisions are made, and they now support each other’s ideas. Stage?', opts: ['Forming', 'Storming', 'Norming', 'Performing'], ans: 2,
  why: ['They already know each other.', 'The conflict has passed.', 'Correct: agreement on how to work.', 'Nothing is said about high output yet.'], sol: 'Agreement and support → norming.' });
Q({ cp: 'team-development', type: 'msq', diff: 'moderate', q: 'Which are true of change management as taught in the course?', opts: ['It applies during planning, implementation and after the change', 'It is concerned only with organisational processes', 'It addresses individuals’ motivations and concerns', 'Open, transparent communication is crucial to it'], ans: [0, 2, 3],
  why: ['True.', 'False: it also covers individuals.', 'True: individual change management.', 'True.'], sol: 'Before, during, after; organisation and individual; open communication.' });
Q({ cp: 'team-development', type: 'mcq', diff: 'moderate', q: 'Kaizen is best described as:', opts: ['A just-in-time production method', 'Continuous improvement of all functions involving every employee', 'A one-time restructuring led by consultants', 'A design method used only by designers'], ans: 1,
  why: ['That is JIT/lean.', 'Correct.', 'Kaizen is continuous, not one-time.', 'That describes design methods.'], sol: 'Kaizen = continuous, company-wide improvement.' });
Q({ cp: 'team-development', type: 'short', diff: 'moderate', q: 'Name Tuckman’s five stages and write one behaviour that signals each.',
  model: '<ul><li>Forming: members are polite and get to know each other.</li><li>Storming: disagreement about direction; competing for status.</li><li>Norming: agreeing roles and ways of working; cohesion.</li><li>Performing: high productivity; seamless work.</li><li>Adjourning: the task ends and the team disbands.</li></ul>' });

/* ---------------- 1.3 Team dynamics ---------------- */
C({ id: 'team-dynamics', week: 1, title: 'Team dynamics: synergy, social loafing, groupthink and norms', pri: 'High', prereq: ['team-basics'],
  src: 'Study guide W1 (synergy, social loafing, groupthink) · spg notes W1 · Case “Negative Aspects of Collaboration?” in 2023 T1 Quiz 1 · PYQs 2023 T1 Quiz 1 Q21–25 Q28, 2023 T2 Q106, 2023 T3 Q216, 2024 T1 Q186, 2024 T2 Q93',
  oneLine: 'Teams can add value (synergy) or lose it (social loafing, groupthink, magnified bias). Norms are the unwritten rules that steer behaviour.',
  misShort: 'Mixing up social loafing (less effort in bigger teams) with social inhibition, or groupthink with “thinking together well”.',
  intu: R`<p>Two teams of five get the same problem.</p><p>In team A, the coder spots a flaw the designer missed and the analyst finds data nobody had. Together they produce something none could alone: <b>synergy</b>.</p><p>In team B, two members quietly do less because “someone else will” (<b>social loafing</b>), and everyone agrees with the confident leader to avoid friction (<b>groupthink</b>).</p><p>Same size, opposite results. The question this concept answers: <b>what forces push a team up or down?</b></p>`,
  why: R`<ul><li>The 2023 T1 Quiz 1 case on the negative aspects of collaboration produced five questions (Q21–25).</li><li>Definitions recur: synergy (2023 T2 Q106, 2024 T2 Q93), groupthink (2023 T3 Q216), social loafing (2024 T1 Q186), norms (2023 T1 Quiz 1 Q28).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Synergy</b> — combined effect greater than the sum of individual efforts. Built by appointing members with <i>complementary</i> skills.',
    '<b>Social loafing</b> — individuals put in less effort in a group than alone; it <i>increases</i> as team size increases.',
    '<b>Social facilitation</b> — people perform simple tasks better when others are present. <b>Social inhibition</b> — performing worse when watched.',
    '<b>Groupthink</b> — members lose the ability to think independently because they focus on group cohesion. The case version: the group develops an emotional attachment to one course of action.',
    '<b>Norms</b> — shared, often unwritten, expectations of how members behave. <b>Socialization</b> — the process by which a newcomer learns them.',
    '<b>Magnified bias</b> — biases such as self-interest grow when a group decides collectively. Remedy from the case: ask whether recommendations contain self-interested biases; run down a checklist of heuristics and biases; use team decisions only when pooling information beats individual judgement.']))
    + '<p><b>In words:</b> complementary people working on one goal create synergy; big teams invite loafing; cohesion without dissent becomes groupthink.</p>',
  vis: M.table(['Force', 'Direction', 'What you see', 'Fix'], [
    ['Synergy', '▲ raises output', 'Ideas build on each other', 'Complementary skills, shared goal'],
    ['Social loafing', '▼ lowers output', 'Some coast as team grows', 'Smaller teams, visible individual contributions'],
    ['Groupthink', '▼ lowers decision quality', 'Quick agreement, no dissent', 'Devil’s advocate, bias checklist'],
    ['Norms', 'either', 'Unwritten routines everyone follows', 'Make healthy norms explicit']], 'Four forces inside every team.'),
  ex: [
    M.ex('Introductory', R`<p>A five-person team with different expertise produces results that exceed what each could do alone. Concept?</p>`,
      R`<p>Whole greater than the sum → <b>synergy</b>. Not symbiosis (a biology term), not social loafing (the opposite).</p><p><b>Now suppose</b> the team grows to fifteen and output per person drops. That is <b>social loafing</b>: bigger team, less individual effort.</p>`),
    M.ex('Standard', R`<p>Every morning employees gather early to discuss work. Nobody wrote a rule, but everyone is expected to join. A newcomer learns this from her manager. What is the routine, and what is her learning called?</p>`,
      R`<ol><li>An unwritten shared expectation → <b>norm</b>.</li><li>Learning the group’s norms → <b>socialization</b>.</li></ol><p>2023 T1 Quiz 1 Q28 asks which aspect the routine illustrates → norms.</p>`),
    M.ex('Exam-level', R`<p>According to the collaboration case, what should a decision maker do to see whether a group might be prone to decision errors, and what is the overriding factor to consider?</p>`,
      R`<ol><li>Check for errors: run down a <b>checklist of heuristics and biases</b> (Q25).</li><li>Overriding factor: the potential for <b>self-interested biases</b> (Q22).</li><li>Emotional attachment to one course of action is the case’s description of groupthink (Q24).</li></ol><p>Each answer comes from a different sentence of the same case; read the question’s exact words.</p>`)],
  math: M.rule(R`<p><b>Team size ↑ → individual effort ↓ (social loafing).</b></p><p><b>Complementary skills → synergy. Cohesion over independent thought → groupthink.</b></p>`)
    + M.why([['Groups of similar individuals for synergy', 'similar people add similar ideas; synergy needs difference.'],
      ['Rewarding individual performance for synergy', 'encourages competition, not combination.'],
      ['Groupthink = two contradictory beliefs', 'that is doublethink.'],
      ['Grapevine for an expected routine', 'grapevine is informal rumour flow, not a shared rule.']]),
  conn: R`<p><b>At work:</b> “nobody pushed back in the meeting” is a groupthink warning; making contributions visible (named tasks on a board) cuts social loafing.</p><p><b>Later:</b> psychological safety (1.4) is the antidote to groupthink; Week 5 conflict styles show how to disagree productively.</p>`,
  mis: M.ul(['Picking social inhibition or symbiosis for synergy (2023 T2 Q106).',
    'Reversing the loafing direction (2024 T1 Q186).',
    'Using the textbook groupthink definition when the question says “according to the case study” (2023 T1 Quiz 1 Q24).',
    'Choosing socialization over norms in 2023 T1 Quiz 1 Q28.']),
  exam: R`<p><b>How it is asked:</b> definition items, a fill-in-the-blank on loafing, and a five-question case.</p><p><b>Fast method:</b> for case questions, find the sentence in the case that answers the exact question; several options are true sentences from the case that answer a different question.</p>`
});
Q({ cp: 'team-dynamics', type: 'mcq', diff: 'easy', q: 'As the size of a team grows, each member puts in less effort. This is:', opts: ['Social facilitation', 'Social loafing', 'Synergy', 'Groupthink'], ans: 1,
  why: ['Facilitation is performing better with others present.', 'Correct.', 'Synergy raises output.', 'Groupthink is about decisions, not effort.'], sol: 'Size ↑, effort ↓ = social loafing.' });
Q({ cp: 'team-dynamics', type: 'mcq', diff: 'moderate', q: 'A committee quickly agrees with its chair’s plan; doubters stay silent to keep harmony. Best remedy?', opts: ['Reward the fastest decision', 'Appoint a devil’s advocate and run a bias checklist', 'Make the team larger', 'Let the chair decide alone next time'], ans: 1,
  why: ['Speed rewards the problem.', 'Correct: invites dissent and checks bias.', 'A larger team adds loafing.', 'Removes the team rather than fixing it.'], sol: 'Groupthink is cured by legitimising dissent and checking biases.' });
Q({ cp: 'team-dynamics', type: 'mcq', diff: 'moderate', q: 'To build potential for synergy, a manager should:', opts: ['Group similar individuals', 'Appoint members with complementary skills', 'Be strongly directive', 'Reward only individual performance'], ans: 1,
  why: ['Similar people bring similar ideas.', 'Correct.', 'Direction suppresses contribution.', 'Encourages competition.'], sol: 'Synergy comes from complementary difference.' });
Q({ cp: 'team-dynamics', type: 'short', diff: 'moderate', q: 'Explain groupthink in two lines and give two ways to prevent it.',
  model: '<p>Groupthink: members stop thinking independently because they value cohesion, so the group locks onto one option without real debate.</p><p>Prevention: appoint a devil’s advocate; ask whether recommendations contain self-interested biases and run a bias checklist; let members give views privately before the leader speaks.</p>' });

/* ---------------- 1.4 Team effectiveness ---------------- */
C({ id: 'team-effectiveness', week: 1, title: 'What makes a team effective: the 10 Cs, psychological safety, team characteristics', pri: 'High', prereq: ['team-dynamics'],
  src: 'Study guide W1 (10 Cs of teamwork, psychological safety, effective team characteristics) · spg notes W1 · PYQs 2023 T1 Quiz 1 Q19 Q33 Q54 Q55 Q62 Q63, 2024 T3 Q204–206, 2026 T1 Q21 Q23 · Written: 2025 T2 Q229, 2026 T2 Q5',
  oneLine: 'Effective teams have a common goal, clear communication, coordination and collaboration, the right composition, top-management support and psychological safety.',
  misShort: 'Swapping coordination (divide and sync) with collaboration (solve together), or thinking psychological safety means everyone agrees.',
  intu: R`<p>Two managers build the same sensor module.</p><p>Shreya splits the work: circuits to Asha, firmware to Ravi, tests to Meera, with weekly status updates. Pieces fit because they are <b>coordinated</b>.</p><p>Pratham puts everyone in one room to debug the signal noise together. The solution emerges from <b>collaboration</b>.</p><p>Both can work. Neither works if people are afraid to say “I broke the build”. That fear is the absence of <b>psychological safety</b>.</p><p>The question this concept answers: <b>what conditions make a team effective, and which one is missing in a given scenario?</b></p>`,
  why: R`<ul><li>2026 T1 Q23 tests coordination vs collaboration; 2026 T1 Q21 tests psychological safety.</li><li>2024 T3 Q204–206: “which characteristic is missing” block.</li><li>Written questions (2025 T2 Q229, 2026 T2 Q5) ask you to apply the 10 Cs of teamwork.</li></ul>`,
  formal: M.def(M.lines([
    '<b>10 Cs of teamwork</b> (course list, in order): <b>Clarity</b> (everyone understands vision, roles and rules the same way), <b>Commitment</b> (intentions turned into agreed, written outcomes), <b>Communication</b> (open, honest, structured information flow), <b>Competence</b> (complementary skills used as a team), <b>Collaboration</b>, <b>Coordination</b>, <b>Connection</b> (trust and belonging), <b>Conflict Resolution</b> (fair rules for disagreement), <b>Change Management</b> (preparing people for new ways of working), <b>Continuous Improvement</b> (small, iterative course-corrections).',
    '<b>Coordination</b> — dividing tasks, assigning deliverables and syncing progress so pieces fit.',
    '<b>Collaboration</b> — working jointly on the same problem, co-creating the solution.',
    '<b>Psychological safety</b> (Amy Edmondson) — a shared belief that the team is safe for interpersonal risk-taking: members speak up, ask questions, admit mistakes and learn from failures without fear of embarrassment or punishment.',
    '<b>Team-effectiveness factors</b>: <i>context</i> (resources, leadership, structure), <i>composition</i> (abilities, personality, diversity and inclusivity), <i>process</i> (common purpose, specific goals, team efficacy).',
    '<b>Characteristics of effective teams</b>: top-management support and commitment; clear goals and objectives; adequate communication channels; a strong, experienced facilitator; resources allocated by need and ability.',
    '<b>Outbound training</b> — experiential team-building through outdoor activities.']))
    + '<p><b>In words:</b> give the team one goal, the right mix of people, open channels and backing from the top, make it safe to speak, and choose coordination or collaboration to suit the work.</p>',
  vis: M.table(['Missing characteristic', 'Symptom in the scenario'], [
    ['Clear goals and objectives', 'Everyone interprets the purpose differently; misalignment, confusion'],
    ['Adequate communication channels', 'No access to data; “kept in the dark”'],
    ['Top-management support', 'Team doubts the change will last without backing'],
    ['Strong facilitator', 'Meetings drift, conflict unresolved, no one steers'],
    ['Psychological safety', 'People hide mistakes, stay silent, fear blame']], 'Match the symptom to the missing ingredient (2024 T3 Q204–206).'),
  ex: [
    M.ex('Introductory', R`<p>“Each person has their own interpretation of the project’s purpose, which leads to misalignment.” What is missing?</p>`,
      R`<p>The word “purpose” points to <b>clear goals and objectives</b>. Communication is a near miss: talking more will not help if there is no shared goal to talk about.</p>`),
    M.ex('Standard', R`<p>Which describes psychological safety? (a) Everyone agrees with the leader to avoid conflict. (b) Members feel safe to express ideas, ask questions, admit mistakes and take interpersonal risks. (c) Comfort and risk-taking but not open communication.</p>`,
      R`<p><b>(b).</b> (a) is the opposite — silence to avoid conflict is exactly what psychological safety removes. (c) drops open communication, which is half the definition.</p>`),
    M.ex('Exam-level', R`<p>Shreya aligns the team at the start, then divides circuit design, firmware and testing with clear deliverables and weekly updates. Pratham runs an ongoing loop where everyone discusses designs and jointly debugs. Using the 10 Cs, what is the difference?</p>`,
      R`<ol><li>Shreya: divide, assign, track → <b>coordination</b>.</li><li>Pratham: solve together, co-create → <b>collaboration</b>.</li><li>Answer: “The first emphasises coordination, the second collaboration” (2026 T1 Q23). The reverse option is the trap.</li></ol>`)],
  math: M.rule(R`<p><b>Coordination = divide and sync. Collaboration = solve together.</b></p><p><b>Psychological safety = safe to speak up, ask, admit mistakes, take interpersonal risks.</b></p><p><b>Composition = who is on the team (diversity, inclusivity, skills).</b></p>`)
    + M.why([['Verbose communication', 'hurts teamwork; brevity and clarity help.'],
      ['Resources by rank or seniority', 'resources go by need and ability.'],
      ['“Common purpose, specific goals” as composition', 'those are process factors.'],
      ['Psychological safety = agreement with the leader', 'that is conformity; safety includes the freedom to disagree.']]),
  conn: R`<p><b>At work:</b> blameless post-mortems in engineering teams are psychological safety in practice; a RACI chart is coordination; a whiteboard design session is collaboration.</p><p><b>Earlier:</b> groupthink and loafing (1.3) are what these conditions prevent. <b>Later:</b> Week 2’s 10 Cs of <i>communication</i> are a different list — do not mix them.</p>`,
  mis: M.ul(['Reversing coordination and collaboration (2026 T1 Q23 option 2).',
    'Options in 2026 T1 Q21 that keep half of the definition of psychological safety.',
    'In 2023 T1 Quiz 1 Q33, choosing “common purpose, specific goals” for composition.',
    'Treating a scenario about missing data as “clear goals” (2024 T3 Q205).']),
  exam: R`<p><b>How it is asked:</b> definitions, “which characteristic is missing” blocks, and written answers applying the 10 Cs to a case.</p><p><b>Written-answer method:</b> pick four or five Cs, and for each write one concrete action tied to a named person in the case. End with how it fixes the problem the question names (trust, turnover, misalignment).</p>`
});
Q({ cp: 'team-effectiveness', type: 'mcq', diff: 'easy', q: 'A team cannot make recommendations because it has no access to customer-usage data. What is missing?', opts: ['Top-management support', 'Clear goals and objectives', 'Adequate communication channels', 'A strong facilitator'], ans: 2,
  why: ['Backing is not the issue.', 'They know the goal.', 'Correct: information is not reaching them.', 'Facilitation is not mentioned.'], sol: 'Kept in the dark → communication channels.' });
Q({ cp: 'team-effectiveness', type: 'mcq', diff: 'moderate', q: 'Which behaviour shows a team <b>lacks</b> psychological safety?', opts: ['A junior asks a basic question in the stand-up', 'An engineer reports her own bug in the retrospective', 'Members discuss a problem privately but stay silent when the lead asks for concerns', 'The team debates two designs openly'], ans: 2,
  why: ['Asking is a safe-team behaviour.', 'Admitting mistakes is a safe-team behaviour.', 'Correct: silence in front of the lead shows fear.', 'Open debate shows safety.'], sol: 'Silence where speaking is expected is the clearest sign.' });
Q({ cp: 'team-effectiveness', type: 'msq', diff: 'moderate', q: 'Which are <b>coordination</b> rather than collaboration?', opts: ['Assigning deliverables and deadlines to each member', 'Jointly debugging a hard problem at one whiteboard', 'A weekly status update to sync parts', 'Co-writing the design document together'], ans: [0, 2],
  why: ['Coordination: divide and assign.', 'Collaboration: solving together.', 'Coordination: syncing.', 'Collaboration: co-creation.'], sol: 'Divide/sync = coordination; co-create = collaboration.' });
Q({ cp: 'team-effectiveness', type: 'short', diff: 'moderate', q: 'Define psychological safety and give two actions a manager can take to build it.',
  model: '<p>Psychological safety is a shared belief that the team is safe for interpersonal risk-taking: people can speak up, ask questions, admit mistakes and disagree without fear of embarrassment or punishment.</p><p>Actions: run blameless reviews of mistakes; ask for dissent explicitly and thank people who raise problems; admit your own mistakes first.</p>' });

/* ---------------- Variations (harder; never PYQs) ---------------- */
const G = id => 'gn3001-' + id;
VQ({ kind: 'scenario', type: 'mcq', q: 'An insurer forms a team of its own claims staff, two hospital administrators and a software vendor’s analyst, all in Chennai, led by the claims head. Best label?', opts: ['Functional', 'Cross-functional', 'Virtual', 'Self-managed'], ans: 1,
  why: ['Members are not all from one department.', 'Correct: mixed units plus outsiders.', 'They sit together.', 'A leader directs them.'],
  sol: 'Outsiders and different specialities → cross-functional; no dispersion; a leader directs.', trap: 'The team is led by a manager, which pulls toward functional.' }, ['2023T3-206', '2023T3-210', '2024T3-194', '2024T3-198'].map(G));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Ten operators on a production line schedule their own shifts, set output targets with the plant head and discipline late-comers themselves. They work in one building. Type?', opts: ['Functional', 'Cross-functional', 'Virtual', 'Self-managed'], ans: 3,
  why: ['Same department, but the defining cue is self-direction.', 'They share one speciality.', 'Same building.', 'Correct: they take on supervisory duties.'],
  sol: 'Taking on supervisory responsibilities (scheduling, discipline) → self-managed.', trap: 'Same department is true, which makes functional the near-miss.' }, ['2023T3-207', '2023T3-209', '2024T3-195', '2024T3-197', '2023T2-107'].map(G));
VQ({ kind: 'counting', type: 'num', q: 'How many statements about virtual teams are true? (1) Nonverbal cues are often missed. (2) Hallway conversations are reduced. (3) Social facilitation is largely absent. (4) Well-managed virtual teams are always less productive than co-located ones. (5) Members are linked mainly by technology.', ans: 4, tol: 0,
  sol: 'True: 1, 2, 3, 5. Statement 4 overreaches.', trap: 'Statement 4 sounds like a fair summary of the drawbacks.' }, ['2023T3-208', '2024T3-196', '2024T3-199', '2023T1q1-52'].map(G));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. Functional, B. Self-managed, C. Virtual with I. Dispersed members linked by technology; II. Same department improving its own process; III. Interdependent members who take on supervisory duties; IV. Members from various specialities.', opts: ['A-II, B-III, C-I', 'A-IV, B-III, C-I', 'A-II, B-I, C-III', 'A-II, B-IV, C-I'], ans: 0,
  why: ['Correct.', 'IV is cross-functional.', 'B and C swapped.', 'IV is not self-managed.'],
  sol: 'Same department → functional; supervisory duties → self-managed; technology-linked → virtual.', trap: 'The extra item IV again matches nothing.' }, ['2024T2-92', '2023T1q1-39'].map(G));
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement is <b>false</b>?', opts: ['All teams are groups', 'Some groups are not teams', 'All groups are teams', 'Workers who meet socially after work form an informal group'], ans: 2,
  why: ['True.', 'True.', 'False: a group needs a shared goal and synergy to be a team.', 'True.'],
  sol: 'Team ⊂ group.', trap: 'Options 1 and 3 differ only in word order.' }, ['2024T2-96', '2023T2-109', '2023T1q1-32'].map(G));
VQ({ kind: 'sequence', type: 'mcq', q: 'A team’s diary: (P) “We finally agreed who reviews whose code.” (Q) “Two seniors argued over the architecture all week.” (R) “We shipped two features ahead of plan.” (S) “Everyone introduced themselves.” Correct order?', opts: ['S, Q, P, R', 'S, P, Q, R', 'Q, S, P, R', 'S, Q, R, P'], ans: 0,
  why: ['Correct: forming, storming, norming, performing.', 'Norming cannot come before storming in Tuckman’s order.', 'Forming is first.', 'Performing follows norming.'],
  sol: 'Forming → storming → norming → performing.', trap: 'Agreement (P) and output (R) are easy to swap.' }, ['2024T1-182', '2024T1-183', '2024T1-184', '2024T2-94'].map(G));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Change management applies only during implementation. (2) Individual change management addresses people’s motivations and concerns. (3) Continuous improvement covers processes, products and services. (4) Kaizen involves every employee. Which are correct?', opts: ['2, 3 and 4 only', '1 and 2 only', '1, 2, 3 and 4', '3 and 4 only'], ans: 0,
  why: ['Correct.', 'Statement 1 is false.', 'Statement 1 is false.', 'Statement 2 is also true.'],
  sol: '1 is false (it also covers planning and post-change). 2, 3, 4 true.', trap: 'Statement 1 drops two of the three phases.' }, ['2023T1q1-64', '2023T3-217', '2024T1-185', '2024T2-95', '2023T1q1-38', '2023T2-108'].map(G));
VQ({ kind: 'case', type: 'mcq', q: 'A steering committee has spent months on one vendor and now defends it against every new data point. Which pair of case-study actions fits best?', opts: ['Ask whether the recommendation contains self-interested biases, and run a checklist of heuristics and biases', 'Speed up the decision and reward consensus', 'Add more members to the committee', 'Let the committee lead decide alone'], ans: 0,
  why: ['Correct: the two checks the case recommends.', 'Rewards groupthink.', 'Adds loafing.', 'Removes the team, not the bias.'],
  sol: 'Emotional attachment to one course = groupthink; the case’s remedies are the bias question and the checklist.', trap: 'Option 4 sounds decisive.' }, ['2023T1q1-21', '2023T1q1-22', '2023T1q1-23', '2023T1q1-24', '2023T1q1-25', '2023T3-216'].map(G));
VQ({ kind: 'concept', type: 'mcq', q: 'A 12-person team’s output per person falls after it grows to 20; contributions are not tracked individually. What is happening, and what is the first fix?', opts: ['Synergy; add more people', 'Social loafing; make individual contributions visible', 'Groupthink; appoint a devil’s advocate', 'Norming; wait for performing'], ans: 1,
  why: ['Synergy would raise output.', 'Correct.', 'Groupthink is about decision quality, not effort.', 'Stage is not the issue.'],
  sol: 'Size ↑ and effort ↓ with invisible contributions = social loafing.', trap: 'Groupthink is the other famous team problem.' }, ['2024T1-186', '2023T2-106', '2024T2-93', '2023T1q1-28'].map(G));
VQ({ kind: 'missing', type: 'mcq', q: 'A team’s retrospective is quiet; later, members complain privately that their past suggestions were mocked. Which characteristic is missing?', opts: ['Clear goals', 'Top-management support', 'Psychological safety', 'Adequate resources'], ans: 2,
  why: ['Goals are not in question.', 'Backing is not mentioned.', 'Correct: people fear speaking up.', 'Not mentioned.'],
  sol: 'Fear of ridicule → no psychological safety.', trap: 'None strong.' }, ['2026T1-21', '2024T3-204', '2024T3-205', '2024T3-206'].map(G));
VQ({ kind: 'case', type: 'mcq', q: 'In a hospital IT project, Lead A gives each sub-team a module and a deadline and merges them weekly; Lead B runs daily joint sessions where clinicians and developers design screens together. Which statement is correct?', opts: ['A coordinates, B collaborates', 'A collaborates, B coordinates', 'Both coordinate', 'Neither is a 10 Cs behaviour'], ans: 0,
  why: ['Correct.', 'Reversed.', 'B co-creates.', 'Both are 10 Cs behaviours.'],
  sol: 'Divide and merge = coordination; co-design = collaboration.', trap: 'Reversal.' }, ['2026T1-23', '2023T1q1-19', '2023T1q1-54', '2023T1q1-55'].map(G));
VQ({ kind: 'statements', type: 'mcq', q: 'Which pairing is <b>wrong</b>?', opts: ['Composition — diversity and inclusivity of members', 'Process — common purpose and specific goals', 'Resource allocation — by seniority', 'Outbound training — experiential outdoor learning'], ans: 2,
  why: ['Right.', 'Right.', 'Wrong: allocate by needs and abilities.', 'Right.'],
  sol: 'Resources go by need and ability.', trap: 'Seniority feels “fair”.' }, ['2023T1q1-33', '2023T1q1-62', '2023T1q1-63'].map(G));
VQ({ kind: 'written', type: 'short', q: 'A five-country product team keeps missing handovers; two members read “ASAP” as “today” and “this week”. Using four of the 10 Cs of teamwork, write the norms you would set in the first week (about 100 words).',
  model: '<ul><li><b>Clarity and commitment:</b> one written release goal and an owner per module.</li><li><b>Communication:</b> chat for quick questions, email for decisions, one weekly call; replies within one working day; no undefined words like “ASAP” — give a date.</li><li><b>Coordination:</b> shared tracker; handovers logged with a named receiver.</li><li><b>Conflict resolution:</b> who decides what, and how disagreements are raised.</li></ul><p>Explicit norms remove ambiguity across time zones and cultures.</p>',
  sol: 'Tie each C to one concrete norm.', trap: 'Listing Cs without actions.' }, ['2025T2-229', '2026T2-5'].map(G));

/* ---------------- Glossary and flashcards ---------------- */
[['Group', 'Two or more interacting, interdependent people; each accountable for their own work.'],
 ['Team', 'A group with a common goal, mutual accountability and synergy.'],
 ['Synergy', 'Combined output greater than the sum of individual outputs.'],
 ['Functional team', 'Members from the same department improving their own work.'],
 ['Cross-functional team', 'Members from different specialities, units or outside partners.'],
 ['Virtual team', 'Physically dispersed members linked by technology.'],
 ['Self-managed team', 'Typically 10–15 members doing interdependent jobs who take on supervisory duties.'],
 ['Belbin team roles', 'Nine roles in three groups: thinking, action, people.'],
 ['Tuckman’s stages', 'Forming, storming, norming, performing, adjourning.'],
 ['Social loafing', 'Less individual effort in a group; grows with team size.'],
 ['Groupthink', 'Losing independent thinking for the sake of cohesion.'],
 ['Norms', 'Shared, often unwritten expectations of behaviour.'],
 ['Psychological safety', 'Shared belief that the team is safe for interpersonal risk-taking.'],
 ['Coordination', 'Dividing tasks and syncing progress.'],
 ['Collaboration', 'Working jointly on the same problem.'],
 ['Kaizen', 'Continuous improvement involving everyone from CEO to line worker.'],
 ['Change management', 'Ideas, strategies and skills for leading change before, during and after it, at organisation and individual levels.']].forEach(([t, d]) => GLOSS(t, d, 1));
[['“No boss; we decide how” — team type?', 'Self-managed.'],
 ['Members from different units — team type?', 'Cross-functional (even if a manager formed it).'],
 ['All teams are groups, all groups are teams?', 'False — only the first half is true.'],
 ['Is “leadership roles” a Belbin category?', 'No: thinking, action, people.'],
 ['Disagreement and status competition — stage?', 'Storming.'],
 ['Agreement and cohesion — stage?', 'Norming.'],
 ['Team size up → effort?', 'Down (social loafing).'],
 ['Builds synergy?', 'Complementary skills.'],
 ['Coordination vs collaboration', 'Divide and sync vs solve together.'],
 ['Psychological safety in one line', 'Safe to speak up, ask, admit mistakes and take interpersonal risks.'],
 ['“Each interprets the purpose differently” — missing?', 'Clear goals and objectives.'],
 ['Change management works at which levels?', 'Organisational and individual; before, during and after change.']].forEach(([f, b]) => CARD(f, b, 1));
