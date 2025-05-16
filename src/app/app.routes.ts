import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee/employee-list.component';
import { EmployeeFormComponent } from './pages/employee/employee-form.component';

export const routes: Routes = [
    {path: '', component: EmployeeListComponent},
    {path:'employee-form' , component: EmployeeFormComponent},
    { path: 'employee-form/:id', component: EmployeeFormComponent },
    {path:'employee-list' , component: EmployeeListComponent},
    { path: '', redirectTo: 'employee-list', pathMatch: 'full' }
];
