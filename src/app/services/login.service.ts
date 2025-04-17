import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/Login';

  constructor(private http: HttpClient) {}

  // login(email:string,password:string) {
  //   console.log(email,password)
  //   return this.http.post(this.loginUrl, {email,password});
  // }
  
  
  login(email: string, password: string) {
    console.log(email, password);
    return this.http.post(this.loginUrl, {
      emailId: email,   // ✅ this must match your Java field name
      password: password
    });
  }

}
