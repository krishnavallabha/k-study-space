/* ===================== SE WEEK 7 — Software development ===================== */
WEEK({ course: 'cs3001', n: 7, title: 'Software Development',
  blurb: 'From design to working code. Choose the right tools (editor, IDE, framework); share and version code with Git; debug systematically (fault → error → failure; logging, dump & diff, stepping, profiling; forward, backward, input-manipulation and black-box strategies); measure code with metrics and cyclomatic complexity; and keep code clean by removing smells through refactoring.',
  topics: [
    { title: '7.1 Tools: environments, IDEs, frameworks', cs: ['dev-tools'] },
    { title: '7.2 Version control and Git', cs: ['vcs'] },
    { title: '7.3 Debugging', cs: ['fault-error-failure', 'debug-techniques', 'debug-strategies'] },
    { title: '7.4 Software metrics', cs: ['metrics', 'cyclomatic'] },
    { title: '7.5 Clean code and refactoring', cs: ['clean-code'] }] });

/* ---------------- 7.1 Tools ---------------- */
C({ id: 'dev-tools', week: 7, title: 'Development environment, IDE, framework', pri: 'Medium', prereq: ['design-outcomes'],
  src: 'Revision notes W7 §7.1 · Study guide ch.7 §7.1 · PYQs 2024 T1 Q34, 2025 T1 Q20',
  oneLine: 'Development environment = editor + compiler/interpreter. IDE = environment + productivity tools (debugger, syntax checking, find usages, rename): VS Code, PyCharm, Thonny. Framework = ready-made application structure that calls your code (Flask, Django, Spring Boot).',
  misShort: 'Calling a plain text editor like TextEdit an IDE, or Flask an IDE.',
  intu: R`<p>You can write Python in Notepad and run it from the terminal. That works: an editor plus an interpreter is a <b>development environment</b>.</p>
<p>Now open PyCharm. It underlines a typo before you run, renames a variable everywhere at once, finds every place a function is used, and lets you pause the program line by line. Same job, many more helpers: an <b>IDE</b>.</p>
<p>Now you want a web app. Instead of writing routing, request handling and templates from scratch, you start from Flask or Django, which give you the skeleton and call your code at the right moments. That is a <b>framework</b>.</p>
<p>The question: <b>is this tool an editor, an IDE, a framework — or something else, like version control?</b></p>`,
  why: R`<ul><li>2024 T1 Q34: VS Code, PyCharm, Thonny → IDE. 2025 T1 Q20: TextEdit is <i>not</i> an IDE.</li><li>Framework vs library appears in graded assignments and is a natural exam twist.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Development environment</b> — a text editor plus a compiler or interpreter: enough to write and run code (Notepad/Vim/Emacs + Python).',
    '<b>IDE</b> (integrated development environment) — a development environment plus productivity tools: debugger, syntax checking, find usages, rename refactoring, auto-completion. Examples: VS Code, PyCharm, Thonny.',
    '<b>Framework</b> — bundles common features and gives a ready-made application structure so apps are built faster; the framework calls your code (inversion of control). Examples: Flask (a micro-framework), Django, Spring Boot, Angular.',
    '<b>Library</b> — reusable functions that your code calls (NumPy, pandas).']))
    + '<p><b>In words:</b> editor writes; IDE writes and helps; framework gives the skeleton and calls you; library is called by you.</p>',
  vis: M.ladder([{ t: 'Text editor', d: 'Notepad, TextEdit, Vim' }, { t: 'Development environment', d: 'editor + compiler/interpreter' }, { t: 'IDE', d: '+ debugger, syntax check, rename, find usages' }, { t: 'Framework', d: 'ready-made app structure that calls your code' }], { top: 'least help', bottom: 'most structure', cap: 'Each level adds to the one above.' }),
  ex: [
    M.ex('Introductory', R`<p>Which best describes VSCode, PyCharm and Thonny?</p>`,
      R`<p><b>IDE</b> (2024 T1 Q34). They do more than edit text: debugging, syntax checking, refactoring. Not frameworks (they do not give your app a structure) and not version control.</p><p><b>Now suppose</b> the list were Flask, Django, Spring Boot. Those give your application its skeleton and call your code → <b>frameworks</b>.</p>`),
    M.ex('Standard', R`<p>Which is not an IDE: Visual Studio Code, PyCharm, Thonny, TextEdit (Mac)?</p>`, R`<p><b>TextEdit</b> (2025 T1 Q20) — a plain text editor with none of the IDE productivity tools.</p>`),
    M.ex('Exam-level', R`<p>A team needs routing, authentication middleware and a standard project layout for a web portal. Framework or library? Why?</p>`,
      R`<p><b>Framework</b>: it provides the application structure (routing, middleware, security) and calls the team’s handlers. A library would only give reusable functions the team must wire together themselves.</p>`)],
  math: M.rule('<p><b>Environment = editor + compiler. IDE = environment + productivity tools. Framework = app skeleton that calls you. Library = functions you call.</b></p>')
    + M.why([['TextEdit as an IDE', 'no debugger, syntax checking or refactoring.'], ['Flask as an IDE', 'Flask is a web micro-framework.'], ['Git as an IDE', 'Git is a version control system.']]),
  conn: R`<p><b>At work:</b> VS Code + Python extension is the common IDE; Django and FastAPI are common Python frameworks.</p><p><b>Earlier:</b> components from Week 5 become modules in a framework’s structure.</p><p><b>Next:</b> sharing and versioning code with Git.</p>`,
  mis: M.ul(['Text editor vs IDE (2025 T1 Q20).', 'Framework or VCS for VS Code/PyCharm (2024 T1 Q34).']),
  exam: R`<p><b>Fast method:</b> debugger and refactoring tools → IDE; app skeleton → framework; versions → VCS; just typing → editor.</p>`
});
Q({ cp: 'dev-tools', type: 'mcq', diff: 'easy', q: 'Django is best described as a:', opts: ['Text editor', 'IDE', 'Framework', 'Version control system'], ans: 2,
  why: ['No.', 'No.', 'Correct.', 'No.'], sol: 'Web framework.' });
Q({ cp: 'dev-tools', type: 'mcq', diff: 'moderate', q: 'Which feature distinguishes an IDE from a plain development environment?', opts: ['It can run code', 'It has a text area for typing', 'It offers debugging, syntax checking and rename/find-usages tools', 'It stores code in files'], ans: 2,
  why: ['An environment already runs code.', 'Any editor does.', 'Correct.', 'Any editor does.'], sol: 'Productivity tools.' });
Q({ cp: 'dev-tools', type: 'mcq', diff: 'moderate', q: 'In a framework, who calls whom?', opts: ['Your code calls the framework’s functions only', 'The framework calls your code at defined points (inversion of control)', 'Neither calls the other', 'The IDE calls the framework'], ans: 1,
  why: ['That describes a library.', 'Correct.', 'No.', 'Not relevant.'], sol: 'Framework → your code.' });
Q({ cp: 'dev-tools', type: 'short', diff: 'easy', q: 'Distinguish a development environment, an IDE and a framework with one example each.',
  model: '<p><b>Development environment:</b> editor + compiler/interpreter to write and run code — Vim + Python. <b>IDE:</b> an environment plus productivity tools such as a debugger, syntax checking, find usages and rename — PyCharm. <b>Framework:</b> bundled common features and a ready-made application structure that calls your code — Flask.</p>' });

/* ---------------- 7.2 VCS ---------------- */
C({ id: 'vcs', week: 7, title: 'Version control and Git', pri: 'High', prereq: ['dev-tools'],
  src: 'Revision notes W7 §7.2 · Study guide ch.7 §7.2 · PYQs 2024 T3 Q6, 2025 T1 Q21, 2025 T3 Q18, 2026 T1 Q19',
  oneLine: 'A VCS tracks every change, keeps history, enables collaboration, rollback and branching. Git is distributed. git fetch downloads only; git pull = fetch + merge; git rebase master brings master’s commits into your branch with a clean history.',
  misShort: 'Saying git fetch merges into the current branch — only git pull does.',
  intu: R`<p>Twenty developers edit the same codebase. On Friday someone pushes a bug that crashes everything.</p>
<p>Without version control: nobody knows what changed, or how to get back to Thursday’s working code.</p>
<p>With version control: every change is a recorded commit, with author and time. You can see exactly who changed what, and roll back to the last stable version in seconds.</p>
<p>Git adds branches: each person works on their own line of changes and merges when ready. Every developer holds a full copy of the history — it is <b>distributed</b>.</p>
<p>The question: <b>which VCS feature or Git command does the scenario need?</b></p>`,
  why: R`<ul><li>2024 T3 Q6: Git shares and maintains code versions (not Vim, Flask or VS Code).</li><li>2025 T1 Q21: pull = fetch + merge; fetch does not merge.</li><li>2025 T3 Q18: bring master’s changes into a feature branch → git rebase master.</li><li>2026 T1 Q19: revert to a stable version and find who made the change → version history tracking.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Version control system</b> — tracks and manages changes to code over time: history, collaboration, rollback, branching.',
    '<b>Centralised</b> (SVN): one central server. <b>Distributed</b> (Git): every developer has the full repository; works offline, fast, fault-tolerant.',
    '<b>Git commands:</b> init (new repo); clone (copy a repo); add (stage); commit (snapshot); push (upload); <b>fetch</b> (download remote changes, no merge); <b>pull</b> (fetch + merge into the current branch); status; diff (compare versions); log (history); branch / checkout (create / switch); merge (combine, keeps history); <b>rebase</b> (replay your commits on top of another branch, cleaner history).',
    '<b>GitHub</b> — online hosting for Git repositories, with access control, issues, task management, CI and wikis.']))
    + '<p><b>In words:</b> commit often, branch freely, fetch to look, pull to take, rebase to catch up cleanly.</p>',
  vis: M.flow(['clone', 'edit', 'add', 'commit', { t: 'push', hl: true }], { cap: 'The everyday Git workflow. pull / fetch bring others’ changes in; branch, merge and rebase manage parallel work.' })
    + M.git(['master', 'issueP', 'feature1'], [{ l: 0, x: 0, t: 'base' }, { l: 2, x: 1, t: 'f1' }, { l: 1, x: 1, t: 'fix' }, { l: 0, x: 2, t: 'fun1' }, { l: 2, x: 3, t: 'f1′', hl: true }],
      [[0, 0, 2, 1], [0, 0, 1, 1], [1, 1, 0, 2, 'merge'], [0, 2, 2, 3, 'rebase']], { cap: '2025 T3 Q18: issueP is merged into master (adds fun1). <code>git rebase master</code> on feature1 replays f1 on top of master, so feature1 now has fun1.' }),
  ex: [
    M.ex('Introductory', R`<p>Statement 1: <code>git pull</code> fetches changes from the remote and automatically merges them into the current branch. Statement 2: <code>git fetch</code> retrieves changes from the remote and automatically merges them into the current branch.</p>`,
      R`<p>Statement 1 correct, Statement 2 incorrect (2025 T1 Q21). fetch only downloads; pull = fetch + merge.</p><p><b>Now suppose</b> you want to inspect a teammate’s changes before they touch your branch. Use <b>fetch</b>, review, then merge — that is exactly why fetch does not merge.</p>`),
    M.ex('Standard', R`<p>You work on feature1. A colleague fixed a bug in issueP and merged it into master; you need the new function fun1 in feature1 before merging. Which command?</p>`,
      R`<p><b>git rebase master</b> (2025 T3 Q18), run on feature1: it replays your feature1 commits on top of the latest master, so fun1 is available and history stays linear.</p><p>Not <code>git fetch master</code> (wrong syntax, and fetch does not integrate), not <code>git pull origin feature1</code> (pulls your own branch), not <code>git clone master</code>.</p>`),
    M.ex('Exam-level', R`<p>A developer pushes faulty code to main; the team must quickly revert to a stable version and identify who made the change. Which VCS feature?</p>`,
      R`<p><b>Version history tracking</b> (2026 T1 Q19): every commit records author, time and content, so you can find the culprit (<code>git log</code>, blame) and revert. Branching would have helped prevent it, but does not fix it now.</p>`)],
  math: M.rule('<p><b>fetch = download only. pull = fetch + merge. merge = combine, keep history. rebase = replay on top, clean history. diff = compare. log = history.</b></p>')
    + M.why([['git fetch merges', 'it only downloads remote changes.'], ['Branching to identify the faulty author', 'history tracking records who changed what.'], ['VS Code to maintain versions', 'it is an IDE; Git is the VCS.']]),
  conn: R`<p><b>At work:</b> pull requests on GitHub, protected main branches and CI checks on every push.</p><p><b>Earlier:</b> configuration management is a project-manager responsibility (Week 4) — Git is its main tool.</p><p><b>Next:</b> when the build breaks, debugging starts.</p>`,
  mis: M.ul(['Statement 2 (fetch merges) marked correct (2025 T1 Q21).', 'git pull origin feature1 for bringing master into a feature branch (2025 T3 Q18).', 'Branching for revert-and-blame (2026 T1 Q19).']),
  exam: R`<p><b>Fast method:</b> match the verb — compare → diff; history → log; stage → add; take remote changes → pull; look without merging → fetch; catch up with master cleanly → rebase.</p>`
});
Q({ cp: 'vcs', type: 'mcq', diff: 'easy', q: 'Which command shows the differences between two versions of a file?', opts: ['git log', 'git diff', 'git status', 'git add'], ans: 1,
  why: ['History.', 'Correct.', 'Working-tree state.', 'Stages changes.'], sol: 'Compare → diff.' });
Q({ cp: 'vcs', type: 'mcq', diff: 'moderate', q: 'Why is Git called distributed?', opts: ['It runs only on cloud servers', 'Every developer has a full copy of the repository and its history', 'It splits files across machines', 'It needs a central server to commit'], ans: 1,
  why: ['No.', 'Correct.', 'No.', 'That is centralised VCS.'], sol: 'Full local copies.' });
Q({ cp: 'vcs', type: 'msq', diff: 'moderate', q: 'Select ALL that are true.', opts: ['git pull = git fetch + merge', 'git merge keeps the branch history', 'git rebase produces a cleaner, linear history', 'git fetch changes your working files'], ans: [0, 1, 2],
  why: ['True.', 'True.', 'True.', 'False: it only updates remote-tracking references.'], sol: 'fetch never touches your working branch.' });
Q({ cp: 'vcs', type: 'short', diff: 'easy', q: 'List the Git workflow from getting a repository to sharing a change, naming each command.',
  model: '<p><code>git clone &lt;url&gt;</code> to copy the repository → edit files → <code>git add &lt;files&gt;</code> to stage → <code>git commit -m "message"</code> to record a snapshot → <code>git push</code> to upload. Use <code>git pull</code> (fetch + merge) to bring in others’ changes before pushing.</p>' });

/* ---------------- 7.3 Fault / error / failure ---------------- */
C({ id: 'fault-error-failure', week: 7, title: 'Fault, error, failure and the debugging process', pri: 'High', prereq: ['testing-levels'],
  src: 'Revision notes W7 §7.3 · Study guide ch.7 §7.3 · PYQs 2023 T1 Q250, 2023 T3 Q193, 2024 T2 Q10, 2026 T1 Q20, 2026 T2 Q3',
  oneLine: 'Fault = the wrong line of code (where the failure originates). Error = the discrepancy between actual and intended behaviour. Failure = the observable symptom (wrong output, exception). Debugging = determining the cause of a failure.',
  misShort: 'Calling the wrong line of code an “error” — the papers key it as a fault.',
  intu: R`<p>A bank’s interest code says <code>interest = balance * 0.5</code>. It should say <code>* 0.05</code>.</p>
<p>That wrong line, sitting in the source code, is the <b>fault</b>.</p>
<p>When it runs, the program’s behaviour differs from what was intended: interest is ten times too high. That discrepancy is the <b>error</b>.</p>
<p>A customer sees ₹5,000 interest instead of ₹500 on the statement. That visible symptom is the <b>failure</b>.</p>
<p>Working backwards from the strange statement to the wrong line is <b>debugging</b>.</p>`,
  why: R`<ul><li>Five papers. The wrong-formula line is keyed as a fault twice (2026 T1, 2026 T2). The four-way match (2023 T1) and the debugging definition (2024 T2) test the same table.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Fault</b> — where the failure has occurred in the code: the defective statement.',
    '<b>Error</b> — the discrepancy between the actual behaviour and the intended behaviour.',
    '<b>Failure</b> — the observable symptom: incorrect output value, exception, crash.',
    '<b>Debugging</b> — the process of determining the cause of a failure (and fixing it).',
    'Steps: reproduce the problem → find the cause → investigate a fix → implement the fix → test again.']))
    + '<p><b>In words:</b> the fault sits in the code; the error is the wrong behaviour; the failure is what users see.</p>',
  vis: M.flow([{ t: 'Fault', sub: 'balance * 0.5' }, { t: 'Error', sub: 'behaviour ≠ intended' }, { t: 'Failure', sub: 'wrong interest shown', hl: true }], { cap: 'Debugging walks this chain backwards: from the failure to the fault.' }),
  ex: [
    M.ex('Introductory', R`<p>A banking app produces wrong interest; the developer finds <code>interest = balance * 0.5</code> was written instead of <code>interest = balance * 0.05</code>. The incorrect line is an example of?</p>`,
      R`<p><b>Fault</b> (2026 T1 Q20; 2026 T2 Q3 with principal). The line in the code is the fault; the wrong interest a customer sees is the failure.</p><p><b>Now suppose</b> the question asked about “the customer receiving ₹5,000 instead of ₹500”. That is observable → <b>failure</b>.</p>`),
    M.ex('Standard', R`<p>Match 1 Error, 2 Failure, 3 Fault, 4 Debugging with A observable errors like incorrect output or exception, B determining the cause of failure, C discrepancy between actual and intended behaviour, D where the failure has occurred.</p>`,
      R`<p>1-C, 2-A, 3-D, 4-B (2023 T1 Q250). Note the papers’ wording: “observable errors” describes <i>failure</i>, not error.</p>`),
    M.ex('Exam-level', R`<p>Which are true: (a) debugging is only needed in initial development (b) debugging involves identifying and fixing defects (c) debugging can be done without tools or breakpoints (d) code may run correctly during debugging but fail in production?</p>`,
      R`<p>Keyed: (b) and (d) (2023 T3 Q193). (a) is false — bugs appear throughout the lifecycle. (c) is defensible (logging needs no debugger) but was not keyed; see the note on that question.</p>`)],
  math: M.rule('<p><b>Fault</b> = the defective code. <b>Error</b> = actual ≠ intended behaviour. <b>Failure</b> = observable symptom. <b>Debugging</b> = find the cause of a failure.</p>')
    + M.why([['The wrong line = error', 'the wrong line is the fault.'], ['Debugging = the line where the error occurred', 'that is the fault; debugging is the process.'], ['Failure = discrepancy', 'the discrepancy is the error; failure is what is observed.']]),
  conn: R`<p><b>At work:</b> incident reports separate symptom (failure), root cause (fault) and impact.</p><p><b>Earlier:</b> testing (Week 1) reveals failures; debugging finds faults.</p><p><b>Next:</b> techniques and strategies for finding the fault.</p>`,
  mis: M.ul(['Error for the wrong formula line (2026 T1 Q20, 2026 T2 Q3).', 'Discrepancy as the definition of debugging (2024 T2 Q10 option 1).']),
  exam: R`<p><b>Fast method:</b> code → fault; behaviour → error; what users see → failure; finding the cause → debugging.</p>`
});
Q({ cp: 'fault-error-failure', type: 'mcq', diff: 'easy', q: 'A checkout page shows “Total: ₹-120” to a customer. This visible symptom is a:', opts: ['Fault', 'Error', 'Failure', 'Debug'], ans: 2,
  why: ['The fault is in the code.', 'The error is the wrong behaviour inside.', 'Correct: observable.', 'Not a term.'], sol: 'Observable → failure.' });
Q({ cp: 'fault-error-failure', type: 'mcq', diff: 'moderate', q: 'Put the debugging steps in order: (P) implement fix, (Q) reproduce, (R) find cause, (S) test again, (T) investigate fix.', opts: ['Q, R, T, P, S', 'R, Q, T, P, S', 'Q, T, R, P, S', 'Q, R, P, T, S'], ans: 0,
  why: ['Correct.', 'You must reproduce before finding the cause.', 'Find the cause before investigating fixes.', 'Investigate before implementing.'], sol: 'Reproduce → cause → investigate → implement → re-test.' });
Q({ cp: 'fault-error-failure', type: 'mcq', diff: 'moderate', q: '<code>if age > 18:</code> was written instead of <code>if age >= 18:</code>. This line is a:', opts: ['Fault', 'Failure', 'Test case', 'Profile'], ans: 0,
  why: ['Correct.', 'Failure is what users see.', 'No.', 'No.'], sol: 'Defective code → fault.' });
Q({ cp: 'fault-error-failure', type: 'short', diff: 'moderate', q: 'Define fault, error and failure, and use one example to show how they are linked.',
  model: '<p><b>Fault:</b> the defective statement in the code. <b>Error:</b> the discrepancy between actual and intended behaviour. <b>Failure:</b> the observable symptom. Example: <code>interest = balance * 0.5</code> instead of <code>0.05</code> is the fault; when executed the computed interest differs from the intended value (error); the customer sees ten times the expected interest on the statement (failure).</p>' });

/* ---------------- 7.3 Debugging techniques ---------------- */
C({ id: 'debug-techniques', week: 7, title: 'Debugging techniques: logging, dump & diff, stepping, profiling', pri: 'Medium', prereq: ['fault-error-failure'],
  src: 'Revision notes W7 §7.3 · Study guide ch.7 §7.3.2 · PYQs 2023 T2 Q11, 2026 T1 Q21, 2026 T2 Q7',
  oneLine: 'Logging = print statements to trace execution and values. Dump & diff = compare outputs/logs of two runs. Stepping = run line by line in a debugger with breakpoints. Profiling = find where time and memory go (performance, not correctness).',
  misShort: 'Choosing logging for a slow program — performance questions are profiling.',
  intu: R`<p>Four tools for four situations.</p>
<p>“Is this function even being called?” Add <code>print</code> statements → <b>logging</b>.</p>
<p>“It worked yesterday; what changed?” Save the output of the good run and the bad run, and compare → <b>dump &amp; diff</b>.</p>
<p>“Which exact line goes wrong?” Set a breakpoint and step through → <b>stepping</b> in a debugger.</p>
<p>“It is correct, just slow — where does the time go?” → <b>profiling</b>.</p>`,
  why: R`<ul><li>2023 T2 Q11: print statements in all 50 functions → logging.</li><li>2026 T1 Q21 and 2026 T2 Q7: CPU time, memory hot spots, bottlenecks → profiling tool.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Logging</b> — inserting print/log statements to trace which code runs and what values variables hold.',
    '<b>Dump &amp; diff</b> — dumping the output/state of two executions (e.g. working vs broken) and comparing them.',
    '<b>Stepping in a debugger</b> — executing line by line with breakpoints, step into / step over, inspecting variables.',
    '<b>Profiling</b> — measuring execution time and memory per function to find performance bottlenecks.']))
    + '<p><b>In words:</b> print it, compare it, walk it, time it.</p>',
  vis: M.table(['Stem signal', 'Technique'], [['print statements, trace which functions run', 'Logging'], ['compare outputs/logs of two runs', 'Dump & diff'], ['breakpoints, step into / over, line by line', 'Stepping (debugger)'], ['slow, CPU time, memory hot spots, bottlenecks', 'Profiling tool']], 'Signal → technique.'),
  ex: [
    M.ex('Introductory', R`<p>A module of 50 functions gives wrong output; the programmer suspects some functions are not called and puts print statements in all of them. Technique?</p>`,
      R`<p><b>Logging</b> (2023 T2 Q11).</p><p><b>Now suppose</b> the program is correct but slow, and the team wants to know which functions use the most CPU and memory → <b>profiling</b> (2026 T1 Q21, 2026 T2 Q7).</p>`),
    M.ex('Standard', R`<p>Version 4.1 of a report generator produces a different CSV from version 4.0 on the same input. Which technique quickly shows where they diverge?</p>`, R`<p><b>Dump &amp; diff</b>: dump both outputs and diff them.</p>`),
    M.ex('Exam-level', R`<p>A loop sometimes produces an off-by-one total; you want to watch the loop variable change at each iteration and stop exactly when it goes wrong. Technique?</p>`, R`<p><b>Stepping</b> in a debugger with a (conditional) breakpoint inside the loop.</p>`)],
  math: M.rule('<p><b>Print → Logging. Two runs compared → Dump & diff. Breakpoints/line-by-line → Stepping. Slow / CPU / memory → Profiling.</b></p>')
    + M.why([['Logging for performance bottlenecks', 'logging traces flow; profiling measures time and memory.'], ['Profiling for “some functions are not called”', 'that is about correctness of flow → logging.'], ['Backward debugging for a slow app', 'a strategy, not a tool for performance.']]),
  conn: R`<p><b>At work:</b> structured logging in production, <code>pdb</code>/IDE debuggers locally, <code>cProfile</code> for performance.</p><p><b>Earlier:</b> IDEs (7.1) provide the stepping debugger.</p><p><b>Next:</b> strategies decide <i>where</i> to point these tools.</p>`,
  mis: M.ul(['Logging for performance (2026 T1 Q21, 2026 T2 Q7).', 'Stepping for print statements (2023 T2 Q11).']),
  exam: R`<p><b>Fast method:</b> performance words → profiling; print → logging; compare two runs → dump & diff; breakpoints → stepping.</p>`
});
Q({ cp: 'debug-techniques', type: 'mcq', diff: 'easy', q: 'A developer sets a breakpoint and steps over each line, watching variables. Technique?', opts: ['Logging', 'Dump & diff', 'Stepping in a debugger', 'Profiling'], ans: 2,
  why: ['No prints.', 'No comparison.', 'Correct.', 'Not performance.'], sol: 'Breakpoints → stepping.' });
Q({ cp: 'debug-techniques', type: 'mcq', diff: 'moderate', q: 'An app’s nightly batch went from 10 minutes to 2 hours after a release; results are still correct. First technique to use?', opts: ['Profiling', 'Logging', 'Input manipulation', 'Black-box debugging'], ans: 0,
  why: ['Correct: a performance problem.', 'Not targeted at time/memory.', 'A strategy, not suited to performance.', 'A strategy for unseen code.'], sol: 'Correct but slow → profile.' });
Q({ cp: 'debug-techniques', type: 'mcq', diff: 'moderate', q: 'Comparing the JSON output of last week’s working build with today’s broken build is:', opts: ['Dump & diff', 'Profiling', 'Stepping', 'Backward strategy'], ans: 0,
  why: ['Correct.', 'No.', 'No.', 'A strategy; this is a specific technique.'], sol: 'Two runs compared → dump & diff.' });
Q({ cp: 'debug-techniques', type: 'short', diff: 'easy', q: 'Name the four debugging techniques and give the situation each suits best.',
  model: '<p><b>Logging</b> — trace which code runs and what values it has. <b>Dump &amp; diff</b> — compare outputs of a working and a broken run (regressions). <b>Stepping in a debugger</b> — find the exact failing line by executing line by line. <b>Profiling</b> — find performance bottlenecks (CPU time, memory).</p>' });

/* ---------------- 7.3 Debugging strategies ---------------- */
C({ id: 'debug-strategies', week: 7, title: 'Debugging strategies: forward, backward, input manipulation, black-box', pri: 'High', prereq: ['debug-techniques'],
  src: 'Revision notes W7 §7.3 · Study guide ch.7 §7.3.3 · PYQs 2023 T1 Q251, 2023 T3 Q191, 2024 T1 Q31, 2024 T2 Q18, 2024 T3 Q11, 2025 T1 Q22, 2025 T2 Q140, 2025 T3 Q16',
  oneLine: 'Forward = start at the triggering event and follow control/data flow forward. Backward = start at the bad output and trace dependencies back. Input manipulation = vary inputs and watch the output. Black-box = use documentation and examples for code you cannot see.',
  misShort: 'Choosing forward debugging for a third-party API you cannot read — that is black-box.',
  intu: R`<p>A wrong total appears on an invoice. Where do you start looking?</p>
<p>From the start: the event that triggered the calculation, following the flow until the state goes bad → <b>forward</b>.</p>
<p>From the end: the wrong total, asking “which values produced this?” and tracing back → <b>backward</b>.</p>
<p>From the outside: feed in different inputs and see which ones break it → <b>input manipulation</b>.</p>
<p>And if the bug is inside a payment library whose code you cannot see, you read its documentation and examples to check you are using it correctly → <b>black-box debugging</b>.</p>`,
  why: R`<ul><li>Eight papers. Black-box (third-party APIs, binaries only, docs and examples) keyed five times; forward three times.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Forward strategy</b> — identify the event that triggers the incorrect behaviour and follow the data/control flow forward until the incorrect state is reached.',
    '<b>Backward strategy</b> — start from the incorrect output and trace back through the dependencies that produced it.',
    '<b>Input manipulation</b> — change the inputs systematically and observe how the output changes.',
    '<b>Black-box debugging</b> — when the internal code is unavailable (third-party APIs, binaries), study documentation and code examples to understand correct usage.']))
    + '<p><b>In words:</b> from the trigger forward, from the symptom back, poke the inputs, or read the manual.</p>',
  vis: M.flow([{ t: 'Trigger event' }, { t: 'Control/data flow' }, { t: 'Bad state' }, { t: 'Wrong output', hl: true }], { cap: 'Forward walks left → right from the trigger. Backward walks right → left from the wrong output.' }),
  ex: [
    M.ex('Introductory', R`<p>A developer finds the event that triggers incorrect behaviour and follows the data/control flow ahead until the incorrect state is reached. Strategy?</p>`,
      R`<p><b>Forward</b> (2023 T1 Q251, 2023 T3 Q191, 2025 T3 Q16).</p><p><b>Now suppose</b> they start from the wrong output and ask what produced it, stepping back through the dependencies → <b>backward</b>.</p>`),
    M.ex('Standard', R`<p>A team uses components for which only binaries are available; to debug, they explore documentation and code examples. Strategy?</p>`,
      R`<p><b>Black-box debugging</b> (2024 T2 Q18; also 2024 T1 Q31, 2024 T3 Q11, 2025 T1 Q22).</p>`),
    M.ex('Exam-level', R`<p>A third-party image API compiles fine but gives an unexpected image; the programmer cannot see or change its code. Options: step into each function with PDB; forward debugging to trace internal logic; black-box debugging using documentation and examples; dump and diff of images.</p>`,
      R`<p><b>Black-box</b> (2025 T2 Q140). Stepping and forward tracing need access to the internal logic, which is unavailable; dump & diff compares outputs but does not explain correct usage of the API.</p>`)],
  math: M.rule('<p><b>Trigger → forward. Wrong output → backward. Vary inputs → input manipulation. No source, read docs → black-box.</b></p>')
    + M.why([['Backward for “from the triggering event forward”', 'direction decides it.'], ['Forward for a closed third-party API', 'you cannot follow flow you cannot see.'], ['Input manipulation for reading documentation', 'that is black-box.']]),
  conn: R`<p><b>At work:</b> reproducing with minimal inputs (input manipulation) and reading SDK docs (black-box) are daily habits.</p><p><b>Earlier:</b> techniques (logging, stepping) are used inside these strategies.</p><p><b>Next:</b> metrics show which code is most likely to need debugging.</p>`,
  mis: M.ul(['Backward for a forward description (2023 T1 Q251).', 'Forward/backward for third-party APIs (2024 T1 Q31, 2025 T2 Q140).']),
  exam: R`<p><b>Fast method:</b> no source code / docs and examples → black-box. Otherwise, read the starting point: the trigger (forward) or the wrong output (backward). Changing inputs → input manipulation.</p>`
});
Q({ cp: 'debug-strategies', type: 'mcq', diff: 'easy', q: 'A tester halves the input file repeatedly until the crash appears only with one specific line. Strategy?', opts: ['Forward', 'Backward', 'Input manipulation', 'Black-box'], ans: 2,
  why: ['Not following flow.', 'Not tracing back from output.', 'Correct.', 'Not about docs.'], sol: 'Varying inputs → input manipulation.' });
Q({ cp: 'debug-strategies', type: 'mcq', diff: 'moderate', q: 'A report shows a wrong grand total; the developer checks which subtotals fed it, then which rows fed those subtotals. Strategy?', opts: ['Forward', 'Backward', 'Black-box', 'Profiling'], ans: 1,
  why: ['Starts from the output, not the trigger.', 'Correct.', 'The code is visible.', 'A technique for performance.'], sol: 'From output back → backward.' });
Q({ cp: 'debug-strategies', type: 'mcq', diff: 'moderate', q: 'An SMS gateway SDK (closed source) silently drops messages with emojis. The developer reads its FAQ and sample code to learn how encoding must be set. Strategy?', opts: ['Black-box debugging', 'Forward', 'Backward', 'Stepping'], ans: 0,
  why: ['Correct.', 'Internal flow is unavailable.', 'Internal flow is unavailable.', 'Source unavailable.'], sol: 'Docs + examples for closed code → black-box.' });
Q({ cp: 'debug-strategies', type: 'short', diff: 'moderate', q: 'Compare forward and backward debugging, and say when black-box debugging is used instead.',
  model: '<p><b>Forward:</b> start from the event that triggers the problem and follow the control/data flow until the state becomes incorrect. <b>Backward:</b> start from the incorrect output and trace back through the values and dependencies that produced it. <b>Black-box</b> is used when the internal code is not accessible (third-party APIs, binaries): you study documentation and code examples to understand correct usage.</p>' });

/* ---------------- 7.4 Metrics ---------------- */
C({ id: 'metrics', week: 7, title: 'Software metrics: raw, Halstead, cyclomatic', pri: 'Supporting', prereq: ['clean-code'],
  src: 'Revision notes W7 §7.4 · Study guide ch.7 §7.4 · PYQs 2023 T1 Q242, 2023 T3 Q192',
  oneLine: 'Raw metrics = LOC, LLOC, SLOC, comments. Halstead’s metrics = from distinct operators and operands. Cyclomatic complexity = decision points + 1. (Radon computes all of them for Python.)',
  misShort: 'Calling LOC/LLOC/SLOC “cyclomatic complexity” or “Halstead”.',
  intu: R`<p>“Is this code good?” is vague. Metrics put numbers on it.</p>
<p>The simplest numbers just count lines: total lines, logical lines, source lines, comment lines → <b>raw metrics</b>.</p>
<p>A deeper count looks at how many different operators and operands the code uses → <b>Halstead’s metrics</b>.</p>
<p>Another counts how many decisions the code makes → <b>cyclomatic complexity</b>.</p>`,
  why: R`<ul><li>2023 T1 Q242 and 2023 T3 Q192 (identical): LOC, LLOC, SLOC → raw metrics.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Raw metrics</b> — LOC (total lines), LLOC (logical lines: one per statement), SLOC (source lines), comment lines, blank lines.',
    '<b>Halstead’s metrics</b> — computed from the numbers of distinct and total operators and operands (vocabulary, volume, difficulty, effort).',
    '<b>Cyclomatic complexity</b> — number of decision points + 1; the number of independent paths.',
    'A <b>code smell</b> is not a metric — it is a warning sign of poor design (next concept).']))
    + '<p><b>In words:</b> lines → raw; operators/operands → Halstead; decisions → cyclomatic.</p>',
  vis: M.table(['Measures', 'Metric family'], [['LOC, LLOC, SLOC, comments', 'Raw metrics'], ['distinct operators and operands', 'Halstead’s metrics'], ['decision points + 1', 'Cyclomatic complexity']], 'Three metric families.'),
  ex: [
    M.ex('Introductory', R`<p>Which type of metrics measures code using LOC, LLOC and SLOC?</p>`, R`<p><b>Raw metrics</b> (2023 T1 Q242). Cyclomatic complexity counts decisions; Halstead counts operators and operands; a code smell is not a metric.</p><p><b>Now suppose</b> the stem said “based on the number of distinct operators and operands” → <b>Halstead’s metrics</b>.</p>`),
    M.ex('Standard', R`<p>A 10-line file has 2 comment lines, 1 blank line and 7 statement lines, one of which is split over two physical lines. LOC? Comment lines?</p>`, R`<p>LOC = 10 (all lines). Comments = 2. LLOC would count statements (6, since one statement spans two lines).</p>`),
    M.ex('Exam-level', R`<p>Which metric tells you the minimum number of test cases needed to cover every independent path?</p>`, R`<p><b>Cyclomatic complexity</b> — next concept.</p>`)],
  math: M.rule('<p><b>Lines → Raw. Operators/operands → Halstead. Decisions + 1 → Cyclomatic.</b></p>')
    + M.why([['Cyclomatic for LOC/LLOC/SLOC', 'it counts decisions, not lines.'], ['Code smell as a metric family', 'a smell is a qualitative warning sign.']]),
  conn: R`<p><b>At work:</b> Radon, SonarQube and CodeClimate report these numbers on every pull request.</p><p><b>Earlier:</b> testing (Week 1) uses cyclomatic complexity to size test suites.</p><p><b>Next:</b> computing cyclomatic complexity by hand.</p>`,
  mis: M.ul(['Cyclomatic complexity or Halstead for LOC/LLOC/SLOC (2023 T1 Q242, 2023 T3 Q192).']),
  exam: R`<p><b>Fast method:</b> any “LOC” abbreviation → raw.</p>`
});
Q({ cp: 'metrics', type: 'mcq', diff: 'easy', q: 'Which metric family is based on counts of distinct operators and operands?', opts: ['Raw metrics', 'Halstead’s metrics', 'Cyclomatic complexity', 'Code smells'], ans: 1,
  why: ['Lines.', 'Correct.', 'Decisions.', 'Not a metric.'], sol: 'Operators/operands → Halstead.' });
Q({ cp: 'metrics', type: 'mcq', diff: 'moderate', q: 'LLOC counts:', opts: ['Every physical line', 'Logical lines — one per statement', 'Only comment lines', 'Only blank lines'], ans: 1,
  why: ['That is LOC.', 'Correct.', 'No.', 'No.'], sol: 'Logical lines of code.' });
Q({ cp: 'metrics', type: 'mcq', diff: 'moderate', q: 'Which Python tool computes raw, Halstead and cyclomatic metrics?', opts: ['Radon', 'Git', 'Flask', 'Thonny'], ans: 0,
  why: ['Correct.', 'VCS.', 'Framework.', 'IDE.'], sol: 'Radon.' });
Q({ cp: 'metrics', type: 'short', diff: 'easy', q: 'Name three families of software metrics and what each counts.',
  model: '<p><b>Raw metrics</b> — line counts: LOC, LLOC, SLOC, comments. <b>Halstead’s metrics</b> — derived from the numbers of distinct/total operators and operands. <b>Cyclomatic complexity</b> — the number of decision points + 1 (independent paths).</p>' });

/* ---------------- 7.4 Cyclomatic complexity ---------------- */
C({ id: 'cyclomatic', week: 7, title: 'Cyclomatic complexity: decisions + 1', pri: 'High', prereq: ['metrics'],
  src: 'Revision notes W7 §7.4 · Study guide ch.7 §7.4.2 · PYQs 2023 T2 Q17, 2024 T2 Q23, 2024 T3 Q12, 2025 T1 Q38, 2025 T2 Q141, 2025 T3 Q17, 2026 T2 Q17',
  oneLine: 'Count every if, elif, for, while (and case); never else, never plain statements, never return. CC = that count + 1. It equals the minimum number of test cases for full path coverage.',
  misShort: 'Counting else, or forgetting that each for loop is a decision.',
  intu: R`<p>A function with no decisions has one path through it: in at the top, out at the bottom. CC = 1.</p>
<p>Add one <code>if</code>: now there are two paths — the condition is true, or it is false. CC = 2.</p>
<p>Add a loop: the program either enters the loop again or leaves it — another decision. CC = 3.</p>
<p>Every decision adds one path. So: <b>CC = number of decisions + 1</b>.</p>
<p>The <code>else</code> is not a new decision — it is the “false” side of the <code>if</code> already counted.</p>`,
  why: R`<ul><li>Seven papers, every one a code snippet with four options (2 to 5 or 3 to 6). Every key here is recomputed in code when the app loads.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Cyclomatic complexity</b> (McCabe) V(G) = E − N + 2 for a control-flow graph; for structured code it equals the number of decision points + 1.',
    '<b>Decision points</b> counted in this course: <code>if</code>, <code>elif</code>, <code>for</code>, <code>while</code>, <code>case</code>. Not counted: <code>else</code>, sequential statements, <code>return</code>.',
    'CC = the number of linearly independent paths = the minimum number of test cases needed to cover them.']))
    + '<p><b>In words:</b> count the branching keywords, add one.</p>',
  vis: M.code(`def check(x):
    if x > 0:            # decision 1
        if x % 2 == 0:   # decision 2
            return "A"
        else:            # not counted
            return "B"
    else:                # not counted
        return "C"
# decisions = 2  →  CC = 3`, 'Count if/elif/for/while; never else. 2026 T2 Q17.'),
  ex: [
    M.ex('Introductory', R`<p>Cyclomatic complexity of <code>check(x)</code> shown above?</p>`,
      R`<ol><li>Decisions: <code>if x &gt; 0</code>, <code>if x % 2 == 0</code> → 2.</li><li>The two <code>else</code>s are not counted.</li><li>CC = 2 + 1 = <b>3</b> (2026 T2 Q17). Check: there are exactly three return paths (A, B, C).</li></ol>
<p><b>Now suppose</b> the inner check is wrapped in <code>for i in range(n):</code>. The loop is one more decision → CC = 4.</p>`),
    M.ex('Standard', R`<p>Binary search: <code>while l &lt;= h</code>, inside it <code>if arr[m] == key</code> … <code>else: if arr[m] &lt; key</code> … <code>else</code>. CC?</p>`,
      R`<p>Decisions: while, if, if → 3. CC = <b>4</b> (2024 T3 Q12). The two elses add nothing.</p>`),
    M.ex('Exam-level', R`<p>Bubble sort <code>bsort</code>: <code>for i …</code>, nested <code>for j …</code>, inside <code>if arr[j] &gt; arr[j+1]</code>, and after the inner loop <code>if not flag: return</code>. CC?</p>`,
      R`<p>Decisions: for, for, if, if → 4. CC = <b>5</b> (2024 T2 Q23). Each loop counts once however many times it runs.</p>`)],
  math: M.rule('<p><b>CC = (# if + # elif + # for + # while + # case) + 1.</b> Never count else. CC = minimum number of test cases for independent-path coverage.</p>')
    + M.why([['Counting else', 'else is the false branch of an if already counted.'], ['Counting the for loop as 0', 'a loop is a decision (enter again or exit).'], ['Counting return statements', 'they end paths; they do not create new ones.'], ['Counting `or` inside one condition', 'this course counts the keyword lines; 2025 T3 Q17’s key (4) does not count the `or`.']]),
  conn: R`<p><b>At work:</b> linters warn when CC exceeds about 10; high-CC functions are refactoring candidates.</p><p><b>Earlier:</b> raw and Halstead metrics measure size; CC measures branching.</p><p><b>Next:</b> clean code keeps functions small, which keeps CC low.</p>`,
  mis: M.ul(['Counting else (gives 5 instead of 4 in 2025 T1 Q38 and 2025 T2 Q141).', 'Forgetting a loop (gives 3 instead of 4 in 2023 T2 Q17).', 'Counting the `or` in 2025 T3 Q17 (gives 5; key 4).']),
  exam: R`<p><b>Fast method:</b> underline every <code>if</code>/<code>elif</code>/<code>for</code>/<code>while</code> in the snippet, count them, add one. Ignore else and return.</p>`
});
Q({ cp: 'cyclomatic', type: 'num', diff: 'easy', q: 'CC of:<pre class="code">def sign(x):\n    if x > 0:\n        return 1\n    elif x < 0:\n        return -1\n    else:\n        return 0</pre>', ans: 3, tol: 0,
  calc: () => CALC.cc('def sign(x):\n    if x > 0:\n        return 1\n    elif x < 0:\n        return -1\n    else:\n        return 0'), sol: 'if, elif → 2 decisions → CC = 3.' });
Q({ cp: 'cyclomatic', type: 'num', diff: 'moderate', q: 'CC of:<pre class="code">def count_vowels(words):\n    total = 0\n    for w in words:\n        for ch in w:\n            if ch in "aeiou":\n                total += 1\n    while total > 100:\n        total -= 100\n    return total</pre>', ans: 5, tol: 0,
  calc: () => CALC.cc('def count_vowels(words):\n    total = 0\n    for w in words:\n        for ch in w:\n            if ch in "aeiou":\n                total += 1\n    while total > 100:\n        total -= 100\n    return total'), sol: 'for, for, if, while → 4 → CC = 5.' });
Q({ cp: 'cyclomatic', type: 'mcq', diff: 'moderate', q: 'A function has CC = 6. What is the minimum number of test cases for independent-path coverage?', opts: ['5', '6', '7', '12'], ans: 1,
  why: ['One short.', 'Correct.', 'One extra.', 'No.'], sol: 'Minimum test cases = CC.' });
Q({ cp: 'cyclomatic', type: 'short', diff: 'easy', q: 'State the rule for computing cyclomatic complexity from Python code and explain why else is not counted.',
  model: '<p>Count the decision points — <code>if</code>, <code>elif</code>, <code>for</code>, <code>while</code> (and <code>case</code>) — and add 1. <code>else</code> is not counted because it is just the false outcome of an <code>if</code> that was already counted; it does not create an additional independent path.</p>' });

/* ---------------- 7.5 Clean code ---------------- */
C({ id: 'clean-code', week: 7, title: 'Clean code, code smells and refactoring', pri: 'Supporting', prereq: ['dev-tools'],
  src: 'Revision notes W7 §7.5 · Study guide ch.7 §7.5',
  oneLine: 'Code smells are warning signs (redundant comments, long functions, too many or flag arguments, duplicated code, missing explanatory variables). Refactoring improves internal structure without changing external behaviour. DRY = don’t repeat yourself.',
  misShort: 'Calling a new feature “refactoring”, or treating every smell as a bug.',
  intu: R`<p>Code is read far more often than it is written.</p>
<p>A function called <code>f(a, b, c, d, e, True)</code> that does five things and repeats logic found elsewhere still <i>works</i> — but every reader slows down, and every change risks breaking something.</p>
<p>Those warning signs are <b>code smells</b>. Not bugs — smells.</p>
<p>Cleaning them up — renaming, splitting, removing duplication — without changing what the program does is <b>refactoring</b>.</p>`,
  why: R`<ul><li>No Quiz 2 PYQ yet; it appears in graded assignments and the end-term syllabus, and supports Week 8’s design smells.</li></ul>`,
  formal: M.def(M.lines([
    'Why clean code: easier to understand; easier to test and debug; easier to maintain and extend.',
    '<b>Code smell</b> — a surface sign of a deeper design problem; not necessarily a bug.',
    'Comment smells: redundant comments that restate the code; commented-out dead code.',
    'Function smells: does more than one thing; too long; too many arguments; flag (boolean) arguments; dead functions.',
    'General smells: duplicated code (violates <b>DRY</b>); boundary-condition mistakes; missing explanatory variables (<code>student_age</code> instead of <code>a</code>).',
    '<b>Refactoring</b> — changing the internal structure to improve it while keeping external behaviour the same. Adding a feature is not refactoring.',
    'Tools: pylint and flake8 (style), vulture (dead code), Radon (metrics).']))
    + '<p><b>In words:</b> same behaviour, better shape.</p>',
  vis: M.code(`# smelly
def p(a, b, f):          # unclear names, flag argument
    if f:                # one function, two jobs
        return a * b * 0.18
    return a * b

# refactored — same behaviour
GST = 0.18
def price(qty, unit):        return qty * unit
def gst(qty, unit):          return price(qty, unit) * GST`, 'Explanatory names, no flag, one job per function. Behaviour unchanged.'),
  ex: [
    M.ex('Introductory', R`<p>Is renaming <code>x</code> to <code>monthly_salary</code> everywhere a refactoring?</p>`,
      R`<p>Yes — structure (readability) improves; behaviour is unchanged.</p><p><b>Now suppose</b> you also add a bonus field to the salary calculation. Behaviour changes → that part is a <b>new feature</b>, not refactoring.</p>`),
    M.ex('Standard', R`<p>Identify the smells: a 200-line function <code>process(data, mode, verbose, retry, x, y)</code> with the comment <code># increment i</code> above <code>i += 1</code>.</p>`,
      R`<p>Too long; does many things; too many arguments; flag arguments (<code>mode</code>, <code>verbose</code>); unclear names (<code>x</code>, <code>y</code>); redundant comment.</p>`),
    M.ex('Exam-level', R`<p>The same discount calculation is copy-pasted in five places. Which principle is violated, and what is the fix?</p>`, R`<p><b>DRY</b>. Extract one function (e.g. <code>apply_discount()</code>) and call it from all five places — a refactoring.</p>`)],
  math: M.rule('<p><b>Smell</b> = warning sign. <b>Refactoring</b> = structure ↑, behaviour unchanged. <b>DRY</b> = one place for each piece of logic.</p>')
    + M.why([['Adding a feature = refactoring', 'refactoring keeps behaviour the same.'], ['Every smell is a bug', 'smelly code can be correct; smells predict future bugs and cost.']]),
  conn: R`<p><b>At work:</b> “leave the code cleaner than you found it”; linters in CI.</p><p><b>Earlier:</b> high cohesion and low coupling (Week 5) are what refactoring aims for.</p><p><b>Next:</b> Week 8’s SOLID principles and design smells apply the same ideas at class level.</p>`,
  mis: M.ul(['Calling a feature addition refactoring.', 'Treating comments as always good — redundant comments are a smell.']),
  exam: R`<p><b>Fast method:</b> did behaviour change? Yes → feature/bug fix. No, but code is clearer → refactoring.</p>`
});
Q({ cp: 'clean-code', type: 'mcq', diff: 'easy', q: 'Which is a refactoring?', opts: ['Adding an export-to-PDF button', 'Splitting a 150-line function into four well-named functions with the same behaviour', 'Fixing a wrong tax rate', 'Upgrading the database'], ans: 1,
  why: ['New feature.', 'Correct.', 'Bug fix — behaviour changes.', 'Infrastructure change.'], sol: 'Same behaviour, better structure.' });
Q({ cp: 'clean-code', type: 'msq', diff: 'moderate', q: 'Select ALL code smells.', opts: ['A boolean flag argument that switches between two behaviours', 'A comment that restates the next line', 'A descriptive variable name like total_marks', 'The same 10 lines copied into three functions'], ans: [0, 1, 3],
  why: ['Smell.', 'Smell.', 'Good practice.', 'DRY violation.'], sol: 'Flags, redundant comments, duplication.' });
Q({ cp: 'clean-code', type: 'mcq', diff: 'moderate', q: 'Which tool reports dead (unused) Python code?', opts: ['vulture', 'Radon', 'Git', 'Flask'], ans: 0,
  why: ['Correct.', 'Metrics.', 'VCS.', 'Framework.'], sol: 'vulture finds dead code.' });
Q({ cp: 'clean-code', type: 'short', diff: 'moderate', q: 'What is refactoring, and how is it different from adding a feature? Give one example of each.',
  model: '<p>Refactoring improves the internal structure of code without changing its external behaviour — e.g. extracting duplicated validation into one function. Adding a feature changes behaviour by adding functionality — e.g. adding OTP login. Refactoring is safe to verify by running the same tests before and after.</p>' });

/* ---------------- Week 7 harder variations ---------------- */
VQ({ kind: 'negated', type: 'mcq', q: 'Which of these is <b>NOT</b> an IDE?', opts: ['PyCharm', 'Thonny', 'Notepad', 'Visual Studio Code'], ans: 2,
  why: ['IDE.', 'IDE.', 'Correct answer: a plain text editor.', 'IDE.'], sol: 'No debugger, no syntax checking → not an IDE.', trap: 'VS Code is sometimes called “just an editor”; with its tooling it is treated as an IDE.' }, ['cs3001-2024T1-34', 'cs3001-2025T1-20']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A startup wants every developer to keep a complete copy of the project history and work offline on separate lines of development. Which tool fits?', opts: ['Git', 'Flask', 'PyCharm', 'A shared network drive'], ans: 0,
  why: ['Correct: distributed VCS with branching.', 'Web framework.', 'IDE.', 'No history or branching.'], sol: 'Full local history + branches → Git.', trap: 'PyCharm integrates with Git but is not the VCS.' }, ['cs3001-2024T3-6', 'cs3001-2026T1-19']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement about Git is <b>INCORRECT</b>?', opts: ['git pull fetches and merges', 'git fetch downloads remote changes without merging', 'git fetch automatically merges into the current branch', 'git rebase master replays the current branch’s commits on top of master'], ans: 2,
  why: ['Correct statement.', 'Correct statement.', 'Incorrect.', 'Correct statement.'], sol: 'Only pull merges.', trap: 'Options 2 and 3 contradict each other; pick carefully.' }, ['cs3001-2025T1-21', 'cs3001-2025T3-18']);
VQ({ kind: 'chained', type: 'mcq', q: 'A wrong formula <code>tax = price * 1.8</code> (should be <code>0.18</code>) makes the app compute a tax ten times too high, and a customer sees ₹1,800 tax on a ₹1,000 order. Name, in order: the line, the wrong behaviour, the visible symptom.', opts: ['Fault, Error, Failure', 'Error, Fault, Failure', 'Failure, Error, Fault', 'Fault, Failure, Error'], ans: 0,
  why: ['Correct.', 'The line is the fault.', 'Reversed.', 'The visible symptom is the failure.'], sol: 'Code → fault; behaviour → error; visible → failure.', trap: 'Calling the line an error.' }, ['cs3001-2026T1-20', 'cs3001-2026T2-3', 'cs3001-2023T1-250']);
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement about debugging is <b>NOT</b> correct?', opts: ['It is the process of determining the cause of a failure', 'It begins by reproducing the problem', 'It is needed only during initial development', 'Code may pass while debugging yet fail in production'], ans: 2,
  why: ['Correct statement.', 'Correct statement.', 'Not correct: defects appear throughout the lifecycle.', 'Correct statement.'], sol: 'Debugging happens whenever failures occur.', trap: 'None strong.' }, ['cs3001-2024T2-10', 'cs3001-2023T3-193']);
VQ({ kind: 'scenario', type: 'mcq', q: 'A mobile game is correct but stutters on mid-range phones. The team needs per-function CPU time and memory allocation. They also suspect one function is never called. Which two techniques, in that order?', opts: ['Profiling, then logging', 'Logging, then profiling', 'Dump & diff, then stepping', 'Stepping, then dump & diff'], ans: 0,
  why: ['Correct.', 'Swapped.', 'Neither targets CPU time.', 'Neither targets CPU time.'], sol: 'Performance → profiling; is it called? → logging.', trap: 'Order of the two needs.' }, ['cs3001-2026T1-21', 'cs3001-2026T2-7', 'cs3001-2023T2-11']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A wrong shipping charge appears on an invoice. The developer starts at the “Calculate shipping” button click and follows each function call until the charge becomes wrong. Strategy?', opts: ['Forward', 'Backward', 'Input manipulation', 'Black-box'], ans: 0,
  why: ['Correct: from the trigger forward.', 'Would start from the wrong charge.', 'Inputs are not varied.', 'The code is visible.'], sol: 'Trigger → forward.', trap: 'Backward is the usual instinct for a wrong output.' }, ['cs3001-2023T1-251', 'cs3001-2023T3-191', 'cs3001-2025T3-16']);
VQ({ kind: 'scenario', type: 'mcq', q: 'A hospital integrates a closed-source lab-results SDK; values arrive in the wrong units. The developer cannot read the SDK’s source and studies its reference docs and sample apps. Strategy, and why not forward?', opts: ['Black-box — forward needs the internal control flow, which is hidden', 'Forward — start from the API call', 'Backward — start from the wrong unit', 'Input manipulation — change patient IDs'], ans: 0,
  why: ['Correct.', 'Internal flow is not visible.', 'Internal dependencies are not visible.', 'Possible, but the scenario describes reading docs and samples.'], sol: 'No source + docs/examples → black-box.', trap: 'Option 4 is a legitimate tactic but not the one described.' }, ['cs3001-2024T1-31', 'cs3001-2024T2-18', 'cs3001-2024T3-11', 'cs3001-2025T1-22', 'cs3001-2025T2-140']);
VQ({ kind: 'nearmiss', type: 'mcq', q: 'A report lists “LOC 420, LLOC 310, SLOC 350, comments 40” and separately “vocabulary 58, volume 2,140”. Which metric families are these, in order?', opts: ['Raw, Halstead', 'Halstead, raw', 'Cyclomatic, raw', 'Raw, cyclomatic'], ans: 0,
  why: ['Correct.', 'Swapped.', 'LOC is not cyclomatic.', 'Vocabulary/volume come from Halstead.'], sol: 'Lines → raw; vocabulary/volume → Halstead.', trap: 'Swapped order.' }, ['cs3001-2023T1-242', 'cs3001-2023T3-192']);
VQ({ kind: 'numbers', type: 'num', q: 'Cyclomatic complexity of:<pre class="code">def grade(marks):\n    result = []\n    for m in marks:\n        if m >= 90:\n            result.append("S")\n        elif m >= 75:\n            result.append("A")\n        elif m >= 50:\n            result.append("B")\n        else:\n            result.append("F")\n    return result</pre>', ans: 5, tol: 0,
  calc: () => CALC.cc('def grade(marks):\n    result = []\n    for m in marks:\n        if m >= 90:\n            result.append("S")\n        elif m >= 75:\n            result.append("A")\n        elif m >= 50:\n            result.append("B")\n        else:\n            result.append("F")\n    return result'),
  sol: 'for, if, elif, elif → 4 decisions → CC = 5.', trap: 'Counting the else gives 6; forgetting the loop gives 4.' }, ['cs3001-2025T1-38', 'cs3001-2025T2-141', 'cs3001-2025T3-17', 'cs3001-2026T2-17']);
VQ({ kind: 'numbers', type: 'num', q: 'Cyclomatic complexity of:<pre class="code">def find_pair(arr, target):\n    i, j = 0, len(arr) - 1\n    while i < j:\n        s = arr[i] + arr[j]\n        if s == target:\n            return (i, j)\n        elif s < target:\n            i += 1\n        else:\n            j -= 1\n    for k in arr:\n        if k == target:\n            return (k,)\n    return None</pre>', ans: 6, tol: 0,
  calc: () => CALC.cc('def find_pair(arr, target):\n    i, j = 0, len(arr) - 1\n    while i < j:\n        s = arr[i] + arr[j]\n        if s == target:\n            return (i, j)\n        elif s < target:\n            i += 1\n        else:\n            j -= 1\n    for k in arr:\n        if k == target:\n            return (k,)\n    return None'),
  sol: 'while, if, elif, for, if → 5 → CC = 6.', trap: 'Five separate decision keywords spread over two loops.' }, ['cs3001-2023T2-17', 'cs3001-2024T2-23', 'cs3001-2024T3-12']);

[['Development environment', 'Text editor + compiler/interpreter.'], ['IDE', 'Development environment + productivity tools (debugger, syntax checking, rename, find usages).'], ['Framework', 'Ready-made application structure that calls your code.'], ['Library', 'Reusable functions your code calls.'],
 ['Version control system', 'Tracks changes, history, collaboration, rollback, branching.'], ['Distributed VCS', 'Every developer has a full copy of the repository (Git).'], ['git fetch', 'Download remote changes without merging.'], ['git pull', 'Fetch + merge into the current branch.'], ['git rebase', 'Replay commits on top of another branch; cleaner history.'], ['git diff', 'Show differences between versions.'],
 ['Fault', 'The defective code where the failure originates.'], ['Error', 'Discrepancy between actual and intended behaviour.'], ['Failure', 'Observable symptom: wrong output, exception.'], ['Debugging', 'Determining the cause of a failure.'],
 ['Logging', 'Print/log statements to trace execution and values.'], ['Dump & diff', 'Compare outputs of two runs.'], ['Stepping', 'Line-by-line execution in a debugger.'], ['Profiling', 'Measure time and memory to find bottlenecks.'],
 ['Forward strategy', 'From the triggering event, follow the flow forward.'], ['Backward strategy', 'From the wrong output, trace dependencies back.'], ['Input manipulation', 'Vary inputs and observe outputs.'], ['Black-box debugging', 'Use documentation and examples when internals are unavailable.'],
 ['Raw metrics', 'LOC, LLOC, SLOC, comments.'], ['Halstead’s metrics', 'From distinct operators and operands.'], ['Cyclomatic complexity', 'Decision points + 1; minimum test cases for path coverage.'],
 ['Code smell', 'A warning sign of poor design; not necessarily a bug.'], ['Refactoring', 'Improve structure without changing behaviour.'], ['DRY', 'Don’t repeat yourself.']].forEach(([t, d]) => GLOSS(t, d, 7));
[['VS Code, PyCharm, Thonny are…', 'IDEs.'], ['TextEdit — IDE?', 'No, a text editor.'], ['fetch vs pull?', 'fetch downloads; pull = fetch + merge.'], ['Bring master into feature branch cleanly?', 'git rebase master.'], ['Revert and find who broke main?', 'Version history tracking.'],
 ['Wrong line of code?', 'Fault.'], ['Observable wrong output?', 'Failure.'], ['Actual ≠ intended?', 'Error.'], ['Print statements everywhere?', 'Logging.'], ['Slow program, CPU/memory hot spots?', 'Profiling.'],
 ['From trigger forward?', 'Forward strategy.'], ['Closed third-party API, read docs?', 'Black-box debugging.'], ['LOC / LLOC / SLOC?', 'Raw metrics.'], ['CC rule?', 'if + elif + for + while + 1; never else.'], ['Min test cases?', '= cyclomatic complexity.'], ['Refactoring?', 'Same behaviour, better structure.']].forEach(([f, b]) => CARD(f, b, 7));
