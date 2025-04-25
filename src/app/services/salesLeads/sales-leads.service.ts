import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesLeadInterface } from '../../page/Deals/salesleads/sales-lead-interface'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class SalesLeadsService {

  private apiUrl = 'http://localhost:8080/salesLeads/qualified'; // Adjust the base URL as per your environment settings

  constructor(private http: HttpClient) {}

  // Change the return type to Observable<SalesLeadInterface[]>
  getQualifiedLeads(): Observable<SalesLeadInterface[]> {
    return this.http.get<SalesLeadInterface[]>(this.apiUrl);  // Fetch qualified leads from the API
  }
}