import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/loginservices/login.service';
import { Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

    username: string = '';
  email: string = '';
  password: string = '';
  cfpassword: string = '';
  roleId: number | null = null;

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    // Basic frontend validation
    if (!this.username.trim() || !this.email.trim() || !this.password.trim() || !this.roleId) {
      alert('All fields are required!');
      return;
    }

    // Email format validation (basic)
    const trimmedEmail = this.email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    // // Password match check
    // if (this.password !== this.cfpassword) {
    //   alert('Passwords do not match.');
    //   return;
    // }

    // Prepare the user data
    const userData = {
      userName: this.username,
      emailId: trimmedEmail,
      password: this.password,
      roleId: this.roleId
    };

    // Call backend API
    this.loginService.signup(this.username, this.email, this.password, this.roleId).subscribe({
      next: (res) => {
        // Success redirect
        this.router.navigate(['/login']);
        console.log('Signup successful:', res);
      },
      error: (err) => {
        console.error('Signup failed:', err);
        alert('Something went wrong during signup.');
      }
    });
  }
}
