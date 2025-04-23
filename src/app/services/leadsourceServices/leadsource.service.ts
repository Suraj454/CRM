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

   // ✅ Add this method
  //  deleteLeadSource(id: number): Observable<void> {
  //   console.log(id);
  //   return this.http.delete<void>(`${this.leadSourceUrl}/${id}`);
  // }

  deleteLeadSource(id: number): Observable<void> {
    console.log(id);
    return this.http.delete<void>(`${this.leadSourceUrl}${id}`);
}

  // ✅ Optional: Add update method if editing is enabled
  updateLeadSource(id: number, leadSource: LeadSourceInterface): Observable<LeadSourceInterface> {
    console.log(id);
    return this.http.put<LeadSourceInterface>(`${this.leadSourceUrl}edit/${id}`, leadSource);
  
  }
}

 
