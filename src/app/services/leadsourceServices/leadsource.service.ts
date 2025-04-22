import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeadSourceInterface } from '../../page/Leads/lead-source/lead-source-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsourceService {

  private leadSourceUrl = 'http://localhost:8080/leadsource/';

  constructor(private http: HttpClient) { }
  getLeadSources(): Observable<LeadSourceInterface[]> {
    return this.http.get<LeadSourceInterface[]>(this.leadSourceUrl+'all');
  }
  createLeadSource(leadSource:LeadSourceInterface):Observable<LeadSourceInterface>{
    return this.http.post<LeadSourceInterface>(this.leadSourceUrl+'add',leadSource)
  }

 }
