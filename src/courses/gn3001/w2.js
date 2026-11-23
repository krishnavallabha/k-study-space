/* ===================== SPG WEEK 2 — Communication and listening ===================== */
WEEK({ course: 'gn3001', n: 2, title: 'Communication and Listening Skills',
  blurb: 'A message can be sent perfectly and still fail. This week names why (five barrier types, selective perception, distortion as messages travel down a hierarchy), gives a checklist for good messages (the 10 Cs of communication), and treats listening as a skill (RASA, active vs passive listening) — including the nonverbal “second conversation” under every exchange.',
  topics: [
    { title: '2.1 Types of communication and barriers', cs: ['comm-process'] },
    { title: '2.2 Listening skills', cs: ['listening'] },
    { title: '2.3 The 10 Cs of communication and feedback', cs: ['comm-10cs'] },
    { title: '2.4 Nonverbal communication and silence', cs: ['nonverbal'] }] });

/* ---------------- 2.1 Communication types and barriers ---------------- */
C({ id: 'comm-process', week: 2, title: 'Types of communication, flows and the five barriers', pri: 'High', prereq: [],
  src: 'Study guide W2 §2.1–2.2 (six dimensions, five barrier types) · spg notes W2 · PYQs 2023 T1 Quiz 1 Q18 Q31 Q47 Q50 Q65, 2023 T1 Q54, 2024 T1 Q187 Q191 · Written: 2023 T2 Q90',
  oneLine: 'Communication is classified along six pairs (inner/outer, personal/social, written/oral, internal/external, vertical/horizontal, formal/informal) and blocked by five barrier types: psychological, language (semantic), cultural, organizational, physical.',
  misShort: 'Calling jargon a cultural barrier, or a policy distorted on its way down “lateral” communication.',
  intu: R`<p>The CEO announces a well-being policy: “flexible hours for everyone.” By the time it reaches the factory floor through four managers, it has become “you may leave early if your manager agrees, sometimes.” Morale drops.</p>
<p>Nobody lied. The message was distorted as it moved <b>down</b> the hierarchy, through people who each added their own reading.</p>
<p>The question this concept answers: <b>what kinds of communication are there, and what gets in the way?</b></p>`,
  why: R`<ul><li>Barrier identification is one of the most common item formats: jargon = semantic (2024 T1 Q187), “which are barriers” (2023 T1 Q54), information overload (2023 T1 Quiz 1 Q47), selective perception (2023 T1 Quiz 1 Q65).</li><li>Direction of flow: the distorted CEO policy (2024 T1 Q191).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Six dimensions</b> (course): Inner/Outer, Personal/Social-Professional, Written/Oral, Internal/External, <b>Vertical/Horizontal</b>, Formal/Informal.',
    '<b>Vertical</b> — up or down the hierarchy. <b>Downward</b>: manager to staff (policies, instructions). <b>Upward</b>: staff to manager (reports, concerns). <b>Horizontal / lateral</b>: between peers.',
    '<b>Psychological barrier</b> — inner chatter, preconceived notions, bias, lack of interest, stress, fear, anger, limiting beliefs, attitude.',
    '<b>Language (semantic) barrier</b> — complex language, a different language, jargon, abbreviations and acronyms.',
    '<b>Cultural barrier</b> — words or gestures fine in one culture and wrong or meaningless in another.',
    '<b>Organizational barrier</b> — rigid hierarchy, complex structure that distorts messages, unclear channels, grapevine mixed with official news.',
    '<b>Physical barrier</b> — noise, distance, poor acoustics, objects in the way.',
    '<b>Selective perception</b> — receivers interpret messages through their own needs, motivations, experience and background.',
    '<b>Information overload</b> — more information than the receiver can process; the course key also counts material on unfamiliar concepts.',
    '<b>Causes of misunderstanding</b> — missing details, incomplete listening or reading, verbiage (too many words).']))
    + '<p><b>In words:</b> name the direction of the message and then the thing that blocked it — the mind (psychological), the words (semantic), the culture, the organisation, or the room.</p>',
  vis: M.table(['Barrier', 'Cue in the question', 'Example'], [
    ['Psychological', 'stress, attitude, bias, fear, “not interested”', 'An anxious employee misreads neutral feedback as criticism'],
    ['Language (semantic)', 'jargon, acronyms, different language', '“Please refactor the ETL DAG” to a sales team'],
    ['Cultural', 'gesture/word means different things', 'A thumbs-up that is rude in another country'],
    ['Organizational', 'hierarchy, many layers, unclear channels', 'CEO policy distorted on its way down'],
    ['Physical', 'noise, distance, bad line', 'A call from a factory floor']], 'The five barrier types, with the cue word to spot each.'),
  ex: [
    M.ex('Introductory', R`<p>An IT lead tells the finance team the outage was caused by “a race condition in the async queue”. Nobody understands. Barrier?</p>`,
      R`<p>Technical jargon the listener does not share → <b>language (semantic)</b> barrier (2024 T1 Q187).</p><p><b>Now suppose</b> the finance team understands the words but ignores them because they are stressed about the quarter close. That is <b>psychological</b>.</p>`),
    M.ex('Standard', R`<p>Which are communication barriers? Stress; attitude; language barriers; excessive information; abbreviations and acronyms; cultural differences.</p>`,
      R`<p>All six (2023 T1 Q54). Stress and attitude are psychological; language, abbreviations and acronyms are semantic; excessive information is overload; cultural differences are cultural. Students often drop the two psychological ones.</p>`),
    M.ex('Exam-level', R`<p>A CEO’s policy is distorted at each level until front-line staff feel misunderstood. (a) Name the flow. (b) Name the barrier. (c) One fix.</p>`,
      R`<ol type="a"><li><b>Downward</b> communication (2024 T1 Q191).</li><li><b>Organizational</b>: many tiers distort the message.</li><li>Fix: send the policy directly in writing to everyone, plus a Q&amp;A channel so questions go upward.</li></ol>`)],
  math: M.rule(R`<p><b>Direction:</b> down = manager → staff; up = staff → manager; lateral = peers.</p><p><b>Barrier type:</b> mind → psychological; words → semantic; culture → cultural; structure → organizational; environment → physical.</p>`)
    + M.why([['Jargon as a cultural barrier', 'it is a language (semantic) barrier.'],
      ['Distorted CEO policy as lateral communication', 'it travels down the tiers → downward.'],
      ['“Receivers interpret messages objectively”', 'the opposite of selective perception.'],
      ['Dropping stress and attitude from a barrier list', 'they are psychological barriers.']]),
  conn: R`<p><b>At work:</b> a one-page written FAQ sent to everyone at once removes the “telephone game” of downward distortion.</p><p><b>Later:</b> the 10 Cs (2.3) are the checklist that prevents semantic and psychological barriers; Week 6 develops cultural barriers in depth.</p>`,
  mis: M.ul(['Picking “cultural barrier” for jargon (2024 T1 Q187).',
    'Picking lateral or horizontal for the distorted CEO policy (2024 T1 Q191).',
    'Leaving stress and attitude out of the barrier list (2023 T1 Q54).',
    'In 2023 T1 Quiz 1 Q47, choosing “very detailed information” — the key treats unfamiliar concepts as the overload case.']),
  exam: R`<p><b>How it is asked:</b> one-line scenario → name the barrier or the flow; “which of these are barriers” lists.</p><p><b>Fast method:</b> find the noun that caused the failure: a feeling (psychological), a word (semantic), a custom (cultural), a layer or channel (organizational), a place (physical).</p>`
});
Q({ cp: 'comm-process', type: 'mcq', diff: 'easy', q: 'A site engineer on a noisy factory floor mishears a phone instruction. Barrier?', opts: ['Psychological', 'Semantic', 'Physical', 'Organizational'], ans: 2,
  why: ['Nothing about feelings.', 'The words were clear.', 'Correct: noise.', 'No hierarchy involved.'], sol: 'Noise = physical.' });
Q({ cp: 'comm-process', type: 'mcq', diff: 'moderate', q: 'A team member reads every neutral email from her manager as criticism because of a past conflict. Concept?', opts: ['Information overload', 'Selective perception', 'Semantic barrier', 'Downward communication'], ans: 1,
  why: ['Not too much information.', 'Correct: interpretation shaped by her experience.', 'The words are understood.', 'Direction is downward but that is not what explains the misreading.'], sol: 'Interpretation through one’s own background = selective perception.' });
Q({ cp: 'comm-process', type: 'num', diff: 'hard', q: 'Count the <b>psychological</b> barriers: (1) fear of the boss, (2) acronyms, (3) a bad phone line, (4) boredom, (5) a rigid five-layer hierarchy, (6) a preconceived notion about the speaker.', ans: 3, tol: 0,
  sol: 'Psychological: 1, 4, 6. Acronyms are semantic, the phone line is physical, the hierarchy is organizational.' });
Q({ cp: 'comm-process', type: 'short', diff: 'easy', q: 'List the five barrier types with one example each.',
  model: '<ul><li>Psychological — stress or bias.</li><li>Language (semantic) — jargon.</li><li>Cultural — a gesture with different meanings.</li><li>Organizational — a message distorted through many layers.</li><li>Physical — noise or distance.</li></ul>' });

/* ---------------- 2.2 Listening ---------------- */
C({ id: 'listening', week: 2, title: 'Listening: hearing vs listening, RASA, active and passive listening', pri: 'High', prereq: ['comm-process'],
  src: 'Study guide W2 §2.4 (passive, active, listening to the future) · Julian Treasure’s RASA as asked in 2023 T1 Quiz 1 · PYQs 2023 T1 Quiz 1 Q36 Q37 Q42 Q51, 2024 T1 Q190 · Written: 2023 T2 Q88, 2026 T2 Q3',
  oneLine: 'Hearing receives sound; listening receives meaning. RASA = Receive, Appreciate, Summarize, Ask. Active listening paraphrases and asks; passive listening lets a distressed speaker talk.',
  misShort: 'Preparing your reply while the other person talks, or confusing active with critical listening.',
  intu: R`<p>Ms. Lee walks in: “I need to talk to you about the Southwestern project.” Jack snaps: “No excuses, just get it done.” She quits.</p>
<p>Jack <i>heard</i> her — he replied. He never <i>listened</i>. If he had, he would have learned that the client had agreed to double the fee.</p>
<p>The question this concept answers: <b>what does real listening look like, step by step?</b></p>`,
  why: R`<ul><li>RASA expansion (2023 T1 Quiz 1 Q36), active-listening behaviours (Q37, Q42, Q51; 2024 T1 Q190).</li><li>Written: “how many listening rules did Jack break?” (2023 T2 Q88) and “listening vs hearing” (2026 T2 Q3).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Hearing</b> — physically receiving sound. <b>Listening</b> — attending to, interpreting and responding to meaning, including tone and body language.',
    '<b>RASA</b> (Julian Treasure; Sanskrit for “juice/essence”) — <b>Receive</b> (pay attention), <b>Appreciate</b> (small sounds: “hmm”, “oh”), <b>Summarize</b> (“so…”), <b>Ask</b> (questions afterwards).',
    '<b>Passive listening</b> — listening without interruption, acknowledging only with nods and small sounds; best when the speaker is distressed.',
    '<b>Active listening</b> — paraphrasing, asking clarifying and open questions, restating for confirmation, mirroring emotion, encouraging; best for building shared understanding.',
    '<b>Clarifying question</b> — “Could you give me an example of what you mean?”',
    '<b>Listening to the future</b> — listening for what the speaker desires and helping them move forward.',
    '<b>Bad habits</b> — interrupting, preparing a reply while the other speaks, self-absorbed listening (turning it back to yourself), eavesdropping, filters such as prejudice and cultural bias.']))
    + '<p><b>In words:</b> stop your own noise, take in words and body language, show you are following, check your understanding, then ask.</p>',
  vis: M.flow([{ t: 'Receive', sub: 'full attention' }, { t: 'Appreciate', sub: '“hmm”, “oh”' }, { t: 'Summarize', sub: '“so…”' }, { t: 'Ask', sub: 'questions after', hl: true }], { cap: 'RASA, in order. Asking comes last: first understand, then probe.' }),
  ex: [
    M.ex('Introductory', R`<p>Expand RASA.</p>`, R`<p>Receive, Appreciate, Summarize, Ask. Options starting with “Read” or containing “Act” are decoys (2023 T1 Quiz 1 Q36).</p>`),
    M.ex('Standard', R`<p>Which help listening? (1) Eye contact, no phone. (2) Eavesdropping. (3) Shifting focus back to yourself. (4) Removing filters like prejudice.</p>`,
      R`<p>1 and 4 (2023 T1 Quiz 1 Q37). 2 is not listening to someone; 3 is self-absorbed listening.</p>`),
    M.ex('Exam-level', R`<p>Using the Southwestern exchange, name four listening rules Jack broke.</p>`,
      R`<ol><li>Interrupted her before she finished.</li><li>Prejudged the message (“excuses”).</li><li>Asked no clarifying question.</li><li>Let anger and tone shut her down.</li></ol><p>Tie each to his words; that is what earns the marks in a written answer.</p>`)],
  math: M.rule(R`<p><b>RASA = Receive → Appreciate → Summarize → Ask.</b></p><p><b>Active = paraphrase + clarify + open questions + encourage. Passive = silent presence for a distressed speaker.</b></p>`)
    + M.why([['Preparing a reply to look engaged', 'you stop listening while you prepare.'],
      ['Ignoring body language because it confuses', 'body language carries much of the meaning.'],
      ['Critical listening for “open questions and restating”', 'that is active listening; critical listening judges arguments.'],
      ['Passive listening as “bad”', 'it is the right choice when someone is distressed.']]),
  conn: R`<p><b>At work:</b> ending a one-to-one with “so the two blockers are X and Y — did I get that right?” is Summarize + Ask.</p><p><b>Later:</b> Week 5’s empathy construct is listening applied to emotions; Week 4 coaching depends on it.</p>`,
  mis: M.ul(['RASA expansions with “Read”, “Speak” or “Act” (2023 T1 Quiz 1 Q36).',
    '“Prepare a response before the speaker has finished to appear engaged” (2023 T1 Quiz 1 Q51).',
    'Picking critical or discriminative listening in 2024 T1 Q190.']),
  exam: R`<p><b>How it is asked:</b> name the skill from a behaviour; pick the good habits from a list; in written answers, diagnose a manager’s listening.</p><p><b>Written-answer method:</b> define hearing vs listening in one line, then apply RASA or active-listening behaviours to each named person.</p>`
});
Q({ cp: 'listening', type: 'mcq', diff: 'easy', q: 'A colleague is crying after bad news. Which listening style fits first?', opts: ['Critical', 'Passive', 'Discriminative', 'Interrupting with solutions'], ans: 1,
  why: ['Not the time to judge arguments.', 'Correct: let them speak without redirection.', 'Discriminating sounds is irrelevant.', 'Solutions too early shut them down.'], sol: 'Distressed speaker → passive listening.' });
Q({ cp: 'listening', type: 'mcq', diff: 'moderate', q: '“So you’re saying the vendor is late because the specs changed twice — is that right?” Which RASA step?', opts: ['Receive', 'Appreciate', 'Summarize', 'Ask'], ans: 2,
  why: ['Receiving is attending silently.', 'Appreciating is small acknowledgements.', 'Correct: “so you’re saying…”. The tag question checks the summary.', 'Ask is open questions after you understand.'], sol: 'Restating = summarize.' });
Q({ cp: 'listening', type: 'msq', diff: 'moderate', q: 'Which are active-listening behaviours?', opts: ['Paraphrasing', 'Asking clarifying questions', 'Planning your reply while they talk', 'Mirroring the speaker’s emotion'], ans: [0, 1, 3],
  why: ['Yes.', 'Yes.', 'No: that is a listening fault.', 'Yes.'], sol: 'Active = paraphrase, clarify, mirror, encourage.' });
Q({ cp: 'listening', type: 'short', diff: 'easy', q: 'Distinguish hearing from listening and expand RASA.',
  model: '<p>Hearing is physically receiving sound; listening is attending to and understanding meaning, including tone and body language.</p><p>RASA: Receive, Appreciate, Summarize, Ask.</p>' });

/* ---------------- 2.3 10 Cs of communication ---------------- */
C({ id: 'comm-10cs', week: 2, title: 'The 10 Cs of communication, feedback and channel choice', pri: 'High', prereq: ['comm-process'],
  src: 'Study guide W2 §2.3 (10 Cs with weak/strong examples) · spg notes W2 · PYQs 2023 T1 Q51 Q52 Q58 Q60 · Written: 2023 T2 Q89, 2025 T2 Q230, 2025 T3 Q218 Q220 Q221, 2026 T1 Q5, 2026 T2 Q4',
  oneLine: 'Clear, Concise, Concrete, Correct, Complete, Consistent, Confident, Creative, Courteous, Considerate — the checklist for any message, especially feedback.',
  misShort: 'Mixing these with the 10 Cs of teamwork, or treating vague “kind” feedback as courteous.',
  intu: R`<p>Two ways to tell a junior her report has errors:</p><p>A: “This is not what it is supposed to be. You always do things wrong. Redo it.”</p><p>B: “There are three figures in section 2 that don’t match the source. Can we go through them together this afternoon?”</p><p>B is concrete, courteous and considerate; A is none of them. The question this concept answers: <b>what makes a message — especially a hard one — effective?</b></p>`,
  why: R`<ul><li>MCQs on feedback and conflict (2023 T1 Q52, Q58), channel choice (Q60) and responding to input (Q51).</li><li>The written questions almost always say “using any five (or four) of the 10 Cs of communication” — 2025 T3 Q218, 2026 T1 Q5, 2026 T2 Q4.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Clear</b> — one purpose, simple words. <b>Concise</b> — no unnecessary words. <b>Concrete</b> — specific facts, numbers, examples.',
    '<b>Correct</b> — accurate facts and language. <b>Complete</b> — everything the receiver needs to act. <b>Consistent</b> — facts presented the same way each time; regular updates.',
    '<b>Confident</b> — firm, to the point, prepared. <b>Creative</b> — stories, humour, quotes to hold attention.',
    '<b>Courteous</b> — respectful, sincere, constructive, never passive-aggressive. <b>Considerate</b> — understand the audience’s feelings and situation first.',
    '<b>Good feedback</b> — specific, actionable, constructive, private.',
    '<b>Conflict in communication</b> — handle it by actively listening and negotiating, not by ignoring or imposing authority.',
    '<b>Channel choice</b> — complex information → written report; quick question → chat; sensitive or emotional → face to face.']))
    + '<p><b>In words:</b> say one clear thing, with specifics, accurately and completely, in a respectful voice that has thought about the reader.</p>',
  vis: M.table(['C', 'Weak', 'Strong'], [
    ['Concrete', '“Your work needs improvement.”', '“Three figures in section 2 don’t match the source.”'],
    ['Courteous', '“You always get it wrong.”', '“There is some rework; let’s go through it.”'],
    ['Considerate', '“I don’t care how, get it done ASAP.”', '“First, what challenges are you facing?”'],
    ['Complete', '“Send the file.”', '“Send the Q3 sales file to Priya by 5 pm Friday.”'],
    ['Concise', 'A 600-word email for a yes/no question', 'Two lines and the decision needed']], 'Five of the Cs, weak vs strong (examples in the style of the study guide).'),
  ex: [
    M.ex('Introductory', R`<p>Best way for a manager to give feedback?</p>`, R`<p><b>Specific, actionable feedback given constructively</b> (2023 T1 Q58). Confrontation, vagueness and public criticism each fail a C (courteous, concrete, considerate).</p>`),
    M.ex('Standard', R`<p>After your presentation, two teammates propose changes that would alter your plan. Which responses fit? (1) Create space to ask questions and give answers. (2) Empower them through open and honest interactions. (3) Show you have the core competencies. (4) Go the extra mile and redo the presentation.</p>`,
      R`<p><b>1 and 2</b> (2023 T1 Q51). Both engage their input. 3 defends your ego; 4 polishes slides instead of listening.</p>`),
    M.ex('Exam-level', R`<p>Write the skeleton of a five-C justification for choosing between two layoff announcements.</p>`,
      R`<ol><li>Clear — does it say plainly what is happening and why?</li><li>Complete — severance, timelines, support, next steps?</li><li>Correct — facts that will not need retracting?</li><li>Considerate — acknowledges impact on people first?</li><li>Courteous — respectful, no euphemism or blame?</li></ol><p>Then name the draft that passes more tests (2025 T3 Q218).</p>`)],
  math: M.rule(R`<p><b>Clear · Concise · Concrete · Correct · Complete · Consistent · Confident · Creative · Courteous · Considerate.</b></p><p><b>Feedback = specific + actionable + constructive + private.</b></p>`)
    + M.why([['Vague feedback “so as not to hurt”', 'fails concrete; the person cannot act on it.'],
      ['Imposing authority to end a disagreement', 'suppresses rather than resolves; listen and negotiate.'],
      ['Email for complex material', 'a written report gives structure and a record.'],
      ['Using “Collaboration” or “Coordination” here', 'those belong to the 10 Cs of teamwork (Week 1).']]),
  conn: R`<p><b>At work:</b> run every important email through “clear, complete, considerate” before sending.</p><p><b>Earlier:</b> Week 1’s 10 Cs of teamwork are a different list. <b>Later:</b> Week 3 applies concise and clear to slides and reports; Week 5’s EI explains why considerate messages land.</p>`,
  mis: M.ul(['Using teamwork Cs (collaboration, coordination) in a communication answer.',
    'Choosing “compromising” as the way to handle communication conflict (2023 T1 Q52): the key is active listening and negotiating.',
    'Choosing email over a written report for complex information (2023 T1 Q60).']),
  exam: R`<p><b>How it is asked:</b> MCQs on feedback and responses; written answers that require exactly four or five named Cs.</p><p><b>Written-answer method:</b> one line per C: name it, quote or describe what the person did, say what the better version would be.</p>`
});
Q({ cp: 'comm-10cs', type: 'mcq', diff: 'easy', q: '“Before we go through the changes, I’d like to understand what challenges you are facing.” This shows mainly:', opts: ['Concise', 'Considerate', 'Creative', 'Correct'], ans: 1,
  why: ['It is not about length.', 'Correct: seeks the other person’s perspective first.', 'No story or humour.', 'Not about accuracy.'], sol: 'Understanding the audience first = considerate.' });
Q({ cp: 'comm-10cs', type: 'mcq', diff: 'moderate', q: 'A manager sends a weekly update every Friday in the same format instead of answering questions only when they arise. Which C?', opts: ['Consistent', 'Confident', 'Concrete', 'Courteous'], ans: 0,
  why: ['Correct: same way, on a schedule.', 'Not about firmness.', 'Not about specifics.', 'Not about tone.'], sol: 'Regular, same-format updates = consistent.' });
Q({ cp: 'comm-10cs', type: 'msq', diff: 'moderate', q: 'Which belong to the 10 Cs of <b>communication</b>?', opts: ['Concrete', 'Coordination', 'Courteous', 'Continuous improvement'], ans: [0, 2],
  why: ['Yes.', 'No: teamwork list.', 'Yes.', 'No: teamwork list.'], sol: 'Keep the two lists apart.' });
Q({ cp: 'comm-10cs', type: 'short', diff: 'moderate', q: 'Rewrite “Your report is bad, redo it” using four of the 10 Cs and name each C you used.',
  model: '<p>“Thanks for the draft (courteous). Two figures in section 2 don’t match the sales file — rows 4 and 9 (concrete, correct). Could you fix them and resend by 4 pm tomorrow? (clear, complete). Let me know if the source data was the problem — happy to help (considerate).”</p>' });

/* ---------------- 2.4 Nonverbal ---------------- */
C({ id: 'nonverbal', week: 2, title: 'Nonverbal communication, the second conversation and silence', pri: 'Medium', prereq: ['comm-process'],
  src: 'Study guide W2 §2.1–2.2, §2.5 (nonverbal, employee silence and voice) · PYQs 2023 T1 Quiz 1 Q53, 2023 T1 Q53, 2024 T1 Q188 · Written: 2024 T2 Q91, 2025 T2 Q232',
  oneLine: 'Body language, tone, space, dress and silence are messages too. Nick Morgan calls them the “second conversation”; withholding communication is a nonverbal barrier.',
  misShort: 'Thinking silence sends no message, or that a missing body-language cue is a semantic barrier.',
  intu: R`<p>A team member says “sure, I can take that on” — while folding her arms and looking at the floor. Which message do you believe?</p><p>Most people believe the body. That is the <b>second conversation</b> running under the words.</p><p>The question this concept answers: <b>what do we communicate without words, and what happens when it is missing (email) or deliberately withheld (silence)?</b></p>`,
  why: R`<ul><li>Nick Morgan’s “second conversation” (2023 T1 Quiz 1 Q53); the nonverbal barrier = withholding communication (2023 T1 Q53); communication includes the invisible (2024 T1 Q188).</li><li>Written: why people withhold in video calls (2024 T2 Q91); missing body-language cues in email (2025 T2 Q232).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Nonverbal communication</b> — facial expressions, tone and pitch, personal space, dress, eye gaze, gestures, posture; even glancing at a watch.',
    '<b>Second conversation</b> (Nick Morgan) — the nonverbal conversation that runs alongside the spoken one.',
    '<b>Nonverbal barrier</b> — in the papers: withholding communication about an ongoing problem.',
    '<b>Employee silence</b> — employees choose not to speak up, from fear of retaliation, distrust, or a belief that nothing will change. <b>Employee voice</b> — the opposite; it needs psychologically safe channels.',
    '<b>Document appearance</b> — a sloppy email or report sends a negative nonverbal message; a neat one aids readability.',
    '<b>Virtual communication</b> — email and chat strip out body-language cues, so misreadings are more likely.']))
    + '<p><b>In words:</b> everything you do around the words is also a message, including saying nothing.</p>',
  vis: M.graph([
    { id: 's', t: 'Sender', x: 70, y: 70, w: 100 },
    { id: 'r', t: 'Receiver', x: 470, y: 70, w: 110 },
    { id: 'v', t: 'Words', x: 270, y: 30, w: 90 },
    { id: 'n', t: 'Tone · face · posture\n· space · silence', x: 270, y: 120, w: 190, hl: true }],
    [{ a: 's', b: 'v' }, { a: 'v', b: 'r', lab: 'first conversation' }, { a: 's', b: 'n' }, { a: 'n', b: 'r', lab: 'second conversation', hl: true }],
    { cap: 'Two channels run together. When they disagree, receivers tend to trust the nonverbal one.', label: 'two conversations' }),
  ex: [
    M.ex('Introductory', R`<p>Which is a nonverbal communication barrier: a different language; withholding communication about an ongoing problem; technical jargon; eye contact and nodding?</p>`,
      R`<p><b>Withholding communication</b> (2023 T1 Q53). The language and jargon options are semantic; eye contact and nodding help.</p>`),
    M.ex('Standard', R`<p>Vikas finds emails and chats hard because they lack body-language cues. What barrier is this?</p>`,
      R`<p>A <b>nonverbal</b> barrier caused by the medium (2025 T2 Q232). Not semantic — the words were understood.</p>`),
    M.ex('Exam-level', R`<p>Why do employees mute and stay silent in video meetings, and can it ever help?</p>`,
      R`<p>Drivers: fear of judgement, low psychological safety, power distance, belief that speaking changes nothing, the ease of hiding. Possible positives: time to reflect and send a better written comment; avoiding an emotional reaction; less overload — but only if a safe channel exists later (2024 T2 Q91).</p>`)],
  math: M.rule(R`<p><b>Words = first conversation; body, tone, space, silence = second conversation.</b></p><p><b>Withholding communication = nonverbal barrier.</b></p>`)
    + M.why([['Eye contact and nodding as a barrier', 'they support communication.'],
      ['Missing cues in email as semantic', 'the words are fine; the nonverbal channel is missing.'],
      ['“Appearance of documents does not affect the receiver”', 'a sloppy look sends a negative message.'],
      ['Inner chatter as the second conversation', 'that is inner (intrapersonal) communication.']]),
  conn: R`<p><b>At work:</b> turning your camera on for difficult conversations restores the second channel.</p><p><b>Later:</b> Week 3 treats gestures in presentations; Week 6 shows the same gesture meaning different things across cultures; psychological safety (Week 1) is what turns silence into voice.</p>`,
  mis: M.ul(['Picking “inner chatter” for Nick Morgan’s second conversation (2023 T1 Quiz 1 Q53).',
    'Picking a language option for the nonverbal barrier (2023 T1 Q53).',
    'Answering only the negatives in 2024 T2 Q91.']),
  exam: R`<p><b>How it is asked:</b> name-the-concept MCQs and short written answers on silence and virtual communication.</p><p><b>Fast method:</b> if the words were understood but something was still lost, it is nonverbal.</p>`
});
Q({ cp: 'nonverbal', type: 'msq', diff: 'easy', q: 'Which are elements of nonverbal communication?', opts: ['Tone and pitch of voice', 'Personal space', 'Style of dress', 'The vocabulary used'], ans: [0, 1, 2],
  why: ['Yes.', 'Yes.', 'Yes.', 'No: vocabulary is verbal.'], sol: 'Vocabulary is the verbal channel.' });
Q({ cp: 'nonverbal', type: 'mcq', diff: 'moderate', q: 'A manager says “great idea” while checking his phone and not looking up. What will the employee most likely believe?', opts: ['The words', 'The nonverbal signal that he is not interested', 'Neither', 'Whichever is louder'], ans: 1,
  why: ['Words lose when they conflict with the body.', 'Correct: the second conversation dominates.', 'One message wins.', 'Volume is not the issue.'], sol: 'When channels conflict, nonverbal wins.' });
Q({ cp: 'nonverbal', type: 'mcq', diff: 'moderate', q: 'Employees know about a recurring defect but never mention it to management because past messengers were blamed. This is:', opts: ['Employee voice', 'Employee silence', 'Semantic barrier', 'Physical barrier'], ans: 1,
  why: ['Voice is speaking up.', 'Correct: choosing not to speak from fear.', 'The words are not the problem.', 'Nothing physical.'], sol: 'Fear-driven withholding = employee silence.' });
Q({ cp: 'nonverbal', type: 'short', diff: 'moderate', q: 'Give two reasons employees withhold information in virtual meetings and one way a leader can reduce it.',
  model: '<p>Reasons: fear of being judged or blamed (low psychological safety); a belief that speaking up will not change anything; easy to hide behind a muted camera.</p><p>Fix: invite input by name and thank people for raising problems; offer an anonymous or written channel and show what changed as a result.</p>' });

/* ---------------- Variations ---------------- */
const G2 = id => 'gn3001-' + id;
VQ({ kind: 'scenario', type: 'mcq', q: 'A bank’s regional head emails branch staff: “Ensure KYC TAT &lt; 48h per RBI MD.” Half the tellers do not know the abbreviations. Barrier?', opts: ['Psychological', 'Language (semantic)', 'Organizational', 'Physical'], ans: 1,
  why: ['Not about feelings.', 'Correct: abbreviations and acronyms.', 'The channel worked.', 'Nothing physical.'], sol: 'Acronyms = semantic.', trap: 'Thinking of the regional head’s rank pulls toward organizational.' }, ['2024T1-187', '2023T1-54'].map(G2));
VQ({ kind: 'counting', type: 'num', q: 'How many are causes of misunderstanding named in the course? (1) Missing details. (2) Incomplete listening or reading. (3) Verbiage. (4) Selective perception. (5) Concise messages.', ans: 4, tol: 0,
  sol: '1–4 cause misunderstanding; concise messages help.', trap: 'Selective perception is from a different list but is still a cause.' }, ['2023T1q1-50', '2023T1q1-65', '2023T1q1-47'].map(G2));
VQ({ kind: 'scenario', type: 'mcq', q: 'Front-line nurses report safety issues to supervisors, but the issues never reach the hospital director because each layer softens them. Which flow is failing, and which barrier?', opts: ['Downward; physical', 'Upward; organizational', 'Lateral; semantic', 'Downward; psychological'], ans: 1,
  why: ['Direction is staff → top.', 'Correct.', 'Not peer-to-peer.', 'Direction is upward.'], sol: 'Staff → top = upward; layers distorting = organizational.', trap: 'The famous PYQ is downward distortion; this is its mirror.' }, ['2024T1-191', '2023T1q1-18'].map(G2));
VQ({ kind: 'concept', type: 'mcq', q: 'A politician answers a damaging report by asking which rival funded the journalist. Which tactic, and why is it not a rebuttal?', opts: ['Twisting semantics; it changes word meaning', 'Discrediting the source; it attacks the messenger, not the facts', 'Creating an emotional disconnect; it calms the audience', 'Selective perception; it filters facts'], ans: 1,
  why: ['Word meanings are untouched.', 'Correct.', 'No disconnect is created.', 'That is a receiver’s bias, not a tactic.'], sol: 'Questioning who paid = discrediting the source.', trap: 'None strong.' }, ['2023T1q1-31'].map(G2));
VQ({ kind: 'sequence', type: 'mcq', q: 'Order these listener moves according to RASA: (P) “So the delay is from the vendor?” (Q) Put the phone away and face the speaker. (R) “What would help most now?” (S) Nod and say “hmm”.', opts: ['Q, S, P, R', 'Q, P, S, R', 'S, Q, P, R', 'Q, S, R, P'], ans: 0,
  why: ['Correct: Receive, Appreciate, Summarize, Ask.', 'Appreciate comes before Summarize.', 'Receive first.', 'Ask comes last.'], sol: 'R-A-S-A.', trap: 'Summarize and Ask are easy to swap.' }, ['2023T1q1-36', '2023T1q1-42'].map(G2));
VQ({ kind: 'statements', type: 'mcq', q: 'Which pair are listening <b>faults</b>? (1) Preparing your reply while the speaker talks. (2) Asking follow-up questions to confirm understanding. (3) Turning the topic back to your own experience. (4) Removing filters like prejudice.', opts: ['1 and 3', '2 and 4', '1 and 2', '3 and 4'], ans: 0,
  why: ['Correct.', 'Both are good habits.', '2 is good.', '4 is good.'], sol: 'Faults: preparing a reply, self-absorbed listening.', trap: 'Preparing a reply feels engaged.' }, ['2023T1q1-37', '2023T1q1-51', '2024T1-190'].map(G2));
VQ({ kind: 'written', type: 'short', q: 'A team lead interrupts a developer twice, assumes the bug report is an excuse, and walks away. Name three listening rules broken and rewrite the first 20 seconds of the conversation.',
  model: '<p>Rules broken: interrupting; prejudging (a filter); not asking clarifying questions; letting emotion lead.</p><p>Rewrite: “Go ahead — what did you find? [listens, nods] So the crash happens only on Android 12 after login? What do you need from me?”</p>',
  sol: 'Name the rules, then show RASA in the rewrite.', trap: 'Describing good listening in general without the rewrite.' }, ['2023T2-88', '2026T2-3'].map(G2));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A manager must tell an employee that a client rejected her design. Which version best meets the 10 Cs?', opts: ['“The client hated it. Fix it.”', '“It was fine, maybe small tweaks, don’t worry.”', '“The client rejected the layout because the checkout takes four screens; they want two. Can we sketch options together by Thursday?”', 'A 900-word email on design principles'], ans: 2,
  why: ['Not courteous, not concrete.', 'Not correct or complete: it hides the rejection.', 'Correct: clear, concrete, complete, considerate.', 'Not concise.'], sol: 'Specific, actionable, respectful.', trap: 'Option 2 feels kind but fails correct and complete.' }, ['2023T1-58', '2023T1-52', '2023T1-51'].map(G2));
VQ({ kind: 'concept', type: 'mcq', q: 'A 40-page technical audit must be shared with ten department heads who will act on it over a quarter. Best channel?', opts: ['A WhatsApp voice note', 'A written report with a one-page summary', 'A hallway conversation', 'Instant messages, one finding at a time'], ans: 1,
  why: ['No structure or record.', 'Correct: structure and a permanent record.', 'No record.', 'Fragmented.'], sol: 'Complex + needs a record → written report.', trap: 'Email-style options feel modern.' }, ['2023T1-60'].map(G2));
VQ({ kind: 'written', type: 'short', q: 'Using five of the 10 Cs of communication, list what a CEO’s announcement of a 10% headcount reduction must contain.',
  model: '<ol><li>Clear: what is happening and why.</li><li>Complete: who is affected, severance, dates, support.</li><li>Correct: numbers that will not change tomorrow.</li><li>Considerate: acknowledges the human impact first.</li><li>Courteous: respectful, no euphemism, written by the leader.</li></ol>',
  sol: 'One line per C.', trap: 'Using teamwork Cs.' }, ['2025T3-218', '2025T3-220', '2025T3-221', '2023T2-89'].map(G2));
VQ({ kind: 'written', type: 'short', q: 'A Bengaluru manager emails a Tokyo colleague: “This is a bit off; tweak it when you can.” The colleague delays for two weeks. Using the 10 Cs and context in communication, rewrite the message.',
  model: '<p>“Hi Aiko — the totals in Table 2 do not match the source file (rows 4 and 9). Could you correct them and resend by Wednesday 5 pm IST? This feeds Friday’s client report. Thank you — please tell me if anything is unclear.”</p><p>Clear, concrete, complete and courteous; low-context and explicit, because asynchronous cross-cultural messages have no tone to rely on.</p>',
  sol: 'Replace vague words with specifics and a deadline.', trap: 'Keeping “a bit” and “when you can”.' }, ['2025T2-230', '2026T1-5', '2026T2-4'].map(G2));
VQ({ kind: 'written', type: 'short', q: 'A manager learns he unconsciously dismisses ideas from younger staff. Which barrier is this, and what three steps should he take?',
  model: '<p>A psychological barrier (prejudice, preconceived notion) producing selective perception.</p><p>Steps: recognise the bias (self-awareness); listen to content before judging the speaker, summarising back what he heard; seek feedback from the team on whether he is improving.</p>',
  sol: 'Name the barrier, then concrete steps.', trap: 'Calling it a cultural barrier.' }, ['2023T2-90'].map(G2));
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>not</b> a nonverbal message?', opts: ['Arriving 20 minutes late to a client meeting', 'A typo-ridden proposal', 'The exact words of the contract clause', 'Staying silent when asked for concerns'], ans: 2,
  why: ['Time use sends a message.', 'Document appearance sends a message.', 'Correct: the words themselves are verbal.', 'Silence sends a message.'], sol: 'Only the words are verbal.', trap: 'Silence feels like “no message”.' }, ['2023T1q1-53', '2023T1-53', '2024T1-188'].map(G2));
VQ({ kind: 'written', type: 'short', q: 'In a hybrid team, remote members never comment during meetings. Give two causes and two positive uses of this silence, and say what a leader should add so silence is not harmful.',
  model: '<p>Causes: fear of judgement; feeling unheard; easy to hide; power distance.</p><p>Positives: time to reflect and write a considered comment; avoids reacting emotionally.</p><p>Add: a written follow-up channel, named invitations to speak, and visible action on feedback.</p>',
  sol: 'Causes, positives, then the safe channel.', trap: 'Only negatives.' }, ['2024T2-91', '2025T2-232'].map(G2));

/* ---------------- Glossary and flashcards ---------------- */
[['Downward communication', 'Messages from managers to staff.'],
 ['Upward communication', 'Messages from staff to managers.'],
 ['Lateral (horizontal) communication', 'Messages between peers.'],
 ['Semantic barrier', 'Jargon, acronyms, complex or foreign language.'],
 ['Psychological barrier', 'Stress, attitude, bias, fear, lack of interest.'],
 ['Organizational barrier', 'Hierarchy, many layers, unclear channels.'],
 ['Selective perception', 'Interpreting messages through one’s own needs, motives and background.'],
 ['Information overload', 'More information than can be processed (course key also counts unfamiliar concepts).'],
 ['RASA', 'Receive, Appreciate, Summarize, Ask (Julian Treasure).'],
 ['Active listening', 'Paraphrasing, clarifying and open questions, mirroring, encouraging.'],
 ['Passive listening', 'Silent, attentive presence; best for a distressed speaker.'],
 ['10 Cs of communication', 'Clear, Concise, Concrete, Correct, Complete, Consistent, Confident, Creative, Courteous, Considerate.'],
 ['Second conversation', 'Nick Morgan: the nonverbal conversation under the words.'],
 ['Employee silence', 'Employees choosing not to speak up, from fear or distrust.']].forEach(([t, d]) => GLOSS(t, d, 2));
[['Jargon — barrier type?', 'Language (semantic).'],
 ['CEO policy distorted on the way down — flow?', 'Downward.'],
 ['Expand RASA', 'Receive, Appreciate, Summarize, Ask.'],
 ['Open questions + restating + encouraging', 'Active listening.'],
 ['“Give me an example of what you mean?”', 'Clarifying question.'],
 ['Nick Morgan’s second conversation', 'Nonverbal communication.'],
 ['Nonverbal barrier in the papers', 'Withholding communication about a problem.'],
 ['Best feedback', 'Specific, actionable, constructive.'],
 ['Complex information — channel?', 'Written report.'],
 ['Name the 10 Cs of communication', 'Clear, Concise, Concrete, Correct, Complete, Consistent, Confident, Creative, Courteous, Considerate.']].forEach(([f, b]) => CARD(f, b, 2));
