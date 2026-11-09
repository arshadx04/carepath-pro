/**
 * CarePath Pro - Comprehensive Symptoms & Red Flag Index
 */

export const symptomDatabase = {
  "bodyRegions": [
    {
      "id": "head",
      "name": "Head & Brain",
      "description": "Headaches, vision, facial weakness, dizziness, speech"
    },
    {
      "id": "throat",
      "name": "Eyes, Ears & Throat",
      "description": "Sore throat, ear pain, eye redness, nasal congestion, swallowing"
    },
    {
      "id": "chest",
      "name": "Chest & Lungs",
      "description": "Chest pressure, shortness of breath, wheezing, cough, palpitations"
    },
    {
      "id": "abdomen",
      "name": "Abdomen & Digestive",
      "description": "Stomach pain, acid reflux, nausea, vomiting, cramping, diarrhea"
    },
    {
      "id": "shoulder",
      "name": "Shoulders",
      "description": "Shoulder blade discomfort, upper shoulder pain, stiffness and limited movement"
    },
    {
      "id": "back",
      "name": "Back",
      "description": "Upper and lower back discomfort, muscle tightness and back stiffness"
    },
    {
      "id": "spine",
      "name": "Spine",
      "description": "Pain along the spinal column, lower back pain, sciatica and stiffness"
    },
    {
      "id": "back",
      "name": "Upper & Lower Back",
      "description": "Pain or stiffness across the upper back, between the shoulder blades, or lower back muscles"
    },
    {
      "id": "shoulder",
      "name": "Shoulders & Shoulder Blades",
      "description": "Shoulder pain, stiffness, limited movement, or discomfort around the shoulder blades"
    },
    {
      "id": "pelvis",
      "name": "Pelvis & Urinary",
      "description": "Painful urination, urgency, flank pain, kidney discomfort"
    },
    {
      "id": "limbs",
      "name": "Limbs & Joints",
      "description": "Swollen joints, calf swelling/DVT, big toe gout, leg numbness"
    },
    {
      "id": "skin",
      "name": "Skin & Rashes",
      "description": "Itching, eczema plaques, shingles blisters, spreading redness/cellulitis"
    },
    {
      "id": "systemic",
      "name": "Whole Body & Mind",
      "description": "Fever, chills, chronic fatigue, anxiety, panic, depression, excessive thirst"
    }
  ],
  "symptoms": [
    {
      "id": "headache_throbbing",
      "label": "Throbbing or pulsating head pain (one-sided)",
      "region": "head",
      "weight": 3,
      "related": [
        "migraine"
      ]
    },
    {
      "id": "headache_band",
      "label": "Dull band of tight pressure around head",
      "region": "head",
      "weight": 2,
      "related": [
        "tension-headache"
      ]
    },
    {
      "id": "thunderclap_headache",
      "label": "Explosive, sudden 'worst headache of life'",
      "region": "head",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Possible Subarachnoid Hemorrhage or Aneurysm",
      "related": [
        "stroke-tia"
      ]
    },
    {
      "id": "facial_droop",
      "label": "Sudden facial droop, mouth drooping, or asymmetric smile",
      "region": "head",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Stroke F.A.S.T. warning sign or Bell's Palsy",
      "related": [
        "stroke-tia",
        "bells-palsy"
      ]
    },
    {
      "id": "slurred_speech",
      "label": "Sudden trouble speaking, slurred words, or inability to comprehend",
      "region": "head",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Acute Cerebral Ischemia (Stroke)",
      "related": [
        "stroke-tia"
      ]
    },
    {
      "id": "dizziness_vertigo",
      "label": "Spinning dizziness, lightheadedness, or loss of balance",
      "region": "head",
      "weight": 2,
      "related": [
        "stroke-tia",
        "hypertension",
        "arrhythmia-atrial-fib"
      ]
    },
    {
      "id": "aura_visual",
      "label": "Visual zigzag flashing lights, blind spots, or light sensitivity",
      "region": "head",
      "weight": 3,
      "related": [
        "migraine"
      ]
    },
    {
      "id": "sore_throat_severe",
      "label": "Severe throat pain with difficulty swallowing and high fever",
      "region": "throat",
      "weight": 3,
      "related": [
        "strep-throat",
        "influenza"
      ]
    },
    {
      "id": "ear_pain_throbbing",
      "label": "Sharp, deep ear pain with muffled hearing or fluid pressure",
      "region": "throat",
      "weight": 3,
      "related": [
        "otitis-media"
      ]
    },
    {
      "id": "eye_redness_discharge",
      "label": "Pink/red eye with discharge, gritty sensation, or morning crusting",
      "region": "throat",
      "weight": 2,
      "related": [
        "conjunctivitis-pink-eye"
      ]
    },
    {
      "id": "sneezing_nasal_itch",
      "label": "Repetitive sneezing, clear runny nose, and itchy eyes/palate",
      "region": "throat",
      "weight": 2,
      "related": [
        "allergic-rhinitis"
      ]
    },
    {
      "id": "tonsillar_exudate",
      "label": "White or yellow patches on swollen tonsils, no cough",
      "region": "throat",
      "weight": 3,
      "related": [
        "strep-throat"
      ]
    },
    {
      "id": "chest_pressure_radiating",
      "label": "Crushing chest tightness/pressure radiating to jaw, left arm, or back",
      "region": "chest",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Potential Myocardial Infarction (Heart Attack)",
      "related": [
        "coronary-artery-disease"
      ]
    },
    {
      "id": "shortness_of_breath_severe",
      "label": "Severe breathlessness, air hunger, or blue lips at rest",
      "region": "chest",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Acute Respiratory Distress or Heart Failure",
      "related": [
        "coronary-artery-disease",
        "heart-failure",
        "asthma",
        "pneumonia"
      ]
    },
    {
      "id": "wheezing_expiratory",
      "label": "High-pitched whistling or wheezing sound while breathing out",
      "region": "chest",
      "weight": 3,
      "related": [
        "asthma",
        "copd"
      ]
    },
    {
      "id": "cough_productive_rust",
      "label": "Cough producing thick yellow, green, or rust-colored sputum with fever",
      "region": "chest",
      "weight": 3,
      "related": [
        "pneumonia",
        "acute-bronchitis"
      ]
    },
    {
      "id": "cough_dry_persistent",
      "label": "Persistent dry or hacking cough lasting weeks",
      "region": "chest",
      "weight": 2,
      "related": [
        "acute-bronchitis",
        "covid-19",
        "gerd-acid-reflux",
        "asthma"
      ]
    },
    {
      "id": "palpitations_racing",
      "label": "Rapid, fluttering, pounding, or erratic irregular heartbeat",
      "region": "chest",
      "weight": 3,
      "related": [
        "arrhythmia-atrial-fib",
        "panic-disorder",
        "hyperthyroidism"
      ]
    },
    {
      "id": "pleuritic_pain",
      "label": "Sharp stabbing chest pain worsened by deep inhalation or coughing",
      "region": "chest",
      "weight": 4,
      "related": [
        "pneumonia",
        "deep-vein-thrombosis"
      ]
    },
    {
      "id": "rlq_abdominal_pain",
      "label": "Severe pain in the lower right abdomen, worse with walking/coughing",
      "region": "abdomen",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Potential Acute Appendicitis requiring surgical review",
      "related": [
        "appendicitis"
      ]
    },
    {
      "id": "ruq_biliary_pain",
      "label": "Severe gripping pain under right ribs radiating to right shoulder after fatty meal",
      "region": "abdomen",
      "weight": 4,
      "related": [
        "gallstones-cholecystitis"
      ]
    },
    {
      "id": "epigastric_burning",
      "label": "Burning acid sensation rising from stomach to chest/throat after eating",
      "region": "abdomen",
      "weight": 3,
      "related": [
        "gerd-acid-reflux",
        "peptic-ulcer-disease"
      ]
    },
    {
      "id": "stomach_pain_fasting",
      "label": "Gnawing stomach pain worse on an empty stomach or middle of the night",
      "region": "abdomen",
      "weight": 3,
      "related": [
        "peptic-ulcer-disease"
      ]
    },
    {
      "id": "bowel_cramping_bloating",
      "label": "Recurrent abdominal cramping relieved by bowel movements, with bloating",
      "region": "abdomen",
      "weight": 2,
      "related": [
        "irritable-bowel-syndrome"
      ]
    },
    {
      "id": "vomiting_blood_melena",
      "label": "Vomiting dark coffee-ground blood or passing jet black sticky stools",
      "region": "abdomen",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Acute Gastrointestinal Hemorrhage",
      "related": [
        "peptic-ulcer-disease"
      ]
    },
    {
      "id": "nausea_vomiting",
      "label": "Nausea, retching, or inability to keep food/liquids down",
      "region": "abdomen",
      "weight": 2,
      "related": [
        "migraine",
        "appendicitis",
        "gallstones-cholecystitis",
        "kidney-stones"
      ]
    },
    {
      "id": "sciatica_shooting",
      "label": "Electric shock or burning pain shooting from lower back down one leg to foot",
      "region": "spine",
      "weight": 3,
      "related": [
        "lumbar-sciatica"
      ]
    },
    {
      "id": "cauda_equina_signs",
      "label": "Sudden numbness in groin/saddle area and loss of bowel or bladder control",
      "region": "spine",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Cauda Equina Compression Syndrome (Emergency Spine Surgery)",
      "related": [
        "lumbar-sciatica"
      ]
    },
    {
      "id": "back_stiffness_morning",
      "label": "Lower back aching and morning stiffness easing with movement",
      "region": "spine",
      "weight": 2,
      "related": [
        "lumbar-sciatica",
        "osteoarthritis"
      ]
    },
    {
      "id": "dysuria_burning",
      "label": "Burning, stinging, or painful urination with frequent urgent urges",
      "region": "pelvis",
      "weight": 3,
      "related": [
        "urinary-tract-infection"
      ]
    },
    {
      "id": "flank_colic_severe",
      "label": "Excruciating waves of back/side pain radiating down into groin with blood in urine",
      "region": "pelvis",
      "weight": 4,
      "related": [
        "kidney-stones"
      ]
    },
    {
      "id": "fever_flank_pain",
      "label": "High fever, shaking chills, and tenderness over kidney flank area",
      "region": "pelvis",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Pyelonephritis (Ascending Kidney Infection)",
      "related": [
        "urinary-tract-infection",
        "kidney-stones"
      ]
    },
    {
      "id": "joint_pain_load",
      "label": "Deep aching knee or hip joint pain worse after movement, morning stiffness < 30m",
      "region": "limbs",
      "weight": 3,
      "related": [
        "osteoarthritis"
      ]
    },
    {
      "id": "calf_swelling_warmth",
      "label": "Unilateral painful calf swelling, warm to touch, and calf redness",
      "region": "limbs",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Potential Deep Vein Thrombosis (DVT)",
      "related": [
        "deep-vein-thrombosis"
      ]
    },
    {
      "id": "big_toe_acute_gout",
      "label": "Sudden excruciating pain, swelling, and shiny redness in big toe waking from sleep",
      "region": "limbs",
      "weight": 4,
      "related": [
        "gout-arthritis"
      ]
    },
    {
      "id": "joint_hot_septic",
      "label": "Single joint suddenly hot, brightly red, violently swollen with high fever",
      "region": "limbs",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Possible Septic Arthritis (Infected Joint)",
      "related": [
        "gout-arthritis",
        "osteoarthritis"
      ]
    },
    {
      "id": "eczema_flexural_itch",
      "label": "Intense itching with dry, red, weeping patches in elbow/knee folds",
      "region": "skin",
      "weight": 3,
      "related": [
        "eczema-atopic-dermatitis"
      ]
    },
    {
      "id": "silvery_scale_plaques",
      "label": "Raised red plaques covered with thick silvery micaceous scales on elbows/knees/scalp",
      "region": "skin",
      "weight": 3,
      "related": [
        "psoriasis"
      ]
    },
    {
      "id": "shingles_dermatomal_band",
      "label": "Clustered painful blisters in a one-sided stripe or band wrapping torso",
      "region": "skin",
      "weight": 4,
      "related": [
        "shingles-herpes-zoster"
      ]
    },
    {
      "id": "cellulitis_spreading_red",
      "label": "Rapidly spreading warm, red, tender, swollen skin on one leg with tight shine",
      "region": "skin",
      "weight": 4,
      "related": [
        "cellulitis"
      ]
    },
    {
      "id": "shingles_eye_tip_nose",
      "label": "Blisters on forehead, eyelids, or the tip of the nose",
      "region": "skin",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Herpes Zoster Ophthalmicus (Risk of Blindness)",
      "related": [
        "shingles-herpes-zoster"
      ]
    },
    {
      "id": "fever_high_rigors",
      "label": "High fever (> 101\u00b0F / 38.3\u00b0C) with shaking chills, sweating, and weakness",
      "region": "systemic",
      "weight": 3,
      "related": [
        "influenza",
        "pneumonia",
        "covid-19",
        "strep-throat"
      ]
    },
    {
      "id": "chronic_fatigue_sluggish",
      "label": "Relentless fatigue, low energy, daytime sluggishness, and cold intolerance",
      "region": "systemic",
      "weight": 2,
      "related": [
        "hypothyroidism",
        "type-2-diabetes",
        "fibromyalgia",
        "major-depressive-disorder"
      ]
    },
    {
      "id": "excessive_thirst_urination",
      "label": "Unquenchable thirst (polydipsia) and frequent nighttime urination (polyuria)",
      "region": "systemic",
      "weight": 3,
      "related": [
        "type-2-diabetes"
      ]
    },
    {
      "id": "weight_loss_heat_intolerance",
      "label": "Unintentional weight loss, rapid heart rate, shaky hands, and heat intolerance",
      "region": "systemic",
      "weight": 3,
      "related": [
        "hyperthyroidism"
      ]
    },
    {
      "id": "widespread_body_aches",
      "label": "Widespread body pain and tenderness in soft tissues present for months with poor sleep",
      "region": "systemic",
      "weight": 2,
      "related": [
        "fibromyalgia",
        "influenza"
      ]
    },
    {
      "id": "anxiety_chronic_worry",
      "label": "Uncontrollable persistent worry, muscle tension, restless insomnia, and keyed up feeling",
      "region": "systemic",
      "weight": 2,
      "related": [
        "generalized-anxiety-disorder"
      ]
    },
    {
      "id": "panic_sudden_terror",
      "label": "Sudden surge of overwhelming terror, choking feeling, shaking, and fear of dying",
      "region": "systemic",
      "weight": 3,
      "related": [
        "panic-disorder"
      ]
    },
    {
      "id": "depression_anhedonia",
      "label": "Profound sadness, loss of pleasure in all activities, emptiness, and hopelessness",
      "region": "systemic",
      "weight": 3,
      "related": [
        "major-depressive-disorder"
      ]
    },
    {
      "id": "suicidal_crisis",
      "label": "Thoughts of self-harm, wishing not to wake up, or active crisis",
      "region": "systemic",
      "weight": 5,
      "isRedFlag": true,
      "emergencyDesc": "Immediate Mental Health Crisis (Dial 988)",
      "related": [
        "major-depressive-disorder"
      ]
    }
  ]
};

export default symptomDatabase;
