import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');

test('README documents every age group offered by the check-in wizard', () => {
  const readme = read('../README.md').toLowerCase();
  const wizard = read('../js/components/assessmentWizard.js');
  for (const [id, documented] of [['infant', 'infant'], ['child', 'child'], ['adolescent', 'teen'], ['adult', 'adult'], ['senior', 'senior']]) {
    assert.ok(wizard.includes("id: '" + id + "'"), 'wizard should offer ' + id);
    assert.ok(readme.includes(documented), 'README should document ' + documented);
  }
});

test('home urgency preview does not imply a fixed care timeframe', () => {
  const html = read('../index.html');
  assert.ok(!html.includes('Same-Day / 24h Care'));
  assert.ok(html.includes('no care-timing advice'));
});

test('mobile navigation exposes and updates its expanded state', () => {
  const html = read('../index.html');
  const app = read('../js/app.js');
  assert.ok(html.includes('aria-controls="mobileNavMenu"'));
  assert.ok(html.includes('aria-expanded="false"'));
  assert.ok(html.includes('id="mobileNavMenu" aria-hidden="true"'));
  assert.ok(app.includes("setAttribute('aria-expanded', String(isOpen))"));
  assert.ok(app.includes("setAttribute('aria-hidden', String(!isOpen))"));
  assert.ok(app.includes("setAttribute('aria-expanded', 'false')"));
});
