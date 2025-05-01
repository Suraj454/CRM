import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminServices } from '../../page/admin-services/admin-services-interface'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private baseUrl = 'http://localhost:8080/service';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<AdminServices[]> {
    return this.http.get<AdminServices[]>(`${this.baseUrl}/all`);
  }
}
