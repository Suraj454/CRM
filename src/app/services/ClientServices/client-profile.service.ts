import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientProfile } from '../../page/Clients/client-profile/client-profile-interface'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  private baseUrl = 'http://localhost:8080'; // Update this if needed

  constructor(private http: HttpClient) {}

  getClientProfile(clientId: number): Observable<ClientProfile> {
    return this.http.get<ClientProfile>(`${this.baseUrl}/client/myService/${clientId}`);
  }
}
