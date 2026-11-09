/**
 * CarePath Pro - Emergency Hotlines & Action Protocols
 */

export const emergencyDatabase = {
  "countries": [
    {
      "country": "United States & Canada",
      "code": "US/CA",
      "emergency": "911",
      "dial": "911",
      "crisis": "988 (Call or Text)",
      "crisisDial": "988",
      "poison": "1-800-222-1222"
    },
    {
      "country": "United Kingdom",
      "code": "UK",
      "emergency": "999 / 112",
      "dial": "999",
      "nonEmergency": "111",
      "crisis": "NHS 111 (mental health option)",
      "crisisDial": "111"
    },
    {
      "country": "European Union",
      "code": "EU",
      "emergency": "112",
      "dial": "112",
      "crisis": "Varies by state (116 123)",
      "poison": "Local European Poison Centres"
    },
    {
      "country": "India",
      "code": "IN",
      "emergency": "112",
      "dial": "112",
      "ambulance": "108",
      "ambulanceDial": "108",
      "crisis": "Tele-MANAS: 14416",
      "crisisDial": "14416"
    },
    {
      "country": "Australia",
      "code": "AU",
      "emergency": "000",
      "dial": "000",
      "crisis": "13 11 14 (Lifeline)",
      "crisisDial": "131114",
      "healthdirect": "1800 022 222"
    },
    {
      "country": "International / Roaming",
      "code": "INTL",
      "emergency": "Use your local emergency number",
      "dial": null,
      "notes": "Emergency numbers and mobile-network access vary by country. Check local official guidance."
    }
  ],
  "emergencyProtocols": [
    {
      "condition": "Suspected Heart Attack",
      "action": "Call emergency services immediately. Sit down in a comfortable position with back supported. Do not take medication unless an emergency dispatcher or qualified clinician instructs you. Do NOT drive yourself to the hospital."
    },
    {
      "condition": "Suspected Stroke (F.A.S.T.)",
      "action": "Face drooping, Arm weakness, Speech difficulty, Time to call your local emergency number immediately. Note the exact time symptoms started. Do NOT give aspirin, food, or drink."
    },
    {
      "condition": "Severe Anaphylaxis / Allergic Reaction",
      "action": "Call emergency services immediately. If the person has a prescribed epinephrine auto-injector and their emergency action plan, follow that plan while help is on the way. Follow the dispatcher’s instructions."
    },
    {
      "condition": "Acute Mental Health Crisis",
      "action": "Contact the crisis service available in your country or call local emergency services if there is immediate danger. Stay with the person if it is safe to do so and follow the crisis responder’s instructions."
    }
  ]
};

export default emergencyDatabase;
