// Copies the static build into a folder whose links are all relative,
// so the site can be opened from any sub-path (used for the hosted preview).
import fs from 'node:fs';
import path from 'node:path';

const [src = 'dist', out = 'preview'] = process.argv.slice(2);
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(src, out, { recursive: true });

const walk = (d) => fs.readdirSync(d).flatMap((f) => {
  const p = path.join(d, f);
  return fs.statSync(p).isDirectory() ? walk(p) : [p];
});

for (const file of walk(out).filter((f) => f.endsWith('.html'))) {
  const rel = path.relative(out, path.dirname(file));
  const up = rel ? rel.split(path.sep).map(() => '..').join('/') + '/' : './';
  const html = fs.readFileSync(file, 'utf8').replace(
    /(href|src|data-src|poster|action)="\/(?!\/)([^"]*)"/g,
    (_, attr, p) => {
      const [clean, hash = ''] = p.split('#');
      let target = clean;
      if (target === '' || target.endsWith('/')) target += 'index.html';
      else if (!path.extname(target)) target += '/index.html';
      return `${attr}="${up}${target}${hash ? '#' + hash : ''}"`;
    },
  );
  fs.writeFileSync(file, html);
}
console.log(`relative copy written to ${out}/`);
