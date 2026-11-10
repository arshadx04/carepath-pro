/**
 * CarePath Pro - Clinical Disease & Condition Library Component
 * Searchable, filterable encyclopedia with bookmarking & comparisons
 */

import { diseaseDatabase } from '../data/diseases.js';

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

export class DiseaseLibrary {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.diseases = this.loadDiseaseOverrides();
    window.addEventListener('carepath:diseases-updated', () => {
      this.diseases = this.loadDiseaseOverrides();
      this.render();
    });
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedUrgency = 'All';
    this.showOnlyBookmarked = false;
    this.bookmarkedIds = this.loadBookmarks();
    this.compareList = [];
  }

  loadDiseaseOverrides() {
    try {
      const saved = localStorage.getItem('carepath_disease_overrides_v1');
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) ? parsed : diseaseDatabase;
    } catch {
      return diseaseDatabase;
    }
  }

  loadBookmarks() {
    try {
      const saved = localStorage.getItem('carepath_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveBookmarks() {
    try {
      localStorage.setItem('carepath_bookmarks', JSON.stringify(this.bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }

  toggleBookmark(id) {
    if (this.bookmarkedIds.includes(id)) {
      this.bookmarkedIds = this.bookmarkedIds.filter(b => b !== id);
    } else {
      this.bookmarkedIds.push(id);
    }
    this.saveBookmarks();
    this.render();
  }

  render() {
    if (!this.container) return;

    const categories = ['All', ...new Set(this.diseases.map(d => d.category))];
    const urgencies = ['All', 'routine', 'urgent', 'emergency'];

    // Filter diseases
    let filtered = this.diseases;

    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === this.selectedCategory);
    }

    if (this.selectedUrgency !== 'All') {
      filtered = filtered.filter(d => d.urgency === this.selectedUrgency);
    }

    if (this.showOnlyBookmarked) {
      filtered = filtered.filter(d => this.bookmarkedIds.includes(d.id));
    }

    if (this.searchQuery.trim().length > 0) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(q) ||
        (d.medicalTerm && d.medicalTerm.toLowerCase().includes(q)) ||
        d.summary.toLowerCase().includes(q) ||
        (d.icd10 && d.icd10.toLowerCase().includes(q)) ||
        d.hallmarkSymptoms.some(s => s.toLowerCase().includes(q))
      );
    }

    this.container.innerHTML = `
      <div class="library-page-wrapper">
        <!-- Library Hero Header -->
        <div class="library-header-banner">
          <div class="header-left">
            <span class="lib-eyebrow">CLINICAL KNOWLEDGE REPOSITORY</span>
            <h1 class="lib-main-title">Medical Conditions & Pathology Compendium</h1>
            <p class="lib-sub">Evidence-based dossiers covering etiology, clinical symptoms, diagnostic workups, and emergency thresholds across 12 organ systems.</p>
          </div>

          <div class="header-stats">
            <div class="stat-pill">
              <span class="stat-number">${this.diseases.length}</span>
              <span class="stat-lbl">Documented Conditions</span>
            </div>
            <div class="stat-pill">
              <span class="stat-number">12</span>
              <span class="stat-lbl">Organ Systems</span>
            </div>
            <div class="stat-pill">
              <span class="stat-number">${this.bookmarkedIds.length}</span>
              <span class="stat-lbl">Saved Bookmarks</span>
            </div>
          </div>
        </div>

        <!-- Controls Bar: Search, Category, Urgency, Saved -->
        <div class="library-controls-card">
          <!-- Search input -->
          <div class="lib-search-box">
            <span class="search-ico">🔍</span>
            <input type="text" id="libSearchInput" class="lib-search-input" 
                   placeholder="Search conditions by name, symptom, clinical term, or ICD-10 (e.g. Asthma, Chest pain, Eczema, I10)..."
                   value="${escapeHTML(this.searchQuery)}">
            ${this.searchQuery ? `<button type="button" id="libClearSearch" class="lib-clear-btn">✕</button>` : ''}
          </div>

          <!-- Category Horizontal Scroll -->
          <div class="lib-categories-scroll">
            ${categories.map(cat => `
              <button type="button" class="lib-cat-pill ${this.selectedCategory === cat ? 'active' : ''}" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Secondary Filters Row -->
          <div class="lib-filter-subrow">
            <div class="filter-left-group">
              <span class="subrow-lbl">Urgency:</span>
              ${urgencies.map(u => `
                <button type="button" class="urgency-filter-btn ${this.selectedUrgency === u ? 'active' : ''}" data-urgency="${u}">
                  ${u === 'All' ? 'All Tiers' : u.charAt(0).toUpperCase() + u.slice(1)}
                </button>
              `).join('')}
            </div>

            <div class="filter-right-group">
              <button type="button" id="toggleBookmarksBtn" class="btn-bookmark-filter ${this.showOnlyBookmarked ? 'active' : ''}">
                ${this.showOnlyBookmarked ? '★ Showing Saved Bookmarks' : '☆ View Saved Bookmarks'} (${this.bookmarkedIds.length})
              </button>
            </div>
          </div>
        </div>

        <!-- Results Counter & Comparison Bar -->
        <div class="lib-results-bar">
          <span>Showing <strong>${filtered.length}</strong> of ${this.diseases.length} medical conditions</span>
          ${this.compareList.length > 0 ? `
            <div class="compare-counter-tag">
              <span>Selected for comparison: <strong>${this.compareList.length}/3</strong></span>
              <button type="button" id="btnLaunchCompare" class="btn-launch-compare">Compare Now →</button>
              <button type="button" id="btnClearCompare" class="btn-clear-compare">Clear</button>
            </div>
          ` : ''}
        </div>

        <!-- Disease Cards Grid -->
        <div class="disease-cards-grid">
          ${filtered.length > 0 ? filtered.map(d => {
            const isBookmarked = this.bookmarkedIds.includes(d.id);
            const isCompared = this.compareList.includes(d.id);

            return `
              <div class="disease-card urgency-border-${d.urgency}">
                <div class="card-top-meta">
                  <div class="category-tag-row">
                    <span class="organ-tag">${d.category}</span>
                    <span class="icd-tag">${d.icd10 || 'ICD-10'}</span>
                  </div>
                  <button type="button" class="bookmark-icon-btn ${isBookmarked ? 'active' : ''}" 
                          data-bookmark-id="${d.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Save Condition'}">
                    ${isBookmarked ? '★' : '☆'}
                  </button>
                </div>

                <h3 class="card-disease-title">${d.name}</h3>
                <div class="card-medical-term">Clinical term: <em>${d.medicalTerm}</em></div>
                <p class="card-summary">${d.summary}</p>

                <div class="card-hallmarks-block">
                  <span class="hallmark-lbl">Hallmark Symptoms:</span>
                  <ul class="hallmark-list">
                    ${d.hallmarkSymptoms.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
                  </ul>
                </div>

                <div class="card-footer-action-row">
                  <button type="button" class="btn-open-dossier" data-open-dossier="${d.id}">
                    View Full Dossier →
                  </button>

                  <label class="compare-checkbox-label">
                    <input type="checkbox" class="chk-compare-item" data-compare-id="${d.id}" ${isCompared ? 'checked' : ''}>
                    <span>Compare</span>
                  </label>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="empty-library-state">
              <h3>No conditions matched your filters</h3>
              <p>Try resetting your search query or choosing "All" categories to see all 40+ clinical conditions.</p>
              <button type="button" id="btnResetLibFilters" class="btn-reset-filters">Reset All Filters</button>
            </div>
          `}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Search input
    const search = this.container.querySelector('#libSearchInput');
    if (search) {
      search.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
        const fresh = this.container.querySelector('#libSearchInput');
        if (fresh) {
          fresh.focus();
          fresh.setSelectionRange(fresh.value.length, fresh.value.length);
        }
      });
    }

    const clearSearch = this.container.querySelector('#libClearSearch');
    if (clearSearch) {
      clearSearch.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
      });
    }

    // Category pills
    this.container.querySelectorAll('.lib-cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.selectedCategory = pill.getAttribute('data-cat');
        this.render();
      });
    });

    // Urgency buttons
    this.container.querySelectorAll('.urgency-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedUrgency = btn.getAttribute('data-urgency');
        this.render();
      });
    });

    // Toggle Bookmarks
    const bookmarkToggle = this.container.querySelector('#toggleBookmarksBtn');
    if (bookmarkToggle) {
      bookmarkToggle.addEventListener('click', () => {
        this.showOnlyBookmarked = !this.showOnlyBookmarked;
        this.render();
      });
    }

    // Bookmark button click
    this.container.querySelectorAll('.bookmark-icon-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-bookmark-id');
        this.toggleBookmark(id);
      });
    });

    // Open dossier click
    this.container.querySelectorAll('.btn-open-dossier').forEach(btn => {
      btn.addEventListener('click', () => {
        const diseaseId = btn.getAttribute('data-open-dossier');
        window.dispatchEvent(new CustomEvent('carepath:open-disease', { detail: { diseaseId } }));
      });
    });

    // Compare checkbox
    this.container.querySelectorAll('.chk-compare-item').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const cId = chk.getAttribute('data-compare-id');
        if (e.target.checked) {
          if (this.compareList.length >= 3) {
            alert('You can compare a maximum of 3 conditions at once.');
            e.target.checked = false;
            return;
          }
          this.compareList.push(cId);
        } else {
          this.compareList = this.compareList.filter(id => id !== cId);
        }
        this.render();
      });
    });

    // Launch comparison
    const launchCompare = this.container.querySelector('#btnLaunchCompare');
    if (launchCompare) {
      launchCompare.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('carepath:compare-conditions', { detail: { diseaseIds: this.compareList } }));
      });
    }

    const clearCompare = this.container.querySelector('#btnClearCompare');
    if (clearCompare) {
      clearCompare.addEventListener('click', () => {
        this.compareList = [];
        this.render();
      });
    }

    const resetFilters = this.container.querySelector('#btnResetLibFilters');
    if (resetFilters) {
      resetFilters.addEventListener('click', () => {
        this.searchQuery = '';
        this.selectedCategory = 'All';
        this.selectedUrgency = 'All';
        this.showOnlyBookmarked = false;
        this.render();
      });
    }
  }
}

export default DiseaseLibrary;
