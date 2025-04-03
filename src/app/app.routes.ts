import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ClientComponent } from './page/client/client.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CompaniesComponent } from './page/companies/companies.component';
import { DealsComponent } from './page/deals/deals.component';
import { LeadsComponent } from './page/leads/leads.component';
import { TasksComponent } from './page/tasks/tasks.component';


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'',component:MainLayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'clients',component:ClientComponent},
            {path:'companies', component:CompaniesComponent},
            {path:'deals', component:DealsComponent},
            {path:'leads', component:LeadsComponent},
            {path:'tasks', component:TasksComponent}
        ]
    }


];
