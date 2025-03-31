import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'admin', component:AdminComponent}
  

];
