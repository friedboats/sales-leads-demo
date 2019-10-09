import { Component, OnInit, Output } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-list',
  templateUrl: './sales-leads-list.component.html',
  styleUrls: ['./sales-leads-list.component.scss']
})

export class SalesLeadsListComponent implements OnInit {
  salesLeads:SalesLead[];

  isLoading:boolean = true;

  constructor(private salesLeadService:SalesLeadService) { }

  get salesLeadsPopulated() {
    if(this.salesLeads) {
      return this.salesLeads.length > 0;
    }
  }

  ngOnInit() {
    this.loadSalesLeads();

    // Subscribe to when the form makes a successful post so we can update our compontent with the new data
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {
      this.loadSalesLeads();
    });
  }

  loadSalesLeads() {
    console.log("loadSalesLeads");
    this.isLoading = true;

    this.salesLeadService.getSalesLeads().subscribe(salesLeads => {
      this.salesLeads = salesLeads;

      console.log(this.salesLeads.length);
      this.isLoading = false;
    });  
  }

  deleteSalesLead(salesLead:SalesLead) {
    // Delete from UI
    // If one of the ids in salesLeads matches the id to be deleted, then delete it
    this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);

    console.log(this.salesLeads);

    // Delete from server
    // TODO tried to delete from UI after the response came back, but salesLead was undefined
    this.salesLeadService.deleteSalesLead(salesLead).subscribe();
  }
}
