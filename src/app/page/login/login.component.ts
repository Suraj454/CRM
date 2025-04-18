import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email : string = '';
  password : string ='';
  constructor(private router:Router,private loginService:LoginService){}


onSubmit() {
  if (this.email && this.password) {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response && response.userId) {
          console.log(response)
          console.log("Login Successful")

          localStorage.setItem('isLoggined', 'true');
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('username', response.userName);
          localStorage.setItem('role', response.role.roleName); // ✅ Store role

          // ✅ Role-based routing
          const role = response.role.roleName.toLowerCase();
          console.log(role);
          if (role === 'client') {
            this.router.navigate(['/clients']);
          } else if (role === 'saleperson') {
            this.router.navigate(['/leads']);
          } else if (role === 'marketing') {
            this.router.navigate(['/deals']);
          } else if (role === 'support') {
            this.router.navigate(['/support-dashboard']);
          } else {
            this.router.navigate(['/dashboard']); 
          }
        } else {
          alert('Invalid email or password.');
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Something went wrong. Please try again later.');
      }
    });
  } else {
    alert('Please enter both email and password.');
  }
}


}

