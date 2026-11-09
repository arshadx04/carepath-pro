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
  assert.match(html, /does not constitute|does not replace/i);
});

test('missing report answers remain explicitly unrecorded rather than becoming zero or recent', () => {
  const html = ReportGenerator.generateReportHTML({}, {});
  assert.match(html, /Age Group:<\/strong> Not recorded/);
  assert.match(html, /Reported onset:<\/strong> Not recorded/);
  assert.match(html, /Reported change:<\/strong> Not recorded/);
  assert.match(html, /Discomfort self-rating:<\/strong> <strong>Not recorded/);
  assert.match(html, /Daily activity impact:<\/strong> Not recorded/);
  assert.match(html, /does not rule out an emergency/i);
});

test('malformed optional report collections do not crash generation', () => {
  const html = ReportGenerator.generateReportHTML({
    profile: { comorbidities: 'unknown' },
    selectedSymptoms: 'not-an-array'
  }, {
    topMatches: 'not-an-array',
    doctorQuestions: null,
    activeRedFlags: {}
  });
  assert.match(html, /Visit Preparation Summary/);
});
