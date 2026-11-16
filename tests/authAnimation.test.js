import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../css/redesign.css', import.meta.url), 'utf8');

test('registration anatomy illustration has gentle motion states', () => {
  assert.match(css, /@keyframes auth-anatomy-float/);
  assert.match(css, /@keyframes auth-anatomy-heartbeat/);
  assert.match(css, /@keyframes auth-anatomy-scan/);
  assert.match(css, /\.auth-anatomy-art svg > path:nth-of-type\(3\)/);
});

test('registration anatomy animation respects reduced-motion preference', () => {
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /\.auth-anatomy-art::after[\s\S]*?animation:\s*none\s*!important/);
});
