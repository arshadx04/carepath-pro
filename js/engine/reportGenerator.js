/**
 * CarePath Pro - Educational Visit Preparation Summary & Print Report Generator
 * Formatted as an educational visit-preparation summary
 */

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

export class ReportGenerator {
  /**
   * Generates clean HTML for an educational visit-preparation summary
   * @param {Object} intake User-provided check-in answers
   * @param {Object} result Illustrative rule output
   * @returns {string} Clean HTML
   */
  static generateReportHTML(intake, result) {
    const safeIntake = intake && typeof intake === 'object' ? intake : {};
    const safeResult = result && typeof result === 'object' ? result : {};
    const p = safeIntake.profile && typeof safeIntake.profile === 'object' ? safeIntake.profile : {};
    const t = safeIntake.timing && typeof safeIntake.timing === 'object' ? safeIntake.timing : {};
    const s = safeIntake.severity && typeof safeIntake.severity === 'object' ? safeIntake.severity : {};
    const evalDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const symptomsList = (Array.isArray(safeIntake.selectedSymptoms) ? safeIntake.selectedSymptoms : [])
       .map(symId => `<li><strong>${escapeHTML(symId.replace(/_/g, ' '))}</strong></li>`)
      .join('');

    const matchedConditions = (Array.isArray(safeResult.topMatches) ? safeResult.topMatches : [])
      .map(m => `
        <div class="report-condition-row">
          <div class="condition-name">
            <strong>${escapeHTML(m.disease?.name)}</strong> 
            <span class="icd">(${escapeHTML(m.disease?.icd10 || 'ICD-10')})</span>
          </div>
          <div class="match-bar-container">
            <span class="pct">Exploratory heuristic signal: ${escapeHTML(m.relevance)} (not a probability)</span>
          </div>
        </div>
      `).join('');

    const questionsList = (Array.isArray(safeResult.doctorQuestions) ? safeResult.doctorQuestions : [])
       .map(q => `<li>${escapeHTML(q)}</li>`)
      .join('');

    const redFlagsList = (Array.isArray(safeResult.activeRedFlags) ? safeResult.activeRedFlags : []).length > 0
      ? safeResult.activeRedFlags.map(rf => `<li class="red-text"><strong>${escapeHTML(rf.label)}</strong>: ${escapeHTML(rf.emergencyDesc || 'Critical indicator')}</li>`).join('')
      : '<li class="green-text">No warning signs were selected in this educational check-in. This does not rule out an emergency.</li>';

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CarePath Pro - Educational Visit Preparation Summary</title>
  <style>
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none !important; }
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.5;
      margin: 0;
      padding: 24px;
      background: #ffffff;
      font-size: 13px;
    }
    .container { max-width: 800px; margin: 0 auto; border: 1px solid #cbd5e1; padding: 24px; border-radius: 8px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 16px; }
    .logo-title { font-size: 20px; font-weight: 800; color: #0f766e; letter-spacing: -0.5px; }
    .logo-sub { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
    .meta-box { text-align: right; font-size: 11px; color: #475569; }
    .triage-badge {
      display: inline-block;
      padding: 6px 12px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 12px;
      margin-top: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .badge-emergency { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; }
    .badge-urgent { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
    .badge-routine { background: #ecfdf5; color: #065f46; border: 1px solid #6ee7b7; }
    .badge-selfCare { background: #f0fdfa; color: #0f766e; border: 1px solid #5eead4; }
    
    .section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; }
    .card h3 { margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #0f766e; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
    .card p { margin: 4px 0; }
    
    ul { margin: 4px 0; padding-left: 20px; }
    li { margin-bottom: 3px; }
    .red-text { color: #b91c1c; }
    .green-text { color: #047857; }
    
    .report-condition-row { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px dashed #e2e8f0; }
    .condition-name { font-size: 12px; }
    .icd { color: #64748b; font-size: 11px; }
    .pct { font-weight: 700; color: #0f766e; font-size: 11px; }

    .disclaimer-box {
      margin-top: 20px;
      border: 1px solid #e2e8f0;
      background: #fafafa;
      padding: 10px;
      border-radius: 6px;
      font-size: 10px;
      color: #64748b;
      line-height: 1.4;
    }
    .print-btn-bar { margin-bottom: 16px; text-align: right; }
    .btn-print {
      background: #0f766e;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="print-btn-bar no-print">
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>
  <div class="container">
    <div class="header">
      <div>
        <div class="logo-title">CarePath Pro · Visit Preparation Summary</div>
        <div class="logo-sub">Educational Symptom Check-in Summary</div>
      </div>
      <div class="meta-box">
        <div><strong>Assessment Date:</strong> ${escapeHTML(evalDate)}</div>
        <div><strong>Illustrative rule category:</strong></div>
        <div class="triage-badge badge-${escapeHTML(safeResult.triageLevel)}">${escapeHTML(safeResult.triageTitle)}</div>
      </div>
    </div>

    <div class="section-grid">
      <div class="card">
        <h3>1. Patient Demographics & Profile</h3>
        <p><strong>Age Group:</strong> ${escapeHTML(p.ageGroup ? p.ageGroup.toUpperCase() : 'Not recorded')}</p>
        <p><strong>Biological Sex:</strong> ${escapeHTML(p.biologicalSex || 'Not specified')}</p>
        <p><strong>Pregnancy Status:</strong> ${p.pregnant === true ? 'Reported pregnant / postpartum' : p.pregnant === false ? 'Not reported' : 'Not specified'}</p>
        <p><strong>Comorbidities / Background:</strong> ${escapeHTML((Array.isArray(p.comorbidities) && p.comorbidities.length > 0) ? p.comorbidities.join(', ') : 'None reported')}</p>
      </div>

      <div class="card">
        <h3>2. Symptom Timing & Severity</h3>
        <p><strong>Reported onset:</strong> ${escapeHTML(t.onset ? t.onset.replace(/_/g, ' ') : 'Not recorded')}</p>
        <p><strong>Reported change:</strong> ${escapeHTML(t.trajectory ? t.trajectory.toUpperCase() : 'Not recorded')}</p>
        <p><strong>Discomfort self-rating:</strong> <strong>${s.painScore == null ? 'Not recorded' : `${escapeHTML(s.painScore)}/10`}</strong></p>
        <p><strong>Daily activity impact:</strong> ${escapeHTML(s.disruption ? s.disruption.toUpperCase() : 'Not recorded')}</p>
      </div>
    </div>

    <div class="card" style="margin-bottom: 16px;">
      <h3>3. Safety Screener: Red Flags & Urgent Signs</h3>
      <ul>${redFlagsList}</ul>
    </div>

    <div class="card" style="margin-bottom: 16px;">
      <h3>4. Educational Differential Considerations</h3>
      <p style="font-size: 11px; color: #64748b; margin-top: 0;">Exploratory associations from a simple educational heuristic; not validated diagnostic probabilities.</p>
      <div>${matchedConditions}</div>
    </div>

    <div class="card" style="margin-bottom: 16px;">
      <h3>5. Personalized Questions Prepared for Clinician</h3>
      <ul>${questionsList}</ul>
    </div>

    <div class="disclaimer-box">
      <strong>EDUCATIONAL NOTICE & DISCLAIMER:</strong> This document was prepared by CarePath Pro as an educational pre-intake synthesis tool. It does not constitute a formal diagnosis, medical order, or physician consultation. If you believe you may be experiencing a medical emergency, contact the emergency services number officially used in your location immediately. Do not rely on this report to assess or delay urgent care.
    </div>
  </div>
</body>
</html>
    `;
  }

  /**
   * Opens the printable summary in a new dedicated print window
   */
  static printSummary(intake, result) {
    const html = this.generateReportHTML(intake, result);
    const printWindow = window.open('', '_blank', 'width=850,height=900');
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.focus();
    } else {
      alert('Please allow pop-ups for this site to view and print your educational visit-preparation summary.');
    }
  }
}

export default ReportGenerator;
