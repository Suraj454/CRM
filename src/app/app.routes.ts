import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ClientComponent } from './page/Clients/client/client.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DealsComponent } from './page/Deals/deals/deals.component';
import { LeadsComponent } from './page/Leads/leads/leads.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { LeadSourceComponent } from './page/Leads/lead-source/lead-source.component';
import { LeadDashboardComponent } from './page/Leads/lead-dashboard/lead-dashboard.component';
import { LeadReportsComponent } from './page/Leads/lead-reports/lead-reports.component';
import { SalesleadsComponent } from './page/Deals/salesleads/salesleads.component';
import { NegotiationComponent } from './page/Deals/negotiation/negotiation.component';
import { ClientServiceComponent } from './page/Clients/client-service/client-service.component';
import { ClientProfileComponent } from './page/Clients/client-profile/client-profile.component';
import { ClientSupportComponent } from './page/Clients/client-support/client-support.component';


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup', component: SignUpComponent},
    {path:'',component:MainLayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'clients',component:ClientComponent},
            {path:'deals', component:DealsComponent},
            {path:'leads', component:LeadsComponent},
            {path:'leadsource', component:LeadSourceComponent},
            {path:'lead/dashboard', component:LeadDashboardComponent},
            {path:'leadreports', component:LeadReportsComponent},
            {path:'sales/leads', component:SalesleadsComponent},
            {path:'negotiation',component:NegotiationComponent},
            {path:'client/profile', component:ClientProfileComponent},
            {path:'client/service', component:ClientServiceComponent},
            {path:'client/support', component:ClientSupportComponent}

        ]
    },

    {path:'**',redirectTo:"/login"}
];



