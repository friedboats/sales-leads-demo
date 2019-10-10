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

    this.salesLeadService.salesLeadPostSuccessful.subscribe(() => {      
      this.showSalesList = true;
    });
  }

  showSalesLeadsForm() {
    this.salesLeadService.showSalesList.emit(false);
  }

  showSalesLeadsList() {
    this.salesLeadService.showSalesList.emit(true);
  }

}