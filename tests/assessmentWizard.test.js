import test from 'node:test';
import assert from 'node:assert/strict';
import { AssessmentWizard } from '../js/components/assessmentWizard.js';

globalThis.document = { getElementById: () => null };

test('age options include adolescents without a gap between child and adult ranges', () => {
  const wizard = new AssessmentWizard('missing-container');
  const html = wizard.getStep1HTML();
  assert.match(html, /Child \\(2–12 yrs\\)/);
  assert.match(html, /Teen \\(13–17 yrs\\)/);
  assert.match(html, /Adult \\(18–64 yrs\\)/);
});

test('unanswered pain slider is visibly not recorded and cannot pass step validation', () => {
  const wizard = new AssessmentWizard('missing-container');
  wizard.currentStep = 4;
  const html = wizard.getStep4HTML();
  assert.match(html, /Not recorded/);
  assert.match(html, /Move the slider to record a score/);
  assert.match(html, /Record 0 — no pain/);
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.severity.painScore = 0;
  wizard.intake.severity.disruption = 'mild';
  assert.equal(wizard.isCurrentStepValid(), true);
});

test('wizard requires explicit timing, symptom, age, and warning-sign selections', () => {
  const wizard = new AssessmentWizard('missing-container');
  wizard.currentStep = 1;
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.profile.ageGroup = 'adolescent';
  assert.equal(wizard.isCurrentStepValid(), true);
  wizard.currentStep = 2;
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.selectedSymptoms = ['headache_band'];
  assert.equal(wizard.isCurrentStepValid(), true);
  wizard.currentStep = 3;
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.timing.onset = 'days_recent';
  wizard.intake.timing.trajectory = 'steady';
  assert.equal(wizard.isCurrentStepValid(), true);
  wizard.currentStep = 5;
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.redFlags = ['none'];
  assert.equal(wizard.isCurrentStepValid(), true);
});