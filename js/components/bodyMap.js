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
      aria-label="Select ${region}" aria-pressed="${this.selectedRegion === region}" d="${path}"/>`;
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
      <g class="anatomy-muscle-layer" aria-label="Simplified posterior muscle groups">
        <path class="muscle-trapezius" d="M137 128 Q150 139 163 128 L171 160 Q160 171 150 173 Q140 171 129 160Z"/>
        <path class="muscle-latissimus" d="M128 164 Q138 157 145 173 L143 222 Q132 237 123 218 L119 181Z M172 164 Q162 157 155 173 L157 222 Q168 237 177 218 L181 181Z"/>
        <path class="muscle-gluteal" d="M124 252 Q137 246 149 257 L149 289 Q135 296 126 282Z M176 252 Q163 246 151 257 L151 289 Q165 296 174 282Z"/>
        <path class="muscle-hamstring" d="M126 302 Q138 298 146 307 L142 373 L132 414 Q124 417 122 406 L124 360Z M174 302 Q162 298 154 307 L158 373 L168 414 Q176 417 178 406 L176 360Z"/>
        <path class="muscle-calf" d="M127 418 Q137 413 143 423 L138 466 Q132 477 126 466Z M173 418 Q163 413 157 423 L162 466 Q168 477 174 466Z"/>
      </g>
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
      <g class="organ-layer" aria-label="Simplified internal organs">
        <path class="organ-lung" d="M145 151 Q133 143 125 153 Q118 166 123 185 Q127 196 141 192 Q147 181 147 163Z"/>
        <path class="organ-lung" d="M155 151 Q167 143 175 153 Q182 166 177 185 Q173 196 159 192 Q153 181 153 163Z"/>
        <path class="organ-heart" d="M150 160 C145 151 135 157 140 168 L150 180 L160 168 C165 157 155 151 150 160Z"/>
        <path class="organ-liver" d="M121 204 Q137 195 151 204 Q155 214 146 222 Q132 225 119 216Z"/>
        <path class="organ-stomach" d="M158 204 Q171 198 176 211 Q179 225 166 231 Q155 228 157 216Z"/>
        <path class="organ-kidney" d="M126 232 Q117 229 117 240 Q119 250 128 247 Q134 239 126 232Z"/>
        <path class="organ-kidney" d="M174 232 Q183 229 183 240 Q181 250 172 247 Q166 239 174 232Z"/>
        <path class="organ-intestine" d="M135 237 Q150 230 165 237 L165 255 Q150 263 135 255Z"/>
        <path class="organ-detail" d="M139 241 Q145 246 140 251 M148 239 Q154 245 149 252 M157 240 Q163 246 158 252"/>
      </g>
      <g class="anatomy-muscle-layer" aria-label="Simplified anterior muscle groups">
        <path class="muscle-pectoral" d="M122 145 Q135 135 148 147 L147 169 Q133 175 122 162Z M178 145 Q165 135 152 147 L153 169 Q167 175 178 162Z"/>
        <path class="muscle-abdominal" d="M143 207 Q150 204 157 207 L157 253 Q150 258 143 253Z"/>
        <path class="muscle-oblique" d="M121 211 Q130 215 137 224 L134 251 Q126 246 122 235Z M179 211 Q170 215 163 224 L166 251 Q174 246 178 235Z"/>
      </g>
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
        aria-label="Interactive human anatomy, ${this.view} view">
        <title>Interactive human anatomy — ${this.view} view</title>
        <desc>Select a highlighted body region to explore related symptoms and educational conditions. This illustration is not a diagnostic tool.</desc>
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d8eee9"/><stop offset="100%" stop-color="#9fcac2"/>
          </linearGradient>
          <linearGradient id="skinAtlas" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f1d8c9"/>
            <stop offset="38%" stop-color="#dfb8a5"/>
            <stop offset="72%" stop-color="#c99582"/>
            <stop offset="100%" stop-color="#b77f70"/>
          </linearGradient>
          <linearGradient id="atlasSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity=".92"/>
            <stop offset="100%" stop-color="#dcebe5" stop-opacity=".52"/>
          </linearGradient>
          <radialGradient id="atlasHalo">
            <stop offset="0%" stop-color="#78b9ad" stop-opacity=".24"/>
            <stop offset="100%" stop-color="#78b9ad" stop-opacity="0"/>
          </radialGradient>
          <filter id="glowEffect" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="2.8" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
          <filter id="figureShadow" x="-30%" y="-20%" width="160%" height="150%">
            <feDropShadow dx="0" dy="7" stdDeviation="7" flood-color="#365e56" flood-opacity=".16"/>
          </filter>
        </defs>
        <ellipse class="atlas-figure-halo" cx="150" cy="270" rx="132" ry="250" fill="url(#atlasHalo)"/>
        <g class="human-body-base" aria-hidden="true">
          <!-- Continuous natural skin silhouette: shoulders, arms, torso, legs and feet -->
          <path class="human-skin" d="M139 105 Q150 99 161 105 L164 128
            Q185 119 202 129 Q215 137 220 159 L238 219 Q244 237 236 251
            L229 258 Q222 251 219 239 L201 187 L194 161
            Q190 179 190 204 L185 257 Q182 279 174 300
            L179 354 Q184 388 181 423 L187 477 Q190 490 198 500
            Q203 507 194 511 Q178 516 165 507 Q158 501 160 489
            L155 424 L150 365 L145 424 L140 489 Q142 502 133 508
            Q120 516 104 510 Q96 506 103 499 Q111 490 113 477
            L119 423 Q116 388 121 354 L126 300 Q118 280 115 257
            L110 204 Q110 179 106 161 L99 187 L81 239 Q78 251 71 258
            L64 251 Q56 237 62 219 L80 159 Q85 137 98 129
            Q115 119 136 128Z"/>
          <path class="human-skin" d="M128 292 Q139 299 150 299 Q161 299 172 292
            L178 360 Q179 385 174 412 L169 477 Q167 489 160 491
            L151 491 L150 426 L145 491 L135 491 Q128 489 126 477
            L121 412 Q116 385 122 360Z"/>
          <path class="human-skin-detail" d="M104 154 Q116 141 133 143 M167 143 Q184 141 196 154
            M112 220 Q105 239 99 250 M188 250 Q195 239 188 220
            M128 302 Q150 313 172 302 M128 415 Q136 420 145 416
            M155 416 Q164 420 172 415"/>
          <path class="human-skin" d="M137 103 Q150 96 163 103 L162 127 Q150 134 138 127Z"/>
          <path class="human-skin" d="M64 249 Q57 258 59 274 Q61 290 72 291 Q82 290 85 277 L80 255Z
            M236 249 Q243 258 241 274 Q239 290 228 291 Q218 290 215 277 L220 255Z"/>
        </g>
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
          <button type="button" class="btn-toggle-view ${this.view === 'front' ? 'active' : ''}" data-view="front" aria-pressed="${this.view === 'front'}">Body · Front</button>
          <button type="button" class="btn-toggle-view ${this.view === 'back' ? 'active' : ''}" data-view="back" aria-pressed="${this.view === 'back'}">Body · Back</button>
          <button type="button" class="btn-toggle-view ${this.skullView === 'front' ? 'active' : ''}" data-skull-view="front" aria-pressed="${this.skullView === 'front'}">Skull · Front</button>
          <button type="button" class="btn-toggle-view ${this.skullView === 'side' ? 'active' : ''}" data-skull-view="side" aria-pressed="${this.skullView === 'side'}">Skull · Side</button>
        </div>
        <div class="anatomy-explorer-heading"><span class="anatomy-live-indicator"></span><span>INTERACTIVE ANATOMY ATLAS</span><span class="anatomy-heading-note">Select a highlighted area to explore</span></div>
        <div class="body-interactive-stage">
          <div class="svg-mannequin-container">
            <div class="atlas-view-caption">${this.view === 'front' ? 'ANTERIOR VIEW' : 'POSTERIOR VIEW'} <span>•</span> EDUCATIONAL MODEL</div>
            ${this.renderAnatomy()}
            <div class="atlas-legend"><span class="atlas-legend-dot"></span> Selectable region <span class="atlas-legend-divider"></span> <span class="atlas-legend-note">Not to scale</span></div>
          </div>
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
    this.container.querySelectorAll('.btn-toggle-view[data-view]').forEach(btn => btn.addEventListener('click', () => {
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
