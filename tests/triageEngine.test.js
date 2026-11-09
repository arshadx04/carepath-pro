import test from 'node:test';
import assert from 'node:assert/strict';
import { TriageEngine } from '../js/engine/triageEngine.js';

test('a selected red-flag symptom escalates to emergency', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: [] },
    selectedSymptoms: ['facial_droop'],
    timing: { onset: 'sudden_minutes', trajectory: 'worsening' },
    severity: { painScore: 2, disruption: 'moderate' },
    redFlags: ['none']
  });
  assert.equal(result.triageLevel, 'emergency');
  assert.ok(result.activeRedFlags.some(flag => flag.id === 'facial_droop'));
});

test('no symptom evidence does not fabricate condition matches', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: [] },
    selectedSymptoms: [],
    timing: { onset: 'days_recent', trajectory: 'steady' },
    severity: { painScore: 0, disruption: 'mild' },
    redFlags: ['none']
  });
  assert.deepEqual(result.topMatches, []);
});

test('a related selected symptom produces an explicitly heuristic match', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: [] },
    selectedSymptoms: ['headache_band'],
    timing: { onset: 'days_recent', trajectory: 'steady' },
    severity: { painScore: 3, disruption: 'mild' },
    redFlags: ['none']
  });
  assert.ok(result.topMatches.some(match => match.disease.id === 'tension-headache'));
  assert.ok(result.topMatches.every(match => Number.isFinite(match.relevance)));
});


test('invalid nonnumeric pain score requests prompt review', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: [] },
    selectedSymptoms: [],
    timing: { onset: 'days_recent', trajectory: 'steady' },
    severity: { painScore: 'not-a-number', disruption: 'mild' },
    redFlags: []
  });
  assert.equal(result.triageLevel, 'urgent');
});

test('malformed optional intake collections do not crash evaluation', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: 'unknown' },
    selectedSymptoms: null,
    timing: null,
    severity: null,
    redFlags: null
  });
  assert.equal(result.triageLevel, 'routine');
  assert.deepEqual(result.topMatches, []);
  assert.equal(result.intakeSummary.totalSymptomsReported, 0);
});


test('routine educational output does not reassure users that symptoms are harmless', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: [] },
    selectedSymptoms: [],
    timing: { onset: 'days_recent', trajectory: 'steady' },
    severity: { painScore: 2, disruption: 'mild' },
    redFlags: ['none']
  });
  assert.match(result.triageDescription, /not reassurance/i);
  assert.match(result.triageDescription, /not.*safe to monitor/i);
});

test('pain score above the supported range triggers emergency-level demo output', () => {
  const engine = new TriageEngine();
  const result = engine.evaluate({
    profile: { ageGroup: 'adult', comorbidities: [] },
    selectedSymptoms: [],
    timing: { onset: 'days_recent', trajectory: 'steady' },
    severity: { painScore: 11, disruption: 'mild' },
    redFlags: []
  });
  assert.equal(result.triageLevel, 'emergency');
});
