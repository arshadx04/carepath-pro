/**
 * CarePath Pro - Main Application Orchestrator & Router
 */

import { BodyMap } from './components/bodyMap.js';
import { AssessmentWizard } from './components/assessmentWizard.js';
import { DiseaseLibrary } from './components/diseaseLibrary.js';
import { ConditionComparison } from './components/conditionComparison.js';
import { ArticleModal } from './components/articleModal.js';
import { emergencyDatabase } from './data/emergencyHotlines.js';

function getDialNumber(value) {
  const match = String(value || '').match(/\d[\d -]*\d|\d/);
  return match ? match[0].replace(/[ -]/g, '') : '';
}

class App {
  constructor() {
    this.currentView = 'home';
    this.bodyMap = null;
    this.wizard = null;
    this.library = null;
    this.comparison = null;
    this.modal = null;

    this.init();
  }

  init() {
    // Instantiate components
    this.bodyMap = new BodyMap('bodyMapContainer');
    this.wizard = new AssessmentWizard('wizardContainer');
    this.library = new DiseaseLibrary('libraryContainer');
    this.comparison = new ConditionComparison('compareContainer');
    this.modal = new ArticleModal('modalContainer');

    this.renderEmergencyDirectory();
    this.bindGlobalEvents();
    this.renderView('home');
  }

  bindGlobalEvents() {
    // Navigation Links
    document.querySelectorAll('[data-nav]').forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = elem.getAttribute('data-nav');
        this.navigate(targetView);
      });
    });

    // Mobile Nav Toggle
    const toggleBtn = document.getElementById('btnToggleMobileNav');
    const mobileMenu = document.getElementById('mobileNavMenu');
    if (toggleBtn && mobileMenu) {
      toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });
    }

    // Global Event: carepath:navigate
    window.addEventListener('carepath:navigate', (e) => {
      const { view } = e.detail || {};
      if (view) this.navigate(view);
    });

    // Global Event: carepath:start-assessment
    window.addEventListener('carepath:start-assessment', (e) => {
      const { region } = e.detail || {};
      this.navigate('assessment');
      this.wizard.init(region);
    });

    // Global Event: carepath:compare-conditions
    window.addEventListener('carepath:compare-conditions', (e) => {
      const { diseaseIds } = e.detail || {};
      this.navigate('compare');
      if (diseaseIds && diseaseIds.length >= 2) {
        this.comparison.setConditions(diseaseIds);
      }
    });

    // Theme Toggle (Dark / Light)
    const themeBtn = document.getElementById('btnThemeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeBtn.innerHTML = isDark ? '☀️' : '🌙';
        try {
          localStorage.setItem('carepath_theme', isDark ? 'dark' : 'light');
        } catch (error) {
          // Theme still works for this session when browser storage is unavailable.
        }
      });

      // Check saved theme
      try {
        if (localStorage.getItem('carepath_theme') === 'dark') {
          document.body.classList.add('dark-theme');
          themeBtn.innerHTML = '☀️';
        }
      } catch (error) {
        // Use the default light theme when browser storage is unavailable.
      }
    }

    // Hero buttons
    const heroStartBtn = document.getElementById('btnHeroStartAssessment');
    if (heroStartBtn) {
      heroStartBtn.addEventListener('click', () => {
        this.navigate('assessment');
        this.wizard.init();
      });
    }

    const heroLibBtn = document.getElementById('btnHeroExploreLibrary');
    if (heroLibBtn) {
      heroLibBtn.addEventListener('click', () => {
        this.navigate('library');
      });
    }

    const heroCompareBtn = document.getElementById('btnHeroCompare');
    if (heroCompareBtn) {
      heroCompareBtn.addEventListener('click', () => {
        this.navigate('compare');
      });
    }
  }

  navigate(viewName) {
    this.currentView = viewName;
    this.renderView(viewName);

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileNavMenu');
    if (mobileMenu) mobileMenu.classList.remove('open');

    // Update active state on nav links
    document.querySelectorAll('[data-nav]').forEach(link => {
      const isMatch = link.getAttribute('data-nav') === viewName;
      link.classList.toggle('active', isMatch);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderView(viewName) {
    const views = ['home', 'assessment', 'library', 'compare', 'emergency'];

    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) {
        el.style.display = v === viewName ? 'block' : 'none';
      }
    });

    if (viewName === 'home') {
      this.bodyMap.render();
    } else if (viewName === 'assessment') {
      this.wizard.render();
    } else if (viewName === 'library') {
      this.library.render();
    } else if (viewName === 'compare') {
      this.comparison.render();
    }
  }

  renderEmergencyDirectory() {
    const container = document.getElementById('emergencyDirectoryContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="emergency-page-wrapper">
        <div class="emergency-hero-banner">
          <span class="emergency-badge-pulse">🚨 EMERGENCY DIRECTORY</span>
          <h1 class="em-title">Global Crisis Lines & Emergency Protocols</h1>
          <p class="em-sub">If you or someone nearby may be in immediate danger, contact local emergency services. This directory is educational; confirm the correct number and service coverage for your location.</p>
        </div>

        <!-- Hotlines Grid -->
        <div class="emergency-grid">
          ${emergencyDatabase.countries.map(c => `
            <div class="country-hotline-card">
              <div class="country-code-pill">${c.code}</div>
              <h3 class="country-name">${c.country}</h3>
              <div class="hotline-numbers">
                <div class="num-row">
                  <span class="num-label">Primary Emergency (Ambulance/Police/Fire):</span>
                  ${c.dial ? `<a href="tel:${getDialNumber(c.dial)}" class="num-link highlight-red">📞 ${c.emergency}</a>` : `<span class="num-text">📞 ${c.emergency}</span>`}
                </div>
                ${c.crisis ? `
                  <div class="num-row">
                    <span class="num-label">Mental Health Crisis / Suicide Lifeline:</span>
                    ${c.crisisDial ? `<a href="tel:${getDialNumber(c.crisisDial)}" class="num-link">🧠 ${c.crisis}</a>` : `<span class="num-text">🧠 ${c.crisis}</span>`}
                  </div>
                ` : ''}
                ${c.nonEmergency ? `
                  <div class="num-row">
                    <span class="num-label">Non-emergency health advice:</span>
                    <span class="num-text">${c.nonEmergency}</span>
                  </div>
                ` : ''}
                ${c.ambulance ? `
                  <div class="num-row">
                    <span class="num-label">Ambulance:</span>
                    <a href="tel:${getDialNumber(c.ambulanceDial || c.ambulance)}" class="num-link">🚑 ${c.ambulance}</a>
                  </div>
                ` : ''}
                ${c.poison ? `
                  <div class="num-row">
                    <span class="num-label">Poison Control:</span>
                    <span class="num-text">🧪 ${c.poison}</span>
                  </div>
                ` : ''}
                ${c.sources ? `
                  <div class="num-row hotline-sources">
                    <span class="num-label">Official information:</span>
                    <span class="num-text">${c.sources.map(source => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`).join(' · ')}</span>
                  </div>
                ` : ''}
                <p class="hotline-verified-note">Reference links checked 9 Nov 2026. Numbers and service coverage can change; verify locally.</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Action Protocols -->
        <div class="emergency-protocols-section">
          <h2>General Emergency Information</h2>
          <p class="em-sub">These educational reminders are not a first-aid manual and have not been clinically validated in this project. Follow local emergency dispatcher instructions; qualified clinical review is required.</p>
          <div class="protocol-cards-grid">
            ${emergencyDatabase.emergencyProtocols.map(p => `
              <div class="protocol-card">
                <h4 class="protocol-title">⚠️ ${p.condition}</h4>
                <p class="protocol-desc">${p.action}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.carePathApp = new App();
});
