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
      console.log("I HEARD YOU POST MAN");
      this.loadSalesLeads();
    });
  }

  loadSalesLeads() {
    this.isLoading = true;

    this.salesLeadService.getSalesLeads().subscribe(salesLeads => {
      this.salesLeads = salesLeads;

      // TODO this is blank ONLY when I have deleted the list, added a new sales lead and return to the list page, but is not blank when I have not deleted everything
      console.log(salesLeads);
      this.isLoading = false;
    });  
  }

  deleteSalesLead(salesLead:SalesLead) {
    // Delete from UI
    // If one of the ids in salesLeads matches the id to be deleted, then delete it
    this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);

    // Delete from server
    // TODO tried to delete from UI after the response came back, but salesLead was undefined
    this.salesLeadService.deleteSalesLead(salesLead).subscribe();
  }
}
