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

Use Node.js 22.13 or newer. No third-party packages are required. The backend uses Node's built-in SQLite module, which Node currently marks experimental.

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
- `POST /api/auth/register` and `POST /api/auth/login` — create an account or start a session with `{ "email": "you@example.com", "password": "at least 8 characters" }`.
- `GET /api/auth/me` and `POST /api/auth/logout` — inspect or end the current session.
- `DELETE /api/auth/account` with the current password — permanently delete the signed-in account and its synced bookmarks.
- `PUT /api/auth/password` with the current and new passwords — update credentials and sign out other sessions.
- `POST /api/auth/password-reset/request` and `POST /api/auth/password-reset/confirm` — request a one-time email link and set a new password.
- `GET /api/bookmarks`, `POST /api/bookmarks` with `{ "conditionId": "asthma" }`, and `DELETE /api/bookmarks/:conditionId` — list and manage the signed-in account's saved conditions.

Accounts store an email address, a salted scrypt password hash, session-token hashes, and saved condition IDs in SQLite. The password and symptom check-in answers are never stored. Guest bookmarks remain in that browser; they are not automatically uploaded when someone signs in. The default database path is `data/carepath.sqlite`; set `CAREPATH_DB_PATH` to use another persistent file. The file server blocks the configured database and its SQLite journal files from static access. Set `NODE_ENV=production` to enable the Secure cookie flag, and serve the app behind HTTPS. Sessions expire after seven days. Password reset links use one-time hashed tokens that expire after 30 minutes; reset requests return the same response for known and unknown emails. Configure `RESEND_API_KEY`, `CAREPATH_FROM_EMAIL` (a verified sender), and `CAREPATH_PUBLIC_URL` to enable recovery email. The API key belongs in the deployment environment, never in source control. Email verification is not implemented yet.

This account feature is an MVP for the educational demo, not a production clinical service. Node marks its built-in SQLite API experimental, and deployments need persistent disk storage. Do not store patient records or rely on this app for diagnosis, treatment, or emergency decisions.

---

## 🧪 Automated tests

The triage engine tests use Node.js built-in test runner and no third-party packages:

```bash
npm test
```

These are basic software regression checks only. They do not validate clinical safety, medical accuracy, or suitability for real-world decisions.

---

## 🌐 Deployment

The frontend and API must be served from the same Node-capable origin for the current same-origin session-cookie design. GitHub Pages alone cannot run the account API. A Render Blueprint is provided in `render.yaml`; it creates a Node web service and PostgreSQL database, runs the schema migration on startup, and configures the health check. In the Render dashboard, add the secret `RESEND_API_KEY` and set `CAREPATH_FROM_EMAIL` to a verified Resend sender. Set `CAREPATH_PUBLIC_URL` to the exact deployed HTTPS URL if the Render service name or custom domain differs from the default. The generated default URL is `https://carepath-pro.onrender.com/`.

The included Blueprint uses Render's free service and free PostgreSQL plan for a no-cost trial only. Free web services may sleep, and free PostgreSQL databases are temporary and expire; do not store important or real user accounts there. Choose a paid persistent database/service plan before relying on account data. Never commit API keys or database credentials. Verify registration, login, password-reset email delivery, password reset, and session cookies on the deployed HTTPS URL before sharing it.

---

## 📜 Medical Disclaimer
CarePath Pro is intended solely as an educational symptom check-in and visit-preparation demonstration. It does not replace professional clinical judgment, physical examination, diagnosis, or personalized medical care. In an emergency, contact the emergency number officially used in your location immediately.


## Safety and privacy notes
- Do not enter real patient identifiers or sensitive medical records into this demo.
- No triage result should delay emergency care or replace a clinician's assessment.
- Emergency numbers and protocols vary by jurisdiction; verify them with official local sources.
- Have a qualified clinician review all symptom definitions, red flags, scoring rules, and emergency content before any real-world use.

