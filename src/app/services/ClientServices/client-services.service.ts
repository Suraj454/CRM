import { Injectable } from '@angular/core';
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../../page/Clients/client-service/client-service-interface';
import { Observable } from 'rxjs';
import { SalesLeadInterface } from '../../page/Deals/salesleads/sales-lead-interface';
import { Lead } from '../../page/Leads/leads/lead-interface';
@Injectable({
  providedIn: 'root'
})
export class ClientServicesService   {

  private baseUrl = 'http://localhost:8080'; // Adjust the base URL as per your environment settings  
  
  constructor(private http: HttpClient) {}

  getClientServiceById(clientId: number): Observable<ClientService> {
    return this.http.get<ClientService>(`${this.baseUrl}/client/myService/${clientId}`);  // Use dynamic clientId
  }


  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/getAll`);
  }
 
}