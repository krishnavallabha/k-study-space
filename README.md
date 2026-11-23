# K Study Space

A self-contained study platform for IIT Madras BS courses, built as one static page.
Each course gets concept lessons, practice, every mapped past-paper question, harder
variations of those questions, timed mocks, and review tools.

## Courses

| Course | Weeks | Status |
| --- | --- | --- |
| Software Engineering (cs3001) | 1–8 | Done: 45 concepts, all 253 Quiz 2 past-paper questions mapped, 529 questions in total |
| Strategies for Professional Growth (gn3001) | 1–8 | Done: 31 concepts, all 289 Quiz 1 and Quiz 2 past-paper questions mapped, 514 questions in total |

The quiz syllabus for both courses is Weeks 1–8. The end-term option is a cumulative
mock over the same weeks. No end-term past papers were provided, so nothing is labelled
an end-term PYQ.

## What each week contains

- **Concepts** in six moves: intuition → formal setup → visual → result → connections → exam lens.
  Each concept has three worked examples (introductory, standard, exam-level) and at least
  three checkpoint questions, one of them a self-graded short answer.
- **Past-paper questions (PYQs)**, each with a per-option explanation, the trap the paper sets,
  and at least one harder variation that is always labelled as a variation.
- **Computed keys.** Every numeric answer (COCOMO, risk exposure, critical path, velocity,
  cyclomatic complexity) is recomputed from its formula when the page loads. If any key
  disagrees with the maths, the page refuses to start.
- **Mocks** per week, per exam, cumulative, and a hard "Spartan" preset; an error notebook,
  a Leitner review queue and a "what to study next" recommender.
- **Honesty pages:** Sources & discrepancies (where the papers, notes and books disagree, and
  what the platform does) and QA & limitations (a live validator).

## Build and check

Requires Python 3. Node is optional (only for the command-line checker).

```
python build.py            # writes public/index.html
node scripts/check.js      # validates every course; exit code 1 on any error
```

Open `public/index.html` in a browser, or serve the folder locally:

```
python -m http.server 8765 --directory public
```

The same validator runs in the browser on each course's **QA & limitations** page.

## Deploy

`render.yaml` publishes `public/` as a free static site on Render. `public/index.html` is
built locally and committed, so the host only serves the file.

## Project layout

```
build.py                    concatenates src/ into public/index.html
src/core/                   helpers, registries, calculators, validator
src/courses/<code>/
    course.js               course header, exams, papers, PYQ families
    w1.js … wN.js           concepts, checkpoints, variations, glossary, flashcards per week
    pyq.js                  mapped past-paper questions
    extra.js                formulas, comparison tables, revision sheets, sources, limitations
src/app/                    views, router, progress storage
scripts/check.js            command-line validator
```

## Adding content

- **A week:** add `src/courses/<code>/wN.js` with a `WEEK({...})` call, then `C({...})` concepts,
  `Q({...})` checkpoints, `VQ({...}, [pyqIds])` variations, `GLOSS` and `CARD` entries. Widen the
  exam weeks in `course.js`. Rebuild and run the checker.
- **A course:** add a folder under `src/courses/` with a `course.js` that calls `COURSE({...})`.
  Course folders are discovered automatically.
- **A past paper:** register it with `PAPER(...)` in `course.js` and add its questions with `PQ(...)`
  in `pyq.js`. Every PYQ must have at least one variation or the checker fails.

## Rules the content follows

- Source priority: past papers › week-wise notes › books › general knowledge.
- Generated questions are never labelled as past-paper questions.
- Keys that cannot be verified are marked "derived".
- Page numbers and timestamps are cited only where the source itself shows them.
- No books, PDFs, zips or personal notes are stored in this repository; `.gitignore` is a whitelist.

## Roadmap

1. Strategies for Professional Growth, Weeks 1–8.
2. Software Engineering Weeks 9–12 and the end-term syllabus.
3. More courses as past papers become available.
