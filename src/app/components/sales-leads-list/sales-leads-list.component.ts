import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-list',
  templateUrl: './sales-leads-list.component.html',
  styleUrls: ['./sales-leads-list.component.scss']
})

export class SalesLeadsListComponent implements OnInit {
  @Output() addLeadClick: EventEmitter<any> = new EventEmitter();

  // Sales lead model
  salesLeads:SalesLead[];

  // List is loading flag
  isLoading:boolean = true;

  constructor(private salesLeadService:SalesLeadService) { }

  // Getter that tells you if salesLeads has been populated
  get salesLeadsPopulated() {
    if(this.salesLeads) {
      return this.salesLeads.length > 0;
    }
  }

  // Component init
  ngOnInit() {
    this.loadSalesLeads();

    // Subscribe to when the form makes a successful post so we can update our compontent with the new data
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {    
      // Refresh the list  
      this.loadSalesLeads();
    });
  }

  // Add lead button click
  btnAddLeadClicked() {
    this.addLeadClick.emit();
  }

  // Makes the call to get sales leads data
  loadSalesLeads() {
    this.isLoading = true;

    this.salesLeadService.getSalesLeads().subscribe(salesLeads => {
      // Set salesLeads to returned data
      this.salesLeads = salesLeads;
      this.isLoading = false;
    });  
  }

  // Deletes sales lead from server and the UI
  deleteSalesLead(salesLead:SalesLead) {
    // Delete from server
    this.salesLeadService.deleteSalesLead(salesLead).subscribe(() => {
      // Delete from UI
      // If one of the ids in salesLeads matches the id to be deleted, then delete it
      this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);
    });
  }
}