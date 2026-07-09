window.TRIAL_CONFIG = {
  "version": 2,
  "configFormat": "self-contained-trial-containers",
  "generatedFrom": "Stroke_Trial_Screener_Selected_Trials_LiveData_Workbook.xlsx",
  "generatedNote": "Each trial is self-contained. Edit one trial container to change its overview, initial criteria, secondary questions, criteria text, protocol links, and contacts.",
  "trials": [
    {
      "id": "ASPIRE",
      "status": "active",
      "overview": {
        "title": "Anticoagulation in Intracerebral Hemorrhage Survivors for Stroke Prevention and Recovery",
        "shortName": "ASPIRE",
        "strokeType": "Hemorrhagic",
        "category": "ICH survivor with AF; secondary prevention"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": null,
            "lknHoursMax": 4320,
            "strokeType": "Hemorrhagic",
            "strokeSubtype": "ICH survivor with AF; 14-180 days",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R036",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R038",
              "variable": "lknHours",
              "operator": "<=",
              "value": 4320,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q010",
              "text": "ICH volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "ichVolume",
              "required": true
            },
            {
              "id": "Q012",
              "text": "Is there intraventricular hemorrhage?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "ivh",
              "required": true
            },
            {
              "id": "Q016",
              "text": "Current/recent anticoagulant use or anticoagulant indication?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "anticoagulant",
              "required": true
            },
            {
              "id": "Q017",
              "text": "Pregnant or breastfeeding?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "pregnancy",
              "required": true
            },
            {
              "id": "Q021",
              "text": "Non-valvular atrial fibrillation/flutter documented?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "afib",
              "required": true
            },
            {
              "id": "Q030",
              "text": "Recent surgery, active bleeding, or bleeding diathesis?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "bleedingRisk",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R037",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            },
            {
              "id": "R050",
              "variable": "afib",
              "operator": "==",
              "value": "Yes",
              "failureReason": "No documented AF/flutter"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age â‰¥18 years.",
              "ICH including primary IVH confirmed by CT or MRI.",
              "Can be randomized within 14-180 days after ICH onset.",
              "Non-valvular atrial fibrillation/flutter documented by ECG or physician-confirmed history.",
              "Signed informed consent by patient or LAR.",
              "Females of reproductive potential use highly effective contraception."
            ],
            "exclusion": [
              "Index event hemorrhagic transformation of infarct or hemorrhage into tumor.",
              "Earlier ICH within 12 months preceding index event.",
              "Active infective endocarditis.",
              "Clear indication for anticoagulants or antiplatelets.",
              "Previous/planned left atrial appendage closure.",
              "Clinically significant bleeding diathesis.",
              "Creatinine â‰¥2.5 mg/dL.",
              "Active hepatitis or Child-Pugh B/C hepatic insufficiency.",
              "Hemoglobin <8 g/dL or thrombocytopenia <100 x 10^9/L.",
              "Pregnant or breastfeeding.",
              "Allergy to aspirin or apixaban.",
              "Competing trial participation.",
              "Persistent uncontrolled SBP â‰¥180 mmHg."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/c5izfje4b2j1t1qergliw3wru20lfcfi"
          }
        ]
      },
      "contact": {
        "pi": "Yan Wang",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "FASTEST",
      "status": "active",
      "overview": {
        "title": "rFVIIa for Acute Hemorrhagic Stroke Administered at Earliest Time",
        "shortName": "FASTEST",
        "strokeType": "Hemorrhagic",
        "category": "Spontaneous ICH; hemostatic therapy"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": 80,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": 2,
            "lknHoursMax": 2,
            "strokeType": "Hemorrhagic",
            "strokeSubtype": "Spontaneous ICH very early",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R010",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R011",
              "variable": "age",
              "operator": "<=",
              "value": 80,
              "failureReason": "Age above protocol maximum"
            },
            {
              "id": "R014",
              "variable": "lknHours",
              "operator": "<=",
              "value": 2,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q010",
              "text": "ICH volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "ichVolume",
              "required": true
            },
            {
              "id": "Q011",
              "text": "ICH location",
              "inputType": "select",
              "options": [
                "Lobar",
                "Basal ganglia",
                "Thalamic",
                "Brainstem",
                "Cerebellar",
                "Infratentorial",
                "Primary IVH",
                "Other",
                "Unknown"
              ],
              "variable": "ichLocation",
              "required": true
            },
            {
              "id": "Q012",
              "text": "Is there intraventricular hemorrhage?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "ivh",
              "required": true
            },
            {
              "id": "Q013",
              "text": "Is there suspected secondary ICH cause?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "secondaryICH",
              "required": true
            },
            {
              "id": "Q016",
              "text": "Current/recent anticoagulant use or anticoagulant indication?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "anticoagulant",
              "required": true
            },
            {
              "id": "Q031",
              "text": "GCS score",
              "inputType": "number",
              "options": [
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15"
              ],
              "variable": "gcs",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R012",
              "variable": "baselineMrs",
              "operator": "<=",
              "value": 2,
              "failureReason": "Baseline mRS above protocol maximum"
            },
            {
              "id": "R013",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            },
            {
              "id": "R046",
              "variable": "ichVolume",
              "operator": ">=",
              "value": 2,
              "failureReason": "ICH volume below FASTEST minimum"
            },
            {
              "id": "R047",
              "variable": "ichVolume",
              "operator": "<",
              "value": 60,
              "failureReason": "ICH volume at/above FASTEST maximum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age 18 to 80 years.",
              "Spontaneous intracerebral hemorrhage.",
              "Able to treat with rFVIIa/placebo within 2 hours of stroke onset or LKW.",
              "Positive spot sign on baseline CTA for Part 2 or treatment within 90 minutes with/without spot sign.",
              "EFIC or country-specific emergency research consent pathway."
            ],
            "exclusion": [
              "GCS score 3 to 7.",
              "Secondary ICH including trauma, aneurysm, AVM, anticoagulant use within past 7 days, or coagulopathy.",
              "ICH volume <2 mL or â‰¥60 mL.",
              "Large intraventricular blood burden.",
              "Pre-existing disability mRS >2.",
              "Symptomatic thrombotic/vaso-occlusive disease in past 90 days.",
              "Clinical/EKG evidence of acute myocardial ischemia.",
              "Brainstem hemorrhage.",
              "Known/suspected thrombocytopenia or other protocol exclusions."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/15kdao7gwa3d7i3yqxypkrh2xxytihpz"
          }
        ]
      },
      "contact": {
        "pi": "Peter Panagos",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "SATURN",
      "status": "active",
      "overview": {
        "title": "Statins Use in Intracerebral Hemorrhage Patients",
        "shortName": "SATURN",
        "strokeType": "Hemorrhagic",
        "category": "Lobar ICH; statin continuation/discontinuation"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 50,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": 3,
            "lknHoursMax": 168,
            "strokeType": "Hemorrhagic",
            "strokeSubtype": "Spontaneous lobar ICH on statin",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R015",
              "variable": "age",
              "operator": ">=",
              "value": 50,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R018",
              "variable": "lknHours",
              "operator": "<=",
              "value": 168,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q010",
              "text": "ICH volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "ichVolume",
              "required": true
            },
            {
              "id": "Q011",
              "text": "ICH location",
              "inputType": "select",
              "options": [
                "Lobar",
                "Basal ganglia",
                "Thalamic",
                "Brainstem",
                "Cerebellar",
                "Infratentorial",
                "Primary IVH",
                "Other",
                "Unknown"
              ],
              "variable": "ichLocation",
              "required": true
            },
            {
              "id": "Q013",
              "text": "Is there suspected secondary ICH cause?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "secondaryICH",
              "required": true
            },
            {
              "id": "Q020",
              "text": "Is patient currently taking statin at ICH onset?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "statinAtOnset",
              "required": true
            },
            {
              "id": "Q032",
              "text": "Does patient have terminal illness or life expectancy below protocol threshold?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "terminalIllness",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R016",
              "variable": "baselineMrs",
              "operator": "<=",
              "value": 3,
              "failureReason": "Baseline mRS above protocol maximum"
            },
            {
              "id": "R017",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age â‰¥50 years.",
              "Spontaneous lobar ICH within 7 days prior to randomization confirmed by CT or MRI.",
              "Patient was taking statin drug at onset of qualifying ICH.",
              "Randomization within 7 days of ICH onset.",
              "Patient or LAR agrees to randomization to statin continuation versus discontinuation."
            ],
            "exclusion": [
              "Suspected secondary cause of qualifying ICH.",
              "Recent MI or unstable angina within previous 3 months.",
              "Diabetes with prior MI or coronary revascularization.",
              "Familial hypercholesterolemia.",
              "Receiving PCSK9 inhibitor.",
              "Severe dementia.",
              "Unable to obtain informed consent.",
              "Noncompliance risk due to alcohol/drug dependency or other reason.",
              "Life expectancy <24 months.",
              "Premorbid mRS >3.",
              "ICH score >3."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/6tg61xbj9f6zdqpsx8b1v4f9bxbbro4l"
          }
        ]
      },
      "contact": {
        "pi": "Yan Wang",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "SISTER",
      "status": "active",
      "overview": {
        "title": "Strategy for Improving Stroke Treatment Response",
        "shortName": "SISTER",
        "strokeType": "Ischemic",
        "category": "AIS thrombolysis adjunct"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": null,
            "lknHoursMax": null,
            "strokeType": "Ischemic",
            "strokeSubtype": "AIS; verify",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R024",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q003",
              "text": "Is there a large vessel/intracranial occlusion on CTA/MRA?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "lvo",
              "required": true
            },
            {
              "id": "Q004",
              "text": "Occlusion location",
              "inputType": "select",
              "options": [
                "ICA",
                "M1",
                "M2",
                "ACA",
                "PCA",
                "Basilar",
                "Vertebral",
                "MVO/DVO",
                "None",
                "Unknown"
              ],
              "variable": "occlusionLocation",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R025",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Acute ischemic stroke candidate for TS23 adjunct/dose-finding study.",
              "Detailed inclusion criteria require manual verification from SISTER full protocol/synopsis."
            ],
            "exclusion": [
              "Detailed exclusion criteria require manual verification from SISTER full protocol/synopsis."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/tpioi7257ykn2rpcuu8g68teikvjf0pp"
          }
        ]
      },
      "contact": {
        "pi": "Charlie Kircher",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "STEP",
      "status": "active",
      "overview": {
        "title": "StrokeNet Thrombectomy Endovascular Platform Domain A EVT Indication Expansion",
        "shortName": "STEP",
        "strokeType": "Ischemic",
        "category": "EVT indication expansion; low NIHSS/MVO-DVO"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": null,
            "nihssMin": 0,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": 2,
            "lknHoursMax": 24,
            "strokeType": "Ischemic",
            "strokeSubtype": "Low NIHSS LVO or MVO/DVO",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R026",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R027",
              "variable": "nihss",
              "operator": ">=",
              "value": 0,
              "failureReason": "NIHSS below protocol minimum"
            },
            {
              "id": "R030",
              "variable": "lknHours",
              "operator": "<=",
              "value": 24,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q003",
              "text": "Is there a large vessel/intracranial occlusion on CTA/MRA?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "lvo",
              "required": true
            },
            {
              "id": "Q004",
              "text": "Occlusion location",
              "inputType": "select",
              "options": [
                "ICA",
                "M1",
                "M2",
                "ACA",
                "PCA",
                "Basilar",
                "Vertebral",
                "MVO/DVO",
                "None",
                "Unknown"
              ],
              "variable": "occlusionLocation",
              "required": true
            },
            {
              "id": "Q005",
              "text": "ASPECTS score",
              "inputType": "number",
              "options": [],
              "variable": "aspects",
              "required": true
            },
            {
              "id": "Q006",
              "text": "Core infarct volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "coreVolume",
              "required": true
            },
            {
              "id": "Q029",
              "text": "Active infection/endocarditis/septic embolus suspected?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "infection",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R028",
              "variable": "baselineMrs",
              "operator": "<=",
              "value": 2,
              "failureReason": "Baseline mRS above protocol maximum"
            },
            {
              "id": "R029",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age â‰¥18 years.",
              "Pre-stroke mRS 0-2.",
              "Presentation to enrolling hospital within 24 hours of LKW/stroke onset.",
              "Able to initiate arterial puncture within 2 hours from qualifying CTA/MRA or CTP/MRP imaging.",
              "Low NIHSS LVO stratum: NIHSS 0-5 with focal deficit attributable to target occlusion and complete intracranial ICA or M1 MCA occlusion.",
              "MVO/DVO stratum: visualized occlusion or perfusion deficit supportive of cortical branch occlusion, with NIHSS criteria per protocol."
            ],
            "exclusion": [
              "Presumed septic embolus or suspicion of bacterial endocarditis.",
              "Seizure at stroke onset or between onset and enrollment.",
              "Known anaphylactic contrast reaction precluding EVT.",
              "Intracranial occlusion suspected chronic.",
              "Imaging exclusions including low ASPECTS/core limits per protocol."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/yeidw1hmx63ws5idsde746um2ps5fbzg"
          }
        ]
      },
      "contact": {
        "pi": "Andria Ford",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "ORION",
      "status": "paused",
      "overview": {
        "title": "Optimizing Reperfusion to Improve Outcomes and Neurologic Function",
        "shortName": "ORION",
        "strokeType": "Ischemic",
        "category": "AIS late presentation reperfusion adjunct"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": 90,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": null,
            "lknHoursMax": null,
            "strokeType": "Ischemic",
            "strokeSubtype": "AIS occlusion/perfusion deficit",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R007",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R008",
              "variable": "age",
              "operator": "<=",
              "value": 90,
              "failureReason": "Age above protocol maximum"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q003",
              "text": "Is there a large vessel/intracranial occlusion on CTA/MRA?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "lvo",
              "required": true
            },
            {
              "id": "Q004",
              "text": "Occlusion location",
              "inputType": "select",
              "options": [
                "ICA",
                "M1",
                "M2",
                "ACA",
                "PCA",
                "Basilar",
                "Vertebral",
                "MVO/DVO",
                "None",
                "Unknown"
              ],
              "variable": "occlusionLocation",
              "required": true
            },
            {
              "id": "Q005",
              "text": "ASPECTS score",
              "inputType": "number",
              "options": [],
              "variable": "aspects",
              "required": true
            },
            {
              "id": "Q006",
              "text": "Core infarct volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "coreVolume",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R009",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age 18 to 90 years; age >85 requires baseline mRS 0.",
              "Acute ischemic stroke with compatible presentation.",
              "Symptomatic high-grade or complete occlusion of eligible intracranial ICA/MCA/ACA/PCA territory or perfusion deficit in eligible territory.",
              "Late-presentation criteria per protocol; confirm exact window and imaging mismatch."
            ],
            "exclusion": [
              "Core infarct volume >70 mL or extensive early ischemic change >1/3 MCA territory.",
              "Occlusion in more than one vascular territory.",
              "Other neurovascular imaging exclusions per protocol."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/rwf5b7e2l6nbs0rgwy5ar756311kfz6z"
          }
        ]
      },
      "contact": {
        "pi": "Andria Ford",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "RAISE",
      "status": "active",
      "overview": {
        "title": "Recanalization in Acute Ischemic StrokE",
        "shortName": "RAISE",
        "strokeType": "Ischemic",
        "category": "AIS-LVO; investigational adjunct"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": null,
            "lknHoursMax": 24,
            "strokeType": "Ischemic",
            "strokeSubtype": "Anterior circulation intracranial occlusion",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R019",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R021",
              "variable": "lknHours",
              "operator": "<=",
              "value": 24,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q003",
              "text": "Is there a large vessel/intracranial occlusion on CTA/MRA?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "lvo",
              "required": true
            },
            {
              "id": "Q004",
              "text": "Occlusion location",
              "inputType": "select",
              "options": [
                "ICA",
                "M1",
                "M2",
                "ACA",
                "PCA",
                "Basilar",
                "Vertebral",
                "MVO/DVO",
                "None",
                "Unknown"
              ],
              "variable": "occlusionLocation",
              "required": true
            },
            {
              "id": "Q005",
              "text": "ASPECTS score",
              "inputType": "number",
              "options": [],
              "variable": "aspects",
              "required": true
            },
            {
              "id": "Q006",
              "text": "Core infarct volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "coreVolume",
              "required": true
            },
            {
              "id": "Q014",
              "text": "INR",
              "inputType": "number",
              "options": [],
              "variable": "inr",
              "required": true
            },
            {
              "id": "Q015",
              "text": "Platelet count",
              "inputType": "number",
              "options": [],
              "variable": "platelets",
              "required": true
            },
            {
              "id": "Q016",
              "text": "Current/recent anticoagulant use or anticoagulant indication?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "anticoagulant",
              "required": true
            },
            {
              "id": "Q029",
              "text": "Active infection/endocarditis/septic embolus suspected?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "infection",
              "required": true
            },
            {
              "id": "Q030",
              "text": "Recent surgery, active bleeding, or bleeding diathesis?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "bleedingRisk",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R020",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            },
            {
              "id": "R048",
              "variable": "coreVolume",
              "operator": "<=",
              "value": 50,
              "failureReason": "Core volume above RAISE threshold"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Clinical diagnosis of acute ischemic stroke.",
              "Age â‰¥18 years.",
              "Anterior circulation intracranial occlusion relevant to symptoms/signs; tandem extracranial carotid occlusions permitted if no concurrent IV antiplatelet indication.",
              "Stroke onset/LKW within 24 hours of enrollment.",
              "Informed consent before study-specific procedure."
            ],
            "exclusion": [
              "Large volume ischemic stroke: ASPECTS 0-6 on CT or 0-5 on MR-DWI, predicted core >50 cc, or completed infarct >50 cc.",
              "Any intracranial hemorrhage on baseline imaging.",
              "Suspected chronic intracranial occlusion.",
              "Weight >125 kg.",
              "Thrombolytic drug in prior 24 hours or planned during acute treatment period.",
              "GPIIb/IIIa inhibitor in prior 24 hours or planned during acute treatment period.",
              "Clinically significant coagulopathy, platelet <100,000/ÂµL, or INR >1.4.",
              "Active uncontrolled bleeding.",
              "Recent surgery within 30 days where bleeding not controllable by compression.",
              "Oral anticoagulant effect or full-dose oral anticoagulant within 24 hours.",
              "Stroke within past 90 days or prior ICH."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/hy90scnswsd4p9x0qhd98cwcj9owtxtl"
          }
        ]
      },
      "contact": {
        "pi": "Charlie Kircher",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "NUVISTA2",
      "status": "active",
      "overview": {
        "title": "NUVISTA 2",
        "shortName": "NUVISTA 2",
        "strokeType": null,
        "category": null
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": null,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": null,
            "mrsMax": null,
            "lknHoursMax": null,
            "strokeType": null,
            "strokeSubtype": null,
            "gender": null
          },
          "logicRules": []
        },
        "secondary": {
          "questions": [],
          "logicRules": [
            {
              "id": null,
              "variable": null,
              "operator": null,
              "value": null,
              "failureReason": null
            }
          ],
          "criteriaText": {
            "criteria": [
              null
            ]
          }
        }
      },
      "resources": {
        "links": []
      },
      "contact": {
        "pi": "Osvaldo Laurido-Soto",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "SELECTLATE",
      "status": "active",
      "overview": {
        "title": "Medical Management with Endovascular Thrombectomy versus Medical Management Alone Beyond 24 Hours",
        "shortName": "SELECT LATE",
        "strokeType": "Ischemic",
        "category": "Late-window AIS-LVO thrombectomy"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 24,
            "mrsMax": null,
            "lknHoursMax": null,
            "strokeType": "Ischemic",
            "strokeSubtype": "Late-window LVO; verify",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R022",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q003",
              "text": "Is there a large vessel/intracranial occlusion on CTA/MRA?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "lvo",
              "required": true
            },
            {
              "id": "Q004",
              "text": "Occlusion location",
              "inputType": "select",
              "options": [
                "ICA",
                "M1",
                "M2",
                "ACA",
                "PCA",
                "Basilar",
                "Vertebral",
                "MVO/DVO",
                "None",
                "Unknown"
              ],
              "variable": "occlusionLocation",
              "required": true
            },
            {
              "id": "Q005",
              "text": "ASPECTS score",
              "inputType": "number",
              "options": [],
              "variable": "aspects",
              "required": true
            },
            {
              "id": "Q006",
              "text": "Core infarct volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "coreVolume",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R023",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 24,
              "failureReason": "Baseline mRS below protocol minimum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Suspected late-window acute ischemic stroke beyond 24 hours from LKW.",
              "Large vessel occlusion candidate for EVT versus medical management.",
              "Exact inclusion criteria require manual verification from SELECT Late protocol eligibility section."
            ],
            "exclusion": [
              "Protocol-specific exclusion criteria require manual verification; parsed PDF did not yield clean eligibility list."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/4fkedu80405tswnp7rblcv2oqmpbogz4"
          }
        ]
      },
      "contact": {
        "pi": "Brendan Eby",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "TESTED",
      "status": "active",
      "overview": {
        "title": "Treatment with Endovascular Intervention for Stroke Patients with Existing Disability",
        "shortName": "TESTED",
        "strokeType": "Ischemic",
        "category": "AIS-LVO with pre-stroke disability"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": null,
            "nihssMin": 6,
            "nihssMax": null,
            "mrsMin": 3,
            "mrsMax": 4,
            "lknHoursMax": 24,
            "strokeType": "Ischemic",
            "strokeSubtype": "LVO-AIS with prestroke mRS 3-4",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R031",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R032",
              "variable": "nihss",
              "operator": ">=",
              "value": 6,
              "failureReason": "NIHSS below protocol minimum"
            },
            {
              "id": "R035",
              "variable": "lknHours",
              "operator": "<=",
              "value": 24,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q003",
              "text": "Is there a large vessel/intracranial occlusion on CTA/MRA?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "lvo",
              "required": true
            },
            {
              "id": "Q004",
              "text": "Occlusion location",
              "inputType": "select",
              "options": [
                "ICA",
                "M1",
                "M2",
                "ACA",
                "PCA",
                "Basilar",
                "Vertebral",
                "MVO/DVO",
                "None",
                "Unknown"
              ],
              "variable": "occlusionLocation",
              "required": true
            },
            {
              "id": "Q005",
              "text": "ASPECTS score",
              "inputType": "number",
              "options": [],
              "variable": "aspects",
              "required": true
            },
            {
              "id": "Q032",
              "text": "Does patient have terminal illness or life expectancy below protocol threshold?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "terminalIllness",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R033",
              "variable": "baselineMrs",
              "operator": "<=",
              "value": 4,
              "failureReason": "Baseline mRS above protocol maximum"
            },
            {
              "id": "R034",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 3,
              "failureReason": "Baseline mRS below protocol minimum"
            },
            {
              "id": "R049",
              "variable": "aspects",
              "operator": ">=",
              "value": 3,
              "failureReason": "ASPECTS below TESTED CT threshold"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age â‰¥18 years.",
              "Pre-stroke mRS 3-4 for at least 3 months prior to stroke onset.",
              "Presentation within 24 hours of LKW.",
              "Diagnosis of acute ischemic stroke.",
              "Intracranial causative occlusion of ICA, M1, or dominant M2 on CTA/MRA.",
              "CT ASPECTS â‰¥3 or MRI ASPECTS â‰¥4.",
              "NIHSS â‰¥6.",
              "Consent from patient if competent or LAR."
            ],
            "exclusion": [
              "Terminal cancer or terminal illness at time of stroke.",
              "Pre-stroke functional status assessment cannot be performed during hospitalization.",
              "Pre-stroke disability deemed temporary.",
              "Stroke onset during an acute inpatient hospital stay."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/tm6lnnesafhr4tdvuopmalm1f3au9i6g"
          }
        ]
      },
      "contact": {
        "pi": "Charlie Kircher",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "MINUTE",
      "status": "active",
      "overview": {
        "title": "Minimally Invasive Neuroendoscopic Ultra-Early Targeted ICH Evacuation",
        "shortName": "MINUTE",
        "strokeType": "Hemorrhagic",
        "category": "Spontaneous basal ganglia ICH; surgical evacuation"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 18,
            "maxAge": 80,
            "nihssMin": 6,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": 2,
            "lknHoursMax": 16,
            "strokeType": "Hemorrhagic",
            "strokeSubtype": "Basal ganglia ICH â‰¥20 mL",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R001",
              "variable": "age",
              "operator": ">=",
              "value": 18,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R002",
              "variable": "age",
              "operator": "<=",
              "value": 80,
              "failureReason": "Age above protocol maximum"
            },
            {
              "id": "R003",
              "variable": "nihss",
              "operator": ">=",
              "value": 6,
              "failureReason": "NIHSS below protocol minimum"
            },
            {
              "id": "R006",
              "variable": "lknHours",
              "operator": "<=",
              "value": 16,
              "failureReason": "Outside maximum LKW/onset window"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q010",
              "text": "ICH volume in mL",
              "inputType": "number",
              "options": [],
              "variable": "ichVolume",
              "required": true
            },
            {
              "id": "Q011",
              "text": "ICH location",
              "inputType": "select",
              "options": [
                "Lobar",
                "Basal ganglia",
                "Thalamic",
                "Brainstem",
                "Cerebellar",
                "Infratentorial",
                "Primary IVH",
                "Other",
                "Unknown"
              ],
              "variable": "ichLocation",
              "required": true
            },
            {
              "id": "Q012",
              "text": "Is there intraventricular hemorrhage?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "ivh",
              "required": true
            },
            {
              "id": "Q013",
              "text": "Is there suspected secondary ICH cause?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "secondaryICH",
              "required": true
            },
            {
              "id": "Q014",
              "text": "INR",
              "inputType": "number",
              "options": [],
              "variable": "inr",
              "required": true
            },
            {
              "id": "Q015",
              "text": "Platelet count",
              "inputType": "number",
              "options": [],
              "variable": "platelets",
              "required": true
            },
            {
              "id": "Q016",
              "text": "Current/recent anticoagulant use or anticoagulant indication?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "anticoagulant",
              "required": true
            },
            {
              "id": "Q017",
              "text": "Pregnant or breastfeeding?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "pregnancy",
              "required": true
            },
            {
              "id": "Q019",
              "text": "CTA/MRA shows underlying vascular lesion?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "vascularLesion",
              "required": true
            },
            {
              "id": "Q022",
              "text": "Can procedure/treatment be initiated within protocol-specific time window?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "timeFeasible",
              "required": true
            },
            {
              "id": "Q031",
              "text": "GCS score",
              "inputType": "number",
              "options": [
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15"
              ],
              "variable": "gcs",
              "required": true
            },
            {
              "id": "Q032",
              "text": "Does patient have terminal illness or life expectancy below protocol threshold?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "terminalIllness",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R004",
              "variable": "baselineMrs",
              "operator": "<=",
              "value": 2,
              "failureReason": "Baseline mRS above protocol maximum"
            },
            {
              "id": "R005",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            },
            {
              "id": "R043",
              "variable": "ichVolume",
              "operator": ">=",
              "value": 20,
              "failureReason": "ICH volume below MINUTE threshold"
            },
            {
              "id": "R044",
              "variable": "ichLocation",
              "operator": "==",
              "value": "Basal ganglia",
              "failureReason": "ICH location not basal ganglia"
            },
            {
              "id": "R045",
              "variable": "inr",
              "operator": "<=",
              "value": 1.4,
              "failureReason": "INR above MINUTE limit"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age 18 to 80 years.",
              "Non-traumatic spontaneous supratentorial non-thalamic basal ganglia ICH volume â‰¥20 mL by ABC/2.",
              "NIHSS â‰¥6 at presentation.",
              "CTA or MRA performed and does not show underlying vascular lesion.",
              "Pre-ICH mRS 0-2.",
              "Consent from patient or LAR and intent to pursue lifesaving therapies.",
              "Treating physician anticipates surgery can be initiated <120 minutes from randomization.",
              "Randomization within 16 hours from LKW and within 2 hours of arrival to randomizing center."
            ],
            "exclusion": [
              "Suspected secondary cause of ICH.",
              "Infratentorial or thalamic hemorrhage.",
              "Midbrain extension/involvement.",
              "INR >1.4 or aPTT >40 seconds.",
              "DOAC or low molecular weight heparin use at ICH onset.",
              "Known hemorrhagic diathesis or coagulation factor deficiency.",
              "Platelets <100,000/mm3 or known platelet dysfunction.",
              "GCS <7 at presentation.",
              "Active infection at enrollment.",
              "Comorbidity compromising survival/follow-up through 365 days.",
              "IVH visually estimated to involve >50% of either lateral ventricle.",
              "Pregnancy."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/ax57phs50rsnmcpdjlmyyqjoxz561wq0"
          }
        ]
      },
      "contact": {
        "pi": "Raj Dhar",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    },
    {
      "id": "CLARITY",
      "status": "active",
      "overview": {
        "title": "Cilostazol for Prevention of Recurrent Stroke Trial",
        "shortName": "CLARITY",
        "strokeType": "Ischemic/TIA",
        "category": "Secondary stroke prevention"
      },
      "screening": {
        "initial": {
          "criteria": {
            "minAge": 40,
            "maxAge": null,
            "nihssMin": null,
            "nihssMax": null,
            "mrsMin": 0,
            "mrsMax": 4,
            "lknHoursMax": 4320,
            "strokeType": "Ischemic/TIA",
            "strokeSubtype": "Secondary prevention",
            "gender": "Any"
          },
          "logicRules": [
            {
              "id": "R039",
              "variable": "age",
              "operator": ">=",
              "value": 40,
              "failureReason": "Age below protocol minimum"
            },
            {
              "id": "R042",
              "variable": "lknHours",
              "operator": "<=",
              "value": 4320,
              "failureReason": "Outside maximum LKW/onset window"
            },
            {
              "id": "R051",
              "variable": "age",
              "operator": ">=",
              "value": 40,
              "failureReason": "Age below CLARITY minimum"
            }
          ]
        },
        "secondary": {
          "questions": [
            {
              "id": "Q001",
              "text": "Has informed consent or LAR consent been obtained/feasible?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No"
              ],
              "variable": "consent",
              "required": true
            },
            {
              "id": "Q002",
              "text": "Is stroke type ischemic, hemorrhagic, TIA, or non-stroke?",
              "inputType": "select",
              "options": [
                "Ischemic",
                "Hemorrhagic",
                "TIA",
                "Non-stroke",
                "Unknown"
              ],
              "variable": "strokeType",
              "required": true
            },
            {
              "id": "Q007",
              "text": "Premorbid/baseline mRS",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
              ],
              "variable": "baselineMrs",
              "required": true
            },
            {
              "id": "Q008",
              "text": "NIHSS at presentation",
              "inputType": "number",
              "options": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42"
              ],
              "variable": "nihss",
              "required": true
            },
            {
              "id": "Q009",
              "text": "Hours from last known well/onset",
              "inputType": "number",
              "options": [],
              "variable": "lknHours",
              "required": true
            },
            {
              "id": "Q016",
              "text": "Current/recent anticoagulant use or anticoagulant indication?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "anticoagulant",
              "required": true
            },
            {
              "id": "Q017",
              "text": "Pregnant or breastfeeding?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "pregnancy",
              "required": true
            },
            {
              "id": "Q027",
              "text": "High-risk TIA ABCD2 score â‰¥6?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "abcd2High",
              "required": true
            },
            {
              "id": "Q028",
              "text": "â‰¥50% intracranial or extracranial stenosis/occlusion?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "stenosis50",
              "required": true
            },
            {
              "id": "Q032",
              "text": "Does patient have terminal illness or life expectancy below protocol threshold?",
              "inputType": "yesno",
              "options": [
                "Yes",
                "No",
                "Unknown"
              ],
              "variable": "terminalIllness",
              "required": true
            }
          ],
          "logicRules": [
            {
              "id": "R040",
              "variable": "baselineMrs",
              "operator": "<=",
              "value": 4,
              "failureReason": "Baseline mRS above protocol maximum"
            },
            {
              "id": "R041",
              "variable": "baselineMrs",
              "operator": ">=",
              "value": 0,
              "failureReason": "Baseline mRS below protocol minimum"
            }
          ],
          "criteriaText": {
            "inclusion": [
              "Age â‰¥40 years.",
              "Ischemic stroke or high-risk TIA with ABCD2 â‰¥6 by AHA criteria.",
              "Randomization within 180 days after event.",
              "Expected to be on aspirin or clopidogrel monotherapy at randomization.",
              "At least one: â‰¥50% intracranial stenosis, â‰¥50% extracranial carotid/vertebral stenosis or occlusion, or two or more vascular risk factors.",
              "Medically stable and able/willing to attend follow-up.",
              "Signed informed consent by patient or LAR."
            ],
            "exclusion": [
              "Use/indication for anticoagulant medication.",
              "Use of prohibited medications.",
              "mRS 5.",
              "Scheduled cardiac surgery, PCI, carotid endarterectomy or stenting during trial period.",
              "Symptomatic non-traumatic ICH within last 2 years.",
              "Platelets â‰¤100,000/ÂµL.",
              "Severe liver dysfunction: active hepatitis or Child-Pugh B/C.",
              "Pregnant, breastfeeding, or childbearing potential without birth control.",
              "Heart failure with current/prior symptoms/signs.",
              "Hypersensitivity to cilostazol.",
              "Currently enrolled in investigational intervention study.",
              "Life expectancy <6 months.",
              "Incarcerated or compulsorily detained."
            ]
          }
        }
      },
      "resources": {
        "links": [
          {
            "label": "Protocol / source document",
            "url": "https://wustl.box.com/s/8gun3z6v0j9p5k90ghsv9zqj9ezkywqf"
          }
        ]
      },
      "contact": {
        "pi": "Andria Ford",
        "coordinator": null,
        "coordinatorEmail": null,
        "coordinatorPhone": null,
        "backupContact": null,
        "notes": "Edit contact fields in SharePoint workbook; export as Study_Contacts.csv"
      }
    }
  ]
};

