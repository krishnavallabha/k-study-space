/* ===================== SPG WEEK 8 — Creativity and thinking skills ===================== */
WEEK({ course: 'gn3001', n: 8, title: 'Creativity, Critical Thinking and Design Thinking',
  blurb: 'Creativity is a learnable, iterative and partly social process, not a flash from nowhere. It runs from defining the problem to implementing the idea, and is fed by curiosity, intersections and attitudes such as willingness to be wrong. Critical thinking judges ideas against evidence; design thinking frames problems from users’ viewpoints.',
  topics: [
    { title: '8.1 Creativity: process, people and tools', cs: ['creativity'] },
    { title: '8.2 Critical and design thinking', cs: ['thinking-skills'] }] });

/* ---------------- 8.1 Creativity ---------------- */
C({ id: 'creativity', week: 8, title: 'The creative process, creative people and the tools of creativity', pri: 'High', prereq: [],
  src: 'Study guide W8 (creativity process; attitudes; curiosity; intersections; biomimicry; IDEO shopping cart) · spg notes W8 · PYQs 2023 T1 Q31–33 Q36–40',
  oneLine: 'Process: Define → Collect information → Redefine → Generate ideas → Design the solution → Evaluate feasibility → Implement; iterative, not linear. Creative people: domain knowledge, intrinsic motivation, willingness to take risks; supported by others. Tools: curiosity, intersections, biomimicry.',
  misShort: 'Thinking creativity is linear, always successful, or comes out of nowhere.',
  intu: R`<p>IDEO was asked to redesign the supermarket trolley in five days. The team did not sit and wait for inspiration. They watched shoppers, talked to staff and repair technicians, worried about children falling out, built rough prototypes, threw most away and iterated.</p><p>The question this concept answers: <b>how does creativity actually happen, and what feeds it?</b></p>`,
  why: R`<ul><li>Eight of the ten W8 items in the 2023 T1 paper: IDEO (Q31), creative people (Q32–33), curiosity (Q36), intersections (Q37), process (Q38–39), biomimicry (Q40).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Creative process</b> — Define → Collect information → Redefine → Generate ideas → Design the solution → Evaluate feasibility → Implement (and diffuse). Iterative: you loop back.',
    '<b>Attitudes</b> — willingness to be wrong, to consider other perspectives, to iterate. Not every effort succeeds.',
    '<b>Creative people</b> — know their domain deeply; are willing to take new and potentially risky approaches; are intrinsically motivated (love the work); are supported, aided and challenged by others — creativity is partly social.',
    '<b>Curiosity</b> — about ideas, people and possibilities: openness, seeking knowledge, noticing what is not obvious. Its opposite: settling for what is known.',
    '<b>Intersections</b> — new ideas from combining different fields and experiences (Steve Jobs: calligraphy + Zen + computers).',
    '<b>Biomimicry</b> — copying a specific mechanism from nature (whale-fin turbine blades, Velcro from burrs, sharkskin swimsuits).',
    '<b>Myth</b> — creativity is not an inadvertent process where ideas arrive out of nowhere.']))
    + '<p><b>In words:</b> understand the problem, soak up information, generate lots, build, test, loop.</p>',
  vis: M.flow([{ t: 'Define' }, { t: 'Collect information' }, { t: 'Redefine' }, { t: 'Generate ideas', hl: true }, { t: 'Design solution' }, { t: 'Evaluate feasibility' }, { t: 'Implement' }], { cap: 'The creative process — iterative: loop back whenever evaluation fails.', loop: true }),
  ex: [
    M.ex('Introductory', R`<p>True or false: creativity is an inadvertent process where ideas appear out of nowhere.</p>`, R`<p><b>False</b> (2023 T1 Q39).</p>`),
    M.ex('Standard', R`<p>Steve Jobs combined a typography class and Zen meditation into a passion for elegant computing. Which tool?</p>`, R`<p><b>Intersections</b> (2023 T1 Q37).</p>`),
    M.ex('Exam-level', R`<p>(1) Creativity is always linear. (2) All creative efforts must succeed. (3) Implementation and diffusion are the final stages of the iterative process. Which are true?</p>`, R`<p><b>3 only</b> (2023 T1 Q38).</p>`)],
  math: M.rule(R`<p><b>Iterative · social · effortful · risky. “Always”, “must”, “out of nowhere” → false.</b></p>`)
    + M.why([['Creative people avoid risk', 'they take on risky new approaches.'],
      ['Creativity is solitary', 'it is partly social.'],
      ['Any nature-inspired item is biomimicry', 'the paper keys only copies of a specific mechanism.']]),
  conn: R`<p><b>Earlier:</b> team synergy (Week 1) and psychological safety make the social side of creativity work.</p><p><b>Next:</b> critical thinking evaluates the ideas creativity produces (8.2).</p>`,
  mis: M.ul(['Statement 2 in 2023 T1 Q32.', 'Curiosity for the Jobs scenario.', 'Statement 1 in Q38.']),
  exam: R`<p><b>How it is asked:</b> statements, true/false, tool-from-scenario. <b>Fast method:</b> absolute words are false; “combining different experiences” → intersections.</p>`
});
Q({ cp: 'creativity', type: 'mcq', diff: 'easy', q: 'Which step comes right after “Collect information” in the course’s creative process?', opts: ['Generate ideas', 'Redefine', 'Implement', 'Evaluate feasibility'], ans: 1,
  why: ['Comes after redefining.', 'Correct.', 'Last.', 'Later.'], sol: 'Define → Collect → Redefine → Generate → Design → Evaluate → Implement.' });
Q({ cp: 'creativity', type: 'mcq', diff: 'moderate', q: 'A chef who studied chemistry invents a dish using lab techniques. Which tool of creativity?', opts: ['Biomimicry', 'Intersections', 'Secondary research', 'Critical thinking'], ans: 1,
  why: ['Not nature.', 'Correct: two fields combined.', 'No.', 'Evaluation, not generation.'], sol: 'Combining fields → intersections.' });
Q({ cp: 'creativity', type: 'msq', diff: 'moderate', q: 'Which are attitudes that support creativity?', opts: ['Willingness to be wrong', 'Considering other perspectives', 'Willingness to iterate', 'Insisting the first idea is final'], ans: [0, 1, 2],
  why: ['Yes.', 'Yes.', 'Yes.', 'Blocks iteration.'], sol: 'Wrong, perspectives, iterate.' });
Q({ cp: 'creativity', type: 'short', diff: 'moderate', q: 'Using the IDEO shopping-cart project, explain why creativity is iterative and social.',
  model: '<p>The team observed shoppers and staff (social input), generated many ideas, built rough prototypes, tested and discarded most, and looped back to redefine problems such as child safety and theft. The final cart came from repeated cycles and team critique, not one inspired moment.</p>' });

/* ---------------- 8.2 Thinking skills ---------------- */
C({ id: 'thinking-skills', week: 8, title: 'Critical thinking and design thinking', pri: 'Medium', prereq: ['creativity'],
  src: 'Study guide W8 (critical thinking; design thinking) · PYQs 2023 T1 Q34 Q35',
  oneLine: 'Critical thinking = analysing facts, evidence, observations and arguments to form a judgement. Design thinking = defining, framing and solving problems from users’ viewpoints (empathise, define, ideate, prototype, test).',
  misShort: 'Reading design thinking as “thinking about design”.',
  intu: R`<p>A team lead hears “users hate the new dashboard.” Critical thinking asks: how many users, what evidence, compared with what? Design thinking asks: what are users trying to do, and where does the dashboard get in the way?</p><p>The question this concept answers: <b>how do you judge an idea, and how do you frame a problem around people?</b></p>`,
  why: R`<ul><li>Definition items (2023 T1 Q34, Q35).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Critical thinking</b> — analysis of available facts, evidence, observations and arguments to form a judgement.',
    '<b>Convergent thinking</b> — narrowing options to one best answer. <b>Divergent/creative thinking</b> — generating many options.',
    '<b>Design thinking</b> — defining, framing and addressing problems from users’ viewpoints; commonly empathise → define → ideate → prototype → test.']))
    + '<p><b>In words:</b> critical thinking weighs evidence; design thinking starts from the user.</p>',
  vis: M.table(['Thinking', 'Key move'], [['Critical', 'Weigh evidence and arguments → judgement'], ['Creative/divergent', 'Generate many options'], ['Convergent', 'Narrow to one'], ['Design', 'Frame the problem from users’ viewpoint']], 'Kinds of thinking.'),
  ex: [
    M.ex('Introductory', R`<p>Analysing facts, evidence and arguments to form a judgement is…</p>`, R`<p><b>Critical thinking</b> (2023 T1 Q34).</p>`),
    M.ex('Standard', R`<p>Best description of design thinking?</p>`, R`<p>Defining, framing and addressing problems from <b>users’ viewpoints</b> (2023 T1 Q35).</p>`),
    M.ex('Exam-level', R`<p>A bank team shadows elderly customers at ATMs before sketching a new interface. Which thinking, and why not critical thinking?</p>`, R`<p><b>Design thinking</b>: it frames the problem from users’ experience. Critical thinking would evaluate evidence for a claim.</p>`)],
  math: M.rule(R`<p><b>Evidence → critical. Users → design. Many ideas → divergent. One answer → convergent.</b></p>`)
    + M.why([['Design thinking = thinking about design', 'it is user-centred problem framing.'],
      ['Critical thinking = criticising', 'it is reasoned judgement.']]),
  conn: R`<p><b>Earlier:</b> the creative process (8.1) alternates divergent generation with critical evaluation.</p>`,
  mis: M.ul(['Convergent thinking for Q34.', '“Thinking about the field of design” for Q35.']),
  exam: R`<p><b>How it is asked:</b> definitions. <b>Fast method:</b> match the key noun — evidence or users.</p>`
});
Q({ cp: 'thinking-skills', type: 'mcq', diff: 'easy', q: 'Checking whether a viral claim is supported by data before sharing it is:', opts: ['Critical thinking', 'Design thinking', 'Divergent thinking', 'Biomimicry'], ans: 0,
  why: ['Correct.', 'Not user framing.', 'Not generating options.', 'No.'], sol: 'Evidence → critical.' });
Q({ cp: 'thinking-skills', type: 'mcq', diff: 'moderate', q: 'Which step order is typical of design thinking?', opts: ['Prototype, empathise, define, test, ideate', 'Empathise, define, ideate, prototype, test', 'Define, test, ideate, empathise, prototype', 'Ideate, prototype, empathise, define, test'], ans: 1,
  why: ['Wrong.', 'Correct.', 'Wrong.', 'Wrong.'], sol: 'Start with users.' });
Q({ cp: 'thinking-skills', type: 'mcq', diff: 'moderate', q: 'Brainstorming 50 possible app names is mainly:', opts: ['Convergent thinking', 'Divergent thinking', 'Critical thinking', 'Concrete thinking'], ans: 1,
  why: ['Narrowing comes later.', 'Correct.', 'Evaluation.', 'Literal thinking.'], sol: 'Many options → divergent.' });
Q({ cp: 'thinking-skills', type: 'short', diff: 'moderate', q: 'Contrast critical thinking and design thinking with one example each.',
  model: '<p>Critical thinking weighs facts and arguments to reach a judgement — e.g. checking the data behind a claim that a feature increased sales. Design thinking frames problems from the user’s viewpoint — e.g. observing customers struggle at a checkout before redesigning it.</p>' });

/* ---------------- Variations ---------------- */
const G8 = id => 'gn3001-' + id;
VQ({ kind: 'statements', type: 'mcq', q: '(1) Creative people usually know their field deeply. (2) Creative people avoid risky approaches. (3) Intrinsic motivation drives creative work. (4) Creativity is partly social. Which are correct?', opts: ['1, 3 and 4', '1, 2 and 3', '2 and 4', 'All four'], ans: 0,
  why: ['Correct.', '2 is false.', '2 is false.', '2 is false.'], sol: 'They take risks.', trap: 'Statement 2.' }, ['2023T1-32', '2023T1-33'].map(G8));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Creativity loops back when ideas fail evaluation. (2) Every creative effort ends in success. (3) Ideas usually appear out of nowhere. (4) Implementation and diffusion come last.', opts: ['1 and 4', '1, 2 and 4', '3 and 4', '1 only'], ans: 0,
  why: ['Correct.', '2 is false.', '3 is false.', '4 is also true.'], sol: 'Iterative; not always successful; not out of nowhere.', trap: 'Absolute words.' }, ['2023T1-38', '2023T1-39'].map(G8));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'An engineer who played the tabla designs a rhythm-based app to teach coding loops. Tool of creativity?', opts: ['Curiosity', 'Intersections', 'Biomimicry', 'Critical thinking'], ans: 1,
  why: ['Present, but the defining move is combining fields.', 'Correct.', 'Not nature.', 'Evaluation.'], sol: 'Music + coding → intersections.', trap: 'Curiosity.' }, ['2023T1-37', '2023T1-36'].map(G8));
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>not</b> biomimicry?', opts: ['Bullet-train nose shaped like a kingfisher’s beak', 'Self-cleaning paint copying the lotus leaf', 'A logo shaped like a leaf', 'Termite-mound-inspired ventilation'], ans: 2,
  why: ['Biomimicry.', 'Biomimicry.', 'Correct: decoration, no mechanism copied.', 'Biomimicry.'], sol: 'Biomimicry copies how nature works, not how it looks.', trap: 'All mention nature.' }, ['2023T1-40'].map(G8));
VQ({ kind: 'scenario', type: 'mcq', q: 'A team redesigning hospital wheelchairs considers patient comfort, porter manoeuvrability, infection cleaning and cost. This mirrors which case?', opts: ['IDEO shopping cart', 'Dunkin’ cost leadership', 'Tata values', 'Southwestern case'], ans: 0,
  why: ['Correct: multiple user and operator concerns.', 'Strategy, not design.', 'Values.', 'Communication case.'], sol: 'IDEO considered all stakeholder issues.', trap: 'None.' }, ['2023T1-31'].map(G8));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. Weighing evidence; B. Framing from users’ viewpoint; C. Many options; D. One best answer. I. Divergent; II. Critical; III. Convergent; IV. Design.', opts: ['A-II, B-IV, C-I, D-III', 'A-IV, B-II, C-I, D-III', 'A-II, B-IV, C-III, D-I', 'A-III, B-IV, C-I, D-II'], ans: 0,
  why: ['Correct.', 'A and B swapped.', 'C and D swapped.', 'A and D swapped.'], sol: 'Definitions.', trap: 'Convergent vs critical.' }, ['2023T1-34', '2023T1-35'].map(G8));

/* ---------------- Glossary and flashcards ---------------- */
[['Creative process', 'Define, Collect information, Redefine, Generate ideas, Design the solution, Evaluate feasibility, Implement.'],
 ['Curiosity', 'Openness to ideas, people and possibilities.'],
 ['Intersections', 'New ideas from combining different fields.'],
 ['Biomimicry', 'Copying a mechanism from nature.'],
 ['Critical thinking', 'Analysing evidence and arguments to form a judgement.'],
 ['Design thinking', 'Framing and solving problems from users’ viewpoints.']].forEach(([t, d]) => GLOSS(t, d, 8));
[['Creativity is linear?', 'No: iterative.'],
 ['Creativity comes out of nowhere?', 'False.'],
 ['Creativity is partly social?', 'True.'],
 ['Steve Jobs: typography + Zen', 'Intersections.'],
 ['Opposite of curiosity', 'Settling for what is known.'],
 ['Velcro', 'Biomimicry (burrs).'],
 ['Evidence → judgement', 'Critical thinking.']].forEach(([f, b]) => CARD(f, b, 8));
