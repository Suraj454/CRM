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
import { DealDashboardComponent } from './page/Deals/deal-dashboard/deal-dashboard.component';
import { AdminServices } from './page/admin-services/admin-services-interface';
import { authGuard } from './guards/auth.guard';
import { AdminServicesComponent } from './page/admin-services/admin-services.component';


// export const routes: Routes = [
//     {path:'login', component:LoginComponent},
//     {path:'signup', component: SignUpComponent},
//     {path:'',component:MainLayoutComponent,
//         children:[
//             {path:'dashboard',component:DashboardComponent},
//             {path:'clients',component:ClientComponent},
//             {path:'deals', component:DealsComponent},
//             {path:'leads', component:LeadsComponent},
//             {path:'marketing/dashboard', component:LeadDashboardComponent},
//             {path:'leadsource', component:LeadSourceComponent},
//             {path:'leadreports', component:LeadReportsComponent},
//             {path:'sales/dashboard', component:DealDashboardComponent},
//             {path:'sales/leads', component:SalesleadsComponent},
//             {path:'negotiation',component:NegotiationComponent},
//             {path:'client/profile', component:ClientProfileComponent},
//             {path:'client/service', component:ClientServiceComponent},
//             {path:'client/support', component:ClientSupportComponent}

//         ]
//     },
export const routes: Routes = [

{ path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { 
      path: '', 
      component: MainLayoutComponent,
      children: [
        { 
          path: 'dashboard', 
          component: DashboardComponent, 
          canActivate: [authGuard], 
          data: { roles: ['admin', 'marketing', 'SalesPerson'] } 
        },
        { 
          path: 'clients', 
          component: ClientComponent, 
          canActivate: [authGuard], 
          data: { roles: ['admin', 'SalesPerson'] }
        },
        { 
          path: 'deals', 
          component: DealsComponent, 
          canActivate: [authGuard], 
          data: { roles: ['admin', 'SalesPerson'] } 
        },
        { 
          path: 'leads', 
          component: LeadsComponent, 
          canActivate: [authGuard], 
          data: { roles: ['admin', 'marketing'] }
        },
        { 
          path: 'marketing/dashboard', 
          component: LeadDashboardComponent, 
          canActivate: [authGuard], 
          data: { roles: ['marketing'] } 
        },
        { 
          path: 'leadsource', 
          component: LeadSourceComponent, 
          canActivate: [authGuard], 
          data: { roles: ['marketing', 'admin'] }
        },
        { 
          path: 'leadreports', 
          component: LeadReportsComponent, 
          canActivate: [authGuard], 
          data: { roles: ['marketing'] }
        },
        { 
          path: 'sales/dashboard', 
          component: DealDashboardComponent, 
          canActivate: [authGuard], 
          data: { roles: ['SalesPerson'] } 
        },
        { 
          path: 'sales/leads', 
          component: SalesleadsComponent, 
          canActivate: [authGuard], 
          data: { roles: ['SalesPerson'] }
        },
        { 
          path: 'negotiation', 
          component: NegotiationComponent, 
          canActivate: [authGuard], 
          data: { roles: ['SalesPerson'] }
        },
        { 
          path: 'client/profile', 
          component: ClientProfileComponent, 
          canActivate: [authGuard], 
          data: { roles: ['client'] }
        },
        { 
          path: 'client/service', 
          component: ClientServiceComponent, 
          canActivate: [authGuard], 
          data: { roles: ['client'] }
        },
        { 
          path: 'client/support', 
          component: ClientSupportComponent, 
          canActivate: [authGuard], 
          data: { roles: ['client'] }
        },
        {
          path: 'admin/services',
          component: AdminServicesComponent,
          canActivate: [authGuard],
          data: { roles: ['admin'] }
        }
      ]
    },
    { path: '**', redirectTo: '/login' }
];





