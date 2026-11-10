# CarePath Pro ⚕️
### Educational Symptom Check-in & Medical Knowledge Library

CarePath Pro is an educational web project for exploring symptom associations and preparing questions for a healthcare visit. Its rules are heuristic, not clinically validated, and must not be used for diagnosis, treatment, or emergency decision-making.

---

## 🌟 Key Features

### 1. 🩺 5-Step Educational Symptom Check-in
- **Step 1: User Profile & Background**: Optional age-group selection (infant under 2, child 2–12, teen 13–17, adult 18–64, senior 65+), biological sex, pregnancy status, and selected health background details.
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

Use Node.js 22 or newer. No third-party packages are required.

```bash
npm start
```

Open `http://localhost:8080`. The Node server serves the existing site and API from the same origin. For a custom port, set `PORT`; for a network-facing deployment, set `HOST=0.0.0.0` behind an HTTPS reverse proxy.

The static-only Python server and direct-file options still serve the browser demo, but they do not provide the backend API.

### Backend API

- `GET /api/health` — service health.
- `GET /api/catalog/symptoms` — symptom and body-region catalog.
- `GET /api/catalog/conditions` — condition library.
- `POST /api/check-ins/evaluate` — evaluate an educational check-in using the existing heuristic engine. Send JSON shaped like `{ "selectedSymptoms": ["headache_throbbing"], "redFlags": [], "profile": {}, "timing": {}, "severity": { "painScore": 2 } }`.

The evaluation endpoint is stateless: requests and answers are not saved. Responses omit profile details and include an educational-use disclaimer. Do not send real patient identifiers or sensitive medical records. This API is not a clinical service and must not be used for diagnosis, treatment, or emergency decisions.

---

## 🧪 Automated tests

The triage engine tests use Node.js built-in test runner and no third-party packages:

```bash
npm test
```

These are basic software regression checks only. They do not validate clinical safety, medical accuracy, or suitability for real-world decisions.

---

## 🌐 Deployment

This is a static browser application with no package installation or build step required. For GitHub Pages, configure the repository under **Settings → Pages** to deploy from the `main` branch and the root (`/`) folder. Confirm the published URL and deployment status in GitHub Pages before sharing it. Test changes on a reviewed branch before merging them into `main`.

---

## 📜 Medical Disclaimer
CarePath Pro is intended solely as an educational symptom check-in and visit-preparation demonstration. It does not replace professional clinical judgment, physical examination, diagnosis, or personalized medical care. In an emergency, contact the emergency number officially used in your location immediately.


## Safety and privacy notes
- Do not enter real patient identifiers or sensitive medical records into this demo.
- No triage result should delay emergency care or replace a clinician's assessment.
- Emergency numbers and protocols vary by jurisdiction; verify them with official local sources.
- Have a qualified clinician review all symptom definitions, red flags, scoring rules, and emergency content before any real-world use.
