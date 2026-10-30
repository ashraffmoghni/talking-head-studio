import { existsSync, mkdirSync, copyFileSync, constants } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const input = process.argv[2];
if (!input || process.argv.length !== 3) {
  console.error('Usage: node copy-style.mjs <existing-video-project-directory>');
  process.exit(1);
}
const target = resolve(input);
if (!existsSync(join(target, 'index.html'))) {
  console.error('Initialize a HyperFrames project first. No index.html found at the destination.');
  process.exit(1);
}
const assets = resolve(dirname(fileURLToPath(import.meta.url)), '../skills/edit/assets');
const files = [
  ['fonts/Quicksand-Variable.ttf', 'assets/fonts/Quicksand-Variable.ttf'],
  ['fonts/OFL.txt', 'assets/fonts/OFL.txt'],
  ['style/talking-head.css', 'assets/style/talking-head.css'],
  ['EDIT-BRIEF.md', 'EDIT-BRIEF.md']
];
for (const [src, dst] of files) {
  if (!existsSync(join(assets, src))) throw new Error(`Missing toolkit asset: ${src}`);
  if (existsSync(join(target, dst))) throw new Error(`Refusing to overwrite ${dst}. Review existing project assets first.`);
}
for (const [src, dst] of files) {
  mkdirSync(dirname(join(target, dst)), { recursive: true });
  copyFileSync(join(assets, src), join(target, dst), constants.COPYFILE_EXCL);
  console.log(`Copied ${dst}`);
}
console.log('Style assets ready. Load assets/style/talking-head.css in the composition and complete EDIT-BRIEF.md.');
