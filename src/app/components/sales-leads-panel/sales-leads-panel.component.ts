import { Component, OnInit } from '@angular/core';
import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-panel',
  templateUrl: './sales-leads-panel.component.html',
  styleUrls: ['./sales-leads-panel.component.scss']
})
export class SalesLeadsPanelComponent implements OnInit {
  salesLeads:SalesLead[];

  constructor() { }

  ngOnInit() {
      this.salesLeads = [
        {
            "clientName": "Microsoft",
            "leadAmount": 45312343212,
            "updatedAt": "2019-10-02T16:37:02.925Z",
            "createdAt": "2019-10-02T16:37:02.925Z",
            "salesRep": "Cody Potter",
            "leadDate": "2019-05-10T16:32:57.000Z",
            "leadName": "Enterprise Monitoring POC",
            "id": "dcee6fd0-e532-11e9-b734-ff154613238b"
        },
        {
            "clientName": "Taco Bell",
            "leadAmount": 987764,
            "updatedAt": "2019-10-02T16:43:34.117Z",
            "createdAt": "2019-10-02T16:43:34.117Z",
            "salesRep": "Jose Colella",
            "leadDate": "2018-10-10T16:32:57.000Z",
            "leadName": "Point Of Sale Dynatrace Agent Injection POC",
            "id": "c6199950-e533-11e9-b734-ff154613238b"
        },
        {
            "clientName": "Tesla",
            "leadAmount": 12342384335,
            "updatedAt": "2019-10-02T16:47:31.770Z",
            "createdAt": "2019-10-02T16:47:31.770Z",
            "salesRep": "Tom Carrio",
            "leadDate": "2018-07-17T16:32:57.000Z",
            "leadName": "Deep Learning Mars Rover Mission POC",
            "id": "53c091a0-e534-11e9-b734-ff154613238b"
        },
        {
            "clientName": "FritoLay",
            "leadAmount": 154534532,
            "updatedAt": "2019-10-02T16:44:47.170Z",
            "createdAt": "2019-10-02T16:44:47.170Z",
            "salesRep": "Tony Hamama",
            "leadDate": "2019-05-05T16:32:57.000Z",
            "leadName": "Data Center RUM Expansion Monitoring Deal",
            "id": "f1a49a20-e533-11e9-b734-ff154613238b"
        },
        {
            "clientName": "RedHat",
            "leadAmount": 4532343223,
            "updatedAt": "2019-10-02T16:42:30.112Z",
            "createdAt": "2019-10-02T16:42:30.112Z",
            "salesRep": "Dan Dyla",
            "leadDate": "2019-04-03T16:32:57.000Z",
            "leadName": "Docker Initial Public Offering Security Audit",
            "id": "9ff33600-e533-11e9-b734-ff154613238b"
        }
      ];
  }

}
