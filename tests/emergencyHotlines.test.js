import test from 'node:test';
import assert from 'node:assert/strict';
import { emergencyDatabase } from '../js/data/emergencyHotlines.js';

test('United States and Canada are listed separately for jurisdiction-specific contacts', () => {
  const countries = emergencyDatabase.countries;
  const us = countries.find(country => country.code === 'US');
  const canada = countries.find(country => country.code === 'CA');
  assert.equal(us.emergency, '911');
  assert.equal(canada.emergency, '911');
  assert.equal(us.poison, '1-800-222-1222 (US only)');
  assert.equal(canada.poison, undefined);
  assert.equal(us.crisisDial, '988');
  assert.equal(canada.crisisDial, '988');
});

test('every country-specific contact entry includes at least one official reference link', () => {
  const countries = emergencyDatabase.countries.filter(country => country.code !== 'INTL');
  for (const country of countries) {
    assert.ok(Array.isArray(country.sources) && country.sources.length > 0, country.code);
    for (const source of country.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.label);
    }
  }
});

test('India directory uses the national emergency number and official Tele-MANAS short code', () => {
  const india = emergencyDatabase.countries.find(country => country.code === 'IN');
  assert.equal(india.emergency, '112');
  assert.equal(india.crisisDial, '14416');
  assert.ok(india.sources.some(source => source.url.includes('mha.gov.in')));
  assert.ok(india.sources.some(source => source.url.includes('mohfw.gov.in')));
});


test('Australia Healthdirect nurse advice number is displayed as a sourced non-emergency contact', () => {
  const australia = emergencyDatabase.countries.find(country => country.code === 'AU');
  assert.equal(australia.nonEmergencyDial, '1800 022 222');
  assert.match(australia.nonEmergency, /1800 022 222/);
  assert.ok(australia.sources.some(source => source.url === 'https://www.healthdirect.gov.au/contact-us'));
});
