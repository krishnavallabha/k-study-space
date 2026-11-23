/* ===================== SE WEEK 1 — Deconstructing the software development process ===================== */
WEEK({ course: 'cs3001', n: 1, title: 'Deconstructing the Software Development Process',
  blurb: 'Software is built, not written. A big system is a team of components that talk through interfaces. It is built for clients, and it moves through a lifecycle: requirements, design, development, testing, maintenance. Teams organise that lifecycle with a plan-and-document model (Waterfall, Prototype, Spiral) or with Agile.',
  topics: [
    { title: '1.1 Components, interfaces and clients', cs: ['components', 'clients'] },
    { title: '1.2 The lifecycle', cs: ['sdlc', 'testing-levels'] },
    { title: '1.3 Process models', cs: ['pd-models', 'agile'] }] });

/* ---------------- 1.1 Components and interfaces ---------------- */
C({ id: 'components', week: 1, title: 'Components and interfaces', pri: 'High', prereq: [],
  src: 'Revision notes W1 §1.1, §1.3 · Study guide ch.1 §1.1, §1.3.1 · PYQs 2024 T2 Q13, 2025 T2 Q149, 2025 T3 Q4, 2026 T1 Q3, 2026 T2 Q20',
  oneLine: 'A system = components that hide their insides behind interfaces; freeze the interface and the inside can change freely.',
  misShort: 'Thinking an interface reveals the implementation, or that nothing can change until the interface changes.',
  intu: R`<p>Picture a small startup, QuickBasket, selling groceries online.</p>
<p>At first three friends write the whole app in one big file. Everyone knows every line.</p>
<p>A year later there are twelve developers in Chennai, Bangalore and Delhi.</p>
<p>One Monday, Priya in Chennai changes <code>calculate_total(cart)</code> to <code>calculate_total(cart, coupon)</code>.</p>
<p>That night Rahul’s checkout page in Delhi crashes. He never touched his own code.</p>
<p>So here is the question this concept answers: <b>how can twelve people build one system without breaking each other?</b></p>
<p>You might think the answer is “everyone should understand all the code”.</p>
<p>It is the opposite. Each team should need to know <i>as little as possible</i> about the others.</p>
<p>They only agree on the doorways between their parts. Those doorways are <b>interfaces</b>.</p>`,
  why: R`<ul><li>Interfaces appear in five of the eleven papers: 2024 T2 Q13, 2025 T2 Q149, 2025 T3 Q4 and 2026 T2 Q20 are “which statements are correct” MSQs; 2026 T1 Q3 is the Priya story above (“which concept would have prevented this?”).</li><li>The same idea returns in Week 5 (interfaces are one of the four design outcomes) and Week 8 (Interface Segregation, Dependency Inversion, Facade).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Component (module)</b> — a separately addressable, self-contained part of a big system that does one well-defined job. <i>In plain words: one “department” of the software, like Payments.</i>',
    '<b>Implementation</b> — the code inside a component. <i>How it actually does the job.</i>',
    '<b>Interface</b> — the precise description of what a component offers: which requests are allowed, what inputs they take, and the format of the outputs. <i>The doorway and its rules, not the room behind it.</i>',
    '<b>Developer documentation</b> — notes explaining how each component is meant to be used. <i>The sign on the doorway.</i>',
    '<b>Distributed development</b> — many developers or teams building different components at the same time, often in different places.',
    'Example from the course: Amazon = Inventory Management + Payment Gateway + … — the shopper sees one website, but inside it is a federation of components.']))
    + '<p><b>In words:</b> a component is a box; the interface is the label on the box that says what you may put in and what comes out; the implementation is whatever happens inside.</p>',
  vis: M.graph([
    { id: 'c', t: 'Checkout\n(Delhi team)', x: 90, y: 60, w: 130 },
    { id: 'p', t: 'Payments\n(Chennai team)', x: 430, y: 60, w: 140, hl: true },
    { id: 'i', t: 'Inventory\n(Bangalore team)', x: 430, y: 180, w: 150 },
    { id: 'b', t: 'Bank API v1 → v2\n(inside Payments)', x: 430, y: 290, w: 170, fill: 'var(--line2)' }],
    [{ a: 'c', b: 'p', lab: 'pay(order_id, amount) → status' }, { a: 'c', b: 'i', lab: 'reserve(item, qty) → ok?' }, { a: 'p', b: 'b', lab: 'hidden', dash: true }],
    { cap: 'Checkout only knows the two interfaces (arrows). The bank switch inside Payments is invisible to it.', label: 'components and interfaces' }),
  ex: [
    M.ex('Introductory', R`<p>The Payments interface is <code>pay(order_id, amount) → {status, txn_id}</code>.</p><p>The Chennai team replaces the old bank connection with a new, faster one. Does the Delhi checkout code need to change?</p>`,
      R`<ol><li>Checkout calls <code>pay(order_id, amount)</code> and reads <code>status</code>.</li><li>The new bank code lives <i>inside</i> Payments. The call and the reply look exactly the same.</li><li>So checkout changes nothing. ✔</li></ol>
<p><b>Now suppose</b> the Chennai team instead changes the interface to <code>pay(order_id, amount, currency)</code>.</p>
<ol><li>Every existing call passes only two arguments.</li><li>Every caller now breaks, in every city, overnight.</li></ol>
<p><b>The mechanism:</b> changing the <i>inside</i> is free; changing the <i>doorway</i> breaks everyone who uses it. That is exactly what happened to Rahul.</p>`),
    M.ex('Standard', R`<p>Three teams build a seller portal. Before any code is written they finalise interface specifications. Mark each statement True or False.</p><ol type="a"><li>The specs say which requests each component accepts and how its output is formatted.</li><li>The specs show the source code of each component so others can reuse it.</li><li>Teams can now build their components in parallel.</li><li>Once the specs are fixed, no team may change its own code until the specs change.</li></ol>`,
      R`<ol type="a"><li><b>True.</b> That is the definition of an interface.</li><li><b>False.</b> An interface hides the implementation. Showing the code is the opposite of its job.</li><li><b>True.</b> Each team only needs the others’ interfaces, not their code.</li><li><b>False — and this is the classic decoy.</b> The reverse is true: as long as the interface stays the same, the implementation can change freely.</li></ol>`),
    M.ex('Exam-level', R`<p><b>How many</b> of the following are correct about interface definitions in distributed development?</p><ol><li>They specify what actions a module can perform.</li><li>They explain how the module is implemented internally.</li><li>They let one team rewrite its internals without breaking other teams.</li><li>They force all teams to use the same programming language.</li><li>They remove the need for developer documentation.</li></ol>`,
      R`<ol><li>Correct — “what actions” = what requests are allowed.</li><li>Wrong — interfaces say <i>what</i>, never <i>how</i>.</li><li>Correct — that is the whole payoff.</li><li>Wrong — an interface is a contract about requests and outputs; the language behind it is irrelevant (2025 T2 Q149 used this decoy).</li><li>Wrong — documentation and interfaces are the course’s <i>two</i> essentials for distributed work; one does not replace the other.</li></ol><p><b>Answer: 2.</b></p>`)],
  math: M.rule(R`<p><b>An interface is a contract: allowed requests + inputs + output format.</b></p><p><b>Freeze the interface → the implementation behind it may change freely, and every team can work in parallel.</b></p>`)
    + M.why([['“Interfaces reveal the implementation”', 'no — they deliberately hide it; callers see only requests and replies.'],
      ['“The implementation cannot change until the interface changes”', 'backwards — the implementation can change any time the interface stays the same.'],
      ['“Every developer must know every component”', 'that would recreate the complexity components exist to remove.'],
      ['“All teams must use the same language”', 'nothing in an interface fixes the language; only the requests and outputs.'],
      ['“Unit testing would have prevented Priya’s break”', 'testing finds the break later; the concept that prevents it is a fixed interface definition (2026 T1 Q3).']]),
  conn: R`<p><b>At work:</b> this is the REST API contract you agree with another team, or the function signature you promise not to change in a library release.</p>
<p><b>Earlier:</b> this is the first idea of the course — software is a team of cooperating components.</p>
<p><b>Later:</b> Week 5 lists interfaces as one of the four outcomes of design and asks for low coupling between components. Week 8 refines interfaces with SOLID (Interface Segregation, Dependency Inversion) and the Facade and Adapter patterns.</p>`,
  mis: M.ul(['“They reveal the complete implementation details” — appeared as the false option in 2026 T2 Q20 and 2025 T3 Q4.',
    '“Until the interface is changed, it does not allow any changes to the code implementation” — false option in 2024 T2 Q13 (the true statement is the reverse).',
    '“It ensures all teams use the same programming language” / “eliminates the need for documentation” — false options in 2025 T2 Q149.',
    'Choosing Unit testing, Acceptance testing or Refactoring when the story is “one developer changed a function’s parameters and broke another’s code” (2026 T1 Q3).']),
  exam: R`<p><b>How it is asked:</b> a distributed-team scenario, then an MSQ “which statements about interfaces are correct”. Usually three options are true and one is false.</p>
<p><b>Fast method:</b> read each option and ask “does it talk about <i>what</i> the component offers, or <i>how</i> it works inside?”</p>
<ul><li>What / allowed requests / output format / parallel work / implementation can change → <b>true</b>.</li><li>How / internal details / same language / no documentation / implementation frozen → <b>false</b>.</li></ul>`
});
Q({ cp: 'components', type: 'mcq', diff: 'easy', q: 'Which statement best describes an interface between two components?', opts: ['The source code of the component, shared so others can reuse it', 'The precise description of allowed requests, their inputs and the format of outputs', 'A rule that all components must be written in one language', 'The documentation that replaces testing'], ans: 1,
  why: ['Source code is the implementation, which the interface hides.', 'Correct: an interface is a contract about requests and outputs.', 'Interfaces fix requests and outputs, not the language.', 'Documentation and testing are separate activities; neither is the interface.'],
  sol: 'Definition recall: interface = what you may ask a component and what it gives back.' });
Q({ cp: 'components', type: 'msq', diff: 'moderate', q: 'A team keeps the interface <code>search(query) → list_of_products</code> unchanged but rewrites the search code to use a faster index. Which are true?', opts: ['Callers of <code>search</code> must be rewritten', 'Callers need no change', 'This is only possible because the implementation is hidden behind the interface', 'The interface had to be changed first'], ans: [1, 2],
  why: ['The call and its reply are unchanged, so callers are untouched.', 'Correct: same doorway, same rules.', 'Correct: hiding the inside is what makes the rewrite safe.', 'Reversed: the interface stayed fixed; only the inside changed.'],
  sol: 'Same interface ⇒ callers unaffected; the rewrite is internal.' });
Q({ cp: 'components', type: 'mcq', diff: 'moderate', q: 'Developer A renames a parameter and adds a new required argument to a shared function. Developer B’s module stops working. Which concept, applied earlier, would have prevented this?', opts: ['Beta testing', 'A fixed interface definition agreed by both', 'Refactoring', 'Code smells'], ans: 1,
  why: ['Beta testing finds problems with real users; it does not prevent the break.', 'Correct: an agreed interface would have made the change a visible contract violation.', 'Refactoring changes internals without changing behaviour; here the interface itself changed.', 'A code smell is a warning sign in code, not a contract between teams.'],
  sol: 'Changing the parameters changes the interface. The protection is agreeing on (and not silently changing) the interface.' });
Q({ cp: 'components', type: 'short', diff: 'moderate', q: 'In 3–4 lines: why does splitting a big system into components with well-defined interfaces let a distributed team work faster?',
  model: '<p>Each team needs to know only the other components’ interfaces (what requests they accept and what they return), not their code.</p><p>So teams can build in parallel, in different places, without waiting for each other.</p><p>Each team can also change its own implementation without breaking anyone, as long as its interface stays the same.</p>' });

/* ---------------- 1.1 Clients ---------------- */
C({ id: 'clients', week: 1, title: 'The three types of client', pri: 'High', prereq: ['components'],
  src: 'Revision notes W1 §1.2 · Study guide ch.1 §1.2.2 · PYQs 2023 T2 Q2, 2024 T1 Q39, 2024 T2 Q2, 2024 T3 Q2, 2025 T1 Q30, 2025 T2 Q130, 2025 T3 Q2, 2026 T2 Q9',
  oneLine: 'External user (person outside the developing company), internal user (person inside it), software client (another program).',
  misShort: 'Calling the developing company’s own staff “external”, or calling a payment gateway a user.',
  intu: R`<p>A software house in Pune builds three things this year.</p>
<p>First, a mobile banking app. Thousands of the <i>bank’s customers</i> will use it.</p>
<p>Second, a leave-tracking portal for the software house’s <i>own employees</i>.</p>
<p>Third, a spell-check web service. No human opens it. <i>Other apps</i> send it text and get corrections back.</p>
<p>All three have someone the software is built for. All three are “clients”.</p>
<p>But they are very different. The first are strangers. The second are colleagues. The third is not even a person.</p>
<p>The question this concept answers: <b>who exactly is the client in a given scenario?</b></p>
<p>You might think “client” means “the paying customer”. It doesn’t. A client can be your own colleague, or a piece of software.</p>`,
  why: R`<ul><li>The single most repeated family in the papers: eight papers ask it (2023 T2, 2024 T1, 2024 T2, 2024 T3, 2025 T1, 2025 T2, 2025 T3, 2026 T2).</li><li>The newest papers ask it as a <b>four-part match</b> (2025 T3 Q2, 2026 T2 Q9): one wrong label and the whole option is wrong.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Requirements</b> — the goals the implemented system should achieve. They must cater to the needs of the clients.',
    '<b>Client</b> — whoever or whatever the system is being built for and interacts with it.',
    '<b>External user</b> — a person <i>outside</i> the developing organisation who uses the software. <i>Bank customers using a banking app.</i>',
    '<b>Internal user</b> — a person or team <i>inside</i> the developing company who uses the software. <i>Employees using the company’s own HR portal.</i>',
    '<b>Software client</b> — another program or component that uses the system through an interface. <i>An e-commerce site calling a payment gateway.</i>']))
    + '<p><b>In words:</b> first ask “is it a human or a program?”. If human, ask “inside or outside the company that is building this?”.</p>',
  vis: M.graph([
    { id: 'q', t: 'Who uses it?', x: 250, y: 30, shape: 'diamond', w: 150, h: 54 },
    { id: 'h', t: 'Inside the developing\ncompany?', x: 120, y: 130, shape: 'diamond', w: 190, h: 64 },
    { id: 's', t: 'Software client', x: 400, y: 130, hl: true, w: 140 },
    { id: 'i', t: 'Internal user', x: 40 + 30, y: 240, w: 120 },
    { id: 'e', t: 'External user', x: 210, y: 240, w: 120 }],
    [{ a: 'q', b: 'h', lab: 'a person' }, { a: 'q', b: 's', lab: 'a program' }, { a: 'h', b: 'i', lab: 'yes' }, { a: 'h', b: 'e', lab: 'no' }],
    { cap: 'Two questions decide every client-type item.', label: 'client type decision tree' }),
  ex: [
    M.ex('Introductory', R`<p>A company builds a grievance portal for <i>its own</i> employees. What type of client are the employees?</p>`,
      R`<ol><li>Human or program? Human.</li><li>Inside or outside the company building it? Inside — they are its own employees.</li><li>So: <b>internal user</b>. (This is 2023 T2 Q2.)</li></ol>
<p><b>Now suppose</b> the same company sells the leave portal to <i>other</i> organisations, and interviews their employees for requirements (2024 T3 Q2).</p>
<ol><li>Still humans.</li><li>But now they work for other organisations — outside the developing company.</li><li>So: <b>external user</b>.</li></ol><p><b>The mechanism:</b> the label depends on where the person sits relative to the <i>developer</i>, not on whether they are “employees”.</p>`),
    M.ex('Standard', R`<p>Match each case for an Online Travel Booking System: (1) travellers searching flights in the app; (2) the company’s own travel agents updating prices; (3) a payment gateway processing transactions; (4) an airline reservation system exchanging seat data.</p>`,
      R`<ol><li>Travellers: human, outside → <b>External user</b>.</li><li>Own travel agents: human, inside → <b>Internal user</b>.</li><li>Payment gateway: a program → <b>Software client</b>.</li><li>Airline reservation system: a program → <b>Software client</b>.</li></ol><p>Answer: 1-External, 2-Internal, 3-Software, 4-Software (2026 T2 Q9). Two different items can share a label.</p>`),
    M.ex('Exam-level', R`<p>A university ecosystem. Match: A. External user, B. Internal to your company, C. Another software — with 1. faculty dashboard to manage course materials, 2. library system syncing with a third-party digital archive, 3. online application portal used by prospective students. Then: <b>which option is INCORRECT?</b> (i) A–3 (ii) B–1 (iii) C–2 (iv) A–1.</p>`,
      R`<ol><li>Prospective students are not yet part of the university → outside → A–3.</li><li>Faculty work for the university that runs the system → inside → B–1.</li><li>A library system syncing with an archive is program-to-program → C–2.</li><li>So A–3, B–1, C–2 are all correct; <b>(iv) A–1 is the incorrect pairing</b> (faculty are internal).</li></ol>`)],
  math: M.rule(R`<p><b>Program → Software client.</b></p><p><b>Person inside the developing company → Internal user.</b></p><p><b>Person outside it → External user.</b></p>`)
    + M.why([['A payment gateway as “internal user”', 'it is not a person at all; anything automated is a software client.'],
      ['Company employees using the company’s own tool as “external”', 'they sit inside the developer’s organisation → internal.'],
      ['Other companies’ employees as “internal”', '“internal” is relative to the company building the software; they are outside it → external.'],
      ['The developers themselves as clients', 'developers build the system; they are not who it is built for.'],
      ['A courier phoned by a shop as “external user”', 'the courier never uses the software at all — that is the Week 2 idea of a tertiary user, not a client type.']]),
  conn: R`<p><b>At work:</b> product teams write different requirements for each client type — UX polish for external users, power features for internal users, stable versioned APIs for software clients.</p>
<p><b>Earlier:</b> a software client talks to you through your <i>interface</i> (previous concept).</p>
<p><b>Later:</b> Week 2 adds a second, different classification — primary / secondary / tertiary <i>users</i> — and the papers mix the two on purpose.</p>`,
  mis: M.ul(['Swapping 2 and 3 in a four-part match: “2-Software Client, 3-Internal User” (2026 T2 Q9 option 3).',
    'Labelling the delivery-tracking module talking to a restaurant system as “Internal user” (2025 T3 Q2 option 2) — it is program-to-program.',
    'Picking “none of these” when the client is a web service consumed by text editors (2024 T1 Q39): it is a software client.',
    'Mixing client types with user types (primary/secondary/tertiary) — different questions, different lists.']),
  exam: R`<p><b>How it is asked:</b> single scenario (“identify the type of client”) or, in the newest papers, a four-case match where every label must be right.</p>
<p><b>Fast method:</b> label each case yourself before reading the options. Then find the option with your exact string. Do not try to “eliminate” — in a four-part match one wrong label kills an option, so build the answer first.</p>`
});
Q({ cp: 'clients', type: 'mcq', diff: 'easy', q: 'A weather web service is consumed by several mobile apps that display forecasts. To the weather service, the mobile apps are:', opts: ['External users', 'Internal users', 'Software clients', 'Tertiary users'], ans: 2,
  why: ['External users are people; the apps are programs.', 'Internal users are people inside the developing company.', 'Correct: programs consuming the service through its interface.', 'Tertiary user is a Week 2 user category for people affected but not using the system.'],
  sol: 'Program → software client.' });
Q({ cp: 'clients', type: 'mcq', diff: 'moderate', q: 'An IT firm builds a timesheet tool used only by its own developers, and also exposes the tool’s data to the client company’s billing software. Which pair is right?', opts: ['Developers: external; billing software: internal', 'Developers: internal; billing software: software client', 'Developers: software client; billing software: external', 'Both are internal users'], ans: 1,
  why: ['The firm’s own developers are inside the firm.', 'Correct: people inside → internal; a program → software client.', 'Developers are people, not software.', 'The billing software is not a person.'],
  sol: 'Apply the two questions to each party separately.' });
Q({ cp: 'clients', type: 'num', diff: 'hard', q: 'For a food-delivery platform, count the <b>software clients</b> among: (1) customers ordering via the app, (2) the platform’s own support staff, (3) the payment gateway, (4) Google Maps API calls made by the app, (5) restaurant owners updating menus through the partner portal, (6) the restaurant’s own POS system syncing orders automatically.', ans: 3, tol: 0,
  sol: 'Programs: payment gateway (3), maps API (4), POS system (6) → 3. Customers and restaurant owners are external users; support staff are internal users.' });
Q({ cp: 'clients', type: 'short', diff: 'easy', q: 'State the two questions that decide a client type, and give one example of each type.',
  model: '<p>1. Is it a person or a program? A program is a <b>software client</b> (e.g. an e-commerce site calling a payment gateway).</p><p>2. If a person, are they inside or outside the company developing the software? Inside → <b>internal user</b> (employees using their company’s HR portal). Outside → <b>external user</b> (bank customers using a banking app).</p>' });

/* ---------------- 1.2 SDLC ---------------- */
C({ id: 'sdlc', week: 1, title: 'The software development lifecycle (SDLC)', pri: 'High', prereq: ['clients'],
  src: 'Revision notes W1 §1.3–1.5 · Study guide ch.1 §1.3–1.5 · PYQs 2023 T1 Q233, 2023 T2 Q3, Q13, 2023 T3 Q175, 2024 T1 Q35, 2024 T2 Q3, 2024 T3 Q3, 2025 T1 Q32, 2025 T2 Q131, 2026 T1 Q2',
  oneLine: 'Requirements → Design → Development → Testing → Maintenance. Pre-release checking = Testing; post-release patching = Maintenance.',
  misShort: 'Calling a pre-release bug report “Maintenance”, or a post-release patch “Development”.',
  intu: R`<p>Think about a house being built.</p>
<p>First someone asks the family what they need: three bedrooms, a ramp for grandma.</p>
<p>Then an architect draws the plan.</p>
<p>Then builders lay the bricks.</p>
<p>Then an inspector checks the wiring before anyone moves in.</p>
<p>After the family moves in, a plumber still visits now and then.</p>
<p>Software goes through the same five stages. The exam gives you a moment from the story — “the client’s staff are trying the website and it crashes on 1000 uploads” — and asks <b>which stage is this?</b></p>
<p>You might think “they are fixing a bug, so it is Development” or “it is already built, so it is Maintenance”. Both are traps. The deciding fact is almost always: <b>has it been released yet?</b></p>`,
  why: R`<ul><li>Phase identification appears in nine of the eleven papers.</li><li>Recurring scenarios: “fixing the goals of the system” (2023 T2, 2023 T3), “given to the client’s users to verify” (2024 T1, 2024 T3), “given to a pre-defined set of customers who find an error” (2024 T2, 2025 T1), “released, users struggle, patch released” (2026 T1).</li><li>2025 T2 Q131 asks it indirectly: “look at how Paytm and PhonePe work” = requirements analysis.</li></ul>`,
  formal: M.def(M.lines([
    '<b>SDLC</b> — the stages a piece of software goes through, from a customer’s first request to a released, maintained system.',
    '<b>Requirements</b> — find out the goals the system must achieve. Study existing components and similar products (e.g. Paytm/PhonePe before building a wallet).',
    '<b>Design</b> — the big picture and structure: which components, and how they interact. <i>The architect’s plan.</i>',
    '<b>Development</b> — write the code from the requirements and design, usually across many developers.',
    '<b>Testing</b> — check that the software behaves according to the requirements, before release (unit, integration, acceptance, alpha, beta).',
    '<b>Maintenance</b> — after release: monitor real use, fix and update the code, add features learned from usage.',
    '<b>Build-and-fix</b> — the informal predecessor: code first, patch problems as they appear, no plan. Not one of the named models.']))
    + '<p><b>In words:</b> decide what, plan how, build it, check it, then look after it.</p>',
  vis: M.flow([{ t: 'Requirements' }, { t: 'Design' }, { t: 'Development' }, { t: 'Testing', sub: 'pre-release' }, { t: 'Maintenance', sub: 'post-release', hl: true }], { cap: 'The five phases. The line between Testing and Maintenance is the release.' }),
  ex: [
    M.ex('Introductory', R`<p>A school website is built and handed to the school’s teachers to check it meets the school’s requirements. Uploading results for 1000 students crashes it. Which phase?</p>`,
      R`<ol><li>Is the site released to the public? No — it is with the client’s staff for verification.</li><li>Is the purpose to check behaviour against requirements? Yes.</li><li>So: <b>Testing</b> (2024 T3 Q3).</li></ol>
<p><b>Now suppose</b> the site went live last term; parents now report it is slow on one browser, and the company releases a patch (2026 T1 Q2 style).</p>
<ol><li>Released? Yes.</li><li>Activity: monitoring real use and updating code.</li><li>So: <b>Maintenance</b>.</li></ol><p><b>The mechanism:</b> the same act — fixing a defect — belongs to Testing before release and to Maintenance after it.</p>`),
    M.ex('Standard', R`<p>Organisation X is “trying to fix the goals for the system to be implemented” for an EdTech portal. Which phase?</p>`,
      R`<p>Goals of the system = requirements (the course’s definition: requirements are the goals the implemented system should achieve). So <b>Requirements gathering</b> (2023 T2 Q3, 2023 T3 Q175).</p><p>Decoy: “Design” — design decides <i>structure</i>, not goals.</p>`),
    M.ex('Exam-level', R`<p>Which statements about the <b>design</b> phase are true? (a) It gives a big picture of the system. (b) Developers write code from the requirements. (c) It gives the structure of the system. (d) It ensures the implemented software behaves according to the requirements.</p>`,
      R`<ul><li>(a) True — big picture.</li><li>(b) False — that is Development.</li><li>(c) True — structure.</li><li>(d) False — that is Testing.</li></ul><p>Answer: (a), (c) — exactly the 2023 T2 Q13 key. Each false option is a <i>correct description of a different phase</i>: that is how the decoys are built.</p>`)],
  math: M.rule(R`<p><b>Requirements → Design → Development → Testing → Maintenance.</b></p><p><b>Before release, checking = Testing. After release, monitoring/updating = Maintenance.</b></p>`)
    + M.why([['“Customers found a bug, so it is Maintenance”', 'only if the product is already released; a pre-defined set of customers before public release is Testing (beta).'],
      ['“They are writing code to fix it, so it is Development”', 'coding happens in several phases; post-release patches belong to Maintenance.'],
      ['“Fixing the goals” as Design', 'goals = requirements; design is about structure and component interaction.'],
      ['“Studying how competitors work” as Testing', 'studying similar products is part of requirement analysis (2025 T2 Q131).']]),
  conn: R`<p><b>At work:</b> tickets are tagged by phase — a bug found in UAT (testing) is triaged differently from a production incident (maintenance).</p>
<p><b>Earlier:</b> requirements cater to the clients you identified.</p>
<p><b>Later:</b> process models (next concepts) decide <i>how</i> these five phases are arranged — once in a line (Waterfall) or in many short loops (Agile). Weeks 2, 5, 7 zoom into requirements, design and development.</p>`,
  mis: M.ul(['“Maintenance phase” for a pre-release customer bug report (2024 T2 Q3, 2025 T1 Q32 options).', '“Development phase” for a released app receiving upgrades (2023 T1 Q233).', '“Design” for fixing goals (2023 T2 Q3).', 'MSQ decoys that are correct descriptions of a neighbouring phase (2023 T2 Q13).']),
  exam: R`<p><b>How it is asked:</b> a one-paragraph story; options are the five phases.</p><p><b>Fast method — three questions in order:</b></p><ol><li>Is it about deciding <i>what</i> to build (goals, studying users or competitors)? → Requirements.</li><li>Is the product released? No + checking against requirements → Testing. Yes + updating/monitoring → Maintenance.</li><li>Otherwise: structure/plan → Design; writing code for the first time → Development.</li></ol>`
});
Q({ cp: 'sdlc', type: 'mcq', diff: 'easy', q: 'A hotel-booking app is in the app stores. The company releases upgrades from time to time. Which phase is the app in?', opts: ['Requirements', 'Design', 'Development', 'Testing', 'Maintenance'], ans: 4,
  why: ['Goals were fixed long ago.', 'Structure is not being decided now.', 'Upgrades to a released product are not first-time development.', 'Testing is pre-release checking.', 'Correct: released and being updated.'], sol: 'Released + updates → Maintenance (2023 T1 Q233 pattern).' });
Q({ cp: 'sdlc', type: 'mcq', diff: 'moderate', q: 'Before building a UPI feature, the team spends a week using Google Pay and PhonePe and listing what users expect. This is part of:', opts: ['Requirements analysis', 'Design', 'Alpha testing', 'Maintenance'], ans: 0,
  why: ['Correct: studying similar systems is the first step of finding requirements.', 'Design comes after the requirements are known.', 'Alpha testing checks your own product, not competitors’.', 'Nothing has been released.'], sol: 'Studying existing/similar systems = requirement analysis.' });
Q({ cp: 'sdlc', type: 'msq', diff: 'hard', q: 'Select ALL statements that describe the <b>Testing</b> phase.', opts: ['Ensures the implemented software behaves according to the requirements', 'Happens after the product is released to monitor usage', 'Includes alpha and beta testing', 'Decides how the system is broken into components'], ans: [0, 2],
  why: ['Correct: the course definition.', 'That is Maintenance.', 'Correct: alpha and beta are testing levels.', 'That is Design.'], sol: 'Testing = verify against requirements before release; includes unit/integration/acceptance/alpha/beta.' });
Q({ cp: 'sdlc', type: 'short', diff: 'moderate', q: 'A pre-defined set of customers finds that a document converter crashes on “%” characters. Explain in 2–3 lines why this is Testing and not Maintenance.',
  model: '<p>The product has not been released to the general public yet; it was given to a pre-defined set of customers to find problems before release.</p><p>Checking behaviour against requirements before release is Testing (here, beta testing). Maintenance starts only after release.</p>' });

/* ---------------- 1.2 Testing levels ---------------- */
C({ id: 'testing-levels', week: 1, title: 'Levels of testing: unit, integration, acceptance, alpha, beta', pri: 'Medium', prereq: ['sdlc'],
  src: 'Revision notes W1 §1.4 · Study guide ch.1 §1.4 · PYQs 2023 T3 Q177, 2025 T1 Q31, 2025 T3 Q3, 2026 T1 Q4, 2026 T2 Q10',
  oneLine: 'Unit (one piece alone) → Integration (pieces together) → Acceptance (whole vs client needs); Alpha = internal testers, Beta = selected real users.',
  misShort: 'Calling “100 selected customers using it in real conditions” alpha testing.',
  intu: R`<p>A car factory tests a new car in stages.</p>
<p>First each part alone: does the brake pad grip? That is like a <b>unit</b> test.</p>
<p>Then parts together: do the pedal, cable and pad stop the wheel? <b>Integration</b>.</p>
<p>Then the whole car against what the buyer asked for. <b>Acceptance</b>.</p>
<p>Then the factory’s own drivers take it round the test track. <b>Alpha</b>.</p>
<p>Finally 100 ordinary customers drive it on real roads for a month before the launch. <b>Beta</b>.</p>
<p>The question: <b>which level of testing is a scenario describing?</b> The trap: alpha and beta both happen “before release”. What separates them is <i>who</i> tests and <i>where</i>.</p>`,
  why: R`<ul><li>Beta testing is keyed in 2025 T1 Q31 and 2026 T2 Q10; the chain “internal testers → selected users” = Alpha → Beta in 2025 T3 Q3.</li><li>2026 T1 Q4: “test check-balance and transfer-money functions in complete isolation” = Unit testing.</li><li>2023 T3 Q177 asked the goal of regression testing.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Unit testing</b> — test one small piece (a single function) in complete isolation.',
    '<b>Integration testing</b> — test that several units or components work correctly together.',
    '<b>Acceptance testing</b> — the final check that the complete system meets the client’s actual requirements.',
    '<b>Alpha testing</b> — done by internal employees, in a lab or staging setting, to catch as many issues as possible before outsiders see it.',
    '<b>Beta testing</b> — done by real users in real-world conditions, just before general release, for authentic feedback.',
    '<b>Regression testing</b> — re-running tests after a change to make sure the change did not break what used to work. <i>(Mostly a Week 9 topic; one Quiz 2 paper asked it.)</i>']))
    + '<p><b>In words:</b> the scope grows like a zoom lens (unit → integration → acceptance); alpha is “in-house”, beta is “out in the wild”.</p>',
  vis: M.flow([{ t: 'Unit', sub: 'one function' }, { t: 'Integration', sub: 'parts together' }, { t: 'Acceptance', sub: 'whole vs needs' }, { t: 'Alpha', sub: 'internal testers' }, { t: 'Beta', sub: 'real users', hl: true }, { t: 'Release' }], { cap: 'Memory: Alpha = in-house (internAl). Beta = puBlic, but still before full release.' }),
  ex: [
    M.ex('Introductory', R`<p>A bank releases its new app to 100 selected customers, who use it in real conditions and report usability issues. Which phase?</p>`,
      R`<ol><li>Who tests? Real customers — outside the company.</li><li>Where? Real-world use.</li><li>Before full release? Yes (only 100 selected).</li><li>So: <b>Beta testing</b> (2026 T2 Q10).</li></ol><p><b>Now suppose</b> the same build is instead tried by the bank’s own QA staff in a staging environment. Same software, different testers → <b>Alpha testing</b>.</p>`),
    M.ex('Standard', R`<p>A ride-hailing company’s internal testers simulate trips to find issues; later the feature goes to selected users for real-world feedback. Name the two phases in order.</p>`,
      R`<p>Internal testers → Alpha. Selected real users → Beta. Order: <b>Alpha → Beta</b> (2025 T3 Q3). Decoy “Beta → Alpha” reverses the order; “Integration → Beta” uses a level that is about combining components, not about who tests.</p>`),
    M.ex('Exam-level', R`<p>Which statement about testing is <b>INCORRECT</b>? (a) Unit tests check a single function in isolation. (b) Beta testing is done by internal employees in a lab. (c) Acceptance testing checks the complete system against the client’s requirements. (d) Integration testing checks that components work together.</p>`,
      R`<p>(b) is incorrect — that describes <b>alpha</b>. Beta uses real users in real conditions. Watch the word INCORRECT: three options are true definitions.</p>`)],
  math: M.rule(R`<p><b>Scope: Unit ⊂ Integration ⊂ Acceptance.</b></p><p><b>Who: Alpha = internal staff; Beta = selected real users, real conditions, before general release.</b></p>`)
    + M.why([['Beta for internal QA staff', 'beta is defined by real external users.'], ['Alpha for 100 selected customers', 'customers are outsiders; that is beta.'], ['Integration for “functions in complete isolation”', 'isolation = unit; integration combines pieces.'], ['System/integration for “feedback from actual users before release”', 'the actual-user part makes it beta (2025 T1 Q31).']]),
  conn: R`<p><b>At work:</b> Google Play’s “open testing” track and TestFlight are beta programmes; QA environments are alpha.</p><p><b>Earlier:</b> these levels live inside the Testing phase of the SDLC.</p><p><b>Later:</b> Week 7 turns failed tests into debugging; Weeks 9–12 (not yet added) go deep into test design.</p>`,
  mis: M.ul(['Alpha vs Beta swapped (2025 T3 Q3 option “Beta → Alpha”).', '“System testing” or “Integration testing” as decoys for real-user feedback (2025 T1 Q31).', 'Regression testing defined as “testing against initial requirements” or “testing under extreme conditions” (2023 T3 Q177 decoys) — it is re-checking after changes.']),
  exam: R`<p><b>How it is asked:</b> a release story; options are levels of testing.</p><p><b>Fast method:</b> underline <i>who</i> tests (internal / real users) and <i>what scope</i> (one function / combined parts / whole system). The answer follows directly.</p>`
});
Q({ cp: 'testing-levels', type: 'mcq', diff: 'easy', q: 'Developers test the function <code>apply_discount()</code> on its own, with all other modules replaced by stubs. This is:', opts: ['Unit testing', 'Integration testing', 'Beta testing', 'Acceptance testing'], ans: 0,
  why: ['Correct: one function in isolation.', 'Integration combines units.', 'Beta needs real users.', 'Acceptance checks the whole system against client needs.'], sol: 'Isolation of a single function = unit testing.' });
Q({ cp: 'testing-levels', type: 'mcq', diff: 'moderate', q: 'Which order is correct for a typical release?', opts: ['Beta → Alpha → Release', 'Unit → Integration → Acceptance → Alpha → Beta → Release', 'Integration → Unit → Beta → Alpha', 'Acceptance → Unit → Release'], ans: 1,
  why: ['Alpha (internal) comes before beta (external).', 'Correct: scope grows, then in-house, then real users, then release.', 'Units come before integration; alpha before beta.', 'Acceptance is the final whole-system check, after unit tests.'], sol: 'Zoom out, then in-house, then public.' });
Q({ cp: 'testing-levels', type: 'mcq', diff: 'moderate', q: 'After fixing a bug in the cart module, the team re-runs all old cart and checkout tests to be sure nothing else broke. This is the goal of:', opts: ['Regression testing', 'Beta testing', 'Load testing', 'Acceptance testing'], ans: 0,
  why: ['Correct: re-checking after a change.', 'Beta is about real users.', 'Load testing is about extreme conditions — a 2023 T3 decoy.', 'Acceptance is the client’s final check.'], sol: 'Change → re-run old tests = regression.' });
Q({ cp: 'testing-levels', type: 'short', diff: 'easy', q: 'Give two differences between alpha and beta testing.',
  model: '<p><b>Who:</b> alpha is done by internal employees; beta by actual (external) users.</p><p><b>Where/when:</b> alpha happens earlier in a lab/staging setting; beta happens later, in real-world conditions, just before general release.</p>' });

/* ---------------- 1.3 Plan-and-document models ---------------- */
C({ id: 'pd-models', week: 1, title: 'Plan-and-document models: Waterfall, Prototype, Spiral', pri: 'High', prereq: ['sdlc'],
  src: 'Revision notes W1 §1.6 · Study guide ch.1 §1.6 · PYQs 2023 T1 Q234, 2024 T1 Q43, 2024 T2 Q11, 2024 T3 Q17, 2025 T2 Q145, 2025 T3 Q5, 2026 T1 Q5, 2026 T2 Q21',
  oneLine: 'Waterfall = one pass, client sees software only at testing; Prototype = throwaway early model for feedback; Spiral = repeated loops for big risky projects.',
  misShort: 'Believing a prototype is delivered with the product, cuts cost significantly or guarantees zero bugs.',
  intu: R`<p>A law-tech startup wants an AI tool that reads contracts.</p>
<p>The lawyers say: “We’ll know what we want when we see it.”</p>
<p><b>Option 1.</b> Write a 200-page plan, build for 12 months, show the lawyers at the end. If they say “that’s not what we meant”, a year is wasted. That is <b>Waterfall</b>.</p>
<p><b>Option 2.</b> In two weeks, build a rough, stripped-down version. Show it. Listen. Throw it away and build the real thing properly. That is the <b>Prototype</b> model.</p>
<p><b>Option 3.</b> Build a little, get feedback, build more, get feedback — loop after loop until done. That is the <b>Spiral</b>.</p>
<p>The question: <b>which model fits which situation, and what do they really promise?</b></p>
<p>You might think a prototype makes the project cheaper. It doesn’t — you build twice. What it buys is <i>early clarity</i>.</p>`,
  why: R`<ul><li>“Advantages of the prototype model” MSQ appears in five papers (2024 T1, 2024 T2, 2024 T3, 2025 T3, 2026 T2) — with the same three decoys every time.</li><li>Waterfall identification: 2023 T1 Q234 (users first see software during/after testing), 2025 T2 Q145 (12-month strict sequence, client unhappy at release).</li><li>2026 T1 Q5 introduced <b>build-and-fix</b> as the answer.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Plan-and-document</b> — a family of models where you plan and document up front, then follow the plan.',
    '<b>Waterfall</b> — the SDLC phases run once, in order; each finishes before the next starts. The client first sees working software during or after testing. Typical cycle: 6–18 months.',
    '<b>Prototype model</b> — build a working, stripped-down <i>throwaway</i> version first to get feedback and clarify unclear requirements or technical issues; then build the real system.',
    '<b>Spiral model</b> — build in repeated cycles; get feedback after each and refine the next. Suited to large, high-risk projects.',
    '<b>Build-and-fix</b> — no model at all: start coding after an informal chat, then keep patching until users are satisfied.']))
    + '<p><b>In words:</b> Waterfall = one-way, no looking back. Prototype = a rough draft you throw away. Spiral = keep looping, more built each lap.</p>',
  vis: M.flow(['Requirements', 'Design', 'Development', { t: 'Testing', sub: 'client first sees it', hl: true }, 'Maintenance'], { cap: 'Waterfall: one pass. A misunderstanding in Requirements surfaces only at the green box.' })
    + M.flow([{ t: 'Quick prototype' }, { t: 'Client feedback' }, { t: 'Refine requirements' }, { t: 'Build real system', hl: true }], { loop: 'repeat until clear', cap: 'Prototype model: the prototype is discarded; its lessons are kept.' }),
  ex: [
    M.ex('Introductory', R`<p>A team builds for 12 months using a strict sequential process. After release, the client is unhappy because requirements were misunderstood. Which model was likely used?</p>`,
      R`<ol><li>“Strict sequential” → phases one after another.</li><li>Client discovers the mismatch only at the end → no early feedback.</li><li>So: <b>Waterfall</b> (2025 T2 Q145).</li></ol><p><b>Now suppose</b> in month 1 the team had shown the client a clickable rough version and been told “no, we need bulk upload”. The misunderstanding dies in week 3, not month 12. That single change is the whole case for the <b>Prototype</b> model.</p>`),
    M.ex('Standard', R`<p>Students start coding right after an informal talk with users, and keep modifying the code to fix mismatches. Which approach?</p>`,
      R`<p>No requirements phase, no design, no plan — code first, patch later. That is <b>build-and-fix</b> (2026 T1 Q5). Not Waterfall (which plans), not Prototype (which deliberately builds a throwaway to learn), not Spiral (structured loops with feedback).</p>`),
    M.ex('Exam-level', R`<p>A startup building an AI legal tool with unclear requirements builds a prototype for lawyers. Which are advantages? (a) Clarifies user expectations (b) Identifies design issues early (c) Guarantees zero defects (d) Enables early requirement refinement (e) The prototype is shipped with the final product, so verification is easier.</p>`,
      R`<ul><li>(a) ✔ — early concrete feedback.</li><li>(b) ✔ — technical/design issues surface early.</li><li>(c) ✘ — no model guarantees zero defects.</li><li>(d) ✔ — requirements are rectified early.</li><li>(e) ✘ — the prototype is thrown away, not delivered.</li></ul><p>Answer: (a), (b), (d) — the 2026 T2 Q21 key plus one more decoy from 2024 T1 Q43.</p>`)],
  math: M.rule(R`<p><b>Waterfall:</b> sequential, one pass, late feedback, costly late changes.</p><p><b>Prototype:</b> early view + early requirement rectification; costs <i>more</i> (built twice); no bug-free guarantee; prototype discarded.</p><p><b>Spiral:</b> repeated feedback loops; large, high-risk projects.</p>`)
    + M.why([['“Prototype reduces development cost significantly”', 'false — you build twice; the gain is clarity, not cost (2024 T1, 2024 T2, 2024 T3).'],
      ['“Prototype is delivered to the client with the product”', 'false — it is a throwaway (2024 T1 Q43, 2024 T2 Q11).'],
      ['“Prototype ensures no bugs appear later”', 'false — nothing guarantees zero bugs (2024 T3, 2025 T3, 2026 T2).'],
      ['“Waterfall has no testing”', 'false — Waterfall includes a Testing phase; the client just sees software late.'],
      ['Build-and-fix as a named model', 'it is the informal predecessor, not one of the three plan-and-document models.']]),
  conn: R`<p><b>At work:</b> government and safety-critical contracts still often run Waterfall-like with fixed specifications; product startups prototype in Figma before writing code.</p><p><b>Earlier:</b> every model arranges the same five SDLC phases differently.</p><p><b>Later:</b> Agile (next) takes the Spiral’s “loop with feedback” idea to the extreme; Week 3’s prototyping techniques (paper, mock-up, interactive) are the tools for the prototype model.</p>`,
  mis: M.ul(['The three permanent decoys in the prototype MSQ: cost reduction, delivery with the product, zero bugs.', '“Spiral” or “Agile” for a strict-sequence story with late dissatisfaction (2025 T2 Q145).', '“Prototype model” for build-and-fix (2026 T1 Q5): a prototype is deliberate and thrown away; build-and-fix just patches the real code.']),
  exam: R`<p><b>How it is asked:</b> (1) identify the model from a story, or (2) MSQ of prototype advantages.</p><p><b>Fast method for (2):</b> mark true anything about <i>early</i> view, feedback, clarifying requirements or technical issues. Mark false anything that promises <i>cost savings</i>, <i>zero bugs</i>, or <i>delivering the prototype</i>.</p>`
});
Q({ cp: 'pd-models', type: 'mcq', diff: 'easy', q: 'In which model do users get their first view of the developed software only during or after the testing phase?', opts: ['Waterfall', 'Prototype', 'Spiral', 'Agile'], ans: 0,
  why: ['Correct: one sequential pass.', 'The prototype shows users something very early.', 'Each spiral loop ends with feedback.', 'Agile shows working software every iteration.'], sol: '2023 T1 Q234 definition.' });
Q({ cp: 'pd-models', type: 'msq', diff: 'moderate', q: 'Select ALL true statements about the prototype model.', opts: ['It is useful when the exact form of the solution is unclear', 'Its overall cost is usually higher than building once', 'The prototype is normally discarded', 'It ensures no bugs appear later'], ans: [0, 1, 2],
  why: ['Correct.', 'Correct: you build twice.', 'Correct: a throwaway model.', 'No model guarantees that.'], sol: 'Prototype = early clarity at extra cost; thrown away; no bug guarantee.' });
Q({ cp: 'pd-models', type: 'mcq', diff: 'moderate', q: 'A defence project is very large, high-risk, and the team wants feedback after each cycle of building. Which model fits best?', opts: ['Build-and-fix', 'Waterfall', 'Spiral', 'Prototype only'], ans: 2,
  why: ['Build-and-fix has no structure for a large risky project.', 'Waterfall gives no feedback until the end.', 'Correct: repeated loops with feedback, for large high-risk projects.', 'A prototype alone clarifies requirements once; it does not give cycle-by-cycle refinement.'], sol: 'Large + high-risk + feedback each cycle → Spiral.' });
Q({ cp: 'pd-models', type: 'short', diff: 'moderate', q: 'Give two drawbacks of the Waterfall model and say how the prototype model addresses one of them.',
  model: '<p>Drawbacks: (1) the client first sees working software only at testing, so misunderstood requirements are discovered late and cost a lot of rework; (2) clients often cannot state correct requirements up front, and the long cycle (6–18 months) cannot absorb changes.</p><p>The prototype model shows the client a quick working model early, so wrong or unclear requirements are fixed before the real build starts.</p>' });

/* ---------------- 1.3 Agile ---------------- */
C({ id: 'agile', week: 1, title: 'The Agile perspective', pri: 'Medium', prereq: ['pd-models'],
  src: 'Revision notes W1 §1.7 · Study guide ch.1 §1.7 · PYQs 2023 T3 Q176, 2025 T2 Q134',
  oneLine: 'Four values “X over Y”; short iterations; accommodates changing requirements. Choose plan-and-document when the project is large, regulated, distributed or customers are unavailable.',
  misShort: 'Reading “over” as “instead of”, or naming documentation as Agile’s advantage.',
  intu: R`<p>A seller-portal team ships a feature every two weeks.</p>
<p>Halfway through building “view product reviews”, the client says: “Oh, and email me when someone leaves a 1-star review.”</p>
<p>In Waterfall that sentence means: change request form, re-plan, re-sign the contract.</p>
<p>In Agile the team says: “Great, we’ll talk it through and add it to the next sprint.”</p>
<p>The question: <b>what does Agile value, and when is it the right choice?</b></p>
<p>You might think Agile means “no plans, no documents”. It doesn’t. It means <i>valuing</i> some things <i>more</i> than others.</p>`,
  why: R`<ul><li>2025 T2 Q134: the 1-star-email story → “Customer collaboration over contract negotiation”.</li><li>2023 T3 Q176: Agile’s main advantage over Waterfall = ability to accommodate changing requirements.</li><li>Scrum roles, ceremonies and velocity (also Agile) are asked heavily — see Week 4.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Agile</b> — build software incrementally in short iterations, getting feedback and adapting each time.',
    '<b>Agile Manifesto</b> — four values, each “X over Y”: (1) Individuals and interactions over processes and tools; (2) Working software over comprehensive documentation; (3) Customer collaboration over contract negotiation; (4) Responding to change over following a plan.',
    '<b>“Over”</b> — X is valued <i>more</i>; Y is not thrown away.',
    '<b>XP</b> (Extreme Programming) — engineering discipline: continuous testing, frequent releases, close collaboration.',
    '<b>Scrum</b> — fixed-length sprints, defined roles, recurring ceremonies (Week 4).',
    '<b>Kanban</b> — a flow-based visual board (To-Do / In-Progress / Done), no fixed sprints.']))
    + '<p><b>In words:</b> people, working software, collaboration and change come first; process, documents, contracts and plans still exist but come second.</p>',
  vis: M.board([{ t: 'To-Do', cards: ['1-star email alert', 'Bundle suggestions'] }, { t: 'In Progress', cards: [{ t: 'View reviews', hl: true }] }, { t: 'Done', cards: ['Add product', 'Edit inventory'] }], { cap: 'A Kanban board. A new requirement simply becomes a new card on the left.' }),
  ex: [
    M.ex('Introductory', R`<p>During implementation the team learns the user also wants email alerts for 1-star reviews, and they add it. Which manifesto value explains this best? (a) Working software is the primary measure of progress (b) Customer collaboration over contract negotiation (c) Processes and tools over individuals (d) Following a plan over responding to change.</p>`,
      R`<ol><li>(c) and (d) are reversed versions of real values — instant eliminations.</li><li>(a) is a true Agile <i>principle</i>, but it is about measuring progress, not taking a new request.</li><li>(b) the team works <i>with</i> the client instead of holding them to the original contract → <b>(b)</b> (2025 T2 Q134 key).</li></ol><p><b>Now suppose</b> the stem instead stressed “they changed their sprint plan the moment the request came in”. Then “responding to change over following a plan” would be the sharper fit. Read which half of the story the stem emphasises.</p>`),
    M.ex('Standard', R`<p>What is the main advantage of Agile over Waterfall? (a) Strong emphasis on documentation (b) Accommodates changing requirements (c) Faster development with no need for testing (d) Strict adherence to a fixed plan.</p>`,
      R`<p><b>(b)</b>. (a) and (d) describe Waterfall’s strengths; (c) is false for every model — no model removes testing (2023 T3 Q176).</p>`),
    M.ex('Exam-level', R`<p>For each project, say Agile or plan-and-document: (1) a 4-person co-located startup with a client available daily; (2) a regulated medical-device controller built by teams on three continents.</p>`,
      R`<p>Boehm’s questions: a “yes” to large system, safety-critical/real-time, regulated, geographically distributed, customers unavailable, or a documentation culture favours plan-and-document.</p><ol><li>Small, co-located, available customer → all “no” → <b>Agile</b>.</li><li>Regulated + distributed + safety-critical → several “yes” → <b>plan-and-document</b>.</li></ol>`)],
  math: M.rule(R`<p><b>Individuals & interactions › processes & tools. Working software › comprehensive documentation. Customer collaboration › contract negotiation. Responding to change › following a plan.</b></p><p>Agile’s advantage over Waterfall: <b>accommodating changing requirements</b>.</p>`)
    + M.why([['“Processes and tools over individuals”', 'reversed — a fake value.'], ['“Following a plan over responding to change”', 'reversed.'], ['“Agile means no documentation”', '“over” ranks, it does not delete.'], ['“Agile needs no testing”', 'XP is built on continuous testing.']]),
  conn: R`<p><b>At work:</b> most product teams run Scrum or Kanban on Jira boards.</p><p><b>Earlier:</b> Agile is the Spiral idea with very short loops.</p><p><b>Later:</b> Week 2 writes Agile requirements as user stories; Week 4 covers Scrum roles, ceremonies, story points and velocity.</p>`,
  mis: M.ul(['Reversed manifesto values offered as options (2025 T2 Q134 options 3 and 4).', '“Strong emphasis on documentation” as Agile’s advantage (2023 T3 Q176).', 'Treating “working software is the primary measure of progress” as the answer to a change-request story.']),
  exam: R`<p><b>Fast method:</b> any option where the <i>first</i> word is process, tools, documentation, contract or plan is a reversed value — eliminate it. Then match the story to the remaining value.</p>`
});
Q({ cp: 'agile', type: 'mcq', diff: 'easy', q: 'Which is a genuine Agile Manifesto value?', opts: ['Comprehensive documentation over working software', 'Responding to change over following a plan', 'Contract negotiation over customer collaboration', 'Processes and tools over individuals and interactions'], ans: 1,
  why: ['Reversed.', 'Correct.', 'Reversed.', 'Reversed.'], sol: 'The genuine values put people, working software, collaboration and change first.' });
Q({ cp: 'agile', type: 'mcq', diff: 'moderate', q: 'A team uses a visual board with To-Do / In-Progress / Done columns and no fixed-length sprints. This Agile approach is:', opts: ['Scrum', 'Kanban', 'XP', 'Waterfall'], ans: 1,
  why: ['Scrum uses fixed-length sprints.', 'Correct: flow-based board, no fixed sprints.', 'XP is about engineering practices like continuous testing.', 'Not Agile.'], sol: 'Board + flow + no sprints = Kanban.' });
Q({ cp: 'agile', type: 'num', diff: 'hard', q: 'For a project, Boehm’s questions are answered: large system — yes; customers unavailable — no; regulated — yes; geographically distributed — yes; poor tools — no; documentation culture — no. How many answers favour plan-and-document?', ans: 3, tol: 0,
  sol: 'Each “yes” favours plan-and-document: large, regulated, distributed → 3.' });
Q({ cp: 'agile', type: 'short', diff: 'moderate', q: 'Explain what “over” means in the Agile Manifesto, using the documentation value as the example.',
  model: '<p>“Over” means the item on the left is valued <i>more</i>, not that the item on the right is abandoned.</p><p>“Working software over comprehensive documentation” means Agile teams still write the documentation they need, but they measure progress by software that works, and do not let long documents delay it.</p>' });

/* ---------------- Week 1 harder variations (Spartan) ---------------- */
VQ({ kind: 'negated', type: 'mcq', q: 'A logistics firm’s six teams agree on interface specifications before coding. Which statement about these interfaces is <b>INCORRECT</b>?', opts: ['They state which requests a module accepts and how its output is formatted', 'They let each team build its module in parallel', 'They let a team rewrite its module internally without affecting others, as long as the interface is unchanged', 'They expose each module’s internal implementation so other teams can depend on it'], ans: 3,
  why: ['True: the definition of an interface.', 'True: parallel work is the payoff.', 'True: the implementation is free while the interface is frozen.', 'Incorrect — interfaces hide the implementation; depending on internals is exactly what they prevent.'],
  sol: 'Negated stem: three options are the standard true statements; the odd one out is the “reveals implementation” decoy.', trap: 'Reading INCORRECT as “correct” and ticking the first true statement.' }, ['cs3001-2024T2-13', 'cs3001-2025T2-149', 'cs3001-2025T3-4', 'cs3001-2026T2-20']);
VQ({ kind: 'counting', type: 'num', q: 'How many of these are true about interface definitions in distributed development? (1) They specify allowed inputs and output formats. (2) They describe how a function is implemented internally. (3) They allow implementation changes without affecting other modules if unchanged. (4) They force a common programming language. (5) They help keep communication between components consistent. (6) Until the interface changes, no implementation change is permitted.', ans: 3, tol: 0,
  sol: 'True: 1, 3, 5. False: 2 (hides how), 4 (language irrelevant), 6 (reversed).', trap: 'Statement 6 sounds disciplined but reverses the real rule.' }, ['cs3001-2024T2-13', 'cs3001-2025T2-149', 'cs3001-2025T3-4', 'cs3001-2026T2-20', 'cs3001-2026T1-3']);
VQ({ kind: 'scenario', type: 'mcq', q: 'The maps team changes <code>route(src, dst)</code> to <code>route(src, dst, mode)</code> with <code>mode</code> required. Overnight, the delivery-ETA module and the pricing module both fail. Which practice, if followed, would have prevented this?', opts: ['Writing more unit tests for the maps module', 'Treating the function signature as an agreed interface and not changing it without agreement (or adding the new parameter as optional)', 'Refactoring the ETA module', 'Running beta tests'], ans: 1,
  why: ['Unit tests of the maps module pass — the maps module works; the break is at the boundary.', 'Correct: the interface is the contract; keep it stable or extend it compatibly.', 'Refactoring the caller after the fact is a repair, not prevention.', 'Beta testing detects late; it does not prevent.'],
  sol: 'Same pattern as 2026 T1 Q3, new scenario, and a near-miss option (unit tests).', trap: 'Unit tests sound preventive, but they test the inside of one module, not the agreement between modules.' }, ['cs3001-2026T1-3']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'An insurance company builds: (1) a claims app used by policyholders, (2) an underwriting console used by the company’s own underwriters, (3) a fraud-scoring service called automatically by the claims app, (4) a hospital’s billing system that pushes bills into the claims system. Which option is correct?', opts: ['1-External, 2-Internal, 3-Software, 4-Software', '1-External, 2-Internal, 3-Internal, 4-Software', '1-External, 2-External, 3-Software, 4-Software', '1-Internal, 2-Internal, 3-Software, 4-External'], ans: 0,
  why: ['Correct: outsiders, insiders, program, program.', 'The fraud service is a program, not an internal person.', 'Underwriters work for the developing company.', 'Policyholders are outside the company; the hospital system is a program.'],
  sol: 'Label each case first: person/program, then inside/outside.', trap: 'Option 2 differs from the key in one label only — the near-miss.' }, ['cs3001-2025T3-2', 'cs3001-2026T2-9', 'cs3001-2025T2-130']);
VQ({ kind: 'counting', type: 'num', q: 'A fitness company’s platform interacts with: (a) gym members using the app, (b) its own trainers logging sessions, (c) a smartwatch API pushing heart-rate data, (d) its HR team reviewing trainer hours, (e) a third-party payment gateway, (f) partner gyms’ booking software syncing slots. How many are <b>internal users</b>?', ans: 2, tol: 0,
  sol: 'Internal = people inside the developing company: trainers (b) and HR team (d) → 2. (a) external; (c), (e), (f) software clients.', trap: 'Counting the partner gyms’ software as internal because it is “part of the platform”.' }, ['cs3001-2023T2-2', 'cs3001-2024T1-39', 'cs3001-2024T2-2', 'cs3001-2024T3-2', 'cs3001-2025T1-30']);
VQ({ kind: 'negated', type: 'mcq', q: 'For a payroll product sold to 500 companies, which classification is <b>NOT</b> correct?', opts: ['HR managers of client companies using it — external users', 'The vendor’s own support engineers using an admin console — internal users', 'The bank’s salary-disbursal API called by the product — software client', 'The vendor’s developers who write the product — internal users of the product'], ans: 3,
  why: ['Correct classification: outside the vendor.', 'Correct: inside the vendor.', 'Correct: a program.', 'Not correct — developers build the product; they are not its clients.'],
  sol: 'Developers are never counted as clients — the revision notes call this out explicitly.', trap: 'Option 4 uses the word “internal”, which feels right for employees.' }, ['cs3001-2023T2-2', 'cs3001-2024T3-2', 'cs3001-2025T1-30']);
VQ({ kind: 'scenario', type: 'mcq', q: 'An e-learning portal has been live for two years. Analytics show students abandon a quiz page on tablets; the team ships a fix and adds a “resume later” feature requested by users. Which phase?', opts: ['Development', 'Testing', 'Maintenance', 'Requirements gathering'], ans: 2,
  why: ['Coding is happening, but on a released product — that is Maintenance.', 'Testing is pre-release.', 'Correct: monitor real use, fix, add features from usage.', 'Requirements for a new product are not being gathered.'],
  sol: 'Released + monitoring + updates + features from usage = all three maintenance purposes.', trap: '“Adds a feature” tempts Development.' }, ['cs3001-2023T1-233', 'cs3001-2026T1-2']);
VQ({ kind: 'chained', type: 'mcq', block: { id: 'V1', text: '<p>A fintech builds a budgeting app. Month 1: analysts interview users and study competing apps. Month 3: architects decide the app has Accounts, Budgets and Alerts components. Month 6: the app goes to 300 invited users who report a crash on CSV import. Month 9: the app is public; a bank changes its export format and the team updates the importer.</p>' },
  q: 'Which sequence correctly names the phase in Month 1, Month 6 and Month 9?', opts: ['Requirements, Testing, Maintenance', 'Requirements, Maintenance, Maintenance', 'Design, Testing, Development', 'Requirements, Development, Maintenance'], ans: 0,
  why: ['Correct: goals/studying competitors; pre-release invited users; post-release update.', 'Month 6 is before public release — Testing (beta), not Maintenance.', 'Month 1 decides goals, not structure; Month 9 is post-release.', 'Invited users reporting a crash is Testing.'],
  sol: 'One misread month changes the option — chained reasoning.', trap: 'Month 6 “users” tempt Maintenance; they are invited pre-release users.' }, ['cs3001-2023T2-3', 'cs3001-2023T3-175', 'cs3001-2024T2-3', 'cs3001-2025T1-32', 'cs3001-2024T1-35', 'cs3001-2024T3-3', 'cs3001-2025T2-131']);
VQ({ kind: 'negated', type: 'msq', q: 'Select ALL statements that are <b>NOT</b> true of the design phase.', opts: ['It provides the big picture of the system', 'Developers write code based on the requirements', 'It decides how the system is broken into components and how they interact', 'It ensures the implemented software behaves according to the requirements', 'It identifies the goals the system should achieve'], ans: [1, 3, 4],
  why: ['True of design.', 'Not design — Development.', 'True of design.', 'Not design — Testing.', 'Not design — Requirements.'],
  sol: 'Each “NOT true” option is a correct description of a different phase.', trap: 'Five options, negated, and three answers — harder than the 2023 T2 original.' }, ['cs3001-2023T2-13']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A smart-home company lets its own QA engineers use a new thermostat app in the office for two weeks, then sends it to 200 customers’ homes before launch. The second activity is:', opts: ['Alpha testing', 'Beta testing', 'Acceptance testing by the client', 'Integration testing'], ans: 1,
  why: ['Alpha was the first activity (own QA engineers).', 'Correct: real users, real homes, before launch.', 'Acceptance is the client’s check against requirements, not a field trial by end users.', 'Integration combines components.'],
  sol: 'Who + where decides: customers at home = beta.', trap: 'The stem describes both activities; the question asks about the second.' }, ['cs3001-2025T1-31', 'cs3001-2025T3-3', 'cs3001-2026T2-10']);
VQ({ kind: 'counting', type: 'num', q: 'How many of these activities are <b>unit testing</b>? (1) Testing <code>check_balance()</code> with the database replaced by a stub. (2) Testing that the login and the dashboard modules work together. (3) Testing <code>transfer_money()</code> alone with mocked accounts. (4) 50 customers using the app at home. (5) Re-running all old tests after a bug fix.', ans: 2, tol: 0,
  sol: '(1) and (3) are single functions in isolation → 2. (2) integration, (4) beta, (5) regression.', trap: '(5) re-runs unit tests, but its purpose (after a change) makes it regression testing.' }, ['cs3001-2026T1-4', 'cs3001-2023T3-177']);
VQ({ kind: 'negated', type: 'msq', q: 'A health-tech team builds a prototype of a symptom checker. Select ALL statements that are <b>FALSE</b>.', opts: ['The prototype helps doctors see an early view of the product', 'The prototype will be handed over to the client along with the final product', 'Building a prototype significantly reduces total development cost compared with all other models', 'It helps rectify requirements early', 'It ensures no bugs appear later in the development cycle'], ans: [1, 2, 4],
  why: ['True advantage.', 'False — the prototype is discarded.', 'False — you build twice, so cost rises.', 'True advantage.', 'False — no model guarantees this.'],
  sol: 'All three permanent decoys at once, in a negated stem.', trap: 'In a negated MSQ the familiar true options must be left unticked.' }, ['cs3001-2024T1-43', 'cs3001-2024T2-11', 'cs3001-2024T3-17', 'cs3001-2025T3-5', 'cs3001-2026T2-21']);
VQ({ kind: 'scenario', type: 'mcq', q: 'A government agency fixes every requirement in a signed 300-page specification, the vendor builds for 14 months phase by phase, and the agency sees the system for the first time during acceptance testing. Which model, and what is its main risk?', opts: ['Spiral — too many feedback loops', 'Waterfall — misunderstood requirements discovered late are expensive to fix', 'Prototype — the prototype may be shipped by mistake', 'Agile — lack of documentation'], ans: 1,
  why: ['Spiral gives feedback after every loop; here there is none until the end.', 'Correct.', 'There is no prototype in the story.', 'The story is document-heavy, not Agile.'],
  sol: 'Fixed spec + sequential + client sees it at testing = Waterfall; its risk is late discovery.', trap: 'Choosing a model by the project size instead of by the process described.' }, ['cs3001-2023T1-234', 'cs3001-2025T2-145', 'cs3001-2026T1-5']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Halfway through a sprint, the client says the new loyalty feature must also work offline. The team discusses it with the client and re-plans the next sprint immediately. Which pair of manifesto values is <b>most directly</b> shown?', opts: ['Working software over comprehensive documentation; individuals and interactions over processes and tools', 'Customer collaboration over contract negotiation; responding to change over following a plan', 'Following a plan over responding to change; contract negotiation over customer collaboration', 'Comprehensive documentation over working software; processes over individuals'], ans: 1,
  why: ['Genuine values, but not what the story shows.', 'Correct: working with the client + re-planning for the change.', 'Reversed values.', 'Reversed values.'],
  sol: 'Eliminate reversed values first, then match the two halves of the story.', trap: 'Option 1 contains real values — a near-miss.' }, ['cs3001-2025T2-134', 'cs3001-2023T3-176']);

/* ---------------- Week 1 glossary and flashcards ---------------- */
[['Component (module)', 'A separately addressable, self-contained part of a system that does one well-defined job.'],
 ['Interface', 'Precise description of a component’s allowed requests, inputs and output format; hides the implementation.'],
 ['Implementation', 'The code inside a component — how it does its job.'],
 ['External user', 'A person outside the developing organisation who uses the software.'],
 ['Internal user', 'A person or team inside the developing company who uses the software.'],
 ['Software client', 'Another program that uses the system through an interface.'],
 ['SDLC', 'Software development lifecycle: Requirements → Design → Development → Testing → Maintenance.'],
 ['Maintenance', 'Post-release phase: monitor usage, update code, add features learned from usage.'],
 ['Unit testing', 'Testing one function in complete isolation.'],
 ['Integration testing', 'Testing that several units/components work together.'],
 ['Acceptance testing', 'Final check that the complete system meets the client’s requirements.'],
 ['Alpha testing', 'Testing by internal employees in a lab/staging setting before outsiders see the product.'],
 ['Beta testing', 'Testing by real users in real conditions just before general release.'],
 ['Regression testing', 'Re-running existing tests after a change to make sure nothing that worked is now broken.'],
 ['Waterfall model', 'Phases run once, in sequence; the client sees software only at testing.'],
 ['Prototype model', 'Build a throwaway stripped-down version first to get feedback and clarify requirements.'],
 ['Spiral model', 'Build in repeated feedback loops; for large, high-risk projects.'],
 ['Build-and-fix', 'Informal: code first, patch problems as they appear; not a named model.'],
 ['Agile Manifesto', 'Individuals & interactions, working software, customer collaboration, responding to change — valued over processes & tools, documentation, contracts, plans.'],
 ['Kanban', 'Agile approach using a flow-based visual board without fixed sprints.'],
 ['XP (Extreme Programming)', 'Agile approach emphasising continuous testing, frequent releases and close collaboration.']].forEach(([t, d]) => GLOSS(t, d, 1));
[['What does an interface specify?', 'Allowed requests, their inputs, and the format of outputs — not the implementation.'],
 ['Interface frozen. Can the implementation change?', 'Yes — freely, without affecting other modules.'],
 ['Two questions for client type?', 'Person or program? If person: inside or outside the developing company?'],
 ['A payment gateway called by an e-commerce site is a…', 'Software client.'],
 ['Released app getting patches — phase?', 'Maintenance.'],
 ['Pre-defined customers find a bug before public release — phase?', 'Testing (beta).'],
 ['“Fixing the goals of the system” — phase?', 'Requirements gathering.'],
 ['Alpha vs beta in one line', 'Alpha = internal staff in a lab; Beta = real users in real conditions, before release.'],
 ['Three false claims about the prototype model', 'It cuts cost significantly; it is delivered with the product; it guarantees no bugs.'],
 ['Model where users first see software at testing?', 'Waterfall.'],
 ['Code first after an informal chat, then keep patching?', 'Build-and-fix.'],
 ['Main advantage of Agile over Waterfall?', 'Accommodates changing requirements.'],
 ['“Over” in the Agile Manifesto means…', 'Valued more — not abandoned.']].forEach(([f, b]) => CARD(f, b, 1));
