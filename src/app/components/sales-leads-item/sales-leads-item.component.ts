import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SalesLeadService } from '../../services/sales-lead.service';

import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-item',
  templateUrl: './sales-leads-item.component.html',
  styleUrls: ['./sales-leads-item.component.scss']
})
export class SalesLeadsItemComponent implements OnInit {
  @Input() salesLead: SalesLead;
  @Output() deleteSalesLead: EventEmitter<SalesLead> = new EventEmitter();

  constructor(private salesLeadService:SalesLeadService) { }

  ngOnInit() {
  }

  onDelete(salesLead) {
    this.deleteSalesLead.emit(salesLead);
  }
}
