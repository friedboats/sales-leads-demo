import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SalesLead } from '../models/SalesLead';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class SalesLeadService {
  salesLeadPostSuccessful: EventEmitter<any> = new EventEmitter();

  salesLeadsUrl:string = 'https://9hw9h6hka3.execute-api.us-east-2.amazonaws.com/dev/leads';

  constructor(private http:HttpClient) { }

  // Get Sales Leads
  getSalesLeads():Observable<SalesLead[]> {
    return this.http.get<SalesLead[]>(this.salesLeadsUrl);
  }

  addSalesLead(data):Observable<any> {
    const url = this.salesLeadsUrl;
    
    // emit this out to all components
    this.salesLeadPostSuccessful.emit(true);

    return this.http.post<any>(url, data, httpOptions);
  }

  deleteSalesLead(salesLead: SalesLead):Observable<SalesLead> {
    const url = `${this.salesLeadsUrl}/${salesLead.id}`;
    return this.http.delete<SalesLead>(url, httpOptions);
  }
}