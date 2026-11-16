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


test('login and anatomy pages include decorative healthcare sticker backgrounds', () => {
  assert.match(css, /\.auth-gate::before/);
  assert.match(css, /\.auth-anatomy-panel::before/);
  assert.match(css, /#bodyMapContainer \.body-explorer-wrapper::before/);
  assert.match(css, /@keyframes health-sticker-drift/);
  assert.match(css, /#bodyMapContainer \.body-explorer-wrapper::after/);
});

test('healthcare stickers respect reduced-motion preference', () => {
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)[\s\S]*?\.auth-gate::before[\s\S]*?animation:\s*none\s*!important/);
});


test('login anatomy panel previews the core medical-learning features', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /class="auth-medical-highlights"/);
  assert.match(html, /Body atlas/);
  assert.match(html, /Health library/);
  assert.match(html, /Visit preparation/);
  assert.match(html, /auth-medical-note/);
});
