/* ===================== SPG WEEK 5 — Emotional intelligence and conflict ===================== */
WEEK({ course: 'gn3001', n: 5, title: 'Emotional Intelligence and Conflict Management',
  blurb: 'Emotions are brief, subjective responses; moods last longer. Emotional intelligence is the developable ability to recognise and manage them in yourself and others — five constructs (Goleman) and a six-step routine (6R). When emotions turn into disagreement, the Thomas–Kilmann instrument names five ways to handle conflict, chosen by stakes, time and relationship.',
  topics: [
    { title: '5.1 Emotions, moods and what EI is', cs: ['ei-basics'] },
    { title: '5.2 Goleman’s five EI constructs', cs: ['ei-goleman'] },
    { title: '5.3 The 6R framework and resilience', cs: ['ei-6r'] },
    { title: '5.4 Conflict management styles (TKI)', cs: ['conflict-tki'] }] });

/* ---------------- 5.1 EI basics ---------------- */
C({ id: 'ei-basics', week: 5, title: 'Emotions, moods, attitudes and the amygdala hijack', pri: 'High', prereq: [],
  src: 'Study guide W5 §5.2 (what EI is; amygdala hijack) · spg notes W5 · PYQs 2023 T1 Q11 Q13 Q15 Q18–20, 2023 T2 Q112 Q114, 2025 T2 Q233, 2026 T2 Q15',
  oneLine: 'Emotions are brief, intense, triggered and subjective; moods are longer and milder. EI is context-specific and developable. An amygdala hijack is intense fear or anger overriding reason, managed by self-awareness and self-regulation.',
  misShort: 'Reversing emotions and moods, or thinking EI is a single fixed trait.',
  intu: R`<p>In a meeting, a teammate announces an audit failure. Harkishan feels a surge of rage, snaps at her in front of everyone, and an hour later feels terrible.</p><p>For a few seconds his emotional brain ran the show. That is an <b>amygdala hijack</b>. The question this concept answers: <b>what are emotions, and what does it mean to be intelligent about them?</b></p>`,
  why: R`<ul><li>Amygdala hijack: definition (2023 T1 Q15) and scenario-spotting (2025 T2 Q233, 2026 T2 Q15).</li><li>Emotions vs moods (2023 T1 Q18), subjective emotions (2023 T2 Q112), attitudes (Q114), EI statements (2023 T1 Q13, Q19, Q20), EI and leadership (Q11).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Emotion</b> — a brief, intense, subjective response triggered by a specific event.',
    '<b>Mood</b> — longer-lasting, less intense, often without a clear trigger.',
    '<b>Attitude</b> — positive or negative feelings about people, things and issues.',
    '<b>Emotional intelligence (EI)</b> — the ability to recognise, understand, regulate and respond appropriately to emotions, one’s own and others’. Not a single unified construct; context-specific; can be developed.',
    '<b>Amygdala hijack</b> — intense fear, anger or anxiety as the amygdala takes over the rational brain (fight–flight–freeze); managed through self-awareness and self-regulation.',
    '<b>EI and performance</b> — higher EI helps performance in jobs that need social interaction; EI helps decisions by recognising and regulating emotions.',
    '<b>EI and leadership</b> — this course’s 2023 T1 key: positively related. (One study guide claims curvilinear; see Sources.)']))
    + '<p><b>In words:</b> feelings come fast and pass; moods linger; EI is the trainable skill of noticing and steering both.</p>',
  vis: M.table(['', 'Emotion', 'Mood'], [['Duration', 'Brief', 'Longer'], ['Intensity', 'High', 'Lower'], ['Trigger', 'Specific event', 'Often unclear'], ['Example', 'Anger at a rude email', 'A grumpy week']], 'Emotions vs moods.'),
  ex: [
    M.ex('Introductory', R`<p>Which is an amygdala hijack: feeling tired and taking a break; reacting with sudden anger in a meeting and regretting it; calmly disagreeing; noticing a teammate’s stress?</p>`, R`<p><b>Sudden anger, regretted later</b> (2025 T2 Q233). Signature: outsized, fast, regretted.</p>`),
    M.ex('Standard', R`<p>Which is correct? (1) EI is a single unified construct. (2) EI is innate and cannot be developed. (3) EI does not change over time. (4) EI is context-specific.</p>`, R`<p><b>4 only</b> (2023 T1 Q13).</p>`),
    M.ex('Exam-level', R`<p>Afnan feels uncertain about a launch decision and reflects on how his emotions may influence his judgement. What does EI do here?</p>`, R`<p>It helps him <b>recognise and regulate</b> emotions, leading to better decisions (2023 T1 Q20). The trap is “high-EI people are not influenced by emotions” — EI uses emotions as information; it does not remove them.</p>`)],
  math: M.rule(R`<p><b>Emotion: brief, triggered. Mood: longer, milder.</b> <b>EI: developable, context-specific.</b> <b>Hijack → self-awareness + self-regulation.</b></p>`)
    + M.why([['Moods brief, emotions long', 'reversed.'],
      ['Emotions are objective', 'they are subjective.'],
      ['Hijack managed by intellectual ability', 'by self-awareness and self-regulation.'],
      ['EI negatively correlated with performance', 'it helps, especially in social roles.']]),
  conn: R`<p><b>At work:</b> “let me come back to you in ten minutes” is a hijack defence.</p><p><b>Next:</b> the five constructs (5.2) and the 6R routine (5.3).</p>`,
  mis: M.ul(['The reversed emotion/mood option (2023 T1 Q18).', 'Statement 1 in 2023 T1 Q13.', 'The curvilinear option in 2023 T1 Q11 (not this paper’s key).']),
  exam: R`<p><b>How it is asked:</b> definitions with reversed decoys; spot-the-hijack scenarios. <b>Fast method:</b> sudden + intense + regretted = hijack.</p>`
});
Q({ cp: 'ei-basics', type: 'mcq', diff: 'easy', q: 'Feeling low all week without a clear reason is best called a:', opts: ['Emotion', 'Mood', 'Attitude', 'Trait'], ans: 1,
  why: ['Emotions are brief and triggered.', 'Correct.', 'Attitudes are about specific targets.', 'Traits are stable personality.'], sol: 'Long, mild, no trigger → mood.' });
Q({ cp: 'ei-basics', type: 'mcq', diff: 'moderate', q: 'Which best describes how EI helps manage an amygdala hijack?', opts: ['By increasing IQ', 'By building self-awareness and self-regulation', 'By avoiding all emotions', 'By increasing social awareness only'], ans: 1,
  why: ['Not IQ.', 'Correct.', 'Avoidance is suppression.', 'Social awareness is about others.'], sol: 'Notice, then regulate.' });
Q({ cp: 'ei-basics', type: 'msq', diff: 'moderate', q: 'Which statements about EI are correct?', opts: ['It can be developed through practice', 'It is a single unified construct', 'It is context-specific', 'It helps performance in socially demanding jobs'], ans: [0, 2, 3],
  why: ['Yes.', 'No.', 'Yes.', 'Yes.'], sol: 'Developable, context-specific, useful in social roles.' });
Q({ cp: 'ei-basics', type: 'short', diff: 'easy', q: 'Distinguish emotions from moods, and define an amygdala hijack.',
  model: '<p>Emotions are brief, intense and triggered by a specific event; moods last longer and are less intense.</p><p>An amygdala hijack is intense fear, anger or anxiety as the amygdala overrides the rational brain — a sudden reaction often regretted later.</p>' });

/* ---------------- 5.2 Goleman ---------------- */
C({ id: 'ei-goleman', week: 5, title: 'Goleman’s five EI constructs', pri: 'High', prereq: ['ei-basics'],
  src: 'Study guide W5 §5.2 (five constructs; Jagriti/Jaidev) · spg notes W5 · PYQs 2023 T1 Q16 Q17, 2023 T2 Q111 Q113 Q115, 2023 T3 Q218–220, 2024 T3 Q201–203, 2025 T2 Q241–243, 2026 T2 Q14 · Written: 2024 T1 Q180, 2024 T2 Q89 Q90, 2025 T3 Q219, 2026 T1 Q4',
  oneLine: 'Self-awareness (notice your emotions), self-regulation/management (control the impulse), motivation (drive and optimism), empathy (sense others’ feelings), social skills (get along, persuade, collaborate).',
  misShort: 'Confusing self-awareness (noticing) with self-regulation (controlling) when a stem has both.',
  intu: R`<p>Jagriti realises she is angry and waits before deciding. Jaidev feels the urge to snap at an unfair customer and holds it back. Puja notices a junior’s unspoken worry. Avni persuades stakeholders and keeps everyone working together.</p><p>Four different skills. The question this concept answers: <b>which EI construct does a behaviour show?</b></p>`,
  why: R`<ul><li>The most repeated Week 5 format: five-option construct blocks (2023 T3 Q218–220, 2024 T3 Q201–203, 2025 T2 Q241–243) and the Jagriti/Jaidev pair (2023 T1 Q16–17).</li><li>Written questions ask you to apply all five constructs to a case.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Self-awareness</b> — recognising your own emotions as they occur, their triggers and effects; knowing strengths and weaknesses; trusting gut feelings.',
    '<b>Self-regulation (self-management)</b> — holding back impulses, staying calm under stress, adapting.',
    '<b>Motivation (self-motivation)</b> — passion for the work, goal-directed, optimistic, resilient, seeks learning.',
    '<b>Empathy (social awareness)</b> — sensing others’ emotions and needs, including unspoken cues.',
    '<b>Social skills (relationship management)</b> — getting along, persuading, communicating, building collaboration.',
    '<b>Not EI constructs</b> — self-concept; technical or analytical skill; TKI styles.']))
    + '<p><b>In words:</b> me–notice, me–control, me–drive, them–sense, them–handle.</p>',
  vis: M.table(['Construct', 'Verb to spot', 'Paper example'], [
    ['Self-awareness', 'recognises, is conscious of, monitors', 'Jagriti recognises she is angry'],
    ['Self-regulation', 'holds back, stays calm, manages stress', 'Jaidev holds back his impulse'],
    ['Motivation', 'passionate, goal-directed, optimistic', 'Rajesh, Kashish'],
    ['Empathy', 'notices others’ feelings, unspoken cues', 'Ahmedi, Puja'],
    ['Social skills', 'persuades, gets along, fosters collaboration', 'Ashwini, Avni']], 'Spot the verb.'),
  ex: [
    M.ex('Introductory', R`<p>Vaibhwee stays calm despite delays, manages stress, and does not let frustration spill over. Construct?</p>`, R`<p><b>Self-regulation</b> (2025 T2 Q241).</p>`),
    M.ex('Standard', R`<p>Sreekanth checks his biases, recognises when his emotional state could affect interpretation, notices when he feels defensive, and adjusts his tone. Construct?</p>`, R`<p><b>Self-awareness</b> (2025 T2 Q243). He also adjusts tone (regulation), but the stem is built around recognising — weigh the majority of verbs.</p>`),
    M.ex('Exam-level', R`<p>An operations consultant applies statistical models and communicates persuasively with stakeholders. Construct?</p>`, R`<p><b>Social skills</b> (2023 T3 Q220). The technical skill is a distractor; EI is about emotions and relationships.</p>`)],
  math: M.rule(R`<p><b>Notice → self-awareness. Control → self-regulation. Drive → motivation. Sense others → empathy. Handle others → social skills.</b></p>`)
    + M.why([['Self-concept as an EI component', 'not one of the constructs.'],
      ['Technical expertise as a construct', 'irrelevant to EI.'],
      ['“Accommodating” as an EI component', 'that is a TKI style.']]),
  conn: R`<p><b>At work:</b> a manager’s 360 feedback often maps neatly onto these five.</p><p><b>Earlier:</b> intrapersonal and interpersonal intelligences (Week 4). <b>Next:</b> 6R turns self-awareness and regulation into a routine.</p>`,
  mis: M.ul(['Self-management for Jagriti (2023 T1 Q16).', 'Social skills for Puja the mentor (2025 T2 Q242).', 'Self-regulation for Sreekanth (2025 T2 Q243).']),
  exam: R`<p><b>How it is asked:</b> five-option blocks. <b>Fast method:</b> list the verbs in the stem; most of them point to one construct.</p><p><b>Written method:</b> one line per construct, with evidence from the case and what better behaviour would look like.</p>`
});
Q({ cp: 'ei-goleman', type: 'mcq', diff: 'easy', q: 'A team lead notices a new hire seems anxious in meetings and checks in privately. Construct?', opts: ['Self-awareness', 'Self-regulation', 'Motivation', 'Empathy', 'Social skills'], ans: 3,
  why: ['About own emotions.', 'Own impulses.', 'Own drive.', 'Correct.', 'Close, but the key act is sensing her feelings.'], sol: 'Sensing others → empathy.' });
Q({ cp: 'ei-goleman', type: 'mcq', diff: 'moderate', q: 'After a failed launch, Meera stays optimistic, sets a new target and asks for feedback to improve. Construct?', opts: ['Self-awareness', 'Self-regulation', 'Motivation', 'Empathy', 'Social skills'], ans: 2,
  why: ['Not about recognising emotions.', 'Not about restraining.', 'Correct.', 'Not about others.', 'Not about relationships.'], sol: 'Optimism, goals, learning → motivation.' });
Q({ cp: 'ei-goleman', type: 'msq', diff: 'moderate', q: 'Which are among Goleman’s five constructs?', opts: ['Empathy', 'Self-concept', 'Social skills', 'Self-regulation'], ans: [0, 2, 3],
  why: ['Yes.', 'No.', 'Yes.', 'Yes.'], sol: 'Self-concept is not a construct.' });
Q({ cp: 'ei-goleman', type: 'short', diff: 'moderate', q: 'Name the five constructs with a one-line workplace example each.',
  model: '<ul><li>Self-awareness: noticing you are irritated before replying to an email.</li><li>Self-regulation: waiting an hour before sending that reply.</li><li>Motivation: staying committed after a setback.</li><li>Empathy: noticing a colleague is overwhelmed.</li><li>Social skills: getting two teams to agree a plan.</li></ul>' });

/* ---------------- 5.3 6R ---------------- */
C({ id: 'ei-6r', week: 5, title: 'The 6R framework and emotional resilience', pri: 'High', prereq: ['ei-goleman'],
  src: 'Study guide W5 §5.1 (6R: Recognize, Respect, Rationalize, Release, Response-able, Resilient) · PYQs 2023 T1 Q14, 2026 T2 Q12 Q13 · Written: 2024 T1 Q179 Q181',
  oneLine: 'Recognize → Respect → Rationalize → Release → Response-able → Resilient: name the emotion, honour it without judgement, find the thought behind it, let it go, choose a response, grow from it.',
  misShort: 'Putting Release before Rationalize, or thinking Respect means suppressing for decorum.',
  intu: R`<p>Anger rises in a meeting. Most advice says “stay calm” — but how? 6R is a script you can run in your head: what am I feeling? It is okay to feel it. What thought triggered it? Let it pass. What will I do now? What will I learn?</p><p>The question this concept answers: <b>what are the six steps, in order, and what does each one do?</b></p>`,
  why: R`<ul><li>Step-definition MCQs (2026 T2 Q12 Respect, Q13 Rationalize) and resilience (2023 T1 Q14).</li><li>Written: “use the 6R framework to advise Lopez” (2024 T1 Q179).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Recognize</b> — identify the emotion and its trigger; notice body and energy.',
    '<b>Respect</b> — honour the emotion without judgement: “I am feeling angry.” No good or bad emotions.',
    '<b>Rationalize</b> — process it with clarifying questions: what thought triggers it, how true is it, what is the worst case, where can the energy go?',
    '<b>Release</b> — let go of the emotional energy instead of suppressing it; comes <i>after</i> rationalizing.',
    '<b>Response-able</b> — take responsibility; regulate and choose a response instead of reacting.',
    '<b>Resilient</b> — learn from the experience, be kind to yourself, carry the lesson not the baggage; resilience can be developed.']))
    + '<p><b>In words:</b> understand it (3 steps), let it go (1), act well and grow (2).</p>',
  vis: M.flow([{ t: 'Recognize' }, { t: 'Respect', sub: 'no judgement' }, { t: 'Rationalize', sub: 'root cause' }, { t: 'Release', hl: true }, { t: 'Response-able' }, { t: 'Resilient' }], { cap: '6R in order. Release must follow Rationalize, or the emotion is buried rather than released.' }),
  ex: [
    M.ex('Introductory', R`<p>Which action is the Respect step when anger surges in a meeting?</p>`, R`<p><b>Acknowledging the emotion without judgement</b> (2026 T2 Q12). Analysing the cause is Rationalize; suppressing it is what 6R avoids.</p>`),
    M.ex('Standard', R`<p>What is the goal of Rationalize?</p>`, R`<p>To <b>investigate the triggers and facts</b> behind the emotion (2026 T2 Q13).</p>`),
    M.ex('Exam-level', R`<p>Apply 6R to a new manager who snaps at her team when deadlines slip.</p>`, R`<ol><li>Recognize frustration and its trigger (missed deadline).</li><li>Respect it — it signals she cares.</li><li>Rationalize — do they lack clarity rather than effort?</li><li>Release it before meetings.</li><li>Response-able — private, specific feedback; ask for blockers.</li><li>Resilient — learn without self-blame; seek mentoring.</li></ol>`)],
  math: M.rule(R`<p><b>Recognize · Respect · Rationalize · Release · Response-able · Resilient.</b></p>`)
    + M.why([['Suppress to maintain decorum', 'suppression buries the emotion.'],
      ['Vent immediately', 'a reaction, not a step.'],
      ['Dwell on negatives for resilience', 'resilience = learn and release.'],
      ['Release before Rationalize', 'it returns later.']]),
  conn: R`<p><b>At work:</b> a pause before replying to a heated message is steps 1–5 in thirty seconds.</p><p><b>Earlier:</b> Week 4: resilience built by processing, not suppressing.</p>`,
  mis: M.ul(['Option 1 (Rationalize) for Respect in 2026 T2 Q12.', 'Suppression options in 2023 T1 Q14.']),
  exam: R`<p><b>How it is asked:</b> which action fits a named step; written application. <b>Fast method:</b> memorise the order and one verb per step.</p>`
});
Q({ cp: 'ei-6r', type: 'mcq', diff: 'easy', q: 'Which is the correct 6R order?', opts: ['Recognize, Rationalize, Respect, Release, Resilient, Response-able', 'Recognize, Respect, Rationalize, Release, Response-able, Resilient', 'Respect, Recognize, Release, Rationalize, Response-able, Resilient', 'Release, Recognize, Respect, Rationalize, Resilient, Response-able'], ans: 1,
  why: ['Respect comes before Rationalize.', 'Correct.', 'Recognize is first.', 'Release is fourth.'], sol: 'Understand, release, respond, grow.' });
Q({ cp: 'ei-6r', type: 'mcq', diff: 'moderate', q: '“What thought is triggering this, and how true is it?” belongs to which step?', opts: ['Recognize', 'Respect', 'Rationalize', 'Release'], ans: 2,
  why: ['Recognize names the emotion.', 'Respect accepts it.', 'Correct.', 'Release lets it go.'], sol: 'Clarifying questions → Rationalize.' });
Q({ cp: 'ei-6r', type: 'mcq', diff: 'moderate', q: 'After a harsh review, an engineer notes what to change next time and stops replaying the conversation. Step?', opts: ['Respect', 'Release', 'Resilient', 'Recognize'], ans: 2,
  why: ['Not about acceptance.', 'Close, but the lesson carried forward is resilience.', 'Correct: learn, carry lessons not baggage.', 'Too early.'], sol: 'Learning forward → resilient.' });
Q({ cp: 'ei-6r', type: 'short', diff: 'moderate', q: 'Why must Release come after Rationalize?',
  model: '<p>Releasing without understanding the thought that drives the emotion just buries it; it comes back later. Rationalizing first removes the cause, so the release is real.</p>' });

/* ---------------- 5.4 TKI ---------------- */
C({ id: 'conflict-tki', week: 5, title: 'Conflict management styles: the Thomas–Kilmann instrument', pri: 'High', prereq: ['ei-basics'],
  src: 'Study guide W5 (TKI five styles; stakes, time, relationship) · spg notes W5 · PYQs 2023 T2 Q96–100, 2023 T3 Q214 Q215, 2024 T2 Q102 Q110 Q111, 2025 T3 Q229–231, 2026 T2 Q16 Q17 · Written: 2024 T3 Q192, 2026 T1 Q6',
  oneLine: 'Two axes: assertiveness (up) and cooperativeness (across). Competing/forcing (high, low), accommodating (low, high), avoiding (low, low), collaborating (high, high), compromising/negotiating (middle).',
  misShort: 'Confusing compromise (partial) with collaboration (full win–win), or avoiding with accommodating.',
  intu: R`<p>Three conflicts in one day. A minor naming dispute with a senior mentor. A supplier decision due by 5 pm. Two designers with opposite ideas and a week to spare.</p><p>Each needs a different response: let it go, decide now, or work it out together. The question this concept answers: <b>which conflict style fits which situation?</b></p>`,
  why: R`<ul><li>Five-option scenario blocks appear in four papers (2023 T2 Q96–100, 2024 T2 Q110–111, 2025 T3 Q229–231, plus singles).</li><li>The axes (2023 T3 Q215) and definitions (2024 T2 Q102, 2026 T2 Q17).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Assertiveness</b> (vertical axis) — concern for your own interests. <b>Cooperativeness</b> (horizontal axis) — concern for the other’s.',
    '<b>Competing / forcing</b> — high assertive, low cooperative; for urgent, high-stakes calls or when authority must decide.',
    '<b>Accommodating</b> — low assertive, high cooperative; give in to keep a valuable relationship, especially on minor issues.',
    '<b>Avoiding</b> — low on both; sidestep or postpone trivial issues or bad timing.',
    '<b>Collaborating</b> — high on both; win–win, needs time and commitment from both sides.',
    '<b>Compromising / negotiating</b> — middle; mutually acceptable, partially satisfies all.',
    '<b>Choice depends on</b> — stakes, time available, importance of the relationship.']))
    + '<p><b>In words:</b> how much do I push for mine, how much do I care about theirs?</p>',
  vis: M.graph([
    { id: 'co', t: 'Competing\n(forcing)', x: 90, y: 40, w: 120 },
    { id: 'cl', t: 'Collaborating\n(win–win)', x: 410, y: 40, w: 130, hl: true },
    { id: 'cm', t: 'Compromising\n(negotiating)', x: 250, y: 120, w: 140 },
    { id: 'av', t: 'Avoiding', x: 90, y: 200, w: 110 },
    { id: 'ac', t: 'Accommodating', x: 410, y: 200, w: 130 }],
    [{ a: 'av', b: 'co', lab: 'assertiveness ↑', dash: true }, { a: 'av', b: 'ac', lab: 'cooperativeness →', dash: true }],
    { cap: 'TKI grid: Y = assertiveness, X = cooperativeness.', label: 'TKI grid' }),
  ex: [
    M.ex('Introductory', R`<p>A manager yields to a client’s minor demand to keep a valuable relationship. Style?</p>`, R`<p><b>Accommodating</b> (2026 T2 Q16).</p>`),
    M.ex('Standard', R`<p>A solution that is mutually acceptable and <i>partially</i> satisfies all parties is…</p>`, R`<p><b>Compromise</b> (2024 T2 Q102). “Partially” rules out collaboration.</p>`),
    M.ex('Exam-level', R`<p>Classify: (a) a junior parks a trivial naming disagreement to protect a mentorship; (b) the head of operations picks a supplier before a 5 pm deadline despite objections; (c) a product lead schedules a workshop so two designers co-create a plan.</p>`,
      R`<p>(a) <b>avoiding</b> — she does not adopt his view, she drops the topic; (b) <b>competing</b>; (c) <b>collaborating</b> (2025 T3 Q229–231).</p>`)],
  math: M.rule(R`<p><b>Urgent → competing. Trivial or bad timing → avoiding. Relationship > issue → accommodating. Time + both care → collaborating. Partial → compromising.</b></p>`)
    + M.why([['Avoiding vs accommodating', 'accommodating adopts the other’s view; avoiding just withdraws.'],
      ['Compromise vs collaboration', 'compromise is partial; collaboration fully meets both.'],
      ['X = assertiveness', 'Y is assertiveness; X is cooperativeness.']]),
  conn: R`<p><b>At work:</b> incident calls justify competing; design reviews deserve collaborating.</p><p><b>Earlier:</b> storming stage (Week 1). <b>Later:</b> cultural strategies (Week 6) mirror these styles across cultures.</p>`,
  mis: M.ul(['Accommodating for 2023 T2 Q96 and 2025 T3 Q229 (keyed avoiding).', 'Collaboration for “partially satisfies” (2024 T2 Q102).', 'Collaboration for Shristi (2024 T2 Q111): she drops her proposal → accommodating.']),
  exam: R`<p><b>How it is asked:</b> scenario blocks with five options. <b>Fast method:</b> ask two questions — does the person push their own view? do they take on the other’s? — and read the grid.</p>`
});
Q({ cp: 'conflict-tki', type: 'mcq', diff: 'easy', q: 'Which TKI style is high on assertiveness and low on cooperativeness?', opts: ['Competing', 'Accommodating', 'Avoiding', 'Collaborating'], ans: 0,
  why: ['Correct.', 'Low assertive, high cooperative.', 'Low on both.', 'High on both.'], sol: 'Push mine, ignore theirs.' });
Q({ cp: 'conflict-tki', type: 'mcq', diff: 'moderate', q: 'Two teams split a disputed budget 50–50 so both can move on. Style?', opts: ['Collaborating', 'Compromising', 'Accommodating', 'Avoiding'], ans: 1,
  why: ['No joint solution.', 'Correct: partial for both.', 'Neither gives in fully.', 'They resolved it.'], sol: 'Split the difference → compromise.' });
Q({ cp: 'conflict-tki', type: 'num', diff: 'hard', q: 'How many scenarios call for <b>avoiding</b>? (1) A trivial font debate before a deadline. (2) A security breach needing an immediate shutdown. (3) A heated argument best revisited after tempers cool. (4) Two co-founders with a week to design the pricing model. (5) A minor disagreement with a client you want to keep happy, where you adopt their preference.', ans: 2, tol: 0,
  sol: 'Avoiding: 1, 3. 2 competing, 4 collaborating, 5 accommodating.' });
Q({ cp: 'conflict-tki', type: 'short', diff: 'moderate', q: 'Name the two TKI axes and place all five styles.',
  model: '<p>Y-axis assertiveness, X-axis cooperativeness. Competing: high/low. Accommodating: low/high. Avoiding: low/low. Collaborating: high/high. Compromising: middle/middle.</p>' });

/* ---------------- Variations ---------------- */
const G5 = id => 'gn3001-' + id;
VQ({ kind: 'statements', type: 'mcq', q: '(1) Moods are brief and triggered; emotions linger. (2) Emotions are subjective responses. (3) EI can be developed. (4) Attitudes are feelings about people, things and issues. Which are correct?', opts: ['2, 3 and 4', '1, 2 and 3', '1 and 4', 'All four'], ans: 0,
  why: ['Correct.', '1 is reversed.', '1 is reversed.', '1 is reversed.'], sol: 'Only statement 1 is false.', trap: 'Statement 1 is the classic reversal.' }, ['2023T1-18', '2023T2-112', '2023T2-114', '2023T1-13'].map(G5));
VQ({ kind: 'scenario', type: 'mcq', q: 'Harish hears his project is cancelled, slams the table and storms out; an hour later he apologises. What happened, and which two constructs would have helped?', opts: ['Amygdala hijack; self-awareness and self-regulation', 'Mood; empathy and social skills', 'Groupthink; motivation', 'Attitude; empathy'], ans: 0,
  why: ['Correct.', 'A sudden reaction is not a mood.', 'Not a group phenomenon.', 'Not an attitude.'], sol: 'Sudden, intense, regretted → hijack.', trap: 'None strong.' }, ['2023T1-15', '2025T2-233', '2026T2-15'].map(G5));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Higher EI helps in socially demanding jobs. (2) High-EI people are unaffected by emotions in decisions. (3) EI helps recognise and regulate emotions in decisions. Which are correct?', opts: ['1 and 3', '1 and 2', '2 and 3', 'All three'], ans: 0,
  why: ['Correct.', '2 is false.', '2 is false.', '2 is false.'], sol: 'EI uses emotions as information; it does not remove them.', trap: 'Statement 2 sounds like the definition of EI.' }, ['2023T1-19', '2023T1-20', '2023T1-11'].map(G5));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Priya realises she is anxious before a review, names the feeling, and notices it makes her talk fast. She has not yet done anything about it. Construct?', opts: ['Self-awareness', 'Self-regulation', 'Motivation', 'Empathy', 'Social skills'], ans: 0,
  why: ['Correct: noticing only.', 'Near-miss: she has not regulated yet.', 'No goal drive.', 'Not about others.', 'Not about others.'], sol: 'Notice → awareness; control would be regulation.', trap: 'Anxiety management sounds like regulation.' }, ['2023T1-16', '2023T1-17', '2025T2-243', '2024T3-201', '2023T3-218', '2026T2-14', '2023T2-115'].map(G5));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. A sales head who wins over a sceptical board; B. An intern who keeps learning after rejections; C. A manager who stays composed when a client shouts; D. A lead who notices a quiet member is upset. Options: I. Motivation, II. Self-regulation, III. Empathy, IV. Social skills.', opts: ['A-IV, B-I, C-II, D-III', 'A-I, B-IV, C-II, D-III', 'A-IV, B-I, C-III, D-II', 'A-II, B-I, C-IV, D-III'], ans: 0,
  why: ['Correct.', 'A and B swapped.', 'C and D swapped.', 'A and C swapped.'], sol: 'Persuade → social; persist → motivation; composure → regulation; notice others → empathy.', trap: 'C and D both involve others’ emotions.' }, ['2023T3-219', '2023T3-220', '2024T3-202', '2024T3-203', '2025T2-241', '2025T2-242', '2023T2-113', '2023T2-111'].map(G5));
VQ({ kind: 'sequence', type: 'mcq', q: 'Order these thoughts by 6R: (P) “It’s fine that I’m angry.” (Q) “Is it really true she ignored me, or was she busy?” (R) “I’m feeling angry; my jaw is tight.” (S) “I’ll ask her calmly tomorrow.”', opts: ['R, P, Q, S', 'P, R, Q, S', 'R, Q, P, S', 'R, P, S, Q'], ans: 0,
  why: ['Correct: Recognize, Respect, Rationalize, Response-able.', 'Recognize comes first.', 'Respect before Rationalize.', 'Respond after rationalizing.'], sol: 'R-R-R-(Release)-R-R.', trap: 'Respect and Rationalize swap easily.' }, ['2026T2-12', '2026T2-13', '2023T1-14'].map(G5));
VQ({ kind: 'written', type: 'short', q: 'A top-performing salesperson is promoted to team lead; within two months the team is silent in meetings and two members ask to transfer. Using 6R and Goleman, write a 100-word development plan.',
  model: '<p>Strengths: motivation. Gaps: empathy, self-regulation, social skills.</p><p>6R: recognise frustration when targets slip; respect it; rationalise (clarity vs effort); release before meetings; respond with private, specific feedback and questions; build resilience with a mentor.</p><p>Rebuild psychological safety: one-to-ones, blameless reviews, act on feedback.</p>',
  sol: 'Strengths, gaps, then steps.', trap: 'Only listing constructs.' }, ['2024T1-179', '2024T1-180', '2024T1-181'].map(G5));
VQ({ kind: 'written', type: 'short', q: 'Assess a leader who announces a restructuring by email with no chance for questions, using Goleman’s five components.',
  model: '<ol><li>Self-awareness: did she recognise her discomfort and avoid hiding?</li><li>Self-regulation: tone controlled, or curt?</li><li>Motivation: was there a credible way forward?</li><li>Empathy: no acknowledgement of fear.</li><li>Social skills: no channel for questions.</li></ol><p>Weak empathy and social skills erode trust.</p>',
  sol: 'One line per component.', trap: 'Not linking to trust.' }, ['2024T2-89', '2024T2-90', '2025T3-219', '2026T1-4'].map(G5));
VQ({ kind: 'counting', type: 'num', q: 'How many scenarios call for <b>competing</b>? (1) A fire alarm during a meeting. (2) A trivial debate on slide colours. (3) A safety regulation a client wants to skip. (4) Two partners with time to design a joint venture. (5) A minor favour asked by a key client.', ans: 2, tol: 0,
  sol: 'Competing: 1 (emergency) and 3 (non-negotiable rule).', trap: 'Item 5 is accommodating.' }, ['2023T2-98', '2024T2-110', '2025T3-230', '2023T3-215', '2026T2-17'].map(G5));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Two architects disagree. Ravi says, “Your concerns about stability are valid — let’s go with your design,” and drops his own. Style?', opts: ['Collaborating', 'Compromising', 'Accommodating', 'Avoiding'], ans: 2,
  why: ['No joint solution.', 'He gives up everything.', 'Correct.', 'He engages, then yields.'], sol: 'Validating and then yielding fully = accommodating.', trap: 'Validation sounds collaborative.' }, ['2024T2-111', '2023T2-100', '2026T2-16', '2024T2-102'].map(G5));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'An analyst disagrees with a director about a chart colour that changes nothing. She values the relationship and says nothing further. Style?', opts: ['Accommodating', 'Avoiding', 'Compromising', 'Competing'], ans: 1,
  why: ['She does not adopt his view; she drops it.', 'Correct: trivial issue, withdraw.', 'No trade.', 'No push.'], sol: 'Trivial + withdraw → avoiding.', trap: '“Values the relationship” is the accommodating cue.' }, ['2023T2-96', '2023T2-99', '2025T3-229', '2023T3-214'].map(G5));
VQ({ kind: 'scenario', type: 'mcq', q: 'A cross-functional team must choose a CRM; price, features and support all matter and there is a month to decide. Best style?', opts: ['Forcing', 'Avoiding', 'Collaborating', 'Accommodating'], ans: 2,
  why: ['No urgency.', 'Too important.', 'Correct: time + multiple concerns.', 'No reason to yield.'], sol: 'Optimal solution with time → collaborate.', trap: 'Negotiating (splitting) is tempting.' }, ['2023T2-97', '2025T3-231'].map(G5));
VQ({ kind: 'written', type: 'short', q: 'A supervisor hears second-hand that a team member thinks he favours his friends. Which approach is best, and why are “use an informant” and “give her the best project” wrong?',
  model: '<p>Best: invite open feedback from the whole team, then talk privately and honestly with her without revealing the source; make assignments transparent (collaborating, empathy, psychological safety).</p><p>An informant breaks trust; giving her the best project is itself favouritism and treats the symptom.</p>',
  sol: 'Choose, then reject the others with reasons.', trap: 'Choosing D because it pleases her.' }, ['2024T3-192', '2026T1-6'].map(G5));

/* ---------------- Glossary and flashcards ---------------- */
[['Emotion', 'Brief, intense, subjective response to a specific trigger.'],
 ['Mood', 'Longer-lasting, less intense feeling.'],
 ['Emotional intelligence', 'Developable, context-specific ability to recognise and manage emotions in self and others.'],
 ['Amygdala hijack', 'Intense fear, anger or anxiety overriding the rational brain.'],
 ['Self-awareness', 'Recognising your own emotions and their effects.'],
 ['Self-regulation', 'Controlling impulses and staying calm.'],
 ['Empathy', 'Sensing others’ emotions and needs.'],
 ['Social skills', 'Getting along, persuading, building collaboration.'],
 ['6R framework', 'Recognize, Respect, Rationalize, Release, Response-able, Resilient.'],
 ['TKI', 'Thomas–Kilmann: five conflict styles on assertiveness × cooperativeness.'],
 ['Collaborating', 'High assertive, high cooperative; win–win.'],
 ['Compromising', 'Middle; partially satisfies all.'],
 ['Accommodating', 'Give in to preserve the relationship.'],
 ['Avoiding', 'Withdraw or postpone.']].forEach(([t, d]) => GLOSS(t, d, 5));
[['Recognises she is angry — construct?', 'Self-awareness.'],
 ['Holds back the impulse — construct?', 'Self-management (self-regulation).'],
 ['Is self-concept an EI construct?', 'No.'],
 ['Emotion vs mood', 'Brief and triggered vs longer and milder.'],
 ['Hijack is managed by…', 'Self-awareness and self-regulation.'],
 ['6R order', 'Recognize, Respect, Rationalize, Release, Response-able, Resilient.'],
 ['Respect step', 'Acknowledge the emotion without judgement.'],
 ['TKI axes', 'Y assertiveness, X cooperativeness.'],
 ['“Partially satisfies all”', 'Compromise.'],
 ['Win–win with time', 'Collaborating.'],
 ['Urgent decision despite objections', 'Competing/forcing.'],
 ['This paper’s key on EI and leadership', 'Positively related.']].forEach(([f, b]) => CARD(f, b, 5));
