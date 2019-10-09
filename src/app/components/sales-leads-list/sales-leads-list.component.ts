import { Component, OnInit, Output } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';
import { setTimeout } from 'timers';

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

  /* get salesLeadsArray() {
    if(this.salesLeads) {
      return this.salesLeads;
    }
  } */

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

      // TODO this is not showing the updated list from the server, even though I am making a new call
      // I tried making a getter for the array to help (think computed property) cause it worked for salesLeadsPopulated
      // But I don't think that is going to help b/c the problem is that salesLeads is returned without the new sales lead info I just added in the previous move.
      // SOLUTION: see setTimeout above. Seems like a race condition
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
