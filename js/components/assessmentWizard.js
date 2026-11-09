/**
 * CarePath Pro - Educational Symptom Check-in Wizard Component
 * Guides the user through a 5-step educational symptom check-in
 */

import { symptomDatabase } from '../data/symptoms.js';
import { triageEngine } from '../engine/triageEngine.js';
import { ReportGenerator } from '../engine/reportGenerator.js';

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

export class AssessmentWizard {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.onComplete = options.onComplete || (() => {});
    this.currentStep = 1;
    this.totalSteps = 5;

    this.intake = {
      profile: {
        ageGroup: null,
        biologicalSex: 'not_specified',
        pregnant: false,
        comorbidities: []
      },
      selectedSymptoms: [],
      timing: {
        onset: null,
        trajectory: null
      },
      severity: {
        painScore: null,
        disruption: null
      },
      redFlags: []
    };

    this.evaluationResult = null;
    this.symptomFilterQuery = '';
    this.activeSymptomRegion = 'all';
  }

  init(initialRegion = null) {
    if (initialRegion) {
      this.activeSymptomRegion = initialRegion;
    }
    this.currentStep = 1;
    this.render();
  }

  render() {
    if (!this.container) return;

    if (this.currentStep > this.totalSteps && this.evaluationResult) {
      this.renderResults();
      return;
    }

    this.container.innerHTML = `
      <div class="wizard-container">
        <!-- Progress Bar -->
        <div class="wizard-progress-header">
          <div class="progress-meta">
            <span class="step-counter">STEP 0${this.currentStep} OF 0${this.totalSteps}</span>
            <span class="step-title-crumb">${this.getStepTitle(this.currentStep)}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${(this.currentStep / this.totalSteps) * 100}%"></div>
          </div>
        </div>

        <!-- Wizard Card -->
        <div class="wizard-card-body">
          ${this.getStepContent(this.currentStep)}
        </div>

        <!-- Navigation Buttons -->
        <div class="wizard-nav-footer">
          ${this.currentStep > 1 
            ? `<button type="button" class="btn-wizard-back">← Previous Step</button>` 
            : `<button type="button" class="btn-wizard-cancel">Cancel & Exit</button>`
          }
          <button type="button" class="btn-wizard-next ${!this.isCurrentStepValid() ? 'disabled' : ''}">
            ${this.currentStep === this.totalSteps ? 'Generate Assessment Report →' : 'Continue Next →'}
          </button>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  getStepTitle(step) {
    switch(step) {
      case 1: return "Patient Profile & Background";
      case 2: return "Anatomical Symptoms Check";
      case 3: return "Onset & Duration Timeline";
      case 4: return "Severity & Pain Scale (VAS)";
      case 5: return "Critical Red-Flag Safety Screener";
      default: return "";
    }
  }

  getStepContent(step) {
    switch(step) {
      case 1: return this.getStep1HTML();
      case 2: return this.getStep2HTML();
      case 3: return this.getStep3HTML();
      case 4: return this.getStep4HTML();
      case 5: return this.getStep5HTML();
      default: return "";
    }
  }

  // --- STEP 1: PATIENT PROFILE ---
  getStep1HTML() {
    const p = this.intake.profile;
    return `
      <div class="step-pane">
        <h2 class="step-heading">Who is this clinical assessment for?</h2>
        <p class="step-subheading">Age, biological sex, and background conditions significantly shape symptom likelihood and clinical risk triage.</p>

        <div class="form-group-block">
          <label class="group-label">Age Group</label>
          <div class="toggle-pill-grid">
            ${[
              {id: 'infant', label: 'Infant (< 2 yrs)'},
              {id: 'child', label: 'Child (2–12 yrs)'},
              {id: 'adult', label: 'Adult (18–64 yrs)'},
              {id: 'senior', label: 'Senior (65+ yrs)'}
            ].map(opt => `
              <button type="button" class="toggle-pill ${p.ageGroup === opt.id ? 'active' : ''}" data-prop="ageGroup" data-val="${opt.id}">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="form-group-block">
          <label class="group-label">Biological Sex</label>
          <div class="toggle-pill-grid">
            ${[
              {id: 'female', label: 'Female'},
              {id: 'male', label: 'Male'},
              {id: 'not_specified', label: 'Prefer not to say'}
            ].map(opt => `
              <button type="button" class="toggle-pill ${p.biologicalSex === opt.id ? 'active' : ''}" data-prop="biologicalSex" data-val="${opt.id}">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        </div>

        ${p.biologicalSex === 'female' ? `
          <div class="form-group-block">
            <label class="group-label">Pregnancy Status</label>
            <div class="checkbox-row">
              <label class="custom-checkbox-label">
                <input type="checkbox" id="chkPregnancy" ${p.pregnant ? 'checked' : ''}>
                <span>Currently pregnant or postpartum (< 6 weeks)</span>
              </label>
            </div>
          </div>
        ` : ''}

        <div class="form-group-block">
          <label class="group-label">Pre-existing Health Conditions (Select all that apply)</label>
          <div class="multi-select-chip-grid">
            ${[
              {id: 'hypertension', label: 'High Blood Pressure'},
              {id: 'diabetes', label: 'Diabetes'},
              {id: 'asthma', label: 'Asthma / COPD'},
              {id: 'heart_disease', label: 'Heart Disease / Prior CAD'},
              {id: 'smoking', label: 'Current Smoker / Vaper'},
              {id: 'immunosuppressed', label: 'Immunosuppressed'},
              {id: 'obesity', label: 'Obesity (BMI > 30)'},
              {id: 'none', label: 'No chronic conditions'}
            ].map(com => `
              <button type="button" class="comorbidity-chip ${p.comorbidities.includes(com.id) ? 'selected' : ''}" data-comorbidity="${com.id}">
                ${com.label}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // --- STEP 2: SYMPTOM SELECTOR ---
  getStep2HTML() {
    let filteredSymptoms = symptomDatabase.symptoms;

    if (this.activeSymptomRegion !== 'all') {
      filteredSymptoms = filteredSymptoms.filter(s => s.region === this.activeSymptomRegion);
    }

    if (this.symptomFilterQuery.trim().length > 0) {
      const q = this.symptomFilterQuery.toLowerCase();
      filteredSymptoms = filteredSymptoms.filter(s => s.label.toLowerCase().includes(q));
    }

    return `
      <div class="step-pane">
        <h2 class="step-heading">Which symptoms are you noticing?</h2>
        <p class="step-subheading">Select all relevant symptoms. You can filter by anatomical region or search by keyword.</p>

        <!-- Search Bar -->
        <div class="symptom-search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" id="symptomSearchInput" class="symptom-search-input" 
                 placeholder="Search symptoms (e.g. headache, fever, cough, chest pressure)..." 
                 value="${escapeHTML(this.symptomFilterQuery)}">
          ${this.symptomFilterQuery ? `<button type="button" id="clearSearchBtn" class="clear-search-btn">✕</button>` : ''}
        </div>

        <!-- Region Filter Pills -->
        <div class="region-filter-scroll">
          <button type="button" class="region-filter-pill ${this.activeSymptomRegion === 'all' ? 'active' : ''}" data-region="all">
            All Regions
          </button>
          ${symptomDatabase.bodyRegions.map(reg => `
            <button type="button" class="region-filter-pill ${this.activeSymptomRegion === reg.id ? 'active' : ''}" data-region="${reg.id}">
              ${reg.name}
            </button>
          `).join('')}
        </div>

        <!-- Selected Symptoms Counter -->
        <div class="selected-counter-bar">
          <span>Selected symptoms: <strong>${this.intake.selectedSymptoms.length}</strong></span>
          ${this.intake.selectedSymptoms.length > 0 ? `
            <button type="button" id="clearAllSymptomsBtn" class="btn-text-clear">Clear all</button>
          ` : ''}
        </div>

        <!-- Symptom Cards Grid -->
        <div class="symptoms-selectable-grid">
          ${filteredSymptoms.length > 0 ? filteredSymptoms.map(sym => {
            const isSelected = this.intake.selectedSymptoms.includes(sym.id);
            return `
              <div class="symptom-check-card ${isSelected ? 'selected' : ''} ${sym.isRedFlag ? 'red-flag-card' : ''}" data-symptom-id="${sym.id}">
                <div class="card-check-box">${isSelected ? '✓' : ''}</div>
                <div class="card-content">
                  <div class="card-title">
                    ${sym.isRedFlag ? '<span class="rf-badge">ALERT</span>' : ''}
                    ${sym.label}
                  </div>
                  <div class="card-meta">Region: ${sym.region}</div>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="empty-search-state">
              <p>No symptoms matched "<strong>${escapeHTML(this.symptomFilterQuery)}</strong>". Try clearing your search query or selecting "All Regions".</p>
            </div>
          `}
        </div>
      </div>
    `;
  }

  // --- STEP 3: TIMELINE & ONSET ---
  getStep3HTML() {
    const t = this.intake.timing;
    return `
      <div class="step-pane">
        <h2 class="step-heading">How did these symptoms begin and evolve?</h2>
        <p class="step-subheading">Timing reveals acute vs insidious progression, differentiating viral, ischemic, or inflammatory causes.</p>

        <div class="form-group-block">
          <label class="group-label">Onset Speed</label>
          <div class="timing-cards-grid">
            ${[
              {id: 'sudden_minutes', title: 'Sudden & Abrupt', desc: 'Started in seconds or minutes (high clinical urgency indicator)'},
              {id: 'hours_today', title: 'Earlier Today', desc: 'Developed over the past few hours today'},
              {id: 'days_recent', title: 'Last Few Days', desc: 'Gradually built over 2 to 4 days'},
              {id: 'weeks_chronic', title: 'Weeks or Months', desc: 'Persistent, intermittent, or recurring over a longer period'}
            ].map(opt => `
              <div class="timing-choice-card ${t.onset === opt.id ? 'active' : ''}" data-timing-prop="onset" data-val="${opt.id}">
                <div class="radio-dot">${t.onset === opt.id ? '●' : '○'}</div>
                <div class="timing-info">
                  <strong>${opt.title}</strong>
                  <p>${opt.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="form-group-block">
          <label class="group-label">Current Trajectory</label>
          <div class="toggle-pill-grid">
            ${[
              {id: 'worsening', label: 'Getting steadily worse'},
              {id: 'steady', label: 'Staying about the same'},
              {id: 'intermittent', label: 'Comes and goes in waves'},
              {id: 'improving', label: 'Gradually easing / improving'}
            ].map(opt => `
              <button type="button" class="toggle-pill ${t.trajectory === opt.id ? 'active' : ''}" data-timing-prop="trajectory" data-val="${opt.id}">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // --- STEP 4: SEVERITY & VAS SCALE ---
  getStep4HTML() {
    const s = this.intake.severity;
    const painVal = Number.isInteger(s.painScore) ? s.painScore : 0;

    let painColor = '#10b981';
    let painLabel = 'Mild Discomfort';
    if (painVal >= 8) { painColor = '#e11d48'; painLabel = 'Severe / Agonizing Pain'; }
    else if (painVal >= 6) { painColor = '#f59e0b'; painLabel = 'Moderate to Severe Pain'; }
    else if (painVal >= 4) { painColor = '#0d9488'; painLabel = 'Moderate Noticeable Pain'; }

    return `
      <div class="step-pane">
        <h2 class="step-heading">How intense is your discomfort right now?</h2>
        <p class="step-subheading">Standardized Visual Analog Scale (0–10) and functional activity impact measurement.</p>

        <div class="pain-slider-container">
          <div class="pain-score-display" style="color: ${painColor}">
            <span class="score-number">${painVal}</span>
            <span class="score-denom">/10</span>
            <span class="score-text-label">${painLabel}</span>
          </div>

          <input type="range" id="painRangeInput" min="0" max="10" step="1" value="${painVal}" class="pain-range-slider">
          
          <div class="pain-scale-labels">
            <span>0: No Pain</span>
            <span>2: Mild</span>
            <span>5: Moderate</span>
            <span>8: Severe</span>
            <span>10: Worst Possible</span>
          </div>
        </div>

        <div class="form-group-block" style="margin-top: 32px;">
          <label class="group-label">Daily Functional Impact</label>
          <div class="toggle-pill-grid">
            ${[
              {id: 'mild', label: 'Mild: Can perform all normal routines'},
              {id: 'moderate', label: 'Moderate: Hinders work, sleep, or tasks'},
              {id: 'severe', label: 'Severe: Unable to perform daily tasks / bedbound'}
            ].map(opt => `
              <button type="button" class="toggle-pill ${s.disruption === opt.id ? 'active' : ''}" data-severity-prop="disruption" data-val="${opt.id}">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // --- STEP 5: RED FLAGS SCREENER ---
  getStep5HTML() {
    const redFlagList = symptomDatabase.symptoms.filter(s => s.isRedFlag);
    const selectedFlags = this.intake.redFlags;
    const isNoneSelected = selectedFlags.includes('none');

    return `
      <div class="step-pane">
        <div class="emergency-screener-banner">
          <span class="screener-icon">🛡️</span>
          <div>
            <strong>Mandatory Emergency Safety Check</strong>
            <p>Please review these high-priority warning signs. Check any that apply, or select "None of these".</p>
          </div>
        </div>

        <div class="red-flag-checklist">
          ${redFlagList.map(rf => {
            const isChecked = selectedFlags.includes(rf.id);
            return `
              <div class="rf-checkbox-item ${isChecked ? 'checked' : ''}" data-rf-id="${rf.id}">
                <div class="rf-check-box">${isChecked ? '✓' : ''}</div>
                <div class="rf-text-content">
                  <div class="rf-label">${rf.label}</div>
                  <div class="rf-desc">${rf.emergencyDesc || 'Critical indicator'}</div>
                </div>
              </div>
            `;
          }).join('')}

          <!-- None of these -->
          <div class="rf-checkbox-item none-option ${isNoneSelected ? 'checked' : ''}" data-rf-id="none">
            <div class="rf-check-box">${isNoneSelected ? '✓' : ''}</div>
            <div class="rf-text-content">
              <div class="rf-label">None of these emergency signs are present</div>
              <div class="rf-desc">I confirm that none of the above acute red flags apply to me.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- RESULTS VIEW ---
  renderResults() {
    const res = this.evaluationResult;
    const intake = this.intake;

    this.container.innerHTML = `
      <div class="assessment-results-page">
        <!-- Triage Urgency Header Banner -->
        <div class="triage-urgency-banner banner-${res.triageLevel}">
          <div class="banner-top-row">
            <span class="triage-status-pill">${res.triageLevel.toUpperCase()} PRIORITY</span>
            <span class="time-window-pill">Recommended Timeframe: <strong>${res.timeWindow}</strong></span>
          </div>
          <h1 class="triage-main-title">${res.triageTitle}</h1>
          <p class="triage-main-desc">${res.triageDescription}</p>

          ${res.triageLevel === 'emergency' ? `
            <div class="emergency-quick-dial-box">
              <p class="dial-sub">Call your local emergency number or ambulance service now. Do not rely on this educational tool to identify your local number.</p>
            </div>
          ` : ''}
        </div>

        ${res.activeRedFlags.length > 0 ? `
          <div class="alert-box-critical">
            <h3>⚠️ Detected Red-Flag Warning Signs:</h3>
            <ul>
              ${res.activeRedFlags.map(rf => `
                <li><strong>${rf.label}</strong> — ${rf.emergencyDesc || 'Urgent consideration'}</li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Differential Diagnosis Matches -->
        <div class="results-section">
          <div class="section-title-row">
            <div>
              <span class="section-eyebrow">DIFFERENTIAL ANALYSIS</span>
              <h2 class="section-title">Educational Condition Matches</h2>
            </div>
            <p class="section-sub">Exploratory matches based on simple keyword and symptom associations; these are not probabilities or diagnoses.</p>
          </div>

          <div class="differential-cards-list">
            ${res.topMatches.length ? res.topMatches.map(m => `
              <div class="diff-card">
                <div class="diff-card-header">
                  <div>
                    <span class="diff-category">${m.disease.category} · ${m.disease.icd10 || 'ICD-10'}</span>
                    <h3 class="diff-title">${m.disease.name}</h3>
                    <span class="diff-med-term">Clinical term: ${m.disease.medicalTerm}</span>
                  </div>
                  <div class="match-score-badge">
                    <span class="score-num">${m.relevance}</span>
                    <span class="score-lbl">Heuristic signal</span>
                  </div>
                </div>

                <p class="diff-summary">${m.disease.summary}</p>

                <div class="diff-symptoms-row">
                  <strong>Matched with:</strong>
                  <div class="matched-pills">
                    ${m.matchedSymptoms.map(ms => `<span class="matched-pill">✓ ${ms}</span>`).join('')}
                  </div>
                </div>

                <div class="diff-action-bar">
                  <button type="button" class="btn-view-dossier" data-disease-id="${m.disease.id}">
                    📖 Read Full Clinical Dossier →
                  </button>
                  <span class="urgency-tag urgency-${m.disease.urgency}">${m.disease.urgencyText}</span>
                </div>
              </div>
            `).join('') : '<p>No educational matches were generated from the selected symptoms. This does not rule out a health condition; seek professional advice if concerned.</p>'}
          </div>
        </div>

        <!-- Doctor Questions Generator -->
        <div class="results-section">
          <div class="section-title-row">
            <div>
              <span class="section-eyebrow">PREPARE FOR YOUR VISIT</span>
              <h2 class="section-title">Questions to Bring to Your Doctor</h2>
            </div>
          </div>
          <div class="doctor-questions-card">
            <ul class="doctor-questions-list">
              ${res.doctorQuestions.map(q => `
                <li>
                  <span class="bullet-check">❓</span>
                  <span>${q}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Action Bar: Print & Retake -->
        <div class="results-action-footer">
          <button type="button" id="btnPrintDoctorReport" class="btn-action-primary">
            🖨️ Print / Save Doctor Consultation Sheet (PDF)
          </button>
          <button type="button" id="btnRestartAssessment" class="btn-action-secondary">
            🔄 Start New Check-in
          </button>
          <button type="button" id="btnExploreLibrary" class="btn-action-secondary">
            📚 Browse Condition Library
          </button>
        </div>
      </div>
    `;

    // Bind results events
    this.container.querySelectorAll('.btn-view-dossier').forEach(btn => {
      btn.addEventListener('click', () => {
        const diseaseId = btn.getAttribute('data-disease-id');
        window.dispatchEvent(new CustomEvent('carepath:open-disease', { detail: { diseaseId } }));
      });
    });

    const printBtn = this.container.querySelector('#btnPrintDoctorReport');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        ReportGenerator.printSummary(this.intake, this.evaluationResult);
      });
    }

    const restartBtn = this.container.querySelector('#btnRestartAssessment');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        this.intake.selectedSymptoms = [];
        this.intake.redFlags = [];
        this.currentStep = 1;
        this.evaluationResult = null;
        this.render();
      });
    }

    const libBtn = this.container.querySelector('#btnExploreLibrary');
    if (libBtn) {
      libBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('carepath:navigate', { detail: { view: 'library' } }));
      });
    }
  }

  // --- VALIDATION & EVENT BINDING ---
  isCurrentStepValid() {
    if (this.currentStep === 1) {
      return Boolean(this.intake.profile.ageGroup);
    }
    if (this.currentStep === 2) {
      return this.intake.selectedSymptoms.length > 0;
    }
    if (this.currentStep === 3) {
      return Boolean(this.intake.timing.onset && this.intake.timing.trajectory);
    }
    if (this.currentStep === 4) {
      return Number.isInteger(this.intake.severity.painScore) && this.intake.severity.painScore >= 0 && this.intake.severity.painScore <= 10 && Boolean(this.intake.severity.disruption);
    }
    if (this.currentStep === 5) {
      return this.intake.redFlags.includes('none') || this.intake.redFlags.some(flag => flag !== 'none');
    }
    return true;
  }

  bindEvents() {
    // Next Button
    const nextBtn = this.container.querySelector('.btn-wizard-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (!this.isCurrentStepValid()) {
          if (this.currentStep === 1) {
            alert('Please select an age group to continue.');
          } else if (this.currentStep === 2) {
            alert('Please select at least one symptom to continue.');
          } else if (this.currentStep === 3) {
            alert('Please select both symptom onset and current trajectory to continue.');
          } else if (this.currentStep === 4) {
            alert('Please set the pain score and select the daily impact level to continue.');
          } else if (this.currentStep === 5) {
            alert('Please check any applicable warning signs or select "None of these".');
          }
          return;
        }

        if (this.currentStep < this.totalSteps) {
          this.currentStep++;
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          // Submit assessment
          this.evaluationResult = triageEngine.evaluate(this.intake);
          this.currentStep++;
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.onComplete(this.evaluationResult);
        }
      });
    }

    // Back Button
    const backBtn = this.container.querySelector('.btn-wizard-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (this.currentStep > 1) {
          this.currentStep--;
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    // Cancel Button
    const cancelBtn = this.container.querySelector('.btn-wizard-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('carepath:navigate', { detail: { view: 'home' } }));
      });
    }

    // Step 1 events: Profile
    this.container.querySelectorAll('[data-prop]').forEach(btn => {
      btn.addEventListener('click', () => {
        const prop = btn.getAttribute('data-prop');
        const val = btn.getAttribute('data-val');
        this.intake.profile[prop] = val;
        this.render();
      });
    });

    const chkPreg = this.container.querySelector('#chkPregnancy');
    if (chkPreg) {
      chkPreg.addEventListener('change', (e) => {
        this.intake.profile.pregnant = e.target.checked;
      });
    }

    this.container.querySelectorAll('.comorbidity-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const comId = chip.getAttribute('data-comorbidity');
        if (comId === 'none') {
          this.intake.profile.comorbidities = ['none'];
        } else {
          let list = this.intake.profile.comorbidities.filter(c => c !== 'none');
          if (list.includes(comId)) {
            list = list.filter(c => c !== comId);
          } else {
            list.push(comId);
          }
          this.intake.profile.comorbidities = list;
        }
        this.render();
      });
    });

    // Step 2 events: Symptoms
    const searchInput = this.container.querySelector('#symptomSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.symptomFilterQuery = e.target.value;
        this.render();
        const freshInput = this.container.querySelector('#symptomSearchInput');
        if (freshInput) {
          freshInput.focus();
          freshInput.setSelectionRange(freshInput.value.length, freshInput.value.length);
        }
      });
    }

    const clearSearch = this.container.querySelector('#clearSearchBtn');
    if (clearSearch) {
      clearSearch.addEventListener('click', () => {
        this.symptomFilterQuery = '';
        this.render();
      });
    }

    this.container.querySelectorAll('.region-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.activeSymptomRegion = pill.getAttribute('data-region');
        this.render();
      });
    });

    this.container.querySelectorAll('.symptom-check-card').forEach(card => {
      card.addEventListener('click', () => {
        const sId = card.getAttribute('data-symptom-id');
        if (this.intake.selectedSymptoms.includes(sId)) {
          this.intake.selectedSymptoms = this.intake.selectedSymptoms.filter(s => s !== sId);
        } else {
          this.intake.selectedSymptoms.push(sId);
        }
        this.render();
      });
    });

    const clearAllSyms = this.container.querySelector('#clearAllSymptomsBtn');
    if (clearAllSyms) {
      clearAllSyms.addEventListener('click', () => {
        this.intake.selectedSymptoms = [];
        this.render();
      });
    }

    // Step 3 events: Timing
    this.container.querySelectorAll('[data-timing-prop]').forEach(card => {
      card.addEventListener('click', () => {
        const prop = card.getAttribute('data-timing-prop');
        const val = card.getAttribute('data-val');
        this.intake.timing[prop] = val;
        this.render();
      });
    });

    // Step 4 events: Severity & Pain Slider
    const painSlider = this.container.querySelector('#painRangeInput');
    if (painSlider) {
      painSlider.addEventListener('input', (e) => {
        this.intake.severity.painScore = parseInt(e.target.value, 10);
        this.render();
        const freshSlider = this.container.querySelector('#painRangeInput');
        if (freshSlider) freshSlider.focus();
      });
    }

    this.container.querySelectorAll('[data-severity-prop]').forEach(btn => {
      btn.addEventListener('click', () => {
        const prop = btn.getAttribute('data-severity-prop');
        const val = btn.getAttribute('data-val');
        this.intake.severity[prop] = val;
        this.render();
      });
    });

    // Step 5 events: Red Flags
    this.container.querySelectorAll('.rf-checkbox-item').forEach(item => {
      item.addEventListener('click', () => {
        const rfId = item.getAttribute('data-rf-id');
        if (rfId === 'none') {
          this.intake.redFlags = this.intake.redFlags.includes('none') ? [] : ['none'];
        } else {
          let flags = this.intake.redFlags.filter(f => f !== 'none');
          if (flags.includes(rfId)) {
            flags = flags.filter(f => f !== rfId);
          } else {
            flags.push(rfId);
          }
          this.intake.redFlags = flags;
        }
        this.render();
      });
    });
  }
}

export default AssessmentWizard;
