/**
 * CarePath Pro - Emergency Hotlines & Action Protocols
 */

export const emergencyDatabase = {
  "countries": [
    {
      "country": "United States & Canada",
      "code": "US/CA",
      "emergency": "911",
      "crisis": "988 (Call or Text)",
      "poison": "1-800-222-1222"
    },
    {
      "country": "United Kingdom",
      "code": "UK",
      "emergency": "999 / 112",
      "nonEmergency": "111",
      "crisis": "111 (Mental Health Option)"
    },
    {
      "country": "European Union",
      "code": "EU",
      "emergency": "112",
      "crisis": "Varies by state (116 123)",
      "poison": "Local European Poison Centres"
    },
    {
      "country": "India",
      "code": "IN",
      "emergency": "112 / 102",
      "ambulance": "108",
      "crisis": "Tele-MANAS: 14416 / 1800 891 4416"
    },
    {
      "country": "Australia",
      "code": "AU",
      "emergency": "000",
      "crisis": "13 11 14 (Lifeline)",
      "healthdirect": "1800 022 222"
    },
    {
      "country": "International / Roaming",
      "code": "INTL",
      "emergency": "112 (Universal GSM standard)",
      "notes": "Works from almost any mobile phone globally without a SIM card"
    }
  ],
  "emergencyProtocols": [
    {
      "condition": "Suspected Heart Attack",
      "action": "Call emergency services immediately. Sit down in a comfortable position with back supported. If not allergic and advised by emergency dispatch, chew one adult 325mg aspirin. Do NOT drive yourself to the hospital."
    },
    {
      "condition": "Suspected Stroke (F.A.S.T.)",
      "action": "Face drooping, Arm weakness, Speech difficulty, Time to call 911 immediately. Note the exact time symptoms started. Do NOT give aspirin, food, or drink."
    },
    {
      "condition": "Severe Anaphylaxis / Allergic Reaction",
      "action": "Administer an Epinephrine auto-injector (EpiPen) into the outer thigh immediately. Call emergency dispatch right away. Lie flat with legs elevated unless vomiting or struggling to breathe."
    },
    {
      "condition": "Acute Mental Health Crisis",
      "action": "Call or text 988 (US/Canada) or your national crisis lifeline. Do not stay alone. Remove any immediate means of self-harm and connect with a trusted support person."
    }
  ]
};

export default emergencyDatabase;
