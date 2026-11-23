/* ===================== SPG WEEK 7 — Financial literacy ===================== */
WEEK({ course: 'gn3001', n: 7, title: 'Financial Literacy: Statements, Net Worth, Investing and Returns',
  blurb: 'Read the three financial statements, build a personal balance sheet and compute net worth, know the risk–return ladder of savings and investment products, compute real returns, CAGR, future value and the rule of 72, and use two pieces of economic sense: inflation and opportunity cost.',
  topics: [
    { title: '7.1 Financial statements', cs: ['fin-statements'] },
    { title: '7.2 Personal balance sheet and personal finance', cs: ['personal-finance'] },
    { title: '7.3 Savings, investments, risk and return', cs: ['investing'] },
    { title: '7.4 Returns maths: real return, CAGR, IRR, rule of 72', cs: ['returns-math'] },
    { title: '7.5 Economic sense: inflation and opportunity cost', cs: ['economics'] }] });

/* ---------------- 7.1 Financial statements ---------------- */
C({ id: 'fin-statements', week: 7, title: 'The three financial statements and owner’s equity', pri: 'High', prereq: [],
  src: 'Study guide W7 (financial statements) · spg notes W7 · PYQs 2023 T1 Q21–24 Q56, 2023 T3 Q211, 2026 T2 Q20',
  oneLine: 'Income statement = profitability over a period. Balance sheet = assets, liabilities and equity at a date. Cash flow statement = where cash came from and went. Equity = assets − liabilities; only profit (or owner capital) raises it.',
  misShort: 'Thinking borrowing to buy assets raises equity.',
  intu: R`<p>A café sells ₹10,000 of coffee to an office on credit. Profit went up today, but no cash arrived. Which statement shows what?</p><p>Three statements answer three different questions. The question this concept answers: <b>which statement shows what, and what changes owner’s equity?</b></p>`,
  why: R`<ul><li>Four questions in the 2023 T1 paper alone (Q21–24); intangibles (2023 T3 Q211, 2023 T1 Q56); residual interest (2026 T2 Q20).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Income statement (P&L)</b> — revenue − expenses = profit, over a period. Measures <b>profitability</b>.',
    '<b>Balance sheet</b> — a snapshot at a date: assets = liabilities + owner’s equity.',
    '<b>Cash flow statement</b> — cash in and out from operating, investing and financing activities; explains the change in the cash line of the balance sheet.',
    '<b>Accounts receivable</b> — money customers owe for credit sales; a current asset.',
    '<b>Owner’s equity</b> — residual interest: assets − liabilities. Raised by profit and owner capital; not by borrowing.',
    '<b>Intangible assets</b> — no physical substance but valuable (goodwill, IPR, brand); included on the balance sheet when acquired or identifiable.']))
    + '<p><b>In words:</b> P&L = did we make money; balance sheet = what we own and owe; cash flow = where the cash went.</p>',
  vis: M.table(['Statement', 'Question it answers', 'Time'], [
    ['Income statement', 'Profitable?', 'Period'],
    ['Balance sheet', 'What is owned and owed? Equity?', 'One date'],
    ['Cash flow statement', 'Where did cash come from and go?', 'Period']], 'Three statements.'),
  ex: [
    M.ex('Introductory', R`<p>Which statement measures profitability?</p>`, R`<p>The <b>income statement</b> (2023 T1 Q21).</p>`),
    M.ex('Standard', R`<p>A credit sale shows up as revenue on the income statement and as what on the balance sheet?</p>`, R`<p><b>Accounts receivable</b> (2023 T1 Q22).</p>`),
    M.ex('Exam-level', R`<p>Which raise owner’s equity? (1) Buying assets with debt. (2) Paying off loans with cash. (3) Earning profit.</p>`, R`<p><b>3 only</b> (2023 T1 Q24). Each of 1 and 2 moves both sides of the equation by the same amount.</p>`)],
  math: M.rule(R`<p><b>Assets = Liabilities + Equity → Equity = Assets − Liabilities.</b></p>`)
    + M.why([['Borrowing raises equity', 'asset and liability rise together.'],
      ['Intangibles are never on the balance sheet', 'acquired goodwill and IPR are.'],
      ['The cash flow statement is unrelated to the balance sheet', 'it explains the cash change.']]),
  conn: R`<p><b>Next:</b> the same equation for a person gives the personal balance sheet (7.2).</p>`,
  mis: M.ul(['1 and 3 in 2023 T1 Q24.', '“Excluded because it lacks physical substance” in 2023 T3 Q211.']),
  exam: R`<p><b>How it is asked:</b> statement → what it measures; which transactions change equity. <b>Fast method:</b> write the two-sided change for each transaction.</p>`
});
Q({ cp: 'fin-statements', type: 'mcq', diff: 'easy', q: 'Which statement is a snapshot at a single date?', opts: ['Income statement', 'Balance sheet', 'Cash flow statement', 'All three'], ans: 1,
  why: ['Period.', 'Correct.', 'Period.', 'Only the balance sheet.'], sol: 'Balance sheet = snapshot.' });
Q({ cp: 'fin-statements', type: 'mcq', diff: 'moderate', q: 'A company issues new shares to its owners for ₹10 lakh cash. Owner’s equity:', opts: ['Rises by ₹10 lakh', 'Falls by ₹10 lakh', 'Unchanged', 'Cannot tell'], ans: 0,
  why: ['Correct: owner capital raises equity.', 'No.', 'Cash rises with no new liability.', 'It can be determined.'], sol: '+cash, no liability → equity rises.' });
Q({ cp: 'fin-statements', type: 'msq', diff: 'moderate', q: 'Which leave owner’s equity unchanged?', opts: ['Buying a machine with a bank loan', 'Repaying a loan with cash', 'Earning a profit', 'Collecting an accounts receivable'], ans: [0, 1, 3],
  why: ['Both sides rise.', 'Both sides fall.', 'Profit raises equity.', 'One asset swapped for another.'], sol: 'Only profit changes equity here.' });
Q({ cp: 'fin-statements', type: 'short', diff: 'moderate', q: 'Explain why taking a loan to buy equipment does not change owner’s equity.',
  model: '<p>Equity = assets − liabilities. The equipment adds to assets and the loan adds the same amount to liabilities, so the difference is unchanged.</p>' });

/* ---------------- 7.2 Personal finance ---------------- */
C({ id: 'personal-finance', week: 7, title: 'Personal balance sheet, net worth and money basics', pri: 'High', prereq: ['fin-statements'],
  src: 'Study guide W7 (personal balance sheet, fiscal sense) · spg notes W7 · PYQs 2023 T3 Q201–205, 2024 T3 Q207–210, 2026 T1 Q10 Q11 Q17 Q18, 2023 T1 Q28–30, 2023 T2 Q92, 2024 T1 Q197–199, 2025 T3 Q225',
  oneLine: 'Net worth = total assets − total liabilities. Swapping one asset for another, or buying an asset with a loan, leaves net worth unchanged; spending on consumption lowers it. A balance sheet is a snapshot at a date. Check liquidity, not only net worth.',
  misShort: 'Thinking selling an asset or taking a loan changes net worth.',
  intu: R`<p>Priya owns a flat worth ₹50 lakh with a ₹40 lakh home loan, ₹2 lakh in the bank and owes ₹50,000 on her card. Is she rich? Can she pay a ₹3 lakh hospital bill next week?</p><p>The question this concept answers: <b>what is my net worth, what changes it, and is it liquid?</b></p>`,
  why: R`<ul><li>Two balance-sheet case blocks (2023 T3, 2024 T3) with net-worth calculations.</li><li>Liquidity case (2026 T1 Q18), loan purchase (Q17), heads of income (Q10).</li></ul>`,
  formal: M.def(M.lines([
    '<b>Personal balance sheet</b> — list of assets (cash, bank, FDs, investments, property, vehicle, belongings) and liabilities (card dues, personal, home, vehicle loans) at a date.',
    '<b>Net worth</b> = total assets − total liabilities.',
    '<b>Asset swap</b> (sell stocks, buy mutual funds) → net worth unchanged.',
    '<b>Loan-funded asset</b> → assets and liabilities both rise; net worth unchanged at purchase.',
    '<b>Liquidity</b> — easily available cash (bank, FDs) relative to expenses; a high net worth locked in property can still mean a liquidity deficit.',
    '<b>Depreciating assets</b> — vehicles, appliances; lose value over time.',
    '<b>Net pay</b> = gross pay − deductions. <b>Fixed expenses</b> — rent, EMI. <b>Premium</b> — regular payment to keep insurance.',
    '<b>Interest</b> — the lender’s compensation; higher risk → higher rate. Fixed-rate loans usually start above variable rates.',
    '<b>Heads of income (India)</b> — Salary; House Property; Business or Profession; Capital Gains; Other Sources. Agricultural income is exempt.']))
    + '<p><b>In words:</b> what you own minus what you owe — but also ask how much of it you can reach this month.</p>',
  vis: M.table(['Transaction', 'Assets', 'Liabilities', 'Net worth'], [
    ['Sell stocks, buy mutual fund', 'swap', '—', 'unchanged'],
    ['Buy a car with a loan', '+', '+', 'unchanged'],
    ['Repay a loan from savings', '−', '−', 'unchanged'],
    ['Spend savings on a holiday', '−', '—', 'falls'],
    ['Receive a salary bonus', '+', '—', 'rises']], 'What moves net worth.'),
  ex: [
    M.ex('Introductory', R`<p>Assets ₹12,00,000; liabilities ₹4,10,000. Net worth?</p>`, R`<p><b>₹7,90,000</b> (2023 T3 Q201).</p>`),
    M.ex('Standard', R`<p>Aisha buys an ₹8 lakh car on a loan. Effect on her balance sheet?</p>`, R`<p>Assets +8 lakh, liabilities +loan; net worth unchanged at purchase (2026 T1 Q17).</p>`),
    M.ex('Exam-level', R`<p>Sujal: net worth ₹5 crore, ₹4.5 crore in property, ₹10 lakh liquid, expenses ₹2 lakh a month, considering a ₹40 lakh personal loan for a vacation and car. Main problem?</p>`, R`<p>A <b>structural liquidity deficit</b> (2026 T1 Q18): five months of cover and more consumption debt.</p>`)],
  math: M.rule(R`<p><b>NW = ΣAssets − ΣLiabilities.</b> Swaps and loan-funded purchases: NW unchanged. Consumption: NW falls.</p>`)
    + M.why([['Repaying a loan raises NW', 'cash and debt fall equally.'],
      ['High NW = financially safe', 'liquidity matters.'],
      ['Appliances are liabilities', 'they are depreciating assets.'],
      ['Travel reimbursement is income', 'it repays an expense.']]),
  conn: R`<p><b>Earlier:</b> the same accounting equation (7.1).</p><p><b>Next:</b> where to hold assets (7.3).</p>`,
  mis: M.ul(['Total assets for net worth.', 'Leaving FDs out of “cash and bank” (2024 T3 Q208).', 'Agriculture as a head of income.']),
  exam: R`<p><b>How it is asked:</b> case block with four calculations; transaction effects. <b>Fast method:</b> total each side once, then reason about each change on both sides.</p>`
});
Q({ cp: 'personal-finance', type: 'num', diff: 'easy', q: 'Assets: bank ₹1,00,000, FDs ₹2,00,000, flat ₹30,00,000. Liabilities: home loan ₹22,00,000, card ₹50,000. Net worth (₹)?', ans: 1050000, tol: 0,
  sol: '33,00,000 − 22,50,000 = 10,50,000.' });
Q({ cp: 'personal-finance', type: 'mcq', diff: 'moderate', q: 'Ravi uses ₹2 lakh of savings to repay part of his home loan. His net worth:', opts: ['Rises by ₹2 lakh', 'Falls by ₹2 lakh', 'Unchanged', 'Rises by the interest saved immediately'], ans: 2,
  why: ['Both sides fall.', 'No.', 'Correct.', 'Future interest is not on today’s sheet.'], sol: '−cash, −liability.' });
Q({ cp: 'personal-finance', type: 'mcq', diff: 'moderate', q: 'Which statement about loans is <b>false</b>?', opts: ['Riskier borrowers pay higher rates', 'Interest is the lender’s compensation', 'Fixed-rate loans usually start lower than variable-rate loans', 'Variable-rate EMIs can change'], ans: 2,
  why: ['True.', 'True.', 'False — the answer.', 'True.'], sol: 'Fixed rates usually start higher.' });
Q({ cp: 'personal-finance', type: 'short', diff: 'moderate', q: 'Why can a person with a high net worth still be in financial trouble?',
  model: '<p>Net worth may be locked in illiquid assets such as property. If liquid assets (bank, FDs) cover only a few months of expenses, an emergency forces borrowing or a distress sale: a liquidity deficit.</p>' });

/* ---------------- 7.3 Investing ---------------- */
C({ id: 'investing', week: 7, title: 'Savings and investment products, risk and return', pri: 'High', prereq: ['personal-finance'],
  src: 'Study guide W7 (savings and investment products; risk and return) · spg notes W7 · PYQs 2023 T1 Q27, 2023 T2 Q93–95, 2023 T3 Q212 Q213, 2024 T2 Q103 Q104 Q106, 2025 T2 Q237 Q238, 2025 T3 Q224 Q226 Q227',
  oneLine: 'Higher return comes with higher risk: cash < fixed income < property < equity < crypto. Savings accounts are for emergencies, not growth. RD = fixed monthly sum, tenure, rate. FDs allow loans and premature withdrawal (with penalty). Sovereign Gold Bonds are the tax-efficient gold. Diversification reduces risk.',
  misShort: 'Believing higher-return investments are lower risk, or savings accounts are good long-term investments.',
  intu: R`<p>Meera has ₹5 lakh: an emergency fund, a goal three years away, and retirement in thirty. Each needs a different product.</p><p>The question this concept answers: <b>which product, at what risk, for what goal?</b></p>`,
  why: R`<ul><li>Risk–return ladder (2025 T2 Q237), crypto (2023 T2 Q95, 2025 T3 Q226), savings accounts (asked twice), RD/FD facts, SGB, mutual fund instruments, liquidity.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Risk–return trade-off</b> — investments that return more are generally <b>higher</b> risk.',
    '<b>Asset-class ladder</b> — cash → fixed income/debt → property → equity (low to high risk and return); crypto has the highest volatility.',
    '<b>Savings account</b> — safe, liquid; low returns, often below inflation.',
    '<b>Recurring deposit</b> — fixed monthly deposit, fixed tenure, fixed rate.',
    '<b>Fixed deposit</b> — tenure from days to years; interest compounded periodically; premature withdrawal with penalty; loans against FDs available; tax-saver FDs under Section 80C.',
    '<b>Sovereign Gold Bonds</b> — government bonds linked to the gold price, pay interest; redemption at maturity is tax-free.',
    '<b>Mutual funds</b> — may hold equity, gold ETFs, government securities, corporate bonds, debentures (scheme-dependent).',
    '<b>Liquidity</b> — low trading volume → less liquidity → higher risk → higher required return.',
    '<b>Diversification</b> — spreading across assets reduces risk.']))
    + '<p><b>In words:</b> the more you might earn, the more you might lose.</p>',
  vis: M.flow([{ t: 'Cash', sub: 'lowest' }, { t: 'Fixed income', sub: 'FD, bonds' }, { t: 'Property' }, { t: 'Equity', hl: true }, { t: 'Crypto', sub: 'highest volatility' }], { cap: 'Risk and expected return rise left to right.' }),
  ex: [
    M.ex('Introductory', R`<p>True or false: investments that return more are generally lower risk.</p>`, R`<p><b>False</b> (2023 T3 Q212).</p>`),
    M.ex('Standard', R`<p>Order cash, fixed income, property, equity by increasing risk and return.</p>`, R`<p><b>1–2–3–4</b> (2025 T2 Q237).</p>`),
    M.ex('Exam-level', R`<p>How many are true about Indian bank FDs? (1) Tenure varies. (2) Compounded periodically. (3) Premature withdrawal with penalty. (4) No loans against FDs. (5) Tax-saver FDs under 80C.</p>`, R`<p><b>Four</b> (2024 T2 Q103); statement 4 is false.</p>`)],
  math: M.rule(R`<p><b>Return ↑ ⇒ risk ↑. Liquidity ↓ ⇒ risk ↑ ⇒ required return ↑.</b></p>`)
    + M.why([['Savings accounts for long-term growth', 'returns barely match inflation.'],
      ['Physical gold is the tax-efficient way', 'SGBs pay interest and are tax-free at maturity.'],
      ['Diversification maximises returns', 'it reduces risk (the 2024 T2 key disagrees; see Sources).']]),
  conn: R`<p><b>Next:</b> how to measure returns (7.4).</p>`,
  mis: M.ul(['True in the savings-account statement.', 'Statement 4 in 2024 T2 Q103.']),
  exam: R`<p><b>How it is asked:</b> product facts, ladders, true/false. <b>Fast method:</b> place it on the ladder.</p>`
});
Q({ cp: 'investing', type: 'mcq', diff: 'easy', q: 'Best place for a three-month emergency fund?', opts: ['Small-cap equity fund', 'Savings account or liquid fund', 'Cryptocurrency', 'Real estate'], ans: 1,
  why: ['Too volatile.', 'Correct: safe and liquid.', 'Too volatile.', 'Illiquid.'], sol: 'Emergency = safety + liquidity.' });
Q({ cp: 'investing', type: 'mcq', diff: 'moderate', q: 'A thinly traded small company stock, compared with a heavily traded large company stock, usually has:', opts: ['More liquidity, less risk', 'Less liquidity, higher risk, higher required return', 'Less liquidity, lower risk', 'No difference'], ans: 1,
  why: ['Reversed.', 'Correct.', 'Risk rises.', 'Liquidity differs.'], sol: 'Low volume → illiquid → risk.' });
Q({ cp: 'investing', type: 'msq', diff: 'moderate', q: 'Which are true about Sovereign Gold Bonds?', opts: ['Linked to the gold price', 'Pay periodic interest', 'Capital gains at maturity are tax-free', 'Carry making charges'], ans: [0, 1, 2],
  why: ['Yes.', 'Yes.', 'Yes.', 'That is jewellery.'], sol: 'SGBs: price-linked, interest, tax-free at maturity.' });
Q({ cp: 'investing', type: 'short', diff: 'moderate', q: 'Explain the risk–return trade-off with two examples.',
  model: '<p>Investors demand higher expected return for higher risk. A savings account is safe but earns little; equity can earn much more over time but can fall sharply in a year.</p>' });

/* ---------------- 7.4 Returns maths ---------------- */
C({ id: 'returns-math', week: 7, title: 'Returns: real return, CAGR, IRR/XIRR, future value and the rule of 72', pri: 'High', prereq: ['investing'],
  src: 'Study guide W7 (time value of money, returns) · spg notes W7 · PYQs 2023 T1 Q25, 2023 T2 Q91, 2024 T3 Q200, 2025 T2 Q235 Q236, 2025 T3 Q223, 2026 T1 Q8 Q9 Q12–16, 2026 T2 Q19',
  oneLine: 'FV = P(1 + r)ⁿ. CAGR = (end ÷ start)^(1/n) − 1. Real return = (1 + nominal) ÷ (1 + inflation) − 1. Rule of 72: rate ≈ 72 ÷ years to double. Intermediate cash flows → IRR; irregular dates → XIRR. Post-tax interest = interest × (1 − tax rate).',
  misShort: 'Using simple averages for CAGR, or subtracting inflation when the options need the exact formula.',
  intu: R`<p>An FD pays 7%; inflation is 6%; your tax bracket is 30%. Are you getting richer?</p><p>Interest after tax ≈ 4.9%, below inflation. The question this concept answers: <b>how do I compute what an investment really earns?</b></p>`,
  why: R`<ul><li>The 2026 T1 paper has four calculations (Q13–16) and the 2023 T1 paper one (Q25).</li><li>IRR vs CAGR (2025 T2 Q235–236), XIRR (2026 T1 Q12), inflation as “silent killer”.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Time value of money</b> — a rupee today is worth more than a rupee later; compare cash flows across time.',
    '<b>Future value</b> FV = P × (1 + r)ⁿ.',
    '<b>CAGR</b> = (end ÷ start)^(1/n) − 1 — single start and end value.',
    '<b>IRR</b> — the rate that makes the present value of all cash flows zero; accounts for size and timing of intermediate flows. <b>XIRR</b> — IRR for irregular dates.',
    '<b>Real return</b> = (1 + nominal) ÷ (1 + inflation) − 1 ≈ nominal − inflation.',
    '<b>Real rate of return</b> in personal finance — net of inflation, taxes and expenses.',
    '<b>Rule of 72</b> — years to double ≈ 72 ÷ rate%; rate ≈ 72 ÷ years.',
    '<b>Post-tax interest</b> = interest × (1 − tax rate).',
    '<b>Inflation as a “silent killer”</b> — the same nominal money buys less over time.']))
    + '<p><b>In words:</b> grow by compounding, then strip out tax and inflation.</p>',
  vis: M.table(['You know…', 'Use'], [
    ['Start, end, years', 'CAGR'],
    ['Several cash flows at regular intervals', 'IRR'],
    ['Cash flows at irregular dates', 'XIRR'],
    ['Nominal return and inflation', 'Real return'],
    ['Years to double (or rate)', 'Rule of 72']], 'Which measure.'),
  ex: [
    M.ex('Introductory', R`<p>Double money in 8 years: rate?</p>`, R`<p>72 ÷ 8 = <b>9%</b> (2026 T1 Q14).</p>`),
    M.ex('Standard', R`<p>₹50,000 grows to ₹75,000 in 3 years. CAGR?</p>`, R`<p>1.5^(1/3) − 1 = <b>14.47%</b> (2026 T1 Q15). Not 50% ÷ 3 = 16.67%.</p>`),
    M.ex('Exam-level', R`<p>Healthcare inflation 15%. A ₹1,00,000 procedure costs how much in 5 years?</p>`, R`<p>1,00,000 × 1.15⁵ = <b>₹2,01,135</b> (2026 T1 Q13).</p>`)],
  math: M.rule(R`<p><b>FV = P(1+r)ⁿ · CAGR = (E/S)^(1/n) − 1 · Real = (1+n)/(1+i) − 1 · Rate ≈ 72/years.</b></p>`)
    + M.why([['CAGR = total growth ÷ years', 'that ignores compounding.'],
      ['CAGR for uneven cash flows', 'use IRR/XIRR.'],
      ['Real return = nominal + inflation', 'subtract.']]),
  conn: R`<p><b>Earlier:</b> products (7.3). <b>Next:</b> inflation causes (7.5).</p>`,
  mis: M.ul(['16.67% in the CAGR question.', '₹1,75,000 (simple interest) in the healthcare question.', '₹1,125 (the tax) in the Adhil question.']),
  exam: R`<p><b>How it is asked:</b> direct computations with four options. <b>Fast method:</b> estimate first; the simple-interest answer is always a distractor.</p>`
});
Q({ cp: 'returns-math', type: 'num', diff: 'moderate', q: '₹2,00,000 at 10% a year compounded annually for 3 years. Future value (₹)?', ans: 266200, tol: 1,
  sol: '2,00,000 × 1.331 = 2,66,200.', calc: () => CALC.fv(200000, 0.10, 3) });
Q({ cp: 'returns-math', type: 'num', diff: 'moderate', q: 'Nominal return 9%, inflation 5%. Exact real return (%), to two decimals?', ans: 3.81, tol: 0.02,
  sol: '1.09 ÷ 1.05 − 1 = 3.81%.', calc: () => CALC.real(0.09, 0.05) });
Q({ cp: 'returns-math', type: 'mcq', diff: 'easy', q: 'An SIP with monthly investments on varying dates and one redemption. Best return measure?', opts: ['Absolute return', 'CAGR', 'XIRR', 'Simple interest'], ans: 2,
  why: ['No time.', 'Single flows only.', 'Correct.', 'No compounding.'], sol: 'Irregular dated flows → XIRR.' });
Q({ cp: 'returns-math', type: 'short', diff: 'moderate', q: 'An FD pays 7%, inflation is 6% and you pay 30% tax. Are you richer in real terms? Show the working.',
  model: '<p>Post-tax return = 7% × 0.7 = 4.9%. Real ≈ 1.049 ÷ 1.06 − 1 ≈ −1.0%. Purchasing power falls, so no.</p>' });

/* ---------------- 7.5 Economics ---------------- */
C({ id: 'economics', week: 7, title: 'Economic sense: inflation types and opportunity cost', pri: 'Medium', prereq: [],
  src: 'Study guide W7 (economic sense) · spg notes W7 · PYQs 2023 T1 Q26 Q55, 2024 T1 Q195 Q196, 2024 T2 Q105, 2025 T3 Q222 Q228',
  oneLine: 'Demand-pull = too much demand chasing too few goods (fiscal stimulus, higher purchasing power). Cost-push = rising input costs. Stagflation = inflation with stagnation. Opportunity cost = value of the next best alternative foregone (includes implicit costs).',
  misShort: 'Saying opportunity cost is all alternatives, or only out-of-pocket costs.',
  intu: R`<p>After a big government stimulus, everyone has more to spend but factories cannot produce faster: prices rise. Separately, you skip a ₹40,000 internship to take a course: the internship pay is the real cost of the course.</p><p>The question this concept answers: <b>why do prices rise, and what does a choice really cost?</b></p>`,
  why: R`<ul><li>Demand-pull asked three times (2023 T1 Q26, 2024 T1 Q195, 2025 T3 Q228); opportunity cost three times.</li></ul>`,
  formal: M.def(M.lines([
    '<b>Demand-pull inflation</b> — aggregate demand exceeds aggregate supply; caused by fiscal stimulus, higher purchasing power. Rising interest rates reduce it.',
    '<b>Cost-push inflation</b> — rising input costs (wages, oil).',
    '<b>Stagflation</b> — high inflation with stagnant growth and unemployment.',
    '<b>Opportunity cost</b> — the value of the <b>next best</b> alternative foregone; includes implicit costs, not only out-of-pocket ones. Sunk costs are ignored.',
    '<b>Cost leadership</b> (strategy) — low prices with satisfactory quality, enough customers to be profitable.']))
    + '<p><b>In words:</b> too much money chasing too few goods; every choice costs the best thing you gave up.</p>',
  vis: M.table(['Type', 'Cause', 'Example'], [
    ['Demand-pull', 'Demand > supply', 'Stimulus cheques, festival demand'],
    ['Cost-push', 'Input costs rise', 'Oil price spike'],
    ['Stagflation', 'Inflation + stagnation', '1970s oil shocks']], 'Inflation types.'),
  ex: [
    M.ex('Introductory', R`<p>Aggregate demand exceeds aggregate supply. Name the inflation.</p>`, R`<p><b>Demand-pull</b> (2024 T1 Q195).</p>`),
    M.ex('Standard', R`<p>Which cause demand-pull inflation: (1) fiscal stimulus; (2) higher purchasing power; (3) rising interest rates?</p>`, R`<p><b>1 and 2</b> (2023 T1 Q26).</p>`),
    M.ex('Exam-level', R`<p>(1) Opportunity cost = value of all feasible alternatives. (2) It measures only out-of-pocket costs. (3) You must identify the next best alternative. Which are true?</p>`, R`<p><b>3 only</b> (2024 T1 Q196).</p>`)],
  math: M.rule(R`<p><b>Opportunity cost = value of the best alternative not chosen.</b></p>`)
    + M.why([['Opportunity cost = all alternatives', 'only the next best.'],
      ['Opportunity cost = implicit − explicit', 'not a definition.'],
      ['Rising rates cause demand-pull', 'they cool demand.']]),
  conn: R`<p><b>Earlier:</b> inflation erodes real return (7.4).</p>`,
  mis: M.ul(['“Demand-push” — not a term.', 'Statement 1 in 2024 T1 Q196.']),
  exam: R`<p><b>How it is asked:</b> definition and causes. <b>Fast method:</b> demand vs cost; next best.</p>`
});
Q({ cp: 'economics', type: 'mcq', diff: 'easy', q: 'Crude oil prices double and transport costs push up prices across the economy. This is:', opts: ['Demand-pull', 'Cost-push', 'Deflation', 'Stagflation only'], ans: 1,
  why: ['Not demand.', 'Correct.', 'Prices rise.', 'Only if growth stalls.'], sol: 'Input costs → cost-push.' });
Q({ cp: 'economics', type: 'mcq', diff: 'moderate', q: 'You choose an MBA over a ₹12 lakh job offer and a ₹8 lakh offer. The opportunity cost includes:', opts: ['₹20 lakh of salaries', '₹12 lakh of foregone salary (the next best)', '₹8 lakh', 'Nothing, since you chose freely'], ans: 1,
  why: ['Only the next best counts.', 'Correct.', 'Not the best alternative.', 'Choices always cost.'], sol: 'Next best alternative.' });
Q({ cp: 'economics', type: 'mcq', diff: 'moderate', q: 'Which policy is most likely to <b>reduce</b> demand-pull inflation?', opts: ['Tax cuts', 'Raising interest rates', 'More government spending', 'Cash transfers'], ans: 1,
  why: ['Raises demand.', 'Correct.', 'Raises demand.', 'Raises demand.'], sol: 'Higher rates cool demand.' });
Q({ cp: 'economics', type: 'short', diff: 'easy', q: 'Define opportunity cost and give a personal example.',
  model: '<p>The value of the next best alternative given up. Example: spending a Saturday on a course costs the ₹3,000 you could have earned tutoring.</p>' });

/* ---------------- Variations ---------------- */
const G7 = id => 'gn3001-' + id;
VQ({ kind: 'statements', type: 'mcq', q: '(1) The cash flow statement measures profitability. (2) The balance sheet shows assets and liabilities at a date. (3) A credit sale creates accounts receivable. Which are correct?', opts: ['2 and 3', '1 and 2', '1 and 3', 'All three'], ans: 0,
  why: ['Correct.', '1 is false.', '1 is false.', '1 is false.'], sol: 'Profitability = income statement.', trap: 'Statement 1.' }, ['2023T1-21', '2023T1-22', '2023T1-23'].map(G7));
VQ({ kind: 'counting', type: 'num', q: 'How many raise owner’s equity? (1) Owner adds capital. (2) Company borrows to buy a building. (3) Company earns profit. (4) Company repays a loan. (5) Customer pays an old receivable.', ans: 2, tol: 0,
  sol: '1 and 3.', trap: 'Borrowing.' }, ['2023T1-24', '2026T2-20'].map(G7));
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>not</b> an intangible asset?', opts: ['Patent', 'Brand reputation', 'Delivery van', 'Goodwill'], ans: 2,
  why: ['Intangible.', 'Intangible.', 'Correct: physical.', 'Intangible.'], sol: 'A van is tangible.', trap: 'None.' }, ['2023T1-56', '2023T3-211'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: 'Using the 2023 T3 balance sheet: the person sells gold (₹50,000) and clears the personal loan (₹50,000). New net worth?', opts: ['₹7,40,000', '₹7,90,000', '₹8,40,000', '₹11,50,000'], ans: 1,
  why: ['Subtracted twice.', 'Correct.', 'Added the repayment.', 'Total assets after sale.'], sol: 'Both sides fall by 50,000.', trap: 'Thinking repayment changes NW.',
  calc: () => CALC.netWorth([50000, 100000, 200000, 150000, 0, 500000, 100000, 50000], [10000, 0, 300000, 50000]) }, ['2023T3-201', '2023T3-202', '2023T3-203', '2023T3-204', '2023T3-205'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: 'Varun (2024 T3) uses ₹1,00,000 of FDs to pay off his personal loan, then spends ₹60,000 of bank balance on a holiday. New net worth?', opts: ['₹9,50,000', '₹8,90,000', '₹7,90,000', '₹10,10,000'], ans: 1,
  why: ['Ignores the holiday.', 'Correct: repayment no change; holiday −60,000.', 'Subtracted the repayment too.', 'Added.'], sol: 'Only consumption lowers NW.', trap: 'Subtracting the repayment.',
  calc: () => CALC.netWorth([100000, 100000, 10000, 40000, 50000, 100000, 2500000, 50000], [2000000, 50000, 10000, 0]) }, ['2024T3-207', '2024T3-208', '2024T3-209', '2024T3-210'].map(G7));
VQ({ kind: 'scenario', type: 'mcq', q: 'Kiran has ₹2 crore net worth, ₹1.9 crore in land, ₹3 lakh in the bank and ₹1 lakh monthly expenses. What should he prioritise?', opts: ['Borrow to buy more land', 'Build an emergency fund of about 6 months’ expenses in liquid assets', 'Move bank money into crypto', 'Nothing; his net worth is high'], ans: 1,
  why: ['Worsens liquidity.', 'Correct.', 'More risk, still illiquid in practice.', 'Ignores liquidity.'], sol: 'Liquidity deficit → emergency fund.', trap: 'Option 4.' }, ['2026T1-18', '2026T1-17', '2026T1-11'].map(G7));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. Net pay; B. Rent; C. Premium; D. Credit card interest. I. Fixed expense; II. Gross pay − deductions; III. Payment to keep insurance cover; IV. Lender’s compensation.', opts: ['A-II, B-I, C-III, D-IV', 'A-I, B-II, C-III, D-IV', 'A-II, B-III, C-I, D-IV', 'A-IV, B-I, C-III, D-II'], ans: 0,
  why: ['Correct.', 'A and B swapped.', 'B and C swapped.', 'A and D swapped.'], sol: 'Definitions.', trap: 'None.' }, ['2023T1-28', '2023T1-29', '2023T2-92', '2024T1-198'].map(G7));
VQ({ kind: 'negated', type: 'mcq', q: 'Which statement about loans is <b>false</b>?', opts: ['A riskier borrower is charged more', 'Variable-rate payments may change', 'Fixed-rate loans give predictable EMIs', 'Lenders charge less to riskier borrowers to win business'], ans: 3,
  why: ['True.', 'True.', 'True.', 'False — the answer.'], sol: 'Risk raises rates.', trap: 'None.' }, ['2023T1-30', '2024T1-197'].map(G7));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Agricultural income is a head of income. (2) Reimbursement of actual travel expenses is income. (3) Capital gains is a head of income. (4) Term insurance is mainly for protection. Which are correct?', opts: ['3 and 4', '1 and 3', '2 and 4', '1, 3 and 4'], ans: 0,
  why: ['Correct.', '1 is false.', '2 is false.', '1 is false.'], sol: 'Five heads; agriculture exempt; reimbursement not income.', trap: 'Statement 1.' }, ['2026T1-10', '2024T1-199', '2025T3-225'].map(G7));
VQ({ kind: 'sequence', type: 'mcq', q: 'Arrange by increasing risk: (1) Equity mutual fund. (2) Savings account. (3) Cryptocurrency. (4) Government bond.', opts: ['2, 4, 1, 3', '4, 2, 1, 3', '2, 1, 4, 3', '2, 4, 3, 1'], ans: 0,
  why: ['Correct.', 'Savings is lower than bonds.', 'Equity above bonds.', 'Crypto is highest.'], sol: 'Cash < debt < equity < crypto.', trap: 'Savings vs bonds.' }, ['2025T2-237', '2023T2-95', '2025T3-226', '2023T3-212'].map(G7));
VQ({ kind: 'statements', type: 'mcq', q: '(1) Savings accounts suit emergency funds. (2) Savings accounts give excellent long-term growth. (3) RDs require a fixed monthly deposit. (4) Loans against FDs are not available. Which are correct?', opts: ['1 and 3', '1, 2 and 3', '3 and 4', '1 and 4'], ans: 0,
  why: ['Correct.', '2 is false.', '4 is false.', '4 is false.'], sol: 'Savings = safety, not growth; FD loans exist.', trap: 'Statement 2.' }, ['2023T2-94', '2025T3-227', '2023T2-93', '2024T2-104', '2024T2-103'].map(G7));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Which statement about portfolio diversification is best supported by finance theory?', opts: ['It reduces risk but does not guarantee the highest return', 'It maximises returns', 'It eliminates all risk', 'It increases risk'], ans: 0,
  why: ['Correct.', 'A concentrated bet on the winner returns more.', 'Market risk remains.', 'No.'], sol: 'Reduces unsystematic risk.', trap: 'See Sources: the 2024 T2 key accepted “maximizes returns”.' }, ['2024T2-106', '2023T1-27'].map(G7));
VQ({ kind: 'msq', type: 'msq', q: 'Which can a mutual fund scheme hold (scheme-dependent)?', opts: ['Equity shares', 'Gold ETFs', 'Treasury bills', 'Corporate debentures'], ans: [0, 1, 2, 3],
  why: ['Yes.', 'Yes.', 'Yes.', 'Yes.'], sol: 'All four.', trap: 'Gold ETFs.' }, ['2025T2-238', '2025T3-224', '2023T3-213'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: 'Neha keeps ₹80,000 in an FD at 7% and is in the 20% tax bracket. Interest after tax after one year?', opts: ['₹5,600', '₹4,480', '₹1,120', '₹4,000'], ans: 1,
  why: ['Pre-tax.', 'Correct: 5,600 × 0.8.', 'The tax.', 'Wrong.'], sol: '80,000 × 7% × 0.8 = 4,480.', trap: 'Picking pre-tax interest.', calc: () => 80000 * 0.07 * 0.8 }, ['2023T1-25'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: '₹40,000 grows to ₹70,000 in 4 years. CAGR?', opts: ['18.75%', '15.02%', '14.20%', '12.50%'], ans: 1,
  why: ['Simple average.', 'Correct: 1.75^(1/4) − 1.', 'Wrong.', 'Wrong.'], sol: '1.75^0.25 − 1 = 15.02%.', trap: '18.75% is simple.', calc: () => CALC.cagr(40000, 70000, 4) }, ['2026T1-15', '2025T2-235'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: 'Education inflation is 10% a year. A ₹4,00,000 course will cost about how much in 6 years?', opts: ['₹6,40,000', '₹7,08,624', '₹6,00,000', '₹7,50,000'], ans: 1,
  why: ['Simple interest.', 'Correct: 4,00,000 × 1.1⁶.', 'Wrong.', 'Wrong.'], sol: '1.1⁶ = 1.7716.', trap: 'Simple interest.', calc: () => CALC.fv(400000, 0.10, 6) }, ['2026T1-13', '2023T2-91'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: 'Rule of 72: at 6% a year, roughly how many years to double?', opts: ['6', '10', '12', '14'], ans: 2,
  why: ['Wrong.', 'Wrong.', 'Correct.', 'Wrong.'], sol: '72 ÷ 6 = 12.', trap: 'None.', calc: () => 72 / 6 }, ['2026T1-14'].map(G7));
VQ({ kind: 'numeric', type: 'mcq', q: 'Nominal return 10%, inflation 6%. Exact real return?', opts: ['4.00%', '3.77%', '16.00%', '1.67%'], ans: 1,
  why: ['Approximation, not exact.', 'Correct: 1.10 ÷ 1.06 − 1.', 'Added.', 'Wrong.'], sol: '3.77%.', trap: '4% shortcut.', calc: () => CALC.real(0.10, 0.06) }, ['2026T1-16', '2026T2-19', '2025T3-223', '2026T1-8', '2024T3-200'].map(G7));
VQ({ kind: 'match', type: 'mcq', q: 'Match: A. Single lump sum, start and end; B. Annual project cash flows; C. SIP on irregular dates. I. IRR; II. CAGR; III. XIRR.', opts: ['A-II, B-I, C-III', 'A-I, B-II, C-III', 'A-III, B-I, C-II', 'A-II, B-III, C-I'], ans: 0,
  why: ['Correct.', 'A and B swapped.', 'Wrong.', 'B and C swapped.'], sol: 'CAGR, IRR, XIRR.', trap: 'None.' }, ['2025T2-236', '2026T1-12'].map(G7));
VQ({ kind: 'statements', type: 'mcq', q: 'Why is inflation a “silent killer”? (1) It raises asset prices. (2) The same money buys less over time. (3) It makes loans costlier. (4) The loss is invisible because the balance does not shrink.', opts: ['2 and 4', '1 and 2', '1 and 3', '3 and 4'], ans: 0,
  why: ['Correct.', '1 is not the reason.', 'Neither is the reason.', '3 is not the reason.'], sol: 'Silent = nominal unchanged, real falls.', trap: 'Statement 1 is true but irrelevant.' }, ['2026T1-9'].map(G7));
VQ({ kind: 'statements', type: 'mcq', q: 'Which increase demand-pull inflation? (1) Big tax cuts. (2) A rise in oil prices. (3) Rising household incomes. (4) Higher interest rates.', opts: ['1 and 3', '1, 2 and 3', '2 and 4', '3 only'], ans: 0,
  why: ['Correct.', '2 is cost-push.', 'Wrong.', '1 also.'], sol: 'Demand side only.', trap: 'Oil.' }, ['2023T1-26', '2024T1-195', '2025T3-228'].map(G7));
VQ({ kind: 'nearmiss', type: 'mcq', q: 'Ananya spent ₹30,000 on a non-refundable workshop deposit. She can attend the workshop or work a paid project for ₹25,000 or a smaller one for ₹10,000. The opportunity cost of attending is:', opts: ['₹30,000', '₹25,000', '₹35,000', '₹65,000'], ans: 1,
  why: ['Sunk cost.', 'Correct: next best alternative.', 'Both projects.', 'Everything.'], sol: 'Ignore the sunk cost; next best = ₹25,000.', trap: 'Counting the sunk deposit.' }, ['2024T1-196', '2024T2-105', '2025T3-222'].map(G7));
VQ({ kind: 'negated', type: 'mcq', q: 'Which is <b>not</b> a feature of cost leadership?', opts: ['Low prices', 'Satisfactory quality', 'Efficient operations', 'Premium pricing for exclusive products'], ans: 3,
  why: ['Feature.', 'Feature.', 'Feature.', 'Correct: that is differentiation.'], sol: 'Premium = differentiation.', trap: 'None.' }, ['2023T1-55'].map(G7));

/* ---------------- Glossary and flashcards ---------------- */
[['Income statement', 'Revenue − expenses = profit over a period.'],
 ['Balance sheet', 'Assets = liabilities + equity at a date.'],
 ['Cash flow statement', 'Cash in and out; explains change in cash.'],
 ['Accounts receivable', 'Money customers owe for credit sales.'],
 ['Owner’s equity', 'Assets − liabilities; residual claim of owners.'],
 ['Net worth', 'Total assets − total liabilities (personal).'],
 ['Liquidity', 'How quickly an asset becomes cash without loss.'],
 ['Recurring deposit', 'Fixed monthly sum, fixed tenure, fixed rate.'],
 ['Sovereign Gold Bond', 'Gold-linked government bond; interest; tax-free at maturity.'],
 ['CAGR', '(End ÷ start)^(1/n) − 1.'],
 ['IRR / XIRR', 'Rate making the PV of all flows zero; XIRR for irregular dates.'],
 ['Real return', '(1 + nominal) ÷ (1 + inflation) − 1.'],
 ['Rule of 72', 'Years to double ≈ 72 ÷ rate.'],
 ['Demand-pull inflation', 'Aggregate demand > aggregate supply.'],
 ['Cost-push inflation', 'Rising input costs push prices up.'],
 ['Opportunity cost', 'Value of the next best alternative foregone.']].forEach(([t, d]) => GLOSS(t, d, 7));
[['Profitability is measured by…', 'The income statement.'],
 ['Credit sale on the balance sheet', 'Accounts receivable.'],
 ['Borrow to buy an asset: net worth?', 'Unchanged.'],
 ['Swap stocks for mutual funds: net worth?', 'Unchanged.'],
 ['Home appliances', 'Depreciating personal asset.'],
 ['Rent and EMI', 'Fixed expenses.'],
 ['Higher return →', 'Higher risk.'],
 ['Tax-efficient gold', 'Sovereign Gold Bonds.'],
 ['₹1 lakh at 15% for 5 years', '≈ ₹2,01,135.'],
 ['Double in 8 years: rate?', '≈ 9%.'],
 ['12% nominal, 7% inflation: real?', '≈ 4.67%.'],
 ['Irregular cash flows: measure?', 'XIRR.'],
 ['Five heads of income', 'Salary, House Property, Business/Profession, Capital Gains, Other Sources.']].forEach(([f, b]) => CARD(f, b, 7));
