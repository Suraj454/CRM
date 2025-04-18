import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username : string = '';
  email : string = '';
  password : string ='';
  cfpassword : string = '';
  roleId : number = 0;
  constructor(private router:Router,private loginService:LoginService){}

//   onSubmit() {
//     if (!this.username || !this.email || !this.password ) {
//       alert('All fields are required!');
//       return;
//     }

//     // if (this.password !== this.cfpassword) {
//     //   alert('Passwords do not match.');
//     //   return;
//     // }

//     const userData = {
//       userName: this.username,
//       emailId: this.email,
//       password: this.password,
//       role: this.role
//     };

//     this.loginService.signup(this.username, this.email, this.password,).subscribe({
//       next: (response: any) => {
//         console.log('Signup response:', response); // ✅ just log to check data
//         alert('Signup successful!');
//         this.router.navigate(['/login']);
//       },
//       error: (err) => {
//         console.error('Signup failed', err);
//         alert('Something went wrong during signup. Please try again later.');
//       }
//     });
//   }
// }
   

onSubmit() {
  if (!this.username || !this.email || !this.password  || !this.roleId) {
    alert('All fields are required!');
    return;
  }

  // if (this.password !== this.cfpassword) {
  //   alert('Passwords do not match.');
  //   return;
  // }

  const userData = {
    userName: this.username,
    emailId: this.email,
    password: this.password,
    role: {
      roleId: this.roleId  // 👈 Send nested role object
    }
  };

  this.loginService.signup(this.username, this.email, this.password, this.roleId).subscribe({
    next: (res) => {
      alert('Signup successful!');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error('Signup failed:', err);
      alert('Something went wrong during signup.');
    }
  });
}
}
