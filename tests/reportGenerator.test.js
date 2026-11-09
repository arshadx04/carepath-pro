import test from 'node:test';
import assert from 'node:assert/strict';
import { ReportGenerator } from '../js/engine/reportGenerator.js';

test('print report escapes untrusted text and avoids hard-coded emergency numbers', () => {
  const html = ReportGenerator.generateReportHTML({
    profile: { ageGroup: 'adult', biologicalSex: 'not specified', pregnant: false, comorbidities: [] },
    timing: { onset: 'days_recent', trajectory: 'steady' },
    severity: { painScore: 2, disruption: 'mild' },
    selectedSymptoms: ['headache']
  }, {
    triageLevel: 'routine',
    triageTitle: 'Routine',
    topMatches: [{ disease: { name: '<script>alert(1)</script>', icd10: 'X00' }, relevance: 1 }],
    doctorQuestions: ['<img src=x onerror=alert(1)>'],
    activeRedFlags: []
  });

  assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
  assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /&lt;img src=x/);
  assert.doesNotMatch(html, /911|112/);
  assert.match(html, /not clinically validated|does not constitute/i);
});
