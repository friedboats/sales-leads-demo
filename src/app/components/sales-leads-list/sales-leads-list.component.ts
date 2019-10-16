import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-list',
  templateUrl: './sales-leads-list.component.html',
  styleUrls: ['./sales-leads-list.component.scss']
})

export class SalesLeadsListComponent implements OnInit {
  // EventEmitter
  @Output() addLeadClick: EventEmitter<any> = new EventEmitter();

  // Sales lead model
  salesLeads:SalesLead[];

  // List is loading flag
  isLoading:boolean = true;

  // Pass in SalesLeadService
  constructor(private salesLeadService:SalesLeadService) { }

  // Getter that tells you if salesLeads has been populated with anything
  // NOTE: Using a getter helps with when you come back to the list state and want to know if there are any leads or not in the list (example: helps with toggling the see more button without needing to refresh)
  get salesLeadsPopulated() {
    if(this.salesLeads) {
      return this.salesLeads.length > 0;
    }
  }

  // Component init
  ngOnInit() {
    // Get sales leads
    this.loadSalesLeads();

    // Subscribe to when the form makes a successful post so we can update our compontent with the new data
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {    
      // Refresh the list with new sales lead
      this.loadSalesLeads();
    });
  }

  // Add lead button click
  btnAddLeadClicked() {
    // Emit to this component that this button was clicked. It will listen for this event and make a call in the parent .ts file.
    this.addLeadClick.emit();
  }

  // Makes the call to get sales leads data
  loadSalesLeads() {
    // Show preloader
    this.isLoading = true;

    // Call and subscribe to the get sales leads call
    this.salesLeadService.getSalesLeads().subscribe(salesLeads => {
      // Set salesLeads to returned data
      this.salesLeads = salesLeads;

      // Hide preloader
      this.isLoading = false;
    });  
  }

  // Deletes sales lead from server and remove from the UI
  deleteSalesLead(salesLead:SalesLead) {
    // Call and subscribe to delete the sales lead from the server
    this.salesLeadService.deleteSalesLead(salesLead).subscribe(() => {
      // Delete from UI when delete call to back end is complete
      // If one of the ids in salesLeads matches the id to be deleted, then delete it
      this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);
    });
  }
}