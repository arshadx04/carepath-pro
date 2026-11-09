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
        <!-- Posterior torso silhouette gives the bones and muscle zones a clear human outline. -->
        <path class="posterior-silhouette" d="M119,105 C111,108 102,115 98,127 L88,168 C84,184 91,195 101,201 L111,193 L119,271 C122,293 132,307 150,311 C168,307 178,293 181,271 L189,193 L199,201 C209,195 216,184 212,168 L202,127 C198,115 189,108 181,105 C171,111 162,115 150,115 C138,115 129,111 119,105 Z" fill="currentColor" opacity="0.08" stroke="currentColor" stroke-width="2"/>
        <!-- Upper and lower back are separate selectable areas. -->
        <path class="anatomical-zone back-zone ${this.selectedRegion === 'back' ? 'selected' : ''}" data-region="back" d="M119,151 C130,140 139,137 150,137 C161,137 170,140 181,151 L176,254 C170,270 162,280 150,283 C138,280 130,270 124,254 Z"/>
        <!-- Separate left and right shoulder caps. -->
        <path class="anatomical-zone shoulder-zone ${this.selectedRegion === 'shoulder' ? 'selected' : ''}" data-region="shoulder" d="M137,112 C126,108 115,110 105,119 C96,128 94,141 101,151 C110,158 123,155 136,145 Z"/>
        <path class="anatomical-zone shoulder-zone ${this.selectedRegion === 'shoulder' ? 'selected' : ''}" data-region="shoulder" d="M163,112 C174,108 185,110 195,119 C204,128 206,141 199,151 C190,158 177,155 164,145 Z"/>
        <!-- Shoulder blades, drawn like simplified scapula bones. -->
        <path class="anatomical-zone scapula-zone ${this.selectedRegion === 'shoulder' ? 'selected' : ''}" data-region="shoulder" d="M116,150 Q127,137 140,145 L143,181 Q131,194 119,181 Z" fill="none" stroke="currentColor" stroke-width="3"/>
        <path class="anatomical-zone scapula-zone ${this.selectedRegion === 'shoulder' ? 'selected' : ''}" data-region="shoulder" d="M184,150 Q173,137 160,145 L157,181 Q169,194 181,181 Z" fill="none" stroke="currentColor" stroke-width="3"/>
        <!-- Rib arcs make the posterior rib cage recognizable. -->
        <g class="rib-lines" fill="none" stroke="currentColor" stroke-width="1.8" opacity="0.7" pointer-events="none">
          <path d="M145,158 Q128,151 116,163 Q123,174 143,177"/>
          <path d="M145,170 Q127,164 117,177 Q126,188 143,190"/>
          <path d="M145,183 Q128,178 120,191 Q129,201 143,203"/>
          <path d="M145,196 Q130,192 123,205 Q132,214 143,216"/>
          <path d="M155,158 Q172,151 184,163 Q177,174 157,177"/>
          <path d="M155,170 Q173,164 183,177 Q174,188 157,190"/>
          <path d="M155,183 Q172,178 180,191 Q171,201 157,203"/>
          <path d="M155,196 Q170,192 177,205 Q168,214 157,216"/>
        </g>
        <!-- Individual vertebrae distinguish the central spine from the back muscles. -->
        <g class="spine-vertebrae">
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="144" y="137" width="12" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="150" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="163" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="176" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="189" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="202" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="215" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="228" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="241" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="143" y="254" width="14" height="10" rx="3"/>
          <rect class="anatomical-zone spine-zone ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="144" y="267" width="12" height="10" rx="3"/>
        </g>
        <text x="150" y="127" class="zone-label" text-anchor="middle">Spine</text>
        <text x="150" y="292" class="zone-label" text-anchor="middle">Lower back</text>
        <text x="105" y="143" class="zone-label" text-anchor="middle">Shoulder</text>
        <text x="195" y="143" class="zone-label" text-anchor="middle">Shoulder</text>
        <text x="150" y="235" class="zone-label" text-anchor="middle">Back</text>
      </g>
    ` : '';

    const frontNeckChest = this.view === 'front' ? `
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

` : '';
    const frontAbdomen = this.view === 'front' ? `
              <!-- Abdomen & Digestive -->
              <path class="anatomical-zone ${this.selectedRegion === 'abdomen' ? 'selected' : ''}" 
                    data-region="abdomen" 
                    d="M110,192 L190,192 L185,260 L115,260 Z" />
              <circle cx="150" cy="225" r="6" class="zone-pin ${this.selectedRegion === 'abdomen' ? 'active' : ''}" data-region="abdomen" />
              <text x="150" y="230" class="zone-label" text-anchor="middle">Abdomen</text>

` : '';
    const frontPelvis = this.view === 'front' ? `

              <!-- Pelvis & Bladder -->
              <path class="anatomical-zone ${this.selectedRegion === 'pelvis' ? 'selected' : ''}" 
                    data-region="pelvis" 
                    d="M116,262 L184,262 L172,305 L128,305 Z" />
              <circle cx="150" cy="285" r="5" class="zone-pin ${this.selectedRegion === 'pelvis' ? 'active' : ''}" data-region="pelvis" />
              <text x="150" y="290" class="zone-label" text-anchor="middle">Pelvis</text>
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

${frontNeckChest}

              <!-- Arms / Upper Limbs (visible from both views) -->
              <path class="anatomical-zone ${this.selectedRegion === 'limbs' ? 'selected' : ''}" 
                    data-region="limbs" 
                    d="M102,122 L80,185 L72,255 L82,255 L96,192 L106,140 Z M198,122 L220,185 L228,255 L218,255 L204,192 L194,140 Z" />
              <circle cx="78" cy="200" r="5" class="zone-pin ${this.selectedRegion === 'limbs' ? 'active' : ''}" data-region="limbs" />
              <circle cx="222" cy="200" r="5" class="zone-pin ${this.selectedRegion === 'limbs' ? 'active' : ''}" data-region="limbs" />

${frontAbdomen}

              <!-- Posterior anatomy: upper back, shoulder blades and spine -->
              ${backAnatomy}
${frontPelvis}

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
        // Keep the selected detail panel aligned with the anatomy visible in this view.
        if (this.view === 'back' && ['chest', 'abdomen', 'pelvis', 'throat'].includes(this.selectedRegion)) {
          this.selectedRegion = 'spine';
        } else if (this.view === 'front' && this.selectedRegion === 'spine') {
          this.selectedRegion = 'chest';
        }
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
