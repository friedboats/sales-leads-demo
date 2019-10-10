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

  // Used to update the DOM and manage the current breadcrumb
  get listSelected() {
    return this.salesListSelected;
  }

  // Component init
  ngOnInit() {
    this.salesLeadService.showSalesList.subscribe((bool) => { 
      this.salesListSelected = bool;
    });
  }

  // Fires when sales leads button is clicked
  salesLeadsClick() {
    this.salesLeadService.showSalesList.emit(true);
  }
}