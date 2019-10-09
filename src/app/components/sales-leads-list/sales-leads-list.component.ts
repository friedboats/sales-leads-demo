import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-sales-leads-list',
  templateUrl: './sales-leads-list.component.html',
  styleUrls: ['./sales-leads-list.component.scss']
})

export class SalesLeadsListComponent implements OnInit {
  @Output() addLeadClick: EventEmitter<any> = new EventEmitter();

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

  btnAddLeadClicked() {
    this.addLeadClick.emit();
  }

  loadSalesLeads() {
    this.isLoading = true;

    this.salesLeadService.getSalesLeads().subscribe(salesLeads => {
      this.salesLeads = salesLeads;
      this.isLoading = false;
    });  
  }

  deleteSalesLead(salesLead:SalesLead) {
    // Delete from server
    this.salesLeadService.deleteSalesLead(salesLead).subscribe(() => {
      // Delete from UI
      // If one of the ids in salesLeads matches the id to be deleted, then delete it
      this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);
    });
  }
}
