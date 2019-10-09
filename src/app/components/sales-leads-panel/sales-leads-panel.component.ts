import { Component, OnInit } from '@angular/core';
import { SalesLeadService } from '@services/sales-lead.service';

@Component({
  selector: 'app-sales-leads-panel',
  templateUrl: './sales-leads-panel.component.html',
  styleUrls: ['./sales-leads-panel.component.scss']
})

export class SalesLeadsPanelComponent implements OnInit {

  showSalesList:boolean = true;

  constructor(private salesLeadService:SalesLeadService) { }

  ngOnInit() {
  }

  // show
  addLead() {
    this.showSalesList = false;
  }

  addSalesLead($event) {
    console.log("Event heard");
    console.log($event);
    
    this.salesLeadService.addSalesLead($event).subscribe(() => {
      console.log("POSTED!");
      console.log($event);

      this.showSalesList = true;
    });
  }

  /* saveForm() {
    console.log("save form");

    // TODO on complete, run these lines
    this.showSalesList = true;

    // TODO you have to learn how to send an event out for this
    //this.loadSalesLeads();
  } 

  cancelForm() {
    this.showSalesList = true;
    
    // TODO you have to learn how to send an event out for this
    //this.loadSalesLeads();
  } */
}