import { Component, OnInit } from '@angular/core';
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

  deleteSalesLead(salesLead:SalesLead) {
    // Delete from UI
    this.salesLeads = this.salesLeads.filter(lead => lead.id !== salesLead.id);

    // Delete from server
    // TODO tried to delete from UI after the response came back, but salesLead was undefined
    this.salesLeadService.deleteSalesLead(salesLead).subscribe();
  }
}
