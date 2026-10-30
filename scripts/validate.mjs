import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const json = p => JSON.parse(readFileSync(resolve(root, p), 'utf8'));
const marketplace = json('.claude-plugin/marketplace.json');
const manifest = json('plugins/talking-head/.claude-plugin/plugin.json');
assert.equal(marketplace.plugins.length, 1);
const entry = marketplace.plugins[0];
assert.equal(entry.name, manifest.name);
assert.equal(entry.version, manifest.version);
assert.ok(existsSync(resolve(root, entry.source, '.claude-plugin/plugin.json')));
const skillRoot = 'plugins/talking-head/skills/edit';
const skill = readFileSync(resolve(root, skillRoot, 'SKILL.md'), 'utf8');
assert.match(skill, /^---\r?\nname: edit\r?\ndescription: .+\r?\n---/);
for (const file of ['references/style.md', 'assets/style/talking-head.css', 'assets/EDIT-BRIEF.md', 'assets/fonts/OFL.txt']) {
  assert.ok(readFileSync(resolve(root, skillRoot, file)).length > 0, `Missing or empty ${file}`);
}
const font = readFileSync(resolve(root, skillRoot, 'assets/fonts/Quicksand-Variable.ttf'));
assert.equal(font.readUInt32BE(0), 0x00010000, 'Expected a TrueType font, not an error page');
assert.ok(font.length > 10000);
assert.match(readFileSync(resolve(root, skillRoot, 'assets/fonts/OFL.txt'), 'utf8'), /SIL OPEN FONT LICENSE/);
console.log('Toolkit manifests, skill references, font and license validated.');
