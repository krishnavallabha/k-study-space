// Validate every course: concept fields, checkpoints, answer keys, why-arrays,
// PYQ variations, duplicate ids and recomputed numeric keys.
// Usage: node scripts/check.js        (exit code 1 if any error)
// The same VALIDATE() runs in the browser on the "QA & limitations" page.
const fs = require('fs'), path = require('path'), vm = require('vm');
const SRC = path.join(__dirname, '..', 'src');
const files = [];
fs.readdirSync(path.join(SRC, 'core')).filter(f => f.endsWith('.js')).sort().forEach(f => files.push(path.join(SRC, 'core', f)));
fs.readdirSync(path.join(SRC, 'courses')).sort().forEach(code => {
  const d = path.join(SRC, 'courses', code);
  if (!fs.existsSync(path.join(d, 'course.js'))) return;
  const weeks = fs.readdirSync(d).filter(f => /^w\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
  ['course.js', ...weeks, 'pyq.js', 'extra.js'].forEach(f => { if (fs.existsSync(path.join(d, f))) files.push(path.join(d, f)); });
});
const ctx = { console }; vm.createContext(ctx);
vm.runInContext(files.map(f => fs.readFileSync(f, 'utf8')).join('\n') + '\n;FINALIZE();this.__R = COURSE_ORDER.map(c => [c, VALIDATE(c)]);', ctx);
let bad = 0;
ctx.__R.forEach(([code, r]) => {
  console.log(`\n== ${code}`, JSON.stringify(r.stats));
  r.errors.forEach(e => console.log('  ERROR', e));
  r.warnings.forEach(w => console.log('  warn ', w));
  console.log(`  ${r.errors.length} errors`);
  bad += r.errors.length;
});
process.exitCode = bad ? 1 : 0;
