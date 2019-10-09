import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-leads-panel',
  templateUrl: './sales-leads-panel.component.html',
  styleUrls: ['./sales-leads-panel.component.scss']
})

export class SalesLeadsPanelComponent implements OnInit {

  showSalesList:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addLead() {
    this.showSalesList = false;
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