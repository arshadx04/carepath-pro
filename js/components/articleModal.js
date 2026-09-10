/**
 * CarePath Pro - Clinical Condition Dossier Modal Component
 * Deep-dive medical report with Text-to-Speech audio accessibility
 */

import { diseaseDatabase } from '../data/diseases.js';

export class ArticleModal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentDisease = null;
    this.speechSynth = window.speechSynthesis;
    this.speechUtterance = null;
    this.isSpeaking = false;

    // Listen for global event
    window.addEventListener('carepath:open-disease', (e) => {
      const { diseaseId } = e.detail || {};
      if (diseaseId) {
        this.open(diseaseId);
      }
    });

    // Handle ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.currentDisease) {
        this.close();
      }
    });
  }

  open(diseaseId) {
    this.currentDisease = diseaseDatabase.find(d => d.id === diseaseId);
    if (!this.currentDisease) return;
    this.render();
  }

  close() {
    this.stopSpeech();
    this.currentDisease = null;
    if (this.container) this.container.innerHTML = '';
  }

  toggleSpeech() {
    if (!this.currentDisease) return;

    if (this.isSpeaking) {
      this.stopSpeech();
      this.renderAudioControls(false);
    } else {
      const textToRead = `${this.currentDisease.name}. Medical term: ${this.currentDisease.medicalTerm}. Overview: ${this.currentDisease.summary}. Underlying pathology: ${this.currentDisease.pathology}. Key hallmark symptoms include: ${this.currentDisease.hallmarkSymptoms.join(', ')}. Red flag signs requiring immediate care: ${this.currentDisease.redFlags.join(', ')}. Evidence-based supportive care: ${this.currentDisease.selfCare.join(', ')}.`;
      
      this.speechUtterance = new SpeechSynthesisUtterance(textToRead);
      this.speechUtterance.rate = 0.95;
      this.speechUtterance.pitch = 1.0;

      this.speechUtterance.onend = () => {
        this.isSpeaking = false;
        this.renderAudioControls(false);
      };

      this.speechUtterance.onerror = () => {
        this.isSpeaking = false;
        this.renderAudioControls(false);
      };

      this.speechSynth.speak(this.speechUtterance);
      this.isSpeaking = true;
      this.renderAudioControls(true);
    }
  }

  stopSpeech() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
    }
    this.isSpeaking = false;
  }

  renderAudioControls(speaking) {
    const btn = this.container.querySelector('#btnToggleAudioDossier');
    if (btn) {
      btn.innerHTML = speaking ? '⏸ Pause Voice Narration' : '🔊 Listen to Audio Dossier';
      btn.classList.toggle('playing', speaking);
    }
  }

  render() {
    if (!this.container || !this.currentDisease) return;

    const d = this.currentDisease;

    this.container.innerHTML = `
      <div class="modal-backdrop-overlay" id="modalBackdrop">
        <div class="modal-dialog-card" role="dialog" aria-modal="true">
          <!-- Modal Header -->
          <div class="modal-header">
            <div>
              <div class="modal-meta-crumbs">
                <span class="organ-tag">${d.category}</span>
                <span class="icd-tag">${d.icd10 || 'ICD-10'}</span>
                <span class="read-time-tag">⏱️ ${d.readTime}</span>
              </div>
              <h2 class="modal-title">${d.name}</h2>
              <div class="modal-med-term">Clinical term: <em>${d.medicalTerm}</em></div>
            </div>

            <button type="button" class="btn-modal-close" id="btnCloseDossierModal" aria-label="Close dialog">
              ✕
            </button>
          </div>

          <!-- Quick Audio & Utility Bar -->
          <div class="modal-utility-bar">
            <button type="button" id="btnToggleAudioDossier" class="btn-audio-listen">
              🔊 Listen to Audio Dossier
            </button>
            <div class="utility-right">
              <span class="urgency-badge urgency-${d.urgency}">${d.urgencyText}</span>
            </div>
          </div>

          <!-- Modal Scrollable Content -->
          <div class="modal-body-scroll">
            <!-- Summary Callout -->
            <div class="modal-callout-box">
              <h3>Clinical Overview</h3>
              <p>${d.summary}</p>
            </div>

            <!-- Underlying Pathology -->
            <div class="modal-section-block">
              <h4 class="section-subhead">🔬 Pathophysiology & Mechanism</h4>
              <p class="pathology-text">${d.pathology}</p>
            </div>

            <!-- Hallmark Symptoms -->
            <div class="modal-section-block">
              <h4 class="section-subhead">🩺 Hallmark Clinical Symptoms</h4>
              <ul class="bullet-list">
                ${d.hallmarkSymptoms.map(h => `<li><strong>${h}</strong></li>`).join('')}
              </ul>
            </div>

            <!-- Atypical or Subtle Signs -->
            ${d.atypicalSigns && d.atypicalSigns.length > 0 ? `
              <div class="modal-section-block">
                <h4 class="section-subhead">👁️ Subtle & Atypical Signs</h4>
                <ul class="bullet-list">
                  ${d.atypicalSigns.map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Emergency Red Flags -->
            <div class="modal-section-block red-flag-block">
              <h4 class="section-subhead red-text">🚨 Emergency Red Flags (Seek Immediate Care)</h4>
              <ul class="bullet-list rf-list">
                ${d.redFlags.map(rf => `<li><strong>${rf}</strong></li>`).join('')}
              </ul>
            </div>

            <!-- Risk Factors -->
            ${d.riskFactors && d.riskFactors.length > 0 ? `
              <div class="modal-section-block">
                <h4 class="section-subhead">📊 Known Risk Factors & Demographics</h4>
                <div class="pill-cloud">
                  ${d.riskFactors.map(rf => `<span class="risk-pill">${rf}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Diagnostic Workup -->
            <div class="modal-section-block">
              <h4 class="section-subhead">🧪 Common Diagnostic Tests Ordered</h4>
              <ul class="bullet-list">
                ${d.diagnosticTests.map(t => `<li><strong>${t}</strong></li>`).join('')}
              </ul>
            </div>

            <!-- Supportive Home Care -->
            <div class="modal-section-block">
              <h4 class="section-subhead">💡 Evidence-Based Supportive Care & Self-Care</h4>
              <ul class="bullet-list">
                ${d.selfCare.map(sc => `<li>${sc}</li>`).join('')}
              </ul>
            </div>

            <!-- Questions to Ask Your Doctor -->
            <div class="modal-section-block">
              <h4 class="section-subhead">❓ Questions to Ask Your Physician</h4>
              <ul class="bullet-list">
                ${d.askDoctor.map(q => `<li>${q}</li>`).join('')}
              </ul>
            </div>

            <!-- Verified Authority Source -->
            ${d.source ? `
              <div class="source-citation-box">
                <span class="source-label">Authoritative Source:</span>
                <a href="${d.source.url}" target="_blank" rel="noopener noreferrer" class="source-link">
                  ${d.source.organization} — "${d.source.title}" ↗
                </a>
              </div>
            ` : ''}
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            <button type="button" class="btn-action-primary" id="btnStartAssessFromModal">
              Check my symptoms against this condition →
            </button>
            <button type="button" class="btn-action-secondary" id="btnCloseModalBottom">
              Close Dossier
            </button>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const backdrop = this.container.querySelector('#modalBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });
    }

    const closeBtn = this.container.querySelector('#btnCloseDossierModal');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    const closeBtnBottom = this.container.querySelector('#btnCloseModalBottom');
    if (closeBtnBottom) closeBtnBottom.addEventListener('click', () => this.close());

    const audioBtn = this.container.querySelector('#btnToggleAudioDossier');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => this.toggleSpeech());
    }

    const assessBtn = this.container.querySelector('#btnStartAssessFromModal');
    if (assessBtn) {
      assessBtn.addEventListener('click', () => {
        const bodyPart = this.currentDisease.bodyPart;
        this.close();
        window.dispatchEvent(new CustomEvent('carepath:start-assessment', { detail: { region: bodyPart } }));
      });
    }
  }
}

export default ArticleModal;
