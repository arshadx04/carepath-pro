/**
 * CarePath Pro - Educational Symptom Association & Urgency Rules
 * Heuristic demonstration logic; not clinically validated
 */

import { diseaseDatabase } from '../data/diseases.js';
import { symptomDatabase } from '../data/symptoms.js';

export class TriageEngine {
  constructor() {
    this.diseases = diseaseDatabase;
    this.symptoms = symptomDatabase.symptoms;
  }

  /**
   * Evaluates supplied answers and produces an illustrative educational summary
   * @param {Object} intake User-provided check-in answers
   * @returns {Object} Educational demonstration result
   */
  evaluate(intake) {
    const safeIntake = intake && typeof intake === 'object' ? intake : {};
    const profile = safeIntake.profile && typeof safeIntake.profile === 'object' ? safeIntake.profile : {};
    const timing = safeIntake.timing && typeof safeIntake.timing === 'object' ? safeIntake.timing : {};
    const severity = safeIntake.severity && typeof safeIntake.severity === 'object' ? safeIntake.severity : {};
    const selectedSymptoms = Array.isArray(safeIntake.selectedSymptoms) ? safeIntake.selectedSymptoms : [];
    const redFlags = Array.isArray(safeIntake.redFlags) ? safeIntake.redFlags : [];
    const comorbidities = Array.isArray(profile.comorbidities) ? profile.comorbidities : [];
    const rawPainScore = severity.painScore === '' || severity.painScore == null ? 0 : Number(severity.painScore);
    const hasInvalidPainScore = !Number.isFinite(rawPainScore) || rawPainScore < 0 || rawPainScore > 10;
    const painScore = Number.isFinite(rawPainScore) ? Math.min(10, Math.max(0, rawPainScore)) : 0;

    // 1. Identify active red flags
    const activeRedFlags = [];
    
    // Check direct red flag answers
    redFlags.forEach(rfId => {
      if (rfId && rfId !== 'none') {
        const found = this.symptoms.find(s => s.id === rfId);
        if (found && found.isRedFlag) {
          activeRedFlags.push(found);
        }
      }
    });

    // Also check if any selected symptoms are categorized as red flags
    selectedSymptoms.forEach(sId => {
      const found = this.symptoms.find(s => s.id === sId);
      if (found && found.isRedFlag && !activeRedFlags.some(rf => rf.id === found.id)) {
        activeRedFlags.push(found);
      }
    });

    // 2. Determine Overall Triage Level
    let triageLevel = 'routine';
    let triageTitle = 'No higher-priority demo flag';
    let triageDescription = 'The demo\'s simple rules did not trigger a higher-priority flag. This is not reassurance that symptoms are harmless or safe to monitor; seek professional advice if concerned.';
    let triageColor = 'emerald';
    let timeWindow = 'This demo cannot determine a safe timeframe';

    const isSudden = timing.onset === 'sudden_minutes' || timing.onset === 'hours_today';
    const isWorsening = timing.trajectory === 'worsening';
    const isSevereImpact = severity.disruption === 'severe';

    if (activeRedFlags.length > 0 || painScore >= 9 || (isSudden && isSevereImpact && painScore >= 7)) {
      triageLevel = 'emergency';
      triageTitle = 'A high-priority demo rule was triggered';
      triageDescription = 'A selected warning-sign item or high-score rule triggered this demonstration output. This is not a validated urgency assessment. If you may be in immediate danger, contact local emergency services.';
      triageColor = 'rose';
      timeWindow = 'If immediate danger is possible, contact local emergency services';
    } else if (hasInvalidPainScore || painScore >= 6 || isWorsening || severity.disruption === 'severe' || 
               profile.ageGroup === 'infant' || profile.ageGroup === 'senior' || 
               profile.pregnant || comorbidities.length > 1) {
      triageLevel = 'urgent';
      triageTitle = 'A prompt-review demo rule was triggered';
      triageDescription = 'The demo\'s illustrative rules flagged answers for prompt attention. This output is not a validated urgency assessment; contact a qualified healthcare professional for advice.';
      triageColor = 'amber';
      timeWindow = 'This demo cannot set a medical timeframe; contact a qualified professional';
    } else if (painScore <= 3 && timing.trajectory === 'improving' && !isSevereImpact) {
      triageLevel = 'selfCare';
      triageTitle = 'A lower-priority demo pattern was identified';
      triageDescription = 'The demo\'s illustrative rules did not identify a higher-priority pattern. This does not establish that self-care is appropriate or that delaying care is safe.';
      triageColor = 'teal';
      timeWindow = 'This demo cannot determine whether waiting is safe';
    }

    // 3. Compute Differential Diagnosis Match Scores
    const conditionScores = [];

    this.diseases.forEach(disease => {
      let score = 0;
      let maxScore = 0;
      const matchedSymptomsList = [];
      const missedSymptomsList = [];

      // A. Check related symptoms
      this.symptoms.forEach(sym => {
        const isRelated = sym.related && sym.related.includes(disease.id);
        if (isRelated) {
          const weight = sym.weight || 2;
          maxScore += weight;
          if (selectedSymptoms.includes(sym.id) || redFlags.includes(sym.id)) {
            score += weight;
            matchedSymptomsList.push(sym.label);
          } else {
            missedSymptomsList.push(sym.label);
          }
        }
      });

      // B. Check text matching against hallmark symptoms
      disease.hallmarkSymptoms.forEach(hallmark => {
        const hallmarkLower = hallmark.toLowerCase();
        selectedSymptoms.forEach(sId => {
          const symObj = this.symptoms.find(s => s.id === sId);
          if (symObj) {
            const labelLower = symObj.label.toLowerCase();
            const keywords = labelLower.split(' ').filter(w => w.length > 4);
            const matches = keywords.some(kw => hallmarkLower.includes(kw));
            if (matches && !matchedSymptomsList.includes(symObj.label)) {
              score += 1.5;
              maxScore += 1.5;
              matchedSymptomsList.push(symObj.label);
            }
          }
        });
      });

      // C. Profile & Comorbidity Modifiers
      // These modifiers are ranking hints, not calibrated clinical probabilities.
      if (comorbidities.length > 0) {
        if (disease.id === 'coronary-artery-disease' && (comorbidities.includes('hypertension') || comorbidities.includes('diabetes') || comorbidities.includes('smoking'))) {
          score += 2;
          maxScore += 2;
        }
        if (disease.id === 'type-2-diabetes' && (comorbidities.includes('obesity') || comorbidities.includes('hypertension'))) {
          score += 2;
          maxScore += 2;
        }
        if (disease.id === 'asthma' && comorbidities.includes('allergies')) {
          score += 2;
          maxScore += 2;
        }
        if (disease.id === 'copd' && comorbidities.includes('smoking')) {
          score += 3;
          maxScore += 3;
        }
      }

      // Age modifiers
      if (profile.ageGroup === 'senior' && ['osteoarthritis', 'coronary-artery-disease', 'heart-failure', 'stroke-tia', 'copd', 'shingles-herpes-zoster'].includes(disease.id)) {
        score += 1.5;
        maxScore += 1.5;
      }
      if (profile.ageGroup === 'child' && ['otitis-media', 'strep-throat', 'asthma'].includes(disease.id)) {
        score += 2;
        maxScore += 2;
      }

      // Calculate a transparent heuristic score only. It is not a probability,
      // diagnostic confidence, or clinically validated percentage.
      if (score > 0 && matchedSymptomsList.length > 0) {
        conditionScores.push({
          disease,
          matchPercentage: 0,
          matchedSymptoms: matchedSymptomsList,
          missedSymptoms: missedSymptomsList.slice(0, 3),
          relevance: score
        });
      }
    });

    // Sort by the heuristic signal score. Never invent matches when there is
    // no symptom evidence; an empty list is more honest and safer.
    conditionScores.sort((a, b) => b.relevance - a.relevance);
    const topMatches = conditionScores.slice(0, 4);

    // 4. Generate Personalized Questions to Bring to the Doctor
    const doctorQuestions = [];
    
    // Add questions from top matched conditions
    topMatches.forEach(match => {
      if (match.disease && match.disease.askDoctor) {
        match.disease.askDoctor.slice(0, 2).forEach(q => {
          if (!doctorQuestions.includes(q)) {
            doctorQuestions.push(q);
          }
        });
      }
    });

    // Add contextual timing / medication questions
    if (isSudden) {
      doctorQuestions.push("Given the acute sudden onset of these symptoms, are urgent diagnostic imaging or labs indicated today?");
    }
    if (comorbidities.length > 0) {
      doctorQuestions.push(`Could my existing background health history (${comorbidities.join(', ')}) be interacting with these new symptoms?`);
    }
    doctorQuestions.push("What specific warning signs would signify that I should seek emergency care before our next follow-up?");

    return {
      triageLevel,
      triageTitle,
      triageDescription,
      triageColor,
      timeWindow,
      activeRedFlags,
      topMatches,
      doctorQuestions: doctorQuestions.slice(0, 6),
      intakeSummary: {
        profile,
        timing,
        severity,
        totalSymptomsReported: selectedSymptoms.length,
        evaluatedAt: new Date().toISOString()
      }
    };
  }
}

export const triageEngine = new TriageEngine();
export default triageEngine;
