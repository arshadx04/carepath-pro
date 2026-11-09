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
   * Evaluates patient intake and produces a comprehensive triage report
   * @param {Object} intake Patient assessment answers
   * @returns {Object} Comprehensive clinical assessment result
   */
  evaluate(intake) {
    const {
      profile = {},
      selectedSymptoms = [],
      timing = {},
      severity = {},
      redFlags = []
    } = intake;

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
    let triageTitle = 'Routine Consultation Recommended';
    let triageDescription = 'Your symptoms appear manageable in an outpatient clinic setting. Schedule an appointment with your primary care clinician.';
    let triageColor = 'emerald';
    let timeWindow = 'Within 3–7 business days';

    const painScore = parseInt(severity.painScore || 0, 10);
    const isSudden = timing.onset === 'sudden_minutes' || timing.onset === 'hours_today';
    const isWorsening = timing.trajectory === 'worsening';
    const isSevereImpact = severity.disruption === 'severe';

    if (activeRedFlags.length > 0 || painScore >= 9 || (isSudden && isSevereImpact && painScore >= 7)) {
      triageLevel = 'emergency';
      triageTitle = 'Immediate Emergency Evaluation Required';
      triageDescription = 'One or more high-risk clinical red flags were detected. Do not wait for a routine appointment; contact the emergency number officially used in your location or proceed to the nearest emergency department.';
      triageColor = 'rose';
      timeWindow = 'Immediately / Right now';
    } else if (painScore >= 6 || isWorsening || severity.disruption === 'severe' || 
               profile.ageGroup === 'infant' || profile.ageGroup === 'senior' || 
               profile.pregnant || (profile.comorbidities && profile.comorbidities.length > 1)) {
      triageLevel = 'urgent';
      triageTitle = 'Prompt Medical Assessment Needed';
      triageDescription = 'Your symptoms require timely clinical evaluation. We recommend visiting an urgent care center or same-day clinic today.';
      triageColor = 'amber';
      timeWindow = 'Within 12–24 hours';
    } else if (painScore <= 3 && timing.trajectory === 'improving' && !isSevereImpact) {
      triageLevel = 'selfCare';
      triageTitle = 'Self-Monitoring & Supportive Home Care';
      triageDescription = 'Your symptoms currently appear mild and stable. You may initiate supportive self-care while monitoring for any worsening changes.';
      triageColor = 'teal';
      timeWindow = 'Monitor closely for 48–72 hours';
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
      if (profile.comorbidities) {
        if (disease.id === 'coronary-artery-disease' && (profile.comorbidities.includes('hypertension') || profile.comorbidities.includes('diabetes') || profile.comorbidities.includes('smoking'))) {
          score += 2;
          maxScore += 2;
        }
        if (disease.id === 'type-2-diabetes' && (profile.comorbidities.includes('obesity') || profile.comorbidities.includes('hypertension'))) {
          score += 2;
          maxScore += 2;
        }
        if (disease.id === 'asthma' && profile.comorbidities.includes('allergies')) {
          score += 2;
          maxScore += 2;
        }
        if (disease.id === 'copd' && profile.comorbidities.includes('smoking')) {
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
    if (profile.comorbidities && profile.comorbidities.length > 0) {
      doctorQuestions.push(`Could my existing background health history (${profile.comorbidities.join(', ')}) be interacting with these new symptoms?`);
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
