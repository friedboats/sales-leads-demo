import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SalesLead } from '../models/SalesLead';

// HTTP options
const httpOptions = {
  // Header type
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

// Provide the service at the root level (AppModule)
@Injectable({
  providedIn: 'root'
})

export class SalesLeadService {
  // EventEmitters
  salesLeadPostSuccessful: EventEmitter<any> = new EventEmitter();
  showSalesList: EventEmitter<any> = new EventEmitter();

  // Endpoint URL
  salesLeadsUrl:string = 'https://9hw9h6hka3.execute-api.us-east-2.amazonaws.com/dev/leads';

  // Pass in HTTP Client
  constructor(private http:HttpClient) { }

  // Get Sales Leads Observable
  getSalesLeads():Observable<SalesLead[]> {
    return this.http.get<SalesLead[]>(this.salesLeadsUrl);
  }

  // Post Sales Lead Observable
  addSalesLead(data: SalesLead):Observable<SalesLead[]> {
    const url = this.salesLeadsUrl;
    return this.http.post<SalesLead[]>(url, data, httpOptions);
  }

  // Delete Sales Lead Observable
  deleteSalesLead(salesLead: SalesLead):Observable<SalesLead> {
    const url = `${this.salesLeadsUrl}/${salesLead.id}`;
    return this.http.delete<SalesLead>(url, httpOptions);
  }
}