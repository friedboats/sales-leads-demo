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
    this.salesLeadService.showSalesList.subscribe((bool) => {      
      this.showSalesList = bool;
    });
  }

  showSalesLeadsForm() {
    this.salesLeadService.showSalesList.emit(false);
  }

  showSalesLeadsList() {
    this.salesLeadService.showSalesList.emit(true);
  }

  addSalesLead($event) {
    this.salesLeadService.addSalesLead($event).subscribe(() => {
      this.showSalesList = true;

      // emit this out to all components
      this.salesLeadService.salesLeadPostSuccessful.emit(true);
    });
  }
}