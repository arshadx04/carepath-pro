/**
 * CarePath Pro - Emergency Contacts
 * Reference links checked on 2026-11-09. Users must verify local availability.
 * Educational directory only; not a substitute for local emergency guidance.
 */

export const emergencyDatabase = {
  "countries": [
    {
      "country": "United States",
      "code": "US",
      "emergency": "911",
      "dial": "911",
      "crisis": "988 (Call or Text)",
      "crisisDial": "988",
      "poison": "1-800-222-1222 (US only)",
      "sources": [
        { "label": "911.gov — emergency calling", "url": "https://www.911.gov/calling-911/" },
        { "label": "SAMHSA — 988 crisis support", "url": "https://www.samhsa.gov/find-support/in-crisis" },
        { "label": "Poison Control — contact details", "url": "https://www.poison.org/contact-us" }
      ]
    },
    {
      "country": "Canada",
      "code": "CA",
      "emergency": "911",
      "dial": "911",
      "crisis": "988 (Call or Text)",
      "crisisDial": "988",
      "sources": [
        { "label": "Government of Canada — emergency and crisis support", "url": "https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html" },
        { "label": "9-8-8 Suicide Crisis Helpline", "url": "https://988.ca/" }
      ]
    },
    {
      "country": "United Kingdom",
      "code": "UK",
      "emergency": "999 / 112",
      "dial": "999",
      "nonEmergency": "NHS 111 (England; availability and options vary by nation)",
      "sources": [
        { "label": "GOV.UK — 999 and 112", "url": "https://www.gov.uk/guidance/999-and-112-the-uks-national-emergency-numbers" },
        { "label": "NHS — when to call 999 / NHS 111", "url": "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/" }
      ]
    },
    {
      "country": "European Union",
      "code": "EU",
      "emergency": "112",
      "dial": "112",
      "sources": [
        { "label": "European Commission — 112", "url": "https://digital-strategy.ec.europa.eu/en/policies/112" },
        { "label": "Your Europe — emergency number", "url": "https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/indexamp_en.htm" }
      ]
    },
    {
      "country": "India",
      "code": "IN",
      "emergency": "112",
      "dial": "112",
      "crisis": "Tele-MANAS: 14416",
      "crisisDial": "14416",
      "sources": [
        { "label": "Ministry of Home Affairs — ERSS 112", "url": "https://www.mha.gov.in/emergency-response-support-system-erss" },
        { "label": "Directorate General of Health Services — Tele-MANAS", "url": "https://dghs.mohfw.gov.in/national-mental-health-programme.php" },
        { "label": "National Portal of India — helpline directory", "url": "https://www.india.gov.in/directory/helpline" }
      ]
    },
    {
      "country": "Australia",
      "code": "AU",
      "emergency": "000",
      "dial": "000",
      "crisis": "Lifeline: 13 11 14",
      "crisisDial": "131114",
      "nonEmergency": "Healthdirect nurse advice: 1800 022 222",
      "nonEmergencyDial": "1800 022 222",
      "sources": [
        { "label": "Australian Government — Triple Zero (000)", "url": "https://www.infrastructure.gov.au/media-communications/phone/triple-zero/how-call-triple-zero-000" },
        { "label": "Lifeline Australia — crisis support", "url": "https://www.lifeline.org.au/get-help/national-services/lifeline-crisis-support" },
        { "label": "Healthdirect Australia — helpline details", "url": "https://www.healthdirect.gov.au/contact-us" }
      ]
    },
    {
      "country": "International / Roaming",
      "code": "INTL",
      "emergency": "Use your local emergency number",
      "dial": null,
      "notes": "Emergency numbers and mobile-network access vary by country. Check local official guidance before relying on a number."
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
