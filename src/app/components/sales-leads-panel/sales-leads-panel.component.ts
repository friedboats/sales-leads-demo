import { Component, OnInit } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-panel',
  templateUrl: './sales-leads-panel.component.html',
  styleUrls: ['./sales-leads-panel.component.scss']
})

export class SalesLeadsPanelComponent implements OnInit {
  salesLeads:SalesLead[];

  showSalesList:boolean = true;

  constructor(private salesLeadService:SalesLeadService) { }

  ngOnInit() {
  }

  addLead() {
    this.showSalesList = false;
  }

  saveForm() {
    console.log("save form");

    // TODO on complete, run these lines
    this.showSalesList = true;
    //this.loadSalesLeads();
  } 

  cancelForm() {
    this.showSalesList = true;

    //this.loadSalesLeads();
  }
}