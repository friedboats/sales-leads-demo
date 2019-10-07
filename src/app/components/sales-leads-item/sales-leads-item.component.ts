import { Component, OnInit, Input } from '@angular/core';
import { SalesLead } from '../../models/SalesLead';

@Component({
  selector: 'app-sales-leads-item',
  templateUrl: './sales-leads-item.component.html',
  styleUrls: ['./sales-leads-item.component.scss']
})
export class SalesLeadsItemComponent implements OnInit {
  @Input() salesLead: SalesLead

  constructor() { }

  ngOnInit() {
  }

}
