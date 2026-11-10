import { diseaseDatabase } from './data/diseases.js';

const STORAGE_KEY = 'carepath_disease_overrides_v1';
const clone = value => JSON.parse(JSON.stringify(value));
const $ = id => document.getElementById(id);
let records = loadRecords();
let selectedId = null;
let dirty = false;

function loadRecords() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(diseaseDatabase);
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : clone(diseaseDatabase);
  } catch {
    return clone(diseaseDatabase);
  }
}
function setStatus(message, isError = false) {
  $('status').textContent = message;
  $('status').style.color = isError ? '#b42318' : '#0f766e';
}
function markDirty() {
  dirty = true;
  $('savedState').textContent = 'Unsaved';
}
function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    dirty = false;
    $('savedState').textContent = 'Saved';
    window.dispatchEvent(new CustomEvent('carepath:diseases-updated'));
    return true;
  } catch (error) {
    setStatus('Could not save. Browser storage may be full or unavailable.', true);
    return false;
  }
}
function render() {
  $('totalCount').textContent = records.length.toLocaleString();
  $('categoryCount').textContent = new Set(records.map(item => item.category).filter(Boolean)).size;
  const categories = [...new Set(records.map(item => item.category).filter(Boolean))].sort();
  const current = $('categoryFilter').value;
  $('categoryFilter').innerHTML = '<option value="">All categories</option>' + categories.map(cat => '<option value="' + escapeHtml(cat) + '">' + escapeHtml(cat) + '</option>').join('');
  $('categoryFilter').value = categories.includes(current) ? current : '';
  const query = $('search').value.trim().toLowerCase();
  const category = $('categoryFilter').value;
  const filtered = records.filter(item => (!category || item.category === category) && (!query || [item.name,item.medicalTerm,item.category,item.id].some(value => String(value || '').toLowerCase().includes(query))));
  $('conditionList').innerHTML = filtered.length ? filtered.map(item => '<button class="item ' + (item.id === selectedId ? 'active' : '') + '" data-id="' + escapeHtml(item.id) + '"><b>' + escapeHtml(item.name) + '</b><small>' + escapeHtml(item.category || 'Uncategorized') + ' · ' + escapeHtml(item.id) + '</small></button>').join('') : '<div class="empty">No matching conditions found.</div>';
}
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function selectRecord(id) {
  const record = records.find(item => item.id === id);
  if (!record) return;
  selectedId = id;
  $('editorTitle').textContent = record.name || record.id;
  $('editor').value = JSON.stringify(record, null, 2);
  $('editor').disabled = false;
  $('saveBtn').disabled = false;
  $('deleteBtn').disabled = false;
  setStatus('');
  render();
}
function validateRecord(item) {
  if (!item || typeof item !== 'object' || Array.isArray(item)) return 'Record must be a JSON object.';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id || '')) return 'ID must use lowercase letters, numbers, and hyphens.';
  if (!String(item.name || '').trim()) return 'Condition name is required.';
  if (!String(item.category || '').trim()) return 'Category is required.';
  if (!Array.isArray(item.hallmarkSymptoms) || !item.hallmarkSymptoms.length) return 'Add at least one hallmark symptom.';
  for (const key of ['atypicalSigns','riskFactors','diagnosticTests','selfCare','redFlags','askDoctor']) {
    if (item[key] !== undefined && !Array.isArray(item[key])) return key + ' must be an array.';
  }
  if (!['routine','urgent','emergency'].includes(item.urgency)) return 'Urgency must be routine, urgent, or emergency.';
  return null;
}
$('conditionList').addEventListener('click', event => {
  const button = event.target.closest('[data-id]');
  if (button) selectRecord(button.dataset.id);
});
$('search').addEventListener('input', render);
$('categoryFilter').addEventListener('change', render);
$('editor').addEventListener('input', markDirty);
$('saveBtn').addEventListener('click', () => {
  let edited;
  try { edited = JSON.parse($('editor').value); } catch { setStatus('Invalid JSON. Check commas, quotes, and brackets.', true); return; }
  const problem = validateRecord(edited);
  if (problem) { setStatus(problem, true); return; }
  const duplicate = records.some(item => item.id === edited.id && item.id !== selectedId);
  if (duplicate) { setStatus('That ID already exists. Choose a unique ID.', true); return; }
  const index = records.findIndex(item => item.id === selectedId);
  if (index >= 0) records[index] = edited; else records.push(edited);
  selectedId = edited.id;
  if (persist()) { $('editorTitle').textContent = edited.name; $('editor').value = JSON.stringify(edited, null, 2); render(); setStatus('Condition saved in this browser.'); }
});
$('addBtn').addEventListener('click', () => {
  const fresh = {id:'new-condition',name:'New condition',medicalTerm:'',icd10:'',category:'General',organSystem:'',bodyPart:'',urgency:'routine',urgencyText:'Primary care consultation',readTime:'3 min read',summary:'',pathology:'',hallmarkSymptoms:[''],atypicalSigns:[],riskFactors:[],diagnosticTests:[],selfCare:[],redFlags:[],askDoctor:[],source:{organization:'',title:'',url:''}};
  selectedId = null;
  $('editorTitle').textContent = 'New condition';
  $('editor').value = JSON.stringify(fresh, null, 2);
  $('editor').disabled = false;
  $('saveBtn').disabled = false;
  $('deleteBtn').disabled = true;
  setStatus('Edit the template, give it a unique ID, then save.');
  $('editor').focus();
});
$('deleteBtn').addEventListener('click', () => {
  if (!selectedId) return;
  const record = records.find(item => item.id === selectedId);
  if (!record || !confirm('Delete "' + record.name + '" from this browser workspace?')) return;
  records = records.filter(item => item.id !== selectedId);
  selectedId = null;
  $('editor').value = '';
  $('editor').disabled = true;
  $('saveBtn').disabled = true;
  $('deleteBtn').disabled = true;
  $('editorTitle').textContent = 'Choose a condition';
  if (persist()) { render(); setStatus('Condition deleted from this browser workspace.'); }
});
$('resetBtn').addEventListener('click', () => {
  if (!confirm('Discard all local changes and reload the original repository condition data?')) return;
  records = clone(diseaseDatabase);
  selectedId = null;
  localStorage.removeItem(STORAGE_KEY);
  $('editor').value = '';
  $('editor').disabled = true;
  $('saveBtn').disabled = true;
  $('deleteBtn').disabled = true;
  $('editorTitle').textContent = 'Choose a condition';
  $('savedState').textContent = 'Saved';
  render();
  setStatus('Local edits cleared. Original condition data restored.');
});
$('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(records, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'carepath-conditions-' + new Date().toISOString().slice(0,10) + '.json';
  link.click();
  URL.revokeObjectURL(url);
  setStatus('JSON backup exported.');
});
$('importBtn').addEventListener('click', () => $('fileInput').click());
$('fileInput').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported) || !imported.length) throw new Error('The file must contain a non-empty JSON array.');
    const ids = new Set();
    for (const item of imported) {
      const problem = validateRecord(item);
      if (problem) throw new Error((item?.name || item?.id || 'Record') + ': ' + problem);
      if (ids.has(item.id)) throw new Error('Duplicate ID found: ' + item.id);
      ids.add(item.id);
    }
    if (!confirm('Replace the current workspace with ' + imported.length + ' imported conditions?')) return;
    records = imported;
    selectedId = null;
    $('editor').value = '';
    $('editor').disabled = true;
    $('saveBtn').disabled = true;
    $('deleteBtn').disabled = true;
    $('editorTitle').textContent = 'Choose a condition';
    if (persist()) { render(); setStatus(imported.length + ' conditions imported and saved locally.'); }
  } catch (error) { setStatus('Import failed: ' + error.message, true); }
  finally { event.target.value = ''; }
});
window.addEventListener('beforeunload', event => { if (dirty) { event.preventDefault(); event.returnValue = ''; } });
render();
