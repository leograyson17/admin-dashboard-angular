import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
// import { UserComponent } from './user/home.component';

export const routes: Routes = [
    { 'path': '', component: DashboardComponent },
    { 'path': 'user', component: UserComponent },
    { 'path': 'form', component: FormComponent },
    { 'path': 'dashboard', component: DashboardComponent },
];
