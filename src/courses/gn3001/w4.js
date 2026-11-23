/* ===================== SPG WEEK 4 — Leadership ===================== */
WEEK({ course: 'gn3001', n: 4, title: 'Leadership Lessons',
  blurb: 'Leadership starts inside: values, the power of choice, and focusing energy on what you control. It extends to others through communication, coaching, management functions and the Gung Ho! practices (squirrel, beaver, goose). Styles range from job-centred to employee-centred; Gardner’s multiple intelligences remind leaders that people are capable in different ways.',
  topics: [
    { title: '4.1 Lead yourself from within', cs: ['lead-self'] },
    { title: '4.2 Lead others: management functions, coaching, Gung Ho!', cs: ['lead-others'] },
    { title: '4.3 Leadership styles', cs: ['leadership-styles'] },
    { title: '4.4 Gardner’s multiple intelligences', cs: ['multiple-intelligences'] }] });

/* ---------------- 4.1 Lead yourself ---------------- */
C({ id: 'lead-self', week: 4, title: 'Lead yourself from within: power of choice and spheres of responsibility', pri: 'High', prereq: [],
  src: 'Study guide W4 §4.1 (six pillars, spheres of control/influence/concern) · Covey, The 7 Habits (as asked) · spg notes W4 · PYQs 2023 T1 Quiz 1 Q41 Q43 Q45 Q46, 2024 T1 Q200 · Written: 2024 T3 Q193',
  oneLine: 'Uphold values, know your spheres (control, influence, concern), exercise your power of choice, own your choices, play to your full potential, invest in yourself.',
  misShort: 'Swapping influence (direct) and concern (indirect), or thinking resilience means suppressing emotion.',
  intu: R`<p>Two students face the same bad placement season. One spends evenings reading news about layoffs. The other practises interviews and asks seniors for referrals.</p><p>Both care about the job market. Only one is spending energy where it can change something. The question this concept answers: <b>how do you lead yourself before you lead anyone else?</b></p>`,
  why: R`<ul><li>Spheres of responsibility: definitions asked in 2023 T1 Quiz 1 Q45–46 and as a written question (2024 T3 Q193).</li><li>Covey’s power of choice (Q41), resilience (Q43), “leading yourself from within” statements (2024 T1 Q200).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Six pillars of leading yourself from within</b> — uphold your core values; know your spheres of responsibility; exercise your power of choice; take responsibility for yourself; play to your full potential; invest in yourself.',
    '<b>Sphere of control</b> — things within your control: your mind, body, effort, potential.',
    '<b>Sphere of influence</b> — outside your control but <i>directly</i> concerns you; you can affect it through others.',
    '<b>Sphere of concern</b> — outside your control and <i>indirectly</i> affects or interests you: war, pandemic, the economy.',
    '<b>Power of choice</b> (Covey, Be Proactive) — between stimulus and response you choose; take control of your thoughts and emotions; say yes or no deliberately.',
    '<b>Emotional resilience</b> — built by processing emotions, which starts with self-awareness; not by suppressing or ignoring them.']))
    + '<p><b>In words:</b> spend most energy where you have control, some where you have influence, and little on concern; choose your responses; keep growing.</p>',
  vis: M.graph([
    { id: 'n', t: 'Sphere of concern\n(indirect, no control)', x: 260, y: 30, w: 230 },
    { id: 'i', t: 'Sphere of influence\n(direct, through others)', x: 260, y: 110, w: 230 },
    { id: 'c', t: 'Sphere of control\n(you)', x: 260, y: 190, w: 160, hl: true }],
    [{ a: 'c', b: 'i', lab: 'expand by acting' }, { a: 'i', b: 'n', lab: 'worry lives here', dash: true }],
    { cap: 'Three nested circles, drawn as layers. Proactive people work outward from the centre.', label: 'spheres of responsibility' }),
  ex: [
    M.ex('Introductory', R`<p>The state of the global economy falls in which sphere?</p>`, R`<p>Outside your control and indirect → <b>sphere of concern</b>. <b>Now suppose</b> it is your team’s release process: outside your sole control but direct, and you can affect it → <b>influence</b>.</p>`),
    M.ex('Standard', R`<p>Which reflect leading yourself from within? (1) Recognising the power of choice in saying yes or no. (2) Exploring possibilities and opportunities beyond. (3) Seeking support or building a support system.</p>`, R`<p><b>All three</b> (2024 T1 Q200): power of choice; play to your full potential; invest in yourself.</p>`),
    M.ex('Exam-level', R`<p>Write a 3-line application of spheres to a final-year student worried about placements.</p>`,
      R`<p>Control: daily practice, projects, résumé. Influence: referrals, mock interviews with seniors, faculty recommendations. Concern: the hiring market — noted, not dwelt on. The written answer earns marks for a personal example and the link to proactivity (2024 T3 Q193).</p>`)],
  math: M.rule(R`<p><b>Control = within you. Influence = outside, direct. Concern = outside, indirect.</b></p><p><b>Resilience = process emotions (self-awareness), not suppress.</b></p>`)
    + M.why([['“Sphere of unknown”', 'not a course sphere.'],
      ['Making choices based on circumstances', 'that is reactive; Covey’s point is choosing your response.'],
      ['Suppressing emotions for resilience', 'suppression weakens it.'],
      ['Seeking support contradicts self-leadership', 'investing in yourself includes a support system.']]),
  conn: R`<p><b>At work:</b> a sprint retrospective that lists “what we control” before “what we need from others” uses spheres.</p><p><b>Later:</b> Week 5’s self-awareness and self-regulation are the emotional half of self-leadership.</p>`,
  mis: M.ul(['Influence vs concern swapped (2023 T1 Quiz 1 Q45–46).', 'Suppressing emotions for resilience (Q43).', 'Leaving out “seeking support” in 2024 T1 Q200.']),
  exam: R`<p><b>How it is asked:</b> sphere definitions and classification; statement sets; a written explanation with an example.</p><p><b>Fast method:</b> ask “can I change it myself?” (control) → “does it hit me directly?” (influence) → otherwise concern.</p>`
});
Q({ cp: 'lead-self', type: 'mcq', diff: 'easy', q: 'Your own sleep schedule and study hours fall in which sphere?', opts: ['Concern', 'Influence', 'Control', 'None'], ans: 2,
  why: ['You control them.', 'You do not need others.', 'Correct.', 'They are in a sphere.'], sol: 'Within you → control.' });
Q({ cp: 'lead-self', type: 'mcq', diff: 'moderate', q: 'Your manager’s decision on which project you join is in which sphere?', opts: ['Control', 'Influence', 'Concern', 'Unknown'], ans: 1,
  why: ['You do not decide it.', 'Correct: outside your control, directly affects you, and you can affect it.', 'It is direct, not indirect.', 'Not a sphere.'], sol: 'Direct but not yours to decide → influence.' });
Q({ cp: 'lead-self', type: 'mcq', diff: 'moderate', q: 'Covey’s “power of choice” is best shown by:', opts: ['Blaming traffic for missing a meeting', 'Pausing after harsh criticism and choosing a calm, factual reply', 'Letting your team lead decide your priorities', 'Avoiding decisions'], ans: 1,
  why: ['Reactive.', 'Correct: choosing the response.', 'Giving away choice.', 'Passive.'], sol: 'Stimulus → choice → response.' });
Q({ cp: 'lead-self', type: 'short', diff: 'moderate', q: 'Define the three spheres of responsibility with one example each.',
  model: '<p>Control: within your control — your effort or skills. Influence: outside your control but directly affecting you, affected through others — your manager’s view of your work. Concern: outside your control, indirect — the economy.</p>' });

/* ---------------- 4.2 Lead others ---------------- */
C({ id: 'lead-others', week: 4, title: 'Leading others: management functions, coaching and Gung Ho!', pri: 'High', prereq: ['lead-self'],
  src: 'Study guide W4 §4.2–4.3 (lead yourself to lead others; Gung Ho! squirrel, beaver, goose) · spg notes W4 (manager vs leader, collaborative leader) · PYQs 2023 T1 Quiz 1 Q16 Q17 Q20 Q26 Q27 Q44 Q48 Q49, 2023 T1 Q57',
  oneLine: 'Managers plan, organise, lead and control; leaders align people to a vision. A collaborative coach generates options with the person. Gung Ho!: worthwhile work (squirrel), in control of achieving the goal (beaver), cheering each other (goose).',
  misShort: 'Calling “diagnose and prescribe” collaborative coaching, or reading Gung Ho! as rewards-driven.',
  intu: R`<p>Laura runs a department with two new managers, high turnover and staff who feel dejected by her “glass half-empty” style. She has not shared budgets, so her managers cannot allocate work.</p><p>She needs both hats: the <b>manager’s</b> (resources, goals, budgets) and the <b>leader’s</b> (a positive environment, confidence, involvement). The question this concept answers: <b>what does leading other people involve, day to day?</b></p>`,
  why: R`<ul><li>The Laura case (2023 T1 Quiz 1 Q16–20) and two coaching cases (Q26 Murat, Q27 Nurit).</li><li>Gung Ho! (Q48–49), interpersonal behaviour (Q44), management functions (2023 T1 Q57).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Management functions</b> — <b>Planning</b> (goals, strategy), <b>Organizing</b> (designing structures, allocating resources and jobs), <b>Leading</b> (motivating, directing people), <b>Controlling</b> (measuring, correcting).',
    '<b>Manager vs leader</b> — managers focus on processes, systems and structure; leaders focus on people, vision and change.',
    '<b>Collaborative coaching</b> — coach and coachee generate alternatives together; the coachee weighs consequences and chooses. Contrast: directive coaching (diagnose and prescribe).',
    '<b>Collaborative leader</b> — empowers people, non-judgemental, invites ideas, facilitates consensus, manages conflict constructively.',
    '<b>Gung Ho!</b> (Blanchard & Bowles) — <b>Spirit of the Squirrel</b>: worthwhile, important work; <b>Way of the Beaver</b>: people in control of achieving their goals; <b>Gift of the Goose</b>: cheering each other on.',
    '<b>Interpersonal effectiveness</b> — make your reasoning explicit, invite others to find gaps, ask about their data; avoid persistent, unyielding argument.',
    '<b>Building staff confidence</b> — involve staff in decisions and recognise contributions.']))
    + '<p><b>In words:</b> organise the work, then lead the people: involve them, coach by asking, make the work meaningful and cheer progress.</p>',
  vis: M.table(['Function', 'Question it answers', 'Example'], [
    ['Planning', 'What and why?', 'Set the quarter’s goals'],
    ['Organizing', 'Who does what, with what?', 'Design the team structure, allocate budget and people'],
    ['Leading', 'How do we motivate?', 'Coach, inspire, communicate'],
    ['Controlling', 'Are we on track?', 'Compare results with targets, correct']], 'The four management functions (POLC).'),
  ex: [
    M.ex('Introductory', R`<p>Which function decides about designing structures and allocating resources to people?</p>`, R`<p><b>Organizing</b> (2023 T1 Q57). Planning sets goals; organizing arranges structure and resources to meet them.</p>`),
    M.ex('Standard', R`<p>Tuval coaches Murat collaboratively. Which approach fits: diagnose his lack of assertiveness and give tips; generate alternatives together and let him weigh consequences; pressure him to bring solutions; share her own story?</p>`,
      R`<p><b>Generate alternatives together</b> (Q26). Diagnosing and prescribing is directive; pressure is not coaching; a personal story centres the coach.</p>`),
    M.ex('Exam-level', R`<p>Map each Gung Ho! animal to a practice and name what a manager does for each.</p>`,
      R`<ul><li>Squirrel — worthwhile work: explain why the work matters.</li><li>Beaver — in control of achieving the goal: set the goal, then let people decide how.</li><li>Goose — cheering each other on: recognise progress, often and sincerely.</li></ul><p>The squirrel is motivated by the work’s importance, not rewards (Q48).</p>`)],
  math: M.rule(R`<p><b>POLC: Planning, Organizing, Leading, Controlling.</b></p><p><b>Collaborative coaching = options together, coachee decides.</b></p><p><b>Squirrel = worthwhile · Beaver = in control · Goose = cheer.</b></p>`)
    + M.why([['Micromanaging to show leadership', 'erodes confidence and initiative.'],
      ['Keeping budgets to yourself', 'the cause of Laura’s managers’ frustration.'],
      ['Squirrel works for rewards', 'it works because the work matters.'],
      ['Persistent, unyielding arguments', 'damage relationships.']]),
  conn: R`<p><b>At work:</b> a one-to-one that asks “what options do you see?” before giving advice is collaborative coaching.</p><p><b>Earlier:</b> listening (Week 2) is the coach’s core tool. <b>Next:</b> styles (4.3).</p>`,
  mis: M.ul(['Option 1 in Q26 (diagnose and prescribe) — helpful but directive.', 'Option 1 in Q49 (rewards and recognition).', 'Picking one true option in Q20 when “All of these” is offered.', 'Planning instead of organizing (2023 T1 Q57).']),
  exam: R`<p><b>How it is asked:</b> short cases with four advice options. <b>Fast method:</b> the right option involves people, shares information and builds confidence; options with micromanage, pressure, withhold or criticise are wrong.</p>`
});
Q({ cp: 'lead-others', type: 'mcq', diff: 'easy', q: 'Comparing actual sales with targets each month and correcting course is:', opts: ['Planning', 'Organizing', 'Leading', 'Controlling'], ans: 3,
  why: ['Planning sets targets.', 'Organizing arranges resources.', 'Leading motivates.', 'Correct: measure and correct.'], sol: 'Measure vs target → controlling.' });
Q({ cp: 'lead-others', type: 'mcq', diff: 'moderate', q: 'A team lead lets each engineer choose how to meet an agreed goal and removes obstacles for them. Which Gung Ho! idea?', opts: ['Spirit of the Squirrel', 'Way of the Beaver', 'Gift of the Goose', 'None'], ans: 1,
  why: ['Squirrel is about worthwhile work.', 'Correct: people in control of achieving the goal.', 'Goose is cheering.', 'It is a Gung Ho! idea.'], sol: 'Control over how → beaver.' });
Q({ cp: 'lead-others', type: 'mcq', diff: 'moderate', q: 'Which is <b>collaborative</b> coaching?', opts: ['“Your problem is X; do Y and Z.”', '“What options do you see? What happens if you try each?”', '“Fix it by Monday.”', '“When I was your age I…”'], ans: 1,
  why: ['Directive.', 'Correct.', 'Pressure.', 'Centres the coach.'], sol: 'Options together, coachee decides.' });
Q({ cp: 'lead-others', type: 'short', diff: 'moderate', q: 'Laura has not shared budgets and her tone discourages staff. Give two management and two leadership actions she should take.',
  model: '<p>Management: share departmental budgets with her managers; set clear goals and allocate resources to match the workload.</p><p>Leadership: communicate openly and positively; involve staff in decisions and recognise their contributions.</p>' });

/* ---------------- 4.3 Leadership styles ---------------- */
C({ id: 'leadership-styles', week: 4, title: 'Leadership styles: job-centred vs employee-centred and the classic styles', pri: 'High', prereq: ['lead-others'],
  src: 'Study guide W4 · spg notes W4 · PYQs 2023 T1 Quiz 1 Q30, 2023 T2 Q101–105, 2025 T2 Q244–246 · Written: 2026 T1 Q7, 2026 T2 Q6',
  oneLine: 'Job-centred (task-oriented) leaders focus on methods, plans, reports and targets; employee-centred (people-oriented) leaders on relationships, participation and psychological safety. Laissez-faire hands decisions to the team.',
  misShort: 'Calling a leader who shares progress updates people-oriented when every behaviour is about targets.',
  intu: R`<p>Two leads run the same ML team. One begins every stand-up with the dashboard: deadlines, benchmarks, who is late. The other begins by asking how everyone is doing and makes the retro a safe space.</p><p>Both may be effective. They are focused on different things. The question this concept answers: <b>what is a leader mainly paying attention to — the job or the people?</b></p>`,
  why: R`<ul><li>Two-option classification blocks: 2023 T2 Q101–105 (job vs employee-centred) and 2025 T2 Q244–246 (task vs people-oriented).</li><li>Laissez-faire (2023 T1 Quiz 1 Q30); written “what style, and is it appropriate?” (2026 T1 Q7, 2026 T2 Q6).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Job-centred / task-oriented</b> — sets methods and procedures, plans, schedules, reports, quotas, deadlines and benchmarks; influences followers to do the job the leader’s way.',
    '<b>Employee-centred / people-oriented</b> — warm relationships, seeks followers’ ideas, personal check-ins, facilitation, psychological safety.',
    '<b>Laissez-faire</b> — hands-off; gives followers freedom to decide how to proceed and to delegate.',
    '<b>Authoritarian (autocratic)</b> — decides alone, expects compliance.',
    '<b>Transformational</b> — inspires change through a shared vision.',
    '<b>Servant</b> — puts followers’ growth and needs first.',
    '<b>Fit</b> — inexperienced followers need more direction plus support; experienced ones more autonomy.']))
    + '<p><b>In words:</b> ask whether each behaviour is about the work (task) or the person (people); a hands-off leader is laissez-faire.</p>',
  vis: M.table(['Behaviour', 'Style'], [
    ['Developing department plans; sending quota reports', 'Job-centred / task'],
    ['Exact data-cleaning protocols; strict deadlines and benchmarks', 'Task-oriented'],
    ['Warm good-morning; asking for ideas on a decision', 'Employee-centred / people'],
    ['Personal check-ins; psychological safety in retros', 'People-oriented'],
    ['“Decide how to do it and whom to delegate to”', 'Laissez-faire']], 'Classifications from the papers.'),
  ex: [
    M.ex('Introductory', R`<p>The leader seeks ideas from followers on a decision. Job- or employee-centred?</p>`, R`<p><b>Employee-centred</b> (2023 T2 Q105): participation.</p>`),
    M.ex('Standard', R`<p>A lead ML engineer shares sprint progress, sets strict deployment deadlines, and enforces benchmarks with incentives and accountability. Style?</p>`, R`<p><b>Task-oriented</b> (2025 T2 Q245). “Sharing updates” is about the work, not the people.</p>`),
    M.ex('Exam-level', R`<p>A senior lead gives a first-year analyst only deadlines and corrections. Name the style and judge its fit.</p>`,
      R`<p>Task-oriented/directive. Direction suits an inexperienced analyst, but without support and coaching it lowers confidence and trust; add regular check-ins and explain the why, then hand over autonomy as skill grows (the shape of 2026 T1 Q7).</p>`)],
  math: M.rule(R`<p><b>About the work → job/task-centred. About the person → employee/people-centred. Hands-off → laissez-faire.</b></p>`)
    + M.why([['Servant for a hands-off manager', 'servant leaders actively support; laissez-faire steps back.'],
      ['Transformational for “freedom to decide”', 'transformational is about vision and inspiration.'],
      ['Progress updates = people-oriented', 'updates on targets are task focus.']]),
  conn: R`<p><b>At work:</b> good leads mix both: task clarity in planning, people focus in one-to-ones.</p><p><b>Earlier:</b> psychological safety (Week 1). <b>Later:</b> Week 5’s EI explains why people-oriented behaviours work.</p>`,
  mis: M.ul(['Servant or transformational for the hands-off scenario (2023 T1 Quiz 1 Q30).', 'People-oriented for Q245 because of “shares updates”.']),
  exam: R`<p><b>How it is asked:</b> five-statement blocks with two options. <b>Fast method:</b> underline the object of the verb — plans, reports, deadlines (task) vs people, ideas, feelings (people).</p>`
});
Q({ cp: 'leadership-styles', type: 'mcq', diff: 'easy', q: 'A manager publishes a weekly leaderboard of tickets closed per person. Style?', opts: ['Job-centred', 'Employee-centred'], ans: 0,
  why: ['Correct: about output.', 'Not about relationships.'], sol: 'Output metrics → job-centred.' });
Q({ cp: 'leadership-styles', type: 'mcq', diff: 'moderate', q: 'A director tells a senior team, “You decide the approach and who does what; tell me when it’s done.” Style?', opts: ['Authoritarian', 'Servant', 'Laissez-faire', 'Transformational'], ans: 2,
  why: ['Authoritarian decides alone.', 'Servant actively supports.', 'Correct: hands-off.', 'No vision-building.'], sol: 'Hands-off → laissez-faire.' });
Q({ cp: 'leadership-styles', type: 'num', diff: 'hard', q: 'Count the employee-centred behaviours: (1) drafting the annual plan, (2) asking the team to vote on the offsite venue, (3) a birthday call to a remote member, (4) sending quota-attainment reports, (5) running a blameless retro, (6) setting model-accuracy benchmarks.', ans: 3, tol: 0,
  sol: 'Employee-centred: 2, 3, 5.' });
Q({ cp: 'leadership-styles', type: 'short', diff: 'moderate', q: 'When is a task-oriented style appropriate, and what must accompany it for a new team member?',
  model: '<p>When the work is new to the follower or deadlines are tight, clear direction on tasks, methods and timelines is appropriate.</p><p>For a new member it must come with support — explaining why, regular check-ins, coaching and recognition — and shift toward autonomy as competence grows.</p>' });

/* ---------------- 4.4 Multiple intelligences ---------------- */
C({ id: 'multiple-intelligences', week: 4, title: 'Gardner’s multiple intelligences', pri: 'Medium', prereq: [],
  src: 'spg notes W4 (eight intelligences; all can be developed) · Study guide, later chapter (Gardner) · PYQs 2023 T1 Quiz 1 Q34 Q35 Q40, 2024 T1 Q201, 2026 T1 Q22, 2026 T2 Q21',
  oneLine: 'Intelligence is a set of capabilities, not one score: linguistic, logical-mathematical, spatial, bodily-kinesthetic, musical, interpersonal, intrapersonal, naturalistic (+ existential; speculated teaching-pedagogical). All can be developed.',
  misShort: 'Swapping intrapersonal (self) and interpersonal (others), or saying intelligences cannot be developed.',
  intu: R`<p>A sales lead who reads a room instantly, a data scientist who sees patterns in numbers, a designer who thinks in shapes. Who is the “most intelligent”?</p><p>Gardner’s answer: wrong question. Each has a different intelligence, and each can be developed. The question this concept answers: <b>what kinds of intelligence are there?</b></p>`,
  why: R`<ul><li>The intra/interpersonal swap (2023 T1 Quiz 1 Q35) and “can intelligences be developed?” (2026 T1 Q22 and 2026 T2 Q21, the same statement twice).</li><li>Existential (Q40), teaching-pedagogical (2024 T1 Q201), the definition (Q34).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Gardner’s view</b> — intelligence is a set of capabilities that allow a person to learn and solve problems; several relatively independent intelligences.',
    '<b>Linguistic</b> words · <b>Logical-mathematical</b> reasoning · <b>Spatial</b> perceive and use visual information · <b>Bodily-kinesthetic</b> use the body skilfully · <b>Musical</b> rhythm, pitch.',
    '<b>Interpersonal</b> — understanding <i>others</i> and social interactions.',
    '<b>Intrapersonal</b> — understanding <i>oneself</i>: thoughts, emotions, motives.',
    '<b>Naturalistic</b> — recognising patterns in nature.',
    '<b>Existential</b> — sensitivity to questions of life, death and the human condition.',
    '<b>Teaching-pedagogical</b> (speculated addition) — successfully imparting knowledge to others.',
    '<b>Development</b> — all intelligences can be nurtured and developed through experience.']))
    + '<p><b>In words:</b> people are smart in different ways, and every way can grow.</p>',
  vis: M.table(['Intelligence', 'Core ability', 'Mnemonic cue'], [
    ['Intrapersonal', 'Knowing yourself', 'intra = inside'],
    ['Interpersonal', 'Understanding others', 'inter = between'],
    ['Naturalistic', 'Patterns in nature', 'naturalist'],
    ['Spatial', 'Visual information', 'space'],
    ['Existential', 'Meaning of life and death', 'existence'],
    ['Teaching-pedagogical', 'Teaching others', 'pedagogy']], 'The intelligences that the papers test most.'),
  ex: [
    M.ex('Introductory', R`<p>Sensitivity to the meaning of life and death is which intelligence?</p>`, R`<p><b>Existential</b> (2023 T1 Quiz 1 Q40).</p>`),
    M.ex('Standard', R`<p>Which pairs are correct? (1) Naturalistic — patterns in nature. (2) Spatial — visual information. (3) Intrapersonal — understanding others. (4) Interpersonal — understanding oneself.</p>`, R`<p><b>1 and 2 only</b>. 3 and 4 are swapped.</p>`),
    M.ex('Exam-level', R`<p>True or false: Gardner says intelligences are innate and cannot be developed through experience.</p>`, R`<p><b>False</b> (2026 T1 Q22, 2026 T2 Q21). “Innate” sounds scientific; the “cannot be developed” half makes it false.</p>`)],
  math: M.rule(R`<p><b>Intra = self; inter = others.</b> <b>All intelligences can be developed.</b></p>`)
    + M.why([['“A permanent change in behaviour from experience”', 'that defines learning.'],
      ['“Novel answers or products”', 'that defines creativity.'],
      ['Teaching-pedagogical = mastering presentations', 'it is imparting knowledge to others.']]),
  conn: R`<p><b>At work:</b> a manager who staffs by strengths (the interpersonal engineer on the client call) applies Gardner.</p><p><b>Later:</b> Week 5’s self-awareness overlaps intrapersonal intelligence; empathy overlaps interpersonal.</p>`,
  mis: M.ul(['The intra/inter swap (Q35).', 'True for “cannot be developed” (2026 T1 Q22, 2026 T2 Q21).', 'The learning definition in Q34.']),
  exam: R`<p><b>How it is asked:</b> definitions, matching pairs, true/false. <b>Fast method:</b> check the prefix: intra = inside you.</p>`
});
Q({ cp: 'multiple-intelligences', type: 'mcq', diff: 'easy', q: 'A mediator who senses tension and reads others’ intentions well shows mainly:', opts: ['Intrapersonal', 'Interpersonal', 'Naturalistic', 'Logical-mathematical'], ans: 1,
  why: ['Intrapersonal is about oneself.', 'Correct.', 'Nature patterns.', 'Reasoning.'], sol: 'Others → interpersonal.' });
Q({ cp: 'multiple-intelligences', type: 'mcq', diff: 'moderate', q: 'Which statement agrees with Gardner?', opts: ['Intelligence is a single general ability', 'Intelligences are fixed at birth', 'People have several relatively independent intelligences that can be developed', 'Only logical-mathematical intelligence predicts success'], ans: 2,
  why: ['Opposite of Gardner.', 'They can be developed.', 'Correct.', 'Not Gardner.'], sol: 'Several, independent, developable.' });
Q({ cp: 'multiple-intelligences', type: 'num', diff: 'hard', q: 'How many correct pairs? (1) Bodily-kinesthetic — using the body skilfully. (2) Intrapersonal — understanding social interactions. (3) Existential — meaning of life. (4) Teaching-pedagogical — imparting knowledge. (5) Interpersonal — knowing one’s own motives.', ans: 3, tol: 0,
  sol: 'Correct: 1, 3, 4. Pairs 2 and 5 are the swap.' });
Q({ cp: 'multiple-intelligences', type: 'short', diff: 'moderate', q: 'Apply any four of Gardner’s intelligences to a career in data science.',
  model: '<p>Logical-mathematical for modelling; spatial for visualising data; interpersonal for working with stakeholders; intrapersonal for knowing your strengths and managing learning. All can be developed with practice.</p>' });

/* ---------------- Variations ---------------- */
const G4 = id => 'gn3001-' + id;
VQ({ kind: 'counting', type: 'num', q: 'Classify: (1) your fitness, (2) the repo rate set by the central bank, (3) your manager’s rating of you, (4) a war overseas, (5) your skills, (6) your team’s choice of tool. How many are in the sphere of <b>influence</b>?', ans: 2, tol: 0,
  sol: 'Influence: 3 and 6 (direct, not yours alone). Control: 1, 5. Concern: 2, 4.', trap: 'The repo rate affects your EMI, but you cannot influence it.' }, ['2023T1q1-45', '2023T1q1-46', '2024T3-193'].map(G4));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Resilience is built by suppressing emotions. (2) Power of choice means choosing your response. (3) Investing in yourself includes building a support system. (4) Playing to your full potential includes exploring opportunities. Which are correct?', opts: ['2, 3 and 4', '1, 2 and 3', '2 and 3 only', 'All four'], ans: 0,
  why: ['Correct.', '1 is false.', '4 is also true.', '1 is false.'], sol: 'Only statement 1 is false.', trap: 'Suppression sounds like discipline.' }, ['2023T1q1-41', '2023T1q1-43', '2024T1-200'].map(G4));
VQ({ kind: 'case', type: 'mcq', q: 'A plant head has two new supervisors, staff turnover is high, and he has not told supervisors their overtime budget, so they cannot plan shifts. Best advice?', opts: ['Tighten rules and monitor supervisors closely', 'Share the budget, set clear goals and involve supervisors and staff in planning', 'Do the shift planning himself', 'Wait for turnover to settle'], ans: 1,
  why: ['Micromanagement.', 'Correct: management (budget, goals) plus leadership (involvement).', 'Neglects his leader role.', 'Passive.'], sol: 'Same shape as the Laura case.', trap: 'Option 3 feels responsible.' }, ['2023T1q1-16', '2023T1q1-17', '2023T1q1-20'].map(G4));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A mentor wants to coach a junior collaboratively about missed deadlines. Which is closest, and which is the near-miss?', opts: ['Ask her to list causes and options, then help her weigh each — collaborative', 'Tell her the cause is poor estimation and give an estimation template — collaborative', 'Remind her she is accountable and should bring solutions — collaborative', 'Share how the mentor handled deadlines years ago — collaborative'], ans: 0,
  why: ['Correct.', 'Near-miss: helpful but directive.', 'Pressure.', 'Coach-centred.'], sol: 'Collaborative = options together.', trap: 'Option 2 is specific and useful, but the coach decides.' }, ['2023T1q1-26', '2023T1q1-27'].map(G4));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. Squirrel, B. Beaver, C. Goose with I. Cheering progress; II. People in control of achieving the goal; III. Worthwhile work; IV. Rewards and recognition.', opts: ['A-III, B-II, C-I', 'A-IV, B-II, C-I', 'A-III, B-I, C-II', 'A-II, B-III, C-I'], ans: 0,
  why: ['Correct.', 'The squirrel is not reward-driven.', 'B and C swapped.', 'A and B swapped.'], sol: 'Squirrel = worthwhile; beaver = control; goose = cheer.', trap: 'IV sounds like the goose.' }, ['2023T1q1-48', '2023T1q1-49'].map(G4));
VQ({ kind: 'negated', type: 'mcq', q: 'Which behaviour is <b>least</b> likely to build good working relationships?', opts: ['Making your reasoning explicit', 'Inviting others to find gaps in your reasoning', 'Asking about others’ data sources', 'Repeating your position until others give in'], ans: 3,
  why: ['Builds trust.', 'Builds trust.', 'Builds understanding.', 'Correct: unyielding argument.'], sol: 'Persistence without inquiry damages relationships.', trap: 'None strong.' }, ['2023T1q1-44'].map(G4));
VQ({ kind: 'scenario', type: 'mcq', q: 'A new GM restructures sales into regions and assigns headcount and budget to each. Function?', opts: ['Planning', 'Organizing', 'Leading', 'Controlling'], ans: 1,
  why: ['Planning set the targets earlier.', 'Correct.', 'Not motivating.', 'Not measuring.'], sol: 'Structure + resources → organizing.', trap: 'Restructuring sounds strategic (planning).' }, ['2023T1-57'].map(G4));
VQ({ kind: 'counting', type: 'num', q: 'How many are job-centred? (1) Sets the release calendar. (2) Asks the team which framework to adopt and goes with the vote. (3) Emails daily defect counts. (4) Takes a struggling member for coffee. (5) Insists on a fixed code-review checklist.', ans: 3, tol: 0,
  sol: 'Job-centred: 1, 3, 5.', trap: 'A vote on a framework is a work topic, but the behaviour is participation (employee-centred).' }, ['2023T2-101', '2023T2-102', '2023T2-103', '2023T2-104', '2023T2-105'].map(G4));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A product lead begins each sprint by reviewing velocity charts and announcing deadlines, then thanks the team publicly. Which style dominates?', opts: ['Task-oriented', 'People-oriented'], ans: 0,
  why: ['Correct: most behaviours are about targets.', 'One thank-you does not change the focus.'], sol: 'Weigh the majority of behaviours.', trap: 'The thank-you pulls toward people-oriented.' }, ['2025T2-244', '2025T2-245', '2025T2-246'].map(G4));
VQ({ kind: 'concept', type: 'mcq', q: 'A CEO says to a project head: “It’s your project — choose the method and the team; I’ll check at the end.” Which style, and its main risk?', opts: ['Laissez-faire; drift without guidance', 'Servant; over-support', 'Authoritarian; low morale', 'Transformational; unrealistic vision'], ans: 0,
  why: ['Correct.', 'No active support.', 'The CEO does not decide.', 'No vision.'], sol: 'Hands-off → laissez-faire.', trap: 'Servant also empowers.' }, ['2023T1q1-30'].map(G4));
VQ({ kind: 'written', type: 'short', q: 'Two managers: one fixes every error by rewriting the analyst’s work; the other asks the analyst to walk through the error and agree a fix. Characterise both styles and say which fits an inexperienced analyst better.',
  model: '<p>The first is task-centred and directive, removing learning; the second is people-centred and coaching. For an inexperienced analyst, a guided, coaching style with clear expectations fits better — direction plus support, then autonomy.</p>',
  sol: 'Label, compare, judge fit.', trap: 'Labelling without judging fit.' }, ['2026T1-7', '2026T2-6'].map(G4));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Intrapersonal = understanding oneself. (2) Existential = sensitivity to life, death and meaning. (3) Intelligences are fixed at birth. (4) Teaching-pedagogical = imparting knowledge. (5) Interpersonal = understanding one’s own motives. Which are correct?', opts: ['1, 2 and 4', '1, 2, 4 and 5', '2, 3 and 4', '1 and 5'], ans: 0,
  why: ['Correct.', '5 is the swap.', '3 is false.', '5 is false.'], sol: '3 false (developable); 5 swapped.', trap: 'Statement 5.' }, ['2023T1q1-34', '2023T1q1-35', '2023T1q1-40', '2024T1-201', '2026T1-22', '2026T2-21'].map(G4));

/* ---------------- Glossary and flashcards ---------------- */
[['Sphere of control', 'Within your control: mind, body, effort, potential.'],
 ['Sphere of influence', 'Outside your control but directly concerns you.'],
 ['Sphere of concern', 'Outside your control; indirect — economy, war, pandemic.'],
 ['Power of choice', 'Choosing your response; controlling your thoughts and emotions (Covey).'],
 ['POLC', 'Planning, Organizing, Leading, Controlling.'],
 ['Collaborative coaching', 'Coach and coachee generate options together; the coachee decides.'],
 ['Gung Ho!', 'Squirrel (worthwhile work), Beaver (in control of achieving the goal), Goose (cheering each other).'],
 ['Job-centred style', 'Focus on tasks, methods, plans, reports, targets.'],
 ['Employee-centred style', 'Focus on people, relationships, participation.'],
 ['Laissez-faire', 'Hands-off; followers decide how.'],
 ['Multiple intelligences', 'Gardner: several relatively independent, developable intelligences.'],
 ['Intrapersonal intelligence', 'Understanding oneself.'],
 ['Interpersonal intelligence', 'Understanding others.'],
 ['Existential intelligence', 'Sensitivity to life, death and meaning.']].forEach(([t, d]) => GLOSS(t, d, 4));
[['Economy, war, pandemic — sphere?', 'Concern.'],
 ['Outside your control, directly concerns you', 'Sphere of influence.'],
 ['Designing structure + allocating resources', 'Organizing.'],
 ['Collaborative coaching in one line', 'Generate alternatives together; coachee weighs consequences.'],
 ['Spirit of the Squirrel', 'Worthwhile, important work.'],
 ['Sending quota reports — style?', 'Job-centred.'],
 ['Seeking followers’ ideas — style?', 'Employee-centred.'],
 ['Freedom to decide and delegate — style?', 'Laissez-faire.'],
 ['Intra vs interpersonal', 'Intra = self; inter = others.'],
 ['Can Gardner’s intelligences be developed?', 'Yes.']].forEach(([f, b]) => CARD(f, b, 4));
