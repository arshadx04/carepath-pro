# CarePath Pro ⚕️
### Educational Symptom Check-in & Medical Knowledge Library

CarePath Pro is an educational web project for exploring symptom associations and preparing questions for a healthcare visit. Its rules are heuristic, not clinically validated, and must not be used for diagnosis, treatment, or emergency decision-making.

---

## 🌟 Key Features

### 1. 🩺 5-Step Educational Symptom Check-in
- **Step 1: User Profile & Background**: Incorporates age groups (infant, child, adult, senior), biological sex, pregnancy status, and comorbidities (hypertension, diabetes, asthma, heart disease, smoking).
- **Step 2: Anatomical Symptom Selection**: Select from over 40 symptoms with simple heuristic weights with instant keyword search and body-region filter pills.
- **Step 3: Timeline & Trajectory**: Analyzes sudden vs insidious onset and reported symptom trajectory (worsening, steady, episodic, improving).
- **Step 4: Pain & Severity Metrics**: Standardized Visual Analog Scale (VAS 0–10) with functional activity disruption evaluation.
- **Step 5: Warning-Sign Review**: Life-safety check for critical indicators (e.g. stroke FAST, chest pressure, appendicitis, anaphylaxis, suicidal crisis).
- **Illustrative Rule Output**:
  - Illustrative rule categories (*Level 1: Emergency*, *Level 2: Urgent Care*, *Level 3: Primary Care*, *Level 4: Supportive Home Care*).
  - Exploratory symptom associations ranked by a simple heuristic signal (not a probability or diagnostic confidence).
  - Tailored questions generated specifically for the patient to ask their physician.
  - Printable **Doctor Consultation Intake Sheet (SBAR/SOAP format)** with single-click print or PDF export.

### 2. 📚 Comprehensive Medical Knowledge Library
- **40+ Educational Condition Summaries** covering 12 organ systems:
  - **Cardiovascular**: Hypertension, Coronary Artery Disease, Congestive Heart Failure, Atrial Fibrillation, Deep Vein Thrombosis (DVT).
  - **Respiratory**: Asthma, COPD, Pneumonia, Influenza, Acute Bronchitis, COVID-19.
  - **Neurological**: Stroke & TIA, Migraine, Tension Headache, Bell's Palsy.
  - **Gastrointestinal**: GERD / Acid Reflux, Acute Appendicitis, Peptic Ulcer Disease, Irritable Bowel Syndrome (IBS), Gallstones & Cholecystitis.
  - **Endocrine & Metabolic**: Type 2 Diabetes, Hypothyroidism, Hyperthyroidism & Graves' Disease.
  - **Musculoskeletal**: Osteoarthritis, Lumbar Sciatica, Gout & Hyperuricemia, Fibromyalgia.
  - **Dermatology**: Atopic Dermatitis (Eczema), Plaque Psoriasis, Shingles (Herpes Zoster), Cellulitis.
  - **Infectious Diseases**: Strep Throat, Influenza, COVID-19.
  - **Urology & Renal**: Urinary Tract Infection (UTI), Kidney Stones (Nephrolithiasis).
  - **Mental & Behavioral Health**: Generalized Anxiety Disorder, Major Depressive Disorder, Panic Disorder.
  - **ENT & Ophthalmology**: Allergic Rhinitis, Acute Otitis Media, Conjunctivitis (Pink Eye).
- Condition articles are educational summaries. References and clinical content require independent verification by qualified healthcare professionals.

### 3. 🧍 Interactive Anatomical Body Map
- Point-and-click SVG body mannequin supporting front/back views and targeting 9 anatomical zones.
- Instant zone drill-down highlighting localized symptoms and associated clinical conditions.

### 4. ⚖️ Side-by-Side Differential Comparison Matrix
- Compare 2 or 3 conditions simultaneously across underlying pathology, hallmark signs, emergency red flags, diagnostic workups, and self-care.
- Pre-packaged presets including: *Influenza vs COVID-19*, *Tension Headache vs Migraine*, *GERD vs Heart Attack*, and *Osteoarthritis vs Gout*.

### 5. 🔊 Accessibility & Assistive Features
- Native browser **Text-to-Speech (TTS)** voice narration for all medical articles.
- Dark & Light themes with persistent theme remembering.
- Bookmarking / Saved condition lists persisted via LocalStorage.
- Emergency contact directory with country-specific dial links where supplied; always verify the correct local number through official sources.

---

## 🚀 How to Run Locally

### Option 1: Python Built-in Server (Recommended)
Open PowerShell or your terminal in this directory and run:
```bash
python -m http.server 8080
```
Then open your browser at:
```
http://localhost:8080
```

### Option 2: Direct File Execution
You can also directly double-click `index.html` or open it in Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox.

---

## 🧪 Automated tests

The triage engine tests use Node.js built-in test runner and no third-party packages:

```bash
node --experimental-default-type=module --test tests/triageEngine.test.js
```

These are basic regression checks only. They do not validate clinical safety or medical accuracy.

---

## 🌐 Deployment

This is a static browser application with no package installation or build step required. For GitHub Pages, configure the repository under **Settings → Pages** to deploy from the `main` branch and the root (`/`) folder. Confirm the published URL and deployment status in GitHub Pages before sharing it. Test changes on a reviewed branch before merging them into `main`.

---

## 📜 Medical Disclaimer
CarePath Pro is intended solely for educational triage and visit preparation purposes. It does not replace professional clinical judgment, physical examination, diagnosis, or personalized medical care. In an emergency, contact the emergency number officially used in your location immediately.


## Safety and privacy notes
- Do not enter real patient identifiers or sensitive medical records into this demo.
- No triage result should delay emergency care or replace a clinician's assessment.
- Emergency numbers and protocols vary by jurisdiction; verify them with official local sources.
- Have a qualified clinician review all symptom definitions, red flags, scoring rules, and emergency content before any real-world use.
