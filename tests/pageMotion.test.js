import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../css/redesign.css', import.meta.url), 'utf8');
const app = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');
const manager = await readFile(new URL('../disease-manager.html', import.meta.url), 'utf8');

test('main pages use an entrance animation on navigation', () => {
  assert.match(css, /\.page-view\.page-view-enter/);
  assert.match(app, /activeView\.classList\.add\('page-view-enter'\)/);
  assert.match(app, /activeView\.offsetWidth/);
});

test('symptom check-in and condition library have subtle content motion', () => {
  assert.match(css, /\.step-pane\s*\{\s*animation:/);
  assert.match(css, /\.symptoms-selectable-grid \.symptom-check-card/);
  assert.match(css, /\.disease-cards-grid \.disease-card/);
  assert.match(css, /\.library-header-banner/);
});

test('comparison and emergency pages are included in the shared motion system', () => {
  assert.match(css, /\.comparison-header/);
  assert.match(css, /\.emergency-hero-banner/);
  assert.match(css, /\.country-hotline-card/);
  assert.match(css, /\.comparison-table-scroll/);
});

test('motion is disabled or minimized for reduced-motion users', () => {
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /animation:\s*none\s*!important/);
  assert.match(manager, /prefers-reduced-motion:reduce/);
});

test('standalone condition manager has entrance and interaction motion', () => {
  assert.match(manager, /@keyframes manager-enter/);
  assert.match(manager, /\.item:hover\{transform:translateX\(3px\)\}/);
});
