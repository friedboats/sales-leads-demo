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

  isLoading:boolean = true;

  showSalesList:boolean = true;

  constructor(private salesLeadService:SalesLeadService) { }

  ngOnInit() {
    this.loadSalesLeads();
  }

  loadSalesLeads() {
    this.isLoading = true;

    this.salesLeadService.getSalesLeads().subscribe(salesLeads => {
      this.salesLeads = salesLeads;

      this.isLoading = false;
    });  
  }

  addLead() {
    this.showSalesList = false;
  }

  saveForm() {
    console.log("save form");

    // TODO on complete, run these lines
    this.showSalesList = true;
    this.loadSalesLeads();
  } 

  cancelForm() {
    this.showSalesList = true;

    this.loadSalesLeads();
  }

  deleteSalesLead(salesLead:SalesLead) {
    // Delete from UI
    this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);

    // Delete from server
    // TODO tried to delete from UI after the response came back, but salesLead was undefined
    this.salesLeadService.deleteSalesLead(salesLead).subscribe();
  }
}