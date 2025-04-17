import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
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

//   onSubmit(){

//     if(this.email && this.password ){
//       console.log(this.email,this.password)
//       alert("Login Sucsess")
//       this.loginService.login(this.email, this.password).
//       subscribe({
//         next : (response:any)=>{
//           if (response) {
//             localStorage.setItem('isLoggined', 'true');
//             this.router.navigate(['/client']); // redirect only on success
//           } else {
//             console.log('Login failed: Invalid credentials');
//             alert('Invalid email or password.');
//           }
//         },
//         error:(error:any)=>{
//           console.log("login failed",error);
//         }
//       })
//     }
//   }
// 

onSubmit() {
  if (this.email && this.password) {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response === true) {
          alert('Login successful!');
          localStorage.setItem('isLoggined', 'true');
          this.router.navigate(['/dashboard']); // Redirect to dashboard
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

