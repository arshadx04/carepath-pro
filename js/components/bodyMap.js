/**
 * CarePath Pro - Interactive Anatomical Body Map Component
 * Provides visual anatomical point-and-click exploration
 */

import { symptomDatabase } from '../data/symptoms.js';
import { diseaseDatabase } from '../data/diseases.js';

export class BodyMap {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.onSelectRegion = options.onSelectRegion || (() => {});
    this.selectedRegion = 'chest';
    this.view = 'front'; // 'front' or 'back'
  }

  render() {
    if (!this.container) return;

    const backAnatomy = this.view === 'back' ? `
      <g class="back-anatomy">
        <!-- Posterior shoulder caps and trapezius: broad, visible shoulder anatomy -->
        <path class="anatomical-zone shoulder-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine"
              d="M137,112 C126,111 116,113 106,119 C96,123 91,132 94,143 L108,151 C116,143 126,137 140,134 Z" />
        <path class="anatomical-zone shoulder-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine"
              d="M163,112 C174,111 184,113 194,119 C204,123 209,132 206,143 L192,151 C184,143 174,137 160,134 Z" />
        <path class="anatomical-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine"
              d="M139,113 Q150,119 161,113 L174,132 Q163,145 150,149 Q137,145 126,132 Z" />
        <!-- Left and right shoulder blades -->
        <path class="anatomical-zone scapula-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine"
              d="M112,145 Q124,134 140,142 L143,177 Q130,190 116,177 Z" />
        <path class="anatomical-zone scapula-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine"
              d="M188,145 Q176,134 160,142 L157,177 Q170,190 184,177 Z" />
        <!-- Thoracic and lumbar spine -->
        <path class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine"
              d="M143,145 Q150,140 157,145 L157,280 Q150,287 143,280 Z" />
        <path d="M150,145 L150,280" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" opacity="0.65" />
        <circle cx="150" cy="160" r="5" class="zone-pin ${this.selectedRegion === 'spine' ? 'active' : ''}" data-region="spine" />
        <circle cx="150" cy="255" r="5" class="zone-pin ${this.selectedRegion === 'spine' ? 'active' : ''}" data-region="spine" />
        <text x="150" y="199" class="zone-label" text-anchor="middle">Upper back</text>
        <text x="150" y="245" class="zone-label" text-anchor="middle">Lower back</text>
        <text x="106" y="163" class="zone-label" text-anchor="middle">Shoulder</text>
        <text x="194" y="163" class="zone-label" text-anchor="middle">Shoulder</text>
      </g>
    ` : '';

    this.container.innerHTML = `
      <div class="body-explorer-wrapper">
        <div class="body-view-controls">
          <button type="button" class="btn-toggle-view ${this.view === 'front' ? 'active' : ''}" data-view="front" aria-pressed="${this.view === 'front'}">
            <span>Front View</span>
          </button>
          <button type="button" class="btn-toggle-view ${this.view === 'back' ? 'active' : ''}" data-view="back" aria-pressed="${this.view === 'back'}">
            <span>Back View</span>
          </button>
        </div>

        <div class="body-interactive-stage">
          <!-- Anatomical SVG Diagram -->
          <div class="svg-mannequin-container">
            <svg viewBox="0 0 300 520" class="mannequin-svg" role="group" aria-label="Interactive Human Body Anatomy - ${this.view} view">
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0d9488" stop-opacity="0.15" />
                  <stop offset="100%" stop-color="#0f766e" stop-opacity="0.35" />
                </linearGradient>
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <!-- Base Body Silhouette -->
              <!-- Head -->
              <path class="anatomical-zone ${this.selectedRegion === 'head' ? 'selected' : ''}" 
                    data-region="head" 
                    d="M150,25 C132,25 120,40 120,62 C120,84 133,100 150,100 C167,100 180,84 180,62 C180,40 168,25 150,25 Z" />
              <circle cx="150" cy="62" r="5" class="zone-pin ${this.selectedRegion === 'head' ? 'active' : ''}" data-region="head" />
              <text x="150" y="45" class="zone-label" text-anchor="middle">Head</text>

              ${this.view === 'front' ? '<g class="front-anatomy">' : ''}
              <!-- Neck & Throat -->
              <path class="anatomical-zone ${this.selectedRegion === 'throat' ? 'selected' : ''}" 
                    data-region="throat" 
                    d="M140,100 L160,100 L163,118 L137,118 Z" />
              <circle cx="150" cy="110" r="4" class="zone-pin ${this.selectedRegion === 'throat' ? 'active' : ''}" data-region="throat" />

              <!-- Chest & Respiratory -->
              <path class="anatomical-zone ${this.selectedRegion === 'chest' ? 'selected' : ''}" 
                    data-region="chest" 
                    d="M115,120 L185,120 L195,190 L105,190 Z" />
              <circle cx="150" cy="155" r="6" class="zone-pin ${this.selectedRegion === 'chest' ? 'active' : ''}" data-region="chest" />
              <text x="150" y="160" class="zone-label" text-anchor="middle">Chest / Lungs</text>

              ${this.view === 'front' ? '</g>' : ''}

              <!-- Arms / Upper Limbs (visible from both views) -->
              <path class="anatomical-zone ${this.selectedRegion === 'limbs' ? 'selected' : ''}" 
                    data-region="limbs" 
                    d="M102,122 L80,185 L72,255 L82,255 L96,192 L106,140 Z M198,122 L220,185 L228,255 L218,255 L204,192 L194,140 Z" />
              <circle cx="78" cy="200" r="5" class="zone-pin ${this.selectedRegion === 'limbs' ? 'active' : ''}" data-region="limbs" />
              <circle cx="222" cy="200" r="5" class="zone-pin ${this.selectedRegion === 'limbs' ? 'active' : ''}" data-region="limbs" />

              ${this.view === 'front' ? '<g class="front-anatomy">' : ''}
              <!-- Abdomen & Digestive -->
              <path class="anatomical-zone ${this.selectedRegion === 'abdomen' ? 'selected' : ''}" 
                    data-region="abdomen" 
                    d="M110,192 L190,192 L185,260 L115,260 Z" />
              <circle cx="150" cy="225" r="6" class="zone-pin ${this.selectedRegion === 'abdomen' ? 'active' : ''}" data-region="abdomen" />
              <text x="150" y="230" class="zone-label" text-anchor="middle">Abdomen</text>

              ${this.view === 'front' ? '</g>' : ''}

              <!-- Posterior anatomy: upper back, shoulder blades and spine -->
              ${backAnatomy}
              ${this.view === 'front' ? '<g class="front-anatomy">' : ''}

              <!-- Pelvis & Bladder -->
              <path class="anatomical-zone ${this.selectedRegion === 'pelvis' ? 'selected' : ''}" 
                    data-region="pelvis" 
                    d="M116,262 L184,262 L172,305 L128,305 Z" />
              <circle cx="150" cy="285" r="5" class="zone-pin ${this.selectedRegion === 'pelvis' ? 'active' : ''}" data-region="pelvis" />
              <text x="150" y="290" class="zone-label" text-anchor="middle">Pelvis</text>
              ${this.view === 'front' ? '</g>' : ''}

              <!-- Legs & Lower Limbs (visible from both views) -->
              <path class="anatomical-zone ${this.selectedRegion === 'limbs' ? 'selected' : ''}" 
                    data-region="limbs" 
                    d="M125,308 L148,308 L145,410 L140,490 L125,490 L118,410 L116,350 Z M152,308 L175,308 L182,350 L180,410 L175,490 L160,490 L155,410 Z" />
              <circle cx="132" cy="420" r="5" class="zone-pin ${this.selectedRegion === 'limbs' ? 'active' : ''}" data-region="limbs" />
              <circle cx="168" cy="420" r="5" class="zone-pin ${this.selectedRegion === 'limbs' ? 'active' : ''}" data-region="limbs" />
              <text x="150" y="450" class="zone-label" text-anchor="middle">Legs / Joints</text>
            </svg>
          </div>

          <!-- Region Quick Details Sidebar -->
          <div class="body-region-sidebar" id="bodyRegionDetail">
            ${this.getRegionDetailHTML(this.selectedRegion)}
          </div>
        </div>

        <!-- Quick Region Selector Chips -->
        <div class="region-chips-grid">
          ${symptomDatabase.bodyRegions.map(reg => `
            <button type="button" class="region-chip ${this.selectedRegion === reg.id ? 'active' : ''}" data-region="${reg.id}">
              <span class="chip-name">${reg.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  getRegionDetailHTML(regionId) {
    const regObj = symptomDatabase.bodyRegions.find(r => r.id === regionId) || symptomDatabase.bodyRegions[0];
    const regionSymptoms = symptomDatabase.symptoms.filter(s => s.region === regionId);
    const regionDiseases = diseaseDatabase.filter(d => d.bodyPart === regionId || d.category.toLowerCase().includes(regionId));

    return `
      <div class="region-detail-card">
        <div class="detail-header">
          <span class="detail-tag">ANATOMICAL ZONE</span>
          <h3 class="detail-title">${regObj.name}</h3>
          <p class="detail-desc">${regObj.description}</p>
        </div>

        <div class="detail-section">
          <h4>Common Symptoms to Notice (${regionSymptoms.length}):</h4>
          <div class="symptom-mini-list">
            ${regionSymptoms.slice(0, 5).map(s => `
              <div class="symptom-mini-badge ${s.isRedFlag ? 'red-flag' : ''}">
                ${s.isRedFlag ? '<span class="rf-icon">⚠️</span>' : ''} ${s.label}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="detail-section">
          <h4>Clinical Conditions in this Region (${regionDiseases.length}):</h4>
          <div class="disease-mini-pills">
            ${regionDiseases.slice(0, 4).map(d => `
              <button type="button" class="disease-pill-btn" data-disease="${d.id}">
                ${d.name} <span class="arr">→</span>
              </button>
            `).join('')}
          </div>
        </div>

        <button type="button" class="btn-start-region-assessment" data-region="${regionId}">
          <span>Assess symptoms in ${regObj.name}</span>
        </button>
      </div>
    `;
  }

  bindEvents() {
    // Click on SVG zones and pins
    this.container.querySelectorAll('.anatomical-zone, .zone-pin').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const reg = elem.getAttribute('data-region');
        if (reg) this.selectRegion(reg);
      });
    });

    // Toggle view buttons (front vs back)
    this.container.querySelectorAll('.btn-toggle-view').forEach(btn => {
      btn.addEventListener('click', () => {
        this.view = btn.getAttribute('data-view');
        this.render();
      });
    });

    // Click on chips
    this.container.querySelectorAll('.region-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const reg = chip.getAttribute('data-region');
        if (reg) this.selectRegion(reg);
      });
    });

    // Click on disease mini pill inside sidebar
    this.container.querySelectorAll('.disease-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const diseaseId = btn.getAttribute('data-disease');
        window.dispatchEvent(new CustomEvent('carepath:open-disease', { detail: { diseaseId } }));
      });
    });

    // Start assessment with pre-filtered region
    const assessBtn = this.container.querySelector('.btn-start-region-assessment');
    if (assessBtn) {
      assessBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('carepath:start-assessment', { detail: { region: this.selectedRegion } }));
      });
    }
  }

  selectRegion(regionId) {
    this.selectedRegion = regionId;
    this.render();
    this.onSelectRegion(regionId);
  }
}

export default BodyMap;
