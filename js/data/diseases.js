/**
 * CarePath Pro - Comprehensive Clinical Disease & Condition Library
 * Total conditions: 150+
 * Covers 12 Organ Systems with Evidence-Based Medical Knowledge
 */

export const diseaseDatabase = [
  {
    "id": "hypertension",
    "name": "Essential Hypertension",
    "medicalTerm": "High Blood Pressure",
    "icd10": "I10",
    "category": "Cardiovascular",
    "organSystem": "Circulatory & Heart",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care Consultation",
    "readTime": "4 min read",
    "summary": "Consistently elevated arterial blood pressure often called the 'silent killer' because it usually presents without noticeable symptoms until complications arise.",
    "pathology": "Increased peripheral vascular resistance causes chronic strain on the heart, cerebral arteries, and renal vasculature over time.",
    "hallmarkSymptoms": [
      "Often asymptomatic in early stages",
      "Occasional morning headaches (occipital)",
      "Mild dizziness or lightheadedness",
      "Flushed face or warm sensations",
      "Visual disturbances or blurriness (severe spikes)"
    ],
    "atypicalSigns": [
      "Epistaxis (nosebleeds)",
      "Exertional dyspnea (shortness of breath)",
      "Palpitations",
      "Tinnitus (pulsing ringing in ears)"
    ],
    "riskFactors": [
      "High sodium intake",
      "Physical inactivity",
      "Obesity & metabolic syndrome",
      "Family history & genetics",
      "Chronic psychological stress",
      "Age over 45 (men) or 55 (women)"
    ],
    "diagnosticTests": [
      "Ambulatory 24-hour blood pressure monitoring",
      "Comprehensive metabolic panel (kidney function)",
      "Lipid panel",
      "Urinalysis for microalbuminuria",
      "12-lead Electrocardiogram (ECG)"
    ],
    "selfCare": [
      "Adopt the DASH (Dietary Approaches to Stop Hypertension) diet",
      "Reduce sodium intake below 2,300 mg/day",
      "Engage in 150 min/week moderate aerobic exercise",
      "Limit alcohol intake and quit smoking",
      "Maintain home blood pressure log with a validated cuff"
    ],
    "redFlags": [
      "Systolic BP > 180 or diastolic > 120 mmHg (Hypertensive crisis)",
      "Sudden crushing chest pain or radiating arm pain",
      "Sudden numbness, facial droop, or slurred speech",
      "Shortness of breath with pulmonary congestion"
    ],
    "askDoctor": [
      "What is my target blood pressure based on my age and health?",
      "Should I begin at-home daily blood pressure logging?",
      "Are my kidneys, cholesterol, and heart showing any signs of strain?"
    ],
    "source": {
      "organization": "American Heart Association / CDC",
      "title": "Understanding High Blood Pressure",
      "url": "https://www.cdc.gov/bloodpressure/about.htm"
    }
  },
  {
    "id": "coronary-artery-disease",
    "name": "Coronary Artery Disease & Angina",
    "medicalTerm": "Ischemic Heart Disease",
    "icd10": "I25.1",
    "category": "Cardiovascular",
    "organSystem": "Circulatory & Heart",
    "bodyPart": "chest",
    "urgency": "emergency",
    "urgencyText": "Emergency Immediate Evaluation",
    "readTime": "5 min read",
    "summary": "Narrowing or blockage of coronary arteries by atherosclerotic plaque, leading to reduced oxygen supply to heart muscle.",
    "pathology": "Arterial endothelial injury leads to lipid accumulation, fibrous cap formation, and myocardial ischemia during exertional demand.",
    "hallmarkSymptoms": [
      "Substernal chest pressure, tightness, squeezing, or aching",
      "Pain radiating to left shoulder, arm, jaw, neck, or back",
      "Shortness of breath during mild exertion",
      "Cold sweat and diaphoresis",
      "Unexplained extreme fatigue during physical tasks"
    ],
    "atypicalSigns": [
      "Nausea and epigastric discomfort mimicking acid indigestion (especially common in women and diabetics)",
      "Sudden overwhelming lightheadedness",
      "Unexplained anxiety or impending sense of doom"
    ],
    "riskFactors": [
      "Tobacco smoking",
      "High LDL cholesterol & low HDL",
      "Hypertension",
      "Diabetes mellitus",
      "Sedentary lifestyle & family history of premature CAD"
    ],
    "diagnosticTests": [
      "Troponin blood test (cardiac biomarkers)",
      "12-lead ECG (ST elevation/depression)",
      "Exercise or pharmacological cardiac stress test",
      "Coronary CT angiography or cardiac catheterization",
      "Echocardiogram"
    ],
    "selfCare": [
      "If diagnosed with stable angina, rest immediately and take prescribed sublingual nitroglycerin",
      "Never ignore new or accelerating chest pressure",
      "Adopt Mediterranean heart-healthy nutrition",
      "Supervised cardiac rehabilitation"
    ],
    "redFlags": [
      "Chest pain lasting > 5 minutes not relieved by rest or nitroglycerin",
      "Pain accompanied by diaphoresis, nausea, or syncope",
      "Cyanosis (bluish lips or fingernails)",
      "Sudden gasping for breath"
    ],
    "askDoctor": [
      "Is my chest discomfort cardiac or non-cardiac in origin?",
      "Do I need a cardiac stress test or angiogram?",
      "What is my emergency action protocol if symptoms suddenly worsen?"
    ],
    "source": {
      "organization": "World Health Organization / MedlinePlus",
      "title": "Coronary Artery Disease",
      "url": "https://medlineplus.gov/coronaryarterydisease.html"
    }
  },
  {
    "id": "heart-failure",
    "name": "Congestive Heart Failure",
    "medicalTerm": "Cardiomyopathy / Heart Failure",
    "icd10": "I50.9",
    "category": "Cardiovascular",
    "organSystem": "Circulatory & Heart",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Urgent Medical Care",
    "readTime": "5 min read",
    "summary": "A progressive clinical syndrome where the heart is unable to pump sufficient blood to meet the metabolic needs of peripheral tissues.",
    "pathology": "Systolic or diastolic ventricular dysfunction leads to neurohormonal activation, fluid retention, and systemic/pulmonary congestion.",
    "hallmarkSymptoms": [
      "Progressive shortness of breath on exertion or lying flat (orthopnea)",
      "Bilateral swelling in feet, ankles, and lower legs (peripheral edema)",
      "Waking up at night gasping for breath (paroxysmal nocturnal dyspnea)",
      "Rapid unexplained weight gain (2-3 lbs overnight from fluid)",
      "Persistent dry hacking cough with white or pink frothy sputum"
    ],
    "atypicalSigns": [
      "Abdominal bloating and early satiety (liver/gut congestion)",
      "Confusion or memory impairment from reduced cerebral perfusion",
      "Extreme muscle weakness"
    ],
    "riskFactors": [
      "Prior myocardial infarction",
      "Chronic uncontrolled hypertension",
      "Valvular heart disease",
      "Diabetes and metabolic syndrome",
      "Sleep apnea"
    ],
    "diagnosticTests": [
      "B-type Natriuretic Peptide (BNP or NT-proBNP)",
      "Transthoracic Echocardiogram (Ejection Fraction evaluation)",
      "Chest X-ray (cardiomegaly, pulmonary vascular congestion)",
      "Renal & electrolyte panels"
    ],
    "selfCare": [
      "Daily morning weight monitoring after urinating before breakfast",
      "Strict sodium restriction (usually < 2,000 mg/day)",
      "Fluid intake tracking as instructed by cardiologist",
      "Taking prescribed diuretics, ACEi/ARNI, beta-blockers, SGLT2 inhibitors consistently"
    ],
    "redFlags": [
      "Severe sudden breathlessness even while resting",
      "Pink frothy sputum coughing up",
      "Weight gain > 3 lbs in 24 hours or 5 lbs in a week",
      "Fainting or severe confusion"
    ],
    "askDoctor": [
      "What is my latest ejection fraction percentage?",
      "What daily fluid and sodium limits apply to my stage?",
      "When should I call the clinic vs go to the nearest emergency department?"
    ],
    "source": {
      "organization": "American Heart Association",
      "title": "What is Heart Failure?",
      "url": "https://www.heart.org/en/health-topics/heart-failure"
    }
  },
  {
    "id": "arrhythmia-atrial-fib",
    "name": "Atrial Fibrillation & Arrhythmias",
    "medicalTerm": "Cardiac Dysrhythmia",
    "icd10": "I48.91",
    "category": "Cardiovascular",
    "organSystem": "Circulatory & Heart",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Prompt Medical Evaluation",
    "readTime": "4 min read",
    "summary": "An irregular and often very rapid cardiac rhythm that can lead to blood clots, stroke, and heart failure.",
    "pathology": "Chaotic electrical signals in the atria trigger rapid, disorganized contractions, preventing effective ventricular filling and blood stagnation in the left atrial appendage.",
    "hallmarkSymptoms": [
      "Palpitations (fluttering, flip-flopping, or racing heart sensation)",
      "Irregular pulse with erratic beats",
      "Fatigue and generalized weakness",
      "Dizziness, lightheadedness, or presyncope",
      "Shortness of breath during mild tasks"
    ],
    "atypicalSigns": [
      "Chest flutter triggered by caffeine, alcohol, or dehydration",
      "Reduced exercise tolerance without obvious chest pain",
      "Subtle cognitive fog"
    ],
    "riskFactors": [
      "Age > 65",
      "Hypertension",
      "Obstructive sleep apnea",
      "Binge alcohol consumption ('holiday heart')",
      "Thyroid disorders (hyperthyroidism)",
      "Heart valve disease"
    ],
    "diagnosticTests": [
      "Standard 12-lead ECG",
      "Holter monitor (24-48 hour recording) or event patch",
      "Echocardiogram to inspect atrial size and valves",
      "Serum thyroid stimulating hormone (TSH)",
      "Serum electrolytes (potassium, magnesium)"
    ],
    "selfCare": [
      "Avoid caffeine, energy drinks, and alcohol triggers",
      "Manage chronic stress through slow paced diaphragmatic breathing",
      "Never stop anticoagulant or rate-control medications abruptly",
      "Learn to self-check radial pulse rhythm"
    ],
    "redFlags": [
      "Irregular palpitations accompanied by crushing chest pressure",
      "Syncope (full loss of consciousness)",
      "Signs of acute stroke: face drooping, arm weakness, speech difficulty",
      "Heart rate consistently over 140 bpm at rest with severe dizziness"
    ],
    "askDoctor": [
      "What is my stroke risk score (CHA2DS2-VASc)?",
      "Do I need anticoagulant therapy to prevent thromboembolism?",
      "Am I a candidate for cardioversion or catheter ablation?"
    ],
    "source": {
      "organization": "CDC / NIH",
      "title": "Atrial Fibrillation Information",
      "url": "https://www.cdc.gov/heartdisease/atrial_fibrillation.htm"
    }
  },
  {
    "id": "deep-vein-thrombosis",
    "name": "Deep Vein Thrombosis (DVT)",
    "medicalTerm": "Venous Thromboembolism",
    "icd10": "I82.40",
    "category": "Cardiovascular",
    "organSystem": "Circulatory & Heart",
    "bodyPart": "legs",
    "urgency": "emergency",
    "urgencyText": "Emergency Immediate Evaluation",
    "readTime": "4 min read",
    "summary": "A blood clot that forms in a deep vein, usually in the lower extremity or pelvis, carrying a lethal risk of pulmonary embolism.",
    "pathology": "Virchow's triad (venous stasis, endothelial injury, hypercoagulability) triggers thrombus formation that obstructs venous outflow and can detach.",
    "hallmarkSymptoms": [
      "Unilateral swelling in one calf, thigh, or entire leg",
      "Deep aching, cramping, or charley horse pain in the calf",
      "Skin over the calf feels noticeably warmer to touch",
      "Erythema (redness) or bluish discoloration of the affected leg",
      "Pain that worsens when dorsiflexing the foot (pulling toes up)"
    ],
    "atypicalSigns": [
      "Subtle heaviness in one leg without visible swelling",
      "Superficial veins appearing more prominent or distended"
    ],
    "riskFactors": [
      "Recent long flight or road trip (> 4 hours immobile)",
      "Recent surgery or orthopedic cast/immobilization",
      "Active malignancy",
      "Oral contraceptive pill or hormone replacement therapy",
      "Genetic thrombophilia (Factor V Leiden, Antithrombin deficiency)"
    ],
    "diagnosticTests": [
      "Venous duplex ultrasound of the lower extremities",
      "D-dimer blood test (high sensitivity rule-out)",
      "CT pulmonary angiogram if pulmonary embolism is suspected",
      "Coagulation profile"
    ],
    "selfCare": [
      "Do NOT massage the swollen or painful leg (risk of dislodging clot)",
      "Avoid prolonged immobility; walk frequently or flex ankles during flights",
      "Wear graduated compression stockings if previously prescribed",
      "Seek emergency medical assessment immediately"
    ],
    "redFlags": [
      "Sudden shortness of breath or rapid breathing",
      "Sharp chest pain that stabs when inhaling deeply",
      "Coughing up pink or blood-streaked sputum (Hemoptysis)",
      "Tachycardia, lightheadedness, or collapse"
    ],
    "askDoctor": [
      "Should a lower extremity compression duplex ultrasound be performed today?",
      "If positive, what is the duration of oral anticoagulation therapy?",
      "Do I need testing for an underlying hypercoagulable state?"
    ],
    "source": {
      "organization": "CDC",
      "title": "What is Venous Thromboembolism?",
      "url": "https://www.cdc.gov/ncbddd/dvt/facts.html"
    }
  },
  {
    "id": "asthma",
    "name": "Bronchial Asthma",
    "medicalTerm": "Reactive Airway Disease",
    "icd10": "J45.9",
    "category": "Respiratory",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Urgent if Worsening",
    "readTime": "4 min read",
    "summary": "A chronic inflammatory disorder of the airways characterized by hyperresponsiveness, reversible airflow obstruction, and mucus hypersecretion.",
    "pathology": "Immune-mediated bronchial inflammation induces smooth muscle bronchospasm, mucosal edema, and airway remodeling over time.",
    "hallmarkSymptoms": [
      "High-pitched expiratory wheezing",
      "Episodes of breathlessness and air hunger",
      "Chest tightness or feeling like an elastic band around ribs",
      "Chronic dry or nocturnal cough that disturbs sleep",
      "Symptoms triggered by cold air, pollen, dust, exercise, or viral colds"
    ],
    "atypicalSigns": [
      "Isolated chronic dry cough without audible wheeze (cough-variant asthma)",
      "Excessive clearing of throat and chest tightness after intense exercise",
      "Fatigue from poor nocturnal ventilation"
    ],
    "riskFactors": [
      "Family history of atopy (asthma, eczema, allergic rhinitis)",
      "Childhood viral respiratory syncytial virus (RSV) infections",
      "Exposure to tobacco smoke, smog, and occupational dusts",
      "Obesity"
    ],
    "diagnosticTests": [
      "Spirometry with pre- and post-bronchodilator reversibility testing",
      "Peak expiratory flow rate (PEFR) diary",
      "Methacholine bronchoprovocation challenge",
      "Fractional exhaled nitric oxide (FeNO)"
    ],
    "selfCare": [
      "Always carry a quick-relief rescue inhaler (Albuterol/Salbutamol)",
      "Adhere daily to prescribed maintenance inhaled corticosteroids (ICS)",
      "Use a spacer chamber for metered-dose inhalers",
      "Track peak flow readings and avoid known allergen triggers"
    ],
    "redFlags": [
      "Rescue inhaler gives no relief or wears off in under 2 hours",
      "Struggling to speak in full sentences without gasping",
      "Intercostal retractions (ribs or neck pulling in to breathe)",
      "Bluish tinge to lips or fingernails (Cyanosis)"
    ],
    "askDoctor": [
      "What is my personalized written Asthma Action Plan (Green/Yellow/Red zones)?",
      "Is my inhaler technique correct with a spacer?",
      "Would daily inhaled controller prevent my daytime or night flares?"
    ],
    "source": {
      "organization": "National Heart, Lung, and Blood Institute / NIH",
      "title": "Asthma Guide",
      "url": "https://www.nhlbi.nih.gov/health/asthma"
    }
  },
  {
    "id": "pneumonia",
    "name": "Community-Acquired Pneumonia",
    "medicalTerm": "Lower Respiratory Infection",
    "icd10": "J18.9",
    "category": "Respiratory",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Urgent Medical Care Required",
    "readTime": "5 min read",
    "summary": "An acute infection of the pulmonary parenchyma caused by bacteria, viruses, or fungi, causing the alveoli to fill with inflammatory exudate.",
    "pathology": "Microbial proliferation in the distal airspaces triggers intense neutrophil recruitment, alveolar consolidation, and impaired gas exchange.",
    "hallmarkSymptoms": [
      "High fever with shaking chills (rigors)",
      "Productive cough with thick yellow, green, or rust-colored sputum",
      "Pleuritic chest pain (sharp stab when inhaling deeply or coughing)",
      "Tachypnea (rapid breathing) and shortness of breath",
      "Significant physical prostration and fatigue"
    ],
    "atypicalSigns": [
      "Elderly patients may show NO fever, but present with sudden confusion, delirium, or falls",
      "Hypothermia in frail individuals",
      "Nausea and abdominal discomfort in lower-lobe pneumonia"
    ],
    "riskFactors": [
      "Age < 2 or > 65",
      "Chronic lung disease (COPD, asthma, bronchiectasis)",
      "Immunosuppression or corticosteroid use",
      "Recent viral influenza or COVID-19 infection",
      "Cigarette smoking and chronic aspiration risk"
    ],
    "diagnosticTests": [
      "Chest X-ray (posteroanterior and lateral views showing consolidation or infiltrate)",
      "Pulse oximetry (SpO2 oxygen saturation)",
      "Complete blood count with differential (leukocytosis with left shift)",
      "Sputum Gram stain and culture",
      "Influenza and COVID-19 PCR"
    ],
    "selfCare": [
      "Complete full prescribed antibiotic or antiviral regimen without stopping early",
      "Maintain generous hydration to thin bronchial secretions",
      "Use an incentive spirometer and take gentle deep breaths",
      "Rest completely and avoid all tobacco exposure"
    ],
    "redFlags": [
      "Oxygen saturation dropping below 92% on room air",
      "Confusion, lethargy, or extreme drowsiness",
      "Severe air hunger or respiratory rate > 28 breaths/min",
      "Hypotension (systolic BP < 90 mmHg)"
    ],
    "askDoctor": [
      "Do my clinical score (CURB-65) and oxygen levels indicate home or hospital treatment?",
      "Is this bacterial, viral, or atypical pneumonia?",
      "When should I schedule a follow-up chest X-ray to confirm clearance?"
    ],
    "source": {
      "organization": "American Lung Association / CDC",
      "title": "Pneumonia Overview",
      "url": "https://www.lung.org/lung-health-diseases/lung-disease-lookup/pneumonia"
    }
  },
  {
    "id": "influenza",
    "name": "Influenza (The Flu)",
    "medicalTerm": "Acute Viral Influenza",
    "icd10": "J11.1",
    "category": "Respiratory",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Self-Care (Urgent if high risk)",
    "readTime": "4 min read",
    "summary": "A highly contagious viral infection of the respiratory tract caused by Influenza virus A or B, featuring abrupt systemic toxicity.",
    "pathology": "Viral hemagglutinin and neuraminidase proteins facilitate attachment and invasion of ciliated columnar epithelial cells, causing widespread cytokine storm.",
    "hallmarkSymptoms": [
      "Abrupt onset of high fever (100.4°F to 104°F / 38°C to 40°C)",
      "Intense generalized body aches and myalgias",
      "Severe exhaustion, weakness, and bedbound fatigue",
      "Dry hacking cough and sore throat",
      "Chills, headache, and retro-orbital eye discomfort"
    ],
    "atypicalSigns": [
      "Gastrointestinal symptoms (diarrhea, vomiting) predominantly in young children",
      "Coryza (nasal congestion) typically milder than the common cold",
      "Post-viral cough lasting 2-3 weeks after fever resolves"
    ],
    "riskFactors": [
      "Unvaccinated status",
      "Age > 65 or children < 5",
      "Pregnancy",
      "Chronic medical conditions (cardiac, pulmonary, renal)",
      "Immunocompromised status"
    ],
    "diagnosticTests": [
      "Rapid influenza molecular assay (RT-PCR or rapid antigen test)",
      "Multiplex respiratory viral panel (Flu A/B, RSV, SARS-CoV-2)",
      "Chest X-ray if secondary bacterial pneumonia is suspected"
    ],
    "selfCare": [
      "Isolation at home and copious fluid intake (water, broths, electrolyte solutions)",
      "Antipyretics (Acetaminophen/Paracetamol or Ibuprofen for fever/aches)",
      "Rest in bed during the acute phase",
      "Tamiflu (Oseltamivir) within 48 hours of symptom onset for high-risk individuals"
    ],
    "redFlags": [
      "Shortness of breath or rapid labored breathing",
      "Fever improves for 2 days then rebounds violently with worsening productive cough (Secondary bacterial pneumonia)",
      "Severe dizziness, confusion, or inability to stay awake",
      "Inability to keep liquids down for > 24 hours"
    ],
    "askDoctor": [
      "Am I within the 48-hour window where antiviral medication (e.g. Oseltamivir) is beneficial?",
      "Am I at heightened risk of secondary bacterial superinfection?",
      "When can I safely return to work without being contagious?"
    ],
    "source": {
      "organization": "CDC",
      "title": "About Influenza (Flu)",
      "url": "https://www.cdc.gov/flu/about/index.html"
    }
  },
  {
    "id": "acute-bronchitis",
    "name": "Acute Bronchitis",
    "medicalTerm": "Chest Cold / Tracheobronchitis",
    "icd10": "J20.9",
    "category": "Respiratory",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Self-Monitoring & Primary Care",
    "readTime": "3 min read",
    "summary": "Self-limiting inflammation of the large bronchi, >90% caused by common respiratory viruses rather than bacteria.",
    "pathology": "Viral infection causes bronchial mucosal hyperesthesia, epithelial cell desquamation, and increased mucociliary clearance effort.",
    "hallmarkSymptoms": [
      "Persistent cough that lasts 10 to 21 days",
      "Clear, white, yellow, or greenish sputum production",
      "Substernal chest soreness from repetitive coughing",
      "Mild low-grade fever or feeling chilliness",
      "Fatigue and mild wheezing"
    ],
    "atypicalSigns": [
      "Paroxysmal coughing spasms triggered by laughing or cold air",
      "Sore throat and nasal congestion preceding the chest cough by 3 days"
    ],
    "riskFactors": [
      "Cigarette smoking and vaping",
      "Passive second-hand smoke exposure",
      "History of gastroesophageal reflux disease (GERD)",
      "Air pollution exposure"
    ],
    "diagnosticTests": [
      "Clinical exam (auscultation shows rhonchi or scattered wheezes that clear with coughing)",
      "Chest X-ray only if fever > 100.4°F, tachycardia, tachypnea, or crackles suggest pneumonia"
    ],
    "selfCare": [
      "Understand that antibiotics do NOT help viral bronchitis and cause unwanted side effects",
      "Warm tea with natural honey (for individuals over 1 year old)",
      "Humidifier or steam inhalation to loosen phlegm",
      "Adequate hydration and rest"
    ],
    "redFlags": [
      "Coughing up frank blood or dark brown clots (Hemoptysis)",
      "Fever > 101.5°F (38.6°C) persisting > 4 days",
      "Significant shortness of breath or resting stridor",
      "Cough failing to improve after 3 full weeks"
    ],
    "askDoctor": [
      "Is my chest exam clear of pneumonia crackles?",
      "Can an inhaled bronchodilator help reduce my coughing spasms?",
      "When does a prolonged cough require an X-ray or spirometry?"
    ],
    "source": {
      "organization": "MedlinePlus / CDC",
      "title": "Acute Bronchitis",
      "url": "https://medlineplus.gov/acutebronchitis.html"
    }
  },
  {
    "id": "covid-19",
    "name": "COVID-19 (SARS-CoV-2)",
    "medicalTerm": "Coronavirus Disease 2019",
    "icd10": "U07.1",
    "category": "Respiratory",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Prompt Assessment if Vulnerable",
    "readTime": "4 min read",
    "summary": "A systemic infection caused by the novel coronavirus SARS-CoV-2, affecting the upper/lower respiratory tract, vascular endothelium, and immune response.",
    "pathology": "Viral binding to ACE2 receptors leads to epithelial injury, microvascular microthrombosis, and hyperinflammatory cytokine cascades.",
    "hallmarkSymptoms": [
      "Fever, chills, and rigors",
      "Dry or productive cough",
      "Sudden partial or total loss of taste or smell (Ageusia / Anosmia)",
      "Fatigue, muscle or body aches",
      "Sore throat, nasal congestion, or rhinorrhea"
    ],
    "atypicalSigns": [
      "Gastrointestinal symptoms (nausea, vomiting, diarrhea)",
      "'Happy hypoxia' (silent hypoxia where oxygen saturation drops without severe dyspnea)",
      "Chilblains-like cutaneous lesions ('COVID toes')"
    ],
    "riskFactors": [
      "Age > 65",
      "Cardiovascular disease, diabetes, obesity (BMI > 30)",
      "Chronic kidney or liver disease",
      "Immunosuppressive medications or cancer therapy"
    ],
    "diagnosticTests": [
      "Rapid home antigen test (serial testing recommended 48h apart)",
      "RT-PCR molecular test for definitive detection",
      "Pulse oximetry monitoring at home"
    ],
    "selfCare": [
      "Isolate to protect household members and wear an N95/KN95 mask",
      "Regularly monitor resting oxygen saturation with a pulse oximeter",
      "Oral antiviral therapy (Paxlovid / Nirmatrelvir-Ritonavir) within 5 days for high-risk patients",
      "Rest, oral rehydration, and prone positioning (lying on stomach to improve oxygenation)"
    ],
    "redFlags": [
      "Pulse oximeter reading consistently below 94%",
      "Persistent pain or pressure in the chest",
      "New confusion, delirium, or difficulty waking up",
      "Pale, gray, or blue-colored skin, lips, or nail beds"
    ],
    "askDoctor": [
      "Am I eligible for Paxlovid or other oral antivirals within the 5-day window?",
      "How many times a day should I record my pulse oximeter readings?",
      "What criteria signal that I need emergency room evaluation?"
    ],
    "source": {
      "organization": "World Health Organization / CDC",
      "title": "Coronavirus Disease (COVID-19)",
      "url": "https://www.cdc.gov/coronavirus/2019-ncov/index.html"
    }
  },
  {
    "id": "copd",
    "name": "Chronic Obstructive Pulmonary Disease (COPD)",
    "medicalTerm": "Emphysema & Chronic Bronchitis",
    "icd10": "J44.9",
    "category": "Respiratory",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Specialist Management (Urgent during flares)",
    "readTime": "5 min read",
    "summary": "A progressive, life-threatening lung disease causing long-term breathing difficulty and persistent airflow limitation.",
    "pathology": "Chronic inhalation of noxious particles damages alveolar elasticity (emphysema) and triggers chronic airway mucus hypersecretion (chronic bronchitis).",
    "hallmarkSymptoms": [
      "Chronic and progressive shortness of breath, initially on exertion",
      "Daily chronic cough producing mucus/phlegm",
      "Frequent respiratory infections in winter months",
      "Audible wheezing and chest tightness",
      "Fatigue and unintentional weight loss"
    ],
    "atypicalSigns": [
      "Barrel chest configuration from chronic air trapping",
      "Pursed-lip breathing and leaning forward (tripod position)",
      "Morning headaches from nighttime carbon dioxide retention"
    ],
    "riskFactors": [
      "Long-term cigarette and tobacco smoking (> 85% of cases)",
      "Occupational exposure to chemical fumes and dusts",
      "Secondhand smoke exposure",
      "Alpha-1 antitrypsin genetic deficiency"
    ],
    "diagnosticTests": [
      "Post-bronchodilator Spirometry (FEV1/FVC ratio < 0.70 confirms diagnosis)",
      "High-resolution CT scan of the thorax",
      "Arterial blood gas (ABG) analysis",
      "Alpha-1 antitrypsin serum screening"
    ],
    "selfCare": [
      "Absolute cessation of smoking (the only intervention that slows disease progression)",
      "Adherence to daily maintenance long-acting bronchodilators (LAMA / LABA)",
      "Annual influenza, pneumococcal, RSV, and COVID-19 vaccinations",
      "Pulmonary rehabilitation exercise training"
    ],
    "redFlags": [
      "Acute increase in sputum volume, purulence (green/dark), and severe breathlessness (COPD Exacerbation)",
      "Confusion, extreme somnolence (hypercapnic respiratory failure)",
      "Inability to catch breath even while resting in bed"
    ],
    "askDoctor": [
      "What is my spirometry GOLD stage and FEV1 percentage?",
      "Is my inhaler regimen optimized with triple therapy (ICS/LABA/LAMA)?",
      "Am I a candidate for home supplemental oxygen therapy?"
    ],
    "source": {
      "organization": "Global Initiative for Chronic Obstructive Lung Disease (GOLD) / WHO",
      "title": "COPD Facts",
      "url": "https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)"
    }
  },
  {
    "id": "stroke-tia",
    "name": "Stroke & Transient Ischemic Attack (TIA)",
    "medicalTerm": "Cerebrovascular Accident",
    "icd10": "I63.9",
    "category": "Neurological",
    "organSystem": "Brain & Nervous System",
    "bodyPart": "head",
    "urgency": "emergency",
    "urgencyText": "IMMEDIATE EMERGENCY 911 / ER",
    "readTime": "4 min read",
    "summary": "A medical emergency caused by disrupted blood flow to the brain, either by arterial occlusion (ischemic) or vessel rupture (hemorrhagic).",
    "pathology": "Deprivation of oxygen and glucose triggers neuronal depolarization, cytotoxic edema, and rapid penumbral cell death within minutes ('Time is Brain').",
    "hallmarkSymptoms": [
      "F.A.S.T. signs: Facial drooping on one side",
      "Arm weakness or numbness (inability to raise both arms)",
      "Speech difficulty (slurred words or inability to speak/comprehend)",
      "Time: Call 911 immediately upon noticing any sign",
      "Sudden loss of balance, coordination, or unexplained dizziness"
    ],
    "atypicalSigns": [
      "Sudden onset of the 'worst headache of life' (Thunderclap - subarachnoid hemorrhage)",
      "Sudden complete loss of vision in one eye ('Amaurosis fugax')",
      "Sudden confusion, spatial neglect, or behavioral changes"
    ],
    "riskFactors": [
      "Uncontrolled hypertension",
      "Atrial fibrillation and heart disease",
      "Diabetes mellitus",
      "Hyperlipidemia and carotid atherosclerosis",
      "Cigarette smoking and heavy alcohol use"
    ],
    "diagnosticTests": [
      "Immediate non-contrast emergency head CT (differentiates hemorrhage from ischemia)",
      "CT or MR cerebral and carotid angiogram",
      "Diffusion-weighted brain MRI",
      "Blood glucose (to rule out severe hypoglycemia mimic)"
    ],
    "selfCare": [
      "DO NOT give aspirin before a hospital CT scan has ruled out brain hemorrhage",
      "DO NOT give food, drink, or oral pills (choking risk)",
      "Note the exact time symptoms began or when the person was last seen normal",
      "Call emergency medical services immediately"
    ],
    "redFlags": [
      "Any sudden neurological deficit that appears out of nowhere",
      "Loss of consciousness or seizures",
      "Sudden vomiting with severe explosive headache",
      "Total hemiplegia (paralysis of one side of the body)"
    ],
    "askDoctor": [
      "Was the event ischemic or hemorrhagic?",
      "What was the underlying source (carotid artery, atrial fibrillation, or small vessel disease)?",
      "What antiplatelet, anticoagulant, or statin protocol will prevent recurrence?"
    ],
    "source": {
      "organization": "American Stroke Association",
      "title": "Stroke Symptoms and Warning Signs",
      "url": "https://www.stroke.org/en/about-stroke/stroke-symptoms"
    }
  },
  {
    "id": "migraine",
    "name": "Migraine Headache",
    "medicalTerm": "Neurovascular Cephalea",
    "icd10": "G43.9",
    "category": "Neurological",
    "organSystem": "Brain & Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Neurologist",
    "readTime": "4 min read",
    "summary": "A complex neurological condition featuring moderate-to-severe throbbing headache attacks, sensory hypersensitivity, and autonomic dysfunction.",
    "pathology": "Cortical spreading depression and activation of the trigeminovascular system release calcitonin gene-related peptide (CGRP) and induce neurogenic inflammation.",
    "hallmarkSymptoms": [
      "Unilateral (one-sided) pulsating, throbbing head pain",
      "Photophobia (extreme sensitivity to light) and phonophobia (sensitivity to sound)",
      "Nausea and vomiting during peak pain",
      "Moderate to severe pain worsened by routine physical movement or bending",
      "Attacks typically lasting 4 to 72 hours if untreated"
    ],
    "atypicalSigns": [
      "Visual aura: shimmering zigzag lights (fortification spectra), blind spots (scotoma) 20-60 min before headache",
      "Sensory aura: numbness or tingling moving slowly across fingers or lips",
      "Prodrome symptoms: excessive yawning, neck stiffness, food cravings 24h prior"
    ],
    "riskFactors": [
      "Female sex (3x higher incidence due to estrogen fluctuations)",
      "Family history of migraine",
      "Irregular sleep patterns and skipped meals",
      "Stress let-down (weekend headaches)",
      "Sensory overstimulation (flickering screens, strong perfumes)"
    ],
    "diagnosticTests": [
      "Clinical diagnosis based on International Headache Society (ICHD-3) criteria",
      "Brain MRI or CT only if red flags are present (abnormal neurological exam, onset after age 50, systemic symptoms)"
    ],
    "selfCare": [
      "Rest in a dark, quiet, cool room at the earliest sign of an attack",
      "Apply cold compresses or ice packs to the forehead or base of skull",
      "Stay hydrated and avoid known dietary triggers (aged cheeses, nitrates, alcohol)",
      "Take abortive prescription triptans (Sumatriptan) or Gepants as soon as pain begins"
    ],
    "redFlags": [
      "Headache reaching maximum explosive intensity within 60 seconds ('Thunderclap')",
      "Headache accompanied by fever, stiff neck, and confusion (Meningitis sign)",
      "Headache following head trauma or with new onset weakness/numbness",
      "Progressive worsening daily headache in someone over age 50"
    ],
    "askDoctor": [
      "Am I taking acute pain relievers too often (> 10 days/month), risking medication overuse headache?",
      "Am I a candidate for daily preventive therapy (CGRP antagonists, beta-blockers, Topiramate)?",
      "Should I keep a migraine headache trigger diary?"
    ],
    "source": {
      "organization": "National Institute of Neurological Disorders and Stroke (NINDS)",
      "title": "Migraine Information",
      "url": "https://www.ninds.nih.gov/health-information/disorders/migraine"
    }
  },
  {
    "id": "tension-headache",
    "name": "Tension-Type Headache",
    "medicalTerm": "Tension Cephalea",
    "icd10": "G44.2",
    "category": "Neurological",
    "organSystem": "Brain & Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Self-Care & Primary Care",
    "readTime": "3 min read",
    "summary": "The most common primary headache disorder, presenting as a non-pulsatile, dull band of pressure around the forehead and temples.",
    "pathology": "Myofascial nociceptor sensitization in pericranial muscles, neck strain, and altered central pain processing without autonomic features.",
    "hallmarkSymptoms": [
      "Dull, aching, non-throbbing bilateral pressure or tightness ('vise-like band')",
      "Discomfort extending from forehead to occiput and cervical spine",
      "Tenderness in scalp, neck, and shoulder trapezius muscles",
      "Mild to moderate intensity that does not worsen with routine walking or stairs",
      "Absence of nausea or vomiting"
    ],
    "atypicalSigns": [
      "Difficulty concentrating due to persistent dull pressure",
      "Mild light or sound sensitivity (never both simultaneously)"
    ],
    "riskFactors": [
      "Chronic emotional or psychological stress",
      "Prolonged screen time and poor ergonomics",
      "Sleep deprivation or insomnia",
      "Dehydration and skipped meals",
      "Bruxism (teeth grinding or clenching)"
    ],
    "diagnosticTests": [
      "Clinical evaluation and physical palpation of pericranial muscles",
      "Rule out cervical spine pathology and refractory vision refraction errors"
    ],
    "selfCare": [
      "Take ergonomic breaks every 30 minutes during desk work",
      "Gentle neck and shoulder stretching and warm moist heat packs",
      "Maintain consistent sleep and meal schedules",
      "Judicious use of over-the-counter NSAIDs (Ibuprofen, Naproxen) no more than 2 days per week"
    ],
    "redFlags": [
      "Headache suddenly changes in quality, becoming sharp, unilateral, or throbbing",
      "Accompanied by focal neurological symptoms (vision loss, weakness, speech slurring)",
      "Awakens the patient from sleep in the middle of the night",
      "Accompanied by unexplained weight loss, scalp tenderness on combing, or jaw claudication in older adults (Temporal Arteritis)"
    ],
    "askDoctor": [
      "Could my headaches be linked to teeth clenching (TMJ) or cervical neck posture?",
      "How can I avoid medication overuse (rebound) headaches?",
      "Would physical therapy or stress management techniques help?"
    ],
    "source": {
      "organization": "MedlinePlus / Mayo Clinic",
      "title": "Tension Headache",
      "url": "https://medlineplus.gov/ency/article/000797.htm"
    }
  },
  {
    "id": "bells-palsy",
    "name": "Bell's Palsy",
    "medicalTerm": "Idiopathic Facial Nerve Paralysis",
    "icd10": "G51.0",
    "category": "Neurological",
    "organSystem": "Brain & Nervous System",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Urgent Medical Care (Within 24-48 Hours)",
    "readTime": "4 min read",
    "summary": "Sudden, temporary weakness or paralysis of facial muscles on one side, resulting from acute dysfunction of Cranial Nerve VII (Facial Nerve).",
    "pathology": "Viral-mediated inflammation and edema compress the facial nerve as it traverses the narrow fallopian canal of the temporal bone.",
    "hallmarkSymptoms": [
      "Rapid onset (over 24-72 hours) of total or partial paralysis on ONE side of the face",
      "Inability to close the eye on the affected side or blink",
      "Drooping mouth corner, drooling, and difficulty smiling or chewing",
      "Flattening of the nasolabial fold and forehead creases on affected side",
      "Hyperacusis (unusually loud sound perception in the ipsilateral ear)"
    ],
    "atypicalSigns": [
      "Loss of taste sensation on the anterior two-thirds of the tongue",
      "Pain around the jaw or behind the ear preceding the paralysis by 1-2 days",
      "Dry eye or excessive tearing (crocodile tears) due to lack of eyelid closure"
    ],
    "riskFactors": [
      "Pregnancy (especially third trimester)",
      "Diabetes mellitus",
      "Recent upper respiratory viral infection",
      "Herpes simplex virus (HSV-1) reactivation"
    ],
    "diagnosticTests": [
      "Clinical neurological examination (distinguishing peripheral CN VII palsy from central stroke: Bell's palsy affects the FOREHEAD, whereas stroke usually spares the forehead)",
      "Hearing evaluation",
      "Lyme disease serology in endemic areas"
    ],
    "selfCare": [
      "CRITICAL: Protect the cornea with artificial tears by day, lubricating ophthalmic ointment and eye patch taped shut at night",
      "Start oral corticosteroid therapy (Prednisone) within 72 hours as prescribed by physician",
      "Gentle facial massage and warm compresses to alleviate discomfort",
      "Most patients (approx. 85%) show spontaneous recovery within 3 weeks to 6 months"
    ],
    "redFlags": [
      "Arm or leg weakness on either side of the body (indicates STROKE, not Bell's palsy)",
      "Bilateral facial weakness",
      "Vesicular rash in the ear canal or palate (Ramsay Hunt syndrome / Herpes Zoster Oticus)",
      "No improvement in facial tone after 3 months"
    ],
    "askDoctor": [
      "Can you verify that this is a peripheral nerve issue and not a central stroke?",
      "Should I start oral corticosteroids (e.g. Prednisone) immediately today?",
      "What specific eye drops and nighttime taping should I use to protect my cornea?"
    ],
    "source": {
      "organization": "NINDS / NIH",
      "title": "Bell's Palsy Fact Sheet",
      "url": "https://www.ninds.nih.gov/health-information/disorders/bells-palsy"
    }
  },
  {
    "id": "gerd-acid-reflux",
    "name": "Gastroesophageal Reflux Disease (GERD)",
    "medicalTerm": "Acid Reflux / Reflux Esophagitis",
    "icd10": "K21.9",
    "category": "Gastrointestinal",
    "organSystem": "Digestive & Gut",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Gastroenterologist",
    "readTime": "4 min read",
    "summary": "A chronic digestive disease that occurs when stomach acid or bile flows back into the food pipe (esophagus), irritating the lining.",
    "pathology": "Transient or permanent lower esophageal sphincter (LES) incompetence permits caustic gastric contents to contact non-keratinized esophageal squamous epithelium.",
    "hallmarkSymptoms": [
      "Pyrosis: burning chest pain (heartburn) behind breastbone, usually after meals",
      "Acid regurgitation of sour or bitter fluid into mouth or throat",
      "Worsening symptoms when lying flat, reclining, or bending over",
      "Dysphagia: sensation of a lump in the throat (globus sensation)",
      "Water brash: sudden excess salivation"
    ],
    "atypicalSigns": [
      "Chronic nocturnal dry cough",
      "Morning hoarseness or laryngitis",
      "Adult-onset or worsening asthma",
      "Dental enamel erosion from regurgitated stomach acid"
    ],
    "riskFactors": [
      "Hiatal hernia",
      "Obesity and abdominal adiposity",
      "Pregnancy",
      "Delayed gastric emptying (gastroparesis)",
      "Trigger foods: chocolate, peppermint, fatty foods, caffeine, tomato sauce, alcohol"
    ],
    "diagnosticTests": [
      "Clinical trial of proton pump inhibitors (PPIs)",
      "Upper endoscopy (Esophagogastroduodenoscopy - EGD) to assess for Barrett's esophagus",
      "24-hour ambulatory esophageal pH impedance monitoring",
      "Esophageal manometry"
    ],
    "selfCare": [
      "Elevate the head of your bed 6 inches using bed risers (not just pillows)",
      "Avoid eating within 3 hours of going to sleep",
      "Eat smaller, more frequent meals rather than large heavy dinners",
      "Avoid tight belts and restrictive waistbands",
      "Stop smoking (nicotine relaxes the LES sphincter)"
    ],
    "redFlags": [
      "Difficulty or pain when swallowing food (Dysphagia/Odynophagia)",
      "Unexplained weight loss or loss of appetite",
      "Vomiting blood (coffee-ground emesis) or black tarry stools (Melena)",
      "Chest pain radiating into left arm or jaw (always rule out cardiac ischemia first!)"
    ],
    "askDoctor": [
      "Do I need an upper endoscopy to check for esophageal inflammation or Barrett's esophagus?",
      "Are my medications (PPIs or H2 blockers) appropriate for long-term use?",
      "Could lifestyle changes alone resolve my symptoms?"
    ],
    "source": {
      "organization": "NIDDK / NIH",
      "title": "Acid Reflux (GER & GERD) in Adults",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults"
    }
  },
  {
    "id": "appendicitis",
    "name": "Acute Appendicitis",
    "medicalTerm": "Inflammation of Vermiform Appendix",
    "icd10": "K35.80",
    "category": "Gastrointestinal",
    "organSystem": "Digestive & Gut",
    "bodyPart": "abdomen",
    "urgency": "emergency",
    "urgencyText": "SURGICAL EMERGENCY 911 / ER",
    "readTime": "4 min read",
    "summary": "An acute, rapidly progressive inflammation and bacterial infection of the appendix that requires emergency surgical removal to prevent rupture.",
    "pathology": "Luminal obstruction by a fecalith, lymphoid hyperplasia, or foreign body leads to mucosal ischemia, bacterial invasion, gangrene, and perforation.",
    "hallmarkSymptoms": [
      "Pain starting vaguely around the navel (periumbilical) then migrating to the LOWER RIGHT abdomen (McBurney's point)",
      "Sharp, localized pain that intensifies rapidly over 12 to 24 hours",
      "Pain dramatically worse with walking, jumping, coughing, or bumps during driving",
      "Low-grade fever rising progressively",
      "Complete loss of appetite (anorexia) followed by nausea and vomiting"
    ],
    "atypicalSigns": [
      "Pelvic appendix: pain during urination or rectal tenderness",
      "Retrocecal appendix: pain located in the right flank or back rather than anterior abdomen",
      "Diarrhea or tenesmus rather than constipation"
    ],
    "riskFactors": [
      "Ages 10 to 30 (peak incidence)",
      "Male slightly higher than female",
      "Low dietary fiber intake"
    ],
    "diagnosticTests": [
      "Abdominal contrast-enhanced CT scan (highest diagnostic accuracy)",
      "Abdominal ultrasound (first choice in children and pregnant women)",
      "Complete blood count (marked leukocytosis with elevated neutrophils)",
      "C-reactive protein (CRP) and urinalysis"
    ],
    "selfCare": [
      "DO NOT take laxatives, enemas, or heating pads (these can cause the appendix to RUPTURE!)",
      "DO NOT eat or drink anything (keep stomach empty for potential emergency surgery)",
      "Go immediately to the nearest Emergency Department"
    ],
    "redFlags": [
      "Sudden temporary relief of pain followed by widespread, rigid, agonizing abdominal pain (sign of APPENDIX RUPTURE & PERITONITIS)",
      "Involuntary abdominal wall guarding (board-like abdomen)",
      "High spiking fever with shaking chills",
      "Tachycardia and hypotension"
    ],
    "askDoctor": [
      "Is my abdominal CT scan conclusive for acute appendicitis?",
      "Is laparoscopic appendectomy indicated today?",
      "Are there any signs of perforation or peritonitis?"
    ],
    "source": {
      "organization": "MedlinePlus / NIDDK",
      "title": "Appendicitis Overview",
      "url": "https://medlineplus.gov/ency/article/000202.htm"
    }
  },
  {
    "id": "peptic-ulcer-disease",
    "name": "Peptic Ulcer Disease (PUD)",
    "medicalTerm": "Gastric & Duodenal Ulceration",
    "icd10": "K27.9",
    "category": "Gastrointestinal",
    "organSystem": "Digestive & Gut",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Medical Evaluation",
    "readTime": "4 min read",
    "summary": "Open sores that develop on the inside mucosal lining of the stomach (gastric) or the upper portion of the small intestine (duodenal).",
    "pathology": "Imbalance between mucosal defensive factors (mucus, bicarbonate, prostaglandins) and aggressive luminal factors (gastric acid, pepsin, H. pylori, NSAIDs).",
    "hallmarkSymptoms": [
      "Burning epigastric stomach pain between the breastbone and belly button",
      "Pain often worse when the stomach is empty (duodenal ulcers improve with food, gastric worsen)",
      "Pain that awakens patient during the middle of the night",
      "Feeling of fullness, bloating, or belching after small meals",
      "Mild nausea and heartburn"
    ],
    "atypicalSigns": [
      "Unexplained iron deficiency anemia from chronic occult bleeding",
      "Intolerance to fatty foods",
      "Loss of appetite and gradual weight loss"
    ],
    "riskFactors": [
      "Helicobacter pylori (H. pylori) bacterial infection",
      "Regular use of NSAIDs (Aspirin, Ibuprofen, Naproxen)",
      "Concomitant use of corticosteroids, anticoagulants, or SSRIs",
      "Tobacco smoking and heavy alcohol consumption"
    ],
    "diagnosticTests": [
      "Upper GI endoscopy with mucosal biopsy",
      "Urea breath test or stool antigen test for H. pylori",
      "Complete blood count to screen for chronic anemia",
      "Fecal occult blood test (FOBT)"
    ],
    "selfCare": [
      "Discontinue all non-steroidal anti-inflammatory drugs (NSAIDs) immediately",
      "Avoid cigarette smoking and alcohol which degrade mucosal barrier",
      "Adhere to the full 14-day quadruple eradication therapy if H. pylori is detected",
      "Take prescribed proton pump inhibitors before meals"
    ],
    "redFlags": [
      "Vomiting bright red blood or dark coffee-ground material (Upper GI Bleed)",
      "Stools that are jet black, sticky, and foul-smelling (Melena)",
      "Sudden, severe, knife-like abdominal pain with rigid abdomen (ULCER PERFORATION)",
      "Persistent vomiting and inability to keep fluids down"
    ],
    "askDoctor": [
      "Should I be tested for H. pylori infection today via breath or stool test?",
      "Do I need an upper endoscopy to confirm the ulcer is healing?",
      "What safe alternative pain reliever can I take instead of ibuprofen?"
    ],
    "source": {
      "organization": "NIDDK / NIH",
      "title": "Peptic Ulcers (Stomach Ulcers)",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/peptic-ulcers-stomach-ulcers"
    }
  },
  {
    "id": "irritable-bowel-syndrome",
    "name": "Irritable Bowel Syndrome (IBS)",
    "medicalTerm": "Functional Gastrointestinal Disorder",
    "icd10": "K58.0",
    "category": "Gastrointestinal",
    "organSystem": "Digestive & Gut",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Gastroenterologist",
    "readTime": "4 min read",
    "summary": "A common disorder of brain-gut interaction characterized by recurrent abdominal pain linked to changes in bowel frequency or stool form.",
    "pathology": "Visceral hypersensitivity, altered gut motility, intestinal microbiome dysbiosis, and dysregulated brain-gut axis communication.",
    "hallmarkSymptoms": [
      "Recurrent abdominal cramping or pain related to defecation",
      "Altered stool frequency (diarrhea in IBS-D, constipation in IBS-C, or mixed in IBS-M)",
      "Changes in stool appearance (lumpy/hard or loose/watery)",
      "Abdominal bloating and visible distension that worsens through the day",
      "Feeling of incomplete bowel evacuation (tenesmus)"
    ],
    "atypicalSigns": [
      "Mucus in the stool",
      "Lethargy and poor sleep quality",
      "Co-occurrence of fibromyalgia, chronic pelvic pain, or anxiety"
    ],
    "riskFactors": [
      "Female sex (2x more prevalent)",
      "Age under 50",
      "Severe prior gastroenteritis ('post-infectious IBS')",
      "Chronic psychological stress and history of adverse childhood events"
    ],
    "diagnosticTests": [
      "Rome IV Diagnostic Criteria assessment",
      "Celiac disease serology (IgA tissue transglutaminase) to rule out celiac",
      "Fecal calprotectin to rule out Inflammatory Bowel Disease (Crohn's/Colitis)",
      "Complete blood count and thyroid panel"
    ],
    "selfCare": [
      "Trial of a structured low-FODMAP diet under dietary supervision",
      "Soluble fiber supplementation (e.g. Psyllium husk)",
      "Regular moderate aerobic exercise and gut-directed hypnotherapy or CBT",
      "Identify personal food triggers using a 2-week symptom diary"
    ],
    "redFlags": [
      "Onset of symptoms after age 50",
      "Unintentional unexplained weight loss",
      "Nocturnal diarrhea that wakes you from sleep",
      "Rectal bleeding or dark blood in stool",
      "Family history of colorectal cancer or inflammatory bowel disease"
    ],
    "askDoctor": [
      "Does my clinical presentation meet the Rome IV criteria for IBS?",
      "Have organic causes like Celiac disease and IBD been ruled out with blood and stool tests?",
      "Would a low-FODMAP diet or gut-directed behavioral therapy be suitable for me?"
    ],
    "source": {
      "organization": "American College of Gastroenterology / NIDDK",
      "title": "Irritable Bowel Syndrome",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome"
    }
  },
  {
    "id": "gallstones-cholecystitis",
    "name": "Gallstones & Acute Cholecystitis",
    "medicalTerm": "Biliary Colic & Cholecystitis",
    "icd10": "K80.00",
    "category": "Gastrointestinal",
    "organSystem": "Digestive & Gut",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Urgent Care / Emergency Evaluation",
    "readTime": "4 min read",
    "summary": "Hardened deposits of digestive fluid (cholesterol or bilirubin) in the gallbladder that can block the cystic duct, causing severe pain and inflammation.",
    "pathology": "Supersaturated bile forms calculi; ductal impaction induces chemical irritation, mucosal ischemia, bacterial infection, and wall thickening.",
    "hallmarkSymptoms": [
      "Severe, steady, gripping pain in the RIGHT UPPER quadrant of the abdomen",
      "Pain radiating to the right shoulder blade or interscapular back",
      "Pain triggered 30 to 60 minutes after eating a fatty or greasy meal",
      "Nausea and vomiting during attack episodes",
      "Pain that lasts from 1 to several hours without easing"
    ],
    "atypicalSigns": [
      "Epigastric pain mimicking severe heart attack or acid reflux",
      "Murphy's sign: sharp catch in breath when doctor presses right upper ribs during deep inhale",
      "Fever and chills when infection develops (Acute Cholecystitis)"
    ],
    "riskFactors": [
      "The '5 Fs': Female, Forty, Fertile (multiparity), Fat (obesity), Fair",
      "Rapid weight loss or bariatric surgery",
      "Family history of gallbladder disease",
      "Sedentary lifestyle and high-cholesterol diet"
    ],
    "diagnosticTests": [
      "Abdominal ultrasound (gold standard for detecting gallstones and gallbladder wall thickening)",
      "HIDA scan (cholescintigraphy) to evaluate cystic duct patency",
      "Liver function panel (elevated bilirubin, alkaline phosphatase, ALT/AST)",
      "Complete blood count (elevated WBC count in cholecystitis)"
    ],
    "selfCare": [
      "Avoid all high-fat, greasy, deep-fried meals",
      "Do NOT consume gallbladder flushes or cleanses (danger of driving stones into common bile duct)",
      "Maintain steady, gradual weight management",
      "Seek immediate medical care for attacks lasting > 2 hours accompanied by fever"
    ],
    "redFlags": [
      "Jaundice: yellowing of the whites of eyes (sclera) or skin (Choledocholithiasis)",
      "Clay-colored pale stools and dark tea-colored urine",
      "High fever with shaking chills (danger of ascending cholangitis)",
      "Persistent intractable vomiting with severe dehydration"
    ],
    "askDoctor": [
      "Did the ultrasound show gallstones with or without acute gallbladder wall inflammation?",
      "Are my bile ducts clear, or is there a risk of pancreatitis?",
      "Is an elective laparoscopic cholecystectomy recommended to prevent recurrences?"
    ],
    "source": {
      "organization": "MedlinePlus / NIDDK",
      "title": "Gallstones",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones"
    }
  },
  {
    "id": "type-2-diabetes",
    "name": "Type 2 Diabetes Mellitus",
    "medicalTerm": "Non-Insulin Dependent Diabetes",
    "icd10": "E11.9",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Primary Care Consultation",
    "readTime": "5 min read",
    "summary": "A chronic metabolic disorder characterized by persistent hyperglycemia resulting from insulin resistance combined with relative insulin secretory deficiency.",
    "pathology": "Adipose tissue inflammation and receptor defects impair peripheral glucose uptake in muscle and liver, while pancreatic beta-cells progressively undergo exhaustion.",
    "hallmarkSymptoms": [
      "Polydipsia: unquenchable thirst despite drinking water",
      "Polyuria: frequent urination, especially waking multiple times at night (nocturia)",
      "Polyphagia: persistent hunger even after eating",
      "Chronic generalized fatigue and daytime sluggishness",
      "Blurred vision due to lens swelling from hyperosmolar fluids"
    ],
    "atypicalSigns": [
      "Frequent recurrent infections (yeast infections, UTIs, skin boils)",
      "Slow-healing cuts, sores, and abrasions",
      "Acanthosis nigricans: darkened, velvety skin patches in neck and armpit folds",
      "Peripheral neuropathy: tingling, numbness, or burning sensations in toes"
    ],
    "riskFactors": [
      "Overweight/obesity (especially central abdominal visceral fat)",
      "Physical inactivity (< 150 minutes of weekly activity)",
      "Age 45 or older",
      "Family history of type 2 diabetes in parent or sibling",
      "History of gestational diabetes or polycystic ovary syndrome (PCOS)"
    ],
    "diagnosticTests": [
      "Hemoglobin A1c (HbA1c >= 6.5% confirms diabetes; 5.7%-6.4% prediabetes)",
      "Fasting plasma glucose (FPG >= 126 mg/dL on two separate occasions)",
      "Oral glucose tolerance test (2-hour PG >= 200 mg/dL)",
      "Random plasma glucose >= 200 mg/dL with classic hyperglycemia symptoms"
    ],
    "selfCare": [
      "Nutritional management: focus on whole fibers, lean proteins, vegetables; eliminate sugar-sweetened beverages",
      "Engage in 150 min/week moderate aerobic activity plus 2 resistance training sessions",
      "Daily inspection of feet for blisters, cuts, or redness",
      "Self-monitoring of blood glucose as prescribed",
      "Adherence to prescribed Metformin, GLP-1 receptor agonists, or SGLT2 inhibitors"
    ],
    "redFlags": [
      "Hyperosmolar Hyperglycemic State (HHS): Blood sugar > 600 mg/dL, severe dry mouth, high fever, confusion, hallucinations",
      "Deep rapid breathing with fruity-smelling breath (Ketoacidosis)",
      "Severe hypoglycemia (< 55 mg/dL) causing shakiness, sweating, confusion, seizure",
      "Non-healing diabetic foot ulcer showing blackened necrotic tissue"
    ],
    "askDoctor": [
      "What is my baseline HbA1c, and what is my target level?",
      "Would a continuous glucose monitor (CGM) or fingerstick testing be better for me?",
      "Do I need annual diabetic eye exams (dilated retinal exam) and kidney microalbumin urine checks?"
    ],
    "source": {
      "organization": "American Diabetes Association / CDC",
      "title": "About Type 2 Diabetes",
      "url": "https://www.cdc.gov/diabetes/about/about-type-2-diabetes.html"
    }
  },
  {
    "id": "hypothyroidism",
    "name": "Hypothyroidism (Underactive Thyroid)",
    "medicalTerm": "Hashimoto's Thyroiditis / Thyroid Failure",
    "icd10": "E03.9",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Primary Care / Endocrinologist",
    "readTime": "4 min read",
    "summary": "A clinical state where the thyroid gland does not produce sufficient thyroid hormones (T3 and T4), slowing down the body's entire metabolic rate.",
    "pathology": "Most frequently caused by autoimmune destruction of thyroid follicles (Hashimoto's thyroiditis), leading to reduced mitochondrial respiration and basal cellular metabolism.",
    "hallmarkSymptoms": [
      "Persistent, debilitating fatigue and extreme sluggishness",
      "Cold intolerance (feeling freezing when others are comfortable)",
      "Unexplained modest weight gain (5-10 lbs, mostly fluid and salt)",
      "Chronic constipation and sluggish digestion",
      "Dry, coarse, pale skin and brittle fingernails"
    ],
    "atypicalSigns": [
      "Thinning hair and loss of the outer third of the eyebrows (Queen Anne's sign)",
      "Puffy face, especially periorbital edema around the eyes",
      "Slow heart rate (bradycardia)",
      "Depressed mood, impaired memory, and brain fog",
      "Menorrhagia (heavy, irregular menstrual cycles)"
    ],
    "riskFactors": [
      "Female sex (5-8x more common than men)",
      "Age over 60",
      "Personal or family history of autoimmune disorders (Type 1 diabetes, Celiac, Vitiligo)",
      "Prior radioactive iodine treatment or thyroidectomy surgery",
      "Postpartum state"
    ],
    "diagnosticTests": [
      "Serum Thyroid Stimulating Hormone (TSH - primary sensitive screening test; elevated in primary hypothyroidism)",
      "Free Thyroxine (Free T4 - low in overt hypothyroidism)",
      "Thyroid Peroxidase Antibodies (Anti-TPO - positive confirms Hashimoto's thyroiditis)",
      "Thyroid ultrasound if goiter or nodules are present"
    ],
    "selfCare": [
      "Take prescribed synthetic Levothyroxine (T4) on an empty stomach with a full glass of water, at least 30-60 minutes before breakfast",
      "Never take calcium, iron supplements, or antacids within 4 hours of thyroid medication (they bind and block absorption)",
      "Maintain regular balanced nutrition with adequate dietary iodine (iodized salt)",
      "Follow up for blood tests every 6 to 12 weeks during dose titration"
    ],
    "redFlags": [
      "Myxedema Coma: Hypothermia, severe bradycardia, profound confusion, hypoventilation, lethargy progressing to coma (RARE LIFE THREATENING EMERGENCY)",
      "Heart palpitations or chest pain after starting thyroid medication"
    ],
    "askDoctor": [
      "What is my TSH and Free T4 level, and what is the optimal target for my symptoms?",
      "Were thyroid peroxidase (TPO) antibodies tested to confirm Hashimoto's?",
      "How frequently should my hormone levels be re-evaluated to adjust my dosage?"
    ],
    "source": {
      "organization": "American Thyroid Association / MedlinePlus",
      "title": "Hypothyroidism (Underactive Thyroid)",
      "url": "https://medlineplus.gov/hypothyroidism.html"
    }
  },
  {
    "id": "hyperthyroidism",
    "name": "Hyperthyroidism & Graves' Disease",
    "medicalTerm": "Thyrotoxicosis",
    "icd10": "E05.0",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "whole-body",
    "urgency": "urgent",
    "urgencyText": "Prompt Endocrine Care",
    "readTime": "4 min read",
    "summary": "An overactive thyroid gland that produces and secretes excessive amounts of thyroid hormones, placing the body into a hypermetabolic state.",
    "pathology": "Autoantibodies bind to and stimulate the TSH receptor (Graves' disease) or autonomous toxic thyroid nodules produce unchecked T3/T4 secretion.",
    "hallmarkSymptoms": [
      "Rapid heart rate (resting tachycardia > 100 bpm) or palpitations",
      "Unintentional weight loss despite normal or increased appetite",
      "Heat intolerance and excessive perspiration",
      "Fine tremor in outstretched fingers and hands",
      "Nervousness, anxiety, irritability, and restlessness"
    ],
    "atypicalSigns": [
      "Graves' ophthalmopathy: bulging eyes (proptosis), gritty eye irritation, double vision",
      "Frequent loose bowel movements",
      "Oligomenorrhea: very light or absent menstrual periods",
      "Enlarged thyroid gland (visible smooth goiter in the neck)"
    ],
    "riskFactors": [
      "Female sex",
      "Family history of Graves' disease or thyroid disorders",
      "Smoking (greatly worsens Graves' eye disease)",
      "High dietary or medication iodine exposure"
    ],
    "diagnosticTests": [
      "Serum TSH (suppressed / undetectable < 0.01 mIU/L)",
      "Free T3 and Free T4 (significantly elevated)",
      "Thyroid-stimulating immunoglobulin (TSI) antibodies",
      "Radioactive iodine uptake and thyroid scan"
    ],
    "selfCare": [
      "Take prescribed antithyroid medications (Methimazole / PTU) or beta-blockers (Propranolol) as directed",
      "Avoid stimulants: stop caffeine, energy drinks, decongestants",
      "Wear sunglasses and use lubricating eye drops for eye dryness and sensitivity",
      "Ensure adequate caloric and calcium intake to prevent bone density loss"
    ],
    "redFlags": [
      "Thyroid Storm: High fever (> 103°F / 39.4°C), heart rate > 140 bpm, delirium, agitation, diarrhea, yellowing skin (MEDICAL EMERGENCY)",
      "New onset of irregular heart rhythm (Atrial Fibrillation)"
    ],
    "askDoctor": [
      "Is my hyperthyroidism caused by Graves' disease, a toxic nodule, or thyroiditis?",
      "What are the pros and cons of antithyroid medication vs radioactive iodine vs surgery for my case?",
      "Can a beta-blocker be prescribed to immediately calm my racing pulse and tremor?"
    ],
    "source": {
      "organization": "NIDDK / NIH",
      "title": "Hyperthyroidism (Overactive Thyroid)",
      "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/hyperthyroidism"
    }
  },
  {
    "id": "osteoarthritis",
    "name": "Osteoarthritis",
    "medicalTerm": "Degenerative Joint Disease",
    "icd10": "M19.90",
    "category": "Musculoskeletal",
    "organSystem": "Bones, Joints & Muscles",
    "bodyPart": "legs",
    "urgency": "routine",
    "urgencyText": "Primary Care / Physical Therapy",
    "readTime": "4 min read",
    "summary": "The most common form of arthritis, involving progressive biomechanical breakdown of articular cartilage, subchondral bone remodeling, and secondary synovitis.",
    "pathology": "Chondrocyte failure leads to cartilage fibrillation, joint space narrowing, subchondral sclerosis, and osteophyte (bone spur) formation.",
    "hallmarkSymptoms": [
      "Deep, aching joint pain that worsens after joint use and improves with rest",
      "Morning joint stiffness lasting LESS than 30 minutes",
      "Joint crepitus (grating, crunching, or cracking sensation on movement)",
      "Enlargement of joints with reduced range of motion",
      "Commonly affects weight-bearing joints (knees, hips) and distal hands"
    ],
    "atypicalSigns": [
      "Bony nodes on fingers: Heberden's nodes (distal joints) and Bouchard's nodes (middle joints)",
      "Joint giving way or feeling unstable during stair climbing",
      "Pain flare-ups during cold or damp weather changes"
    ],
    "riskFactors": [
      "Age over 50",
      "Female sex (especially postmenopausal)",
      "Obesity (exponentially increases mechanical load on knees/hips)",
      "Previous joint injury or ligament tear (ACL, meniscus)",
      "Occupational repetitive kneeling, squatting, or heavy lifting"
    ],
    "diagnosticTests": [
      "Weight-bearing plain radiography (X-rays showing joint space narrowing, osteophytes, subchondral sclerosis)",
      "Physical exam evaluating joint stability, effusion, and range of motion",
      "Synovial fluid analysis to exclude crystal arthropathy or infection if effusion is present"
    ],
    "selfCare": [
      "Low-impact aerobic exercise: swimming, water aerobics, stationary cycling, walking",
      "Quadriceps and core muscle strengthening under physical therapy guidance",
      "Weight loss (every 1 lb lost relieves 4 lbs of pressure from the knees)",
      "Topical NSAID gel (Diclofenac) applied to affected joint before systemic pills",
      "Supportive footwear with shock-absorbing insoles"
    ],
    "redFlags": [
      "Joint suddenly becomes hot, brightly red, exquisitely swollen, and cannot bear any weight (must exclude SEPTIC ARTHRITIS)",
      "Associated high fever or shaking chills",
      "Sudden 'locking' of the knee joint where it cannot be straightened at all"
    ],
    "askDoctor": [
      "Would physical therapy or a structured joint exercise program help reduce my pain?",
      "Am I a candidate for topical NSAIDs or intra-articular corticosteroid/viscosupplementation injections?",
      "At what stage should I consult an orthopedic surgeon regarding joint replacement?"
    ],
    "source": {
      "organization": "CDC / National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)",
      "title": "Osteoarthritis",
      "url": "https://www.niams.nih.gov/health-topics/osteoarthritis"
    }
  },
  {
    "id": "lumbar-sciatica",
    "name": "Lumbar Radiculopathy (Sciatica)",
    "medicalTerm": "Sciatic Nerve Compression",
    "icd10": "M54.30",
    "category": "Musculoskeletal",
    "organSystem": "Bones, Joints & Muscles",
    "bodyPart": "spine",
    "urgency": "routine",
    "urgencyText": "Primary Care / Physical Therapy",
    "readTime": "4 min read",
    "summary": "Pain radiating along the path of the sciatic nerve, typically branching from the lower back through the hip and buttock down one leg.",
    "pathology": "Herniation of a lumbar intervertebral disc (L4-L5 or L5-S1) or spinal canal stenosis causes mechanical compression and chemical irritation of the nerve root.",
    "hallmarkSymptoms": [
      "Sharp, burning, or electric-shock pain radiating down the buttock, posterior thigh, and calf",
      "Pain typically felt in ONE leg (unilateral)",
      "Pain aggravated by prolonged sitting, coughing, sneezing, or straining",
      "Numbness, pins-and-needles (paresthesia), or weakness in the affected foot or toes",
      "Positive straight-leg raise test (pain shooting below knee when leg is elevated straight)"
    ],
    "atypicalSigns": [
      "Difficulty standing on tiptoes (S1 nerve root) or lifting foot/toes (L5 nerve root)",
      "Diminished Achilles or patellar tendon reflex on neurological exam"
    ],
    "riskFactors": [
      "Age 30 to 50",
      "Sedentary occupations with prolonged static sitting",
      "Heavy lifting with spinal rotation and poor mechanics",
      "Diabetes (increases susceptibility to peripheral nerve damage)",
      "Obesity and pregnancy"
    ],
    "diagnosticTests": [
      "Comprehensive lower extremity neurological exam (motor strength, sensory dermatomes, deep tendon reflexes)",
      "Lumbar spine MRI (indicated if pain persists > 6 weeks, red flags exist, or surgery is contemplated)",
      "Electromyography (EMG) and nerve conduction studies"
    ],
    "selfCare": [
      "Avoid prolonged bed rest (remaining gently active promotes faster recovery than staying in bed)",
      "Apply cold packs for the first 48 hours, then switch to gentle heat therapy",
      "Perform gentle McKenzie extension exercises and hamstring stretches as tolerated",
      "Use ergonomic lumbar back support while sitting"
    ],
    "redFlags": [
      "CAUDA EQUINA SYNDROME (SURGICAL EMERGENCY): Loss of bowel or bladder control (incontinence or urinary retention)",
      "Saddle anesthesia: progressive numbness in groin, buttocks, and perineal area",
      "Sudden profound motor weakness ('Foot Drop' - unable to lift toes while walking)"
    ],
    "askDoctor": [
      "Does my neurological exam show any motor deficit or reflex changes?",
      "Would physical therapy focusing on core stabilization and nerve glides benefit me?",
      "What red flag symptoms require an immediate trip to the emergency room?"
    ],
    "source": {
      "organization": "NIAMS / MedlinePlus",
      "title": "Sciatica",
      "url": "https://medlineplus.gov/sciatica.html"
    }
  },
  {
    "id": "gout-arthritis",
    "name": "Gout & Hyperuricemia",
    "medicalTerm": "Crystal-Induced Arthropathy",
    "icd10": "M10.9",
    "category": "Musculoskeletal",
    "organSystem": "Bones, Joints & Muscles",
    "bodyPart": "legs",
    "urgency": "urgent",
    "urgencyText": "Urgent Care / Primary Care",
    "readTime": "4 min read",
    "summary": "A painful form of inflammatory arthritis caused by the deposition of monosodium urate monohydrate crystals in synovial fluid and joint tissues.",
    "pathology": "Chronic hyperuricemia (serum uric acid > 6.8 mg/dL) exceeds solubility limits, precipitating needle-like urate crystals that trigger intense neutrophil activation.",
    "hallmarkSymptoms": [
      "Sudden, excruciating, explosive joint pain that awakens the patient in the middle of the night",
      "Podagra: predominantly affects the first metatarsophalangeal (MTP) joint of the BIG TOE (> 50% of first flares)",
      "Affected joint is intensely swollen, shiny red or purplish, and hot to touch",
      "Extreme hyperalgesia: even the weight of a bedsheet on the toe causes agonizing pain",
      "Flares peak within 12-24 hours and gradually subside over 7-14 days"
    ],
    "atypicalSigns": [
      "Flares in knees, ankles, wrists, or elbows instead of the big toe",
      "Tophi: hard, chalky white deposits of urate crystals under skin around ears, elbows, or fingers in chronic cases",
      "Low-grade fever mimicking cellulitis"
    ],
    "riskFactors": [
      "High purine diet (red meat, organ meats, shellfish)",
      "Alcohol consumption (especially beer and spirits)",
      "High-fructose corn syrup sweetened beverages",
      "Male sex (postmenopausal women catch up)",
      "Use of thiazide or loop diuretics",
      "Chronic kidney disease and metabolic syndrome"
    ],
    "diagnosticTests": [
      "Arthrocentesis (joint aspiration): polarized light microscopy reveals needle-shaped, negatively birefringent monosodium urate crystals (DEFINITIVE)",
      "Serum uric acid level (may paradoxically be normal during an acute attack!)",
      "Dual-energy CT (DECT) to visualize urate crystal deposits",
      "Joint ultrasound"
    ],
    "selfCare": [
      "Elevate and rest the affected joint; apply ice packs wrapped in towels for 20 minutes at a time",
      "Start acute anti-inflammatory treatment (Colchicine, high-dose NSAID, or oral Prednisone) at the earliest sign of a flare",
      "Drink at least 2-3 liters of water daily to promote renal uric acid excretion",
      "Long-term: take prescribed urate-lowering therapy (Allopurinol or Febuxostat) consistently, aiming for target uric acid < 6.0 mg/dL"
    ],
    "redFlags": [
      "Suspected Septic Arthritis: Unable to distinguish from an infected joint; high fever, chills, open skin breakdown over joint",
      "Spreading warmth, redness, and red streaks up the leg",
      "Inability to bear any weight for several days"
    ],
    "askDoctor": [
      "Should joint fluid aspiration be performed to confirm urate crystals and rule out infection?",
      "What is my serum uric acid level, and what is my goal target (< 6.0 mg/dL)?",
      "When should I begin long-term preventive urate-lowering therapy (e.g. Allopurinol)?"
    ],
    "source": {
      "organization": "CDC / MedlinePlus",
      "title": "Gout",
      "url": "https://www.cdc.gov/arthritis/types/gout.html"
    }
  },
  {
    "id": "fibromyalgia",
    "name": "Fibromyalgia",
    "medicalTerm": "Central Sensitivity Syndrome",
    "icd10": "M79.7",
    "category": "Musculoskeletal",
    "organSystem": "Bones, Joints & Muscles",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Rheumatologist / Primary Care",
    "readTime": "4 min read",
    "summary": "A chronic non-articular disorder characterized by widespread musculoskeletal pain, central pain amplification, debilitating fatigue, and sleep disturbances.",
    "pathology": "Dysregulated central pain processing (nociplastic pain) characterized by elevated excitatory neurotransmitters (substance P, glutamate) and deficient descending pain-inhibitory pathways.",
    "hallmarkSymptoms": [
      "Widespread body pain present for at least 3 months, affecting both sides of the body, above and below the waist",
      "Unrefreshing sleep: waking up feeling exhausted even after 8-10 hours in bed",
      "Profound, relentless physical and mental fatigue",
      "Fibro fog: difficulties with working memory, attention, multitasking, and verbal fluency",
      "Diffuse muscle stiffness and tenderness in soft tissues"
    ],
    "atypicalSigns": [
      "Hyperalgesia (amplified pain to painful stimuli) and Allodynia (pain from normally painless touch)",
      "Restless legs syndrome during sleep",
      "Coexisting conditions: Irritable bowel syndrome, tension headaches, temporomandibular joint (TMJ) dysfunction, interstitial cystitis"
    ],
    "riskFactors": [
      "Female sex (significantly higher diagnosed ratio)",
      "Middle age (though can present across lifespan)",
      "Pre-existing rheumatoid arthritis, lupus, or ankylosing spondylitis",
      "Physical trauma, severe viral infection, or major psychological stressor triggering onset"
    ],
    "diagnosticTests": [
      "American College of Rheumatology (ACR) Widespread Pain Index (WPI) and Symptom Severity (SS) scale",
      "Extensive exclusionary laboratory testing (ESR, CRP, TSH, Vitamin D, Ferritin, CBC, ANA) to rule out thyroid failure, lupus, or polymyalgia rheumatica"
    ],
    "selfCare": [
      "Gentle, graded aerobic exercise (aquatic therapy, tai chi, walking, stationary cycling) - start slow and build incrementally",
      "Strict sleep hygiene protocol (consistent schedule, dark cool bedroom, no screens before bed)",
      "Cognitive Behavioral Therapy (CBT) for chronic pain coping strategies",
      "FDA-approved neuromodulating medications (Duloxetine, Milnacipran, Pregabalin) as prescribed"
    ],
    "redFlags": [
      "Rapidly progressive muscle weakness (e.g. unable to lift arms or get up from a chair - suggests polymyositis)",
      "Joints showing true inflammatory swelling, redness, and heat (suggests autoimmune inflammatory arthritis)",
      "New temporal headache with visual disturbance in patients over 50 (Temporal arteritis)"
    ],
    "askDoctor": [
      "Have other mimickers like hypothyroidism, rheumatoid arthritis, and polymyalgia rheumatica been excluded?",
      "Would a referral to physical therapy or pain-focused cognitive behavioral therapy be helpful?",
      "What medications can improve both my non-restorative sleep and pain sensitivity?"
    ],
    "source": {
      "organization": "NIAMS / NIH",
      "title": "Fibromyalgia",
      "url": "https://www.niams.nih.gov/health-topics/fibromyalgia"
    }
  },
  {
    "id": "eczema-atopic-dermatitis",
    "name": "Atopic Dermatitis (Eczema)",
    "medicalTerm": "Atopic Eczema",
    "icd10": "L20.9",
    "category": "Dermatology",
    "organSystem": "Skin & Cutaneous",
    "bodyPart": "skin",
    "urgency": "routine",
    "urgencyText": "Dermatology / Primary Care",
    "readTime": "4 min read",
    "summary": "A chronic, relapsing, pruritic inflammatory skin disease characterized by epidermal barrier dysfunction and immune hyperreactivity.",
    "pathology": "Genetic mutations in the epidermal structural protein filaggrin (FLG) lead to increased transepidermal water loss, antigen penetration, and Th2 cytokine immune response.",
    "hallmarkSymptoms": [
      "Intense, persistent pruritus (itching) - often described as 'an itch that rashes'",
      "Dry, erythematous (red), scaly patches of skin",
      "Classic distribution in flexural creases (antecubital elbow creases, popliteal back-of-knee folds, neck, wrists)",
      "Excoriations, weeping, and serous crusting during acute flares",
      "Lichenification: thickened, leathery skin with exaggerated markings from chronic scratching"
    ],
    "atypicalSigns": [
      "Dennie-Morgan infraorbital skin folds beneath lower eyelids",
      "Pityriasis alba (faint hypopigmented dry patches on face/arms)",
      "Keratosis pilaris ('chicken skin' bumps on outer arms)"
    ],
    "riskFactors": [
      "Personal or family history of the 'Atopic Triad' (eczema, allergic rhinitis, asthma)",
      "Living in dry, cold climates or urban environments",
      "Frequent hot showers with harsh alkaline bar soaps",
      "Contact with wool, synthetic fabrics, chemical detergents, and household dust mites"
    ],
    "diagnosticTests": [
      "Clinical dermatological examination and Hanifin & Rajka diagnostic criteria",
      "Patch testing if secondary allergic contact dermatitis is suspected",
      "Skin swab bacterial culture if weeping lesions suggest secondary Staph infection"
    ],
    "selfCare": [
      "The 'Soak and Seal' method: bathe in lukewarm water for 10 minutes, pat skin gently, and apply thick ceramide ointment within 3 minutes",
      "Switch strictly to fragrance-free, soap-free gentle liquid cleansers",
      "Keep fingernails trimmed short to minimize mechanical skin excoriation during sleep",
      "Apply prescribed topical corticosteroids or topical calcineurin inhibitors during active flares"
    ],
    "redFlags": [
      "Eczema Herpeticum: Rapid emergence of punched-out, painful, fluid-filled blisters or open sores with high fever (DERMATOLOGICAL EMERGENCY requiring oral/IV acyclovir)",
      "Spreading golden-yellow honey-colored crusts (Secondary Impetigo)",
      "Rapidly spreading heat, redness, swelling, and systemic fever (Cellulitis)"
    ],
    "askDoctor": [
      "Are my topical corticosteroids appropriately matched to body location (avoid high-potency steroids on face/groin)?",
      "Would non-steroidal topical agents (PDE4 inhibitors or calcineurin inhibitors) be appropriate for maintenance?",
      "Am I a candidate for targeted biologic therapy (Dupilumab) if topical care fails?"
    ],
    "source": {
      "organization": "National Eczema Association / MedlinePlus",
      "title": "Eczema",
      "url": "https://medlineplus.gov/eczema.html"
    }
  },
  {
    "id": "psoriasis",
    "name": "Plaque Psoriasis",
    "medicalTerm": "Psoriasis Vulgaris",
    "icd10": "L40.0",
    "category": "Dermatology",
    "organSystem": "Skin & Cutaneous",
    "bodyPart": "skin",
    "urgency": "routine",
    "urgencyText": "Dermatologist Consultation",
    "readTime": "4 min read",
    "summary": "A chronic systemic immune-mediated inflammatory skin condition characterized by sharply demarcated erythematous plaques covered with silvery micaceous scales.",
    "pathology": "Dysregulated IL-23/IL-17 immune axis accelerates epidermal keratinocyte turnover from the usual 28-30 days to just 3-5 days, causing immature cell accumulation.",
    "hallmarkSymptoms": [
      "Well-demarcated raised red plaques covered with coarse, flaky, silvery-white scales",
      "Classic extensor surface distribution: outer elbows, front of knees, scalp, and lumbosacral back",
      "Auspitz sign: pinpoint droplet bleeding when scales are gently lifted or scraped off",
      "Koebner phenomenon: new psoriatic plaques developing at sites of skin trauma or friction",
      "Scalp psoriasis causing thick scaling and severe dandruff-like flaking"
    ],
    "atypicalSigns": [
      "Psoriatic nail changes: nail pitting (ice-pick depressions), oil drop discoloration, subungual hyperkeratosis, or onycholysis",
      "Joint stiffness and swelling (Psoriatic Arthritis) in up to 30% of patients"
    ],
    "riskFactors": [
      "Genetic predisposition (HLA-Cw6 association)",
      "Emotional stress and physical trauma",
      "Streptococcal pharyngeal infection (classic trigger for guttate psoriasis)",
      "Certain medications (beta-blockers, lithium, antimalarials, systemic steroid withdrawal)",
      "Tobacco smoking and heavy alcohol consumption"
    ],
    "diagnosticTests": [
      "Clinical visual inspection and dermoscopy by a dermatologist",
      "Skin punch biopsy in equivocal cases",
      "Screening questionnaires (PEST) for psoriatic arthritis",
      "Cardiovascular risk factor screening"
    ],
    "selfCare": [
      "Daily application of rich moisturizing ointments containing salicylic acid or urea to soften thick scales",
      "Topical prescription combinations: Vitamin D analogues (Calcipotriene) plus potent topical corticosteroids",
      "Controlled narrowband UVB phototherapy under medical supervision",
      "Avoid skin injuries, cuts, sunburns, and harsh scrubbing"
    ],
    "redFlags": [
      "Erythrodermic Psoriasis: Fiery red peeling rash covering > 90% of total body surface area with severe shivering and electrolyte imbalance (HOSPITAL EMERGENCY)",
      "Generalized Pustular Psoriasis: Sheets of sterile yellow pustules across the body with high spiking fever"
    ],
    "askDoctor": [
      "Does my nail pitting or morning stiffness indicate early psoriatic arthritis?",
      "What is my Body Surface Area (BSA) score, and would biologic therapy (IL-17, IL-23, TNF inhibitors) be appropriate?",
      "How can I rotate topical treatments to prevent corticosteroid skin atrophy?"
    ],
    "source": {
      "organization": "National Psoriasis Foundation / NIAMS",
      "title": "Psoriasis",
      "url": "https://www.niams.nih.gov/health-topics/psoriasis"
    }
  },
  {
    "id": "shingles-herpes-zoster",
    "name": "Shingles (Herpes Zoster)",
    "medicalTerm": "Varicella-Zoster Virus Reactivation",
    "icd10": "B02.9",
    "category": "Dermatology",
    "organSystem": "Skin & Cutaneous",
    "bodyPart": "skin",
    "urgency": "urgent",
    "urgencyText": "Urgent Medical Care (Within 72 Hours)",
    "readTime": "4 min read",
    "summary": "A painful, blistering viral skin eruption caused by the reactivation of dormant varicella-zoster virus (VZV) in cranial or dorsal root sensory ganglia.",
    "pathology": "Waning cellular immunity allows latent virus in sensory nerve root ganglia to replicate, travel anterograde along the peripheral nerve, and erupt in a single cutaneous dermatome.",
    "hallmarkSymptoms": [
      "Prodrome: burning, tingling, stinging, or hyperesthesia in a localized skin band 2-4 days BEFORE any rash appears",
      "Unilateral eruption of clustered erythematous papules that rapidly evolve into clear fluid-filled vesicles",
      "Strict dermatomal distribution: stops sharply at the anatomical midline of the body (e.g. half-belt around torso)",
      "Intense, deep neuralgic pain described as burning, stabbing, or electric shocks",
      "Blisters crust over within 7 to 10 days and usually clear in 2 to 4 weeks"
    ],
    "atypicalSigns": [
      "Hutchinson's sign: vesicles on the tip or side of the nose (indicates ophthalmic trigeminal nerve involvement risking vision loss!)",
      "Postherpetic Neuralgia (PHN): severe nerve pain persisting months or years after rash resolves"
    ],
    "riskFactors": [
      "Age > 50 (risk increases steeply with advancing decades)",
      "Prior childhood chickenpox infection",
      "Immunocompromised status (cancer therapy, HIV, organ transplant, immunosuppressants)",
      "Significant psychological or physical stress"
    ],
    "diagnosticTests": [
      "Clinical diagnosis based on distinctive unilateral dermatomal distribution",
      "VZV PCR from viral swab of vesicular fluid in atypical or immunocompromised presentations",
      "Slit-lamp ophthalmic examination if ophthalmic nerve is involved"
    ],
    "selfCare": [
      "CRITICAL: Begin prescription antiviral therapy (Valacyclovir, Acyclovir, or Famciclovir) within 72 hours of rash onset to shorten course and reduce PHN risk",
      "Keep the rash clean, dry, and loosely covered with non-stick sterile dressings to prevent transmission",
      "Avoid contact with pregnant women, newborns, and anyone who has never had chickenpox or the vaccine",
      "Apply cool calamine lotion or cool damp washcloths to soothe blister discomfort"
    ],
    "redFlags": [
      "Blisters near or affecting the EYE or forehead (Herpes Zoster Ophthalmicus - EMERGENCY RISK OF PERMANENT CORNEAL BLINDNESS)",
      "Facial paralysis with blisters inside the ear canal (Ramsay Hunt Syndrome)",
      "Disseminated shingles: rash spreading across multiple non-contiguous dermatomes (suggests severe immunosuppression)"
    ],
    "askDoctor": [
      "Can I start oral antiviral therapy (e.g. Valacyclovir) today within the 72-hour window?",
      "Is there any risk to my vision based on the rash location?",
      "What medications can be prescribed to manage acute neuropathic nerve pain (Gabapentin/Pregabalin)?"
    ],
    "source": {
      "organization": "CDC",
      "title": "About Shingles (Herpes Zoster)",
      "url": "https://www.cdc.gov/shingles/about/index.html"
    }
  },
  {
    "id": "cellulitis",
    "name": "Cellulitis",
    "medicalTerm": "Acute Bacterial Dermis & Subcutaneous Infection",
    "icd10": "L03.90",
    "category": "Dermatology",
    "organSystem": "Skin & Cutaneous",
    "bodyPart": "skin",
    "urgency": "urgent",
    "urgencyText": "Prompt Medical / ER Evaluation",
    "readTime": "4 min read",
    "summary": "An acute, spreading bacterial infection of the deep dermis and subcutaneous tissue, most commonly affecting the lower legs.",
    "pathology": "Bacterial entry (most commonly Streptococcus pyogenes or Staphylococcus aureus) through a disrupted epidermal barrier triggers intense neutrophil infiltration, edema, and tissue inflammation.",
    "hallmarkSymptoms": [
      "Rapidly spreading area of warm, bright red, swollen skin with ill-defined borders",
      "Skin feels hot and exquisitely tender to light pressure",
      "Noticeable swelling and stretched, tight appearance of the affected limb",
      "Peau d'orange: skin takes on a pitted dimpled texture resembling an orange peel due to edema",
      "Unilateral presentation (overwhelmingly affects ONE lower leg)"
    ],
    "atypicalSigns": [
      "Systemic symptoms: fever, chills, tachycardia, and malaise may precede skin changes",
      "Regional lymphadenopathy: swollen, tender lymph nodes in the groin or armpit",
      "Lymphangitis: red streaks traveling up the leg along lymphatic drainage pathways"
    ],
    "riskFactors": [
      "Breaks in the skin (cuts, athlete's foot tinea pedis, eczema, insect bites, ulcers)",
      "Chronic lymphedema or venous insufficiency with leg swelling",
      "Obesity",
      "Prior history of cellulitis (30% recurrence rate)",
      "Diabetes mellitus and peripheral vascular disease"
    ],
    "diagnosticTests": [
      "Clinical physical examination (drawing a surgical pen line around the red border to track spreading vs regression)",
      "Complete blood count and inflammatory markers (WBC, CRP)",
      "Blood cultures if high fever, rigors, or immunocompromised status exists",
      "Lower extremity venous ultrasound to exclude deep vein thrombosis (DVT) mimic"
    ],
    "selfCare": [
      "DO NOT delay medical assessment; systemic oral or IV antibiotics are mandatory",
      "Elevate the affected limb above the level of the heart to facilitate venous and lymphatic drainage",
      "Keep the area clean, protected, and dry",
      "Complete the full antibiotic course (typically 5 to 10 days) even if redness begins to recede"
    ],
    "redFlags": [
      "Rapidly advancing redness (> 1 inch per hour) despite starting antibiotics",
      "Severe pain out of proportion to physical exam, skin bullae, purple necrosis, or crackling air under skin ('Crepitus' - NECROTIZING FASCIITIS EMERGENCY)",
      "High fever, altered mental status, confusion, or systolic BP < 90 mmHg (Sepsis)"
    ],
    "askDoctor": [
      "What oral antibiotic covers Streptococcus and community-acquired MRSA for my infection?",
      "Should a pen line be marked on my leg to objectively monitor infection spread over the next 24 hours?",
      "How can I treat my underlying athlete's foot (tinea pedis) to prevent bacteria from entering again?"
    ],
    "source": {
      "organization": "CDC / MedlinePlus",
      "title": "Cellulitis",
      "url": "https://www.cdc.gov/groupastrep/diseases-public/cellulitis.html"
    }
  },
  {
    "id": "urinary-tract-infection",
    "name": "Urinary Tract Infection (UTI / Cystitis)",
    "medicalTerm": "Acute Bacterial Cystitis",
    "icd10": "N39.0",
    "category": "Urology",
    "organSystem": "Urinary & Renal",
    "bodyPart": "pelvis",
    "urgency": "urgent",
    "urgencyText": "Prompt Medical Evaluation",
    "readTime": "4 min read",
    "summary": "An infection in any part of the urinary system, most frequently the lower urinary tract (bladder and urethra) caused by ascending bacteria.",
    "pathology": "Uropathogenic Escherichia coli (UPEC) colonize the periurethral area, ascend the urethra, and adhere to uroepithelial umbrella cells via type 1 fimbriae, triggering inflammation.",
    "hallmarkSymptoms": [
      "Dysuria: sharp, burning or stinging sensation while urinating",
      "Urinary urgency: sudden, compelling urge to void that cannot be postponed",
      "Urinary frequency: passing frequent, abnormally small volumes of urine",
      "Suprapubic discomfort: pressure or dull aching pain in the lower midline abdomen",
      "Cloudy, murky, or strong foul-smelling urine"
    ],
    "atypicalSigns": [
      "Hematuria: pink, red, or cola-colored blood in the urine",
      "Frail elderly individuals may present WITHOUT urinary symptoms, instead developing acute confusion, delirium, or sudden unsteadiness and falls",
      "Mild low-grade fever"
    ],
    "riskFactors": [
      "Female anatomy (shorter urethra closer to anal canal)",
      "Sexual intercourse (increases bacterial introduction into urethra)",
      "Use of spermicides or diaphragms",
      "Postmenopausal estrogen depletion (atrophic urethritis)",
      "Urinary catheterization, urinary retention, or benign prostatic hyperplasia in men"
    ],
    "diagnosticTests": [
      "Urinalysis dipstick (positive for leukocyte esterase and nitrites)",
      "Urine microscopic examination (pyuria > 10 WBCs/hpf and bacteriuria)",
      "Urine culture and antimicrobial susceptibility testing (identifies organism and optimal antibiotic)"
    ],
    "selfCare": [
      "Seek medical assessment to obtain appropriate targeted antibacterial therapy",
      "Drink plenty of water to mechanically flush bacteria out of the urinary tract",
      "Urinate immediately following sexual intercourse",
      "Wipe strictly from front to back after bowel movements",
      "Over-the-counter Phenazopyridine (Azo) can provide temporary numbing relief of bladder burning (turns urine bright orange!)"
    ],
    "redFlags": [
      "Flank pain: dull or sharp aching in the lower back or side over the kidneys",
      "High fever (> 101°F / 38.3°C) with shaking chills (PYELONEPHRITIS - Kidney Infection)",
      "Nausea, vomiting, and inability to tolerate oral liquids or medications",
      "Symptoms in men, pregnant women, or immunocompromised individuals (complicated UTI)"
    ],
    "askDoctor": [
      "Will a clean-catch urine culture be sent to verify the antibiotic choice?",
      "How many days should I take my prescribed antibiotic (e.g. Nitrofurantoin, TMP-SMX, or Fosfomycin)?",
      "What warning signs indicate the infection has spread up toward my kidneys?"
    ],
    "source": {
      "organization": "NIDDK / CDC",
      "title": "Urinary Tract Infection",
      "url": "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults"
    }
  },
  {
    "id": "kidney-stones",
    "name": "Kidney Stones (Nephrolithiasis)",
    "medicalTerm": "Renal Calculi & Ureteral Colic",
    "icd10": "N20.0",
    "category": "Urology",
    "organSystem": "Urinary & Renal",
    "bodyPart": "pelvis",
    "urgency": "emergency",
    "urgencyText": "Emergency Evaluation for Severe Colic",
    "readTime": "4 min read",
    "summary": "Hard mineral and salt deposits that form inside the renal calyces and cause excruciating pain when passing through the narrow ureter.",
    "pathology": "Urine supersaturation with calcium oxalate, calcium phosphate, or uric acid leads to crystal nucleation, aggregation, and ureteral obstruction, generating acute hydronephrosis and capsular distension.",
    "hallmarkSymptoms": [
      "Severe, agonizing, colicky pain in the flank and back, directly below the ribs",
      "Pain waves that radiate toward the lower abdomen, groin, and testicle/labia",
      "Inability to find a comfortable position (patients pace, writhe, or constantly shift posture)",
      "Hematuria: pink, red, or brownish urine",
      "Nausea, retching, and vomiting triggered by visceral autonomic reflexes"
    ],
    "atypicalSigns": [
      "Urinary frequency, urgency, or burning when the stone lodges near the ureterovesical junction entering the bladder",
      "Difficulty passing urine (strangury)"
    ],
    "riskFactors": [
      "Chronic dehydration and low daily fluid intake",
      "High dietary sodium and animal protein consumption",
      "History of gout, hyperparathyroidism, or gastric bypass surgery",
      "Personal or family history of nephrolithiasis",
      "Living in warm, arid climates"
    ],
    "diagnosticTests": [
      "Non-contrast low-dose CT scan of abdomen and pelvis (gold standard - visualizes stone size and exact location)",
      "Renal ultrasound (safe in pregnancy and evaluates hydronephrosis)",
      "Urinalysis (RBCs, crystals, pH, rule out infection)",
      "Serum electrolytes, creatinine, calcium, and uric acid"
    ],
    "selfCare": [
      "Strain all urine through a stone strainer or coffee filter to catch passed stone fragments for laboratory chemical analysis",
      "Drink 2 to 3 liters of water daily to maintain dilute urine flow (if not contraindicated)",
      "Prescribed alpha-blockers (Tamsulosin) can help relax ureteral smooth muscle to aid stone passage",
      "Take prescribed NSAIDs (Ketorolac / Ibuprofen) which reduce renal capsular pressure"
    ],
    "redFlags": [
      "OBSTRUCTED INFECTED KIDNEY: High fever and chills with flank pain (SURGICAL UROLOGICAL EMERGENCY - risk of urosepsis)",
      "Anuria: total inability to pass urine (bilateral obstruction or solitary kidney)",
      "Intractable vomiting preventing any fluid intake"
    ],
    "askDoctor": [
      "What is the size and location of the stone on CT scan (stones < 5 mm typically pass spontaneously)?",
      "Are there signs of hydronephrosis or bacterial infection behind the stone?",
      "Am I a candidate for lithotripsy (ESWL) or ureteroscopy with laser fragment extraction?"
    ],
    "source": {
      "organization": "NIDDK / NIH",
      "title": "Kidney Stones",
      "url": "https://www.niddk.nih.gov/health-information/urologic-diseases/kidney-stones"
    }
  },
  {
    "id": "strep-throat",
    "name": "Streptococcal Pharyngitis (Strep Throat)",
    "medicalTerm": "Group A Streptococcal Tonsillopharyngitis",
    "icd10": "J02.0",
    "category": "Infectious",
    "organSystem": "Immune & Infections",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Same-Day Clinic Evaluation",
    "readTime": "3 min read",
    "summary": "A bacterial infection of the throat and tonsils caused by Streptococcus pyogenes (Group A Strep) requiring antibiotics to prevent acute rheumatic fever.",
    "pathology": "Bacterial pyrogenic exotoxins and streptolysins induce follicular tonsillitis, mucosal erythema, and exudative neutrophilic necrosis.",
    "hallmarkSymptoms": [
      "Sudden, severe sore throat that causes agonizing pain when swallowing (odynophagia)",
      "Fever typically >= 101°F (38.3°C)",
      "Swollen, brightly red tonsils often coated with white or yellow patches of exudate",
      "Tender, swollen anterior cervical lymph nodes in the front of the neck",
      "PETECHIAE: tiny red spots on the soft palate roof of the mouth"
    ],
    "atypicalSigns": [
      "ABSENCE of cough, rhinorrhea, or nasal congestion (presence of cough strongly points to a common cold virus instead!)",
      "Headache, nausea, and abdominal pain (especially in pediatric patients)",
      "Scarlatiniform rash: fine, sandpaper-like red body rash (Scarlet Fever)"
    ],
    "riskFactors": [
      "School-age children (5 to 15 years old) and their close contacts",
      "Winter and early spring seasons",
      "Crowded communal environments (classrooms, daycares, dormitories)"
    ],
    "diagnosticTests": [
      "Rapid Antigen Detection Test (RADT) throat swab (results in 10-15 minutes)",
      "Throat bacterial culture (gold standard to confirm negative rapid tests in children)",
      "Centor Clinical Score assessment (Fever, Tonsillar exudate, Tender anterior cervical nodes, Absence of cough)"
    ],
    "selfCare": [
      "Complete the entire 10-day prescribed course of oral Penicillin or Amoxicillin (even if symptoms vanish in 48 hours!)",
      "Replace your toothbrush 24-48 hours after starting antibiotics to prevent reinfection",
      "Gargle with warm salt water (1/2 tsp salt in 8 oz warm water) several times daily",
      "Sip cold liquids, ice chips, or warm broths to soothe swallowing discomfort"
    ],
    "redFlags": [
      "Peritonsillar Abscess (Quinsy): severe one-sided throat pain, 'hot potato' muffled voice, difficulty opening mouth (Trismus), and uvula pushed to one side",
      "Drooling, stridor, or difficulty breathing (Epiglottitis danger)",
      "Dark tea-colored urine 2 weeks later (Post-streptococcal glomerulonephritis)"
    ],
    "askDoctor": [
      "Does the rapid strep swab confirm Group A Streptococcus?",
      "What is the recommended antibiotic regimen (Amoxicillin, Penicillin, or Cephalosporin for penicillin-allergic patients)?",
      "When is it safe for my child to return to school without being contagious (usually 24 hours on antibiotics and fever-free)?"
    ],
    "source": {
      "organization": "CDC",
      "title": "Strep Throat Information",
      "url": "https://www.cdc.gov/groupastrep/diseases-public/strep-throat.html"
    }
  },
  {
    "id": "generalized-anxiety-disorder",
    "name": "Generalized Anxiety Disorder (GAD)",
    "medicalTerm": "Chronic Anxiety Neurosis",
    "icd10": "F41.1",
    "category": "Mental Health",
    "organSystem": "Mind & Mental Health",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Mental Health / Primary Care",
    "readTime": "4 min read",
    "summary": "Persistent, excessive, and unrealistic worry about everyday life events, work, health, and finances that is difficult to control.",
    "pathology": "Dysregulation of amygdala-prefrontal cortical circuits, altered GABAergic neurotransmission, and hyperactivity of the sympathetic autonomic nervous system.",
    "hallmarkSymptoms": [
      "Excessive, uncontrollable anxiety and worry occurring more days than not for at least 6 months",
      "Restlessness or feeling keyed up, on edge, or unable to relax",
      "Muscle tension, particularly in the neck, shoulders, and upper back",
      "Sleep disturbances: difficulty falling asleep due to racing thoughts, or restless unsatisfying sleep",
      "Chronic fatigue and exhaustion from hyperarousal"
    ],
    "atypicalSigns": [
      "Irritability and low frustration tolerance",
      "Difficulty concentrating or mind going blank",
      "Somatic physical symptoms: stomachaches, irritable bowel, frequent urination, sweating palms"
    ],
    "riskFactors": [
      "Female sex (twice as likely as men)",
      "Family history of anxiety or mood disorders",
      "Personality traits of neuroticism or behavioral inhibition",
      "Chronic physical medical illness",
      "Exposure to childhood trauma, abuse, or chronic major life stressors"
    ],
    "diagnosticTests": [
      "GAD-7 (Generalized Anxiety Disorder 7-item) standardized clinical scale",
      "DSM-5 diagnostic clinical evaluation",
      "Thyroid function test (TSH) to exclude hyperthyroidism",
      "Toxicology screen to rule out caffeine toxicity, stimulant use, or medication side effects"
    ],
    "selfCare": [
      "Cognitive Behavioral Therapy (CBT): identify and reframe cognitive distortions and catastrophizing",
      "Daily mindfulness meditation, progressive muscle relaxation, or slow diaphragmatic 4-7-8 breathing",
      "Gradually reduce or eliminate caffeine, energy drinks, and nicotine stimulants",
      "Regular moderate cardiovascular exercise (natural endorphin booster)",
      "Establish structured worry time (15 minutes daily dedicated to problem-solving rather than ruminating)"
    ],
    "redFlags": [
      "Active suicidal ideation or plans to harm oneself (CRITICAL: Call or text 988 Suicide & Crisis Lifeline immediately)",
      "Severe acute panic attacks causing derealization, chest pain, and hyperventilation",
      "Inability to care for oneself or carry out basic daily functions"
    ],
    "askDoctor": [
      "Would Cognitive Behavioral Therapy (CBT) with a licensed therapist be a good starting intervention for me?",
      "Would a first-line medication (SSRI like Sertraline/Escitalopram or SNRI like Duloxetine) help calm my persistent worry?",
      "How can we address my physical symptoms like muscle tension and insomnia?"
    ],
    "source": {
      "organization": "National Institute of Mental Health (NIMH)",
      "title": "Anxiety Disorders",
      "url": "https://www.nimh.nih.gov/health/topics/anxiety-disorders"
    }
  },
  {
    "id": "major-depressive-disorder",
    "name": "Major Depressive Disorder (Depression)",
    "medicalTerm": "Clinical Unipolar Depression",
    "icd10": "F32.9",
    "category": "Mental Health",
    "organSystem": "Mind & Mental Health",
    "bodyPart": "whole-body",
    "urgency": "urgent",
    "urgencyText": "Mental Health / Primary Care (Crisis if suicidal)",
    "readTime": "5 min read",
    "summary": "A common and serious mood disorder that negatively affects how you feel, think, and handle daily activities, lasting at least two consecutive weeks.",
    "pathology": "Multifactorial neurobiological disease involving monoaminergic neurotransmitter deficits (serotonin, norepinephrine, dopamine), hippocampal neuroplasticity reduction, and neuroinflammation.",
    "hallmarkSymptoms": [
      "Persistent feeling of sadness, emptiness, hopelessness, or tearfulness",
      "Anhedonia: markedly diminished interest or pleasure in almost all activities previously enjoyed",
      "Significant unintentional weight loss/gain or marked changes in appetite",
      "Insomnia (early morning awakening) or hypersomnia (sleeping 12+ hours)",
      "Psychomotor agitation or retardation noticeable by others",
      "Fatigue or loss of energy nearly every day"
    ],
    "atypicalSigns": [
      "Feelings of worthlessness or excessive, inappropriate guilt",
      "Diminished ability to think, concentrate, or make decisions ('brain fog')",
      "Unexplained somatic aches, joint pain, or gastrointestinal distress"
    ],
    "riskFactors": [
      "Personal or family history of major depression or bipolar disorder",
      "Major life transitions, bereavement, job loss, or trauma",
      "Chronic disabling medical conditions (cancer, stroke, chronic pain)",
      "Substance use disorders (alcohol, sedatives)"
    ],
    "diagnosticTests": [
      "PHQ-9 (Patient Health Questionnaire 9-item) depression severity scale",
      "DSM-5 clinical psychiatric evaluation",
      "Screening for bipolar disorder (MDQ) before prescribing antidepressants",
      "Complete metabolic panel, TSH, Vitamin B12, and Vitamin D levels"
    ],
    "selfCare": [
      "Break tasks into tiny manageable micro-steps rather than expecting full productivity",
      "Maintain a daily routine with consistent wake and sleep times",
      "Engage in gentle daily movement (even a 10-minute walk outdoors in morning daylight)",
      "Reach out to trusted friends, family, or support groups to combat isolation",
      "Engage consistently in psychotherapy (CBT, Interpersonal Therapy, or Acceptance and Commitment Therapy)"
    ],
    "redFlags": [
      "SUICIDAL THOUGHTS, INTENT, OR PLANS: Call/text 988 (USA/Canada) or 112/999/local emergency immediately",
      "Giving away possessions, saying final goodbyes, or purchasing means of self-harm",
      "Psychotic features: delusions of guilt, auditory hallucinations, or severe psychomotor catatonia"
    ],
    "askDoctor": [
      "What does my PHQ-9 score indicate about the severity of my depression?",
      "Would a combination of psychotherapy and an antidepressant (SSRI/SNRI/Bupropion) offer the highest recovery rate?",
      "What emergency resources and safety plan should I have in place if dark thoughts arise?"
    ],
    "source": {
      "organization": "NIMH / WHO",
      "title": "Depression",
      "url": "https://www.who.int/news-room/fact-sheets/detail/depression"
    }
  },
  {
    "id": "panic-disorder",
    "name": "Panic Disorder & Panic Attacks",
    "medicalTerm": "Episodic Paroxysmal Anxiety",
    "icd10": "F41.0",
    "category": "Mental Health",
    "organSystem": "Mind & Mental Health",
    "bodyPart": "whole-body",
    "urgency": "urgent",
    "urgencyText": "Medical Evaluation (To Rule Out Cardiac)",
    "readTime": "4 min read",
    "summary": "An anxiety disorder characterized by recurrent, unexpected panic attacks and persistent worry about experiencing subsequent attacks.",
    "pathology": "Hyper-reactive amygdala fear network triggers sudden, massive surges of epinephrine and norepinephrine in the absence of real external danger.",
    "hallmarkSymptoms": [
      "Sudden surge of intense fear or intense discomfort that peaks within minutes",
      "Palpitations, pounding heart, or accelerated heart rate",
      "Sweating, trembling, or shaking",
      "Sensations of shortness of breath, smothering, or choking",
      "Chest pain or discomfort mimicking an acute myocardial infarction",
      "Fear of losing control, 'going crazy', or dying"
    ],
    "atypicalSigns": [
      "Derealization (feelings of unreality) or depersonalization (being detached from oneself)",
      "Numbness or tingling sensations (paresthesias) in hands and mouth from hyperventilation",
      "Chills or sudden hot flushes"
    ],
    "riskFactors": [
      "Family history of panic disorder",
      "Major life stress or traumatic events",
      "Smoking or high caffeine consumption",
      "History of childhood physical or sexual abuse"
    ],
    "diagnosticTests": [
      "12-lead ECG and cardiac enzymes (CRITICAL: First panic attack must always have cardiac causes excluded)",
      "Thyroid stimulating hormone (TSH)",
      "Clinical assessment using DSM-5 Panic Disorder criteria"
    ],
    "selfCare": [
      "Practice 'Box Breathing': Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4",
      "Remind yourself: 'This is a panic attack. It is uncomfortable, but it is not dangerous, and it will peak and pass in 10 minutes'",
      "Use the 5-4-3-2-1 grounding technique: Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste",
      "Avoid caffeine, alcohol, and energy drinks which lower the panic threshold"
    ],
    "redFlags": [
      "Chest pain radiating to the jaw, neck, or left arm with shortness of breath (always treat as potential cardiac emergency until medically cleared)",
      "Loss of consciousness (syncope)",
      "Panic symptoms that do not subside after 20-30 minutes"
    ],
    "askDoctor": [
      "Has an ECG confirmed that my heart rhythm and conduction are completely normal?",
      "What strategies or medications (SSRIs, SNRIs) can prevent recurrent attacks?",
      "How does Panic-Focused CBT help re-train my body's false alarm response?"
    ],
    "source": {
      "organization": "NIMH / MedlinePlus",
      "title": "Panic Disorder",
      "url": "https://www.nimh.nih.gov/health/topics/panic-disorder"
    }
  },
  {
    "id": "allergic-rhinitis",
    "name": "Allergic Rhinitis (Hay Fever)",
    "medicalTerm": "Seasonal & Perennial Allergies",
    "icd10": "J30.9",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Self-Care & Primary Care",
    "readTime": "3 min read",
    "summary": "An IgE-mediated inflammatory condition of the nasal mucosa induced by airborne environmental allergen exposure.",
    "pathology": "Allergen cross-linking of specific IgE on nasal mast cells triggers immediate degranulation and release of histamine, leukotrienes, and prostaglandins.",
    "hallmarkSymptoms": [
      "Paroxysms of repetitive sneezing (often 5-10 times in a row)",
      "Clear, watery rhinorrhea (runny nose) and nasal congestion",
      "Intense itching of the nose, roof of the mouth, throat, and ears",
      "Bilateral itchy, red, watery eyes (allergic conjunctivitis)",
      "Post-nasal drip causing throat clearing and a dry nighttime cough"
    ],
    "atypicalSigns": [
      "Allergic shiners: dark bluish-purple circles under both eyes from venous pooling",
      "Allergic salute: transverse nasal crease across the bridge of the nose from upward rubbing",
      "Mouth breathing and fatigue from poor nasal airflow"
    ],
    "riskFactors": [
      "Family history of atopy (asthma, eczema, allergies)",
      "Exposure to pollen (trees in spring, grasses in summer, ragweed in autumn)",
      "Exposure to indoor perennial allergens (dust mites, pet dander, mold spores)",
      "Secondhand cigarette smoke exposure"
    ],
    "diagnosticTests": [
      "Clinical history correlating symptoms with seasonal or environmental exposures",
      "Allergy skin prick testing (SPT) to identify specific aeroallergen triggers",
      "Serum allergen-specific IgE blood test (ImmunoCAP)"
    ],
    "selfCare": [
      "Intranasal corticosteroid spray (Fluticasone / Budesonide) is the most effective first-line medication (use daily)",
      "Oral non-sedating second-generation antihistamines (Cetirizine, Fexofenadine, Loratadine)",
      "Nasal saline irrigation (Neti pot using sterile or distilled water only)",
      "Keep windows closed during high pollen days and run HEPA air purifiers in the bedroom"
    ],
    "redFlags": [
      "Unilateral nasal obstruction with foul discharge or bleeding (must rule out nasal polyps or foreign body)",
      "Severe facial pain, fever, and purulent green drainage lasting > 10 days (secondary bacterial sinusitis)",
      "Wheezing, shortness of breath, or asthma flares"
    ],
    "askDoctor": [
      "How should I properly aim my nasal steroid spray (aim toward the ear, not the nasal septum)?",
      "Am I a candidate for allergen immunotherapy (subcutaneous allergy shots or sublingual tablets)?",
      "Could my allergies be contributing to recurrent sinus or ear infections?"
    ],
    "source": {
      "organization": "MedlinePlus / ACAAI",
      "title": "Allergic Rhinitis",
      "url": "https://medlineplus.gov/allergy.html"
    }
  },
  {
    "id": "otitis-media",
    "name": "Acute Otitis Media (Middle Ear Infection)",
    "medicalTerm": "Tympanic Membrane Infection",
    "icd10": "H66.90",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinic Evaluation",
    "readTime": "3 min read",
    "summary": "An acute infection of the middle ear space behind the eardrum, characterized by rapid onset of pain and middle ear effusion.",
    "pathology": "Eustachian tube dysfunction following a viral upper respiratory cold traps fluid in the middle ear, allowing Streptococcus pneumoniae, H. influenzae, or viruses to proliferate.",
    "hallmarkSymptoms": [
      "Otalgia: sharp, throbbing, or deep aching ear pain",
      "Temporary conductive hearing loss or muffled sound perception in affected ear",
      "Feeling of fullness, pressure, or popping in the ear",
      "Fever (especially common in young children and toddlers)",
      "Tugging or pulling at the ear, irritability, and sleeplessness in infants"
    ],
    "atypicalSigns": [
      "Otorrhea: sudden drainage of clear, yellow, or bloody fluid from the ear canal (indicates eardrum perforation, which often brings sudden pain relief)",
      "Mild dizziness or unsteadiness"
    ],
    "riskFactors": [
      "Age 6 months to 2 years (shorter, more horizontal Eustachian tubes)",
      "Recent viral upper respiratory cold",
      "Daycare attendance and pacifier use",
      "Secondhand tobacco smoke exposure",
      "Lack of breastfeeding in infancy"
    ],
    "diagnosticTests": [
      "Pneumatic otoscopy (reveals bulging, erythematous, opaque tympanic membrane with impaired mobility)",
      "Tympanometry to objectively assess middle ear effusion"
    ],
    "selfCare": [
      "Adequate pain relief with oral Acetaminophen or Ibuprofen (essential first step!)",
      "Apply a warm compress or damp washcloth against the outside of the ear",
      "Many uncomplicated ear infections in older children resolve spontaneously ('watchful waiting' for 48h)",
      "If antibiotics (Amoxicillin) are prescribed, complete the full duration"
    ],
    "redFlags": [
      "Mastoiditis: Swelling, redness, and extreme tenderness BEHIND the ear over the bone, pushing the ear outward",
      "High fever with stiff neck, severe headache, or confusion",
      "Facial nerve weakness or drooping on the side of the ear infection"
    ],
    "askDoctor": [
      "Does the pneumatic otoscope show a bulging eardrum confirming acute bacterial infection?",
      "Is immediate antibiotic treatment recommended, or is 48-hour watchful observation appropriate?",
      "What should I do if fluid drains from the ear canal?"
    ],
    "source": {
      "organization": "CDC / MedlinePlus",
      "title": "Ear Infection (Otitis Media)",
      "url": "https://www.cdc.gov/antibiotic-use/ear-infection.html"
    }
  },
  {
    "id": "conjunctivitis-pink-eye",
    "name": "Conjunctivitis (Pink Eye)",
    "medicalTerm": "Inflammation of the Conjunctiva",
    "icd10": "H10.9",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Optometry",
    "readTime": "3 min read",
    "summary": "Inflammation or infection of the transparent membrane (conjunctiva) that lines the eyelid and covers the white part of the eyeball.",
    "pathology": "Viral (adenovirus), bacterial (Staph, Strep), or allergic stimuli cause conjunctival vascular dilation, hyperemia, and exudative discharge.",
    "hallmarkSymptoms": [
      "Redness or pink discoloration in the sclera (white part of one or both eyes)",
      "Discharge: watery clear discharge (viral/allergic) or thick yellow/green pus (bacterial)",
      "Crusting of eyelids or eyelashes overnight, making it difficult to open eyes in the morning",
      "Gritty, scratchy, or foreign-body sensation under the eyelid",
      "Mild swelling of the eyelids and watery tearing"
    ],
    "atypicalSigns": [
      "Preauricular lymphadenopathy: swollen, tender node in front of the ear (classic for viral adenoviral conjunctivitis)",
      "Severe bilateral itching and ropy mucus discharge (allergic conjunctivitis)"
    ],
    "riskFactors": [
      "Direct contact with an infected person's eye secretions or towels",
      "Contact lens wear (especially sleeping in lenses or poor lens hygiene)",
      "Recent viral upper respiratory infection (cold or adenovirus)",
      "Seasonal allergen exposure"
    ],
    "diagnosticTests": [
      "Slit-lamp examination by an eye care professional",
      "Visual acuity testing (normal visual acuity must be preserved in simple conjunctivitis)",
      "Fluorescein dye staining to rule out corneal abrasions, ulcers, or herpes keratitis"
    ],
    "selfCare": [
      "Discontinue wearing contact lenses immediately until eyes are fully healed",
      "Apply cool compresses (for viral/allergic) or warm moist compresses (for bacterial crusts) using separate clean cloths for each eye",
      "Use preservative-free artificial tears to soothe dryness and rinse allergens",
      "Wash hands frequently with soap and water; never share towels or pillowcases"
    ],
    "redFlags": [
      "Moderate to severe deep ocular pain (conjunctivitis causes discomfort/grittiness, NOT deep eyeball pain)",
      "Significant change or loss in visual acuity or blurred vision that does not clear with blinking",
      "Extreme photophobia (inability to look at light)",
      "Contact lens wearer presenting with red eye and corneal opacity (CORNEAL ULCER EMERGENCY)"
    ],
    "askDoctor": [
      "Is my conjunctivitis viral, bacterial, or allergic in nature?",
      "Are antibiotic drops indicated, or will it resolve on its own with supportive artificial tears?",
      "When is it safe for me to resume wearing contact lenses?"
    ],
    "source": {
      "organization": "CDC",
      "title": "Conjunctivitis (Pink Eye)",
      "url": "https://www.cdc.gov/conjunctivitis/about/index.html"
    }
  },
  {
    "id": "iron-deficiency-anemia",
    "name": "Iron-deficiency anemia",
    "medicalTerm": "Iron-deficiency anemia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of iron-deficiency anemia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "pale skin",
      "exertional breathlessness",
      "dizziness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out iron-deficiency anemia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "vitamin-b12-deficiency",
    "name": "Vitamin B12 deficiency",
    "medicalTerm": "Vitamin B12 deficiency",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood and nerves",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of vitamin b12 deficiency. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood and nerves system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "sore tongue",
      "tingling hands or feet",
      "balance difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out vitamin b12 deficiency?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "thalassemia",
    "name": "Thalassemia",
    "medicalTerm": "Thalassemia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of thalassemia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "pallor",
      "jaundice",
      "slow growth"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out thalassemia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sickle-cell-disease",
    "name": "Sickle cell disease",
    "medicalTerm": "Sickle cell disease",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of sickle cell disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Pain crises",
      "fatigue",
      "swollen hands and feet",
      "frequent infections"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out sickle cell disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hemophilia",
    "name": "Hemophilia",
    "medicalTerm": "Hemophilia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hemophilia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Prolonged bleeding",
      "large bruises",
      "painful swollen joints",
      "nosebleeds"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hemophilia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "von-willebrand-disease",
    "name": "Von Willebrand disease",
    "medicalTerm": "Von Willebrand disease",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of von willebrand disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Frequent nosebleeds",
      "easy bruising",
      "heavy periods",
      "prolonged bleeding after dental work"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out von willebrand disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "aplastic-anemia",
    "name": "Aplastic anemia",
    "medicalTerm": "Aplastic anemia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Bone marrow",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of aplastic anemia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bone marrow system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "recurrent infections",
      "easy bruising",
      "pallor"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out aplastic anemia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "immune-thrombocytopenia",
    "name": "Immune thrombocytopenia",
    "medicalTerm": "Immune thrombocytopenia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of immune thrombocytopenia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Petechiae",
      "easy bruising",
      "nosebleeds",
      "gum bleeding"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out immune thrombocytopenia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "neutropenia",
    "name": "Neutropenia",
    "medicalTerm": "Neutropenia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of neutropenia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Frequent infections",
      "mouth ulcers",
      "fever",
      "sore throat"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out neutropenia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "polycythemia-vera",
    "name": "Polycythemia vera",
    "medicalTerm": "Polycythemia vera",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of polycythemia vera. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Headache",
      "dizziness",
      "itching after warm bath",
      "burning hands or feet"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out polycythemia vera?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pulmonary-embolism",
    "name": "Pulmonary embolism",
    "medicalTerm": "Pulmonary embolism",
    "icd10": "",
    "category": "Vascular",
    "organSystem": "Lungs",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pulmonary embolism. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lungs system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden breathlessness",
      "sharp chest pain",
      "fast heartbeat",
      "lightheadedness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pulmonary embolism?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "peripheral-artery-disease",
    "name": "Peripheral artery disease",
    "medicalTerm": "Peripheral artery disease",
    "icd10": "",
    "category": "Vascular",
    "organSystem": "Leg arteries",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of peripheral artery disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the leg arteries system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Calf pain when walking",
      "cold feet",
      "leg weakness",
      "slow-healing sores"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out peripheral artery disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "varicose-veins",
    "name": "Varicose veins",
    "medicalTerm": "Varicose veins",
    "icd10": "",
    "category": "Vascular",
    "organSystem": "Leg veins",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of varicose veins. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the leg veins system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Twisted visible veins",
      "aching legs",
      "ankle swelling",
      "itching"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out varicose veins?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-venous-insufficiency",
    "name": "Chronic venous insufficiency",
    "medicalTerm": "Chronic venous insufficiency",
    "icd10": "",
    "category": "Vascular",
    "organSystem": "Leg veins",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chronic venous insufficiency. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the leg veins system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Leg heaviness",
      "ankle swelling",
      "brown skin changes",
      "venous ulcers"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chronic venous insufficiency?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lymphedema",
    "name": "Lymphedema",
    "medicalTerm": "Lymphedema",
    "icd10": "",
    "category": "Vascular",
    "organSystem": "Lymphatic system",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of lymphedema. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lymphatic system system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent limb swelling",
      "heaviness",
      "tight skin",
      "reduced range of motion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out lymphedema?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "raynaud-phenomenon",
    "name": "Raynaud phenomenon",
    "medicalTerm": "Raynaud phenomenon",
    "icd10": "",
    "category": "Vascular",
    "organSystem": "Blood vessels",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of raynaud phenomenon. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood vessels system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fingers change color in cold",
      "numbness",
      "tingling",
      "pain on rewarming"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out raynaud phenomenon?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "atrial-fibrillation",
    "name": "Atrial fibrillation",
    "medicalTerm": "Atrial fibrillation",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of atrial fibrillation. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Irregular heartbeat",
      "palpitations",
      "fatigue",
      "breathlessness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out atrial fibrillation?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "myocarditis",
    "name": "Myocarditis",
    "medicalTerm": "Myocarditis",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of myocarditis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Chest discomfort",
      "breathlessness",
      "fatigue",
      "palpitations"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out myocarditis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pericarditis",
    "name": "Pericarditis",
    "medicalTerm": "Pericarditis",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pericarditis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sharp chest pain",
      "worse lying flat",
      "relief leaning forward",
      "low fever"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pericarditis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "aortic-stenosis",
    "name": "Aortic stenosis",
    "medicalTerm": "Aortic stenosis",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of aortic stenosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Exertional breathlessness",
      "chest pain",
      "fainting",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out aortic stenosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "mitral-valve-prolapse",
    "name": "Mitral valve prolapse",
    "medicalTerm": "Mitral valve prolapse",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of mitral valve prolapse. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Palpitations",
      "chest discomfort",
      "dizziness",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out mitral valve prolapse?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cardiomyopathy",
    "name": "Cardiomyopathy",
    "medicalTerm": "Cardiomyopathy",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of cardiomyopathy. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Breathlessness",
      "fatigue",
      "leg swelling",
      "palpitations"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out cardiomyopathy?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "supraventricular-tachycardia",
    "name": "Supraventricular tachycardia",
    "medicalTerm": "Supraventricular tachycardia",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of supraventricular tachycardia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden racing heartbeat",
      "palpitations",
      "dizziness",
      "chest discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out supraventricular tachycardia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bradycardia",
    "name": "Bradycardia",
    "medicalTerm": "Bradycardia",
    "icd10": "",
    "category": "Cardiovascular",
    "organSystem": "Heart",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of bradycardia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the heart system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Slow pulse",
      "fatigue",
      "dizziness",
      "fainting"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out bradycardia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bronchiectasis",
    "name": "Bronchiectasis",
    "medicalTerm": "Bronchiectasis",
    "icd10": "",
    "category": "Respiratory",
    "organSystem": "Lungs",
    "bodyPart": "lungs",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of bronchiectasis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lungs system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Chronic productive cough",
      "frequent chest infections",
      "wheezing",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out bronchiectasis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pulmonary-fibrosis",
    "name": "Pulmonary fibrosis",
    "medicalTerm": "Pulmonary fibrosis",
    "icd10": "",
    "category": "Respiratory",
    "organSystem": "Lungs",
    "bodyPart": "lungs",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pulmonary fibrosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lungs system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Progressive breathlessness",
      "dry cough",
      "fatigue",
      "reduced exercise tolerance"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pulmonary fibrosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pneumothorax",
    "name": "Pneumothorax",
    "medicalTerm": "Pneumothorax",
    "icd10": "",
    "category": "Respiratory",
    "organSystem": "Lungs",
    "bodyPart": "lungs",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pneumothorax. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lungs system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden sharp chest pain",
      "sudden breathlessness",
      "rapid breathing",
      "one-sided discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pneumothorax?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pleural-effusion",
    "name": "Pleural effusion",
    "medicalTerm": "Pleural effusion",
    "icd10": "",
    "category": "Respiratory",
    "organSystem": "Pleura",
    "bodyPart": "lungs",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pleural effusion. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pleura system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Breathlessness",
      "pain with deep breathing",
      "dry cough",
      "reduced exercise tolerance"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pleural effusion?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sleep-apnea",
    "name": "Sleep apnea",
    "medicalTerm": "Sleep apnea",
    "icd10": "",
    "category": "Respiratory",
    "organSystem": "Upper airway",
    "bodyPart": "lungs",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of sleep apnea. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the upper airway system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Loud snoring",
      "witnessed breathing pauses",
      "daytime sleepiness",
      "morning headache"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out sleep apnea?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tuberculosis",
    "name": "Tuberculosis",
    "medicalTerm": "Tuberculosis",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Lungs",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of tuberculosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lungs system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Cough lasting weeks",
      "night sweats",
      "fever",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out tuberculosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sinusitis",
    "name": "Sinusitis",
    "medicalTerm": "Sinusitis",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Sinuses",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of sinusitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the sinuses system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Facial pressure",
      "blocked nose",
      "thick discharge",
      "reduced smell"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out sinusitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "otitis-externa",
    "name": "Otitis externa",
    "medicalTerm": "Otitis externa",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Ear canal",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of otitis externa. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the ear canal system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Ear itching",
      "pain when outer ear is moved",
      "discharge",
      "muffled hearing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out otitis externa?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "me-nie-re-disease",
    "name": "Ménière disease",
    "medicalTerm": "Ménière disease",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Inner ear",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of ménière disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the inner ear system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Episodes of vertigo",
      "fluctuating hearing loss",
      "tinnitus",
      "ear fullness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out ménière disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hearing-loss",
    "name": "Hearing loss",
    "medicalTerm": "Hearing loss",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Ear",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hearing loss. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the ear system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Difficulty following conversations",
      "asking for repetition",
      "increased device volume",
      "tinnitus"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hearing loss?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "glaucoma",
    "name": "Glaucoma",
    "medicalTerm": "Glaucoma",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Eyes",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of glaucoma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the eyes system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Gradual peripheral vision loss",
      "tunnel vision",
      "difficulty in dim light",
      "often no early symptoms"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out glaucoma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cataract",
    "name": "Cataract",
    "medicalTerm": "Cataract",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Lens",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of cataract. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lens system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Cloudy vision",
      "glare",
      "faded colors",
      "frequent prescription changes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out cataract?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "macular-degeneration",
    "name": "Macular degeneration",
    "medicalTerm": "Macular degeneration",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Retina",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of macular degeneration. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the retina system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Blurred central vision",
      "wavy straight lines",
      "difficulty reading",
      "need for brighter light"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out macular degeneration?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "conjunctivitis",
    "name": "Conjunctivitis",
    "medicalTerm": "Conjunctivitis",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Conjunctiva",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of conjunctivitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the conjunctiva system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Red eyes",
      "watery or sticky discharge",
      "itching",
      "gritty sensation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out conjunctivitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "uveitis",
    "name": "Uveitis",
    "medicalTerm": "Uveitis",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Eye",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of uveitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the eye system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Eye pain",
      "redness",
      "light sensitivity",
      "blurred vision"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out uveitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "retinal-detachment",
    "name": "Retinal detachment",
    "medicalTerm": "Retinal detachment",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Retina",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of retinal detachment. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the retina system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Flashes",
      "new floaters",
      "curtain-like shadow",
      "blurred vision"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out retinal detachment?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "diabetic-retinopathy",
    "name": "Diabetic retinopathy",
    "medicalTerm": "Diabetic retinopathy",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Retina",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of diabetic retinopathy. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the retina system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often no early symptoms",
      "blurred vision",
      "floaters",
      "dark spots"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out diabetic retinopathy?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cluster-headache",
    "name": "Cluster headache",
    "medicalTerm": "Cluster headache",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of cluster headache. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Severe one-sided eye pain",
      "tearing",
      "blocked nostril",
      "restlessness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out cluster headache?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "epilepsy",
    "name": "Epilepsy",
    "medicalTerm": "Epilepsy",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of epilepsy. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Repeated seizures",
      "staring spells",
      "jerking movements",
      "post-seizure confusion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out epilepsy?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "parkinson-disease",
    "name": "Parkinson disease",
    "medicalTerm": "Parkinson disease",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of parkinson disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Resting tremor",
      "slowness",
      "muscle stiffness",
      "balance changes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out parkinson disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "multiple-sclerosis",
    "name": "Multiple sclerosis",
    "medicalTerm": "Multiple sclerosis",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain and spinal cord",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of multiple sclerosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain and spinal cord system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Blurred vision",
      "numbness",
      "limb weakness",
      "balance problems"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out multiple sclerosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "alzheimer-disease",
    "name": "Alzheimer disease",
    "medicalTerm": "Alzheimer disease",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of alzheimer disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Progressive memory loss",
      "difficulty planning",
      "disorientation",
      "word-finding problems"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out alzheimer disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "stroke",
    "name": "Stroke",
    "medicalTerm": "Stroke",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of stroke. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden facial droop",
      "arm weakness",
      "speech difficulty",
      "sudden vision or balance problem"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out stroke?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bell-palsy",
    "name": "Bell palsy",
    "medicalTerm": "Bell palsy",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Facial nerve",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of bell palsy. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the facial nerve system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "One-sided facial weakness",
      "difficulty closing eye",
      "drooping mouth",
      "altered taste"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out bell palsy?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "guillain-barre-syndrome",
    "name": "Guillain-Barré syndrome",
    "medicalTerm": "Guillain-Barré syndrome",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Peripheral nerves",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of guillain-barré syndrome. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the peripheral nerves system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Tingling feet",
      "progressive weakness",
      "difficulty walking",
      "reduced reflexes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out guillain-barré syndrome?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "myasthenia-gravis",
    "name": "Myasthenia gravis",
    "medicalTerm": "Myasthenia gravis",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Neuromuscular junction",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of myasthenia gravis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the neuromuscular junction system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Drooping eyelids",
      "double vision",
      "fatigable weakness",
      "difficulty swallowing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out myasthenia gravis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "meningitis",
    "name": "Meningitis",
    "medicalTerm": "Meningitis",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Brain coverings",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of meningitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain coverings system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fever",
      "severe headache",
      "neck stiffness",
      "light sensitivity"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out meningitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "encephalitis",
    "name": "Encephalitis",
    "medicalTerm": "Encephalitis",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of encephalitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fever",
      "headache",
      "confusion",
      "seizures"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out encephalitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "depression",
    "name": "Depression",
    "medicalTerm": "Depression",
    "icd10": "",
    "category": "Mental health",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of depression. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent low mood",
      "loss of interest",
      "sleep changes",
      "low energy"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out depression?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bipolar-disorder",
    "name": "Bipolar disorder",
    "medicalTerm": "Bipolar disorder",
    "icd10": "",
    "category": "Mental health",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of bipolar disorder. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Depressive episodes",
      "elevated or irritable mood",
      "reduced need for sleep",
      "racing thoughts"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out bipolar disorder?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "obsessive-compulsive-disorder",
    "name": "Obsessive-compulsive disorder",
    "medicalTerm": "Obsessive-compulsive disorder",
    "icd10": "",
    "category": "Mental health",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of obsessive-compulsive disorder. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Intrusive thoughts",
      "repetitive checking",
      "cleaning rituals",
      "distress when rituals interrupted"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out obsessive-compulsive disorder?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ptsd",
    "name": "PTSD",
    "medicalTerm": "PTSD",
    "icd10": "",
    "category": "Mental health",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of ptsd. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Intrusive memories",
      "nightmares",
      "avoidance",
      "hypervigilance"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out ptsd?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "schizophrenia",
    "name": "Schizophrenia",
    "medicalTerm": "Schizophrenia",
    "icd10": "",
    "category": "Mental health",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of schizophrenia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Hallucinations",
      "delusions",
      "disorganized speech",
      "social withdrawal"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out schizophrenia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "adhd",
    "name": "ADHD",
    "medicalTerm": "ADHD",
    "icd10": "",
    "category": "Neurodevelopmental",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of adhd. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Inattention",
      "forgetfulness",
      "restlessness",
      "impulsivity"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out adhd?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "insomnia-disorder",
    "name": "Insomnia disorder",
    "medicalTerm": "Insomnia disorder",
    "icd10": "",
    "category": "Sleep",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of insomnia disorder. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Difficulty falling asleep",
      "repeated waking",
      "early waking",
      "daytime fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out insomnia disorder?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "graves-disease",
    "name": "Graves disease",
    "medicalTerm": "Graves disease",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Thyroid",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of graves disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the thyroid system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Palpitations",
      "weight loss",
      "sweating",
      "eye irritation or bulging"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out graves disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "type-1-diabetes",
    "name": "Type 1 diabetes",
    "medicalTerm": "Type 1 diabetes",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Pancreas",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of type 1 diabetes. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pancreas system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Increased thirst",
      "frequent urination",
      "weight loss",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out type 1 diabetes?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hypoglycemia",
    "name": "Hypoglycemia",
    "medicalTerm": "Hypoglycemia",
    "icd10": "",
    "category": "Metabolic",
    "organSystem": "Blood glucose",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hypoglycemia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood glucose system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sweating",
      "shakiness",
      "hunger",
      "confusion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hypoglycemia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pcos",
    "name": "PCOS",
    "medicalTerm": "PCOS",
    "icd10": "",
    "category": "Reproductive",
    "organSystem": "Ovaries",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pcos. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the ovaries system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Irregular periods",
      "excess facial hair",
      "acne",
      "difficulty conceiving"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pcos?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "endometriosis",
    "name": "Endometriosis",
    "medicalTerm": "Endometriosis",
    "icd10": "",
    "category": "Reproductive",
    "organSystem": "Pelvis",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of endometriosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pelvis system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Painful periods",
      "chronic pelvic pain",
      "pain during sex",
      "pain with bowel movements"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out endometriosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "uterine-fibroids",
    "name": "Uterine fibroids",
    "medicalTerm": "Uterine fibroids",
    "icd10": "",
    "category": "Reproductive",
    "organSystem": "Uterus",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of uterine fibroids. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the uterus system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Heavy periods",
      "pelvic pressure",
      "frequent urination",
      "constipation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out uterine fibroids?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ectopic-pregnancy",
    "name": "Ectopic pregnancy",
    "medicalTerm": "Ectopic pregnancy",
    "icd10": "",
    "category": "Reproductive",
    "organSystem": "Fallopian tube",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of ectopic pregnancy. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the fallopian tube system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "One-sided pelvic pain",
      "vaginal spotting",
      "shoulder-tip pain",
      "dizziness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out ectopic pregnancy?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "preeclampsia",
    "name": "Preeclampsia",
    "medicalTerm": "Preeclampsia",
    "icd10": "",
    "category": "Reproductive",
    "organSystem": "Pregnancy",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of preeclampsia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pregnancy system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "High blood pressure",
      "persistent headache",
      "visual changes",
      "upper abdominal pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out preeclampsia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pelvic-inflammatory-disease",
    "name": "Pelvic inflammatory disease",
    "medicalTerm": "Pelvic inflammatory disease",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Reproductive tract",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pelvic inflammatory disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the reproductive tract system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Lower abdominal pain",
      "unusual discharge",
      "pain during sex",
      "fever"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pelvic inflammatory disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "prostate-enlargement",
    "name": "Prostate enlargement",
    "medicalTerm": "Prostate enlargement",
    "icd10": "",
    "category": "Urology",
    "organSystem": "Prostate",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of prostate enlargement. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the prostate system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Nighttime urination",
      "weak stream",
      "hesitancy",
      "incomplete emptying"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out prostate enlargement?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "prostatitis",
    "name": "Prostatitis",
    "medicalTerm": "Prostatitis",
    "icd10": "",
    "category": "Urology",
    "organSystem": "Prostate",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of prostatitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the prostate system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Pelvic pain",
      "painful urination",
      "frequent urination",
      "pain with ejaculation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out prostatitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "testicular-torsion",
    "name": "Testicular torsion",
    "medicalTerm": "Testicular torsion",
    "icd10": "",
    "category": "Urology",
    "organSystem": "Testicle",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of testicular torsion. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the testicle system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden severe testicular pain",
      "scrotal swelling",
      "nausea",
      "high-riding testicle"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out testicular torsion?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "epididymitis",
    "name": "Epididymitis",
    "medicalTerm": "Epididymitis",
    "icd10": "",
    "category": "Urology",
    "organSystem": "Epididymis",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of epididymitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the epididymis system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Gradual testicular pain",
      "scrotal swelling",
      "painful urination",
      "fever"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out epididymitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-kidney-disease",
    "name": "Chronic kidney disease",
    "medicalTerm": "Chronic kidney disease",
    "icd10": "",
    "category": "Renal",
    "organSystem": "Kidneys",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chronic kidney disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the kidneys system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often no early symptoms",
      "fatigue",
      "ankle swelling",
      "foamy urine"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chronic kidney disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pyelonephritis",
    "name": "Pyelonephritis",
    "medicalTerm": "Pyelonephritis",
    "icd10": "",
    "category": "Renal",
    "organSystem": "Kidneys",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pyelonephritis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the kidneys system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fever",
      "chills",
      "flank pain",
      "painful urination"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pyelonephritis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "urinary-incontinence",
    "name": "Urinary incontinence",
    "medicalTerm": "Urinary incontinence",
    "icd10": "",
    "category": "Urology",
    "organSystem": "Bladder",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of urinary incontinence. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bladder system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Leakage with coughing",
      "sudden urgency",
      "frequent urination",
      "nighttime leakage"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out urinary incontinence?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gerd",
    "name": "GERD",
    "medicalTerm": "GERD",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Esophagus",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of gerd. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the esophagus system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Heartburn",
      "sour regurgitation",
      "symptoms after meals",
      "chronic cough"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out gerd?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gastritis",
    "name": "Gastritis",
    "medicalTerm": "Gastritis",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Stomach",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of gastritis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the stomach system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Upper abdominal discomfort",
      "nausea",
      "vomiting",
      "loss of appetite"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out gastritis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gallstones",
    "name": "Gallstones",
    "medicalTerm": "Gallstones",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Gallbladder",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of gallstones. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the gallbladder system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Right upper abdominal pain",
      "nausea",
      "pain after fatty meals",
      "back or shoulder pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out gallstones?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "acute-pancreatitis",
    "name": "Acute pancreatitis",
    "medicalTerm": "Acute pancreatitis",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Pancreas",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of acute pancreatitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pancreas system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Severe upper abdominal pain",
      "pain to back",
      "vomiting",
      "abdominal tenderness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out acute pancreatitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "crohn-disease",
    "name": "Crohn disease",
    "medicalTerm": "Crohn disease",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Intestine",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of crohn disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the intestine system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Chronic diarrhea",
      "abdominal cramps",
      "weight loss",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out crohn disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ulcerative-colitis",
    "name": "Ulcerative colitis",
    "medicalTerm": "Ulcerative colitis",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Colon",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of ulcerative colitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the colon system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bloody diarrhea",
      "urgency",
      "abdominal cramps",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out ulcerative colitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "celiac-disease",
    "name": "Celiac disease",
    "medicalTerm": "Celiac disease",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Small intestine",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of celiac disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the small intestine system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bloating",
      "diarrhea or constipation",
      "abdominal pain",
      "iron deficiency"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out celiac disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "diverticulitis",
    "name": "Diverticulitis",
    "medicalTerm": "Diverticulitis",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Colon",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of diverticulitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the colon system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Left lower abdominal pain",
      "fever",
      "constipation or diarrhea",
      "bloating"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out diverticulitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hemorrhoids",
    "name": "Hemorrhoids",
    "medicalTerm": "Hemorrhoids",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Rectum",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hemorrhoids. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the rectum system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bright red blood after stool",
      "anal itching",
      "swelling",
      "lump near anus"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hemorrhoids?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-a",
    "name": "Hepatitis A",
    "medicalTerm": "Hepatitis A",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Liver",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hepatitis a. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the liver system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "nausea",
      "abdominal discomfort",
      "dark urine or jaundice"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hepatitis a?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-b",
    "name": "Hepatitis B",
    "medicalTerm": "Hepatitis B",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Liver",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hepatitis b. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the liver system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often no symptoms",
      "fatigue",
      "joint pain",
      "dark urine or jaundice"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hepatitis b?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-c",
    "name": "Hepatitis C",
    "medicalTerm": "Hepatitis C",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Liver",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hepatitis c. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the liver system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often no symptoms",
      "fatigue",
      "joint pain",
      "abdominal discomfort",
      "jaundice later"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hepatitis c?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cirrhosis",
    "name": "Cirrhosis",
    "medicalTerm": "Cirrhosis",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Liver",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of cirrhosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the liver system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "easy bruising",
      "abdominal swelling",
      "jaundice"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out cirrhosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dengue",
    "name": "Dengue",
    "medicalTerm": "Dengue",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of dengue. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "High fever",
      "severe headache",
      "pain behind eyes",
      "muscle and joint pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out dengue?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "malaria",
    "name": "Malaria",
    "medicalTerm": "Malaria",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of malaria. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fever with chills",
      "sweating",
      "headache",
      "nausea"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out malaria?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "typhoid-fever",
    "name": "Typhoid fever",
    "medicalTerm": "Typhoid fever",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Digestive",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of typhoid fever. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the digestive system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sustained fever",
      "headache",
      "abdominal pain",
      "diarrhea or constipation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out typhoid fever?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chikungunya",
    "name": "Chikungunya",
    "medicalTerm": "Chikungunya",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Joints",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chikungunya. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the joints system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden fever",
      "severe joint pain",
      "muscle pain",
      "rash"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chikungunya?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "rabies",
    "name": "Rabies",
    "medicalTerm": "Rabies",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Nervous system",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of rabies. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the nervous system system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fever",
      "headache",
      "tingling at bite site",
      "difficulty swallowing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out rabies?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tetanus",
    "name": "Tetanus",
    "medicalTerm": "Tetanus",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Nervous system",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of tetanus. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the nervous system system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Jaw stiffness",
      "muscle spasms",
      "difficulty swallowing",
      "neck rigidity"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out tetanus?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "measles",
    "name": "Measles",
    "medicalTerm": "Measles",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Respiratory and skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of measles. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the respiratory and skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "High fever",
      "cough",
      "runny nose",
      "red eyes and rash"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out measles?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chickenpox",
    "name": "Chickenpox",
    "medicalTerm": "Chickenpox",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chickenpox. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Itchy blisters",
      "fever",
      "tiredness",
      "lesions in different stages"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chickenpox?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "shingles",
    "name": "Shingles",
    "medicalTerm": "Shingles",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Skin and nerves",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of shingles. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin and nerves system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "One-sided burning pain",
      "blistering rash",
      "tingling",
      "itching"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out shingles?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "scabies",
    "name": "Scabies",
    "medicalTerm": "Scabies",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of scabies. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Intense night itching",
      "small bumps",
      "burrow lines",
      "rash between fingers"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out scabies?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "eczema",
    "name": "Eczema",
    "medicalTerm": "Eczema",
    "icd10": "",
    "category": "Skin",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of eczema. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Itchy dry patches",
      "redness",
      "cracking",
      "sleep disturbance"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out eczema?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "acne-vulgaris",
    "name": "Acne vulgaris",
    "medicalTerm": "Acne vulgaris",
    "icd10": "",
    "category": "Skin",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of acne vulgaris. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Blackheads",
      "whiteheads",
      "inflamed pimples",
      "deep nodules"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out acne vulgaris?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "rheumatoid-arthritis",
    "name": "Rheumatoid arthritis",
    "medicalTerm": "Rheumatoid arthritis",
    "icd10": "",
    "category": "Autoimmune",
    "organSystem": "Joints",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of rheumatoid arthritis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the joints system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Symmetric swollen joints",
      "morning stiffness",
      "fatigue",
      "reduced grip"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out rheumatoid arthritis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gout",
    "name": "Gout",
    "medicalTerm": "Gout",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Joints",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of gout. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the joints system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden severe joint pain",
      "redness",
      "warmth",
      "swelling"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out gout?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "osteoporosis",
    "name": "Osteoporosis",
    "medicalTerm": "Osteoporosis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of osteoporosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bones system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often silent",
      "loss of height",
      "stooped posture",
      "fracture-related back pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out osteoporosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sciatica",
    "name": "Sciatica",
    "medicalTerm": "Sciatica",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Spinal nerves",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of sciatica. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the spinal nerves system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Pain from back to leg",
      "tingling",
      "numbness",
      "pain worse sitting"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out sciatica?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "carpal-tunnel-syndrome",
    "name": "Carpal tunnel syndrome",
    "medicalTerm": "Carpal tunnel syndrome",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Wrist and hand",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of carpal tunnel syndrome. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the wrist and hand system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Tingling thumb and fingers",
      "night numbness",
      "weak grip",
      "dropping objects"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out carpal tunnel syndrome?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "scoliosis",
    "name": "Scoliosis",
    "medicalTerm": "Scoliosis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Spine",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of scoliosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the spine system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Uneven shoulders",
      "prominent shoulder blade",
      "uneven waist",
      "back discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out scoliosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lupus",
    "name": "Lupus",
    "medicalTerm": "Lupus",
    "icd10": "",
    "category": "Autoimmune",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of lupus. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Joint pain",
      "fatigue",
      "sun-sensitive rash",
      "mouth ulcers"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out lupus?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sjogren-syndrome",
    "name": "Sjogren syndrome",
    "medicalTerm": "Sjogren syndrome",
    "icd10": "",
    "category": "Autoimmune",
    "organSystem": "Glands",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of sjogren syndrome. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the glands system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Dry eyes",
      "dry mouth",
      "difficulty swallowing dry foods",
      "dental cavities"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out sjogren syndrome?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "systemic-sclerosis",
    "name": "Systemic sclerosis",
    "medicalTerm": "Systemic sclerosis",
    "icd10": "",
    "category": "Autoimmune",
    "organSystem": "Connective tissue",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of systemic sclerosis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the connective tissue system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Raynaud symptoms",
      "tight skin",
      "reflux",
      "joint pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out systemic sclerosis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "osteomyelitis",
    "name": "Osteomyelitis",
    "medicalTerm": "Osteomyelitis",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Bone",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of osteomyelitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bone system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Localized bone pain",
      "swelling",
      "fever",
      "reduced limb movement"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out osteomyelitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tendinitis",
    "name": "Tendinitis",
    "medicalTerm": "Tendinitis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Tendons",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of tendinitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the tendons system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Localized tendon pain",
      "tenderness",
      "swelling",
      "pain with movement"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out tendinitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bursitis",
    "name": "Bursitis",
    "medicalTerm": "Bursitis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bursa",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of bursitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bursa system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Joint tenderness",
      "swelling",
      "pain with movement",
      "reduced range"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out bursitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "rotator-cuff-tear",
    "name": "Rotator cuff tear",
    "medicalTerm": "Rotator cuff tear",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Shoulder",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of rotator cuff tear. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the shoulder system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Shoulder pain",
      "night pain",
      "weakness",
      "difficulty lifting arm"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out rotator cuff tear?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "plantar-fasciitis",
    "name": "Plantar fasciitis",
    "medicalTerm": "Plantar fasciitis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Foot",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of plantar fasciitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the foot system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Heel pain on first steps",
      "tenderness",
      "pain after rest",
      "pain with standing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out plantar fasciitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "anaphylaxis",
    "name": "Anaphylaxis",
    "medicalTerm": "Anaphylaxis",
    "icd10": "",
    "category": "Allergic",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of anaphylaxis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden hives",
      "lip or tongue swelling",
      "wheezing",
      "dizziness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out anaphylaxis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "urticaria",
    "name": "Urticaria",
    "medicalTerm": "Urticaria",
    "icd10": "",
    "category": "Allergic",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of urticaria. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Raised itchy welts",
      "migrating rash",
      "swelling",
      "redness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out urticaria?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "food-allergy",
    "name": "Food allergy",
    "medicalTerm": "Food allergy",
    "icd10": "",
    "category": "Allergic",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of food allergy. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Hives",
      "lip swelling",
      "vomiting",
      "wheezing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out food allergy?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "vitamin-d-deficiency",
    "name": "Vitamin D deficiency",
    "medicalTerm": "Vitamin D deficiency",
    "icd10": "",
    "category": "Nutrition",
    "organSystem": "Bones",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of vitamin d deficiency. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bones system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bone aches",
      "muscle weakness",
      "falls",
      "delayed growth in children"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out vitamin d deficiency?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "folate-deficiency-anemia",
    "name": "Folate deficiency anemia",
    "medicalTerm": "Folate deficiency anemia",
    "icd10": "",
    "category": "Nutrition",
    "organSystem": "Blood",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of folate deficiency anemia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "pallor",
      "sore tongue",
      "breathlessness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out folate deficiency anemia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "obesity",
    "name": "Obesity",
    "medicalTerm": "Obesity",
    "icd10": "",
    "category": "Metabolic",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of obesity. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often no specific symptoms",
      "exertional breathlessness",
      "joint pain",
      "snoring"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out obesity?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "metabolic-syndrome",
    "name": "Metabolic syndrome",
    "medicalTerm": "Metabolic syndrome",
    "icd10": "",
    "category": "Metabolic",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of metabolic syndrome. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often silent",
      "increased waist",
      "high blood pressure",
      "abnormal glucose or lipids"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out metabolic syndrome?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "heat-exhaustion",
    "name": "Heat exhaustion",
    "medicalTerm": "Heat exhaustion",
    "icd10": "",
    "category": "Environmental",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of heat exhaustion. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Heavy sweating",
      "weakness",
      "dizziness",
      "nausea"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out heat exhaustion?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "heat-stroke",
    "name": "Heat stroke",
    "medicalTerm": "Heat stroke",
    "icd10": "",
    "category": "Environmental",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of heat stroke. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Very high temperature",
      "confusion",
      "hot skin",
      "rapid pulse"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out heat stroke?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dehydration",
    "name": "Dehydration",
    "medicalTerm": "Dehydration",
    "icd10": "",
    "category": "Metabolic",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of dehydration. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Thirst",
      "dark urine",
      "dry mouth",
      "dizziness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out dehydration?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "carbon-monoxide-poisoning",
    "name": "Carbon monoxide poisoning",
    "medicalTerm": "Carbon monoxide poisoning",
    "icd10": "",
    "category": "Toxicology",
    "organSystem": "Blood and brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of carbon monoxide poisoning. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood and brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Headache",
      "dizziness",
      "nausea",
      "confusion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out carbon monoxide poisoning?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lead-poisoning",
    "name": "Lead poisoning",
    "medicalTerm": "Lead poisoning",
    "icd10": "",
    "category": "Toxicology",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of lead poisoning. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Abdominal pain",
      "constipation",
      "headache",
      "learning changes in children"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out lead poisoning?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "snakebite-envenomation",
    "name": "Snakebite envenomation",
    "medicalTerm": "Snakebite envenomation",
    "icd10": "",
    "category": "Toxicology",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of snakebite envenomation. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bite-site pain",
      "swelling",
      "bruising",
      "bleeding or weakness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out snakebite envenomation?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "migraine-with-aura",
    "name": "Migraine with aura",
    "medicalTerm": "Migraine with aura",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of migraine with aura. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Flashing lights",
      "zigzag vision",
      "tingling",
      "headache may follow"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out migraine with aura?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "transient-ischemic-attack",
    "name": "Transient ischemic attack",
    "medicalTerm": "Transient ischemic attack",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of transient ischemic attack. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Brief facial droop",
      "temporary limb weakness",
      "speech difficulty",
      "temporary vision loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out transient ischemic attack?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "concussion",
    "name": "Concussion",
    "medicalTerm": "Concussion",
    "icd10": "",
    "category": "Injury",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of concussion. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Headache",
      "dizziness",
      "nausea",
      "memory difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out concussion?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "spinal-cord-compression",
    "name": "Spinal cord compression",
    "medicalTerm": "Spinal cord compression",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Spinal cord",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of spinal cord compression. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the spinal cord system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Back pain",
      "limb weakness",
      "numbness",
      "bladder or bowel changes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out spinal cord compression?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-fatigue-syndrome",
    "name": "Chronic fatigue syndrome",
    "medicalTerm": "Chronic fatigue syndrome",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chronic fatigue syndrome. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent fatigue",
      "post-exertional worsening",
      "unrefreshing sleep",
      "brain fog"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chronic fatigue syndrome?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "long-covid",
    "name": "Long COVID",
    "medicalTerm": "Long COVID",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Multiple systems",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of long covid. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the multiple systems system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "breathlessness",
      "brain fog",
      "altered smell or taste"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out long covid?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lactose-intolerance",
    "name": "Lactose intolerance",
    "medicalTerm": "Lactose intolerance",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Small intestine",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of lactose intolerance. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the small intestine system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bloating after dairy",
      "gas",
      "abdominal cramps",
      "loose stools"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out lactose intolerance?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-constipation",
    "name": "Chronic constipation",
    "medicalTerm": "Chronic constipation",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Colon",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chronic constipation. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the colon system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Hard stools",
      "straining",
      "infrequent bowel movements",
      "incomplete emptying"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chronic constipation?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-diarrhea",
    "name": "Chronic diarrhea",
    "medicalTerm": "Chronic diarrhea",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Intestine",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of chronic diarrhea. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the intestine system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Loose stools for weeks",
      "urgency",
      "cramps",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out chronic diarrhea?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "oral-thrush",
    "name": "Oral thrush",
    "medicalTerm": "Oral thrush",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Mouth",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of oral thrush. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the mouth system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "White patches",
      "mouth soreness",
      "cottony feeling",
      "pain swallowing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out oral thrush?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dental-abscess",
    "name": "Dental abscess",
    "medicalTerm": "Dental abscess",
    "icd10": "",
    "category": "Infectious",
    "organSystem": "Teeth",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of dental abscess. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the teeth system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Severe toothache",
      "gum swelling",
      "pus",
      "bad taste"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out dental abscess?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "periodontitis",
    "name": "Periodontitis",
    "medicalTerm": "Periodontitis",
    "icd10": "",
    "category": "Dental",
    "organSystem": "Gums",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of periodontitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the gums system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bleeding gums",
      "gum recession",
      "bad breath",
      "loose teeth"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out periodontitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "nasal-polyps",
    "name": "Nasal polyps",
    "medicalTerm": "Nasal polyps",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Nose",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of nasal polyps. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the nose system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent blockage",
      "reduced smell",
      "runny nose",
      "facial pressure"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out nasal polyps?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "laryngitis",
    "name": "Laryngitis",
    "medicalTerm": "Laryngitis",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Voice box",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of laryngitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the voice box system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Hoarse voice",
      "voice loss",
      "dry cough",
      "throat irritation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out laryngitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tinnitus",
    "name": "Tinnitus",
    "medicalTerm": "Tinnitus",
    "icd10": "",
    "category": "ENT",
    "organSystem": "Ear",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of tinnitus. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the ear system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Ringing",
      "buzzing",
      "sleep disruption",
      "concentration difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out tinnitus?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "blepharitis",
    "name": "Blepharitis",
    "medicalTerm": "Blepharitis",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Eyelids",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of blepharitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the eyelids system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Crusty eyelids",
      "itching",
      "burning",
      "gritty eyes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out blepharitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dry-eye-disease",
    "name": "Dry eye disease",
    "medicalTerm": "Dry eye disease",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Eyes",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of dry eye disease. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the eyes system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Burning",
      "gritty sensation",
      "redness",
      "fluctuating blur"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out dry eye disease?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "keratitis",
    "name": "Keratitis",
    "medicalTerm": "Keratitis",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Cornea",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of keratitis. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the cornea system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Eye pain",
      "redness",
      "light sensitivity",
      "blurred vision"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out keratitis?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "retinal-vein-occlusion",
    "name": "Retinal vein occlusion",
    "medicalTerm": "Retinal vein occlusion",
    "icd10": "",
    "category": "Eye",
    "organSystem": "Retina",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of retinal vein occlusion. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the retina system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Sudden painless blur",
      "floaters",
      "visual field loss",
      "one-eye symptoms"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out retinal vein occlusion?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "thyroid-nodule",
    "name": "Thyroid nodule",
    "medicalTerm": "Thyroid nodule",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Thyroid",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of thyroid nodule. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the thyroid system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Front-neck lump",
      "pressure",
      "hoarseness",
      "swallowing discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out thyroid nodule?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "adrenal-insufficiency",
    "name": "Adrenal insufficiency",
    "medicalTerm": "Adrenal insufficiency",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Adrenal glands",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of adrenal insufficiency. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the adrenal glands system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "weight loss",
      "low blood pressure",
      "salt craving"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out adrenal insufficiency?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cushing-syndrome",
    "name": "Cushing syndrome",
    "medicalTerm": "Cushing syndrome",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Adrenal/pituitary",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of cushing syndrome. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the adrenal/pituitary system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Truncal weight gain",
      "rounded face",
      "easy bruising",
      "muscle weakness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out cushing syndrome?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hyperparathyroidism",
    "name": "Hyperparathyroidism",
    "medicalTerm": "Hyperparathyroidism",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Parathyroid",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of hyperparathyroidism. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the parathyroid system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Kidney stones",
      "bone pain",
      "constipation",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out hyperparathyroidism?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gestational-diabetes",
    "name": "Gestational diabetes",
    "medicalTerm": "Gestational diabetes",
    "icd10": "",
    "category": "Endocrine",
    "organSystem": "Pregnancy",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of gestational diabetes. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pregnancy system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often silent",
      "thirst",
      "frequent urination",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out gestational diabetes?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "endometrial-cancer",
    "name": "Endometrial cancer",
    "medicalTerm": "Endometrial cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Uterus",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of endometrial cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the uterus system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bleeding after menopause",
      "irregular bleeding",
      "watery discharge",
      "pelvic discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out endometrial cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cervical-cancer",
    "name": "Cervical cancer",
    "medicalTerm": "Cervical cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Cervix",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of cervical cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the cervix system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bleeding after sex",
      "intermenstrual bleeding",
      "unusual discharge",
      "pelvic pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out cervical cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "breast-cancer",
    "name": "Breast cancer",
    "medicalTerm": "Breast cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Breast",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of breast cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the breast system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "New breast lump",
      "shape change",
      "skin dimpling",
      "nipple discharge"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out breast cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lung-cancer",
    "name": "Lung cancer",
    "medicalTerm": "Lung cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Lungs",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of lung cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lungs system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent cough",
      "coughing blood",
      "chest pain",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out lung cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "colorectal-cancer",
    "name": "Colorectal cancer",
    "medicalTerm": "Colorectal cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Colon and rectum",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of colorectal cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the colon and rectum system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Change in bowel habits",
      "blood in stool",
      "abdominal discomfort",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out colorectal cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "stomach-cancer",
    "name": "Stomach cancer",
    "medicalTerm": "Stomach cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Stomach",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of stomach cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the stomach system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent indigestion",
      "early fullness",
      "upper abdominal pain",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out stomach cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ovarian-cancer",
    "name": "Ovarian cancer",
    "medicalTerm": "Ovarian cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Ovaries",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of ovarian cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the ovaries system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent bloating",
      "pelvic pain",
      "early satiety",
      "urinary urgency"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out ovarian cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "prostate-cancer",
    "name": "Prostate cancer",
    "medicalTerm": "Prostate cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Prostate",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of prostate cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the prostate system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Often silent early",
      "weak stream",
      "blood in urine",
      "bone pain later"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out prostate cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bladder-cancer",
    "name": "Bladder cancer",
    "medicalTerm": "Bladder cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Bladder",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of bladder cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bladder system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Blood in urine",
      "frequent urination",
      "painful urination",
      "urgency"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out bladder cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "kidney-cancer",
    "name": "Kidney cancer",
    "medicalTerm": "Kidney cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Kidneys",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of kidney cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the kidneys system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Blood in urine",
      "flank pain",
      "weight loss",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out kidney cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "brain-tumor",
    "name": "Brain tumor",
    "medicalTerm": "Brain tumor",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Brain",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of brain tumor. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the brain system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Progressive headache",
      "seizures",
      "weakness",
      "vision or speech changes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out brain tumor?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lymphoma",
    "name": "Lymphoma",
    "medicalTerm": "Lymphoma",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Lymphatic system",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of lymphoma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lymphatic system system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Painless enlarged nodes",
      "fever",
      "night sweats",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out lymphoma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "leukemia",
    "name": "Leukemia",
    "medicalTerm": "Leukemia",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Blood and marrow",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of leukemia. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the blood and marrow system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Fatigue",
      "recurrent infections",
      "easy bruising",
      "bone pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out leukemia?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "melanoma",
    "name": "Melanoma",
    "medicalTerm": "Melanoma",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of melanoma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Changing mole",
      "irregular border",
      "varied colors",
      "itching or bleeding"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out melanoma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "osteosarcoma",
    "name": "Osteosarcoma",
    "medicalTerm": "Osteosarcoma",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Bone",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of osteosarcoma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bone system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Persistent bone pain",
      "swelling",
      "limp",
      "night pain"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out osteosarcoma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "testicular-cancer",
    "name": "Testicular cancer",
    "medicalTerm": "Testicular cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Testicle",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of testicular cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the testicle system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Painless lump",
      "testicle size change",
      "scrotal heaviness",
      "dull groin ache"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out testicular cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pancreatic-cancer",
    "name": "Pancreatic cancer",
    "medicalTerm": "Pancreatic cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Pancreas",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of pancreatic cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the pancreas system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Jaundice",
      "upper abdominal pain",
      "back pain",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out pancreatic cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "liver-cancer",
    "name": "Liver cancer",
    "medicalTerm": "Liver cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Liver",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of liver cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the liver system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Upper abdominal pain",
      "weight loss",
      "appetite loss",
      "jaundice"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out liver cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "esophageal-cancer",
    "name": "Esophageal cancer",
    "medicalTerm": "Esophageal cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Esophagus",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of esophageal cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the esophagus system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Progressive swallowing difficulty",
      "painful swallowing",
      "weight loss",
      "chest discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out esophageal cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "oral-cancer",
    "name": "Oral cancer",
    "medicalTerm": "Oral cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Mouth",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of oral cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the mouth system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Non-healing mouth ulcer",
      "red or white patch",
      "mouth pain",
      "swallowing difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out oral cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "thyroid-cancer",
    "name": "Thyroid cancer",
    "medicalTerm": "Thyroid cancer",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Thyroid",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of thyroid cancer. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the thyroid system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Neck lump",
      "hoarseness",
      "swallowing difficulty",
      "swollen neck nodes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out thyroid cancer?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "non-hodgkin-lymphoma",
    "name": "Non-Hodgkin lymphoma",
    "medicalTerm": "Non-Hodgkin lymphoma",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Lymphatic system",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of non-hodgkin lymphoma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the lymphatic system system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Painless nodes",
      "fever",
      "night sweats",
      "weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out non-hodgkin lymphoma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "multiple-myeloma",
    "name": "Multiple myeloma",
    "medicalTerm": "Multiple myeloma",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Bone marrow",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of multiple myeloma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the bone marrow system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Bone pain",
      "fatigue",
      "recurrent infections",
      "thirst or constipation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out multiple myeloma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "basal-cell-carcinoma",
    "name": "Basal cell carcinoma",
    "medicalTerm": "Basal cell carcinoma",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of basal cell carcinoma. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Pearly bump",
      "non-healing sore",
      "visible vessels",
      "bleeding lesion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out basal cell carcinoma?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "squamous-cell-carcinoma-of-skin",
    "name": "Squamous cell carcinoma of skin",
    "medicalTerm": "Squamous cell carcinoma of skin",
    "icd10": "",
    "category": "Cancer",
    "organSystem": "Skin",
    "bodyPart": "general",
    "urgency": "routine",
    "urgencyText": "Discuss with a healthcare professional",
    "readTime": "3 min read",
    "summary": "Educational overview of squamous cell carcinoma of skin. Symptoms and severity vary; persistent, worsening, or unexplained symptoms should be assessed by a qualified clinician.",
    "pathology": "This condition affects the skin system. Diagnosis depends on clinical history, examination, and appropriate investigations.",
    "hallmarkSymptoms": [
      "Firm red nodule",
      "scaly patch",
      "non-healing sore",
      "tender growth"
    ],
    "atypicalSigns": [
      "Symptoms may be mild or absent in early disease",
      "Presentation can vary with age and other health conditions",
      "Some features overlap with other conditions"
    ],
    "riskFactors": [
      "Personal or family medical history where relevant",
      "Age and underlying health conditions",
      "Environmental, infectious, lifestyle, or genetic factors depending on the condition"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Tests selected according to symptoms and suspected cause",
      "Laboratory tests or imaging when clinically indicated"
    ],
    "selfCare": [
      "Seek professional assessment for persistent or worsening symptoms",
      "Record symptom onset, duration, and possible triggers",
      "Do not change prescribed treatment without medical advice"
    ],
    "redFlags": [
      "Sudden severe or rapidly worsening symptoms",
      "Chest pain, severe breathlessness, fainting, or new confusion",
      "New weakness, speech difficulty, or loss of consciousness"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out squamous cell carcinoma of skin?",
      "Which symptoms should prompt urgent medical care?",
      "What follow-up or monitoring is appropriate?"
    ],
    "source": {
      "organization": "MedlinePlus, U.S. National Library of Medicine",
      "title": "MedlinePlus health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  }
];



// Additional curated educational entries. Review condition-specific content with
// qualified clinical reviewers before using this library for patient-care decisions.
const additionalDiseaseEntries = [
  {
    "id": "anemia-iron-deficiency",
    "name": "Iron Deficiency Anemia",
    "medicalTerm": "Iron deficiency",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Iron Deficiency Anemia is a iron deficiency-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and reduced exercise tolerance",
      "pale skin or inner eyelids",
      "shortness of breath with exertion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Iron Deficiency Anemia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sickle-cell-disease",
    "name": "Sickle Cell Disease",
    "medicalTerm": "Sickle cell anemia",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Sickle Cell Disease is a sickle cell anemia-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "episodes of severe bone or joint pain",
      "fatigue from chronic anemia",
      "swelling of hands and feet"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Sickle Cell Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "thalassemia",
    "name": "Thalassemia",
    "medicalTerm": "Inherited hemoglobin disorder",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Thalassemia is a inherited hemoglobin disorder-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and weakness",
      "pallor or jaundice",
      "poor growth in children"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Thalassemia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "vitamin-b12-deficiency",
    "name": "Vitamin B12 Deficiency",
    "medicalTerm": "Cobalamin deficiency",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "legs",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Vitamin B12 Deficiency is a cobalamin deficiency-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and weakness",
      "numbness or tingling in hands and feet",
      "balance or memory changes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Vitamin B12 Deficiency?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "folate-deficiency",
    "name": "Folate Deficiency Anemia",
    "medicalTerm": "Folate deficiency",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Folate Deficiency Anemia is a folate deficiency-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and weakness",
      "sore tongue or mouth ulcers",
      "pallor"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Folate Deficiency Anemia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "thrombocytopenia",
    "name": "Thrombocytopenia",
    "medicalTerm": "Low platelet count",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "skin",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Thrombocytopenia is a low platelet count-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "easy bruising or petechiae",
      "nosebleeds or bleeding gums",
      "prolonged bleeding from cuts"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Thrombocytopenia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hemophilia",
    "name": "Hemophilia",
    "medicalTerm": "Inherited clotting-factor deficiency",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "legs",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hemophilia is a inherited clotting-factor deficiency-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "prolonged bleeding after injury",
      "recurrent joint swelling or pain",
      "easy bruising"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hemophilia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "leukemia",
    "name": "Leukemia",
    "medicalTerm": "Blood and bone marrow cancer",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Leukemia is a blood and bone marrow cancer-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "persistent fatigue and pallor",
      "frequent infections or fever",
      "unexplained bruising or bleeding"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Leukemia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lymphoma",
    "name": "Lymphoma",
    "medicalTerm": "Lymphatic system cancer",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Lymphoma is a lymphatic system cancer-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "painless enlarged lymph nodes",
      "night sweats or unexplained fever",
      "unintentional weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Lymphoma?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "multiple-myeloma",
    "name": "Multiple Myeloma",
    "medicalTerm": "Plasma cell malignancy",
    "icd10": "",
    "category": "Hematology",
    "organSystem": "Blood & Immune",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Multiple Myeloma is a plasma cell malignancy-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "persistent bone or back pain",
      "recurrent infections",
      "fatigue or weakness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Multiple Myeloma?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sepsis",
    "name": "Sepsis",
    "medicalTerm": "Life-threatening response to infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "chest",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Sepsis is a life-threatening response to infection-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fever or unusually low temperature",
      "rapid breathing or heartbeat",
      "new confusion or extreme illness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Sepsis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tuberculosis",
    "name": "Tuberculosis",
    "medicalTerm": "Mycobacterium tuberculosis infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Lungs & Respiratory",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Tuberculosis is a mycobacterium tuberculosis infection-related condition affecting the lungs & respiratory system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the lungs & respiratory system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "cough lasting three weeks or longer",
      "night sweats or fever",
      "weight loss or blood in sputum"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Tuberculosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dengue-fever",
    "name": "Dengue Fever",
    "medicalTerm": "Dengue virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Dengue Fever is a dengue virus infection-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "high fever with severe headache",
      "pain behind the eyes and muscle aches",
      "rash or nausea"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Dengue Fever?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "malaria",
    "name": "Malaria",
    "medicalTerm": "Plasmodium infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Malaria is a plasmodium infection-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fever with chills and sweats",
      "headache and body aches",
      "nausea or vomiting"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Malaria?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chikungunya",
    "name": "Chikungunya",
    "medicalTerm": "Chikungunya virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "legs",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Chikungunya is a chikungunya virus infection-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sudden fever",
      "severe joint pain and swelling",
      "rash or fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Chikungunya?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "typhoid-fever",
    "name": "Typhoid Fever",
    "medicalTerm": "Enteric fever",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Typhoid Fever is a enteric fever-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sustained fever",
      "abdominal pain and headache",
      "diarrhea or constipation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Typhoid Fever?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cholera",
    "name": "Cholera",
    "medicalTerm": "Acute Vibrio cholerae infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Cholera is a acute vibrio cholerae infection-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "profuse watery diarrhea",
      "vomiting",
      "thirst and signs of dehydration"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Cholera?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-a",
    "name": "Hepatitis A",
    "medicalTerm": "Acute viral hepatitis A",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Hepatitis A is a acute viral hepatitis a-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and nausea",
      "right upper abdominal discomfort",
      "dark urine or jaundice"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hepatitis A?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-b",
    "name": "Hepatitis B",
    "medicalTerm": "Hepatitis B virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Hepatitis B is a hepatitis b virus infection-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and nausea",
      "abdominal discomfort",
      "dark urine or jaundice"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hepatitis B?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-c",
    "name": "Hepatitis C",
    "medicalTerm": "Hepatitis C virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Hepatitis C is a hepatitis c virus infection-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often no early symptoms",
      "fatigue",
      "jaundice or abdominal swelling in advanced disease"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hepatitis C?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hepatitis-e",
    "name": "Hepatitis E",
    "medicalTerm": "Hepatitis E virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hepatitis E is a hepatitis e virus infection-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and nausea",
      "abdominal pain",
      "jaundice and dark urine"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hepatitis E?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "rabies",
    "name": "Rabies",
    "medicalTerm": "Rabies virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Rabies is a rabies virus infection-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fever or tingling at bite site early on",
      "difficulty swallowing or agitation",
      "hydrophobia or confusion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Rabies?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tetanus",
    "name": "Tetanus",
    "medicalTerm": "Clostridium tetani toxin illness",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Tetanus is a clostridium tetani toxin illness-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "jaw stiffness or lockjaw",
      "painful muscle spasms",
      "difficulty swallowing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Tetanus?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "measles",
    "name": "Measles",
    "medicalTerm": "Rubeola virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Measles is a rubeola virus infection-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "high fever and cough",
      "runny nose and red eyes",
      "spreading red rash"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Measles?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "mumps",
    "name": "Mumps",
    "medicalTerm": "Mumps virus infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Head & Neck",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Mumps is a mumps virus infection-related condition affecting the head & neck system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the head & neck system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "swollen tender salivary glands",
      "fever and headache",
      "pain while chewing or swallowing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Mumps?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "rubella",
    "name": "Rubella",
    "medicalTerm": "German measles",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Rubella is a german measles-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "mild fever",
      "fine pink rash beginning on face",
      "swollen lymph nodes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Rubella?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chickenpox",
    "name": "Chickenpox",
    "medicalTerm": "Varicella-zoster primary infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Skin",
    "bodyPart": "skin",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Chickenpox is a varicella-zoster primary infection-related condition affecting the skin system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the skin system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "itchy fluid-filled blister rash",
      "fever",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Chickenpox?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hand-foot-mouth-disease",
    "name": "Hand Foot and Mouth Disease",
    "medicalTerm": "Enteroviral infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Skin",
    "bodyPart": "skin",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hand Foot and Mouth Disease is a enteroviral infection-related condition affecting the skin system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the skin system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "painful mouth sores",
      "rash or blisters on palms and soles",
      "fever"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hand Foot and Mouth Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "infectious-mononucleosis",
    "name": "Infectious Mononucleosis",
    "medicalTerm": "Epstein-Barr virus illness",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Infectious Mononucleosis is a epstein-barr virus illness-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "marked fatigue",
      "sore throat",
      "swollen neck lymph nodes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Infectious Mononucleosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lyme-disease",
    "name": "Lyme Disease",
    "medicalTerm": "Borrelia infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Whole Body",
    "bodyPart": "skin",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Lyme Disease is a borrelia infection-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "expanding erythema migrans rash",
      "fever and fatigue",
      "joint or muscle aches"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Lyme Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cellulitis-orbital",
    "name": "Orbital Cellulitis",
    "medicalTerm": "Infection of orbital tissues",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Orbital Cellulitis is a infection of orbital tissues-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "swollen red eyelid",
      "pain with eye movement",
      "fever or reduced vision"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Orbital Cellulitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "sinusitis",
    "name": "Acute Sinusitis",
    "medicalTerm": "Acute rhinosinusitis",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Acute Sinusitis is a acute rhinosinusitis-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "nasal congestion and discharge",
      "facial pressure or pain",
      "reduced sense of smell"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Acute Sinusitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tonsillitis",
    "name": "Tonsillitis",
    "medicalTerm": "Inflammation of tonsils",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Tonsillitis is a inflammation of tonsils-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sore throat and painful swallowing",
      "swollen tonsils",
      "fever"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Tonsillitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "laryngitis",
    "name": "Laryngitis",
    "medicalTerm": "Inflammation of larynx",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Laryngitis is a inflammation of larynx-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "hoarse or lost voice",
      "throat irritation",
      "dry cough"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Laryngitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "epistaxis",
    "name": "Nosebleed",
    "medicalTerm": "Epistaxis",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Nosebleed is a epistaxis-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "bleeding from one or both nostrils",
      "blood draining into throat",
      "recurrent nasal bleeding"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Nosebleed?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hearing-loss",
    "name": "Hearing Loss",
    "medicalTerm": "Auditory impairment",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hearing Loss is a auditory impairment-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "difficulty understanding speech",
      "asking others to repeat",
      "ringing or muffled hearing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hearing Loss?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tinnitus",
    "name": "Tinnitus",
    "medicalTerm": "Perception of sound without external source",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Tinnitus is a perception of sound without external source-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "ringing or buzzing sound",
      "sleep or concentration difficulty",
      "sound perception without external source"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Tinnitus?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "vertigo-bppv",
    "name": "Benign Paroxysmal Positional Vertigo",
    "medicalTerm": "BPPV",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Benign Paroxysmal Positional Vertigo is a bppv-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "brief spinning triggered by head movement",
      "nausea",
      "unsteadiness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Benign Paroxysmal Positional Vertigo?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "menieres-disease",
    "name": "Ménière Disease",
    "medicalTerm": "Endolymphatic hydrops",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Ménière Disease is a endolymphatic hydrops-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "episodes of vertigo",
      "fluctuating hearing loss",
      "tinnitus or ear fullness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Ménière Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "glaucoma",
    "name": "Glaucoma",
    "medicalTerm": "Optic neuropathy",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Glaucoma is a optic neuropathy-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often no early symptoms in open-angle disease",
      "gradual peripheral vision loss",
      "eye pain and halos in acute angle closure"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Glaucoma?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cataract",
    "name": "Cataract",
    "medicalTerm": "Lens opacity",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Cataract is a lens opacity-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "gradual blurry vision",
      "glare or halos around lights",
      "faded colors"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Cataract?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "macular-degeneration",
    "name": "Age-Related Macular Degeneration",
    "medicalTerm": "AMD",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Age-Related Macular Degeneration is a amd-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "blurred central vision",
      "straight lines appearing wavy",
      "difficulty reading or recognizing faces"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Age-Related Macular Degeneration?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "diabetic-retinopathy",
    "name": "Diabetic Retinopathy",
    "medicalTerm": "Diabetes-related retinal disease",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Diabetic Retinopathy is a diabetes-related retinal disease-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often asymptomatic early",
      "floaters or blurred vision",
      "patchy vision loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Diabetic Retinopathy?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dry-eye-disease",
    "name": "Dry Eye Disease",
    "medicalTerm": "Keratoconjunctivitis sicca",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Dry Eye Disease is a keratoconjunctivitis sicca-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "gritty or burning eyes",
      "fluctuating blurred vision",
      "excessive tearing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Dry Eye Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "corneal-ulcer",
    "name": "Corneal Ulcer",
    "medicalTerm": "Infectious keratitis",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Corneal Ulcer is a infectious keratitis-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "eye pain and redness",
      "light sensitivity",
      "blurred vision or discharge"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Corneal Ulcer?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "retinal-detachment",
    "name": "Retinal Detachment",
    "medicalTerm": "Separation of neurosensory retina",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Retinal Detachment is a separation of neurosensory retina-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sudden flashes of light",
      "new shower of floaters",
      "curtain or shadow over vision"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Retinal Detachment?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "glaucoma-acute",
    "name": "Acute Angle-Closure Glaucoma",
    "medicalTerm": "Acute angle closure",
    "icd10": "",
    "category": "ENT & Eye",
    "organSystem": "Eyes, Ears, Nose & Throat",
    "bodyPart": "head",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Acute Angle-Closure Glaucoma is a acute angle closure-related condition affecting the eyes, ears, nose & throat system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the eyes, ears, nose & throat system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sudden severe eye pain",
      "red eye with blurred vision or halos",
      "headache and nausea"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Acute Angle-Closure Glaucoma?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "type-1-diabetes",
    "name": "Type 1 Diabetes",
    "medicalTerm": "Autoimmune diabetes",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Type 1 Diabetes is a autoimmune diabetes-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "increased thirst and urination",
      "unintentional weight loss",
      "fatigue and blurred vision"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Type 1 Diabetes?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gestational-diabetes",
    "name": "Gestational Diabetes",
    "medicalTerm": "Diabetes in pregnancy",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Gestational Diabetes is a diabetes in pregnancy-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often no symptoms",
      "increased thirst or urination",
      "abnormal prenatal glucose screening"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Gestational Diabetes?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "prediabetes",
    "name": "Prediabetes",
    "medicalTerm": "Impaired glucose regulation",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Prediabetes is a impaired glucose regulation-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "usually no symptoms",
      "may have increased thirst",
      "often found on blood testing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Prediabetes?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "metabolic-syndrome",
    "name": "Metabolic Syndrome",
    "medicalTerm": "Insulin resistance syndrome",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Metabolic Syndrome is a insulin resistance syndrome-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "increased waist circumference",
      "elevated blood pressure",
      "abnormal glucose or lipid results"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Metabolic Syndrome?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dyslipidemia",
    "name": "Dyslipidemia",
    "medicalTerm": "Abnormal blood lipids",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Dyslipidemia is a abnormal blood lipids-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "usually no symptoms",
      "may have tendon xanthomas",
      "abnormal cholesterol test"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Dyslipidemia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "obesity",
    "name": "Obesity",
    "medicalTerm": "Excess adiposity",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Obesity is a excess adiposity-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "increased body mass or waist size",
      "breathlessness with activity",
      "joint discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Obesity?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "osteoporosis",
    "name": "Osteoporosis",
    "medicalTerm": "Low bone density disorder",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Bones & Joints",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Osteoporosis is a low bone density disorder-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often silent until fracture",
      "loss of height or stooped posture",
      "fracture after minor fall"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Osteoporosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "vitamin-d-deficiency",
    "name": "Vitamin D Deficiency",
    "medicalTerm": "Low vitamin D status",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Bones & Joints",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Vitamin D Deficiency is a low vitamin d status-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "bone or muscle aches",
      "proximal muscle weakness",
      "fragility fractures in severe cases"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Vitamin D Deficiency?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hyperparathyroidism",
    "name": "Hyperparathyroidism",
    "medicalTerm": "Excess parathyroid hormone",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hyperparathyroidism is a excess parathyroid hormone-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and muscle weakness",
      "kidney stones",
      "bone pain or constipation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hyperparathyroidism?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hypoparathyroidism",
    "name": "Hypoparathyroidism",
    "medicalTerm": "Low parathyroid hormone",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "hands",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hypoparathyroidism is a low parathyroid hormone-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "tingling around mouth or fingers",
      "muscle cramps or spasms",
      "seizures in severe cases"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hypoparathyroidism?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cushings-syndrome",
    "name": "Cushing Syndrome",
    "medicalTerm": "Hypercortisolism",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Cushing Syndrome is a hypercortisolism-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "central weight gain",
      "easy bruising and purple stretch marks",
      "proximal muscle weakness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Cushing Syndrome?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "addisons-disease",
    "name": "Addison Disease",
    "medicalTerm": "Primary adrenal insufficiency",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Hormones & Metabolism",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Addison Disease is a primary adrenal insufficiency-related condition affecting the hormones & metabolism system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the hormones & metabolism system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fatigue and weight loss",
      "skin darkening",
      "salt craving or dizziness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Addison Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pcos",
    "name": "Polycystic Ovary Syndrome",
    "medicalTerm": "PCOS",
    "icd10": "",
    "category": "Endocrine & Metabolic",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Polycystic Ovary Syndrome is a pcos-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "irregular or absent periods",
      "acne or excess facial hair",
      "difficulty conceiving"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Polycystic Ovary Syndrome?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "endometriosis",
    "name": "Endometriosis",
    "medicalTerm": "Ectopic endometrial-like tissue",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Endometriosis is a ectopic endometrial-like tissue-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "painful periods",
      "chronic pelvic pain",
      "pain during intercourse"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Endometriosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "uterine-fibroids",
    "name": "Uterine Fibroids",
    "medicalTerm": "Leiomyomas",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Uterine Fibroids is a leiomyomas-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "heavy or prolonged menstrual bleeding",
      "pelvic pressure",
      "frequent urination"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Uterine Fibroids?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "endometrial-cancer",
    "name": "Endometrial Cancer",
    "medicalTerm": "Uterine cancer",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Endometrial Cancer is a uterine cancer-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "abnormal vaginal bleeding",
      "bleeding after menopause",
      "pelvic pain in later disease"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Endometrial Cancer?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cervical-cancer",
    "name": "Cervical Cancer",
    "medicalTerm": "Cervical malignancy",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Cervical Cancer is a cervical malignancy-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often no early symptoms",
      "bleeding after sex or between periods",
      "persistent unusual discharge"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Cervical Cancer?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ovarian-cancer",
    "name": "Ovarian Cancer",
    "medicalTerm": "Ovarian malignancy",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Ovarian Cancer is a ovarian malignancy-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "persistent bloating",
      "early satiety or abdominal swelling",
      "pelvic discomfort or urinary urgency"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Ovarian Cancer?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "breast-cancer",
    "name": "Breast Cancer",
    "medicalTerm": "Breast malignancy",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "chest",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Breast Cancer is a breast malignancy-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "new breast or underarm lump",
      "skin dimpling or nipple change",
      "bloody nipple discharge"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Breast Cancer?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "benign-prostatic-hyperplasia",
    "name": "Benign Prostatic Hyperplasia",
    "medicalTerm": "Enlarged prostate",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Urinary & Reproductive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Benign Prostatic Hyperplasia is a enlarged prostate-related condition affecting the urinary & reproductive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the urinary & reproductive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "weak urine stream",
      "difficulty starting urination",
      "frequent nighttime urination"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Benign Prostatic Hyperplasia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "prostatitis",
    "name": "Prostatitis",
    "medicalTerm": "Prostate inflammation",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Urinary & Reproductive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Prostatitis is a prostate inflammation-related condition affecting the urinary & reproductive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the urinary & reproductive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "pelvic or perineal pain",
      "painful urination",
      "fever in acute bacterial cases"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Prostatitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "erectile-dysfunction",
    "name": "Erectile Dysfunction",
    "medicalTerm": "Impotence",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Urinary & Reproductive",
    "bodyPart": "pelvis",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Erectile Dysfunction is a impotence-related condition affecting the urinary & reproductive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the urinary & reproductive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "difficulty achieving erection",
      "difficulty maintaining erection",
      "reduced sexual confidence"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Erectile Dysfunction?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pelvic-inflammatory-disease",
    "name": "Pelvic Inflammatory Disease",
    "medicalTerm": "PID",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Pelvic Inflammatory Disease is a pid-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "lower abdominal or pelvic pain",
      "abnormal vaginal discharge",
      "fever or pain during sex"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Pelvic Inflammatory Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ectopic-pregnancy",
    "name": "Ectopic Pregnancy",
    "medicalTerm": "Extrauterine pregnancy",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "abdomen",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Ectopic Pregnancy is a extrauterine pregnancy-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "one-sided pelvic pain",
      "vaginal bleeding",
      "shoulder-tip pain or faintness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Ectopic Pregnancy?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "preeclampsia",
    "name": "Preeclampsia",
    "medicalTerm": "Hypertensive disorder of pregnancy",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "head",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Preeclampsia is a hypertensive disorder of pregnancy-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "high blood pressure after mid-pregnancy",
      "severe headache or visual changes",
      "upper abdominal pain or sudden swelling"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Preeclampsia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "menopause",
    "name": "Menopause",
    "medicalTerm": "Ovarian hormone transition",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Reproductive Health",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Menopause is a ovarian hormone transition-related condition affecting the reproductive health system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the reproductive health system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "hot flashes or night sweats",
      "sleep disturbance",
      "vaginal dryness or cycle changes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Menopause?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "rheumatoid-arthritis",
    "name": "Rheumatoid Arthritis",
    "medicalTerm": "Autoimmune inflammatory arthritis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "hands",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Rheumatoid Arthritis is a autoimmune inflammatory arthritis-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "symmetric small-joint swelling",
      "morning stiffness lasting over an hour",
      "fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Rheumatoid Arthritis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ankylosing-spondylitis",
    "name": "Ankylosing Spondylitis",
    "medicalTerm": "Axial spondyloarthritis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Ankylosing Spondylitis is a axial spondyloarthritis-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "chronic inflammatory back pain",
      "morning stiffness improving with movement",
      "reduced spinal flexibility"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Ankylosing Spondylitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lupus",
    "name": "Systemic Lupus Erythematosus",
    "medicalTerm": "SLE",
    "icd10": "",
    "category": "Autoimmune",
    "organSystem": "Blood & Immune",
    "bodyPart": "whole-body",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Systemic Lupus Erythematosus is a sle-related condition affecting the blood & immune system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the blood & immune system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "joint pain and fatigue",
      "photosensitive rash",
      "mouth ulcers or kidney symptoms"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Systemic Lupus Erythematosus?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "psoriatic-arthritis",
    "name": "Psoriatic Arthritis",
    "medicalTerm": "Inflammatory arthritis associated with psoriasis",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "hands",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Psoriatic Arthritis is a inflammatory arthritis associated with psoriasis-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "joint pain and swelling",
      "sausage-like swollen digits",
      "morning stiffness with psoriasis"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Psoriatic Arthritis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "osteomyelitis",
    "name": "Osteomyelitis",
    "medicalTerm": "Bone infection",
    "icd10": "",
    "category": "Infectious Disease",
    "organSystem": "Bones & Joints",
    "bodyPart": "legs",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Osteomyelitis is a bone infection-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "localized bone pain and tenderness",
      "fever",
      "redness or swelling over affected bone"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Osteomyelitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bursitis",
    "name": "Bursitis",
    "medicalTerm": "Inflammation of a bursa",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "shoulder",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Bursitis is a inflammation of a bursa-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "localized joint tenderness",
      "pain with pressure or movement",
      "restricted range of motion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Bursitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "tendinitis",
    "name": "Tendinitis",
    "medicalTerm": "Tendon inflammation",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "shoulder",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Tendinitis is a tendon inflammation-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "pain near a tendon",
      "pain worsened by repetitive movement",
      "localized tenderness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Tendinitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "carpal-tunnel-syndrome",
    "name": "Carpal Tunnel Syndrome",
    "medicalTerm": "Median nerve entrapment",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Nerves & Muscles",
    "bodyPart": "hands",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Carpal Tunnel Syndrome is a median nerve entrapment-related condition affecting the nerves & muscles system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nerves & muscles system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "tingling in thumb and first fingers",
      "nighttime hand numbness",
      "weak grip or dropping objects"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Carpal Tunnel Syndrome?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cervical-spondylosis",
    "name": "Cervical Spondylosis",
    "medicalTerm": "Neck degenerative disease",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "neck",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Cervical Spondylosis is a neck degenerative disease-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "neck stiffness and pain",
      "pain radiating to shoulder or arm",
      "tingling or weakness in hand"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Cervical Spondylosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "herniated-disc",
    "name": "Herniated Disc",
    "medicalTerm": "Intervertebral disc herniation",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Herniated Disc is a intervertebral disc herniation-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "back or neck pain",
      "radiating limb pain",
      "numbness or muscle weakness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Herniated Disc?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "scoliosis",
    "name": "Scoliosis",
    "medicalTerm": "Lateral spinal curvature",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Scoliosis is a lateral spinal curvature-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "uneven shoulders or hips",
      "visible spinal curve",
      "back discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Scoliosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "plantar-fasciitis",
    "name": "Plantar Fasciitis",
    "medicalTerm": "Plantar heel pain syndrome",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "feet",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Plantar Fasciitis is a plantar heel pain syndrome-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "heel pain with first steps in morning",
      "tenderness at sole of heel",
      "pain after prolonged standing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Plantar Fasciitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "meniscus-tear",
    "name": "Meniscus Tear",
    "medicalTerm": "Knee meniscal injury",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "legs",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Meniscus Tear is a knee meniscal injury-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "knee pain after twisting",
      "swelling or stiffness",
      "catching or locking sensation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Meniscus Tear?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "acl-injury",
    "name": "ACL Injury",
    "medicalTerm": "Anterior cruciate ligament tear",
    "icd10": "",
    "category": "Musculoskeletal",
    "organSystem": "Bones & Joints",
    "bodyPart": "legs",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "ACL Injury is a anterior cruciate ligament tear-related condition affecting the bones & joints system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the bones & joints system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "popping sensation during injury",
      "rapid knee swelling",
      "instability when pivoting"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out ACL Injury?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "parkinsons-disease",
    "name": "Parkinson Disease",
    "medicalTerm": "Parkinsonism",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Parkinson Disease is a parkinsonism-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "resting tremor",
      "slowness of movement",
      "muscle rigidity or balance difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Parkinson Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "multiple-sclerosis",
    "name": "Multiple Sclerosis",
    "medicalTerm": "Demyelinating disease",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "whole-body",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Multiple Sclerosis is a demyelinating disease-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "episodes of vision changes",
      "limb numbness or weakness",
      "balance or coordination problems"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Multiple Sclerosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "epilepsy",
    "name": "Epilepsy",
    "medicalTerm": "Seizure disorder",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Epilepsy is a seizure disorder-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "recurrent unprovoked seizures",
      "brief staring or awareness gaps",
      "post-event confusion or fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Epilepsy?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "alzheimer-disease",
    "name": "Alzheimer Disease",
    "medicalTerm": "Major neurocognitive disorder due to Alzheimer pathology",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Alzheimer Disease is a major neurocognitive disorder due to alzheimer pathology-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "progressive memory difficulty",
      "trouble planning familiar tasks",
      "changes in language or orientation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Alzheimer Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "dementia-vascular",
    "name": "Vascular Dementia",
    "medicalTerm": "Vascular neurocognitive disorder",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Vascular Dementia is a vascular neurocognitive disorder-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "decline in thinking after vascular events",
      "slowed processing",
      "difficulty planning or walking"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Vascular Dementia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cluster-headache",
    "name": "Cluster Headache",
    "medicalTerm": "Trigeminal autonomic cephalalgia",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Cluster Headache is a trigeminal autonomic cephalalgia-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "severe one-sided pain around eye",
      "tearing or nasal congestion on same side",
      "restlessness during attacks"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Cluster Headache?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "trigeminal-neuralgia",
    "name": "Trigeminal Neuralgia",
    "medicalTerm": "Facial nerve pain syndrome",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Trigeminal Neuralgia is a facial nerve pain syndrome-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "brief electric-shock facial pain",
      "pain triggered by touch or chewing",
      "recurrent one-sided attacks"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Trigeminal Neuralgia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "peripheral-neuropathy",
    "name": "Peripheral Neuropathy",
    "medicalTerm": "Peripheral nerve disorder",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "feet",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Peripheral Neuropathy is a peripheral nerve disorder-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "burning or tingling in feet",
      "reduced sensation",
      "balance difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Peripheral Neuropathy?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "restless-legs-syndrome",
    "name": "Restless Legs Syndrome",
    "medicalTerm": "Willis-Ekbom disease",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "legs",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Restless Legs Syndrome is a willis-ekbom disease-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "urge to move legs at rest",
      "unpleasant leg sensations at night",
      "temporary relief with movement"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Restless Legs Syndrome?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "guillain-barre-syndrome",
    "name": "Guillain-Barré Syndrome",
    "medicalTerm": "Acute inflammatory polyradiculoneuropathy",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "legs",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Guillain-Barré Syndrome is a acute inflammatory polyradiculoneuropathy-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "progressive symmetrical limb weakness",
      "tingling in feet or hands",
      "reduced reflexes"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Guillain-Barré Syndrome?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "amyotrophic-lateral-sclerosis",
    "name": "Amyotrophic Lateral Sclerosis",
    "medicalTerm": "ALS",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "whole-body",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Amyotrophic Lateral Sclerosis is a als-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "progressive muscle weakness",
      "muscle twitching or cramps",
      "speech or swallowing difficulty"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Amyotrophic Lateral Sclerosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "autism-spectrum-disorder",
    "name": "Autism Spectrum Disorder",
    "medicalTerm": "Autism",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "whole-body",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Autism Spectrum Disorder is a autism-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "differences in social communication",
      "restricted or repetitive behaviors",
      "sensory sensitivities"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Autism Spectrum Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "adhd",
    "name": "Attention-Deficit Hyperactivity Disorder",
    "medicalTerm": "ADHD",
    "icd10": "",
    "category": "Neurological",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Attention-Deficit Hyperactivity Disorder is a adhd-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "persistent inattention",
      "hyperactivity or impulsivity",
      "difficulty organizing daily tasks"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Attention-Deficit Hyperactivity Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "insomnia",
    "name": "Insomnia Disorder",
    "medicalTerm": "Chronic insomnia",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Insomnia Disorder is a chronic insomnia-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "difficulty falling or staying asleep",
      "daytime fatigue or irritability",
      "impaired concentration"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Insomnia Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bipolar-disorder",
    "name": "Bipolar Disorder",
    "medicalTerm": "Bipolar spectrum disorder",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Bipolar Disorder is a bipolar spectrum disorder-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "episodes of elevated or irritable mood",
      "periods of depression",
      "changes in sleep and activity"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Bipolar Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "schizophrenia",
    "name": "Schizophrenia",
    "medicalTerm": "Psychotic disorder",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Schizophrenia is a psychotic disorder-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "hallucinations or delusions",
      "disorganized thinking or speech",
      "reduced motivation or social withdrawal"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Schizophrenia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ptsd",
    "name": "Post-Traumatic Stress Disorder",
    "medicalTerm": "PTSD",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Post-Traumatic Stress Disorder is a ptsd-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "intrusive memories or nightmares",
      "avoidance of reminders",
      "hypervigilance or sleep disturbance"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Post-Traumatic Stress Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ocd",
    "name": "Obsessive-Compulsive Disorder",
    "medicalTerm": "OCD",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Obsessive-Compulsive Disorder is a ocd-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "recurrent intrusive thoughts",
      "repetitive behaviors or mental rituals",
      "distress or time impairment"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Obsessive-Compulsive Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "eating-disorder-anorexia",
    "name": "Anorexia Nervosa",
    "medicalTerm": "Restrictive eating disorder",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Whole Body",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Anorexia Nervosa is a restrictive eating disorder-related condition affecting the whole body system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the whole body system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "restricted food intake",
      "intense fear of weight gain",
      "significantly low body weight"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Anorexia Nervosa?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "bulimia-nervosa",
    "name": "Bulimia Nervosa",
    "medicalTerm": "Bulimia",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Bulimia Nervosa is a bulimia-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "recurrent binge eating",
      "compensatory vomiting or behaviors",
      "dental or throat problems"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Bulimia Nervosa?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "generalized-social-anxiety",
    "name": "Social Anxiety Disorder",
    "medicalTerm": "Social phobia",
    "icd10": "",
    "category": "Mental Health",
    "organSystem": "Nervous System",
    "bodyPart": "head",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Social Anxiety Disorder is a social phobia-related condition affecting the nervous system system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the nervous system system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "intense fear of social scrutiny",
      "avoidance of social situations",
      "physical anxiety symptoms"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Social Anxiety Disorder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "crohns-disease",
    "name": "Crohn Disease",
    "medicalTerm": "Inflammatory bowel disease",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Crohn Disease is a inflammatory bowel disease-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "persistent diarrhea",
      "abdominal pain and cramping",
      "weight loss or fatigue"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Crohn Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "ulcerative-colitis",
    "name": "Ulcerative Colitis",
    "medicalTerm": "Inflammatory bowel disease",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Ulcerative Colitis is a inflammatory bowel disease-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "bloody diarrhea",
      "urgency to pass stool",
      "abdominal cramps"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Ulcerative Colitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "celiac-disease",
    "name": "Celiac Disease",
    "medicalTerm": "Gluten-sensitive enteropathy",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Celiac Disease is a gluten-sensitive enteropathy-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "chronic diarrhea or bloating",
      "iron-deficiency anemia",
      "weight loss or poor growth"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Celiac Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "diverticulitis",
    "name": "Diverticulitis",
    "medicalTerm": "Inflamed colonic diverticula",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Diverticulitis is a inflamed colonic diverticula-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "left lower abdominal pain",
      "fever",
      "change in bowel habits"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Diverticulitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hemorrhoids",
    "name": "Hemorrhoids",
    "medicalTerm": "Symptomatic hemorrhoidal disease",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hemorrhoids is a symptomatic hemorrhoidal disease-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "bright red blood with bowel movement",
      "anal itching or discomfort",
      "lump near anus"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hemorrhoids?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "anal-fissure",
    "name": "Anal Fissure",
    "medicalTerm": "Tear in anal canal lining",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Anal Fissure is a tear in anal canal lining-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sharp pain during bowel movement",
      "small amount of bright red blood",
      "anal spasm"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Anal Fissure?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "acute-pancreatitis",
    "name": "Acute Pancreatitis",
    "medicalTerm": "Pancreatic inflammation",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Acute Pancreatitis is a pancreatic inflammation-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "severe upper abdominal pain radiating to back",
      "nausea and vomiting",
      "abdominal tenderness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Acute Pancreatitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-pancreatitis",
    "name": "Chronic Pancreatitis",
    "medicalTerm": "Chronic pancreatic inflammation",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Chronic Pancreatitis is a chronic pancreatic inflammation-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "recurrent upper abdominal pain",
      "greasy stools",
      "unintentional weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Chronic Pancreatitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "cirrhosis",
    "name": "Liver Cirrhosis",
    "medicalTerm": "Advanced hepatic fibrosis",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Liver Cirrhosis is a advanced hepatic fibrosis-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "abdominal swelling or ascites",
      "jaundice",
      "easy bruising or confusion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Liver Cirrhosis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "fatty-liver-disease",
    "name": "Metabolic Dysfunction-Associated Steatotic Liver Disease",
    "medicalTerm": "MASLD",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Metabolic Dysfunction-Associated Steatotic Liver Disease is a masld-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often no symptoms",
      "fatigue",
      "right upper abdominal discomfort"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Metabolic Dysfunction-Associated Steatotic Liver Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "colorectal-cancer",
    "name": "Colorectal Cancer",
    "medicalTerm": "Colon and rectal cancer",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Colorectal Cancer is a colon and rectal cancer-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "persistent change in bowel habits",
      "blood in stool",
      "unexplained anemia or weight loss"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Colorectal Cancer?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "gastritis",
    "name": "Gastritis",
    "medicalTerm": "Inflammation of stomach lining",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Gastritis is a inflammation of stomach lining-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "upper abdominal discomfort",
      "nausea",
      "early fullness"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Gastritis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "hiatal-hernia",
    "name": "Hiatal Hernia",
    "medicalTerm": "Diaphragmatic hernia",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "chest",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Hiatal Hernia is a diaphragmatic hernia-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "heartburn or regurgitation",
      "chest or upper abdominal discomfort",
      "difficulty swallowing"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Hiatal Hernia?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "lactose-intolerance",
    "name": "Lactose Intolerance",
    "medicalTerm": "Lactase deficiency",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Lactose Intolerance is a lactase deficiency-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "bloating after dairy",
      "gas and abdominal cramps",
      "diarrhea after lactose"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Lactose Intolerance?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "constipation",
    "name": "Chronic Constipation",
    "medicalTerm": "Functional constipation",
    "icd10": "",
    "category": "Digestive",
    "organSystem": "Digestive",
    "bodyPart": "abdomen",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Chronic Constipation is a functional constipation-related condition affecting the digestive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the digestive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "infrequent bowel movements",
      "hard or difficult stools",
      "straining or incomplete evacuation"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Chronic Constipation?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "acute-kidney-injury",
    "name": "Acute Kidney Injury",
    "medicalTerm": "AKI",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Acute Kidney Injury is a aki-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "reduced urine output",
      "swelling or breathlessness from fluid retention",
      "fatigue or confusion"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Acute Kidney Injury?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "chronic-kidney-disease",
    "name": "Chronic Kidney Disease",
    "medicalTerm": "CKD",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Chronic Kidney Disease is a ckd-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "often no early symptoms",
      "fatigue or ankle swelling",
      "nausea or itching in advanced disease"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Chronic Kidney Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "pyelonephritis",
    "name": "Kidney Infection",
    "medicalTerm": "Acute pyelonephritis",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "back",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Kidney Infection is a acute pyelonephritis-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "fever and chills",
      "flank or back pain",
      "painful or frequent urination"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Kidney Infection?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "glomerulonephritis",
    "name": "Glomerulonephritis",
    "medicalTerm": "Inflammation of kidney filters",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "abdomen",
    "urgency": "urgent",
    "urgencyText": "Prompt Clinical Assessment",
    "readTime": "3 min read",
    "summary": "Glomerulonephritis is a inflammation of kidney filters-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "blood or cola-colored urine",
      "foamy urine",
      "swelling around eyes or ankles"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Glomerulonephritis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "polycystic-kidney-disease",
    "name": "Polycystic Kidney Disease",
    "medicalTerm": "Inherited renal cystic disease",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "back",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Polycystic Kidney Disease is a inherited renal cystic disease-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "high blood pressure",
      "flank or back pain",
      "blood in urine"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Polycystic Kidney Disease?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "urinary-incontinence",
    "name": "Urinary Incontinence",
    "medicalTerm": "Loss of bladder control",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "pelvis",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Urinary Incontinence is a loss of bladder control-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "leakage with cough or exertion",
      "sudden urgency",
      "frequent urination"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Urinary Incontinence?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "overactive-bladder",
    "name": "Overactive Bladder",
    "medicalTerm": "Urinary urgency syndrome",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "pelvis",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Overactive Bladder is a urinary urgency syndrome-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sudden urgency to urinate",
      "frequent daytime urination",
      "waking at night to urinate"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Overactive Bladder?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "interstitial-cystitis",
    "name": "Interstitial Cystitis",
    "medicalTerm": "Bladder pain syndrome",
    "icd10": "",
    "category": "Renal & Urinary",
    "organSystem": "Kidneys & Urinary",
    "bodyPart": "pelvis",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Interstitial Cystitis is a bladder pain syndrome-related condition affecting the kidneys & urinary system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the kidneys & urinary system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "bladder pressure or pain",
      "urinary frequency",
      "pain that changes with bladder filling"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Interstitial Cystitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "testicular-torsion",
    "name": "Testicular Torsion",
    "medicalTerm": "Spermatic cord torsion",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Urinary & Reproductive",
    "bodyPart": "pelvis",
    "urgency": "emergency",
    "urgencyText": "Emergency Assessment",
    "readTime": "3 min read",
    "summary": "Testicular Torsion is a spermatic cord torsion-related condition affecting the urinary & reproductive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the urinary & reproductive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "sudden severe one-sided testicular pain",
      "scrotal swelling",
      "nausea or vomiting"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Severe, rapidly worsening, or potentially life-threatening symptoms",
      "Fainting, new confusion, severe breathing difficulty, or signs of shock",
      "Seek emergency medical assessment immediately"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Testicular Torsion?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  },
  {
    "id": "epididymitis",
    "name": "Epididymitis",
    "medicalTerm": "Epididymal inflammation",
    "icd10": "",
    "category": "Reproductive Health",
    "organSystem": "Urinary & Reproductive",
    "bodyPart": "pelvis",
    "urgency": "routine",
    "urgencyText": "Primary Care / Routine Review",
    "readTime": "3 min read",
    "summary": "Epididymitis is a epididymal inflammation-related condition affecting the urinary & reproductive system. Presentation varies by person, age, severity, and underlying health; the symptoms below are examples and are not enough to confirm a diagnosis.",
    "pathology": "This condition involves changes affecting the urinary & reproductive system. The underlying cause and disease course vary; clinical assessment and appropriate testing are needed to establish the diagnosis and distinguish other possible causes.",
    "hallmarkSymptoms": [
      "gradual one-sided testicular pain",
      "scrotal tenderness or swelling",
      "painful urination"
    ],
    "atypicalSigns": [
      "Symptoms may be mild, absent, or atypical in some people",
      "Children, older adults, and people with other health conditions may present differently"
    ],
    "riskFactors": [
      "Personal or family medical history relevant to this condition",
      "Age and other individual health factors",
      "Relevant infections, exposures, lifestyle factors, or underlying conditions (depending on the cause)"
    ],
    "diagnosticTests": [
      "Clinical history and physical examination",
      "Targeted laboratory testing or imaging selected by a qualified clinician",
      "Further specialist assessment when indicated"
    ],
    "selfCare": [
      "Do not self-diagnose or start prescription treatment based on this entry",
      "Discuss persistent, recurrent, or worsening symptoms with a qualified healthcare professional",
      "Follow an individualized care plan and attend recommended follow-up",
      "For prevention, follow condition-specific advice from a clinician or public-health authority"
    ],
    "redFlags": [
      "Rapid deterioration or severe pain",
      "New breathing difficulty, fainting, confusion, or uncontrolled bleeding",
      "Seek urgent medical advice if symptoms are severe, worsening, or concerning"
    ],
    "askDoctor": [
      "What findings would help confirm or rule out Epididymitis?",
      "Which tests or follow-up are appropriate for my symptoms and health history?"
    ],
    "source": {
      "organization": "MedlinePlus / World Health Organization",
      "title": "Condition information and health topics",
      "url": "https://medlineplus.gov/healthtopics.html"
    }
  }
];

// Keep stable IDs unique so search, bookmarks, comparisons, and assessment
// references remain deterministic.
const existingDiseaseIds = new Set(diseaseDatabase.map(condition => condition.id));
for (const condition of additionalDiseaseEntries) {
  if (!existingDiseaseIds.has(condition.id)) {
    diseaseDatabase.push(condition);
    existingDiseaseIds.add(condition.id);
  }
}

export default diseaseDatabase;
