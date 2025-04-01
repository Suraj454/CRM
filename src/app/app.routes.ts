import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ClientComponent } from './page/client/client.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'',component:MainLayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'clients',component:ClientComponent}
        ]
    }


];
