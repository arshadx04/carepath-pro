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


test('assessment toggle controls have visible keyboard focus and hotline advice links are tap-to-call', () => {
  const css = read('../css/styles.css');
  const app = read('../js/app.js');

  assert.match(css, /\.symptom-check-card:focus-visible/);
  assert.match(css, /\.timing-choice-card:focus-visible/);
  assert.match(css, /\.rf-checkbox-item:focus-visible/);
  assert.ok(app.includes('href="tel:${getDialNumber(c.nonEmergencyDial)}"'));
});


test('disease library contains at least 150 uniquely identified conditions with required educational fields', async () => {
  const { diseaseDatabase } = await import('../js/data/diseases.js');
  assert.ok(diseaseDatabase.length >= 150, 'expected at least 150 conditions');
  assert.equal(new Set(diseaseDatabase.map(item => item.id)).size, diseaseDatabase.length, 'condition IDs must be unique');
  for (const condition of diseaseDatabase) {
    assert.ok(condition.name && condition.category && condition.organSystem, 'condition should have identity and taxonomy');
    assert.ok(Array.isArray(condition.hallmarkSymptoms) && condition.hallmarkSymptoms.length >= 3, condition.id + ' should have hallmark symptoms');
    assert.ok(Array.isArray(condition.redFlags) && condition.redFlags.length > 0, condition.id + ' should include safety warnings');
    assert.ok(condition.source && condition.source.url, condition.id + ' should include a reference link');
  }
});

test('PR #36 curated additions have condition-specific references and no generic placeholder guidance', async () => {
  const { diseaseDatabase } = await import('../js/data/diseases.js');
  const curated = diseaseDatabase.filter(item => item.curationBatch === 'pr36-condition-specific-v1');
  assert.equal(curated.length, 3, 'expected the three reviewed additions');
  assert.equal(new Set(curated.map(item => item.id)).size, curated.length, 'curated IDs must be unique');
  const urls = new Set();
  for (const condition of curated) {
    assert.ok(condition.name && condition.category && condition.organSystem);
    assert.ok(Array.isArray(condition.hallmarkSymptoms) && condition.hallmarkSymptoms.length >= 3);
    assert.ok(Array.isArray(condition.redFlags) && condition.redFlags.length >= 2);
    assert.ok(condition.source?.url && condition.source.url !== 'https://medlineplus.gov/healthtopics.html');
    assert.ok(condition.source.title && condition.source.title !== 'Condition information and health topics');
    assert.ok(condition.clinicalReviewRequired === true);
    assert.equal(condition.contentReviewStatus, 'educational-draft');
    urls.add(condition.source.url);
    const content = JSON.stringify(condition).toLowerCase();
    for (const placeholder of [
      'personal or family medical history relevant to this condition',
      'targeted laboratory testing or imaging selected by a qualified clinician',
      'do not self-diagnose or start prescription treatment based on this entry'
    ]) {
      assert.ok(!content.includes(placeholder), condition.id + ' contains generic placeholder text');
    }
  }
  assert.equal(urls.size, curated.length, 'each curated condition should have its own reference URL');
});
