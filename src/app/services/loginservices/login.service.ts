import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/Login';
  private signupUrl = 'http://localhost:8080/Signup';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log(email, password);
    return this.http.post(this.loginUrl, {
      emailId: email,   // ✅ this must match your Java field name
      password: password
    });
  }

  signup(username: string, email: string, password: string, roleId: number) {
    console.log(username, email, password, roleId);
    return this.http.post(this.signupUrl, {
      userName: username,
      emailId: email,
      password: password,
        role: roleId
    });
  }
  

}
