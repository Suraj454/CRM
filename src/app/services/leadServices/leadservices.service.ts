// leadservices.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../../page/Leads/leads/lead-interface';
import { LeadSourceInterface } from '../../page/Leads/lead-source/lead-source-interface';

@Injectable({
  providedIn: 'root'
})
export class LeadservicesService {
  private baseUrl = 'http://localhost:8080/leads';

  constructor(private http: HttpClient) {}

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.baseUrl}/leadsall`);  }

    addLead(leadId: number): Observable<Lead> {
      return this.http.post<Lead>(`${this.baseUrl}/add/${leadId}`, null);
    }
}
