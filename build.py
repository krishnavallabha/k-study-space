"""Build the platform into one self-contained public/index.html.

Order: src/core/*.js -> every course folder in src/courses/ (course.js, w1.js..wN.js,
pyq.js, extra.js) -> src/app/*.js. Course folders are discovered automatically, so adding
a course means adding a folder; adding a week means adding wN.js.
"""
import io, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')


def rd(path):
    return io.open(path, encoding='utf-8').read()


def js_files():
    files = sorted(os.path.join(SRC, 'core', f) for f in os.listdir(os.path.join(SRC, 'core')) if f.endswith('.js'))
    cdir = os.path.join(SRC, 'courses')
    for code in sorted(os.listdir(cdir)):
        d = os.path.join(cdir, code)
        if not os.path.isfile(os.path.join(d, 'course.js')):
            continue
        weeks = sorted((f for f in os.listdir(d) if re.fullmatch(r'w\d+\.js', f)), key=lambda f: int(f[1:-3]))
        for f in ['course.js'] + weeks + ['pyq.js', 'extra.js']:
            if os.path.isfile(os.path.join(d, f)):
                files.append(os.path.join(d, f))
    files += sorted(os.path.join(SRC, 'app', f) for f in os.listdir(os.path.join(SRC, 'app')) if f.endswith('.js'))
    return files


def main():
    files = js_files()
    parts = []
    for f in files:
        txt = rd(f)
        if '</script' in txt.lower():
            sys.exit('ERROR: %s contains "</script" which would break the page' % f)
        parts.append('/* ---- %s ---- */\n%s' % (os.path.relpath(f, SRC).replace('\\', '/'), txt))
    tpl = rd(os.path.join(SRC, 'index.tpl.html'))
    html = tpl.replace('/*__CSS__*/', rd(os.path.join(SRC, 'styles.css'))).replace('/*__JS__*/', '\n'.join(parts))
    os.makedirs(os.path.join(ROOT, 'public'), exist_ok=True)
    out = os.path.join(ROOT, 'public', 'index.html')
    io.open(out, 'w', encoding='utf-8', newline='\n').write(html)
    print('built %d source files -> %s (%d bytes)' % (len(files), os.path.relpath(out, ROOT), len(html.encode('utf-8'))))


if __name__ == '__main__':
    main()
