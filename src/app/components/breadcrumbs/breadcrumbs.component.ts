import { Component, OnInit } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {
  
  salesListSelected = true;

  constructor(private salesLeadService:SalesLeadService) { }

  get listSelected() {
    return this.salesListSelected;
  }

  ngOnInit() {
    this.salesLeadService.showSalesList.subscribe((bool) => { 
      this.salesListSelected = bool;
    });
  }

  salesLeadsClick() {
    this.salesLeadService.showSalesList.emit(true);
  }
}
