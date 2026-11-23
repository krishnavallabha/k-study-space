/* ===================== SE WEEK 8 — Software architecture ===================== */
WEEK({ course: 'cs3001', n: 8, title: 'Software Architecture, SOLID and Design Patterns',
  blurb: 'How a whole system is organised (client–server, pipe-and-filter, peer-to-peer, MVC; components and connectors), the five SOLID principles for class design, the design patterns that recur in the papers (Factory, Builder, Singleton; Adapter, Facade; Strategy, Observer, Iterator), and design smells as early warnings.',
  topics: [
    { title: '8.1 Architecture styles', cs: ['arch-styles', 'mvc'] },
    { title: '8.2 SOLID principles', cs: ['solid', 'solid-isp-dip'] },
    { title: '8.3 Design patterns', cs: ['patterns-creational', 'patterns-structural', 'patterns-behavioural'] },
    { title: '8.4 Design smells', cs: ['design-smells'] }] });

/* ---------------- 8.1 Architecture styles ---------------- */
C({ id: 'arch-styles', week: 8, title: 'Architecture styles: client–server, pipe-and-filter, peer-to-peer, MVC', pri: 'High', prereq: ['design-outcomes'],
  src: 'Revision notes W8 §8.1 · Study guide ch.8 §8.1 · PYQs 2023 T1 Q252, 2024 T1 Q30, 2025 T1 Q29, 2025 T2 Q142, 2025 T3 Q19, 2026 T1 Q22, 2026 T2 Q18',
  oneLine: 'Find the coordinator. A central server answering requests → client–server. A chain where each stage’s output is the next stage’s input → pipe-and-filter. No central server, nodes share directly → peer-to-peer. Data, presentation and coordination separated → MVC.',
  misShort: 'Choosing MVC or client–server for a compiler — a chain of transformations is pipe-and-filter.',
  intu: R`<p>Three systems, three shapes.</p>
<p><b>Netflix:</b> millions of phones send requests to Netflix’s servers, which answer. One centre, many clients → <b>client–server</b>.</p>
<p><b>A compiler:</b> source code → lexer → parser → optimiser → code generator → executable. Each stage takes the previous stage’s output and passes its own output on, like water through a series of filters → <b>pipe-and-filter</b>.</p>
<p><b>BitTorrent:</b> there is no central server holding the file; every user’s computer both downloads pieces and uploads pieces to others → <b>peer-to-peer</b>.</p>
<p>The question in every paper: <b>where is the coordinator, and how does data flow?</b></p>`,
  why: R`<ul><li>Seven papers. Pipe-and-filter four times (data filters, compilers ×2, photo editing); peer-to-peer three times (messaging, file sharing ×2).</li><li>Distractors are always the other three styles.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Software architecture</b> — how a system’s software elements, the relations among them and their properties are organised. Decided early; expensive to change later.',
    '<b>Architecture style</b> — a recurring, named pattern of how information flows between components.',
    '<b>Client–server</b> — clients send requests; a central server processes them and responds (banking apps, Amazon).',
    '<b>Pipe-and-filter</b> — data flows through a sequence of components (filters) connected by pipes; each transforms its input and passes the output on (compilers, image/video processing).',
    '<b>Peer-to-peer</b> — distributed nodes share resources directly with each other; no central server (BitTorrent, blockchain).',
    '<b>Model–view–controller</b> — separates data (model), presentation (view) and coordination (controller) — next concept.']))
    + '<p><b>In words:</b> centre → client–server; chain → pipe-and-filter; no centre → P2P; three-way split of data, display and control → MVC.</p>',
  vis: M.flow([{ t: 'Source code' }, { t: 'Lexical analysis' }, { t: 'Parsing' }, { t: 'Code generation' }, { t: 'Executable', hl: true }], { cap: 'Pipe-and-filter: each filter’s output is the next filter’s input (2026 T2 Q18).' })
    + M.graph([{ id: 'S', t: 'Server', x: 170, y: 40, hl: true }, { id: 'a', t: 'Client', x: 60, y: 150 }, { id: 'b', t: 'Client', x: 170, y: 170 }, { id: 'c', t: 'Client', x: 280, y: 150 },
      { id: 'p', t: 'Peer', x: 440, y: 40 }, { id: 'q', t: 'Peer', x: 590, y: 40 }, { id: 'r', t: 'Peer', x: 440, y: 160 }, { id: 's', t: 'Peer', x: 590, y: 160 }],
      [{ a: 'a', b: 'S' }, { a: 'b', b: 'S' }, { a: 'c', b: 'S' }, { a: 'p', b: 'q' }, { a: 'p', b: 'r' }, { a: 'q', b: 's' }, { a: 'r', b: 's' }, { a: 'p', b: 's' }, { a: 'q', b: 'r' }],
      { cap: 'Left: client–server (one centre). Right: peer-to-peer (every node talks to others directly).', label: 'client-server vs peer-to-peer' }),
  ex: [
    M.ex('Introductory', R`<p>A photo-editing application resizes, then filters, then compresses, then saves an image; each stage takes input from the previous one. Architecture?</p>`,
      R`<p><b>Pipe-and-filter</b> (2026 T1 Q22). Same answer for data filters (2023 T1 Q252) and compilers (2025 T3 Q19, 2026 T2 Q18).</p><p><b>Now suppose</b> the photos were instead uploaded to a central server which applies the edits and sends them back. The overall system would be <b>client–server</b> — though the server’s internal processing could still be a pipeline.</p>`),
    M.ex('Standard', R`<p>A file-sharing system lets users download from and upload to other users without any central server; each user shares part of their storage. Architecture?</p>`,
      R`<p><b>Peer-to-peer</b> (2025 T2 Q142; also 2024 T1 Q30, 2025 T1 Q29). “Without a central server” is the giveaway.</p>`),
    M.ex('Exam-level', R`<p>An online exam portal: students’ browsers send answers to the institute’s server, which grades and stores them. Inside the server, answer sheets pass through plagiarism check → auto-grading → result formatting. Name the style at each level.</p>`,
      R`<p>System level: <b>client–server</b> (browsers request, central server responds). Inside the server: <b>pipe-and-filter</b> (a chain of transformations). Real systems mix styles; the question tells you which level it is asking about.</p>`)],
  math: M.rule('<p><b>Central server answers requests → Client–server. Output → input chain → Pipe-and-filter. No central server, nodes share directly → Peer-to-peer. Data / display / coordination split → MVC.</b></p>')
    + M.why([['Client–server for “without a central server”', 'the defining feature of client–server is the central server.'], ['MVC for a compiler', 'no user-facing views; it is a transformation chain.'], ['P2P for a sequence of stages', 'P2P is about who talks to whom, not stage order.']]),
  conn: R`<p><b>At work:</b> web apps are client–server; data pipelines (ETL) are pipe-and-filter; blockchains are P2P; most web frameworks (Django, Rails) follow MVC.</p><p><b>Earlier:</b> components and interfaces (Week 5) are the pieces an architecture arranges.</p><p><b>Next:</b> MVC in detail; then class-level design with SOLID.</p>`,
  mis: M.ul(['Client–server for P2P scenarios (2024 T1 Q30, 2025 T1 Q29).', 'MVC for pipe-and-filter (2025 T3 Q19).']),
  exam: R`<p><b>Fast method:</b> underline “each stage passes output to the next” (pipe-and-filter), “without a central server” (P2P), “requests to a server” (client–server), “model/view/controller” or “coordinates views” (MVC).</p>`
});
Q({ cp: 'arch-styles', type: 'mcq', diff: 'easy', q: 'An ETL job reads raw logs, removes duplicates, converts timestamps, aggregates by hour and writes a report; each step feeds the next. Style?', opts: ['Client–server', 'Pipe-and-filter', 'Peer-to-peer', 'MVC'], ans: 1,
  why: ['No central request/response.', 'Correct.', 'No.', 'No views.'], sol: 'Output → input chain.' });
Q({ cp: 'arch-styles', type: 'mcq', diff: 'moderate', q: 'A cryptocurrency network keeps a copy of the ledger on every node, and nodes exchange transactions directly. Style?', opts: ['Client–server', 'Pipe-and-filter', 'Peer-to-peer', 'MVC'], ans: 2,
  why: ['No central server.', 'No stage chain.', 'Correct.', 'No.'], sol: 'No central authority → P2P.' });
Q({ cp: 'arch-styles', type: 'mcq', diff: 'moderate', q: 'Why is architecture decided early in a project?', opts: ['It is the easiest part to change later', 'It is expensive to change once the system is built on it', 'Testing requires it first', 'It is chosen by the framework automatically'], ans: 1,
  why: ['The opposite.', 'Correct.', 'Not the reason.', 'No.'], sol: 'Changing structure later is costly.' });
Q({ cp: 'arch-styles', type: 'short', diff: 'moderate', q: 'Name the four architecture styles in this course and give the one feature that identifies each in a scenario.',
  model: '<p><b>Client–server:</b> clients send requests to a central server that responds. <b>Pipe-and-filter:</b> data passes through a chain of stages, each stage’s output being the next stage’s input. <b>Peer-to-peer:</b> no central server; nodes share resources directly. <b>MVC:</b> data (model), presentation (view) and coordination (controller) are separated.</p>' });

C({ id: 'mvc', week: 8, title: 'MVC, components and connectors', pri: 'Medium', prereq: ['arch-styles'],
  src: 'Revision notes W8 §8.2–8.3 · Study guide ch.8 §8.2',
  oneLine: 'Model = data and business logic. View = what the user sees. Controller = receives user input, updates the model and coordinates views. Components do the work; connectors (function calls, REST APIs, message queues) carry information between them.',
  misShort: 'Calling the part that coordinates GUI views the View — it is the Controller.',
  intu: R`<p>Think of a seller portal. The product list, prices and stock live in the database — the <b>model</b>.</p>
<p>The page the seller looks at, with tables and buttons, is the <b>view</b>.</p>
<p>When the seller clicks “Update price”, something must take that click, change the model and refresh the right views. That coordinator is the <b>controller</b>.</p>
<p>Zoom out: the portal, the payment service and the database are <b>components</b> (they do work). The REST calls and message queues between them are <b>connectors</b> (they carry information).</p>`,
  why: R`<ul><li>MVC is always a distractor in the architecture questions; the graded assignments ask which MVC part coordinates views.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Model</b> — manages data, business logic and the database (classes that mirror tables).',
    '<b>View</b> — the presentation layer: GUI objects that display the model.',
    '<b>Controller</b> — receives user commands, manipulates the model and coordinates the views.',
    'Flow: user → controller → model ↔ database → view → user.',
    '<b>Component</b> — a unit with well-defined functionality (client app, server, database, payment module).',
    '<b>Connector</b> — code that transmits information between components and regulates their interaction (function calls, REST APIs, HTTP, message queues).',
    '<b>Protocol</b> — the predefined rules for that interaction.']))
    + '<p><b>In words:</b> Model = data, View = display, Controller = coordinator. Components work; connectors communicate.</p>',
  vis: M.flow([{ t: 'User' }, { t: 'Controller', hl: true }, { t: 'Model', sub: '↔ database' }, { t: 'View' }, { t: 'User' }], { cap: 'MVC request flow.' }),
  ex: [
    M.ex('Introductory', R`<p>In an MVC seller portal, which part coordinates the GUI views on screen?</p>`, R`<p><b>Controller.</b></p><p><b>Now suppose</b> the question asked which part holds classes that mirror the database tables → <b>Model</b>.</p>`),
    M.ex('Standard', R`<p>A mobile app calls the server’s <code>/orders</code> REST endpoint. Is the REST API a component or a connector?</p>`, R`<p><b>Connector</b> — it carries information between two components (app and server).</p>`),
    M.ex('Exam-level', R`<p>Why does MVC make it easy to add a mobile app to an existing web portal?</p>`, R`<p>The model (data, business logic) is separate from views. A new mobile view (and its controller) reuses the same model, without changing business logic.</p>`)],
  math: M.rule('<p><b>Model = data/logic. View = display. Controller = input + coordination. Component = work. Connector = communication.</b></p>')
    + M.why([['View for “coordinates views”', 'the view displays; the controller coordinates.'], ['Database as a connector', 'a database is a component; the query call is the connector.']]),
  conn: R`<p><b>At work:</b> Django calls it Model–Template–View; React front-ends talk to back-end models through REST connectors.</p><p><b>Earlier:</b> interfaces (Week 5) are how components communicate — connectors implement them.</p><p><b>Next:</b> SOLID principles for designing the classes inside each component.</p>`,
  mis: M.ul(['View vs Controller.', 'Component vs connector.']),
  exam: R`<p><b>Fast method:</b> data → model; screen → view; coordinates/handles input → controller.</p>`
});
Q({ cp: 'mvc', type: 'mcq', diff: 'easy', q: 'In MVC, which part manages data and business logic?', opts: ['Model', 'View', 'Controller', 'Connector'], ans: 0,
  why: ['Correct.', 'Presentation.', 'Coordination.', 'Not an MVC part.'], sol: 'Model.' });
Q({ cp: 'mvc', type: 'mcq', diff: 'moderate', q: 'A message queue that carries order events from the shop service to the warehouse service is a:', opts: ['Component', 'Connector', 'Model', 'View'], ans: 1,
  why: ['It does not do business work itself.', 'Correct: it transmits information.', 'No.', 'No.'], sol: 'Carries information → connector.' });
Q({ cp: 'mvc', type: 'mcq', diff: 'moderate', q: 'Which part receives the user’s click and decides which model update and view refresh happen?', opts: ['Model', 'View', 'Controller', 'Database'], ans: 2,
  why: ['No.', 'It only displays.', 'Correct.', 'No.'], sol: 'Controller.' });
Q({ cp: 'mvc', type: 'short', diff: 'easy', q: 'Explain the three parts of MVC and the difference between a component and a connector.',
  model: '<p><b>Model:</b> data and business logic. <b>View:</b> presentation of the model to the user. <b>Controller:</b> receives user input, updates the model and coordinates views. A <b>component</b> performs a well-defined function (server, database); a <b>connector</b> transmits information between components (function call, REST API, message queue).</p>' });

/* ---------------- 8.2 SOLID ---------------- */
C({ id: 'solid', week: 8, title: 'SOLID: single responsibility, open–closed, Liskov substitution', pri: 'High', prereq: ['coupling-cohesion', 'class-relationships'],
  src: 'Revision notes W8 §8.4 · Study guide ch.8 §8.3 · PYQs 2023 T1 Q253',
  oneLine: 'S: one class, one reason to change. O: add new behaviour by extending, not by editing working code. L: a subclass must work wherever its base class is expected. (I and D in the next concept.)',
  misShort: 'Calling a subclass that breaks when substituted an OCP violation — that is LSP.',
  intu: R`<p>Five rules from Robert Martin for classes that stay easy to change.</p>
<p><b>S — Single responsibility.</b> An <code>Invoice</code> class that calculates totals, prints PDFs, emails customers and saves to the database has four reasons to change. Split it.</p>
<p><b>O — Open–closed.</b> To add UPI payments you open <code>Payment</code> and add another <code>if</code>. Every edit risks breaking cards and cash. Instead, add a new <code>UPIPayment</code> class: open for extension, closed for modification.</p>
<p><b>L — Liskov substitution.</b> Code that works with a <code>Payment</code> should keep working when handed a <code>CardPayment</code>. If substituting the subclass causes errors, the hierarchy is wrong.</p>`,
  why: R`<ul><li>2023 T1 Q253: “changing the object types from the derived class to the base class causes errors” → LSP.</li><li>SRP and OCP are the usual distractors in all SOLID questions.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Single responsibility (SRP)</b> — every class has one responsibility, i.e. one reason to change.',
    '<b>Open–closed (OCP)</b> — software entities are open for extension but closed for modification.',
    '<b>Liskov substitution (LSP)</b> — objects of a derived class must be substitutable for objects of the base class without breaking correctness.',
    '<b>Interface segregation (ISP)</b> and <b>dependency inversion (DIP)</b> — next concept.']))
    + '<p><b>In words:</b> one job per class; extend, don’t edit; subclasses must behave like their parents.</p>',
  vis: M.table(['Principle', 'Violation signature in a stem', 'Fix'], [['SRP', 'one class does many unrelated things', 'split into focused classes'], ['OCP', 'had to edit old, working code to add a new case', 'add a subclass / implementation'], ['LSP', 'substituting a derived object for the base breaks things', 'fix the hierarchy'], ['ISP', 'forced to implement methods it does not need', 'split the interface'], ['DIP', 'high-level class hard-wired to one concrete class', 'depend on an interface']], 'The five signatures. The last two are detailed in the next concept.'),
  ex: [
    M.ex('Introductory', R`<p>Classes <code>CashPayment</code>, <code>CardPayment</code> and <code>UPIPayment</code> derive from <code>Payment</code>. Changing object types from the derived class to the base class causes errors. Which principle is violated?</p>`,
      R`<p><b>Liskov substitution</b> (2023 T1 Q253): derived and base objects are not interchangeable.</p><p><b>Now suppose</b> instead that adding <code>UPIPayment</code> required editing the existing <code>Payment.process()</code> method with a new <code>if</code>. That is an <b>open–closed</b> violation.</p>`),
    M.ex('Standard', R`<p>A <code>Restaurant</code> class stores restaurant details and also manages every food item’s price, stock and description. Principle violated, and fix?</p>`, R`<p><b>SRP.</b> Split into <code>Restaurant</code> and <code>FoodItem</code>.</p>`),
    M.ex('Exam-level', R`<p><code>EncryptedDocument</code> extends <code>Document</code>, but its <code>print()</code> throws an exception. Code that prints a list of documents crashes. Principle?</p>`, R`<p><b>LSP</b> — the subclass cannot stand in for the base class. Not ISP: there is no interface forcing irrelevant methods; the method exists in the base and the subclass breaks its contract.</p>`)],
  math: M.rule('<p><b>S</b> one reason to change · <b>O</b> extend, don’t edit · <b>L</b> subclass substitutable for base.</p>')
    + M.why([['OCP for “derived object substituted for base causes errors”', 'that is substitution → LSP.'], ['SRP for “had to edit old code”', 'editing to add a case → OCP.']]),
  conn: R`<p><b>At work:</b> code review comments like “this class does too much” (SRP) and “add a strategy instead of another elif” (OCP).</p><p><b>Earlier:</b> high cohesion (Week 5) is SRP at module level; inheritance arrows (Week 5) are where LSP applies.</p><p><b>Next:</b> ISP and DIP, the most-asked pair.</p>`,
  mis: M.ul(['OCP vs LSP (2023 T1 Q253).']),
  exam: R`<p><b>Fast method:</b> look for the verb — “does too much” (S), “had to modify” (O), “substituting breaks” (L), “forced to implement” (I), “depends on concrete class / refined to an interface” (D).</p>`
});
Q({ cp: 'solid', type: 'mcq', diff: 'easy', q: 'A <code>Report</code> class computes statistics, formats HTML, emails it and archives it to disk. Which principle is violated?', opts: ['Single responsibility', 'Open–closed', 'Liskov substitution', 'Dependency inversion'], ans: 0,
  why: ['Correct: four reasons to change.', 'No editing for a new case is described.', 'No substitution.', 'No concrete dependency described.'], sol: 'Many jobs → SRP.' });
Q({ cp: 'solid', type: 'mcq', diff: 'moderate', q: 'Every new shipping carrier requires adding another <code>elif carrier == ...</code> inside the tested <code>ShippingCost.calculate()</code>. Principle violated?', opts: ['SRP', 'OCP', 'LSP', 'ISP'], ans: 1,
  why: ['The class has one job.', 'Correct: modification instead of extension.', 'No subclass substitution.', 'No interface forcing methods.'], sol: 'Editing working code for a new case → OCP.' });
Q({ cp: 'solid', type: 'mcq', diff: 'moderate', q: '<code>Penguin</code> extends <code>Bird</code>, and <code>Bird.fly()</code> is overridden to raise an error. A function that makes a list of birds fly crashes on penguins. Principle violated?', opts: ['LSP', 'OCP', 'SRP', 'DIP'], ans: 0,
  why: ['Correct.', 'No.', 'No.', 'No.'], sol: 'Subclass not substitutable → LSP.' });
Q({ cp: 'solid', type: 'short', diff: 'moderate', q: 'State SRP, OCP and LSP, each with a one-line example of a violation.',
  model: '<p><b>SRP:</b> a class should have one reason to change — violated by an Invoice class that calculates, prints and emails. <b>OCP:</b> open for extension, closed for modification — violated when adding UPI requires editing the Payment class. <b>LSP:</b> a derived object must be usable wherever the base is — violated when EncryptedDocument.print() throws while Document.print() works.</p>' });

C({ id: 'solid-isp-dip', week: 8, title: 'Interface segregation and dependency inversion', pri: 'High', prereq: ['solid'],
  src: 'Revision notes W8 §8.4 · Study guide ch.8 §8.3 · PYQs 2023 T2 Q18, 2024 T1 Q40, 2024 T2 Q19, 2024 T3 Q13, 2025 T1 Q36, 2025 T2 Q143, 2025 T3 Q20, 2026 T1 Q24, 2026 T2 Q19',
  oneLine: 'ISP: no class should be forced to implement methods it does not need — split fat interfaces. DIP: high-level classes should depend on an abstraction (interface), not on a concrete class — the refined design inserts an interface between them.',
  misShort: 'Seeing “interface” in a refined class diagram and answering ISP — when a concrete class is replaced by an interface the answer is DIP.',
  intu: R`<p><b>ISP.</b> A delivery interface demands <code>packageOrder()</code>, <code>bookDeliveryPartner()</code> and <code>deliver()</code>. Gift coupons are digital: nothing to package, no partner to book. Yet the digital-delivery class must still write those methods, doing nothing. The interface is too fat. Split it into a physical-delivery interface and a digital-delivery interface.</p>
<p><b>DIP.</b> <code>DeviceManager</code> talks directly to <code>BulbController</code>. To control fans and ACs you would have to change <code>DeviceManager</code>. Instead, make <code>DeviceManager</code> talk to a <code>Controller</code> interface; bulbs, fans and ACs each implement it. The high-level class now depends on an abstraction.</p>`,
  why: R`<ul><li>Nine papers — the most-asked Week 8 idea. ISP seven times (delivery interfaces, smart devices, e-books); DIP twice, both with “before/after” class diagrams.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Interface segregation (ISP)</b> — clients should not be forced to depend on (implement) methods they do not use. Prefer several small, specific interfaces over one large one.',
    '<b>Dependency inversion (DIP)</b> — high-level modules should not depend on low-level modules; both should depend on abstractions. Concretely: a class refers to an interface, and concrete classes implement it.',
    'ISP advantage: each implementer provides only the methods relevant to it — no meaningless (empty) implementations.',
    'DIP advantage: new concrete classes (FanController, PurchasedComponent) can be added without changing the high-level class.']))
    + '<p><b>In words:</b> ISP = thin interfaces; DIP = depend on the interface, not the concrete class.</p>',
  vis: M.uml([{ id: 'D', name: 'DeviceManager', ops: ['+ addDevMgr()', '+ removeDevMgr()'], x: 0, y: 10 }, { id: 'C', name: 'Controller «interface»', ops: ['+ switch_on()', '+ switch_off()'], x: 280, y: 10 },
      { id: 'B', name: 'BulbController', x: 150, y: 170, compact: 1 }, { id: 'F', name: 'FanController', x: 300, y: 170, compact: 1 }, { id: 'A', name: 'ACController', x: 450, y: 170, compact: 1 }],
      [{ a: 'D', b: 'C', k: 'assoc' }, { a: 'B', b: 'C', k: 'inh' }, { a: 'F', b: 'C', k: 'inh' }, { a: 'A', b: 'C', k: 'inh' }])
    + '<div class="mcap">DIP (2024 T1 Q40): DeviceManager depends on the Controller abstraction; each device implements it.</div>',
  ex: [
    M.ex('Introductory', R`<p>An online gift store’s <code>DeliveryProcessing</code> interface has <code>packageOrder()</code>, <code>notifyCustomer()</code>, <code>bookDeliveryPartner()</code>, <code>deliver()</code>. Digital gift items must implement methods that are irrelevant to them. Which principle is missing?</p>`,
      R`<p><b>Interface segregation</b> (2024 T3 Q13; same idea in 2024 T2 Q19, 2025 T2 Q143, 2026 T1 Q24, 2026 T2 Q19, and with smart devices in 2025 T1 Q36).</p><p><b>Now suppose</b> the question asked for the <i>advantage</i> of applying ISP: each class implements only the methods relevant to its delivery type, avoiding meaningless implementations (2025 T3 Q20).</p>`),
    M.ex('Standard', R`<p>Initially <code>DeviceManager → BulbController</code>. Refined: <code>DeviceManager → Controller «interface»</code>, implemented by BulbController, FanController, ACController. Principle considered?</p>`,
      R`<p><b>Dependency inversion</b> (2024 T1 Q40). The high-level class now depends on an abstraction. Not ISP — no class is forced to implement irrelevant methods; not OCP, though extension is the benefit.</p>`),
    M.ex('Exam-level', R`<p><code>Producer → ManufacturedComponent</code> is refined to <code>Producer → Component «interface»</code>, implemented by <code>ManufacturedComponent</code> and the new <code>PurchasedComponent</code>. Principle?</p>`,
      R`<p><b>Dependency inversion</b> (2023 T2 Q18). Same shape as Q40: a concrete dependency replaced by an interface.</p><p>Why not OCP? OCP is the outcome (new kinds added without editing Producer), but the refinement itself — inserting an abstraction the high-level class depends on — is DIP, and that is the key.</p>`)],
  math: M.rule('<p><b>“Forced to implement irrelevant / empty methods” → ISP. “Concrete class replaced by an interface the high-level class depends on” → DIP.</b></p>')
    + M.why([['ISP for the before/after interface diagrams', 'nothing is forced on anyone; a dependency is redirected → DIP.'], ['LSP for e-books implementing packItem()', 'no substitution failure; the interface is too wide → ISP.'], ['OCP for DIP diagrams', 'extension is the benefit, but the key is DIP.']]),
  conn: R`<p><b>At work:</b> dependency injection frameworks (Spring) are built around DIP; small role interfaces (Python protocols, Java interfaces) apply ISP.</p><p><b>Earlier:</b> low coupling (Week 5) — DIP reduces coupling to concrete classes.</p><p><b>Next:</b> design patterns, many of which apply these principles.</p>`,
  mis: M.ul(['ISP for DIP diagrams (2023 T2 Q18, 2024 T1 Q40).', 'LSP or OCP for fat interfaces (2024 T2 Q19).', 'Option 1 of 2025 T3 Q20 (“forced to implement all methods, ensuring consistency”) — that describes the problem, not the advantage.']),
  exam: R`<p><b>Fast method:</b> if the stem lists interface methods and says some class “must implement” ones it does not need → ISP. If the stem shows a before/after diagram where an «interface» is inserted between two classes → DIP.</p>`
});
Q({ cp: 'solid-isp-dip', type: 'mcq', diff: 'easy', q: 'A <code>Printer</code> interface has <code>print()</code>, <code>scan()</code>, <code>fax()</code>. A basic printer class must implement <code>scan()</code> and <code>fax()</code> as empty methods. Principle violated?', opts: ['ISP', 'DIP', 'LSP', 'SRP'], ans: 0,
  why: ['Correct.', 'No concrete dependency issue.', 'No substitution described.', 'The class has one job.'], sol: 'Forced empty methods → ISP.' });
Q({ cp: 'solid-isp-dip', type: 'mcq', diff: 'moderate', q: '<code>Order</code> creates and calls <code>StripePayment</code> directly. The refined design has <code>Order</code> use a <code>PaymentGateway</code> interface implemented by Stripe, PayPal and UPI classes. Principle applied?', opts: ['ISP', 'DIP', 'SRP', 'LSP'], ans: 1,
  why: ['No class is forced to implement extra methods.', 'Correct.', 'No.', 'No.'], sol: 'Depend on abstraction → DIP.' });
Q({ cp: 'solid-isp-dip', type: 'mcq', diff: 'moderate', q: 'What is the fix for an ISP violation?', opts: ['Merge all interfaces into one', 'Split the large interface into smaller, client-specific interfaces', 'Make every method static', 'Remove inheritance'], ans: 1,
  why: ['The opposite.', 'Correct.', 'No.', 'No.'], sol: 'Thin interfaces.' });
Q({ cp: 'solid-isp-dip', type: 'short', diff: 'moderate', q: 'How do you tell an ISP question from a DIP question in an exam stem? Give one example of each.',
  model: '<p><b>ISP:</b> the stem says a class is forced to implement interface methods that are irrelevant to it — e.g. an e-book processor forced to implement <code>packItem()</code> and <code>shipItem()</code>. <b>DIP:</b> the stem shows a high-level class that depended on a concrete class being refined to depend on an interface, with concrete classes implementing it — e.g. DeviceManager → Controller interface ← Bulb/Fan/AC controllers.</p>' });

/* ---------------- 8.3 Patterns ---------------- */
C({ id: 'patterns-creational', week: 8, title: 'Creational patterns: Factory, Builder, Singleton', pri: 'High', prereq: ['solid'],
  src: 'Revision notes W8 §8.5 · Study guide ch.8 §8.4 · PYQs 2023 T3 Q195, 2023 T3 Q196, 2024 T2 Q20, 2024 T3 Q15, 2025 T3 Q21',
  oneLine: 'Creational patterns are about creating objects. Factory: create objects without exposing which concrete class is built. Builder: build a complex object step by step — the fix for telescoping constructors (many optional fields). Singleton: exactly one instance.',
  misShort: 'Choosing Factory for “many optional fields / many constructors” — that is Builder.',
  intu: R`<p>A design pattern is a proven, reusable template for a recurring design problem — not finished code.</p>
<p><b>Builder.</b> An <code>Applicant</code> has 3 mandatory fields and 10 optional ones. Writing a constructor for every combination gives dozens of constructors — “telescoping constructors”. A builder lets you write <code>ApplicantBuilder(name, phone, email).experience(3).pan("…").build()</code>: one step at a time, only the fields you need.</p>
<p><b>Factory.</b> <code>VehicleFactory.create("bike")</code> returns the right object; the caller never writes <code>new Bike()</code>.</p>
<p><b>Singleton.</b> One logger, one configuration manager for the whole app.</p>`,
  why: R`<ul><li>Builder is keyed four times (2023 T3 Q196, 2024 T2 Q20, 2024 T3 Q15, 2025 T3 Q21) — always the telescoping-constructor story.</li><li>2023 T3 Q195: creational = Singleton, Factory Method.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Design pattern</b> — a description of communicating objects and classes customised to solve a general, recurring design problem in a context. A template, not code; every pattern has a cost.',
    '<b>Three families:</b> creational (object creation), structural (composing classes/objects), behavioural (interaction and responsibility).',
    '<b>Factory</b> — creates objects without exposing creation logic; the caller asks for a type. Pros: centralised creation, loose coupling, SRP + OCP.',
    '<b>Builder</b> — constructs a complex object step by step; avoids telescoping constructors when there are many optional fields. Pros: readable, SRP.',
    '<b>Singleton</b> — ensures only one instance exists, with global access (private constructor, static instance): logger, config, connection pool.']))
    + '<p><b>In words:</b> Factory picks what to build; Builder assembles it piece by piece; Singleton guarantees there is only one.</p>',
  vis: M.uml([{ id: 'C', name: 'Course', attrs: ['- course_id', '- course_name', '- instructor', '- course_ta', '- duration'], ops: ['+ Course(CourseCreator c)'], x: 0, y: 10 },
      { id: 'B', name: 'CourseCreator', attrs: ['- course_id', '- course_name', '- …'], ops: ['+ CourseCreator(id, name, instr)', '+ Course_TA(ta)', '+ Duration(d)', '+ build(): Course'], x: 300, y: 10 }],
      [{ a: 'B', b: 'C', k: 'dep' }])
    + '<div class="mcap">Builder (2024 T2 Q20): four telescoping constructors are replaced by a builder with one method per optional field and build().</div>',
  ex: [
    M.ex('Introductory', R`<p>A <code>Book</code> class has mandatory ISBN, title, cost and optional author, year, description. Multiple constructors lead to telescoping constructors. Pattern?</p>`,
      R`<p><b>Builder</b> (2025 T3 Q21; same story with Employee TA/HRA in 2023 T3 Q196 and Applicant in 2024 T3 Q15).</p><p><b>Now suppose</b> the problem were instead “the client should not decide whether to create a PDFBook or an EPUBBook object”. That is about which class to instantiate → <b>Factory</b>.</p>`),
    M.ex('Standard', R`<p>Select the creational patterns: Singleton, Factory Method, Adapter, Decorator, Observer.</p>`,
      R`<p><b>Singleton, Factory Method</b> (2023 T3 Q195). Adapter and Decorator are structural; Observer is behavioural.</p>`),
    M.ex('Exam-level', R`<p>A logging module must write to one shared file from every part of the app; two logger objects would interleave lines. Pattern, and its key implementation traits?</p>`,
      R`<p><b>Singleton</b>: private constructor, one static instance, a global access method (e.g. <code>Logger.get()</code>).</p>`)],
  math: M.rule('<p><b>Many optional fields / telescoping constructors → Builder. Hide which concrete class is created → Factory. Exactly one instance → Singleton.</b> All three are creational.</p>')
    + M.why([['Factory for telescoping constructors', 'Factory chooses a class; it does not solve optional-field combinations.'], ['Facade for Builder diagrams', 'Facade simplifies a subsystem; Builder constructs one object.'], ['Adapter as creational', 'it is structural.']]),
  conn: R`<p><b>At work:</b> Python’s <code>logging.getLogger()</code> behaves like a singleton per name; ORMs and HTTP clients use builder-style chaining.</p><p><b>Earlier:</b> SRP and OCP — Factory and Builder both apply them.</p><p><b>Next:</b> structural patterns (Adapter, Facade).</p>`,
  mis: M.ul(['Factory for Builder (all four Builder PYQs).', 'Adapter/Decorator as creational (2023 T3 Q195).']),
  exam: R`<p><b>Fast method:</b> “mandatory + optional fields”, “many constructors”, “telescoping” → Builder, every time.</p>`
});
Q({ cp: 'patterns-creational', type: 'mcq', diff: 'easy', q: 'A pizza order has a mandatory size and up to 15 optional toppings and extras. To avoid dozens of constructors, use:', opts: ['Builder', 'Factory', 'Adapter', 'Observer'], ans: 0,
  why: ['Correct.', 'Factory chooses a class.', 'Structural.', 'Behavioural.'], sol: 'Optional fields → Builder.' });
Q({ cp: 'patterns-creational', type: 'mcq', diff: 'moderate', q: 'A courier app calls <code>CourierFactory.get("bluedart")</code> and receives a BlueDart object without knowing its class. Pattern?', opts: ['Factory', 'Builder', 'Singleton', 'Facade'], ans: 0,
  why: ['Correct.', 'No step-by-step construction.', 'Not about one instance.', 'Not hiding a multi-step subsystem.'], sol: 'Hide which class is created → Factory.' });
Q({ cp: 'patterns-creational', type: 'msq', diff: 'moderate', q: 'Select ALL creational patterns.', opts: ['Builder', 'Singleton', 'Facade', 'Strategy', 'Factory'], ans: [0, 1, 4],
  why: ['Creational.', 'Creational.', 'Structural.', 'Behavioural.', 'Creational.'], sol: 'Factory, Builder, Singleton.' });
Q({ cp: 'patterns-creational', type: 'short', diff: 'moderate', q: 'What is the telescoping-constructor problem and how does the Builder pattern solve it?',
  model: '<p>When a class has a few mandatory and many optional fields, you end up writing a constructor for each combination, each calling the next with more arguments — many hard-to-read constructors. Builder replaces them with a builder object: start with the mandatory fields, set only the optional fields you need with one method each, then call <code>build()</code> to get the finished object.</p>' });

C({ id: 'patterns-structural', week: 8, title: 'Structural patterns: Adapter and Facade', pri: 'High', prereq: ['patterns-creational'],
  src: 'Revision notes W8 §8.5 · Study guide ch.8 §8.4 · PYQs 2023 T1 Q254, 2023 T2 Q12, 2024 T1 Q27, 2025 T1 Q35, 2025 T2 Q144, 2026 T1 Q23, 2026 T2 Q8',
  oneLine: 'Adapter: a converter class that makes two incompatible interfaces work together (XML ↔ JSON, EUR → USD, sensor format). Facade: one simple method that hides and orchestrates a multi-step subsystem (publishCourse(), placeOrder(), performAdmission()).',
  misShort: 'Choosing Facade for a format converter — conversion between incompatible formats is Adapter.',
  intu: R`<p>Two kinds of “making things simpler”.</p>
<p><b>Adapter.</b> Your laptop charger has a US plug; the wall socket is Indian. A travel adapter converts one shape to the other. In code: the dashboard speaks JSON, the database speaks XML; a <code>FormatConverter</code> sits between them and translates.</p>
<p><b>Facade.</b> Placing an order means: create the order, notify the seller, call packaging, call delivery — in the right order, handling errors. Instead of every client doing all four, an <code>OrderService.placeOrder()</code> does them all behind one call. The building’s front face (façade) hides the rooms behind.</p>`,
  why: R`<ul><li>Seven papers. Adapter four times (invoice format, sensor format, XML/JSON, currencies); Facade three times (course publishing, order placement, university admission).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Structural patterns</b> — concern how classes and objects are composed: Adapter, Facade, Composite, Decorator.',
    '<b>Adapter</b> — converts the interface of a class into another interface clients expect, so that incompatible classes can work together. Pros: SRP, OCP. Con: extra complexity.',
    '<b>Facade</b> — provides one simplified interface to a complex subsystem, coordinating its parts. Pros: isolates clients from complexity. Con: the facade can become tightly coupled and hard to maintain.']))
    + '<p><b>In words:</b> Adapter translates a mismatch; Facade hides many steps behind one call.</p>',
  vis: M.uml([{ id: 'D', name: 'DashBoard', ops: ['+ display(s: JSON)', '+ sendQuery(s): JSON'], x: 0, y: 170 }, { id: 'F', name: 'FormatConverter', ops: ['+ convertJSON(s: JSON): XML', '+ convertXML(s: XML): JSON'], x: 280, y: 170 },
      { id: 'X', name: 'DBAccess', attrs: ['- conStr'], ops: ['+ query(s): XML'], x: 300, y: 0 }],
      [{ a: 'D', b: 'F', k: 'assoc' }, { a: 'F', b: 'X', k: 'assoc' }])
    + '<div class="mcap">Adapter (2024 T1 Q27): FormatConverter translates between the JSON the dashboard understands and the XML the database returns.</div>',
  ex: [
    M.ex('Introductory', R`<p>An e-commerce <code>PaymentProcessor</code> accepts only USD, but gateways return amounts in EUR and INR. Pattern?</p>`,
      R`<p><b>Adapter</b> (2025 T1 Q35): a converter makes the incompatible currencies usable.</p><p><b>Now suppose</b> the stem said “every checkout must call fraud check, currency conversion, gateway charge and receipt email in order, so a <code>CheckoutService.pay()</code> was created to do all four”. One call hiding many steps → <b>Facade</b>.</p>`),
    M.ex('Standard', R`<p>A startup creates <code>CoursePublisher.publishCourse(course)</code>, which verifies the instructor, checks plagiarism, converts videos and updates the catalogue in the right order. Pattern?</p>`,
      R`<p><b>Facade</b> (2025 T2 Q144; also 2026 T1 Q23 <code>OrderService.placeOrder()</code> and 2026 T2 Q8 <code>UniversityPortal.performAdmission()</code>).</p>`),
    M.ex('Exam-level', R`<p>A smartwatch’s AI app cannot interpret the data format of its biomedical sensors; the designer adds <code>FormatConverter</code>. Why Adapter and not Facade?</p>`,
      R`<p><b>Adapter</b> (2023 T2 Q12). The problem is an <i>interface mismatch</i> (formats), not a <i>complex multi-step subsystem</i>. Facade would hide many steps; here one thing is being translated.</p>`)],
  math: M.rule('<p><b>Incompatible format / interface / currency + converter → Adapter. One simple method that internally performs many subsystem steps in order → Facade.</b></p>')
    + M.why([['Facade for a converter', 'no multi-step subsystem is being hidden.'], ['Adapter for publishCourse()', 'nothing is incompatible; many steps are orchestrated.'], ['Builder for a single orchestrating method', 'Builder constructs one object step by step, called by the client.']]),
  conn: R`<p><b>At work:</b> SDK wrappers around legacy APIs are adapters; “service layer” methods like <code>checkout()</code> are facades.</p><p><b>Earlier:</b> interfaces (Week 5); low coupling — clients depend only on the facade.</p><p><b>Next:</b> behavioural patterns.</p>`,
  mis: M.ul(['Facade for Adapter stems (2023 T1 Q254 option 2).', 'Builder or Adapter for Facade stems (2026 T1 Q23).']),
  exam: R`<p><b>Fast method:</b> “not compatible”, “converts the format”, “different currencies” → Adapter. “Simple method … internally … in the correct order” → Facade.</p>`
});
Q({ cp: 'patterns-structural', type: 'mcq', diff: 'easy', q: 'A temperature sensor reports °C; the cooling unit’s controller accepts only °F. A <code>CelsiusToFahrenheit</code> class is inserted between them. Pattern?', opts: ['Adapter', 'Facade', 'Builder', 'Strategy'], ans: 0,
  why: ['Correct.', 'No multi-step subsystem.', 'No.', 'No.'], sol: 'Incompatible format → Adapter.' });
Q({ cp: 'patterns-structural', type: 'mcq', diff: 'moderate', q: 'A <code>HomeTheatre.watchMovie()</code> method turns on the projector, dims the lights, starts the sound system and plays the film. Pattern?', opts: ['Facade', 'Adapter', 'Observer', 'Factory'], ans: 0,
  why: ['Correct.', 'Nothing is incompatible.', 'No subscriptions.', 'No creation.'], sol: 'One call hides many steps → Facade.' });
Q({ cp: 'patterns-structural', type: 'mcq', diff: 'moderate', q: 'A known disadvantage of the Facade pattern is:', opts: ['It cannot call more than one class', 'The facade can become tightly coupled to the subsystem and hard to maintain', 'It always duplicates data', 'It requires a singleton'], ans: 1,
  why: ['No.', 'Correct.', 'No.', 'No.'], sol: 'Facade coupling cost.' });
Q({ cp: 'patterns-structural', type: 'short', diff: 'moderate', q: 'Adapter and Facade both “simplify”. Explain the difference with one example each.',
  model: '<p><b>Adapter</b> translates between two incompatible interfaces so they can work together — e.g. a FormatConverter between an XML database and a JSON dashboard. <b>Facade</b> hides a complex, multi-step subsystem behind one simple method — e.g. <code>placeOrder()</code> creating the order, notifying the seller, packaging and delivering in order.</p>' });

C({ id: 'patterns-behavioural', week: 8, title: 'Behavioural patterns: Strategy, Observer, Iterator', pri: 'Supporting', prereq: ['patterns-structural'],
  src: 'Revision notes W8 §8.5 · Study guide ch.8 §8.4',
  oneLine: 'Strategy: interchangeable algorithms behind one interface, chosen at run time (payment methods, sort algorithms). Observer: a subject notifies all its subscribers on change. Iterator: traverse a collection with next() without exposing its internals.',
  misShort: 'Choosing Strategy for “notify all subscribers” — that is Observer.',
  intu: R`<p><b>Strategy.</b> Checkout supports cash, card, UPI, wallet. Instead of a long <code>if/elif</code>, each is a class implementing <code>PaymentStrategy.pay()</code>; checkout just calls whichever one the user picked.</p>
<p><b>Observer.</b> A YouTube channel uploads a video; every subscriber is notified automatically. The channel (subject) keeps a list of observers and calls them on change.</p>
<p><b>Iterator.</b> You walk through a playlist with <code>next()</code> without knowing whether it is stored as a list, a tree or a database cursor.</p>`,
  why: R`<ul><li>Strategy is a distractor in Adapter and Facade questions; Observer appears in 2023 T3 Q195 as a non-creational option. Graded assignments test all three.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Behavioural patterns</b> — concern interaction and distribution of responsibility between objects.',
    '<b>Strategy</b> — define a family of algorithms in separate interchangeable classes; select one at run time. Pros: OCP, no large if-else. Con: overkill for few algorithms.',
    '<b>Observer</b> — a subject maintains a list of observers and notifies them automatically when its state changes (publish/subscribe).',
    '<b>Iterator</b> — an object that traverses a collection (<code>hasNext()</code>, <code>next()</code>) without exposing its internal structure.']))
    + '<p><b>In words:</b> swap the algorithm; notify the many; walk the collection.</p>',
  vis: M.table(['Pattern', 'Family', 'One-liner', 'Stem keyword'], [['Factory', 'Creational', 'creates objects', 'avoid direct object creation'], ['Builder', 'Creational', 'step-by-step construction', 'optional fields, telescoping'], ['Singleton', 'Creational', 'one instance', 'only one logger/config'], ['Adapter', 'Structural', 'compatibility', 'incompatible format, converter'], ['Facade', 'Structural', 'one entry point', 'one method does all steps'], ['Strategy', 'Behavioural', 'swap algorithms', 'interchangeable methods at run time'], ['Observer', 'Behavioural', 'one notifies many', 'subscribe, notify'], ['Iterator', 'Behavioural', 'traverse', 'next(), hasNext()']], 'All eight patterns on one page.'),
  ex: [
    M.ex('Introductory', R`<p>A navigation app lets users choose fastest, shortest or toll-free routing; each is a separate class implementing <code>RouteStrategy</code>. Pattern?</p>`, R`<p><b>Strategy.</b></p><p><b>Now suppose</b> the app instead pushes a traffic alert to every user who follows a road. Subscribers notified on change → <b>Observer</b>.</p>`),
    M.ex('Standard', R`<p>When a seller lists a new product, every buyer who follows that seller gets a notification. Pattern?</p>`, R`<p><b>Observer.</b></p>`),
    M.ex('Exam-level', R`<p>A team replaces a 12-branch <code>if/elif</code> over compression formats with one class per format behind a <code>Compressor</code> interface. Which pattern, and which SOLID principle does it support?</p>`, R`<p><b>Strategy</b>, supporting <b>OCP</b>: adding a 13th format means adding a class, not editing the dispatcher.</p>`)],
  math: M.rule('<p><b>Interchangeable algorithms → Strategy. Subscribers notified → Observer. next()/hasNext() → Iterator.</b></p>')
    + M.why([['Strategy for subscribe/notify', 'Observer.'], ['Observer as creational', 'behavioural.']]),
  conn: R`<p><b>At work:</b> event listeners in JavaScript are Observer; Python’s <code>for</code> loop uses the iterator protocol; sort key functions are a light Strategy.</p><p><b>Earlier:</b> OCP and DIP.</p><p><b>Next:</b> design smells — what happens when principles are ignored.</p>`,
  mis: M.ul(['Strategy vs Observer.', 'Strategy as a distractor for Adapter/Facade (2023 T1 Q254, 2025 T2 Q144).']),
  exam: R`<p><b>Fast method:</b> “choose at run time among methods” → Strategy; “notify / subscribers” → Observer; “traverse / next” → Iterator.</p>`
});
Q({ cp: 'patterns-behavioural', type: 'mcq', diff: 'easy', q: 'A stock-price service notifies every registered dashboard whenever a price changes. Pattern?', opts: ['Observer', 'Strategy', 'Iterator', 'Builder'], ans: 0,
  why: ['Correct.', 'No.', 'No.', 'No.'], sol: 'Notify subscribers → Observer.' });
Q({ cp: 'patterns-behavioural', type: 'mcq', diff: 'moderate', q: 'A checkout supports Cash, Card, UPI and Wallet; each is a class implementing <code>pay()</code>, chosen at run time. Pattern?', opts: ['Strategy', 'Facade', 'Adapter', 'Singleton'], ans: 0,
  why: ['Correct.', 'Not hiding a subsystem.', 'No incompatibility.', 'No.'], sol: 'Interchangeable algorithms → Strategy.' });
Q({ cp: 'patterns-behavioural', type: 'mcq', diff: 'moderate', q: 'Which pattern family does Iterator belong to?', opts: ['Creational', 'Structural', 'Behavioural', 'Architectural'], ans: 2,
  why: ['No.', 'No.', 'Correct.', 'Not a pattern family here.'], sol: 'Behavioural.' });
Q({ cp: 'patterns-behavioural', type: 'short', diff: 'easy', q: 'Name the three pattern families with two examples each.',
  model: '<p><b>Creational</b> (object creation): Factory, Builder, Singleton. <b>Structural</b> (composing classes/objects): Adapter, Facade (also Composite, Decorator). <b>Behavioural</b> (interaction and responsibilities): Strategy, Observer (also Iterator, Command).</p>' });

/* ---------------- 8.4 Design smells ---------------- */
C({ id: 'design-smells', week: 8, title: 'Design smells and anti-patterns', pri: 'Supporting', prereq: ['clean-code', 'solid'],
  src: 'Revision notes W8 §8.6 · Study guide ch.8 §8.5',
  oneLine: 'A design smell is a warning sign that a design is heading toward an anti-pattern (a bad, recurring, avoidable solution). Not a bug and not a compilation error; it signals that refactoring is needed. SOLID helps avoid smells; patterns are proven solutions.',
  misShort: 'Treating a design smell as a bug or a compile error.',
  intu: R`<p>A kitchen can still cook with a leaking tap. But the leak tells you trouble is coming.</p>
<p>A design smell is the leak: a class that every change touches, a giant interface, copy-pasted logic. The program still works — but changes are getting harder and riskier.</p>
<p>The cure is <b>refactoring</b>: moving code between classes, creating or removing classes — guided by SOLID, often ending in a known pattern.</p>`,
  why: R`<ul><li>Graded-assignment topic and the end-term link between Weeks 7 and 8; no Quiz 2 PYQ yet.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Anti-pattern</b> — a commonly used solution to a recurring problem that is ineffective and should be avoided.',
    '<b>Design smell</b> — a structure in the design that indicates violation of fundamental design principles and is heading toward an anti-pattern. Not a bug; does not stop compilation.',
    'Signals: refactoring is needed; the design is becoming difficult to change; future maintenance problems.',
    'Relations: patterns = proven solutions; smells = warning signs; SOLID = guidelines that prevent smells; refactoring = the remedy.']))
    + '<p><b>In words:</b> patterns are good habits, smells are early warnings, refactoring is the cure.</p>',
  vis: M.flow([{ t: 'Design smell', sub: 'warning sign' }, { t: 'Refactor', sub: 'guided by SOLID' }, { t: 'Pattern', sub: 'proven solution', hl: true }], { cap: 'Smell → refactor → (often) a pattern.' }),
  ex: [
    M.ex('Introductory', R`<p>Is a design smell a bug?</p>`, R`<p>No. The code can be correct and compile. A smell warns that the design will make future change costly.</p><p><b>Now suppose</b> the program crashes on some input. That is a failure caused by a fault — a bug, not a smell.</p>`),
    M.ex('Standard', R`<p>Every new payment method requires editing the same <code>Payment</code> class. Which principle is violated, and which pattern is a typical cure?</p>`, R`<p>OCP is violated (a smell of rigidity). Strategy (one class per method behind an interface) is the typical cure.</p>`),
    M.ex('Exam-level', R`<p>Order these: (a) apply Builder, (b) notice six constructors with overlapping parameter lists, (c) refactor <code>Applicant</code> creation.</p>`, R`<p>(b) smell noticed → (c) refactor → (a) arrive at the Builder pattern.</p>`)],
  math: M.rule('<p><b>Smell</b> = warning, not bug. <b>Anti-pattern</b> = bad recurring solution. <b>Refactoring</b> = remedy. <b>SOLID</b> = prevention. <b>Pattern</b> = proven solution.</p>')
    + M.why([['Smell = compile error', 'smelly code compiles.'], ['Pattern = anti-pattern', 'opposites: proven vs ineffective.']]),
  conn: R`<p><b>At work:</b> static-analysis tools flag smells (God class, long parameter lists) on pull requests.</p><p><b>Earlier:</b> code smells and refactoring (Week 7) at function level; this is the class/design level.</p><p><b>Next:</b> the cumulative mock.</p>`,
  mis: M.ul(['Smell = bug.', 'Pattern and anti-pattern confused.']),
  exam: R`<p><b>Fast method:</b> “warning sign”, “heading toward an anti-pattern”, “refactoring needed” → design smell.</p>`
});
Q({ cp: 'design-smells', type: 'mcq', diff: 'easy', q: 'A design smell is best described as:', opts: ['A compilation error', 'A runtime crash', 'A warning sign that the design is heading toward an anti-pattern', 'A proven reusable solution'], ans: 2,
  why: ['No.', 'That is a failure.', 'Correct.', 'That is a pattern.'], sol: 'Warning sign.' });
Q({ cp: 'design-smells', type: 'mcq', diff: 'moderate', q: 'The standard remedy for design smells is:', opts: ['Refactoring', 'Rewriting in another language', 'Adding comments', 'Profiling'], ans: 0,
  why: ['Correct.', 'Not required.', 'Does not fix the design.', 'Performance tool.'], sol: 'Refactoring.' });
Q({ cp: 'design-smells', type: 'msq', diff: 'moderate', q: 'Select ALL true statements.', opts: ['Design patterns are proven solutions', 'Design smells stop the code from compiling', 'SOLID principles help avoid design smells', 'An anti-pattern is a recurring but ineffective solution'], ans: [0, 2, 3],
  why: ['True.', 'False.', 'True.', 'True.'], sol: 'Smells do not affect compilation.' });
Q({ cp: 'design-smells', type: 'short', diff: 'easy', q: 'Explain how design patterns, design smells, SOLID and refactoring relate to each other.',
  model: '<p>Design <b>patterns</b> are proven solutions to recurring problems. Design <b>smells</b> are warning signs that a design is drifting toward an anti-pattern. <b>SOLID</b> principles are guidelines that help avoid smells. <b>Refactoring</b> — restructuring classes without changing behaviour — removes smells, often by introducing a pattern.</p>' });

/* ---------------- Week 8 harder variations ---------------- */
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A speech-to-text service passes audio through noise removal → voice detection → transcription → punctuation, each stage using the previous stage’s output. Users reach it by sending requests to the company’s API server. Which style describes the <b>internal processing</b>?', opts: ['Pipe-and-filter', 'Client–server', 'Peer-to-peer', 'MVC'], ans: 0,
  why: ['Correct.', 'Describes how users reach it, not the internal processing.', 'No.', 'No.'], sol: 'Internal chain → pipe-and-filter.', trap: 'The client–server sentence is true but answers a different level.' }, ['cs3001-2023T1-252', 'cs3001-2025T3-19', 'cs3001-2026T1-22', 'cs3001-2026T2-18']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which scenario is <b>NOT</b> peer-to-peer?', opts: ['Users exchange file chunks directly with each other, no central server', 'Every node keeps a copy of a ledger and shares transactions directly', 'A video-call app routes all calls through the company’s central media server', 'Classmates share notes directly between their laptops over local Wi-Fi'], ans: 2,
  why: ['P2P.', 'P2P.', 'Correct answer: a central server → client–server.', 'P2P.'], sol: 'A central server breaks P2P.', trap: 'Video calling is P2P in 2024 T1 Q30 — but only because there was no server.' }, ['cs3001-2024T1-30', 'cs3001-2025T1-29', 'cs3001-2025T2-142']);
VQ({ kind: 'nearmiss', type: 'mcq', q: '<code>Document</code> has <code>print()</code>. <code>ReadOnlyDocument</code> extends it and overrides <code>save()</code> to throw an exception, so code that saves a list of documents crashes. Which principle is violated?', opts: ['Liskov substitution', 'Interface segregation', 'Open–closed', 'Dependency inversion'], ans: 0,
  why: ['Correct: the subclass cannot stand in for its base.', 'No interface forces methods; it is inheritance breaking a contract.', 'No.', 'No.'], sol: 'Substitution breaks → LSP.', trap: 'ISP is tempting because a method is “irrelevant” to the subclass.' }, ['cs3001-2023T1-253']);
VQ({ kind: 'scenario', type: 'mcq', q: 'A ride app’s <code>TripService</code> originally created <code>GoogleMapsRouter</code> directly. The refined design has <code>TripService</code> depend on a <code>Router «interface»</code>, implemented by <code>GoogleMapsRouter</code> and <code>OpenStreetRouter</code>. Which principle does the refinement apply?', opts: ['Dependency inversion', 'Interface segregation', 'Single responsibility', 'Liskov substitution'], ans: 0,
  why: ['Correct.', 'No class is forced to implement irrelevant methods.', 'No.', 'No.'], sol: 'High-level class now depends on an abstraction → DIP.', trap: 'The word “interface” pulls toward ISP.' }, ['cs3001-2023T2-18', 'cs3001-2024T1-40']);
VQ({ kind: 'chained', type: 'mcq', q: 'A <code>SmartDevice</code> interface has <code>turn_on()</code>, <code>turn_off()</code>, <code>play_music()</code>, <code>set_temperature()</code>. A lamp must implement the last two as empty methods. The team splits it into <code>Switchable</code>, <code>MusicPlayer</code> and <code>Thermostat</code> interfaces. Which principle was violated, and what is the advantage of the fix?', opts: ['ISP — each device implements only relevant methods', 'LSP — devices become substitutable', 'DIP — devices depend on abstractions', 'ISP — fewer classes in the system'], ans: 0,
  why: ['Correct.', 'No substitution issue was described.', 'No concrete dependency was described.', 'Wrong advantage: there are more interfaces, not fewer classes.'], sol: 'Fat interface → ISP; advantage: no meaningless implementations.', trap: 'Option 4 names the right principle with the wrong advantage (2025 T3 Q20 option 4).' }, ['cs3001-2024T2-19', 'cs3001-2024T3-13', 'cs3001-2025T1-36', 'cs3001-2025T2-143', 'cs3001-2025T3-20', 'cs3001-2026T1-24', 'cs3001-2026T2-19']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'An <code>HttpRequest</code> needs a mandatory URL, and optional headers, timeout, retries, body and auth. A teammate suggests a <code>RequestFactory</code>. What is the better pattern and why?', opts: ['Builder — it handles many optional fields step by step', 'Factory is right — it creates objects', 'Adapter — it converts requests', 'Singleton — one request object'], ans: 0,
  why: ['Correct.', 'Factory chooses which class to create; it does not solve optional-field combinations.', 'No incompatibility.', 'Requests are many.'], sol: 'Optional fields → Builder.', trap: 'Factory also “creates objects”.' }, ['cs3001-2023T3-196', 'cs3001-2024T2-20', 'cs3001-2024T3-15', 'cs3001-2025T3-21']);
VQ({ kind: 'negated', type: 'msq', q: 'Select ALL patterns that are <b>NOT</b> creational.', opts: ['Singleton', 'Adapter', 'Observer', 'Factory Method', 'Decorator'], ans: [1, 2, 4],
  why: ['Creational.', 'Structural.', 'Behavioural.', 'Creational.', 'Structural.'], sol: 'Not creational: Adapter, Observer, Decorator.', trap: 'Negated version of 2023 T3 Q195.' }, ['cs3001-2023T3-195']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A travel portal receives flight times from airline APIs in each airport’s local time and in different JSON shapes, but its booking engine accepts only UTC in one shape. A class translating each airline’s response is introduced. Pattern?', opts: ['Adapter', 'Facade', 'Strategy', 'Builder'], ans: 0,
  why: ['Correct: incompatible formats translated.', 'No multi-step subsystem is hidden.', 'No interchangeable algorithms chosen at run time.', 'No.'], sol: 'Incompatible interface → Adapter.', trap: 'One adapter per airline can look like Strategy.' }, ['cs3001-2023T1-254', 'cs3001-2023T2-12', 'cs3001-2024T1-27', 'cs3001-2025T1-35']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A hospital adds <code>AdmissionDesk.admit(patient)</code>, which internally registers the patient, checks insurance, assigns a bed and notifies the ward — in order. A reviewer says “this is an Adapter”. Which pattern is it really, and why?', opts: ['Facade — one method hides and orchestrates several subsystems', 'Adapter — it converts the patient', 'Builder — it builds the admission', 'Strategy — admission varies'], ans: 0,
  why: ['Correct.', 'Nothing is incompatible.', 'Builder constructs one object through client calls.', 'No interchangeable algorithms.'], sol: 'One call over many steps → Facade.', trap: 'Builder (“step by step”).' }, ['cs3001-2025T2-144', 'cs3001-2026T1-23', 'cs3001-2026T2-8']);

[['Software architecture', 'How software elements, their relations and properties are organised.'], ['Architecture style', 'A recurring named pattern of information flow between components.'], ['Client–server', 'Clients request; a central server responds.'], ['Pipe-and-filter', 'Chain of stages; each output is the next input.'], ['Peer-to-peer', 'Nodes share directly; no central server.'], ['MVC', 'Model (data), View (display), Controller (coordination).'],
 ['Component', 'Unit of well-defined functionality.'], ['Connector', 'Transmits information between components.'],
 ['SRP', 'One class, one reason to change.'], ['OCP', 'Open for extension, closed for modification.'], ['LSP', 'Derived objects substitutable for base objects.'], ['ISP', 'Do not force clients to implement methods they do not use.'], ['DIP', 'Depend on abstractions, not concrete classes.'],
 ['Design pattern', 'A reusable template for a recurring design problem.'], ['Factory', 'Creates objects without exposing which class.'], ['Builder', 'Builds complex objects step by step; fixes telescoping constructors.'], ['Singleton', 'Exactly one instance.'], ['Adapter', 'Makes incompatible interfaces work together.'], ['Facade', 'One simple interface over a complex subsystem.'], ['Strategy', 'Interchangeable algorithms chosen at run time.'], ['Observer', 'Subject notifies subscribers on change.'], ['Iterator', 'Traverse a collection without exposing internals.'],
 ['Design smell', 'Warning sign of a design heading toward an anti-pattern.'], ['Anti-pattern', 'A recurring but ineffective solution.']].forEach(([t, d]) => GLOSS(t, d, 8));
[['Output of one stage → next?', 'Pipe-and-filter.'], ['No central server?', 'Peer-to-peer.'], ['Coordinates GUI views?', 'Controller (MVC).'], ['Class does too much?', 'SRP.'], ['Had to edit old code to add a case?', 'OCP violation.'], ['Subclass breaks when substituted?', 'LSP.'], ['Forced to implement irrelevant methods?', 'ISP.'], ['Concrete class replaced by an interface?', 'DIP.'],
 ['Many optional fields / telescoping constructors?', 'Builder.'], ['Creational patterns?', 'Factory, Builder, Singleton.'], ['Incompatible format, converter class?', 'Adapter.'], ['One method orchestrates many steps?', 'Facade.'], ['Swap algorithms at run time?', 'Strategy.'], ['Notify subscribers?', 'Observer.'], ['Design smell?', 'Warning sign, not a bug; refactor.']].forEach(([f, b]) => CARD(f, b, 8));
