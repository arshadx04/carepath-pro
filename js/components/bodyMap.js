/**
 * CarePath Pro - Interactive Anatomical Body Map
 * Educational regional explorer; SVG artwork is illustrative, not diagnostic.
 */
import { symptomDatabase } from '../data/symptoms.js';
import { diseaseDatabase } from '../data/diseases.js';
import { renderSkullSVG } from './skullArtwork.js';

const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

export class BodyMap {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.onSelectRegion = options.onSelectRegion || (() => {});
    this.selectedRegion = 'chest';
    this.view = 'front';
    this.skullView = 'front';
  }

  zone(region, path, extra = '') {
    return `<path class="anatomical-zone ${extra} ${this.selectedRegion === region ? 'selected' : ''}"
      data-region="${region}" tabindex="0" role="button"
      aria-label="Select ${region}" d="${path}"/>`;
  }

  renderAnatomy() {
    const back = this.view === 'back';
    const head = renderSkullSVG(this.selectedRegion, this.skullView);
    const neck = this.zone('throat', 'M139 103 Q150 109 161 103 L165 127 Q150 135 135 127Z', 'neck-zone');
    const shoulders = back ? `
      ${this.zone('shoulder','M134 119 Q111 108 96 123 Q84 138 96 158 Q108 169 126 154 L143 137Z','shoulder-zone')}
      ${this.zone('shoulder','M166 119 Q189 108 204 123 Q216 138 204 158 Q192 169 174 154 L157 137Z','shoulder-zone')}
      ${this.zone('shoulder','M116 145 Q128 130 141 143 L143 180 Q130 193 116 181 Q108 166 116 145Z','scapula-zone')}
      ${this.zone('shoulder','M184 145 Q172 130 159 143 L157 180 Q170 193 184 181 Q192 166 184 145Z','scapula-zone')}
    ` : `
      ${this.zone('shoulder','M132 119 Q111 109 96 124 Q85 140 99 159 Q111 168 128 151 L143 135Z','shoulder-zone')}
      ${this.zone('shoulder','M168 119 Q189 109 204 124 Q215 140 201 159 Q189 168 172 151 L157 135Z','shoulder-zone')}
    `;
    const arms = `
      ${this.zone('limbs','M99 132 Q89 133 84 149 L68 207 Q64 222 70 237 L79 241 Q87 225 91 209 L111 154Z','arm-zone')}
      ${this.zone('limbs','M201 132 Q211 133 216 149 L232 207 Q236 222 230 237 L221 241 Q213 225 209 209 L189 154Z','arm-zone')}
      <path class="anatomy-detail" d="M84 238 Q78 250 79 265 Q80 274 87 273 Q93 268 91 256 L91 242
        M216 238 Q222 250 221 265 Q220 274 213 273 Q207 268 209 256 L209 242
        M80 274 L76 280 M84 275 L82 283 M88 273 L88 281 M220 274 L224 280 M216 275 L218 283 M212 273 L212 281"/>
      ${this.zone('limbs','M77 261 Q68 270 72 283 Q75 292 84 286 L91 272Z','hand-zone')}
      ${this.zone('limbs','M223 261 Q232 270 228 283 Q225 292 216 286 L209 272Z','hand-zone')}
    `;
    const torso = back ? `
      <path class="posterior-body" aria-hidden="true" d="M125 126 Q110 126 105 148
        L111 205 Q112 231 119 255 L127 287 Q136 299 150 299 Q164 299 173 287
        L181 255 Q188 231 189 205 L195 148 Q190 126 175 126
        Q164 137 150 139 Q136 137 125 126Z"/>
      <path class="posterior-muscle" d="M136 117 Q150 128 164 117 L177 137
        Q166 145 150 146 Q134 145 123 137Z"/>
      ${this.zone('back','M119 174 Q133 160 143 174 L143 257 Q132 267 121 255 Q114 218 119 174Z M181 174 Q167 160 157 174 L157 257 Q168 267 179 255 Q186 218 181 174Z','back-zone')}
      <g class="rib-cage" aria-label="Posterior rib cage">
        <path d="M145 151 Q126 142 115 158 Q112 167 128 171 L145 168 M155 151 Q174 142 185 158 Q188 167 172 171 L155 168
        M145 169 Q125 162 116 179 Q114 188 132 191 L145 186 M155 169 Q175 162 184 179 Q186 188 168 191 L155 186
        M145 188 Q128 182 120 199 Q120 208 137 210 L145 205 M155 188 Q172 182 180 199 Q180 208 163 210 L155 205
        M145 207 Q132 202 126 218 Q127 226 141 227 M155 207 Q168 202 174 218 Q173 226 159 227"/>
      </g>
      <g class="vertebral-column">
        ${Array.from({length: 18}, (_,i) => `<rect class="anatomical-zone vertebra ${this.selectedRegion === 'spine' ? 'selected' : ''}" data-region="spine" x="${146-(i>12?1:0)}" y="${143+i*7.2}" width="${8+(i>12?2:0)}" height="5.6" rx="2"/>`).join('')}
      </g>
      <path class="spine-center-line" d="M150 139 Q148 220 150 280"/><text x="150" y="242" class="zone-label" text-anchor="middle">Back</text><text x="150" y="293" class="zone-label" text-anchor="middle">Spine</text>
      <text x="150" y="242" class="zone-label" text-anchor="middle">Back</text>
      <text x="150" y="293" class="zone-label" text-anchor="middle">Spine</text>
    ` : `
      <path class="anterior-body" aria-hidden="true" d="M125 126 Q110 126 105 148
        L111 205 Q112 231 119 255 L127 287 Q136 299 150 299 Q164 299 173 287
        L181 255 Q188 231 189 205 L195 148 Q190 126 175 126
        Q164 137 150 139 Q136 137 125 126Z"/>
      ${this.zone('chest','M119 139 Q134 130 150 140 Q166 130 181 139 L185 196 Q169 205 150 198 Q131 205 115 196Z','chest-zone')}
      <path class="anatomy-detail" d="M150 143 L150 194 M120 159 Q137 150 148 160 M152 160 Q163 150 180 159
        M120 176 Q137 168 148 178 M152 178 Q163 168 180 176"/>
      ${this.zone('abdomen','M116 199 Q150 207 184 199 L179 258 Q150 268 121 258Z','abdomen-zone')}
      <path class="anatomy-detail" d="M150 205 L150 257 M128 224 Q150 231 172 224 M130 245 Q150 251 170 245"/>
      ${this.zone('pelvis','M121 260 Q150 269 179 260 L171 299 Q150 309 129 299Z','pelvis-zone')}
      <path class="anatomy-detail" d="M150 269 L150 299 M129 277 Q139 286 150 287 Q161 286 171 277"/>
    `;
    const legs = `
      ${this.zone('limbs','M128 292 Q139 300 148 299 L146 365 L140 422 L135 475 Q131 487 120 484 L117 474 L122 420 L119 363Z','leg-zone')}
      ${this.zone('limbs','M152 299 Q161 300 172 292 L181 363 L178 420 L183 474 L180 484 Q169 487 165 475 L160 422 L154 365Z','leg-zone')}
      <path class="anatomy-detail" d="M124 359 Q135 366 146 361 M154 361 Q165 366 176 359
        M122 416 Q133 423 141 416 M159 416 Q167 423 178 416
        M121 474 Q130 478 136 474 M164 474 Q174 478 181 474
        M117 488 L117 496 M122 489 L122 499 M128 488 L128 500 M174 488 L174 500 M180 489 L180 499 M185 488 L185 496"/>
      ${this.zone('limbs','M120 480 Q132 477 138 483 L137 499 Q126 505 112 500 Q107 495 120 480Z','foot-zone')}
      ${this.zone('limbs','M162 483 Q168 477 180 480 Q193 495 188 500 Q174 505 163 499Z','foot-zone')}
    `;
    return `
      <svg viewBox="0 0 300 520" class="mannequin-svg anatomy-illustration" role="group"
        aria-label="Interactive Human Body Anatomy - ${this.view} view">
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d8eee9"/><stop offset="100%" stop-color="#9fcac2"/>
          </linearGradient>
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <g class="anatomy-figure ${back ? "back-anatomy" : "front-anatomy"}">
          ${head}${neck}${shoulders}${torso}${arms}${legs}
        </g>
      </svg>`;
  }

  render() {
    if (!this.container) return;
    const regions = [...new Map(symptomDatabase.bodyRegions.map(region => [region.id, region])).values()];
    this.container.innerHTML = `
      <div class="body-explorer-wrapper">
        <div class="body-view-controls" role="group" aria-label="Anatomy view">
          <button type="button" class="btn-toggle-view ${this.view === 'front' ? 'active' : ''}" data-view="front" aria-pressed="${this.view === 'front'}">Front View</button>
          <button type="button" class="btn-toggle-view ${this.view === 'back' ? 'active' : ''}" data-view="back" aria-pressed="${this.view === 'back'}">Back View</button><button type="button" class="btn-toggle-view" data-skull-view="front">Skull Front</button><button type="button" class="btn-toggle-view" data-skull-view="side">Skull Side</button>
        </div>
        <div class="body-interactive-stage">
          <div class="svg-mannequin-container">${this.renderAnatomy()}</div>
          <div class="body-region-sidebar" id="bodyRegionDetail">${this.getRegionDetailHTML(this.selectedRegion)}</div>
        </div>
        <div class="region-chips-grid">
          ${regions.map(reg => `<button type="button" class="region-chip ${this.selectedRegion === reg.id ? 'active' : ''}" data-region="${esc(reg.id)}"><span class="chip-name">${esc(reg.name)}</span></button>`).join('')}
        </div>
      </div>`;
    this.bindEvents();
  }

  getRegionDetailHTML(regionId) {
    const regObj = symptomDatabase.bodyRegions.find(r => r.id === regionId) || symptomDatabase.bodyRegions[0];
    const regionSymptoms = symptomDatabase.symptoms.filter(s => s.region === regionId);
    const regionDiseases = diseaseDatabase.filter(d => d.bodyPart === regionId || d.category.toLowerCase().includes(regionId));
    return `
      <div class="region-detail-card">
        <div class="detail-header"><span class="detail-tag">ANATOMICAL ZONE</span>
          <h3 class="detail-title">${esc(regObj.name)}</h3><p class="detail-desc">${esc(regObj.description)}</p></div>
        <div class="detail-section"><h4>Common Symptoms to Notice (${regionSymptoms.length}):</h4>
          <div class="symptom-mini-list">${regionSymptoms.slice(0,5).map(s => `<div class="symptom-mini-badge ${s.isRedFlag ? 'red-flag' : ''}">${s.isRedFlag ? '⚠️ ' : ''}${esc(s.label)}</div>`).join('')}</div></div>
        <div class="detail-section"><h4>Clinical Conditions in this Region (${regionDiseases.length}):</h4>
          <div class="disease-mini-pills">${regionDiseases.slice(0,4).map(d => `<button type="button" class="disease-pill-btn" data-disease="${esc(d.id)}">${esc(d.name)} <span class="arr">→</span></button>`).join('')}</div></div>
        <button type="button" class="btn-start-region-assessment" data-region="${esc(regionId)}">Assess symptoms in ${esc(regObj.name)}</button>
      </div>`;
  }

  bindEvents() {
    this.container.querySelectorAll('.anatomical-zone, .zone-pin').forEach(elem => {
      const activate = () => { const region = elem.getAttribute('data-region'); if (region) this.selectRegion(region); };
      elem.addEventListener('click', activate);
      elem.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
    });
    this.container.querySelectorAll('.btn-toggle-view').forEach(btn => btn.addEventListener('click', () => {
      this.view = btn.getAttribute('data-view');
      if (this.view === 'back' && ['chest','abdomen','pelvis','throat'].includes(this.selectedRegion)) this.selectedRegion = 'spine';
      else if (this.view === 'front' && ['spine','back','shoulder'].includes(this.selectedRegion)) this.selectedRegion = 'chest';
      this.render();
    }));
    this.container.querySelectorAll('[data-skull-view]').forEach(btn => btn.addEventListener('click', () => { this.skullView = btn.getAttribute('data-skull-view'); this.render(); }));
    this.container.querySelectorAll('.region-chip').forEach(chip => chip.addEventListener('click', () => this.selectRegion(chip.getAttribute('data-region'))));
    this.container.querySelectorAll('.disease-pill-btn').forEach(btn => btn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('carepath:open-disease', { detail: { diseaseId: btn.getAttribute('data-disease') } }));
    }));
    const assessBtn = this.container.querySelector('.btn-start-region-assessment');
    if (assessBtn) assessBtn.addEventListener('click', () => window.dispatchEvent(new CustomEvent('carepath:start-assessment', { detail: { region: this.selectedRegion } })));
  }

  selectRegion(regionId) {
    this.selectedRegion = regionId;
    this.render();
    this.onSelectRegion(regionId);
  }
}
export default BodyMap;
