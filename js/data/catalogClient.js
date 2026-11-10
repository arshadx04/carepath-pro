import { diseaseDatabase } from './diseases.js';
import { symptomDatabase } from './symptoms.js';

async function getJson(path) {
  const response = await fetch(path, {
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
  return response.json();
}

/**
 * Load the public catalogs from the same-origin backend. Mutating the bundled
 * arrays in place keeps existing component and triage-engine references valid.
 * The bundled data remains a fallback for static-only hosting.
 */
export async function hydrateCatalogFromBackend() {
  try {
    const [symptoms, conditions] = await Promise.all([
      getJson('/api/catalog/symptoms'),
      getJson('/api/catalog/conditions'),
    ]);

    if (!Array.isArray(symptoms.bodyRegions) || !Array.isArray(symptoms.symptoms) ||
        !Array.isArray(conditions.conditions)) {
      throw new Error('Backend returned an invalid catalog.');
    }

    symptomDatabase.bodyRegions.splice(0, symptomDatabase.bodyRegions.length, ...symptoms.bodyRegions);
    symptomDatabase.symptoms.splice(0, symptomDatabase.symptoms.length, ...symptoms.symptoms);
    diseaseDatabase.splice(0, diseaseDatabase.length, ...conditions.conditions);
    return true;
  } catch {
    return false;
  }
}
