import { Component, OnInit } from '@angular/core';
import { SalesLeadService } from '@services/sales-lead.service';

@Component({
  selector: 'app-sales-leads-panel',
  templateUrl: './sales-leads-panel.component.html',
  styleUrls: ['./sales-leads-panel.component.scss']
})

export class SalesLeadsPanelComponent implements OnInit {

  // Used to toggle the sales leads list and form states
  showSalesList:boolean = true;
 
  // Pass in SalesLeadService
  constructor(private salesLeadService:SalesLeadService) { }

  // Component init
  ngOnInit() {
    // Subscribes to when the Sales Leads list is triggered to show
    this.salesLeadService.showSalesList.subscribe((bool) => { 
      // Used as a flag to change the state on the DOM between the list and the form components     
      this.showSalesList = bool;
    });

    // Subscribes to when a new Sales Leads was added to the server
    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => { 
      // Automatically send user to the list to see their newly added sales lead     
      this.showSalesList = true;
    });
  }

  // Fires when leads list hears it's event addLeadClick
  showSalesLeadsForm() {
    // Emit out to components that the state of showSalesList to toggle the state between the form and list
    this.salesLeadService.showSalesList.emit(false);
  }

  // Fires when leads form hears it's event canceled
  showSalesLeadsList() {
    // Emit out to components that the state of showSalesList to toggle the state between the form and list
    this.salesLeadService.showSalesList.emit(true);
  }

}