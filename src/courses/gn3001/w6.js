/* ===================== SPG WEEK 6 — Cross-cultural understanding and grooming ===================== */
WEEK({ course: 'gn3001', n: 6, title: 'Cross-cultural Understanding and Personal Grooming',
  blurb: 'Culture is shared and learned — beliefs, values, assumptions and ways of doing things — and most of it sits below the waterline. Cultures differ along dimensions (power distance, individualism, uncertainty avoidance, time; high vs low context). Moving into a new culture follows predictable stages. Organisations choose a strategy (dominance, avoidance, compromise, accommodation, synergy), and people fall into barriers (stereotyping, ethnocentrism, parochialism). Grooming and hygiene are part of professional presence.',
  topics: [
    { title: '6.1 What culture is: the iceberg', cs: ['culture-basics'] },
    { title: '6.2 Cultural dimensions and context', cs: ['cultural-dimensions'] },
    { title: '6.3 Culture shock', cs: ['culture-shock'] },
    { title: '6.4 Strategies, barriers and cultural intelligence', cs: ['cultural-strategies'] },
    { title: '6.5 Personal grooming', cs: ['grooming'] }] });

/* ---------------- 6.1 Culture basics ---------------- */
C({ id: 'culture-basics', week: 6, title: 'What culture is and the iceberg principle', pri: 'High', prereq: [],
  src: 'Study guide W6 §6.1 (culture; iceberg) · spg notes W6 · PYQs 2023 T1 Q43 Q47, 2024 T2 Q100, 2025 T2 Q234, 2026 T1 Q20, 2026 T2 Q9',
  oneLine: 'Culture = shared beliefs, attitudes, values, assumptions and ways of doing things, learned and passed on. Above the water: language, food, dress, festivals, flags. Below: attitudes to work, time, privacy, authority, right and wrong.',
  misShort: 'Placing authority or privacy above the water, or recipes below it.',
  intu: R`<p>An Indian engineer joins a team in Germany. In week one she notices the food, the language, the holidays. By month three she notices something harder: meetings start to the minute, feedback is blunt, nobody stays late to show commitment.</p><p>The first things are the tip of an iceberg. The second are the bulk underneath, and they cause most of the friction. The question this concept answers: <b>what is culture, and which parts are visible?</b></p>`,
  why: R`<ul><li>The iceberg is asked in four of the last five papers (2025 T2 Q234, 2026 T1 Q20, 2026 T2 Q9) plus deep culture (2023 T1 Q43).</li><li>Definition of culture (2024 T2 Q100).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Culture</b> — shared beliefs, attitudes, values, assumptions and shared ways of doing things; learned (not inherited) and transmitted across generations; integrated (its parts are interconnected).',
    '<b>Surface (visible) culture</b> — language, food and recipes, dress, customs, traditions and festivals, flags, emblems and insignia.',
    '<b>Deep (invisible) culture</b> — attitudes to work, authority, competition and cooperation; concepts of time, justice and self; privacy; ideas of right and wrong; tempo of life; leadership and problem-solving styles; methods of process improvement.',
    '<b>Nonverbal communication across cultures</b> — critically important; may carry more meaning than words.']))
    + '<p><b>In words:</b> you can see what people eat and wear; you have to learn how they think about time, rules and bosses.</p>',
  vis: M.table(['Above the water (visible)', 'Below the water (invisible)'], [
    ['Language, food, recipes', 'Attitudes to work and authority'],
    ['Dress, customs', 'Concepts of time, justice, self'],
    ['Traditions, festivals', 'Privacy, right and wrong, tempo of life'],
    ['Flags, emblems, insignia', 'Leadership, problem-solving, process improvement']], 'The cultural iceberg.'),
  ex: [
    M.ex('Introductory', R`<p>Which is a visible element of culture: ideas of right and wrong; privacy; tempo of life; traditions and festivals?</p>`, R`<p><b>Traditions and festivals</b> (2025 T2 Q234).</p>`),
    M.ex('Standard', R`<p>Count the invisible elements: methods of process improvement; approaches to privacy; traditional recipes; concepts of authority.</p>`, R`<p><b>Three</b> (2026 T1 Q20). Only recipes are visible.</p>`),
    M.ex('Exam-level', R`<p>Which do not form part of deep culture? (1) Attitudes to work and authority. (2) Concepts of time and justice. (3) Flags, emblems and insignia. (4) Leadership, problem-solving, manners.</p>`, R`<p><b>3 only</b> (2023 T1 Q43).</p>`)],
  math: M.rule(R`<p><b>Can you photograph it? → surface. Must you learn it from behaviour? → deep.</b></p>`)
    + M.why([['Power distance above the water', 'attitudes to authority are invisible.'],
      ['Recipes below the water', 'food is visible.'],
      ['Culture is inherited at birth', 'it is learned.'],
      ['NVC is minor across cultures', 'it may carry more meaning than words.']]),
  conn: R`<p><b>At work:</b> onboarding guides usually cover the tip (holidays, dress code); the costly misunderstandings come from the base.</p><p><b>Next:</b> the dimensions (6.2) describe the base systematically.</p>`,
  mis: M.ul(['The reversed option in 2026 T2 Q9.', 'Counting recipes as invisible (2026 T1 Q20).']),
  exam: R`<p><b>How it is asked:</b> pick the visible/invisible item, or count. <b>Fast method:</b> the photograph test.</p>`
});
Q({ cp: 'culture-basics', type: 'mcq', diff: 'easy', q: 'Which is below the waterline of the cultural iceberg?', opts: ['National dress', 'Festival food', 'Attitude to punctuality', 'Language'], ans: 2,
  why: ['Visible.', 'Visible.', 'Correct: concept of time.', 'Visible.'], sol: 'Time concepts are invisible.' });
Q({ cp: 'culture-basics', type: 'mcq', diff: 'moderate', q: 'With reference to culture: (1) It is shared and helps predict others’ actions. (2) It is integrated; its parts are interconnected. (3) It is not organised around assumptions, values and beliefs, only around what is widely accepted. (4) It is transmitted across generations through learning. Which are correct?', opts: ['1, 2 and 4 only', '1 and 3 only', '1, 2 and 3 only', '2 and 4 only'], ans: 0,
  why: ['Correct.', 'Statement 3 is false.', 'Statement 3 is false.', 'Statement 1 is also true.'],
  sol: 'Culture is organised around assumptions, values and beliefs, so 3 is false. Practice item adapted from a 2025 T3 question whose options were cut off in the paper provided; it is not presented as a past-paper question.' });
Q({ cp: 'culture-basics', type: 'num', diff: 'hard', q: 'How many are surface culture? (1) Greeting with a bow. (2) Views on whether to contradict a boss. (3) Diwali decorations. (4) Belief that time is flexible. (5) Office dress code. (6) Notion of fairness.', ans: 3, tol: 0,
  sol: 'Surface: 1, 3, 5. Deep: 2, 4, 6.' });
Q({ cp: 'culture-basics', type: 'short', diff: 'easy', q: 'Define culture and give three visible and three invisible elements.',
  model: '<p>Culture is the shared, learned set of beliefs, attitudes, values, assumptions and ways of doing things of a group.</p><p>Visible: language, food, festivals. Invisible: attitudes to authority, concept of time, privacy.</p>' });

/* ---------------- 6.2 Dimensions ---------------- */
C({ id: 'cultural-dimensions', week: 6, title: 'Cultural dimensions (Hofstede and the course’s four) and high/low context', pri: 'High', prereq: ['culture-basics'],
  src: 'Study guide W6 §6.5 (four dimensions with Hofstede equivalents) and W2 (high/low context) · Erin Meyer, The Culture Map (as cited in the papers) · PYQs 2023 T1 Q41, 2024 T2 Q107–109, 2025 T3 Q232 Q233, 2026 T2 Q7 · Written: 2023 T3 Q198 Q199',
  oneLine: 'Equal/Unequal = power distance; Collective/Individual = individualism; Certainty/Ambiguity = uncertainty avoidance; Time scarce/plentiful ≈ long-term orientation. Low-context = explicit, written; high-context = implicit, relational.',
  misShort: 'Reading formal approvals as power distance when the issue is discomfort with ambiguity.',
  intu: R`<p>Irina, used to team credit in India, joins a US team where everyone presents “my feature”. Gopinath’s German partner wants every change approved in writing. A Japanese colleague’s “that may be difficult” means no.</p><p>Each friction has a name. The question this concept answers: <b>which dimension explains a difference?</b></p>`,
  why: R`<ul><li>Hofstede scenarios (2025 T3 Q232–233), the course’s labels (2026 T2 Q7), context classification (2024 T2 Q107–109), negotiation style (2023 T1 Q41).</li><li>Written: classify the four countries by context (2023 T3 Q199).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Equal / Unequal</b> (Hofstede: <b>power distance</b>) — whether authority gets deference and titles, or everyone is treated equally.',
    '<b>Collective / Individual</b> (individualism vs collectivism) — group credit and identity vs personal ownership.',
    '<b>Certainty / Ambiguity</b> (<b>uncertainty avoidance</b>) — need for rules, SOPs, precise plans vs comfort iterating with incomplete information.',
    '<b>Time scarce / plentiful</b> (related to long-term orientation) — schedules and deadlines vs flexible time and long horizons.',
    '<b>Low-context communication</b> — explicit, direct, literal, written and recorded (USA, Germany).',
    '<b>High-context communication</b> — implicit, indirect, relies on relationship and nonverbal cues (Japan, India).',
    '<b>Sequential, point-by-point negotiation</b> — individualistic, low-context; holistic negotiators keep issues open together.']))
    + '<p><b>In words:</b> who has authority, who gets credit, how much certainty people need, how they treat time, and how much meaning lives outside the words.</p>',
  vis: M.table(['Scenario cue', 'Dimension'], [
    ['Formal titles, standing when the boss enters', 'Equal/Unequal (power distance)'],
    ['Individual credit vs shared team wins', 'Collective/Individual'],
    ['Detailed SOPs and approvals before any change', 'Certainty/Ambiguity (uncertainty avoidance)'],
    ['Records every decision in verified documents', 'Low-context'],
    ['An emoji to show appreciation', 'High-context']], 'Cue → dimension, as in the papers.'),
  ex: [
    M.ex('Introductory', R`<p>A German partner insists on detailed SOPs, precise timelines and formal approvals; the Indian team iterates with incomplete information. Dimension?</p>`, R`<p><b>Uncertainty avoidance</b> (2025 T3 Q233). Approvals look like hierarchy, but the theme is tolerance of ambiguity.</p>`),
    M.ex('Standard', R`<p>Classify: (a) an IT director records all decisions in written, verified documents; (b) a designer uses a smiling emoji to show appreciation.</p>`, R`<p>(a) <b>low-context</b>; (b) <b>high-context</b> (2024 T2 Q109, Q108).</p>`),
    M.ex('Exam-level', R`<p>A company presents its list of points (price, delivery, distribution) and insists on deciding each before the next. Which description fits best?</p>`, R`<p><b>Individualistic and low-context</b> (2023 T1 Q41): linear, explicit, item by item. The power-distance and uncertainty options have no evidence in the scenario.</p>`)],
  math: M.rule(R`<p><b>Authority → power distance. Credit → individualism. Rules/ambiguity → uncertainty avoidance. Explicit vs implicit → low vs high context.</b></p>`)
    + M.why([['Masculinity vs femininity for authority', 'it is about gender roles.'],
      ['Power distance for SOPs and approvals', 'the cue is need for certainty.'],
      ['Written chat is always low-context', 'an emoji conveys implicit feeling.']]),
  conn: R`<p><b>At work:</b> in a German–Japanese project, write decisions down for one side and invest in relationships for the other.</p><p><b>Earlier:</b> Week 2 introduced high/low context; Week 5’s conflict styles vary across these dimensions.</p>`,
  mis: M.ul(['Masculinity vs femininity in 2026 T2 Q7.', 'High-context for Mustafa (2024 T2 Q107) — the key says low-context; see Sources.', 'Power distance in 2025 T3 Q233.']),
  exam: R`<p><b>How it is asked:</b> scenario → dimension or context. <b>Fast method:</b> find the noun the scenario is about — authority, credit, rules, time, or how explicit the message is.</p>`
});
Q({ cp: 'cultural-dimensions', type: 'mcq', diff: 'easy', q: 'In one office, juniors call seniors by first names and challenge them in meetings; in another, juniors use “Sir” and never contradict. Dimension?', opts: ['Collective/Individual', 'Equal/Unequal', 'Certainty/Ambiguity', 'Time'], ans: 1,
  why: ['Not about credit.', 'Correct: power distance.', 'Not about rules.', 'Not about time.'], sol: 'Authority → power distance.' });
Q({ cp: 'cultural-dimensions', type: 'mcq', diff: 'moderate', q: 'A manager says “that could be challenging” to mean “no”, expecting the listener to understand. This is:', opts: ['Low-context', 'High-context', 'Low uncertainty avoidance', 'Individualism'], ans: 1,
  why: ['Low-context would say no.', 'Correct.', 'Not about rules.', 'Not about credit.'], sol: 'Implicit meaning → high-context.' });
Q({ cp: 'cultural-dimensions', type: 'msq', diff: 'moderate', q: 'Which countries does Erin Meyer place toward the <b>low-context</b> end?', opts: ['USA', 'Japan', 'Germany', 'India'], ans: [0, 2],
  why: ['Yes.', 'High-context.', 'Yes.', 'High-context.'], sol: 'USA and Germany low; Japan and India high.' });
Q({ cp: 'cultural-dimensions', type: 'short', diff: 'moderate', q: 'How should you run a meeting with German colleagues, given their place on the context scale?',
  model: '<p>Germany is low-context: share a clear agenda and data in advance, be explicit and precise, expect direct critique of ideas, and end by circulating written decisions, owners and dates.</p>' });

/* ---------------- 6.3 Culture shock ---------------- */
C({ id: 'culture-shock', week: 6, title: 'The four stages of culture shock', pri: 'High', prereq: ['culture-basics'],
  src: 'Study guide W6 §6.4 (Elation, Transition, Understanding, Integration) · spg notes W6 · PYQs 2024 T1 Q194, 2024 T2 Q101, 2026 T1 Q19, 2026 T2 Q11 · Written: 2023 T3 Q200, 2025 T2 Q231',
  oneLine: 'Elation (honeymoon, excitement) → Transition (frustration over small differences, negative comparison) → Understanding (seeing why) → Integration (adopting local habits; home may even feel unfamiliar).',
  misShort: 'Calling the excitement phase “adjustment”, or the frustration phase “integration”.',
  intu: R`<p>Sayan moves to Zanzibar to teach. Month one: everything is fascinating. Month four: the slow paperwork and unfamiliar food grate on him daily. Month eight: he understands why things work as they do. Year two: he has local friends, cooks local dishes, and Chennai feels oddly foreign on a visit.</p><p>The question this concept answers: <b>which stage is the person in?</b></p>`,
  why: R`<ul><li>Stage identification in four papers (2024 T1 Q194, 2024 T2 Q101, 2026 T2 Q11) and a counting item (2026 T1 Q19).</li><li>Written: guide a relocating colleague through the stages (2023 T3 Q200, 2025 T2 Q231).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Elation (honeymoon)</b> — intense excitement and fascination with the new culture.',
    '<b>Transition (frustration)</b> — discomfort, confusion, frustration over small daily differences; constant negative comparison with home; homesickness.',
    '<b>Understanding (adjustment)</b> — gradual acceptance; seeing the reasons behind local norms.',
    '<b>Integration (acceptance)</b> — adopting local habits (food, hobbies); after a long time, home culture may feel unfamiliar (reverse culture shock).',
    '<b>Helping someone through it</b> — mentors, peer networks, routines, explicit feedback, cultural intelligence (learn, observe, practise).']))
    + '<p><b>In words:</b> wow → ugh → oh, I see → this is home too.</p>',
  vis: M.flow([{ t: 'Elation', sub: 'excitement' }, { t: 'Transition', sub: 'frustration' }, { t: 'Understanding', sub: 'adjust' }, { t: 'Integration', sub: 'adopt local habits', hl: true }], { cap: 'Four stages. Papers also use “honeymoon” for elation and “frustration” for transition.' }),
  ex: [
    M.ex('Introductory', R`<p>Intense excitement about a new country’s customs and food — which phase?</p>`, R`<p><b>Elation / honeymoon</b> (2024 T1 Q194, 2024 T2 Q101).</p>`),
    M.ex('Standard', R`<p>Four months in, an engineer feels intense frustration over minor differences in communication and food. Stage?</p>`, R`<p><b>Transition</b> (2026 T2 Q11).</p>`),
    M.ex('Exam-level', R`<p>How many are characteristics of integration? (1) Constant negative comparison with home. (2) Adopting local food or hobbies. (3) Home culture feels unfamiliar after a long time. (4) Total rejection of host values.</p>`, R`<p><b>Two</b> — 2 and 3 (2026 T1 Q19). 1 is transition; 4 is the opposite of integration.</p>`)],
  math: M.rule(R`<p><b>Excitement → elation. Frustration/comparison → transition. Making sense → understanding. Adopting/blending → integration.</b></p>`)
    + M.why([['Adjustment for the excitement phase', 'excitement is elation.'],
      ['Integration for frustration', 'frustration is transition.'],
      ['Home feeling unfamiliar is a failure', 'it signals deep integration.']]),
  conn: R`<p><b>At work:</b> HR check-ins at month three to four catch employees in transition.</p><p><b>Earlier:</b> Week 5’s 6R helps manage the transition emotions.</p>`,
  mis: M.ul(['Frustration/adjustment phase names for the excitement stage.', 'Excluding statement 3 in 2026 T1 Q19.']),
  exam: R`<p><b>How it is asked:</b> name the stage; count characteristics; written guidance per stage. <b>Fast method:</b> match the emotion word to the stage.</p>`
});
Q({ cp: 'culture-shock', type: 'mcq', diff: 'easy', q: 'An expatriate now cooks local dishes and plays the local sport on weekends. Stage?', opts: ['Elation', 'Transition', 'Understanding', 'Integration'], ans: 3,
  why: ['No initial excitement.', 'No frustration.', 'Beyond understanding: she has adopted habits.', 'Correct.'], sol: 'Adopting habits → integration.' });
Q({ cp: 'culture-shock', type: 'mcq', diff: 'moderate', q: '“Back home, the trains were on time and people were friendlier.” Said repeatedly in month three. Stage?', opts: ['Elation', 'Transition', 'Understanding', 'Integration'], ans: 1,
  why: ['Not excitement.', 'Correct: negative comparison.', 'Not yet making sense.', 'Not adoption.'], sol: 'Negative comparison → transition.' });
Q({ cp: 'culture-shock', type: 'mcq', diff: 'moderate', q: 'Which is the correct order?', opts: ['Transition, Elation, Understanding, Integration', 'Elation, Transition, Understanding, Integration', 'Elation, Understanding, Transition, Integration', 'Understanding, Elation, Transition, Integration'], ans: 1,
  why: ['Elation first.', 'Correct.', 'Transition precedes understanding.', 'Elation first.'], sol: 'Wow, ugh, I see, home.' });
Q({ cp: 'culture-shock', type: 'short', diff: 'moderate', q: 'Give one piece of advice for each culture-shock stage to a colleague relocating abroad.',
  model: '<ol><li>Elation: enjoy it, but start learning workplace norms.</li><li>Transition: name the frustration, keep routines, find a mentor and peers.</li><li>Understanding: ask why things are done as they are; practise new behaviours.</li><li>Integration: adopt useful local habits while keeping your own strengths.</li></ol>' });

/* ---------------- 6.4 Strategies and barriers ---------------- */
C({ id: 'cultural-strategies', week: 6, title: 'Cultural strategies, barriers and cultural intelligence', pri: 'High', prereq: ['cultural-dimensions'],
  src: 'Study guide W6 §6.2–6.3, §6.6 (stereotyping, ethnocentrism, parochialism; five strategies) · spg notes W6 · PYQs 2023 T1 Q12 Q42 Q44–49, 2024 T1 Q192 Q193, 2026 T2 Q8 Q10',
  oneLine: 'Strategies: dominance (impose), avoidance (ignore), compromise (each gives), accommodation (adopt theirs), synergy (blend strengths). Barriers: stereotyping, ethnocentrism (ours is superior), parochialism (unaware of other ways). CQ = competence + language + regional expertise, plus empathy.',
  misShort: 'Confusing compromise with synergy, or parochialism with ethnocentrism.',
  intu: R`<p>A German carmaker opens a plant in India. It can impose German practices, ignore the differences, meet halfway, adopt Indian practices, or build something new from both.</p><p>Five choices, five names. The question this concept answers: <b>which strategy or barrier is on display?</b></p>`,
  why: R`<ul><li>Strategy blocks (2024 T1 Q192–193, 2026 T2 Q8) and barriers (ethnocentrism: 2023 T1 Q45, Q49, 2026 T2 Q10).</li><li>Synergy (2023 T1 Q48), empathy (Q46), intercultural approach (Q42), managing a newcomer with EQ and CQ (Q12).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Cultural dominance</b> — the powerful side imposes its system everywhere.',
    '<b>Cultural avoidance</b> — act as if differences do not exist.',
    '<b>Cultural compromise</b> — each side gives up something.',
    '<b>Cultural accommodation</b> — adopt the other (local) culture’s system.',
    '<b>Cultural synergy</b> — combine strengths of both into a new approach.',
    '<b>Stereotyping</b> — generalising about a group; harmful when you refuse new information.',
    '<b>Ethnocentrism</b> — believing one’s own culture is superior and judging others by its standards.',
    '<b>Parochialism</b> — a narrow frame of reference; not aware that other ways exist.',
    '<b>Intercultural approach</b> — cross-cultural competence + language proficiency + regional expertise.',
    '<b>Empathy</b> — putting yourself in the other’s shoes when immersed in a new culture.',
    '<b>With a diverse team</b> — be aware of differences and adapt; with dissent, invite evidence and open discussion.']))
    + '<p><b>In words:</b> who adapts to whom decides the strategy; “ours is better” is ethnocentrism; “there is only our way” is parochialism.</p>',
  vis: M.table(['Strategy', 'Who adapts?', 'Example'], [
    ['Dominance', 'Others adapt to the powerful side', 'US HQ enforces its system globally'],
    ['Avoidance', 'Nobody — differences ignored', 'Never discussing working styles'],
    ['Compromise', 'Both give up some', 'Meetings half in each time zone'],
    ['Accommodation', 'Newcomer adapts to local', 'German subsidiary adopts Indian practices'],
    ['Synergy', 'Both create something new', 'Hybrid: consensus + rapid execution']], 'Five strategies for cultural creativity.'),
  ex: [
    M.ex('Introductory', R`<p>A US HQ with control over technology enforces its management system in every branch. Strategy?</p>`, R`<p><b>Dominance</b> (2024 T1 Q193).</p>`),
    M.ex('Standard', R`<p>A merged company builds a hybrid model combining one HQ’s consensus-building with the other’s rapid execution. Strategy?</p>`, R`<p><b>Synergy</b> (2026 T2 Q8). Compromise would trade away part of each; synergy creates something new.</p>`),
    M.ex('Exam-level', R`<p>A visiting manager says, “Our appraisal system is objectively the most effective; your local practices are inferior.” Barrier?</p>`, R`<p><b>Ethnocentrism</b> (2026 T2 Q10). Parochialism would be not knowing other systems exist; he knows and dismisses them.</p>`)],
  math: M.rule(R`<p><b>Impose → dominance · ignore → avoidance · trade → compromise · adopt theirs → accommodation · blend → synergy.</b></p><p><b>Superior → ethnocentrism · unaware → parochialism.</b></p>`)
    + M.why([['Extroversion in the intercultural approach', 'not one of the three attributes.'],
      ['Ethnocentrism plus stereotyping is constructive', 'both are barriers.'],
      ['Sympathy for putting yourself in their shoes', 'that is empathy.']]),
  conn: R`<p><b>At work:</b> post-merger integration plans name one of these strategies, explicitly or not.</p><p><b>Earlier:</b> TKI styles (Week 5) map neatly: dominance ~ competing, accommodation ~ accommodating, compromise ~ compromising, synergy ~ collaborating, avoidance ~ avoiding.</p>`,
  mis: M.ul(['Compromise for the hybrid model (2026 T2 Q8).', 'Parochialism for the superior-system manager (2026 T2 Q10).', 'Statement 2 in 2023 T1 Q45.']),
  exam: R`<p><b>How it is asked:</b> five-option strategy scenarios; barrier definitions. <b>Fast method:</b> ask “who changed?”.</p>`
});
Q({ cp: 'cultural-strategies', type: 'mcq', diff: 'easy', q: 'A Japanese firm in Pune adopts Indian holidays, local hiring practices and management norms. Strategy?', opts: ['Dominance', 'Avoidance', 'Accommodation', 'Synergy'], ans: 2,
  why: ['Not imposing.', 'Not ignoring.', 'Correct.', 'No blend.'], sol: 'Adopting local → accommodation.' });
Q({ cp: 'cultural-strategies', type: 'mcq', diff: 'moderate', q: 'A manager has never worked outside his city and assumes every team runs stand-ups exactly as his does. Barrier?', opts: ['Ethnocentrism', 'Parochialism', 'Stereotyping', 'Synergy'], ans: 1,
  why: ['He does not claim superiority.', 'Correct: narrow frame, unaware of alternatives.', 'No group generalisation.', 'Not a barrier.'], sol: 'Unaware → parochialism.' });
Q({ cp: 'cultural-strategies', type: 'msq', diff: 'moderate', q: 'Which are the three attributes of the intercultural approach?', opts: ['Cross-cultural competence', 'Extroversion', 'Language proficiency', 'Regional expertise'], ans: [0, 2, 3],
  why: ['Yes.', 'No.', 'Yes.', 'Yes.'], sol: 'Competence, language, regional expertise.' });
Q({ cp: 'cultural-strategies', type: 'short', diff: 'moderate', q: 'Distinguish cultural compromise from cultural synergy with an example of each.',
  model: '<p>Compromise: each side gives up part of its way — e.g. alternate meeting times between two time zones.</p><p>Synergy: combine both strengths into something new — e.g. a hybrid model with one side’s consensus-building and the other’s fast execution.</p>' });

/* ---------------- 6.5 Grooming ---------------- */
C({ id: 'grooming', week: 6, title: 'Personal grooming and hygiene', pri: 'Supporting', prereq: [],
  src: 'Study guide W6 (personal grooming: right time, right place, right dress; hygiene) · PYQ 2023 T1 Q50',
  oneLine: 'Right time, right place, right dress; groom yourself and your relationships (fairness, caring, sincerity, awareness, humour). Hygiene keeps the body clean and contributes to a healthy state of mind.',
  misShort: 'Thinking hygiene is only physical.',
  intu: R`<p>A candidate arrives on time, dressed for the firm’s culture, and is attentive and sincere. Before she speaks, the panel has formed an impression.</p><p>The question this concept answers: <b>what does professional grooming cover?</b></p>`,
  why: R`<ul><li>One item so far (2023 T1 Q50, hygiene). Low weight, but easy marks.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Personal grooming</b> — right time, right place, right dress; presenting yourself appropriately for the setting and culture.',
    '<b>Grooming others / relationships</b> — fairness, caring, sincerity, awareness, humour.',
    '<b>Hygiene</b> — maintaining the body’s cleanliness; it also contributes to a clean, healthy state of mind.']))
    + '<p><b>In words:</b> look, act and keep yourself in a way that fits the setting and respects others.</p>',
  vis: M.table(['Right…', 'Example'], [['Time', 'Arrive before the meeting starts'], ['Place', 'No personal calls in an open office'], ['Dress', 'Formal for a client pitch; smart casual for a team offsite']], 'The three “rights” of grooming.'),
  ex: [
    M.ex('Introductory', R`<p>True or false: hygiene contributes to a healthy state of mind.</p>`, R`<p><b>True</b> — both statements in 2023 T1 Q50 are correct.</p>`),
    M.ex('Standard', R`<p>Name the three “rights” of personal grooming.</p>`, R`<p>Right time, right place, right dress.</p>`),
    M.ex('Exam-level', R`<p>An engineer is technically strong but arrives late, dresses casually for a client visit and jokes about the client’s accent. Which grooming principles are broken?</p>`, R`<p>Right time; right dress; and grooming relationships — sincerity, awareness and respectful humour across cultures.</p>`)],
  math: M.rule(R`<p><b>Right time · right place · right dress. Hygiene = clean body + healthy mind.</b></p>`)
    + M.why([['Hygiene is only physical', 'the course links it to state of mind.'],
      ['Grooming = clothes only', 'it includes time, place and relationships.']]),
  conn: R`<p><b>Earlier:</b> dress is a nonverbal message (Week 2) and visible culture (6.1).</p>`,
  mis: M.ul(['“1 only” in 2023 T1 Q50.']),
  exam: R`<p><b>How it is asked:</b> two-statement true/false. <b>Fast method:</b> both statements are usually true.</p>`
});
Q({ cp: 'grooming', type: 'mcq', diff: 'easy', q: 'Which is <b>not</b> one of the three “rights” of personal grooming?', opts: ['Right time', 'Right place', 'Right salary', 'Right dress'], ans: 2,
  why: ['One of them.', 'One of them.', 'Correct.', 'One of them.'], sol: 'Time, place, dress.' });
Q({ cp: 'grooming', type: 'mcq', diff: 'easy', q: 'Hygiene, according to the course:', opts: ['Only keeps the body clean', 'Keeps the body clean and contributes to a healthy state of mind', 'Is unrelated to professional presence', 'Is a cultural dimension'], ans: 1,
  why: ['Incomplete.', 'Correct.', 'It is part of grooming.', 'No.'], sol: 'Both effects.' });
Q({ cp: 'grooming', type: 'mcq', diff: 'moderate', q: 'Which quality is part of grooming relationships with others?', opts: ['Sincerity', 'Seniority', 'Speed', 'Secrecy'], ans: 0,
  why: ['Correct.', 'Not a grooming quality.', 'No.', 'No.'], sol: 'Fairness, caring, sincerity, awareness, humour.' });
Q({ cp: 'grooming', type: 'short', diff: 'easy', q: 'What does personal grooming include beyond clothes?',
  model: '<p>Being at the right time and place, hygiene (body and mind), and grooming relationships through fairness, caring, sincerity, awareness and appropriate humour.</p>' });

/* ---------------- Variations ---------------- */
const G6 = id => 'gn3001-' + id;
VQ({ kind: 'counting', type: 'num', q: 'How many are <b>visible</b> culture? (1) Pongal celebrations. (2) Expectations about challenging seniors. (3) Kurta at work on Fridays. (4) Concept of personal space. (5) Language of signboards. (6) Views on overtime as loyalty.', ans: 3, tol: 0,
  sol: 'Visible: 1, 3, 5.', trap: 'Personal space feels physical, but it is a concept.' }, ['2025T2-234', '2026T1-20', '2026T2-9', '2023T1-43'].map(G6));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Culture includes beliefs, attitudes, values, assumptions and shared ways of doing things. (2) Culture is inherited genetically. (3) Nonverbal cues may carry more meaning than words across cultures. Which are correct?', opts: ['1 and 3', '1 and 2', '2 and 3', 'All three'], ans: 0,
  why: ['Correct.', '2 is false.', '2 is false.', '2 is false.'], sol: 'Culture is learned.', trap: 'None strong.' }, ['2024T2-100', '2023T1-47'].map(G6));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. Juniors never contradict seniors; B. Employees expect personal recognition; C. A partner wants written approval for every change; D. All meeting outcomes are emailed as minutes. Options: I. Power distance, II. Individualism, III. Uncertainty avoidance, IV. Low-context.', opts: ['A-I, B-II, C-III, D-IV', 'A-III, B-II, C-I, D-IV', 'A-I, B-IV, C-III, D-II', 'A-II, B-I, C-III, D-IV'], ans: 0,
  why: ['Correct.', 'A and C swapped.', 'B and D swapped.', 'A and B swapped.'], sol: 'Authority, credit, certainty, explicitness.', trap: 'C sounds hierarchical.' }, ['2025T3-232', '2025T3-233', '2026T2-7', '2024T2-109'].map(G6));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A team lead replies to good news in chat with a thumbs-up and a celebration GIF, saying nothing else. The style is closer to:', opts: ['High-context', 'Low-context'], ans: 0,
  why: ['Correct: meaning carried by symbols, not explicit words.', 'Low-context would spell it out.'], sol: 'Implicit, symbolic → high-context.', trap: 'Written medium pulls toward low-context.' }, ['2024T2-108', '2024T2-107', '2023T1-41'].map(G6));
VQ({ kind: 'written', type: 'short', q: 'A team has members from the USA, Germany, India and Japan. Classify them by context (Erin Meyer) and give two meeting practices that work for all four.',
  model: '<p>Low-context: USA, Germany. High-context: India, Japan.</p><p>Practices: send agendas in advance and circulate written decisions afterwards (serves low-context); invite input by name or in writing and allow time for relationship-building (serves high-context).</p>',
  sol: 'Classify, then design for both ends.', trap: 'Only describing countries.' }, ['2023T3-198', '2023T3-199'].map(G6));
VQ({ kind: 'sequence', type: 'mcq', q: 'An analyst in Tokyo writes in her diary: (P) “I finally get why meetings are so quiet.” (Q) “Everything is amazing!” (R) “I now prefer bento to my old lunches.” (S) “Why does nobody say what they mean?” Order?', opts: ['Q, S, P, R', 'Q, P, S, R', 'S, Q, P, R', 'Q, S, R, P'], ans: 0,
  why: ['Correct.', 'Frustration precedes understanding.', 'Elation first.', 'Understanding precedes integration.'], sol: 'Elation, transition, understanding, integration.', trap: 'P and S swap.' }, ['2024T1-194', '2024T2-101', '2026T2-11'].map(G6));
VQ({ kind: 'counting', type: 'num', q: 'How many signal <b>integration</b>? (1) Celebrating local festivals with neighbours. (2) Daily complaints about the food. (3) Feeling out of place on a trip home after five years. (4) Excitement at seeing the city for the first time. (5) Speaking the local language at work.', ans: 3, tol: 0,
  sol: 'Integration: 1, 3, 5.', trap: 'Statement 3 feels negative.' }, ['2026T1-19'].map(G6));
VQ({ kind: 'written', type: 'short', q: 'A colleague is relocating from Bengaluru to Berlin. Outline the culture-shock stages she may face and one CQ-building action per stage.',
  model: '<ol><li>Elation — read about German workplace norms early.</li><li>Transition — expect blunt feedback; reframe it as about ideas; find a mentor and peers.</li><li>Understanding — ask why punctuality and documentation matter.</li><li>Integration — adopt useful norms (written follow-ups) while keeping relationship strengths.</li></ol>',
  sol: 'Stage + action.', trap: 'Only listing stages.' }, ['2023T3-200', '2025T2-231'].map(G6));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Two merged banks keep their own IT systems but each agrees to give up its preferred approval workflow for a middle version neither loves. Strategy?', opts: ['Synergy', 'Compromise', 'Accommodation', 'Dominance'], ans: 1,
  why: ['Nothing new from combined strengths.', 'Correct: both gave up something.', 'Neither adopts the other’s.', 'No imposition.'], sol: 'Each gives up → compromise.', trap: 'Synergy also involves both sides.' }, ['2026T2-8', '2023T1-48', '2024T1-192', '2024T1-193'].map(G6));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'An HQ executive, told that the overseas team values indirect feedback, replies that HQ’s direct method is “simply the right way” and other approaches are backward. Barrier?', opts: ['Parochialism', 'Ethnocentrism', 'Stereotyping', 'Avoidance'], ans: 1,
  why: ['He knows other ways exist.', 'Correct: superiority.', 'No group generalisation.', 'A strategy.'], sol: 'Superior → ethnocentrism.', trap: 'Parochialism.' }, ['2026T2-10', '2023T1-45', '2023T1-49'].map(G6));
VQ({ kind: 'scenario', type: 'mcq', q: 'A new team member from another country questions the team’s decision process, and tension rises. With high EQ and CQ, the leader should:', opts: ['Proceed and ignore the comment', 'Ask for their reasoning and evidence, then open a team discussion of approaches', 'Remind them they are new', 'Tell them privately to conform'], ans: 1,
  why: ['Suppresses a perspective.', 'Correct.', 'Ethnocentric.', 'Dominance.'], sol: 'Invite, then discuss.', trap: 'Option 4 sounds tactful.' }, ['2023T1-12', '2023T1-44', '2023T1-46'].map(G6));
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>not</b> part of the intercultural approach?', opts: ['Language proficiency', 'Regional expertise', 'Cross-cultural competence', 'A charismatic personality'], ans: 3,
  why: ['Part of it.', 'Part of it.', 'Part of it.', 'Correct: not an attribute.'], sol: 'Three attributes only.', trap: 'Charisma sounds useful.' }, ['2023T1-42'].map(G6));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Hygiene is about body cleanliness. (2) Hygiene contributes to a healthy state of mind. (3) Grooming covers right time, right place and right dress. Which are correct?', opts: ['All three', '1 and 3 only', '1 only', '2 and 3 only'], ans: 0,
  why: ['Correct.', '2 is also true.', '2, 3 also true.', '1 is also true.'], sol: 'All true.', trap: 'Dropping 2.' }, ['2023T1-50'].map(G6));

/* ---------------- Glossary and flashcards ---------------- */
[['Culture', 'Shared, learned beliefs, attitudes, values, assumptions and ways of doing things.'],
 ['Iceberg principle', 'Visible: language, food, dress, festivals. Invisible: attitudes to work, time, privacy, authority.'],
 ['Power distance (Equal/Unequal)', 'How authority and hierarchy are treated.'],
 ['Uncertainty avoidance (Certainty/Ambiguity)', 'Need for rules, detail and certainty.'],
 ['High-context', 'Implicit, relational, nonverbal meaning.'],
 ['Low-context', 'Explicit, direct, written.'],
 ['Culture shock stages', 'Elation, Transition, Understanding, Integration.'],
 ['Cultural dominance', 'Imposing one’s system.'],
 ['Cultural accommodation', 'Adopting the local system.'],
 ['Cultural synergy', 'Blending strengths into something new.'],
 ['Ethnocentrism', 'Believing one’s culture is superior.'],
 ['Parochialism', 'A narrow frame; unaware of other ways.'],
 ['Intercultural approach', 'Cross-cultural competence, language proficiency, regional expertise.'],
 ['Personal grooming', 'Right time, right place, right dress; hygiene; grooming relationships.']].forEach(([t, d]) => GLOSS(t, d, 6));
[['Traditions and festivals — visible?', 'Yes.'],
 ['Privacy, tempo of life — visible?', 'No.'],
 ['Formal titles for seniors — dimension?', 'Equal/Unequal (power distance).'],
 ['SOPs and approvals before change', 'Uncertainty avoidance.'],
 ['Individual credit vs team credit', 'Individualism vs collectivism.'],
 ['Emoji to show appreciation', 'High-context.'],
 ['Excitement in a new country', 'Elation (honeymoon).'],
 ['Frustration at month four', 'Transition.'],
 ['Adopting local habits', 'Integration.'],
 ['Subsidiary adopts local system', 'Accommodation.'],
 ['Hybrid of both HQs’ strengths', 'Synergy.'],
 ['“Our system is superior”', 'Ethnocentrism.']].forEach(([f, b]) => CARD(f, b, 6));
