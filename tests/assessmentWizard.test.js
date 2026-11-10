import test from 'node:test';
import assert from 'node:assert/strict';
import { AssessmentWizard } from '../js/components/assessmentWizard.js';
import { symptomDatabase } from '../js/data/symptoms.js';

globalThis.document = { getElementById: () => null };

test('age options include adolescents without a gap between child and adult ranges', () => {
  const wizard = new AssessmentWizard('missing-container');
  const html = wizard.getStep1HTML();
  assert.ok(html.includes('Age Group (optional)'));
  assert.ok(html.includes('Child (2–12 yrs)'));
  assert.ok(html.includes('Teen (13–17 yrs)'));
  assert.ok(html.includes('Adult (18–64 yrs)'));
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

test('wizard keeps background details optional but requires explicit symptom, timing, severity, and warning-sign selections', () => {
  const wizard = new AssessmentWizard('missing-container');
  wizard.currentStep = 1;
  assert.equal(wizard.isCurrentStepValid(), true);
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

test('sensitive profile fields are not preselected as negative answers', () => {
  const wizard = new AssessmentWizard('missing-container');
  assert.equal(wizard.intake.profile.biologicalSex, null);
  assert.equal(wizard.intake.profile.pregnant, null);
  wizard.currentStep = 1;
  assert.equal(wizard.isCurrentStepValid(), true);
  const html = wizard.getStep1HTML();
  assert.match(html, /Pregnancy status \(optional\)/);
  assert.match(html, /Leave unselected if you prefer not to answer/);
});


test('wizard rejects values outside the configured options for every step', () => {
  const wizard = new AssessmentWizard('missing-container');

  wizard.currentStep = 1;
  wizard.intake.profile.ageGroup = 'unknown';
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.profile.ageGroup = 'adult';
  wizard.intake.profile.biologicalSex = 'unknown';
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.profile.biologicalSex = null;
  wizard.intake.profile.comorbidities = ['none', 'hypertension'];
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.profile.comorbidities = [];
  assert.equal(wizard.isCurrentStepValid(), true);

  wizard.currentStep = 2;
  wizard.intake.selectedSymptoms = ['not-a-real-symptom'];
  assert.equal(wizard.isCurrentStepValid(), false);
  const validSymptom = symptomDatabase.symptoms[0].id;
  wizard.intake.selectedSymptoms = [validSymptom, validSymptom];
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.selectedSymptoms = [validSymptom];
  assert.equal(wizard.isCurrentStepValid(), true);

  wizard.currentStep = 3;
  wizard.intake.timing = { onset: 'unknown', trajectory: 'steady' };
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.timing = { onset: 'days_recent', trajectory: 'unknown' };
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.timing = { onset: 'days_recent', trajectory: 'steady' };
  assert.equal(wizard.isCurrentStepValid(), true);

  wizard.currentStep = 4;
  wizard.intake.severity = { painScore: 3, disruption: 'unknown' };
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.severity = { painScore: 11, disruption: 'mild' };
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.severity = { painScore: 3, disruption: 'mild' };
  assert.equal(wizard.isCurrentStepValid(), true);

  wizard.currentStep = 5;
  const validRedFlag = symptomDatabase.symptoms.find(symptom => symptom.isRedFlag).id;
  wizard.intake.redFlags = ['not-a-red-flag'];
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.redFlags = ['none', validRedFlag];
  assert.equal(wizard.isCurrentStepValid(), false);
  wizard.intake.redFlags = [validRedFlag];
  assert.equal(wizard.isCurrentStepValid(), true);
  wizard.intake.redFlags = ['none'];
  assert.equal(wizard.isCurrentStepValid(), true);
});

test('symptom, onset, and warning-sign cards use keyboard-operable toggle buttons', () => {
  const wizard = new AssessmentWizard('missing-container');

  const symptoms = wizard.getStep2HTML();
  assert.match(symptoms, /<button type="button" class="symptom-check-card[^"]*" data-symptom-id="[^"]+" aria-pressed="false">/);
  assert.doesNotMatch(symptoms, /<div class="symptom-check-card/);

  const timing = wizard.getStep3HTML();
  assert.match(timing, /<button type="button" class="timing-choice-card[^"]*" data-timing-prop="onset" data-val="[^"]+" aria-pressed="false">/);

  const warningSigns = wizard.getStep5HTML();
  assert.match(warningSigns, /<button type="button" class="rf-checkbox-item[^"]*" data-rf-id="[^"]+" aria-pressed="false">/);
  assert.match(warningSigns, /<button type="button" class="rf-checkbox-item none-option[^"]*" data-rf-id="none" aria-pressed="false">/);
});
