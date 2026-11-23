/* ===================== SPG WEEK 3 — Presentation and writing skills ===================== */
WEEK({ course: 'gn3001', n: 3, title: 'Presentation and Professional Writing Skills',
  blurb: 'A professional presentation is usually evaluative, recurring and aimed at a specific audience, and it must fit its time. Prepare with an outline and the audience in mind; connect with five techniques; deliver with open gestures and pauses. Formal writing informs and persuades, follows a beginning–middle–ending structure, credits its sources and looks professional.',
  topics: [
    { title: '3.1 Preparing a presentation: audience, outline, slides, graphs', cs: ['presentation-prep'] },
    { title: '3.2 Delivering and connecting with the audience', cs: ['presentation-delivery'] },
    { title: '3.3 Writing in a professional setting', cs: ['professional-writing'] }] });

/* ---------------- 3.1 Preparation ---------------- */
C({ id: 'presentation-prep', week: 3, title: 'Preparing a presentation: audience, outline, slides and honest graphs', pri: 'High', prereq: [],
  src: 'Study guide W3 §3.2 (setting, constraints, illustrations) · spg notes W3 · PYQs 2023 T1 Quiz 1 Q29 Q59, 2024 T2 Q98, 2025 T2 Q239 Q240',
  oneLine: 'Audience and duration are the two dominant constraints. Outline = list of main headings. Bullets = keywords. Graphs = complete, consistent axes.',
  misShort: 'Thinking an outline is a list of tools or sources, or that 3-D charts make data clearer.',
  intu: R`<p>John has to pitch to a client who could sign a large deal. He could memorise every word, fill thirty slides with animations, or buy a new suit.</p><p>None of that is the point. The client cares about their own problem and has 20 minutes. John should know what they need, structure the talk around it, and rehearse until he can deliver it naturally in the time.</p><p>The question this concept answers: <b>how do you prepare a presentation that works for a specific audience?</b></p>`,
  why: R`<ul><li>Outline definition appears twice (2023 T1 Quiz 1 Q59, 2025 T2 Q239) with the same decoys.</li><li>Slide and graph design: bullets as keywords (2024 T2 Q98), axis scales (2025 T2 Q240); preparation by rehearsal (2023 T1 Quiz 1 Q29).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Professional presentation</b> — usually evaluative, a vehicle to report status or convey an idea, recurring, and interactive with a specific audience.',
    '<b>Two dominant constraints</b> — the <b>audience</b> (seniority, purpose) and the <b>duration</b> (running over is heavily penalised).',
    '<b>Outline</b> — a structured list of the major headings or topics to be covered. Not tools, not requirements, not sources.',
    '<b>Bullet points</b> — keywords or short phrases, not sentences or paragraphs.',
    '<b>Illustrations</b> — choose by purpose: table (precise numbers), graph (trends), photograph (real appearance), drawing/schematic (structure).',
    '<b>Honest graphs</b> — complete and consistent axis scales; avoid 3-D, stacked effects and distracting special effects.',
    '<b>Preparation</b> — rehearse several times, keeping the audience’s needs and interests in mind.']))
    + '<p><b>In words:</b> know who is listening and how long you have; plan the headings; put few words on slides; draw graphs that cannot mislead; rehearse.</p>',
  vis: M.flow([{ t: 'Audience + time', sub: 'constraints' }, { t: 'Purpose' }, { t: 'Outline', sub: 'major headings', hl: true }, { t: 'Slides', sub: 'keywords, honest graphs' }, { t: 'Rehearse', sub: 'with audience in mind' }], { cap: 'Preparation order. The outline is the skeleton everything else hangs on.' }),
  ex: [
    M.ex('Introductory', R`<p>What is an outline in the context of a presentation?</p>`, R`<p>A list of <b>major headings or topics</b>. The decoys — technologies used, requirements and purpose, external sources — are other parts of preparation.</p>`),
    M.ex('Standard', R`<p>Which best improves bullet readability: long sentences, paragraphs, keywords or phrases, pages of text?</p>`, R`<p><b>Keywords or phrases</b>. The speaker explains; the slide reminds.</p>`),
    M.ex('Exam-level', R`<p>A sales chart starts its y-axis at 95 instead of 0, making a 2% rise look like a doubling. Another uses a 3-D pie. What single rule prevents the first, and why is the second also discouraged?</p>`,
      R`<ol><li>Use <b>complete and consistent axis scales</b> (2025 T2 Q240).</li><li>3-D effects distort relative sizes and count as distracting special effects.</li></ol>`)],
  math: M.rule(R`<p><b>Constraints: audience and duration.</b> <b>Outline = major headings.</b> <b>Bullets = keywords.</b> <b>Graphs: complete, consistent axes; no 3-D.</b></p>`)
    + M.why([['Memorising the whole script', 'brittle; rehearse ideas, not words.'],
      ['Many animations to hold attention', 'special effects distract.'],
      ['Outline = list of references', 'that is the bibliography.'],
      ['Vibrant colours to prevent misleading graphs', 'colour cannot fix a bad scale.']]),
  conn: R`<p><b>At work:</b> sprint reviews and quarterly business reviews are evaluative, recurring presentations — exactly the setting the course describes.</p><p><b>Earlier:</b> concise and clear from the 10 Cs (Week 2). <b>Next:</b> delivery (3.2).</p>`,
  mis: M.ul(['Choosing “list of requirements and purpose” for an outline (2023 T1 Quiz 1 Q59, 2025 T2 Q239).',
    'Choosing 3-D or stacked graphs in 2025 T2 Q240.',
    'Choosing “a lot of visual elements” in 2023 T1 Quiz 1 Q29.']),
  exam: R`<p><b>How it is asked:</b> definition MCQs with stable decoys. <b>Fast method:</b> the answer is the plain, audience-serving choice; options with “a lot”, “3-D”, “memorise everything” or “fashionable” are decoys.</p>`
});
Q({ cp: 'presentation-prep', type: 'mcq', diff: 'easy', q: 'The two dominant constraints on a professional presentation are:', opts: ['Slides and fonts', 'Audience and duration', 'Venue and lighting', 'Dress and voice'], ans: 1,
  why: ['Design choices, not constraints.', 'Correct.', 'Logistics.', 'Delivery details.'], sol: 'Audience and time shape everything.' });
Q({ cp: 'presentation-prep', type: 'mcq', diff: 'moderate', q: 'To show precise quarterly revenue for four regions so the CFO can compare exact figures, use:', opts: ['A photograph', 'A table', 'A 3-D pie chart', 'A schematic'], ans: 1,
  why: ['Photos show appearance.', 'Correct: precise numeric comparison.', 'Distorts; imprecise.', 'Schematics show structure.'], sol: 'Exact numbers → table.' });
Q({ cp: 'presentation-prep', type: 'msq', diff: 'moderate', q: 'Which make a graph less likely to mislead?', opts: ['Axis starting at zero (complete scale)', 'Same scale on two compared charts', '3-D perspective', 'Explaining what the chart shows'], ans: [0, 1, 3],
  why: ['Yes.', 'Yes: consistent.', 'No: distorts.', 'Yes: the course asks presenters to explain visuals.'], sol: 'Complete, consistent, explained.' });
Q({ cp: 'presentation-prep', type: 'short', diff: 'easy', q: 'Define an outline and list three things it is not.',
  model: '<p>An outline is a structured list of the major headings or topics a presentation will cover.</p><p>It is not the list of technologies used, not the list of requirements/purpose, and not the list of sources.</p>' });

/* ---------------- 3.2 Delivery ---------------- */
C({ id: 'presentation-delivery', week: 3, title: 'Delivery: connecting with the audience, gestures, pauses, questions, team talks', pri: 'High', prereq: ['presentation-prep'],
  src: 'Study guide W3 §3.2 (connecting with the audience, questions) · spg notes W3 · PYQs 2023 T1 Quiz 1 Q58 Q60, 2023 T1 Q59, 2023 T2 Q110, 2024 T2 Q97 Q99, 2026 T2 Q18',
  oneLine: 'Connect: summary recap, facts vs opinions, pauses, familiar formats, explain what is shown. Deliver: open hands, pauses, repeat audience questions. A summary adds nothing new.',
  misShort: 'Thinking non-stop speech shows confidence, or that a summary should add new insights.',
  intu: R`<p>A presenter is nervous, speeds up and refuses to pause in case silence looks weak. The executives lose the thread by slide three.</p><p>Pauses are not gaps. They are where the audience thinks and decides. The question this concept answers: <b>what does a presenter do in the room to keep the audience with them?</b></p>`,
  why: R`<ul><li>The five connecting techniques are asked as “which are correct” (2023 T1 Quiz 1 Q60, 2023 T2 Q110).</li><li>Delivery details: gestures (2023 T1 Quiz 1 Q58), repeating questions (2023 T1 Q59), pauses (2026 T2 Q18), summarising (2024 T2 Q97), team presentations (2024 T2 Q99).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Five ways to connect</b> — (1) repeat a summary slide from the previous presentation, (2) separate facts from opinions, (3) pause to enable decisions, (4) use familiar formats, (5) explain what is being shown and how to read it.',
    '<b>Gestures</b> — open hand gestures; avoid crossed arms, a script in hand, or hands hidden behind the back throughout.',
    '<b>Pauses</b> — give structure and absorption time; speaking without pauses overwhelms listeners.',
    '<b>Audience questions</b> — in a large room, repeat the question before answering.',
    '<b>Summarising</b> — condenses what was said; it does not introduce new insights.',
    '<b>Team presentations</b> — coordinate portions, agree each person’s duration, list everyone’s names, avoid duplicated content.',
    '<b>Special effects</b> — excessive animation and transitions distract.']))
    + '<p><b>In words:</b> recap, label facts, pause, keep formats familiar, explain visuals; open hands; repeat questions; end with a summary, not a surprise.</p>',
  vis: M.table(['Do', 'Don’t'], [
    ['Open hand gestures', 'Crossed arms; script in hand'],
    ['Pause to let decisions form', 'Speak non-stop to look confident'],
    ['Repeat an audience question', 'Answer a question others did not hear'],
    ['Summarise what was said', 'Add new points in the summary'],
    ['Explain each chart', 'Assume a chart is self-explanatory']], 'Delivery rules as they appear in the papers.'),
  ex: [
    M.ex('Introductory', R`<p>Which is correct about hand gestures: keep the script in hand; open hand gestures; cross your arms; clasp hands behind your back throughout?</p>`, R`<p><b>Open hand gestures</b> (2023 T1 Quiz 1 Q58).</p>`),
    M.ex('Standard', R`<p>True or false: “Summarising involves not only condensing information but also introducing fresh insights.”</p>`, R`<p><b>False</b> (2024 T2 Q97). A summary condenses; new material belongs in the body.</p>`),
    M.ex('Exam-level', R`<p>Which help connect with an audience? (1) Repeat a summary slide from the previous presentation. (2) Separate facts from opinions. (3) Pause to enable a decision. (4) Explain what is shown. (5) Use familiar formats.</p>`,
      R`<p>All five (2023 T2 Q110). Statement 1 is the one students drop; it helps returning audiences re-orient. A later paper (reported in the revision notes, not provided here) used a different statement set; see Sources.</p>`)],
  math: M.rule(R`<p><b>Connect: recap · facts vs opinions · pause · familiar formats · explain visuals.</b></p><p><b>Deliver: open hands · pauses · repeat questions · summary adds nothing new.</b></p>`)
    + M.why([['Continuous speech shows energy', 'it overwhelms listeners and hides structure.'],
      ['Answer a quiet question immediately', 'others did not hear it — repeat it first.'],
      ['Summary slide from last time is lazy', 'it is one of the five connecting techniques.'],
      ['Each team member presents independently', 'portions must be coordinated to avoid duplication.']]),
  conn: R`<p><b>At work:</b> in a demo, “to recap last week’s numbers…” and “this is our estimate, not a fact yet” are two connecting techniques in two sentences.</p><p><b>Earlier:</b> nonverbal communication (Week 2) explains why gestures matter.</p>`,
  mis: M.ul(['Option 1 or 4 in 2026 T2 Q18 (non-stop speech as confidence; “amygdala hijack in the audience”).',
    'True in 2024 T2 Q97.',
    'Dropping statement 1 or 4 in 2024 T2 Q99 because they look similar.']),
  exam: R`<p><b>How it is asked:</b> statement sets (“which are correct”) and single-behaviour MCQs.</p><p><b>Fast method:</b> for the connecting-techniques set, if every statement is one of the five, the answer is “all”.</p>`
});
Q({ cp: 'presentation-delivery', type: 'mcq', diff: 'easy', q: 'A question is asked from the back of a 300-seat hall without a microphone. You should first:', opts: ['Answer at once', 'Repeat the question', 'Ask the person to come forward', 'Ask others to shout it again'], ans: 1,
  why: ['Others did not hear it.', 'Correct.', 'Awkward and slow.', 'Disruptive.'], sol: 'Repeat, then answer.' });
Q({ cp: 'presentation-delivery', type: 'msq', diff: 'moderate', q: 'Which are among the course’s techniques for connecting with an audience?', opts: ['Separate facts from opinions', 'Use striking new visual formats', 'Pause to enable decisions', 'Explain what is shown'], ans: [0, 2, 3],
  why: ['Yes.', 'No: use familiar formats.', 'Yes.', 'Yes.'], sol: 'Familiar, not new, formats.' });
Q({ cp: 'presentation-delivery', type: 'mcq', diff: 'moderate', q: 'In a team pitch, two speakers both explain the market size. Which consideration was missed?', opts: ['Listing all names', 'Coordinating portions to avoid duplicated content', 'Agreeing on dress', 'Using animations'], ans: 1,
  why: ['Not the issue.', 'Correct.', 'Not a course item.', 'Distracting anyway.'], sol: 'Coordinate to avoid duplication.' });
Q({ cp: 'presentation-delivery', type: 'short', diff: 'easy', q: 'List the five ways to connect with an audience.',
  model: '<ol><li>Repeat a summary slide from the previous presentation.</li><li>Separate facts from opinions.</li><li>Pause to enable decisions.</li><li>Use familiar formats.</li><li>Explain what is being shown.</li></ol>' });

/* ---------------- 3.3 Writing ---------------- */
C({ id: 'professional-writing', week: 3, title: 'Writing in a professional setting', pri: 'Medium', prereq: [],
  src: 'Study guide W3 §3.3 (formal writing, structure, language) · spg notes W3 · PYQs 2023 T1 Quiz 1 Q56 Q57 Q61, 2024 T1 Q189',
  oneLine: 'Formal writing informs and persuades efficiently. Structure: beginning (title, summary, introduction) → middle (details, ordered chronologically, spatially or by variables) → ending (summary, future). Credit sources; look professional.',
  misShort: 'Thinking formal writing need not persuade, or that a document’s appearance does not matter.',
  intu: R`<p>Two reports with identical content arrive on a director’s desk. One has a title, a three-line summary, numbered steps and references. The other is a wall of text with typos.</p><p>The director trusts the first before reading a word. The question this concept answers: <b>how is professional writing structured and presented?</b></p>`,
  why: R`<ul><li>Steps to improve writing (2023 T1 Quiz 1 Q56), order types (Q57), citations (Q61), document appearance (2024 T1 Q189).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Purpose of formal writing</b> — to inform and persuade, efficiently.',
    '<b>Steps to improve</b> — understand the purpose; recognise the overall structure; avoid typical errors.',
    '<b>Structure</b> — Beginning: title, summary, introduction. Middle: details and strategy. Ending: summary and future perspective.',
    '<b>Orders for the middle</b> — chronological (steps in time sequence), spatial (by location or layout), causal (cause → effect), topical (by subject).',
    '<b>Good language</b> — precise (the correct word), concise (cut unnecessary words), humble (no arrogance; define unusual terms).',
    '<b>Using sources</b> — citations and references.',
    '<b>Appearance</b> — sloppy appearance sends a negative nonverbal message; neat appearance improves readability.']))
    + '<p><b>In words:</b> say what the document is for, put the summary first, order the middle sensibly, credit sources, and make it look cared for.</p>',
  vis: M.table(['Part', 'Contains'], [['Beginning', 'Title, summary, introduction'], ['Middle', 'Details and strategy — chronological, spatial, causal or topical order'], ['Ending', 'Summary and future perspective']], 'Beginning–middle–ending structure of a formal document.'),
  ex: [
    M.ex('Introductory', R`<p>Steps to install software, in order, in a report. Which ordering?</p>`, R`<p><b>Chronological</b> (2023 T1 Quiz 1 Q57).</p>`),
    M.ex('Standard', R`<p>Which are steps to improve professional writing? (1) Write without the need to persuade. (2) Avoid typical errors. (3) Understand the purpose. (4) Recognise the overall structure.</p>`, R`<p><b>2, 3 and 4</b>. Statement 1 is false: formal writing informs and persuades.</p>`),
    M.ex('Exam-level', R`<p>How does the appearance of business documents affect communication? (1) It does not affect the receiver. (2) Sloppy appearance sends a negative nonverbal message. (3) Neat appearance enhances readability.</p>`, R`<p><b>2 and 3 only</b> (2024 T1 Q189). Appearance is a nonverbal signal (Week 2).</p>`)],
  math: M.rule(R`<p><b>Inform + persuade. Beginning → middle → ending. Precise, concise, humble. Cite sources.</b></p>`)
    + M.why([['Acknowledgements for sources', 'acknowledgements thank people; sources need citations.'],
      ['Causal order for steps', 'causal explains why; steps are chronological.'],
      ['Appearance is neutral', 'it is a nonverbal message.']]),
  conn: R`<p><b>At work:</b> an incident report is chronological; a design proposal is topical; both start with a summary.</p><p><b>Earlier:</b> the 10 Cs (Week 2) apply to every sentence.</p>`,
  mis: M.ul(['Including statement 1 (“without the need to persuade”) in 2023 T1 Quiz 1 Q56.', 'Acknowledgements instead of citations (Q61).', 'Statement 1 in 2024 T1 Q189.']),
  exam: R`<p><b>How it is asked:</b> short definition MCQs and statement sets. <b>Fast method:</b> reject any statement that says writing need not persuade or appearance does not matter.</p>`
});
Q({ cp: 'professional-writing', type: 'mcq', diff: 'easy', q: 'A site survey report describes a factory from the entrance to the loading bay. Which order?', opts: ['Chronological', 'Spatial', 'Causal', 'Topical'], ans: 1,
  why: ['Not a time sequence.', 'Correct: by physical layout.', 'Not cause–effect.', 'Not by subject.'], sol: 'Layout → spatial.' });
Q({ cp: 'professional-writing', type: 'mcq', diff: 'moderate', q: 'Where does the summary of a formal report first appear?', opts: ['Only at the end', 'In the beginning, with the title and introduction (and again at the end)', 'In the middle', 'Nowhere'], ans: 1,
  why: ['The ending repeats it, but it starts at the beginning.', 'Correct.', 'The middle holds details.', 'Summaries are required.'], sol: 'Beginning: title, summary, introduction.' });
Q({ cp: 'professional-writing', type: 'msq', diff: 'moderate', q: 'Which describe good professional language in the course?', opts: ['Precise', 'Concise', 'Humble, defining unusual terms', 'Ornate, to impress'], ans: [0, 1, 2],
  why: ['Yes.', 'Yes.', 'Yes.', 'No.'], sol: 'Precise, concise, humble.' });
Q({ cp: 'professional-writing', type: 'short', diff: 'easy', q: 'State the beginning–middle–ending structure of a formal document.',
  model: '<p>Beginning: title, summary, introduction. Middle: details and strategy, ordered chronologically, spatially or by flow of variables. Ending: summary and future perspective.</p>' });

/* ---------------- Variations ---------------- */
const G3 = id => 'gn3001-' + id;
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>not</b> part of a presentation outline?', opts: ['Problem', 'Proposed solution', 'The projector model and clicker brand', 'Next steps'], ans: 2,
  why: ['Heading.', 'Heading.', 'Correct: logistics, not a heading.', 'Heading.'], sol: 'Outline = headings/topics.', trap: 'All four are things you prepare.' }, ['2023T1q1-59', '2025T2-239'].map(G3));
VQ({ kind: 'scenario', type: 'mcq', q: 'A product manager must pitch a pricing change to the CFO in 10 minutes. Which preparation is best?', opts: ['Build 40 animated slides', 'Memorise a 2,000-word script', 'Outline the CFO’s concerns (margin, risk), build 5 slides with one honest chart, rehearse to time', 'Focus on a striking outfit'], ans: 2,
  why: ['Too many, distracting.', 'Brittle.', 'Correct: audience and duration drive it.', 'Not the core.'], sol: 'Audience + time + outline + rehearsal.', trap: 'Option 1 looks thorough.' }, ['2023T1q1-29', '2024T2-98'].map(G3));
VQ({ kind: 'concept', type: 'mcq', q: 'Two bar charts compare this year’s and last year’s sales; one y-axis runs 0–100, the other 50–100. What is wrong?', opts: ['Colours differ', 'Scales are not consistent, so differences look larger in one', 'Bars should be 3-D', 'Nothing'], ans: 1,
  why: ['Cosmetic.', 'Correct.', '3-D makes it worse.', 'It misleads.'], sol: 'Complete and consistent scales.', trap: 'Colour is the visible difference.' }, ['2025T2-240'].map(G3));
VQ({ kind: 'counting', type: 'num', q: 'How many of these are course techniques for connecting with an audience? (1) Separating facts from opinions. (2) Pausing to enable decisions. (3) Using familiar formats. (4) Adding special-effect transitions. (5) Repeating a summary slide from the last presentation. (6) Explaining what is shown.', ans: 5, tol: 0,
  sol: 'All except special effects (4).', trap: 'Statement 5 sounds lazy.' }, ['2023T1q1-60', '2023T2-110'].map(G3));
VQ({ kind: 'statements', type: 'mcq', q: '(1) A summary should add one new insight to impress. (2) Repeat inaudible audience questions. (3) Open hand gestures help. (4) Speaking without pauses signals confidence. Which are correct?', opts: ['2 and 3 only', '1, 2 and 3', '2, 3 and 4', 'All four'], ans: 0,
  why: ['Correct.', '1 is false.', '4 is false.', '1 and 4 are false.'], sol: '1 and 4 are the decoys from 2024 T2 Q97 and 2026 T2 Q18.', trap: 'Both decoys sound like “stand-out” advice.' }, ['2024T2-97', '2023T1-59', '2023T1q1-58', '2026T2-18'].map(G3));
VQ({ kind: 'counting', type: 'num', q: 'A four-person team will present. How many of these are course considerations? (1) Coordinate portions. (2) Agree each portion’s duration. (3) List everyone’s names. (4) Avoid duplicated content. (5) Let each person choose any topic independently.', ans: 4, tol: 0,
  sol: '1–4; 5 contradicts coordination.', trap: '1 and 4 look duplicate; both count.' }, ['2024T2-99'].map(G3));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Formal writing informs and persuades. (2) A report’s middle can be chronological, spatial or by variables. (3) Acknowledgements are how you credit external sources. (4) A sloppy document sends a negative nonverbal message. Which are correct?', opts: ['1, 2 and 4', '1 and 3', '2, 3 and 4', 'All four'], ans: 0,
  why: ['Correct.', '3 is false; 2, 4 true.', '3 false; 1 true.', '3 false.'], sol: 'Sources need citations and references.', trap: 'Acknowledgements also “credit”.' }, ['2023T1q1-56', '2023T1q1-57', '2023T1q1-61', '2024T1-189'].map(G3));

/* ---------------- Glossary and flashcards ---------------- */
[['Outline', 'Structured list of the major headings or topics of a presentation.'],
 ['Professional presentation', 'Evaluative, recurring, interactive, aimed at a specific audience; constrained by audience and duration.'],
 ['Five ways to connect', 'Summary recap, facts vs opinions, pauses, familiar formats, explaining visuals.'],
 ['Chronological order', 'Steps in time sequence.'],
 ['Spatial order', 'By physical location or layout.'],
 ['Causal order', 'Cause → effect.'],
 ['Formal document structure', 'Beginning (title, summary, intro) → middle (details) → ending (summary, future).']].forEach(([t, d]) => GLOSS(t, d, 3));
[['Outline =', 'List of major headings/topics.'],
 ['Bullets should be', 'Keywords or phrases.'],
 ['Prevent misleading graphs', 'Complete and consistent axis scales.'],
 ['Hand gestures', 'Open.'],
 ['Inaudible audience question', 'Repeat it first.'],
 ['Does a summary add new insights?', 'No.'],
 ['No pauses →', 'Overwhelms listeners, loses structure.'],
 ['Steps in sequence — order?', 'Chronological.'],
 ['Formal writing purpose', 'Inform and persuade.']].forEach(([f, b]) => CARD(f, b, 3));
