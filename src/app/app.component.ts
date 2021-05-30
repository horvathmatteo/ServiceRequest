import { Component } from '@angular/core';
import { ServiceRequest } from './models/service-request';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serviceExample: ServiceRequest;

  title = 'ServiceRequest';


  constructor(private titleService: TitleService) {
    this.titleService.refreshTitle();
    this.serviceExample = {
      "resourceType": "ServiceRequest",
      "id": "lipid",
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: lipid</p><p><b>contained</b>: , </p><p><b>identifier</b>: Placer = 2345234234234</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Lipid Panel <span>(Details : {http://acme.org/tests code 'LIPID' = 'LIPID)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 02/05/2013 4:16:00 PM</p><p><b>requester</b>: <a>Practitioner/example</a></p><p><b>performer</b>: <a>Practitioner/f202</a></p><p><b>reasonCode</b>: Fam hx-ischem heart dis <span>(Details : {ICD-9 code 'V173' = 'V173', given as 'Fam hx-ischem heart dis'})</span></p><p><b>supportingInfo</b>: Fasting status. Generated Summary: id: fasting; status: final; Fasting status - Reported <span>(Details : {LOINC code '49541-6' = 'Fasting status - Reported', given as 'Fasting status - Reported'})</span>; Yes <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0136 code 'Y' = 'Yes', given as 'Yes'})</span></p><p><b>specimen</b>: Serum specimen. Generated Summary: id: serum; 20150107-0012; Serum sample <span>(Details : {SNOMED CT code '119364003' = 'Serum specimen', given as 'Serum sample'})</span></p><p><b>note</b>: patient is afraid of needles</p></div>"
      },
      
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "PLAC"
              }
            ],
            "text": "Placer"
          },
          "system": "urn:oid:1.3.4.5.6.7",
          "value": "2345234234234"
        }
      ],
      "status": "active",
      "intent": "original-order",
      "code": {
        "coding": [
          {
            "system": "http://acme.org/tests",
            "code": "LIPID"
          }
        ],
        "text": "Lipid Panel"
      },
      "subject": {
        "reference": "Patient/example"
      },
      "encounter": {
        "reference": "Encounter/example"
      },
      "occurrenceDateTime": "2013-05-02T16:16:00-07:00",
      "requester": {
        "reference": "Practitioner/example"
      },
      "performer": [
        {
          "reference": "Practitioner/f202"
        }
      ],
      "reasonCode": [
        {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/icd-9",
              "code": "V173",
              "display": "Fam hx-ischem heart dis"
            }
          ]
        }
      ],
      "supportingInfo": [
        {
          "reference": "#fasting",
          "display": "Fasting status"
        }
      ],
      "specimen": [
        {
          "reference": "#serum",
          "display": "Serum specimen"
        }
      ],
      "note": [
        {
          "text": "patient is afraid of needles"
        }
      ]
    }
  }
}
