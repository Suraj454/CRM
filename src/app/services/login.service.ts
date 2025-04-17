import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(email:string,password:string) {
    console.log(email,password)
    return this.http.post(this.loginUrl, {email,password});
  }
}
