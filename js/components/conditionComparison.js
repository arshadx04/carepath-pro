/**
 * CarePath Pro - Differential Condition Comparison Component
 * Side-by-side clinical comparison matrix
 */

import { diseaseDatabase } from '../data/diseases.js';

export class ConditionComparison {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.diseases = diseaseDatabase;
    this.selectedDiseaseIds = options.initialIds || ['tension-headache', 'migraine'];
  }

  setConditions(ids) {
    this.selectedDiseaseIds = ids;
    this.render();
  }

  render() {
    if (!this.container) return;

    const compared = this.selectedDiseaseIds
      .map(id => this.diseases.find(d => d.id === id))
      .filter(Boolean);

    this.container.innerHTML = `
      <div class="comparison-page-wrapper">
        <div class="comparison-header">
          <button type="button" id="btnBackToLibraryFromCompare" class="btn-text-back">
            ← Back to Condition Library
          </button>
          <span class="comp-eyebrow">CLINICAL DIFFERENTIAL MATRIX</span>
          <h1 class="comp-title">Side-by-Side Condition Comparison</h1>
          <p class="comp-sub">Compare hallmark distinctions, emergency thresholds, diagnostic workups, and home supportive measures.</p>
        </div>

        <!-- Quick Comparison Presets -->
        <div class="comparison-presets-bar">
          <span class="preset-label">Common Presets:</span>
          <button type="button" class="btn-preset-compare" data-preset="cold-flu-covid">
            Influenza vs COVID-19
          </button>
          <button type="button" class="btn-preset-compare" data-preset="headaches">
            Tension Headache vs Migraine
          </button>
          <button type="button" class="btn-preset-compare" data-preset="chest">
            Acid Reflux (GERD) vs Coronary Artery Disease
          </button>
          <button type="button" class="btn-preset-compare" data-preset="joints">
            Osteoarthritis vs Gout Flare
          </button>
        </div>

        ${compared.length >= 2 ? `
          <!-- Comparison Table Matrix -->
          <div class="comparison-table-scroll">
            <table class="comparison-matrix-table">
              <thead>
                <tr>
                  <th class="feature-col">Clinical Attribute</th>
                  ${compared.map(c => `
                    <th class="condition-col">
                      <div class="col-header-box">
                        <span class="cat-pill">${c.category}</span>
                        <h3 class="col-title">${c.name}</h3>
                        <span class="col-term">${c.medicalTerm} (${c.icd10})</span>
                        <span class="urgency-tag urgency-${c.urgency}">${c.urgencyText}</span>
                      </div>
                    </th>
                  `).join('')}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="feature-cell">Summary & Nature</td>
                  ${compared.map(c => `<td class="data-cell">${c.summary}</td>`).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Underlying Pathology</td>
                  ${compared.map(c => `<td class="data-cell pathology-cell">${c.pathology}</td>`).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Hallmark Symptoms</td>
                  ${compared.map(c => `
                    <td class="data-cell">
                      <ul class="matrix-bullet-list">
                        ${c.hallmarkSymptoms.map(h => `<li><strong>${h}</strong></li>`).join('')}
                      </ul>
                    </td>
                  `).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Subtle / Atypical Signs</td>
                  ${compared.map(c => `
                    <td class="data-cell">
                      <ul class="matrix-bullet-list">
                        ${c.atypicalSigns ? c.atypicalSigns.map(a => `<li>${a}</li>`).join('') : 'None noted'}
                      </ul>
                    </td>
                  `).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Emergency Red Flags</td>
                  ${compared.map(c => `
                    <td class="data-cell red-flag-cell">
                      <ul class="matrix-bullet-list rf-list">
                        ${c.redFlags.map(rf => `<li>⚠️ ${rf}</li>`).join('')}
                      </ul>
                    </td>
                  `).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Standard Diagnostic Workup</td>
                  ${compared.map(c => `
                    <td class="data-cell">
                      <ul class="matrix-bullet-list">
                        ${c.diagnosticTests.map(t => `<li>🩺 ${t}</li>`).join('')}
                      </ul>
                    </td>
                  `).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Evidence-based Supportive Steps</td>
                  ${compared.map(c => `
                    <td class="data-cell">
                      <ul class="matrix-bullet-list">
                        ${c.selfCare.map(sc => `<li>💡 ${sc}</li>`).join('')}
                      </ul>
                    </td>
                  `).join('')}
                </tr>

                <tr>
                  <td class="feature-cell">Questions for the Doctor</td>
                  ${compared.map(c => `
                    <td class="data-cell">
                      <ul class="matrix-bullet-list">
                        ${c.askDoctor.map(q => `<li>❓ ${q}</li>`).join('')}
                      </ul>
                    </td>
                  `).join('')}
                </tr>
              </tbody>
            </table>
          </div>
        ` : `
          <div class="empty-comparison-state">
            <h3>Please select at least 2 conditions to view the comparison matrix</h3>
            <p>You can choose from the presets above or browse the Condition Library and check "Compare" on any condition card.</p>
            <button type="button" id="btnGoToLibrary" class="btn-action-primary">Browse Conditions Library</button>
          </div>
        `}
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const backBtn = this.container.querySelector('#btnBackToLibraryFromCompare');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('carepath:navigate', { detail: { view: 'library' } }));
      });
    }

    const goLibBtn = this.container.querySelector('#btnGoToLibrary');
    if (goLibBtn) {
      goLibBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('carepath:navigate', { detail: { view: 'library' } }));
      });
    }

    this.container.querySelectorAll('.btn-preset-compare').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        let ids = [];
        if (preset === 'cold-flu-covid') ids = ['influenza', 'covid-19'];
        else if (preset === 'headaches') ids = ['tension-headache', 'migraine'];
        else if (preset === 'chest') ids = ['gerd-acid-reflux', 'coronary-artery-disease'];
        else if (preset === 'joints') ids = ['osteoarthritis', 'gout-arthritis'];
        this.setConditions(ids);
      });
    });
  }
}

export default ConditionComparison;
